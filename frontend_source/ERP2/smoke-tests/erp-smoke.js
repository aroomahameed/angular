const assert = require('assert');

function loadPlaywright() {
  try {
    return require('playwright');
  } catch (error) {
    return require('C:/Users/HP/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
  }
}

const { chromium } = loadPlaywright();

const APP_URL = process.env.ERP_APP_URL || 'http://127.0.0.1:4200';
const API_URL = process.env.ERP_API_URL || 'http://127.0.0.1:8000/api';
const USERNAME = process.env.ERP_TEST_USER || 'admin';
const PASSWORD = process.env.ERP_TEST_PASSWORD || 'password';

const pageSmokeList = [
  '/dashboard',
  '/settings/countries',
  '/settings/users',
  '/settings/role-settings',
  '/merchandise/materials',
  '/purchaseorder/purchaseorders',
  '/productionorder/po',
  '/fit/projects',
  '/lab/labballs',
];

async function requestJson(url, options = {}) {
  const response = await fetch(url, options);
  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${options.method || 'GET'} ${url} failed with ${response.status}: ${text}`);
  }
  return text ? JSON.parse(text) : null;
}

async function checkApiHealth() {
  const [materials, seasons] = await Promise.all([
    requestJson(`${API_URL}/materials/`),
    requestJson(`${API_URL}/material-seasons/`),
  ]);

  assert(Array.isArray(materials), 'materials API should return an array');
  assert(Array.isArray(seasons), 'material seasons API should return an array');

  if (materials.length) {
    const first = materials[0];
    const before = materials.length;
    const updated = await requestJson(`${API_URL}/materials/${first.id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...first, remarks: `Smoke tested ${new Date().toISOString()}` }),
    });
    const after = await requestJson(`${API_URL}/materials/`);
    assert.strictEqual(after.length, before, 'material update should not create a duplicate row');
    assert.strictEqual(updated.id, first.id, 'material update should return the same id');
  }
}

async function login(page) {
  await page.goto(`${APP_URL}/login`, { waitUntil: 'domcontentloaded' });
  await page.fill('input[name="username"]', USERNAME);
  await page.fill('input[name="password"]', PASSWORD);
  await Promise.all([
    page.waitForURL(url => !url.pathname.includes('/login'), { timeout: 15000 }),
    page.click('button[type="submit"]'),
  ]);
  assert(page.url().includes('/dashboard'), 'login should redirect to dashboard');
}

async function checkPageLoads(page, route) {
  await page.goto(`${APP_URL}${route}`, { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  const bodyText = await page.locator('body').innerText({ timeout: 10000 });
  assert(!bodyText.includes('Cannot GET'), `${route} should be served by the SPA`);
  assert(!bodyText.includes('ERP Login'), `${route} should be accessible after login`);
}

async function checkMaterialsUi(page) {
  await page.goto(`${APP_URL}/merchandise/materials`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('smart-table table', { timeout: 15000 });
  await page.waitForSelector('smart-table tbody tr', { timeout: 15000 });

  const visibleImages = await page.locator('smart-table tbody img').evaluateAll(images =>
    images.filter(image => image.complete && image.naturalWidth > 0).length
  );
  assert(visibleImages > 0, 'materials table should display at least one loaded image');

  await page.locator('smart-table tbody button[tooltip="edit"]').first().click();
  await page.waitForSelector('smmat-material-form img', { timeout: 10000 });
  const formImageLoaded = await page.locator('smmat-material-form img').first().evaluate(image =>
    image.complete && image.naturalWidth > 0
  );
  assert(formImageLoaded, 'material edit form should display a loaded image preview');
}

async function run() {
  await checkApiHealth();

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const consoleErrors = [];
  const failedRequests = [];

  page.on('console', message => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });
  page.on('requestfailed', request => {
    const url = request.url();
    const importantResourceTypes = ['document', 'script', 'stylesheet', 'xhr', 'fetch'];
    if ((url.startsWith(APP_URL) || url.startsWith(API_URL)) && importantResourceTypes.includes(request.resourceType())) {
      failedRequests.push(`${request.method()} ${url} ${request.failure() && request.failure().errorText}`);
    }
  });

  try {
    await login(page);
    for (const route of pageSmokeList) {
      await checkPageLoads(page, route);
    }
    await checkMaterialsUi(page);
  } finally {
    await browser.close();
  }

  assert.strictEqual(failedRequests.length, 0, `browser requests failed:\n${failedRequests.join('\n')}`);

  const unexpectedErrors = consoleErrors.filter(error =>
    !error.includes('favicon') &&
    !error.includes('DevTools')
  );
  assert.strictEqual(unexpectedErrors.length, 0, `console errors found:\n${unexpectedErrors.join('\n')}`);

  console.log('ERP smoke tests passed.');
}

run().catch(error => {
  console.error(error.stack || error);
  process.exit(1);
});

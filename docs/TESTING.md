# Testing Guide

The fastest useful testing approach for this ERP is a layered smoke-first strategy.

## Fast Smoke Test

Run:

```powershell
cd frontend_source/ERP2
npm run smoke
```

This test uses Playwright to check the live frontend and backend together.

It verifies:

- Backend material API responds.
- Backend material season API responds.
- Material update does not create duplicate rows.
- Login works with the demo admin account.
- Dashboard opens after login.
- Important ERP pages load.
- Material table images render.
- Material edit form image preview renders.
- Critical browser request and console failures are detected.

## Build Test

Run:

```powershell
cd frontend_source/ERP2
npm run build
```

This catches Angular compile, template, and TypeScript problems.

## Backend Syntax Test

Run:

```powershell
cd ERP2/backend
python -m py_compile api_server.py
```

This catches Python syntax errors before starting the API server.

## Manual Business Checks

After smoke tests pass, manually verify:

- Role settings save and update menu visibility.
- User creation and role assignment.
- Material create/edit with image upload.
- Material season create/edit from inside a material.
- Purchase order create/edit.
- Production order create/edit.
- FIT material edit.
- Lab data edit.
- Article hierarchy dependent dropdowns.

## Recommended Future Tests

- Add Playwright tests for purchase order create/edit.
- Add Playwright tests for production order head/sub/detail edit.
- Add Playwright tests for role permission save and menu filtering.
- Add API tests around every critical PUT endpoint to prevent duplicate creation.
- Add CI workflow once the repository is pushed to GitHub.

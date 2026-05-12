# Forward Sports ERP Frontend

This is the active Angular frontend for the Forward Sports ERP modernization project.

## Stack

- Angular 8
- NgRx store/effects/entity
- Bootstrap/SmartAdmin-style layout
- Shared ERP table, form, modal, panel, and navigation components
- Role-aware menu authorization
- Playwright smoke testing through `npm run smoke`

## Run

Install dependencies:

```powershell
npm ci --legacy-peer-deps
```

Build:

```powershell
npm run build
```

Run development server:

```powershell
npm start
```

Or serve the built SPA:

```powershell
python spa_server.py
```

Open:

```text
http://127.0.0.1:4200
```

The frontend expects the backend API at:

```text
http://127.0.0.1:8000/api
```

## Demo Login

```text
admin / password
superadmin / password
user / password
```

## Important Feature Areas

- `src/app/core/auth` - authentication, guards, interceptors, role models.
- `src/app/features/dashboard` - KPI dashboard.
- `src/app/features/settings` - countries, currencies, users, role settings, and ERP setup.
- `src/app/features/merchandise` - materials, subcategories, vendors, UOM, material seasons.
- `src/app/features/article` - article hierarchy and article master data.
- `src/app/features/purchaseorder` - purchase order workflows.
- `src/app/features/productionorder` - production order workflows.
- `src/app/features/fit` - FIT projects and material tests.
- `src/app/features/lab` - lab ball/test screens.
- `src/app/shared` - reusable table, forms, modals, panels, and navigation.

## Testing

Run the fast smoke suite:

```powershell
npm run smoke
```

This checks login, key page loading, material API updates, and material image rendering.

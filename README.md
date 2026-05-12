# Forward Sports ERP Modernization

Forward Sports ERP Modernization is a recovered and upgraded enterprise resource planning application built from an old Angular ERP project. The repository contains an Angular frontend, a working Python API backend, SQLite-backed demo persistence, authentication, role-based menu authorization, and smoke testing for the most important business screens.

## Repository Layout

```text
.
├── ERP2/
│   ├── backend/                 # Python API server, demo data seeding, backend docs
│   └── src/                     # Original/archived Angular source kept for reference
├── frontend_source/
│   └── ERP2/                    # Active Angular application source
│       ├── src/app/features/    # ERP feature modules and complex business views
│       ├── src/app/core/auth/   # Authentication, guards, role permission support
│       ├── src/app/shared/      # Shared layout, tables, forms, panels, navigation
│       └── smoke-tests/         # Fast Playwright smoke tests
└── README.md
```

The active frontend is:

```text
frontend_source/ERP2
```

The active backend is:

```text
ERP2/backend
```

## Main Capabilities

- Dashboard with KPI-style production metrics.
- Login and token-based authentication.
- User, admin, and super admin roles.
- Role settings screen for menu-level authorization.
- Role-aware sidebar and settings menu.
- User management screen for creating login accounts and assigning roles.
- Master data modules for settings, customers, vendors, warehouse, article, merchandise, purchase order, production order, FIT, and lab workflows.
- Generic Python REST API that supports the existing Angular service contract.
- SQLite demo persistence for fast local development.
- Relation hydration for dependent dropdowns and edit forms.
- Multipart form handling for material image upload.
- Fast smoke test suite for login, page loading, API update behavior, and material image rendering.

## Demo Login

All demo users use the same password:

```text
password
```

Available accounts:

```text
user
admin
superadmin
```

## Backend

The backend is a standard-library Python HTTP API. It stores records in SQLite locally and exposes REST endpoints under:

```text
http://127.0.0.1:8000/api
```

Supported API shape:

```text
GET    /api/<resource>/
POST   /api/<resource>/
GET    /api/<resource>/<id>/
PUT    /api/<resource>/<id>/
PATCH  /api/<resource>/<id>/
DELETE /api/<resource>/<id>/
```

Run the backend:

```powershell
cd ERP2/backend
python api_server.py
```

If system Python is not available, use the included scripts documented in:

```text
ERP2/backend/README.md
```

## Frontend

The frontend is an Angular 8 application using NgRx, Bootstrap, SmartAdmin-style layout components, and feature modules.

Install dependencies:

```powershell
cd frontend_source/ERP2
npm ci --legacy-peer-deps
```

Build:

```powershell
npm run build
```

Run with Angular dev server:

```powershell
npm start
```

Or run the static SPA server after building:

```powershell
python spa_server.py
```

Frontend URL:

```text
http://127.0.0.1:4200
```

## Testing

The fastest full-system confidence check is the smoke suite:

```powershell
cd frontend_source/ERP2
npm run smoke
```

The smoke test verifies:

- API health for materials and material seasons.
- Material update does not create duplicate records.
- Login redirects to the dashboard.
- Core ERP pages load after authentication.
- Materials table image rendering.
- Material edit form image preview.
- Browser console and critical request failures.

Build verification:

```powershell
cd frontend_source/ERP2
npm run build
```

Python syntax verification:

```powershell
cd ERP2/backend
python -m py_compile api_server.py
```

## Complex Views

Detailed notes for major ERP screens and workflows are documented in:

```text
docs/COMPLEX_VIEWS.md
```

The most important complex areas are:

- Purchase orders and dependent purchase master data.
- Production order header, sub-order, and detail relationships.
- Merchandise materials, image upload, and material seasons.
- Article hierarchy with client, model, article, size, and production line dependencies.
- FIT and lab material/test workflows.
- Role settings and menu authorization.

## Local Data

The SQLite database and logs are local runtime artifacts and are ignored by Git:

```text
ERP2/backend/data/
*.sqlite3
*.log
```

This keeps GitHub clean and avoids committing local test data.

## Current Status

The project currently runs locally with:

- Backend API on `http://127.0.0.1:8000/api`
- Frontend app on `http://127.0.0.1:4200`
- Passing Angular build
- Passing smoke tests

## Notes For Future Upgrade

This project has been stabilized while keeping the existing Angular 8 architecture. A future modernization can move gradually toward:

- New Angular version.
- Stronger typed DTOs for the API.
- Real SQL Server integration.
- Full Playwright regression coverage.
- CI/CD pipeline for GitHub Actions.

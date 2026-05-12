# Complex ERP Views

This document explains the main business screens that usually need extra attention during testing, demos, and future development.

## Authentication And Authorization

Location:

```text
frontend_source/ERP2/src/app/core/auth
frontend_source/ERP2/src/app/shared/layout/auth
frontend_source/ERP2/src/app/features/settings/role-settings
frontend_source/ERP2/src/app/features/settings/users
```

Purpose:

- Login users with demo credentials.
- Store current user/token locally.
- Protect routes with the auth guard.
- Filter menu items based on role permissions.
- Allow admin and super admin users to manage role menu access.
- Allow user creation and role assignment.

Roles:

```text
user
admin
super_admin
```

Important checks:

- Login should redirect to `/dashboard`.
- Menu should not get stuck on role settings.
- Role settings should save permissions.
- Users screen should appear only for authorized roles.

## Dashboard

Location:

```text
frontend_source/ERP2/src/app/features/dashboard
```

Purpose:

- Shows KPI-style production data.
- Provides the first page after login.
- Gives a quick operational view for the ERP.

Important checks:

- Dashboard opens immediately after login.
- KPI cards and production data render without console errors.
- Page remains responsive on repeated navigation.

## Merchandise Materials

Location:

```text
frontend_source/ERP2/src/app/features/merchandise/materials
frontend_source/ERP2/src/app/features/merchandise/materialseasons
frontend_source/ERP2/src/app/features/store/merchandise/material
frontend_source/ERP2/src/app/features/store/merchandise/materialseason
```

Purpose:

- Maintain material master records.
- Upload and preview material images.
- Manage subcategory, sale UOM, base UOM, first season, release status, and development type.
- Add and edit material season pricing per material.

Important fixes already included:

- Edit forms normalize relation objects or plain IDs.
- Saved material images render in table and edit form.
- New image uploads are stored as displayable data URLs by the backend.
- Material update uses PUT and does not create duplicate rows.
- Money fields tolerate bad legacy text data without crashing the table.

Important checks:

- Material create works.
- Material edit loads existing dependent values.
- Image preview appears in table and form.
- Material Season add/edit opens from a material and saves against the correct material.

## Article Hierarchy

Location:

```text
frontend_source/ERP2/src/app/features/article
frontend_source/ERP2/src/app/features/store/article
```

Purpose:

- Manage article categories, ranges, seasons, cartons, article library, article materials, rates, and QCA data.
- Handle hierarchy between client, model, article, size, and production line.

Important checks:

- Client selection loads models.
- Model selection loads articles.
- Article selection loads sizes and production line data.
- Edit forms load saved dependent fields rather than blank dropdowns.

## Purchase Orders

Location:

```text
frontend_source/ERP2/src/app/features/purchaseorder
frontend_source/ERP2/src/app/features/store/purchaseorder
```

Purpose:

- Manage purchase order master and supporting setup such as taxes, other charges, transport modes, quotations, and purchase order detail records.

Important checks:

- Purchase order list loads quickly.
- Create and edit forms send POST/PUT correctly.
- Related vendor, currency, tax, and material dropdowns hydrate correctly.
- Updating an existing record should not create a new record.

## Production Orders

Location:

```text
frontend_source/ERP2/src/app/features/productionorder
frontend_source/ERP2/src/app/features/store/productionorder
```

Purpose:

- Manage production order heads, sub-orders, and details.
- Maintain customer, factory, article, size, quantity, and order status relationships.

Important checks:

- Production order header edit loads saved client/customer/factory fields.
- Sub-order and detail edit forms load saved article hierarchy fields.
- Quantity and status fields save without duplicate records.

## FIT

Location:

```text
frontend_source/ERP2/src/app/features/fit
frontend_source/ERP2/src/app/features/store/fit
```

Purpose:

- Manage FIT projects and material testing workflows.
- Link projects, materials, tests, versions, lab numbers, and status values.

Important checks:

- Projects load.
- Material test edit form loads the saved material and test data.
- Dependent material fields do not freeze the form.

## Lab

Location:

```text
frontend_source/ERP2/src/app/features/lab
frontend_source/ERP2/src/app/features/store/lab
```

Purpose:

- Manage lab ball/test data linked to article numbers and test definitions.

Important checks:

- Lab pages load after login.
- Article/test dropdowns hydrate correctly.
- Saved values display in edit forms.

## Shared Table, Forms, And Navigation

Location:

```text
frontend_source/ERP2/src/app/shared/custom-tables
frontend_source/ERP2/src/app/shared/forms
frontend_source/ERP2/src/app/shared/navigation
```

Purpose:

- Provide reusable tables, select controls, inputs, checkboxes, modal panels, and navigation.

Important fixes already included:

- Table nested value lookup is null-safe.
- Table search and sort tolerate missing relation objects.
- Table image columns use safe fallback images.
- Select components can receive either an ID or a hydrated relation object.
- Menu filtering is role-aware.

## Backend Generic API

Location:

```text
ERP2/backend/api_server.py
```

Purpose:

- Reconstruct the missing backend API contract expected by the Angular app.
- Provide generic CRUD endpoints for many ERP resources.
- Hydrate relation fields such as client, model, article, material, UOM, currency, season, factory, and customer.
- Seed demo users, permissions, and demo business records.

Important checks:

- `/api/` responds.
- `/api/materials/` responds with hydrated relation data.
- `/api/material-seasons/` responds.
- PUT updates existing records.
- Multipart image uploads save usable image data.

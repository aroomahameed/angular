# ERP2 Backend API

This is a working Python API reconstructed from the Angular services in this archive.

The original backend code was not present in `ERP2.rar`; only two Python generator scripts were included. The Angular app expects a REST API at:

```text
http://127.0.0.1:8000/api
```

The server in this folder implements that API shape:

- `GET /api/<resource>/`
- `POST /api/<resource>/`
- `GET /api/<resource>/<id>/`
- `PUT /api/<resource>/<id>/`
- `PATCH /api/<resource>/<id>/`
- `DELETE /api/<resource>/<id>/`

It stores records in SQLite by default so the API works immediately without installing packages.

## Run

Use the bundled Python runtime if system Python is not available:

```bat
backend\run_api.bat
```

Or run Python directly:

```powershell
& 'C:\Users\HP\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' .\backend\api_server.py
```

Then open:

```text
http://127.0.0.1:8000/api/
```

## Test With PowerShell

```powershell
Invoke-RestMethod -Method Post -Uri 'http://127.0.0.1:8000/api/currencies/' -ContentType 'application/json' -Body '{"name":"PKR","code":"PKR"}'
Invoke-RestMethod -Uri 'http://127.0.0.1:8000/api/currencies/'
```

## Seed Dummy Data

```bat
backend\seed_dummy_data.bat
```

This fills the local SQLite API database with demo countries, currencies, customers, materials, articles, warehouse data, purchase orders, production orders, lab/fit data, and finance records.

## SQL Server Note

The SQL Server schema/export was not included in the archive. Once you provide the database schema or backup, this API can be changed from generic SQLite record storage to real SQL Server tables and relationships.

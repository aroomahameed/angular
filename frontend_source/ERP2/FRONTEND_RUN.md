# ERP2 Frontend

This archive contains an Angular 8 source app and an already-built `dist/smartadmin-angular-seed` folder.

To run the existing built frontend:

```bat
run_frontend.bat
```

Then open:

```text
http://127.0.0.1:4200/
```

The frontend is configured to call the API at:

```text
http://127.0.0.1:8000/api
```

The source app still needs a dependency/runtime upgrade before it can be built with modern Node. The current app is Angular 8, while this machine has Node 24.

## Build From Source

Dependencies have been installed with:

```bat
npm.cmd ci --legacy-peer-deps
```

Build the Angular source:

```bat
npm.cmd run build
```

Run the Angular development server:

```bat
npm.cmd start
```

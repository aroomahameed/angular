from __future__ import annotations

import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse


ROOT = Path(__file__).resolve().parent / "dist" / "smartadmin-angular-seed"
HOST = os.environ.get("ERP_FRONTEND_HOST", "127.0.0.1")
PORT = int(os.environ.get("ERP_FRONTEND_PORT", "4200"))


class SpaHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def translate_path(self, path: str) -> str:
        requested = unquote(urlparse(path).path).lstrip("/")
        target = ROOT / requested
        if target.is_file():
            return str(target)
        return str(ROOT / "index.html")


def main() -> None:
    if not (ROOT / "index.html").exists():
        raise SystemExit(f"Built Angular app not found at {ROOT}")
    server = ThreadingHTTPServer((HOST, PORT), SpaHandler)
    print(f"ERP frontend running at http://{HOST}:{PORT}/")
    print(f"Serving: {ROOT}")
    server.serve_forever()


if __name__ == "__main__":
    main()

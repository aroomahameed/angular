from __future__ import annotations

import mimetypes
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse


ROOT = Path(__file__).resolve().parent / "dist" / "smartadmin-angular-seed"
HOST = os.environ.get("ERP_FRONTEND_HOST", "127.0.0.1")
PORT = int(os.environ.get("ERP_FRONTEND_PORT", "4200"))


class SpaHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path: str) -> str:
        parsed_path = unquote(urlparse(path).path).lstrip("/")
        requested = (ROOT / parsed_path).resolve()
        if ROOT not in requested.parents and requested != ROOT:
            return str(ROOT / "index.html")
        if requested.is_file():
            return str(requested)
        return str(ROOT / "index.html")

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, format: str, *args) -> None:
        return


def main() -> None:
    mimetypes.init()
    server = ThreadingHTTPServer((HOST, PORT), SpaHandler)
    server.serve_forever()


if __name__ == "__main__":
    main()

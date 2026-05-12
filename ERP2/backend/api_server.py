from __future__ import annotations

import base64
import cgi
import io
import json
import mimetypes
import os
import secrets
import sqlite3
import sys
from datetime import datetime, timezone
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import unquote, urlparse


BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DB_PATH = Path(os.environ.get("ERP_API_DB", DATA_DIR / "erp_api.sqlite3"))
HOST = os.environ.get("ERP_API_HOST", "127.0.0.1")
PORT = int(os.environ.get("ERP_API_PORT", "8000"))
MAX_BODY_BYTES = int(os.environ.get("ERP_API_MAX_BODY_BYTES", str(25 * 1024 * 1024)))

DEMO_USERS = {
    "user": {
        "id": 1,
        "username": "user",
        "password": "password",
        "name": "Demo User",
        "email": "user@example.com",
        "role": "user",
    },
    "admin": {
        "id": 2,
        "username": "admin",
        "password": "password",
        "name": "Demo Admin",
        "email": "admin@example.com",
        "role": "admin",
    },
    "superadmin": {
        "id": 3,
        "username": "superadmin",
        "password": "password",
        "name": "Super Admin",
        "email": "superadmin@example.com",
        "role": "super_admin",
    },
}

ALL_MENU_URLS = [
    "/dashboard",
    "/settings/role-settings",
    "/settings/users",
    "/settings/companys",
    "/settings/countries",
    "/settings/currencies",
    "/settings/regions",
    "/settings/factorycodes",
    "/settings/paymentterms",
    "/settings/departments",
    "/settings/vendorgroups",
    "/settings/vendors",
    "/merchandise/main",
    "/settings/uoms",
    "/warehouse/warehouses",
    "/warehouse/sections",
    "/warehouse/lines",
    "/warehouse/racks",
    "/customer/clients",
    "/customer/customers",
    "/customer/customeraccgroups",
    "/customer/customeraccdatas",
    "/customer/forwarders",
    "/customer/customerexportdatas",
    "/customer/customerlabelingdatas",
    "/customer/serviceidentifiers",
    "/purchaseorder/taxes",
    "/purchaseorder/poothercharges",
    "/purchaseorder/transportmodes",
    "/purchaseorder/quotations",
    "/purchaseorder/purchaseorders",
    "/article/articlecatagorys",
    "/article/ranges",
    "/article/seasons",
    "/article/cartons",
    "/article/article-library",
    "/article/articlemes",
    "/article/articlerates",
    "/article/articleqcas",
    "/productionorder/po",
    "/productionorder/pouploading",
    "/productionorder/delayreasoncodes",
    "/merchandise/materials",
    "/fit/test",
    "/fit/projects",
    "/lab/labballs",
]
DEFAULT_ROLE_PERMISSIONS = {
    "user": ["/settings/countries", "/settings/currencies"],
    "admin": [url for url in ALL_MENU_URLS if url != "/settings/companys"],
    "super_admin": ALL_MENU_URLS,
}

RELATION_COLLECTIONS = {
    "acc_group": "customer-account-groups",
    "article": "articles",
    "article_size": "article-size",
    "article_no": "articles",
    "base_uom": "uoms",
    "carton": "carton",
    "category": "categories",
    "client": "clients",
    "country": "countries",
    "currency": "currencies",
    "customer": "customers",
    "delay_reason": "delay-reasons",
    "factory": "factory-codes",
    "identifier": "service-identifier",
    "material": "materials",
    "material_name": "materials",
    "model": "models",
    "model_name": "models",
    "other_charges": "other-charges",
    "payment_term": "payment-terms",
    "po": "purchase-orders",
    "production_order": "production-order-heads",
    "production_order_Detail": "production-orders-details",
    "production_order_sub": "production-order-sub",
    "production_line": "article-pl",
    "purchase_order": "purchase-orders",
    "range": "ranges",
    "sale_uom": "uoms",
    "season": "seasons",
    "size": "article-size",
    "sub_category": "sub-categories",
    "tax": "taxes",
    "test": "fit-tests",
    "trans_mode": "transport-modes",
    "transport_mode": "transport-modes",
    "unit": "uoms",
    "uom": "uoms",
    "vendor": "vendors",
    "vendor_group": "vendor-groups",
}

DEMO_REPAIR_DATA = {
    "models": {
        1: {"client": 1, "season": 1, "range": 1, "category": 1, "factory": 1},
        2: {"client": 2, "season": 2, "range": 2, "category": 2, "factory": 2},
    },
    "articles": {
        1: {"client": 1, "model": 1},
        2: {"client": 2, "model": 2},
    },
    "article-size": {
        1: {"client": 1, "model": 1, "article": 1, "carton": 1, "unit": 1},
        2: {"client": 2, "model": 2, "article": 2, "carton": 2, "unit": 1},
    },
    "article-materials": {
        1: {"client": 1, "model": 1, "article": 1, "size": 1, "production_line": 1, "base_uom": 1},
        2: {"client": 2, "model": 2, "article": 2, "size": 2, "production_line": 2, "base_uom": 1},
    },
    "lab-balls": {
        1: {"article_no": 1},
        2: {"article_no": 2},
    },
    "projects": {
        1: {"lab_no": "LAB-001", "start_date": "2026-04-30", "end_date": "2026-05-15", "remarks": "Demo FIT project"},
        2: {"lab_no": "LAB-002", "start_date": "2026-05-01", "end_date": "2026-05-20", "remarks": "Material validation"},
    },
    "production-order-heads": {
        1: {
            "po_number": "PROD-2026-0001",
            "client": 1,
            "customer": 1,
            "factory": 1,
            "identifier": 1,
            "delay_reason": 1,
            "customer_order_no": "CO-001",
            "entry_date": "2026-04-30",
            "customer_req_date": "2026-05-15",
            "production_date": "2026-05-01",
            "delivery_date": "2026-05-20",
            "last_ship_date": "2026-05-25",
            "ship_mode": "By Sea",
            "payment_mode": "Collect",
            "order_type": "Production",
            "order_status": "Confirm",
            "mtfc_no": "MTFC-001",
            "lock_status": "Open",
            "description": "Demo production order",
        },
    },
    "materials": {
        1: {"sub_category": 1, "sale_uom": 1, "base_uom": 1, "category": 1, "subcategory": 1, "uom": 1},
        2: {"sub_category": 2, "sale_uom": 1, "base_uom": 1, "category": 2, "subcategory": 2, "uom": 1},
    },
    "production-order-sub": {
        1: {"production_order": 1, "model": 1, "article": 1, "status": True},
    },
    "production-orders-details": {
        1: {"production_order": 1, "production_order_sub": 1, "article_size": 1, "order_qty": 3000, "status": True},
        2: {"production_order": 1, "production_order_sub": 1, "article_size": 2, "order_qty": 2000, "status": True},
    },
}

DEMO_INSERT_DATA = {
    "article-pl": [
        {"id": 1, "name": "Main Stitching Line", "code": "APL-001", "client": 1, "model": 1, "article": 1, "size": 1, "status": True},
        {"id": 2, "name": "Thermo Bonding Line", "code": "APL-002", "client": 2, "model": 2, "article": 2, "size": 2, "status": True},
    ],
    "material-tests": [
        {"id": 1, "project": 1, "version": "V1", "lab_no": "LAB-001", "material_name": 1, "test_date": "2026-05-02", "test": 1, "test_status": "P", "status": True},
    ],
    "ball-tests": [
        {"id": 1, "project": 1, "version": "V1", "lab_no": "LAB-001", "model_name": 1, "test_date": "2026-05-03", "test": 2, "test_status": "P", "status": True},
    ],
}


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def ensure_record(conn: sqlite3.Connection, collection: str, data: dict[str, Any]) -> None:
    item_id = int(data["id"])
    now = utc_now()
    row = conn.execute(
        "SELECT data FROM records WHERE collection = ? AND id = ?",
        (collection, item_id),
    ).fetchone()
    if row:
        current = json.loads(row["data"])
        if not isinstance(current, dict):
            current = {"value": current}
        changed = False
        for key, value in data.items():
            if current.get(key) in (None, ""):
                current[key] = value
                changed = True
        if changed:
            conn.execute(
                "UPDATE records SET data = ?, updated_at = ? WHERE collection = ? AND id = ?",
                (json.dumps(current), now, collection, item_id),
            )
        return
    conn.execute(
        """
        INSERT INTO records (collection, id, data, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?)
        """,
        (collection, item_id, json.dumps(data), now, now),
    )


def repair_demo_data(conn: sqlite3.Connection) -> None:
    for collection, items in DEMO_REPAIR_DATA.items():
        for item_id, patch in items.items():
            ensure_record(conn, collection, {"id": item_id, **patch})
    for collection, rows in DEMO_INSERT_DATA.items():
        for row in rows:
            ensure_record(conn, collection, row)
    for collection in [*DEMO_REPAIR_DATA.keys(), *DEMO_INSERT_DATA.keys()]:
        max_id = conn.execute("SELECT MAX(id) AS max_id FROM records WHERE collection = ?", (collection,)).fetchone()["max_id"]
        if max_id:
            conn.execute(
                """
                INSERT INTO counters (collection, value)
                VALUES (?, ?)
                ON CONFLICT(collection) DO UPDATE SET value = MAX(counters.value, excluded.value)
                """,
                (collection, int(max_id)),
            )


def init_db() -> None:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(DB_PATH) as conn:
        conn.row_factory = sqlite3.Row
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS records (
                collection TEXT NOT NULL,
                id INTEGER NOT NULL,
                data TEXT NOT NULL,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL,
                PRIMARY KEY (collection, id)
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS counters (
                collection TEXT PRIMARY KEY,
                value INTEGER NOT NULL
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS role_permissions (
                role TEXT PRIMARY KEY,
                permissions TEXT NOT NULL,
                updated_at TEXT NOT NULL
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS auth_tokens (
                token TEXT PRIMARY KEY,
                username TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS auth_users (
                id INTEGER PRIMARY KEY,
                username TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                role TEXT NOT NULL,
                status INTEGER NOT NULL,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            )
            """
        )
        for user in DEMO_USERS.values():
            conn.execute(
                """
                INSERT INTO auth_users (id, username, password, name, email, role, status, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, 1, ?, ?)
                ON CONFLICT(username) DO NOTHING
                """,
                (
                    user["id"],
                    user["username"],
                    user["password"],
                    user["name"],
                    user["email"],
                    user["role"],
                    utc_now(),
                    utc_now(),
                ),
            )
        for role, permissions in DEFAULT_ROLE_PERMISSIONS.items():
            conn.execute(
                """
                INSERT INTO role_permissions (role, permissions, updated_at)
                VALUES (?, ?, ?)
                ON CONFLICT(role) DO NOTHING
                """,
                (role, json.dumps(permissions), utc_now()),
            )
        repair_demo_data(conn)


def normalize_collection(path: str) -> str:
    path = unquote(path).strip("/")
    if path.startswith("api/"):
        path = path[4:]
    return path.strip("/")


def split_collection_and_id(path: str) -> tuple[str, int | None]:
    collection = normalize_collection(path)
    if not collection:
        return "", None

    parts = collection.split("/")
    last = parts[-1]
    if last.isdigit():
        return "/".join(parts[:-1]), int(last)
    return collection, None


def get_conn() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def next_id(conn: sqlite3.Connection, collection: str) -> int:
    row = conn.execute(
        "SELECT value FROM counters WHERE collection = ?", (collection,)
    ).fetchone()
    value = int(row["value"]) + 1 if row else 1
    conn.execute(
        """
        INSERT INTO counters (collection, value)
        VALUES (?, ?)
        ON CONFLICT(collection) DO UPDATE SET value = excluded.value
        """,
        (collection, value),
    )
    return value


def related_record(conn: sqlite3.Connection, collection: str, value: Any, depth: int) -> Any:
    if isinstance(value, dict):
        return value
    if depth <= 0:
        return value
    if isinstance(value, bool) or value in (None, ""):
        return value
    try:
        record_id = int(value)
    except (TypeError, ValueError):
        return value
    row = conn.execute(
        "SELECT * FROM records WHERE collection = ? AND id = ?",
        (collection, record_id),
    ).fetchone()
    return row_to_record(row, conn, hydrate=True, depth=depth - 1) if row else value


def hydrate_relations(conn: sqlite3.Connection, data: dict[str, Any], depth: int = 2) -> dict[str, Any]:
    hydrated = dict(data)
    for field, collection in RELATION_COLLECTIONS.items():
        if field in hydrated:
            hydrated[field] = related_record(conn, collection, hydrated[field], depth)
    return hydrated


def row_to_record(row: sqlite3.Row, conn: sqlite3.Connection | None = None, hydrate: bool = True, depth: int = 2) -> dict[str, Any]:
    data = json.loads(row["data"])
    if not isinstance(data, dict):
        data = {"value": data}
    data["id"] = int(row["id"])
    if hydrate and conn is not None:
        return hydrate_relations(conn, data, depth)
    return data


def parse_json_body(handler: BaseHTTPRequestHandler) -> Any:
    content_length = int(handler.headers.get("Content-Length", "0") or "0")
    if content_length > MAX_BODY_BYTES:
        raise ValueError(f"Request body is too large. Limit is {MAX_BODY_BYTES} bytes.")
    if content_length == 0:
        return {}

    raw = handler.rfile.read(content_length)
    content_type = handler.headers.get("Content-Type", "")
    if "multipart/form-data" in content_type:
        form = cgi.FieldStorage(
            fp=io.BytesIO(raw),
            environ={
                "REQUEST_METHOD": "POST",
                "CONTENT_TYPE": content_type,
                "CONTENT_LENGTH": str(len(raw)),
            },
            keep_blank_values=True,
        )
        payload: dict[str, Any] = {}
        for key in form.keys():
            field = form[key]
            if isinstance(field, list):
                field = field[0]
            if field.filename:
                file_bytes = field.file.read()
                if field.type and field.type.startswith("image/") and len(file_bytes) <= 2 * 1024 * 1024:
                    encoded = base64.b64encode(file_bytes).decode("ascii")
                    payload[key] = f"data:{field.type};base64,{encoded}"
                else:
                    payload[key] = field.filename
                payload[f"{key}_filename"] = field.filename
                payload[f"{key}_content_type"] = field.type
                payload[f"{key}_size"] = len(file_bytes)
            else:
                payload[key] = field.value
        return payload

    if not raw:
        return {}
    try:
        return json.loads(raw.decode("utf-8"))
    except json.JSONDecodeError as exc:
        raise ValueError(f"Invalid JSON body: {exc.msg}") from exc


def public_user(user: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": int(user["id"]),
        "username": user["username"],
        "name": user["name"],
        "email": user["email"],
        "role": user["role"],
        "status": bool(user.get("status", True)),
    }


def user_row_to_dict(row: sqlite3.Row) -> dict[str, Any]:
    return {
        "id": int(row["id"]),
        "username": row["username"],
        "password": row["password"],
        "name": row["name"],
        "email": row["email"],
        "role": row["role"],
        "status": bool(row["status"]),
    }


def get_user_by_username(username: str) -> dict[str, Any] | None:
    init_db()
    with get_conn() as conn:
        row = conn.execute("SELECT * FROM auth_users WHERE username = ?", (username,)).fetchone()
    return user_row_to_dict(row) if row else None


def list_auth_users() -> list[dict[str, Any]]:
    init_db()
    with get_conn() as conn:
        rows = conn.execute("SELECT * FROM auth_users ORDER BY id").fetchall()
    return [public_user(user_row_to_dict(row)) for row in rows]


def save_token(token: str, username: str) -> None:
    init_db()
    with get_conn() as conn:
        conn.execute(
            "INSERT OR REPLACE INTO auth_tokens (token, username, created_at) VALUES (?, ?, ?)",
            (token, username, utc_now()),
        )


def get_user_by_token(token: str) -> dict[str, Any] | None:
    init_db()
    with get_conn() as conn:
        row = conn.execute("SELECT username FROM auth_tokens WHERE token = ?", (token,)).fetchone()
    if not row:
        return None
    return get_user_by_username(row["username"])


def delete_token(token: str) -> None:
    init_db()
    with get_conn() as conn:
        conn.execute("DELETE FROM auth_tokens WHERE token = ?", (token,))


def get_role_permissions() -> dict[str, list[str]]:
    init_db()
    with get_conn() as conn:
        rows = conn.execute("SELECT role, permissions FROM role_permissions").fetchall()
    permissions = {role: list(values) for role, values in DEFAULT_ROLE_PERMISSIONS.items()}
    for row in rows:
        try:
            permissions[row["role"]] = json.loads(row["permissions"])
        except json.JSONDecodeError:
            permissions[row["role"]] = DEFAULT_ROLE_PERMISSIONS.get(row["role"], [])
    for role in ("user", "admin"):
        if "/dashboard" not in permissions[role]:
            permissions[role].append("/dashboard")
    for required in ("/settings/role-settings", "/settings/users"):
        if required not in permissions["admin"]:
            permissions["admin"].append(required)
    permissions["admin"] = sorted(set(permissions["admin"]))
    permissions["super_admin"] = ALL_MENU_URLS
    return permissions


def user_can_manage_permissions(user: dict[str, Any] | None) -> bool:
    return bool(user and user.get("role") in {"admin", "super_admin"})


def validate_user_payload(payload: dict[str, Any], require_password: bool) -> tuple[dict[str, Any] | None, str | None]:
    username = str(payload.get("username", "")).strip().lower()
    name = str(payload.get("name", "")).strip()
    email = str(payload.get("email", "")).strip()
    role = str(payload.get("role", "")).strip()
    password = str(payload.get("password", "")).strip()
    status = bool(payload.get("status", True))
    if not username:
        return None, "Username is required"
    if not name:
        return None, "Name is required"
    if not email:
        return None, "Email is required"
    if role not in {"user", "admin", "super_admin"}:
        return None, "Role must be user, admin, or super_admin"
    if require_password and not password:
        return None, "Password is required"
    return {
        "username": username,
        "password": password,
        "name": name,
        "email": email,
        "role": role,
        "status": status,
    }, None


class ERPApiHandler(BaseHTTPRequestHandler):
    server_version = "ERPApi/1.0"

    def log_message(self, fmt: str, *args: Any) -> None:
        try:
            sys.stdout.write("%s - %s\n" % (self.log_date_time_string(), fmt % args))
            sys.stdout.flush()
        except Exception:
            pass

    def end_headers(self) -> None:
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.send_header("Access-Control-Max-Age", "86400")
        super().end_headers()

    def send_json(self, status: int, payload: Any) -> None:
        body = json.dumps(payload, ensure_ascii=False, default=str).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def send_text(self, status: int, payload: str) -> None:
        body = payload.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def route_path(self) -> str:
        return urlparse(self.path).path

    def current_user(self) -> dict[str, Any] | None:
        auth = self.headers.get("Authorization", "")
        if not auth.startswith("Bearer "):
            return None
        return get_user_by_token(auth.replace("Bearer ", "", 1).strip())

    def do_OPTIONS(self) -> None:
        self.send_response(HTTPStatus.NO_CONTENT)
        self.end_headers()

    def do_GET(self) -> None:
        path = self.route_path()
        if path in {"/", "/api", "/api/"}:
            self.send_json(
                HTTPStatus.OK,
                {
                    "status": "ok",
                    "message": "ERP API is running",
                    "database": str(DB_PATH),
                },
            )
            return

        if path == "/api/auth/me":
            user = self.current_user()
            if not user:
                self.send_json(HTTPStatus.UNAUTHORIZED, {"detail": "Authentication required"})
                return
            self.send_json(HTTPStatus.OK, public_user(user))
            return

        if path == "/api/auth/permissions":
            user = self.current_user()
            if not user:
                self.send_json(HTTPStatus.UNAUTHORIZED, {"detail": "Authentication required"})
                return
            self.send_json(HTTPStatus.OK, get_role_permissions())
            return

        if path == "/api/auth/users":
            user = self.current_user()
            if not user_can_manage_permissions(user):
                self.send_json(HTTPStatus.FORBIDDEN, {"detail": "User management requires admin access"})
                return
            self.send_json(HTTPStatus.OK, list_auth_users())
            return

        if path == "/api/_collections/":
            with get_conn() as conn:
                rows = conn.execute(
                    "SELECT collection, COUNT(*) AS count FROM records GROUP BY collection ORDER BY collection"
                ).fetchall()
            self.send_json(HTTPStatus.OK, [dict(row) for row in rows])
            return

        collection, record_id = split_collection_and_id(path)
        if not collection:
            self.send_json(HTTPStatus.NOT_FOUND, {"detail": "Not found"})
            return

        with get_conn() as conn:
            if record_id is None:
                rows = conn.execute(
                    "SELECT * FROM records WHERE collection = ? ORDER BY id", (collection,)
                ).fetchall()
                self.send_json(HTTPStatus.OK, [row_to_record(row, conn) for row in rows])
            else:
                row = conn.execute(
                    "SELECT * FROM records WHERE collection = ? AND id = ?",
                    (collection, record_id),
                ).fetchone()
                if not row:
                    self.send_json(HTTPStatus.NOT_FOUND, {"detail": "Record not found"})
                    return
                self.send_json(HTTPStatus.OK, row_to_record(row, conn))

    def do_POST(self) -> None:
        try:
            payload = parse_json_body(self)
        except ValueError as exc:
            self.send_json(HTTPStatus.BAD_REQUEST, {"detail": str(exc)})
            return

        if self.route_path() == "/api/auth/login":
            username = str(payload.get("username", "")).strip().lower()
            password = str(payload.get("password", ""))
            user = get_user_by_username(username)
            if not user or not user.get("status") or user["password"] != password:
                self.send_json(HTTPStatus.UNAUTHORIZED, {"detail": "Invalid username or password"})
                return
            token = secrets.token_urlsafe(32)
            save_token(token, username)
            self.send_json(
                HTTPStatus.OK,
                {"token": token, "user": public_user(user), "permissions": get_role_permissions()},
            )
            return

        if self.route_path() == "/api/auth/users":
            current_user = self.current_user()
            if not user_can_manage_permissions(current_user):
                self.send_json(HTTPStatus.FORBIDDEN, {"detail": "User management requires admin access"})
                return
            data, error = validate_user_payload(payload, require_password=True)
            if error:
                self.send_json(HTTPStatus.BAD_REQUEST, {"detail": error})
                return
            now = utc_now()
            try:
                with get_conn() as conn:
                    cur = conn.execute(
                        """
                        INSERT INTO auth_users (username, password, name, email, role, status, created_at, updated_at)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                        """,
                        (
                            data["username"],
                            data["password"],
                            data["name"],
                            data["email"],
                            data["role"],
                            1 if data["status"] else 0,
                            now,
                            now,
                        ),
                    )
                    row = conn.execute("SELECT * FROM auth_users WHERE id = ?", (cur.lastrowid,)).fetchone()
            except sqlite3.IntegrityError:
                self.send_json(HTTPStatus.CONFLICT, {"detail": "Username already exists"})
                return
            self.send_json(HTTPStatus.CREATED, public_user(user_row_to_dict(row)))
            return

        if self.route_path() == "/api/auth/logout":
            auth = self.headers.get("Authorization", "")
            if auth.startswith("Bearer "):
                delete_token(auth.replace("Bearer ", "", 1).strip())
            self.send_json(HTTPStatus.OK, {"status": "logged_out"})
            return

        if self.route_path() == "/api/auth/permissions":
            current_user = self.current_user()
            if not user_can_manage_permissions(current_user):
                self.send_json(HTTPStatus.FORBIDDEN, {"detail": "Permission management requires admin access"})
                return
            permissions = get_role_permissions()
            for role in ("user", "admin"):
                incoming = payload.get(role)
                if incoming is None:
                    continue
                if not isinstance(incoming, list):
                    self.send_json(HTTPStatus.BAD_REQUEST, {"detail": f"{role} permissions must be a list"})
                    return
                permissions[role] = sorted(set(url for url in incoming if url in ALL_MENU_URLS))
            if "/settings/role-settings" not in permissions["admin"]:
                permissions["admin"].append("/settings/role-settings")
                permissions["admin"] = sorted(set(permissions["admin"]))
            permissions["super_admin"] = ALL_MENU_URLS
            with get_conn() as conn:
                for role in ("user", "admin"):
                    conn.execute(
                        """
                        INSERT INTO role_permissions (role, permissions, updated_at)
                        VALUES (?, ?, ?)
                        ON CONFLICT(role) DO UPDATE SET
                            permissions = excluded.permissions,
                            updated_at = excluded.updated_at
                        """,
                        (role, json.dumps(permissions[role]), utc_now()),
                    )
            self.send_json(HTTPStatus.OK, permissions)
            return

        collection, record_id = split_collection_and_id(self.route_path())
        if not collection:
            self.send_json(HTTPStatus.NOT_FOUND, {"detail": "Not found"})
            return

        if not isinstance(payload, dict):
            payload = {"value": payload}

        with get_conn() as conn:
            item_id = int(payload.get("id") or record_id or next_id(conn, collection))
            payload["id"] = item_id
            now = utc_now()
            conn.execute(
                """
                INSERT INTO records (collection, id, data, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?)
                ON CONFLICT(collection, id) DO UPDATE SET
                    data = excluded.data,
                    updated_at = excluded.updated_at
                """,
                (collection, item_id, json.dumps(payload), now, now),
            )
            response_payload = hydrate_relations(conn, payload)

        if collection == "file-test":
            self.send_text(HTTPStatus.CREATED, "File received")
        else:
            self.send_json(HTTPStatus.CREATED, response_payload)

    def do_PUT(self) -> None:
        if self.route_path().startswith("/api/auth/users/"):
            self.update_auth_user()
            return
        self.update_record(replace=True)

    def do_PATCH(self) -> None:
        self.update_record(replace=False)

    def update_record(self, replace: bool) -> None:
        is_multipart = "multipart/form-data" in self.headers.get("Content-Type", "")
        try:
            payload = parse_json_body(self)
        except ValueError as exc:
            self.send_json(HTTPStatus.BAD_REQUEST, {"detail": str(exc)})
            return

        collection, record_id = split_collection_and_id(self.route_path())
        if not collection or record_id is None:
            self.send_json(HTTPStatus.BAD_REQUEST, {"detail": "Record id is required"})
            return
        if not isinstance(payload, dict):
            payload = {"value": payload}

        with get_conn() as conn:
            row = conn.execute(
                "SELECT * FROM records WHERE collection = ? AND id = ?",
                (collection, record_id),
            ).fetchone()
            existing = {} if row is None or (replace and not is_multipart) else row_to_record(row, conn, hydrate=False)
            existing.update(payload)
            existing["id"] = record_id
            now = utc_now()
            conn.execute(
                """
                INSERT INTO records (collection, id, data, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?)
                ON CONFLICT(collection, id) DO UPDATE SET
                    data = excluded.data,
                    updated_at = excluded.updated_at
                """,
                (collection, record_id, json.dumps(existing), now, now),
            )
            response_payload = hydrate_relations(conn, existing)
        self.send_json(HTTPStatus.OK, response_payload)

    def update_auth_user(self) -> None:
        try:
            payload = parse_json_body(self)
        except ValueError as exc:
            self.send_json(HTTPStatus.BAD_REQUEST, {"detail": str(exc)})
            return

        collection, record_id = split_collection_and_id(self.route_path())
        current_user = self.current_user()
        if not user_can_manage_permissions(current_user):
            self.send_json(HTTPStatus.FORBIDDEN, {"detail": "User management requires admin access"})
            return
        if record_id is None:
            self.send_json(HTTPStatus.BAD_REQUEST, {"detail": "User id is required"})
            return
        if not isinstance(payload, dict):
            self.send_json(HTTPStatus.BAD_REQUEST, {"detail": "User payload must be an object"})
            return

        data, error = validate_user_payload(payload, require_password=False)
        if error:
            self.send_json(HTTPStatus.BAD_REQUEST, {"detail": error})
            return
        now = utc_now()
        with get_conn() as conn:
            existing = conn.execute("SELECT * FROM auth_users WHERE id = ?", (record_id,)).fetchone()
            if not existing:
                self.send_json(HTTPStatus.NOT_FOUND, {"detail": "User not found"})
                return
            if existing["username"] == "superadmin" and data["role"] != "super_admin":
                self.send_json(HTTPStatus.BAD_REQUEST, {"detail": "The built-in superadmin role cannot be changed"})
                return
            password = data["password"] or existing["password"]
            try:
                conn.execute(
                    """
                    UPDATE auth_users
                    SET username = ?, password = ?, name = ?, email = ?, role = ?, status = ?, updated_at = ?
                    WHERE id = ?
                    """,
                    (
                        data["username"],
                        password,
                        data["name"],
                        data["email"],
                        data["role"],
                        1 if data["status"] else 0,
                        now,
                        record_id,
                    ),
                )
            except sqlite3.IntegrityError:
                self.send_json(HTTPStatus.CONFLICT, {"detail": "Username already exists"})
                return
            if existing["username"] != data["username"]:
                conn.execute(
                    "UPDATE auth_tokens SET username = ? WHERE username = ?",
                    (data["username"], existing["username"]),
                )
            row = conn.execute("SELECT * FROM auth_users WHERE id = ?", (record_id,)).fetchone()
        self.send_json(HTTPStatus.OK, public_user(user_row_to_dict(row)))

    def do_DELETE(self) -> None:
        if self.route_path().startswith("/api/auth/users/"):
            collection, record_id = split_collection_and_id(self.route_path())
            current_user = self.current_user()
            if not user_can_manage_permissions(current_user):
                self.send_json(HTTPStatus.FORBIDDEN, {"detail": "User management requires admin access"})
                return
            if record_id is None:
                self.send_json(HTTPStatus.BAD_REQUEST, {"detail": "User id is required"})
                return
            with get_conn() as conn:
                row = conn.execute("SELECT username FROM auth_users WHERE id = ?", (record_id,)).fetchone()
                if not row:
                    self.send_json(HTTPStatus.NOT_FOUND, {"detail": "User not found"})
                    return
                if row["username"] == "superadmin":
                    self.send_json(HTTPStatus.BAD_REQUEST, {"detail": "The built-in superadmin cannot be deleted"})
                    return
                conn.execute("DELETE FROM auth_tokens WHERE username = ?", (row["username"],))
                conn.execute("DELETE FROM auth_users WHERE id = ?", (record_id,))
            self.send_response(HTTPStatus.NO_CONTENT)
            self.end_headers()
            return

        collection, record_id = split_collection_and_id(self.route_path())
        if not collection or record_id is None:
            self.send_json(HTTPStatus.BAD_REQUEST, {"detail": "Record id is required"})
            return

        with get_conn() as conn:
            cur = conn.execute(
                "DELETE FROM records WHERE collection = ? AND id = ?",
                (collection, record_id),
            )
        if cur.rowcount == 0:
            self.send_json(HTTPStatus.NOT_FOUND, {"detail": "Record not found"})
        else:
            self.send_response(HTTPStatus.NO_CONTENT)
            self.end_headers()


def main() -> None:
    mimetypes.init()
    init_db()
    server = ThreadingHTTPServer((HOST, PORT), ERPApiHandler)
    try:
        print(f"ERP API running at http://{HOST}:{PORT}/api/")
        print(f"SQLite database: {DB_PATH}")
    except Exception:
        pass
    server.serve_forever()


if __name__ == "__main__":
    main()

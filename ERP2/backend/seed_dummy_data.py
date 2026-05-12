from __future__ import annotations

import json
import os
import sqlite3
from datetime import datetime, timezone
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DB_PATH = Path(os.environ.get("ERP_API_DB", DATA_DIR / "erp_api.sqlite3"))


def now() -> str:
    return datetime.now(timezone.utc).isoformat()


DUMMY_DATA = {
    "countries": [
        {"id": 1, "name": "Pakistan", "code": "PK", "status": True},
        {"id": 2, "name": "United States", "code": "US", "status": True},
        {"id": 3, "name": "United Kingdom", "code": "GB", "status": True},
        {"id": 4, "name": "United Arab Emirates", "code": "AE", "status": True},
        {"id": 5, "name": "Germany", "code": "DE", "status": False},
    ],
    "currencies": [
        {"id": 1, "name": "Pakistani Rupee", "code": "PKR", "status": True},
        {"id": 2, "name": "US Dollar", "code": "USD", "status": True},
        {"id": 3, "name": "Euro", "code": "EUR", "status": True},
        {"id": 4, "name": "Pound Sterling", "code": "GBP", "status": True},
    ],
    "regions": [
        {"id": 1, "name": "Punjab", "code": "PB", "status": True, "country": 1},
        {"id": 2, "name": "Sindh", "code": "SD", "status": True, "country": 1},
        {"id": 3, "name": "California", "code": "CA", "status": True, "country": 2},
    ],
    "departments": [
        {"id": 1, "name": "Merchandising", "code": "MER", "status": True},
        {"id": 2, "name": "Production", "code": "PROD", "status": True},
        {"id": 3, "name": "Quality Control", "code": "QC", "status": True},
        {"id": 4, "name": "Finance", "code": "FIN", "status": True},
    ],
    "companies": [
        {
            "id": 1,
            "name": "Forward Sports Demo",
            "code": "FSD",
            "status": True,
            "address": "Sialkot, Pakistan",
            "phone": "+92-52-0000000",
            "email": "info@example.com",
        }
    ],
    "uoms": [
        {"id": 1, "name": "Pieces", "code": "PCS", "status": True},
        {"id": 2, "name": "Dozen", "code": "DOZ", "status": True},
        {"id": 3, "name": "Kilogram", "code": "KG", "status": True},
        {"id": 4, "name": "Meter", "code": "MTR", "status": True},
    ],
    "factory-codes": [
        {"id": 1, "name": "Main Factory", "code": "MF01", "status": True},
        {"id": 2, "name": "Stitching Unit", "code": "ST01", "status": True},
    ],
    "payment-terms": [
        {"id": 1, "name": "Advance Payment", "code": "ADV", "days": 0, "status": True},
        {"id": 2, "name": "Net 30", "code": "N30", "days": 30, "status": True},
        {"id": 3, "name": "Net 60", "code": "N60", "days": 60, "status": True},
    ],
    "vendor-groups": [
        {"id": 1, "name": "Raw Material Vendors", "code": "RM", "status": True},
        {"id": 2, "name": "Packaging Vendors", "code": "PKG", "status": True},
    ],
    "vendors": [
        {
            "id": 1,
            "name": "Alpha Material Supply",
            "code": "V-001",
            "vendor_group": 1,
            "country": 1,
            "status": True,
        },
        {
            "id": 2,
            "name": "Global Packaging Co.",
            "code": "V-002",
            "vendor_group": 2,
            "country": 2,
            "status": True,
        },
    ],
    "customers": [
        {"id": 1, "name": "Demo Retail Group", "code": "C-001", "country": 2, "status": True},
        {"id": 2, "name": "Euro Sports Buyer", "code": "C-002", "country": 3, "status": True},
    ],
    "clients": [
        {"id": 1, "name": "North America Division", "code": "NA", "customer": 1, "status": True},
        {"id": 2, "name": "Europe Division", "code": "EU", "customer": 2, "status": True},
    ],
    "forwarders": [
        {"id": 1, "name": "Fast Freight", "code": "FF", "status": True},
        {"id": 2, "name": "Ocean Link", "code": "OL", "status": True},
    ],
    "service-identifier": [
        {"id": 1, "name": "Air Shipment", "code": "AIR", "status": True},
        {"id": 2, "name": "Sea Shipment", "code": "SEA", "status": True},
    ],
    "categories": [
        {"id": 1, "name": "Synthetic Leather", "code": "SL", "status": True},
        {"id": 2, "name": "Thread", "code": "TH", "status": True},
        {"id": 3, "name": "Packaging", "code": "PKG", "status": True},
    ],
    "category-types": [
        {"id": 1, "name": "Raw Material", "code": "RAW", "status": True},
        {"id": 2, "name": "Finished Good", "code": "FG", "status": True},
    ],
    "sub-categories": [
        {"id": 1, "name": "PU Leather", "code": "PU", "category": 1, "status": True},
        {"id": 2, "name": "Cotton Thread", "code": "CT", "category": 2, "status": True},
    ],
    "material-seasons": [
        {"id": 1, "name": "Spring 2026", "code": "SP26", "status": True},
        {"id": 2, "name": "Fall 2026", "code": "FA26", "status": True},
    ],
    "materials": [
        {
            "id": 1,
            "name": "White PU Leather",
            "code": "MAT-001",
            "category": 1,
            "subcategory": 1,
            "uom": 4,
            "status": True,
        },
        {
            "id": 2,
            "name": "Black Cotton Thread",
            "code": "MAT-002",
            "category": 2,
            "subcategory": 2,
            "uom": 3,
            "status": True,
        },
    ],
    "material-vendors": [
        {"id": 1, "material": 1, "vendor": 1, "status": True},
        {"id": 2, "material": 2, "vendor": 1, "status": True},
    ],
    "article-categories": [
        {"id": 1, "name": "Football", "code": "FB", "status": True},
        {"id": 2, "name": "Training Ball", "code": "TB", "status": True},
    ],
    "seasons": [
        {"id": 1, "name": "World Cup 2026", "code": "WC26", "status": True},
        {"id": 2, "name": "Club 2026", "code": "CL26", "status": True},
    ],
    "models": [
        {"id": 1, "name": "Classic 32 Panel", "code": "M32", "status": True},
        {"id": 2, "name": "Thermo Bonded Pro", "code": "TBP", "status": True},
    ],
    "article-size": [
        {"id": 1, "name": "Size 5", "code": "5", "status": True},
        {"id": 2, "name": "Size 4", "code": "4", "status": True},
    ],
    "article-materials": [
        {"id": 1, "name": "Outer Cover", "code": "OC", "material": 1, "status": True},
        {"id": 2, "name": "Thread Set", "code": "TS", "material": 2, "status": True},
    ],
    "articles": [
        {
            "id": 1,
            "name": "Demo Match Ball",
            "code": "ART-001",
            "model": 1,
            "season": 1,
            "size": 1,
            "status": True,
        },
        {
            "id": 2,
            "name": "Training Ball",
            "code": "ART-002",
            "model": 2,
            "season": 2,
            "size": 2,
            "status": True,
        },
    ],
    "warehouses": [
        {"id": 1, "name": "Main Warehouse", "code": "WH-01", "status": True},
        {"id": 2, "name": "Finished Goods Store", "code": "WH-02", "status": True},
    ],
    "sections": [
        {"id": 1, "name": "Raw Material Section", "code": "RMS", "warehouse": 1, "status": True},
        {"id": 2, "name": "Dispatch Section", "code": "DSP", "warehouse": 2, "status": True},
    ],
    "racks": [
        {"id": 1, "name": "Rack A1", "code": "A1", "section": 1, "status": True},
        {"id": 2, "name": "Rack B1", "code": "B1", "section": 2, "status": True},
    ],
    "lines": [
        {"id": 1, "name": "Line 1", "code": "L1", "status": True},
        {"id": 2, "name": "Line 2", "code": "L2", "status": True},
    ],
    "taxes": [
        {"id": 1, "name": "Sales Tax", "code": "ST", "rate": 18, "status": True},
        {"id": 2, "name": "Withholding Tax", "code": "WHT", "rate": 5, "status": True},
    ],
    "transport-modes": [
        {"id": 1, "name": "By Road", "code": "ROAD", "status": True},
        {"id": 2, "name": "By Sea", "code": "SEA", "status": True},
    ],
    "purchase-orders": [
        {
            "id": 1,
            "po_no": "PO-2026-0001",
            "vendor": 1,
            "currency": 1,
            "status": True,
            "date": "2026-04-30",
        }
    ],
    "purchase-order-items": [
        {"id": 1, "purchase_order": 1, "material": 1, "qty": 250, "rate": 12.5, "status": True},
        {"id": 2, "purchase_order": 1, "material": 2, "qty": 100, "rate": 5.75, "status": True},
    ],
    "production-order-heads": [
        {
            "id": 1,
            "order_no": "PROD-2026-0001",
            "article": 1,
            "customer": 1,
            "qty": 5000,
            "status": True,
        }
    ],
    "production-orders-details": [
        {"id": 1, "production_order": 1, "size": 1, "qty": 3000, "status": True},
        {"id": 2, "production_order": 1, "size": 2, "qty": 2000, "status": True},
    ],
    "delay-reasons": [
        {"id": 1, "name": "Material Delay", "code": "MAT", "status": True},
        {"id": 2, "name": "Machine Maintenance", "code": "MNT", "status": True},
    ],
    "projects": [
        {"id": 1, "name": "Demo Ball Testing", "code": "PRJ-001", "status": True},
        {"id": 2, "name": "Material Validation", "code": "PRJ-002", "status": True},
    ],
    "fit-tests": [
        {"id": 1, "name": "Bounce Test", "code": "BNC", "status": True},
        {"id": 2, "name": "Weight Test", "code": "WGT", "status": True},
    ],
    "lab-balls": [
        {"id": 1, "name": "Sample Ball A", "code": "SBA", "article": 1, "status": True},
        {"id": 2, "name": "Sample Ball B", "code": "SBB", "article": 2, "status": True},
    ],
    "finance/heads": [
        {"id": 1, "name": "Assets", "code": "1000", "status": True},
        {"id": 2, "name": "Expenses", "code": "5000", "status": True},
    ],
    "finance/heads/categories": [
        {"id": 1, "name": "Cash", "code": "1010", "head": 1, "status": True},
        {"id": 2, "name": "Purchases", "code": "5010", "head": 2, "status": True},
    ],
    "finance/accounts": [
        {"id": 1, "name": "Cash in Hand", "code": "101001", "category": 1, "status": True},
        {"id": 2, "name": "Raw Material Purchase", "code": "501001", "category": 2, "status": True},
    ],
    "finance/transactions": [
        {
            "id": 1,
            "voucher_no": "JV-2026-0001",
            "date": "2026-04-30",
            "description": "Opening test transaction",
            "amount": 10000,
            "status": True,
        }
    ],
}


def init_db(conn: sqlite3.Connection) -> None:
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


def seed() -> None:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    timestamp = now()
    with sqlite3.connect(DB_PATH) as conn:
        init_db(conn)
        for collection, rows in DUMMY_DATA.items():
            conn.execute("DELETE FROM records WHERE collection = ?", (collection,))
            for row in rows:
                payload = dict(row)
                payload.setdefault("creation_date", timestamp)
                payload.setdefault("update_date", timestamp)
                conn.execute(
                    """
                    INSERT INTO records (collection, id, data, created_at, updated_at)
                    VALUES (?, ?, ?, ?, ?)
                    """,
                    (
                        collection,
                        int(payload["id"]),
                        json.dumps(payload),
                        timestamp,
                        timestamp,
                    ),
                )
            max_id = max(int(row["id"]) for row in rows)
            conn.execute(
                """
                INSERT INTO counters (collection, value)
                VALUES (?, ?)
                ON CONFLICT(collection) DO UPDATE SET value = excluded.value
                """,
                (collection, max_id),
            )
    print(f"Seeded {sum(len(rows) for rows in DUMMY_DATA.values())} records into {DB_PATH}")
    print(f"Collections: {len(DUMMY_DATA)}")


if __name__ == "__main__":
    seed()

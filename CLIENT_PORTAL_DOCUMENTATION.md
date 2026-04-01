# Client Portal — API Documentation

**Base URL:** `http://localhost:3000/api/client`

This document describes all the endpoints available for the **Client Portal** — a separate frontend where clients can log in, view their quotes, accept them (fully or partially), track their projects, see payment history, and download documents.

---

## Authentication

The client portal uses its **own JWT token**, separate from the admin/staff token.

**How it works:**
1. The admin creates a client via `POST /api/clients` with a `password` field.
2. The client logs in via `POST /api/client/auth/login` with email + password.
3. The server returns a JWT token with `type: "client"`.
4. All subsequent requests to `/api/client/*` must include:

```
Authorization: Bearer <client_token>
```

> **IMPORTANT:** Admin tokens (`type: "user"`) will NOT work on client portal routes and vice versa.

---

## Response Format

All responses follow the same format:

**Success:**
```json
{
  "success": true,
  "message": "Descripción",
  "data": { ... }
}
```

**Error:**
```json
{
  "success": false,
  "message": "Descripción del error",
  "errors": [ { "field": "body.email", "message": "Email inválido" } ]
}
```

---

## How to Create a Client with Portal Access

From the **admin panel**, when creating a client, include a `password` field:

```
POST /api/clients
Authorization: Bearer <admin_token>
```

```json
{
  "businessName": "Empresa ABC",
  "contactName": "Juan Pérez",
  "email": "juan@empresa.com",
  "phone": "+593991234567",
  "address": "Av. Principal 123",
  "taxId": "0991234567001",
  "password": "ClientPassword123"
}
```

The `password` field is **optional**. If not provided, the client won't be able to log into the portal until the admin sets one (via `PUT /api/clients/:id` with a `password` field).

---

# ENDPOINTS

## 1. Client Auth

### `POST /api/client/auth/login`

No authentication required.

**Request Body:**
```json
{
  "email": "juan@empresa.com",
  "password": "ClientPassword123"
}
```

| Field      | Type   | Required | Rules           |
|------------|--------|----------|-----------------|
| `email`    | string | Yes      | Valid email      |
| `password` | string | Yes      | Not empty        |

**Response `200`**
```json
{
  "success": true,
  "message": "Inicio de sesión exitoso",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "client": {
      "id": 1,
      "businessName": "Empresa ABC",
      "contactName": "Juan Pérez",
      "email": "juan@empresa.com",
      "phone": "+593991234567"
    }
  }
}
```

> **Frontend:** Store the `token` and include it as `Authorization: Bearer <token>` in all subsequent requests. Store `client` data for the UI header/sidebar.

**Errors:**
| Code | Message |
|------|---------|
| 401 | Credenciales inválidas |
| 403 | Cuenta desactivada. Contacta al administrador |
| 403 | No tienes una contraseña configurada. Contacta al administrador |

---

### `POST /api/client/auth/change-password`

Requires client authentication.

**Request Body:**
```json
{
  "currentPassword": "ClientPassword123",
  "newPassword": "NewSecurePass456"
}
```

| Field             | Type   | Required | Rules              |
|-------------------|--------|----------|--------------------|
| `currentPassword` | string | Yes      | Not empty          |
| `newPassword`     | string | Yes      | Min 8 characters   |

**Response `200`**
```json
{
  "success": true,
  "message": "Contraseña actualizada correctamente",
  "data": null
}
```

**Errors:**
| Code | Message |
|------|---------|
| 401 | La contraseña actual es incorrecta |

---

## 2. Dashboard

### `GET /api/client/dashboard`

Returns the client's complete dashboard with stats and recent activity. This is the **main screen** when the client logs in.

**Request:** No body, no query params.

**Response `200`**
```json
{
  "success": true,
  "message": "Dashboard obtenido",
  "data": {
    "stats": {
      "quotes": {
        "total": 8,
        "pending": 2,
        "accepted": 5
      },
      "projects": {
        "total": 5,
        "active": 2,
        "completed": 3
      },
      "documents": {
        "total": 12
      },
      "financialSummary": {
        "totalInvested": 25000.00,
        "totalPaid": 18500.00,
        "totalPending": 6500.00
      }
    },
    "activity": {
      "recentQuotes": [
        {
          "id": 8,
          "quoteNumber": "COT-2026-00008",
          "title": "Mantenimiento web",
          "status": "sent",
          "totalAmount": "500.00",
          "currency": "USD",
          "createdAt": "2026-03-30T12:00:00.000Z"
        }
      ],
      "recentProjects": [
        {
          "id": 3,
          "projectNumber": "PRY-2026-00003",
          "title": "App móvil",
          "status": "in_progress",
          "totalAmount": "8000.00",
          "paidAmount": "4000.00",
          "pendingAmount": "4000.00",
          "paidPercentage": "50.00",
          "isFullyPaid": false,
          "createdAt": "2026-03-15T12:00:00.000Z"
        }
      ],
      "recentPayments": [
        {
          "id": 5,
          "amount": "2000.00",
          "paymentDate": "2026-03-28T00:00:00.000Z",
          "paymentMethod": "transfer",
          "percentageEquivalent": "25.00",
          "project": {
            "id": 3,
            "projectNumber": "PRY-2026-00003",
            "title": "App móvil"
          }
        }
      ]
    }
  }
}
```

### Frontend Dashboard Layout Suggestion

```
┌──────────────────────────────────────────────────────┐
│  Welcome, Juan Pérez — Empresa ABC                   │
├──────────┬──────────┬──────────┬─────────────────────┤
│ Quotes   │ Projects │ Docs     │ Financial Summary   │
│ Total: 8 │ Total: 5 │ Total:12 │ Invested: $25,000   │
│ Pend.: 2 │ Active:2 │          │ Paid:     $18,500   │
│ Acpt.: 5 │ Done:  3 │          │ Pending:   $6,500   │
├──────────┴──────────┴──────────┴─────────────────────┤
│  Recent Quotes                                       │
│  ┌─────────────────────────────────────────────────┐  │
│  │ COT-2026-00008 | Mantenimiento web | sent |$500│  │
│  └─────────────────────────────────────────────────┘  │
│  Recent Projects                                     │
│  ┌─────────────────────────────────────────────────┐  │
│  │ PRY-2026-00003 | App móvil | 50% paid | $8,000 │  │
│  └─────────────────────────────────────────────────┘  │
│  Recent Payments                                     │
│  ┌─────────────────────────────────────────────────┐  │
│  │ $2,000 | transfer | PRY-2026-00003 | 25%       │  │
│  └─────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

---

## 3. Profile

### `GET /api/client/profile`

**Response `200`**
```json
{
  "success": true,
  "message": "Perfil obtenido",
  "data": {
    "id": 1,
    "businessName": "Empresa ABC",
    "contactName": "Juan Pérez",
    "email": "juan@empresa.com",
    "phone": "+593991234567",
    "address": "Av. Principal 123",
    "taxId": "0991234567001",
    "createdAt": "2026-01-15T00:00:00.000Z",
    "updatedAt": "2026-03-31T12:00:00.000Z"
  }
}
```

> Note: `businessName`, `email`, and `taxId` are NOT editable by the client (only admin can change those).

---

### `PUT /api/client/profile`

The client can only update: `contactName`, `phone`, `address`.

**Request Body:**
```json
{
  "contactName": "Juan Carlos Pérez",
  "phone": "+593997654321",
  "address": "Av. Segunda 456, Quito"
}
```

| Field         | Type   | Required | Rules                     |
|---------------|--------|----------|---------------------------|
| `contactName` | string | No       | min 1, max 255            |
| `phone`       | string | No       | min 1, max 50             |
| `address`     | string | No       | max 1000, nullable        |

**Response `200`**
```json
{
  "success": true,
  "message": "Perfil actualizado correctamente",
  "data": {
    "id": 1,
    "businessName": "Empresa ABC",
    "contactName": "Juan Carlos Pérez",
    "email": "juan@empresa.com",
    "phone": "+593997654321",
    "address": "Av. Segunda 456, Quito",
    "taxId": "0991234567001",
    "updatedAt": "2026-03-31T13:00:00.000Z"
  }
}
```

---

## 4. Quotes (Cotizaciones)

### `GET /api/client/quotes`

Lists all quotes for this client, with pagination and optional status filter.

**Query Parameters:**
| Parameter | Type   | Default | Description                                |
|-----------|--------|---------|--------------------------------------------|
| `page`    | number | 1       | Page number                                |
| `limit`   | number | 20      | Items per page (max 100)                   |
| `status`  | string | —       | Filter by status (see values below)        |

**Quote status values:** `draft`, `issued`, `sent`, `viewed`, `partially_accepted`, `fully_accepted`, `rejected`, `expired`, `canceled`

> **Note:** The client will typically only see quotes with status `issued`, `sent`, `viewed`, `partially_accepted`, or `fully_accepted`. Quotes in `draft` won't appear because they haven't been issued yet.

**Example:** `GET /api/client/quotes?status=sent&page=1`

**Response `200`**
```json
{
  "success": true,
  "message": "Cotizaciones obtenidas",
  "data": {
    "data": [
      {
        "id": 3,
        "quoteNumber": "COT-2026-00003",
        "title": "Rediseño de sitio web",
        "description": "Propuesta completa de rediseño",
        "subtotal": "3000.00",
        "discountAmount": "200.00",
        "taxAmount": "336.00",
        "totalAmount": "3136.00",
        "currency": "USD",
        "status": "sent",
        "validUntil": "2026-04-30T23:59:59.000Z",
        "issuedAt": "2026-03-25T10:00:00.000Z",
        "sentAt": "2026-03-25T10:05:00.000Z",
        "notes": "Incluye hosting por 1 año",
        "createdAt": "2026-03-24T12:00:00.000Z",
        "_count": { "items": 4 }
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 5,
      "totalPages": 1
    }
  }
}
```

### Frontend UI for Quotes List

Show status badges with colors:
- `sent` / `issued` / `viewed` → **Blue** (actionable — can be accepted)
- `fully_accepted` → **Green**
- `partially_accepted` → **Yellow/Orange**
- `rejected` / `canceled` / `expired` → **Gray/Red**

Show an **"Accept"** button only for quotes with status: `issued`, `sent`, or `viewed`.

---

### `GET /api/client/quotes/:id`

Gets full detail of a quote with items, acceptances, and documents.

> **Side effect:** If the quote status is `sent`, viewing it automatically changes the status to `viewed` and records `viewedAt`. This is tracked in the StatusHistory.

**URL Params:** `id` — Quote ID (number).

**Response `200`**
```json
{
  "success": true,
  "message": "Cotización obtenida",
  "data": {
    "id": 3,
    "quoteNumber": "COT-2026-00003",
    "title": "Rediseño de sitio web",
    "description": "Propuesta completa de rediseño",
    "subtotal": "3000.00",
    "discountAmount": "200.00",
    "taxAmount": "336.00",
    "totalAmount": "3136.00",
    "currency": "USD",
    "status": "viewed",
    "validUntil": "2026-04-30T23:59:59.000Z",
    "issuedAt": "2026-03-25T10:00:00.000Z",
    "sentAt": "2026-03-25T10:05:00.000Z",
    "viewedAt": "2026-03-31T14:00:00.000Z",
    "notes": "Incluye hosting por 1 año",
    "createdAt": "2026-03-24T12:00:00.000Z",
    "updatedAt": "2026-03-31T14:00:00.000Z",
    "items": [
      {
        "id": 10,
        "quoteId": 3,
        "itemOrder": 1,
        "title": "Diseño UI/UX",
        "description": "Wireframes + diseño final para 8 páginas",
        "quantity": "1.00",
        "unitPrice": "1200.00",
        "subtotal": "1200.00",
        "status": "pending",
        "createdAt": "...",
        "updatedAt": "..."
      },
      {
        "id": 11,
        "quoteId": 3,
        "itemOrder": 2,
        "title": "Desarrollo Frontend",
        "description": "React + TailwindCSS",
        "quantity": "1.00",
        "unitPrice": "1000.00",
        "subtotal": "1000.00",
        "status": "pending",
        "createdAt": "...",
        "updatedAt": "..."
      },
      {
        "id": 12,
        "quoteId": 3,
        "itemOrder": 3,
        "title": "Backend API",
        "description": "Node.js + Express",
        "quantity": "1.00",
        "unitPrice": "500.00",
        "subtotal": "500.00",
        "status": "pending",
        "createdAt": "...",
        "updatedAt": "..."
      },
      {
        "id": 13,
        "quoteId": 3,
        "itemOrder": 4,
        "title": "SEO Básico",
        "description": "Optimización on-page",
        "quantity": "1.00",
        "unitPrice": "300.00",
        "subtotal": "300.00",
        "status": "pending",
        "createdAt": "...",
        "updatedAt": "..."
      }
    ],
    "acceptances": [],
    "documents": [
      {
        "id": 5,
        "documentType": "quote_pdf",
        "fileName": "quote-COT-2026-00003.pdf",
        "createdAt": "2026-03-25T10:00:00.000Z"
      }
    ]
  }
}
```

### Frontend UI for Quote Detail

```
┌──────────────────────────────────────────────────────┐
│  Quote COT-2026-00003                    Status: SENT│
│  "Rediseño de sitio web"                             │
│  Issued: Mar 25, 2026  |  Valid until: Apr 30, 2026  │
├──────────────────────────────────────────────────────┤
│  Items:                                              │
│  ┌────┬──────────────────┬─────┬──────────┬────────┐ │
│  │ #  │ Description      │ Qty │ Unit $   │ Total  │ │
│  ├────┼──────────────────┼─────┼──────────┼────────┤ │
│  │ ☑  │ Diseño UI/UX     │  1  │ $1,200   │ $1,200 │ │
│  │ ☑  │ Frontend         │  1  │ $1,000   │ $1,000 │ │
│  │ ☐  │ Backend API      │  1  │ $  500   │ $  500 │ │
│  │ ☐  │ SEO Básico       │  1  │ $  300   │ $  300 │ │
│  └────┴──────────────────┴─────┴──────────┴────────┘ │
│                                                      │
│  Subtotal:    $3,000.00                              │
│  Discount:   -$  200.00                              │
│  Tax:         $  336.00                              │
│  ─────────────────────                               │
│  TOTAL:       $3,136.00                              │
│                                                      │
│  Notes: Incluye hosting por 1 año                    │
│                                                      │
│  [Download PDF]                                      │
│                                                      │
│  ┌───────────────────┐  ┌──────────────────────────┐ │
│  │  Accept All       │  │  Accept Selected (2)     │ │
│  └───────────────────┘  └──────────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

**Acceptance logic for the frontend:**
- **"Accept All"** → Sends `acceptanceType: "full"` (no need to send `acceptedItemIds`).
- **"Accept Selected"** → User checks items via checkboxes → Sends `acceptanceType: "partial"` + `acceptedItemIds` with the IDs of checked items.
- Only show the accept buttons if `status` is `issued`, `sent`, or `viewed`.
- After acceptance, redirect to the newly created project detail or show a success modal.

---

### `POST /api/client/quotes/:id/accept`

The client accepts a quote (fully or partially). This triggers:
1. Creates a `QuoteAcceptance` record.
2. Updates each item's status to `accepted` or `rejected`.
3. Changes the quote status to `fully_accepted` or `partially_accepted`.
4. Creates a `Project` with only the accepted items.
5. Creates `ProjectItems` copied from the accepted quote items.
6. Generates an acceptance PDF and uploads it to S3.

**URL Params:** `id` — Quote ID (number).

**Request Body — Full Acceptance:**
```json
{
  "acceptanceType": "full",
  "notes": "Everything looks great, we approve all items"
}
```

**Request Body — Partial Acceptance:**
```json
{
  "acceptanceType": "partial",
  "acceptedItemIds": [10, 11],
  "notes": "We only need the design and frontend for now"
}
```

| Field             | Type     | Required                              | Rules                                      |
|-------------------|----------|---------------------------------------|--------------------------------------------|
| `acceptanceType`  | string   | Yes                                   | `"full"` or `"partial"`                    |
| `acceptedItemIds` | number[] | Yes if `acceptanceType` is `"partial"` | Array of item IDs from the quote           |
| `notes`           | string   | No                                    | max 2000, nullable                         |

> The `acceptedItemIds` must be the actual `id` values from the `items` array in the quote detail response. NOT the `itemOrder`.

**Only works if quote status is:** `issued`, `sent`, or `viewed`.

**Response `201`**
```json
{
  "success": true,
  "message": "Cotización aceptada y proyecto creado correctamente",
  "data": {
    "acceptance": {
      "id": 1,
      "quoteId": 3,
      "clientId": 1,
      "acceptanceType": "partial",
      "acceptedTotalAmount": "2200.00",
      "acceptedAt": "2026-03-31T14:30:00.000Z",
      "clientIp": "192.168.1.100",
      "notes": "We only need the design and frontend for now",
      "createdAt": "2026-03-31T14:30:00.000Z",
      "updatedAt": "2026-03-31T14:30:00.000Z",
      "items": [
        { "id": 1, "quoteAcceptanceId": 1, "quoteItemId": 10, "acceptedPrice": "1200.00", "createdAt": "..." },
        { "id": 2, "quoteAcceptanceId": 1, "quoteItemId": 11, "acceptedPrice": "1000.00", "createdAt": "..." }
      ]
    },
    "project": {
      "id": 1,
      "clientId": 1,
      "quoteId": 3,
      "quoteAcceptanceId": 1,
      "projectNumber": "PRY-2026-00001",
      "title": "Rediseño de sitio web",
      "description": "Propuesta completa de rediseño",
      "totalAmount": "2200.00",
      "paidAmount": "0.00",
      "pendingAmount": "2200.00",
      "paidPercentage": "0.00",
      "isFullyPaid": false,
      "status": "pending_start",
      "startedAt": null,
      "finishedAt": null,
      "canceledAt": null,
      "notes": null,
      "createdAt": "2026-03-31T14:30:00.000Z",
      "updatedAt": "2026-03-31T14:30:00.000Z",
      "items": [
        {
          "id": 1,
          "projectId": 1,
          "quoteItemId": 10,
          "title": "Diseño UI/UX",
          "description": "Wireframes + diseño final para 8 páginas",
          "quantity": "1.00",
          "unitPrice": "1200.00",
          "subtotal": "1200.00",
          "status": "pending",
          "createdAt": "...",
          "updatedAt": "..."
        },
        {
          "id": 2,
          "projectId": 1,
          "quoteItemId": 11,
          "title": "Desarrollo Frontend",
          "description": "React + TailwindCSS",
          "quantity": "1.00",
          "unitPrice": "1000.00",
          "subtotal": "1000.00",
          "status": "pending",
          "createdAt": "...",
          "updatedAt": "..."
        }
      ]
    }
  }
}
```

> **Frontend after acceptance:** Navigate to `/portal/projects/{project.id}` or show a success page with project details and a CTA to "View Project".

**Errors:**
| Code | Message |
|------|---------|
| 400 | No se puede aceptar una cotización con estado "draft" |
| 400 | Para aceptación parcial, debe indicar los ítems aceptados |
| 400 | Ninguno de los ítems indicados pertenece a esta cotización |
| 404 | Cotización no encontrada |

---

## 5. Projects (Proyectos)

### `GET /api/client/projects`

Lists all projects for this client.

**Query Parameters:**
| Parameter | Type   | Default | Description                                        |
|-----------|--------|---------|----------------------------------------------------|
| `page`    | number | 1       | Page number                                        |
| `limit`   | number | 20      | Items per page (max 100)                           |
| `status`  | string | —       | `pending_start`, `in_progress`, `completed`, `canceled` |

**Response `200`**
```json
{
  "success": true,
  "message": "Proyectos obtenidos",
  "data": {
    "data": [
      {
        "id": 1,
        "projectNumber": "PRY-2026-00001",
        "title": "Rediseño de sitio web",
        "description": "...",
        "totalAmount": "2200.00",
        "paidAmount": "1100.00",
        "pendingAmount": "1100.00",
        "paidPercentage": "50.00",
        "isFullyPaid": false,
        "status": "in_progress",
        "startedAt": "2026-04-01T08:00:00.000Z",
        "finishedAt": null,
        "notes": null,
        "createdAt": "2026-03-31T14:30:00.000Z",
        "quote": { "quoteNumber": "COT-2026-00003", "currency": "USD" },
        "_count": { "items": 2, "payments": 2 }
      }
    ],
    "pagination": { "page": 1, "limit": 20, "total": 1, "totalPages": 1 }
  }
}
```

### Frontend UI for Projects List

Show progress bars based on `paidPercentage`. Color-code statuses:
- `pending_start` → **Gray** ("Pending")
- `in_progress` → **Blue** ("In Progress")
- `completed` → **Green** ("Completed")
- `canceled` → **Red** ("Canceled")

---

### `GET /api/client/projects/:id`

Full project detail with items, payment history, and documents.

**URL Params:** `id` — Project ID (number).

**Response `200`**
```json
{
  "success": true,
  "message": "Proyecto obtenido",
  "data": {
    "id": 1,
    "projectNumber": "PRY-2026-00001",
    "title": "Rediseño de sitio web",
    "description": "Propuesta completa de rediseño",
    "totalAmount": "2200.00",
    "paidAmount": "1100.00",
    "pendingAmount": "1100.00",
    "paidPercentage": "50.00",
    "isFullyPaid": false,
    "status": "in_progress",
    "startedAt": "2026-04-01T08:00:00.000Z",
    "finishedAt": null,
    "canceledAt": null,
    "notes": null,
    "createdAt": "2026-03-31T14:30:00.000Z",
    "updatedAt": "2026-04-10T12:00:00.000Z",
    "quote": {
      "id": 3,
      "quoteNumber": "COT-2026-00003",
      "title": "Rediseño de sitio web",
      "currency": "USD"
    },
    "acceptance": {
      "id": 1,
      "acceptanceType": "partial",
      "acceptedTotalAmount": "2200.00",
      "acceptedAt": "2026-03-31T14:30:00.000Z"
    },
    "items": [
      {
        "id": 1,
        "projectId": 1,
        "quoteItemId": 10,
        "title": "Diseño UI/UX",
        "description": "Wireframes + diseño final para 8 páginas",
        "quantity": "1.00",
        "unitPrice": "1200.00",
        "subtotal": "1200.00",
        "status": "in_progress",
        "createdAt": "...",
        "updatedAt": "..."
      },
      {
        "id": 2,
        "projectId": 1,
        "quoteItemId": 11,
        "title": "Desarrollo Frontend",
        "description": "React + TailwindCSS",
        "quantity": "1.00",
        "unitPrice": "1000.00",
        "subtotal": "1000.00",
        "status": "pending",
        "createdAt": "...",
        "updatedAt": "..."
      }
    ],
    "payments": [
      {
        "id": 2,
        "paymentDate": "2026-04-10T00:00:00.000Z",
        "amount": "600.00",
        "percentageEquivalent": "27.27",
        "paymentMethod": "transfer",
        "reference": "TRF-789012",
        "notes": "Segundo pago",
        "receiptFilePath": "https://...",
        "createdAt": "..."
      },
      {
        "id": 1,
        "paymentDate": "2026-04-01T00:00:00.000Z",
        "amount": "500.00",
        "percentageEquivalent": "22.73",
        "paymentMethod": "transfer",
        "reference": "TRF-123456",
        "notes": "Anticipo",
        "receiptFilePath": "https://...",
        "createdAt": "..."
      }
    ],
    "documents": [
      {
        "id": 6,
        "documentType": "acceptance_pdf",
        "fileName": "acceptance-COT-2026-00003.pdf",
        "createdAt": "2026-03-31T14:30:00.000Z"
      },
      {
        "id": 7,
        "documentType": "payment_receipt",
        "fileName": "recibo-pago-1.pdf",
        "createdAt": "2026-04-01T12:00:00.000Z"
      }
    ]
  }
}
```

### Frontend UI for Project Detail

```
┌──────────────────────────────────────────────────────┐
│  Project PRY-2026-00001                              │
│  "Rediseño de sitio web"         Status: IN PROGRESS │
│  From quote: COT-2026-00003                          │
│  Started: Apr 1, 2026                                │
├──────────────────────────────────────────────────────┤
│  Financial Summary                                   │
│  ┌────────────────────────────────────────────────┐   │
│  │  Total:     $2,200.00                         │   │
│  │  Paid:      $1,100.00                         │   │
│  │  Pending:   $1,100.00                         │   │
│  │  ████████████░░░░░░░░░░░░ 50.00%              │   │
│  └────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────┤
│  Items                                               │
│  ┌───────────────────┬────────┬────────┬──────────┐  │
│  │ Title             │ Status │ Price  │ Subtotal │  │
│  │ Diseño UI/UX      │ ●prog  │$1,200  │ $1,200   │  │
│  │ Frontend          │ ○pend  │$1,000  │ $1,000   │  │
│  └───────────────────┴────────┴────────┴──────────┘  │
├──────────────────────────────────────────────────────┤
│  Payment History                                     │
│  ┌──────────┬─────────┬──────────┬──────┬─────────┐  │
│  │ Date     │ Amount  │ Method   │ %    │ Receipt │  │
│  │ Apr 10   │ $600    │ transfer │ 27%  │ [PDF]   │  │
│  │ Apr 01   │ $500    │ transfer │ 23%  │ [PDF]   │  │
│  └──────────┴─────────┴──────────┴──────┴─────────┘  │
├──────────────────────────────────────────────────────┤
│  Documents                                           │
│  • acceptance-COT-2026-00003.pdf  [Download]         │
│  • recibo-pago-1.pdf              [Download]         │
└──────────────────────────────────────────────────────┘
```

---

## 6. Documents

### `GET /api/client/documents`

Lists all documents belonging to this client.

**Query Parameters:**
| Parameter      | Type   | Default | Description                                               |
|----------------|--------|---------|-----------------------------------------------------------|
| `page`         | number | 1       | Page number                                               |
| `limit`        | number | 20      | Items per page (max 100)                                  |
| `documentType` | string | —       | `quote_pdf`, `acceptance_pdf`, `payment_receipt`, `contract`, `other` |

**Response `200`**
```json
{
  "success": true,
  "message": "Documentos obtenidos",
  "data": {
    "data": [
      {
        "id": 7,
        "documentType": "payment_receipt",
        "fileName": "recibo-pago-1.pdf",
        "mimeType": "application/pdf",
        "sizeInBytes": 12456,
        "createdAt": "2026-04-01T12:00:00.000Z",
        "quote": null,
        "project": { "id": 1, "projectNumber": "PRY-2026-00001" }
      },
      {
        "id": 6,
        "documentType": "acceptance_pdf",
        "fileName": "acceptance-COT-2026-00003.pdf",
        "mimeType": "application/pdf",
        "sizeInBytes": 15230,
        "createdAt": "2026-03-31T14:30:00.000Z",
        "quote": { "id": 3, "quoteNumber": "COT-2026-00003" },
        "project": null
      }
    ],
    "pagination": { "page": 1, "limit": 20, "total": 2, "totalPages": 1 }
  }
}
```

---

### `GET /api/client/documents/:id/download-url`

Generates a signed URL from Amazon S3 to download the file. Valid for **1 hour**.

**URL Params:** `id` — Document ID (number).

> The client can only download documents that belong to them (`clientId` must match).

**Response `200`**
```json
{
  "success": true,
  "message": "URL de descarga generada",
  "data": {
    "url": "https://cotizador-docs.s3.us-east-1.amazonaws.com/...?X-Amz-Signature=...",
    "fileName": "acceptance-COT-2026-00003.pdf",
    "mimeType": "application/pdf"
  }
}
```

> **Frontend:** Open the `url` in a new tab or use it as the `href` of a download link. The URL expires in 1 hour.

**Errors:**
| Code | Message |
|------|---------|
| 400 | El documento no tiene archivo asociado |
| 404 | Documento no encontrado |

---

## Full Endpoint Summary Table

| Method | Endpoint                              | Auth     | Description                           |
|--------|---------------------------------------|----------|---------------------------------------|
| POST   | `/api/client/auth/login`              | None     | Client login                          |
| POST   | `/api/client/auth/change-password`    | Client   | Change password                       |
| GET    | `/api/client/dashboard`               | Client   | Dashboard with stats + activity       |
| GET    | `/api/client/profile`                 | Client   | Get profile                           |
| PUT    | `/api/client/profile`                 | Client   | Update profile (name, phone, address) |
| GET    | `/api/client/quotes`                  | Client   | List quotes                           |
| GET    | `/api/client/quotes/:id`              | Client   | Quote detail (auto-marks as viewed)   |
| POST   | `/api/client/quotes/:id/accept`       | Client   | Accept quote (full or partial)        |
| GET    | `/api/client/projects`                | Client   | List projects                         |
| GET    | `/api/client/projects/:id`            | Client   | Project detail with payments          |
| GET    | `/api/client/documents`               | Client   | List documents                        |
| GET    | `/api/client/documents/:id/download-url` | Client | Get signed download URL            |

---

## Frontend Pages Needed

| Page                  | Route Suggestion          | Main API Call                          |
|-----------------------|---------------------------|----------------------------------------|
| Login                 | `/portal/login`           | `POST /api/client/auth/login`          |
| Dashboard             | `/portal`                 | `GET /api/client/dashboard`            |
| Profile               | `/portal/profile`         | `GET` + `PUT /api/client/profile`      |
| Change Password       | `/portal/settings`        | `POST /api/client/auth/change-password`|
| Quotes List           | `/portal/quotes`          | `GET /api/client/quotes`               |
| Quote Detail          | `/portal/quotes/:id`      | `GET /api/client/quotes/:id`           |
| Accept Quote (modal)  | (modal on quote detail)   | `POST /api/client/quotes/:id/accept`   |
| Projects List         | `/portal/projects`        | `GET /api/client/projects`             |
| Project Detail        | `/portal/projects/:id`    | `GET /api/client/projects/:id`         |
| Documents List        | `/portal/documents`       | `GET /api/client/documents`            |

---

## Frontend Auth Flow

```
1. User opens /portal/login
2. Enters email + password
3. POST /api/client/auth/login → receives { token, client }
4. Store token (localStorage or httpOnly cookie)
5. Store client info for header display
6. Redirect to /portal (dashboard)
7. All requests include: Authorization: Bearer <token>
8. On 401 response → redirect to /portal/login
```

---

## Important Notes for Frontend Development

### Decimal Values
All monetary fields come as **strings** from the API (e.g., `"1200.00"`). Use `parseFloat()` to convert them for calculations or formatting:

```javascript
const amount = parseFloat(project.totalAmount); // 1200
const formatted = `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
```

### Dates
All dates are in **ISO 8601** format. Parse with `new Date()`:

```javascript
const date = new Date(quote.createdAt);
const formatted = date.toLocaleDateString('es-EC', { year: 'numeric', month: 'long', day: 'numeric' });
```

### Token Expiration
Tokens expire based on the server's `JWT_EXPIRES_IN` setting (default: 7 days). Handle `401` responses globally in your HTTP client (axios interceptor or fetch wrapper) to redirect to login.

### Security
- The client can **only** see their own data. The backend enforces this via `clientId` from the JWT.
- The client **cannot** see other clients' data, even if they guess the ID.
- The client **cannot** access admin routes — the tokens are different types (`type: "client"` vs `type: "user"`).

### Quote Acceptance Flow (Step by Step)

```
Client opens /portal/quotes
  → Sees list of quotes
  → Clicks on a quote with status "sent"
  → GET /api/client/quotes/:id (status changes to "viewed")
  → Sees all items with checkboxes
  → Option A: Clicks "Accept All"
      → POST with { acceptanceType: "full" }
  → Option B: Checks some items + clicks "Accept Selected"
      → POST with { acceptanceType: "partial", acceptedItemIds: [10, 11] }
  → Response includes the new project
  → Redirect to /portal/projects/:projectId
  → Client can now track progress and see payments
```

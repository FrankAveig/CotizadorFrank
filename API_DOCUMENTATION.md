# API Documentation — Cotizador Backend

**Base URL:** `http://localhost:3000/api`

**Formato general de respuesta exitosa:**
```json
{
  "success": true,
  "message": "Descripción del resultado",
  "data": { ... }
}
```

**Formato general de error:**
```json
{
  "success": false,
  "message": "Descripción del error",
  "errors": [ { "field": "body.email", "message": "Email inválido" } ]
}
```

**Autenticación:** Todas las rutas (excepto login y health) requieren el header:
```
Authorization: Bearer <token>
```

---

## Health Check

### `GET /api/health`

Sin autenticación.

**Response `200`**
```json
{
  "success": true,
  "message": "API funcionando correctamente",
  "timestamp": "2026-03-31T12:00:00.000Z"
}
```

---

## 1. AUTH

### `POST /api/auth/login`

Sin autenticación.

**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "Admin123456*"
}
```

| Campo      | Tipo   | Requerido | Reglas              |
|------------|--------|-----------|---------------------|
| `email`    | string | Sí        | Debe ser email válido |
| `password` | string | Sí        | No puede estar vacío  |

**Response `200`**
```json
{
  "success": true,
  "message": "Inicio de sesión exitoso",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": 1,
      "name": "Administrator",
      "email": "admin@example.com",
      "role": "admin"
    }
  }
}
```

**Errores posibles:**
| Código | Mensaje |
|--------|---------|
| 401 | Credenciales inválidas |
| 403 | Usuario desactivado. Contacta al administrador |

---

## 2. USERS

### `GET /api/users/me`

Requiere autenticación.

**Request:** Sin body. El usuario se obtiene del token JWT.

**Response `200`**
```json
{
  "success": true,
  "message": "Perfil obtenido",
  "data": {
    "id": 1,
    "name": "Administrator",
    "email": "admin@example.com",
    "role": "admin",
    "isActive": true,
    "createdAt": "2026-03-31T00:00:00.000Z",
    "updatedAt": "2026-03-31T00:00:00.000Z"
  }
}
```

---

## 3. CLIENTS

### `POST /api/clients`

Crea un nuevo cliente.

**Request Body:**
```json
{
  "businessName": "Empresa ABC S.A.",
  "contactName": "Juan Pérez",
  "email": "juan@empresaabc.com",
  "phone": "+593991234567",
  "address": "Av. Principal 123, Guayaquil",
  "taxId": "0991234567001"
}
```

| Campo          | Tipo   | Requerido | Reglas                        |
|----------------|--------|-----------|-------------------------------|
| `businessName` | string | Sí        | min 1, max 255 caracteres     |
| `contactName`  | string | Sí        | min 1, max 255 caracteres     |
| `email`        | string | Sí        | Debe ser email válido, único  |
| `phone`        | string | Sí        | min 1, max 50 caracteres      |
| `address`      | string | No        | max 1000 caracteres, nullable |
| `taxId`        | string | No        | max 50 caracteres, nullable   |

**Response `201`**
```json
{
  "success": true,
  "message": "Cliente creado correctamente",
  "data": {
    "id": 1,
    "businessName": "Empresa ABC S.A.",
    "contactName": "Juan Pérez",
    "email": "juan@empresaabc.com",
    "phone": "+593991234567",
    "address": "Av. Principal 123, Guayaquil",
    "taxId": "0991234567001",
    "passwordHash": null,
    "isActive": true,
    "createdAt": "2026-03-31T12:00:00.000Z",
    "updatedAt": "2026-03-31T12:00:00.000Z"
  }
}
```

**Errores posibles:**
| Código | Mensaje |
|--------|---------|
| 400 | Error de validación |
| 409 | Ya existe un registro con ese valor de email |

---

### `GET /api/clients`

Lista clientes con paginación, búsqueda y filtro.

**Query Parameters:**
| Parámetro  | Tipo    | Default | Descripción                                      |
|------------|---------|---------|--------------------------------------------------|
| `page`     | number  | 1       | Página actual                                    |
| `limit`    | number  | 20      | Registros por página (máximo 100)                |
| `search`   | string  | —       | Busca en businessName, contactName, email         |
| `isActive` | string  | —       | `"true"` o `"false"` para filtrar por estado      |

**Ejemplo:** `GET /api/clients?page=1&limit=10&search=empresa&isActive=true`

**Response `200`**
```json
{
  "success": true,
  "message": "Clientes obtenidos",
  "data": {
    "data": [
      {
        "id": 1,
        "businessName": "Empresa ABC S.A.",
        "contactName": "Juan Pérez",
        "email": "juan@empresaabc.com",
        "phone": "+593991234567",
        "taxId": "0991234567001",
        "isActive": true,
        "createdAt": "2026-03-31T12:00:00.000Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1,
      "totalPages": 1
    }
  }
}
```

---

### `GET /api/clients/:id`

Obtiene el detalle de un cliente con sus últimas 10 cotizaciones y 10 proyectos.

**URL Params:** `id` — ID numérico del cliente.

**Response `200`**
```json
{
  "success": true,
  "message": "Cliente obtenido",
  "data": {
    "id": 1,
    "businessName": "Empresa ABC S.A.",
    "contactName": "Juan Pérez",
    "email": "juan@empresaabc.com",
    "phone": "+593991234567",
    "address": "Av. Principal 123, Guayaquil",
    "taxId": "0991234567001",
    "passwordHash": null,
    "isActive": true,
    "createdAt": "2026-03-31T12:00:00.000Z",
    "updatedAt": "2026-03-31T12:00:00.000Z",
    "quotes": [
      {
        "id": 1,
        "quoteNumber": "COT-2026-00001",
        "title": "Diseño de sitio web",
        "status": "draft",
        "totalAmount": "1500.00",
        "createdAt": "2026-03-31T12:00:00.000Z"
      }
    ],
    "projects": [
      {
        "id": 1,
        "projectNumber": "PRY-2026-00001",
        "title": "Diseño de sitio web",
        "status": "pending_start",
        "totalAmount": "1500.00",
        "paidPercentage": "0.00",
        "createdAt": "2026-03-31T12:00:00.000Z"
      }
    ]
  }
}
```

**Errores posibles:**
| Código | Mensaje |
|--------|---------|
| 404 | Cliente no encontrado |

---

### `PUT /api/clients/:id`

Actualiza un cliente. Solo envía los campos que deseas cambiar.

**URL Params:** `id` — ID numérico del cliente.

**Request Body (parcial):**
```json
{
  "businessName": "Empresa ABC Corp.",
  "phone": "+593997654321"
}
```

| Campo          | Tipo   | Requerido | Reglas                    |
|----------------|--------|-----------|---------------------------|
| `businessName` | string | No        | min 1, max 255 caracteres |
| `contactName`  | string | No        | min 1, max 255 caracteres |
| `email`        | string | No        | Email válido              |
| `phone`        | string | No        | min 1, max 50 caracteres  |
| `address`      | string | No        | max 1000, nullable        |
| `taxId`        | string | No        | max 50, nullable          |

**Response `200`**
```json
{
  "success": true,
  "message": "Cliente actualizado correctamente",
  "data": {
    "id": 1,
    "businessName": "Empresa ABC Corp.",
    "contactName": "Juan Pérez",
    "email": "juan@empresaabc.com",
    "phone": "+593997654321",
    "address": "Av. Principal 123, Guayaquil",
    "taxId": "0991234567001",
    "passwordHash": null,
    "isActive": true,
    "createdAt": "2026-03-31T12:00:00.000Z",
    "updatedAt": "2026-03-31T12:05:00.000Z"
  }
}
```

---

### `DELETE /api/clients/:id`

Desactiva un cliente (soft delete — cambia `isActive` a `false`).

**URL Params:** `id` — ID numérico del cliente.

**Request:** Sin body.

**Response `200`**
```json
{
  "success": true,
  "message": "Cliente desactivado correctamente",
  "data": null
}
```

---

## 4. QUOTES (Cotizaciones)

### `POST /api/quotes`

Crea una cotización con sus ítems. Los subtotales y totales se calculan automáticamente. Se genera un `quoteNumber` correlativo (ej: `COT-2026-00001`).

**Request Body:**
```json
{
  "clientId": 1,
  "title": "Diseño y desarrollo de sitio web",
  "description": "Propuesta para rediseño completo del sitio corporativo",
  "currency": "USD",
  "discountAmount": 100,
  "taxAmount": 168,
  "validUntil": "2026-04-30T23:59:59.000Z",
  "notes": "Incluye 2 rondas de revisiones",
  "items": [
    {
      "title": "Diseño UI/UX",
      "description": "Diseño de interfaces para 5 páginas",
      "quantity": 1,
      "unitPrice": 800
    },
    {
      "title": "Desarrollo Frontend",
      "description": "Implementación en React",
      "quantity": 1,
      "unitPrice": 600
    }
  ]
}
```

| Campo            | Tipo     | Requerido | Reglas                                      |
|------------------|----------|-----------|---------------------------------------------|
| `clientId`       | number   | Sí        | Entero positivo, debe existir en DB          |
| `title`          | string   | Sí        | min 1, max 255                               |
| `description`    | string   | No        | max 2000, nullable                           |
| `currency`       | string   | No        | max 10, default: `"USD"`                     |
| `discountAmount` | number   | No        | >= 0, default: 0                             |
| `taxAmount`      | number   | No        | >= 0, default: 0                             |
| `validUntil`     | string   | No        | ISO 8601 datetime, nullable                  |
| `notes`          | string   | No        | max 2000, nullable                           |
| `items`          | array    | Sí        | Al menos 1 ítem                              |
| `items[].title`       | string | Sí  | min 1, max 255                               |
| `items[].description` | string | No  | max 2000, nullable                           |
| `items[].quantity`     | number | Sí  | > 0                                          |
| `items[].unitPrice`   | number | Sí  | >= 0                                         |

**Response `201`**
```json
{
  "success": true,
  "message": "Cotización creada correctamente",
  "data": {
    "id": 1,
    "clientId": 1,
    "createdByUserId": 1,
    "quoteNumber": "COT-2026-00001",
    "title": "Diseño y desarrollo de sitio web",
    "description": "Propuesta para rediseño completo del sitio corporativo",
    "subtotal": "1400.00",
    "discountAmount": "100.00",
    "taxAmount": "168.00",
    "totalAmount": "1468.00",
    "currency": "USD",
    "status": "draft",
    "validUntil": "2026-04-30T23:59:59.000Z",
    "issuedAt": null,
    "sentAt": null,
    "viewedAt": null,
    "notes": "Incluye 2 rondas de revisiones",
    "createdAt": "2026-03-31T12:00:00.000Z",
    "updatedAt": "2026-03-31T12:00:00.000Z",
    "items": [
      {
        "id": 1,
        "quoteId": 1,
        "itemOrder": 1,
        "title": "Diseño UI/UX",
        "description": "Diseño de interfaces para 5 páginas",
        "quantity": "1.00",
        "unitPrice": "800.00",
        "subtotal": "800.00",
        "status": "pending",
        "createdAt": "2026-03-31T12:00:00.000Z",
        "updatedAt": "2026-03-31T12:00:00.000Z"
      },
      {
        "id": 2,
        "quoteId": 1,
        "itemOrder": 2,
        "title": "Desarrollo Frontend",
        "description": "Implementación en React",
        "quantity": "1.00",
        "unitPrice": "600.00",
        "subtotal": "600.00",
        "status": "pending",
        "createdAt": "2026-03-31T12:00:00.000Z",
        "updatedAt": "2026-03-31T12:00:00.000Z"
      }
    ],
    "client": {
      "id": 1,
      "businessName": "Empresa ABC S.A.",
      "contactName": "Juan Pérez",
      "email": "juan@empresaabc.com",
      "phone": "+593991234567",
      "address": "Av. Principal 123",
      "taxId": "0991234567001",
      "isActive": true,
      "createdAt": "2026-03-31T12:00:00.000Z",
      "updatedAt": "2026-03-31T12:00:00.000Z"
    }
  }
}
```

---

### `GET /api/quotes`

Lista cotizaciones con paginación y filtros.

**Query Parameters:**
| Parámetro  | Tipo   | Default | Descripción                                            |
|------------|--------|---------|--------------------------------------------------------|
| `page`     | number | 1       | Página actual                                          |
| `limit`    | number | 20      | Registros por página (máximo 100)                      |
| `status`   | string | —       | Filtrar por estado: `draft`, `issued`, `sent`, `viewed`, `partially_accepted`, `fully_accepted`, `rejected`, `expired`, `canceled` |
| `search`   | string | —       | Busca en quoteNumber, title, businessName del cliente  |
| `clientId` | number | —       | Filtrar por ID de cliente                              |

**Ejemplo:** `GET /api/quotes?page=1&limit=10&status=draft&clientId=1`

**Response `200`**
```json
{
  "success": true,
  "message": "Cotizaciones obtenidas",
  "data": {
    "data": [
      {
        "id": 1,
        "clientId": 1,
        "createdByUserId": 1,
        "quoteNumber": "COT-2026-00001",
        "title": "Diseño y desarrollo de sitio web",
        "description": "...",
        "subtotal": "1400.00",
        "discountAmount": "100.00",
        "taxAmount": "168.00",
        "totalAmount": "1468.00",
        "currency": "USD",
        "status": "draft",
        "validUntil": "2026-04-30T23:59:59.000Z",
        "issuedAt": null,
        "sentAt": null,
        "viewedAt": null,
        "notes": "...",
        "createdAt": "2026-03-31T12:00:00.000Z",
        "updatedAt": "2026-03-31T12:00:00.000Z",
        "client": {
          "id": 1,
          "businessName": "Empresa ABC S.A.",
          "contactName": "Juan Pérez",
          "email": "juan@empresaabc.com"
        },
        "_count": {
          "items": 2
        }
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1,
      "totalPages": 1
    }
  }
}
```

---

### `GET /api/quotes/:id`

Obtiene el detalle completo de una cotización con ítems, aceptaciones, documentos y datos del cliente.

**URL Params:** `id` — ID numérico de la cotización.

**Response `200`**
```json
{
  "success": true,
  "message": "Cotización obtenida",
  "data": {
    "id": 1,
    "clientId": 1,
    "createdByUserId": 1,
    "quoteNumber": "COT-2026-00001",
    "title": "Diseño y desarrollo de sitio web",
    "description": "...",
    "subtotal": "1400.00",
    "discountAmount": "100.00",
    "taxAmount": "168.00",
    "totalAmount": "1468.00",
    "currency": "USD",
    "status": "draft",
    "validUntil": "2026-04-30T23:59:59.000Z",
    "issuedAt": null,
    "sentAt": null,
    "viewedAt": null,
    "notes": "...",
    "createdAt": "2026-03-31T12:00:00.000Z",
    "updatedAt": "2026-03-31T12:00:00.000Z",
    "client": { "...completo..." },
    "createdBy": {
      "id": 1,
      "name": "Administrator",
      "email": "admin@example.com"
    },
    "items": [
      {
        "id": 1,
        "quoteId": 1,
        "itemOrder": 1,
        "title": "Diseño UI/UX",
        "description": "...",
        "quantity": "1.00",
        "unitPrice": "800.00",
        "subtotal": "800.00",
        "status": "pending",
        "createdAt": "...",
        "updatedAt": "..."
      }
    ],
    "acceptances": [],
    "documents": []
  }
}
```

---

### `PUT /api/quotes/:id`

Actualiza una cotización. **Solo funciona si está en estado `draft`.**

Si se envían `items`, todos los ítems anteriores se eliminan y se reemplazan por los nuevos. Los totales se recalculan automáticamente.

**URL Params:** `id` — ID numérico de la cotización.

**Request Body (todos los campos opcionales):**
```json
{
  "title": "Nuevo título",
  "description": "Nueva descripción",
  "currency": "EUR",
  "discountAmount": 50,
  "taxAmount": 200,
  "validUntil": "2026-05-31T23:59:59.000Z",
  "notes": "Notas actualizadas",
  "items": [
    {
      "title": "Diseño UI/UX completo",
      "description": "10 páginas",
      "quantity": 1,
      "unitPrice": 1200
    },
    {
      "title": "Desarrollo Frontend",
      "quantity": 1,
      "unitPrice": 800
    }
  ]
}
```

| Campo            | Tipo   | Requerido | Reglas                          |
|------------------|--------|-----------|---------------------------------|
| `title`          | string | No        | min 1, max 255                  |
| `description`    | string | No        | max 2000, nullable              |
| `currency`       | string | No        | max 10                          |
| `discountAmount` | number | No        | >= 0                            |
| `taxAmount`      | number | No        | >= 0                            |
| `validUntil`     | string | No        | ISO 8601 datetime, nullable     |
| `notes`          | string | No        | max 2000, nullable              |
| `items`          | array  | No        | Si se envía, al menos 1 ítem    |

**Response `200`** — Misma estructura que la creación.

**Errores posibles:**
| Código | Mensaje |
|--------|---------|
| 400 | Solo se pueden editar cotizaciones en borrador |
| 404 | Cotización no encontrada |

---

### `POST /api/quotes/:id/issue`

Emite una cotización. Cambia estado de `draft` a `issued`. Registra `issuedAt` y crea una entrada en `StatusHistory`.

**URL Params:** `id` — ID numérico de la cotización.

**Request:** Sin body.

**Response `200`**
```json
{
  "success": true,
  "message": "Cotización emitida correctamente",
  "data": {
    "id": 1,
    "quoteNumber": "COT-2026-00001",
    "status": "issued",
    "issuedAt": "2026-03-31T12:10:00.000Z",
    "...demás campos...",
    "items": [ "..." ],
    "client": { "..." }
  }
}
```

**Errores posibles:**
| Código | Mensaje |
|--------|---------|
| 400 | Solo se puede emitir una cotización en borrador |
| 404 | Cotización no encontrada |

---

### `POST /api/quotes/:id/send`

Envía una cotización. Cambia estado a `sent`. Registra `sentAt`. Solo funciona si el estado actual es `issued` o `sent`.

**URL Params:** `id` — ID numérico de la cotización.

**Request:** Sin body.

**Response `200`**
```json
{
  "success": true,
  "message": "Cotización enviada correctamente",
  "data": {
    "id": 1,
    "status": "sent",
    "sentAt": "2026-03-31T12:15:00.000Z",
    "...demás campos...",
    "items": [ "..." ],
    "client": { "..." }
  }
}
```

**Errores posibles:**
| Código | Mensaje |
|--------|---------|
| 400 | La cotización debe estar emitida antes de enviar |
| 404 | Cotización no encontrada |

---

### `POST /api/quotes/:id/accept`

Acepta una cotización (total o parcial). Este es el endpoint más complejo del sistema. En una sola transacción:

1. Crea el registro de `QuoteAcceptance` con sus `QuoteAcceptanceItems`.
2. Actualiza el estado de cada `QuoteItem` (accepted/rejected).
3. Cambia el estado de la cotización a `fully_accepted` o `partially_accepted`.
4. Crea un `Project` con `ProjectItems` solo de los ítems aceptados.
5. Registra entradas en `StatusHistory`.

**URL Params:** `id` — ID numérico de la cotización.

**Request Body — Aceptación total:**
```json
{
  "acceptanceType": "full",
  "notes": "Todo aprobado"
}
```

**Request Body — Aceptación parcial:**
```json
{
  "acceptanceType": "partial",
  "acceptedItemIds": [1, 3],
  "notes": "Solo aprobamos diseño y SEO"
}
```

| Campo             | Tipo     | Requerido                    | Reglas                                             |
|-------------------|----------|------------------------------|----------------------------------------------------|
| `acceptanceType`  | string   | Sí                           | `"full"` o `"partial"`                             |
| `acceptedItemIds` | number[] | Sí si `acceptanceType = "partial"` | Array de IDs de QuoteItems, deben pertenecer a la cotización |
| `notes`           | string   | No                           | max 2000, nullable                                  |

> La IP del cliente (`clientIp`) se captura automáticamente del request.

**Cotización solo puede aceptarse si está en estado:** `issued`, `sent`, o `viewed`.

**Response `201`**
```json
{
  "success": true,
  "message": "Cotización aceptada y proyecto creado correctamente",
  "data": {
    "acceptance": {
      "id": 1,
      "quoteId": 1,
      "clientId": 1,
      "acceptanceType": "full",
      "acceptedTotalAmount": "1400.00",
      "acceptedAt": "2026-03-31T12:20:00.000Z",
      "clientIp": "::1",
      "notes": "Todo aprobado",
      "createdAt": "2026-03-31T12:20:00.000Z",
      "updatedAt": "2026-03-31T12:20:00.000Z",
      "items": [
        {
          "id": 1,
          "quoteAcceptanceId": 1,
          "quoteItemId": 1,
          "acceptedPrice": "800.00",
          "createdAt": "2026-03-31T12:20:00.000Z"
        },
        {
          "id": 2,
          "quoteAcceptanceId": 1,
          "quoteItemId": 2,
          "acceptedPrice": "600.00",
          "createdAt": "2026-03-31T12:20:00.000Z"
        }
      ]
    },
    "project": {
      "id": 1,
      "clientId": 1,
      "quoteId": 1,
      "quoteAcceptanceId": 1,
      "projectNumber": "PRY-2026-00001",
      "title": "Diseño y desarrollo de sitio web",
      "description": "...",
      "totalAmount": "1400.00",
      "paidAmount": "0.00",
      "pendingAmount": "1400.00",
      "paidPercentage": "0.00",
      "isFullyPaid": false,
      "status": "pending_start",
      "startedAt": null,
      "finishedAt": null,
      "canceledAt": null,
      "notes": null,
      "createdAt": "2026-03-31T12:20:00.000Z",
      "updatedAt": "2026-03-31T12:20:00.000Z",
      "items": [
        {
          "id": 1,
          "projectId": 1,
          "quoteItemId": 1,
          "title": "Diseño UI/UX",
          "description": "...",
          "quantity": "1.00",
          "unitPrice": "800.00",
          "subtotal": "800.00",
          "status": "pending",
          "createdAt": "2026-03-31T12:20:00.000Z",
          "updatedAt": "2026-03-31T12:20:00.000Z"
        },
        {
          "id": 2,
          "projectId": 1,
          "quoteItemId": 2,
          "title": "Desarrollo Frontend",
          "description": "...",
          "quantity": "1.00",
          "unitPrice": "600.00",
          "subtotal": "600.00",
          "status": "pending",
          "createdAt": "2026-03-31T12:20:00.000Z",
          "updatedAt": "2026-03-31T12:20:00.000Z"
        }
      ]
    }
  }
}
```

**Errores posibles:**
| Código | Mensaje |
|--------|---------|
| 400 | No se puede aceptar una cotización con estado "draft". Estados válidos: issued, sent, viewed |
| 400 | Para aceptación parcial, debe indicar los ítems aceptados |
| 400 | Ninguno de los ítems indicados pertenece a esta cotización |
| 400 | Los ítems con ID X, Y no pertenecen a esta cotización |
| 404 | Cotización no encontrada |

---

### `GET /api/quotes/:id/items`

Obtiene los ítems de una cotización.

**URL Params:** `id` — ID numérico de la cotización.

**Response `200`**
```json
{
  "success": true,
  "message": "Ítems obtenidos",
  "data": [
    {
      "id": 1,
      "quoteId": 1,
      "itemOrder": 1,
      "title": "Diseño UI/UX",
      "description": "...",
      "quantity": "1.00",
      "unitPrice": "800.00",
      "subtotal": "800.00",
      "status": "pending",
      "createdAt": "...",
      "updatedAt": "..."
    }
  ]
}
```

---

### `GET /api/quotes/:id/documents`

Obtiene los documentos asociados a una cotización.

**URL Params:** `id` — ID numérico de la cotización.

**Response `200`**
```json
{
  "success": true,
  "message": "Documentos obtenidos",
  "data": [
    {
      "id": 1,
      "clientId": 1,
      "quoteId": 1,
      "quoteAcceptanceId": null,
      "projectId": null,
      "documentType": "quote_pdf",
      "fileName": "quote-COT-2026-00001.pdf",
      "filePath": "https://bucket.s3.us-east-1.amazonaws.com/quotes/1/quote-COT-2026-00001.pdf",
      "mimeType": "application/pdf",
      "sizeInBytes": 15234,
      "bucket": "cotizador-docs",
      "objectKey": "quotes/1/quote-COT-2026-00001.pdf",
      "uploadedByUserId": 1,
      "createdAt": "2026-03-31T12:00:00.000Z"
    }
  ]
}
```

---

### `POST /api/quotes/:id/generate-pdf`

Genera el PDF de la cotización, lo sube a Amazon S3 y registra la metadata en la tabla Document.

**URL Params:** `id` — ID numérico de la cotización.

**Request:** Sin body.

**Response `201`**
```json
{
  "success": true,
  "message": "PDF generado y subido a S3 correctamente",
  "data": {
    "id": 1,
    "clientId": 1,
    "quoteId": 1,
    "quoteAcceptanceId": null,
    "projectId": null,
    "documentType": "quote_pdf",
    "fileName": "quote-COT-2026-00001.pdf",
    "filePath": "https://cotizador-docs.s3.us-east-1.amazonaws.com/quotes/1/quote-COT-2026-00001.pdf",
    "mimeType": "application/pdf",
    "sizeInBytes": 15234,
    "bucket": "cotizador-docs",
    "objectKey": "quotes/1/quote-COT-2026-00001.pdf",
    "uploadedByUserId": 1,
    "createdAt": "2026-03-31T12:00:00.000Z"
  }
}
```

---

## 5. PROJECTS (Proyectos)

> Los proyectos no se crean manualmente. Se generan automáticamente al aceptar una cotización.

### `GET /api/projects`

Lista proyectos con paginación y filtros.

**Query Parameters:**
| Parámetro  | Tipo   | Default | Descripción                                                        |
|------------|--------|---------|--------------------------------------------------------------------|
| `page`     | number | 1       | Página actual                                                      |
| `limit`    | number | 20      | Registros por página (máximo 100)                                  |
| `status`   | string | —       | `pending_start`, `in_progress`, `completed`, `canceled`            |
| `search`   | string | —       | Busca en projectNumber, title, businessName del cliente             |
| `clientId` | number | —       | Filtrar por ID de cliente                                          |

**Ejemplo:** `GET /api/projects?status=in_progress&page=1`

**Response `200`**
```json
{
  "success": true,
  "message": "Proyectos obtenidos",
  "data": {
    "data": [
      {
        "id": 1,
        "clientId": 1,
        "quoteId": 1,
        "quoteAcceptanceId": 1,
        "projectNumber": "PRY-2026-00001",
        "title": "Diseño y desarrollo de sitio web",
        "description": "...",
        "totalAmount": "1400.00",
        "paidAmount": "500.00",
        "pendingAmount": "900.00",
        "paidPercentage": "35.71",
        "isFullyPaid": false,
        "status": "in_progress",
        "startedAt": "2026-03-31T13:00:00.000Z",
        "finishedAt": null,
        "canceledAt": null,
        "notes": null,
        "createdAt": "2026-03-31T12:20:00.000Z",
        "updatedAt": "2026-03-31T13:00:00.000Z",
        "client": {
          "id": 1,
          "businessName": "Empresa ABC S.A.",
          "contactName": "Juan Pérez"
        },
        "_count": {
          "items": 2,
          "payments": 1
        }
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 1,
      "totalPages": 1
    }
  }
}
```

---

### `GET /api/projects/:id`

Obtiene el detalle completo de un proyecto con ítems, pagos, documentos, datos de la cotización original, del cliente y de la aceptación.

**URL Params:** `id` — ID numérico del proyecto.

**Response `200`**
```json
{
  "success": true,
  "message": "Proyecto obtenido",
  "data": {
    "id": 1,
    "clientId": 1,
    "quoteId": 1,
    "quoteAcceptanceId": 1,
    "projectNumber": "PRY-2026-00001",
    "title": "Diseño y desarrollo de sitio web",
    "description": "...",
    "totalAmount": "1400.00",
    "paidAmount": "500.00",
    "pendingAmount": "900.00",
    "paidPercentage": "35.71",
    "isFullyPaid": false,
    "status": "in_progress",
    "startedAt": "2026-03-31T13:00:00.000Z",
    "finishedAt": null,
    "canceledAt": null,
    "notes": null,
    "createdAt": "2026-03-31T12:20:00.000Z",
    "updatedAt": "2026-03-31T13:00:00.000Z",
    "client": { "...completo..." },
    "quote": {
      "id": 1,
      "quoteNumber": "COT-2026-00001",
      "title": "Diseño y desarrollo de sitio web",
      "currency": "USD"
    },
    "acceptance": {
      "id": 1,
      "acceptanceType": "full",
      "acceptedTotalAmount": "1400.00",
      "acceptedAt": "2026-03-31T12:20:00.000Z"
    },
    "items": [
      {
        "id": 1,
        "projectId": 1,
        "quoteItemId": 1,
        "title": "Diseño UI/UX",
        "description": "...",
        "quantity": "1.00",
        "unitPrice": "800.00",
        "subtotal": "800.00",
        "status": "pending",
        "createdAt": "...",
        "updatedAt": "..."
      }
    ],
    "payments": [
      {
        "id": 1,
        "projectId": 1,
        "registeredByUserId": 1,
        "paymentDate": "2026-03-31T00:00:00.000Z",
        "amount": "500.00",
        "percentageEquivalent": "35.71",
        "paymentMethod": "transfer",
        "reference": "TRF-123456",
        "notes": "Anticipo del 35%",
        "receiptFilePath": "https://...",
        "createdAt": "...",
        "updatedAt": "...",
        "registeredBy": {
          "id": 1,
          "name": "Administrator"
        }
      }
    ],
    "documents": []
  }
}
```

---

### `PATCH /api/projects/:id/status`

Cambia el estado de un proyecto. Valida transiciones válidas y registra en `StatusHistory`.

**URL Params:** `id` — ID numérico del proyecto.

**Request Body:**
```json
{
  "status": "in_progress",
  "notes": "Inicio de desarrollo"
}
```

| Campo    | Tipo   | Requerido | Reglas                                                        |
|----------|--------|-----------|---------------------------------------------------------------|
| `status` | string | Sí        | `"pending_start"`, `"in_progress"`, `"completed"`, `"canceled"` |
| `notes`  | string | No        | max 2000, nullable                                             |

**Transiciones válidas:**
| Estado actual    | Puede cambiar a                     |
|------------------|--------------------------------------|
| `pending_start`  | `in_progress`, `canceled`            |
| `in_progress`    | `completed`, `canceled`              |
| `completed`      | _(no puede cambiar)_                 |
| `canceled`       | _(no puede cambiar)_                 |

> Al cambiar a `in_progress` se registra `startedAt`, a `completed` se registra `finishedAt`, y a `canceled` se registra `canceledAt`.

**Response `200`**
```json
{
  "success": true,
  "message": "Estado del proyecto actualizado",
  "data": {
    "id": 1,
    "projectNumber": "PRY-2026-00001",
    "status": "in_progress",
    "startedAt": "2026-03-31T13:00:00.000Z",
    "...demás campos...",
    "client": { "..." },
    "items": [ "..." ]
  }
}
```

**Errores posibles:**
| Código | Mensaje |
|--------|---------|
| 400 | No se puede cambiar de "completed" a "in_progress". Transiciones válidas: ninguna |
| 404 | Proyecto no encontrado |

---

### `GET /api/projects/:id/payments`

Obtiene todos los pagos de un proyecto.

**URL Params:** `id` — ID numérico del proyecto.

**Response `200`**
```json
{
  "success": true,
  "message": "Pagos del proyecto obtenidos",
  "data": [
    {
      "id": 1,
      "projectId": 1,
      "registeredByUserId": 1,
      "paymentDate": "2026-03-31T00:00:00.000Z",
      "amount": "500.00",
      "percentageEquivalent": "35.71",
      "paymentMethod": "transfer",
      "reference": "TRF-123456",
      "notes": "Anticipo del 35%",
      "receiptFilePath": "https://...",
      "createdAt": "...",
      "updatedAt": "...",
      "registeredBy": {
        "id": 1,
        "name": "Administrator"
      }
    }
  ]
}
```

---

### `GET /api/projects/:id/documents`

Obtiene todos los documentos asociados a un proyecto.

**URL Params:** `id` — ID numérico del proyecto.

**Response `200`**
```json
{
  "success": true,
  "message": "Documentos del proyecto obtenidos",
  "data": [
    {
      "id": 3,
      "clientId": 1,
      "quoteId": null,
      "quoteAcceptanceId": null,
      "projectId": 1,
      "documentType": "payment_receipt",
      "fileName": "recibo-pago-1.pdf",
      "filePath": "https://...",
      "mimeType": "application/pdf",
      "sizeInBytes": 12345,
      "bucket": "cotizador-docs",
      "objectKey": "payments/1/receipts/1-recibo.pdf",
      "uploadedByUserId": 1,
      "createdAt": "2026-03-31T14:00:00.000Z"
    }
  ]
}
```

---

## 6. PAYMENTS (Pagos)

### `POST /api/payments`

Registra un pago para un proyecto. Automáticamente:
- Calcula el `percentageEquivalent` del pago respecto al total del proyecto.
- Recalcula `paidAmount`, `pendingAmount`, `paidPercentage` e `isFullyPaid` del proyecto.
- Genera un recibo PDF y lo sube a Amazon S3.

**Request Body:**
```json
{
  "projectId": 1,
  "amount": 500,
  "paymentDate": "2026-03-31",
  "paymentMethod": "transfer",
  "reference": "TRF-123456",
  "notes": "Anticipo del 35%"
}
```

| Campo           | Tipo   | Requerido | Reglas                                                           |
|-----------------|--------|-----------|------------------------------------------------------------------|
| `projectId`     | number | Sí        | Entero positivo, debe existir en DB                              |
| `amount`        | number | Sí        | > 0, no puede exceder el saldo pendiente del proyecto            |
| `paymentDate`   | string | Sí        | Fecha válida parseable por `Date.parse()` (ej: `"2026-03-31"`)  |
| `paymentMethod` | string | Sí        | `"transfer"`, `"cash"`, `"card"`, `"paypal"`, `"bank_deposit"`, `"other"` |
| `reference`     | string | No        | max 255, nullable                                                |
| `notes`         | string | No        | max 2000, nullable                                               |

**Response `201`**
```json
{
  "success": true,
  "message": "Pago registrado correctamente",
  "data": {
    "payment": {
      "id": 1,
      "projectId": 1,
      "registeredByUserId": 1,
      "paymentDate": "2026-03-31T00:00:00.000Z",
      "amount": "500.00",
      "percentageEquivalent": "35.71",
      "paymentMethod": "transfer",
      "reference": "TRF-123456",
      "notes": "Anticipo del 35%",
      "receiptFilePath": null,
      "createdAt": "2026-03-31T14:00:00.000Z",
      "updatedAt": "2026-03-31T14:00:00.000Z",
      "registeredBy": {
        "id": 1,
        "name": "Administrator"
      }
    },
    "project": {
      "id": 1,
      "clientId": 1,
      "quoteId": 1,
      "quoteAcceptanceId": 1,
      "projectNumber": "PRY-2026-00001",
      "title": "Diseño y desarrollo de sitio web",
      "totalAmount": "1400.00",
      "paidAmount": "500.00",
      "pendingAmount": "900.00",
      "paidPercentage": "35.71",
      "isFullyPaid": false,
      "status": "in_progress",
      "...demás campos..."
    }
  }
}
```

**Errores posibles:**
| Código | Mensaje |
|--------|---------|
| 400 | El monto del pago (1500) excede el saldo pendiente (900.00) |
| 400 | No se pueden registrar pagos en un proyecto cancelado |
| 400 | El proyecto ya está completamente pagado |
| 404 | Proyecto no encontrado |

---

## 7. DOCUMENTS (Documentos)

### `GET /api/documents/:id`

Obtiene la metadata de un documento.

**URL Params:** `id` — ID numérico del documento.

**Response `200`**
```json
{
  "success": true,
  "message": "Documento obtenido",
  "data": {
    "id": 1,
    "clientId": 1,
    "quoteId": 1,
    "quoteAcceptanceId": null,
    "projectId": null,
    "documentType": "quote_pdf",
    "fileName": "quote-COT-2026-00001.pdf",
    "filePath": "https://cotizador-docs.s3.us-east-1.amazonaws.com/quotes/1/quote-COT-2026-00001.pdf",
    "mimeType": "application/pdf",
    "sizeInBytes": 15234,
    "bucket": "cotizador-docs",
    "objectKey": "quotes/1/quote-COT-2026-00001.pdf",
    "uploadedByUserId": 1,
    "createdAt": "2026-03-31T12:00:00.000Z",
    "client": {
      "id": 1,
      "businessName": "Empresa ABC S.A."
    },
    "quote": {
      "id": 1,
      "quoteNumber": "COT-2026-00001"
    },
    "project": null,
    "uploadedBy": {
      "id": 1,
      "name": "Administrator"
    }
  }
}
```

---

### `GET /api/documents/:id/download-url`

Genera una URL firmada (signed URL) de Amazon S3 para descargar el archivo. Válida por 1 hora.

**URL Params:** `id` — ID numérico del documento.

**Response `200`**
```json
{
  "success": true,
  "message": "URL de descarga generada",
  "data": {
    "url": "https://cotizador-docs.s3.us-east-1.amazonaws.com/quotes/1/quote-COT-2026-00001.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=...&X-Amz-Expires=3600&X-Amz-Signature=...",
    "fileName": "quote-COT-2026-00001.pdf",
    "mimeType": "application/pdf"
  }
}
```

**Errores posibles:**
| Código | Mensaje |
|--------|---------|
| 400 | El documento no tiene archivo asociado en S3 |
| 404 | Documento no encontrado |

---

## Errores globales

Estos errores pueden ocurrir en cualquier endpoint:

| Código | Mensaje                               | Causa                                       |
|--------|---------------------------------------|---------------------------------------------|
| 400    | Error de validación                   | Body no cumple el schema de validación       |
| 401    | Token de autenticación requerido       | No se envió header `Authorization`           |
| 401    | Token inválido                         | JWT malformado o con firma incorrecta        |
| 401    | Token expirado                         | JWT expirado                                 |
| 401    | Usuario no encontrado o inactivo       | Usuario del token no existe o está desactivado |
| 403    | No tienes permisos para esta acción    | Rol del usuario no tiene acceso              |
| 404    | Ruta no encontrada: METHOD /path       | Ruta inexistente                             |
| 409    | Ya existe un registro con ese valor de X | Unique constraint violation (email, etc.)   |
| 500    | Error interno del servidor             | Error no controlado                          |

---

## Notas sobre tipos de datos en respuestas

- **Decimales (money)**: Los campos `Decimal` de Prisma se devuelven como **strings** (ej: `"1400.00"`). El frontend debe hacer `parseFloat()` si necesita operar con ellos.
- **Fechas**: Se devuelven en formato **ISO 8601** (ej: `"2026-03-31T12:00:00.000Z"`).
- **Booleanos**: Se devuelven como `true`/`false` nativos de JSON.
- **Nullables**: Los campos opcionales que no tienen valor se devuelven como `null`.

---

## Flujo completo de ejemplo

```
1. POST /api/auth/login              → Obtener token
2. POST /api/clients                 → Crear cliente
3. POST /api/quotes                  → Crear cotización con ítems
4. POST /api/quotes/1/issue          → Emitir cotización
5. POST /api/quotes/1/generate-pdf   → Generar PDF en S3
6. POST /api/quotes/1/send           → Enviar al cliente
7. POST /api/quotes/1/accept         → Cliente acepta → Se crea proyecto automáticamente
8. PATCH /api/projects/1/status      → Cambiar a "in_progress"
9. POST /api/payments                → Registrar primer pago parcial
10. POST /api/payments               → Registrar segundo pago
11. GET /api/projects/1              → Ver resumen financiero completo
12. PATCH /api/projects/1/status     → Marcar como "completed"
```

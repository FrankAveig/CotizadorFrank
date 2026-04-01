# Guía para el panel de administración (frontend)

Este documento resume **qué debe incorporar el front del administrador** frente al API actual: autenticación de staff, clientes, cotizaciones (impuestos, flujo), proyectos (facturas), documentos y variables de entorno relevantes.

**Base URL de ejemplo:** `http://localhost:3000/api`  
**Autenticación staff:** header `Authorization: Bearer <token_jwt>` en todas las rutas salvo login.

---

## 1. Autenticación

| Acción | Método | Ruta | Body |
|--------|--------|------|------|
| Login | `POST` | `/api/auth/login` | `{ "email": string, "password": string }` |

Guardar el `token` y enviarlo en cada petición del panel.

---

## 2. Clientes

### Crear / editar cliente

- **Contraseña del portal del cliente (opcional en schema, recomendada en la práctica):**  
  - `POST /api/clients` y `PUT /api/clients/:id` aceptan `password` (mínimo 8 caracteres).  
  - Si el cliente no tiene contraseña guardada, **no podrá iniciar sesión** en `/api/client/auth/login`.

**Sugerencia de UI:** en alta de cliente, campo “Contraseña portal cliente” (o generar una y mostrarla una sola vez). En edición, permitir “Establecer nueva contraseña”.

---

## 3. Cotizaciones

### Impuestos (`taxRate`)

- El API **ya no** usa `taxAmount` fijo en el body de creación/edición.
- Enviar **`taxRate`** como **porcentaje numérico** (ej. `15` = 15%).
- El backend calcula:
  - base imponible ≈ `subtotal - discountAmount`
  - `taxAmount = base × taxRate / 100`
  - `totalAmount = base + taxAmount`

**Crear cotización** `POST /api/quotes` — campos relevantes:

```json
{
  "clientId": 1,
  "title": "Servicios",
  "currency": "USD",
  "discountAmount": 0,
  "taxRate": 15,
  "validUntil": "2026-05-01T23:59:59.000Z",
  "notes": null,
  "items": [
    { "title": "Concepto", "description": null, "quantity": 1, "unitPrice": 100 }
  ]
}
```

**Importante para el front**

- `clientId` debe ser **número**, no string (`"1"` falla validación).
- `validUntil` debe ser **ISO 8601 completo** (con hora), no solo `"2026-05-01"`.

**Editar** `PUT /api/quotes/:id` (solo en borrador): mismas reglas; si se envían `items`, se recalculan totales con `taxRate` / `discountAmount`.

**Mostrar en UI:** subtotal, descuento, **porcentaje de impuesto**, monto de impuesto y total usando los campos que devuelve el API (`subtotal`, `discountAmount`, `taxRate`, `taxAmount`, `totalAmount`).

### Flujo cotización (staff)

| Paso | Método | Ruta |
|------|--------|------|
| Emitir | `POST` | `/api/quotes/:id/issue` |
| Enviar al cliente (email + PDF + enlace al portal) | `POST` | `/api/quotes/:id/send` |
| Aceptación (total o parcial), crea proyecto | `POST` | `/api/quotes/:id/accept` |

**Aceptación parcial** — body ejemplo:

```json
{
  "acceptanceType": "partial",
  "acceptedItemIds": [1, 3],
  "notes": "Solo estos ítems por ahora"
}
```

**Aceptación total:**

```json
{
  "acceptanceType": "full",
  "notes": null
}
```

*(Los ítems no aceptados en modo parcial quedan rechazados en la cotización.)*

---

## 4. Proyectos

### Listado y detalle

| Método | Ruta | Uso |
|--------|------|-----|
| `GET` | `/api/projects` | Lista con paginación / filtros (query según API principal) |
| `GET` | `/api/projects/:id` | Detalle con cliente, ítems, pagos, documentos |
| `PATCH` | `/api/projects/:id/status` | Cambiar estado (`pending_start`, `in_progress`, `completed`, `canceled`) + `notes` opcional |
| `GET` | `/api/projects/:id/payments` | Pagos del proyecto |
| `GET` | `/api/projects/:id/documents` | Documentos del proyecto |

En **documentos** del proyecto, el API puede devolver:

- `documentType` (incluye `invoice_pdf` para facturas emitidas por ustedes)
- `fileName`, `invoiceNumber`, `notes`, `mimeType`, `sizeInBytes`, `createdAt`
- `uploadedBy` (quién subió el archivo)

### Subir factura al proyecto (nuevo)

| Método | Ruta | Tipo |
|--------|------|------|
| `POST` | `/api/projects/:id/invoices` | `multipart/form-data` |

**Campos del formulario:**

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| `file` | Sí | Archivo: **PDF** o imagen **JPEG / PNG / WebP**. Máx. **15 MB**. |
| `invoiceNumber` | No | Texto, ej. número de factura SRI / interno (máx. 100 caracteres). |
| `notes` | No | Nota visible en listados (máx. 2000 caracteres). |

**Ejemplo (JavaScript):**

```javascript
const formData = new FormData();
formData.append('file', archivoFile); // del <input type="file">
formData.append('invoiceNumber', '001-001-000012345');
formData.append('notes', 'Factura correspondiente a abril 2026');

await fetch(`${API}/api/projects/${projectId}/invoices`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}` },
  body: formData,
});
```

**No** establecer manualmente `Content-Type` en el `fetch` (el navegador debe enviar el `boundary` del multipart).

**Respuesta esperada:** objeto documento creado (incluye `id` para descarga).

---

## 5. Descarga de documentos (staff)

Para cualquier documento guardado en S3 (cotización, aceptación, recibo de pago, **factura de proyecto**, etc.):

1. `GET /api/documents/:id` — metadatos.
2. `GET /api/documents/:id/download-url` — respuesta con URL firmada temporal para descargar el archivo.

En la UI del proyecto: botón “Descargar” que llame a `download-url` y abra/redirija a la URL o descargue el blob.

---

## 6. Pagos

Registrar pagos según la documentación general del API (`POST /api/payments`, etc.). Los recibos PDF se generan en backend; el cliente puede recibir email de confirmación si SMTP está configurado.

---

## 7. Notificaciones por correo (backend / DevOps)

No es lógica de pantalla, pero el administrador debe saber que existen:

| Variable | Propósito |
|----------|-----------|
| `ADMIN_NOTIFICATION_EMAIL` | Correo que recibe aviso cuando un **cliente** acepta o acepta parcialmente una cotización (desde el portal). Incluye nota del cliente si la envió. |
| `PORTAL_URL` | Base del portal del cliente (enlaces en correos). |
| SMTP (`SMTP_*`, `EMAIL_FROM`, …) | Envío de cotizaciones, cambios de estado y pagos. |

---

## 8. Checklist rápido — qué añadir en el admin

- [ ] Login staff y uso global del JWT.
- [ ] Clientes: campo contraseña (alta/edición) para acceso al portal.
- [ ] Cotizaciones: **`taxRate` %**, tipos numéricos correctos, **`validUntil` en ISO 8601**.
- [ ] Cotizaciones: flujo emitir → enviar; pantalla de aceptación staff (full/partial + notas).
- [ ] Proyectos: detalle con lista de documentos mostrando tipo, nombre, **número de factura**, notas y quién subió.
- [ ] Proyectos: **formulario subir factura** (`multipart`, campo `file` + opcionales `invoiceNumber`, `notes`).
- [ ] Documentos: botón descarga vía **`/api/documents/:id/download-url`**.
- [ ] (Opcional) Recordatorio en documentación interna: tras clonar el repo, ejecutar `npm run db:generate` si falta `src/generated/prisma`.

---

## 9. Documentación complementaria

- **`API_DOCUMENTATION.md`:** listado amplio de endpoints, cuerpos y respuestas.
- **`CLIENT_PORTAL_DOCUMENTATION.md`:** portal del cliente (login, dashboard, aceptación, documentos).

Si el front del admin y el portal comparten cliente HTTP, reutilicen el mismo patrón de errores (`success`, `message`, `errors` en validación Zod).

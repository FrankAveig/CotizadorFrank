# Facturas de proyecto: administrador y cliente

Este documento describe **solo** el flujo de facturas que tú emites al cliente: cómo las sube el **administrador** y **dónde las ve el cliente** en el portal. El backend ya está implementado; falta alinear las pantallas del front.

---

## 1. Administrador: cómo subir una factura

### Endpoint

| Método | URL | Auth |
|--------|-----|------|
| `POST` | `/api/projects/:id/invoices` | `Authorization: Bearer <token_staff>` |

`:id` es el **ID numérico del proyecto** (no del cliente ni de la cotización).

### Formato del cuerpo

- **Tipo:** `multipart/form-data` (no JSON).
- **Campo obligatorio:** `file` — el archivo (PDF o imagen JPEG, PNG, WebP; máximo **15 MB**).
- **Opcionales (texto):**
  - `invoiceNumber` — número de factura (ej. secuencia fiscal), máx. 100 caracteres.
  - `notes` — nota corta (ej. período facturado), máx. 2000 caracteres.

### Ejemplo (JavaScript)

```javascript
const formData = new FormData();
formData.append('file', fileFromInput); // <input type="file" />
formData.append('invoiceNumber', '001-001-000123456');
formData.append('notes', 'Factura abril 2026');

await fetch(`${API_BASE}/api/projects/${projectId}/invoices`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${staffToken}` },
  body: formData,
});
```

No envíes `Content-Type` a mano: el navegador debe poner el boundary del multipart.

### Qué hace el backend

- Sube el archivo a S3 en la carpeta `invoices/{projectId}/...`.
- Crea un registro en **documentos** con:
  - `documentType`: `invoice_pdf`
  - `projectId` y `clientId` del proyecto (así el cliente puede verlo).
- Respuesta: objeto del documento creado (incluye `id` para descargas).

### Dónde ubicarlo en la UI del admin (recomendación)

- Pantalla **detalle del proyecto** (mismo lugar donde ya listas pagos y documentos).
- Bloque **“Facturas emitidas”** o **“Documentos del proyecto”** con:
  - botón **“Subir factura”** que abre modal o fila con input file + campos opcionales número y nota;
  - tras éxito, refrescar la lista llamando a `GET /api/projects/:id/documents`.

La lista puede mostrar: nombre de archivo, `invoiceNumber`, `notes`, fecha, tipo (`invoice_pdf`), y quién subió (`uploadedBy`) si lo devuelve el API.

### Descarga desde el admin

Para abrir o descargar el archivo:

1. `GET /api/documents/:documentId/download-url` (mismo JWT staff).
2. Usar la `url` devuelta (firmada, caduca al cabo de un tiempo) en un enlace o `window.open`.

---

## 2. Cliente: dónde se presentan las facturas

Las facturas **no** son un endpoint aparte: son **documentos** del cliente, vinculados al proyecto.

### Dónde aparecen los datos

1. **Detalle del proyecto en el portal**  
   `GET /api/client/projects/:id`  
   En la respuesta, el array **`documents`** incluye cada documento del proyecto, entre ellos los de tipo `invoice_pdf`, con campos útiles para la UI:
   - `id`, `documentType`, `fileName`, `invoiceNumber`, `notes`, `createdAt`.

2. **Listado global de documentos del cliente**  
   `GET /api/client/documents`  
   Devuelve todos los documentos del cliente (cotizaciones, aceptaciones, facturas, etc.). Puedes filtrar en query:
   - `?documentType=invoice_pdf` — solo facturas.

### Cómo presentarlo en el portal del cliente (recomendación)

| Ubicación sugerida | Contenido |
|--------------------|-----------|
| **Vista “Mi proyecto” / detalle de proyecto** | Sección **“Facturas”** o **“Documentos”**: filas donde `documentType === 'invoice_pdf'`. Mostrar: número de factura (`invoiceNumber` o el `fileName` si no hay número), `notes` si existe, fecha (`createdAt`), botón **“Descargar”**. |
| **Opcional: “Documentos” en el menú** | Misma lista filtrada con `documentType=invoice_pdf` para quien quiera un histórico solo de facturas. |

### Descarga en el portal del cliente

1. El cliente debe estar logueado (JWT tipo cliente).
2. `GET /api/client/documents/:id/download-url`  
   El backend comprueba que el documento pertenezca a ese `clientId`.
3. Abrir la URL firmada o forzar descarga.

---

## 3. Resumen rápido

| Rol | Acción | Endpoint principal |
|-----|--------|---------------------|
| Admin | Subir factura | `POST /api/projects/:projectId/invoices` (multipart, campo `file`) |
| Admin | Ver listado en proyecto | `GET /api/projects/:projectId/documents` |
| Admin | Descargar | `GET /api/documents/:id/download-url` |
| Cliente | Ver facturas en proyecto | `GET /api/client/projects/:id` → `documents` (`invoice_pdf`) |
| Cliente | Ver solo facturas | `GET /api/client/documents?documentType=invoice_pdf` |
| Cliente | Descargar | `GET /api/client/documents/:id/download-url` |

---

## 4. Referencia

- Detalle amplio del portal: `CLIENT_PORTAL_DOCUMENTATION.md`.
- Panel admin general: `ADMIN_PANEL_GUIDE.md`.
- API completa: `API_DOCUMENTATION.md`.

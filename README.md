# Landing 3D: data center de DonWeb

Landing interactiva en 3D donde el visitante recorre el pasillo de un data center y elige el rack de cada servicio. Al hacer clic en un rack, la cámara se acerca, la puerta se abre y aparece el panel con los planes, precios y características, listo para agregar al carrito.

Productos incluidos, en el orden del pasillo (cuanto más adentro, más potencia):

1. Web Hosting
2. WordPress Hosting
3. SitioSimple
4. Cloud Server
5. Servidor Dedicado
6. Servidor GPU para IA

## Cómo verla

- **En tu computadora:** abrí `index.html` con doble clic. No necesita instalación ni compilación.
- **Con un servidor local (opcional):** desde esta carpeta, `npx serve .` y abrí la dirección que indique.
- **En GitHub Pages:** subí el repositorio, andá a *Settings → Pages*, elegí la rama `main` y la carpeta raíz (`/`). En unos minutos queda publicada en `https://<usuario>.github.io/<repositorio>/`.

Requiere conexión a internet para cargar la librería 3D (three.js) y la tipografía (Archivo, de Google Fonts).

## Estructura

```
index.html        Estructura de la página (encabezado, barra de productos, panel de planes)
css/estilos.css   Estilos de la interfaz (incluye modo claro y oscuro del panel)
js/app.js         Catálogo de productos, carrito, panel y toda la escena 3D
```

Todos los logos van incrustados dentro de `index.html` y `js/app.js`: el de DonWeb, el de NVIDIA en la puerta del rack de GPU y los de Laravel, n8n, Node.js y Docker en la puerta del rack de Cloud. Así la página funciona igual con doble clic que publicada en un servidor.

## Controles

| Acción | Escritorio | Celular |
| --- | --- | --- |
| Avanzar o retroceder por el pasillo | W / S, flechas ↑ ↓ o la rueda del mouse | Deslizar hacia arriba o abajo |
| Girar la vista | A / D, flechas ← → o arrastrar con el mouse | Deslizar a los costados |
| Ir más rápido | Mantener Shift | — |
| Ver los planes de un producto | Clic en el rack o en su tarjeta de abajo | Tocar el rack o su tarjeta |
| Cerrar el panel | Esc, la X o cualquier tecla de movimiento | La X |
| Volver al inicio | Clic en el logo de DonWeb | Tocar el logo de DonWeb |

## Links directos

Cada producto se puede abrir directamente desde un link, útil para campañas:

`index.html#webhosting` · `#wordpress` · `#sitiosimple` · `#cloud` · `#dedicados` · `#gpu`

Después de abrir el rack, la URL se limpia, así que al refrescar la página siempre se empieza desde el pasillo.

## Antes de pasar a producción

- [ ] **Conectar el carrito real.** La función `agregarAlCarrito()` en `js/app.js` es un prototipo que lleva a `https://donweb.com/es-ar/mis-compras`. Hay que reemplazarla por la misma llamada que usan los botones "Continuar" / "Agregar al carro" del sitio.
- [ ] **Códigos de producto.** El campo `codigo` de cada plan (por ejemplo `wp-full`) es provisorio. Hay que reemplazarlo por el código real de cada producto.
- [ ] **Precios.** Son los publicados en donweb.com/es-ar a fines de noviembre de 2026, en pesos argentinos con IVA. Lo ideal es cargarlos desde la misma fuente de precios del sitio en lugar de dejarlos fijos en el código.
- [ ] **Cloud Server.** Los planes *Cloud Apps* (desde $14.900) y *Cloud Producción* (desde $27.900) tienen precios de ejemplo para la demo, marcados con un comentario en `js/app.js`. Hay que reemplazarlos por los reales y confirmar que el "desde $5.165" corresponde a la configuración de 1 vCPU y 1 GB.
- [ ] **Logos de terceros.** Usar los logos de NVIDIA, Laravel, n8n, Node.js y Docker requiere autorización de cada marca o respetar sus normas de uso de marca.
- [ ] **three.js.** Se carga desde jsDelivr con la versión fija 0.147.0. Si la política del sitio pide no depender de CDNs externos, descargá `three.min.js` de esa versión y cambiá la ruta en `index.html`.

## Cómo cambiar o agregar productos

Todo el catálogo está en la constante `RACKS`, al principio de `js/app.js`. Cada producto define:

- `id`, `nombre` y `bajada`: identificador (también usado en el link directo), título y descripción.
- `side` y `slot`: de qué lado del pasillo va (`-1` izquierda, `1` derecha) y en qué posición de la fila.
- `tipo`: qué equipos se ven adentro del rack (`site`, `web`, `wp`, `cloud`, `ded` o `gpu`).
- `periodos`: los períodos de contratación a elegir, o `null` si el precio es mensual fijo. `periodoFijo: 12` indica pago anual.
- `planes`: cada plan con `codigo`, `nombre`, `pitch`, precio (`precios` por período o `precioMes`) y características (`specs` o `caracteristicas`).
- `comunes`: características que se suman a todos los planes del producto.
- Opcionales: `acento` (color al iluminarse), `ancho` y `span: 2` para un rack que ocupa dos lugares.

Si agregás un producto, sumá también su tarjeta en la barra inferior y su pestaña en el panel dentro de `index.html` (con el mismo `data-rack`).

## Rendimiento y accesibilidad

- En reposo la escena se dibuja a 30 cuadros por segundo. Al moverse vuelve a la máxima fluidez.
- En pantallas de alta densidad se desactiva el suavizado de bordes, que ahí casi no se nota y es costoso.
- Si el equipo no sostiene una animación fluida, la página baja de a poco la resolución interna del 3D.
- Si el navegador no soporta WebGL, la barra de productos y el panel de planes siguen funcionando sin la escena 3D.
- Respeta la preferencia de "reducir movimiento" del sistema: sin travelling de entrada ni animaciones largas.
- La barra de productos y el panel se pueden usar por completo con teclado.

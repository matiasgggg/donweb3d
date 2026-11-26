(() => {
  'use strict';

  /* =====================================================================
     1. CATÁLOGO
     Precios en ARS con IVA, publicados en donweb.com/es-ar el 25/11/2026.
     En producción, cargar estos datos desde el mismo origen de precios del sitio.
     `codigo` es un identificador provisorio: reemplazar por el código real del producto.
     ===================================================================== */
  // Logo de NVIDIA provisto por DonWeb, para la puerta del rack de GPU (fondo transparente, 256 × 184 px)
  const LOGO_NVIDIA = { src: 'data:image/png;base64,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', w: 256, h: 184 };

  const RACKS = [
    {
      id: 'sitiosimple', nombre: 'SitioSimple', side: 1, slot: 2, tipo: 'site',
      bajada: 'Tu página o tienda online creada con IA en segundos, con hosting, dominio y correos incluidos. Puedes probarla gratis 15 días, sin tarjeta.',
      periodos: null, periodoFijo: 12, planInicial: 'ss-tienda',
      comunes: ['Constructor con IA y editor arrastra y suelta', 'Hosting y certificado SSL incluidos', 'Dominio gratis por 1 año', 'Email marketing y blog incluidos', 'Optimizado para SEO y en varios idiomas', 'Soporte 24/7 y acompañamiento personalizado'],
      planes: [
        { codigo: 'ss-pagina', nombre: 'Página Web', precioMes: 3800,
          pitch: 'Ideal para que tu negocio o proyecto tenga presencia online.',
          specs: ['10 cuentas de correo con 30 GB', 'Integración con redes sociales'] },
        { codigo: 'ss-tienda', nombre: 'Página Web + Tienda', tag: 'Más elegido', precioMes: 3900,
          pitch: 'Vende tus productos y aumenta tus ganancias, sin comisión por ventas.',
          specs: ['Catálogo de productos, stock y pedidos', 'Medios de pago y de envío', 'Cupones y promociones', 'Múltiples monedas', '20 cuentas de correo con 100 GB'] }
      ]
    },
    {
      id: 'webhosting', nombre: 'Web Hosting', side: -1, slot: 4, tipo: 'web',
      bajada: 'Alojamiento con discos NVMe y panel Ferozo, con dominio, SSL, correos y migración gratuita.',
      periodos: [1, 12, 24, 48], periodoInicial: 12, planInicial: 'wh-full',
      comunes: ['Panel de control Ferozo', 'Transferencia sin medición', 'Protección DDoS y firewall de aplicaciones', 'Migración gratuita'],
      planes: [
        { codigo: 'wh-personal', nombre: 'Web Hosting Personal', lista: 6900,
          precios: { 1: 6900, 12: 3900, 24: 3700, 48: 3500 },
          pitch: 'Lo básico para comenzar con tu presencia online con la velocidad de un hosting profesional.',
          caracteristicas: ['20 GB de almacenamiento NVMe', 'Certificado SSL gratis', 'No incluye dominio ni cuentas de correo', 'Backups semanales de 5 GB', '1 base de datos'] },
        { codigo: 'wh-emprendedor', nombre: 'Web Hosting Emprendedor', lista: 9900,
          precios: { 1: 9900, 12: 4400, 24: 4200, 48: 4000 },
          pitch: 'Tu presencia profesional completa: marca propia, dominio y correos en un solo lugar.',
          caracteristicas: ['40 GB de almacenamiento NVMe', 'Dominio gratis contratando 12 meses o más', '10 cuentas de correo', 'Backups semanales de 5 GB', '5 bases de datos'] },
        { codigo: 'wh-full', nombre: 'Web Hosting Full+', tag: 'Recomendado', lista: 12900,
          precios: { 1: 12900, 12: 4900, 24: 4700, 48: 4500 },
          pitch: 'Potencia y seguridad máxima: lanza tu proyecto con ayuda de la IA.',
          caracteristicas: ['100 GB de almacenamiento NVMe', 'Dominio gratis contratando 12 meses o más', '50 cuentas de correo', 'Backups diarios de 25 GB', 'Git integrado y 30 bases de datos', 'Asistente IA para tu sitio'] }
      ]
    },
    {
      id: 'wordpress', nombre: 'WordPress Hosting', side: 1, slot: 7, tipo: 'wp',
      bajada: 'WordPress preinstalado sobre servidores LiteSpeed, con SSL, migración asistida y soporte 24/7.',
      periodos: [1, 12, 24, 48], periodoInicial: 12, planInicial: 'wp-full',
      planes: [
        { codigo: 'wp-personal', nombre: 'WordPress Personal', lista: 7900,
          precios: { 1: 7900, 12: 4900, 24: 4700, 48: 4500 },
          pitch: 'Lo básico para empezar a explorar WordPress con la velocidad de un hosting profesional.',
          caracteristicas: ['20 GB de almacenamiento NVMe', 'Certificado SSL gratis', 'No incluye dominio ni cuentas de correo', 'Backups semanales de 5 GB', 'Aceleración LiteSpeed y WordPress preinstalado', 'Git integrado y migrador automático'] },
        { codigo: 'wp-emprendedor', nombre: 'WordPress Emprendedor', lista: 10900,
          precios: { 1: 10900, 12: 5400, 24: 5200, 48: 5000 },
          pitch: 'Tu presencia profesional completa: marca propia, dominio y correos en un solo lugar.',
          caracteristicas: ['40 GB de almacenamiento NVMe', 'Dominio gratis contratando 12 meses o más', '10 cuentas de correo', 'Backups semanales de 5 GB', 'Plantillas prediseñadas', 'Optimizado para WooCommerce'] },
        { codigo: 'wp-full', nombre: 'WordPress Full+', tag: 'Recomendado', lista: 13900,
          precios: { 1: 13900, 12: 5900, 24: 5700, 48: 5500 },
          pitch: 'Potencia y seguridad máxima: lanza tu proyecto con ayuda de la IA y prueba cambios antes de publicarlos.',
          caracteristicas: ['100 GB de almacenamiento NVMe', 'Dominio gratis contratando 12 meses o más', '50 cuentas de correo', 'Backups diarios de 25 GB', 'WordPress Stage para probar cambios', 'Asistente IA para WordPress'] }
      ]
    },
    {
      id: 'cloud', nombre: 'Cloud Server', side: -1, slot: 10, tipo: 'cloud',
      bajada: 'Servidores virtuales en alta disponibilidad: elige CPU y RAM, escala en minutos y paga solo lo que usas.',
      periodos: null, planInicial: 'cloud-inicial',
      comunes: ['300 Mb/s dedicados y simétricos', '1 TB de transferencia mensual', 'IPv4 e IPv6 dedicadas', 'Datos replicados en 3 nodos', 'Backups semanales y 2 snapshots gratis', 'Acceso root y más de 30 imágenes Click&Go'],
      planes: [
        // "desde $5.165" es el precio de entrada publicado; confirmar que corresponde a esta configuración.
        { codigo: 'cloud-inicial', nombre: 'Cloud Inicial', desde: true, lista: 8034, precioMes: 5165,
          pitch: 'Para una instalación mínima de Linux y primeras pruebas.',
          specs: ['1 vCPU y 1 GB de RAM'] },
        // Precio pendiente: completar con la tabla de precios de Cloud.
        { codigo: 'cloud-apps', nombre: 'Cloud Apps', precioMes: null,
          pitch: 'Para paneles como Ferozo, cPanel o CloudPanel y apps como WordPress, Odoo o n8n.',
          specs: ['2 vCPU y 4 GB de RAM'] },
        { codigo: 'cloud-produccion', nombre: 'Cloud Producción', precioMes: null,
          pitch: 'Para varias aplicaciones en producción, Windows o tráfico sostenido.',
          specs: ['4 vCPU y 8 GB de RAM'] }
      ]
    },
    {
      id: 'dedicados', nombre: 'Servidor Dedicado', side: 1, slot: 13, tipo: 'ded',
      bajada: 'Hardware físico solo para tu proyecto, en nuestros datacenters de Rosario, con acceso root y transferencia ilimitada.',
      periodos: null, planInicial: 'ded-powerup-i5',
      comunes: ['Transferencia mensual ilimitada', 'Una IPv4 pública incluida', 'Acceso root o administrador', 'Ancho de banda ampliable hasta 1 Gbit/s'],
      planes: [
        { codigo: 'ded-oferta-i3', nombre: 'Oferta i3', tag: 'Hasta agotar stock', precioMes: 57846,
          pitch: 'La entrada al bare metal para pocos sitios con demanda baja.',
          specs: ['Intel Core i3 (6.ª o 7.ª generación)', '16 GB de RAM', '240 GB SSD', '100 Mbit/s simétricos', 'Ubuntu Server 24.04'] },
        { codigo: 'ded-powerup-i5', nombre: 'Power Up i5', precioMes: 104146,
          pitch: 'Para varios sitios con bases de datos exigentes, por ejemplo hasta tres Moodle.',
          specs: ['Intel Core i5', '32 GB de RAM', '240 GB NVMe y 1 TB SATA', 'Disco de 1 TB para backup', '100 Mbit/s simétricos'] },
        { codigo: 'ded-powerup-i7', nombre: 'Power Up i7', precioMes: 174632,
          pitch: 'Para muchos sitios o aplicaciones con uso intensivo de bases de datos.',
          specs: ['Intel Core i7', '64 GB de RAM', '240 GB NVMe y 2 TB NVMe', 'Disco de 1 TB para backup', '100 Mbit/s simétricos'] }
      ]
    },
    {
      // Rack más ancho (ocupa dos lugares de la fila) y con acento verde al iluminarse
      id: 'gpu', nombre: 'Servidor GPU para IA', side: -1, slot: 16, span: 2, ancho: 1.2, tipo: 'gpu', logoPuerta: LOGO_NVIDIA,
      acento: '#76B900', foco: 0x9be21a, focoIntensidad: 0.7,
      bajada: 'Servidores dedicados con GPU para entrenar y servir modelos de IA y LLM, con drivers y CUDA listos para usar desde el primer día.',
      periodos: null, planInicial: 'gpu-3090-x1',
      comunes: ['CPU Intel Core i9 para GPU Servers', '2 discos NVMe de 2 TB', '1 Gbit/s dedicado y simétrico', 'Ubuntu Server 26.04 con drivers NVIDIA y CUDA 12.x', 'Transferencia mensual ilimitada', 'Una IPv4 pública y acceso root'],
      planes: [
        { codigo: 'gpu-3090-x1', nombre: 'RTX 3090', precioMes: 595385,
          pitch: 'Para empezar a servir modelos y hacer inferencia con una GPU de 24 GB.',
          specs: ['1 GPU RTX 3090 con 24 GB GDDR6X', '64 GB de RAM'] },
        { codigo: 'gpu-3090-x2', nombre: 'RTX 3090 doble', precioMes: 716791,
          pitch: 'Dos GPUs para modelos más grandes o varios servicios a la vez.',
          specs: ['2 GPUs RTX 3090 con 48 GB GDDR6X en total', '64 GB de RAM'] },
        { codigo: 'gpu-5090-x1', nombre: 'RTX 5090', precioMes: 1042177,
          pitch: 'GPU de última generación para inferencia rápida y entrenamiento.',
          specs: ['1 GPU RTX 5090 con 32 GB GDDR7', '64 GB de RAM'] },
        { codigo: 'gpu-5090-x2', nombre: 'RTX 5090 doble', precioMes: 1482275,
          pitch: 'Máxima potencia: dos GPUs de última generación y 128 GB de RAM.',
          specs: ['2 GPUs RTX 5090 con 64 GB GDDR7 en total', '128 GB de RAM'] }
      ]
    }
  ];

  /* =====================================================================
     2. CARRITO
     Prototipo: guarda la selección y lleva al carrito del sitio.
     Para producción, reemplazar el cuerpo de agregarAlCarrito() por la misma
     llamada que usan los botones "Continuar" / "Agregar al carro" de donweb.com.
     ===================================================================== */
  const CARRITO_URL = 'https://donweb.com/es-ar/mis-compras';
  const carrito = [];
  function agregarAlCarrito(rack, plan, periodo) {
    carrito.push({ rack: rack.id, plan: plan.codigo, periodo: periodo });
    const q = new URLSearchParams({ origen: 'landing-datacenter', plan: plan.codigo, periodo: String(periodo) });
    return CARRITO_URL + '?' + q.toString();
  }

  /* =====================================================================
     3. UTILIDADES
     ===================================================================== */
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sheetMQ = window.matchMedia('(max-width: 719px)');
  const nf = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 });
  const money = (n) => '$' + nf.format(n);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const rackById = {};
  RACKS.forEach((r) => { rackById[r.id] = r; });
  const periodLabel = (p) => (p === 1 ? '1 mes' : p + ' meses');
  const precioMes = (r, pl, p) => (r.periodos ? pl.precios[p] : pl.precioMes);
  function desde(r) {
    const vals = r.planes.map((pl) => precioMes(r, pl, r.periodoInicial)).filter((v) => v != null);
    return Math.min.apply(null, vals);
  }
  const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7"/></svg>';

  document.querySelectorAll('[data-desde]').forEach((el) => {
    el.textContent = 'desde ' + money(desde(rackById[el.dataset.desde])) + '/mes';
  });

  /* =====================================================================
     4. PANEL DE PLANES
     ===================================================================== */
  const panel = document.getElementById('panel');
  const panelTitle = document.getElementById('panelTitle');
  const panelLede = document.getElementById('panelLede');
  const periodsEl = document.getElementById('periods');
  const plansEl = document.getElementById('plans');
  const footEl = document.getElementById('panelFoot');
  const panelBody = document.getElementById('panelBody');
  const live = document.getElementById('live');
  const hint = document.getElementById('hint');
  const cartPill = document.getElementById('cartPill');
  const cartCount = document.getElementById('cartCount');
  const rackButtons = Array.from(document.querySelectorAll('[data-rack]'));

  const state = { active: null, hover: null, open: false, sel: {}, periodo: {}, added: null, opener: null };
  RACKS.forEach((r) => { state.sel[r.id] = r.planInicial; state.periodo[r.id] = r.periodoInicial || r.periodoFijo || 1; });

  function priceHTML(r, pl) {
    const m = precioMes(r, pl, state.periodo[r.id]);
    if (m == null) return '<span class="pp-row"><span class="pp-now is-missing">[precio]</span><span class="pp-per">/mes</span></span>';
    let top = r.periodoFijo ? '<span class="pp-top"><span class="pp-was">pago anual</span></span>' : '';
    if (pl.lista && pl.lista > m) {
      top = '<span class="pp-top"><s class="pp-was"><span class="sr-only">Antes </span>' + money(pl.lista) + '</s>' +
            '<span class="pp-save">Ahorras ' + Math.round((1 - m / pl.lista) * 100) + '%</span></span>';
    }
    return top + '<span class="pp-row">' + (pl.desde ? '<span class="pp-from">desde</span>' : '') +
      '<span class="pp-now">' + money(m) + '</span><span class="pp-per">/mes</span></span>';
  }

  function planHTML(r, pl) {
    const id = 'plan-' + pl.codigo;
    const sel = state.sel[r.id] === pl.codigo;
    const feats = (pl.specs || []).concat(pl.caracteristicas || [], r.comunes || []);
    return '<div class="plan' + (sel ? ' is-selected' : '') + '" data-codigo="' + esc(pl.codigo) + '">' +
      '<input class="plan-radio" type="radio" name="plan" id="' + id + '" value="' + esc(pl.codigo) + '"' + (sel ? ' checked' : '') + '>' +
      '<label class="plan-main" for="' + id + '">' +
        '<span class="plan-head"><span class="plan-name">' + esc(pl.nombre) + '</span>' +
          (pl.tag ? '<span class="plan-tag">' + esc(pl.tag) + '</span>' : '') + '</span>' +
        '<span class="plan-pitch">' + esc(pl.pitch) + '</span>' +
        '<span class="plan-price">' + priceHTML(r, pl) + '</span>' +
      '</label>' +
      '<ul class="plan-feats">' + feats.map((f) => '<li>' + CHECK + '<span>' + esc(f) + '</span></li>').join('') + '</ul>' +
    '</div>';
  }

  function renderPlans(r) {
    plansEl.innerHTML = '<legend class="sr-only">Planes de ' + esc(r.nombre) + '</legend>' + r.planes.map((pl) => planHTML(r, pl)).join('');
  }

  function renderFoot(r) {
    const pl = r.planes.find((p) => p.codigo === state.sel[r.id]);
    const per = state.periodo[r.id];
    const a = state.added;
    if (a && a.rack === r.id && a.plan === pl.codigo && a.periodo === per) {
      footEl.innerHTML = '<p class="foot-done">Agregaste ' + esc(pl.nombre) + (r.periodos || r.periodoFijo ? ' por ' + periodLabel(per) : '') + ' al carrito.</p>' +
        '<div class="foot-actions"><a class="btn btn-primary" id="goCart" href="' + esc(a.url) + '" target="_blank" rel="noopener">Ir al carrito</a>' +
        '<button type="button" class="btn btn-ghost" data-action="seguir">Seguir recorriendo</button></div>';
      return;
    }
    const m = precioMes(r, pl, per);
    let total;
    if (m == null) total = 'Precio a confirmar';
    else if (per > 1) total = money(m * per) + ' por ' + periodLabel(per);
    else total = (pl.desde ? 'Desde ' : '') + money(m) + ' por mes';
    footEl.innerHTML = '<div class="foot-sum"><span class="foot-name">' + esc(pl.nombre) + (r.periodos || r.periodoFijo ? ', ' + periodLabel(per) : '') + '</span>' +
      '<span class="foot-total">' + total + '</span></div>' +
      '<button type="button" class="btn btn-primary" data-action="agregar">Agregar al carrito</button>';
  }

  function renderPanel(r) {
    panelTitle.textContent = r.nombre;
    panelLede.textContent = r.bajada;
    if (r.periodos) {
      periodsEl.hidden = false;
      periodsEl.innerHTML = '<legend>Período de contratación</legend><div class="seg-row">' +
        r.periodos.map((p) => '<label class="seg"><input type="radio" name="periodo" value="' + p + '"' +
          (p === state.periodo[r.id] ? ' checked' : '') + '><span>' + periodLabel(p) + '</span></label>').join('') + '</div>';
    } else {
      periodsEl.hidden = true;
      periodsEl.innerHTML = '';
    }
    renderPlans(r);
    renderFoot(r);
    panelBody.scrollTop = 0;
  }

  periodsEl.addEventListener('change', (e) => {
    if (e.target.name !== 'periodo' || !state.active) return;
    const r = rackById[state.active];
    state.periodo[r.id] = Number(e.target.value);
    renderPlans(r);
    renderFoot(r);
  });

  plansEl.addEventListener('change', (e) => {
    if (e.target.name !== 'plan' || !state.active) return;
    const r = rackById[state.active];
    state.sel[r.id] = e.target.value;
    plansEl.querySelectorAll('.plan').forEach((el) => el.classList.toggle('is-selected', el.dataset.codigo === e.target.value));
    renderFoot(r);
  });

  footEl.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn || !state.active) return;
    const r = rackById[state.active];
    if (btn.dataset.action === 'agregar') {
      const pl = r.planes.find((p) => p.codigo === state.sel[r.id]);
      const per = state.periodo[r.id];
      const url = agregarAlCarrito(r, pl, per);
      state.added = { rack: r.id, plan: pl.codigo, periodo: per, url: url };
      cartCount.textContent = String(carrito.length);
      cartPill.hidden = false;
      cartPill.href = url;
      renderFoot(r);
      live.textContent = 'Agregaste ' + pl.nombre + ' al carrito.';
      const go = document.getElementById('goCart');
      if (go) go.focus({ preventScroll: true });
    } else if (btn.dataset.action === 'seguir') {
      closePanel();
    }
  });

  function updatePressed() {
    rackButtons.forEach((b) => {
      const on = !!state.active && b.dataset.rack === state.active;
      b.setAttribute('aria-pressed', String(on));
      const row = b.parentElement;
      if (on && row && row.scrollWidth > row.clientWidth) {
        const left = b.offsetLeft - (row.clientWidth - b.offsetWidth) / 2;
        row.scrollTo({ left: Math.max(0, left), behavior: reduced ? 'auto' : 'smooth' });
      }
    });
  }

  function hideHint() { hint.classList.add('is-gone'); document.body.classList.add('explorando'); }

  function setHash(id) {
    if (location.hash === '#' + id) return;
    try { history.replaceState(null, '', '#' + id); } catch (_) { location.hash = id; }
  }
  function clearHash() {
    if (!location.hash) return;
    try { history.replaceState(null, '', location.pathname + location.search); } catch (_) { /* sin cambios */ }
  }

  function showPanel() {
    if (state.open) return;
    state.open = true;
    state.pending = null;
    panel.removeAttribute('inert');
    panel.setAttribute('aria-hidden', 'false');
    panel.classList.add('is-open');
    document.body.classList.add('panel-open');
    setTimeout(() => panelTitle.focus({ preventScroll: true }), reduced ? 0 : 80);
  }
  function openRack(id, opener) {
    const r = rackById[id];
    if (!r) return;
    if (opener) state.opener = opener;
    state.active = id;
    renderPanel(r);
    updatePressed();
    hideHint();
    if (scene3d) scene3d.focusRack(id);
    // El panel de compra aparece recién cuando la puerta del rack terminó de abrirse
    if (!state.open) {
      if (scene3d && !reduced) state.pending = id;
      else showPanel();
    }
  }

  function closePanel() {
    if (!state.open && !state.pending) return;
    const last = state.active;
    state.open = false;
    state.pending = null;
    state.active = null;
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    panel.setAttribute('inert', '');
    document.body.classList.remove('panel-open');
    updatePressed();
    clearHash();
    if (scene3d) scene3d.overview(last);
    const back = state.opener && state.opener.closest('.rack-nav') ? state.opener : null;
    if (back) back.focus({ preventScroll: true });
  }

  rackButtons.forEach((b) => b.addEventListener('click', () => {
    if (state.active === b.dataset.rack && b.closest('.rack-nav')) { closePanel(); return; }
    openRack(b.dataset.rack, b);
  }));
  document.getElementById('closePanel').addEventListener('click', closePanel);

  /* Tarjetas de abajo y racks se destacan entre sí: el cursor sobre una tarjeta ilumina su rack,
     y el cursor sobre un rack destaca su tarjeta. */
  const navCards = Array.from(document.querySelectorAll('.rack-nav .rack-btn'));
  navCards.forEach((b) => {
    const on = () => { state.navHover = b.dataset.rack; };
    const off = () => { if (state.navHover === b.dataset.rack) state.navHover = null; };
    b.addEventListener('pointerenter', on);
    b.addEventListener('pointerleave', off);
    // Solo cuenta el foco de teclado (Tab): el foco que queda en la tarjeta después de un clic no debe dejar el rack encendido
    b.addEventListener('focus', () => { let kb = false; try { kb = b.matches(':focus-visible'); } catch (_) { /* navegador sin :focus-visible */ } if (kb) on(); });
    b.addEventListener('blur', off);
  });
  let linkedCard = null;
  function linkCard(id) {
    if (id === linkedCard) return;
    linkedCard = id;
    navCards.forEach((b) => b.classList.toggle('is-linked', b.dataset.rack === id));
  }
  panel.addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.stopPropagation(); closePanel(); } });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && (state.open || state.pending)) closePanel(); });

  window.addEventListener('hashchange', () => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (rackById[id] && id !== state.active) openRack(id);
    else if (!rackById[id] && state.open) closePanel();
  });

  /* =====================================================================
     5. DATA CENTER 3D
     ===================================================================== */
  let scene3d = null;
  try {
    const probe = document.createElement('canvas');
    const ok = !!(window.WebGLRenderingContext && (probe.getContext('webgl2') || probe.getContext('webgl')));
    if (!ok || typeof THREE === 'undefined') throw new Error('sin WebGL');
    scene3d = buildDataCenter();
  } catch (err) {
    document.body.classList.add('no-3d');
    scene3d = null;
  }

  function buildDataCenter() {
    const AISLE = 1.5;          // medio ancho del pasillo frío
    const RACK_X = 2.0;         // centro de cada fila de racks
    const PITCH = 0.62;         // paso entre racks
    const Z0 = 2.2;
    const SLOTS = 34;
    const HALF_PI = Math.PI / 2;
    const slotZ = (s) => Z0 - s * PITCH;
    const rackRot = (side) => (side < 0 ? HALF_PI : -HALF_PI);
    /* Filas de racks: la primera de cada lado mira al pasillo central (donde camina la cámara);
       detrás se suman filas alternando pasillos calientes (espalda con espalda) y fríos (frente a frente). */
    const HOT_AISLE = 1.2, COLD_AISLE = 3.0, EXTRA_ROWS = 3;
    const ROWS = [], coldAisles = [];
    [-1, 1].forEach((s) => {
      let facing = -s;
      ROWS.push({ cx: s * (AISLE + 0.5), facing: facing, side: s, main: true });
      let edge = AISLE + 1.0;
      for (let k = 0; k < EXTRA_ROWS; k++) {
        facing = -facing;
        const gap = k % 2 === 0 ? HOT_AISLE : COLD_AISLE;
        if (gap === COLD_AISLE) coldAisles.push(s * (edge + COLD_AISLE / 2));
        const cx = edge + gap + 0.5;
        ROWS.push({ cx: s * cx, facing: facing, side: s, main: false });
        edge = cx + 0.5;
      }
    });
    const FLOOR_W = Math.ceil((ROWS.reduce((m, r) => Math.max(m, Math.abs(r.cx)), 0) + 1.5) * 2 / 1.2) * 1.2;
    const rowRot = (facing) => (facing > 0 ? HALF_PI : -HALF_PI);
    function toWorldRow(row, z, lx, ly, lz) {
      const rot = rowRot(row.facing), c = Math.cos(rot), s = Math.sin(rot);
      return { x: row.cx + lx * c + lz * s, y: ly, z: z - lx * s + lz * c };
    }

    const canvas = document.getElementById('scene');
    // En pantallas de alta densidad el suavizado de bordes casi no se nota y cuesta mucho: solo se activa en pantallas comunes
    const DPR = window.devicePixelRatio || 1;
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: DPR < 1.5, powerPreference: 'high-performance' });
    const MAX_PR = Math.min(DPR, 2);
    let pixelRatio = MAX_PR;
    renderer.setPixelRatio(pixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const BG = 0x0b141c;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(BG);
    scene.fog = new THREE.Fog(BG, 7, 25);
    const camera = new THREE.PerspectiveCamera(48, 1, 0.08, 80);

    /* --- Texturas generadas --- */
    function canvasTex(w, h, draw, repeat) {
      const c = document.createElement('canvas'); c.width = w; c.height = h;
      draw(c.getContext('2d'), w, h);
      const t = new THREE.CanvasTexture(c);
      t.encoding = THREE.sRGBEncoding;
      t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
      return t;
    }
    const tileTex = canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#1b2730'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#1f2c36'; g.fillRect(10, 10, w - 20, h - 20);
      g.strokeStyle = '#0a1116'; g.lineWidth = 8; g.strokeRect(0, 0, w, h);
    }, true);
    const perfTex = canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#26343f'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#121b22';
      for (let y = 26; y < h - 20; y += 14) for (let x = 26; x < w - 20; x += 14) { g.beginPath(); g.arc(x, y, 3.6, 0, Math.PI * 2); g.fill(); }
      g.strokeStyle = '#0a1116'; g.lineWidth = 8; g.strokeRect(0, 0, w, h);
    }, true);
    const doorTex = canvasTex(128, 256, (g, w, h) => {
      g.fillStyle = '#11161b'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#26303a';
      for (let y = 12; y < h - 10; y += 5) {
        const off = (y / 5) % 2 ? 2.5 : 0;
        for (let x = 12 + off; x < w - 10; x += 5) g.fillRect(x, y, 2, 2);
      }
      g.strokeStyle = '#323d48'; g.lineWidth = 7; g.strokeRect(3, 3, w - 6, h - 6);
    }, false);
    const ceilTex = canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#111a21'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#0a1015'; g.lineWidth = 10; g.strokeRect(0, 0, w, h);
    }, true);
    const glowTex = canvasTex(128, 128, (g, w, h) => {
      const gr = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
      gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.45, 'rgba(255,255,255,.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
    }, false);

    /* --- Materiales --- */
    const std = (color, rough, metal, extra) => new THREE.MeshStandardMaterial(Object.assign({ color: color, roughness: rough, metalness: metal }, extra || {}));
    const basic = (color, extra) => new THREE.MeshBasicMaterial(Object.assign({ color: color, toneMapped: false }, extra || {}));
    const M = {
      shell: std(0x1d242b, 0.6, 0.3),
      doorGen: std(0xffffff, 0.55, 0.3, { map: doorTex }),
      doorProd: std(0xffffff, 0.5, 0.3, { map: doorTex, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false }),
      server: std(0x272e35, 0.5, 0.4),
      face: std(0x161b20, 0.7, 0.2),
      handle: std(0x76828d, 0.35, 0.8),
      bay: std(0x333c45, 0.55, 0.3),
      blade: std(0x2b333b, 0.5, 0.4),
      blade2: std(0x36404a, 0.5, 0.4),
      rail: std(0x3d4751, 0.4, 0.7),
      tray: std(0x1f262c, 0.75, 0.3),
      floor: std(0xffffff, 0.85, 0.1, { map: tileTex }),
      aisle: std(0xffffff, 0.8, 0.15, { map: perfTex }),
      wall: new THREE.MeshBasicMaterial({ color: BG }),
      ceil: basic(0x6d8292, { toneMapped: true }),
      ceiling: std(0xffffff, 0.92, 0.05, { map: ceilTex }),
      ledInst: basic(0xffffff),
      ledGreen: basic(0x4ff0a6),
      ledCyan: basic(0x5fd6ef),
      gpuGreen: basic(0x76b900),
      gpuCard: std(0x1b2025, 0.45, 0.6),
      fan: std(0x0b0f13, 0.85, 0.2),
      ledAmber: basic(0xffbe45),
      ledOff: basic(0x0f1a20),
      hit: new THREE.MeshBasicMaterial({ visible: false })
    };
    const COL = { green: new THREE.Color(0x4ff0a6), cyan: new THREE.Color(0x5fd6ef), amber: new THREE.Color(0xffbe45), off: new THREE.Color(0x0e161c) };
    const IDLE = new THREE.Color(0x6fb6d9);
    const HOT = new THREE.Color(0xed6b00);

    /* --- Ayudantes de geometría --- */
    const geoCache = new Map();
    function geo(w, h, d) {
      const k = w + '|' + h + '|' + d;
      let g = geoCache.get(k);
      if (!g) { g = new THREE.BoxGeometry(w, h, d); geoCache.set(k, g); }
      return g;
    }
    function box(parent, w, h, d, x, y, z, mat) {
      const m = new THREE.Mesh(geo(w, h, d), mat); m.position.set(x, y, z); parent.add(m); return m;
    }
    function led(parent, x, y, z, list, on) {
      const lit = Math.random() > 0.2;
      const m = new THREE.Mesh(geo(0.014, 0.014, 0.005), lit ? on : M.ledOff);
      m.position.set(x, y, z); m.userData.led = true; m.userData.on = on;
      parent.add(m); list.push({ mesh: m, on: on }); return m;
    }
    const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpP = new THREE.Vector3(), ONE = new THREE.Vector3(1, 1, 1), UP = new THREE.Vector3(0, 1, 0);
    function setInst(mesh, i, x, y, z, rot) {
      tmpQ.setFromAxisAngle(UP, rot); tmpP.set(x, y, z); tmpM.compose(tmpP, tmpQ, ONE); mesh.setMatrixAt(i, tmpM);
    }
    function toWorld(side, z, lx, ly, lz) {
      const rot = rackRot(side), c = Math.cos(rot), s = Math.sin(rot);
      return { x: side * RACK_X + lx * c + lz * s, y: ly, z: z - lx * s + lz * c };
    }

    /* --- Sala: piso técnico, paredes, bandejas y luminarias --- */
    const zStart = slotZ(0) + 1.2, zEnd = slotZ(SLOTS - 1) - 1.6;
    const span = zStart - zEnd, midZ = (zStart + zEnd) / 2;
    const fullZ = span + 8, fullMid = midZ + 4;   // piso y techo siguen por detrás de la cámara
    tileTex.repeat.set(FLOOR_W / 0.6, fullZ / 0.6);
    ceilTex.repeat.set(FLOOR_W / 1.2, fullZ / 1.2);
    const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(FLOOR_W, fullZ), M.ceiling);
    ceiling.rotation.x = HALF_PI; ceiling.position.set(0, 3.5, fullMid); scene.add(ceiling);
    perfTex.repeat.set(5, fullZ / 0.6);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(FLOOR_W, fullZ), M.floor);
    floor.rotation.x = -HALF_PI; floor.position.set(0, 0, fullMid); scene.add(floor);
    [0].concat(coldAisles).forEach((ax) => {
      const a = new THREE.Mesh(new THREE.PlaneGeometry(3.0, fullZ), M.aisle);
      a.rotation.x = -HALF_PI; a.position.set(ax, 0.003, fullMid); scene.add(a);
    });
    const back = new THREE.Mesh(new THREE.PlaneGeometry(FLOOR_W, 4.2), M.wall);
    back.position.set(0, 2.1, zEnd); scene.add(back);

    /* --- Logo de DonWeb en la pared del fondo del pasillo --- */
    // Se carga en una imagen aparte para que la textura use el tamaño real del logo y no el del encabezado
    const logoTex = new THREE.Texture();
    logoTex.encoding = THREE.sRGBEncoding;
    logoTex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    const logoImg = new Image();
    logoImg.onload = () => { logoTex.image = logoImg; logoTex.needsUpdate = true; };
    logoImg.src = document.querySelector('.brand img').src;
    // Sin niebla: se ve tenue desde la entrada y nítido al acercarse (la opacidad se ajusta por distancia)
    const logoMat = new THREE.MeshBasicMaterial({ map: logoTex, transparent: true, toneMapped: false, fog: false, opacity: 0.18, depthWrite: false });
    const LOGO_W = 1.6;
    const logo = new THREE.Mesh(new THREE.PlaneGeometry(LOGO_W, LOGO_W * 121 / 300), logoMat);
    logo.position.set(0, 1.7, zEnd + 0.05); scene.add(logo);
    // Bandejas portacables sobre cada fila
    ROWS.forEach((row) => {
      box(scene, 0.34, 0.05, span - 1, row.cx, 2.42, midZ, M.tray);
      box(scene, 0.04, 0.12, span - 1, row.cx - 0.17, 2.47, midZ, M.tray);
      box(scene, 0.04, 0.12, span - 1, row.cx + 0.17, 2.47, midZ, M.tray);
    });
    // Luminarias sobre el pasillo central y los pasillos fríos exteriores
    [0].concat(coldAisles).forEach((ax) => {
      for (let z = zStart - 1.2; z > zEnd + 0.5; z -= 2.6) box(scene, 2.4, 0.035, 0.1, ax, 3.25, z, M.ceil);
    });
    compactGroup(scene, [M.tray, M.ceil]);

    /* --- Iluminación --- */
    scene.add(new THREE.HemisphereLight(0x9cc3de, 0x070b0f, 0.55));
    [1, -5, -11, -17].forEach((z) => {
      const p = new THREE.PointLight(0xcfe4ff, 1.35, 11, 2); p.position.set(0, 2.9, z); scene.add(p);
    });
    const spot = new THREE.SpotLight(0xff8a2b, 0, 7.5, 0.55, 0.7, 1.4);
    spot.position.set(0, 3.2, 0); scene.add(spot); scene.add(spot.target);

    /* --- Racks genéricos (instanciados) --- */
    const productSlot = (side, s) => RACKS.some((r) => r.side === side && (r.slot === s || (r.span === 2 && r.slot + 1 === s)));
    const gens = [];
    ROWS.forEach((row) => {
      for (let s = 0; s < SLOTS; s++) if (!(row.main && productSlot(row.side, s))) gens.push({ row: row, z: slotZ(s) });
    });
    const genBody = new THREE.InstancedMesh(geo(0.6, 2.0, 1.0), M.shell, gens.length);
    const genDoor = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.58, 1.9), M.doorGen, gens.length);
    const genStrip = new THREE.InstancedMesh(geo(0.5, 0.018, 0.02), basic(0x2d4a5c), gens.length);
    const ledList = [];
    gens.forEach((g, i) => {
      const row = g.row, rot = rowRot(row.facing);
      setInst(genBody, i, row.cx, 1.0, g.z, rot);
      const d = toWorldRow(row, g.z, 0, 1.0, 0.506); setInst(genDoor, i, d.x, d.y, d.z, rot);
      const st = toWorldRow(row, g.z, 0, 1.945, 0.52); setInst(genStrip, i, st.x, st.y, st.z, rot);
      // El doble de luces que antes, alineadas a las alturas de los servidores (sin repetir lugar)
      const n = row.main ? 10 + Math.floor(Math.random() * 18) : 6 + Math.floor(Math.random() * 12);
      const slots = Array.from({ length: 37 }, (_, j) => j);
      for (let k = 0; k < n; k++) {
        const pickIdx = k + Math.floor(Math.random() * (slots.length - k));
        const tmp = slots[k]; slots[k] = slots[pickIdx]; slots[pickIdx] = tmp;
        const ly = 0.2 + slots[k] * 0.045;
        const r = Math.random();
        const col = r < 0.07 ? COL.amber : r < 0.55 ? COL.green : COL.cyan;
        [0.17, 0.2].forEach((lx) => ledList.push({ p: toWorldRow(row, g.z, lx, ly, 0.513), rot: rot, col: col }));
      }
    });
    const genLeds = new THREE.InstancedMesh(geo(0.013, 0.013, 0.004), M.ledInst, ledList.length);
    const genOn = [];
    ledList.forEach((l, i) => {
      setInst(genLeds, i, l.p.x, l.p.y, l.p.z, l.rot);
      genOn[i] = Math.random() > 0.15;
      genLeds.setColorAt(i, genOn[i] ? l.col : COL.off);
    });
    [genBody, genDoor, genStrip, genLeds].forEach((m) => { m.frustumCulled = false; scene.add(m); });

    /* --- Racks de producto --- */
    const racks = {};
    const hitboxes = [];
    const productLeds = [];

    function serverWP(g, i, leds) {
      const u = 0.074, y = 0.14 + i * 0.0855 + u / 2;
      const s = new THREE.Group(); s.position.set(0, y, -0.02); g.add(s);
      box(s, 0.5, u, 0.78, 0, 0, 0, M.server);
      box(s, 0.52, u - 0.008, 0.012, 0, 0, 0.396, M.face);
      box(s, 0.01, u * 0.6, 0.018, -0.24, 0, 0.405, M.handle);
      box(s, 0.22, u * 0.34, 0.004, -0.06, 0, 0.403, M.bay);
      led(s, 0.17, 0.008, 0.405, leds, i % 3 === 0 ? M.ledCyan : M.ledGreen);
      led(s, 0.2, 0.008, 0.405, leds, M.ledGreen);
      s.userData = { base: -0.02, amt: 0.06 + ((i * 7) % 5) * 0.03, delay: 0.3 + i * 0.02 };
      return s;
    }
    function chassisCloud(g, i, leds) {
      const h = 0.4, y = 0.15 + i * 0.43 + h / 2;
      const s = new THREE.Group(); s.position.set(0, y, -0.02); g.add(s);
      box(s, 0.52, h, 0.78, 0, 0, 0, M.server);
      box(s, 0.53, h, 0.01, 0, 0, 0.392, M.face);
      for (let j = 0; j < 11; j++) {
        const x = -0.215 + j * 0.043;
        box(s, 0.036, h - 0.06, 0.016, x, -0.005, 0.402, j % 2 ? M.blade2 : M.blade);
        led(s, x, h / 2 - 0.05, 0.412, leds, j % 4 === 0 ? M.ledGreen : M.ledCyan);
      }
      s.userData = { base: -0.02, amt: 0.1 + (i % 2) * 0.06, delay: 0.3 + i * 0.09 };
      return s;
    }
    function gpuServer(g, i, leds, W) {
      const IW = W - 0.1, h = 0.34, y = 0.14 + i * 0.37 + h / 2;
      const s = new THREE.Group(); s.position.set(0, y, -0.02); g.add(s);
      box(s, IW, h, 0.78, 0, 0, 0, M.server);
      box(s, IW + 0.02, h - 0.01, 0.012, 0, 0, 0.396, M.face);
      // Placas GPU a la vista a todo lo ancho, cada una con su franja verde y dos ventiladores
      const n = Math.floor((IW - 0.06) / 0.08), x0 = -((n - 1) * 0.08) / 2;
      for (let k = 0; k < n; k++) {
        const x = x0 + k * 0.08;
        box(s, 0.066, h - 0.06, 0.02, x, -0.005, 0.41, M.gpuCard);
        box(s, 0.066, 0.012, 0.006, x, h / 2 - 0.045, 0.423, M.gpuGreen);
        box(s, 0.046, 0.046, 0.004, x, 0.03, 0.422, M.fan);
        box(s, 0.046, 0.046, 0.004, x, -0.05, 0.422, M.fan);
        led(s, x + 0.022, -h / 2 + 0.045, 0.423, leds, k % 3 === 0 ? M.ledCyan : M.ledGreen);
      }
      box(s, 0.012, h * 0.7, 0.02, -(IW / 2 - 0.005), 0, 0.408, M.handle);
      box(s, 0.012, h * 0.7, 0.02, IW / 2 - 0.005, 0, 0.408, M.handle);
      s.userData = { base: -0.02, amt: 0.12 + (i % 2) * 0.06, delay: 0.3 + i * 0.1 };
      return s;
    }
    function gpuHead(g, i, leds, W) {
      const IW = W - 0.1, u = 0.17, y = 1.25 + i * 0.2 + u / 2;
      const s = new THREE.Group(); s.position.set(0, y, -0.02); g.add(s);
      box(s, IW, u, 0.78, 0, 0, 0, M.server);
      box(s, IW + 0.02, u - 0.01, 0.014, 0, 0, 0.397, M.face);
      const n = Math.floor((IW - 0.3) / 0.062);
      for (let k = 0; k < n; k++) {
        const x = -IW / 2 + 0.06 + k * 0.062;
        box(s, 0.05, u - 0.05, 0.01, x, 0.006, 0.407, M.bay);
        led(s, x + 0.016, -u / 2 + 0.022, 0.413, leds, k % 4 === 3 ? M.ledAmber : M.ledGreen);
      }
      box(s, 0.12, 0.012, 0.006, IW / 2 - 0.12, 0.04, 0.407, M.gpuGreen);
      s.userData = { base: -0.02, amt: 0.08 + i * 0.05, delay: 0.55 + i * 0.08 };
      return s;
    }
    function gpuSwitch(g, leds, W) {
      const IW = W - 0.1, u = 0.074, y = 1.72 + u / 2;
      const s = new THREE.Group(); s.position.set(0, y, -0.02); g.add(s);
      box(s, IW, u, 0.6, 0, 0, 0.09, M.face);
      const n = Math.floor((IW - 0.1) / 0.04), x0 = -((n - 1) * 0.04) / 2;
      for (let k = 0; k < n; k++) {
        const x = x0 + k * 0.04;
        // Fila de puertos arriba y su luz debajo, dentro del frente del switch
        box(s, 0.028, 0.02, 0.006, x, 0.008, 0.394, M.bay);
        led(s, x, -0.018, 0.398, leds, k % 6 === 4 ? M.ledAmber : M.ledGreen);
      }
      s.userData = { base: -0.02, amt: 0.04, delay: 0.3 };
      return s;
    }
    function serverDed(g, i, leds) {
      const u = 0.17, y = 0.14 + i * 0.21 + u / 2;
      const s = new THREE.Group(); s.position.set(0, y, -0.02); g.add(s);
      box(s, 0.5, u, 0.78, 0, 0, 0, M.server);
      box(s, 0.52, u - 0.01, 0.014, 0, 0, 0.397, M.face);
      for (let k = 0; k < 6; k++) {
        const x = -0.19 + k * 0.058;
        box(s, 0.048, u - 0.05, 0.01, x, 0.006, 0.407, M.bay);
        led(s, x + 0.014, -u / 2 + 0.022, 0.413, leds, k % 5 === 4 ? M.ledAmber : M.ledGreen);
      }
      box(s, 0.012, u * 0.7, 0.02, -0.242, 0, 0.408, M.handle);
      box(s, 0.012, u * 0.7, 0.02, 0.242, 0, 0.408, M.handle);
      led(s, 0.2, u / 2 - 0.025, 0.41, leds, M.ledCyan);
      s.userData = { base: -0.02, amt: 0.08 + (i % 3) * 0.05, delay: 0.3 + i * 0.05 };
      return s;
    }

    function serverWeb(g, i, leds) {
      const u = 0.074, y = 0.14 + i * 0.0855 + u / 2;
      const s = new THREE.Group(); s.position.set(0, y, -0.02); g.add(s);
      box(s, 0.5, u, 0.78, 0, 0, 0, M.server);
      box(s, 0.52, u - 0.008, 0.012, 0, 0, 0.396, M.face);
      for (let k = 0; k < 3; k++) box(s, 0.07, u * 0.5, 0.006, -0.17 + k * 0.08, 0, 0.404, M.bay);
      box(s, 0.01, u * 0.6, 0.018, 0.24, 0, 0.405, M.handle);
      led(s, 0.12, 0.008, 0.405, leds, i % 4 === 1 ? M.ledAmber : M.ledGreen);
      led(s, 0.15, 0.008, 0.405, leds, M.ledCyan);
      s.userData = { base: -0.02, amt: 0.05 + ((i * 5) % 4) * 0.035, delay: 0.3 + i * 0.022 };
      return s;
    }
    function switchWeb(g, leds) {
      const u = 0.074, y = 1.79;
      const s = new THREE.Group(); s.position.set(0, y, -0.02); g.add(s);
      box(s, 0.5, u, 0.6, 0, 0, 0.09, M.face);
      for (let k = 0; k < 12; k++) {
        const x = -0.2 + k * 0.034;
        // Dos filas de puertos arriba y la luz debajo, dentro del frente del switch
        box(s, 0.024, 0.016, 0.006, x, 0.02, 0.394, M.bay);
        box(s, 0.024, 0.016, 0.006, x, 0.0, 0.394, M.bay);
        led(s, x, -0.02, 0.398, leds, k % 5 === 3 ? M.ledAmber : M.ledGreen);
      }
      s.userData = { base: -0.02, amt: 0.03, delay: 0.3 };
      return s;
    }
    function applianceSite(g, i, leds) {
      const h = 0.24, y = 0.15 + i * 0.27 + h / 2;
      const s = new THREE.Group(); s.position.set(0, y, -0.02); g.add(s);
      box(s, 0.5, h, 0.78, 0, 0, 0, M.server);
      box(s, 0.52, h - 0.012, 0.014, 0, 0, 0.397, M.face);
      box(s, 0.38, 0.012, 0.006, -0.03, 0.05, 0.407, M.ledCyan);
      for (let row = 0; row < 3; row++) for (let col = 0; col < 8; col++) {
        box(s, 0.03, 0.022, 0.004, -0.19 + col * 0.045, -0.005 - row * 0.034, 0.406, M.bay);
      }
      led(s, 0.21, 0.07, 0.408, leds, M.ledGreen);
      led(s, 0.21, 0.045, 0.408, leds, i % 2 ? M.ledCyan : M.ledGreen);
      s.userData = { base: -0.02, amt: 0.08 + (i % 3) * 0.05, delay: 0.3 + i * 0.07 };
      return s;
    }

    RACKS.forEach((r) => {
      const side = r.side, z = slotZ(r.slot) - (r.span === 2 ? PITCH / 2 : 0);
      const W = r.ancho || 0.6, H = 2.0, D = 1.0, T = 0.025;
      const g = new THREE.Group(); g.position.set(side * RACK_X, 0, z); g.rotation.y = rackRot(side); scene.add(g);
      box(g, T, H, D, -W / 2 + T / 2, H / 2, 0, M.shell);
      box(g, T, H, D, W / 2 - T / 2, H / 2, 0, M.shell);
      box(g, W, T, D, 0, H - T / 2, 0, M.shell);
      box(g, W, 0.1, D, 0, 0.05, 0, M.shell);
      box(g, W, H, T, 0, H / 2, -D / 2 + T / 2, M.shell);
      box(g, 0.02, H - 0.16, 0.02, -(W / 2 - 0.035), H / 2, 0.42, M.rail);
      box(g, 0.02, H - 0.16, 0.02, W / 2 - 0.035, H / 2, 0.42, M.rail);
      const servers = [], leds = [];
      if (r.tipo === 'site') for (let i = 0; i < 6; i++) servers.push(applianceSite(g, i, leds));
      else if (r.tipo === 'web') { for (let i = 0; i < 18; i++) servers.push(serverWeb(g, i, leds)); servers.push(switchWeb(g, leds)); }
      else if (r.tipo === 'wp') for (let i = 0; i < 20; i++) servers.push(serverWP(g, i, leds));
      else if (r.tipo === 'cloud') for (let i = 0; i < 4; i++) servers.push(chassisCloud(g, i, leds));
      else if (r.tipo === 'gpu') {
        for (let i = 0; i < 3; i++) servers.push(gpuServer(g, i, leds, W));
        for (let i = 0; i < 2; i++) servers.push(gpuHead(g, i, leds, W));
        servers.push(gpuSwitch(g, leds, W));
      }
      else for (let i = 0; i < 8; i++) servers.push(serverDed(g, i, leds));
      // Puerta: simple en los racks comunes (abre hacia el lado opuesto a la cámara)
      // y doble en el rack ancho (dos hojas que abren desde el centro)
      const hinge = side < 0 ? 1 : -1;
      const leaves = r.span === 2 ? [hinge, -hinge] : [hinge];
      const LW = leaves.length > 1 ? (W - 0.01) / 2 - 0.004 : W - 0.01;
      const doors = leaves.map((hs) => {
        const pv = new THREE.Group(); pv.position.set(hs * W / 2, H / 2, D / 2 + 0.006); g.add(pv);
        const leaf = new THREE.Mesh(new THREE.PlaneGeometry(LW, H - 0.03), M.doorProd);
        leaf.position.x = -hs * LW / 2; pv.add(leaf);
        box(pv, 0.016, 0.24, 0.03, -hs * (LW - 0.05), 0, 0.02, M.handle);
        return { pivot: pv, hinge: hs };
      });
      const pivot = doors[0].pivot;
      const stripMat = basic(IDLE.getHex());
      box(g, W - 0.1, 0.022, 0.02, 0, H - 0.055, D / 2 + 0.025, stripMat);
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.6), new THREE.MeshBasicMaterial({ map: glowTex, color: r.acento || 0xed6b00, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
      glow.rotation.x = -HALF_PI; glow.position.set(0, 0.012, D / 2 + 0.6); g.add(glow);
      const hit = new THREE.Mesh(geo(W + 0.14, H + 0.14, D + 0.14), M.hit);
      hit.position.y = H / 2; hit.userData.rackId = r.id; g.add(hit); hitboxes.push(hit);
      g.updateMatrixWorld(true);
      servers.forEach(compactServer);
      compactGroup(g, [M.shell, M.rail]);
      racks[r.id] = {
        r: r, side: side, z: z, W: W, LW: LW, servers: servers, pivot: pivot, hinge: hinge, doors: doors, stripMat: stripMat, glow: glow,
        hotColor: new THREE.Color(r.acento || '#ED6B00'), spotColor: new THREE.Color(r.foco || 0xff8a2b),
        act: 0, hov: 0, open: 0, plateHot: false
      };
    });

    /* --- Optimización: se combinan las piezas fijas por material y los LEDs de cada servidor
       pasan a un solo InstancedMesh, para dibujar mucho menos por cuadro --- */
    function mergeMeshes(parent, meshes, mat) {
      let vCount = 0, iCount = 0;
      meshes.forEach((m) => { vCount += m.geometry.attributes.position.count; iCount += m.geometry.index.count; });
      const pos = new Float32Array(vCount * 3), nor = new Float32Array(vCount * 3), uv = new Float32Array(vCount * 2);
      const idx = vCount > 65535 ? new Uint32Array(iCount) : new Uint16Array(iCount);
      let vo = 0, io = 0;
      meshes.forEach((m) => {
        const g = m.geometry, p = m.position, pa = g.attributes.position.array, n = g.attributes.position.count;
        for (let i = 0; i < n; i++) {
          pos[(vo + i) * 3] = pa[i * 3] + p.x; pos[(vo + i) * 3 + 1] = pa[i * 3 + 1] + p.y; pos[(vo + i) * 3 + 2] = pa[i * 3 + 2] + p.z;
        }
        nor.set(g.attributes.normal.array, vo * 3);
        uv.set(g.attributes.uv.array, vo * 2);
        const ga = g.index.array;
        for (let i = 0; i < ga.length; i++) idx[io + i] = ga[i] + vo;
        vo += n; io += ga.length;
        parent.remove(m);
      });
      const out = new THREE.BufferGeometry();
      out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
      out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
      out.setIndex(new THREE.BufferAttribute(idx, 1));
      out.computeBoundingSphere();
      parent.add(new THREE.Mesh(out, mat));
    }
    function compactGroup(parent, mats) {
      mats.forEach((mat) => {
        const list = parent.children.filter((c) => c.isMesh && !c.isInstancedMesh && c.material === mat && !c.userData.led);
        if (list.length > 1) mergeMeshes(parent, list, mat);
      });
    }
    function compactServer(s) {
      const leds = s.children.filter((c) => c.userData.led);
      if (leds.length) {
        const inst = new THREE.InstancedMesh(geo(0.014, 0.014, 0.005), M.ledInst, leds.length);
        inst.frustumCulled = false;
        leds.forEach((m, i) => {
          tmpM.makeTranslation(m.position.x, m.position.y, m.position.z);
          inst.setMatrixAt(i, tmpM);
          const lit = m.material !== M.ledOff;
          inst.setColorAt(i, lit ? m.userData.on.color : COL.off);
          productLeds.push({ inst: inst, i: i, on: m.userData.on.color, lit: lit });
          s.remove(m);
        });
        s.add(inst);
      }
      compactGroup(s, [M.server, M.face, M.handle, M.bay, M.blade, M.blade2, M.ledCyan, M.rail, M.gpuCard, M.gpuGreen, M.fan]);
    }

    /* --- Pantalla en la puerta de cada rack: nombre, precio y un botón "Ver planes" ---
       Va montada sobre la puerta (se abre con ella) y brilla como un display retroiluminado. */
    const PLATE_FONT = '"Archivo", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif';
    function roundRect(g, x, y, w, h, r) {
      g.beginPath();
      g.moveTo(x + r, y); g.lineTo(x + w - r, y); g.quadraticCurveTo(x + w, y, x + w, y + r);
      g.lineTo(x + w, y + h - r); g.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      g.lineTo(x + r, y + h); g.quadraticCurveTo(x, y + h, x, y + h - r);
      g.lineTo(x, y + r); g.quadraticCurveTo(x, y, x + r, y); g.closePath();
    }
    function paintPlate(c, r, hot) {
      const g = c.getContext('2d'), w = c.width, h = c.height;
      g.clearRect(0, 0, w, h);
      const glass = g.createLinearGradient(0, 0, 0, h);
      glass.addColorStop(0, '#182733'); glass.addColorStop(1, '#0c151c');
      roundRect(g, 6, 6, w - 12, h - 12, 20); g.fillStyle = glass; g.fill();
      g.lineWidth = hot ? 7 : 3; g.strokeStyle = hot ? (r.acento || '#ED6B00') : 'rgba(150,195,222,.45)'; g.stroke();
      const shine = g.createLinearGradient(0, 0, 0, h * 0.5);
      shine.addColorStop(0, 'rgba(255,255,255,.08)'); shine.addColorStop(1, 'rgba(255,255,255,0)');
      roundRect(g, 10, 10, w - 20, h * 0.45, 16); g.fillStyle = shine; g.fill();
      g.fillStyle = '#ED6B00'; roundRect(g, 32, 34, 48, 8, 4); g.fill();
      g.fillStyle = '#4ff0a6'; g.beginPath(); g.arc(w - 38, 38, 7, 0, Math.PI * 2); g.fill();
      let size = 56;
      g.font = '700 ' + size + 'px ' + PLATE_FONT;
      while (g.measureText(r.nombre).width > w - 64 && size > 28) { size -= 2; g.font = '700 ' + size + 'px ' + PLATE_FONT; }
      g.textAlign = 'left'; g.textBaseline = 'alphabetic';
      g.fillStyle = '#FFFFFF'; g.fillText(r.nombre, 32, 108);
      g.font = '500 30px ' + PLATE_FONT; g.fillStyle = '#C2D2DD';
      g.fillText('desde ' + money(desde(r)) + '/mes', 32, 152);
    }
    function paintPill(c, hot, accent) {
      const g = c.getContext('2d'), w = c.width, h = c.height;
      g.clearRect(0, 0, w, h);
      roundRect(g, 3, 3, w - 6, h - 6, (h - 6) / 2);
      if (hot) { g.fillStyle = accent; g.fill(); }
      else { g.fillStyle = 'rgba(234,242,247,.08)'; g.fill(); g.lineWidth = 3; g.strokeStyle = 'rgba(234,242,247,.75)'; g.stroke(); }
      g.font = '600 28px ' + PLATE_FONT; g.fillStyle = hot ? '#12202B' : '#EEF4F8';
      g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('Ver planes', w / 2, h / 2 + 1);
    }
    function texFrom(c) {
      const t = new THREE.CanvasTexture(c);
      t.encoding = THREE.sRGBEncoding;
      t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      return t;
    }
    // Botón "Ver planes": un juego de texturas por color de acento
    const pillSets = {};
    function pillFor(accent) {
      if (!pillSets[accent]) {
        const cv = [0, 1].map((hot) => { const c = document.createElement('canvas'); c.width = 256; c.height = 64; paintPill(c, !!hot, accent); return c; });
        pillSets[accent] = { accent: accent, cv: cv, tex: cv.map(texFrom) };
      }
      return pillSets[accent];
    }
    // Logo en la puerta (imagen provista), cargado aparte para usar su tamaño real
    function logoTexture(info) {
      const t = new THREE.Texture();
      t.encoding = THREE.sRGBEncoding;
      t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      const img = new Image();
      img.onload = () => { t.image = img; t.needsUpdate = true; };
      img.src = info.src;
      return t;
    }
    const PLATE_W = 0.48, PLATE_H = 0.24, PILL_W = 0.2, PILL_H = 0.05;
    RACKS.forEach((r, idx) => {
      const q = racks[r.id];
      const cv = [0, 1].map((hot) => { const c = document.createElement('canvas'); c.width = 512; c.height = 256; paintPlate(c, r, !!hot); return c; });
      const tex = cv.map(texFrom);
      const plateMat = new THREE.MeshBasicMaterial({ map: tex[0], toneMapped: false });
      const plate = new THREE.Mesh(new THREE.PlaneGeometry(PLATE_W, PLATE_H), plateMat);
      plate.position.set(-q.hinge * q.LW / 2, 0.45, 0.014);   // centro de la hoja, a la altura de los ojos
      q.pivot.add(plate);
      const pillSet = pillFor(r.acento || '#ED6B00');
      const pillMat = new THREE.MeshBasicMaterial({ map: pillSet.tex[0], toneMapped: false, transparent: true });
      const pill = new THREE.Mesh(new THREE.PlaneGeometry(PILL_W, PILL_H), pillMat);
      pill.position.set(-PLATE_W / 2 + 0.03 + PILL_W / 2, -0.068, 0.002);
      plate.add(pill);
      if (r.logoPuerta) {
        // Logo solo, centrado debajo de la pantalla
        const LOGO_W = 0.17, LOGO_H = LOGO_W * r.logoPuerta.h / r.logoPuerta.w;
        const logoMesh = new THREE.Mesh(new THREE.PlaneGeometry(LOGO_W, LOGO_H),
          new THREE.MeshBasicMaterial({ map: logoTexture(r.logoPuerta), color: 0xe6e6e6, transparent: true, toneMapped: false, depthWrite: false }));
        logoMesh.position.set(plate.position.x, 0.45 - PLATE_H / 2 - 0.04 - LOGO_H / 2, 0.014);
        q.pivot.add(logoMesh);
      }
      Object.assign(q, { plateCanvas: cv, plateTex: tex, plateMat: plateMat, pillMat: pillMat, pill: pillSet, phase: idx * 1.3 });
    });
    function repaintPlates() {
      for (const id in racks) {
        const q = racks[id];
        q.plateCanvas.forEach((c, i) => { paintPlate(c, q.r, i === 1); q.plateTex[i].needsUpdate = true; });
      }
      for (const a in pillSets) pillSets[a].cv.forEach((c, i) => { paintPill(c, i === 1, a); pillSets[a].tex[i].needsUpdate = true; });
    }

    /* --- Cámara: órbita suave alrededor de un objetivo --- */
    const rig = { cur: { x: 0, y: 1.3, z: -2.6, yaw: 0, pitch: 0.62, r: 19 }, goal: {}, baseYaw: 0, mode: 'overview' };
    /* En el pasillo la cámara gira sobre sí misma desde el centro, como una persona que mira a los costados:
       así puede mirar de frente cualquier rack sin meterse entre las filas. */
    const eye = { x: 0, y: 1.8, z: null };
    // Hacia atrás, la cámara no se aleja más de unos 2 m del comienzo de las filas (un poco más en el celular, por su encuadre angosto)
    const EYE_Z_MIN = zEnd + 7;
    const eyeZMax = () => slotZ(0) + (sheetMQ.matches ? 3.4 : 2.4);
    function applyLook() {
      const g = rig.goal, cp = Math.cos(g.pitch);
      g.x = eye.x - g.r * Math.sin(g.yaw) * cp;
      g.y = eye.y - g.r * Math.sin(g.pitch);
      g.z = eye.z - g.r * Math.cos(g.yaw) * cp;
    }
    // En la entrada se mira hacia adentro; una vez entre las filas se puede girar hasta quedar de frente a los racks
    function maxYaw() { return clamp(0.8 + (slotZ(0) - eye.z) * 0.5, 0.8, 1.5); }
    // Límite "elástico": al pasarse del borde el giro se frena de a poco en lugar de chocar
    function softLimit(v, lo, hi) {
      const give = 0.12;
      if (v > hi) return hi + give * (1 - Math.exp(-(v - hi) / give));
      if (v < lo) return lo - give * (1 - Math.exp(-(lo - v) / give));
      return v;
    }
    // Al soltar, la vista vuelve suave dentro del límite
    function settleYaw() {
      const g = rig.goal;
      if (rig.mode === 'focus') g.yaw = clamp(g.yaw, rig.baseYaw - 0.9, rig.baseYaw + 0.9);
      else { const my = maxYaw(); g.yaw = clamp(g.yaw, -my, my); applyLook(); }
    }
    function overview(fromId) {
      const sheet = sheetMQ.matches, g = rig.goal;
      g.r = sheet ? 10 : 7; g.pitch = sheet ? 0.12 : 0.1; g.yaw = 0;
      eye.y = 1.1 + g.r * Math.sin(g.pitch);
      if (fromId && racks[fromId]) { eye.z = racks[fromId].z - 3.5 + g.r * Math.cos(g.pitch); eye.x = 0; }
      else if (eye.z == null) eye.z = -2.6 + g.r * Math.cos(g.pitch);
      eye.z = clamp(eye.z, EYE_Z_MIN, eyeZMax());
      applyLook();
      rig.baseYaw = 0; rig.mode = 'overview';
    }
    function focusRack(id) {
      const k = racks[id]; if (!k) return;
      const sheet = sheetMQ.matches, off = sheet ? 0.78 : 0.6;
      Object.assign(rig.goal, {
        x: k.side * AISLE, y: sheet ? 1.15 : 1.05, z: k.z,
        yaw: k.side < 0 ? HALF_PI - off : -HALF_PI + off,
        pitch: sheet ? 0.3 : 0.12, r: sheet ? 3.9 : 2.6
      });
      rig.baseYaw = rig.goal.yaw; rig.mode = 'focus';
    }
    overview(null);
    if (reduced) Object.assign(rig.cur, rig.goal);
    const introEnds = performance.now() + (reduced ? 0 : 2800);
    // Al abrir o cerrar un rack la cámara viaja con una curva suave (arranca y frena despacio)
    rig.tween = null;
    function startTween(dur) {
      if (reduced || !cam.p) { rig.tween = null; return; }
      rig.tween = { p0: { x: cam.p.x, y: cam.p.y, z: cam.p.z }, t0: { x: cam.t.x, y: cam.t.y, z: cam.t.z }, t: 0, dur: dur };
    }

    /* La cámara nunca entra en las filas de racks: si el brazo de la órbita las cruzaría, se acorta
       (o se alarga para despegarse de la fila propia) y la cámara queda siempre dentro del pasillo. */
    const XB = AISLE - 0.25;
    const ROW_Z0 = slotZ(SLOTS - 1) - 0.6, ROW_Z1 = slotZ(0) + 0.6;
    const smin = (a, b, k) => (a + b - Math.sqrt((a - b) * (a - b) + k * k)) / 2;
    const smax = (a, b, k) => (a + b + Math.sqrt((a - b) * (a - b) + k * k)) / 2;
    function armLength(c, ux, uz) {
      let r = c.r;
      if (Math.abs(ux) < 1e-4) return r;
      const tA = (-XB - c.x) / ux, tB = (XB - c.x) / ux;
      const tIn = Math.min(tA, tB), tOut = Math.max(tA, tB);
      const inRows = (t) => { const z = c.z + t * uz; return z > ROW_Z0 && z < ROW_Z1; };
      // Frente a un rack el borde es suave: al girar, la cámara se acerca de a poco en vez de frenar de golpe
      const soft = rig.mode === 'focus';
      if (tOut > 0.3 && inRows(tOut)) {
        if (soft) r = Math.min(smin(r, tOut, 0.4), tOut);
        else if (r > tOut) r = tOut;
      }
      if (tIn > 0 && inRows(r)) {
        if (soft) r = Math.min(smax(r, tIn, 0.4), tOut);
        else if (r < tIn) r = Math.min(tIn, tOut);
      }
      return r;
    }

    /* La cámara viaja en línea recta entre poses (dónde está y hacia dónde mira). El pasillo es un espacio
       sin recovecos, así que una recta entre dos puntos del pasillo nunca lo abandona: la cámara ya no se
       abre en arco hacia la fila de enfrente ni choca contra ella. */
    const lerp = (a, b, t) => a + (b - a) * t;
    function poseOf(o) {
      const cp = Math.cos(o.pitch);
      const ux = Math.sin(o.yaw) * cp, uy = Math.sin(o.pitch), uz = Math.cos(o.yaw) * cp;
      const r = armLength(o, ux, uz);
      return { x: o.x + r * ux, y: o.y + r * uy, z: o.z + r * uz };
    }
    const cam = { p: null, t: null };
    function stepRig(dt, rate) {
      const g = rig.goal, c = rig.cur;
      if (!cam.p) { cam.p = poseOf(c); cam.t = { x: c.x, y: c.y, z: c.z }; }
      const pg = poseOf(g), P = cam.p, T = cam.t;
      if (rig.tween) {
        const tw = rig.tween;
        tw.t = Math.min(1, tw.t + dt / tw.dur);
        const e = ease(tw.t);
        P.x = lerp(tw.p0.x, pg.x, e); P.y = lerp(tw.p0.y, pg.y, e); P.z = lerp(tw.p0.z, pg.z, e);
        T.x = lerp(tw.t0.x, g.x, e); T.y = lerp(tw.t0.y, g.y, e); T.z = lerp(tw.t0.z, g.z, e);
        if (tw.t >= 1) rig.tween = null;
      } else {
        const k = reduced ? 1 : 1 - Math.exp(-dt * rate);
        P.x += (pg.x - P.x) * k; P.y += (pg.y - P.y) * k; P.z += (pg.z - P.z) * k;
        T.x += (g.x - T.x) * k; T.y += (g.y - T.y) * k; T.z += (g.z - T.z) * k;
      }
      camera.position.set(P.x, P.y, P.z);
      camera.lookAt(T.x, T.y, T.z);
      // rig.cur refleja la pose real, por si el usuario toma el control a mitad de camino
      const dx = P.x - T.x, dy = P.y - T.y, dz = P.z - T.z, rr = Math.max(1e-3, Math.hypot(dx, dy, dz));
      c.x = T.x; c.y = T.y; c.z = T.z; c.r = rr; c.yaw = Math.atan2(dx, dz); c.pitch = Math.asin(clamp(dy / rr, -1, 1));
      // ¿Sigue moviéndose?
      return !!rig.tween || Math.abs(pg.x - P.x) + Math.abs(pg.y - P.y) + Math.abs(pg.z - P.z) +
        Math.abs(g.x - T.x) + Math.abs(g.y - T.y) + Math.abs(g.z - T.z) > 0.002;
    }

    /* Desplaza el encuadre para que el rack quede a la vista junto al panel */
    const shift = { x: 0, y: 0 };
    function stepShift(dt) {
      let gx = 0, gy = 0;
      // El encuadre se corre apenas se elige el rack, para dejar lugar al panel que llega después
      if (state.open || state.pending) { if (sheetMQ.matches) gy = panel.offsetHeight * 0.5; else gx = panel.offsetWidth * 0.5; }
      const k = reduced ? 1 : 1 - Math.exp(-dt * 5);
      shift.x += (gx - shift.x) * k; shift.y += (gy - shift.y) * k;
      const w = window.innerWidth, h = window.innerHeight;
      if (Math.abs(shift.x) < 0.5 && Math.abs(shift.y) < 0.5) { if (camera.view && camera.view.enabled) camera.clearViewOffset(); }
      else camera.setViewOffset(w, h, shift.x, shift.y, w, h);
      return Math.abs(gx - shift.x) > 0.5 || Math.abs(gy - shift.y) > 0.5;
    }

    // Con la cámara ya frente al rack, la puerta queda cerrada un momento para que se lea su pantalla
    const DOOR_HOLD = 0.8;
    function stepRacks(dt) {
      const k = reduced ? 1 : 1 - Math.exp(-dt * 6);
      const tnow = performance.now() / 1000;
      let spotGoal = 0, busy = false;
      for (const id in racks) {
        const q = racks[id];
        const act = state.active === id ? 1 : 0;
        const hov = (state.hover === id || state.navHover === id) && !act ? 1 : 0;
        q.act += (act - q.act) * k; q.hov += (hov - q.hov) * k;
        // Apertura en cámara lenta: primero se acerca la cámara, después se abre la puerta y salen los servidores
        if (act) {
          // La espera empieza cuando la cámara prácticamente llegó (el tramo final de la curva es casi quieto)
          const arrived = !rig.tween || rig.tween.t >= 0.85;
          if (arrived) q.wait = reduced ? DOOR_HOLD : Math.min(DOOR_HOLD, (q.wait || 0) + dt);
          if (q.wait >= DOOR_HOLD) q.open = reduced ? 1 : Math.min(1, q.open + dt / 1.8);
        } else {
          q.wait = 0;
          q.open = reduced ? 0 : Math.max(0, q.open - dt / 1.0);
        }
        if (state.pending === id && q.open >= 0.6) showPanel();
        if ((q.open > 0 && q.open < 1) || (act && q.wait < DOOR_HOLD) ||
            Math.abs(act - q.act) > 0.004 || Math.abs(hov - q.hov) > 0.004) busy = true;
        const doorAngle = 1.95 * ease(clamp(q.open * 1.6, 0, 1));
        q.doors.forEach((d) => { d.pivot.rotation.y = d.hinge * doorAngle; });
        for (let i = 0; i < q.servers.length; i++) {
          const u = q.servers[i].userData;
          q.servers[i].position.z = u.base + u.amt * ease(clamp((q.open - u.delay) / 0.3, 0, 1));
        }
        q.stripMat.color.copy(IDLE).lerp(q.hotColor, Math.max(q.act, q.hov));
        q.glow.material.opacity = Math.max(q.act * 0.55, q.hov * 0.5);
        const hot = q.hov > 0.5 || act === 1;
        if (hot !== q.plateHot) {
          q.plateHot = hot;
          q.plateMat.map = q.plateTex[hot ? 1 : 0];
          q.pillMat.map = q.pill.tex[hot ? 1 : 0];
        }
        q.pillMat.opacity = hot || reduced ? 1 : 0.7 + 0.3 * Math.sin(tnow * 2.4 + q.phase);
        // El foco naranja ilumina el rack abierto o, si no hay ninguno abierto, el que está bajo el cursor
        if (act || (!state.active && hov)) {
          spotGoal = (act ? 4.2 : 3.4) * (q.r.focoIntensidad || 1);
          if (Math.abs(q.side * 0.3 - spot.position.x) + Math.abs(q.z + 0.7 - spot.position.z) > 0.01) busy = true;
          spot.color.lerp(q.spotColor, k);
          spot.position.x += (q.side * 0.3 - spot.position.x) * k;
          spot.position.z += (q.z + 0.7 - spot.position.z) * k;
          spot.target.position.set(q.side * (AISLE + 0.3), 0.9, q.z);
        }
      }
      spot.intensity += (spotGoal - spot.intensity) * k;
      if (Math.abs(spotGoal - spot.intensity) > 0.02) busy = true;
      return busy;
    }

    let blinkT = 0;
    function stepBlink(dt) {
      if (reduced) return;
      blinkT += dt;
      if (blinkT < 0.09) return;
      blinkT = 0;
      for (let n = 0, m = Math.max(16, Math.round(ledList.length / 60)); n < m; n++) {
        const i = Math.floor(Math.random() * ledList.length);
        genOn[i] = !genOn[i];
        genLeds.setColorAt(i, genOn[i] ? ledList[i].col : COL.off);
      }
      genLeds.instanceColor.needsUpdate = true;
      for (let n = 0; n < 8; n++) {
        const l = productLeds[Math.floor(Math.random() * productLeds.length)];
        l.lit = !l.lit;
        l.inst.setColorAt(l.i, l.lit ? l.on : COL.off);
        l.inst.instanceColor.needsUpdate = true;
      }
    }

    /* --- Interacción --- */
    const raycaster = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    function pick(cx, cy) {
      const rect = canvas.getBoundingClientRect();
      ndc.set(((cx - rect.left) / rect.width) * 2 - 1, -((cy - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(ndc, camera);
      const hits = raycaster.intersectObjects(hitboxes, false);
      return hits.length ? hits[0].object.userData.rackId : null;
    }
    let drag = null;
    canvas.addEventListener('pointerdown', (e) => {
      if (e.button) return;
      drag = { id: e.pointerId, sx: e.clientX, sy: e.clientY, lx: e.clientX, ly: e.clientY, moved: false, rawYaw: rig.goal.yaw };
      try { canvas.setPointerCapture(e.pointerId); } catch (_) { /* sin captura */ }
    });
    canvas.addEventListener('pointermove', (e) => {
      if (drag && e.pointerId === drag.id) {
        const dx = e.clientX - drag.lx, dy = e.clientY - drag.ly;
        drag.lx = e.clientX; drag.ly = e.clientY;
        if (!drag.moved && Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) > 6) { drag.moved = true; hideHint(); rig.tween = null; }
        if (drag.moved) {
          const g = rig.goal;
          // Con el mouse la vista gira hacia donde se arrastra; con el dedo se arrastra la escena, como en los visores 360
          const dir = e.pointerType === 'mouse' ? -1 : 1;
          if (rig.mode === 'focus') {
            // Frente a un rack: la cámara orbita alrededor de él
            drag.rawYaw = clamp(drag.rawYaw - dir * dx * 0.0025, rig.baseYaw - 1.4, rig.baseYaw + 1.4);
            g.yaw = softLimit(drag.rawYaw, rig.baseYaw - 0.9, rig.baseYaw + 0.9);
            g.pitch = clamp(g.pitch + dy * 0.002, -0.05, 0.6);
          } else {
            // En el pasillo: a los costados se mira alrededor, hacia arriba o abajo se avanza o retrocede
            eye.z = clamp(eye.z + dy * 0.01, EYE_Z_MIN, eyeZMax());
            const my = maxYaw();
            drag.rawYaw = clamp(drag.rawYaw + dir * dx * 0.0025, -my - 0.5, my + 0.5);
            g.yaw = softLimit(drag.rawYaw, -my, my);
            applyLook();
          }
        }
        return;
      }
      if (e.pointerType === 'mouse') {
        state.hover = pick(e.clientX, e.clientY);
        canvas.style.cursor = state.hover ? 'pointer' : '';
        linkCard(state.hover);
      }
    });
    canvas.addEventListener('pointerup', (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const moved = drag.moved; drag = null;
      if (moved) settleYaw();
      if (!moved) { const id = pick(e.clientX, e.clientY); if (id) openRack(id); }
    });
    canvas.addEventListener('pointercancel', () => { if (drag && drag.moved) settleYaw(); drag = null; });
    canvas.addEventListener('pointerleave', () => { state.hover = null; linkCard(null); });
    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      hideHint();
      rig.tween = null;
      if (rig.mode === 'overview') {
        // Rueda hacia arriba: avanzar; hacia abajo: retroceder
        eye.z = clamp(eye.z + e.deltaY * 0.004, EYE_Z_MIN, eyeZMax());
        const my = maxYaw();
        rig.goal.yaw = clamp(rig.goal.yaw, -my, my);
        applyLook();
      }
      else rig.goal.r = clamp(rig.goal.r + e.deltaY * 0.002, 1.8, 5.5);
    }, { passive: false });

    /* --- Teclado: W/S avanzan y retroceden por el centro del pasillo (igual que la rueda),
       A/D giran la vista hacia los costados (las flechas hacen lo mismo) y con Shift se va más rápido. */
    const keys = new Set();
    let running = false;
    const MOVE_KEYS = { KeyW: 1, KeyA: 1, KeyS: 1, KeyD: 1, ArrowUp: 1, ArrowDown: 1, ArrowLeft: 1, ArrowRight: 1 };
    window.addEventListener('keydown', (e) => {
      running = e.shiftKey;
      if (!MOVE_KEYS[e.code] || e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target;
      // Dentro del panel las flechas siguen eligiendo períodos y planes
      if (t && t.closest && (t.closest('#panel') || /^(INPUT|SELECT|TEXTAREA)$/.test(t.tagName) || t.isContentEditable)) return;
      e.preventDefault();
      if (state.open || state.pending) closePanel();
      keys.add(e.code);
      hideHint();
    });
    window.addEventListener('keyup', (e) => { running = e.shiftKey; keys.delete(e.code); });
    window.addEventListener('blur', () => keys.clear());
    const held = (a, b) => keys.has(a) || (b && keys.has(b));
    function stepKeys(dt) {
      if (!keys.size || rig.mode !== 'overview') return;
      rig.tween = null;
      const g = rig.goal;
      const fwd = (held('KeyW', 'ArrowUp') ? 1 : 0) - (held('KeyS', 'ArrowDown') ? 1 : 0);
      const turn = (held('KeyA', 'ArrowLeft') ? 1 : 0) - (held('KeyD', 'ArrowRight') ? 1 : 0);
      const step = (running ? 4 : 2) * dt;
      // Se avanza siempre a lo largo del pasillo, por el centro, sin importar hacia dónde se esté mirando
      eye.x = 0;
      eye.z = clamp(eye.z - fwd * step, EYE_Z_MIN, eyeZMax());
      const my = maxYaw();
      let turnStep = (running ? 1.6 : 1.0) * dt;
      if (turn) {
        // Frena suave al acercarse al límite de giro en vez de chocar contra él
        const room = turn > 0 ? my - g.yaw : g.yaw + my;
        const f = clamp(room / 0.35, 0, 1);
        turnStep *= f * f * (3 - 2 * f);
      }
      g.yaw = clamp(g.yaw + turn * turnStep, -my, my);
      applyLook();
    }

    function resize() {
      const w = window.innerWidth, h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.fov = sheetMQ.matches ? 60 : 48;
      camera.updateProjectionMatrix();
      if (state.active) focusRack(state.active);
    }
    window.addEventListener('resize', resize);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(repaintPlates);
    resize();

    /* Si el equipo no sostiene una animación fluida, se baja de a poco la resolución interna del 3D
       (primero hasta la resolución nativa de la pantalla; por debajo, solo en equipos muy lentos). */
    let slowMs = 0;
    function adaptQuality(ms) {
      if (ms > 24) slowMs += ms; else slowMs = Math.max(0, slowMs - ms);
      if (slowMs < 1500) return;
      slowMs = 0;
      let next = pixelRatio - 0.25;
      if (next < 1) next = ms > 45 ? 0.75 : 1;
      if (next >= pixelRatio) return;
      pixelRatio = next;
      renderer.setPixelRatio(pixelRatio);
      resize();
    }

    let last = performance.now(), lastRender = 0, busyUntil = 0;
    const warmUntil = last + 3500;
    function frame(now) {
      requestAnimationFrame(frame);
      const raw = now - last;
      const dt = Math.min(0.1, raw / 1000); last = now;
      const steering = (drag && drag.moved) || keys.size > 0;
      const rate = steering ? 4.5 : now < introEnds ? 1.15 : 4;
      stepKeys(dt);
      const rigBusy = stepRig(dt, rate);
      const racksBusy = stepRacks(dt);
      logoMat.opacity = clamp((28 - camera.position.distanceTo(logo.position)) / 14, 0.18, 1);
      const shiftBusy = stepShift(dt);
      stepBlink(dt);
      // Después de cualquier movimiento se sigue dibujando a pleno un instante, para que el frenado final no se trabe
      if (steering || rigBusy || racksBusy || shiftBusy || now < introEnds) busyUntil = now + 450;
      const busy = now < busyUntil;
      // En reposo solo parpadean los LEDs: alcanza con ~30 cuadros por segundo y se ahorra la mitad del trabajo
      if (!busy && now - lastRender < 32) return;
      if (busy && now > warmUntil && raw < 250) adaptQuality(raw);
      lastRender = now;
      renderer.render(scene, camera);
    }
    requestAnimationFrame(frame);

    return {
      focusRack: (id) => { focusRack(id); startTween(1.6); },
      overview: (id) => { overview(id); startTween(1.4); }
    };
  }

  /* =====================================================================
     6. ARRANQUE
     ===================================================================== */
  setTimeout(() => document.body.classList.add('ready'), reduced || !scene3d ? 0 : 1300);
  // Un link con #rack (por ejemplo, de una campaña) abre ese rack una sola vez y la URL se limpia,
  // así al refrescar la página siempre se empieza desde el pasillo, sin productos seleccionados.
  const initial = decodeURIComponent(location.hash.slice(1));
  clearHash();
  if (rackById[initial]) setTimeout(() => openRack(initial), reduced ? 0 : 400);
})();

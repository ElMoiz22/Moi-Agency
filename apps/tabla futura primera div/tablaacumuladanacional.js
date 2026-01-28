/* ============================================================
   1. DATOS BASE (APERTURA) - Común para todas las tablas
============================================================ */
const DATOS_APERTURA_BASE = [
  { id: 'aff', j: 18, v: 7, e: 6, d: 5, gf: 24, gc: 17, pts: 27 },
  { id: 'aguacatan', j: 18, v: 8, e: 4, d: 6, gf: 24, gc: 25, pts: 28 },
  { id: 'chichicasteco', j: 18, v: 4, e: 5, d: 9, gf: 18, gc: 29, pts: 17 },
  { id: 'chimaltenango', j: 18, v: 2, e: 5, d: 11, gf: 15, gc: 42, pts: 11 },
  { id: 'ipala', j: 18, v: 6, e: 8, d: 4, gf: 21, gc: 17, pts: 26 },
  { id: 'suchitepequez', j: 18, v: 8, e: 6, d: 4, gf: 29, gc: 16, pts: 30 },
  { id: 'carcha', j: 18, v: 1, e: 4, d: 13, gf: 11, gc: 37, pts: 7 },
  { id: 'coatepeque', j: 18, v: 6, e: 4, d: 8, gf: 16, gc: 22, pts: 22 },
  { id: 'gomerano', j: 18, v: 9, e: 2, d: 7, gf: 28, gc: 23, pts: 29 },
  { id: 'iztapa', j: 18, v: 4, e: 6, d: 8, gf: 15, gc: 26, pts: 18 },
  { id: 'san_pedro', j: 18, v: 9, e: 3, d: 6, gf: 31, gc: 21, pts: 30 },
  { id: 'santa_lucia', j: 18, v: 8, e: 5, d: 5, gf: 23, gc: 19, pts: 29 },
  { id: 'huehuetecos', j: 18, v: 4, e: 6, d: 8, gf: 23, gc: 32, pts: 18 },
  { id: 'copalera', j: 18, v: 8, e: 2, d: 8, gf: 23, gc: 25, pts: 26 },
  { id: 'santa_rosa', j: 18, v: 9, e: 5, d: 4, gf: 27, gc: 17, pts: 32 },
  { id: 'nueva_concepcion', j: 18, v: 6, e: 2, d: 10, gf: 16, gc: 30, pts: 20 },
  { id: 'quiche', j: 18, v: 9, e: 4, d: 5, gf: 31, gc: 16, pts: 31 },
  { id: 'san_benito', j: 18, v: 8, e: 4, d: 6, gf: 32, gc: 19, pts: 25 },
  { id: 'chiquimulilla', j: 18, v: 9, e: 7, d: 2, gf: 27, gc: 14, pts: 34 },
  { id: 'sacachispas', j: 18, v: 9, e: 4, d: 5, gf: 25, gc: 12, pts: 28 },
];

// === POSICIÓN FINAL DEL APERTURA ===
const RANKING_APERTURA = [...DATOS_APERTURA_BASE]
  .sort((a, b) => {
    const dgA = a.gf - a.gc;
    const dgB = b.gf - b.gc;
    return b.pts - a.pts || dgB - dgA || b.gf - a.gf;
  })
  .map((e, index) => ({
    id: e.id,
    pos: index + 1
  }));

function posicionApertura(id) {
  const e = RANKING_APERTURA.find(r => r.id === id);
  return e ? e.pos : 999; // si no existe, lo manda al fondo
}

let PD_equiposAcumulada = [];

/* ============================================================
   2. FUNCIÓN PRINCIPAL DE SINCRONIZACIÓN
============================================================ */
function PD_sincronizarAcumulada() {
  // Combinar datos Apertura (fijos) con Clausura (dinámicos del array 'PD_equipos')
  PD_equiposAcumulada = DATOS_APERTURA_BASE.map(d => {
    const infoEquipo = PD_equipos.find(e => e.id === d.id);
    if (!infoEquipo) return null;

    return {
      id: d.id,
      nombre: infoEquipo.nombre,
      escudo: infoEquipo.escudo,
      grupo: infoEquipo.grupo,
      jj: d.j + infoEquipo.jugados,
      v: d.v + infoEquipo.victorias,
      e: d.e + infoEquipo.empates,
      d: d.d + infoEquipo.derrotas,
      gf: d.gf + infoEquipo.golesAFavor,
      gc: d.gc + infoEquipo.golesEnContra,
      dg: (d.gf - d.gc) + (infoEquipo.golesAFavor - infoEquipo.golesEnContra),
      pts: d.pts + infoEquipo.puntos
    };
  }).filter(e => e !== null);

  // Dibujar Tablas Individuales (A y B)
  dibujarTablaGrupo('#tabla-acumulada-a tbody', 'A');
  dibujarTablaGrupo('#tabla-acumulada-b tbody', 'B');

  // Dibujar Tabla General Unificada
  dibujarTablaGeneralUnificada('#tabla-acumulada-general tbody');
}

/* ============================================================
   3. DIBUJAR TABLAS POR GRUPO (A y B)
============================================================ */
function dibujarTablaGrupo(selectorTbody, grupoLetra) {
  const tbody = document.querySelector(selectorTbody);
  if (!tbody) return;
  tbody.innerHTML = '';

  const listaGrupo = PD_equiposAcumulada
    .filter(e => e.grupo === grupoLetra)
    .sort((a, b) => b.pts - a.pts || b.dg - a.dg);

  listaGrupo.forEach((e, i) => {
    const tr = document.createElement('tr');
    const posicion = i + 1;
    // Marcamos al último del grupo como descenso
    let clasePos = (posicion === 10) ? 'pos-desciende' : '';

    tr.innerHTML = `
      <td class="${clasePos}" style="width: 5px; padding: 0;"></td> 
      <td class="posicion">${posicion}</td> 
      <td style="display:flex; align-items:center; gap:8px;">
        <img src="${e.escudo}" class="imgequip">
        <span style="font-size: 14px; text-align: left;">${e.nombre.toUpperCase()}</span>
       </td>
      <td>${e.jj}</td>
      <td>${e.v}</td>
      <td>${e.e}</td>
      <td>${e.d}</td>
      <td>${e.dg}</td>
      <td><strong>${e.pts}</strong></td>
    `;
    tbody.appendChild(tr);
  });
}

/* ============================================================
   4. DIBUJAR TABLA GENERAL UNIFICADA (Los 20 PD_equipos)
============================================================ */
function dibujarTablaGeneralUnificada(selectorTbody) {
  const tbody = document.querySelector(selectorTbody);
  if (!tbody) return;
  tbody.innerHTML = '';

  // Ordenar a TODOS por puntos y DG
  const listaGeneral = [...PD_equiposAcumulada].sort((a, b) => b.pts - a.pts || b.dg - a.dg);

  listaGeneral.forEach((e, i) => {
    const tr = document.createElement('tr');
    const pos = i + 1;
    // Marcamos últimos 2 de la general (opcional)
    let clasePos = (pos >= 21) ? 'pos-desciende' : '';

    tr.innerHTML = `
      <td class="${clasePos}" style="width: 5px; padding: 0;"></td> 
      <td class="posicion">${pos}</td> 
      <td style="display:flex; align-items:center; gap:8px;">
        <img src="${e.escudo}" class="imgequip">
        <span style="font-size: 20px; text-align: left;">
          ${e.nombre.toUpperCase()} <small style="color:#ffdb00">(${e.grupo})</small>
        </span>
      </td>
      <td>${e.jj}</td>
      <td>${e.v}</td>
      <td>${e.e}</td>
      <td>${e.d}</td>
      <td>${e.dg}</td>
      <td><strong>${e.pts}</strong></td>
    `;
    tbody.appendChild(tr);
  });
}

// Esta función debe llamarse al final de recalcularTablaDesdeStorage

function PD_recalcularTablaDesdeStorage() {
  PD_resetearTabla();

  Object.keys(localStorage).forEach(key => {
    if (!key.startsWith('pd_j')) return; // 🔑 clave correcta
    const p = JSON.parse(localStorage.getItem(key));
    if (p && p.gl !== null && p.gv !== null) {
      PD_aplicarPartido(p.local, p.visita, p.gl, p.gv);
    }
  });

  PD_actualizarTabla();

  // 🔁 AQUÍ se redibujan las 3 tablas acumuladas
  if (typeof PD_sincronizarAcumulada === "function") {
    PD_sincronizarAcumulada();
  }
}

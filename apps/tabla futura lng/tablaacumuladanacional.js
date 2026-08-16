/* =====================
   EQUIPOS BASE (ACUMULADA)
===================== */
// Mantenemos los datos del Apertura en una constante para no perderlos al resetear
const DATOS_APERTURA = [
  { equipo: 'municipal', j: 0, gf: 0, gc: 0, pts: 0, v: 0, e: 0, d: 0 },
  { equipo: 'mixco', j: 0, gf: 0, gc: 0, pts: 0, v: 0, e: 0, d: 0 },
  { equipo: 'antigua', j: 0, gf: 0, gc: 0, pts: 0, v: 0, e: 0, d: 0 },
  { equipo: 'aurora', j: 0, gf: 0, gc: 0, pts: 0, v: 0, e: 0, d: 0 },
  { equipo: 'malacateco', j: 0, gf: 0, gc: 0, pts: 0, v: 0, e: 0, d: 0 },
  { equipo: 'xelaju', j: 0, gf: 0, gc: 0, pts: 0, v: 0, e: 0, d: 0 },
  { equipo: 'San Pedro', j: 0, gf: 0, gc: 0, pts: 0, v: 0, e: 0, d: 0 },
  { equipo: 'suchi', j: 0, gf: 0, gc: 0, pts: 0, v: 0, e: 0, d: 0 },
  { equipo: 'coban', j: 0, gf: 0, gc: 0, pts: 0, v: 0, e: 0, d: 0 },
  { equipo: 'marquense', j: 0, gf: 0, gc: 0, pts: 0, v: 0, e: 0, d: 0 },
  { equipo: 'guastatoya', j: 0, gf: 0, gc: 0, pts: 0, v: 0, e: 0, d: 0 },
  { equipo: 'comunicaciones', j: 0, gf: 0, gc: 0, pts: 0, v: 0, e: 0, d: 0 }
];

// === POSICIÓN FINAL DEL APERTURA (DESEMPATE) ===
const RANKING_APERTURA = [...DATOS_APERTURA]
  .sort((a, b) => {
    const dgA = a.gf - a.gc;
    const dgB = b.gf - b.gc;
    return b.pts - a.pts || dgB - dgA || b.gf - a.gf;
  })
  .map((e, index) => ({
    id: e.equipo,
    pos: index + 1
  }));

function posicionApertura(id) {
  const e = RANKING_APERTURA.find(r => r.id === id);
  return e ? e.pos : 999;
}


// Variable donde se guardará la suma total
let equiposAcumulada = [];

function sincronizarAcumulada() {
  // 1. Resetear la acumulada con los datos base del Apertura
  equiposAcumulada = DATOS_APERTURA.map(d => {
    const infoEquipo = equipos.find(e => e.id === d.equipo); // Busca nombre y escudo del primer script
    return {
      id: d.equipo,
      nombre: infoEquipo.nombre,
      escudo: infoEquipo.escudo,
      jugados: d.j,
      victorias: d.v || 0,
      empates: d.e || 0,
      derrotas: d.d || 0,
      golesAFavor: d.gf,
      golesEnContra: d.gc,
      puntos: d.pts
    };
  });

  // 2. Sumar los datos que tiene actualmente la tabla del CLAUSURA (primer script)
  equipos.forEach(eqClausura => {
    const eqAcum = equiposAcumulada.find(ea => ea.id === eqClausura.id);
    if (eqAcum) {
      eqAcum.jugados += eqClausura.jugados;
      eqAcum.victorias += eqClausura.victorias;
      eqAcum.empates += eqClausura.empates;
      eqAcum.derrotas += eqClausura.derrotas;
      eqAcum.golesAFavor += eqClausura.golesAFavor;
      eqAcum.golesEnContra += eqClausura.golesEnContra;
      eqAcum.puntos += eqClausura.puntos;
    }
  });

  // 3. Dibujar la tabla
  actualizarTablaAcumulada();
}

function actualizarTablaAcumulada() {
  const tbody = document.querySelector('#tabla-acumulada tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  // Ordenar por puntos, luego diferencia
equiposAcumulada.sort((a, b) => {
  const difA = a.golesAFavor - a.golesEnContra;
  const difB = b.golesAFavor - b.golesEnContra;

  return (
    b.puntos - a.puntos ||
    difB - difA ||
    b.golesAFavor - a.golesAFavor ||
    posicionApertura(a.id) - posicionApertura(b.id)
  );
});


  equiposAcumulada.forEach((e, i) => {
    const tr = document.createElement('tr');
    const posicion = i + 1;
    let clasePosicion = (i >= equiposAcumulada.length - 2) ? 'pos-desciende' : '';

    tr.innerHTML = `
      <td class="${clasePosicion}" style="width: 5px; padding: 0;"></td> 
      <td class="posicion">${posicion}</td> 
      <td style="display:flex; align-items:center; gap:8px;">
        <img src="${e.escudo}" class="imgequip">
                <span style="font-size: 15px; text-align: left;">
            ${e.nombre.toUpperCase()}
        </span>
      </td>
      <td>${e.jugados}</td>
      <td>${e.victorias}</td>
      <td>${e.empates}</td>
      <td>${e.derrotas}</td>
      <td>${e.golesAFavor - e.golesEnContra}</td>
      <td><strong>${e.puntos}</strong></td>
    `;
    tbody.appendChild(tr);
  });
}

function recalcularTablaDesdeStorage() {
  resetearTabla();

  Object.keys(localStorage).forEach(key => {
    if (!key.startsWith('j')) return;
    const p = JSON.parse(localStorage.getItem(key));
    if (p && p.gl !== null && p.gv !== null) {
      aplicarPartido(p.local, p.visita, p.gl, p.gv);
    }
  });

  actualizarTabla(); 
  
  // --- AGREGA ESTA LÍNEA AQUÍ ---
  if (typeof sincronizarAcumulada === "function") {
    sincronizarAcumulada();
  }
}
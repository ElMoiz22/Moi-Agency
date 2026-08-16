/* =====================
   DATOS DE LOS EQUIPOS
===================== */
const equipos = [
  { id: 'antigua', nombre: 'antigua gfc', escudo: 'Escudos/LNG/cap (6).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'aurora', nombre: 'aurora fc', escudo: 'Escudos/LNG/cap (9).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'coban', nombre: 'cobán imperial', escudo: 'Escudos/LNG/cap (7).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'comunicaciones', nombre: 'comunicaciones', escudo: 'Escudos/LNG/cap (3).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'suchi', nombre: 'suchitepéquez', escudo: 'Escudos/LNG/cap (8).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'municipal', nombre: 'csd Municipal', escudo: 'Escudos/LNG/cap (2).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'San Pedro', nombre: 'Dep. San Pedro', escudo: 'Escudos/LNG/cap (4).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'mixco', nombre: 'dep. mixco', escudo: 'Escudos/LNG/cap (10).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'guastatoya', nombre: 'guastatoya', escudo: 'Escudos/LNG/cap (11).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'malacateco', nombre: 'malacateco', escudo: 'Escudos/LNG/cap (5).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'marquense', nombre: 'marquense', escudo: 'Escudos/LNG/cap (1).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'xelaju', nombre: 'xelajú mc', escudo: 'Escudos/LNG/cap (12).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 }
];

/* =====================
   2. ACUMULADA BASE (DATOS APERTURA)
===================== */
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

const RANKING_APERTURA = [...DATOS_APERTURA]
  .sort((a, b) => {
    const dgA = a.gf - a.gc;
    const dgB = b.gf - b.gc;
    return b.pts - a.pts || dgB - dgA || b.gf - a.gf;
  })
  .map((e, index) => ({ id: e.equipo, pos: index + 1 }));

function posicionApertura(id) {
  const e = RANKING_APERTURA.find(r => r.id === id);
  return e ? e.pos : 999;
}

let equiposAcumulada = [];

/* =====================
   JORNADAS
===================== */
const jornadas = {
1: [
    { local: 'antigua', visita: 'marquense', gl: 3, gv: 1 },
    { local: 'municipal', visita: 'mixco', gl: 2, gv: 0 },
    { local: 'San Pedro', visita: 'xelaju', gl: 1, gv: 0 },
    { local: 'aurora', visita: 'guastatoya', gl: 0, gv: 1 },
    { local: 'malacateco', visita: 'coban', gl: 1, gv: 1 },
    { local: 'suchi', visita: 'comunicaciones', gl: 0, gv: 0}
  ],
  2: [
    { local: 'mixco', visita: 'suchi', gl: 2, gv: 0 },
    { local: 'comunicaciones', visita: 'San Pedro', gl: 1, gv: 0 },
    { local: 'guastatoya', visita: 'malacateco', gl: 4, gv: 0 },
    { local: 'marquense', visita: 'municipal', gl: 1, gv: 2 },
    { local: 'xelaju', visita: 'aurora' , gl: 3, gv: 1},
    { local: 'coban', visita: 'antigua' }
  ],
  3: [
    { local: 'malacateco', visita: 'xelaju', gl: 2, gv: 2 },
    { local: 'mixco', visita: 'marquense', gl: 1, gv: 0 },
    { local: 'aurora', visita: 'comunicaciones', gl: 3, gv: 1 },
    { local: 'antigua', visita: 'guastatoya', gl: 2, gv: 0 },
    { local: 'San Pedro', visita: 'suchi', gl: 3, gv: 0 },
    { local: 'municipal', visita: 'coban', gl: 2, gv: 0 }
  ],
  4: [
    { local: 'coban', visita: 'mixco' },
    { local: 'guastatoya', visita: 'municipal' },
    { local: 'comunicaciones', visita: 'malacateco' },
    { local: 'San Pedro', visita: 'aurora' },
    { local: 'suchi', visita: 'marquense' },
    { local: 'xelaju', visita: 'antigua' }
  ],
  5: [
    { local: 'aurora', visita: 'suchi' },
    { local: 'antigua', visita: 'comunicaciones' },
    { local: 'municipal', visita: 'xelaju' },
    { local: 'mixco', visita: 'guastatoya' },
    { local: 'marquense', visita: 'coban' },
    { local: 'malacateco', visita: 'San Pedro' }
  ],
  6: [
    { local: 'suchi', visita: 'coban' },
    { local: 'guastatoya', visita: 'marquense' },
    { local: 'comunicaciones', visita: 'municipal' },
    { local: 'San Pedro', visita: 'antigua' },
    { local: 'aurora', visita: 'malacateco' },
    { local: 'xelaju', visita: 'mixco' }
  ],
  7: [
    { local: 'malacateco', visita: 'suchi' },
    { local: 'mixco', visita: 'comunicaciones' },
    { local: 'municipal', visita: 'San Pedro' },
    { local: 'coban', visita: 'guastatoya' },
    { local: 'marquense', visita: 'xelaju' },
    { local: 'antigua', visita: 'aurora' }
  ],
  8: [
    { local: 'suchi', visita: 'guastatoya' },
    { local: 'xelaju', visita: 'coban' },
    { local: 'malacateco', visita: 'antigua' },
    { local: 'aurora', visita: 'municipal' },
    { local: 'San Pedro', visita: 'mixco' },
    { local: 'comunicaciones', visita: 'marquense' }
  ],
  9: [
    { local: 'guastatoya', visita: 'xelaju' },
    { local: 'mixco', visita: 'aurora' },
    { local: 'municipal', visita: 'malacateco' },
    { local: 'coban', visita: 'comunicaciones' },
    { local: 'marquense', visita: 'San Pedro' },
    { local: 'antigua', visita: 'suchi' }
  ],
  10: [
    { local: 'suchi', visita: 'xelaju' },
    { local: 'malacateco', visita: 'mixco' },
    { local: 'aurora', visita: 'marquense' },
    { local: 'San Pedro', visita: 'coban' },
    { local: 'comunicaciones', visita: 'guastatoya' },
    { local: 'antigua', visita: 'municipal' }
  ],
  11: [
    { local: 'xelaju', visita: 'comunicaciones' },
    { local: 'guastatoya', visita: 'San Pedro' },
    { local: 'mixco', visita: 'antigua' },
    { local: 'municipal', visita: 'suchi' },
    { local: 'coban', visita: 'aurora' },
    { local: 'marquense', visita: 'malacateco' }
  ],
  // SEGUNDA VUELTA (LOCALES Y VISITAS INVERTIDOS)
  12: [
    { local: 'marquense', visita: 'antigua' },
    { local: 'mixco', visita: 'municipal' },
    { local: 'xelaju', visita: 'San Pedro' },
    { local: 'guastatoya', visita: 'aurora' },
    { local: 'coban', visita: 'malacateco' },
    { local: 'comunicaciones', visita: 'suchi' }
  ],
  13: [
    { local: 'suchi', visita: 'mixco' },
    { local: 'San Pedro', visita: 'comunicaciones' },
    { local: 'malacateco', visita: 'guastatoya' },
    { local: 'municipal', visita: 'marquense' },
    { local: 'aurora', visita: 'xelaju' },
    { local: 'antigua', visita: 'coban' }
  ],
  14: [
    { local: 'xelaju', visita: 'malacateco' },
    { local: 'marquense', visita: 'mixco' },
    { local: 'comunicaciones', visita: 'aurora' },
    { local: 'guastatoya', visita: 'antigua' },
    { local: 'suchi', visita: 'San Pedro' },
    { local: 'coban', visita: 'municipal' }
  ],
  15: [
    { local: 'mixco', visita: 'coban' },
    { local: 'municipal', visita: 'guastatoya' },
    { local: 'malacateco', visita: 'comunicaciones' },
    { local: 'aurora', visita: 'San Pedro' },
    { local: 'marquense', visita: 'suchi' },
    { local: 'antigua', visita: 'xelaju' }
  ],
  16: [
    { local: 'suchi', visita: 'aurora' },
    { local: 'comunicaciones', visita: 'antigua' },
    { local: 'xelaju', visita: 'municipal' },
    { local: 'guastatoya', visita: 'mixco' },
    { local: 'coban', visita: 'marquense' },
    { local: 'San Pedro', visita: 'malacateco' }
  ],
  17: [
    { local: 'coban', visita: 'suchi' },
    { local: 'marquense', visita: 'guastatoya' },
    { local: 'municipal', visita: 'comunicaciones' },
    { local: 'antigua', visita: 'San Pedro' },
    { local: 'malacateco', visita: 'aurora' },
    { local: 'mixco', visita: 'xelaju' }
  ],
  18: [
    { local: 'suchi', visita: 'malacateco' },
    { local: 'comunicaciones', visita: 'mixco' },
    { local: 'San Pedro', visita: 'municipal' },
    { local: 'guastatoya', visita: 'coban' },
    { local: 'xelaju', visita: 'marquense' },
    { local: 'aurora', visita: 'antigua' }
  ],
  19: [
    { local: 'guastatoya', visita: 'suchi' },
    { local: 'coban', visita: 'xelaju' },
    { local: 'antigua', visita: 'malacateco' },
    { local: 'municipal', visita: 'aurora' },
    { local: 'mixco', visita: 'San Pedro' },
    { local: 'marquense', visita: 'comunicaciones' }
  ],
  20: [
    { local: 'xelaju', visita: 'guastatoya' },
    { local: 'aurora', visita: 'mixco' },
    { local: 'malacateco', visita: 'municipal' },
    { local: 'comunicaciones', visita: 'coban' },
    { local: 'San Pedro', visita: 'marquense' },
    { local: 'suchi', visita: 'antigua' }
  ],
  21: [
    { local: 'xelaju', visita: 'suchi' },
    { local: 'mixco', visita: 'malacateco' },
    { local: 'marquense', visita: 'aurora' },
    { local: 'coban', visita: 'San Pedro' },
    { local: 'guastatoya', visita: 'comunicaciones' },
    { local: 'municipal', visita: 'antigua' }
  ],
  22: [
    { local: 'comunicaciones', visita: 'xelaju' },
    { local: 'San Pedro', visita: 'guastatoya' },
    { local: 'antigua', visita: 'mixco' },
    { local: 'suchi', visita: 'municipal' },
    { local: 'aurora', visita: 'coban' },
    { local: 'malacateco', visita: 'marquense' }
  ]
};

/* =====================
   UTILIDADES
===================== */
function obtenerEquipoPorId(id) {
  return equipos.find(e => e.id === id);
}

function resetearTabla() {
  equipos.forEach(e => {
    e.jugados = 0;
    e.golesAFavor = 0;
    e.golesEnContra = 0;
    e.victorias = 0;
    e.derrotas = 0;
    e.empates = 0;
    e.puntos = 0;
  });
}

function aplicarPartido(local, visita, gl, gv) {
  const L = obtenerEquipoPorId(local);
  const V = obtenerEquipoPorId(visita);
  if (!L || !V) return;

  L.jugados++; V.jugados++;
  L.golesAFavor += gl;
  L.golesEnContra += gv;
  V.golesAFavor += gv;
  V.golesEnContra += gl;

  if (gl > gv) {
    L.victorias++; L.puntos += 3;
    V.derrotas++;
  } else if (gv > gl) {
    V.victorias++; V.puntos += 3;
    L.derrotas++;
  } else {
    L.empates++; V.empates++;
    L.puntos++; V.puntos++;
  }
}

/* =====================
   ACTUALIZAR TABLA
   ⚠️ NO TOCAR
===================== */
function actualizarTabla() {
  const tbody = document.querySelector('#tabla-posiciones tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  equipos.sort((a, b) => {
    const difA = a.golesAFavor - a.golesEnContra;
    const difB = b.golesAFavor - b.golesEnContra;
    return (
      b.puntos - a.puntos ||
      difB - difA ||
      b.golesAFavor - a.golesAFavor ||
      posicionApertura(a.id) - posicionApertura(b.id)
    );
  });

  equipos.forEach((equipo, index) => {
    const tr = document.createElement('tr');
    const posicion = index + 1;

    // Asignación de clases según la posición
    let clasePosicion = '';
    if (posicion <= 2) {
      clasePosicion = 'pos-verde';    // Puestos 1 y 2
    } else if (posicion <= 6) {
      clasePosicion = 'pos-amarillo'; // Puestos 3, 4, 5 y 6
    }

    tr.innerHTML = `
      <td class="${clasePosicion}" style="width: 6px; padding: 0;"></td> 
      <td class="posicion">${posicion}</td> 
      <td style="display:flex; align-items:center; gap:8px;">
        <img src="${equipo.escudo}" class="imgequip">
        <span style="font-size: 15px; text-align: left;">${equipo.nombre.toUpperCase()}</span>      
      </td>
      <td>${equipo.jugados}</td>
      <td>${equipo.victorias}</td>
      <td>${equipo.empates}</td>
      <td>${equipo.derrotas}</td>
      <td>${equipo.golesAFavor - equipo.golesEnContra}</td>
      <td><strong>${equipo.puntos}</strong></td>
    `;
    tbody.appendChild(tr);
});
}

function sincronizarAcumulada() {
  equiposAcumulada = DATOS_APERTURA.map(d => {
    const infoEquipo = equipos.find(e => e.id === d.equipo);
    return {
      id: d.equipo,
      nombre: infoEquipo ? infoEquipo.nombre : d.equipo,
      escudo: infoEquipo ? infoEquipo.escudo : '',
      jugados: d.j || 0,
      victorias: d.v || 0,
      empates: d.e || 0,
      derrotas: d.d || 0,
      golesAFavor: d.gf || 0,
      golesEnContra: d.gc || 0,
      puntos: d.pts || 0
    };
  });

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

  actualizarTablaAcumulada();
}

function actualizarTablaAcumulada() {
  const tbody = document.querySelector('#tabla-acumulada tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

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
        <span style="font-size: 15px; text-align: left;">${e.nombre.toUpperCase()}</span>
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

function renderizarJornada(jornada) {
  const contenedor = document.getElementById('contenido' + jornada);
  if (!contenedor || !jornadas[jornada]) return;

  contenedor.innerHTML = '';

  jornadas[jornada].forEach((p, i) => {
    const id = `j${jornada}_p${i}`;
    const guardado = JSON.parse(localStorage.getItem(id)) || {};

    const golLocal = guardado.gl ?? p.gl ?? '';
    const golVisita = guardado.gv ?? p.gv ?? '';

    const eqLocal = obtenerEquipoPorId(p.local);
    const eqVisita = obtenerEquipoPorId(p.visita);

    if (!eqLocal || !eqVisita) return;

    contenedor.innerHTML += `
      <div class="partido">
        <div class="equipo">
            <img src="${eqLocal.escudo}" alt="${p.local}">
            <span>${p.local.toUpperCase()}</span>
        </div>
        
        <div class="marcador">
            <input type="number" min="0" placeholder="0"
              value="${golLocal}"
              onchange="guardarResultado('${id}','${p.local}','${p.visita}',this.value,null)">
            <span>-</span>
            <input type="number" min="0" placeholder="0"
              value="${golVisita}"
              onchange="guardarResultado('${id}','${p.local}','${p.visita}',null,this.value)">
        </div>

        <div class="equipo">
            <span>${p.visita.toUpperCase()}</span>
            <img src="${eqVisita.escudo}" alt="${p.visita}">
        </div>
      </div>
    `;
  });
}

/* =====================
   RECALCULAR TABLAS
===================== */
function recalcularTablaDesdeStorage() {
  resetearTabla();

  // 1. Aplicar resultados definidos por defecto en el objeto "jornadas"
  Object.keys(jornadas).forEach(jornadaNum => {
    jornadas[jornadaNum].forEach(p => {
      if (p.gl !== undefined && p.gl !== null && p.gv !== undefined && p.gv !== null) {
        aplicarPartido(p.local, p.visita, Number(p.gl), Number(p.gv));
      }
    });
  });

  // 2. Aplicar/sobrescribir con los resultados guardados en el LocalStorage
  Object.keys(localStorage).forEach(key => {
    if (!key.startsWith('j')) return;
    const p = JSON.parse(localStorage.getItem(key));
    if (p && p.gl !== null && p.gv !== null) {
      aplicarPartido(p.local, p.visita, Number(p.gl), Number(p.gv));
    }
  });

  // 3. Actualizar la tabla del torneo actual
  actualizarTabla();

  // 4. Actualizar la tabla acumulada
  if (typeof sincronizarAcumulada === "function") {
    sincronizarAcumulada();
  }
}

/* =====================
   GUARDAR RESULTADO
===================== */
function guardarResultado(id, local, visita, gl, gv) {
  let partido = JSON.parse(localStorage.getItem(id)) || {
    local: local,
    visita: visita,
    gl: null,
    gv: null
  };

  partido.local = local;
  partido.visita = visita;

  if (gl !== null) {
    partido.gl = (gl === '' || gl === undefined) ? null : Number(gl);
  }
  if (gv !== null) {
    partido.gv = (gv === '' || gv === undefined) ? null : Number(gv);
  }

  localStorage.setItem(id, JSON.stringify(partido));
  recalcularTablaDesdeStorage();
}

function recalcularTablaDesdeStorage() {
  resetearTabla();

  // 1. Cargar goles fijos/por defecto definidos directamente en el objeto 'jornadas'
  Object.keys(jornadas).forEach(jornadaNum => {
    jornadas[jornadaNum].forEach(p => {
      if (p.gl !== undefined && p.gl !== null && p.gv !== undefined && p.gv !== null) {
        aplicarPartido(p.local, p.visita, Number(p.gl), Number(p.gv));
      }
    });
  });

  // 2. Cargar/Sobrescribir datos guardados en LocalStorage (UI)
  Object.keys(localStorage).forEach(key => {
    if (!key.startsWith('j')) return;
    const p = JSON.parse(localStorage.getItem(key));
    if (p && p.gl !== null && p.gv !== null) {
      aplicarPartido(p.local, p.visita, Number(p.gl), Number(p.gv));
    }
  });

  actualizarTabla();
  sincronizarAcumulada();
}


/* =====================
   MOSTRAR JORNADA EN PANTALLA
===================== */
function renderizarJornada(jornada) {
  const contenedor = document.getElementById('contenido' + jornada);
  if (!contenedor || !jornadas[jornada]) return;

  contenedor.innerHTML = '';

  jornadas[jornada].forEach((p, i) => {
    const id = `j${jornada}_p${i}`;
    const guardado = JSON.parse(localStorage.getItem(id)) || {};

    // Prioridad: 1. LocalStorage -> 2. Código por defecto -> 3. Vacío
    const golLocal = guardado.gl ?? p.gl ?? '';
    const golVisita = guardado.gv ?? p.gv ?? '';

    contenedor.innerHTML += `
      <div class="partido">
        <div class="equipo">
            <img src="${obtenerEquipoPorId(p.local).escudo}" alt="${p.local}">
            <span>${p.local.toUpperCase()}</span>
        </div>
        
        <div class="marcador">
            <input type="number" min="0" placeholder="0"
              value="${golLocal}"
              onchange="guardarResultado('${id}','${p.local}','${p.visita}',this.value,null)">
            <span>-</span>
            <input type="number" min="0" placeholder="0"
              value="${golVisita}"
              onchange="guardarResultado('${id}','${p.local}','${p.visita}',null,this.value)">
        </div>

        <div class="equipo">
            <span>${p.visita.toUpperCase()}</span>
            <img src="${obtenerEquipoPorId(p.visita).escudo}" alt="${p.visita}">
        </div>
      </div>
    `;
  });
}

// BLOQUE NUEVO: Generador automático de las 22 jornadas
function inicializarCalendario() {
  const principal = document.getElementById('contenedor-principal');
  
  for (let i = 1; i <= 22; i++) {
    // 1. Crear el contenedor visual para la jornada
    const seccionJornada = document.createElement('section');
    seccionJornada.className = 'jornada-bloque';
    seccionJornada.innerHTML = `
      <h2>JORNADA ${i}</h2>
      <div id="contenido${i}" class="tabla-partidos">
        </div>
    `;
    principal.appendChild(seccionJornada);

    // 2. Renderizar los partidos si existen datos para esa jornada
    if (jornadas[i]) {
      renderizarJornada(i);
    }
  }
}


/* =====================
   INICIO
===================== */
document.addEventListener('DOMContentLoaded', () => {
  recalcularTablaDesdeStorage();
  mostrarContenido(1);
});
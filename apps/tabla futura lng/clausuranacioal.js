/* =====================
   DATOS DE LOS EQUIPOS
===================== */
const equipos = [
  { id: 'antigua', nombre: 'antigua gfc', escudo: 'Escudos/LNG/cap (6).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'aurora', nombre: 'aurora fc', escudo: 'Escudos/LNG/cap (9).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'coban', nombre: 'cobán imperial', escudo: 'Escudos/LNG/cap (7).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'comunicaciones', nombre: 'comunicaciones', escudo: 'Escudos/LNG/cap (3).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'mictlan', nombre: 'csd mictlan', escudo: 'Escudos/LNG/cap (8).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'municipal', nombre: 'csd Municipal', escudo: 'Escudos/LNG/cap (2).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'achuapa', nombre: 'dep. achuapa', escudo: 'Escudos/LNG/cap (4).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'mixco', nombre: 'dep. mixco', escudo: 'Escudos/LNG/cap (10).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'guastatoya', nombre: 'guastatoya', escudo: 'Escudos/LNG/cap (11).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'malacateco', nombre: 'malacateco', escudo: 'Escudos/LNG/cap (5).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'marquense', nombre: 'marquense', escudo: 'Escudos/LNG/cap (1).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'xelaju', nombre: 'xelajú mc', escudo: 'Escudos/LNG/cap (12).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 }
];


/* =====================
   JORNADAS
===================== */
const jornadas = {
  1: [
    { local:'xelaju', visita:'aurora' },
    { local:'coban', visita:'antigua' },
    { local:'achuapa', visita:'comunicaciones' },
    { local:'malacateco', visita:'marquense' },
    { local:'guastatoya', visita:'mixco' },
    { local:'municipal', visita:'mictlan' }
  ],  
  2: [
    { local:'comunicaciones', visita:'coban' },
    { local:'marquense', visita:'achuapa' },
    { local:'aurora', visita:'municipal' },
    { local:'mictlan', visita:'guastatoya' },
    { local:'mixco', visita:'malacateco' },
    { local:'antigua', visita:'xelaju' }
  ],
  3: [
    { local:'coban', visita:'marquense' },
    { local:'achuapa', visita:'mixco' },
    { local:'guastatoya', visita:'aurora' },
    { local:'municipal', visita:'xelaju' },
    { local:'antigua', visita:'comunicaciones' },
    { local:'malacateco', visita:'mictlan' }
  ],
  4: [
    { local:'mixco', visita:'coban' },
    { local:'municipal', visita:'guastatoya' },
    { local:'xelaju', visita:'comunicaciones' },
    { local:'marquense', visita:'antigua' },
    { local:'aurora', visita:'malacateco' },
    { local:'mictlan', visita:'achuapa' }
  ],
  5: [
    { local:'malacateco', visita:'municipal' },
    { local:'achuapa', visita:'aurora' },
    { local:'comunicaciones', visita:'marquense' },
    { local:'guastatoya', visita:'xelaju' },
    { local:'coban', visita:'mictlan' },
    { local:'antigua', visita:'mixco' }
  ],
  6: [
    { local:'mixco', visita:'comunicaciones' },
    { local:'municipal', visita:'achuapa' },
    { local:'guastatoya', visita:'malacateco' },
    { local:'aurora', visita:'coban' },
    { local:'mictlan', visita:'antigua' },
    { local:'xelaju', visita:'marquense' }
  ],
  7: [
    { local:'achuapa', visita:'guastatoya' },
    { local:'coban', visita:'municipal' },
    { local:'malacateco', visita:'xelaju' },
    { local:'antigua', visita:'aurora' },
    { local:'comunicaciones', visita:'mictlan' },
    { local:'marquense', visita:'mixco' }
  ],
  8: [
    { local:'malacateco', visita:'achuapa' },
    { local:'municipal', visita:'antigua' },
    { local:'guastatoya', visita:'coban' },
    { local:'aurora', visita:'comunicaciones' },
    { local:'mictlan', visita:'marquense' },
    { local:'xelaju', visita:'mixco' }
  ],
  9: [
    { local:'coban', visita:'malacateco' },
    { local:'antigua', visita:'guastatoya' },
    { local:'achuapa', visita:'xelaju' },
    { local:'comunicaciones', visita:'municipal' },
    { local:'marquense', visita:'aurora' },
    { local:'mixco', visita:'mictlan' }
  ],
  10: [
    { local:'guastatoya', visita:'comunicaciones' },
    { local:'municipal', visita:'marquense' },
    { local:'malacateco', visita:'antigua' },
    { local:'aurora', visita:'mixco' },
    { local:'achuapa', visita:'coban' },
    { local:'xelaju', visita:'mictlan' }
  ],
  11: [
    { local:'comunicaciones', visita:'malacateco' },
    { local:'mixco', visita:'municipal' },
    { local:'marquense', visita:'guastatoya' },
    { local:'antigua', visita:'achuapa' },
    { local:'coban', visita:'xelaju' },
    { local:'mictlan', visita:'aurora' }
  ],
  12: [
    { local:'aurora', visita:'xelaju' },
    { local:'antigua', visita:'coban' },
    { local:'comunicaciones', visita:'achuapa' },
    { local:'marquense', visita:'malacateco' },
    { local:'mixco', visita:'guastatoya' },
    { local:'mictlan', visita:'municipal' }
  ],
  13: [
    { local:'coban', visita:'comunicaciones' },
    { local:'achuapa', visita:'marquense' },
    { local:'municipal', visita:'aurora' },
    { local:'guastatoya', visita:'mictlan' },
    { local:'malacateco', visita:'mixco' },
    { local:'xelaju', visita:'antigua' }
  ],
  14: [
    { local:'marquense', visita:'coban' },
    { local:'mixco', visita:'achuapa' },
    { local:'aurora', visita:'guastatoya' },
    { local:'xelaju', visita:'municipal' },
    { local:'comunicaciones', visita:'antigua' },
    { local:'mictlan', visita:'malacateco' }
  ],
  15: [
    { local:'coban', visita:'mixco' },
    { local:'guastatoya', visita:'municipal' },
    { local:'comunicaciones', visita:'xelaju' },
    { local:'antigua', visita:'marquense' },
    { local:'malacateco', visita:'aurora' },
    { local:'achuapa', visita:'mictlan' }
  ],
  16: [
    { local:'municipal', visita:'malacateco' },
    { local:'aurora', visita:'achuapa' },
    { local:'marquense', visita:'comunicaciones' },
    { local:'xelaju', visita:'guastatoya' },
    { local:'mictlan', visita:'coban' },
    { local:'mixco', visita:'antigua' }
  ],
  17: [
    { local:'comunicaciones', visita:'mixco' },
    { local:'achuapa', visita:'municipal' },
    { local:'malacateco', visita:'guastatoya' },
    { local:'coban', visita:'aurora' },
    { local:'antigua', visita:'mictlan' },
    { local:'marquense', visita:'xelaju' }
  ],
  18: [
    { local:'guastatoya', visita:'achuapa' },
    { local:'municipal', visita:'coban' },
    { local:'xelaju', visita:'malacateco' },
    { local:'aurora', visita:'antigua' },
    { local:'mictlan', visita:'comunicaciones' },
    { local:'mixco', visita:'marquense' }
  ],
  19: [
    { local:'achuapa', visita:'malacateco' },
    { local:'antigua', visita:'municipal' },
    { local:'coban', visita:'guastatoya' },
    { local:'comunicaciones', visita:'aurora' },
    { local:'marquense', visita:'mictlan' },
    { local:'mixco', visita:'xelaju' }
  ],
  20: [
    { local:'malacateco', visita:'coban' },
    { local:'guastatoya', visita:'antigua' },
    { local:'xelaju', visita:'achuapa' },
    { local:'municipal', visita:'comunicaciones' },
    { local:'aurora', visita:'marquense' },
    { local:'mictlan', visita:'mixco' }
  ],
  21: [
    { local:'comunicaciones', visita:'guastatoya' },
    { local:'marquense', visita:'municipal' },
    { local:'antigua', visita:'malacateco' },
    { local:'mixco', visita:'aurora' },
    { local:'coban', visita:'achuapa' },
    { local:'mictlan', visita:'xelaju' }
  ],
  22: [
    { local:'malacateco', visita:'comunicaciones' },
    { local:'municipal', visita:'mixco' },
    { local:'guastatoya', visita:'marquense' },
    { local:'achuapa', visita:'antigua' },
    { local:'xelaju', visita:'coban' },
    { local:'aurora', visita:'mictlan' }
  ],
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

    let clasePosicion = '';
    if (posicion <= 8) {
      clasePosicion = 'pos-clasifica'; // Color para los primeros 8
    }

    tr.innerHTML = `
      <td class="${clasePosicion}" style="width: 6px; padding: 0;"></td> <td class="posicion">${posicion}</td> <td style="display:flex; align-items:center; gap:8px;">
        <img src="${equipo.escudo}" class="imgequip">
        <span style="font-size: 15px; text-align: left;">
            ${equipo.nombre.toUpperCase()}
        </span>      
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

/* =====================
   RECALCULAR DESDE STORAGE
===================== */
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
}

/* =====================
   GUARDAR RESULTADO
===================== */
function guardarResultado(id, local, visita, gl, gv) {
  let partido = JSON.parse(localStorage.getItem(id));

  // Si no existe, crearlo correctamente
  if (!partido) {
    partido = {
      local,
      visita,
      gl: null,
      gv: null
    };
  }

  // Asegurar que siempre existan
  partido.local = local;
  partido.visita = visita;

 if (gl !== null) {
  partido.gl = gl === '' ? null : Number(gl);
}

if (gv !== null) {
  partido.gv = gv === '' ? null : Number(gv);
}


  localStorage.setItem(id, JSON.stringify(partido));

  recalcularTablaDesdeStorage();
}


/* =====================
   MOSTRAR JORNADA
===================== */
function renderizarJornada(jornada) {
  const contenedor = document.getElementById('contenido' + jornada);
  if (!contenedor || !jornadas[jornada]) return; // Seguridad por si la jornada no existe aún

  contenedor.innerHTML = '';

  jornadas[jornada].forEach((p, i) => {
    const id = `j${jornada}_p${i}`;
    const guardado = JSON.parse(localStorage.getItem(id)) || {};

    contenedor.innerHTML += `
      <div class="partido">
        <div class="equipo">
            <img src="${obtenerEquipoPorId(p.local).escudo}" alt="${p.local}">
            <span>${p.local.toUpperCase()}</span>
        </div>
        
        <div class="marcador">
            <input type="number" min="0" placeholder="0"
              value="${guardado.gl ?? ''}"
              onchange="guardarResultado('${id}','${p.local}','${p.visita}',this.value,null)">
            <span>-</span>
            <input type="number" min="0" placeholder="0"
              value="${guardado.gv ?? ''}"
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
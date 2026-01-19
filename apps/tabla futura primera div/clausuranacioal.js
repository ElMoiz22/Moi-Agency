/* =====================
   DATOS DE LOS EQUIPOS (Con Grupo Asignado)
===================== */
const equipos = [
  // GRUPO A
  { id: 'aguacatan', grupo: 'A', nombre: 'aguacatan fc', escudo: 'https://moidg.online/Escudos/LNG/cap (12).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'chichicasteco', grupo: 'A', nombre: 'chichicasteco fc', escudo: 'https://moidg.online/Escudos/LNG/cap (13).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'coatepeque', grupo: 'A', nombre: 'dep. coatepeque', escudo: 'https://moidg.online/Escudos/LNG/cap (14).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'copalera', grupo: 'A', nombre: 'juv. copalera', escudo: 'https://moidg.online/Escudos/LNG/cap (17).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'gomerano', grupo: 'A', nombre: 'Dep. gomerano', escudo: 'https://moidg.online/Escudos/LNG/cap (16).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'huehuetecos', grupo: 'A', nombre: 'huehuetecos fc', escudo: 'https://moidg.online/Escudos/LNG/cap (8).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'nueva_concepcion', grupo: 'A', nombre: 'Nueva Concepción', escudo: 'https://moidg.online/Escudos/LNG/cap (15).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'quiche', grupo: 'A', nombre: 'quiché fc', escudo: 'https://moidg.online/Escudos/LNG/cap (18).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'san_pedro', grupo: 'A', nombre: 'dep. san pedro fc', escudo: 'https://moidg.online/Escudos/LNG/cap (10).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'suchitepequez', grupo: 'A', nombre: 'csd suchitepequez', escudo: 'https://moidg.online/Escudos/LNG/cap (11).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },

  // GRUPO B
  { id: 'aff', grupo: 'B', nombre: 'aff guatemala', escudo: 'https://moidg.online/Escudos/LNG/cap (7).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'carcha', grupo: 'B', nombre: 'dep. carchá', escudo: 'https://moidg.online/Escudos/LNG/cap (1).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'chimaltenango', grupo: 'B', nombre: 'chimaltenango fc', escudo: 'https://moidg.online/Escudos/LNG/cap (3).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'chiquimulilla', grupo: 'B', nombre: 'csd Chiquimulilla', escudo: 'https://moidg.online/Escudos/LNG/cap (20).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'ipala', grupo: 'B', nombre: 'csd ipala', escudo: 'https://moidg.online/Escudos/LNG/cap (2).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'iztapa', grupo: 'B', nombre: 'dep. iztapa', escudo: 'https://moidg.online/Escudos/LNG/cap (4).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'sacachispas', grupo: 'B', nombre: 'csd sacachispas', escudo: 'https://moidg.online/Escudos/LNG/cap (19).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'san_benito', grupo: 'B', nombre: 'san benito fc', escudo: 'https://moidg.online/Escudos/LNG/cap (6).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'santa_lucia', grupo: 'B', nombre: 'FC santa lucia', escudo: 'https://moidg.online/Escudos/LNG/cap (5).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 },
  { id: 'santa_rosa', grupo: 'B', nombre: 'n. santa rosa', escudo: 'https://moidg.online/Escudos/LNG/cap (9).png', jugados: 0, golesAFavor: 0, golesEnContra: 0, victorias: 0, derrotas: 0, empates: 0, puntos: 0 }
];

/* =====================
   JORNADAS
===================== */
const jornadas = {
  1: [
    { local: 'huehuetecos', visita: 'chichicasteco' },
    { local: 'gomerano', visita: 'copalera' },
    { local: 'coatepeque', visita: 'aguacatan' },
    { local: 'quiche', visita: 'san_pedro' },
    { local: 'suchitepequez', visita: 'nueva_concepcion' },
    { local: 'chiquimulilla', visita: 'san_benito' },
    { local: 'aff', visita: 'ipala' },
    { local: 'iztapa', visita: 'carcha' },
    { local: 'santa_rosa', visita: 'santa_lucia' },
    { local: 'sacachispas', visita: 'chimaltenango' },
  ],
  2: [
    { local: 'copalera', visita: 'huehuetecos' },
    { local: 'san_pedro', visita: 'suchitepequez' },
    { local: 'aguacatan', visita: 'quiche' },
    { local: 'chichicasteco', visita: 'coatepeque' },
    { local: 'nueva_concepcion', visita: 'gomerano' },
    { local: 'ipala', visita: 'chiquimulilla' },
    { local: 'santa_lucia', visita: 'sacachispas' },
    { local: 'carcha', visita: 'santa_rosa' },
    { local: 'san_benito', visita: 'iztapa' },
    { local: 'chimaltenango', visita: 'aff' },
  ],
  3: [
    { local: 'huehuetecos', visita: 'nueva_concepcion' },
    { local: 'gomerano', visita: 'san_pedro' },
    { local: 'coatepeque', visita: 'copalera' },
    { local: 'chichicasteco', visita: 'aguacatan' },
    { local: 'suchitepequez', visita: 'quiche' },
    { local: 'chiquimulilla', visita: 'chimaltenango' },
    { local: 'aff', visita: 'santa_lucia' },
    { local: 'iztapa', visita: 'ipala' },
    { local: 'san_benito', visita: 'carcha' },
    { local: 'sacachispas', visita: 'santa_rosa' },
  ],
  4: [
    { local: 'copalera', visita: 'chichicasteco' },
    { local: 'quiche', visita: 'gomerano' },
    { local: 'san_pedro', visita: 'huehuetecos' },
    { local: 'aguacatan', visita: 'suchitepequez' },
    { local: 'nueva_concepcion', visita: 'coatepeque' },
    { local: 'ipala', visita: 'san_benito' },
    { local: 'santa_rosa', visita: 'aff' },
    { local: 'santa_lucia', visita: 'chiquimulilla' },
    { local: 'carcha', visita: 'sacachispas' },
    { local: 'chimaltenango', visita: 'iztapa' },
  ],
  5: [
    { local: 'huehuetecos', visita: 'quiche' },
    { local: 'gomerano', visita: 'suchitepequez' },
    { local: 'copalera', visita: 'aguacatan' },
    { local: 'coatepeque', visita: 'san_pedro' },
    { local: 'chichicasteco', visita: 'nueva_concepcion' },
    { local: 'chiquimulilla', visita: 'santa_rosa' },
    { local: 'aff', visita: 'sacachispas' },
    { local: 'ipala', visita: 'carcha' },
    { local: 'iztapa', visita: 'santa_lucia' },
    { local: 'san_benito', visita: 'chimaltenango' },
  ],
  6: [
    { local: 'quiche', visita: 'coatepeque' },
    { local: 'san_pedro', visita: 'chichicasteco' },
    { local: 'aguacatan', visita: 'gomerano' },
    { local: 'nueva_concepcion', visita: 'copalera' },
    { local: 'suchitepequez', visita: 'huehuetecos' },
    { local: 'santa_rosa', visita: 'iztapa' },
    { local: 'santa_lucia', visita: 'san_benito' },
    { local: 'carcha', visita: 'aff' },
    { local: 'chimaltenango', visita: 'ipala' },
    { local: 'sacachispas', visita: 'chiquimulilla' },
  ],
  7: [
    { local: 'huehuetecos', visita: 'gomerano' },
    { local: 'copalera', visita: 'san_pedro' },
    { local: 'coatepeque', visita: 'suchitepequez' },
    { local: 'chichicasteco', visita: 'quiche' },
    { local: 'nueva_concepcion', visita: 'aguacatan' },
    { local: 'chiquimulilla', visita: 'aff' },
    { local: 'ipala', visita: 'santa_lucia' },
    { local: 'iztapa', visita: 'sacachispas' },
    { local: 'san_benito', visita: 'santa_rosa' },
    { local: 'chimaltenango', visita: 'carcha' },
  ],
  8: [
    { local: 'huehuetecos', visita: 'aguacatan' },
    { local: 'gomerano', visita: 'coatepeque' },
    { local: 'quiche', visita: 'copalera' },
    { local: 'san_pedro', visita: 'nueva_concepcion' },
    { local: 'suchitepequez', visita: 'chichicasteco' },
    { local: 'chiquimulilla', visita: 'carcha' },
    { local: 'aff', visita: 'iztapa' },
    { local: 'santa_rosa', visita: 'ipala' },
    { local: 'santa_lucia', visita: 'chimaltenango' },
    { local: 'sacachispas', visita: 'san_benito' },
  ],
  9: [
    { local: 'copalera', visita: 'suchitepequez' },
    { local: 'coatepeque', visita: 'huehuetecos' },
    { local: 'aguacatan', visita: 'san_pedro' },
    { local: 'chichicasteco', visita: 'gomerano' },
    { local: 'nueva_concepcion', visita: 'quiche' },
    { local: 'ipala', visita: 'sacachispas' },
    { local: 'iztapa', visita: 'chiquimulilla' },
    { local: 'carcha', visita: 'santa_lucia' },
    { local: 'san_benito', visita: 'aff' },
    { local: 'chimaltenango', visita: 'santa_rosa' },
  ],
  10: [
    { local: 'chichicasteco', visita: 'huehuetecos' },
    { local: 'copalera', visita: 'gomerano' },
    { local: 'aguacatan', visita: 'coatepeque' },
    { local: 'san_pedro', visita: 'quiche' },
    { local: 'nueva_concepcion', visita: 'suchitepequez' },
    { local: 'san_benito', visita: 'chiquimulilla' },
    { local: 'ipala', visita: 'aff' },
    { local: 'carcha', visita: 'iztapa' },
    { local: 'santa_lucia', visita: 'santa_rosa' },
    { local: 'chimaltenango', visita: 'sacachispas' },
  ],
  11: [
    { local: 'huehuetecos', visita: 'copalera' },
    { local: 'suchitepequez', visita: 'san_pedro' },
    { local: 'quiche', visita: 'aguacatan' },
    { local: 'coatepeque', visita: 'chichicasteco' },
    { local: 'gomerano', visita: 'nueva_concepcion' },
    { local: 'chiquimulilla', visita: 'ipala' },
    { local: 'sacachispas', visita: 'santa_lucia' },
    { local: 'santa_rosa', visita: 'carcha' },
    { local: 'iztapa', visita: 'san_benito' },
    { local: 'aff', visita: 'chimaltenango' },
  ],
  12: [
    { local: 'nueva_concepcion', visita: 'huehuetecos' },
    { local: 'san_pedro', visita: 'gomerano' },
    { local: 'copalera', visita: 'coatepeque' },
    { local: 'aguacatan', visita: 'chichicasteco' },
    { local: 'quiche', visita: 'suchitepequez' },
    { local: 'chimaltenango', visita: 'chiquimulilla' },
    { local: 'santa_lucia', visita: 'aff' },
    { local: 'ipala', visita: 'iztapa' },
    { local: 'carcha', visita: 'san_benito' },
    { local: 'santa_rosa', visita: 'sacachispas' },
  ],
  13: [
    { local: 'chichicasteco', visita: 'copalera' },
    { local: 'gomerano', visita: 'quiche' },
    { local: 'huehuetecos', visita: 'san_pedro' },
    { local: 'suchitepequez', visita: 'aguacatan' },
    { local: 'coatepeque', visita: 'nueva_concepcion' },
    { local: 'san_benito', visita: 'ipala' },
    { local: 'aff', visita: 'santa_rosa' },
    { local: 'chiquimulilla', visita: 'santa_lucia' },
    { local: 'sacachispas', visita: 'carcha' },
    { local: 'iztapa', visita: 'chimaltenango' },
  ],
  14: [
    { local: 'quiche', visita: 'huehuetecos' },
    { local: 'suchitepequez', visita: 'gomerano' },
    { local: 'aguacatan', visita: 'copalera' },
    { local: 'san_pedro', visita: 'coatepeque' },
    { local: 'nueva_concepcion', visita: 'chichicasteco' },
    { local: 'santa_rosa', visita: 'chiquimulilla' },
    { local: 'sacachispas', visita: 'aff' },
    { local: 'carcha', visita: 'ipala' },
    { local: 'santa_lucia', visita: 'iztapa' },
    { local: 'chimaltenango', visita: 'san_benito' },
  ],
  15: [
    { local: 'coatepeque', visita: 'quiche' },
    { local: 'chichicasteco', visita: 'san_pedro' },
    { local: 'gomerano', visita: 'aguacatan' },
    { local: 'copalera', visita: 'nueva_concepcion' },
    { local: 'huehuetecos', visita: 'suchitepequez' },
    { local: 'iztapa', visita: 'santa_rosa' },
    { local: 'san_benito', visita: 'santa_lucia' },
    { local: 'aff', visita: 'carcha' },
    { local: 'ipala', visita: 'chimaltenango' },
    { local: 'chiquimulilla', visita: 'sacachispas' },
  ],
  16: [
    { local: 'gomerano', visita: 'huehuetecos' },
    { local: 'san_pedro', visita: 'copalera' },
    { local: 'suchitepequez', visita: 'coatepeque' },
    { local: 'quiche', visita: 'chichicasteco' },
    { local: 'aguacatan', visita: 'nueva_concepcion' },
    { local: 'aff', visita: 'chiquimulilla' },
    { local: 'santa_lucia', visita: 'ipala' },
    { local: 'sacachispas', visita: 'iztapa' },
    { local: 'santa_rosa', visita: 'san_benito' },
    { local: 'carcha', visita: 'chimaltenango' },
  ],
  17: [
    { local: 'aguacatan', visita: 'huehuetecos' },
    { local: 'coatepeque', visita: 'gomerano' },
    { local: 'copalera', visita: 'quiche' },
    { local: 'nueva_concepcion', visita: 'san_pedro' },
    { local: 'chichicasteco', visita: 'suchitepequez' },
    { local: 'carcha', visita: 'chiquimulilla' },
    { local: 'iztapa', visita: 'aff' },
    { local: 'ipala', visita: 'santa_rosa' },
    { local: 'chimaltenango', visita: 'santa_lucia' },
    { local: 'san_benito', visita: 'sacachispas' },
  ],
  18: [
    { local: 'suchitepequez', visita: 'copalera' },
    { local: 'huehuetecos', visita: 'coatepeque' },
    { local: 'san_pedro', visita: 'aguacatan' },
    { local: 'gomerano', visita: 'chichicasteco' },
    { local: 'quiche', visita: 'nueva_concepcion' },
    { local: 'sacachispas', visita: 'ipala' },
    { local: 'chiquimulilla', visita: 'iztapa' },
    { local: 'santa_lucia', visita: 'carcha' },
    { local: 'san_benito', visita: 'aff' },
    { local: 'santa_rosa', visita: 'chimaltenango' },
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
   ACTUALIZAR TABLA (MODIFICADA)
===================== */
function actualizarTabla() {
    // Procesamos cada grupo por separado
    renderizarGrupo('A', '#tabla-grupo-A tbody');
    renderizarGrupo('B', '#tabla-grupo-B tbody');
}

function renderizarGrupo(nombreGrupo, selectorTbody) {
    const tbody = document.querySelector(selectorTbody);
    if (!tbody) return;
    tbody.innerHTML = '';

    // Filtrar equipos por grupo y ordenar
    const equiposFiltrados = equipos.filter(e => e.grupo === nombreGrupo);

    equiposFiltrados.sort((a, b) => {
        const difA = a.golesAFavor - a.golesEnContra;
        const difB = b.golesAFavor - b.golesEnContra;
        return b.puntos - a.puntos || difB - difA || b.golesAFavor - a.golesAFavor;
    });

    equiposFiltrados.forEach((equipo, index) => {
        const tr = document.createElement('tr');
        const posicion = index + 1;
        let clasePosicion = '';

        // Lógica de colores ajustada a 9 equipos
        if (posicion <= 2) {
            clasePosicion = 'pos-verde';      // Clasificados directos
        } else if (posicion <= 6) {
            clasePosicion = 'pos-amarillo';   // Repechaje
        } else if (posicion === 0) {
            clasePosicion = 'pos-desciende';  // Último desciende
        }

        tr.innerHTML = `
    <td class="${clasePosicion}" style="width: 6px; padding: 0;"></td> 
    <td class="posicion">${posicion}</td> 
    <td style="display:flex; align-items:center; gap:8px;">
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
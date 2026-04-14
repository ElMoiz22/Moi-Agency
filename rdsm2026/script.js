const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeCElgftfm9J6ZIuQoKSNTYWdbxGmHhtVlkSD3Rrvoy2YBPCQ/formResponse";
const ENTRY = "entry.1622234111";
const TIEMPO_ESPERA = 5 * 60 * 60 * 1000;

// 🧠 candidatas (igual que antes)
const candidatas = [
  {id:"Candidata 1", nombre:"Cristtel Anayté Miranda Fuentes", lugar:"San Marcos", img:"img/c1.png"},
  {id:"Candidata 2", nombre:"Sasha Analí López Cifuentes", lugar:"San Rafael Pie de la Cuesta", img:"img/c2.png"},
  {id:"Candidata 3", nombre:"Samantha Mishell Díaz Citalán", lugar:"Tejutla", img:"img/c3.png"},
  {id:"Candidata 4", nombre:"Victoria Berenice Pérez López", lugar:"El Tumbador", img:"img/c4.png"},
  {id:"Candidata 5", nombre:"Alisson Mirella González Ochoa", lugar:"San Lorenzo", img:"img/c5.png"},
  {id:"Candidata 6", nombre:"Sugeily Patricia Escobar Zamora", lugar:"Pajapita", img:"img/c6.png"},
  {id:"Candidata 7", nombre:"Kristel Galilea López Cifuentes", lugar:"Ayutla", img:"img/c7.png"},
  {id:"Candidata 8", nombre:"Sol Almudena Vásquez Rabanales", lugar:"Río Blanco", img:"img/c8.png"},
  {id:"Candidata 9", nombre:"Luz Patricia Izaguirre Maldonado", lugar:"San José El Rodeo", img:"img/c9.png"},
  {id:"Candidata 10", nombre:"Emily Daniela Escobar Ríos", lugar:"San Pablo", img:"img/c10.png"},
  {id:"Candidata 11", nombre:"Emelin María Ruíz Miranda", lugar:"El Quetzal, San Marcos", img:"img/c11.png"},
  {id:"Candidata 12", nombre:"Alexia Elizabeth Gonzáles Arguello", lugar:"Tacaná", img:"img/c12.png"},
  {id:"Candidata 13", nombre:"Andrea Liseth de León Castillo", lugar:"Catarina", img:"img/c13.png"},
  {id:"Candidata 14", nombre:"Angela Giselle Miranda Feliciano", lugar:"Comitancillo", img:"img/c14.png"},
  {id:"Candidata 15", nombre:"Graciela Ileana Davila Morales", lugar:"Ocós", img:"img/c15.png"},
  {id:"Candidata 16", nombre:"Gilma Corina Arreaga Cifuentes", lugar:"Nuevo Progreso", img:"img/c16.png"},
  {id:"Candidata 17", nombre:"Elisa Yarleth de León Roblero", lugar:"San José Ojetenam", img:"img/c17.png"},
  {id:"Candidata 18", nombre:"Ester Aisha Englentón Maldonado", lugar:"Malacatán", img:"img/c18.png"},
  {id:"Candidata 19", nombre:"Elizabeth Abigail Godínez Velásquez", lugar:"San Pedro Sacatepéquez, San Marcos", img:"img/c19.png"},
  {id:"Candidata 20", nombre:"Angélica Maribel Martínez Coronado", lugar:"Esquipulas Palo Gordo", img:"img/c20.png"}
];

const contenedor = document.getElementById("candidatas");
const estado = document.getElementById("estadoVoto");

// 🎴 Render tarjetas
candidatas.forEach(c => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <img src="${c.img}" alt="${c.nombre}">
    <div class="info">
      <h3>${c.nombre}</h3>
      <p>${c.lugar}</p>
      <button onclick="votar('${c.id}')">Votar</button>
    </div>
  `;

  contenedor.appendChild(div);
});

// 🗳️ Votar
function votar(id) {
  const ultimoVoto = localStorage.getItem("ultimo_voto");

  if (ultimoVoto && (Date.now() - ultimoVoto < TIEMPO_ESPERA)) {
    mostrarTiempoRestante();
    alert("Ya votaste, espera para volver a votar");
    return;
  }

  const formData = new FormData();
  formData.append(ENTRY, id);

  fetch(FORM_URL, {
    method: "POST",
    mode: "no-cors",
    body: formData
  });

  localStorage.setItem("ultimo_voto", Date.now());

  alert("Voto enviado 👑");

  verificarEstado();
}

// 🔒 Bloquear / desbloquear botones
function bloquearBotones(bloquear) {
  document.querySelectorAll("button").forEach(btn => {
    btn.disabled = bloquear;
    btn.style.opacity = bloquear ? "0.5" : "1";
    btn.style.cursor = bloquear ? "not-allowed" : "pointer";
  });
}

// ⏳ Contador
function mostrarTiempoRestante() {
  const ultimoVoto = parseInt(localStorage.getItem("ultimo_voto"));

  function actualizar() {
    const restante = TIEMPO_ESPERA - (Date.now() - ultimoVoto);

    if (restante <= 0) {
      estado.innerHTML = "✅ Ya puedes volver a votar";
      bloquearBotones(false);
      return;
    }

    const h = Math.floor(restante / 3600000);
    const m = Math.floor((restante % 3600000) / 60000);
    const s = Math.floor((restante % 60000) / 1000);

    estado.innerHTML = `⏳ Podrás votar en: ${h}h ${m}m ${s}s`;

    requestAnimationFrame(actualizar);
  }

  actualizar();
}

// 🧠 Verificador inicial
function verificarEstado() {
  const ultimoVoto = localStorage.getItem("ultimo_voto");

  if (!ultimoVoto) {
    estado.innerHTML = "🟢 Puedes votar ahora";
    bloquearBotones(false);
  } else {
    const restante = TIEMPO_ESPERA - (Date.now() - ultimoVoto);

    if (restante <= 0) {
      estado.innerHTML = "🟢 Puedes votar ahora";
      bloquearBotones(false);
    } else {
      bloquearBotones(true);
      mostrarTiempoRestante();
    }
  }
}

// 🚀 iniciar
verificarEstado();
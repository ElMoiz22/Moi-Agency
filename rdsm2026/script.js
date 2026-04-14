const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzELhOBQdvBIFgzyoc3LYUxAk5JXNV1Bxi1CzEeGofnn5LqDFKiq7sBVdLS8XdUMbqcEA/exec"; // Apps Script deployado
let usuario = null;
const TIEMPO_ESPERA = 1 * 60 * 60 * 1000; // 1 hora


function handleCredentialResponse(response) {
  const data = parseJwt(response.credential);

  usuario = {
    nombre: data.name,
    email: data.email
  };

  document.getElementById("usuarioLogueado").innerText =
    "👤 " + usuario.nombre;
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = atob(base64Url);
  return JSON.parse(base64);
}


// 🧠 candidatas (igual que antes)
const candidatas = [
  {id:"Candidata 1", nombre:"Cristtel Anayté Miranda Fuentes", lugar:"San Marcos", img:"img/c1.png"},
  {id:"Candidata 2", nombre:"Sasha Analí López Cifuentes", lugar:"San Rafael Pie de la Cuesta", img:"img/c2.png"},
  {id:"Candidata 3", nombre:"Samantha Mishell Díaz Catalán", lugar:"Tejutla", img:"img/c3.png"},
  {id:"Candidata 4", nombre:"Victoria Berenice Pérez López", lugar:"El Tumbador", img:"img/c4.png"},
  {id:"Candidata 5", nombre:"Alisson Mirella González Ochoa", lugar:"San Lorenzo", img:"img/c5.png"},
  {id:"Candidata 6", nombre:"Sugeily Patricia Escobar Zamora", lugar:"Pajapita", img:"img/c6.png"},
  {id:"Candidata 7", nombre:"Kristel Galilea López Cifuentes", lugar:"Ayutla", img:"img/c7.png"},
  {id:"Candidata 8", nombre:"Sol Almudena Vásquez Rabanales", lugar:"Río Blanco", img:"img/c8.png"},
  {id:"Candidata 9", nombre:"Luz Patricia Izaguirre Maldonado", lugar:"San José El Rodeo", img:"img/c9.png"},
  {id:"Candidata 10", nombre:"Emily Daniela Escobar Ríos", lugar:"San Pablo", img:"img/c10.png"},
  {id:"Candidata 11", nombre:"Emelin María Ruíz Miranda", lugar:"El Quetzal", img:"img/c11.png"},
  {id:"Candidata 12", nombre:"Alexia Elizabeth Gonzáles Arguello", lugar:"Tacaná", img:"img/c12.png"},
  {id:"Candidata 13", nombre:"Andrea Liseth de León Castillo", lugar:"Catarina", img:"img/c13.png"},
  {id:"Candidata 14", nombre:"Angela Giselle Miranda Feliciano", lugar:"Comitancillo", img:"img/c14.png"},
  {id:"Candidata 15", nombre:"Graciela Ileana Davila Morales", lugar:"Ocós", img:"img/c15.png"},
  {id:"Candidata 16", nombre:"Gilma Corina Arreaga Cifuentes", lugar:"Nuevo Progreso", img:"img/c16.png"},
  {id:"Candidata 17", nombre:"Elisa Yarleth de León Roblero", lugar:"San José Ojetenam", img:"img/c17.png"},
  {id:"Candidata 18", nombre:"Ester Aisha Englentón Maldonado", lugar:"Malacatán", img:"img/c18.png"},
  {id:"Candidata 19", nombre:"Elizabeth Abigail Godínez Velásquez", lugar:"San Pedro Sacatepéquez", img:"img/c19.png"},
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
let candidataSeleccionada = null;

function votar(id) {

  if (!usuario) {
    mostrarMensaje("⚠️ Debes iniciar sesión con Google");
    return;
  }

  const ultimoVoto = localStorage.getItem("ultimo_voto");

  if (ultimoVoto && (Date.now() - ultimoVoto < TIEMPO_ESPERA)) {
    mostrarTiempoRestante();
    mostrarMensaje("👑 Ya votaste, espera para volver a votar");
    return;
  }

  const candidata = candidatas.find(c => c.id === id);
  candidataSeleccionada = candidata;

  abrirModalConfirmacion(candidata);
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
      estado.innerHTML = "✅ Ya puedes volver a votar 👑";
      bloquearBotones(false);
      return;
    }

    const h = Math.floor(restante / 3600000);
    const m = Math.floor((restante % 3600000) / 60000);
    const s = Math.floor((restante % 60000) / 1000);

    estado.innerHTML = `⏳ Podrás Volver a Votar en: ${h}h ${m}m ${s}s`;

    requestAnimationFrame(actualizar);
  }

  actualizar();
}

// 🧠 Verificador inicial
function verificarEstado() {
  const ultimoVoto = localStorage.getItem("ultimo_voto");

  if (!ultimoVoto) {
    estado.innerHTML = "🟢 Puedes votar ahora 👑";
    bloquearBotones(false);
  } else {
    const restante = TIEMPO_ESPERA - (Date.now() - ultimoVoto);

    if (restante <= 0) {
      estado.innerHTML = "🟢 Puedes votar ahora 👑";
      bloquearBotones(false);
    } else {
      bloquearBotones(true);
      mostrarTiempoRestante();
    }
  }
}

// 🚀 iniciar
verificarEstado();

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalNombre = document.getElementById("modalNombre");
const modalTexto = document.getElementById("modalTexto");
const confirmarBtn = document.getElementById("confirmarBtn");
const cancelarBtn = document.getElementById("cancelarBtn");

// 🟡 Abrir confirmación
function abrirModalConfirmacion(c) {
  modal.style.display = "flex";

  modalImg.src = c.img;
  modalNombre.innerText = c.nombre;
  modalTexto.innerText = `¿Estás segur@ de votar por?`;
}

// 🔴 Cancelar
cancelarBtn.onclick = () => {
  cerrarModal();
};

// 🟢 Confirmar voto
confirmarBtn.onclick = () => {

fetch(SCRIPT_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    candidata: candidataSeleccionada.id,
    email: usuario.email
  })
})
 .then(res => res.text())
.then(text => {
  try {
    const data = JSON.parse(text);

    if (data.error) {
      mostrarMensaje(data.error);
      return;
    }

    localStorage.setItem("ultimo_voto", Date.now());
    mostrarExito(candidataSeleccionada);
    verificarEstado();

  } catch {
    console.log("Respuesta no JSON:", text);

    localStorage.setItem("ultimo_voto", Date.now());
    mostrarExito(candidataSeleccionada);
    verificarEstado();
  }
})

};

// 🎉 Mensaje de éxito
function mostrarExito(c) {
  modal.style.display = "flex";

  modalImg.src = c.img;
  modalNombre.innerText = "👑 Voto registrado 👑";
  modalTexto.innerText = `Has votado por ${c.nombre}`;

  confirmarBtn.style.display = "none";
  cancelarBtn.style.display = "none";

  // ⏱️ autocierre en 5 segundos
  setTimeout(() => {
    cerrarModal();
  }, 5000);
}

// ⚠️ Mensaje simple
function mostrarMensaje(msg) {
  modal.style.display = "flex";

  modalImg.style.display = "none";
  modalNombre.innerText = "Aviso";
  modalTexto.innerText = msg;

  confirmarBtn.style.display = "none";
  cancelarBtn.style.display = "block";
  cancelarBtn.innerText = "Cerrar";
}

function cerrarModal() {
  modal.classList.add("hide");

  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("hide");

    // reset UI
    confirmarBtn.style.display = "block";
    cancelarBtn.innerText = "Cancelar";
    modalImg.style.display = "block";
  }, 400);
}


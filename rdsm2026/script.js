
const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbzbLPP83lxbMMx8qH5AHAYwC9UQ8EPhJiYWG_M6Fxz_LbpVfRYwoIe8pkl-k5iCEou60Q/exec";

const candidatas = [
  "Candidata 1","Candidata 2","Candidata 3","Candidata 4","Candidata 5",
  "Candidata 6","Candidata 7","Candidata 8","Candidata 9","Candidata 10",
  "Candidata 11","Candidata 12","Candidata 13","Candidata 14","Candidata 15",
  "Candidata 16","Candidata 17","Candidata 18","Candidata 19","Candidata 20"
];

const contenedor = document.getElementById("candidatas");

// 🎴 Generar tarjetas
candidatas.forEach(nombre => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${nombre}</h3>
    <button onclick="votar('${nombre}')">Votar</button>
  `;

  contenedor.appendChild(card);
});

// 🗳️ Función de voto
function votar(candidata) {

  fetch(`${URL_SCRIPT}?candidata=${encodeURIComponent(candidata)}`)
  .then(res => res.json())
  .then(data => {
    alert(data.mensaje);
  })
  .catch(err => {
    alert("Error al votar");
    console.error(err);
  });

}

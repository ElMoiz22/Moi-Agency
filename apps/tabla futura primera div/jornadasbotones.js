let contenidoActivo = null;

function mostrarContenido(numero) {
  const contenido = document.getElementById('contenido' + numero);
  const boton = document.getElementById('boton' + numero);

  if (!contenido || !boton) {
    console.error('No existe contenido o botón para jornada', numero);
    return;
  }

  if (contenidoActivo === numero) {
    contenido.classList.remove('mostrar');
    boton.classList.remove('activo');
    contenidoActivo = null;
    return;
  }

  // Ocultar todos
  document.querySelectorAll('.contenido').forEach(c => c.classList.remove('mostrar'));
  document.querySelectorAll('.boton-tab').forEach(b => b.classList.remove('activo'));

  // Mostrar actual
  contenido.classList.add('mostrar');
  boton.classList.add('activo');
  contenidoActivo = numero;

  // Renderizar partidos
  renderizarJornada(numero);
}
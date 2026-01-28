const botones = document.querySelectorAll('button[data-tabla]');

botones.forEach(btn => {
  btn.addEventListener('click', async () => {
    const selector = btn.getAttribute('data-tabla');
    const nombreArchivo = btn.getAttribute('data-nombre');
    const tabla = document.querySelector(selector);

    if (!tabla) return;

    // Activar modo exportación
    tabla.classList.add('exportando');

    // Esperar que el CSS se aplique
    await new Promise(r => requestAnimationFrame(r));

    try {
      const dataUrl = await domtoimage.toPng(tabla, { bgcolor: null });
      window.electronAPI.guardarImagen(dataUrl, nombreArchivo);
    } catch (err) {
      console.error(err);
    }

    // Restaurar estilos
    tabla.classList.remove('exportando');
  });
});

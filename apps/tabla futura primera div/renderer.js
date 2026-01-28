const botones = document.querySelectorAll('button[data-tabla]');

botones.forEach(btn => {
  btn.addEventListener('click', async () => {
    const selector = btn.getAttribute('data-tabla');
    const nombreArchivo = btn.getAttribute('data-nombre');

    const tabla = document.querySelector(selector);

    if (!tabla) {
      console.error('No se encontró la tabla con selector:', selector);
      return;
    }

    try {
      // Genera PNG con fondo transparente
      const dataUrl = await domtoimage.toPng(tabla, { bgcolor: null });

      // Enviar al main process para guardar
      window.electronAPI.guardarImagen(dataUrl, nombreArchivo);

    } catch (error) {
      console.error('Error generando imagen transparente:', error);
    }
  });
});

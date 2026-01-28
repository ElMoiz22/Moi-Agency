const botones = document.querySelectorAll('button[data-tabla]');

botones.forEach(btn => {
  btn.addEventListener('click', async () => {
    const selector = btn.dataset.tabla;
    const nombreArchivo = btn.dataset.nombre;
    const tabla = document.querySelector(selector);

    if (!tabla) {
      console.error('No se encontró la tabla:', selector);
      return;
    }

    // Activar modo exportación
    tabla.classList.add('exportando');

    // Esperar fuentes
    await document.fonts.ready;

    // Esperar imágenes
    await Promise.all(
      Array.from(tabla.querySelectorAll('img')).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(res => img.onload = img.onerror = res);
      })
    );

    // Esperar reflow
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

    try {
      const dataUrl = await domtoimage.toPng(tabla, { bgcolor: null });
      window.electronAPI.guardarImagen(dataUrl, nombreArchivo);
    } catch (error) {
      console.error('Error generando imagen:', error);
    }

    // Restaurar
    tabla.classList.remove('exportando');
  });
});

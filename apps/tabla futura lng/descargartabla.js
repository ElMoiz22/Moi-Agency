document.getElementById('descargarTabla').addEventListener('click', async () => {
  const tabla = document.querySelector('.tabla-scroll2');
  if (!tabla) return;

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

  // Esperar reflow real
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

  try {
    const dataUrl = await domtoimage.toPng(tabla, { bgcolor: null });

    const link = document.createElement('a');
    link.download = 'tabla_acumulada.png';
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Error al generar la imagen:', error);
  }

  // Restaurar estado
  tabla.classList.remove('exportando');
});

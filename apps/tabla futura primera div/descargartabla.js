document.getElementById('descargarTabla').addEventListener('click', async () => {
  const tabla = document.querySelector('.tabla-scroll2');

  // 1. Activar modo exportación
  tabla.classList.add('exportando');

  // 2. Esperar un frame para que el navegador aplique estilos
  await new Promise(r => requestAnimationFrame(r));

  try {
    const dataUrl = await domtoimage.toPng(tabla, { bgcolor: null });

    const link = document.createElement('a');
    link.download = 'tabla_acumulada.png';
    link.href = dataUrl;
    link.click();

  } catch (error) {
    console.error('Error al generar la imagen:', error);
  }

  // 3. Restaurar estilos
  tabla.classList.remove('exportando');
});

document.getElementById('descargarTabla').addEventListener('click', () => {
  const tabla = document.querySelector('.tabla-scroll2');
  domtoimage.toPng(tabla)
    .then(function (dataUrl) {
      const link = document.createElement('a');
      link.download = 'tabla_acumulada.png';
      link.href = dataUrl;
      link.click();
    })
    .catch(function (error) {
      console.error('Error al generar la imagen:', error);
    });
});
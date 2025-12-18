    window.addEventListener('load', () => {
      const loadingScreen = document.getElementById('loadingScreen');
      const mainContent = document.getElementById('mainContent');

      // Simular la carga
      setTimeout(() => {
        // Ocultar la pantalla de carga
        loadingScreen.classList.add('hidden');

        // Mostrar el contenido principal
        mainContent.classList.add('loaded');

        // Restaurar el desplazamiento
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
      }, 2000); // Ajusta el tiempo de carga (en milisegundos) si es necesario
    });
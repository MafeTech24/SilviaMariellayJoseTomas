window.addEventListener('load', () => {
    const audio = document.getElementById('audioFondo');
  
    // Solo hace algo si existe el audio
    if (!audio) return;
  
    // Solo reproducir si estamos en index.html o en la raíz
    if (
      window.location.pathname.endsWith('index.html') ||
      window.location.pathname === '/' ||
      window.location.pathname === '/index.html'
    ) {
      audio.play().catch(err => {
        console.warn('Autoplay bloqueado:', err);
      });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  });
  
  
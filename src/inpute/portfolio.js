

        function survolFunction() {
            const zoomDiv = document.getElementById('zoomDiv1');
            zoomDiv.classList.add('scale-110'); // Applique le zoom
        }

        function survolOutFunction() {
            const zoomDiv = document.getElementById('zoomDiv1');
            zoomDiv.classList.remove('scale-110'); // Enlève le zoom
        }










  const button = document.getElementById('EZbouton');
  const distanceThreshold = 100; // Distance minimale pour que le bouton bouge
  
  document.addEventListener('mousemove', function (event) {
  const button = document.getElementById('EZbouton');
  const distanceThreshold = 150; // Distance minimale pour que le bouton bouge
  
  document.addEventListener('mousemove', function (event) {
      // Position de la souris
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      // Position du bouton
      const buttonRect = button.getBoundingClientRect();
      const buttonX = buttonRect.left + buttonRect.width / 2;
      const buttonY = buttonRect.top + buttonRect.height / 2;
  
      // Calcul de la distance entre la souris et le bouton
      const distanceX = mouseX - buttonX;
      const distanceY = mouseY - buttonY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  
      // Si la souris est trop proche du bouton, le faire fuir
      if (distance < distanceThreshold) {
          const moveX = (distanceX / distance) * -10; // Déplacement opposé à la souris (horizontal)
          const moveY = (distanceY / distance) * -10; // Déplacement opposé à la souris (vertical)
  
          // S'assurer que le bouton ne sort pas de l'écran
          const newX = Math.min(window.innerWidth - buttonRect.width, Math.max(0, buttonRect.left + moveX));
          const newY = Math.min(window.innerHeight - buttonRect.height, Math.max(0, buttonRect.top + moveY));
  
          button.style.position = 'absolute';
          button.style.left = `${newX}px`;
          button.style.top = `${newY}px`;    }
  });
  
          });


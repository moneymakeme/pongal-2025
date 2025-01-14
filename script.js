function showGreeting() {
    // Display the special wish message
    const specialWish = document.getElementById('special-wish');
    specialWish.innerHTML = 'May your life be filled with happiness, good health, and prosperity. Happy Pongal!';
    specialWish.classList.add('visible');
  
    // Display the Pongal image
    const pongalImage = document.getElementById('pongal-image');
    pongalImage.style.display = 'block'; // Make the image visible
  }
  
function redirecionar() {
    window.open("https://typebot.co/elite-nr13-bot", "_blank");
  };

  // Animações
  ScrollReveal().reveal('#Curse-Name', {
    origin: 'left',
    duration: 3000,
    distance: '40%'
  });

  ScrollReveal().reveal('#Curse-Title', {
    origin: 'left',
    duration: 4000, 
    distance: '20%'
  });

  ScrollReveal().reveal('#h4_1', {
    origin: 'left',
    duration: 4000,
    distance: '20%'
  });

  ScrollReveal().reveal('#logo_1', {
    origin: 'top',
    duration: 1000,
    distance: '10%'
  });

  ScrollReveal().reveal('#button_1', {
    origin: 'bottom',
    duration: 1000,
    distance: '10%'
  });

  ScrollReveal().reveal('#card-0', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
  });

  ScrollReveal().reveal('#card-1', {
    origin: 'left',
    duration: 3000,
    distance: '30%'
  });

  ScrollReveal().reveal('#card-2', {
    origin: 'left',
    duration: 4000,
    distance: '40%'
  });

  ScrollReveal().reveal('#card-3', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
  });

  ScrollReveal().reveal('#card-4', {
    origin: 'left',
    duration: 3000,
    distance: '30%'
  });

  ScrollReveal().reveal('#card-5', {
    origin: 'left',
    duration: 4000,
    distance: '40%'
  });

  document.querySelectorAll('.button-card').forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.card');
      card.classList.toggle('flipped');
    });
  });
  
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseleave', function() {
      this.classList.remove('flipped');
    });
  });
  
  
  
  
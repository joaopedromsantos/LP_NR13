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
    duration: 2500,
    distance: '20%'
  });

  ScrollReveal().reveal('#card-1', {
    origin: 'left',
    duration: 2500,
    distance: '25%'
  });

  ScrollReveal().reveal('#card-2', {
    origin: 'left',
    duration: 2500,
    distance: '30%'
  });

  ScrollReveal().reveal('#card-3', {
    origin: 'left',
    duration: 2500,
    distance: '35%'
  });

  ScrollReveal().reveal('#card-4', {
    origin: 'left',
    duration: 2500,
    distance: '40%'
  });

  ScrollReveal().reveal('#card-5', {
    origin: 'left',
    duration: 2500,
    distance: '45%'
  });

  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button-card');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.card');
        card.classList.toggle('is-flipped');
      });
    });
  });
  
  
  
  
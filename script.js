function redirecionar() {
    window.open("https://typebot.co/elite-nr13", "_blank");
  };

  // Animações
  ScrollReveal().reveal('#Section-Poster-Image', {
    origin: 'left',
    duration: 1200,
    distance: '40%'
  });

  ScrollReveal().reveal('#Text-Video', {
    origin: 'left',
    duration: 1200,
    distance: '40%'
  });

  ScrollReveal().reveal('#Container-Video', {
    origin: 'left',
    duration: 2000,
    distance: '90%'
  });

  ScrollReveal().reveal('#Curse-Name', {
    origin: 'left',
    duration: 1300,
    distance: '40%'
  });

  ScrollReveal().reveal('#Curse-Title', {
    origin: 'left',
    duration: 1000, 
    distance: '20%'
  });

  ScrollReveal().reveal('#h4_1', {
    origin: 'left',
    duration: 1600,
    distance: '20%'
  });

  ScrollReveal().reveal('#logo_1', {
    origin: 'top',
    duration: 1900,
    distance: '10%'
  });

  ScrollReveal().reveal('#button_1', {
    origin: 'bottom',
    duration: 2200,
    distance: '10%'
  });

  ScrollReveal().reveal('#card-0', {
    origin: 'left',
    duration: 1200,
    distance: '20%'
  });

  ScrollReveal().reveal('#card-1', {
    origin: 'left',
    duration: 1200,
    distance: '25%'
  });

  ScrollReveal().reveal('#card-2', {
    origin: 'left',
    duration: 1200,
    distance: '30%'
  });

  ScrollReveal().reveal('#card-3', {
    origin: 'left',
    duration: 1200,
    distance: '35%'
  });

  ScrollReveal().reveal('#card-4', {
    origin: 'left',
    duration: 1200,
    distance: '40%'
  });

  ScrollReveal().reveal('#card-5', {
    origin: 'left',
    duration: 1200,
    distance: '45%'
  });

  ScrollReveal().reveal('#title-app', {
    origin: 'left',
    duration: 1200,
    distance: '30%'
  });

  ScrollReveal().reveal('#li-1', {
    origin: 'left',
    duration: 1500,
    distance: '35%'
  });

  ScrollReveal().reveal('#li-2', {
    origin: 'left',
    duration: 1800,
    distance: '40%'
  });

  ScrollReveal().reveal('#li-3', {
    origin: 'left',
    duration: 2100,
    distance: '45%'
  });

  ScrollReveal().reveal('#button_2', {
    origin: 'left',
    duration: 2400,
    distance: '50%'
  });

  ScrollReveal().reveal('#app_1', {
    origin: 'left',
    duration: 2400,
    distance: '50%'
  });

  // Animation Biography

  ScrollReveal().reveal('#bio-title-mobile', {
    origin: 'left',
    duration: 1200,
    distance: '30%'
  });

  ScrollReveal().reveal('#bio-title', {
    origin: 'left',
    duration: 1200,
    distance: '30%'
  });

  ScrollReveal().reveal('#bio-desc', {
    origin: 'left',
    duration: 1400,
    distance: '30%'
  });

  ScrollReveal().reveal('#bio-data-container', {
    origin: 'left',
    duration: 1600,
    distance: '30%'
  });

  ScrollReveal().reveal('#bio-image', {
    origin: 'left',
    duration: 1800,
    distance: '35%'
  });

  ScrollReveal().reveal('#link-h3', {
    origin: 'left',
    duration: 2100,
    distance: '40%'
  });

  // Page Poster
  ScrollReveal().reveal('#container-image', {
    origin: 'left',
    duration: 1800,
    distance: '80%'
  });

  // Page Benefits
  ScrollReveal().reveal('#Title-Benefits', {
    origin: 'left',
    duration: 1600,
    distance: '40%'
  });

  ScrollReveal().reveal('#Container-Benefits-Reverse', {
    origin: 'left',
    duration: 2100,
    distance: '45%'
  });

  ScrollReveal().reveal('#Container-Benefits', {
    origin: 'left',
    duration: 2400,
    distance: '50%'
  });

  // Page Pricing
  ScrollReveal().reveal('#Text-Pricing', {
    origin: 'left',
    duration: 1400,
    distance: '40%'
  });

  ScrollReveal().reveal('#Left-Card-Pricing', {
    origin: 'left',
    duration: 1600,
    distance: '30%'
  });

  ScrollReveal().reveal('#Right-Card-Pricing', {
    origin: 'left',
    duration: 2200,
    distance: '50%'
  });

  ScrollReveal().reveal('#Desc-Pricing', {
    origin: 'left',
    duration: 2400,
    distance: '50%'
  });



  // Page Contador
  ScrollReveal().reveal('#img-calendar', {
    origin: 'left',
    duration: 1200,
    distance: '20%'
  });
  ScrollReveal().reveal('#Texts-title', {
    origin: 'left',
    duration: 1500,
    distance: '25%'
  });
  ScrollReveal().reveal('#container-event', {
    origin: 'left',
    duration: 1800,
    distance: '30%'
  });
  ScrollReveal().reveal('#contador-id', {
    origin: 'left',
    duration: 2100,
    distance: '35%'
  });
  ScrollReveal().reveal('#button_3', {
    origin: 'left',
    duration: 2300,
    distance: '40%'
  });



// Contador
const dataAlvo = new Date(2024, 7, 16, 0, 0, 0); // Alterar aqui quando tiver novo evento -> ano, mes, dia, hora, min, seg

function atualizarContador() {
  const agora = new Date();
  const diferenca = dataAlvo - agora;

  // Calculando tempo restante
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Atualizando o HTML
  document.getElementById('dias').innerText = dias;
  document.getElementById('horas').innerText = horas;
  document.getElementById('minutos').innerText = minutos;
  document.getElementById('segundos').innerText = segundos;

  
  if (diferenca < 0) {
    clearInterval(intervalo);
    document.getElementById('contador').innerHTML = 'O evento começou!';
  }
}


const intervalo = setInterval(atualizarContador, 1000);
  

function SendMail() {
  var params = {
    form_name: document.getElementById("Form-Name").value,
    form_email: document.getElementById("Form-Email").value,
    form_tell: document.getElementById("Form-Tell").value,
    form_message: document.getElementById("Form-Message").value
  }
  emailjs.send("service_r2tjavf", "template_ocxqg5o", params).then(function (res) {
    alert("Enviado com Sucesso!");
  })
}


document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.bio-data-number');

  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const countValue = parseFloat(entry.target.textContent.replace(/[^\d]/g, ''));
              animateCountUp(entry.target, countValue);
              observer.unobserve(entry.target);
          }
      });
  }, options);

  counters.forEach(counter => {
      observer.observe(counter);
  });
});

function animateCountUp(element, targetValue) {
  const duration = 2000;
  const interval = 10;
  const steps = duration / interval;
  const increment = targetValue / steps;

  let currentValue = 0;
  const updateCounter = () => {
      currentValue += increment;
      element.textContent = Math.floor(currentValue);

      if (currentValue < targetValue) {
          requestAnimationFrame(updateCounter);
      } else {
          element.textContent = targetValue;
      }
  };

  requestAnimationFrame(updateCounter);
}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>
{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>
{
    sections.forEach(sec =>
    {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) 
        {
            navLinks.forEach(links =>
                {
                    links.classList.remove('active');
                    document.querySelector('header navbar a[href*=' + id +']').classList.add('active');
                })
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

ScrollReveal
({ reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .cabeza', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .estudios-container, .contacto form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .perfil-img', { origin: 'left' });
ScrollReveal().reveal('.perfil-content', { origin: 'right' });

const typed = new Typed('.multiple-text',
{
    strings:[ 'Desarrollo Web', 'Diseño UX/UI','Desarrollo de Videojuegos', 'Diseño Gráfico'],
    typeSpeed: 100,
    backSpeed: 100,
    backSpeed: 100,
    loop: true
});

const hideInfoBtn = document.querySelectorAll('.portafolio-btn');
const hideInfo = document.querySelectorAll('.hide');
portafolioImg = document.querySelectorAll('.portafolio-img');

hideInfoBtn.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = hideInfo[index];
    imgElement = portafolioImg[index];
    const cardElement = button.closest('.portafolio-box');
    
    textElement.classList.toggle('show');
    imgElement.classList.toggle('hide');
    cardElement.classList.toggle('expanded');

    if (textElement.classList.contains('show')) {
        button.textContent = 'CERRAR';  
      } else {
        button.textContent = 'VER';  
      }
  });
});


// Slider Image
const slider = document.querySelector(".image-comparison .slider");
const beforeImage = document.querySelector(".image-comparison .before-image");
const sliderLine = document.querySelector(".image-comparison .slider-line");
const sliderIcon = document.querySelector(".image-comparison .slider-icon");

slider.addEventListener("input", (e) => {
  let sliderValue = e.target.value + "%";

  beforeImage.style.width = sliderValue;
  sliderLine.style.left = sliderValue;
  sliderIcon.style.left = sliderValue;
});
// Slider Image
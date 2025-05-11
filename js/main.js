const menuHamburguer = document.querySelector(".menu-hamburguer");
const navLinks = document.querySelector(".navLinks");

// Activar y desactivar el menú cuando se hace clic en el icono de hamburguesa
menuHamburguer.addEventListener("click", function() {
  navLinks.classList.toggle("active"); // Alterna la clase 'active'

  menuHamburguer.classList.toggle("fa-xmark");

});


//--------- Swipper
const swiper = new Swiper('.mySwiper', { 
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    depth:500,
    modifier:1,
    slidesShadows:true,
    rotate: 0,
    stretch: 0,
  },
})
// ------------ Scroll del menu
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  let isNavbarFixed  = false;

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
  
    if (scrollY > 50 && !isNavbarFixed ) {
      navbar.classList.add("fixed");
      isNavbarFixed  = true;
    } else if (scrollY <= 50 && isNavbarFixed ) {
      navbar.classList.remove("fixed");
      isNavbarFixed  = false;
    }
  });
});

// Movimiento del mouse
document.addEventListener("mousemove", move);
function move(evt){
  this.querySelectorAll(".moveRadio").forEach(layer => {
    const speed = layer.getAttribute("data-speed")

    const x = (window.innerWidth - evt.pageX*speed)/120
    const y = (window.innerWidth - evt.pageY*speed)/120

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`

  })
}

  // Diezmar
  document.getElementById('payButton').addEventListener('click', function() {
    window.location.href = 'https://link.mercadopago.com.ar/pablodevperez';
});
// cdn GSAP
gsap.from(".logo",{opacity:0, duration:1, delay: 2, y:10})
gsap.from(".navLinks",{opacity:0, duration:1, delay: 2.1, y:30, stagger:0.2})
gsap.from(".radioHome",{opacity:0, duration:1, delay: 1.6, y:30})
gsap.from(".contentRadio",{opacity:0, duration:1, delay: 1.8, y:30})
gsap.from(".titleRadio",{opacity:0, duration:1, delay: 2, y:30})
gsap.from(".descriptionRadio",{opacity:0, duration:1, delay: 2.1, y:30})
gsap.from(".imageRadio",{opacity:0, duration:1, delay: 2.6, y:30})

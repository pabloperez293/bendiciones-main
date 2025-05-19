// const menuHamburguer = document.querySelector(".menu-hamburguer");
// const navLinks = document.querySelector(".navLinks");

// menuHamburguer.addEventListener("click", function (e) {
//   e.stopPropagation();
//   navLinks.classList.toggle("active");

//   // Alternar ícono
//   if (menuHamburguer.classList.contains("fa-bars")) {
//     menuHamburguer.classList.remove("fa-bars");
//     menuHamburguer.classList.add("fa-xmark");
//   } else {
//     menuHamburguer.classList.remove("fa-xmark");
//     menuHamburguer.classList.add("fa-bars");
//   }
// });


// Cerrar el menú al hacer clic fuera del menú y del botón hamburguesa
window.addEventListener("click", function (e) {
  if (!navLinks.contains(e.target) && !menuHamburguer.contains(e.target)) {
    navLinks.classList.remove("active");
    menuHamburguer.classList.remove("fa-xmark");
  }
});

// Swiper
const swiper = new Swiper('.mySwiper', {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    depth: 500,
    modifier: 1,
    slidesShadows: true,
    rotate: 0,
    stretch: 0,
  },
});

// Scroll menu fixed
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// Movimiento del mouse para imagen
document.addEventListener("mousemove", function (evt) {
  document.querySelectorAll(".moveRadio").forEach(layer => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - evt.pageX * speed) / 120;
    const y = (window.innerWidth - evt.pageY * speed) / 120;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

// Botón Diezmar
const payButton = document.getElementById('payButton');
if (payButton) {
  payButton.addEventListener('click', function () {
    window.location.href = 'https://link.mercadopago.com.ar/pablodevperez';
  });
}

// Animaciones GSAP
gsap.from(".logo", { opacity: 0, duration: 1, delay: 2, y: 10 });
gsap.from(".navLinks", { opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2 });
gsap.from(".radioHome", { opacity: 0, duration: 1, delay: 1.6, y: 30 });
gsap.from(".contentRadio", { opacity: 0, duration: 1, delay: 1.8, y: 30 });
gsap.from(".titleRadio", { opacity: 0, duration: 1, delay: 2, y: 30 });
gsap.from(".descriptionRadio", { opacity: 0, duration: 1, delay: 2.1, y: 30 });
gsap.from(".imageRadio", { opacity: 0, duration: 1, delay: 2.6, y: 30 });

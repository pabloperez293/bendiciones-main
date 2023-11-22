// Desplegar menu hamburguersa

const menuHamburguer = document.querySelector(".menu-hamburguer");
const navLinks = document.querySelector(".navLinks");

menuHamburguer.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // cambiamos el icono
  menuHamburguer.classList.toggle("fa-bars");
  menuHamburguer.classList.toggle("fa-xmark");

  // Le damos estilos cuando este activo
  if( navLinks.classList.contains("active")){
    menuHamburguer.computedStyleMap.color = "var(--second-color)";
  }else{
    menuHamburguer.computedStyleMap.color = "var(--first-color)";

  }
})
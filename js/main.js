// Imagen desaparece en modo responsive 
const logoOn = document.getElementById("logoOn");

window.addEventListener("load", function() {
  handleResize();
});

window.addEventListener("resize", function() {
  handleResize(); 
})

function handleResize(){
  if (window.innerWidth > 767) {
    logoOn.classList.add("offMovil");
  }else{
    logoOn.classList.remove("offMovil");
  }
}
// img del nav off
const logoOff = document.getElementById("logoOff");

window.addEventListener("load", function() {
  handleChange();
});

window.addEventListener("resize", function() {
  handleChange();
});

function handleChange(){
  if (window.innerWidth <= 766){
    logoOff.classList.add("offOn");
  }else{
    logoOff.classList.remove("offOn");
  }
}
// Modo dark 
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Verificar si el modo oscuro está habilitado
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Guardar el estado del modo oscuro en el almacenamiento local
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
// ---------------------

// Menu Resposinve 
document.addEventListener("DOMContentLoaded",function() {
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.querySelector(".header-menu");

  menuToggle.addEventListener("click", function() {
    menu.classList.toggle("show-menu");
  });

  document.addEventListener("click", function (evt) {
    if ( !menu.contains(evt.target) && !menuToggle.contains(evt.target)){
      menu.classList.remove("show-menu");
    } 
  })
});


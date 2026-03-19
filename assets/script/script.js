// MENU TOGGLE

const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menu.innerHTML = "✕";
  } else {
    menu.innerHTML = "≡";
  }
});


// ANIMAÇÃO DE ENTRADA SUAVE

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


// HOVER ARROW INTERAÇÃO

const arrow = document.querySelector(".arrow");

arrow.addEventListener("mouseenter", () => {
  arrow.style.transform = "translateY(-50%) translateX(10px)";
  arrow.style.transition = "0.3s ease";
});

arrow.addEventListener("mouseleave", () => {
  arrow.style.transform = "translateY(-50%)";
});


// EXPLORE INTERAÇÃO

const explore = document.querySelector(".explore");

explore.addEventListener("mouseenter", () => {
  document.querySelector(".bar").style.width = "120px";
  document.querySelector(".bar").style.transition = "0.3s ease";
});

explore.addEventListener("mouseleave", () => {
  document.querySelector(".bar").style.width = "80px";
});
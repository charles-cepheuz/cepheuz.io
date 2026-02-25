// Efeito simples de header ao rolar
window.addEventListener("scroll", function() {
  const header = document.getElementById("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
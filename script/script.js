// Ativar o Menu Overlay (Abri/Fechar)
const menuIcon = document.querySelector('.menu'); // O ícone de 3 tracinhos na Home
const menuCloseIcon = document.querySelector('.menu-close'); // O X dentro do Overlay
const menuOverlay = document.querySelector('.menu-overlay');

if (menuIcon && menuOverlay && menuCloseIcon) {
  // Abrir o menu ao clicar nos tracinhos
  menuIcon.addEventListener('click', () => {
    menuOverlay.classList.add('open');
    // console.log("Menu aberto!");
  });

  // Fechar o menu ao clicar no X
  menuCloseIcon.addEventListener('click', () => {
    menuOverlay.classList.remove('open');
    // console.log("Menu fechado pelo X!");
  });

  // Fechar o menu automaticamente ao clicar em qualquer link (opcional, bom para UX)
  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuOverlay.classList.remove('open');
    });
  });
}
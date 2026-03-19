// ===== BOTÃO (hover suave) =====
const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", () => {
  btn.style.transition = "0.3s ease";
  btn.style.transform = "translateY(-2px)";
});

btn.addEventListener("mouseleave", () => {
  btn.style.transform = "translateY(0)";
});


// ===== SETA (movimento leve contínuo) =====
const arrow = document.querySelector(".arrow");

arrow.style.transition = "transform 1.2s ease-in-out";

let move = false;

setInterval(() => {
  arrow.style.transform = move
    ? "translateY(-50%) translateX(8px)"
    : "translateY(-50%) translateX(0px)";

  move = !move;
}, 1200);


// ===== ENTRADA SUAVE (quase imperceptível) =====
window.addEventListener("load", () => {
  document.body.style.opacity = "0";

  setTimeout(() => {
    document.body.style.transition = "opacity 0.6s ease";
    document.body.style.opacity = "1";
  }, 100);
});
// botão leve (igual UI premium)
const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", () => {
  btn.style.transform = "translateY(-2px)";
});

btn.addEventListener("mouseleave", () => {
  btn.style.transform = "translateY(0)";
});
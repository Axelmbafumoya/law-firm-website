// On récupère le bouton burger
const burger = document.querySelector("#burger");

// On récupère le menu mobile
const mobileMenu = document.querySelector("#mobile-menu");

// On écoute le clic sur le bouton
burger.addEventListener("click", () => {
  // On affiche ou cache le menu
  mobileMenu.classList.toggle("hidden");
});

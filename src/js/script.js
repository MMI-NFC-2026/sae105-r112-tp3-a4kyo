// *** CAROUSEL ***
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

if (carousel) {
  const premierItem = document.querySelector(".carousel__item");

  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
    // Largeur lue au clic pour suivre la taille responsive des items
    carousel.scrollBy({ left: -premierItem.clientWidth, behavior: "smooth" });
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: premierItem.clientWidth, behavior: "smooth" });
  });
}

export function setUpImageClickEvents() {
  const images = document.querySelectorAll(".gallery__image");
  images.forEach((image) => {
    image.addEventListener("click", handleImageClick);
  });
}

function handleImageClick(e) {
  const galleryBox = e.target.closest(".gallery__box");
  if (galleryBox) {
    toggleSize(galleryBox);
  }
}

function toggleSize(galleryBox) {
  if (galleryBox.classList.contains("enlarged")) {
    galleryBox.style.width = "";
    galleryBox.style.height = "";
    galleryBox.classList.remove("enlarged");
  } else {
    galleryBox.style.width = galleryBox.offsetWidth * 2 + "px";
    galleryBox.style.height = galleryBox.offsetHeight * 2 + "px";
    galleryBox.classList.add("enlarged");
  }
}

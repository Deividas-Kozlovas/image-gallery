import { imagesList } from "./imagesList.js";

(() => {
  const addImagesBtn = document.querySelector("#add_images");

  addImagesBtn.addEventListener("click", () => {
    addImages(imagesList);
  });

  const mixImagesBtn = document.querySelector("#mix_images");

  mixImagesBtn.addEventListener("click", () => {
    const shuffledImages = shuffleArray(imagesList);
    addImages(shuffledImages);
  });

  function clearGallery() {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function addImages(imagesList) {
    clearGallery();
    const gallery = document.querySelector(".gallery");
    imagesList.forEach((img) => {
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("gallery__box");

      const imgElement = document.createElement("img");
      imgElement.classList.add("gallery__image");
      imgElement.src = `img/${img}.jpg`;
      imgElement.alt = `Gallery image`;

      imageDiv.appendChild(imgElement);
      gallery.appendChild(imageDiv);
    });

    mixImagesBtn.style.display = "block";
  }
})();

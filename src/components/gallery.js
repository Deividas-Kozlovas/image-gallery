import { clearGallery } from "../helpers/domHelpers.js";
import { setUpImageClickEvents } from "../events/imageEvents.js";

export function addImages(imagesList) {
  clearGallery();
  const gallery = document.querySelector(".gallery");

  imagesList.forEach((img) => {
    const imageElement = createImageElement(img);
    gallery.appendChild(imageElement);
  });

  setUpImageClickEvents();
  document.querySelector("#mix_images").style.display = "block";
}

export function createImageElement(img) {
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("gallery__box");

  const imgElement = document.createElement("img");
  imgElement.classList.add("gallery__image");
  imgElement.src = `img/${img}.jpg`;
  imgElement.alt = `Gallery image`;

  imageDiv.appendChild(imgElement);
  return imageDiv;
}

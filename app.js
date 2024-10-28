import { imagesList } from "./imagesList.js";
import { addImages } from "./src/components/gallery.js";
import { shuffleArray } from "./src/utils/arrayUtils.js";

(() => {
  const addImagesBtn = document.querySelector("#add_images");
  const mixImagesBtn = document.querySelector("#mix_images");

  addImagesBtn.addEventListener("click", () => addImages(imagesList));

  mixImagesBtn.addEventListener("click", () => {
    const shuffledImages = shuffleArray(imagesList);
    addImages(shuffledImages);
  });
})();

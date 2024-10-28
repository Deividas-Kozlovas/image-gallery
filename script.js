import { imagesList } from "./imagesList.js";

(() => {
  const addImagesBtn = document.querySelector("#add_images"); // Use correct ID

  // Add click event listener
  addImagesBtn.addEventListener("click", () => {
    console.log("clicked");
    addImages(); // Call the addImages function on button click
  });

  // Define the addImages function
  function addImages() {
    const gallery = document.querySelector(".gallery");
    imagesList.forEach((img) => {
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("gallery__box");

      const imgElement = document.createElement("img");
      imgElement.classList.add("gallery__image");
      imgElement.src = `img/${img}.jpg`; // Ensure correct path to the images
      imgElement.alt = `Gallery image`; // Alt text for accessibility

      imageDiv.appendChild(imgElement);
      gallery.appendChild(imageDiv);
    });
  }
})();

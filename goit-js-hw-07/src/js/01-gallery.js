import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const createGallery = () => {
  const galleryListElements = galleryItems
    .map(
      ({ preview, description, original }) =>
        `<a class="gallery__item" href="${original}"><img class="gallery__image" alt="${description}" src="${preview}" data-source="${original}"></a>`
    )
    .join("");

  galleryContainer.insertAdjacentHTML("afterbegin", galleryListElements);
};
createGallery();
galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  basicLightbox
    .create(
      `
  <img src="${e.target.dataset.source}" width="800" height="600">
`,
      {
        onShow: () => {},
        onClose: () => {},
      }
    )
    .show();
});

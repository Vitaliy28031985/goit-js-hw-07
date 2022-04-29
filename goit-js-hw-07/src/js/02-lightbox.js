
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);
const createGallery = () => {
  const galleryListElements = galleryItems.map(({preview, description, original,}) => `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" alt="${description}" src="${preview}" data-source="${original}"></a></li>`).join('');
   
   galleryContainer.insertAdjacentHTML('afterbegin', galleryListElements);  
}
createGallery();

galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  `
  <img src="${e.target.dataset.source}" width="800" height="600">
`
}).open();
});
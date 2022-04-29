
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);
const createGallery = () => {
  const galleryListElements = galleryItems.map(({ description, original, preview,}) => `<li class="gallery__item"><a class="gallery__link" href="${original}" data-text="${description}"><img class="gallery__image" alt="${description}" src="${preview}"></a></li>`).join('');
   
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
  <img src="${e.target.dataset.src}" alt="${description}" width="800" height="600">
`
}).open();
});

new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
  showCounter: true,
  enableKeyboard: true,
  docClose: true,
  captionPosition: 'bottom',
  scrollZoom: true,
  preloading: false,
  overlay: false,
});

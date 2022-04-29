
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);
const createGallery = () => {
  const galleryListElements = galleryItems.map(({ description, original, preview,}) => `<li class="gallery__item"><a class="gallery__link" href="${original}" data-text="${description}"><img class="gallery__image" alt="${description}" src="${preview}"></a></li>`).join('');
   
   galleryContainer.insertAdjacentHTML('afterbegin', galleryListElements);  
}
createGallery();


new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

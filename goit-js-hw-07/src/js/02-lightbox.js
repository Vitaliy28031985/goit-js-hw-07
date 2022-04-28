
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);
const createGallery = () => {
  const galleryListElements = galleryItems.map(({preview, description, original,}) => `<li><a class="gallery__item" href="${original}"><img class="gallery__image" alt="${description}" src="${preview}"></a></li>`).join('');
   
   galleryContainer.insertAdjacentHTML('afterbegin', galleryListElements);  
}
createGallery();


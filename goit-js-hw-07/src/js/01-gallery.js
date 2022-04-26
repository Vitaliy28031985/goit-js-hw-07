
// import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createGallery = () => {
  const galleryListElements = galleryItems.map(({preview, description, original,}) => `<a class="gallery__item" href="${original}"><img class="gallery__image" alt="${description}" src="${original}" data-source="${preview}"></a>`).join('');
   
   galleryContainer.insertAdjacentHTML('afterbegin', galleryListElements);  
}
createGallery();

document.querySelector('a.gallery__image').onclick = () => {

	basicLightbox.create(createGallery).show()

}

import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createGallery = () => {
  const galleryListElements = galleryItems.map(({preview, description, original,}) =>
  `<a class="gallery__item" href="${original}"><img class="gallery__image" alt="${description}" src="${original}" data-source="${preview}"></a>`).join('');
   
   galleryContainer.insertAdjacentHTML('afterbegin', galleryListElements);  
}


const handleCloseByEscp = (event) => {
  const list = event.target.closest('a');
  list.preventDefault();
  makeLightbox(
    event.dataset.preview,
  );
  
}
basicLightbox.create(

  createGallery(),{
onShow: () => {
window.addEventListener('keydown', handleCloseByEscp)
},
onClose: () => {
window.removeEventListener('keydown', handleCloseByEscp)
}
})
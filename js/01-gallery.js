import {
  galleryItems
} from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryCards = createGallery(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryCards);

function createGallery(galleryItems) {
  return galleryItems
    .map(({
      preview,
      original,
      description
    }) => {
      return `<li class = 'gallery__item'>
      <a class = 'gallery__link' href = '${original}'>
        <img class = 'gallery__image'
        src = '${preview}'
        data-source = '${original}'
        alt = '${description}'>
      </a>
      </li>`;
    })
    .join('');
}

galleryList.addEventListener('click', showMeOriginImg);

function showMeOriginImg(evt) {
  evt.preventDefault();
  // if (!evt.target.classList.contains('gallery__image')) {
  //   return;
  // }

  console.log(evt.target);

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

  instance.show()
}
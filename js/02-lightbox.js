import {
    galleryItems
} from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galletyCards = createGallery(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galletyCards)

function createGallery(galleryItems) {
    return galleryItems.map(({
        preview,
        original,
        description
    }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    }).join('')
}

let lightbox = new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250
});
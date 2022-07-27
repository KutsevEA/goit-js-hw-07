import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const markupForGallery = createMarkupForGallery(galleryItems);

function createMarkupForGallery(items) {
  return items
    .map(
      item =>
        `<li><a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}" /></a></li>`
    )
    .join(``);
}

galleryEl.insertAdjacentHTML('beforeend', markupForGallery);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionType: 'attr',
  captionDelay: 250,
});

gallery.on('show.simplelightbox');

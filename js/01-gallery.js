import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', showFullScreenPicture);

const markupForGallery = createMarkupForGallery(galleryItems);

function createMarkupForGallery(items) {
  return items
    .map(
      item =>
        `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></div>`
    )
    .join(``);
}

galleryEl.insertAdjacentHTML('beforeend', markupForGallery);

function showFullScreenPicture(evt) {
    evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img class="gallery__image" src="${evt.target.dataset.source}" data-source="${evt.target.dataset.source}" alt="${evt.target.alt}"/>
    </div>
`,
    {
      onClose: instance => {
        document.removeEventListener('keydown', waitingForEscape);
      }
    }
  );
  instance.show();

  document.addEventListener('keydown', waitingForEscape);

  function waitingForEscape(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}

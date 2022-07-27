import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const galleryHTML = galleryItems.map(galleryItemsMurkup).join("");
galleryEl.insertAdjacentHTML("beforeend", galleryHTML);

function galleryItemsMurkup({ preview, original, description }) {
  return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
}

const onGallaryClick = (event) => {
  event.preventDefault();
  onOpenImage(event.target.dataset.source);
};

const onOpenImage = (source) => {
  const instance = basicLightbox.create(`
     <img
            class="gallery__image"
            src="${source}"
            alt="original"
          />
`);
  instance.show()
  console.log(instance.element().querySelector('img').src);
};
galleryEl.addEventListener("click", onGallaryClick);

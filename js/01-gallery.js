import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const galleryHTML = galleryItems.map(galleryItemsMurkup).join("");
let instance;
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
  instance.show();

  const currentSrc = instance.element().querySelector("img").src;
  console.log(currentSrc);

  if (instance?.visible()) {
    return onEscapeClick();
  }
 
};
  const onEscapeClick = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };
window.addEventListener("keydown", onEscapeClick);
galleryEl.addEventListener("click", onGallaryClick);


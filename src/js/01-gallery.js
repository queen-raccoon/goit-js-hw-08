import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import { renderList } from './export_files/01-renderList';

const galleryItemsKey = "Gallery Items:";
const listElement = document.querySelector('.gallery');
renderList(galleryItems, listElement);

const modalGallery = new SimpleLightbox('.gallery a', {
     captions: true,
     closeText: '×',
     captionsData: 'alt',
     enableKeyboard: true,
     widthRatio: 0.7,
     alertErrorMessage: "Sorry. I couldn't find the photo",
     animationSpeed: 100,
     doubleTapZoom: 1.5,
    }
);

console.log(galleryItems);


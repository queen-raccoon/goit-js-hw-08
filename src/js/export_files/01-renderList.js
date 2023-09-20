export const renderList = (arr, container) => {
  const markup = arr
    .map(
        (item) => `<li js-product class="gallery__item">
            <a class="gallery__link" href="${item.original}" onclick="return false;">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.preview}"
                    alt="${item.description}"
                >
            </a>
        </li>`
    ).join("");
    
    container.insertAdjacentHTML("beforeend", markup);
}
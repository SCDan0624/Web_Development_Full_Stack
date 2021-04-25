// removeChild()
const firstLi = document.querySelector("li");
const ul = firstLi.parentElement;

ul.removeChild(firstLi);

// remove // no IE support
// node.remove()

const img = document.querySelector("img");
img.remove(); // removes image

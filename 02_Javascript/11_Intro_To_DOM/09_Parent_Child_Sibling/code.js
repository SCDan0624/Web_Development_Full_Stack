const firstBold = document.querySelector("b");

const paragraph = firstBold.parentElement; // <p></p> traverse upward

paragraph.children; // will display ALL children in order, traversing downward

paragraph.nextSibling; // Will display adjacent node (could be text)

paragraph.previousSibling;

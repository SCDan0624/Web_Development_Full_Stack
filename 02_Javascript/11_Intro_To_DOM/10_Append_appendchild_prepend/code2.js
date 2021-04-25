// Does not work with IE

// Add text easily
const p = document.querySelector("p");
p.append("I am new text");

// Add two things
p.append("New test first", "new test second");

// prepend
const newB = document.createElement("b");
newB.append("Hi");
p.prepend(newB); // Hi will show up before paragraph

//insertAdjacentElement()
// targetElement.insertAdjacentElement(position,element)

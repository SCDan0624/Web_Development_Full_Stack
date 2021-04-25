// All JavaScript objects inherit properties and methods from a prototype
// There are examples such as Array.prototype or String.protoype

// You can make your own prototypes as well
String.prototype.yell = function () {
  return `OMG! ${this.toUpperCase()}!!!! AGHGHGHG!`;
};

// You can also override existing protoypes
Array.prototype.pop = function () {
  return "Sorry I want that element, I will never pop it off";
};

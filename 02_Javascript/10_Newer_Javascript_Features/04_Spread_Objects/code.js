// copies properties from one object into another object literal

const feline = { legs: 4, family: "Felidae" };
const canine = { family: "Caninae", furry: true };

const dog = { ...feline, genus: "Panthera" }; // { legs: 4, family: "Felidae" ,genus:'Panthera'}

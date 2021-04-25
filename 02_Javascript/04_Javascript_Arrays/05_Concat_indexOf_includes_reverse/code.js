// concat
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);
// ['a','b','c','d','e','f']

// includes

const pets = ["Rupert", "Mo", "Brosey"];
console.log(pets.includes("Mo")); // true
console.log(pets.includes("Kitty")); // false

// indexOf
const animals = ["snake", "dog", "cat", "fish"];
console.log(animals.indexOf("dog")); // 1
console.log(animals.indexOf("cow")); // -1 (not available)

// reverse
const elements = ["fire", "water", "wind"];
console.log(elements.reverse()); // [ 'wind', 'water', 'fire' ]

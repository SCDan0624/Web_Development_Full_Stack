/*
Every
Tests whether all elements in the array pass the provided function.
It returns a Boolean value
*/

const words = ["dog", "dig", "log", "bag", "wag"];

words.every((word) => {
  return word.length === 3;
}); // true

words.every((word) => {
  return word[0] === "d";
}); //false

/*
Some
Similar to every, but returns true if ANY of the array elements pass the 
test function
*/

const words2 = ["dog", "dig", "log", "bag", "wag"];

words2.some((word) => {
  return word.length > 4;
}); //true

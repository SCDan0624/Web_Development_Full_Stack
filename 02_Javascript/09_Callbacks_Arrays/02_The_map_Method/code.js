/*
Creates a new array with the results of calling
a callback on every element in the array


*/
// Example
const texts = ["lol", "omg"];
const caps = texts.map(function (t) {
  return t.toUpperCase();
});
console.log(texts)[("lol", "omg")];
console.log(caps)[("LOL", "OMG")];

const numbers = [1, 2, 3];

numbers.map(function (num) {
  return num * 2;
}); // [2,4,6]

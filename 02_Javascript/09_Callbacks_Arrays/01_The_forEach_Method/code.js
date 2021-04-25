// Accepts a callback function
// Calls the function once per element in the array

// Example 1
let colors = ["red", "blue", "green"];

colors.forEach(function (color) {
  console.log(color);
});

// Example 2
const movies = [
  {
    title: "Alien",
    score: 100,
  },
  { title: "Terminator 3", score: 77 },
];

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
}); // Will print movie title and movie score/100

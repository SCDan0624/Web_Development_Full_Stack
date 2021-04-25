const jokes = require("give-me-a-joke");
const colors = require("colors");

// console.log(jokes); // to see joke types

// Dad joke example
jokes.getRandomDadJoke(function (joke) {
  console.log(joke);
});

// colors (with dad jpoke)
jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});

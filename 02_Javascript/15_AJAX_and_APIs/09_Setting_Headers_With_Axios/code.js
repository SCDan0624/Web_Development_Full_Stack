/*
Axios
    - A Library for making HTTP requests
    - Will be added via script on html page
*/

// Example (Using example from Fetch_API lesson)

// Will return a resolved promise and values that are already parsed
axios
  .get("https://api.cryptonator.com/api/ticker/btc-usd")
  .then((res) => {
    console.log(res.data.ticker.price); // Will return bitcoin price
  })
  .catch((err) => {
    console.log("Error", err);
  });

const fetchBitcoinPrice = async () => {
  try {
    const res = await axios.get(
      "https://api.cryptonator.com/api/ticker/btc-usd"
    );
    console.log(res.data.ticker.price);
  } catch (e) {
    console.log("Error", err);
  }
};

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  // Dom manipulation
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

// Header Setting with Axios
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com", config);
    console.log(res.data.joke); // will log only joke
    return res.data.joke;
  } catch (e) {
    return "No jokes available";
  }
};

// What goes into header needs to be looked up based on request
// Above example is json

button.addEventListener("click", addNewJoke);

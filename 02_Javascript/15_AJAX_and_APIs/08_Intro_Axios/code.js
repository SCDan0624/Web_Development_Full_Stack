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

/*
Fetch API
- Newer (better) way of making http requests in JS.
- Supports promises!
- No IE support
*/

// Will return a promise, then resolve a promise triggering .then
fetch("https://api.cryptonator.com/api/ticker/btc-usd")
  .then((res) => {
    console.log("Response, waiting to parse..", res);
    return res.json(); // this returns a promise
  })
  .then((data) => {
    console.log("Data parsed!", data);
    console.log(data.ticker.price); // Will show btc price
  })
  .catch((e) => {
    console.log("Oh no! Error!", e);
  });

// Cleaner version of above
const fetchBitcoinPrice = async () => {
  try {
    const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
    console.log(res);
    const data = await res.json();
    console.log(data.ticker.price);
  } catch (e) {
    console.log("Something went wrong", e);
  }
};

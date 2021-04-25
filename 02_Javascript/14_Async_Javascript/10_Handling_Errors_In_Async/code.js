const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// Use try and catch to handle errors with async functions

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest("/page1");
    let data2 = await fakeRequest("/page2");
    console.log(data1);
  } catch (e) {
    console.log("Caught an error!");
    console.log("error is :", e);
  }
}

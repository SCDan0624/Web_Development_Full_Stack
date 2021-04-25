const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        failure("Connection Timeout :(");
      } else {
        success(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// With promises you can chain .then by returning a fakeRequestPromise
// without nesting. You can also you one .catch to cover all errors
const request = fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("it worked (Page 1");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log("it worked (Page 2");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then((data) => {
    console.log("it worked (Page 3");
    console.log(data);
  })
  .catch((err) => {
    console.log("On no, a request failed");
    console.log(err);
  });

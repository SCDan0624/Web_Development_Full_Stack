function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("Congrats,I am a good function.");
    };
  } else {
    return function () {
      alert("This is a very bad function.");
    };
  }
}

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = makeBetweenFunc(5, 10);

/*
Will return the following function with min and max filled in with 5 and 10
  
  return function (num) {
    return num >= min && num <= max;
  };
*/

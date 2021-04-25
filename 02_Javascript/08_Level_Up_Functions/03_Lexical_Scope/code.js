function outer() {
  let hero = "Black Panther";

  function inner() {
    let cryForHelp = `${hero}, please save me!`;
    console.log(cryForHelp);
  }

  inner();
}

// Inner function nested inside parent function has access to the
// variables in the outer function

/*
Async Functions
    A newer and cleaner syntax for
    working with async code!
    Syntax "makeup" for promises

The async keyword
    - Async functions always return a promise
   
    - If the function returns a value,
    the promise will be resolved with 
    that value
    
    - If the function throws an,
    exception, the promise will be rejected
*/

async function hello() {
  return "Hey guy!";
}

hello();
// Promise (<resolved>: "Hey guy!")

async function uhOh() {
  throw new Error("oh no!");
}

uhOh();
//Promise {<rejected>; Error: oh no!}

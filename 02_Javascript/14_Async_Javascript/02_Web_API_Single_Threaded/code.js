/*
JS is single threaded:

At any given point in time, that
single JS thread is running at 
most one line of JS code
*/

// Workarounds

// 1 setTimeOut
console.log("I print first");
setTimeout(() => {
  console.log("I print after 3 seconds"); // prints third
}, 3000);

console.log("I print second");

/*
Web APIs

- Browsers come with Web APIs that
are able to handle certain tasks in
the background (like making 
requests or setTimeout)

- The JS call stack recognizes these 
Web API functions and passes them 
off to the browser to take care of

- Once the browse finishes those 
tasks, they return and are pushed 
onto the stack as a callback
*/

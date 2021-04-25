// using try/catch we can have custom messages for errors and it won't stop the rest of the
// code from running

try {
  hello.toUpperCase();
} catch {
  console.log("Error shown");
}

console.log("This will now run");

try {
  hello.toUpperCase();
} catch (e) {
  console.log(e);
  console.log("Custom message running after caught error.");
}

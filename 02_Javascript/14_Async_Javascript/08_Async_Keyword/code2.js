// async function hello() {}

// Example 1
const sing = async () => {
  return "La La La La";
}; // Promise will be resolved with value of ='La La La La

sing().then((data) => {
  console.log("Promise resolved with:", data);
}); // "Promise resolved with: La La La La"

// Example 2
const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "Tom") return "Welcome!";
  throw "Invalid Password";
};

login("Dan", "Penny")
  .then((msg) => {
    console.log("Logged In!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error!");
    console.log(err);
  });
// Error!
// Invalid Password

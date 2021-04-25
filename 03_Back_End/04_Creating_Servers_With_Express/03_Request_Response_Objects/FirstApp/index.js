const express = require("express");
const app = express();

// app.get("/", function (req, res) {
//   res.send("hello world");
// });

app.use((req, res) => {
  console.log("This runs everytime we get a request");
  // Will show up at locallhost 3000 after server is started up
  res.send("Hello, we got your request, this is a response.");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

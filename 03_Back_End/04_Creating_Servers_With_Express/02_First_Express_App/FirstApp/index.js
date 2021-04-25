const express = require("express");
const app = express();

// app.get("/", function (req, res) {
//   res.send("hello world");
// });

app.use(() => {
  console.log("This runs everytime we get a request");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

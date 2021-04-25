const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

// Use directory name where index.js is located
app.set("views", path.join(__dirname, "/views"));

//  Will render home page as long as in a views folder
// and view engine is written above
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

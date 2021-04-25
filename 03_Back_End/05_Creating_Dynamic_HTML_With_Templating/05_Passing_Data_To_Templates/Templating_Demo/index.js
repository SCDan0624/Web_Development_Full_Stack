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

// This allows our num variable to be available to our random.ejs as rand
app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { rand: num });

  // Could also use the line below to pass as num
  // res.render("random", { num: num });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

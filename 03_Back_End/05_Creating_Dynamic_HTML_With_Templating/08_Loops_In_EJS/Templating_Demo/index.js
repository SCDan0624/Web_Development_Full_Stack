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

// This allows our cats array to be available to our cats.ejs as cats
app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Steph", "Winston"];
  res.render("cats", { cats });
});

// This will allow us to go to any website as long as its localhost 3000/r/
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit });
});

// This allows our num variable to be available to our random.ejs as num
app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num: num });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

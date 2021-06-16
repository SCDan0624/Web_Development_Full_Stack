const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("common"));

app.use((req, res, next) => {
  console.log("This is my first middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page!!!");
});

app.get("/dogs", (req, res) => {
  res.send("Woof!!!");
});

app.listen(3000, () => {
  console.log("App is running on localhost:3000");
});

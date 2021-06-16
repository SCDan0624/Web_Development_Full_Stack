const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I love dogs!!");
  next();
});

// app.use((req, res, next) => {
//   console.log("This is my first middleware");
//   next();
// });

app.get("/", (req, res) => {
  console.log(`Request date: ${req.requestTime}`);
  res.send("Home Page!!!");
});

app.get("/dogs", (req, res) => {
  console.log(`Request date: ${req.requestTime}`);
  res.send("Woof!!!");
});

app.use((req, res) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  res.send("Sorry you need a password");
});

app.get("/secret", (req, res) => {
  res.send("My Secret is ....");
});

app.use((req, res) => {
  res.status(404).send("Not Found!");
});

app.listen(3000, () => {
  console.log("App is running on localhost:3000");
});

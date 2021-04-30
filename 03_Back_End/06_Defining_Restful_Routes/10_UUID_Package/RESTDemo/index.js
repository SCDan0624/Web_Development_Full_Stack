const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const comments = [
  { id: uuidv4(), username: "Todd", comment: "lol that is so funny!" },
  {
    id: uuidv4(),
    username: "Sklyer",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuidv4(),
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    id: uuidv4(),
    username: "onlysayswoof",
    comment: "My dog like to go woof woof, woof",
  },
];

// passing comments object into our render
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.get("/comments/:id", (req, res) => {
  const { id } = res.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`OK, here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

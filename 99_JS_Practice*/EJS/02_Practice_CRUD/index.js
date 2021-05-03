const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route to our index page. We pass in our posts fake data
app.get("/posts", (req, res) => {
  res.render("posts/index", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("posts/new");
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  res.render("posts/show", { post });
});

app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  res.render("posts/edit", { post });
});

app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  const newPostText = req.body.post;
  const foundPost = posts.find((post) => post.id === id);
  foundPost.post = newPostText;
  res.redirect("/posts");
});

app.post("/posts", (req, res) => {
  const { username, post } = req.body;
  posts.push({ username, post, id: uuid() });
  res.send("Post has been sent");
  res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  posts = posts.filter((post) => post.id !== id);
  res.redirect("/posts");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

let posts = [
  {
    id: uuid(),
    username: "Dan",
    post: "My favorite team is the Orlando Magic",
  },
  {
    id: uuid(),
    username: "Sklyer",
    post: "I am the most annoying character in Breaking Bad",
  },
  { id: uuid(), username: "Walt", post: "I am the one who knocks!" },
  {
    id: uuid(),
    username: "Jesse",
    post: "I somehow had a full length movie about me!",
  },
];

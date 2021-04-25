const express = require("express");
const app = express();

// app.get("/", function (req, res) {
//   res.send("hello world");
// });

// app.use((req, res) => {
//   console.log("This runs everytime we get a request");
//   // Will show up at locallhost 3000 after server is started up
//   res.send("<h1>This is my webpage!</h1>");
// });

app.get("/", (req, res) => {
  res.send("This is the home page!");
});

app.get("/cats", (req, res) => {
  res.send("MEOW!!");
});

app.get("/dogs", (req, res) => {
  res.send("Woof!!");
});

// Will perform the res.send on any path that follows the /r/anything pattern

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID ${postId} in the ${subreddit} subreddit</h1>`);
});

app.post("/cats", (req, res) => {
  res.send("Post request to /cats, this is different from a get request");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`<h1>Search results for: ${q}</h1>`);
});

// "*" must be the last get request. Covers all homepages
app.get("*", (req, res) => {
  res.send(`I don't know that path`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

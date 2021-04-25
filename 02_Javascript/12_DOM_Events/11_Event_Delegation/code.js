const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Submitted");
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;

  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetsContainer.append(newTweet);
};

tweetsContainer.addEventListener("click", function (e) {
  e.target.remove();

  // or (if you need more specific removal)
  // e.target.nodeName === "LI" && e.target.remove();
});

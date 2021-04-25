// 16 min mark of video for refresher on entire code of this page

const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Will prevent page refresh
  console.log("Submitted");
  const username = tweetForm.elements.username.value;
  const tweet = tweetForm.elements.tweet.value;

  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetsContainer.append(newTweet);
});

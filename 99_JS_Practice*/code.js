function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(`Your Front end refresher Folder: ${randomNumber(16, 1)}
 Lesson:${randomNumber(15, 1)}`);
// console.log(`Your folder number is ${randomNumber(16, 1)}`);
// console.log(`Your lesson number is ${randomNumber(15, 1)}`);

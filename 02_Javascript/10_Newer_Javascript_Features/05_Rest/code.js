// The rest parameter syntax allows a function to accept an
// indefinite number of arguments as an array,

function sumAll(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}

sumAll(1, 2); //3

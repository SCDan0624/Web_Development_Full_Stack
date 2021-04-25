function findLargest(x, y) {
  if (x > y) {
    console.log(`${x} is larger!`);
  } else if (x < y) {
    console.log(`${y} is larger`);
  } else {
    console.log(`${x} and ${y} are equal!`);
  }
}

findLargest(-2, 77); // 77 is larger
findLargest(33, 33); // 33 and 33 are equal

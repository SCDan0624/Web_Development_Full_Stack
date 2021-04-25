const testScores = {
  dan: 80,
  damon: 88,
  kim: 77,
  shawn: 100,
  tony: 90,
  conor: 63,
  dustin: 67,
};

for (let person in testScores) {
  console.log(person); // prints only the keys
}

for (let person in testScores) {
  console.log(testScores[person]); // prints only the values
}

Object.keys(testScores); // prints out array of keys

Object.values(testScores); // prints out array of values

Object.entries(testScores); // prints out nested array of key value pairs

let str = "LOL";
for (let i = 0; i <= 4; i++) {
  console.log("Outer:", i);
  for (let j = 0; j < str.length; j++) {
    console.log("   Inner:", str[j]);
  }
}

/*
Outer: 0
    Inner: L
    Inner: O
    Inner: L
Outer: 1
    Inner: L
    Inner: O
    Inner: L
Outer: 2
    Inner: L
    Inner: O
    Inner: L
Outer: 3
    Inner: L
    Inner: O
    Inner: L
Outer: 4
    Inner: L
    Inner: O
    Inner: L

*/

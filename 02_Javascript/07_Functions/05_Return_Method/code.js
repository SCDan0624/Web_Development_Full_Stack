/*
Built-in methods return values when we call them. 
We can store those values:
*/

const yell = "I will end you".toUpperCase();

yell; // 'I WILL END YOU'

function add(x, y) {
  return x + y; // This will also stop the exeuction of your function
}

const sum = add(10, 16);
sum; // 26

const answer = add(100, 200);
answer; // 300

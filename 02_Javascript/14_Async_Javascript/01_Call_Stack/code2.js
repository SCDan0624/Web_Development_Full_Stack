const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

isRightTriangle(3, 4, 5);

/*
Callstack for above

// For 3 of isRightTriangle

multiply(3,3)  9
square(3) 9
isRightTriangle(3,4,5)

// Next 4 of isRightTriangle

multiply(4,4)  16
square(4) 16
isRightTriangle(3,4,5)

/// Next 5 of isRightTriangle

multiply(5,5)  25
square(5) 25
isRightTriangle(3,4,5)

//// Next the math of isRightTriangle

9 + 16 === 25?



*/

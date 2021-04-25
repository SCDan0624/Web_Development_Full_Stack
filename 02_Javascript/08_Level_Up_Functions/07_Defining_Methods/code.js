/*
We can add function as properties on objects
We call them methods
*/

const math = {
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
};

console.log(math.multiply(5, 6)); // 30

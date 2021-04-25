/*
Executes a reducer function on each element
of the array, resulting in a single value
*/

// Summing an array (accumulator could also be a total)

const myArr = [3, 5, 7, 9, 11];
myArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

/*
            accumlator current value return value
first call      3           5           8
second call     8           7           15
third call      15          9           24
fourth call     24          11          35
*/

const prices = [9.99, 1.5, 19.88, 49.99, 30.5];

const total = prices.reduce((total, price) => {
  return total + price;
}); // 111.97

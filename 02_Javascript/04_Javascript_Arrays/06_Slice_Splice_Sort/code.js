// slice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); // ["Orange","Lemon"]

// slice returns elements in a new array object
// The first num is starting, 2nd is ending (but does not include)

// splice
// array.splice(index, howmany, item1, ....., itemX)
// howmany = how many to remove
// item1/itemX is what to add

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi");
//["Banana","Orange","Lemon","Kiwi","Apple","Mango"]

// sort
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.sort()); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// A constructor is a function that creates an instance of a class
//   which is typically called an “object”.
function ClassMates(name, age) {
  this.name = name;
  this.age = age;
  this.displayInfo = function () {
    return this.name + " is " + this.age + "year's old!";
  };
}

let classmate1 = new ClassMates("Mike Will", 15);
classmate1.displayInfo(); // "Mike Will is 15 year's old!"
classmate1.age; // 15

// New operator does the following:
/*
1) Create a blank plain JS object
2) Links (sets the constructor of) this object to another object
3) Passes the newly created object from Step 1 as the this context
4) Returns this if the funtion doesn't return its own object
*/

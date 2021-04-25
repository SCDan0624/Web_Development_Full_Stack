// Extends
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return `I have a ${this.carname}`;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return `${this.present()} it is a ${this.model}}`;
  }
}
// super()
// By calling the super() method in the constructor method,
// we call the parent's constructor method
// and gets access to the parent's properties and methods:

// extends
// The extends keyword is used
// to create a child class of another class (parent).

mycar = new Model("Ford", "Mustang");

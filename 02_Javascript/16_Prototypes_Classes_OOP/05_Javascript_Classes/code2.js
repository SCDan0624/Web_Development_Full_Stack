class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  greeting() {
    return `Hello I am a new ${this.name}`;
  }
}

let myCar1 = new Car("Ford", 2014);
myCar1.greeting();

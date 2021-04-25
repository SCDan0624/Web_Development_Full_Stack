const person = {
  first: "Dan",
  last: "Hardy",
  fullName() {
    return `${this.first}${this.last}`;
  },
};

person.fullName(); // Dan Hardy
person.last = "Plant";
person.fullName(); // Dan Plant

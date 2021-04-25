// Keyword this behaves differently in arrow function compared to
// regular function

const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

person.fullName(); // :"Viggo Mortensen"

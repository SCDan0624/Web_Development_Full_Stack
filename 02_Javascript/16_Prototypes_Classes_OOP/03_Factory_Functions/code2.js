// Quick Example 2
function createPerson(firstName, lastName) {
  return {
    firstName: this.firstName,
    lastName: this.lastName,
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

let user = createPerson("John", "Doe");
console.log(user.getFullName()); // John Doe

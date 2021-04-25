const user = {
  email: "dmayle012@gmail.com",
  password: "password",
  firstName: "Dan",
  lastName: "Mayle",
};

const { email } = user;
// same as const email = user.email

const { password, firstName } = user;
// same as const password = user.password, const firstName = user.firstname

const { lastName: finalName } = user;
// same as const finalName = user.lastName

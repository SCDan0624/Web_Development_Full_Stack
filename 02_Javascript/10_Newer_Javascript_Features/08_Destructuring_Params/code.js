const fullName = ({ first, last }) => {
  return `${first}${last}`;
};

const runner = {
  first: "Dan",
  last: "Mayle",
  country: "Canada",
};

fullName(runner); // "Dan Mayle"

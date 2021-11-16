const faker = require("faker");

const newUsers = (n) => {
  const user = [];
  for (let i = 0; i < n; i++) {
    user.push(faker.helpers.userCard());
  }
  return user;
};

module.exports = newUsers;

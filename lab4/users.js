// We use in memory database
let users = [
  {
    id: 1,
    name: "Aditya Vikram singh",
    mob: "8004xxxxxx",
    email: "aditya@example.com",
  },
  { id: 2, name: "Pandit Jii", mob: "8090xxxxxx", email: "pandit@example.com" },
];

let nextId = 3;

export const getUsers = () => users;

export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);
  return user;
};

// we use in memory database
let users = [
  { id: 1, name: "John Doe", mob: "1234567890", email: "john.doe@example.com" },
  {
    id: 2,
    name: "Jane Smith",
    mob: "9876543210",
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Alice Johnson",
    mob: "5555555555",
    email: "alice.johnson@example.com",
  },
];

let nextId = 4;

export const getAllUsers = () => {
  return users;
};

export const getUsersById = (pid) => {
  const found = users.find((user) => user.id === pid);
  return found;
};

export const getUsers = () => users;

export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);
  return user;
};

export const updateUser = (pid, updateData) => {
  const index = users.findIndex((user) => user.id === pid);
  if (index == -1) {
    return false;
  }
  updateData.id = pid;
  users[index] = updateData;
  return updateData;
};

export const deleteUser = (pid, deleteUser) => {
  if (index == -1) {
    return false;
  }
  users.slice(index, 1);
};

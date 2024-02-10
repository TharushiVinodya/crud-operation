const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Sample data for users
let users = [
  { id: 1, username: 'user1', email: 'user1@example.com' },
  { id: 2, username: 'user2', email: 'user2@example.com' }
];

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get a user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

// Create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  res.status(201).json(newUser);
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  const index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    res.json(users[index]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);

  res.json({ message: 'User deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const User = require("../models/users");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ name, email, password: hashedPassword, type: 'user' });
  await newUser.save();

  const token = jwt.sign({ username: newUser.username }, 'secret_key', { expiresIn: '1h' });
  res.status(201).json({ token, name: newUser.name, role: newUser.role, email: newUser.email });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = jwt.sign({ username: user.username }, 'secret_key', { expiresIn: '1h' });

  res.status(200).json({ token, name: user.name, role: user.role, email: user.email });
};

module.exports = { registerUser, loginUser }
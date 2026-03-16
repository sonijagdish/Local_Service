const User = require("../models/userModel");

// CREATE
const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

// READ ALL
const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// READ ONE
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

// UPDATE
const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
};

// DELETE
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};

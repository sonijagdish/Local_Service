const Admin = require("../models/AdminModel");

const createAdmin = async (req, res) => {
  const admin = await Admin.create(req.body);
  res.json(admin);
};

const getAllAdmins = async (req, res) => {
  const admins = await Admin.find();
  res.json(admins);
};

const getAdminById = async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  res.json(admin);
};

const updateAdmin = async (req, res) => {
  const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(admin);
};

const deleteAdmin = async (req, res) => {
  await Admin.findByIdAndDelete(req.params.id);
  res.json({ message: "Admin deleted" });
};

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};

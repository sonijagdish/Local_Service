const Category = require("../models/CategoryModel");

const createCategory = async (req, res) => {
  const category = await Category.create(req.body);
  res.json(category);
};

const getAllCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

const getCategoryById = async (req, res) => {
  const category = await Category.findById(req.params.id);
  res.json(category);
};

const updateCategory = async (req, res) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(category);
};

const deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "Category deleted" });
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};

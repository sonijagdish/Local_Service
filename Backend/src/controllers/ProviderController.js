const Provider = require("../models/ProviderModel");

const createProvider = async (req, res) => {
  const provider = await Provider.create(req.body);
  res.json(provider);
};

const getAllProviders = async (req, res) => {
  const providers = await Provider.find();
  res.json(providers);
};

const getProviderById = async (req, res) => {
  const provider = await Provider.findById(req.params.id);
  res.json(provider);
};

const updateProvider = async (req, res) => {
  const provider = await Provider.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(provider);
};

const deleteProvider = async (req, res) => {
  await Provider.findByIdAndDelete(req.params.id);
  res.json({ message: "Provider deleted" });
};

module.exports = {
  createProvider,
  getAllProviders,
  getProviderById,
  updateProvider,
  deleteProvider,
};

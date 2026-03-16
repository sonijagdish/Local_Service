const Service = require("../models/ServiceModel");

const createService = async (req, res) => {
  const service = await Service.create(req.body);
  res.json(service);
};

const getAllServices = async (req, res) => {
  const services = await Service.find().populate("categoryId");
  res.json(services);
};

const getServiceById = async (req, res) => {
  const service = await Service.findById(req.params.id);
  res.json(service);
};

const updateService = async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(service);
};

const deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: "Service deleted" });
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};

const Payment = require("../models/PaymentModel");

const createPayment = async (req, res) => {
  const payment = await Payment.create(req.body);
  res.json(payment);
};

const getAllPayments = async (req, res) => {
  const payments = await Payment.find().populate("bookingId");
  res.json(payments);
};

const getPaymentById = async (req, res) => {
  const payment = await Payment.findById(req.params.id);
  res.json(payment);
};

const updatePayment = async (req, res) => {
  const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(payment);
};

const deletePayment = async (req, res) => {
  await Payment.findByIdAndDelete(req.params.id);
  res.json({ message: "Payment deleted" });
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};

const Booking = require("../models/BookingModel");

const createBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json(booking); 
};

const getAllBookings = async (req, res) => {
  const bookings = await Booking.find()
    .populate("userId")
    .populate("providerId")
    .populate("serviceId");

  res.json(bookings);
};

const getBookingById = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  res.json(booking);
};

const updateBooking = async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(booking);
};

const deleteBooking = async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.json({ message: "Booking deleted" });
};

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};

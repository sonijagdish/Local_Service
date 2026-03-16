const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider"
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service"
  },
  bookingDate: Date,
  status: String,
  paymentStatus: String
});

module.exports = mongoose.model("Booking", bookingSchema);

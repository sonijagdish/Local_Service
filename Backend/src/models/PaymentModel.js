const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking"
  },
  amount: Number,
  method: String,
  status: String
});

module.exports = mongoose.model("Payment", paymentSchema);

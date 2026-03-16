const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider"
  },
  rating: Number,
  comment: String
});

module.exports = mongoose.model("Review", reviewSchema);

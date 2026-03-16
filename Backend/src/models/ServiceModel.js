const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  status: String
});

module.exports = mongoose.model("Service", serviceSchema);

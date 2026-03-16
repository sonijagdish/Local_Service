const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  serviceType: String,
  location: String,
  experience: String,
  verified: Boolean,
  availability: Boolean
});

module.exports = mongoose.model("Provider", providerSchema);

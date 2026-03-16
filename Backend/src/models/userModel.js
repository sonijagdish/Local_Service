const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  address: String,
  role: {
    type: String,
    enum:["user", "provider","admin"],
    default: "user"
  },

  status: {
    type: String,
    enum:["active", "inactive"],
    default: "active"
  }
});

module.exports = mongoose.model("User", userSchema);

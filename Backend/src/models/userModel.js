const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  phone: {
    type: String
  },

  profilePicture: {
    type: String,
    default: ""
  },

  role: {
    type: String,
    enum: ['customer', 'provider', 'admin'],
    default: 'customer' 
  },

  status: {
    type: String,
    enum: ['active', 'inactive', 'deleted', 'blocked'],
    default: 'active'
  }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
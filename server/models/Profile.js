// models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },

  gender: {
    type: String,
    required: true 
  },
  age: {
    type: Number,
    required: true 
  },
  pronouns: {
    type: String,
    required: true 
  },
  about: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);
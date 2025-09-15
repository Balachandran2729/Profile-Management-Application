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

  bio: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  jobTitle: {
    type: String,
    required: false
  },
  company: {
    type: String,
    required: false
  },
  skills: [{
    type: String
  }],
  socialLinks: {
    linkedin: String,
    github: String,
    twitter: String
  },
  website: {
    type: String,
    required: false
  },
  about: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);
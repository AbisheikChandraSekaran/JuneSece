const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // prevents duplicate registrations
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true // adds createdAt and updatedAt automatically
});

const User = mongoose.model('User', userSchema);

module.exports = User;

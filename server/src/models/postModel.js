const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  content: { 
    type: String, 
    required: true,
    maxlength: 256
  },
  likes: {
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model('Post', postSchema);

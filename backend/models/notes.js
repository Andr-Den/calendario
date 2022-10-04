const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

// noteSchema.index({ name: 'text' });

module.exports = mongoose.model('note', noteSchema);

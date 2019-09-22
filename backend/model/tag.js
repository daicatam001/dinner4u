const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
  name: { type: String, required: true },
  query: { type: String, required: true },
  count: { type: Number, default: 0 },
  searchCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Tag', tagSchema);

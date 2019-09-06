const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
  name: { type: String, require },
  searchCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Tag', tagSchema);

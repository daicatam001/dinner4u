const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
  name: { type: String, required: true },
  query: { type: String, required: true },
  searchCount: { type: Number, default: 0 },
  count: { type: Number, default: 0 }
});

module.exports = mongoose.model('Dish', dishSchema);

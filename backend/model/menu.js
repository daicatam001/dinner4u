const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
  dishIds: {
    type: Array,
    required: true,
    default: [],
    minLength: 1
  },
  tagIds: {
    type: Array,
    default: []
  },
  created: { type: Date, required: true, default: new Date() },
  liked: { type: Number, require: true, default: 0 }
});

module.exports = mongoose.model('Menu', menuSchema);

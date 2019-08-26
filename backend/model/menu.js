const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
  dishes: {
    type: Array,
    required: true,
    default: [],
    minLength: 3
  },
  created: { type: Date, required: true, default: new Date() },
  liked: { type: Number, require: true, default: 0 }
});

module.exports = mongoose.model('Menu', menuSchema);

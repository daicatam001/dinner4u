const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
  dishes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dish' }],
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
  created: { type: Date, required: true, default: new Date() },
  liked: { type: Number, require: true, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Menu', menuSchema);

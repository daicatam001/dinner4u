const { body } = require('express-validator');
const isPositiveInt = val => {
  if (Number.isInteger(val) && val > 0) {
    return true;
  }
  return new Error();
};

exports.createMenu = [
  body('dishes', 'Invalid dishes')
    .exists()
    .isArray()
    .custom(dishes => {
      if (dishes.length < 3) {
        throw new Error();
      }
      return true;
    })
];

exports.findMenu = [
  body('page', 'Invalid Page')
    .exists()
    .isNumeric()
    .custom(isPositiveInt),
  body('size', 'Invalid sized')
    .exists()
    .isNumeric()
    .custom(isPositiveInt)
];

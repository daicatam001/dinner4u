const { body } = require('express-validator');

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

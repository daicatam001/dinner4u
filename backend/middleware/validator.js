const { body } = require('express-validator');
const User = require('../model/menu');
const isPositiveInt = val => {
  if (Number.isInteger(val) && val > 0) {
    return true;
  }
  return new Error();
};

// Menu Route
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

// Auth Route
exports.login = [
  body('username', 'Invalid Username or Password')
    .exists()
    .custom((username, { req }) => {
      return User.find({ username }).then(user => {});
    })
];

// Validate Route
exports.registerUsername = [
  body('username')
    .exists()
    .custom(username => {
      if (/[^a-zA-Z0-9\-\/]/.test(username)) {
        throw new Error();
      }
      return true;
    })
    .custom(username => {
      return User.findOne({ username }).then(user => {
        if (user) {
          return Promise.reject();
        }
      });
    })
];
exports.registerEmail = [
  body('email')
    .exists()
    .isEmail()
    .custom(email => {
      return User.findOne({ email }).then(user => {
        if (user) {
          return Promise.reject();
        }
      });
    })
];

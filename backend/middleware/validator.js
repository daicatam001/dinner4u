const { body } = require('express-validator');
const User = require('../model/user');
const bcrypjs = require('bcryptjs');

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
      if (dishes.length === 0) {
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
    .not()
    .isEmpty()
    .custom((username, { req }) => {
      let userData;
      return User.findOne({ $or: [{ username }, { email: username }] })
        .then(user => {
          if (!user) {
            return Promise.reject();
          }
          userData = user;
          return bcrypjs.compare(req.body.password, user.password);
        })
        .then(result => {
          if (!result) {
            return Promise.reject();
          }
          req.userData = userData;
        });
    })
];

exports.register = [
  body('username', 'Username không hợp lệ hoặc đã tồn tại')
    .exists()
    .not()
    .isEmpty()
    .custom(username => {
      if (/[^a-zA-Z0-9\-\/]/.test(username)) {
        throw new Error();
      }
      return true;
    })
    .custom(username => {
      console.log('TCL: username', username);
      return User.findOne({ username }).then(user => {
        if (user) {
          return Promise.reject();
        }
      });
    }),
  body('email', 'Email không hợp lệ hoặc đã tồn tại')
    .exists()
    .not()
    .isEmpty()
    .isEmail()
    .custom(email => {
      return User.findOne({ email }).then(user => {
        if (user) {
          return Promise.reject();
        }
      });
    }),
  body('password', 'Password must have at least 8 characters')
    .exists()
    .not()
    .isEmpty()
    .isLength({ min: 8 })
];

// Validate Route
exports.registerUsername = [
  body('username')
    .exists()
    .not()
    .isEmpty()
    .custom(username => {
      if (/[^a-zA-Z0-9\-\/]/.test(username)) {
        throw new Error();
      }
      return true;
    })
    .custom(username => {
      console.log('TCL: username', username);
      return User.findOne({ username }).then(user => {
        console.log(user);
        if (user) {
          return Promise.reject();
        }
      });
    })
];
exports.registerEmail = [
  body('email')
    .exists()
    .not()
    .isEmpty()
    .isEmail()
    .custom(email => {
      return User.findOne({ email }).then(user => {
        if (user) {
          return Promise.reject();
        }
      });
    })
];

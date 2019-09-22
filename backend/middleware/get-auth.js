const jwt = require('jsonwebtoken');
const User = require('../model/user');
require('dotenv').config({ path: './backend/.env' });

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    User.findOne({ _id: decodedToken.id }).then(user => {
      if (user) {
        req.userData = user;
      }
      next();
    });
  } catch (err) {
    next();
  }
};

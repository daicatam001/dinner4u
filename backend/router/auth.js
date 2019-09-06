const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const User = require('../model/user');
const { validationResult } = require('express-validator');
const { login, register } = require('../middleware/validator');
router.use('/login', login, (req, res) => {
  const result = validationResult(req);
  console.log('TCL: result', result);
  if (!result.isEmpty()) {
    return res.status(422).json({
      status: 'error',
      message: result.errors[0].msg
    });
  }
  console.log(req.userData);
  return res.status(200).json({
    status: 'ok',
    data: req.userData
  });
});

router.use('/register', register, (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(422).json({
      status: 'error',
      message: result.errors[0].msg
    });
  }
  const { username, email, password } = req.body;
  bcryptjs
    .genSalt(10)
    .then(salt => {
      return bcryptjs.hash(password, salt);
    })
    .then(hash => {
      const user = new User({
        username: username,
        email: email,
        password: hash
      });
      return user.save();
    })
    .then(userObj => {
      return res.status(201).json({
        status: 'ok',
        data: userObj
      });
    })
    .catch(e => {
      return res.status(500).json({
        status: 'error',
        message: e.message
      });
    });
});

module.exports = router;

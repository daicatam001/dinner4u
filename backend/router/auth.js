const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const User = require('../model/user');

router.use('/login', (req, res) => {
  res.status(200).json({
    message: 'hello'
  });
});

router.use('/register', (req, res) => {
  const { username, email, password } = req.body;
  console.log({ username, email, password });
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

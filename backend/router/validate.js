const express = require('express');
const { validationResult } = require('express-validator');
const { registerUsername, registerEmail } = require('../middleware/validator');

const router = express.Router();

router.post('/register/username', registerUsername, (req, res) => {
  const errors = validationResult(req);
  console.log('TCL: errors', errors);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: 'error'
    });
  }
  return res.status(200).json({
    status: 'ok'
  });
});
router.post('/register/email', registerEmail, (req, res) => {
  const errors = validationResult(req);
  console.log('TCL: errors', errors);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: 'error'
    });
  }
  return res.status(200).json({
    status: 'ok'
  });
});
module.exports = router;

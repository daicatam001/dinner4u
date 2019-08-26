const express = require('express');
const validator = require('../middleware/validator');
const Menu = require('../model/menu');
const { validationResult } = require('express-validator');

const router = express.Router();

// Create new menu
router.post('', validator.createMenu, (req, res) => {
  const result = validationResult(req);
  if (result.errors.length > 0) {
    return res.status(422).json({
      status: 'error',
      message: result.errors[0].msg
    });
  }
  const dishes = req.body.dishes;
  const menu = new Menu({ dishes });
  menu.save().then(menuObj => {
    return res.status(201).json({
      status: 'ok'
    });
  });
});

module.exports = router;

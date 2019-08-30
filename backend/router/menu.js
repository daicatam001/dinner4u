const express = require('express');
const validator = require('../middleware/validator');
const Menu = require('../model/menu');
const { validationResult } = require('express-validator');
const { PAGE_SIZE } = require('../core/constants');

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
  menu
    .save()
    .then(menuObj => {
      return res.status(201).json({
        status: 'ok'
      });
    })
    .catch(error => {
      console.log('TCL: error', error);
      res.status(500).json({
        status: 'error',
        message: error.message
      });
    });
});
router.post('/find', validator.findMenu, (req, res) => {
  const result = validationResult(req);
  if (result.errors.length > 0) {
    console.log('TCL: result.errors', result.errors);
    return res.status(422).json({
      status: 'error',
      message: result.errors[0].msg
    });
  }
  let { page, size } = req.body;

  Menu.find()
    .skip(size * (page - 1))
    .limit(size)
    .then(menuList => {
      return res.status(200).json({
        status: 'ok',
        data: menuList
      });
    })
    .catch(error => {
      console.log('TCL: error', error);
      res.status(500).json({
        status: 'error',
        message: error.message
      });
    });
});

module.exports = router;

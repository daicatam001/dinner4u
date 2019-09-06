const express = require('express');
const { validationResult } = require('express-validator');

const validator = require('../middleware/validator');
const Menu = require('../model/menu');
const Tag = require('../model/tag');
const Dish = require('../model/dish');
const { PAGE_SIZE } = require('../core/constants');

const router = express.Router();

// Create new menu
router.post('', validator.createMenu, (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log('TCL: result', result);
    return res.status(422).json({
      status: 'error',
      message: result.errors[0].msg
    });
  }
  let { dishes, tags } = req.body;
  dishes = dishes.map(dish => ({
    name: dish
  }));
  tags = tags.map(tag => ({
    name: tag
  }));
  console.log({ dishes, tags });
  Promise.all([Dish.insertMany(dishes), Tag.insertMany(tags)])
    .then(([dishDocs, tagDocs]) => {
      console.log('TCL: dishDocs, tagDocs', dishDocs, tagDocs);

      const dishIds = dishDocs.map(doc => doc._id);
      const tagIds = tagDocs.map(doc => doc._id);
      const menu = new Menu({ dishIds, tagIds });
      return menu.save();
    })
    .then(() => {
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
  if (!result.isEmpty()) {
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

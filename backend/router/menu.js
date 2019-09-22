const express = require('express');
const { validationResult } = require('express-validator');

const validator = require('../middleware/validator');
const Menu = require('../model/menu');
const Tag = require('../model/tag');
const Dish = require('../model/dish');
const Utils = require('../core/utils');
const getAuth = require('../middleware/get-auth');
const { PAGE_SIZE } = require('../core/constants');

const router = express.Router();

// Create new menu
router.post('', validator.createMenu, getAuth, (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.log('TCL: result', result);
    return res.status(422).json({
      status: 'error',
      message: result.errors[0].msg
    });
  }
  const user = req.userData;
  console.log(user);
  let { dishes, tags } = req.body;
  dishes = dishes.map(dish =>
    Dish.findOneAndUpdate(
      { query: Utils.toKebabCase(dish) },
      {
        $set: {
          name: Utils.removeUnknownSpace(dish.toLowerCase()),
          query: Utils.toKebabCase(dish),
          $inc: { count: 1 }
        }
      },
      { upsert: true, new: true }
    )
  );
  tags = tags.map(tag =>
    Tag.findOneAndUpdate(
      { query: Utils.toKebabCase(tag) },
      {
        $set: {
          name: Utils.removeUnknownSpace(tag.toLowerCase()),
          query: Utils.toKebabCase(tag)
        },
        $inc: { count: 1 }
      },
      { upsert: true, new: true }
    )
  );
  Promise.all([
    Promise.all(dishes).then(dishDocs => {
      return Promise.resolve(dishDocs);
    }),
    Promise.all(tags).then(tagDocs => {
      return Promise.resolve(tagDocs);
    })
  ])
    .then(([dishDocs, tagDocs]) => {
      console.log(dishDocs, tagDocs);
      const menu = new Menu({ dishes: dishDocs, tags: tagDocs, user: user });
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
  // Promise.all([Dish.insertMany(dishes), Tag.insertMany(tags)])
  //   .then(([dishDocs, tagDocs]) => {
  //     // console.log('TCL: dishDocs, tagDocs', dishDocs, tagDocs);

  //     // const dishIds = dishDocs.map(doc => doc._id);
  //     // const tagIds = tagDocs.map(doc => doc._id);
  //     const menu = new Menu({ dishes: dishDocs, tags: tagDocs });
  //     return menu.save();
  //   })
  //   .then(() => {
  //     return res.status(201).json({
  //       status: 'ok'
  //     });
  //   })
  //   .catch(error => {
  //     console.log('TCL: error', error);
  //     res.status(500).json({
  //       status: 'error',
  //       message: error.message
  //     });
  //   });
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
    .populate('dishes', 'name')
    .populate('tags', 'name')
    .skip(size * (page - 1))
    .limit(size)
    .exec()
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
router.get('/fetch/welcome', (req, res) => {
  Menu.find()
    .populate('dishes', 'name')
    .populate('tags', 'name')
    .limit(10)
    .exec()
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

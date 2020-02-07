var express = require('express');
var router = express.Router();

var Users = require('../models/users');

/* GET users listing. */
router.post('/', function (req, res, next) {
  Users.findOne({ userId: req.body.id }, function (err, userDoc) {
    if (err) {
      res.json({
        status: '1',
        result: err.message
      })
    } else {
      res.json({
        status: '0',
        result: userDoc.cartList
      })
    }
  })
});

module.exports = router;


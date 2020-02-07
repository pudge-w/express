var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Users = require('../models/users');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var param = {
    userName: req.body.userName,
    password: req.body.userPwd
  }
  Users.findOne(param, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      })
    } else {
      if (doc) {
        res.json({
          status: '0',
          msg: '',
          result: {
            userName: doc.userName
          }
        })
      } else {
        res.json({
          status: '1',
          msg: '账号不存在'
        })
      }
    }
  })
})

module.exports = router;
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Users = require('../models/users');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function (req, res, next) {
  var param = new Users({
    userName: req.body.userName,
    password: req.body.userPwd,
    userId: Math.random().toFixed(4) * 10000,
    cartList: []
  })
  param.save(function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
  res.json({
    status: '0',
    msg: '注册成功',
  })
})

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
            userName: doc.userName,
            userId: doc.userId
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
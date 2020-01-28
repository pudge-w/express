var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Lunbos = require('../models/lunbos');


mongoose.connect('mongodb://127.0.0.1/jingdong', function (err) {
  if (err) {
    console.log('连接失败')
  } else {
    console.log('连接成功')
  }
})

router.get('/', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  Lunbos.find({}, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      });
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
});

module.exports = router;
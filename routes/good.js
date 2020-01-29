var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Goods = require('../models/goods');

router.get('/', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  Goods.find({}, function (err, doc) {
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

router.get('/detail', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  Goods.find({
    id: req.query.id
  }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      });
    } else {
      res.json({
        status: '0',
        result: doc[0]
      })
    }
  })
})

module.exports = router;
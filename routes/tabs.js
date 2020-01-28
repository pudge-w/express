var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({
    status: '0',
    msg: '',
    result: [
      ['家用电器'],
      ['手机', '运营商', '数码'],
      ['电脑', '办公'],
      ['家具', '家居', '装修', '厨具'],
      ['男装', '女装', '童装', '内衣'],
      ['美妆', '个护清洁', '宠物'],
      ['女鞋', '箱包', '钟表', '珠宝'],
      ['男鞋', '运动', '户外'],
      ['房产', '汽车', '汽车用品'],
      ['母婴', '玩具乐器'],
      ['食品', '酒类', '生鲜', '特产'],
      ['艺术', '礼品鲜花', '农资绿植'],
      ['医药保健', '计生情趣'],
      ['图书', '文娱', '教育', '电子书'],
      ['机票', '酒店', '旅游', '生活'],
      ['理财', '众筹', '白条', '保险'],
      ['安装', '维修', '清洗', '二手'],
      ['工业品']
    ]
  });
});

module.exports = router;

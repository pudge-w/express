var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var goodsSchema = new Schema({
  "id": Number,
  "goodsName": String,
  "goodsImg": Array,
  "currentPrice": Number
})

module.exports = mongoose.model('good', goodsSchema);
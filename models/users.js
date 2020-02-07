var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  "userId": String,
  "userName": String,
  "password": String,
  "cartList": Array
})

module.exports = mongoose.model('user', usersSchema);
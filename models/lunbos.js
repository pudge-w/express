var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lunboSchema = new Schema({
  "imgUrl": String
})

module.exports = mongoose.model('Lunbo', lunboSchema);
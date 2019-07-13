const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  address: { type:String, required:true},
  name: { type:String, unique: true, required:true},
  country: { type:String, required:true}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Manufacturer', schema);

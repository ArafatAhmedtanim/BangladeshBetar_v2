const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type:String, unique: true, required:true},
  type_name: { type: String, required: true},
  specification: { type: String, required: true},
  model: { type: String, required: true},
  sr_no: { type: String, required: true},
  symbol_no: { type: String, required: true},
  date_installation: { type: String, required: true},
  threshold: { type: String, required: true},
  remarks: { type: String, required: true},
  attachment: { type: String, required: true},
  ip: { type: String, required: true}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', schema);

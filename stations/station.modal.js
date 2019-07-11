const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  station_id: { type: String, unique: true, required: true },
  address: { type:String, required:true}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Station', schema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Station  = require('./../stations/station.modal');

const schema = new Schema({
  username: { type: String, unique: true, required: true },
  // hash: { type: String, required: true },
  email: { type: String, required: true },
  mobile: {type: String, required: true},
  designation: {type: String, required: true},
  signature: {type: String, required: true},
  password: {type: String, required: true},
  role: { type: String, required: true },
  station_id: { type: Schema.Types.ObjectId, ref: 'Station'},
  status:{type: String, required: true},
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);

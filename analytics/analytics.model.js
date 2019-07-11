const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  AT_ID: { type: String, unique: true, required: true },
  Robi_iD: { type: String, unique: true, required: true },
  Region: { type: String, required: true },
  Zone: { type: String, required: true },
  Quickly_MP: { type: String, required: true },
  Pakage: { type: String, required: true },
  Site_Category: { type: String, required: true },
  Site_Priority: { type: String, required: true },
  Importance: { type: String },
  Own_Shared: { type: String },
  Battery_Back_Up_Time: { type: String, required: true },
  Division: { type: String, required: true },
  District: { type: String, required: true },
  Thana: { type: String },
  Latitude: { type: String, required: true },
  Longitude: { type: String, required: true },
  Battery_Value: { type: String },
  Battery_Score: { type: String },
  Power_Score: { type: String },
  Vulnerability: { type: String },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Analytics', schema);

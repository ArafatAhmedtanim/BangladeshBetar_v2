const db = require('./../helpers/db');
const Analytics = db.Analytics;

module.exports = {
  search,
  getAll,
};

async function search(division, district, thana, time) {
  return await Analytics.find({
    Division: division,
    District: district,
    Thana: thana,
  });
}

async function getAll() {
  return await Analytics.find();
}

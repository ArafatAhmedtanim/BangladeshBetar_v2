const db = require('./../helpers/db');
const Station = db.Station;

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};


async function getAll() {
  return await Station.find().select('-hash');
}

async function getById(id) {
  return await Station.findById(id).select('-hash');
}

async function create(station) {
  console.log(station)
  console.log(Station)
  if (await Station.findOne({ station_id: station.station_id })) {
    throw 'Station"' + station.station_id + '" is already taken';
  }
  console.log(Station)
  const newStation = new Station(station);

  console.log("Ok")
  await newStation.save();
}

async function update(id, station) {
  const wantedStation = await Station.findById(id);

  if (!wantedStation) throw 'Station not found';

  Object.assign(wantedStation, station);

  await wantedStation.save();
}

async function _delete(id) {
  await Station.findByIdAndRemove(id);
}

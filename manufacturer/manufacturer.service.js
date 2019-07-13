const db = require('./../helpers/db');
const Manufacturer = db.Manufacturer;

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};


async function getAll() {
  return await Manufacturer.find().select('-hash');
}

async function getById(id) {
  return await Manufacturer.findById(id).select('-hash');
}

async function create(manufacturer) {
  console.log(manufacturer)
  console.log(Manufacturer)
  if (await Manufacturer.findOne({ name: manufacturer.name })) {
    throw 'Manufacturer"' + manufacturer.name + '" is already taken';
  }
  const newManufacturer = new Manufacturer(manufacturer);

  console.log("Ok")
  await newManufacturer.save();
}

async function update(id, manufacturer) {
  const wantedManufacturer = await Manufacturer.findById(id);

  if (!wantedManufacturer) throw 'Manufacturer not found';

  Object.assign(wantedManufacturer, manufacturer);

  await wantedManufacturer.save();
}

async function _delete(id) {
  await Manufacturer.findByIdAndRemove(id);
}

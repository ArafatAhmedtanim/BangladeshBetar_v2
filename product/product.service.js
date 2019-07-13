const db = require('../helpers/db');
const Product = db.Product;

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};


async function getAll() {
  return await Product.find().select('-hash');
}

async function getById(id) {
  return await Product.findById(id).select('-hash');
}

async function create(product) {
  console.log(product)
  console.log(Product)
  if (await Product.findOne({ name: product.name })) {
    throw 'Product"' + product.name + '" is already taken';
  }
  const newProduct = new Product(product);

  console.log("Ok")
  await newProduct.save();
}

async function update(id, product) {
  const wantedProduct = await Product.findById(id);

  if (!wantedProduct) throw 'Product not found';

  Object.assign(wantedProduct, product);

  await wantedProduct.save();
}

async function _delete(id) {
  await Product.findByIdAndRemove(id);
}

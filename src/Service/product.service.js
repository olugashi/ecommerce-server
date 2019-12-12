const db = require("../helpers/db");
const Product = db.Product;

module.exports = {
  product_details,
  product_create,
  product_update,
  product_delete
};

async function product_details(id) {
  await Product.fifindById(id);
}

async function product_create(productParam) {
  let product = new Product(productParam);

  await product.save();
}

async function product_update(id, productParam) {
  const product = await Product.findById(id);
  if (!product) throw "product not found";

  Object.assign(product, productParam);

  await product.save();
}

async function product_delete(id) {
  await Product.findByIdAndRemove(id);
}

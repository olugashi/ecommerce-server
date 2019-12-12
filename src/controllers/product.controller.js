//const Product = require("../models/product.model");
const productService = require("../Service/product.service");

//Simple version, without validation or sanitation
exports.product_details = function(req, res, next) {
  productService
    .product_details(req.params.id)
    .then(product => (product ? res.json(product) : res.status(400)))
    .catch(err => next(err));
};

exports.product_create = function(req, res, next) {
  productService
    .product_create(req.body)
    .then(res.send("Product Created successfully"))
    .catch(err => next(err));
};

exports.product_update = function(req, res, next) {
  productService
    .product_update(req.body)
    .then(res.send("Product udpated."))
    .catch(err => next(err));
};

exports.product_delete = function(req, res, next) {
  productService
    .product_delete(req.body)
    .then(res.send("Deleted successfully!"))
    .catch(err => next(err));
};

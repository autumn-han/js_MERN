const Product = require("../models/product.model");

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => console.log("Unable to create product object"));
};

module.exports.getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.getAllProducts = (req, res) => {
  Product.find({})
    .then((products) => {
      console.log(products);
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

module.exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updateProduct) => {
      console.log(updatedProduct);
      res.json(updateProduct);
    })
    .catch((err) => res.json(err));
};

module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((deletedProduct) => {
      console.log(deletedProduct);
      res.json(deletedProduct);
    })
    .catch((err) => res.json(err));
};

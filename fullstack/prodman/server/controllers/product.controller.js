const Product = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json(console.log("testing"));
};

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
};

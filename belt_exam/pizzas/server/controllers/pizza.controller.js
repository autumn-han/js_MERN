const Pizza = require("../models/pizza.model");

module.exports.getAllPizzas = (req, res) => {
  Pizza.find({})
    .then((pizzas) => res.json(pizzas))
    .catch((err) => res.json(err));
};

module.exports.createPizza = (req, res) => {
  Pizza.create(req.body)
    .then((pizza) => res.json(pizza))
    .catch((err) => res.status(400).json(err));
};

module.exports.deletePizza = (req, res) => {
  Pizza.deleteOne({ _id: req.params.id })
    .then((delPizza) => res.json(delPizza))
    .catch((err) => res.json(err));
};

const Player = require("../models/player.model");

module.exports.getAll = (req, res) => {
  Player.find({})
    .then((players) => res.json(players))
    .catch((err) => res.json(err));
};

module.exports.addPlayer = (req, res) => {
  Player.create(req.body)
    .then((player) => res.json(player))
    .catch((err) => res.json(err));
};

module.exports.updateOne = (req, res) => {
  Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedPlayer) => res.json(updatedPlayer))
    .catch((err) => res.json(err));
};

module.exports.removePlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then((deletedPlayer) => res.json(deletedPlayer))
    .catch((err) => res.json(err));
};

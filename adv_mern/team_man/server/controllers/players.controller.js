const Player = require("../models/player.model");

module.exports.getAll = (req, res) => {
  Player.find({})
    .then((players) => res.json(players))
    .catch((err) => res.json(err));
};

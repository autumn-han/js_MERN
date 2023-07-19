const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    playerName: {
      type: String,
    },
    prefPos: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const GameSchema = new mongoose.Schema({
  gameNumber: {
    type: Number,
  },
  players: [PlayerSchema],
});

module.exports = mongoose.model("Player", PlayerSchema);
module.exports = mongoose.model("Game", GameSchema);

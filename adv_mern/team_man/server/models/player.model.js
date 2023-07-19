const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    playerName: {
      type: String,
    },
    prefPos: {
      type: String,
    },
    games: [
      {
        game: 1,
        status: "undecided",
      },
      {
        game: 2,
        status: "undecided",
      },
      {
        game: 3,
        status: "undecided",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", PlayerSchema);

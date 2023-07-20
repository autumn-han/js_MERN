const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    position: {
      type: String,
    },
    gameOneStat: {
      type: String,
      enum: ["Playing", "Not Playing", "Undecided"],
      default: "Undecided",
    },
    gameTwoStat: {
      type: String,
      enum: ["Playing", "Not Playing", "Undecided"],
      default: "Undecided",
    },
    gameThreeStat: {
      type: String,
      enum: ["Playing", "Not Playing", "Undecided"],
      default: "Undecided",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", PlayerSchema);

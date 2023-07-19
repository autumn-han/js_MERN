const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema(
  {
    pizzaType: {
      type: String,
      required: [true, "Must select a pizza type"],
    },
    size: {
      type: String,
      required: [true, "Must select a pizza size"],
    },
    status: {
      type: Boolean,
    },
    note: {
      type: String,
      maxLength: [25, "Note must not contain more than 25 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pizza", PizzaSchema);

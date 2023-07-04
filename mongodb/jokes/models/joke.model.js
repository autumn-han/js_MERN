const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup required"],
        minlength: [10, "Setup must be at least 10 characters long"]
    },
    punchline: {
        type: String
    }
});

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;
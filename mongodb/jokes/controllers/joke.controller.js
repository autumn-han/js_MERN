const Joke = require("../models/joke.model");

// retrieve one joke
module.exports.getOneJoke = (req, res) => {
    const { params } = req;
    Joke.find({_id: params._id})
    .then((oneJoke) => {
        res.json({ joke: oneJoke })
    })
    .catch((err) => {
        res.json({ message: "Something went wrong", error: err })
    })
};

// create a new joke
module.exports.createJoke = (req, res) => {
    const { body } = req;
    Joke.create(body)
        .then((newJoke) => {
            res.json({ newJoke: newJoke })
        })
        .catch((err) => {
            res.json({ error: err })
        });
};

// update a joke
module.exports.updateOne = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateJoke) => {
            res.json({ updateJoke: updateJoke })
        })
        .catch((err) => {
            res.json({ error: err })
        })
};

// delete a joke
module.exports.remove = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then((result) => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ error: err })
        })
};

// retrieve all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then((allJokes) => {
        res.json({ jokes: allJokes })
    })
    .catch((err) => {
        res.json({ message: "Something went wrong", error: err })
    });
};


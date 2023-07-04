const Joke = require("../models/joke/model");
const { jokeData } = req.body;

// retrieve one joke
module.exports.getOneJoke = (req, res) => {
    Joke.find({_id: ""})
    .then(firstJoke => {
        res.json({ joke: firstJoke })
    })
    .catch((err) => {
        res.json({ message: "Something went wrong", error: err })
    })
};

// create a new joke
Joke.create(jokeData)
    .then(newJoke => {
        res.json({ newJoke: newJoke })
    })
    .catch((err) => {
        res.json({ message: "Something went wrong", error: err })
    });

// update a joke
Joke.updateOne({setup: ""}, {
    setup: "",
    $set:{setup:""}
});

// delete a joke
Joke.remove({_id: ""})
    .then(deletedJoke => {
        res.json({ deletedJoke: deletedJoke })
    })
    .catch((err) => {
        res.json({ message: "Something went wrong", error: err })
    });

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


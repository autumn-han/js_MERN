const Joke = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get("/api/jokes", Joke.findAllJokes);
    app.post("/api/jokes/new", Joke.createJoke);
    app.get("/api/jokes/:_id", Joke.getOneJoke);
    app.put("/api/jokes/:_id", Joke.updateOne);
    app.delete("/api/jokes/:_id", Joke.remove);
};
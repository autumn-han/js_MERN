const Joke = require("../controllers/joke.controller");

app.get("/api/jokes", (req, res) => {
    console.log("Hello to all my jokes");
    Joke.findAllJokes();
});

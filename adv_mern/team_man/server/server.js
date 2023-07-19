const express = require("express");
const cors = require("cors");
const PlayerRoutes = require("./routes/players.routes");
const app = express();
const port = 8000;

PlayerRoutes(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./config/mongoose.config");

app.listen(port, () => console.log(`Listening on port: ${port}`));

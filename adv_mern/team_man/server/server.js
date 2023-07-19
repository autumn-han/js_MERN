const express = require("express");
const cors = require("cors");
const PlayerRoutes = require("./routes/players.routes");
const app = express();
const port = 8000;

PlayerRoutes(app);
app.use(cors());

app.listen(port, () => console.log(`Listening on port: ${port}`));

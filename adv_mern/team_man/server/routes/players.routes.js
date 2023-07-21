const PlayerController = require("../controllers/players.controller");

module.exports = (app) => {
  app.get("/api/players", PlayerController.getAll);
  app.post("/api/players", PlayerController.addPlayer);
  app.put("/api/players/:id", PlayerController.updateOne);
  app.delete("/api/players/:id", PlayerController.removePlayer);
};

const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors({
  origin: 'http://localhost:3000'
}));

const productRoutes = require("./routes/product.routes");
productRoutes(app);

require("./config/mongoose.config");

app.listen(port, () => console.log("Listening on port: 8000"));

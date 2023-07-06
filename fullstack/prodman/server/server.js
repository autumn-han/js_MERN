const express = require('express');
const app = express();
const port = 8000;

const productRoutes = require('./routes/product.routes');
productRoutes(app);

app.listen(port, () => console.log('Listening on port: 8000'));
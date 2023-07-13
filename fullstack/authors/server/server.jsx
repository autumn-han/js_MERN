const express = require('express');
const app = express();
const port = 5173;

const authorRoutes = require('./routes/authors.routes');
authorRoutes(app);

app.listen(port, () => console.log('Listening on port: %port'));
const express = require('express');
const app = express();
const port = 8000;

const personRoutes = require('./routes/person.routes');
personRoutes(app);
// the above two lines can also be written in shorthand as: require(./routes/person.routes)(app)

app.listen(port, () => console.log('Listening on port: ${port}'));
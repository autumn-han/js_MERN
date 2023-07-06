const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());
app.use(express.json()); 
// allows JSON objects to be posted 
app.use(express.urlencoded({ extended: true }));
// allows JSON objects with strings and arrays

require('./config/mongoose.config');
const personRoutes = require('./routes/person.routes');
personRoutes(app);
// the above two lines can also be written in shorthand as: require(./routes/person.routes)(app)

app.listen(port, () => console.log('Listening on port: ${port}'));
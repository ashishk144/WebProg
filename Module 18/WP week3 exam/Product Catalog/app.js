var express = require('express');

var pcController = require('./controllers/pccontroller')

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./'));

pcController(app);

app.listen(8000);

console.log('Listening at port 8000');
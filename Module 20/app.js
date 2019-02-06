var express = require('express');

var dbController = require('dbController');

var app = express();

app.use(cors());

dbController(app);

app.listen(3000);

console.log('Listening at port 3000');
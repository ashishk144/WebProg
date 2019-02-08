var express = require('express');

var dbController = require('./dbController');

var app = express();

var cors = require('cors');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    };
    next();
});
app.use(cors());

dbController(app);

const port = process.env.PORT || 3000;

app.listen(port, "127.0.0.1");

console.log(`Listening at port ${port}`);
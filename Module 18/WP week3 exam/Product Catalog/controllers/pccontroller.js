const fs = require('fs');

let data = fs.readFileSync('catalog.json');

let jsonData = JSON.parse(data);

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = (function(app) {

    app.get('/', function(req, res) {
        res.render('pc', {list: jsonData});
    });
    app.post('/', urlencodedParser, function(req, res) {
        
        // res.json(jsonData);
    });
    app.delete('/delete/:item', function(req, res) {
        jsonData.products = jsonData.products.filter(function(list) {
                return list.title.replace(/ /g, '-') !== req.params.item;
        })
        const writeData = JSON.stringify(jsonData);
        fs.writeFileSync('catalog.json', writeData, (err) => {
            if(err) throw err;
            console.log("Data written");
        });
        res.json(jsonData);
    });

});
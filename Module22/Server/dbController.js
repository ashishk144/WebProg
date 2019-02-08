// Reading local file synchronously
const fs = require('fs');

let data = fs.readFileSync('users.json');

let jsonData = JSON.parse(data);
//body parser to parse the urls and objects to json
var bodyParser = require('body-parser');

//Mongoose
var dbProduct = require('mongoose');

var dbUser = require('mongoose');

// dbProduct.Promise = global.Promise;

dbProduct.connect('mongodb://cartwp:cartwp123@ds113871.mlab.com:13871/cartwp',{ useNewUrlParser: true });

dbUser.connect('mongodb://userdb:userdb123@ds113871.mlab.com:13871/cartwp',{ useNewUrlParser: true });
//
var productSchema = new dbProduct.Schema({
        name: String,
        price: Number,
        description: String,
        quantity: Number,
        reviews:[{body: String, rating: Number}]
});

var userSchema = new dbUser.Schema({
    name: String,
    email: String,
    pwd: String,
    phone: Number,
    address: String,
    balance: Number,
    cart:[{prod:String, quantity: Number, price:Number}]
});

var prods = dbProduct.model('Prods', productSchema);
var user = dbUser.model('Users', userSchema);


//updating json to db
// var allProds = prods(jsonData).save(function(err){
//     try{
//         console.log("stored on db");
//     } catch(err) {
//         console.log(err);
//     }
// });
// for(var i = 0; i < jsonData.users.length; i++) {
//     var allUsers = user(jsonData.users[i]).save(function(err){
//         try{
//             console.log("stored on db");
//         } catch(err) {
//             console.log(err);
//         }
//     });
// }
module.exports = function(app) {

    app.use(bodyParser.urlencoded({extended:false}));

    app.use(bodyParser.json());
    
    app.get('/', function(req, res){
        prods.find({}, function(err, data){
            try {
                // console.log(data);
                res.send(data);
            } catch(err) {

            }
        });
    });
    //test post
    // app.post('/', function(req, res) {
    //     var newProd = prods(req.body).save(function (err, data){
    //         try {
    //             console.log(data);
    //             res.send(data);
    //         } catch(err) {
    //         }
    //     });
    // });
    app.post('/login', function(req, res) {
        console.log(req.body);
        user.findOne({"email": req.body.mail, "pwd": req.body.pwd}, function(err, data) {
            try {
                console.log(data);  
                if(data === null) {
                    return res.send({login:false});
                } else {
                    res.send({login: true});
                }
            } catch(err) {

            }
        })
    });
    app.post('/register', function(req,res){
        user.find({"email":req.body.email}, function(err, data){
            try{
                console.log(data.length);
                if(data.length === 0) {
                    user(req.body).save(function(err){
                        try{
                            console.log("stored on db");
                            res.send(req.body);
                        } catch(err) {
                            console.log(err);
                        }
                    });
                } else {
                    res.send({err: "Error"})
                }
            } catch(err) {

            }
        });
    });
}
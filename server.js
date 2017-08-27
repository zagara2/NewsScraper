var express = require('express');
var expressHandlebars = require('express-handlebars');
var mongoose = require('mongoose');
var cheerio  = require('cheerio');
var bodyParser = require("body-parser");
var request = require('request');
var app = express();

app.use(express.static(__dirname + "/public"));
mongoose.Promise = Promise;

app.use(bodyParser.urlencoded({
    extended: false 
}));


app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");


var db = process.env.MONGODB_URI || "mongodb://localhost/scraperDB";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
    // Log any errors connecting with mongoose
    if (error) {
        console.log(error);
    }
    // Or log a success message
    else {
        console.log("mongoose connection is successful");
    }
});


var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {

    console.log('http://localhost:' + PORT);
});
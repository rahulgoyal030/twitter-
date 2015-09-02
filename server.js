var express = require('express');
var url = require('url');
var bodyParser = require('body-parser');

var index=  require("./routes/index");   
var login = require("./routes/login");
var app= express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));   // this is used   set statuc files path 

app.set('view engine','ejs');



app.use('/',index);
app.use('/login',login);


app.listen(3000);
console.log("server on ");

var express = require('express');
var url = require('url');
var bodyParser = require('body-parser');


var app= express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine','ejs');



app.get('/',function (req,res) {

  res.render('index');
  console.log(req.url);
  // body...
});



app.listen(3000);
console.log("server on ");

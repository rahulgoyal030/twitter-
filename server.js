var express = require('express');
var url = require('url');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var request = require('request');



// all the routes  js files  
var index = require("./routes/index");   
var login = require("./routes/login");
var signup = require("./routes/signup");
var peopleknow = require("./routes/peopleUknow");
var tweet = require("./routes/tweetSave");
var followThem = require("./routes/followThem");
var timeline = require("./routes/timeline");

var app= express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));   // this is used   set statuc files path 

app.set('view engine','ejs');



app.use('/',index);     // first page open

app.use('/home',login);  // it is calling login check script

app.use('/signup',signup);  // for new user enrty 

app.use('/peopleknow',peopleknow);   // this will show list of people who u may want to follow

app.use('/tweet', tweet);     //  it is   saving tweet to db

app.use('/followThem', followThem);   // load the followers list to db

app.use('/timeline' , timeline);

app.listen(3000);
console.log("server on ");

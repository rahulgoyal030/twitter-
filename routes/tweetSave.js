var express = require('express');
var mongodb = require('mongodb');

var router = express.Router();

router.post('/', function  (req,res) {

	console.log(req.url , req.body);
	
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/twitter+';

	MongoClient.connect( url, function( err, db ){

		if(err)
		{
			 console.log(err);
		}

		//console.log(" connected to the db");

		 var username = req.body.username;

		 var tableName = username+"_tweets";
		 //console.log(tableName , username.length);

		 var date = new Date();   // it wil give the  tweet time
		 var day = date.getDate();     // date of the  between 0-31
		 var milliSec = date.getTime();   // give milliSecond time

		 console.log(" time is  ",milliSec , " "  , day , date);
		 var tweetTime = Date();
		  //db.createCollection(tableName);

		  var collection = db.collection(tableName);

		  var data = { 'username' : username, 'tweet' : req.body.tweet , 'tweetTime' : tweetTime , 'time' : milliSec };
		  console.log(data);
		  var data
		 	collection.insert( data , function ( err, result){

					if(err)
					{
						console.log(err);
					}
					console.log(" data inserted ");
			        
			      //  res.writeHead(200, { 'Content-Type': 'application/json' }); 
      				res.end(JSON.stringify("tweet is saved"));
			       
			 });




	});



	
})

module.exports= router;
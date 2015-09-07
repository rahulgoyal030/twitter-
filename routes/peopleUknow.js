var express = require('express');
var mongodb= require('mongodb');
var request = require('request')

var router = express.Router();

router.get('/', function  (req,res) {

	console.log(req.url);

	var MongoClient= mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/twitter+';

	
	// request('http://www.google.com', function (error, response, body) {
 //  		if (!error && response.statusCode == 200) {
 //   		 console.log(body) // Print the google web page.
 // 		 }
	// 	})

	MongoClient.connect(url , function (err, db){
 		
 		if(err)
 		{
 			console.log(err);
 		}

 		var collection = db.collection('users');

 		collection.find().limit(3).toArray( function(err , result){

 			if(err)
 			{
 				console.log(err);
 			}

 			// console.log(result);

 			//res.contentType('json');
  			//res.render('/js/peopleknow.js', {name : result });

  			res.writeHead(200, { 'Content-Type': 'application/json' }); 
      		res.end(JSON.stringify(result));

 		})

	})
	
})

module.exports= router; 
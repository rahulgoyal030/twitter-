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

		console.log(" connected to the server");

		 var username = req.body.username;

		 var tableName = username+"_tweets";
		 console.log(tableName , username.length);

		// var collecction = db.collecction('')




	});



	
})

module.exports= router;
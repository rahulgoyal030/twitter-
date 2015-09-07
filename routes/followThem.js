var express = require('express');
var mongodb = require('mongodb');

var router = express.Router();

router.post('/', function  (req,res) {

	console.log(req.body);
	
	var MongoClient =  mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/twitter+';

	MongoClient.connect( url , function( err, db){

		 if(err)
		 {
		 	console.log(err);
		 }

		 var personName = req.body.person;

		 var account = req.body.username;    // active user account username
		 var tableName = account+ "_following";
		 console.log(tableName);
		 
		 var collection = db.collection(tableName);
         
         

		 var data = { "username" : personName };
		 
		 collection.insert(data , function(err, result){

		 	if(err)
		 	{
		 		console.log(err);
		 	}

		 	 console.log(" u are now _following him ");

		 	 res.end(" u know follow him ");

		 })

	})
	
});

module.exports= router;
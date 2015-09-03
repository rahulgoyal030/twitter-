var express = require('express');
var mongodb = require('mongodb');

var router = express.Router();

router.post('/', function  (req,res) {

	console.log(req.url , " "  , req.body);
	
	var MongoClient= mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/twitter+';

	MongoClient.connect(url, function (err,db){

		if(err)
		{
			console.log(" problem in connecting to the db in signup");
		}

		console.log("connected to the server");

		var username = req.body.username;		
		var password = 	req.body.password;	


		var collection = db.collection('users');

		collection.find({ "username" : username , "password" : password }).toArray(function(err , result){

			 if(result.length>0)
			 {
			 	 console.log("username exist ");
			 	 
			 	 res.render('home' , { "username" : username  });

			 }
			 else{

			 	console.log(" username not exist");
			 	res.send(" try another username");
			 }

		})

				
		//db.close();


	})
	
	
})

module.exports= router;
var express = require('express');

var mongodb = require('mongodb');

var MongoClient= mongodb.MongoClient;
var url = 'mongodb://localhost:27017/twitter+';

var router = express.Router();

router.post('/', function  (req,res) {

	//console.log(req.url , " "  , req.body.username1 , req.body.email , req.body.pass);

	var MongoClient= mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/twitter+';

	MongoClient.connect(url, function (err,db){

		if(err)
		{
			console.log(" problem in connecting to the db in signup");
		}

		console.log("connected to the server");

		var username = req.body.username1;
		var email = req.body.email;
		var password = 	req.body.pass;	

		var data = { 'username' : username  , 'email' : email , 'password' : password }

		var collection = db.collection('users');

		collection.insert(data , function ( err, result){

				if(err)
				{
					console.log(err);
				}
				console.log(" data inserted ");
		})

		//db.close();


	})
	
	res.send("okk");
})

module.exports= router;
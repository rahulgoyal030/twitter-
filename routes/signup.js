var express = require('express');

var mongodb = require('mongodb');

var MongoClient= mongodb.MongoClient;
var url = 'mongodb://localhost:27017/test1';

var router = express.Router();

router.post('/', function  (req,res) {

	console.log(req.url , " "  , req.body);
	var MongoClient= mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/test1';

	MongoClient.connect(url, function (err,db){

		if(err)
		{
			console.log(" problem in connecting to the db in signup");
		}

		console.log("connected to the server");



	})
	
	res.send("okk");
})

module.exports= router;
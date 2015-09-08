var express = require('express');
var mongodb = require('mongodb');

var router = express.Router();

router.get('/' , function  (req, res) {
	  
	  console.log(" query " , req.query);
	  console.log("in the timeline script ");
	  
	  var MongoClient = mongodb.MongoClient;
	  var url ='mongodb://localhost:27017/twitter+';

	  

	  MongoClient.connect( url , function( err, db){

	  			if(err)
	  				console.log(err);

	  			console.log(" in the db");

	  			var username = req.query.username;
	  			var tweetTable = username + "_tweets";

	  			var collection = db.collection(tweetTable);
	  			var abc = [];
	  			console.log(tweetTable);
	  		
	  			 var cursor = collection.find({}, { tweet : 1});         // result me answer aa rha hai

	  			 var docs = cursor.toArray();

	  			 
	  			 {
	  			 	  console.log(docs ," ds" );
	  			 }

	  				// abc.push.apply(abc, result);

	  				// console.log(docs[3] + " d ");
	  			
	  				 collection.find({}, { tweet : 1}).toArray(function(err , result){
	  				 	console.log(" result  " , result);
	  				 })

	  });
});



module.exports = router;
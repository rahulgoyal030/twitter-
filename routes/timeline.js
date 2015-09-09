var express = require('express');
var mongodb = require('mongodb');

var router = express.Router();
var listTweets = [];
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
	  			//console.log(tweetTable);
	  		
	  			 // var cursor = collection.find({}, { tweet : 1});         // result me answer aa rha hai

	  			 // var docs = cursor.toArray();    		// was trying to implement cursor

	  			 
	  			 // {
	  			 // 	  console.log(docs ," ds" );
	  			 // }

	  				// abc.push.apply(abc, result);

	  				// console.log(docs[3] + " d ");

	  				 
	  			
	  				 collection.find({}, { tweet : 1}).toArray(function(err , result){
	  				 	
	  				 	//console.log(" result  " , result);
	  				 	 listTweets.push.apply(listTweets , result);

	  				 	// console.log(" a "  , listTweets );



	  				 });

	  				 var followingPeople = [];
	  				 var followerTable = username + "_following"; 
	  				 console.log(followerTable);
	  				 var collection1 = db.collection(followerTable);        // list of following people table

	  				collection1.find({}).toArray(function(err,result){

	  				 for(x in result)
	  				 {

	  					//console.log( "following " ,result[x].username);

	  					var name = result[x].username;

	  					var tweetTable1 = result[x].username + "_tweets";       // list of alll followingPeople tweets

	  					//console.log(tweetTable1);
	  					
	  					var collection2 = db.collection(tweetTable1);

	  					collection2.find().toArray(function(err, result){

	  						listTweets.push.apply(listTweets , result);

	  				 	 	//console.log(" followin peope tweets "  ); 

	  					});

	  					//console.log(listTweets);
	  				 }	
	  				 	   

	  				 	   

	  				 			 console.log(" final result " , listTweets , name);
	  				});


	  				 

	  				 

	  });


});



module.exports = router;
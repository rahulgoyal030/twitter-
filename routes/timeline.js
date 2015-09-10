var express = require('express');
var mongodb = require('mongodb');

var router = express.Router();

router.get('/' , function  (req, res) {
	  
	  console.log(" query " , req.query);
	  console.log("in the timeline script ");
	  
	  var MongoClient = mongodb.MongoClient;
	  var url ='mongodb://localhost:27017/twitter+';

	  var listTweets = []; 

	  MongoClient.connect( url , function( err, db){

	  			if(err)
	  				console.log(err);

	  			console.log(" in the db");

	  			var username = req.query.username;
	  			var tweetTable = username + "_tweets";

	  			var collection = db.collection(tweetTable);
	  			var abc = [];
	  			

	  				
	  			
	  				 collection.find({}).limit(5).sort({ _id : -1 }).toArray(function(err , result){
	  				 	
	  				 	//console.log(" result  " , result);
	  				 	 listTweets.push.apply(listTweets , result, function(){
	  				 	 	  console.log("a"  , listTweets );
	  				 	 });

	  				 	// 



	  				  });

	  				 var followingPeople = [];
	  				 var followerTable = username + "_following"; 
	  				 console.log(followerTable);
	  				 var collection1 = db.collection(followerTable);        // list of following people table

	  				collection1.find({}).toArray(function(err,result){
	  					console.log(result);
	  					var length = result.length;
	  				 for(x in result)
	  				 {

	  					//console.log( "following " ,result[x].username);

	  					var name = result[x].username;

	  					var tweetTable1 = result[x].username + "_tweets";       // list of alll followingPeople tweets

	  					console.log(tweetTable1);
	  					
	  					var collection2 = db.collection(tweetTable1);

	  					 var count = 1;
	  					collection2.find().limit(5).sort({ _id : -1}).toArray(function(err, result){

	  						listTweets.push.apply(listTweets , result);

	  						count++;

	  						if(count==length)
	  						{
	  							console.log(" now u can send ");
	  							res.end(JSON.stringify(listTweets));
	  						}

	  				 	 	//console.log(" followin peope tweets ", listTweets  ); 
	  				 	 	
	  				 	 	//
	  					});

	  					//console.log(x , " " , length);
	  					//console.log(listTweets);,
	  					
	  				 }	
	  				 	   

	  				   

	  				 		//	console.log(" final result " , listTweets , name);   working fine

	  				 		
	  				});

	  				 
	  				 

	  				    

	  });




});



module.exports = router;
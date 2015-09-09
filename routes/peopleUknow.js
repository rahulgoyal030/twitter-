var express = require('express');
var mongodb= require('mongodb');
var request = require('request')

var router = express.Router();
							
router.post('/', function  (req,res) {

	console.log(req.url);

	var MongoClient= mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/twitter+';

	
	 // request('http://www.google.com', function (error, response, body) {
     //		if (!error && response.statusCode == 200) {
    //   		 console.log(body) // Print the google web page.
    // 		 }
	// 	})
	
	

	MongoClient.connect(url , function (err, db){
 		
 		if(err)
 		{
 			console.log(err);
 		}

 		var username = req.body.username;
		console.log(username);
    
    	var tableName = username+ "_following";   // table to check whom he already follow
    
 		var collectionCheck = db.collection(tableName);

 		var usersList = [];
 		       
 		      collectionCheck.find().toArray(function(err, result){

 		      	    // usersList.push.apply(usersList , result);
 		      	     //console.log( " usersList " ,usersList);

 		      	     for(x in result){
 		      	     	   usersList.push(result[x].username);
 		      	     	 //  console.log( " usersList " ,usersList);	
 		      	     }

 		      	     var collection = db.collection('users');
 					 collection.find({"username" : { $nin : usersList }}).limit(5).toArray( function(err , result){

 						if(err)
 							{
 								console.log(err);
 							}

 								// console.log(result);

 								//res.contentType('json');
  								//res.render('/js/peopleknow.js', {name : result });

  						console.log( " in tha  table" , result , usersList);

  						res.writeHead(200, { 'Content-Type': 'application/json' }); 
      					res.end(JSON.stringify(result));

 					});

 		      });   
 		   


	});
	
})

module.exports= router; 
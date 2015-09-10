$(document).ready(function  () {

		//console.log("tweet script ");
        
        $("#tweetButton").click(function(e){

        	e.preventDefault();

        	var username = $("#myName").text();    // getting the username value for the db entry
        	var tweetvalue = $("#tweetValue").val();

        	console.log(tweetvalue , " " , username.length);   
        	console.log(" it is tweeting ");
        		
        		$.post('/tweet',
        				{ "tweet" : tweetvalue , "username" : username } ,
        				function( data , status){

        					console.log(data);
        					$("#tweetValue").val("");



        	});

        });
	
});
$(document).ready( function  () {

	var username = $("#myName").text(); 

	console.log("timeline is loading ");
	$.get('/timeline', { "username" : username } , function(data , status){

				var value = JSON.parse(data);
				value.sort(function(a, b) {
    				if (a.time > b.time) {
 					   return 1;
 					}
 					if (a.time < b.time) {
  					  return -1;
					}
  						// a must be equal to b
  						return 0;
				});

				// for(x in value)
				// console.log(value[x].tweet);

				for(x in value)
				{

					console.log(value[x].tweet);
					var name = "<label  class='tweetUsername' >" + value[x].username + "</label><br>";
					var tweet= "<label>" + value[x].tweet + "</label><br><br>";
					
					$("#news").append(name);
					$("#news").append(tweet);

				}




	});
});
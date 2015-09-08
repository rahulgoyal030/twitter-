$(document).ready( function  () {

	var username = $("#myName").text(); 

	console.log("timeline is loading ");
	$.get('/timeline', { "username" : username } , function(status , data){



	});
});
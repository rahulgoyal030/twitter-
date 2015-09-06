$(document).ready(function  () {
	
	console.log("hello");
    $.get("/peopleknow", function(data , status){

    		//var result = JSON.parse(data);

    		for(x in data)
    		{
    			console.log(data[x].username);

    			var person= '<p >' +  data[x].username + "</p>";
    			var followButton = '<button  > follow </button>';
    			
    			$("#peopleList").after(followButton).after(person);


    				

    		}	

    })

})
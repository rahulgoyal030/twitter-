

$(document).ready(function  () {
	


	console.log("hello");
	var username = $("#myName").text(); 

    $.post("/peopleknow",{"username" : username } ,function(data , status){

    		//var result = JSON.parse(data);

    		for(x in data)
    		{
    			console.log(data[x].username);

    			var person= '<label>'+ data[x].username+"</label><br>";
    			var followButton ='<button type="button"  class="myButton"   value ="' + data[x].username  + '">follow </button><br>';
    			
    			//console.log(person.length);
    			$("#peopleList").append(person);

    			$("#peopleList").append(followButton);    // correcting this for right value


    				

    		}	

    });


    $("#peopleList").on('click', ".myButton", function(){

    	console.log(" in the event  value of tweet button  ");
    	
    	var follow = $(this).val();
    	console.log(follow, follow.length);
    	
    	var username = $("#myName").text();

    	$.post("/followThem",{ "person" : follow , "username" : username } , function(data , status ){

    			console.log(data);
    	})

    });

   
    
});


$(document).ready(function  () {
	


	console.log("hello");
    $.get("/peopleknow", function(data , status){

    		//var result = JSON.parse(data);

    		for(x in data)
    		{
    			console.log(data[x].username);

    			var person= '<p >' +  data[x].username + "</p>";
    			var followButton ='<button type="button"  class="myButton"   value ="' + data[x].username  + ' ">follow </button>';
    			

    			$("#peopleList").append(person);

    			$("#peopleList").append(followButton);    // correcting this for right value


    				

    		}	

    });


    $(".people p").click(function(e){

    	e.preventDefault();
           
    	 console.log(" IN THIS  code")
    	 var value=  $(this).html();
    	 console.log(" button value is "  , value);
    });

    $(".myButton").click(function(){

    	console.log(" it is responding");
    })

    
})
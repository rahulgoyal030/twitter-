$(document).ready(function  () {


	$("#username1").keyup(function(){

		var username = $("#username1").val();
		 console.log(username + " hello  ");

    $.get("getuser.php", function(data, status){
         console.log(data);
          var value= JSON.parse(data) ;

      // console.log(typeof value);
	//console.log(value.records[0].name);

          for(x in value.records ) 
          {
          	 if(value.records[x].name==username)
          	 {
          	 	console.log("exist " , value.records[x].name , " " , x);
                $(username1).after("<p>username exist</p>")
          	 }
          	 else
          	 {
          	 	console.log("noo " , x  , username);
			    $("p").remove();
			 }		
         // 	console.log(x);

          }   

    });
});


});
$(document).ready(function  () {

	$("#signUp").click(function  () {
    
       var diolog =  	document.getElementById('signDiolog');

    	 diolog.showModal();
       
       
       console.log("hello");
       
		
		// body...
	});


   $('#close').click(function  () {
    
    var diolog = document.getElementById('signDiolog');

    diolog.close();
    console.log("hide");

    // body...
  });
	
});


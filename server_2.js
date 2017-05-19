

var myFunction_A_callback = require('./mymodule'); 


var myFunction_A = function ( ) { 
	console.log("Welcome to FUNCTION_A the nodeJS world! "); 
	// call A call_back 
	myFunction_A_callback(); 
	// call B 
	 myFunction_B(); 

}



var myFunction_B = function ( ) { 

	console.log("Welcome to FUNCTION_B the nodeJS world! "); 

	myFunction_C(); 

}
var myFunction_C = function ( ) { 

	console.log("Welcome to FUNCTION_C the nodeJS world! "); 

}




// call the functions

myFunction_A(); 


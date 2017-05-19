



var myFunction_A = function ( ) { 
	console.log("Welcome to FUNCTION_A the nodeJS world! "); 
	// call A call_back 
	myFunction_A_callback(); 
	// call B 
	 myFunction_B(); 

}


var myFunction_A_callback = function () { 


	var A_callback_Value = 10; 
	setTimeout (function () { 
		console.log("I am  the callback from A"); 
		console.log(" The  outer scope value is A_callback_Value %d", A_callback_Value); 
	}, 500); 
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


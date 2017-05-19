



// define the first  module 
//


 var myFunction_A_callback = function () { 


	var A_callback_Value = 10; 
	setTimeout (function () { 
		console.log("I am  the callback from A"); 
		console.log(" The  outer scope value is A_callback_Value %d", A_callback_Value); 
	}, 500); 
}


module.exports = myFunction_A_callback; 



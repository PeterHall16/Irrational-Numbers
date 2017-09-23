

var prompt = require('prompt');
  prompt.start();
  prompt.get(['number'], function (err, result) {

  var test = result.number
  var val = 0
  console.log(test);

end:
	if (val !== 1) { 
	 if (test === 1) {
	 	console.log("prime")
	 } else if (test === 2) {
	 		console.log("prime")
	 	} else {
 			for(var x = 2; x < test; x++) {
      			if (test % x === 0) {
      				val = 1
        			console.log(x + " composite")
        			break end;
      			} else {
      				console.log(x + "prime")
      			}
    		}
	 	}
	}
});

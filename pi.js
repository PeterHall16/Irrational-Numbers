var prompt = require('prompt');
  prompt.start();
  prompt.get(['termination'], function (err, result) {

    console.log('input received');
		var pi = 0;
			n = 1;
			limit = result.termination;

		for (i = 0; i <= limit; i++) {
			pi = pi + (4 / n) - (4 / (n + 2));
			n = n + 4;
			console.log(pi);
		}
});
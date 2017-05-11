var prompt = require('prompt');
  prompt.start();
  prompt.get(['limit'], function (err, result) {

    console.log('input received');
    var sequence = [];
		limit = result.limit;

	sequence[0] = 0;
	sequence[1] = 1;

	for (i = 2; i <= limit; i++) {
		sequence[i] = sequence[i-1] + sequence[i -2];
		console.log(sequence[i]);
	}

	var golden = sequence[limit] / sequence[limit - 1];
		console.log("Golden ratio:" + golden);
  });


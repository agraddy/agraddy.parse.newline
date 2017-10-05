var fs = require('fs');

var mod = {};

mod = function(input) {
	var data;
	var output;

	if(/\n/.test(input)) {
		data = input;
	} else {
		data = fs.readFileSync(input).toString();
	}

	output = data.split(/\r?\n/);

	// Remove last newline if it will create an empty element
	if(output.slice(-1) == '') {
		output = output.slice(0, -1);
	}

	return output;
}

module.exports = mod;

function iter(output, sep, val, key) {
	var k, pfx = key ? (key + sep) : key;

	if (val == null) {
	} else if (Array.isArray(val)) {
		for (k=0; k < val.length; k++) {
			iter(output, sep, val[k], pfx + k);
		}
	} else if (typeof val == 'object') {
		for (k in val) {
			iter(output, sep, val[k], pfx + k);
		}
	} else {
		output[key] = val;
	}
}

export function flattie(input, sep) {
	var output = {};
	if (typeof input == 'object') iter(output, sep || '_', input, '');
	return output;
}

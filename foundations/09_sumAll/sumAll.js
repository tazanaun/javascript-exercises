const sumAll = function (a, b) {
	let sum = 0;

	if (a < 0 || b < 0) return "ERROR";
	if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
	smallNum = Math.min(a, b);
	bigNum = Math.max(a, b);
	for (let i = smallNum; i <= bigNum; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;

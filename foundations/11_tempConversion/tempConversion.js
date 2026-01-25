const convertToCelsius = function (ferh) {
	let num = (5 / 9) * (ferh - 32);
	return +num.toFixed(1);
};

const convertToFahrenheit = function (celc) {
	let num = (9 / 5) * celc + 32;
	return +num.toFixed(1);
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};

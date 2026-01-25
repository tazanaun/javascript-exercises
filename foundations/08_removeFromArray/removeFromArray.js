const removeFromArray = function (arr, ...args) {
	for (const num of args) {
		arr = arr.filter((elem) => {
			return elem !== num;
		});
	}

	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

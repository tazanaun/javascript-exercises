const palindromes = function (str) {
	strArr = str.toLowerCase().split("");
	punctuationArr = [",", ".", "?", "!", ";", ":", "'", '"', " "];
	filteredArr = strArr.filter((char) => !punctuationArr.includes(char));
	console.log(filteredArr);
	len = filteredArr.length;
	console.log(len);
	for (let i = 0; i < len; i++) {
		console.log(filteredArr[i]);
		console.log(filteredArr[len - i]);
		if (filteredArr[i] != filteredArr[len - i - 1]) {
			return false;
		}
	}
	return true;
};
console.log(palindromes("Animal loots foliated detail of stool lamina."));
// Do not edit below this line
module.exports = palindromes;

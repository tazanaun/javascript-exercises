const fibonacci = function (num) {
	let currNum = 0;
	let prevNum = 1;
	let prevPrevNum = 1;
	if (+num < 0) return "OOPS";
	if (+num == 0) return 0;
	if (+num == 1) return 1;
	if (+num == 2) return 1;
	for (let i = 2; i < num; i++) {
		currNum = prevNum + prevPrevNum;
		prevPrevNum = prevNum;
		prevNum = currNum;
	}
	return currNum;
};
console.log(fibonacci(2));
// Do not edit below this line
module.exports = fibonacci;

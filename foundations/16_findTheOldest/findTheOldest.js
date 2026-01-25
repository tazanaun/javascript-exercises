const findTheOldest = function (people) {
	people.sort((a, b) => {
		if (a.yearOfDeath === undefined) a.yearOfDeath = 2026;
		if (b.yearOfDeath === undefined) b.yearOfDeath = 2026;
		aYears = a.yearOfDeath - a.yearOfBirth;
		bYears = b.yearOfDeath - b.yearOfBirth;
		return aYears - bYears;
	});
	return people[people.length - 1];
};
const people = [
	{
		name: "Carly",
		yearOfBirth: 1942,
		yearOfDeath: 1970,
	},
	{
		name: "Ray",
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
	{
		name: "Jane",
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
];
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;

"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let D = b ** 2 - 4 * a * c;
	if (D > 0) {
		let root_1 = (-b + Math.sqrt(D)) / (2 * a);
		let root_2 = (-b - Math.sqrt(D)) / (2 * a);
		arr.push(root_1, root_2);
	} else if (D === 0) {
		let root = -b / (2 * a)
		array.push(root);
	}
	return arr;
};


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = percent / 100 / 12;
	let S = amount - contribution;
	let n = countMonths;
	let payment = S * (P + (P / (((1 + P) ** n) - 1)));
	let result = payment * n;
	return result;
}

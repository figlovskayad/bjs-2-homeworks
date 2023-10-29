function getArrayParams(...args) {
	let min = args[0];
	let max = args[0];
	let sum = 0;

	for (let i = 0; i < args.length; i++) {
		sum += args[i];
		if (args[i] < min) {
			min = args[i];
		}
		if (args[i] > max) {
			max = args[i];
		}
	}

	const average = sum / args.length;

	return {
		min: min,
		max: max,
		avg: Number(average.toFixed(2))
	};
}


function sumElementsWorker(...arr) {
	return arr.reduce(function(prev, cur) {
		return prev + cur
	}, 0);
};

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	let max = arr[0];
	let min = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}

	return max - min;

}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	if (countEvenElement === 0) return 0;

	return Number((sumEvenElement / countEvenElement).toFixed(2));

}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result
		};
	}
	return maxWorkerResult;

}

const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];

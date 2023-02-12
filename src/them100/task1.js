export const them100_1 = () => {
	function getSmth(num) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(num * num), 4000);
		})
	};

	//============them100_1=========================
	async function getSummThrice(num1, num2, num3) {
		let res1 = await getSmth(num1);
		let res2 = await getSmth(num2);
		let res3 = await getSmth(num3);
		console.log(res1 + res2 + res3);
	};

	getSummThrice(2, 3, 4);

	async function seriesCalc(numStart) {
		let res1 = await getSmth(numStart);
		let res2 = await getSmth(res1);
		let res3 = await getSmth(res2);
		console.log(res1, res2, res3);
	};

	seriesCalc(10);
	seriesCalc(22);

	async function getSummNumbersofArr(arr) {
		let summ = 0;
		for (let num of arr) {
			summ += await getSmth(num);
		};
		console.log(summ);
	};

	getSummNumbersofArr([1, 2, 3, 4, 5]);
};




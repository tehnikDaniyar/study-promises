export const them99_1 = () => {
	function getSmth(num) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(num * num), 3000);
		});
	};

	function func() {
		getSmth(2).then(result => console.log(result));
	};

	function getSumm(num1, num2) {
		getSmth(num1).then(res1 => getSmth(num2).then(res2 => console.log(res1 + res2)));
	};

	//===========promises hell=========================================================
	function getSummThrice(num1, num2, num3) {
		getSmth(num1).then(res1 => getSmth(num2).then(res2 => getSmth(num3).then(res3 => console.log(res1 + res2 + res3))));
	};

	function seriesCalc(numStart) {
		getSmth(numStart).then(res1 => getSmth(res1).then(res2 => getSmth(res2).then(res3 => console.log(res1, res2, res3))))
	}

	let arr = [getSmth(2), getSmth(3), getSmth(4)];
	Promise.all(arr).then(res => console.log(res[0] + res[1] + res[2]));



	// func();
	// getSumm(2, 3);
	// getSummThrice(2, 3, 4);
	seriesCalc(10);






};
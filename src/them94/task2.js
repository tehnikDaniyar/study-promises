export const them94_2 = () => {
	let promise = new Promise(function (resolve, reject) {
		let isError = false;
		if (!isError) {
			resolve('all right');
		} else {
			reject('all bad');
		}
	});


	promise.then(function (result) {
		console.log(result);
	}, function (error) {
		console.log(error);
	});

	let generatorNumbers = new Promise(function (resolve, reject) {
		setInterval(() => {
			let num = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
			if (num !== 0) {
				resolve(1 / num);
			} else {
				reject('error, divide on zero is  impossible')
			}
		}, 3000);
	});

	generatorNumbers.then((resolve) => {
		console.log(resolve);
	}, (reject) => {
		console.log(reject);
	});
} 
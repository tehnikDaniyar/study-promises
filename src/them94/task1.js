export const them94_1 = () => {
	let promise = new Promise(function (resolve) {
		return setTimeout(() => {
			resolve("result");
		}, 10000);
	});

	promise.then((resolve) => {
		console.log(resolve);
	})
};
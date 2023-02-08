export const them94_1 = () => {
	let promise = new Promise(function (resolve) {
		return setTimeout(() => {
			resolve("result");
		}, 0);
	});

	promise.then((resolve) => {
		console.log(resolve);
	})
};
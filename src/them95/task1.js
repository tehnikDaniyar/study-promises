export const them95_1 = () => {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("message");
		}, 3000)
	});

	promise.then(
		(resolve, reject) => {
			return resolve + '!';
		}
	).then(
		(result) => {
			return result + '###';
		}
	).then(
		(result) => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(result + 'A');
				}, 3000);
			});
		}
	).then(
		(result) => {
			console.log(result);
		}
	);
};
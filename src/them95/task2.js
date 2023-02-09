export const them95_2 = () => {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (3 > 5) {
				resolve('ok');
			} else {
				reject('error');

			};
		}, 3000)
	});


	promise
		.then(
			(result) => {
				return result + '1';
			}
		).then(
			(result) => {
				console.log(result + '2')
			}
		).catch(
			(error) => {
				console.log(error);
			}
		);
};


export const them95_3 = () => {
	let promise = new Promise((resolve) => {
		resolve(3 + 4);
	});

	promise
		.then(
			(result) => {
				if (result === 9) {
					return (result);
				} else {
					throw new Error(result);
				}
			}
		).catch(
			(result) => {
				if (result + 2 == 9) {
					return result;
				} else {
					throw new Error(result);
				}
			}
		).then(
			(result) => {
				if (result === 9) {
					console.log('ok!!!!');
				} else {
					console.log('error');
				}
			}
		)
};
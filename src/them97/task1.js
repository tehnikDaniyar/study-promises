export const them97_1 = () => {
	function func(num) {
		if (num > 0) {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(num * num);
				}, 3000);
			})
		} else if (num === 0) {
			return Promise.resolve(0);
		} else {
			return Promise.reject(num);
		}
	};

	func(-3)
		.then(
			result => console.log(result)
		).catch(
			error => error ** 2
		).then(
			result => console.log(result)
		);

};
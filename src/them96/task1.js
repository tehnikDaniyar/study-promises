export const them96_1 = () => {

	function getDelay(min, max) {
		return Math.round(Math.random() * (max - min + 1) + min)
	};

	let promises = [];

	for (let i = 0; i < 10; i++) {
		promises.push(new Promise((resolve) => {
			let delay = getDelay(1, 10);
			setTimeout(() => {
				resolve(`${delay}`);
			}, delay * 1000);
		}))
	};

	Promise.all(promises).then((result) => { console.log(result); })
};
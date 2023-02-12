export const them100_2 = () => {
	const checkNum = (num => new Promise((res, rej) => num > 0 ? res(num ** 2) : rej(`${num} is less than null`)));

	async function getRes(num) {
		try {
			let res = await checkNum(num);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	getRes(10);
	getRes(-4);
};
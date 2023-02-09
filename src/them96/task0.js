export const them96_0 = () => {

	let promises = [
		new Promise((resolve, regect) => { setTimeout(() => { resolve('1') }, 2000) }),
		new Promise((resolve, regect) => { setTimeout(() => { regect('2') }, 9000) }),
		new Promise((resolve, regect) => { setTimeout(() => { resolve('3') }, 4000) }),
	];

	Promise.all(promises).then((res) => { console.log(res) }).catch((error) => console.log(error));
	Promise.race(promises).then((res) => { console.log(res) });
}
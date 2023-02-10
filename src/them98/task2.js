export const them98_2 = () => {
	let arrPaths = [
		"/src/img/avatarBarber.png",
		"/src/img/avatarBoy.png",
		"/src/img/avatarGirl.png",
		"/src/img/avatarMan.png"
	]

	function loadImg(path) {
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = path;
			img.addEventListener('load', () => resolve(img));
			img.addEventListener('error', () => reject(`error load image from ${path}`));
		});
	};

	let promises = [];
	arrPaths.forEach(path => promises.push(loadImg(path)));

	Promise.all(promises)
		.then(
			(images) => images.forEach(img => document.body.append(img))
		)
		.catch(
			(error) => console.log(error)
		)
};


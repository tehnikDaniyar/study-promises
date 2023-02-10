export const them98_1 = () => {
	function loadImg(path) {
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = path;
			img.addEventListener('load', () => resolve(img));
			img.addEventListener('error', () => reject(`load img at ${path} error`))
		});
	};

	loadImg("/src/img/avatarGirl.png")
		.then(
			img => document.body.prepend(img)
		).catch(
			error => console.log(error)
		);

}
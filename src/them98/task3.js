export const them98_3 = () => {
	new Promise((resolve, reject) => {
		window.addEventListener('DOMContentLoaded', () => resolve('DOM loaded'));
	})
		.then(
			message => console.log(message)
		).catch(
			error => console.log(error)
		)
};
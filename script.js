import { them94_1 } from "./src/them94/task1.js";
import { them94_2 } from "./src/them94/task2.js";
import { them95_1 } from "./src/them95/task1.js";

let promise = new Promise((resolve) => {
	//======them94_1==============
	setTimeout(() => {
		them94_1();
		resolve()
	}, 5000);
})
	.then(
		() => {
			return new Promise((resolve) => {
				//======them94_2==========
				them94_2();
				resolve();
			});
		}
	).then(
		() => {
			return new Promise((resolve) => {
				//===them95_1========
				them95_1();
				resolve();
			})
		}
	).then(
		() => {
		}
	)

let button = document.querySelector(`.header__burger`);
let menu = document.querySelector(`.adaptive`);

console.log(button);

button.addEventListener(`click`, function() {
	button.classList.toggle(`_active`);
	menu.classList.toggle(`_active`);
});

let subDropper = document.querySelector(`.sub_dropper`);

subDropper.onclick = function() {
	subDropper.classList.toggle(`_active`);
}
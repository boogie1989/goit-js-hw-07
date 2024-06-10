function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const inputElem = document.querySelector('input[type="number"]');
const boxElem = document.querySelector("#boxes");
const createBtnElem = document.querySelector("button[data-create]");
const destroyBtnElem = document.querySelector("button[data-destroy]");

createBtnElem.style.backgroundColor = "#4e75ff";
destroyBtnElem.style.backgroundColor = "#ff4e4e";

createBtnElem.addEventListener("click", () => {
	const inputValue = parseInt(inputElem.value);
	if (inputValue < 1 || inputValue > 100) return;
	const fragment = document.createDocumentFragment();
	for (let i = 0; i < inputValue; i++) {
		const box = document.createElement("div");
		const size = 30 + i * 10;
		box.style.width = size + "px";
		box.style.height = size + "px";
		box.style.backgroundColor = getRandomHexColor();
		fragment.append(box);
	}
	boxElem.append(fragment);
	inputElem.value = "";
});

destroyBtnElem.addEventListener("click", () => {
	boxElem.innerHTML = "";
});

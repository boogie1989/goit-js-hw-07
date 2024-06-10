function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const spanElem = document.querySelector(".color");
const btnElem = document.querySelector(".change-color");
const bodyElem = document.querySelector("body");

btnElem.addEventListener("click", (event) => {
	event.preventDefault();
	const newColor = getRandomHexColor();
	bodyElem.style.backgroundColor = newColor;
	spanElem.textContent = newColor;
});

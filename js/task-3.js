const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

inputElem.addEventListener("input", (event) => {
	const nameInput = event.target.value.trim();
	outputElem.textContent = nameInput === "" || nameInput.includes(" ") ? "Anonymous" : nameInput;
});

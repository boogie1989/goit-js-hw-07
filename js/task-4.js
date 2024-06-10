document.querySelector(".login-form").addEventListener("submit", function (event) {
	event.preventDefault();

	const form = event.target;
	const user = {
		email: form.elements.email.value.trim(),
		password: form.elements.password.value.trim(),
	};

	if (!user.email || !user.password) {
		alert("All form fields must be filled in");
	} else {
		console.log(user);
		form.reset();
	}
});

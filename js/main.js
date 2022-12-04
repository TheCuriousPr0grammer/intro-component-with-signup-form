// TODO: Improvement - use LocalStorage to preserve values after the user submitted the form and the validation is  false so he will not have to go over again :)

const registrationForm = document.querySelector("#registration-form");
const claimBtn = document.querySelector("#claimBtn");
const errorMessages = document.querySelectorAll(".error_message");
let numberOfInputs = getInputsFromForm().length;
let validationArray = new Array(numberOfInputs).fill(false);

function getInputsFromForm() {
	const inputs = document.querySelectorAll("input");
	return inputs;
}

function validate(inputFromUser, index) {
	if (inputFromUser.type !== "email") {
		if (inputFromUser.value.length < 3) {
			console.log(index);
			console.log("not valid");
			errorMessages[index].classList.remove("inactive");
		} else {
			console.log("valid input");
			// Setting to true
			validationArray[index] = true;
			errorMessages[index].classList.add("inactive");
		}
	}

	if (inputFromUser.type === "email") {
		let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (emailRegex.test(inputFromUser.value)) {
			console.log(index);
			console.log("valid");
			errorMessages[index].classList.add("inactive");
			validationArray[index] = true;
		} else {
			validationArray[index] = false;
			errorMessages[index].classList.remove("inactive");
		}
	}
}

function validateForm(input, index) {
	const inputs = getInputsFromForm();
	inputs.forEach((input, index) => {
		validate(input, index);
	});
}
claimBtn.addEventListener("click", validateForm);
registrationForm.addEventListener("submit", (e) => {
	if (validationArray.includes(false)) {
		e.preventDefault();
	}
});

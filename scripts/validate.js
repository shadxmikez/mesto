
const validSetup = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	saveButtonSelector: '.popup__submit',
	inactiveButtonClass: 'popup__submit_disabled',
	inputErrorClass: 'popup__input-error_active'
};

enableValidation(validSetup);

function enableValidation(validSetup) {
	const formList = document.querySelectorAll(validSetup.formSelector);
	[...formList].forEach(function (formElement) {
		setEventListener(formElement, validSetup);
	});
}

function setEventListener(formElement, validSetup) {
	const inputList = formElement.querySelectorAll(validSetup.inputSelector);
	const submitButtonElement = formElement.querySelector(validSetup.saveButtonSelector);
	toggleButtonState(submitButtonElement, formElement.checkValidity());

	formElement.addEventListener('reset', () => {
		disabledButton(submitButtonElement, validSetup);
	});

	[...inputList].forEach(function (inputElement) {
		inputElement.addEventListener('input', function () {
			toggleButtonState(submitButtonElement, formElement.checkValidity());
			checkInputValidity(inputElement, formElement);
		});
	});


	formElement.addEventListener('submit', (evt) => {
		evt.preventDefault();
		if (!formElement.checkValidity()) return;
	});
}

function showError(inputElement, errorElement) {
	inputElement.classList.add(validSetup.inputErrorClass);
	errorElement.textContent = inputElement.validationMessage;
}

function hideError(inputElement, errorElement) {
	inputElement.classList.remove(validSetup.inputErrorClass);
	errorElement.textContent = inputElement.validationMessage;
}


function checkInputValidity(inputElement, formElement) {
	const isInputValid = inputElement.validity.valid;
	const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
	if (!isInputValid) {
		showError(inputElement, errorElement);
	} else {
		hideError(inputElement, errorElement);
	}
}


function disabledButton(buttonElement) {
	buttonElement.disabled = true;
	buttonElement.classList.add(validSetup.inactiveButtonClass);
}

function enabledButton(buttonElement) {
	buttonElement.disabled = false;
	buttonElement.classList.remove(validSetup.inactiveButtonClass);
}


function toggleButtonState(buttonElement, isActive) {
	if (!isActive) {
		disabledButton(buttonElement);
	} else {
		enabledButton(buttonElement);
	}
}


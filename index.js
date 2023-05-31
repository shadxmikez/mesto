
let popup = document.querySelector('.popup');
let popunOpened = document.querySelector('.profile__edit-button');
let popunClose = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_profession');
let formElement = document.querySelector('.popup__form');
let nameTitle = document.querySelector('.profile__title');
let jobSub = document.querySelector('.profile__subtitle');
let popupSubmit = document.querySelector('.popup__submit');

	popunOpened.addEventListener('click', () => {
		popup.classList.add('popup__opened');
	});

	popunClose.addEventListener('click', () => {
		popup.classList.remove('popup__opened');
	});

	document.querySelector('input[name="username"]').defaultValue = 'Жак-Ив Кусто'
	document.querySelector('input[name="description"]').defaultValue = 'Исследователь океана'

	function handleFormSubmit (evt) {
    evt.preventDefault();
		nameTitle.textContent = nameInput.value;
		jobSub.textContent = jobInput.value;
	}
	formElement.addEventListener('submit', handleFormSubmit);
	
	popupSubmit.addEventListener('click', () => {
		popup.classList.remove('popup__opened');
		
	})




	

	



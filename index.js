
let popup = document.querySelector('.popup');
let popunOpened = document.querySelector('.profile__edit-button');
let popunClose = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let formElement = document.querySelector('.popup__form');
let nameTitle = document.querySelector('.profile__title');
let jobSub = document.querySelector('.profile__subtitle');
let popupSubmit = document.querySelector('.popup__submit');

popunOpened.addEventListener('click', () => {
	popup.classList.add('popup_opened');
});

popunClose.addEventListener('click', () => {
	popup.classList.remove('popup_opened');
});

document.querySelector('input[name="username"]').defaultValue = 'Жак-Ив Кусто'
document.querySelector('input[name="description"]').defaultValue = 'Исследователь океана'

function handleFormSubmit(evt) {
	evt.preventDefault();
	nameInput.value = nameTitle.textContent;
	jobInput.value = jobSub.textContent; 
	popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);



 /* nameTitle.textContent = nameInput.value; 
  jobSub.textContent = jobInput.value; */








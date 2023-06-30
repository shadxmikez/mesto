const listCard = document.querySelector('.elements__element');
const popupProfile = document.querySelector('#profile-popup');
const elementsPopup = document.querySelector('#elements-popup');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupElements = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const placeInput = document.querySelector('.popup__input_type_place');
const imageInput = document.querySelector('.popup__input_type_image');
const formProfile = document.forms['profile'];
const formCard = document.forms['mesto'];
const nameTitle = document.querySelector('.profile__title');
const jobSub = document.querySelector('.profile__subtitle');
const captionPopup = document.querySelector('.popup__caption');
const popupItemImg = document.querySelector('.popup__item-img');
const popupImage = document.querySelector('#elements-image');
const popupThemes = document.querySelectorAll('.popup');


function openPopup(popupElement) {
	popupElement.classList.add('popup_opened');
	document.addEventListener('keydown', closeEsc);
}

function closePopup(popupElement) {
	popupElement.classList.remove('popup_opened');
	document.removeEventListener('keydown', closeEsc);
}

function closeEsc(evt) {
	if (evt.key == 'Escape') {
		romovePopup();
	}
}

function romovePopup() {
	const openedPopup = document.querySelector('.popup_opened');
	closePopup(openedPopup);
}

popupThemes.forEach((popupThemesElement) => {
	const popup = popupThemesElement.closest('.popup');
	popupThemesElement.addEventListener('mousedown', (evt) => {
		if (evt.target.classList.contains('popup')) {
			closePopup(popup);
		}
	});
});

buttonOpenPopupProfile.addEventListener('click', () => {
	nameInput.value = nameTitle.textContent;
	jobInput.value = jobSub.textContent;
	openPopup(popupProfile);
});

buttonOpenPopupElements.addEventListener('click', () => {
	openPopup(elementsPopup);
});

closeButtons.forEach(btn => btn.addEventListener('click', () => { closePopup(btn.closest('.popup')); }));

document.querySelector('input[name="username"]').defaultValue = 'Жак-Ив Кусто';
document.querySelector('input[name="description"]').defaultValue = 'Исследователь океана';

function handleFormSubmitProfile(evt) {
	evt.preventDefault();
	nameTitle.textContent = nameInput.value;
	jobSub.textContent = jobInput.value;
	closePopup(popupProfile);
}

formProfile.addEventListener('submit', handleFormSubmitProfile);

const elementsTemplate = document.querySelector('#elements-template').content;
function createCard(name, link) {
	const elementCard = elementsTemplate.querySelector('.elements__box').cloneNode(true);
	const cardImage = elementCard.querySelector('.elements__photo');
	elementCard.querySelector('.elements__title').textContent = name;
	cardImage.src = link;
	cardImage.alt = name;

	elementCard.querySelector('.elements__delete').addEventListener('click', () => {
		elementCard.remove();
	});

	elementCard.querySelector('.elements__like').addEventListener('click', toggleLikeIcon);
	function toggleLikeIcon(evt) {
		evt.target.classList.toggle('elements__like-active');
	}

	elementCard.addEventListener('click', () => {
		openPopup(popupImage);
		captionPopup.textContent = name;
		popupItemImg.src = link;
		popupItemImg.alt = name;
	});

	return elementCard;
}

function addInitialCards() {
	initialCards.forEach((item) => {
		listCard.append(createCard(item.name, item.link));
	});
}
addInitialCards();

function handleFormSubmitAddCard(evt) {
	evt.preventDefault();
	listCard.prepend(createCard(placeInput.value, imageInput.value));
	evt.target.reset();
	closePopup(elementsPopup);
}

formCard.addEventListener('submit', handleFormSubmitAddCard);


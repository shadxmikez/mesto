const listCard = document.querySelector(".elements__element");
const popupProfile = document.querySelector('#profile-popup');
const elementsPopup = document.querySelector('#elements-popup');
const popupList = document.querySelector('.popup');
const popunOpened = document.querySelector('.profile__edit-button');
const elementsOpened = document.querySelector('.profile__add-button');
const popunClose = document.querySelectorAll('.popup__close');
const popupCloseImage = document.querySelector('.popup__close-image');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const placeInput = document.querySelector('.popup__input_type_place');
const imageInput = document.querySelector('.popup__input_type_image');
const formElement = document.querySelector('.popup__form');
const nameTitle = document.querySelector('.profile__title');
const elementsTitle = document.querySelector('.elements__title');
const jobSub = document.querySelector('.profile__subtitle');
const elementsPhoto = document.querySelector('.elements__photo');
const popupSubmit = document.querySelector('.popup__submit');
const closeElement = document.querySelector('.popup__form-card');
const captionPopup = document.querySelector(".popup__caption"); //captionPopupFullImage 
const popupItemImg = document.querySelector(".popup__item-img"); //ImagePopupFullImage
const elementsImage = document.querySelector('#elements-image'); //popupOpenFullImage


function boxModal(evt) {
	if (evt.target.matches('.profile__edit-button')) {
		popupProfile.classList.add('popup_opened');
		nameInput.value = nameTitle.textContent;
		jobInput.value = jobSub.textContent;
	} else if (evt.target.matches('.profile__add-button')) {
		elementsPopup.classList.add('popup_opened');
	}
	else if (evt.target.matches('#profile-popup .popup__close')) {
		popupProfile.classList.remove('popup_opened');
	} else if (evt.target.matches('#elements-popup .popup__close')) {
		elementsPopup.classList.remove('popup_opened');
	} else if (evt.target.matches('#elements-image .popup__close-image')) {
		elementsImage.classList.remove('popup_opened');
	}
}

popunOpened.addEventListener('click', boxModal);
elementsOpened.addEventListener('click', boxModal);
popunClose.forEach(btn => btn.addEventListener('click', boxModal));

document.querySelector('input[name="username"]').defaultValue = 'Жак-Ив Кусто'
document.querySelector('input[name="description"]').defaultValue = 'Исследователь океана'

function handleFormSubmit(evt) {
	evt.preventDefault();
	nameTitle.textContent = nameInput.value;
	jobSub.textContent = jobInput.value;
	popupProfile.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);


const initialCards = [
	{
		name: 'Дельфин',
		link: 'https://lookw.ru/1/605/1402263074-dolphin-30.jpg'
	},
	{
		name: 'Чайка',
		link: 'https://kartinkin.net/uploads/posts/2022-03/1648026426_54-kartinkin-net-p-kartinki-chaek-74.jpg'
	},
	{
		name: 'Акула',
		link: 'https://w.forfun.com/fetch/4d/4df19bb2961141cc6061be6436942452.jpeg'
	},
	{
		name: 'Кит',
		link: 'https://s0.rbk.ru/v6_top_pics/media/img/5/77/756801754484775.jpg'
	},
	{
		name: 'Аватар',
		link: 'https://kadet39.ru/wp-content/uploads/5/e/c/5ec1d3e5e54b8560c3a21e3c0aa24f77.jpeg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];


const elementsTemplate = document.querySelector("#elements-template").content;
function createCard(name, link) {
	const elementCard = elementsTemplate.querySelector('.elements__box').cloneNode(true);
	const elementToCard = elementCard.querySelector('.elements__photo');
	elementCard.querySelector('.elements__title').textContent = name;
	elementToCard.src = link;
	elementToCard.alt = name;

	elementCard.querySelector('.elements__delete').addEventListener('click', () => {
		elementCard.remove();
	});

	elementCard.querySelector('.elements__like').addEventListener('click', toggleLikeIcon);
	function toggleLikeIcon(evt) {
		evt.target.classList.toggle('elements__like-active');
	}

	elementCard.querySelector('.elements__photo').addEventListener('click', () => {
		openPopun(elementsImage);
		captionPopup.textContent = name;
		popupItemImg.src = link;
		popupItemImg.alt = name;
	});

	return elementToCard, elementCard;
}

function addCard() {
	initialCards.forEach((item) => {
		listCard.append(createCard(item.name, item.link));
	});
}
addCard()

function handleFormSubmitAddCard(placeInput, imageInput) {
	listCard.prepend(createCard(placeInput.value, imageInput.value));
}

closeElement.addEventListener('submit', (evt) => {
	evt.preventDefault();
	handleFormSubmitAddCard(placeInput, imageInput);
	closeElement.reset();
	elementsPopup.classList.remove('popup_opened');
});



function openPopun(popupElement) {
	popupElement.classList.add('popup_opened');
}

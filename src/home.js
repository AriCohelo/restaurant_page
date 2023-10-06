import * as home from './data/data-home.json';

const homeText = () => {
	const homeText = document.createElement('div');
	homeText.textContent = home[0].text;
	homeText.setAttribute('id', 'homeText');
	return homeText;
};
const homeImage = () => {
	const homeImageCont = document.createElement('div');
	homeImageCont.setAttribute('id', 'homeImageCont');
	const homeImage = document.createElement('img');
	homeImage.src = home[0].image;
	homeImage.style.height = '350px';
	homeImageCont.appendChild(homeImage);
	return homeImageCont;
};
export { homeText, homeImage };

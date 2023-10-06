import where from './data/data-where.json';

const paragraph = () => {
	const paragraphContainer = document.createElement('div');
	paragraphContainer.textContent = where.paragraph;
	return paragraphContainer;
};
const whereImage = () => {
	const imgContainer = document.createElement('div');
	const image = document.createElement('img');
	image.src = where.map;
	image.style.height = '300px';
	image.setAttribute('id', 'whereImage');
	imgContainer.appendChild(image);
	return imgContainer;
};

const help = () => {
	const helpContainer = document.createElement('div');
	helpContainer.textContent = where.help;
	return helpContainer;
};
export { whereImage, paragraph, help };

import * as menu from './menu';

const createTabs = () => {
	let tabs = [];
	for (let i = 0; i < 3; i++) {
		tabs[i] = document.createElement('div');
		tabs[i].setAttribute('id', `tab${i}`);
		tabs[i].classList.add('tabs');
	}
	tabs[0].textContent = 'Home';
	tabs[1].textContent = 'Menu';
	tabs[2].textContent = 'Where';

	return tabs;
};
const header = () => {
	const header = document.createElement('div');
	header.setAttribute('id', 'header');
	const tabsContainer = document.createElement('div');
	tabsContainer.setAttribute('id', 'tabsContainer');
	let title = document.createElement('h1');
	title.textContent = 'Center Coffee';
	header.appendChild(title);
	const tabElements = createTabs();
	tabElements.forEach((tab) => {
		tabsContainer.appendChild(tab);
	});
	header.appendChild(tabsContainer);
	document.body.appendChild(header);
	return header;
};
const main = () => {
	// const tab1 = document.querySelector('#tab1');
	tab1.addEventListener('click', () => {
		menu.coffeeDisplay();
		menu.teaDisplay();
		menu.sandwichesDisplay();
	});
};
const footer = () => {};

export { header, main, footer };

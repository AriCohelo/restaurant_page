import * as menu from './menu';
import * as where from './where';
import * as home from './home';

import coffee from './data/data-coffee.json';
import tea from './data/data-tea.json';
import sub from './data/data-sub.json';

const createTabs = () => {
	const tabNames = ['Home', 'Menu', 'Where'];
	let tabs = [];
	for (let i = 0; i < tabNames.length; i++) {
		tabs[i] = document.createElement('div');
		tabs[i].setAttribute('id', `tab${i}`);
		tabs[i].classList.add('tabs');
		tabs[i].textContent = tabNames[i];
	}
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
	// const tab1 = document.querySelector('#tab1');??
	const menuContainer = document.createElement('div');
	menuContainer.setAttribute('id', 'menuContainer');
	document.body.appendChild(menuContainer);

	const homeContainer = document.createElement('div');
	homeContainer.setAttribute('id', 'homeContainer');
	document.body.appendChild(homeContainer);

	const whereContainer = document.createElement('div');
	whereContainer.setAttribute('id', 'whereContainer');
	document.body.appendChild(whereContainer);

	homeContainer.appendChild(home.homeText());
	homeContainer.appendChild(home.homeImage());

	tab0.addEventListener('click', () => {
		menuContainer.innerHTML = '';
		homeContainer.innerHTML = '';
		whereContainer.innerHTML = '';
		homeContainer.appendChild(home.homeText());
		homeContainer.appendChild(home.homeImage());
	});
	tab1.addEventListener('click', () => {
		menuContainer.innerHTML = '';
		homeContainer.innerHTML = '';
		whereContainer.innerHTML = '';
		let coffeeContainer = document.createElement('div');
		coffeeContainer.setAttribute('id', 'coffeeContainer');
		menuContainer.appendChild(coffeeContainer);
		coffeeContainer.appendChild(menu.menuRenderName(coffee, 'nameDisplay'));
		coffeeContainer.appendChild(menu.menuRenderPrice(coffee, 'priceDisplay'));

		let teaContainer = document.createElement('div');
		teaContainer.setAttribute('id', 'teaContainer');
		menuContainer.appendChild(teaContainer);
		teaContainer.appendChild(menu.menuRenderName(tea, 'nameDisplay'));
		teaContainer.appendChild(menu.menuRenderPrice(tea, 'priceDisplay'));

		let subContainer = document.createElement('div');
		subContainer.setAttribute('id', 'subContainer');
		menuContainer.appendChild(subContainer);
		subContainer.appendChild(menu.menuRenderName(sub, 'nameDisplay'));
		subContainer.appendChild(menu.menuRenderPrice(sub, 'priceDisplay'));
	});
	tab2.addEventListener('click', () => {
		menuContainer.innerHTML = '';
		homeContainer.innerHTML = '';
		whereContainer.innerHTML = '';
		whereContainer.appendChild(where.paragraph());
		whereContainer.appendChild(where.whereImage());
		whereContainer.appendChild(where.help());
	});
};
const footer = () => {};

export { header, main, footer };

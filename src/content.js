import * as menu from './menu';
import coffee from './data/data-coffee.json';
import tea from './data/data-tea.json';
import sandwiches from './data/data-sandwiches.json';

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
	const menuContainer = document.createElement('div');
	menuContainer.setAttribute('id', 'menuContainer');
	document.body.appendChild(menuContainer);

	let coffeeContainer = document.createElement('div');
	coffeeContainer.setAttribute('id', 'coffeeContainer');

	let teaContainer = document.createElement('div');
	teaContainer.setAttribute('id', 'teaContainer');

	let sandwichesContainer = document.createElement('div');
	sandwichesContainer.setAttribute('id', 'sandwichesContainer');

	tab0.addEventListener('click', () => {
		menuContainer.innerHTML = '';
	});
	tab1.addEventListener('click', () => {
		coffeeContainer.innerHTML = '';
		coffeeContainer.appendChild(
			menu.productNameDisplay(
				'coffeeNameDisplay',
				menu.productName('coffeeNames', coffee)
			)
		);
		coffeeContainer.appendChild(
			menu.productPriceDisplay(
				'coffeePriceDisplay',
				menu.productPrice('coffeeprices', coffee)
			)
		);
		menuContainer.appendChild(coffeeContainer);

		teaContainer.innerHTML = '';
		teaContainer.appendChild(
			menu.productNameDisplay(
				'teaNameDisplay',
				menu.productName('teaNames', tea)
			)
		);
		teaContainer.appendChild(
			menu.productPriceDisplay(
				'teaPriceDisplay',
				menu.productPrice('teaprices', tea)
			)
		);
		menuContainer.appendChild(teaContainer);

		sandwichesContainer.innerHTML = '';
		sandwichesContainer.appendChild(
			menu.productNameDisplay(
				'sandwichesNameDisplay',
				menu.productName('sandwichesNames', sandwiches)
			)
		);
		sandwichesContainer.appendChild(
			menu.productPriceDisplay(
				'sandwichesPriceDisplay',
				menu.productPrice('sandwichesprices', sandwiches)
			)
		);
		menuContainer.appendChild(sandwichesContainer);
	});
	tab2.addEventListener('click', () => {
		menuContainer.innerHTML = '';
	});
};
const footer = () => {};

export { header, main, footer };

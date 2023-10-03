import coffee from './data/data-coffee.json';
import tea from './data/data-tea.json';
import sandwiches from './data/data-sandwiches.json';

const menuContainer = document.createElement('div');

const coffeeName = () => {
	const coffeeNames = coffee.map((item) => item.name);
	return coffeeNames;
};
const coffeePrice = () => {
	const coffeePrices = coffee.map((item) => item.price);
	return coffeePrices;
};
const coffeeDisplay = () => {
	let coffeeContainer = document.createElement('div');
	coffeeContainer.setAttribute('id', 'coffeeContainer');
	menuContainer.appendChild(coffeeContainer);

	let coffeeNameDisplay = document.createElement('div');
	coffeeNameDisplay.classList.add('coffeeNameDisplay');
	coffeeNameDisplay.innerHTML = coffeeName().join('<br>');
	coffeeContainer.appendChild(coffeeNameDisplay);

	let coffeePriceDisplay = document.createElement('div');
	coffeePriceDisplay.classList.add('coffeePriceDisplay');
	coffeePriceDisplay.innerHTML = coffeePrice().join('<br>');
	coffeeContainer.appendChild(coffeePriceDisplay);
};
const teaName = () => {
	const teaNames = tea.map((item) => item.name);
	return teaNames;
};
const teaPrice = () => {
	const teaPrices = tea.map((item) => item.price);
	return teaPrices;
};
const teaDisplay = () => {
	let teaContainer = document.createElement('div');
	teaContainer.setAttribute('id', 'teaContainer');
	document.body.appendChild(teaContainer);

	let teaNameDisplay = document.createElement('div');
	teaNameDisplay.classList.add('teaNameDisplay');
	teaNameDisplay.innerHTML = teaName().join('<br>');
	teaContainer.appendChild(teaNameDisplay);

	let teaPriceDisplay = document.createElement('div');
	teaPriceDisplay.classList.add('teaPriceDisplay');
	teaPriceDisplay.innerHTML = teaPrice().join('<br>');
	teaContainer.appendChild(teaPriceDisplay);
};
const sandwichesName = () => {
	const sandwichesNames = sandwiches.map((item) => item.name);
	return sandwichesNames;
};
const sandwichesPrice = () => {
	const sandwichesPrices = sandwiches.map((item) => item.price);
	return sandwichesPrices;
};
const sandwichesDisplay = () => {
	let sandwichesContainer = document.createElement('div');
	sandwichesContainer.setAttribute('id', 'sandwichesContainer');
	document.body.appendChild(sandwichesContainer);

	let sandwichesNameDisplay = document.createElement('div');
	sandwichesNameDisplay.classList.add('sandwichesNameDisplay');
	sandwichesNameDisplay.innerHTML = sandwichesName().join('<br>');
	sandwichesContainer.appendChild(sandwichesNameDisplay);

	let sandwichesPriceDisplay = document.createElement('div');
	sandwichesPriceDisplay.classList.add('sandwichesPriceDisplay');
	sandwichesPriceDisplay.innerHTML = sandwichesPrice().join('<br>');
	sandwichesContainer.appendChild(sandwichesPriceDisplay);
};
export { coffeeDisplay, teaDisplay, sandwichesDisplay };

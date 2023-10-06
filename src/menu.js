const menuRenderName = (data, classListName) => {
	const namesContainer = document.createElement('div');
	namesContainer.classList.add(classListName);
	data.forEach((element) => {
		const nameDivs = document.createElement('div');
		nameDivs.textContent = element.name;
		namesContainer.appendChild(nameDivs);
	});
	return namesContainer;
};
const menuRenderPrice = (data, classListPrice) => {
	const pricesContainer = document.createElement('div');
	pricesContainer.classList.add(classListPrice);
	data.map((element) => {
		const priceDivs = document.createElement('div');
		priceDivs.textContent = element.price;
		pricesContainer.appendChild(priceDivs);
	});
	return pricesContainer;
};

//otra opcion
// const menuRenderAllPrices = (dataArray) => {
// 	const pricesDivs = dataArray.map(renderOnePrice);
// };
// const renderOnePrice = (data) => {
// 	const pricesContainer = document.createElement('div');
// 	const priceDiv = document.createElement('div');
// 	priceDiv.classList.add('priceDisplay');
// 	priceDiv.textContent = data.price; //undefined
// 	return priceDiv;
// };
export { menuRenderName, menuRenderPrice };

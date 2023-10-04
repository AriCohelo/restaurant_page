const productName = (namesVar, namesData) => {
	namesVar = namesData.map((item) => item.name);
	return namesVar;
};
const productPrice = (pricesVar, pricesData) => {
	pricesVar = pricesData.map((item) => item.price);
	return pricesVar;
};

const productNameDisplay = (nameDisplayCont, namesArray) => {
	nameDisplayCont = document.createElement('div');
	//como poner classlist a traves del parametro `${nameDisplayCont}`
	nameDisplayCont.classList.add('nameDisplay');
	nameDisplayCont.innerHTML = namesArray.join('<br>');
	return nameDisplayCont;
};
const productPriceDisplay = (priceDisplayCont, pricesArray) => {
	priceDisplayCont = document.createElement('div');
	priceDisplayCont.classList.add('priceDisplay');
	priceDisplayCont.innerHTML = pricesArray.join('<br>');
	return priceDisplayCont;
};
export { productNameDisplay, productPriceDisplay, productName, productPrice };

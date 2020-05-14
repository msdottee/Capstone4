let nameArray = [];
let priceArray = [];

function addToCart(pName, pPrice) {
	
	nameArray.push(pName);
	priceArray.push(pPrice);
	
}

function printCart() {
	let i;
	let total = 0;
	
	for (i = 0; i < priceArray.length; i++) {
		total += priceArray[i];
	}
	
	for (let name of nameArray) {
		
		let items = document.getElementById("list");
		let item = document.createElement("p");
		item.innerHTML = name;
		items.appendChild(item);
	}
	
	let finalCart = document.getElementById("finalCart");
	
	finalCart.innerHTML = "total: " + total;
}
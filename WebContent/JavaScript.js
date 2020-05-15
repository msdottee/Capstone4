let shoppingList = [];
let total = 0;

function addToCart(itemName, itemPrice) {
	
	let item = {
			name: itemName,
			price: itemPrice
	};
	
	shoppingList.push(item);
	
	total = (total + item.price);
	
}

function printCart() {
	for(let item of shoppingList) {
		let itemsInList = document.getElementById("listOfItems");
		let singleItem = document.createElement("p");
		singleItem.innerHTML = (item.name + " $" + item.price);
		itemsInList.appendChild(singleItem);
	}
	let finalCart = document.getElementById("finalCart");
	
	finalCart.innerHTML = "Your total for today is: $" + total;
}

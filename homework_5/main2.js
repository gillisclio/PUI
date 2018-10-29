
$(document).ready(()=>{
console.log("ready")

// Product page

var dict = {'fireorange': 'dog-harness1.jpg', 'blackberry': 'dog-harness2.jpg', 'crazyberry': 'dog-harness3.jpg', 'strawberry': 'dogharness4.jpg'};
console.log(dict);

// var color = $('#color-select');
// var size = $('#size-select');
// var qty = $('#qty-select');
// var price = $('#price');
// console.log(color);
// console.log(size);
// console.log(qty);
// console.log(price);

function onReady () {
	var button = document.getElementById('addToCart');
  if (button) {
  	button.addEventListener('click', onCartBtnClick);
  }
  var cartStorage = GetFromStorage();
  console.log(cartStorage);
}

function onCartBtnClick() {
      // get quantity from input
      var qty-input = document.getElementById('qty-input');
      var inputQty= qty-input.value;
      // get color from input
      var color-input = document.getElementById('color-input');
      var inputColor = color-input.value;
      // get size from input
      var size-input = document.getElementById('size-input');
      var inputSize = size-input.value;
      var item = {
	      quantity: inputValue,
        color: inputColor,
        size: inputSize
      };
      var cartItems = GetFromStorage();
      cartItems.push(item); //adding the item to local storage?
      localStorage.setItem('STORAGE', JSON.stringify(cartItems));
}

function GetFromStorage() {
 var storage = localStorage.getItem('STORAGE');
 console.log(storage);
 if (storage) {
 	return JSON.parse(storage);
 }
 return [];
}


onReady();
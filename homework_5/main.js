
// Dictionary that maps images to user selected values

var image_map_harness = {'Fire Orange': 'dog-harness1@3x.jpg',
            'Blackberry': 'dog-harness2@3x.jpg',
            'Crazyberry': 'dog-harness3@3x.jpg',
            'Strawberry': 'dog-harness4@3x.jpg'};

// var image_map_catharness = {'Fire Orange': 'cat-harness@3x.jpg',
//             'Blackberry': 'cat-harness@3x.jpg',
//             'Crazyberry': 'cat-harness@3x.jpg',
//             'Strawberry': 'cat-harness@3x.jpg'};

// var image_map_backpack = {'Fire Orange': 'cat-backpack@3x.jpg',
//             'Blackberry': 'cat-backpack@3x.jpg',
//             'Crazyberry': 'cat-backpack@3x.jpg',
//             'Strawberry': 'cat-backpack@3x.jpg'};

// var image_map_food = {'Fire Orange': 'pet-food@3x.jpg',
//             'Blackberry': 'pet-food@3x.jpg',
//             'Crazyberry': 'pet-food@3x.jpg',
//             'Strawberry': 'pet-food@3x.jpg'};

// var image_map_water = {'Fire Orange': 'pet-water@3x.jpg',
//             'Blackberry': 'pet-water@3x.jpg',
//             'Crazyberry': 'pet-water@3x.jpg',
//             'Strawberry': 'pet-water@3x.jpg'};

// var image_map_gps = {'Fire Orange': 'pet-collar-gps@3x.jpg',
//             'Blackberry': 'pet-collar-gps@3x.jpg',
//             'Crazyberry': 'pet-collar-gps@3x.jpg',
//             'Crazyberry': 'pet-collar-gps@3x.jpg',
//             'Strawberry': 'pet-collar-gps@3x.jpg'};

// Price for dog harness
const price = 35.00;
// Key for cart in localStorage
const CART_KEY = 'cart';

// Run when document is ready, which means it is fully loaded into browser
$(function(){

  // When user selects a color in the dropdown, change image
  if ($("#product-name") == "Dog Harness") {
      $("#color-input").on("change", function(){
        var selectedVal = $(this).val();
        if(selectedVal == ""){ //if user hasn't selected any color, returns empty string
          selectedVal == "fireorange"; //set to fireorange harness as default
        }
        var image_location = "assets/"+image_map_harness[selectedVal];
        $("#feature-image-container").attr("src",image_location);
        console.log(image_map_harness[selectedVal]);

  });

  };


  //When user clicks add to cart and has all fields selected, save item to cart/local storage
  $("#addToCart").on("click", saveItemToCart);


});


/* Defining how the item will be saved to cart:
/* Getting the values from the three input options,
/* Checking to make sure that all values are selected by the user
/* Creating an item for the cart and saving it to local storage
/* Add UID to give option of deleting item from local storage
*/

function saveItemToCart(){
    var product = $('#product-name').html();
    var color = $('#color-input').val();
    var size = $('#size-input').val();
    var qty = $('#qty-input').val();

    if(color == "" || size == "" || qty == ""){
      console.log("You must select all three things before adding to cart!");
      return;
    }

    var item = {
      'name': product,
      'color': color,
      'size': size,
      'qty': qty,
      'price': parseInt(qty) * price,
      'uid': "uid_"+Math.floor(Math.random()*10e6)
    };
    console.log(item);

/* Get cart from local storage
 * Add the item we just created to the cart
 * Save the cart with new items into local storage
*/
    var cart = getCartFromStorage();
    cart.push(item);
    saveCartToStorage(cart);

    console.log("This is the cart right now:");
    console.log(getCartFromStorage());
    renderCartBadge();

}

/* Saving cart to local storage:
 * Convert given cart to a string
 * then save the string to the array that is CART_KEY in local storage
 */
function saveCartToStorage(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/* Get the cart from local storage (returns a string)
 * Convert string in a Javascript object
 * If there is no cart from before, create an empty array
 */
  function getCartFromStorage(){
    var cart = localStorage.getItem(CART_KEY);
    cart = JSON.parse(cart);

//Make sure that cart is always and array and never null
    if (cart == null){
      cart = [];
    }

    return cart;

  };

/* Render updated cart on cart page:
 * Create a variable for table which will keep all the items in the cart
 * Create a variable for the cart items saved in local storage
 * Iterate over each item in the cart to generate table through HTML string, adding all items to table variable
 * Change the inner HTML of the table on cart page to reflect items in local storage
*/
  function renderCart() {
    var totalTable = "";
    var cartStorage = getCartFromStorage();
    for (let i = 0; i < cartStorage.length; i++){
      var item = cartStorage[i];
      var totalItems = `
      <tr class="cart-item" data-item-uid="${item.uid}">
      <td><p><img "width: 150px; height: 150px; padding: 0px 15px;" src="${findImage(item)}" width = "150px">
      <td><p>${item.name}<br><br>
        Size: ${item.size}<br><br>
        Color: ${item.color}<br><br>
        Quantity: ${item.qty}<br><br>
        Price: $${item.price}.00</p></td>
      <td><button class="delete-btn" data-uid="${item.uid}">X</button></td>
      <tr>`
      totalTable = totalTable+totalItems;
    }

    var cartTable = document.getElementById("cart-items");
    cartTable.innerHTML = totalTable;
  };

/* Create event listeners:
 * If user clicks delete button and the item has a UID
 * Filter the cart and separate out deleted items
 * Call cart price function to update cart price
*/
  function addListeners(){
    $(".delete-btn").click(function(){
      var uid = $(this).attr("data-uid");
      if (uid) {
        var cart = getCartFromStorage();
        cart = cart.filter( x =>  x.uid !== uid);
        saveCartToStorage(cart);
        $(`[data-item-uid="${uid}"]`).remove();
        renderCartPrice();
        renderCartBadge();
      }
    });
  };

/* Finding image for cart items:
 * Use item name to set default image of product on items
*/
  function findImage(item){
    if (item.name == "Dog Harness") {
      var imageSource = "assets/dog-harness2@3x.jpg";
    return imageSource
  };
    if (item.name == "Cat Backpack") {
      var imageSource = "assets/cat-backpack@3x.jpg";
    return imageSource
  };
    if (item.name == "Cat Harness") {
      var imageSource = "assets/cat-harness@3x.jpg";
    return imageSource
  };
    if (item.name == "Pet GPS Collar") {
      var imageSource = "assets/pet-collar-gps@3x.jpg";
    return imageSource
  };
    if (item.name == "Pet Water Storage Harness Attachment") {
      var imageSource = "assets/pet-water@3x.jpg";
    return imageSource
  };
    if (item.name == "Pet Food Storage Harness Attachment") {
      var imageSource = "assets/pet-food@3x.jpg";
    return imageSource
  };

};

/* Generate cart price + update badge:
 * Update badge on cart in nav based on how many items are in cart storage
 * Iterate over cart to find items and add up prices into total price
 * Change the inner HTML to the cart price
*/
  function renderCartPrice(){
    var totalCart = 0;
    var cart = getCartFromStorage();
    for (var i=0; i < cart.length; i++) {
      var item = cart[i];
      console.log(item)
      var amount = item.qty;
      var price = item.price;
      totalCart = totalCart + price;
    }
      var cartPrice = document.getElementById('total-price');
      var finalPrice = 'Subtotal: ' + '$' + totalCart + '.00';

      cartPrice.innerHTML = finalPrice;

  };

  function renderCartBadge(){
    var badge = document.getElementById('cart-badge');
    badge.classList.remove('active');
    badge.innerHTML = 0;
    var cart = getCartFromStorage();
    if (cart && cart.length > 0) {
      if (badge) {
        badge.classList.add('active');
        badge.innerHTML = cart.length;
      }
    }

  };






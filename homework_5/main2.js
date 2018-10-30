
// Dictionary that maps images to user selected values

var image_map_harness= {'fireorange': 'dog-harness1@3x.jpg',
            'blackberry': 'dog-harness2@3x.jpg',
            'crazyberry': 'dog-harness3@3x.jpg',
            'strawberry': 'dog-harness4@3x.jpg'};

// Price for dog harness
const price = 35.00;
// Key for cart in localStorage
const CART_KEY = 'cart';

// Run when document is ready, which means it is fully loaded into browser
$(function(){

  // When user selects a color in the dropdown, change image
  $("#color-input").on("change", function(){
    var selectedVal = $(this).val();
    if(selectedVal == ""){ //if user hasn't selected any color, returns empty string
      selectedVal == "fireorange"; //set to fireorange
    }
    var image_location = "assets/"+image_map_harness[selectedVal];
    $("#feature-image-container").attr("src",image_location);
    console.log(image_map_harness[selectedVal]);
  });

  //When user clicks add to cart and has all fields selected, save item to cart/local storage
  $("#addToCart").on("click", saveItemToCart);


});


/* Defining how the item will be saved to cart:
/*  Getting the values from the three input options,
/*  Checking to make sure that all values are selected by the user
/*  Creating an item for the cart and saving it to local storage
/*  Add UID to give option of deleting item from local storage
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

/* Get Cart from local storage
 * Add the item we just created to the cart
 * Save the cart with new items into local storage
*/
    var cart = getCartFromStorage();
    cart.push(item);
    saveCartToStorage(cart);

    console.log("This is the cart right now:");
    console.log(getCartFromStorage());

}

/* Save cart to local storage
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

/* Create a variable for table which will keep all the items in the cart
 * Create a variable for the cart items saved in local storage
 * Iterate over each item in the cart to generate table through HTML string, adding all items to table variable
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

/* Create event listeners
 * If user clicks delete button and the item has a UID
 * Filter the cart and separate out deleted items
*/
  function addListeners(){
    $(".delete-btn").click(function(){
      var uid = $(this).attr("data-uid");
      if (uid) {
        var cart = getCartFromStorage();
        cart = cart.filter( x =>  x.uid !== uid);
        saveCartToStorage(cart);
        $(`[data-item-uid="${uid}"]`).remove();
      }
    });
  };

  function findImage(item){
    if (item.name == "DOG HARNESS") {
      var imageSource = "assets/dog-harness1@3x.jpg";
    return imageSource

  };

};

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




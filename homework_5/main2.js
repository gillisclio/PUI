
// Dictionary that maps images to user selected values

var image_map = {'fireorange': 'dog-harness1@3x.jpg',
            'blackberry': 'dog-harness2@3x.jpg',
            'crazyberry': 'dog-harness3@3x.jpg',
            'strawberry': 'dog-harness4@3x.jpg'};

// Price for dog harness
const price = 35.00;
// Key for cart in localStorage
const CART_KEY = 'cart';

// Run when document is ready, which means it is fully loaded into browser
$(function(){

  $("#color-input").on("change", function(){
    var selectedVal = $(this).val();
    if(selectedVal == ""){ //if user hasn't selected any color, returns empty string
      selectedVal == "fireorange"; //set to fireorange
    }
    var image_location = "assets/"+image_map[selectedVal];
    $("#feature-image-container").attr("src",image_location);
    console.log(image_map[selectedVal]);
  });

  $("#addToCart").on("click", saveItemToCart);



});


/* Defining how the item will be saved to cart:
/*  Getting the values from the three input options,
/*  Checking to make sure that all values are selected by the user
/*  Creating an item for the cart and saving it to local storage
*/

function saveItemToCart(){
    var color = $('#color-input').val();
    var size = $('#size-input').val();
    var qty = $('#qty-input').val();

    if(color == "" || size == "" || qty == ""){
      console.log("You must select all three things before adding to cart!");
      return;
    }

    var item = {
      'color': color,
      'size': size,
      'qty': qty,
      'price': parseInt(qty) * price
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




$(document).ready(()=>{
console.log("ready")


// Product card expansions on Product Browsing Page

$('.product-card').mouseenter(function(){
    $(this).find('.expand').slideDown("slow")

});

$('.product-card').mouseleave(function(){
    $(this).find('.expand').hide()
});

});

// Product page

var dict = {'fireorange': 'dog-harness1.jpg', 'blackberry': 'dog-harness2.jpg', 'crazyberry': 'dog-harness3.jpg', 'strawberry': 'dogharness4.jpg'};
console.log(dict);

var color = $('#color-select');
var size = $('#size-select');
var qty = $('#qty-select');
var price = $('#price');
console.log(color);
console.log(size);
console.log(qty);
console.log(price);


class Item{
    constructor(size, qty, color, price)
{
    this.color = color
    this.size = size
    this.qty = qty
    this.price = price
     }
}

var item = new Item(color, size, qty);
console.log(item);

function AddtoCart() {
    var x = $()
};

var total = 1 ; // variable to count items

$(document).ready(function(){
console.log("Jquery working");
console.log($(".custom-color"));
});

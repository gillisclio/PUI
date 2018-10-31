
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

//When .toggle() btn is clicked the div should appear and disappear
$("#toggleFunc").on("click", function() {
	$(".outer").toggle(3000);
});

//When smooth .toggle() is clicked, the div should toggle slow
$("#toggleSmooth").on("click", function() {
	$(".outer").toggle(3000)
});

//When .slideUp() is clicked, the div should swipe up to disappear slowly
$("#slidingUp").on("click", function() {
	$(".outer").slideUp(1000);
});

//When .slideDown() btn is clicked, the div should swipe down to appear slowly
$("#slidingDown").on("click", function() {
	$(".outer").slideDown(1000);
	// units are in milliseconds
});

/* You can customize your own animation with .animate() */

//When .animate() slide up to height btn is clicked, the div should swipe up to change height to 20px
$("#slidingUpHeight").on("click", function() {
	$(".outer").animate({'height': '20px'}, 1000);
});

//When .animate() slide down to height btn is clicked, the div should swipe down to change height to 300px
$("#slidingDownHeight").on("click", function() {
    $(".outer").animate({'height': '300px'}, 1000);
});

//When the .animate() slide up and down to height btn is clicked, the div should swipe up to change height to 20px and then back down to change height to 50px
$("#slidingUpDownHeight").on("click", function() {
    $(".outer").animate({'height': '20px', 'opacity': '.25'}, 2000);
    $(".outer").animate({'height': '300px', 'opacity': '1'}, 2000);
});
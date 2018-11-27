// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// // Run when document is ready, which means it is fully loaded into browser
$(function(){



//
$(window).on('scroll', function(){
	var heartTop = $('.heart').offset().top,
   	heartHeight = $('.heart').outerHeight(),
   	windowHeight = $(window).height(),
   	windowScroll = $(this).scrollTop();

   	if (windowScroll > (heartTop+heartHeight-windowHeight/2)) {
   		$(".heart").addClass("fadeInUp");
   	}
})

$(window).on('scroll', function(){
	var rayTop = $('.ray').offset().top,
   	rayHeight = $('.ray').outerHeight(),
   	windowHeight = $(window).height(),
   	windowScroll = $(this).scrollTop();

   	if (windowScroll > (rayTop+rayHeight-windowHeight/2)) {
   		$(".ray").addClass("fadeInUp");
   	}
})

})

// When the user scrolls down 20px from the top of the document, show the scroll to top button

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

// Run when document is ready, which means it is fully loaded into browser
$(function(){

// BTW
//When user scrolls down approximately halfway over octogan, fade in heart
$(window).on('scroll', function(){
	var heartTop = $('.heart').offset().top,
   	heartHeight = $('.heart').outerHeight(),
   	windowHeight = $(window).height(),
   	windowScroll = $(this).scrollTop();

   	if (windowScroll > (heartTop+heartHeight-windowHeight/1.1)) {
   		$(".heart").addClass("fadeInUp");
   	}
})

// BTW
//When user scrolls down approximately halfway over bottom text, fade in sunray
$(window).on('scroll', function(){
	var rayTop = $('.ray').offset().top,
   	rayHeight = $('.ray').outerHeight(),
   	windowHeight = $(window).height(),
   	windowScroll = $(this).scrollTop();

   	if (windowScroll > (rayTop+rayHeight-windowHeight/1.1)) {
   		$(".ray").addClass("fadeInUp");
   	}
})

// HELP
//When user scrolls down approximately halfway over bottom text, fade in sunray
$(window).on('scroll', function(){
	var rayTop = $('.ray-low').offset().top,
   	rayHeight = $('.ray-low').outerHeight(),
   	windowHeight = $(window).height(),
   	windowScroll = $(this).scrollTop();

   	if (windowScroll > (rayTop+rayHeight-windowHeight/1.1)) {
   		$(".ray-low").addClass("fadeInUp");
   	}
})

// FACTS
// Create collection with keys, photos, and facts to pull from when user clicks button
	var collection = [
		{
			key: '1',
			picture: 'assets/images/earth.png',
			fact: "A bee has to fly about 90,000 miles – 3 times around the globe – in order to produce one pound of honey."
		},
		{
			key: '2',
			picture: 'assets/images/seed.png',
			fact: "A honeybee's brain is the size of one sesame seed!"
		},
		{
			key: '3',
			picture: 'assets/images/spoon.png',
			fact: "The average bee will make 1/12th of a teaspoon of honey in their lifetime."
		},
		{
			key: '4',
			picture: 'assets/images/bear.png',
			fact: "Honeybees must gather nectar from 2 million flowers to make one pound of honey."
		}
	];

// Create function to randomize based on length
	function random(length)
	{
	    return Math.floor(Math.random()*length);
	}
// Create function that randomly pulls a fact and image combo on page load
	function randomize() {
		var index = random(collection.length);
		var src = collection[index].picture;
		var fact = collection[index].fact;
		$("#fact-img").attr("src", src);
	  	$("#fact-text").html(fact);
	}

	  randomize();

// Adding event listener and running randomize specifically when the user clicks the button
	  var randomBtn = document.getElementById('randomizer');
	  if (randomBtn) {
	  	randomBtn.addEventListener('click', randomize);
	  }

});
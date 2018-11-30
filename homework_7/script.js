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

$(".button-fact").on("click", createFact);

function createFact(){
// setting up variables
	var image_map = {"A bee has to fly about 90,000 miles – 3 times around the globe – in order to produce one pound of honey." : "images/earth.png",
					"A honeybee's brain is the size of one sesame seed!" : "images/seed.png",
					"The average bee will make 1/12th of a teaspoon of honey in their lifetime." : "images/spoon.png",
					"Honeybees must gather nectar from 2 million flowers to make one pound of honey." : "images/bear.png"};


	// ["images/earth.png", "images/seed.png", "images/spoon.png", "images/bear.png"]
	// var texts = ["A bee has to fly about 90,000 miles – 3 times around the globe – in order to produce one pound of honey.",
	// 			 "A honeybee's brain is the size of one sesame seed!",
	// 			 "The average bee will make 1/12th of a teaspoon of honey in their lifetime. ",
	// 			 "Honeybees must gather nectar from 2 million flowers to make one pound of honey."]

	//randomizing
	function random(length)
	{
	    return Math.floor(Math.random()*length);
	}

	//creating an object
	class Fact{

	  constructor(img, text)
	  {
	    this.pic = img
	    this.text = text
	  }
	}

	  var fact = new Fact(picts[random(4)], texts[random(4)])
	  console.log(fact)
	  $("#fact-img").attr("src", fact.pic);
	  $("#fact-text").html(fact.text);
	}



});
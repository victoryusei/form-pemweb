import $ from 'jquery';

$(document).ready(function() {
    // Get the slides container and the first slide
    var $slidesContainer = $('.slides-container');
    var $firstSlide = $slidesContainer.find('img:first-child');
  
    // Clone the slides and append them to the end of the container
    $slidesContainer.append($slidesContainer.html());
  
    // Calculate the total width of all the slides and set it as the width of the container
    var slideWidth = 360;
    var numSlides = $slidesContainer.find('img').length;
    var totalWidth = slideWidth * numSlides;
    $slidesContainer.css('width', totalWidth + 'px');
  
    // Animate the slideshow
    var animationDuration = 30000; // 30 seconds
  
    function animateSlides() {
      $slidesContainer.css('transform', 'translateX(-' + slideWidth + 'px)');
      $slidesContainer.animate({
        transform: 'translateX(-' + (slideWidth * 2) + 'px)'
      }, animationDuration, 'linear', function() {
        // When the animation ends, reset the position of the container
        $slidesContainer.css('transform', 'translateX(0)');
        // Then start the animation again
        animateSlides();
      });
    }
  
    // Start the animation
    animateSlides();
});

"use strict";
$(document).ready(function() {
  var interval = 3000;
  var slides = $('.slideshow img');
  var index = 0;

  setInterval(function() {
    index++;
    if (index >= slides.length) {
      index = 0;
    }
    slides.removeClass('active');
    $(slides[index]).addClass('active');
  }, interval);
});




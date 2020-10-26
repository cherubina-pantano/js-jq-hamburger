var navBars = $('.header-right > a');
var close = $('.close');

navBars.click(function () {
  $('.hamburger-menu').show('slow');

})

close.click( function () {
  $('.hamburger-menu').hide('fast');
})

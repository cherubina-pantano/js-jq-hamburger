var navBars = $('.header-right > a');
var close = $('.close');

navBars.click(function () {
  $('.hamburger-menu').show();

})

close.click( function () {
  $('.hamburger-menu').hide();
})

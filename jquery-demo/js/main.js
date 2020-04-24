$(document).ready(function() {
    // run function on initial page load
    $('.square').click(function() {
      $('.square').toggleClass('blue');
    });
    // run function on resize of the window
    $(window).resize(function() {
      resize();
    });
    $(window).scroll(function() {
      scroll();
    });
});

function resize() {
  $('.square').addClass('purple');
}
function scroll() {
  $('.square').removeClass('purple');
}

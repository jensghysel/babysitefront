import $ from 'jquery';
import 'jquery-countdown';

/* ***************** start document load **********************/
$(document).ready(function() {
    $('.status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

    var content = $("body"),
      navbar = $(".navbar");

    $(".show-info").on('click', function() {
      if (window.innerWidth > 990) {
        if (content.hasClass('show-content')) {
          content.removeClass('show-content');
            navbar.removeClass('navbar-open');
        } else {
          content.addClass('show-content');
            navbar.addClass('navbar-open');
        }
      }
    });

	/*========== Countdown start ================*/
    $('.countdown').countdown('2019/06/24').on('update.countdown', function(event) {
        let values = $(this).find('.val');
        $(values[0]).text(event.strftime('%D'));
        $(values[1]).text(event.strftime('%H'));
        $(values[2]).text(event.strftime('%M'));
        $(values[3]).text(event.strftime('%S'));
    });
	/*========== Countdown end ================*/
});
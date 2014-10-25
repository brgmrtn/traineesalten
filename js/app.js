$(function() {

	function checkFooter() {
		var bodyH = $('body').height(),
			vwptH = $(window).height(),
			footer = $('#footer');

		if ( vwptH > bodyH) {
			footer.addClass('sticky-footer');
		} else {
			footer.removeClass('sticky-footer');
		}

		console.log('check height');
	}

	// Check height on load
	checkFooter();

	// Check height after reset
	$(window).resize(checkFooter);

});



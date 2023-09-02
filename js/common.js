// $('[name="phone"]').mask('+7 (999) 999-99-99');
$('.tibrr-cookie-consent-button').on('click', function (e) {
	e.preventDefault();
	$('.tibrr-cookie-consent').fadeOut();
});


$('.toggle-regions').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $('.ulRegions').find('li');

	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.find('span').html('Свернуть список');
		content.slideDown();
	} else {
		$this.removeClass('trigger');
		$this.find('span').html('Раскрыть список');

		content.slice(36).slideUp();
	}
});

$('.input-dropdown').on('click', function () {
	$(this).next('.dropdown-menu').toggleClass('show');
});

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

// input search
$('.home-form input').on('keyup change', function () {
	if (this.value.length > 0) {
		$(this).parent('.form-group').find('.dropdown-menu-result').addClass('show');
	} else {
		$('.dropdown-menu-result').removeClass('show');
	}
});

// активная ссылка меню
$('.wrapperLinksHeader li .nav-link').each(function () {
	let location = window.location.href;
	let link = this.href;
	if (location === link) {
		$(this).addClass('active');
	}
});
// end
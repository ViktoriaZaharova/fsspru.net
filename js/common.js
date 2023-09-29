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
$('.wrapperLinksHeader .nav-item li .nav-link').each(function () {
	let location = window.location.href;
	let link = this.href;
	if (location === link) {
		$(this).addClass('active');
	}
});
// end


// hidden list > 3
$('.departmens-box').each(function () {
	if ($(this).find('.departmens-box-item').length > 3) {
		$(this).find('.departmens-box-item').slice(3).hide();
		$(this).find('.departmens-box__body').append('<a href="#" class="departmens-box__toggle"><span>Узнать подробнее</span><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-bottom"></use></svg></a>');
	}
});

// hidden list > 3

// show list all
$('.departmens-box__toggle').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).parents('.departmens-box__body').find('.departmens-box-item');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.find('span').html('Скрыть');

		content.slideDown();
	} else {
		$this.removeClass('trigger');
		$this.find('span').html('Узнать подробнее');

		content.slice(3).slideUp();
	}
});
// show list all


$(".bailiff-next-step").click(function (e) {
	e.preventDefault();
	var id = $(this).attr('data-tab'),
		content = $('.form-bailiff .js-tab-content[data-tab="' + id + '"]');

	$('.form-bailiff .js-tab-content.active').removeClass('active'); // 3
	content.addClass('active'); // 4
});

$(function () {
	var next = $('.next-step');
	var prev = $('.prev-step');
	var stepsCount = $('.bailiff-item').length;
	var currentStep = 1;

	$('.progress-steps__cp').text(currentStep); // устанавливаем ширину полосы после изменения шага
	$('.progress-steps__default').text(stepsCount);

	next.on('click', function () {
		$('.progress-steps__cp').text(++currentStep); // устанавливаем ширину полосы после изменения шага
		$('.progress-steps__default').text(stepsCount);
	});

	prev.on('click', function () {
		$('.progress-steps__cp').text(--currentStep);
		$('.progress-steps__default').text(stepsCount);
	});
});

$('#additionalOrder').on('click', function () {
	
	var
		$this = $(this),
		content = $('.add-applicant');

	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.find('span').html('Убрать заявителя ');
		$('.form-bailiff__price').slideUp();
		content.slideDown();
	} else {
		$this.removeClass('trigger');
		$this.find('span').html('Добавить заявителя за 99р');
		$('.form-bailiff__price').slideDown();
		content.slideUp();
	}
});
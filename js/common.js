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
		$this.find('span').html('Скрыть подробности');

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

// show fixed block added payment
$('.add-payment').on('click', function (e) {
	e.preventDefault();
	var
		$this = $(this),
		content = $('.wrapperPlashka');

	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.html('Убрать из оплаты');
		content.slideDown();
	} else {
		$this.removeClass('trigger');
		$this.html('Добавить к оплате');
		content.slideUp();
	}
});


// if input = checked - box show
$('.form-check-label-payment input:checkbox').change(function () {
	if ($(this).is(":checked")) {
		$(this).parents('.departmens-box').find('.departmens-box-item-checked').addClass('click');
	} else {
		$(this).parents('.departmens-box').find('.departmens-box-item-checked').removeClass('click');
	}
});

$('.departmens-box-form input').on('keyup change', function () {
	if (this.value.length > 0) {
		$(this).parents('.departmens-box-form').addClass('checked');
	} else {
		$(this).parents('.departmens-box-form').removeClass('checked');
	}
});

// animate scroll
$(document).ready(function () {
	$(".go_to").on("click", function (event) {
		event.preventDefault();

		var id = $(this).attr('href'),
			headerHeight = $('.navbar-header').height(),
			top = $(id).offset().top;

		$('body,html').animate({ scrollTop: top - headerHeight }, 500);
	});
});

// animate text block
$(document).ready(function () {
	var len = $(".welcome-text .box-text").length;
	var intervalCounter = 1;
	setInterval(function () {
		intervalCounter++;
		if (intervalCounter > len) intervalCounter = 1;
		$(".welcome-text .box-text").removeClass("active");
		$(".welcome-text .box-text").eq(intervalCounter - 1).addClass("active");
	}, 5000);
});

// progressbar
$(document).ready(function () {

	var progress = $('.progressbar .progressbar__bg')

	function counterInit(fValue, lValue) {

		var counter_value = parseInt($('.progressbar__value').text());
		counter_value++;

		if (counter_value >= fValue && counter_value <= lValue) {

			$('.progressbar__value').text(counter_value + '%');
			progress.css({ 'width': counter_value + '%' });

			setTimeout(function () {
				counterInit(fValue, lValue);
			}, 300);

		}

	}
	counterInit(0, 100);
});

$('.navbar-toggler').click(function () {
	$('.overlay-bg').fadeToggle();
});

$('.btn-tooptip').click(function () {
	$(this).siblings('.tooltip-box').fadeIn();
});

$('.tooltip-box__close').click(function () {
	$(this).parents('.tooltip-box').fadeOut();
});

// select tabs mobile
$('.select-tab').on('change', function (e) {
	$('.tabs-form .nav-tabs li a').eq($(this).val()).tab('show');
});

$('.btn-loader').click(function (e) {
	e.preventDefault();
	$('#pageloaderDebtsCheck').css('display', 'flex');
});
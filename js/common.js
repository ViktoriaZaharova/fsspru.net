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

$('.dropdown-regions').on('click', function () {
	$(this).find('.dropdown-menu').toggleClass('show');
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

// tabs dropdown mobile
const $tabsToDropdown = $(".tabs-to-dropdown");

function generateDropdownMarkup(container) {
	const $navWrapper = container.find(".nav-wrapper");
	const $navPills = container.find(".nav-pills");
	const firstTextLink = $navPills.find("li:first-child a").text();
	const $items = $navPills.find("li");
	const markup = `
    <div class="dropdown d-sm-none">
		<span class="input-title">
														Поиск по:
													</span>
      <button class="btn dropdown-toggle dropdown-toggle-tab" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${firstTextLink}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
        ${generateDropdownLinksMarkup($items)}
      </div>
    </div>
  `;
	$navWrapper.prepend(markup);
}

function generateDropdownLinksMarkup(items) {
	let markup = "";
	items.each(function () {
		const textLink = $(this).find("a").text();
		markup += `<a class="dropdown-item" href="#">${textLink}</a>`;
	});

	return markup;
}

function showDropdownHandler(e) {
	// works also
	//const $this = $(this);
	const $this = $(e.target);
	const $dropdownToggle = $this.find(".dropdown-toggle");
	const dropdownToggleText = $dropdownToggle.text().trim();
	const $dropdownMenuLinks = $this.find(".dropdown-menu a");
	const dNoneClass = "d-none";
	$dropdownMenuLinks.each(function () {
		const $this = $(this);
		if ($this.text() == dropdownToggleText) {
			$this.addClass(dNoneClass);
		} else {
			$this.removeClass(dNoneClass);
		}
	});
}

function clickHandler(e) {
	e.preventDefault();
	const $this = $(this);
	const index = $this.index();
	const text = $this.text();
	$this.closest(".dropdown").find(".dropdown-toggle").text(`${text}`);
	$this
		.closest($tabsToDropdown)
		.find(`.nav-pills li:eq(${index}) a`)
		.tab("show");
}

function shownTabsHandler(e) {
	// works also
	//const $this = $(this);
	const $this = $(e.target);
	const index = $this.parent().index();
	const $parent = $this.closest($tabsToDropdown);
	const $targetDropdownLink = $parent.find(".dropdown-menu a").eq(index);
	const targetDropdownLinkText = $targetDropdownLink.text();
	$parent.find(".dropdown-toggle").text(targetDropdownLinkText);
}

$tabsToDropdown.each(function () {
	const $this = $(this);
	const $pills = $this.find('a[data-toggle="pill"]');

	generateDropdownMarkup($this);

	const $dropdown = $this.find(".dropdown");
	const $dropdownLinks = $this.find(".dropdown-menu a");

	$dropdown.on("show.bs.dropdown", showDropdownHandler);
	$dropdownLinks.on("click", clickHandler);
	$pills.on("shown.bs.tab", shownTabsHandler);
});


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
		$this.find('span').html('Убрать заявителя');
		$('.form-bailiff__price').slideUp();
		content.slideDown();
		$(this).parents('.form-bailiff').find('.btn-report-sum').addClass('sale-price');
	} else {
		$this.removeClass('trigger');
		$this.find('span').html('Добавить заявителя за 99р');
		$('.form-bailiff__price').slideDown();
		$(this).parents('.form-bailiff').find('.btn-report-sum').removeClass('sale-price');
		content.slideUp();
	}
});

$('.link-code').on('click', function (e) {
	e.preventDefault();
	var
		$this = $(this),
		content1 = $(this).parents('label').siblings('[name="email"]'),
		content2 = $(this).parents('label').siblings('[name="phone"]');

	if (!$this.hasClass('click')) {
		$this.addClass('click');
		$('#chooseEmail').removeClass('active');
		$('#chooseSMS').addClass('active');
		$this.html('Отправить на E-mail');
		content1.attr('hidden', true);
		content2.attr('hidden', false);
	} else {
		$this.removeClass('click');
		$('#chooseEmail').addClass('active');
		$('#chooseSMS').removeClass('active');
		$this.html('Отправить в СМС');
		content1.attr('hidden', false);
		content2.attr('hidden', true);
	}
});

$('[name="phone"]').mask('+7(999)999-99-99');

$.fn.setCursorPosition = function (pos) {
	if ($(this).get(0).setSelectionRange) {
		$(this).get(0).setSelectionRange(pos, pos);
	} else if ($(this).get(0).createTextRange) {
		var range = $(this).get(0).createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
};

$('[name="phone"]').click(function () {
	$(this).setCursorPosition(3);
}).mask("+7(999)999-9999");
$('[name="phone"]').mask("+7(999)999-9999");

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
		$(this).parents('.departmens-box').addClass('click');
	} else {
		$(this).parents('.departmens-box').removeClass('click');
	}
});

$('.departmens-box-form input').on('keyup change', function () {
	if (this.value.length > 0) {
		$(this).parents('.departmens-box-form').addClass('checked');
	} else {
		$(this).parents('.departmens-box-form').removeClass('checked');
	}
});

$('.checked-form').on('click', function (e) {
	e.preventDefault;
	$(this).parents('.departmens-box').addClass('active');
});

$('.sum-value-edit').on('click', function (e) {
	e.preventDefault;
	$(this).parents('.departmens-box').removeClass('active');
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

// проверка окна загрузки. удалить при необходимости!!!
$('.btn-loader').click(function (e) {
	e.preventDefault();
	$('#pageloaderDebtsCheck').css('display', 'flex');
});
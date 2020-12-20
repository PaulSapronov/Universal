$(document).ready(function () {
	var tabsItem = $('.tabs__item');
	var contentItem = $('.content__item');

	tabsItem.on('click', function (event) {
		var activeContent = $(this).attr('data-target');
		tabsItem.removeClass('tabs__item--active');
		contentItem.removeClass('content__item--active');
		$(activeContent).addClass('content__item--active');
		$(this).addClass('tabs__item--active');
	});

	var mySwiper = new Swiper('.gallery__swiper-container', {
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		keyboard: true,
	});

	var articleSwiper = new Swiper('.article-swiper__swiper-container', {
		loop: true,
		keyboard: true,

		navigation: {
			nextEl: '.article-swiper__button-next',
			prevEl: '.article-swiper__button-prev',
		},

	});

	var menuButton = $('.menu-button');
	menuButton.on('click', function () {
		$('.navbar-bottom').toggleClass('navbar-bottom--visible');
	});

	var modelButton = $('[data-toggle=modal]');
	var closeModalButton = $('.modal__close');
	modelButton.on('click', openModal);
	closeModalButton.on('click', closeModal);

	function openModal() {
		var modalOverlay = $('.modal__overlay');
		var modalDialog = $('.modal__dialog');
		modalOverlay.addClass('modal__overlay--visible');
		modalDialog.addClass('modal__dialog--visible');
	}

	function closeModal(event) {
		event.preventDefault();
		var modalOverlay = $('.modal__overlay');
		var modalDialog = $('.modal__dialog');
		modalOverlay.removeClass('modal__overlay--visible');
		modalDialog.removeClass('modal__dialog--visible');
	}

	$(document).on('keyup', function (e) {
		var modalOverlay = $('.modal__overlay');
		var modalDialog = $('.modal__dialog');
		if (e.keyCode === 27) {
			modalOverlay.removeClass('modal__overlay--visible');
			modalDialog.removeClass('modal__dialog--visible');
		}
	});

	$('.form').each(function () {
		$(this).validate({
			errorClass: 'invalid',
			messages: {
				name: {
					required: 'Please specify your name',
				},
				email: {
					required: 'We need your email address to contact you',
					email: 'Your email address must be in the format of name@domain.com',
				},
				phone: {
					required: 'Please specify your phone number',
					minlength: 'Your phone must be in the format of +7(XXX)XXX-XX-XX"'
				},
			},
		});
	});

});
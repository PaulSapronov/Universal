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
	// Изменение цвета закладки
	var bookmarkActive = $('.news__main-bookmark');
	bookmarkActive.on('click', function () {
		$(this).toggleClass('news__main-bookmark--active');
	});

	var bookmarkHeroActive = $('.article-hero__bookmark');
	bookmarkHeroActive.on('click', function () {
		$(this).toggleClass('article-hero__bookmark--active');
	});

	// Открытие комментов
	var openComment = $(".article-reviews__download-button");
	openComment.on("click", function () {
		$(".article-reviews__comment-case").toggleClass("article-reviews__comment-case--hidden");
	});

	// Переключение checkbox
	var checkBox = $('.modal__checkbox-label');
	checkBox.on('click', function () {
		$('.modal__checkbox-label').toggleClass('modal__checkbox-label--checked');
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
				email: {
					required: "Укажите ваш электронный адрес!",
					email: "Электронный адрес должен быть в формате name@domain.com"
				},
				textarea: {
					required: "Заполните поле",
					minlength: "Минимальный размер сообщения - 100 символов"
				},
				select: {
					required: "Выберите тему!",
				},
				message: {
					required: "Заполните поле!",
				},
				checkbox: {
					required: "Это поле обязательно!",
				},

			},
		});
	});
});
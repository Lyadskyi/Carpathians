// ! Modal window BOOK A TOUR //

document.addEventListener('DOMContentLoaded', () => {
	const openModalBtn = document.querySelector('.hero-btn'); // Кнопка відкриття
	const closeModalBtn = document.querySelector('.modal-close-btn'); // Кнопка закриття на X
	const closeModalCallMeBtn = document.querySelector('.contact-form-btn'); // Кнопка закриття на кнопку CALL ME
	const backdrop = document.querySelector('.backdrop-book-a-tour'); // Фон модального вікна BOOK A TOUR

	console.log(closeModalCallMeBtn);

	if (!openModalBtn || !closeModalBtn || !backdrop) {
		console.error('❌ Один із елементів не знайдено!');
		return;
	}

	// Функція відкриття модального вікна
	function openModal() {
		backdrop.classList.add('is-open');
		body.classList.add('no-scroll'); // Заборона прокрутки
	}

	// Функція закриття модального вікна
	function closeModal() {
		backdrop.classList.remove('is-open');
		body.classList.remove('no-scroll'); // Відновлення прокрутки
	}

	// Обробник кліку для відкриття модального вікна
	openModalBtn.addEventListener('click', openModal);

	// Обробник кліку для закриття модального вікна
	closeModalBtn.addEventListener('click', closeModal);

	// Обробник кліку для закриття модального вікна
	closeModalCallMeBtn.addEventListener('click', closeModal);

	// Закриття модального вікна при кліку на фон (backdrop)
	backdrop.addEventListener('click', (event) => {
		if (event.target === backdrop) {
			closeModal();
		}
	});

	// Закриття модального вікна при натисканні "Escape"
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && backdrop.classList.contains('is-open')) {
			closeModal();
		}
	});
});

// ! Modal window TOUR'S DETAILS //

// ! Side-out menu MOBILE //

document.addEventListener('DOMContentLoaded', () => {
	const openModalMobileMenuBtn = document.querySelector('.mobile-open-btn'); // Кнопка відкриття
	const closeModalMobileMenuBtn = document.querySelector(
		'.mobile-menu-close-btn'
	); // Кнопка закриття на X
	const menu = document.querySelector('.mobile-menu');

	// if (!openModalMenuBtn || !closeModalMenuBtn) {
	// 	console.error('❌ Один із елементів не знайдено!');
	// 	return;
	// }

	// openModalMobileMenuBtn.addEventListener('click', () => {
	// 	menu.classList.add('is-open');
	// });

	// Функція відкриття модального вікна
	// function openModal() {
	// 	openModalMobileMenuBtn.classList.add('is-open');
	// 	mobileMenu.classList.add('no-scroll'); // Заборона прокрутки
	// }

	// Функція закриття модального вікна
	// function closeModal() {
	// 	openModalMobileMenuBtn.classList.remove('is-open');
	// 	mobileMenu.classList.remove('no-scroll'); // Відновлення прокрутки
	// }

	// closeModalMobileMenuBtn.addEventListener('click', () => {
	// 	menu.classList.remove('is-open');
	// });

	// Обробник кліку для відкриття модального вікна
	// openModalMobileMenuBtn.addEventListener('click', openModal);

	// Обробник кліку для закриття модального вікна
	// closeModalMenuBtn.addEventListener('click', closeModal);

	// Закриття модального вікна при кліку на фон (backdrop)
	// backdrop.addEventListener('click', (event) => {
	// 	if (event.target === backdrop) {
	// 		closeModal();
	// 	}
	// });

	// Закриття модального вікна при натисканні "Escape"
	// 	document.addEventListener('keydown', (event) => {
	// 		if (event.key === 'Escape' && backdrop.classList.contains('is-open')) {
	// 			closeModal();
	// 		}
	// 	});
	// });

	// ! Slider swiper GALLERY //

	document.addEventListener('DOMContentLoaded', () => {
		const sliderElement = document.querySelector('.image-slider');

		if (!sliderElement) {
			console.error("❌ Елемент '.image-slider' не знайдено!");
			return;
		}

		new Swiper('.image-slider', {
			autoHeight: true,
			centeredSlides: false,
			grabCursor: true,
			keyboard: {
				enabled: true,
				onlyInViewport: true,
				pageUpDown: true,
			},
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			simulateTouch: true,
			slidesPerView: 1.2,
			slideToClickedSlide: true,
			spaceBetween: 20,
			speed: 600,
			touchRatio: 2,
		});
	});

	// ! Slider swiper MODAL UPCOMING TOURS //

	document.addEventListener('DOMContentLoaded', () => {
		const sliderElementModal = document.querySelector('.modal-image-slider');

		if (!sliderElementModal) {
			console.error("❌ Елемент '.modal-image-slider' не знайдено!");
			return;
		}

		new Swiper('.modal-image-slider', {
			autoHeight: true,
			centeredSlides: false,
			grabCursor: true,
			keyboard: {
				enabled: true,
				onlyInViewport: true,
				pageUpDown: true,
			},
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			simulateTouch: true,
			slidesPerView: 2,
			slideToClickedSlide: true,
			spaceBetween: 20,
			speed: 600,
			touchRatio: 2,
		});
	});

	// ! Button UP //

	$(window).scroll(function () {
		let scrolled = $(window).scrollTop();

		console.log(scrolled);

		if (scrolled > 400) {
			$('#back_to_top').addClass('active');
		} else {
			$('#back_to_top').removeClass('active');
		}
	});

	$('#back_to_top').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 10);
	});


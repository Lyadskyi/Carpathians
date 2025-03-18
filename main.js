// ! ---------- Modal window BOOK A TOUR ---------- //

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

// ! ---------- Side-out menu ---------- //

document.addEventListener('DOMContentLoaded', () => {
	// Кнопка відкриття меню
	const openModalMobileMenuBtn = document.querySelector('.mobile-open-btn');
	// Кнопка закриття меню на X
	const closeModalMobileMenuBtn = document.querySelector(
		'.side-out-menu-close-btn'
	);
	const mobileMenu = document.querySelector('.side-out-menu');

	if (!openModalMobileMenuBtn || !closeModalMobileMenuBtn || !mobileMenu) {
		console.error('❌ Один із елементів не знайдено!');
		return;
	}

	function openModal() {
		mobileMenu.classList.add('is-open');
		document.body.classList.add('no-scroll'); // Заборона прокрутки сторінки
		document.addEventListener('keydown', onEscKeyPress); // Додаємо обробник Escape
	}

	function closeModal() {
		mobileMenu.classList.remove('is-open');
		document.body.classList.remove('no-scroll'); // Відновлення прокрутки
		document.removeEventListener('keydown', onEscKeyPress); // Видаляємо обробник Escape
	}

	function onEscKeyPress(event) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}

	openModalMobileMenuBtn.addEventListener('click', openModal);
	closeModalMobileMenuBtn.addEventListener('click', closeModal);

	// Закриття при кліку на фон (backdrop)
	mobileMenu.addEventListener('click', (event) => {
		if (event.target === mobileMenu) {
			closeModal();
		}
	});
});

// ! ---------- Modal window TOUR'S DETAILS ---------- //

// ! ---------- Slider swiper GALLERY ---------- //

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
		// ** slidesPerView: 1.2, // Mobile version
		// ** slidesPerView: 2, // Tablet & desktop version
		slideToClickedSlide: true,
		// ** spaceBetween: 20,
		speed: 600,
		touchRatio: 2,
		// ** Breakpoints для адаптації **
		breakpoints: {
			320: {
				// ** Мобільні пристрої **
				slidesPerView: 1.2,
				spaceBetween: 20,
			},
			768: {
				// ** Планшети **
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				// ** Десктопи **
				slidesPerView: 2,
				spaceBetween: 20,
			},
		},
	});
});

// * ---------- Slider swiper MODAL UPCOMING TOURS ---------- * //

// ! ---------- Button UP ---------- //

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

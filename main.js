document.addEventListener('DOMContentLoaded', () => {
	const openModalBtn = document.querySelector('.hero-btn'); // Кнопка відкриття
	const closeModalBtn = document.querySelector('.modal-close-btn'); // Кнопка закриття на X
	const closeModalCallMeBtn = document.querySelector('.contact-form-btn'); // Кнопка закриття на кнопку CALL ME
	const backdrop = document.querySelector('.backdrop'); // Фон модального вікна

	console.log(closeModalCallMeBtn);

	if (!openModalBtn || !closeModalBtn || !backdrop) {
		console.error('❌ Один із елементів не знайдено!');
		return;
	}

	// Функція відкриття модального вікна
	function openModal() {
		backdrop.classList.add('is-open');
	}

	// Функція закриття модального вікна
	function closeModal() {
		backdrop.classList.remove('is-open');
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
		// mousewheel: {
		// 	sensitivity: 1,
		// 	eventsTarget: '.image-slider',
		// },
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

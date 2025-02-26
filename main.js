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
	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.image-slider',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	},
	simulateTouch: true,
	slidesPerView: 2,
	slideToClickedSlide: true,
	spaceBetween: 20,
	speed: 600,
	touchRatio: 2,
});

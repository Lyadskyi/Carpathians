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
	simulateTouch: true,
	slidesPerView: 2,
	slideToClickedSlide: true,
	spaceBetween: 20,
	touchRatio: 2,
});

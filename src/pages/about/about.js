$(function () {
	if (document.querySelector(".about-reviews")) {
		const reviewsSlider = new Swiper(".reviews-slider", {
			setWrapperSize: true,
			slidesPerView: "auto",
			spaceBetween: 15,
			watchSlidesProgress: true,
			mousewheel: {
				sensitivity: 0.3,
				forceToAxis: true,
			},
			navigation: {
				nextEl: $(".about-reviews .block__slider-next")[0],
				prevEl: $(".about-reviews .block__slider-prev")[0],
			},
		});
	}
	$(".about-contact__faq-title").click(function () {
		let $wrap = $(this).closest(".about-contact__faq");
		if ($wrap.hasClass("_open")) {
			$(".about-contact__faq").removeClass("_open");
		} else {
			$(".about-contact__faq").removeClass("_open");
			$wrap.addClass("_open");
		}
	});
});

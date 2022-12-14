$(function () {
	if ($(".room-preview").length) {
		$(".room-preview").each(function () {
			let lngh = $(this).find(".swiper-slide").length;
			let indx = $(this).find(".room-preview__fract-now");
			indx.text(String(1).padStart(2, "0"));
			$(this)
				.find(".room-preview__fract-all")
				.text("/" + String(lngh).padStart(2, "0"));
			const oneSlider = new Swiper(".room-preview__slider", {
				loop: true,
				setWrapperSize: true,
				spaceBetween: 10,
				autoplay: {
					delay: 5000,
				},
				pagination: { clickable: true, el: ".room-preview__pagi" },
			});
			oneSlider.on("slideChange", function () {
				indx.text(String(1 + oneSlider.realIndex).padStart(2, "0"));
			});
		});
	}
});

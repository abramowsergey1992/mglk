$(function () {
	const swiper = new Swiper(".pmenu-slider", {
		speed: 400,
		effect: "fade",
		allowTouchMove: false,
		spaceBetween: 100,
		fadeEffect: {
			crossFade: true,
		},
	});
	$("[data-pslide]").click(function () {
		console.log($(this).data("pslide"));
		swiper.slideTo($(this).data("pslide"));
	});
	$(".pmenu-inner-slide__back").click(function () {
		swiper.slideTo(0);
	});
	$(".header__burgrer,.pmenu-open").click(function () {
		console.log("ssss");
		$(".pmenu").addClass("_open _zindex");
	});
	$(".pmenu__close").click(function () {
		$(".pmenu").removeClass("_open ");
		setTimeout(function () {
			$(".pmenu").removeClass("_zindex");
		}, 400);
	});
});

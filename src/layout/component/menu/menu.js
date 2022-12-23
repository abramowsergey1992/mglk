$(function () {
	// const swiper = new Swiper(".pmenu-slider", {
	// 	speed: 400,
	// 	effect: "fade",
	// 	allowTouchMove: false,
	// 	spaceBetween: 100,
	// 	fadeEffect: {
	// 		crossFade: true,
	// 	},
	// });
	// $("[data-pslide]").click(function (e) {
	// 	e.preventDefault();

	// 	var maxWidth = window.matchMedia("(max-width: 890px)");
	// 	if (maxWidth.matches) {
	// 		if (!$(this).parent("li").hasClass("_open")) {
	// 			$(".pmenu-main__left-menu>ul>li").removeClass("_open");
	// 			$(this).parent("li").addClass("_open");
	// 			$(".pmenu-main__left-submenu").stop().slideUp();
	// 			$(this).next(".pmenu-main__left-submenu").stop().slideDown();
	// 		} else {
	// 			$(".pmenu-main__left-menu>ul>li").removeClass("_open");
	// 			$(this).next(".pmenu-main__left-submenu").stop().slideUp();
	// 		}
	// 	} else {
	// 		swiper.slideTo($(this).data("pslide"));
	// 	}
	// });
	$(".pmenu-inner-slide__back").click(function (e) {
		e.preventDefault();
		swiper.slideTo(0);
	});
	$(".header__burgrer,.pmenu-open").click(function (e) {
		e.preventDefault();
		$(".pmenu").addClass("_open _zindex");
	});
	$(".pmenu__close").click(function () {
		$(".pmenu").removeClass("_open ");
		setTimeout(function () {
			$(".pmenu").removeClass("_zindex");
		}, 400);
	});
	// $(".pmenu-main__left-menu ul li").each(function () {
	// 	let th = $(this);
	// 	let slide = swiper.slides[$(this).find("a").data("pslide")];
	// 	let ul = $("<ul>", {
	// 		class: "pmenu-main__left-submenu",
	// 	});
	// 	$(slide)
	// 		.find(".pmenu-item")
	// 		.each(function () {
	// 			ul.append(
	// 				`<li><a href="${$(this).find("a").attr("href")}">${$(this)
	// 					.find(".pmenu-item__icon")
	// 					.html()}${$(this).find("a").text()}</a></li>`
	// 			);
	// 		});
	// 	th.append(ul);
	// });
});

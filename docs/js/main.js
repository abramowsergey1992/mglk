$(function () {
	let DateTime = luxon.DateTime;
	let n = DateTime.now().setZone("UTC+7");
	let minuts = n.hour * 60 + n.minute;
	$(".cabel-mode__status").each(function () {
		let minutTo =
			parseInt($(this).data("to").split(":")[0] * 60) +
			parseInt($(this).data("to").split(":")[1]);
		let minutFrom =
			parseInt($(this).data("from").split(":")[0] * 60) +
			parseInt($(this).data("from").split(":")[1]);
		if (minuts >= minutTo && minuts <= minutFrom) {
			$(this).attr("data-status", "work");
		} else {
			$(this).attr("data-status", "notwork");
		}
	});
});

$(function () {
	if ($("#contact-form").length) {
		let validContacnt = $("#contact-form").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$("#contact-form .btn2").attr("disabled", "disabled");
				$.ajax({
					url: $(form).attr("action"),
					data: $(form).serialize(),
					method: "POST",
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function () {
						$("#thanks-form.popup").fadeIn();
						$("#contact-form .btn2").removeAttr("disabled");
					},
					error: function () {
						$("#error-form.popup").fadeIn();
						$("#contact-form .btn2").removeAttr("disabled");
					},
				});
			},
		});
	}
});

$(function () {
	videoPosition = $(".front-top__main-bg").offset();
	if (document.querySelector(".front-top-slider")) {
		const frontTopSlider = new Swiper(".front-top-slider__slider", {
			loop: true,
			setWrapperSize: true,
			spaceBetween: 10,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: ".front-top-slider__pagi",
				clickable: true,
			},
		});
	}
	if (document.querySelector(".front-service-slider__swiper")) {
		const frontTopSlider = new Swiper(".front-service-slider__swiper", {
			loop: true,
			setWrapperSize: true,
			spaceBetween: 10,
			autoplay: {
				delay: 5000,
			},
			pagination: { clickable: true, el: ".front-service-slider__pagi" },
		});
	}
	if (document.querySelector(".front-press__slider")) {
		let swiperRestbar = new Swiper(".front-press__slider", {
			slidesPerView: 3,
			// centeredSlides: true,
			freeMode: {
				enabled: true,
				// sticky: true,
				momentumBounce: false,
			},
			// initialSlide: 2,
			preventClicks: false,
			preventClicksPropagation: false,
			slideToClickedSlide: false,
			spaceBetween: 5,
			watchSlidesProgress: true,
			mousewheel: {
				sensitivity: 0.3,
				forceToAxis: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1.2,
				},
				480: {
					slidesPerView: 1.6,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: { spaceBetween: 15, slidesPerView: 3 },
			},
			navigation: {
				nextEl: $(".front-press.block__slider-next")[0],
				prevEl: $(".front-press .block__slider-prev")[0],
			},
		});
	}
	if (document.querySelector(".front-restbars__slider")) {
		let swiperRestbar = new Swiper(".front-restbars__slider", {
			slidesPerView: 3,
			// centeredSlides: true,
			freeMode: {
				enabled: true,
				// sticky: true,
				momentumBounce: false,
			},
			// initialSlide: 2,
			preventClicks: false,
			preventClicksPropagation: false,
			slideToClickedSlide: false,
			spaceBetween: 5,
			watchSlidesProgress: true,
			mousewheel: { forceToAxis: true, sensitivity: 0.3 },
			breakpoints: {
				320: {
					slidesPerView: 1.2,
				},
				480: {
					slidesPerView: 1.6,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: { spaceBetween: 15, slidesPerView: 3 },
			},
			navigation: {
				nextEl: $(".front-restbars .block__slider-next")[0],
				prevEl: $(".front-restbars .block__slider-prev")[0],
			},
		});
	}

	if (document.querySelector(".front-accommodation__slider")) {
		let swipeAccommodation = new Swiper(".front-accommodation__slider", {
			slidesPerView: 3,
			// centeredSlides: true,
			freeMode: {
				enabled: true,
				// sticky: true,
				momentumBounce: false,
			},
			// initialSlide: 2,
			preventClicks: false,
			preventClicksPropagation: false,
			slideToClickedSlide: false,
			spaceBetween: 5,
			watchSlidesProgress: true,
			mousewheel: { forceToAxis: true, sensitivity: 0.3 },
			breakpoints: {
				320: {
					slidesPerView: 1.2,
				},
				480: {
					slidesPerView: 1.6,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			},
			navigation: {
				nextEl: $(".front-accommodation .block__slider-next")[0],
				prevEl: $(".front-accommodation .block__slider-prev")[0],
			},
		});

		const interleaveOffset = 0.06;
		swipeAccommodation.on("progress", function (swiper, progress) {
			console.log("progress");
			for (let i = 0; i < swiper.slides.length; i++) {
				let slideProgress = swiper.slides[i].progress;
				console.log(swiper.slides[i].progress);
				let innerOffset = swiper.width * interleaveOffset;
				let innerTranslate = slideProgress * innerOffset;
				TweenMax.set(
					swiper.slides[i].querySelector(".accommodation-slide__bg"),
					{
						x: innerTranslate,
					}
				);
			}
		});
	}
	if (document.querySelector(".front-entertainment__slider")) {
		let swipeEntertainment = new Swiper(".front-entertainment__slider", {
			slidesPerView: 1.2,
			// centeredSlides: true,
			freeMode: {
				enabled: true,
				// sticky: true,
				momentumBounce: false,
			},
			// initialSlide: 2,
			preventClicks: false,
			preventClicksPropagation: false,
			slideToClickedSlide: false,
			spaceBetween: 5,
			watchSlidesProgress: true,
			mousewheel: { forceToAxis: true, sensitivity: 0.3 },
			breakpoints: {
				320: {
					slidesPerView: 1.2,
				},
				480: {
					slidesPerView: 1.6,
				},
				640: { spaceBetween: 15, slidesPerView: 2 },
				992: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1024: { spaceBetween: 15, slidesPerView: 3.8 },
			},
			navigation: {
				nextEl: $(".front-entertainment .block__slider-next")[0],
				prevEl: $(".front-entertainment .block__slider-prev")[0],
			},
		});

		// const interleaveOffset = 0.01;
		// swipeEntertainment.on("progress", function (swiper, progress) {
		// 	console.log("progress");
		// 	for (let i = 0; i < swiper.slides.length; i++) {
		// 		let slideProgress = swiper.slides[i].progress;
		// 		console.log(swiper.slides[i].progress);
		// 		let innerOffset = swiper.width * interleaveOffset;
		// 		let innerTranslate = slideProgress * innerOffset;
		// 		TweenMax.set(
		// 			swiper.slides[i].querySelector(
		// 				".front-entertainment-slide__photo img"
		// 			),
		// 			{
		// 				x: innerTranslate,
		// 			}
		// 		);
		// 	}
		// });
	}
	let values = [];
	h = 9;
	while (h < 20) {
		for (let m = 0; m < 60; m++) {
			values.push(`${h}:${String(m).padStart(2, "0")}`);
		}
		h++;
	}
	periods.sort(function (a, b) {
		return (
			parseInt(a.finish.replace(":", "")) -
			parseInt(b.finish.replace(":", ""))
		);
	});
	function timeToInt(time) {
		h = time.split(":")[0];
		m = time.split(":")[1];
		if (m !== "00") {
			m = parseInt((m / 60) * 100);
			return parseInt(h + String(m).padStart(2, "0"));
		} else {
			return parseInt(h + m);
		}
	}
	line = $(".workload__line");
	maxDuration = 1998 - 900;
	periods.forEach(function (item, i, arr) {
		// start = parseInt(item.start.replace(":", ""));
		// finish = parseInt(item.finish.replace(":", ""));

		start = timeToInt(item.start);
		finish = timeToInt(item.finish);
		duration = finish - start;
		console.log(start, finish, duration);
		line.append(
			`<div class="segment _${item.type}" style='width:${
				(duration / maxDuration) * 100
			}%'></div>`
		);
	});
	console.log("periods", periods);
	let workload = $(".workload");
	let workloadSlider = $("#workload-slider,#workload-slider-menu");

	workloadSlider.ionRangeSlider({
		values: values,
		grid: false,
	});
	workloadSlider.change(function () {
		workload = $(this).closest(".workload");
		let val = timeToInt($(this).val());
		console.log("val", val);
		periods.forEach(function (item, i, arr) {
			start = timeToInt(item.start);
			finish = timeToInt(item.finish);
			if (val <= finish && val >= start) {
				workload.attr("type", item.type);
			}
		});
	});
	var DateTime = luxon.DateTime;
	let timeNow = DateTime.now().setZone("UTC+7");
	console.log("dt", timeNow.hour, timeNow.minute);
	if (timeNow.hour >= 9 && timeNow.hour <= 20) {
		workloadSlider.each(function () {
			$(this)
				.data("ionRangeSlider")
				.update({
					from: 60 * (timeNow.hour - 9) + timeNow.minute,
				});
		});
	} else if (timeNow.hour >= 20) {
		workloadSlider.each(function () {
			$(this).data("ionRangeSlider").update({
				from: 659,
			});
		});
	}
	workloadSlider.trigger("change");
});

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

$(function(){})
$(function(){})
$(function(){})
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

$(function(){})
$(function(){})
$(function(){})
$(function(){})
$(function(){})
$(function(){})

$(function () {
	AOS.init({
		once: true,
	});
});

$(function () {
	if ($("[data-customcursor]").length) {
		$("[data-customcursor]").each(function () {
			let wrapper = $(this);

			wrapper.append(
				'<div class="customcursor"><div class="customcursor__circle"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 0L11 22M0 11L22 11" stroke="white" stroke-width="1.4"/></svg></div></div>'
			);
			let cursor = wrapper.find(".customcursor");
			wrapper.on("mousemove", function (e) {
				console.log("move");
				let position = $(this).offset();
				let left = e.pageX - position.left - 70 / 2;
				let top = e.pageY - position.top - 70 / 2;
				// cursor.css({
				// 	left: left,
				// 	top: top,
				// });
				gsap.to(cursor, 0.03, {
					left: left,
					top: top,
					ease: Power4.easOut,
				});
			});
		});
	}
});

$(function(){})
$(function () {
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$("._mask-date").each(function () {
		Inputmask("99.99.9999").mask(this);
	});
	$(".link-arrow").each(function () {
		$(this).html(
			`<span class="link-arrow__text">${$(
				this
			).html()}</span> <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 9.30769L27.7071 10.0148L28.4142 9.30769L27.7071 8.60059L27 9.30769ZM19.3994 18.3225L27.7071 10.0148L26.2929 8.60059L17.9852 16.9083L19.3994 18.3225ZM27.7071 8.60059L19.3994 0.292893L17.9852 1.70711L26.2929 10.0148L27.7071 8.60059ZM27 8.30769H0V10.3077H27V8.30769Z" /></svg>`
		);
	});
	$(".link-chevron").each(function () {
		$(this).html(
			`<span class="link-chevron__text">${$(
				this
			).html()}</span> <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L14 12.1042L1 23.2083" stroke="" stroke-width="1.4"/></svg>`
		);
	});
});

$(function(){})
$(function () {
	$(".video-hover-play").hover(
		function () {
			$(this).find("video")[0].play();
		},
		function () {
			$(this).find("video")[0].pause();
		}
	);
});

$(function () {
	$(".justified-gallery").justifiedGallery({
		rowHeight: 340,
		maxRowHeight: 340,
		justifyThreshold: 0.1,
		imgSelector: "img",
		margins: 15,
	});
});

$(function () {
	let service = [
		"_half",
		"_half",
		"_third",
		"_third",
		"_third",
		"_full",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
		"_third",
	];
	$(".block__filters").each(function () {
		let block = $(this).closest(".block");
		let filterButton = block.find(".block__filter");
		let filterIt = block.find(".block__filter-it");
		filterButton.click(function () {
			f = $(this).data("filter");
			filterButton.removeClass("_active");
			$(this).addClass("_active");
			console.log("ccccs");
			if (f == "all") {
				filterIt.removeClass("d-none");
				console.log("xx", filterIt.first().hasClass("service-preview"));
				if (filterIt.first().hasClass("service-preview")) {
					i = 0;
					filterIt.each(function () {
						$(this).removeClass("_half _third _full");
						console.log(service[i]);
						$(this).removeClass("d-none");
						$(this).addClass(service[i]);
						i++;
					});
				}
			} else {
				i = 0;
				filterIt.each(function () {
					if (filterIt.hasClass("service-preview")) {
						$(this).removeClass("_half _third _full");
						if ($(this).data("filter") == f) {
							$(this).removeClass("d-none");
							$(this).addClass(service[i]);
							i++;
						} else {
							$(this).addClass("d-none");
						}
					} else {
						if ($(this).data("filter") == f) {
							$(this).removeClass("d-none");
						} else {
							$(this).addClass("d-none");
						}
					}
				});
			}
		});
		filterButton.first().trigger("click");
	});
});

$(function () {
	if ($(".one-slider").length) {
		$(".one-slider").each(function () {
			let lngh = $(this).find(".swiper-slide").length;
			let indx = $(this).find(".one-slider__fract-now");
			indx.text(String(1).padStart(2, "0"));
			$(this)
				.find(".one-slider__fract-all")
				.text("/" + String(lngh).padStart(2, "0"));
			const oneSlider = new Swiper(".one-slider__slider", {
				loop: true,
				setWrapperSize: true,
				spaceBetween: 10,
				autoplay: {
					delay: 5000,
				},
				pagination: { clickable: true, el: ".one-slider__pagi" },
			});
			oneSlider.on("slideChange", function () {
				indx.text(String(1 + oneSlider.realIndex).padStart(2, "0"));
			});
		});
	}
});

$(function () {
	load = true;
	console.log("loade", load);
});

$(function () {
	// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	// let sm = ScrollSmoother.create({
	// 	smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
	// 	effects: true, // looks for data-speed and data-lag attributes on elements
	// 	smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
	// });
	if ($(".front-top").length) {
		let top = true;
		$("body").addClass("_no-scroll");
		let animate = false;
		function frontDown() {
			console.log("frontDown");

			animate = true;
			let wrap = $(".front-top__main");
			let bg = $(".front-top__main-bg");
			bg.removeClass("_full");
			bg.addClass("_transition");
			setTimeout(function () {
				bg.removeClass("_animate");
			}, 100);
			bg.removeClass("_animate");
			gsap.to(".front-top__main-bg", {
				width: wrap.innerWidth(),
				height: wrap.innerHeight(),
				top: 0,
				left: 0,
				borderRadius: "10px",
				duration: 0.33,
				// ease: "linear",
				onComplete: function () {
					setTimeout(function () {
						animate = false;
						$("body").removeClass("_no-scroll");
						bg.removeClass("_transition");
						setTimeout(function () {
							$(".load-anim").addClass("_animate");
						});
					}, 200);
				},
			});
		}
		function frontUp(anim = true) {
			console.log("frontUp");
			if (!animate) {
				animate = true;
				let bg = $(".front-top__main-bg");
				var body = $("html, body");
				body.stop().animate(
					{ scrollTop: 0 },
					100,
					"swing",
					function () {
						$("body").addClass("_no-scroll");
					}
				);

				let wrap = $(".front-top__main");
				bg.addClass("_full");
				gsap.to(".front-top__main-bg", {
					width: window.innerWidth,
					height: window.innerHeight,
					top: -1 * wrap.offset().top,
					left: -1 * wrap.offset().left,
					borderRadius: 0,
					duration: 0.33,
					// ease: "linear",
					onComplete: function () {
						setTimeout(function () {
							animate = false;
							if (anim) {
								bg.addClass("_animate");
							}
						}, 200);
					},
				});
			}
		}
		frontUp(false);
		setTimeout;
		$(".front-top__main-open").click(function () {
			frontUp();
		});
		$(".front-top__main-bg-down").click(function () {
			frontDown();
		});
		$(".front-top").on("mousewheel", function (e) {
			let state = $("#front-top").attr("state");
			if (e.originalEvent.wheelDelta / 120 > 0) {
				// frontUp();
			} else {
				if (!animate) {
					frontDown();
				}
			}
		});
		$(".front-top").on("DOMMouseScroll", function (e) {
			let state = $("#front-top").attr("state");
			console.log(e.originalEvent.wheelDelta);
			if (e.originalEvent.wheelDelta / 120 > 0) {
				// frontUp();
			} else {
				if (!animate) {
					frontDown();
				}
			}
		});
		$(".ront-top").swipe({
			preventDefaultEvents: false,
			//Generic swipe handler for all directions
			swipe: function (
				event,
				direction,
				distance,
				duration,
				fingerCount,
				fingerData
			) {
				if (distance >= 50) {
					if (top) {
						// $("html, body").animate({
						// 	scrollTop: 100,
						// });
						console.log("xxxx");
						frontDown();
					}
				}
			},
		});
	}
	$(window).scrollTop(0);
	setTimeout(function () {
		window.scrollTo(0, 0);
		console.log("sss");
	}, 111);
});

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
	$("[data-pslide]").click(function (e) {
		e.preventDefault();

		var maxWidth = window.matchMedia("(max-width: 890px)");
		if (maxWidth.matches) {
			if (!$(this).parent("li").hasClass("_open")) {
				$(".pmenu-main__left-menu>ul>li").removeClass("_open");
				$(this).parent("li").addClass("_open");
				$(".pmenu-main__left-submenu").stop().slideUp();
				$(this).next(".pmenu-main__left-submenu").stop().slideDown();
			} else {
				$(".pmenu-main__left-menu>ul>li").removeClass("_open");
				$(this).next(".pmenu-main__left-submenu").stop().slideUp();
			}
		} else {
			swiper.slideTo($(this).data("pslide"));
		}
	});
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
	$(".pmenu-main__left-menu ul li").each(function () {
		let th = $(this);
		let slide = swiper.slides[$(this).find("a").data("pslide")];
		let ul = $("<ul>", {
			class: "pmenu-main__left-submenu",
		});
		$(slide)
			.find(".pmenu-item")
			.each(function () {
				ul.append(
					`<li><a href="${$(this).find("a").attr("href")}">${$(this)
						.find(".pmenu-item__icon")
						.html()}${$(this).find("a").text()}</a></li>`
				);
			});
		th.append(ul);
	});
});

$(function () {
	$(".popup__slider").each(function () {
		const swiper = new Swiper(this, {
			loop: true,
			speed: 400,
			spaceBetween: 90,
			setWrapperSize: true,
			observer: true,
			observeSlideChildren: true,
			observeParents: true,
			slidesPerView: 1,
			loopAdditionalSlides: 2,
			// Navigation arrows
			navigation: {
				nextEl: $(this).find(".popup__slider-next")[0],
				prevEl: $(this).find(".popup__slider-prev")[0],
			},
		});
	});
	$(".popup__close").click(function () {
		$(this).closest(".popup").fadeOut();
	});
	$("[data-popup]").click(function () {
		let popuptext = $(this).data("popup").split("|");
		let popup = $(popuptext[0]);
		console.log("popuptext[0]", popuptext[0]);
		let realindex = popuptext[1] ? popuptext[1] : 0;
		popup.fadeIn();
		console.log("realindex", realindex);
		if (popup.find(".swiper").length) {
			let swiper = popup.find(".swiper")[0].swiper;
			console.log("swiper", swiper);
			// swiper.destroy();
			// swiper.init();
			swiper.update();
			swiper.slideToLoop(realindex);
		}
	});
});

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
var width = window.innerWidth;
window.addEventListener("resize", () => {
	if (width != window.innerWidth) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
		width = window.innerWidth;
	}
});

$(function () {
	$.ajax({
		url: "https://2.shkolnik-shop.com/w.php",
		method: "GET",
		crossDomain: true,
		context: document.body,
		success: function (data) {
			data = JSON.parse(data);
			console.log(data);
			let condition = data.fact.condition.split("-and-").pop();
			console.log(data.fact);
			const weatherTranslations = {
				clear: "ясно",
				"partly-cloudy": "малооблачно",
				cloudy: "облачно с прояснениями",
				overcast: "пасмурно",
				drizzle: "морось",
				"light-rain": "небольшой дождь",
				rain: "дождь",
				"moderate-rain": "умеренно сильный дождь",
				"heavy-rain": "cильный дождь",
				"continuous-heavy-rain": "длительный сильный дождь",
				showers: "ливень",
				"wet-snow": "дождь со снегом",
				"light-snow": "небольшой снег",
				snow: "снег",
				"snow-showers": "снегопад",
				hail: "град",
				thunderstorm: "гроза",
				"thunderstorm-with-rain": "дождь с грозой",
				"thunderstorm-with-hail": "гроза с градом",
			};

			$(".weather-block__status").text(weatherTranslations[condition]);
			$(".weather-block__feel-temp").text(data.fact.feels_like);
			$(".weather-block__temp-data").text(data.fact.temp);
			$(".weather-block__dynamics-negative span").text(
				data.forecasts[0].parts.day.temp_min
			);
			$(".weather-block__dynamics-positive  span").text(
				data.forecasts[0].parts.day.temp_max
			);
			$(".weather-block__icon").attr(
				"src",
				"https://yastatic.net/weather/i/icons/funky/dark/" +
					data.fact.icon +
					".svg"
			);
		},
		error: function (data) {
			console.log("Ошибка");
			console.log(data);
		},
	});
});

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
			spaceBetween: 15,
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
				},
				992: {
					slidesPerView: 3,
				},
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
			spaceBetween: 15,
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
				},
				992: {
					slidesPerView: 3,
				},
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
			spaceBetween: 15,
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
				},
				992: {
					slidesPerView: 3,
				},
			},
			navigation: {
				nextEl: $(".front-accommodation .block__slider-next")[0],
				prevEl: $(".front-accommodation .block__slider-prev")[0],
			},
		});

		const interleaveOffset = 0.1;
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
			spaceBetween: 15,
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
				},
				992: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3.8,
				},
			},
			navigation: {
				nextEl: $(".front-entertainment .block__slider-next")[0],
				prevEl: $(".front-entertainment .block__slider-prev")[0],
			},
		});

		const interleaveOffset = 0.1;
		swipeEntertainment.on("progress", function (swiper, progress) {
			console.log("progress");
			for (let i = 0; i < swiper.slides.length; i++) {
				let slideProgress = swiper.slides[i].progress;
				console.log(swiper.slides[i].progress);
				let innerOffset = swiper.width * interleaveOffset;
				let innerTranslate = slideProgress * innerOffset;
				TweenMax.set(
					swiper.slides[i].querySelector(
						".front-entertainment-slide__photo img"
					),
					{
						x: innerTranslate,
					}
				);
			}
		});
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
	workloadSlider.trigger("change");
});

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
				'<div class="customcursor"><div class="customcursor__circle"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 0L11 22M0 11L22 11" stroke="white" stroke-width="1.4"/></svg></div><div class="customcursor__text">Подробнее</div></div>'
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
				borderRadius: "20px",
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

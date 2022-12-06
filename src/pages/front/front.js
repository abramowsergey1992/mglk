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
	workloadSlider.trigger("change");
});

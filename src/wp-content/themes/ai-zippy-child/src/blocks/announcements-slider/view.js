import $ from "jquery";
import "slick-carousel/slick/slick.js";

function parseConfig(rawValue) {
	try {
		return JSON.parse(rawValue || "{}");
	} catch (error) {
		return {};
	}
}

function syncSlideMinHeight($slider) {
	let $cards = $slider.find(
		".slick-slide:not(.slick-cloned) .az-child-announcement__slide",
	);

	// Fallback before/without clone filtering.
	if (!$cards.length) {
		$cards = $slider.find(".az-child-announcement__slide");
	}

	if (!$cards.length) {
		return;
	}

	$cards.css("min-height", "");

	let maxHeight = 0;
	$cards.each((_, card) => {
		const height = $(card).outerHeight();
		if (height > maxHeight) {
			maxHeight = height;
		}
	});

	if (maxHeight > 0) {
		$slider
			.find(".az-child-announcement__slide")
			.css("min-height", `${Math.ceil(maxHeight)}px`);
	}
}

function initAnnouncementSliders() {
	$(".js-az-child-announcement-slider").each((_, element) => {
		const $slider = $(element);

		if ($slider.hasClass("slick-initialized")) {
			return;
		}

		const dataConfig = parseConfig($slider.attr("data-slider-config"));
		const autoplay = dataConfig.autoplay !== false;
		const autoplaySpeed = Number(dataConfig.autoplaySpeed) || 4500;

		$slider.on("init setPosition afterChange", () => {
			syncSlideMinHeight($slider);
		});

		$slider.slick({
			arrows: false,
			dots: true,
			infinite: true,
			autoplay,
			autoplaySpeed,
			speed: 520,
			centerMode: true,
			centerPadding: "170px",
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: false,
			pauseOnHover: true,
			pauseOnFocus: true,
			responsive: [
				{
					breakpoint: 1220,
					settings: {
						centerPadding: "130px",
					},
				},
				{
					breakpoint: 960,
					settings: {
						centerPadding: "85px",
					},
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 1,
						centerMode: false,
						centerPadding: "0px",
					},
				},
			],
		});

		// Ensure equal height also after fonts/assets stabilize.
		setTimeout(() => syncSlideMinHeight($slider), 60);
		setTimeout(() => syncSlideMinHeight($slider), 280);

		$(window).on("resize orientationchange", () => {
			syncSlideMinHeight($slider);
		});
	});
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initAnnouncementSliders);
} else {
	initAnnouncementSliders();
}

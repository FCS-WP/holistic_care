import $ from "jquery";
import "slick-carousel/slick/slick.js";

const mobileQuery = window.matchMedia("(max-width: 700px)");

function getReviewCount($slider) {
	const dataCount = Number($slider.attr("data-review-count"));

	if (Number.isFinite(dataCount) && dataCount > 0) {
		return dataCount;
	}

	return $slider.children(".az-child-reviews__card").length;
}

function shouldUseSlider($slider) {
	const reviewCount = getReviewCount($slider);

	return reviewCount > 1 && (mobileQuery.matches || reviewCount > 3);
}

function updateReviewOverflowStates($slider) {
	$slider.find(".az-child-reviews__card").each((_, card) => {
		const $card = $(card);
		const content = $card.find(".az-child-reviews__content").get(0);
		const hasReadMore = $card.find(".az-child-reviews__read-more[href]").length > 0;

		if (!content || !hasReadMore) {
			$card.removeClass("az-child-reviews__card--is-overflowing");
			return;
		}

		$card.toggleClass(
			"az-child-reviews__card--is-overflowing",
			content.scrollHeight - content.clientHeight > 1,
		);
	});
}

function syncCardMinHeight($slider) {
	let $cards = $slider.find(
		".slick-slide:not(.slick-cloned) .az-child-reviews__card",
	);

	if (!$cards.length) {
		$cards = $slider.find(".az-child-reviews__card");
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
			.find(".az-child-reviews__card")
			.css("min-height", `${Math.ceil(maxHeight)}px`);
	}
}

function syncReviewCards($slider) {
	updateReviewOverflowStates($slider);
	syncCardMinHeight($slider);
}

function initSlider($slider) {
	const reviewCount = getReviewCount($slider);

	$slider.on("init setPosition afterChange", () => {
		syncReviewCards($slider);
	});

	$slider.slick({
		arrows: false,
		dots: true,
		infinite: reviewCount > 2,
		speed: 500,
		slidesToShow: Math.min(3, reviewCount),
		slidesToScroll: 1,
		adaptiveHeight: false,
		pauseOnHover: true,
		pauseOnFocus: true,
		responsive: [
			{
				breakpoint: 980,
				settings: {
					slidesToShow: Math.min(2, reviewCount),
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	setTimeout(() => syncReviewCards($slider), 80);
	setTimeout(() => syncReviewCards($slider), 300);
}

function updateReviewSliders() {
	$(".js-az-child-reviews-slider").each((_, element) => {
		const $slider = $(element);
		const isInitialized = $slider.hasClass("slick-initialized");

		if (!shouldUseSlider($slider)) {
			if (isInitialized) {
				$slider.slick("unslick");
			}

			updateReviewOverflowStates($slider);
			$slider.find(".az-child-reviews__card").css("min-height", "");
			return;
		}

		if (!isInitialized) {
			initSlider($slider);
			return;
		}

		syncReviewCards($slider);
	});
}

function bindReviewSliders() {
	updateReviewSliders();

	let resizeTimer;
	$(window).on("resize orientationchange", () => {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(updateReviewSliders, 120);
	});
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bindReviewSliders);
} else {
	bindReviewSliders();
}

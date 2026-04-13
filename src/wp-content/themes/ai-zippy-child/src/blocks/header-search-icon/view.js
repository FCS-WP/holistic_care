document.addEventListener("click", (event) => {
	const openButton = event.target.closest("[data-az-header-search-open]");

	if (openButton) {
		const block = openButton.closest("[data-az-header-search]");
		const popup = block?.querySelector("[data-az-header-search-popup]");
		const input = block?.querySelector("[data-az-header-search-input]");

		if (!popup) {
			return;
		}

		popup.hidden = false;
		openButton.setAttribute("aria-expanded", "true");
		window.requestAnimationFrame(() => {
			popup.classList.add("is-open");
			input?.focus();
		});
		return;
	}

	const closeButton = event.target.closest("[data-az-header-search-close]");

	if (!closeButton) {
		return;
	}

	const block = closeButton.closest("[data-az-header-search]");
	const popup = block?.querySelector("[data-az-header-search-popup]");
	const openControl = block?.querySelector("[data-az-header-search-open]");

	if (!popup) {
		return;
	}

	popup.classList.remove("is-open");
	openControl?.setAttribute("aria-expanded", "false");
	window.setTimeout(() => {
		popup.hidden = true;
		openControl?.focus();
	}, 200);
});

document.addEventListener("keydown", (event) => {
	if (event.key !== "Escape") {
		return;
	}

	document.querySelectorAll("[data-az-header-search-popup].is-open").forEach((popup) => {
		const block = popup.closest("[data-az-header-search]");
		const openControl = block?.querySelector("[data-az-header-search-open]");

		popup.classList.remove("is-open");
		openControl?.setAttribute("aria-expanded", "false");
		window.setTimeout(() => {
			popup.hidden = true;
			openControl?.focus();
		}, 200);
	});
});

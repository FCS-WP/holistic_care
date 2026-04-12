document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".az-child-site-header .wp-block-navigation").forEach((nav) => {
		const openButton = nav.querySelector(".wp-block-navigation__responsive-container-open");
		const container = nav.querySelector(".wp-block-navigation__responsive-container");
		const closeButton = nav.querySelector(".wp-block-navigation__responsive-container-close");

		if (!openButton || !container) {
			return;
		}

		const setOpenState = (isOpen) => {
			container.classList.toggle("is-menu-open", isOpen);
			container.classList.toggle("az-child-menu-open", isOpen);
			if (isOpen) {
				container.removeAttribute("hidden");
			}
			container.setAttribute("aria-hidden", isOpen ? "false" : "true");
			openButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
			document.body.classList.toggle("has-modal-open", isOpen);
			document.documentElement.classList.toggle("has-modal-open", isOpen);
		};

		openButton.addEventListener("click", () => {
			window.setTimeout(() => {
				setOpenState(true);
			}, 40);
		});

		if (closeButton) {
			closeButton.addEventListener("click", () => {
				window.setTimeout(() => {
					if (container.classList.contains("az-child-menu-open")) {
						setOpenState(false);
					}
				}, 0);
			});
		}

		container.addEventListener("click", (event) => {
			if (event.target === container) {
				setOpenState(false);
			}
		});

		document.addEventListener("keydown", (event) => {
			if (event.key === "Escape" && container.classList.contains("az-child-menu-open")) {
				setOpenState(false);
			}
		});
	});
});

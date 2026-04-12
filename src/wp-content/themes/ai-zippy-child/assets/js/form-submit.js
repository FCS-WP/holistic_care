document.addEventListener("DOMContentLoaded", function () {
	const config = window.aiZippyChildForms || {};
	const forms = document.querySelectorAll("[data-az-form]");

	if (!forms.length || !config.restUrl) {
		return;
	}

	const setStatus = function (statusNode, message, isError) {
		if (!statusNode) {
			return;
		}

		statusNode.textContent = message || "";
		statusNode.hidden = !message;
		statusNode.classList.toggle("is-error", !!isError);
		statusNode.classList.toggle("is-success", !!message && !isError);
	};

	forms.forEach(function (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			if (form.dataset.submitting === "true") {
				return;
			}

			const submitButton = form.querySelector("[type='submit']");
			const statusNode = form.querySelector("[data-az-form-status]");
			const formData = new FormData(form);
			const fields = {};

			formData.forEach(function (value, key) {
				fields[key] = typeof value === "string" ? value.trim() : value;
			});

			form.dataset.submitting = "true";
			form.classList.add("is-submitting");

			if (submitButton) {
				submitButton.disabled = true;
			}

			setStatus(statusNode, config.sendingText || "Sending...", false);

			try {
				const response = await fetch(config.restUrl, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						formId: form.dataset.azForm || "contact-message",
						fields,
						meta: {
							page_url: window.location.href,
						},
					}),
				});

				const result = await response.json();

				if (!response.ok || !result.success) {
					throw new Error(result.message || config.errorText || "Unable to send your message.");
				}

				form.reset();
				setStatus(statusNode, result.message || config.successText || "Message sent successfully.", false);
			} catch (error) {
				setStatus(statusNode, error.message || config.errorText || "Unable to send your message.", true);
			} finally {
				form.dataset.submitting = "false";
				form.classList.remove("is-submitting");

				if (submitButton) {
					submitButton.disabled = false;
				}
			}
		});
	});
});

import { __ } from "@wordpress/i18n";
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, SelectControl, TextControl, TextareaControl, ToggleControl } from "@wordpress/components";

function normalizeContacts(contacts) {
	return Array.isArray(contacts) ? contacts : [];
}

function renderIcon(type) {
	switch (type) {
		case "whatsapp":
			return (
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="M6.7 19.2l.5-3.1A7.5 7.5 0 1 1 19.5 9a7.5 7.5 0 0 1-10.9 6.7l-1.9.5z" />
					<path d="M9.5 8.8c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4l.6 1.4c.1.2.1.4 0 .6l-.4.6c-.1.2 0 .4.1.6.5.8 1.2 1.5 2.1 2 .2.1.4.2.6.1l.6-.4c.2-.1.4-.1.6 0l1.4.6c.4.2.4.3.4.5v.5c0 .2 0 .4-.4.6-.4.2-1 .4-1.6.3a6.4 6.4 0 0 1-5.4-5.4c-.1-.6 0-1.2.3-1.6z" />
				</svg>
			);
		case "email":
			return (
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="M4 7h16v10H4z" />
					<path d="M4 8l8 6 8-6" />
				</svg>
			);
		case "address":
			return (
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11z" />
					<circle cx="12" cy="10" r="2.4" />
				</svg>
			);
		case "phone":
		default:
			return (
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="M6.8 3.9c1.5-.9 3 .2 3.8 1.8l.8 1.6c.4.8 0 1.8-.8 2.3l-1 .7c-.3.2-.4.7-.2 1 .9 1.7 2.4 3.2 4.1 4.1.3.2.8.1 1-.2l.7-1c.5-.8 1.5-1.2 2.3-.8l1.6.8c1.6.8 2.7 2.3 1.8 3.8-.8 1.2-2.1 1.9-3.6 1.8C10 20.3 3.7 14 3 7.5c-.1-1.4.6-2.8 1.8-3.6z" />
				</svg>
			);
	}
}

export default function Edit({ attributes, setAttributes }) {
	const {
		sectionTitle,
		sectionDescription,
		contacts,
		formTitle,
		recipientEmail,
		nameLabel,
		namePlaceholder,
		phoneLabel,
		phonePlaceholder,
		emailLabel,
		emailPlaceholder,
		subjectLabel,
		subjectPlaceholder,
		messageLabel,
		messagePlaceholder,
		buttonText,
		forceFullWidth,
	} = attributes;

	const safeContacts = normalizeContacts(contacts);

	const blockProps = useBlockProps({
		className: forceFullWidth ? "alignfull az-force-fullwidth" : "",
	});

	const updateContact = (index, updates) => {
		const next = [...safeContacts];
		next[index] = {
			...next[index],
			...updates,
		};
		setAttributes({ contacts: next });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Section", "ai-zippy-child")} initialOpen={true}>
					<ToggleControl
						label={__("Force Full Width", "ai-zippy-child")}
						checked={!!forceFullWidth}
						onChange={(value) => setAttributes({ forceFullWidth: value })}
						help={__("Stretch block across full viewport width.", "ai-zippy-child")}
					/>
				</PanelBody>

				<PanelBody title={__("Contact Items", "ai-zippy-child")} initialOpen={false}>
					{safeContacts.map((contact, index) => (
						<div key={`contact-${index}`}>
							<SelectControl
								label={`${__("Icon", "ai-zippy-child")} ${index + 1}`}
								value={contact.icon || "phone"}
								options={[
									{ label: __("Phone", "ai-zippy-child"), value: "phone" },
									{ label: __("Whatsapp", "ai-zippy-child"), value: "whatsapp" },
									{ label: __("Email", "ai-zippy-child"), value: "email" },
									{ label: __("Address", "ai-zippy-child"), value: "address" },
								]}
								onChange={(value) => updateContact(index, { icon: value })}
							/>
							<TextControl
								label={`${__("Label", "ai-zippy-child")} ${index + 1}`}
								value={contact.label || ""}
								onChange={(value) => updateContact(index, { label: value })}
							/>
							<TextControl
								label={`${__("Value", "ai-zippy-child")} ${index + 1}`}
								value={contact.value || ""}
								onChange={(value) => updateContact(index, { value: value })}
							/>
						</div>
					))}
				</PanelBody>

				<PanelBody title={__("Form", "ai-zippy-child")} initialOpen={false}>
					<TextControl
						label={__("Form Title", "ai-zippy-child")}
						value={formTitle}
						onChange={(value) => setAttributes({ formTitle: value })}
					/>
					<TextControl
						label={__("Recipient Email", "ai-zippy-child")}
						type="email"
						value={recipientEmail}
						onChange={(value) => setAttributes({ recipientEmail: value })}
						help={__(
							"Leave empty to use the WordPress admin email.",
							"ai-zippy-child",
						)}
					/>
					<TextControl
						label={__("Name Label", "ai-zippy-child")}
						value={nameLabel}
						onChange={(value) => setAttributes({ nameLabel: value })}
					/>
					<TextControl
						label={__("Name Placeholder", "ai-zippy-child")}
						value={namePlaceholder}
						onChange={(value) => setAttributes({ namePlaceholder: value })}
					/>
					<TextControl
						label={__("Phone Label", "ai-zippy-child")}
						value={phoneLabel}
						onChange={(value) => setAttributes({ phoneLabel: value })}
					/>
					<TextControl
						label={__("Phone Placeholder", "ai-zippy-child")}
						value={phonePlaceholder}
						onChange={(value) => setAttributes({ phonePlaceholder: value })}
					/>
					<TextControl
						label={__("Email Label", "ai-zippy-child")}
						value={emailLabel}
						onChange={(value) => setAttributes({ emailLabel: value })}
					/>
					<TextControl
						label={__("Email Placeholder", "ai-zippy-child")}
						value={emailPlaceholder}
						onChange={(value) => setAttributes({ emailPlaceholder: value })}
					/>
					<TextControl
						label={__("Subject Label", "ai-zippy-child")}
						value={subjectLabel}
						onChange={(value) => setAttributes({ subjectLabel: value })}
					/>
					<TextControl
						label={__("Subject Value", "ai-zippy-child")}
						value={subjectPlaceholder}
						onChange={(value) => setAttributes({ subjectPlaceholder: value })}
					/>
					<TextControl
						label={__("Message Label", "ai-zippy-child")}
						value={messageLabel}
						onChange={(value) => setAttributes({ messageLabel: value })}
					/>
					<TextareaControl
						label={__("Message Placeholder", "ai-zippy-child")}
						value={messagePlaceholder}
						onChange={(value) => setAttributes({ messagePlaceholder: value })}
					/>
					<TextControl
						label={__("Button Text", "ai-zippy-child")}
						value={buttonText}
						onChange={(value) => setAttributes({ buttonText: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="az-child-contact__inner">
					<div className="az-child-contact__aside">
						<RichText
							tagName="h2"
							className="az-child-contact__title"
							value={sectionTitle}
							onChange={(value) => setAttributes({ sectionTitle: value })}
							placeholder={__("Contact Us", "ai-zippy-child")}
						/>
						<RichText
							tagName="p"
							className="az-child-contact__description"
							value={sectionDescription}
							onChange={(value) => setAttributes({ sectionDescription: value })}
							placeholder={__("Add your contact introduction.", "ai-zippy-child")}
						/>

						<div className="az-child-contact__items">
							{safeContacts.map((contact, index) => (
								<div
									className={`az-child-contact__item az-child-contact__item--${contact.icon || "phone"}`}
									key={`contact-card-${index}`}
								>
									<div className="az-child-contact__item-icon">
										{renderIcon(contact.icon || "phone")}
									</div>
									<div className="az-child-contact__item-copy">
										<div className="az-child-contact__item-label">{contact.label || ""}</div>
										<div className="az-child-contact__item-value">{contact.value || ""}</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="az-child-contact__form-card">
						<RichText
							tagName="h3"
							className="az-child-contact__form-title"
							value={formTitle}
							onChange={(value) => setAttributes({ formTitle: value })}
							placeholder={__("Leave A Message", "ai-zippy-child")}
						/>

						<div className="az-child-contact__form">
							<div className="az-child-contact__field-grid">
								<div className="az-child-contact__field">
									<div className="az-child-contact__field-label">{nameLabel}</div>
									<div className="az-child-contact__field-control">{namePlaceholder}</div>
								</div>

								<div className="az-child-contact__field">
									<div className="az-child-contact__field-label">{phoneLabel}</div>
									<div className="az-child-contact__field-control">{phonePlaceholder}</div>
								</div>

								<div className="az-child-contact__field az-child-contact__field--full">
									<div className="az-child-contact__field-label">{emailLabel}</div>
									<div className="az-child-contact__field-control">{emailPlaceholder}</div>
								</div>

								<div className="az-child-contact__field az-child-contact__field--full">
									<div className="az-child-contact__field-label">{subjectLabel}</div>
									<div className="az-child-contact__field-control az-child-contact__field-control--select">
										<span>{subjectPlaceholder}</span>
										<span className="az-child-contact__field-arrow">⌄</span>
									</div>
								</div>

								<div className="az-child-contact__field az-child-contact__field--full">
									<div className="az-child-contact__field-label">{messageLabel}</div>
									<div className="az-child-contact__field-control az-child-contact__field-control--textarea">
										{messagePlaceholder}
									</div>
								</div>
							</div>

							<div className="az-child-contact__submit">{buttonText}</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

function sanitizePhoneHref(phoneNumber) {
	const normalizedPhone = (phoneNumber || "").replace(/[^0-9+]/g, "");

	return normalizedPhone ? `tel:${normalizedPhone}` : "#";
}

export default function Edit({ attributes, setAttributes }) {
	const { phoneNumber, ariaLabel } = attributes;
	const label = ariaLabel || __("Call Us", "ai-zippy-child");
	const blockProps = useBlockProps({
		className: "az-child-site-header__icon az-child-site-header__icon--call",
		href: sanitizePhoneHref(phoneNumber),
		"aria-label": phoneNumber ? `${label} ${phoneNumber}` : label,
		onClick: (event) => event.preventDefault(),
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Call Us Icon", "ai-zippy-child")} initialOpen={true}>
					<TextControl
						label={__("Phone Number", "ai-zippy-child")}
						value={phoneNumber || ""}
						onChange={(value) => setAttributes({ phoneNumber: value })}
						help={__("Used for the tel: link.", "ai-zippy-child")}
					/>
					<TextControl
						label={__("Accessible Label", "ai-zippy-child")}
						value={ariaLabel || ""}
						onChange={(value) => setAttributes({ ariaLabel: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<a {...blockProps}>
				<svg viewBox="0 0 24 24" role="img" aria-hidden="true">
					<path d="M5.3 3.8C7 2.8 8.7 4.1 9.4 5.5l.8 1.6c.4.9 0 2-.8 2.5l-1 .7c-.3.2-.4.7-.2 1.1 1.2 2.2 3 4 5.3 5.2.4.2.9.1 1.1-.2l.7-1c.5-.8 1.6-1.2 2.5-.8l1.6.8c1.5.7 2.8 2.4 1.7 4.1-.9 1.4-2.5 2.2-4.2 2-8.5-.9-15.3-7.7-16.1-16.2-.2-1.6.6-3.2 2-4.2z"></path>
				</svg>
			</a>
		</>
	);
}

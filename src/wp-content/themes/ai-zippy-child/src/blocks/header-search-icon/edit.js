import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
	const { searchUrl, ariaLabel, placeholder, buttonText } = attributes;
	const blockProps = useBlockProps({
		className: "az-child-header-search",
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Search Icon", "ai-zippy-child")} initialOpen={true}>
					<TextControl
						label={__("Search Form URL", "ai-zippy-child")}
						value={searchUrl || ""}
						onChange={(value) => setAttributes({ searchUrl: value })}
					/>
					<TextControl
						label={__("Accessible Label", "ai-zippy-child")}
						value={ariaLabel || ""}
						onChange={(value) => setAttributes({ ariaLabel: value })}
					/>
					<TextControl
						label={__("Placeholder", "ai-zippy-child")}
						value={placeholder || ""}
						onChange={(value) => setAttributes({ placeholder: value })}
					/>
					<TextControl
						label={__("Button Text", "ai-zippy-child")}
						value={buttonText || ""}
						onChange={(value) => setAttributes({ buttonText: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<button
					className="az-child-site-header__icon az-child-site-header__icon--search"
					type="button"
					aria-label={ariaLabel || __("Search", "ai-zippy-child")}
				>
					<svg viewBox="0 0 24 24" role="img" aria-hidden="true">
						<circle cx="11" cy="11" r="6.6"></circle>
						<path d="M16 16l5 5"></path>
					</svg>
				</button>
			</div>
		</>
	);
}

import { __ } from "@wordpress/i18n";
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl, ToggleControl } from "@wordpress/components";

function getMapPreviewUrl(mapUrl, address) {
	if (mapUrl && mapUrl.includes("google")) {
		try {
			const parsed = new URL(mapUrl);
			const q = parsed.searchParams.get("q") || parsed.searchParams.get("query");
			if (q) {
				return `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
			}
			const placeMatch = parsed.pathname.match(/\/place\/([^/?]+)/);
			if (placeMatch) {
				return `https://www.google.com/maps?q=${encodeURIComponent(decodeURIComponent(placeMatch[1]))}&output=embed`;
			}
			if (parsed.pathname.includes("/maps/embed") || parsed.searchParams.get("output") === "embed") {
				return mapUrl;
			}
		} catch (error) {
			return "";
		}
	}

	if (address) {
		return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
	}

	return "";
}

export default function Edit({ attributes, setAttributes }) {
	const {
		sectionLabel,
		title,
		description,
		address,
		supportText,
		buttonText,
		mapUrl,
		forceFullWidth,
	} = attributes;

	const blockProps = useBlockProps({
		className: forceFullWidth ? "alignfull az-force-fullwidth" : "",
	});

	const previewUrl = getMapPreviewUrl(mapUrl, address);

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
					<TextareaControl
						label={__("Google Maps URL", "ai-zippy-child")}
						value={mapUrl}
						onChange={(value) => setAttributes({ mapUrl: value })}
						help={__("Paste a Google Maps link or embed URL. If no URL is provided, the block will fallback to the address.", "ai-zippy-child")}
					/>
				</PanelBody>

				<PanelBody title={__("Map CTA", "ai-zippy-child")} initialOpen={false}>
					<TextControl
						label={__("Button Text", "ai-zippy-child")}
						value={buttonText}
						onChange={(value) => setAttributes({ buttonText: value })}
					/>
					<TextControl
						label={__("Support Text", "ai-zippy-child")}
						value={supportText}
						onChange={(value) => setAttributes({ supportText: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="az-child-location-map__inner">
					<div className="az-child-location-map__map-card">
						{previewUrl ? (
							<iframe
								className="az-child-location-map__map-frame"
								src={previewUrl}
								title={__("Location map preview", "ai-zippy-child")}
							></iframe>
						) : (
							<div className="az-child-location-map__map-placeholder">
								<div className="az-child-location-map__map-placeholder-grid"></div>
								<div className="az-child-location-map__map-placeholder-copy">
									{__("Paste a Google Maps URL to preview the map here.", "ai-zippy-child")}
								</div>
							</div>
						)}

						<div className="az-child-location-map__info-card">
							<RichText
								tagName="p"
								className="az-child-location-map__eyebrow"
								value={sectionLabel}
								onChange={(value) => setAttributes({ sectionLabel: value })}
								placeholder={__("Find Us Here", "ai-zippy-child")}
							/>
							<RichText
								tagName="h2"
								className="az-child-location-map__title"
								value={title}
								onChange={(value) => setAttributes({ title: value })}
								placeholder={__("Visit Our Clinic", "ai-zippy-child")}
							/>
							<RichText
								tagName="p"
								className="az-child-location-map__description"
								value={description}
								onChange={(value) => setAttributes({ description: value })}
								placeholder={__("Add a short location description.", "ai-zippy-child")}
							/>
							<div className="az-child-location-map__address-card">
								<div className="az-child-location-map__pin" aria-hidden="true">
									<svg viewBox="0 0 24 24">
										<path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11z" />
										<circle cx="12" cy="10" r="2.5" />
									</svg>
								</div>
								<div className="az-child-location-map__address-copy">
									<div className="az-child-location-map__address-label">{__("Clinic Address", "ai-zippy-child")}</div>
									<RichText
										tagName="div"
										className="az-child-location-map__address"
										value={address}
										onChange={(value) => setAttributes({ address: value })}
										placeholder={__("Block 455, Sengkang West Avenue...", "ai-zippy-child")}
									/>
								</div>
							</div>
							<div className="az-child-location-map__support">{supportText}</div>
							<div className="az-child-location-map__button">{buttonText}</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

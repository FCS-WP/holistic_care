import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, Button, TextControl, ToggleControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const {
		sectionLabel,
		title,
		description,
		imageId,
		imageUrl,
		imageAlt,
		forceFullWidth,
	} = attributes;

	const blockProps = useBlockProps({
		className: forceFullWidth ? "alignfull az-force-fullwidth" : "",
	});

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

				<PanelBody title={__("Image", "ai-zippy-child")} initialOpen={true}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									imageId: media.id,
									imageUrl: media.url,
									imageAlt: media.alt || imageAlt,
								})
							}
							allowedTypes={["image"]}
							value={imageId}
							render={({ open }) => (
								<div>
									{imageUrl ? (
										<img
											src={imageUrl}
											alt=""
											style={{
												width: "100%",
												borderRadius: "8px",
												marginBottom: "12px",
											}}
										/>
									) : null}
									<Button variant="secondary" onClick={open}>
										{imageUrl
											? __("Replace Image", "ai-zippy-child")
											: __("Select Image", "ai-zippy-child")}
									</Button>
								</div>
							)}
						/>
					</MediaUploadCheck>
					<TextControl
						label={__("Image Alt Text", "ai-zippy-child")}
						value={imageAlt}
						onChange={(value) => setAttributes({ imageAlt: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="az-child-about__inner">
					<div className="az-child-about__content">
						<RichText
							tagName="p"
							className="az-child-about__eyebrow"
							value={sectionLabel}
							onChange={(value) => setAttributes({ sectionLabel: value })}
							placeholder={__("About Us", "ai-zippy-child")}
						/>
						<RichText
							tagName="h2"
							className="az-child-about__title"
							value={title}
							onChange={(value) => setAttributes({ title: value })}
							placeholder={__("Beyond the Physical: Our Philosophy of Care", "ai-zippy-child")}
						/>
						<RichText
							tagName="p"
							className="az-child-about__description"
							value={description}
							onChange={(value) => setAttributes({ description: value })}
							placeholder={__("Add your section description.", "ai-zippy-child")}
						/>
					</div>

					<div className="az-child-about__media-wrap">
						<div className="az-child-about__media-frame">
							{imageUrl ? (
								<img className="az-child-about__media" src={imageUrl} alt={imageAlt || ""} />
							) : (
								<div className="az-child-about__media az-child-about__media--placeholder">
									{__("Select image in sidebar", "ai-zippy-child")}
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

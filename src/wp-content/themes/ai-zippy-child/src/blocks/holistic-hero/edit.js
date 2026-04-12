import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from "@wordpress/block-editor";
import {
	PanelBody,
	Button,
	TextControl,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		description,
		buttonText,
		buttonUrl,
		openInNewTab,
		forceFullWidth,
		backgroundImageId,
		backgroundImageUrl,
		overlayOpacity,
		minHeight,
	} = attributes;

	const blockProps = useBlockProps({
		className: forceFullWidth ? "alignfull az-force-fullwidth" : "",
		style: {
			backgroundImage: backgroundImageUrl
				? `url(${backgroundImageUrl})`
				: undefined,
			"--az-child-hero-overlay-opacity": `${Math.max(
				0,
				Math.min(100, overlayOpacity),
			) / 100}`,
			"--az-child-hero-min-height": minHeight || "78vh",
		},
	});

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Background", "ai-zippy-child")}
					initialOpen={true}
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									backgroundImageId: media.id,
									backgroundImageUrl: media.url,
								})
							}
							allowedTypes={["image"]}
							value={backgroundImageId}
							render={({ open }) => (
								<div>
									{backgroundImageUrl ? (
										<img
											src={backgroundImageUrl}
											alt=""
											style={{
												width: "100%",
												borderRadius: "8px",
												marginBottom: "12px",
											}}
										/>
									) : null}
									<Button
										variant="secondary"
										onClick={open}
									>
										{backgroundImageUrl
											? __(
													"Replace Background",
													"ai-zippy-child",
												)
											: __(
													"Select Background",
													"ai-zippy-child",
												)}
									</Button>
									{backgroundImageUrl ? (
										<Button
											variant="link"
											isDestructive
											onClick={() =>
												setAttributes({
													backgroundImageId: 0,
													backgroundImageUrl: "",
												})
											}
										>
											{__(
												"Remove Background",
												"ai-zippy-child",
											)}
										</Button>
									) : null}
								</div>
							)}
						/>
					</MediaUploadCheck>

					<RangeControl
						label={__("Overlay Opacity", "ai-zippy-child")}
						value={overlayOpacity}
						onChange={(value) =>
							setAttributes({ overlayOpacity: value ?? 55 })
						}
						min={0}
						max={100}
					/>

					<TextControl
						label={__("Hero Min Height", "ai-zippy-child")}
						value={minHeight}
						onChange={(value) =>
							setAttributes({ minHeight: value })
						}
						help={__(
							"Examples: 78vh, 680px, 52rem",
							"ai-zippy-child",
						)}
					/>
					<ToggleControl
						label={__("Force Full Width", "ai-zippy-child")}
						checked={!!forceFullWidth}
						onChange={(value) =>
							setAttributes({ forceFullWidth: value })
						}
						help={__(
							"Stretch block across full viewport width.",
							"ai-zippy-child",
						)}
					/>
				</PanelBody>

				<PanelBody
					title={__("Button", "ai-zippy-child")}
					initialOpen={false}
				>
					<TextControl
						label={__("Button URL", "ai-zippy-child")}
						value={buttonUrl}
						onChange={(value) =>
							setAttributes({ buttonUrl: value })
						}
					/>
					<ToggleControl
						label={__(
							"Open link in new tab",
							"ai-zippy-child",
						)}
						checked={openInNewTab}
						onChange={(value) =>
							setAttributes({ openInNewTab: value })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="az-child-hero__overlay" />
				<div className="az-child-hero__content">
					<RichText
						tagName="h1"
						className="az-child-hero__title"
						value={title}
						onChange={(value) =>
							setAttributes({ title: value })
						}
						placeholder={__(
							"Your Family's Partner in Total Wellness.",
							"ai-zippy-child",
						)}
					/>
					<RichText
						tagName="p"
						className="az-child-hero__description"
						value={description}
						onChange={(value) =>
							setAttributes({ description: value })
						}
						placeholder={__(
							"Add a short supporting line.",
							"ai-zippy-child",
						)}
					/>
					<div className="az-child-hero__actions">
						<RichText
							tagName="span"
							className="az-child-hero__button"
							value={buttonText}
							onChange={(value) =>
								setAttributes({ buttonText: value })
							}
							placeholder={__("Shop Now", "ai-zippy-child")}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls, RichText } from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	RangeControl,
	Button,
} from "@wordpress/components";

function normalizeSlides(slides) {
	return Array.isArray(slides) ? slides : [];
}

function createSlide() {
	return {
		title: "",
		content: "",
	};
}

export default function Edit({ attributes, setAttributes }) {
	const {
		sectionLabel,
		autoplay,
		autoplaySpeed,
		slides,
		forceFullWidth,
	} = attributes;
	const safeSlides = normalizeSlides(slides);

	const blockProps = useBlockProps({
		className: `${forceFullWidth ? "alignfull az-force-fullwidth" : ""} az-child-announcement`,
	});

	const updateSlide = (index, updates) => {
		const next = [...safeSlides];
		next[index] = {
			...next[index],
			...updates,
		};
		setAttributes({ slides: next });
	};

	const addSlide = () => {
		setAttributes({ slides: [...safeSlides, createSlide()] });
	};

	const removeSlide = (index) => {
		setAttributes({
			slides: safeSlides.filter((_, slideIndex) => slideIndex !== index),
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Slider Settings", "ai-zippy-child")} initialOpen={true}>
					<TextControl
						label={__("Section Label", "ai-zippy-child")}
						value={sectionLabel}
						onChange={(value) => setAttributes({ sectionLabel: value })}
					/>
					<ToggleControl
						label={__("Autoplay", "ai-zippy-child")}
						checked={autoplay}
						onChange={(value) => setAttributes({ autoplay: value })}
					/>
					<RangeControl
						label={__("Autoplay Speed (ms)", "ai-zippy-child")}
						value={autoplaySpeed}
						min={1500}
						max={10000}
						step={250}
						onChange={(value) =>
							setAttributes({ autoplaySpeed: value ?? 4500 })
						}
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

				{safeSlides.map((slide, index) => (
					<PanelBody
						key={`slide-panel-${index}`}
						title={`${__("Slide", "ai-zippy-child")} ${index + 1}`}
						initialOpen={false}
					>
						<TextControl
							label={__("Title", "ai-zippy-child")}
							value={slide.title || ""}
							onChange={(value) => updateSlide(index, { title: value })}
						/>
						<TextareaControl
							label={__("Content", "ai-zippy-child")}
							value={slide.content || ""}
							onChange={(value) => updateSlide(index, { content: value })}
						/>
						<Button
							variant="tertiary"
							isDestructive
							onClick={() => removeSlide(index)}
						>
							{__("Remove Slide", "ai-zippy-child")}
						</Button>
					</PanelBody>
				))}

				<PanelBody
					title={__("Manage Slides", "ai-zippy-child")}
					initialOpen={safeSlides.length === 0}
				>
					<Button variant="secondary" onClick={addSlide}>
						{__("Add Slide", "ai-zippy-child")}
					</Button>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="az-child-announcement__inner">
					<RichText
						tagName="h2"
						className="az-child-announcement__label"
						value={sectionLabel}
						onChange={(value) => setAttributes({ sectionLabel: value })}
						placeholder={__("Announcements", "ai-zippy-child")}
					/>

					<div className="az-child-announcement__preview">
						{safeSlides.length === 0 ? (
							<div>
								<p>{__("No slides yet.", "ai-zippy-child")}</p>
								<Button variant="secondary" onClick={addSlide}>
									{__("Add First Slide", "ai-zippy-child")}
								</Button>
							</div>
						) : (
							safeSlides.map((slide, index) => (
								<article
									className="az-child-announcement__slide"
									key={`slide-${index}`}
								>
									<RichText
										tagName="h3"
										className="az-child-announcement__title"
										value={slide.title || ""}
										onChange={(value) =>
											updateSlide(index, { title: value })
										}
										placeholder={__("Slide title", "ai-zippy-child")}
									/>
									<RichText
										tagName="p"
										className="az-child-announcement__content"
										value={slide.content || ""}
										onChange={(value) =>
											updateSlide(index, { content: value })
										}
										placeholder={__("Slide content", "ai-zippy-child")}
									/>
								</article>
							))
						)}
					</div>

					<div className="az-child-announcement__dots-preview">
						{safeSlides.map((_, index) => (
							<span key={`dot-${index}`} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}

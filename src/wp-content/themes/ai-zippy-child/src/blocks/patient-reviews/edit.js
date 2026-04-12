import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl, ToggleControl, Button } from "@wordpress/components";

function normalizeReviews(reviews) {
	return Array.isArray(reviews) ? reviews : [];
}

function createReview() {
	return {
		name: "",
		content: "",
		imageId: 0,
		imageUrl: "",
	};
}

export default function Edit({ attributes, setAttributes }) {
	const { sectionLabel, title, forceFullWidth, reviews } = attributes;
	const safeReviews = normalizeReviews(reviews);

	const blockProps = useBlockProps({
		className: forceFullWidth ? "alignfull az-force-fullwidth" : "",
	});

	const updateReview = (index, updates) => {
		const next = [...safeReviews];
		next[index] = {
			...next[index],
			...updates,
		};
		setAttributes({ reviews: next });
	};

	const addReview = () => {
		setAttributes({ reviews: [...safeReviews, createReview()] });
	};

	const removeReview = (index) => {
		setAttributes({
			reviews: safeReviews.filter((_, reviewIndex) => reviewIndex !== index),
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Section", "ai-zippy-child")} initialOpen={true}>
					<TextControl
						label={__("Section Label", "ai-zippy-child")}
						value={sectionLabel}
						onChange={(value) => setAttributes({ sectionLabel: value })}
					/>
					<TextControl
						label={__("Heading", "ai-zippy-child")}
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>
					<ToggleControl
						label={__("Force Full Width", "ai-zippy-child")}
						checked={!!forceFullWidth}
						onChange={(value) => setAttributes({ forceFullWidth: value })}
						help={__("Stretch block across full viewport width.", "ai-zippy-child")}
					/>
				</PanelBody>

				{safeReviews.map((review, index) => (
					<PanelBody
						key={`review-panel-${index}`}
						title={`${__("Review", "ai-zippy-child")} ${index + 1}`}
						initialOpen={false}
					>
						<TextControl
							label={__("Name", "ai-zippy-child")}
							value={review.name || ""}
							onChange={(value) => updateReview(index, { name: value })}
						/>
						<TextareaControl
							label={__("Content", "ai-zippy-child")}
							value={review.content || ""}
							onChange={(value) => updateReview(index, { content: value })}
						/>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									updateReview(index, {
										imageId: media.id,
										imageUrl: media.url,
									})
								}
								allowedTypes={["image"]}
								value={review.imageId || 0}
								render={({ open }) => (
									<div>
										{review.imageUrl ? (
											<img
												src={review.imageUrl}
												alt=""
												style={{
													width: "72px",
													height: "72px",
													objectFit: "cover",
													borderRadius: "999px",
													marginBottom: "10px",
												}}
											/>
										) : null}
										<Button variant="secondary" onClick={open}>
											{review.imageUrl
												? __("Replace Avatar", "ai-zippy-child")
												: __("Select Avatar", "ai-zippy-child")}
										</Button>
									</div>
								)}
							/>
						</MediaUploadCheck>
						<Button
							variant="tertiary"
							isDestructive
							onClick={() => removeReview(index)}
						>
							{__("Remove Review", "ai-zippy-child")}
						</Button>
					</PanelBody>
				))}

				<PanelBody
					title={__("Manage Reviews", "ai-zippy-child")}
					initialOpen={safeReviews.length === 0}
				>
					<Button variant="secondary" onClick={addReview}>
						{__("Add Review", "ai-zippy-child")}
					</Button>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="az-child-reviews__inner">
					<RichText
						tagName="p"
						className="az-child-reviews__eyebrow"
						value={sectionLabel}
						onChange={(value) => setAttributes({ sectionLabel: value })}
						placeholder={__("Reviews", "ai-zippy-child")}
					/>
					<RichText
						tagName="h2"
						className="az-child-reviews__title"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						placeholder={__("Hear what our patients say", "ai-zippy-child")}
					/>

					<div className="az-child-reviews__grid">
						{safeReviews.length === 0 ? (
							<div>
								<p>{__("No reviews yet.", "ai-zippy-child")}</p>
								<Button variant="secondary" onClick={addReview}>
									{__("Add First Review", "ai-zippy-child")}
								</Button>
							</div>
						) : (
							safeReviews.map((review, index) => (
								<article
									className="az-child-reviews__card"
									key={`review-${index}`}
								>
									<div className="az-child-reviews__avatar-wrap">
										{review.imageUrl ? (
											<img
												className="az-child-reviews__avatar"
												src={review.imageUrl}
												alt=""
											/>
										) : (
											<div className="az-child-reviews__avatar az-child-reviews__avatar--placeholder" />
										)}
									</div>
									<RichText
										tagName="h3"
										className="az-child-reviews__name"
										value={review.name || ""}
										onChange={(value) =>
											updateReview(index, { name: value })
										}
										placeholder={__("Patient Name", "ai-zippy-child")}
									/>
									<RichText
										tagName="p"
										className="az-child-reviews__content"
										value={review.content || ""}
										onChange={(value) =>
											updateReview(index, { content: value })
										}
										placeholder={__("Review text", "ai-zippy-child")}
									/>
								</article>
							))
						)}
					</div>
				</div>
			</section>
		</>
	);
}

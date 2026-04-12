import { __ } from "@wordpress/i18n";
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";
import { Button, PanelBody, TextControl, TextareaControl, ToggleControl } from "@wordpress/components";

function normalizeItems(items) {
	return Array.isArray(items) ? items : [];
}

function createItem() {
	return {
		question: "",
		answer: "",
	};
}

export default function Edit({ attributes, setAttributes }) {
	const { title, items, forceFullWidth } = attributes;
	const safeItems = normalizeItems(items);

	const blockProps = useBlockProps({
		className: forceFullWidth ? "alignfull az-force-fullwidth" : "",
	});

	const updateItem = (index, updates) => {
		const next = [...safeItems];
		next[index] = {
			...next[index],
			...updates,
		};
		setAttributes({ items: next });
	};

	const addItem = () => {
		setAttributes({ items: [...safeItems, createItem()] });
	};

	const removeItem = (index) => {
		setAttributes({
			items: safeItems.filter((_, itemIndex) => itemIndex !== index),
		});
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

				{safeItems.map((item, index) => (
					<PanelBody
						key={`faq-panel-${index}`}
						title={`${__("FAQ", "ai-zippy-child")} ${index + 1}`}
						initialOpen={false}
					>
						<TextControl
							label={__("Question", "ai-zippy-child")}
							value={item.question || ""}
							onChange={(value) => updateItem(index, { question: value })}
						/>
						<TextareaControl
							label={__("Answer", "ai-zippy-child")}
							value={item.answer || ""}
							onChange={(value) => updateItem(index, { answer: value })}
						/>
						<Button
							variant="tertiary"
							isDestructive
							onClick={() => removeItem(index)}
						>
							{__("Remove FAQ", "ai-zippy-child")}
						</Button>
					</PanelBody>
				))}

				<PanelBody title={__("Manage FAQs", "ai-zippy-child")} initialOpen={false}>
					<Button variant="secondary" onClick={addItem}>
						{__("Add FAQ", "ai-zippy-child")}
					</Button>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="az-child-faq__inner">
					<header className="az-child-faq__header">
						<RichText
							tagName="h2"
							className="az-child-faq__title"
							value={title}
							onChange={(value) => setAttributes({ title: value })}
							placeholder={__("Frequently Asked Questions", "ai-zippy-child")}
						/>
						<div className="az-child-faq__accent" aria-hidden="true"></div>
					</header>

					<div className="az-child-faq__grid">
						{safeItems.map((item, index) => (
							<details
								className="az-child-faq__item"
								name="az-child-faq-group-preview"
								open={index === 0}
								key={`faq-${index}`}
							>
								<summary className="az-child-faq__summary">
									<RichText
										tagName="span"
										className="az-child-faq__question"
										value={item.question || ""}
										onChange={(value) => updateItem(index, { question: value })}
										placeholder={__("Question", "ai-zippy-child")}
									/>
									<span className="az-child-faq__toggle" aria-hidden="true">
										<svg viewBox="0 0 24 24">
											<path d="M7 10l5 5 5-5"></path>
										</svg>
									</span>
								</summary>
								<div className="az-child-faq__answer-wrap">
									<RichText
										tagName="p"
										className="az-child-faq__answer"
										value={item.answer || ""}
										onChange={(value) => updateItem(index, { answer: value })}
										placeholder={__("Answer", "ai-zippy-child")}
									/>
								</div>
							</details>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

import { __ } from "@wordpress/i18n";
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";
import { Button, PanelBody, TextControl, TextareaControl, ToggleControl } from "@wordpress/components";

function normalizeItems(items) {
	return Array.isArray(items) ? items : [];
}

function createItem() {
	return {
		type: "faq",
		question: "",
		answer: "",
	};
}

function createTitleItem() {
	return {
		type: "title",
		title: "",
		description: "",
	};
}

function getItemType(item) {
	return item.type === "title" ? "title" : "faq";
}

export default function Edit({ attributes, setAttributes }) {
	const { title, items, forceFullWidth } = attributes;
	const safeItems = normalizeItems(items);
	let hasOpenPreviewFaq = false;

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

	const addTitleItem = () => {
		setAttributes({ items: [...safeItems, createTitleItem()] });
	};

	const insertItemAfter = (index, item) => {
		const next = [...safeItems];
		next.splice(index + 1, 0, item);
		setAttributes({ items: next });
	};

	const insertItemBefore = (index, item) => {
		const next = [...safeItems];
		next.splice(index, 0, item);
		setAttributes({ items: next });
	};

	const moveItem = (index, direction) => {
		const targetIndex = index + direction;

		if (targetIndex < 0 || targetIndex >= safeItems.length) {
			return;
		}

		const next = [...safeItems];
		[next[index], next[targetIndex]] = [next[targetIndex], next[index]];
		setAttributes({ items: next });
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

				{safeItems.map((item, index) => {
					const itemType = getItemType(item);

					return (
						<PanelBody
							key={`faq-panel-${index}`}
							title={
								itemType === "title"
									? `${__("Title", "ai-zippy-child")} ${index + 1}`
									: `${__("FAQ", "ai-zippy-child")} ${index + 1}`
							}
							initialOpen={false}
						>
							{itemType === "title" ? (
								<>
									<TextControl
										label={__("Title", "ai-zippy-child")}
										value={item.title || ""}
										onChange={(value) => updateItem(index, { title: value })}
									/>
									<TextareaControl
										label={__("Description", "ai-zippy-child")}
										value={item.description || ""}
										onChange={(value) =>
											updateItem(index, { description: value })
										}
									/>
									<Button
										variant="tertiary"
										isDestructive
										onClick={() => removeItem(index)}
									>
										{__("Remove Title", "ai-zippy-child")}
									</Button>
								</>
							) : (
								<>
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
								</>
							)}

							<div className="az-child-faq__inspector-actions">
								<Button
									variant="secondary"
									disabled={index === 0}
									onClick={() => moveItem(index, -1)}
								>
									{__("Move Up", "ai-zippy-child")}
								</Button>
								<Button
									variant="secondary"
									disabled={index === safeItems.length - 1}
									onClick={() => moveItem(index, 1)}
								>
									{__("Move Down", "ai-zippy-child")}
								</Button>
								<Button
									variant="secondary"
									onClick={() => insertItemBefore(index, createTitleItem())}
								>
									{__("Add Title Above", "ai-zippy-child")}
								</Button>
								<Button
									variant="secondary"
									onClick={() => insertItemAfter(index, createTitleItem())}
								>
									{__("Add Title Below", "ai-zippy-child")}
								</Button>
								<Button
									variant="secondary"
									onClick={() => insertItemAfter(index, createItem())}
								>
									{__("Add FAQ Below", "ai-zippy-child")}
								</Button>
							</div>
						</PanelBody>
					);
				})}

				<PanelBody title={__("Manage FAQs", "ai-zippy-child")} initialOpen={false}>
					<div className="az-child-faq__inspector-actions">
						<Button variant="secondary" onClick={addTitleItem}>
							{__("Add Title", "ai-zippy-child")}
						</Button>
						<Button variant="secondary" onClick={addItem}>
							{__("Add FAQ", "ai-zippy-child")}
						</Button>
					</div>
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
						{safeItems.map((item, index) => {
							if (getItemType(item) === "title") {
								return (
									<div className="az-child-faq__section" key={`faq-${index}`}>
										<RichText
											tagName="h3"
											className="az-child-faq__section-title"
											value={item.title || ""}
											onChange={(value) => updateItem(index, { title: value })}
											placeholder={__("Title", "ai-zippy-child")}
										/>
										<RichText
											tagName="p"
											className="az-child-faq__section-description"
											value={item.description || ""}
											onChange={(value) =>
												updateItem(index, { description: value })
											}
											placeholder={__("Optional description", "ai-zippy-child")}
										/>
									</div>
								);
							}

							const isOpenPreviewFaq = !hasOpenPreviewFaq;
							hasOpenPreviewFaq = true;

							return (
								<details
									className="az-child-faq__item"
									name="az-child-faq-group-preview"
									open={isOpenPreviewFaq}
									key={`faq-${index}`}
								>
									<summary className="az-child-faq__summary">
										<RichText
											tagName="span"
											className="az-child-faq__question"
											value={item.question || ""}
											onChange={(value) =>
												updateItem(index, { question: value })
											}
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
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

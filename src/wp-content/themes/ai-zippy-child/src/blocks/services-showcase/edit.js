import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, Button, TextControl, TextareaControl, ToggleControl } from "@wordpress/components";

function normalizeCards(cards) {
	return Array.isArray(cards) ? cards : [];
}

function createServiceItem() {
	return {
		title: "",
		description: "",
	};
}

function createCard() {
	return {
		title: "",
		caption: "",
		imageId: 0,
		imageUrl: "",
		items: [createServiceItem()],
	};
}

export default function Edit({ attributes, setAttributes }) {
	const { sectionLabel, cards, forceFullWidth } = attributes;
	const safeCards = normalizeCards(cards);
	const blockProps = useBlockProps({
		className: forceFullWidth ? "alignfull az-force-fullwidth" : "",
	});

	const updateCards = (nextCards) => {
		setAttributes({ cards: nextCards });
	};

	const addCard = () => {
		updateCards([...safeCards, createCard()]);
	};

	const removeCard = (cardIndex) => {
		updateCards(safeCards.filter((_, index) => index !== cardIndex));
	};

	const updateCard = (cardIndex, updates) => {
		const next = [...safeCards];
		next[cardIndex] = {
			...next[cardIndex],
			...updates,
		};
		updateCards(next);
	};

	const updateItem = (cardIndex, itemIndex, updates) => {
		const next = [...safeCards];
		const card = next[cardIndex] || {};
		const items = Array.isArray(card.items) ? [...card.items] : [];

		items[itemIndex] = {
			...(items[itemIndex] || {}),
			...updates,
		};

		next[cardIndex] = {
			...card,
			items,
		};

		updateCards(next);
	};

	const addItem = (cardIndex) => {
		const next = [...safeCards];
		const card = next[cardIndex] || createCard();
		const items = Array.isArray(card.items) ? [...card.items] : [];

		items.push(createServiceItem());

		next[cardIndex] = {
			...card,
			items,
		};

		updateCards(next);
	};

	const removeItem = (cardIndex, itemIndex) => {
		const next = [...safeCards];
		const card = next[cardIndex] || {};
		const items = Array.isArray(card.items) ? [...card.items] : [];

		next[cardIndex] = {
			...card,
			items: items.filter((_, index) => index !== itemIndex),
		};

		updateCards(next);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Section", "ai-zippy-child")}
					initialOpen={true}
				>
					<TextControl
						label={__("Section Label", "ai-zippy-child")}
						value={sectionLabel}
						onChange={(value) =>
							setAttributes({ sectionLabel: value })
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

				{safeCards.map((card, cardIndex) => (
					<PanelBody
						key={`card-panel-${cardIndex}`}
						title={`${__("Card", "ai-zippy-child")} ${cardIndex + 1}`}
						initialOpen={false}
					>
						<TextControl
							label={__("Title", "ai-zippy-child")}
							value={card.title || ""}
							onChange={(value) =>
								updateCard(cardIndex, { title: value })
							}
						/>

						<TextareaControl
							label={__("Caption", "ai-zippy-child")}
							value={card.caption || ""}
							onChange={(value) =>
								updateCard(cardIndex, { caption: value })
							}
						/>

						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									updateCard(cardIndex, {
										imageId: media.id,
										imageUrl: media.url,
									})
								}
								allowedTypes={["image"]}
								value={card.imageId || 0}
								render={({ open }) => (
									<div style={{ marginBottom: "16px" }}>
										{card.imageUrl ? (
											<img
												src={card.imageUrl}
												alt=""
												style={{
													width: "100%",
													borderRadius: "8px",
													marginBottom: "8px",
												}}
											/>
										) : null}
										<Button
											variant="secondary"
											onClick={open}
										>
											{card.imageUrl
												? __(
														"Replace Image",
														"ai-zippy-child",
													)
												: __(
														"Select Image",
														"ai-zippy-child",
													)}
										</Button>
									</div>
								)}
							/>
						</MediaUploadCheck>

						{Array.isArray(card.items)
							? card.items.map((item, itemIndex) => (
									<div
										key={`item-panel-${cardIndex}-${itemIndex}`}
										style={{
											padding: "10px",
											marginBottom: "10px",
											border: "1px solid #e0e0e0",
											borderRadius: "6px",
										}}
									>
										<TextControl
											label={`${__("Item", "ai-zippy-child")} ${itemIndex + 1} ${__("Title", "ai-zippy-child")}`}
											value={item.title || ""}
											onChange={(value) =>
												updateItem(cardIndex, itemIndex, {
													title: value,
												})
											}
										/>
										<TextareaControl
											label={`${__("Item", "ai-zippy-child")} ${itemIndex + 1} ${__("Description", "ai-zippy-child")}`}
											value={item.description || ""}
											onChange={(value) =>
												updateItem(cardIndex, itemIndex, {
													description: value,
												})
											}
										/>
										<Button
											variant="tertiary"
											isDestructive
											onClick={() =>
												removeItem(cardIndex, itemIndex)
											}
										>
											{__("Remove Item", "ai-zippy-child")}
										</Button>
									</div>
							  ))
							: null}
						<div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
							<Button
								variant="secondary"
								onClick={() => addItem(cardIndex)}
							>
								{__("Add Item", "ai-zippy-child")}
							</Button>
							<Button
								variant="tertiary"
								isDestructive
								onClick={() => removeCard(cardIndex)}
							>
								{__("Remove Card", "ai-zippy-child")}
							</Button>
						</div>
					</PanelBody>
				))}

				<PanelBody
					title={__("Manage Cards", "ai-zippy-child")}
					initialOpen={safeCards.length === 0}
				>
					<Button variant="secondary" onClick={addCard}>
						{__("Add Card", "ai-zippy-child")}
					</Button>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<div className="az-child-services__inner">
					<RichText
						tagName="h2"
						className="az-child-services__label"
						value={sectionLabel}
						onChange={(value) =>
							setAttributes({ sectionLabel: value })
						}
						placeholder={__("Our Services", "ai-zippy-child")}
					/>

					<div className="az-child-services__grid">
						{safeCards.length === 0 ? (
							<div>
								<p>{__("No service cards yet.", "ai-zippy-child")}</p>
								<Button variant="secondary" onClick={addCard}>
									{__("Add First Card", "ai-zippy-child")}
								</Button>
							</div>
						) : (
							safeCards.map((card, cardIndex) => (
								<article
									className="az-child-services__card"
									key={`card-${cardIndex}`}
								>
									<RichText
										tagName="h3"
										className="az-child-services__title"
										value={card.title || ""}
										onChange={(value) =>
											updateCard(cardIndex, { title: value })
										}
										placeholder={__(
											"Service Title",
											"ai-zippy-child",
										)}
									/>

									<div className="az-child-services__media-wrap">
										{card.imageUrl ? (
											<img
												className="az-child-services__media"
												src={card.imageUrl}
												alt=""
											/>
										) : (
											<div className="az-child-services__media az-child-services__media--placeholder">
												{__(
													"Select image in sidebar",
													"ai-zippy-child",
												)}
											</div>
										)}
									</div>

									<RichText
										tagName="p"
										className="az-child-services__caption"
										value={card.caption || ""}
										onChange={(value) =>
											updateCard(cardIndex, {
												caption: value,
											})
										}
										placeholder={__(
											"Short service summary",
											"ai-zippy-child",
										)}
									/>

									<div className="az-child-services__detail-box">
										{Array.isArray(card.items)
											? card.items.map((item, itemIndex) => (
													<div
														className="az-child-services__item"
														key={`item-${cardIndex}-${itemIndex}`}
													>
														<RichText
															tagName="h4"
															className="az-child-services__item-title"
															value={item.title || ""}
															onChange={(value) =>
																updateItem(
																	cardIndex,
																	itemIndex,
																	{ title: value },
																)
															}
															placeholder={__(
																"Item title",
																"ai-zippy-child",
															)}
														/>
														<RichText
															tagName="p"
															className="az-child-services__item-desc"
															value={
																item.description ||
																""
															}
															onChange={(value) =>
																updateItem(
																	cardIndex,
																	itemIndex,
																	{
																		description:
																			value,
																	},
																)
															}
															placeholder={__(
																"Item description",
																"ai-zippy-child",
															)}
														/>
													</div>
											  ))
											: null}
									</div>
								</article>
							))
						)}
					</div>
				</div>
			</section>
		</>
	);
}

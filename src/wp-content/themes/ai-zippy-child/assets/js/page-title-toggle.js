(function (wp) {
	if (!wp || !wp.plugins || !wp.editPost || !wp.element || !wp.data || !wp.components || !wp.i18n) {
		return;
	}

	var META_KEY = "ai_zippy_hide_page_title";
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
	var createElement = wp.element.createElement;
	var useSelect = wp.data.useSelect;
	var useDispatch = wp.data.useDispatch;
	var ToggleControl = wp.components.ToggleControl;
	var __ = wp.i18n.__;

	function PageTitleVisibilityPanel() {
		var postType = useSelect(function (select) {
			return select("core/editor").getCurrentPostType();
		}, []);

		if (postType !== "page") {
			return null;
		}

		var meta = useSelect(function (select) {
			return select("core/editor").getEditedPostAttribute("meta") || {};
		}, []);

		var editPost = useDispatch("core/editor").editPost;
		var isHidden = !!meta[META_KEY];

		return createElement(
			PluginDocumentSettingPanel,
			{
				name: "ai-zippy-page-title-visibility",
				title: __("Page Title", "ai-zippy-child"),
			},
			createElement(ToggleControl, {
				label: __("Hide page title on frontend", "ai-zippy-child"),
				checked: isHidden,
				onChange: function (value) {
					editPost({
						meta: Object.assign({}, meta, (function () {
							var next = {};
							next[META_KEY] = !!value;
							return next;
						})()),
					});
				},
				help: isHidden
					? __("Page title is hidden on frontend.", "ai-zippy-child")
					: __("Page title is visible on frontend.", "ai-zippy-child"),
			})
		);
	}

	registerPlugin("ai-zippy-page-title-visibility", {
		render: PageTitleVisibilityPanel,
	});
})(window.wp);

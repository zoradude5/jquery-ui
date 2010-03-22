/*
 * jQuery UI Panel @VERSION
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Panel
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function($) {

$.widget("ui.panel", {
	_create: function() {
		this.element.addClass("ui-panel ui-widget ui-helper-reset");
		
		var self = this;
		this.headers = this.element.find("> li > :first-child,> :not(li):even").addClass("ui-panel-header ui-helper-reset ui-state-default ui-corner-all")
			.bind("mouseenter.panel", function() { $(this).addClass('ui-state-hover'); })
			.bind("mouseleave.panel", function() { $(this).removeClass('ui-state-hover'); })
			.bind("focus.panel", function() { $(this).addClass('ui-state-focus'); })
			.bind("blur.panel", function() { $(this).removeClass('ui-state-focus'); })
			.bind("click.panel", function(e) { self.click($(this), e); return false; });

		this.headers
			.next()
				.addClass("ui-panel-content ui-helper-reset ui-widget-content ui-corner-bottom")
				.hide();
	},
	destroy: function() {
		$.widget.prototype.destroy.call(this);
	},
	click: function(header, event) {
		header.toggleClass("ui-state-active ui-corner-top ui-corner-all");
		header.next().toggleClass("ui-panel-content-active").slideToggle("fast");
	}
});

}(jQuery));
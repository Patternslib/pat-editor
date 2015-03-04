(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            "jquery",
            "jquery.browser",
            "mockup-patterns-base",
            "pat-registry",
            "pat-parser"
        ], function() {
            return factory.apply(this, arguments);
        });
    } else {
        factory($, null, Base, root.patterns, root.patterns.Parser);
    }
}(this, function($, dummy, Base, registry, Parser) {
    'use strict';
    var parser = new Parser("editor");
    parser.add_argument("aloha-settings", {}); // Allows the user to specify Aloha settings via JSON
    parser.add_argument("hide-sidebar", true);
    parser.add_argument("pin-toolbar", false);
    parser.add_argument("load-plugins", "common/ui, common/format, common/link");
    parser.add_argument("show-ribbon", true);

    return Base.extend({
        name: 'editor',
        trigger: ".pat-editor",

        init: function patEditor() {
            var options = parser.parse(this.$el);

            if (typeof window.Aloha == "undefined") {
                window.Aloha = { settings: {} };
            }
            if (typeof options.alohaSettings == "object" && options.alohaSettings.length) {
                // The "aloha-settings" parameter allows the user to override any
                // Aloha settings by specifying a JSON object.
                $.extend(true, Aloha.settings, options.alohaSettings);
            }

            Aloha.settings.toolbar = Aloha.settings.toolbar || {};
            $.extend(true, Aloha.settings, { toolbar: { floating: options.pinToolbar === false ? true: false}});
            $.extend(true, Aloha.settings, { ribbon: options.showRibbon === false ? false : true});
            $.extend(true, Aloha.settings, { plugins: { load: options.loadPlugins }});
            $.extend(true, Aloha.settings, { sidebar: { disabled: options.hideSidebar }});

            require(['aloha'], function () {
                Aloha.ready(function () {
                    Aloha.jQuery(this.$el).aloha();
                }.bind(this));
            }.bind(this));
        }
    });
}));

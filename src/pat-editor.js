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
    parser.add_argument("toolbar-floating", false);


    return Base.extend({
        name: 'editor',
        trigger: ".pat-editor",

        init: function patEditor() {
            var options = parser.parse(this.$el);

            if (typeof window.Aloha == "undefined") {
                window.Aloha = { settings: {} };
            }
            // The "aloha-settings" parameter allows the user to override any
            // Aloha setting by specifying a JSON object.
            if (options.alohaSettings && options.alohaSettings.length) {
                $.extend(true, Aloha.settings, options.alohaSettings);
            }

            Aloha.settings.toolbar = Aloha.settings.toolbar || {};
            $.extend(true, Aloha.settings, { toolbar: { floating: options.toolBarFloating || false }});

            Aloha.settings.logLevels = { 'error': true, 'warn': true, 'info': true, 'debug': false, 'deprecated': true };
            Aloha.settings.errorhandling = false;
            Aloha.settings.ribbon = {enable: true};
            Aloha.settings.plugins = Aloha.settings.plugins || {};
            Aloha.settings.plugins.load = "common/ui, common/format, common/link";

            Aloha.settings.sidebar = Aloha.settings.sidebar || {};
            Aloha.settings.sidebar.disabled = true;

            require(['aloha'], function () {
                Aloha.ready(function () {
                    Aloha.jQuery('#textarea').aloha();
                }.bind(this));
            });
        }
    });
}));

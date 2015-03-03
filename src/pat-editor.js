(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            "jquery",
            "mockup-patterns-base",
            "pat-registry",
            "pat-parser",
            "aloha"
        ], function() {
            return factory.apply(this, arguments);
        });
    } else {
        factory($, Base, root.patterns, root.patterns.Parser, Aloha);
    }
}(this, function($, Base, registry, Parser, Aloha) {
  'use strict';
  var parser = new Parser("editor");

  return Base.extend({
    name: 'editor',
    trigger: ".pat-editor",

    init: function patEditor($el, opts) {
        debugger;
    }
  });
}));

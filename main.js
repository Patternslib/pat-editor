require.config({
    baseUrl: "src",
    paths: {
        "aloha":                        "bower_components/aloha-editor/src/lib/aloha",
        "jquery":                       "bower_components/jquery/dist/jquery",
        "jquery.browser":               "bower_components/jquery.browser/dist/jquery.browser",
        "logging":                      "bower_components/logging/src/logging",
        "mockup-parser":                "bower_components/mockup-core/js/parser",
        "mockup-patterns-base":         "bower_components/mockup-core/js/pattern",
        "pat-compat":                   "bower_components/patternslib/src/core/compat",
        "pat-jquery-ext":               "bower_components/patternslib/src/core/jquery-ext",
        "pat-logger":                   "bower_components/patternslib/src/core/logger",
        "pat-parser":                   "bower_components/patternslib/src/core/parser",
        "pat-registry":                 "bower_components/patternslib/src/core/registry",
        "pat-utils":                    "bower_components/patternslib/src/core/utils",
        "patterns":                     "bower_components/patternslib/bundle",
    },
    "shim": {
        "logging": { "exports": "logging" },
    }
});

require(["pat-registry", "pat-editor"], function(registry, editor) {
    window.patterns = registry;
    registry.init();
});

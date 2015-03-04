#pat-editor

A Patternslib pattern which adds a WYSIWYG HTML editor, based on [Aloha Editor](http://www.alohaeditor.org)

##demo

To view a demo of how this pattern works, clone the repository:

    git clone https://github.com/Patternslib/pat-editor.git

Run the Makefile:

    make

And then in your browser open: http://localhost:4001

## Documentation

Property        | Type      | Default Value                             | Description
----------------|-----------|-------------------------------------------|---------------------------------------------------
aloha-settings  | JSON      | { }                                       | Allows you to override any Aloha editor setting 
hide-sidebar    | Boolean   | true                                      | Should the [sidebar](http://old.alohaeditor.org/guides/sidebar.html) be hidden?
pin-toolbar     | Boolean   | false                                     | Should the toolbar be sticky, or should it float?
load-plugins    | String    | "common/ui, common/format, common/link"   | The specified plugins will be loaded.
show-ribbon     | Boolean   | true                                      | Show or hide the ribbon interface.

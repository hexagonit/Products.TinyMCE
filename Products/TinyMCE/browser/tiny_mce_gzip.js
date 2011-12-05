/**
 * Based on "TinyMCE Compressor PHP" from MoxieCode.
 *
 * http://tinymce.moxiecode.com/
 *
 * Copyright (c) 2008 Jason Davies
 * Licensed under the terms of the MIT License (see LICENSE.txt)
 *
 */

jQuery(function($) {
    var conf = $.extend({
            elements: this.id
        },
        <tal:url tal:content="structure options/tinymce_json_config" />);
    $('textarea.mce_editable').tinymce(conf);

    // set Text Format dropdown untabbable for better UX
    // TODO: find a better way to fix this
    $('#text_text_format').attr('tabindex', '-1');
});

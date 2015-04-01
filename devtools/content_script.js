var stylesheet;

AG_Melonh = {

    insertCss: function(cssText) {
        if(!stylesheet) {
            stylesheet = $('<style></style>');
            stylesheet.appendTo($('head'));
        }

        stylesheet.html('');
        setTimeout(function() {
            stylesheet.html(cssText);
        }, 0);
    },

    replay: function() {
        if(!stylesheet) {
            return;
        }
        var cssText = stylesheet.html();
        stylesheet.html('');
        setTimeout(function() {
            stylesheet.html(cssText);
        }, 0);
    }

}


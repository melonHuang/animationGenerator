var stylesheet;

AG_Melonh = {

    _insertCss: function(cssText) {
        if(!stylesheet) {
            stylesheet = $('<style></style>');
            stylesheet.appendTo($('head'));
        }

        stylesheet.html(cssText);
    }
}


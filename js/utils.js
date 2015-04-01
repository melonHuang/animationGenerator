var Utils = {
    tmpl: function(str, data) {
        for(var prop in data) {
            if(data.hasOwnProperty(prop)) {
                var regExp = new RegExp('{{\\s*' + prop + '\\s*}}', 'g');
                str = str.replace(regExp, data[prop]);
            }
        }
        return str;
    },

    encode4Js: function(s) {
        return this.mulReplace(s, [
            [/\\/g, "\\u005C"],
            [/"/g, "\\u0022"],
            [/'/g, "\\u0027"],
            [/\//g, "\\u002F"],
            [/\r/g, "\\u000A"],
            [/\n/g, "\\u000D"],
            [/\t/g, "\\u0009"]
        ]);
    },

    mulReplace: function(e, t) {
        for(var n=0;n<t.length;n++)e=e.replace(t[n][0],t[n][1]);return e;
    }
}

if(module) {
    module.exports = Utils;
    //exports.Utils = Utils;
} else {
    window.Utils = Utils;
}

var fs = require('fs');
var utils = require('./js/utils.js');

var file = fs.readFileSync('css/animate.css', {encoding: 'utf-8'});
var generatedCont = '';
var dataArray = [];

var template = "{\n\
    name: '{{name}}',\n\
    keyframes: function() {/*\n\
        {{keyframe}}\n\
    */}\n\
}";

var i = 0;
file.replace(/@keyframes(.*){([^{}]*{[^}]*})*[^}]*}/g, function(keyframe, name) {
    var str = utils.tmpl(template, {
        name: name.trim(),
        keyframe: keyframe.trim()
    });
    dataArray.push(str);
    //console.log(str);
});

generatedCont = dataArray.join(',\n');

console.log(generatedCont);


fs.writeFileSync('js/animate_library.js', generatedCont);

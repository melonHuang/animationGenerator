window.addEventListener('message', function(event) {
    var name = event.data.name;
    var cssText = event.data.cssText;
    switch(name) {
        case 'pleeease':
            event.source.postMessage({
                name: name,
                compiled: pleeease.process(cssText, {
                    minifier: false
                })
            }, event.origin);
            break;

        // case 'somethingElse':
        //   ...
    }
});

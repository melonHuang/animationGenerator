chrome.runtime.onConnect.addListener(function(cnt) {
    function listener(msg) {
        debugger;

        if(msg.action == 'injectScript') {
            for(var i = 0; i < msg.scriptToInject.length; i++) {
                chrome.tabs.executeScript(msg.tagId, {
                    file: msg.scriptToInject[i]
                });
            }
        }
    }

    cnt.onMessage.addListener(listener);

    cnt.onDisconnect(function() {
        cnt.onMessage.removeListener(listener);
    });
});

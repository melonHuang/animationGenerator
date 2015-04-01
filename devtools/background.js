var connections = {};
var sandboxFrame = document.querySelector('iframe');

chrome.runtime.onConnect.addListener(function(port) {
    function listener(msg) {

        if(msg.name == 'init') {
            connections[msg.tabId] = port;
            return;
        }

        if(msg.name == 'injectScript') {
            for(var i = 0; i < msg.scriptToInject.length; i++) {
                chrome.tabs.executeScript(msg.tabId, {
                    file: msg.scriptToInject[i]
                });
            }
        }

        if(msg.name == 'pleeease') {
            sandboxFrame.contentWindow.postMessage(msg, '*');
            window.addEventListener('message', function(event) {
                var msg = event.data;
                if(event.source === sandboxFrame.contentWindow) {
                    switch(msg.name) {
                        case 'pleeease':
                            port.postMessage(msg);
                            break;
                    }
                }
            });

        }
    }

    port.onMessage.addListener(listener);

    port.onDisconnect.addListener(function() {
        port.onMessage.removeListener(listener);
    });

    chrome.runtime.onMessage.addListener(function(msg) {
        port.postMessage(msg);
    });
});

// Receive message from content script and relay to the devTools page for the
// current tab
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Messages from content scripts should have sender.tab set
    if (sender.tab) {
      var tabId = sender.tab.id;
      if (tabId in connections) {
        connections[tabId].postMessage(request);
      } else {
        console.log("Tab not found in connection list.");
      }
    } else {
      console.log("sender.tab not defined.");
    }
    return true;
});


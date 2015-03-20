
// 创建panel
/*
chrome.devtools.panels.create('Animate Generator',
    'x.png',
    '/devtools/panel.html',
    function(panel) {
        // invoked on panel creation
    }
);
*/

/***************************** 创建elements pane ******************************/
debugger;
chrome.devtools.panels.elements.createSidebarPane("Animate Generator", function(sidebar) {
    sidebar.setPage('/devtools/sidebar.html');
    sidebar.setHeight('1000px');
});

/***************************** 建立与background通信 ******************************/
var bgCnt = chrome.runtime.connect({
    name: 'devtools-page'
});

bgCnt.onMessage.addListener(function(msg) {
});

bgCnt.postMessage({
    action: 'injectScript',
    tagId: chrome.devtools.inspectedWindow.tabId,
    scriptToInject: [
        '/js/zepto.114.js',
        '/devtools/content_script.js'
    ]
});

/*
chrome.runtime.sendMessage({
    tagId: chrome.devtools.inspectedWindow.tabId,
    scriptToInject: [
        '/js/zepto.114.js',
        '/devtools/content_script.js'
    ]
});
*/


// inject content script
/*
chrome.tabs.executeScript(null, {
    file: '/js/zepto.114.js'
});
chrome.tabs.executeScript(null, {
    file: '/devtools/content_script.js'
});
*/

/***************************** 创建elements pane ******************************/
chrome.devtools.panels.elements.createSidebarPane("Animation Generator", function(sidebar) {
    sidebar.setPage('/devtools/pane.html');
    sidebar.setHeight('500px');
});


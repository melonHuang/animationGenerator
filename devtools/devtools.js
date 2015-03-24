/***************************** 创建elements pane ******************************/
chrome.devtools.panels.elements.createSidebarPane("Animate Generator", function(sidebar) {
    sidebar.setPage('/devtools/pane.html');
    sidebar.setHeight('1000px');
});


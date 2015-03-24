function cssTemplate() {
    /*
.{{ className}} {
    -webkit-animation: {{animate_name}} {{animate_period}}ms ease {{animate_delay}};
    -moz-animation: {{animate_name}} {{animate_period}}ms ease {{animate_delay}};
    -o-animation: {{animate_name}} {{animate_period}}ms ease {{animate_delay}};
}
     */
}

var controlPanel = $('.control-panel');
var cssTextarea = $('.generated-css');
var selectedClassName;
var tmplSource = cssTemplate.toString().replace(/^.*\s*\/\*/, '').replace(/\*\/\s*\}\s*$/, '');
//var tmpl = Utils.tmpl(tmplSource, {className: 'a'});

var app = {
    init: function() {
        var me = this;

        this.connectBg();
        this.injectScript();
        this.bindEvents();
        setTimeout(function() {
            me.onSelectionChanged();
        }, 1000);

    },

    bindEvents: function() {
        var me = this;

        /***************************** 选中元素 ******************************/
        chrome.devtools.panels.elements.onSelectionChanged.addListener(this.onSelectionChanged);

        /***************************** 提交表单 ******************************/
        var form = $('form');
        form.find('input, select').on('change', function(e) {
            if(!selectedClassName) {
                return;
            }

            var data = form.toJSON();
            data.className = selectedClassName;

            var cssText = me.generateCss(data);
            me.displayCss(cssText);
            chrome.devtools.inspectedWindow.eval('AG_Melonh._insertCss("' + Utils.encode4Js(cssText) + '")', {
                useContentScriptContext: true
            });
        });
    },

    onSelectionChanged: function() {
        chrome.devtools.inspectedWindow.eval("$0.className", {
            useContentScriptContext: true
        }, function(className) {
            if(className) {
                className = className.match(/anim-\S+/);
                className && (className = className[0]);
            } else {
                debugger;
            }
            controlPanel.toggleClass('disabled', !className);

            if(!className) {
                selectedClassName = undefined;
                return;
            }

            selectedClassName = className;
        });
    },

    connectBg: function() {
        this.port = chrome.runtime.connect({
            name: 'pane'
        });

        this.sendToBg({
            name: 'init',
        });

        this.port.onMessage.addListener(this.onReceiveBg);
        this.port.onDisconnect.addListener(function() {
            this.port.onMessage.removeListener(this.onReceiveBg);
        });
    },

    injectScript: function() {
        this.sendToBg({
            name: 'injectScript',
            scriptToInject: [
                '/js/zepto.114.js',
                '/js/doT.js',
                '/devtools/content_script.js'
            ]
        });
    },

    sendToBg: function(msg) {
        msg.tabId = chrome.devtools.inspectedWindow.tabId;
        this.port.postMessage(msg);
    },

    onReceiveBg: function(msg) {
    },

    /***************************** 生成CSS ******************************/
    generateCss: function(data) {
        return Utils.tmpl(tmplSource, data);
    },


    /***************************** 为元素添加样式进行预览 ******************************/
    displayCss: function(cssText) {
        cssTextarea.val(cssText);
    }

};

app.init();



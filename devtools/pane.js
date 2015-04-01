function cssTemplate() {
    /*
{{selector}} {
    animation: {{animate_name}} {{animate_duration}}s {{animate_timing_function}} {{animate_delay}}s {{animate_iteration_count}};
}
{{keyframes}}
     */
}

var controlPanel = $('.control-panel');
var cssTextarea = $('.generated-css');
var selectedClassName;
var tmplSource = cssTemplate.toString().replace(/^.*\s*\/\*/, '').replace(/\*\/\s*\}\s*$/, '');
var animObj = {};
var defaultConfig = {
    animate_name: 'none',
    animate_duration: '1',
    animate_delay: '0',
    animate_timing_function: 'ease',
    animate_iteration_count: '1',
    animate_iteration_infinite: false
}

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

            if(data.animate_name == 'none') {
                delete animObj[data.className];
                return;
            }

            animObj[data.className] = $.extend({}, data);

            me.generateCss();
        });

        $('.play').on('click', function(e) {
            e.preventDefault();
            chrome.devtools.inspectedWindow.eval('AG_Melonh.replay()', {
                useContentScriptContext: true
            });
        });
    },

    onCssCompiled: function(cssText) {
        this.displayCss(cssText);
        chrome.devtools.inspectedWindow.eval('AG_Melonh.insertCss("' + Utils.encode4Js(cssText) + '")', {
            useContentScriptContext: true
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
                //debugger;
            }
            controlPanel.toggleClass('disabled', !className);

            if(!className) {
                selectedClassName = undefined;
                return;
            }

            selectedClassName = className;

            $('form').fillFromJSON(animObj[selectedClassName] || defaultConfig);
        });
    },

    connectBg: function() {
        var me = this;

        this.port = chrome.runtime.connect({
            name: 'pane'
        });

        this.sendToBg({
            name: 'init',
        });

        this.port.onMessage.addListener(onReceiveBgWrap);
        this.port.onDisconnect.addListener(function() {
            this.port.onMessage.removeListener(onReceiveBgWrap);
        });

        function onReceiveBgWrap() {
            me.onReceiveBg.apply(me, arguments);
        }
    },

    injectScript: function() {
        this.sendToBg({
            name: 'injectScript',
            scriptToInject: [
                '/js/zepto.114.js',
                //'/js/pleeease.js',
                //'/js/pleeease-3.2.4.min.js',
                '/devtools/content_script.js'
            ]
        });
    },

    sendToBg: function(msg) {
        msg.tabId = chrome.devtools.inspectedWindow.tabId;
        this.port.postMessage(msg);
    },

    onReceiveBg: function(msg) {
        switch(msg.name) {
            case 'pleeease':
                this.onCssCompiled(msg.compiled);
                break;
        }
    },

    /***************************** 生成CSS ******************************/
    generateCss: function(data) {
        var generatedCont = [];
        for(var className in animObj) {
            if(animObj.hasOwnProperty(className)) {
                var renderData = animObj[className];
                var animateData = this.getAnimateData(renderData.animate_name);
                renderData.keyframes = animateData.keyframes.toString().replace(/^.*\s*\/\*/, '').replace(/\*\/\s*\}\s*$/, '').replace(/ {2,}/g, ' ');

                // 预处理表单信息
                if(renderData.animate_iteration_infinite) {
                    renderData.animate_iteration_count = 'infinite';
                }
                renderData.selector = Utils.tmpl(renderData.selector_format, {'your className': '.' + renderData.className});
                generatedCont.push(Utils.tmpl(tmplSource, renderData));
            }
        }
        //return pleeease.process(generatedCont.join(''));
        this.sendToBg({
            name: 'pleeease',
            cssText: generatedCont.join('')
        });
    },


    /***************************** 为元素添加样式进行预览 ******************************/
    displayCss: function(cssText) {
        cssTextarea.val(cssText);
    },

    getAnimateData: function(animateName) {
        for(var i = 0; i < AnimateLibrary.length; i++) {
            for(var j = 0; j < AnimateLibrary[i].list.length; j++) {
                if(AnimateLibrary[i].list[j].name == animateName) {
                    return AnimateLibrary[i].list[j];
                }
            }
        }
    }

};

app.init();



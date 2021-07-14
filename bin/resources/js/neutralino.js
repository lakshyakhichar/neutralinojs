var Neutralino=function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=2)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.request=t.RequestType=void 0,function(e){e.GET="GET",e.POST="POST"}(t.RequestType||(t.RequestType={})),t.request=function(e){return new Promise((t,i)=>{let n="",r=function(){let e;return e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),e}();r.onreadystatechange=()=>{if(4==r.readyState&&200==r.status){let e=null,n=r.responseText;n&&(e=JSON.parse(n)),e&&e.success&&(e.hasOwnProperty("returnValue")?t(e.returnValue):t(e)),e&&e.error&&i(e.error)}else 4==r.readyState&&i("Neutralino server is offline. Try restarting the application")},e.isNativeMethod&&(e.url="http://localhost:"+window.NL_PORT+"/__nativeMethod_"+e.url),e.data&&(n=JSON.stringify(e.data)),"GET"==e.type&&(r.open("GET",e.url,!0),r.setRequestHeader("Authorization","Basic "+window.NL_TOKEN),r.send()),"POST"==e.type&&(r.open("POST",e.url,!0),r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.setRequestHeader("Authorization","Basic "+window.NL_TOKEN),r.send(n))})}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.open=t.getConfig=t.keepAlive=t.exit=void 0;const n=i(0);t.exit=function(){return n.request({url:"app.exit",type:n.RequestType.GET,isNativeMethod:!0})},t.keepAlive=function(){return n.request({url:"app.keepAlive",type:n.RequestType.GET,isNativeMethod:!0})},t.getConfig=function(){return n.request({url:"app.getConfig",type:n.RequestType.GET,isNativeMethod:!0})},t.open=function(e){return n.request({url:"app.open",type:n.RequestType.POST,data:e,isNativeMethod:!0})}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=t.window=t.app=t.debug=t.storage=t.computer=t.os=t.filesystem=void 0,t.filesystem=i(3),t.os=i(4),t.computer=i(5),t.storage=i(6),t.debug=i(7),t.app=i(1),t.window=i(8);var n=i(9);Object.defineProperty(t,"init",{enumerable:!0,get:function(){return n.init}})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.readDirectory=t.removeFile=t.readFile=t.writeFile=t.removeDirectory=t.createDirectory=void 0;const n=i(0);t.createDirectory=function(e){return n.request({url:"filesystem.createDirectory",type:n.RequestType.POST,data:e,isNativeMethod:!0})},t.removeDirectory=function(e){return n.request({url:"filesystem.removeDirectory",type:n.RequestType.POST,data:e,isNativeMethod:!0})},t.writeFile=function(e){return n.request({url:"filesystem.writeFile",type:n.RequestType.POST,data:e,isNativeMethod:!0})},t.readFile=function(e){return n.request({url:"filesystem.readFile",type:n.RequestType.POST,data:e,isNativeMethod:!0})},t.removeFile=function(e){return n.request({url:"filesystem.removeFile",type:n.RequestType.POST,data:e,isNativeMethod:!0})},t.readDirectory=function(e){return n.request({url:"filesystem.readDirectory",type:n.RequestType.POST,data:e,isNativeMethod:!0})}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setTray=t.showMessageBox=t.showNotification=t.showDialogSave=t.showDialogOpen=t.getEnvar=t.execCommand=t.MessageBoxType=void 0;const n=i(0);!function(e){e.WARN="WARN",e.ERROR="ERROR",e.INFO="INFO",e.QUESTION="QUESTION"}(t.MessageBoxType||(t.MessageBoxType={})),t.execCommand=function(e){return n.request({url:"os.execCommand",type:n.RequestType.POST,data:e,isNativeMethod:!0})},t.getEnvar=function(e){return n.request({url:"os.getEnvar",type:n.RequestType.POST,data:e,isNativeMethod:!0})},t.showDialogOpen=function(e){return n.request({url:"os.dialogOpen",type:n.RequestType.POST,data:e,isNativeMethod:!0})},t.showDialogSave=function(e){return n.request({url:"os.dialogSave",type:n.RequestType.POST,data:e,isNativeMethod:!0})},t.showNotification=function(e){return n.request({url:"os.showNotification",type:n.RequestType.POST,data:e,isNativeMethod:!0})},t.showMessageBox=function(e){return n.request({url:"os.showMessageBox",type:n.RequestType.POST,data:e,isNativeMethod:!0})},t.setTray=function(e){return n.request({url:"os.setTray",type:n.RequestType.POST,data:e,isNativeMethod:!0})}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRamUsage=void 0;const n=i(0);t.getRamUsage=function(){return n.request({url:"computer.getRamUsage",type:n.RequestType.GET,isNativeMethod:!0})}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getData=t.putData=void 0;const n=i(0);t.putData=function(e){return n.request({url:"storage.putData",type:n.RequestType.POST,data:e,isNativeMethod:!0})},t.getData=function(e){return n.request({url:"storage.getData",type:n.RequestType.POST,data:e,isNativeMethod:!0})}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=t.LoggerType=void 0;const n=i(0);!function(e){e.WARN="WARN",e.ERROR="ERROR",e.INFO="INFO"}(t.LoggerType||(t.LoggerType={})),t.log=function(e){return n.request({url:"debug.log",type:n.RequestType.POST,data:e,isNativeMethod:!0})}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setIcon=t.focus=t.isVisible=t.hide=t.show=t.isFullScreen=t.exitFullScreen=t.setFullScreen=t.minimize=t.isMaximized=t.unmaximize=t.maximize=t.setTitle=void 0;const n=i(0);t.setTitle=function(e){return n.request({url:"window.setTitle",type:n.RequestType.POST,data:{title:e},isNativeMethod:!0})},t.maximize=function(){return n.request({url:"window.maximize",type:n.RequestType.GET,isNativeMethod:!0})},t.unmaximize=function(){return n.request({url:"window.unmaximize",type:n.RequestType.GET,isNativeMethod:!0})},t.isMaximized=function(){return n.request({url:"window.isMaximized",type:n.RequestType.GET,isNativeMethod:!0})},t.minimize=function(){return n.request({url:"window.minimize",type:n.RequestType.GET,isNativeMethod:!0})},t.setFullScreen=function(){return n.request({url:"window.setFullScreen",type:n.RequestType.GET,isNativeMethod:!0})},t.exitFullScreen=function(){return n.request({url:"window.exitFullScreen",type:n.RequestType.GET,isNativeMethod:!0})},t.isFullScreen=function(){return n.request({url:"window.isFullScreen",type:n.RequestType.GET,isNativeMethod:!0})},t.show=function(){return n.request({url:"window.show",type:n.RequestType.GET,isNativeMethod:!0})},t.hide=function(){return n.request({url:"window.hide",type:n.RequestType.GET,isNativeMethod:!0})},t.isVisible=function(){return n.request({url:"window.isVisible",type:n.RequestType.GET,isNativeMethod:!0})},t.focus=function(){return n.request({url:"window.focus",type:n.RequestType.GET,isNativeMethod:!0})},t.setIcon=function(e){return n.request({url:"window.setIcon",type:n.RequestType.POST,isNativeMethod:!0,data:{icon:e}})}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;const n=i(10),r=i(11),o=i(12);t.init=function(){if(window.NL_MODE&&"browser"==window.NL_MODE&&n.ping.start(),void 0!==window.NL_ARGS)for(let e=0;e<window.NL_ARGS.length;e++)if("--debug-mode"==window.NL_ARGS[e]){r.devClient.start();break}window.NL_CVERSION=o.version}},function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(r,o){function u(e){try{a(n.next(e))}catch(e){o(e)}}function s(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(u,s)}a((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ping=void 0;const r=i(1);t.ping={start:()=>{setInterval(()=>n(void 0,void 0,void 0,(function*(){yield r.keepAlive()})),5e3)}}},function(e,t,i){"use strict";var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(r,o){function u(e){try{a(n.next(e))}catch(e){o(e)}}function s(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(u,s)}a((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.devClient=void 0;const r=i(0);t.devClient={start:function(){setInterval(()=>n(this,void 0,void 0,(function*(){try{(yield r.request({url:"http://localhost:5050",type:r.RequestType.GET})).needsReload&&location.reload()}catch(e){console.error("Unable to communicate with neu devServer")}})),1e3)}}},function(e){e.exports={name:"neutralino-client-library",version:"1.0.0",description:"",main:"index.js",scripts:{test:'echo "Error: no test specified" && exit 1',build:"webpack -p",watch:"webpack --watch"},repository:{type:"git",url:"git+https://github.com/neutralinojs/neutralino.js.git"},author:"Neutralinojs",license:"MIT",bugs:{url:"https://github.com/neutralinojs/neutralino.js/issues"},homepage:"https://github.com/neutralinojs/neutralino.js#readme",devDependencies:{"@types/node":"^14.14.34","ts-loader":"^8.0.18",typescript:"^4.2.3",webpack:"^4.10.2"},dependencies:{"webpack-cli":"^3.3.12"}}}]);
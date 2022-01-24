(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[12],{1092:function(e,t,n){"use strict";n.r(t),n.d(t,"mapStateToProps",(function(){return T})),n.d(t,"mapDispatchToProps",(function(){return E}));var o=n(12),a=n(0),r=n.n(a),i=n(61),c=n(500),s=n(524),u=n(528),l=n(447),d=n(174),f=n(1084),p=n(600),b=n.n(p),v=n(220),j=n.n(v),m=n(448),w=n(62),h=function(e,t){return t instanceof Object&&!(t instanceof Array)?Object.keys(t).sort().reduce((function(e,n){return e[n]=t[n],e}),{}):t};var O=n(598),g=n(41),x=n(83),y=n(32),S=n(556),R=n(1),A=Object(d.a)((function(e){return{root:{margin:e.spacing(1)},formatted:{borderColor:e.palette.text.disabled,borderStyle:"solid",borderWidth:1,borderRadius:e.shape.borderRadius,maxHeight:"500px",width:"100%",overflow:"auto"},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}}}}));function T(e){return{inputText:e.textInputs.lastJSONFormatterValue}}function E(e){return{storeInputText:function(t,n){return e(Object(w.b)(t,n))}}}t.default=Object(i.b)(T,E)(Object(u.a)()((function(e){var t="JSON Formatter",n=A(),a=Object(S.a)(),i=e.inputText,d=e.storeInputText,p=r.a.useState(""),v=Object(o.a)(p,2),w=v[0],T=v[1];r.a.useEffect((function(){T(function(e){if(!e)return"";try{var t=JSON.parse(e);return JSON.stringify(t,h,4)}catch(n){return e}}(i))}),[i]);return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(y.a,{title:t}),Object(R.jsxs)("div",{className:n.root,children:[Object(R.jsx)(g.a,{iconType:j.a,title:t}),Object(R.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(R.jsx)("div",{children:Object(R.jsx)(m.a,{autoFocus:Object(u.c)("md",e.width),label:"JSON Content",placeholder:"Paste or type the json content here",multiline:!0,minRows:10,maxRows:Object(u.c)("md",e.width)?20:10,variant:"outlined",margin:"normal",fullWidth:!0,value:i,onChange:function(e){return d("lastJSONFormatterValue",e.target.value)}})})}),Object(R.jsxs)(c.a,{className:n.toolbar,children:[Object(R.jsx)(s.a,{display:"flex",flexGrow:1}),Object(R.jsx)(x.a,{data:w}),Object(R.jsx)(l.a,{endIcon:Object(R.jsx)(b.a,{children:"Save As..."}),disabled:!w,variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),O.a(w)},children:"Save As..."})]}),Object(R.jsx)(f.a,{style:a,language:"json",className:n.formatted,children:w})]})]})})))},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(145),a=n(1076),r=n(1077),i=function(){return Object(o.c)().isDark?a.a:r.a}},598:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(599);function a(e){if(window.require){window.require("electron").ipcRenderer.send("saveJsonAs",e)}else{var t=new Blob([e],{type:"application/json"});Object(o.saveAs)(t,"data.json")}}},599:function(e,t,n){(function(n){var o,a,r;a=[],void 0===(r="function"===typeof(o=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){s(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,c=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,n){var c=i.URL||i.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?r(s):a(s.href)?o(e,t,n):r(s,s.target="_blank")):(s.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(s.href)}),4e4),setTimeout((function(){r(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(a(e))o(e,n,i);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){r(c)}))}}:function(e,t,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var r="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||r&&s||c)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},l.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,f=d.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});i.saveAs=s.saveAs=s,e.exports=s})?o.apply(t,a):o)||(e.exports=r)}).call(this,n(106))},600:function(e,t,n){"use strict";var o=n(17),a=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=(0,o(n(19)).default)(r.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=i}}]);
//# sourceMappingURL=12.d2b39c3f.chunk.js.map
/*! For license information please see settings-vue-settings-admin-delegation.js.LICENSE.txt */
!function(){"use strict";var e,r,n,o={71306:function(e,r,n){var o=n(20144),i=n(36456),a=n.n(i),u=n(79753),c=n(93664),s=n(64024),l=(0,n(17499).IY)().setApp("settings").detectUser().build();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(){p=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),u=new O(o||[]);return n(a,"_invoke",{value:S(t,r,u)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d={};function h(){}function v(){}function g(){}var y={};c(y,i,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(j([])));b&&b!==e&&r.call(b,i)&&(y=b);var w=g.prototype=h.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function o(n,i,a,u){var c=l(t[n],t,i);if("throw"!==c.type){var s=c.arg,p=s.value;return p&&"object"==f(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(p).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=E(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=g,n(w,"constructor",{value:g,configurable:!0}),n(g,"constructor",{value:v,configurable:!0}),v.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(A.prototype),c(A.prototype,a,(function(){return this})),t.AsyncIterator=A,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new A(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),c(w,u,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function d(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}var h={name:"GroupSelect",components:{NcSelect:a()},props:{availableGroups:{type:Array,default:function(){return[]}},setting:{type:Object,required:!0},authorizedGroups:{type:Array,required:!0}},data:function(){var t=this;return{selected:this.authorizedGroups.filter((function(e){return e.class===t.setting.class})).map((function(e){return t.availableGroups.find((function(t){return t.gid===e.group_id}))})).filter((function(t){return void 0!==t}))}},watch:{selected:function(){this.saveGroups()}},methods:{saveGroups:function(){var e,r=this;return(e=p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={newGroups:r.selected,class:r.setting.class},e.prev=1,e.next=4,c.Z.post((0,u.generateUrl)("/apps/settings/")+"/settings/authorizedgroups/saveSettings",n);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),(0,s.x2)(t("settings","Unable to modify setting")),l.error("Unable to modify setting",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(t){d(i,n,o,a,u,"next",t)}function u(t){d(i,n,o,a,u,"throw",t)}a(void 0)}))})()}}},v=h,g=n(93379),y=n.n(g),m=n(7795),b=n.n(m),w=n(90569),x=n.n(w),A=n(3565),S=n.n(A),E=n(19216),L=n.n(E),k=n(44589),O=n.n(k),j=n(91670),_={};_.styleTagTransform=O(),_.setAttributes=S(),_.insert=x().bind(null,"head"),_.domAPI=b(),_.insertStyleElement=L(),y()(j.Z,_),j.Z&&j.Z.locals&&j.Z.locals;var G=n(51900),C=(0,G.Z)(v,(function(){var t=this;return(0,t._self._c)("NcSelect",{staticClass:"group-select",attrs:{"input-id":t.setting.id,placeholder:t.t("settings","None"),label:"displayName",options:t.availableGroups,multiple:!0,"close-on-select":!1},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})}),[],!1,null,null,null).exports,N=n(13299),P=n.n(N),T=n(43554),Z={name:"AdminDelegating",components:{GroupSelect:C,NcSettingsSection:P()},data:function(){return{availableSettings:(0,T.j)("settings","available-settings"),availableGroups:(0,T.j)("settings","available-groups"),authorizedGroups:(0,T.j)("settings","authorized-groups"),authorizedSettingsDocLink:(0,T.j)("settings","authorized-settings-doc-link")}}},z=n(16197),I={};I.styleTagTransform=O(),I.setAttributes=S(),I.insert=x().bind(null,"head"),I.domAPI=b(),I.insertStyleElement=L(),y()(z.Z,I),z.Z&&z.Z.locals&&z.Z.locals;var F=(0,G.Z)(Z,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{name:t.t("settings","Administration privileges"),description:t.t("settings","Here you can decide which group can access certain sections of the administration settings."),"doc-url":t.authorizedSettingsDocLink}},[e("div",{staticClass:"setting-list"},t._l(t.availableSettings,(function(r){return e("div",{key:r.class},[e("label",{attrs:{for:r.id}},[t._v(t._s(r.sectionName))]),t._v(" "),e("GroupSelect",{attrs:{"available-groups":t.availableGroups,"authorized-groups":t.authorizedGroups,setting:r}})],1)})),0)])}),[],!1,null,"6afb59d5",null).exports;o.default.prototype.OC=OC,o.default.prototype.t=t,(new(o.default.extend(F))).$mount("#admin-right-sub-granting")},16197:function(t,e,r){var n=r(87537),o=r.n(n),i=r(23645),a=r.n(i)()(o());a.push([t.id,"label[data-v-6afb59d5]{display:block;font-size:16px;margin:12px 0;color:var(--color-text-light)}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegating.vue"],names:[],mappings:"AACA,uBACC,aAAA,CACA,cAAA,CACA,aAAA,CACA,6BAAA",sourcesContent:["\nlabel {\n\tdisplay: block;\n\tfont-size: 16px;\n\tmargin: 12px 0;\n\tcolor: var(--color-text-light);\n}\n"],sourceRoot:""}]),e.Z=a},91670:function(t,e,r){var n=r(87537),o=r.n(n),i=r(23645),a=r.n(i)()(o());a.push([t.id,".group-select{width:100%}","",{version:3,sources:["webpack://./apps/settings/src/components/AdminDelegation/GroupSelect.vue"],names:[],mappings:"AACA,cACC,UAAA",sourcesContent:["\n.group-select {\n\twidth: 100%;\n}\n"],sourceRoot:""}]),e.Z=a}},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={id:t,loaded:!1,exports:{}};return o[t].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=o,e=[],a.O=function(t,r,n,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],o=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](r[c])}))?r.splice(c--,1):(u=!1,o<i&&(i=o));if(u){e.splice(l--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))},a.u=function(t){return t+"-"+t+".js?v=2c0c1c90293ee127481e"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r={},n="nextcloud:",a.l=function(t,e,o,i){if(r[t])r[t].push(e);else{var u,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==n+o){u=f;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",n+o),u.src=t),r[t]=[e];var p=function(e,n){u.onerror=u.onload=null,clearTimeout(d);var o=r[t];if(delete r[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},a.j=6638,function(){var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!t;)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t}(),function(){a.b=document.baseURI||self.location.href;var t={6638:0};a.f.j=function(e,r){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=t[e]=[r,o]}));r.push(n[2]=o);var i=a.p+a.u(e),u=new Error;a.l(i,(function(r){if(a.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}}),"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,o,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(n in u)a.o(u,n)&&(a.m[n]=u[n]);if(c)var l=c(a)}for(e&&e(r);s<i.length;s++)o=i[s],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(l)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}(),a.nc=void 0;var u=a.O(void 0,[7874],(function(){return a(71306)}));u=a.O(u)}();
//# sourceMappingURL=settings-vue-settings-admin-delegation.js.map?v=b1264f3d0143c187705b
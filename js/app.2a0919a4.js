(function(e){function t(t){for(var r,c,u=t[0],l=t[1],i=t[2],s=0,d=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);v&&v(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=a[0]))}return e}var r={},n={app:0},o=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"61b5961f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var i=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(s);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,a[1](i)}n[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(a,r,function(t){return e[t]}.bind(null,r));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/test10/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var v=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1f32":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n={id:"nav"},o=Object(r["g"])("Home"),c=Object(r["g"])(" | "),u=Object(r["g"])("About");function l(e,t){var a=Object(r["w"])("router-link"),l=Object(r["w"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",n,[Object(r["h"])(a,{to:"/"},{default:Object(r["B"])((function(){return[o]})),_:1}),c,Object(r["h"])(a,{to:"/about"},{default:Object(r["B"])((function(){return[u]})),_:1})]),Object(r["h"])(l)],64)}a("f4c1");var i=a("6b0d"),s=a.n(i);const v={},d=s()(v,[["render",l]]);var p=d,f=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),b=a("cf05"),h=a.n(b),g={class:"home"},j=Object(r["e"])("img",{alt:"Vue logo",src:h.a},null,-1);function m(e,t,a,n,o,c){var u=Object(r["w"])("HelloWorld");return Object(r["q"])(),Object(r["d"])("div",g,[j,Object(r["h"])(u,{msg:"Welcome to Your Vue.js App"})])}var O={class:"hello"},k=Object(r["f"])('<p data-v-1863c4a2> For a guide and recipes on how to configure / customize this project,<br data-v-1863c4a2> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vue-cli documentation</a>. </p><h3 data-v-1863c4a2>Installed CLI Plugins</h3><ul data-v-1863c4a2><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-1863c4a2>babel</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-1863c4a2>router</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-1863c4a2>eslint</a></li></ul><h3 data-v-1863c4a2>Essential Links</h3><ul data-v-1863c4a2><li data-v-1863c4a2><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>Core Docs</a></li><li data-v-1863c4a2><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>Forum</a></li><li data-v-1863c4a2><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>Community Chat</a></li><li data-v-1863c4a2><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-1863c4a2>Twitter</a></li><li data-v-1863c4a2><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>News</a></li></ul><h3 data-v-1863c4a2>Ecosystem</h3><ul data-v-1863c4a2><li data-v-1863c4a2><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vue-router</a></li><li data-v-1863c4a2><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vuex</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-1863c4a2>vue-devtools</a></li><li data-v-1863c4a2><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vue-loader</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-1863c4a2>awesome-vue</a></li></ul>',7);function y(e,t,a,n,o,c){return Object(r["q"])(),Object(r["d"])("div",O,[Object(r["e"])("h1",null,Object(r["y"])(a.msg),1),k])}var w={name:"HelloWorld",props:{msg:String}};a("e77a");const _=s()(w,[["render",y],["__scopeId","data-v-1863c4a2"]]);var P=_,x={name:"Home",components:{HelloWorld:P}};const C=s()(x,[["render",m]]);var H=C,S=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],E=Object(f["a"])({history:Object(f["b"])(),routes:S}),T=E;Object(r["c"])(p).use(T).mount("#app")},c05a:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},e77a:function(e,t,a){"use strict";a("c05a")},f4c1:function(e,t,a){"use strict";a("1f32")}});
//# sourceMappingURL=app.2a0919a4.js.map
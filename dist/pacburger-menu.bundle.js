(()=>{"use strict";var n={83:(n,e,t)=>{t.d(e,{A:()=>o});var r=t(601),a=t.n(r),i=t(314),c=t.n(i)()(a());c.push([n.id,".__pacburger {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  z-index: 999;\n}\n\n.__pacburger_button_icon,\n.__pacburger_nav ul a {\n  position: relative;\n  display: flex;\n  background-color: #fff;\n}\n.__pacburger_div_pacman_circle,\n.__pacburger_div_pacman_triangle {\n  width: 1.5rem;\n  height: 0.25rem;\n  background-color: #fcd34d;\n  gap: 1rem;\n  transition:\n    height 0.6s ease,\n    transform 0.6s ease;\n}\n\n.__pacburger_nav .__pacburger_div_pacman_wrapper {\n  height: 100%;\n}\n.__pacburger_nav:not(.active) .__pacburger_div_pacman_wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  height: 100%;\n}\n\n.__pacburger_nav:not(.active) .__pacburger_div_pacman_circle,\n.__pacburger_nav:not(.active) .__pacburger_div_pacman_triangle {\n  border-radius: 6px;\n}\n\n.__pacburger_nav.active .__pacburger_div_pacman_circle,\n.__pacburger_nav.active .__pacburger_div_pacman_triangle {\n  height: 1.5rem;\n  position: absolute;\n  transition:\n    height 0.6s ease,\n    transform 0.6s ease;\n}\n\n.__pacburger_nav.active .__pacburger_div_pacman_circle {\n  transform: rotate(45deg);\n}\n\n.__pacburger_nav.active .__pacburger_div_pacman_triangle {\n  transform: rotate(-45deg);\n}\n\n.__pacburger_nav.active .__pacburger_div_pacman_circle {\n  border-radius: 50%;\n}\n\n.__pacburger_nav.active .__pacburger_div_pacman_triangle {\n  transform: rotate(45deg);\n  margin-left: -1rem;\n  z-index: 10;\n  background-color: #fff;\n}\n\n.__pacburger_nav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: fit-content;\n  padding: 1rem;\n  background-color: #fff;\n  transition: width 0.9s linear;\n}\n\n.__pacburger_nav.active ul {\n  width: 100%;\n}\n\n.__pacburger_nav.active ul.horizontal {\n  display: flex;\n}\n\n.__pacburger_nav ul {\n  width: 0;\n  padding: 0;\n  margin: 0;\n  transition: width 3s linear;\n  list-style-type: none;\n}\n\n.__pacburger_nav ul li {\n  opacity: 0;\n  margin: 0.5rem 0;\n}\n\n.__pacburger_nav.active ul li {\n  opacity: 1;\n}\n\n.__pacburger_nav.active ul li a {\n  letter-spacing: 0px;\n}\n\n.__pacburger_nav ul li a {\n  margin: 0 10px;\n  text-decoration: none;\n  color: #000;\n  letter-spacing: -8px;\n  transition: letter-spacing 3s linear;\n}\n\n.__pacburger_button_icon {\n  cursor: pointer;\n  border: none;\n  height: 30px;\n  width: 30px;\n  background: none;\n  position: relative;\n  align-items: center;\n}\n\n.__pacburger_nav.active .__pacburger_div_pacman_triangle {\n  animation: growShrink 0.8s ease-in-out 3.6;\n}\n\n@keyframes growShrink {\n  0%,\n  100% {\n    height: 0;\n  }\n  50% {\n    height: 24px;\n  }\n}\n",""]);const o=c},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(c[s]=!0)}for(var u=0;u<n.length;u++){var p=[].concat(n[u]);r&&c[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},601:n=>{n.exports=function(n){return n[1]}},804:(n,e,t)=>{t.r(e),t.d(e,{default:()=>m});var r=t(72),a=t.n(r),i=t(825),c=t.n(i),o=t(659),s=t.n(o),u=t(56),p=t.n(u),l=t(540),d=t.n(l),_=t(113),g=t.n(_),f=t(83),v={};v.styleTagTransform=g(),v.setAttributes=p(),v.insert=s().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=d(),a()(f.A,v);const m=f.A&&f.A.locals?f.A.locals:void 0},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},c=[],o=0;o<n.length;o++){var s=n[o],u=r.base?s[0]+r.base:s[0],p=i[u]||0,l="".concat(u," ").concat(p);i[u]=p+1;var d=t(l),_={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(_);else{var g=a(_,r);r.byIndex=o,e.splice(o,0,{identifier:l,updater:g,references:1})}c.push(l)}return c}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var c=0;c<i.length;c++){var o=t(i[c]);e[o].references--}for(var s=r(n,a),u=0;u<i.length;u++){var p=t(i[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.nc=void 0,t(804),new(function(){function n(n){this.pacburgerClassPrefix="__pacburger",this.menuItems=this._createMenuItems(n),this._createPacBurger(),this._addToggleEvent()}return n.prototype._createMenuItems=function(n){return n.map((function(n){var e=document.createElement("li"),t=document.createElement("a");return t.href=n.href,t.textContent=n.label,e.appendChild(t),e}))},n.prototype._createPacBurger=function(){var n=document.createElement("ul"),e=document.createElement("nav"),t=document.createElement("button"),r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div");this.menuItems.forEach((function(e){n.appendChild(e)})),r.className=this.pacburgerClassPrefix,n.className="".concat(this.pacburgerClassPrefix,"_ul horizontal"),e.className="".concat(this.pacburgerClassPrefix,"_nav"),t.className="".concat(this.pacburgerClassPrefix,"_button_icon"),a.className="".concat(this.pacburgerClassPrefix,"_div_pacman_wrapper"),i.className="".concat(this.pacburgerClassPrefix,"_div_pacman_circle"),c.className="".concat(this.pacburgerClassPrefix,"_div_pacman_triangle"),a.appendChild(i),a.appendChild(c),t.appendChild(a),e.appendChild(n),e.appendChild(t),r.appendChild(e),document.body.appendChild(r)},n.prototype._addToggleEvent=function(){var n=document.getElementsByClassName("".concat(this.pacburgerClassPrefix,"_button_icon")),e=document.getElementsByClassName("".concat(this.pacburgerClassPrefix,"_nav"));n&&e&&n[0].addEventListener("click",(function(){e[0].classList.toggle("active")}))},n}())([{label:"Portfolio",href:"https://agb.github.io/portfolio"},{label:"Behance",href:"https://behance.com/agokselb"},{label:"Github",href:"https://github.com/agb"}])})();
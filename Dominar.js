/**
 * **Dominar** from KPVERSE
 *
 * Updated on June 19, 2023.
 *
 * Copyright © 2023-present, Kartavya Patel. All rights reserved.
 *
 * @author Kartavya Patel <patelka2211@gmail.com>
 *
 * @license {@link https://github.com/patelka2211/dominar/blob/main/LICENSE MIT}
 */
!function(){"use strict";function e(e,n){for(var t in n)if(Object.prototype.hasOwnProperty.call(n,t)){var r=n[t];"string"==typeof r||"number"==typeof r?e.setAttribute(t,""===r?" ":String(r)):e.setAttribute(t,"")}return e}function n(e,n){return Object.entries(n).forEach((function(n){var t=n[0],r=n[1];e.addEventListener(t,r)})),e}var t=function(e){var n,t=(new DOMParser).parseFromString(e,"image/svg+xml");this.svg=t.querySelector("svg"),null!==(null===(n=this.svg)||void 0===n?void 0:n.querySelector("parsererror"))&&(this.svg=null)};function r(e,n,r){if(void 0===r&&(r="append"),"string"==typeof n||"number"==typeof n)e[r](String(n));else if(n instanceof i)e[r](n.renderedTag);else if(n instanceof o)for(var a=n.renderedTagList,s="append"===r?0:1,u="append"===r?1:-1,c=0;c<a.length;c++)e[r](a[(a.length-1)*s+c*u]);else n instanceof t&&null!==n.svg?e[r](n.svg):n instanceof HTMLElement&&e[r](n);return e}var i=function(){function t(t,i){if(this.renderedTag=document.createElement(t),void 0!==i){var o=i.attributes,a=i.children,s=i.eventListeners;void 0!==o&&e(this.renderedTag,o),void 0!==a&&r(this.renderedTag,a),void 0!==s&&n(this.renderedTag,s)}}return t.prototype.additionally=function(e){return e(this.renderedTag),this},t}();var o=function(e){var n=this;this.renderedTagList=[],e.forEach((function(e){"string"==typeof e||"number"==typeof e?n.renderedTagList.push(String(e)):e instanceof i?n.renderedTagList.push(e.renderedTag):e instanceof t&&null!==e.svg?n.renderedTagList.push(e.svg):e instanceof HTMLElement&&n.renderedTagList.push(e)}))};var a=function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}u((r=r.apply(e,n||[])).next())}))},s=function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};window.Dominar={SVGParser:function(e){return new t(e)},addEventListeners:n,insertChildren:r,removeEventListeners:function(e,n){return Object.entries(n).forEach((function(n){var t=n[0],r=n[1];e.removeEventListener(t,r)})),e},render:function(e,n,t){return void 0===t&&(t={clearBeforeRender:!0}),a(this,void 0,void 0,(function(){var i,o;return s(this,(function(a){return i=t.clearBeforeRender,o=t.insertType,void 0===i&&(i=!0),!0===i&&(e.innerHTML=""),!0!==i&&void 0!==o||(o="append"),r(e,n,o),[2]}))}))},setAttributes:e,tag:function(e,n){return new i(e,n)},tagList:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return new o(e)}}}();
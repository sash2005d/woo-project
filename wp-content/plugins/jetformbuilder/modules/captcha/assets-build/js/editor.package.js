(()=>{"use strict";var t=(0,wp.components.createSlotFill)("JFBCaptchaOptions"),e=t.Slot,r=t.Fill;function n(t){var e=t.children,n=t.provider,o=void 0!==n&&n;return wp.element.createElement(r,null,(function(t){var r=t.args,n=t.setArgs;return o&&o!==r.captcha?null:"function"!=typeof e?e:e({args:r,setArgs:n})}))}n.Slot=e;const o=n;function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var c=["attributes"];function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a=(0,wp.components.createSlotFill)("JFBCaptchaBlockEdit"),f=a.Slot,p=a.Fill;function b(t){var e=t.children,r=t.provider;return wp.element.createElement(p,null,(function(t){var n=t.attributes,o=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,c);return r&&r!==n.provider?null:"function"!=typeof e?e:e(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({attributes:n},o))}))}b.Slot=f;const y=b;function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var w=JetFBHooks.useMetaState;const j=function(){var t;return null!==(t=window.JetFormEditorData["captcha-tab-config"])&&void 0!==t?t:[]};function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var g=JetFBHooks.useMetaState,S=wp.i18n.__,P=wp.element,E=P.useMemo,k=P.useCallback,B=wp.data,A=B.useDispatch,F=B.useSelect,D=wp.blocks.createBlock,C=wp.components,J=C.Tip,I=C.Button,T="jet-forms/captcha-container";function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function H(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function M(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?H(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===_(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}window.JetFBComponents=M(M({},window.JetFBComponents),{},{CaptchaOptions:o,CaptchaBlockEdit:y,CaptchaBlockTip:function(){var t,e,r=(t=g("_jf_recaptcha"),e=1,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,c,l=[],u=!0,a=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(a)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],n=E((function(){return t=r.captcha,null!==(e=null==(n=j().find((function(e){return e.value===t})))?void 0:n.label)&&void 0!==e?e:S("captcha","jet-form-builder");var t,e,n}),[r.captcha]),o=A("core/block-editor").insertBlock,i=F((function(t){return!t("jet-forms/fields").getBlock(T)})),c=k((function(){if(i){var t=D(T,{provider:r.captcha});o(t)}}),[i]);return wp.element.createElement(React.Fragment,null,wp.element.createElement("div",{style:{marginBottom:"1.5em"}},wp.element.createElement(J,null,S("By default, the captcha is added before the submit \nbutton of the form. However, you can determine its location \nyourself using the block.","jet-form-builder"))),wp.element.createElement(I,{variant:"secondary",disabled:!i,onClick:c},S("Add","jet-form-builder")+" ","".concat(n," ")+S("block","jet-form-builder")))}}),window.JetFBActions=M(M({},window.JetFBActions),{},{getCaptchaProviders:j}),window.JetFBHooks=M(M({},window.JetFBHooks),{},{useCaptchaProvider:function(){var t,e,r,n=(e=w("_jf_recaptcha"),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,c,l=[],u=!0,a=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(a)throw o}}return l}}(e,r)||function(t,e){if(t){if("string"==typeof t)return O(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1],c=o.captcha;if(!c)return[{},function(){}];var l=null!==(t=null==o?void 0:o[c])&&void 0!==t?t:{};return[l,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c&&i((function(e){return v(v({},e),{},d({},c,v(v({},l),t)))}))}]}})})();
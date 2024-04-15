(()=>{"use strict";var e="jetFBSanitizeValue",t="sanitizeValue";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=JetFBActions.getSupport;const a="jet-forms/sanitizers",u="REGISTER",c="UNREGISTER";function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={getTypeIndex:function(e,t){return e.types.findIndex((function(e){return e.value===t}))},getTypes:function(e){return e.types},getType:function(e,t){var r=m.getTypeIndex(e,t);return e.types[r]},getAllowedToMergeTypes:function(e){return e.types.filter((function(e){var t=e.allowMerge;return void 0!==t&&t})).map((function(e){return e.value}))}};const v=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},m);var b;function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===g(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}const C=(h(b={},u,(function(e,t){Array.isArray(t.items)||(t.items=[t.items]);var r,n,o=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(a)throw i}}}}(t.items);try{for(o.s();!(r=o.n()).done;){var i=r.value;if((i="object"===g(n=i)?n:"string"==typeof n?{value:n,label:n}:n).hasOwnProperty("value")){var l=v.getTypeIndex(e,i.value);-1===l?e.types.push(d({},i)):e.types[l]=d(d({},e.types[l]),i)}}}catch(e){o.e(e)}finally{o.f()}return e})),h(b,c,(function(e,t){var r=t.types;return e.types=e.types.filter((function(e){var t=e.value;return!r.includes(t)})),e})),b);var L={types:[]};const j={register:function(e){return{type:u,items:e}},unRegister:function(e){return{type:c,types:e}}},S=(0,wp.data.createReduxStore)(a,{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,r=C[null==t?void 0:t.type];return r?r(e,t):e},actions:j,selectors:v});var O=wp.primitives,E=O.SVG,x=O.Path;const P=wp.element.createElement(E,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:"M22.4252 2.31632C22.0034 1.89456 21.3196 1.89456 20.8978 2.31633L15.3824 7.83176L14.5541 7.0035C13.9412 6.39055 12.9935 6.26433 12.2415 6.69549L10.4954 7.69657L17.0449 14.2461L18.046 12.5C18.4771 11.748 18.3509 10.8003 17.738 10.1874L16.9097 9.35911L22.4252 3.84368C22.8469 3.42191 22.8469 2.73809 22.4252 2.31632Z",fill:"#0F172A"}),wp.element.createElement(x,{d:"M16.0554 15.9719L8.76961 8.68604L2.96521 12.0139C1.86791 12.643 1.66816 14.1428 2.56255 15.0372L3.06918 15.5438L5.39309 14.2854C5.81286 14.0581 6.27106 14.5163 6.04375 14.936L4.78531 17.26L9.70429 22.1789C10.5987 23.0733 12.0985 22.8736 12.7276 21.7763L16.0554 15.9719Z",fill:"#0F172A"}));var _=wp.data.useSelect,M=wp.blockEditor.useBlockEditContext;var B=wp.data.useSelect;const k=(0,wp.element.createContext)({control:{},current:!1,addNew:function(){},remove:function(){},edit:function(){},onClose:function(){}});var z=wp.element.useContext;const A=function(){return z(k)};var T=JetFBActions.isEmpty,Z=wp.components.Button;const D=function(){var e=A(),t=e.control,r=e.remove,n=e.current,o=e.addNew,i=!T(n);return wp.element.createElement(Z,{onClick:function(e){e.stopPropagation(),i?r():o()},className:["components-dropdown-menu__menu-item","has-text",i?"is-active":""].join(" "),icon:t.icon,"aria-checked":i,role:"menuitemcheckbox",shortcut:t.help||""},t.label)};function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function F(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||N(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){V(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==I(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===I(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e,t){if(e){if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(e,t):void 0}}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var $=wp.i18n.__,U=wp.components,G=U.ToolbarDropdownMenu,q=U.Button,K=(U.Flex,JetFBHooks.useBlockAttributes),Q=JetFBComponents.BaseHelp,W=function(e){var t=e.onClose,r=e.control,n=e.current,o=e.addNew,i=e.remove,l=e.edit,a="function"==typeof r.render?r.render:null;return wp.element.createElement(k.Provider,{value:{control:r,current:n,addNew:o,remove:i,edit:l,onClose:t}},a?wp.element.createElement(a,null):wp.element.createElement(D,null))},X=function(e){return e.icon=e.icon||P,e};const Y=function(){var r,n,o,i,l,u,c=(l=K(),u=2,function(e){if(Array.isArray(e))return e}(l)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,l,a=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(l,u)||N(l,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=c[0],p=c[1],f=(r=M(),n=r.clientId,o=r.name,i=_((function(t){return t("core/blocks").getBlockSupport(o,e)}),[]),_((function(e){var t=e(a).getTypes();return Array.isArray(i)?t.filter((function(e){var t=e.value;return i.includes(t)})):t}),[n])).map(X),m=s[t],v=B((function(e){return e(a).getAllowedToMergeTypes()}),[]),b=function(e){var t;return v.includes(null!==(t=null==e?void 0:e.value)&&void 0!==t?t:e)},w=function(e){return null!=m&&m.length?m.findIndex((function(t){return"string"==typeof t?t===e:t.value===e})):-1};return wp.element.createElement(G,{icon:P,label:$("Sanitize value","jet-form-builder")},(function(e){var r=e.onClose;return wp.element.createElement(React.Fragment,null,wp.element.createElement(Q,null,$("Select method to clean user input before process form","jet-form-builder")),f.map((function(e,n){return wp.element.createElement(W,{key:n,control:e,onClose:r,current:null==m?void 0:m[w(e.value)],addNew:function(){return r=e.value,p((function(e){return b(r)?H(H({},e),{},V({},t,[].concat(F(e[t]||[]),[r]))):H(H({},e),{},V({},t,[].concat(F((e[t]||[]).filter(b)),[r])))}));var r},remove:function(){return r=e.value,p((function(e){return H(H({},e),{},V({},t,e[t].filter((function(e){var t;return(null!==(t=null==e?void 0:e.value)&&void 0!==t?t:e)!==r}))))}));var r},edit:function(r){return function(e,r){return p((function(n){var o=JSON.parse(JSON.stringify(n[t]||[])),i=w(e);return-1===i&&(i=o.push({value:e})-1),"string"==typeof o[i]&&(o[i]={value:e}),o[i]=H(H({},o[i]),r),H(H({},n),{},V({},t,F(o)))}))}(e.value,r)}})})),wp.element.createElement(q,{onClick:function(e){e.stopPropagation(),r(),p((function(e){return H(H({},e),{},V({},t,void 0))}))},className:["components-dropdown-menu__menu-item","has-separator"].join(" "),role:"menuitem",disabled:!(null!=m&&m.length)},$("Reset all","jet-form-builder")))}))};var ee=wp.compose.createHigherOrderComponent,te=wp.blockEditor.BlockControls,re=wp.data.useSelect;const ne=ee((function(t){return function(r){var n=r.name,o=re((function(t){return t("core/blocks").getBlockSupport(n,e)}));return wp.element.createElement(React.Fragment,null,wp.element.createElement(t,r),Boolean(o)&&wp.element.createElement(te,{group:"other"},wp.element.createElement(Y,null)))}}),"withBlockToolbarControls");var oe=wp.components,ie=oe.TextControl,le=oe.Button,ae=JetFBHooks.useSuccessNotice,ue=wp.i18n.__,ce=wp.compose.useCopyToClipboard,se="jet_fb_sv_",pe=new RegExp("^".concat(se));var fe=wp.i18n.__;const me={value:"custom",label:fe("Custom transform","jet-form-builder"),render:function(){var e,t,r=A(),n=r.edit,o=r.remove,i=r.current,l=ae(ue("Paste the copied snippet into your theme's functions.php.","jet-form-builder")),a=ce((t=null==i?void 0:i.callback,"function jet_fb_sv_".concat(t,"( \\JFB_Modules\\Block_Parsers\\Field_Data_Parser $parser ) {\n\t$value = $parser->get_value();\n\n\t// do something with $value...\n\n\t$parser->set_value( $value );\n}")),(function(){return l(!0)}));return wp.element.createElement(React.Fragment,null,wp.element.createElement(D,null),Boolean(i)&&wp.element.createElement("div",{style:{padding:"6px 12px 6px 8px"}},wp.element.createElement(ie,{value:null!==(e=null==i?void 0:i.callback)&&void 0!==e?e:"",onChange:function(e){e=function(e){var t;return null!==(t=e)&&void 0!==t&&t.length&&se!==e?(e=e.replace(/[^\w]/gi,"")).replace(pe,""):""}(e),Boolean(e)?n({callback:e}):o()}}),Boolean(null==i?void 0:i.callback)&&wp.element.createElement(le,{isLink:!0,ref:a},ue("Copy the snippet","jet-form-builder"))))},help:fe("Specify the name of the PHP function that will process the value","jet-form-builder"),icon:wp.element.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"})),allowMerge:!0};var ve=wp.i18n.__;const be={value:"email",label:ve("Sanitize email","jet-form-builder"),help:ve("Strips out all characters that are not allowable in an email","jet-form-builder"),icon:wp.element.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M12.5939 21C14.1472 21 16.1269 20.5701 17.0711 20.1975L16.6447 18.879C16.0964 19.051 14.3299 19.6242 12.6548 19.6242C7.4467 19.6242 4.67513 16.8726 4.67513 12C4.67513 7.21338 7.50762 4.34713 12.2893 4.34713C17.132 4.34713 19.4162 7.55732 19.4162 10.7675C19.4162 14.035 19.0508 15.4968 17.4975 15.4968C16.5838 15.4968 16.0964 14.7803 16.0964 13.9777V7.5H14.4822V8.30255H14.3909C14.1777 7.67198 12.9898 7.12739 11.467 7.2707C9.18274 7.5 7.4467 9.27707 7.4467 11.8567C7.4467 14.5796 8.81726 16.672 11.467 16.758C13.203 16.8153 14.1168 16.0127 14.4822 15.1815H14.5736C14.7563 16.414 16.401 16.8439 17.467 16.8439C20.6954 16.8439 21 13.5764 21 10.7962C21 6.86943 18.0761 3 12.3807 3C6.50254 3 3 6.3535 3 11.9427C3 17.7325 6.38071 21 12.5939 21ZM11.7107 15.2962C9.73096 15.2962 9.03046 13.6051 9.03046 11.7707C9.03046 10.1083 10.0355 8.67516 11.7716 8.67516C13.599 8.67516 14.5736 9.36306 14.5736 11.7707C14.5736 14.1497 13.7513 15.2962 11.7107 15.2962Z"}))};var we=wp.i18n.__;const de={value:"key",label:we("Sanitize key","jet-form-builder"),help:we("Keys are used as internal identifiers. Lowercase \nalphanumeric characters, dashes, and underscores are allowed.","jet-form-builder"),icon:wp.element.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M9 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9 16a4.002 4.002 0 003.8-2.75H15V16h2.5v-2.75H19v-2.5h-6.2A4.002 4.002 0 005 12a4 4 0 004 4z",fillRule:"evenodd",clipRule:"evenodd"}))};var he=wp.i18n.__;const ye={value:"text",label:he("Sanitize text","jet-form-builder"),help:he("Checks for invalid UTF-8, converts single `<` characters \nto entities, strips all tags, removes line breaks, tabs, and extra whitespace, \nstrips percent-encoded characters","jet-form-builder"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M12.9 6h-2l-4 11h1.9l1.1-3h4.2l1.1 3h1.9L12.9 6zm-2.5 6.5l1.5-4.9 1.7 4.9h-3.2z"}))};var ge=wp.i18n.__;const Ce={value:"textarea",label:ge("Sanitize textarea","jet-form-builder"),help:ge('The function is like "Sanitize text", but preserves \nnew lines (\\n) and other whitespace, which are legitimate \ninput in textarea elements',"jet-form-builder"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z"}))};var Le=wp.i18n.__;const je={value:"title",label:Le("Sanitize title","jet-form-builder"),help:Le("Sanitizes a string into a slug, which can be used in \nURLs or HTML attributes","jet-form-builder"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M17.6 7c-.6.9-1.5 1.7-2.6 2v1h2v7h2V7h-1.4zM11 11H7V7H5v10h2v-4h4v4h2V7h-2v4z"}))};var Se=wp.i18n.__;const Oe={value:"url",label:Se("Sanitize url","jet-form-builder"),help:Se("Sanitizes a URL for database or redirect usage","jet-form-builder"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))};var Ee=wp.i18n.__;const xe={value:"user",label:Ee("Sanitize user name","jet-form-builder"),help:Ee("Sanitizes a username, stripping out unsafe characters","jet-form-builder"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{fillRule:"evenodd",d:"M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",clipRule:"evenodd"}))};var Pe=wp.i18n.__;const _e={value:"int",label:Pe("Integer","jet-form-builder"),help:Pe("An integer is a number of the set {..., -2, -1, 0, 1, 2, ...}.","jet-form-builder"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 56 56"},wp.element.createElement("path",{d:"M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 21.9882 39.4023 C 22.9023 39.4023 23.4648 38.9336 23.6523 38.0664 L 24.7070 33.0274 L 29.0663 33.0274 L 28.1054 37.6211 C 27.8944 38.5820 28.5742 39.4023 29.5351 39.4023 C 30.4960 39.4023 31.1054 38.9336 31.2695 38.0664 L 32.3241 33.0039 L 34.7617 33.0039 C 35.6757 33.0039 36.3320 32.3242 36.3320 31.4336 C 36.3320 30.6367 35.7695 30.0508 34.9960 30.0508 L 32.9570 30.0508 L 33.9648 25.2930 L 36.4492 25.2930 C 37.3398 25.2930 37.9960 24.6133 37.9960 23.7227 C 37.9960 22.9258 37.4335 22.3398 36.6601 22.3398 L 34.5742 22.3398 L 35.4882 17.9571 C 35.6757 16.9961 34.9726 16.1758 34.0117 16.1758 C 33.0976 16.1758 32.5117 16.6445 32.3241 17.5352 L 31.3163 22.3398 L 26.9570 22.3398 L 27.8710 17.9571 C 28.0585 17.0196 27.4023 16.1758 26.4179 16.1758 C 25.4804 16.1758 24.8944 16.6445 24.7070 17.5352 L 23.7226 22.3398 L 21.2382 22.3398 C 20.3476 22.3398 19.6913 23.0196 19.6913 23.9102 C 19.6913 24.7071 20.2539 25.2930 21.0273 25.2930 L 23.0898 25.2930 L 22.0820 30.0508 L 19.5742 30.0508 C 18.6835 30.0508 18.0039 30.7305 18.0039 31.6211 C 18.0039 32.4180 18.5663 33.0039 19.3632 33.0039 L 21.4726 33.0039 L 20.5117 37.6211 C 20.3241 38.5820 21.0273 39.4023 21.9882 39.4023 Z M 25.1523 30.3320 L 26.2304 25.0586 L 30.9413 25.0586 L 29.8398 30.3320 Z",fill:"currentColor"}))};var Me=wp.i18n.__;const Be={value:"number",label:Me("Number","jet-form-builder"),help:Me("It can be either an integer or a non-integer","jet-form-builder"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 56 56"},wp.element.createElement("path",{d:"M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 21.9882 39.4023 C 22.9023 39.4023 23.4648 38.9336 23.6523 38.0664 L 24.7070 33.0274 L 29.0663 33.0274 L 28.1054 37.6211 C 27.8944 38.5820 28.5742 39.4023 29.5351 39.4023 C 30.4960 39.4023 31.1054 38.9336 31.2695 38.0664 L 32.3241 33.0039 L 34.7617 33.0039 C 35.6757 33.0039 36.3320 32.3242 36.3320 31.4336 C 36.3320 30.6367 35.7695 30.0508 34.9960 30.0508 L 32.9570 30.0508 L 33.9648 25.2930 L 36.4492 25.2930 C 37.3398 25.2930 37.9960 24.6133 37.9960 23.7227 C 37.9960 22.9258 37.4335 22.3398 36.6601 22.3398 L 34.5742 22.3398 L 35.4882 17.9571 C 35.6757 16.9961 34.9726 16.1758 34.0117 16.1758 C 33.0976 16.1758 32.5117 16.6445 32.3241 17.5352 L 31.3163 22.3398 L 26.9570 22.3398 L 27.8710 17.9571 C 28.0585 17.0196 27.4023 16.1758 26.4179 16.1758 C 25.4804 16.1758 24.8944 16.6445 24.7070 17.5352 L 23.7226 22.3398 L 21.2382 22.3398 C 20.3476 22.3398 19.6913 23.0196 19.6913 23.9102 C 19.6913 24.7071 20.2539 25.2930 21.0273 25.2930 L 23.0898 25.2930 L 22.0820 30.0508 L 19.5742 30.0508 C 18.6835 30.0508 18.0039 30.7305 18.0039 31.6211 C 18.0039 32.4180 18.5663 33.0039 19.3632 33.0039 L 21.4726 33.0039 L 20.5117 37.6211 C 20.3241 38.5820 21.0273 39.4023 21.9882 39.4023 Z M 25.1523 30.3320 L 26.2304 25.0586 L 30.9413 25.0586 L 29.8398 30.3320 Z",fill:"currentColor"}))};var ke=wp.i18n.__;const ze={value:"absint",label:ke("Positive integer","jet-form-builder"),help:ke("An integer that must be greater than or equal to zero","jet-form-builder"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 56 56"},wp.element.createElement("path",{d:"M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 21.9882 39.4023 C 22.9023 39.4023 23.4648 38.9336 23.6523 38.0664 L 24.7070 33.0274 L 29.0663 33.0274 L 28.1054 37.6211 C 27.8944 38.5820 28.5742 39.4023 29.5351 39.4023 C 30.4960 39.4023 31.1054 38.9336 31.2695 38.0664 L 32.3241 33.0039 L 34.7617 33.0039 C 35.6757 33.0039 36.3320 32.3242 36.3320 31.4336 C 36.3320 30.6367 35.7695 30.0508 34.9960 30.0508 L 32.9570 30.0508 L 33.9648 25.2930 L 36.4492 25.2930 C 37.3398 25.2930 37.9960 24.6133 37.9960 23.7227 C 37.9960 22.9258 37.4335 22.3398 36.6601 22.3398 L 34.5742 22.3398 L 35.4882 17.9571 C 35.6757 16.9961 34.9726 16.1758 34.0117 16.1758 C 33.0976 16.1758 32.5117 16.6445 32.3241 17.5352 L 31.3163 22.3398 L 26.9570 22.3398 L 27.8710 17.9571 C 28.0585 17.0196 27.4023 16.1758 26.4179 16.1758 C 25.4804 16.1758 24.8944 16.6445 24.7070 17.5352 L 23.7226 22.3398 L 21.2382 22.3398 C 20.3476 22.3398 19.6913 23.0196 19.6913 23.9102 C 19.6913 24.7071 20.2539 25.2930 21.0273 25.2930 L 23.0898 25.2930 L 22.0820 30.0508 L 19.5742 30.0508 C 18.6835 30.0508 18.0039 30.7305 18.0039 31.6211 C 18.0039 32.4180 18.5663 33.0039 19.3632 33.0039 L 21.4726 33.0039 L 20.5117 37.6211 C 20.3241 38.5820 21.0273 39.4023 21.9882 39.4023 Z M 25.1523 30.3320 L 26.2304 25.0586 L 30.9413 25.0586 L 29.8398 30.3320 Z",fill:"currentColor"}))};var Ae=wp.i18n.__;const Te={value:"absnumber",label:Ae("Positive number","jet-form-builder"),help:Ae("An integer or a non-integer that must be greater than or equal to zero","jet-form-builder"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 56 56"},wp.element.createElement("path",{d:"M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 21.9882 39.4023 C 22.9023 39.4023 23.4648 38.9336 23.6523 38.0664 L 24.7070 33.0274 L 29.0663 33.0274 L 28.1054 37.6211 C 27.8944 38.5820 28.5742 39.4023 29.5351 39.4023 C 30.4960 39.4023 31.1054 38.9336 31.2695 38.0664 L 32.3241 33.0039 L 34.7617 33.0039 C 35.6757 33.0039 36.3320 32.3242 36.3320 31.4336 C 36.3320 30.6367 35.7695 30.0508 34.9960 30.0508 L 32.9570 30.0508 L 33.9648 25.2930 L 36.4492 25.2930 C 37.3398 25.2930 37.9960 24.6133 37.9960 23.7227 C 37.9960 22.9258 37.4335 22.3398 36.6601 22.3398 L 34.5742 22.3398 L 35.4882 17.9571 C 35.6757 16.9961 34.9726 16.1758 34.0117 16.1758 C 33.0976 16.1758 32.5117 16.6445 32.3241 17.5352 L 31.3163 22.3398 L 26.9570 22.3398 L 27.8710 17.9571 C 28.0585 17.0196 27.4023 16.1758 26.4179 16.1758 C 25.4804 16.1758 24.8944 16.6445 24.7070 17.5352 L 23.7226 22.3398 L 21.2382 22.3398 C 20.3476 22.3398 19.6913 23.0196 19.6913 23.9102 C 19.6913 24.7071 20.2539 25.2930 21.0273 25.2930 L 23.0898 25.2930 L 22.0820 30.0508 L 19.5742 30.0508 C 18.6835 30.0508 18.0039 30.7305 18.0039 31.6211 C 18.0039 32.4180 18.5663 33.0039 19.3632 33.0039 L 21.4726 33.0039 L 20.5117 37.6211 C 20.3241 38.5820 21.0273 39.4023 21.9882 39.4023 Z M 25.1523 30.3320 L 26.2304 25.0586 L 30.9413 25.0586 L 29.8398 30.3320 Z",fill:"currentColor"}))};var Ze=wp.data,De=Ze.register,Ie=Ze.dispatch,Fe=wp.hooks.addFilter;wp.i18n.__,Fe("blocks.registerBlockType","jet-form-builder/sanitize-value-support",(function(r,n){return l(r,e)?(r.attributes=o(o({},r.attributes),{},i({},t,{type:"array",default:[]})),r):r})),Fe("editor.BlockEdit","jet-form-builder/sanitize-value-controls",ne),De(S);var Re=window.JetFBValueSanitizers;Ie(a).register(Re),Ie(a).register([be,de,ye,Ce,je,Oe,xe,_e,Be,ze,Te,me])})();
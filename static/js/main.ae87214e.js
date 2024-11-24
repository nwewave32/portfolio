/*! For license information please see main.ae87214e.js.LICENSE.txt */
(()=>{var e={876:(e,t,n)=>{"use strict";var r=n(630),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return r.isMemo(e)?i:l[e.$$typeof]||a}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=i;var u=Object.defineProperty,c=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var a=p(n);a&&a!==h&&e(t,a,r)}var i=c(n);d&&(i=i.concat(d(n)));for(var l=s(t),m=s(n),g=0;g<i.length;++g){var v=i[g];if(!o[v]&&(!r||!r[v])&&(!m||!m[v])&&(!l||!l[v])){var y=f(n,v);try{u(t,v,y)}catch(b){}}}}return t}},138:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,y=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case d:case o:case l:case i:case p:return e;default:switch(e=e&&e.$$typeof){case u:case f:case g:case m:case s:return e;default:return t}}case a:return t}}}function S(e){return x(e)===d}t.AsyncMode=c,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=f,t.Fragment=o,t.Lazy=g,t.Memo=m,t.Portal=a,t.Profiler=l,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return S(e)||x(e)===c},t.isConcurrentMode=S,t.isContextConsumer=function(e){return x(e)===u},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===f},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===a},t.isProfiler=function(e){return x(e)===l},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===d||e===l||e===i||e===p||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f||e.$$typeof===y||e.$$typeof===b||e.$$typeof===w||e.$$typeof===v)},t.typeOf=x},630:(e,t,n)=>{"use strict";e.exports=n(138)},184:(e,t)=>{"use strict";var n,r=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case l:case i:case f:case p:return e;default:switch(e=e&&e.$$typeof){case c:case u:case d:case m:case h:case s:return e;default:return t}}case a:return t}}}n=Symbol.for("react.module.reference"),t.isFragment=function(e){return v(e)===o}},116:(e,t,n)=>{"use strict";e.exports=n(184)},345:(e,t,n)=>{"use strict";var r=n(950),a=n(340);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,x=Symbol.for("react.element"),S=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),P=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var z=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var F,M=Object.assign;function I(e){if(void 0===F)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);F=t&&t[1]||""}return"\n"+F+e}var D=!1;function A(e,t){if(!e||D)return"";D=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{D=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function U(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=A(e.type,!1);case 11:return e=A(e.type.render,!1);case 1:return e=A(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case C:return"Fragment";case S:return"Portal";case _:return"Profiler";case k:return"StrictMode";case O:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case j:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case $:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return H(e(t))}catch(n){}}return null}function V(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function B(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=B(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=B(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function q(e,t){var n=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function Z(e,t){G(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function oe(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function xe(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,Ce=null,ke=null;function _e(e){if(e=ba(e)){if("function"!==typeof Se)throw Error(o(280));var t=e.stateNode;t&&(t=xa(t),Se(e.stateNode,e.type,t))}}function Ee(e){Ce?ke?ke.push(e):ke=[e]:Ce=e}function Pe(){if(Ce){var e=Ce,t=ke;if(ke=Ce=null,_e(e),t)for(e=0;e<t.length;e++)_e(t[e])}}function je(e,t){return e(t)}function Oe(){}var Te=!1;function $e(e,t,n){if(Te)return e(t,n);Te=!0;try{return je(e,t,n)}finally{Te=!1,(null!==Ce||null!==ke)&&(Oe(),Pe())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=xa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Re=!1;if(c)try{var ze={};Object.defineProperty(ze,"passive",{get:function(){Re=!0}}),window.addEventListener("test",ze,ze),window.removeEventListener("test",ze,ze)}catch(ce){Re=!1}function Le(e,t,n,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Fe=!1,Me=null,Ie=!1,De=null,Ae={onError:function(e){Fe=!0,Me=e}};function Ue(e,t,n,r,a,o,i,l,s){Fe=!1,Me=null,Le.apply(Ae,arguments)}function He(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ve(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(He(e)!==e)throw Error(o(188))}function Be(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=He(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return We(a),e;if(i===r)return We(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Ke=a.unstable_scheduleCallback,Qe=a.unstable_cancelCallback,qe=a.unstable_shouldYield,Xe=a.unstable_requestPaint,Ge=a.unstable_now,Ze=a.unstable_getCurrentPriorityLevel,Je=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,ot=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=dt(l):0!==(o&=i)&&(r=dt(o))}else 0!==(i=n&~a)?r=dt(i):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-it(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var bt=0;function wt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var xt,St,Ct,kt,_t,Et=!1,Pt=[],jt=null,Ot=null,Tt=null,$t=new Map,Nt=new Map,Rt=[],zt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":$t.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function Ft(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=ba(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Mt(e){var t=ya(e.target);if(null!==t){var n=He(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ve(n)))return e.blockedOn=t,void _t(e.priority,(function(){Ct(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ba(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);we=r,n.target.dispatchEvent(r),we=null,t.shift()}return!0}function Dt(e,t,n){It(e)&&n.delete(t)}function At(){Et=!1,null!==jt&&It(jt)&&(jt=null),null!==Ot&&It(Ot)&&(Ot=null),null!==Tt&&It(Tt)&&(Tt=null),$t.forEach(Dt),Nt.forEach(Dt)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,At)))}function Ht(e){function t(t){return Ut(t,e)}if(0<Pt.length){Ut(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==jt&&Ut(jt,e),null!==Ot&&Ut(Ot,e),null!==Tt&&Ut(Tt,e),$t.forEach(t),Nt.forEach(t),n=0;n<Rt.length;n++)(r=Rt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)Mt(n),null===n.blockedOn&&Rt.shift()}var Vt=w.ReactCurrentBatchConfig,Wt=!0;function Bt(e,t,n,r){var a=bt,o=Vt.transition;Vt.transition=null;try{bt=1,Kt(e,t,n,r)}finally{bt=a,Vt.transition=o}}function Yt(e,t,n,r){var a=bt,o=Vt.transition;Vt.transition=null;try{bt=4,Kt(e,t,n,r)}finally{bt=a,Vt.transition=o}}function Kt(e,t,n,r){if(Wt){var a=qt(e,t,n,r);if(null===a)Wr(e,t,r,Qt,n),Lt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return jt=Ft(jt,e,t,n,r,a),!0;case"dragenter":return Ot=Ft(Ot,e,t,n,r,a),!0;case"mouseover":return Tt=Ft(Tt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return $t.set(o,Ft($t.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Nt.set(o,Ft(Nt.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<zt.indexOf(e)){for(;null!==a;){var o=ba(a);if(null!==o&&xt(o),null===(o=qt(e,t,n,r))&&Wr(e,t,r,Qt,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Qt=null;function qt(e,t,n,r){if(Qt=null,null!==(e=ya(e=xe(r))))if(null===(t=He(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ve(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Gt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,a="value"in Gt?Gt.value:Gt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Jt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=M({},un,{view:0,detail:0}),fn=an(dn),pn=M({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_n,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),mn=an(M({},pn,{dataTransfer:0})),gn=an(M({},dn,{relatedTarget:0})),vn=an(M({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=M({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=an(yn),wn=an(M({},un,{data:0})),xn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Cn[e])&&!!t[e]}function _n(){return kn}var En=M({},dn,{key:function(e){if(e.key){var t=xn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_n,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=an(En),jn=an(M({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),On=an(M({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_n})),Tn=an(M({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=M({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=an($n),Rn=[9,13,27,32],zn=c&&"CompositionEvent"in window,Ln=null;c&&"documentMode"in document&&(Ln=document.documentMode);var Fn=c&&"TextEvent"in window&&!Ln,Mn=c&&(!zn||Ln&&8<Ln&&11>=Ln),In=String.fromCharCode(32),Dn=!1;function An(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Vn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Vn[e.type]:"textarea"===t}function Bn(e,t,n,r){Ee(r),0<(t=Yr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Kn=null;function Qn(e){Ir(e,0)}function qn(e){if(K(wa(e)))return e}function Xn(e,t){if("change"===e)return t}var Gn=!1;if(c){var Zn;if(c){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;Gn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),Kn=Yn=null)}function nr(e){if("value"===e.propertyName&&qn(Kn)){var t=[];Bn(t,Kn,e,xe(e)),$e(Qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qn(Kn)}function or(e,t){if("click"===e)return qn(t)}function ir(e,t){if("input"===e||"change"===e)return qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=cr(n,o);var i=cr(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,br=!1;function wr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==Q(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=Yr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},Cr={},kr={};function _r(e){if(Cr[e])return Cr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in kr)return Cr[e]=n[t];return e}c&&(kr=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var Er=_r("animationend"),Pr=_r("animationiteration"),jr=_r("animationstart"),Or=_r("transitionend"),Tr=new Map,$r="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){Tr.set(e,t),s(t,[e])}for(var Rr=0;Rr<$r.length;Rr++){var zr=$r[Rr];Nr(zr.toLowerCase(),"on"+(zr[0].toUpperCase()+zr.slice(1)))}Nr(Er,"onAnimationEnd"),Nr(Pr,"onAnimationIteration"),Nr(jr,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(Or,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Mr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,u){if(Ue.apply(this,arguments),Fe){if(!Fe)throw Error(o(198));var c=Me;Fe=!1,Me=null,Ie||(Ie=!0,De=c)}}(r,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Mr(a,l,u),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Mr(a,l,u),o=s}}}if(Ie)throw e=De,Ie=!1,De=null,e}function Dr(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(Vr(t,e,2,!1),n.add(r))}function Ar(e,t,n){var r=0;t&&(r|=4),Vr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Ur]){e[Ur]=!0,i.forEach((function(t){"selectionchange"!==t&&(Fr.has(t)||Ar(t,!1,e),Ar(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Ar("selectionchange",!1,t))}}function Vr(e,t,n,r){switch(Xt(t)){case 1:var a=Bt;break;case 4:a=Yt;break;default:a=Kt}n=a.bind(null,t,n,e),a=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=ya(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}$e((function(){var r=o,a=xe(n),i=[];e:{var l=Tr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Pn;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=On;break;case Er:case Pr:case jr:s=vn;break;case Or:s=Tn;break;case"scroll":s=fn;break;case"wheel":s=Nn;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=jn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Ne(h,f))&&c.push(Br(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,a),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===we||!(u=n.relatedTarget||n.fromElement)||!ya(u)&&!u[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?ya(u):null)&&(u!==(d=He(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=jn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:wa(s),p=null==u?l:wa(u),(l=new c(m,h+"leave",s,n,a)).target=d,l.relatedTarget=p,m=null,ya(a)===r&&((c=new c(f,h+"enter",u,n,a)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Kr(p))h++;for(p=0,m=f;m;m=Kr(m))p++;for(;0<h-p;)c=Kr(c),h--;for(;0<p-h;)f=Kr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Kr(c),f=Kr(f)}c=null}else c=null;null!==s&&Qr(i,l,s,c,!1),null!==u&&null!==d&&Qr(i,d,u,c,!0)}if("select"===(s=(l=r?wa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Xn;else if(Wn(l))if(Gn)g=ir;else{g=ar;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=or);switch(g&&(g=g(e,r))?Bn(i,g,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?wa(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,wr(i,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":wr(i,n,a)}var y;if(zn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Hn?An(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Mn&&"ko"!==n.locale&&(Hn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Hn&&(y=en()):(Zt="value"in(Gt=a)?Gt.value:Gt.textContent,Hn=!0)),0<(v=Yr(r,b)).length&&(b=new wn(b,e,null,n,a),i.push({event:b,listeners:v}),y?b.data=y:null!==(y=Un(n))&&(b.data=y))),(y=Fn?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Dn=!0,In);case"textInput":return(e=t.data)===In&&Dn?null:e;default:return null}}(e,n):function(e,t){if(Hn)return"compositionend"===e||!zn&&An(e,t)?(e=en(),Jt=Zt=Gt=null,Hn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(a=new wn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=y))}Ir(i,t)}))}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Ne(e,n))&&r.unshift(Br(e,o,a)),null!=(o=Ne(e,t))&&r.push(Br(e,o,a))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Ne(n,o))&&i.unshift(Br(n,s,l)):a||null!=(s=Ne(n,o))&&i.push(Br(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var qr=/\r\n?/g,Xr=/\u0000|\uFFFD/g;function Gr(e){return("string"===typeof e?e:""+e).replace(qr,"\n").replace(Xr,"")}function Zr(e,t,n){if(t=Gr(t),Gr(e)!==t&&n)throw Error(o(425))}function Jr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof Promise?Promise:void 0,ia="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oa?function(e){return oa.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ht(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ht(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,va="__reactHandles$"+da;function ya(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[fa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function ba(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function xa(e){return e[pa]||null}var Sa=[],Ca=-1;function ka(e){return{current:e}}function _a(e){0>Ca||(e.current=Sa[Ca],Sa[Ca]=null,Ca--)}function Ea(e,t){Ca++,Sa[Ca]=e.current,e.current=t}var Pa={},ja=ka(Pa),Oa=ka(!1),Ta=Pa;function $a(e,t){var n=e.type.contextTypes;if(!n)return Pa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Na(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ra(){_a(Oa),_a(ja)}function za(e,t,n){if(ja.current!==Pa)throw Error(o(168));Ea(ja,t),Ea(Oa,n)}function La(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,V(e)||"Unknown",a));return M({},n,r)}function Fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pa,Ta=ja.current,Ea(ja,e),Ea(Oa,Oa.current),!0}function Ma(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=La(e,t,Ta),r.__reactInternalMemoizedMergedChildContext=e,_a(Oa),_a(ja),Ea(ja,e)):_a(Oa),Ea(Oa,n)}var Ia=null,Da=!1,Aa=!1;function Ua(e){null===Ia?Ia=[e]:Ia.push(e)}function Ha(){if(!Aa&&null!==Ia){Aa=!0;var e=0,t=bt;try{var n=Ia;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ia=null,Da=!1}catch(a){throw null!==Ia&&(Ia=Ia.slice(e+1)),Ke(Je,Ha),a}finally{bt=t,Aa=!1}}return null}var Va=[],Wa=0,Ba=null,Ya=0,Ka=[],Qa=0,qa=null,Xa=1,Ga="";function Za(e,t){Va[Wa++]=Ya,Va[Wa++]=Ba,Ba=e,Ya=t}function Ja(e,t,n){Ka[Qa++]=Xa,Ka[Qa++]=Ga,Ka[Qa++]=qa,qa=e;var r=Xa;e=Ga;var a=32-it(r)-1;r&=~(1<<a),n+=1;var o=32-it(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Xa=1<<32-it(t)+a|n<<a|r,Ga=o+e}else Xa=1<<o|n<<a|r,Ga=e}function eo(e){null!==e.return&&(Za(e,1),Ja(e,1,0))}function to(e){for(;e===Ba;)Ba=Va[--Wa],Va[Wa]=null,Ya=Va[--Wa],Va[Wa]=null;for(;e===qa;)qa=Ka[--Qa],Ka[Qa]=null,Ga=Ka[--Qa],Ka[Qa]=null,Xa=Ka[--Qa],Ka[Qa]=null}var no=null,ro=null,ao=!1,oo=null;function io(e,t){var n=$u(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==qa?{id:Xa,overflow:Ga}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=$u(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(ao){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ua(n.nextSibling);var r=no;t&&lo(e,t)?io(r,n):(e.flags=-4097&e.flags|2,ao=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!ao)return co(e),ao=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw po(),Error(o(418));for(;t;)io(e,t),t=ua(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ua(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ua(e.nextSibling)}function ho(){ro=no=null,ao=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=w.ReactCurrentBatchConfig;function vo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bo(e){return(0,e._init)(e._payload)}function wo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ru(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Mu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===C?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===N&&bo(o)===t.type)?((r=a(t,n.props)).ref=vo(e,t,n),r.return=e,r):((r=zu(n.type,n.key,n.props,null,e.mode,r)).ref=vo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Iu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Lu(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Mu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case x:return(n=zu(t.type,t.key,t.props,null,e.mode,n)).ref=vo(e,null,t),n.return=e,n;case S:return(t=Iu(t,e.mode,n)).return=e,t;case N:return f(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lu(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case x:return n.key===a?u(e,t,n,r):null;case S:return n.key===a?c(e,t,n,r):null;case N:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||L(n))return null!==a?null:d(e,t,n,r,null);yo(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case x:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case N:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,a,null);yo(t,r)}return null}function m(a,o,l,s){for(var u=null,c=null,d=o,m=o=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(a,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),o=i(v,o,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===l.length)return n(a,d),ao&&Za(a,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(o=i(d,o,m),null===c?u=d:c.sibling=d,c=d);return ao&&Za(a,m),u}for(d=r(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=i(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(a,e)})),ao&&Za(a,m),u}function g(a,l,s,u){var c=L(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var d=c=null,m=l,g=l=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(a,m,y.value,u);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(a,m),l=i(b,l,g),null===d?c=b:d.sibling=b,d=b,m=v}if(y.done)return n(a,m),ao&&Za(a,g),c;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=f(a,y.value,u))&&(l=i(y,l,g),null===d?c=y:d.sibling=y,d=y);return ao&&Za(a,g),c}for(m=r(a,m);!y.done;g++,y=s.next())null!==(y=h(m,a,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),l=i(y,l,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(a,e)})),ao&&Za(a,g),c}return function e(r,o,i,s){if("object"===typeof i&&null!==i&&i.type===C&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case x:e:{for(var u=i.key,c=o;null!==c;){if(c.key===u){if((u=i.type)===C){if(7===c.tag){n(r,c.sibling),(o=a(c,i.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===N&&bo(u)===c.type){n(r,c.sibling),(o=a(c,i.props)).ref=vo(r,c,i),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===C?((o=Lu(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=zu(i.type,i.key,i.props,null,r.mode,s)).ref=vo(r,o,i),s.return=r,r=s)}return l(r);case S:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Iu(i,r.mode,s)).return=r,r=o}return l(r);case N:return e(r,o,(c=i._init)(i._payload),s)}if(te(i))return m(r,o,i,s);if(L(i))return g(r,o,i,s);yo(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=Mu(i,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var xo=wo(!0),So=wo(!1),Co=ka(null),ko=null,_o=null,Eo=null;function Po(){Eo=_o=ko=null}function jo(e){var t=Co.current;_a(Co),e._currentValue=t}function Oo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function To(e,t){ko=e,Eo=_o=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bl=!0),e.firstContext=null)}function $o(e){var t=e._currentValue;if(Eo!==e)if(e={context:e,memoizedValue:t,next:null},null===_o){if(null===ko)throw Error(o(308));_o=e,ko.dependencies={lanes:0,firstContext:e}}else _o=_o.next=e;return t}var No=null;function Ro(e){null===No?No=[e]:No.push(e)}function zo(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Ro(t)):(n.next=a.next,a.next=n),t.interleaved=n,Lo(e,r)}function Lo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Fo=!1;function Mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Io(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Do(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ao(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&js)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Lo(e,n)}return null===(a=r.interleaved)?(t.next=t,Ro(r)):(t.next=a.next,a.next=t),r.interleaved=t,Lo(e,n)}function Uo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Ho(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vo(e,t,n,r){var a=e.updateQueue;Fo=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=M({},d,f);break e;case 2:Fo=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Fs|=i,e.lanes=i,e.memoizedState=d}}function Wo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Bo={},Yo=ka(Bo),Ko=ka(Bo),Qo=ka(Bo);function qo(e){if(e===Bo)throw Error(o(174));return e}function Xo(e,t){switch(Ea(Qo,t),Ea(Ko,e),Ea(Yo,Bo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}_a(Yo),Ea(Yo,t)}function Go(){_a(Yo),_a(Ko),_a(Qo)}function Zo(e){qo(Qo.current);var t=qo(Yo.current),n=se(t,e.type);t!==n&&(Ea(Ko,e),Ea(Yo,n))}function Jo(e){Ko.current===e&&(_a(Yo),_a(Ko))}var ei=ka(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var ai=w.ReactCurrentDispatcher,oi=w.ReactCurrentBatchConfig,ii=0,li=null,si=null,ui=null,ci=!1,di=!1,fi=0,pi=0;function hi(){throw Error(o(321))}function mi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,a,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=null===e||null===e.memoizedState?Ji:el,e=n(r,a),di){i=0;do{if(di=!1,fi=0,25<=i)throw Error(o(301));i+=1,ui=si=null,t.updateQueue=null,ai.current=tl,e=n(r,a)}while(di)}if(ai.current=Zi,t=null!==si&&null!==si.next,ii=0,ui=si=li=null,ci=!1,t)throw Error(o(300));return e}function vi(){var e=0!==fi;return fi=0,e}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ui?li.memoizedState=ui=e:ui=ui.next=e,ui}function bi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ui?li.memoizedState:ui.next;if(null!==t)ui=t,si=e;else{if(null===e)throw Error(o(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ui?li.memoizedState=ui=e:ui=ui.next=e}return ui}function wi(e,t){return"function"===typeof t?t(e):t}function xi(e){var t=bi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=si,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((ii&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,li.lanes|=d,Fs|=d}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(bl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,li.lanes|=i,Fs|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Si(e){var t=bi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);lr(i,t.memoizedState)||(bl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ci(){}function ki(e,t){var n=li,r=bi(),a=t(),i=!lr(r.memoizedState,a);if(i&&(r.memoizedState=a,bl=!0),r=r.queue,Fi(Pi.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ui&&1&ui.memoizedState.tag){if(n.flags|=2048,$i(9,Ei.bind(null,n,r,a,t),void 0,null),null===Os)throw Error(o(349));0!==(30&ii)||_i(n,t,a)}return a}function _i(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ei(e,t,n,r){t.value=n,t.getSnapshot=r,ji(t)&&Oi(e)}function Pi(e,t,n){return n((function(){ji(t)&&Oi(e)}))}function ji(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Oi(e){var t=Lo(e,1);null!==t&&nu(t,e,1,-1)}function Ti(e){var t=yi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:e},t.queue=e,e=e.dispatch=Qi.bind(null,li,e),[t.memoizedState,e]}function $i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ni(){return bi().memoizedState}function Ri(e,t,n,r){var a=yi();li.flags|=e,a.memoizedState=$i(1|t,n,void 0,void 0===r?null:r)}function zi(e,t,n,r){var a=bi();r=void 0===r?null:r;var o=void 0;if(null!==si){var i=si.memoizedState;if(o=i.destroy,null!==r&&mi(r,i.deps))return void(a.memoizedState=$i(t,n,o,r))}li.flags|=e,a.memoizedState=$i(1|t,n,o,r)}function Li(e,t){return Ri(8390656,8,e,t)}function Fi(e,t){return zi(2048,8,e,t)}function Mi(e,t){return zi(4,2,e,t)}function Ii(e,t){return zi(4,4,e,t)}function Di(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ai(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,zi(4,4,Di.bind(null,t,e),n)}function Ui(){}function Hi(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vi(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wi(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),li.lanes|=n,Fs|=n,e.baseState=!0),t)}function Bi(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=oi.transition;oi.transition={};try{e(!1),t()}finally{bt=n,oi.transition=r}}function Yi(){return bi().memoizedState}function Ki(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qi(e))Xi(t,n);else if(null!==(n=zo(e,t,n,r))){nu(n,e,r,eu()),Gi(n,t,r)}}function Qi(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qi(e))Xi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(a.next=a,Ro(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=zo(e,t,a,r))&&(nu(n,e,r,a=eu()),Gi(n,t,r))}}function qi(e){var t=e.alternate;return e===li||null!==t&&t===li}function Xi(e,t){di=ci=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gi(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Zi={readContext:$o,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Ji={readContext:$o,useCallback:function(e,t){return yi().memoizedState=[e,void 0===t?null:t],e},useContext:$o,useEffect:Li,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ri(4194308,4,Di.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=yi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ki.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yi().memoizedState=e},useState:Ti,useDebugValue:Ui,useDeferredValue:function(e){return yi().memoizedState=e},useTransition:function(){var e=Ti(!1),t=e[0];return e=Bi.bind(null,e[1]),yi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,a=yi();if(ao){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Os)throw Error(o(349));0!==(30&ii)||_i(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Li(Pi.bind(null,r,i,e),[e]),r.flags|=2048,$i(9,Ei.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yi(),t=Os.identifierPrefix;if(ao){var n=Ga;t=":"+t+"R"+(n=(Xa&~(1<<32-it(Xa)-1)).toString(32)+n),0<(n=fi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:$o,useCallback:Hi,useContext:$o,useEffect:Fi,useImperativeHandle:Ai,useInsertionEffect:Mi,useLayoutEffect:Ii,useMemo:Vi,useReducer:xi,useRef:Ni,useState:function(){return xi(wi)},useDebugValue:Ui,useDeferredValue:function(e){return Wi(bi(),si.memoizedState,e)},useTransition:function(){return[xi(wi)[0],bi().memoizedState]},useMutableSource:Ci,useSyncExternalStore:ki,useId:Yi,unstable_isNewReconciler:!1},tl={readContext:$o,useCallback:Hi,useContext:$o,useEffect:Fi,useImperativeHandle:Ai,useInsertionEffect:Mi,useLayoutEffect:Ii,useMemo:Vi,useReducer:Si,useRef:Ni,useState:function(){return Si(wi)},useDebugValue:Ui,useDeferredValue:function(e){var t=bi();return null===si?t.memoizedState=e:Wi(t,si.memoizedState,e)},useTransition:function(){return[Si(wi)[0],bi().memoizedState]},useMutableSource:Ci,useSyncExternalStore:ki,useId:Yi,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=M({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:M({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&He(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Do(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Ao(e,o,a))&&(nu(t,e,a,r),Uo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Do(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Ao(e,o,a))&&(nu(t,e,a,r),Uo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Do(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Ao(e,a,r))&&(nu(t,e,r,n),Uo(t,e,r))}};function ol(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,o))}function il(e,t,n){var r=!1,a=Pa,o=t.contextType;return"object"===typeof o&&null!==o?o=$o(o):(a=Na(t)?Ta:ja.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?$a(e,a):Pa),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Mo(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=$o(o):(o=Na(t)?Ta:ja.current,a.context=$a(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Vo(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var a=n}catch(o){a="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:a,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Do(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ws||(Ws=!0,Bs=r),dl(0,t)},n}function hl(e,t,n){(n=Do(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ys?Ys=new Set([this]):Ys.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=_u.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Do(-1,1)).tag=2,Ao(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var yl=w.ReactCurrentOwner,bl=!1;function wl(e,t,n,r){t.child=null===e?So(t,null,n,r):xo(t,e.child,n,r)}function xl(e,t,n,r,a){n=n.render;var o=t.ref;return To(t,a),r=gi(e,t,n,r,o,a),n=vi(),null===e||bl?(ao&&n&&eo(t),t.flags|=1,wl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wl(e,t,a))}function Sl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Nu(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=zu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Cl(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Wl(e,t,a)}return t.flags|=1,(e=Ru(o,r)).ref=t.ref,e.return=t,t.child=e}function Cl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(bl=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,Wl(e,t,a);0!==(131072&e.flags)&&(bl=!0)}}return El(e,t,n,r,a)}function kl(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ea(Rs,Ns),Ns|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ea(Rs,Ns),Ns|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ea(Rs,Ns),Ns|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ea(Rs,Ns),Ns|=r;return wl(e,t,a,n),t.child}function _l(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,a){var o=Na(n)?Ta:ja.current;return o=$a(t,o),To(t,a),n=gi(e,t,n,r,o,a),r=vi(),null===e||bl?(ao&&r&&eo(t),t.flags|=1,wl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wl(e,t,a))}function Pl(e,t,n,r,a){if(Na(n)){var o=!0;Fa(t)}else o=!1;if(To(t,a),null===t.stateNode)Vl(e,t),il(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;"object"===typeof u&&null!==u?u=$o(u):u=$a(t,u=Na(n)?Ta:ja.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,i,r,u),Fo=!1;var f=t.memoizedState;i.state=f,Vo(t,r,i,a),s=t.memoizedState,l!==r||f!==s||Oa.current||Fo?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Fo||ol(t,n,l,r,f,s,u))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Io(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),i.props=u,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=$o(s):s=$a(t,s=Na(n)?Ta:ja.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,i,r,s),Fo=!1,f=t.memoizedState,i.state=f,Vo(t,r,i,a);var h=t.memoizedState;l!==d||f!==h||Oa.current||Fo?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Fo||ol(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return jl(e,t,n,r,o,a)}function jl(e,t,n,r,a,o){_l(e,t);var i=0!==(128&t.flags);if(!r&&!i)return a&&Ma(t,n,!1),Wl(e,t,o);r=t.stateNode,yl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=xo(t,e.child,null,o),t.child=xo(t,null,l,o)):wl(e,t,l,o),t.memoizedState=r.state,a&&Ma(t,n,!0),t.child}function Ol(e){var t=e.stateNode;t.pendingContext?za(0,t.pendingContext,t.pendingContext!==t.context):t.context&&za(0,t.context,!1),Xo(e,t.containerInfo)}function Tl(e,t,n,r,a){return ho(),mo(a),t.flags|=256,wl(e,t,n,r),t.child}var $l,Nl,Rl,zl,Ll={dehydrated:null,treeContext:null,retryLane:0};function Fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ml(e,t,n){var r,a=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Ea(ei,1&i),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Fu(s,a,0,null),e=Lu(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Fl(n),t.memoizedState=Ll,e):Il(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Dl(e,t,l,r=cl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Fu({mode:"visible",children:r.children},a,0,null),(i=Lu(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&xo(t,e.child,null,l),t.child.memoizedState=Fl(l),t.memoizedState=Ll,i);if(0===(1&t.mode))return Dl(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Dl(e,t,l,r=cl(i=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),bl||s){if(null!==(r=Os)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Lo(e,a),nu(r,e,a,-1))}return mu(),Dl(e,t,l,r=cl(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Pu.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ro=ua(a.nextSibling),no=t,ao=!0,oo=null,null!==e&&(Ka[Qa++]=Xa,Ka[Qa++]=Ga,Ka[Qa++]=qa,Xa=e.id,Ga=e.overflow,qa=t),t=Il(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(l){l=a.fallback,s=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Ru(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Ru(r,l):(l=Lu(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Fl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ll,a}return e=(l=e.child).sibling,a=Ru(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Il(e,t){return(t=Fu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Dl(e,t,n,r){return null!==r&&mo(r),xo(t,e.child,null,n),(e=Il(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Al(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Oo(e.return,t,n)}function Ul(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Hl(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(wl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Al(e,n,t);else if(19===e.tag)Al(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ea(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ul(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ti(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ul(t,!0,n,null,o);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Fs|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Ru(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ru(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Bl(e,t){if(!ao)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Yl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yl(t),null;case 1:case 17:return Na(t.type)&&Ra(),Yl(t),null;case 3:return r=t.stateNode,Go(),_a(Oa),_a(ja),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(iu(oo),oo=null))),Nl(e,t),Yl(t),null;case 5:Jo(t);var a=qo(Qo.current);if(n=t.type,null!==e&&null!=t.stateNode)Rl(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Yl(t),null}if(e=qo(Yo.current),fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[fa]=t,r[pa]=i,e=0!==(1&t.mode),n){case"dialog":Dr("cancel",r),Dr("close",r);break;case"iframe":case"object":case"embed":Dr("load",r);break;case"video":case"audio":for(a=0;a<Lr.length;a++)Dr(Lr[a],r);break;case"source":Dr("error",r);break;case"img":case"image":case"link":Dr("error",r),Dr("load",r);break;case"details":Dr("toggle",r);break;case"input":X(r,i),Dr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Dr("invalid",r);break;case"textarea":ae(r,i),Dr("invalid",r)}for(var s in ye(n,i),a=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Dr("scroll",r)}switch(n){case"input":Y(r),J(r,i,!0);break;case"textarea":Y(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Jr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,$l(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":Dr("cancel",e),Dr("close",e),a=r;break;case"iframe":case"object":case"embed":Dr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Lr.length;a++)Dr(Lr[a],e);a=r;break;case"source":Dr("error",e),a=r;break;case"img":case"image":case"link":Dr("error",e),Dr("load",e),a=r;break;case"details":Dr("toggle",e),a=r;break;case"input":X(e,r),a=q(e,r),Dr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=M({},r,{value:void 0}),Dr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Dr("invalid",e)}for(i in ye(n,a),u=a)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?ge(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Dr("scroll",e):null!=c&&b(e,i,c,s))}switch(n){case"input":Y(e),J(e,r,!1);break;case"textarea":Y(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Yl(t),null;case 6:if(e&&null!=t.stateNode)zl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=qo(Qo.current),qo(Yo.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(i=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return Yl(t),null;case 13:if(_a(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),ho(),t.flags|=98560,i=!1;else if(i=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[fa]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Yl(t),i=!1}else null!==oo&&(iu(oo),oo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===zs&&(zs=3):mu())),null!==t.updateQueue&&(t.flags|=4),Yl(t),null);case 4:return Go(),Nl(e,t),null===e&&Hr(t.stateNode.containerInfo),Yl(t),null;case 10:return jo(t.type._context),Yl(t),null;case 19:if(_a(ei),null===(i=t.memoizedState))return Yl(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Bl(i,!1);else{if(0!==zs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Bl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ea(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Ge()>Hs&&(t.flags|=128,r=!0,Bl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Bl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!ao)return Yl(t),null}else 2*Ge()-i.renderingStartTime>Hs&&1073741824!==n&&(t.flags|=128,r=!0,Bl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ge(),t.sibling=null,n=ei.current,Ea(ei,r?1&n|2:1&n),t):(Yl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ns)&&(Yl(t),6&t.subtreeFlags&&(t.flags|=8192)):Yl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Ql(e,t){switch(to(t),t.tag){case 1:return Na(t.type)&&Ra(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Go(),_a(Oa),_a(ja),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Jo(t),null;case 13:if(_a(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return _a(ei),null;case 4:return Go(),null;case 10:return jo(t.type._context),null;case 22:case 23:return du(),null;default:return null}}$l=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Nl=function(){},Rl=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,qo(Yo.current);var o,i=null;switch(n){case"input":a=q(e,a),r=q(e,r),i=[];break;case"select":a=M({},a,{value:void 0}),r=M({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(c in ye(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Dr("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},zl=function(e,t,n,r){n!==r&&(t.flags|=4)};var ql=!1,Xl=!1,Gl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){ku(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){ku(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&es(t,n,o)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ma],delete t[ga],delete t[va])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Xl||Jl(n,t);case 6:var r=cs,a=ds;cs=null,fs(e,t,n),ds=a,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Ht(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!Xl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&es(n,t,i),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!Xl&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ku(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Xl=(r=Xl)||null!==n.memoizedState,fs(e,t,n),Xl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Gl),t.forEach((function(t){var r=ju.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(o(160));ps(i,l,a),cs=null,ds=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){ku(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){ku(e,e.return,g)}try{ns(5,e,e.return)}catch(g){ku(e,e.return,g)}}break;case 1:ms(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(ms(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(g){ku(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&G(a,i),be(s,l);var c=be(s,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):b(a,d,f,c)}switch(s){case"input":Z(a,i);break;case"textarea":oe(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(a,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[pa]=i}catch(g){ku(e,e.return,g)}}break;case 6:if(ms(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(g){ku(e,e.return,g)}}break;case 3:if(ms(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ht(t.containerInfo)}catch(g){ku(e,e.return,g)}break;case 4:default:ms(t,e),vs(e);break;case 13:ms(t,e),vs(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(Us=Ge())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Xl=(c=Xl)||d,ms(t,e),Xl=c):ms(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(f=Zl=d;null!==Zl;){switch(h=(p=Zl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Jl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){ku(r,n,g)}}break;case 5:Jl(p,p.return);break;case 22:if(null!==p.memoizedState){xs(f);continue}}null!==h?(h.return=p,Zl=h):xs(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){ku(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){ku(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),us(e,ls(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(o(161))}}catch(l){ku(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,n){Zl=e,bs(e,t,n)}function bs(e,t,n){for(var r=0!==(1&e.mode);null!==Zl;){var a=Zl,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||ql;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Xl;l=ql;var u=Xl;if(ql=i,(Xl=s)&&!u)for(Zl=a;null!==Zl;)s=(i=Zl).child,22===i.tag&&null!==i.memoizedState?Ss(a):null!==s?(s.return=i,Zl=s):Ss(a);for(;null!==o;)Zl=o,bs(o,t,n),o=o.sibling;Zl=a,ql=l,Xl=u}ws(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,Zl=o):ws(e)}}function ws(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Xl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Xl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Wo(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wo(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ht(f)}}}break;default:throw Error(o(163))}Xl||512&t.flags&&as(t)}catch(p){ku(t,t.return,p)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function xs(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function Ss(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){ku(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){ku(t,a,s)}}var o=t.return;try{as(t)}catch(s){ku(t,o,s)}break;case 5:var i=t.return;try{as(t)}catch(s){ku(t,i,s)}}}catch(s){ku(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var Cs,ks=Math.ceil,_s=w.ReactCurrentDispatcher,Es=w.ReactCurrentOwner,Ps=w.ReactCurrentBatchConfig,js=0,Os=null,Ts=null,$s=0,Ns=0,Rs=ka(0),zs=0,Ls=null,Fs=0,Ms=0,Is=0,Ds=null,As=null,Us=0,Hs=1/0,Vs=null,Ws=!1,Bs=null,Ys=null,Ks=!1,Qs=null,qs=0,Xs=0,Gs=null,Zs=-1,Js=0;function eu(){return 0!==(6&js)?Ge():-1!==Zs?Zs:Zs=Ge()}function tu(e){return 0===(1&e.mode)?1:0!==(2&js)&&0!==$s?$s&-$s:null!==go.transition?(0===Js&&(Js=mt()),Js):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function nu(e,t,n,r){if(50<Xs)throw Xs=0,Gs=null,Error(o(185));vt(e,n,r),0!==(2&js)&&e===Os||(e===Os&&(0===(2&js)&&(Ms|=n),4===zs&&lu(e,$s)),ru(e,r),1===n&&0===js&&0===(1&t.mode)&&(Hs=Ge()+500,Da&&Ha()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-it(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=pt(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=ft(e,e===Os?$s:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){Da=!0,Ua(e)}(su.bind(null,e)):Ua(su.bind(null,e)),ia((function(){0===(6&js)&&Ha()})),n=null;else{switch(wt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Ou(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Zs=-1,Js=0,0!==(6&js))throw Error(o(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===Os?$s:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var a=js;js|=2;var i=hu();for(Os===e&&$s===t||(Vs=null,Hs=Ge()+500,fu(e,t));;)try{yu();break}catch(s){pu(e,s)}Po(),_s.current=i,js=a,null!==Ts?t=0:(Os=null,$s=0,t=zs)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=ou(e,a))),1===t)throw n=Ls,fu(e,0),lu(e,r),ru(e,Ge()),n;if(6===t)lu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!lr(o(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gu(e,r))&&(0!==(i=ht(e))&&(r=i,t=ou(e,i))),1===t))throw n=Ls,fu(e,0),lu(e,r),ru(e,Ge()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:xu(e,As,Vs);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Us+500-Ge())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(xu.bind(null,e,As,Vs),t);break}xu(e,As,Vs);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ks(r/1960))-r)){e.timeoutHandle=ra(xu.bind(null,e,As,Vs),r);break}xu(e,As,Vs);break;default:throw Error(o(329))}}}return ru(e,Ge()),e.callbackNode===n?au.bind(null,e):null}function ou(e,t){var n=Ds;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=As,As=n,null!==t&&iu(t)),e}function iu(e){null===As?As=e:As.push.apply(As,e)}function lu(e,t){for(t&=~Is,t&=~Ms,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&js))throw Error(o(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,Ge()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Ls,fu(e,0),lu(e,t),ru(e,Ge()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xu(e,As,Vs),ru(e,Ge()),null}function uu(e,t){var n=js;js|=1;try{return e(t)}finally{0===(js=n)&&(Hs=Ge()+500,Da&&Ha())}}function cu(e){null!==Qs&&0===Qs.tag&&0===(6&js)&&Su();var t=js;js|=1;var n=Ps.transition,r=bt;try{if(Ps.transition=null,bt=1,e)return e()}finally{bt=r,Ps.transition=n,0===(6&(js=t))&&Ha()}}function du(){Ns=Rs.current,_a(Rs)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Ts)for(n=Ts.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ra();break;case 3:Go(),_a(Oa),_a(ja),ri();break;case 5:Jo(r);break;case 4:Go();break;case 13:case 19:_a(ei);break;case 10:jo(r.type._context);break;case 22:case 23:du()}n=n.return}if(Os=e,Ts=e=Ru(e.current,null),$s=Ns=t,zs=0,Ls=null,Is=Ms=Fs=0,As=Ds=null,null!==No){for(t=0;t<No.length;t++)if(null!==(r=(n=No[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}No=null}return e}function pu(e,t){for(;;){var n=Ts;try{if(Po(),ai.current=Zi,ci){for(var r=li.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}ci=!1}if(ii=0,ui=si=li=null,di=!1,fi=0,Es.current=null,null===n||null===n.return){zs=1,Ls=t,Ts=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=$s,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&ml(i,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(i,c,t),mu();break e}u=Error(o(426))}else if(ao&&1&s.mode){var v=gl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),mo(ul(u,s));break e}}i=u=ul(u,s),4!==zs&&(zs=2),null===Ds?Ds=[i]:Ds.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Ho(i,pl(0,u,t));break e;case 1:s=u;var y=i.type,b=i.stateNode;if(0===(128&i.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Ys||!Ys.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,Ho(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}wu(n)}catch(w){t=w,Ts===n&&null!==n&&(Ts=n=n.return);continue}break}}function hu(){var e=_s.current;return _s.current=Zi,null===e?Zi:e}function mu(){0!==zs&&3!==zs&&2!==zs||(zs=4),null===Os||0===(268435455&Fs)&&0===(268435455&Ms)||lu(Os,$s)}function gu(e,t){var n=js;js|=2;var r=hu();for(Os===e&&$s===t||(Vs=null,fu(e,t));;)try{vu();break}catch(a){pu(e,a)}if(Po(),js=n,_s.current=r,null!==Ts)throw Error(o(261));return Os=null,$s=0,zs}function vu(){for(;null!==Ts;)bu(Ts)}function yu(){for(;null!==Ts&&!qe();)bu(Ts)}function bu(e){var t=Cs(e.alternate,e,Ns);e.memoizedProps=e.pendingProps,null===t?wu(e):Ts=t,Es.current=null}function wu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,Ns)))return void(Ts=n)}else{if(null!==(n=Ql(n,t)))return n.flags&=32767,void(Ts=n);if(null===e)return zs=6,void(Ts=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ts=t);Ts=t=e}while(null!==t);0===zs&&(zs=5)}function xu(e,t,n){var r=bt,a=Ps.transition;try{Ps.transition=null,bt=1,function(e,t,n,r){do{Su()}while(null!==Qs);if(0!==(6&js))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-it(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===Os&&(Ts=Os=null,$s=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,Ou(tt,(function(){return Su(),null}))),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=Ps.transition,Ps.transition=null;var l=bt;bt=1;var s=js;js|=4,Es.current=null,function(e,t){if(ea=Wt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(x){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===i&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Wt=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(o(163))}}catch(x){ku(t,t.return,x)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ta),Wt=!!ea,ta=ea=null,e.current=n,ys(n,e,a),Xe(),js=s,bt=l,Ps.transition=i}else e.current=n;if(Ks&&(Ks=!1,Qs=e,qs=a),i=e.pendingLanes,0===i&&(Ys=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ws)throw Ws=!1,e=Bs,Bs=null,e;0!==(1&qs)&&0!==e.tag&&Su(),i=e.pendingLanes,0!==(1&i)?e===Gs?Xs++:(Xs=0,Gs=e):Xs=0,Ha()}(e,t,n,r)}finally{Ps.transition=a,bt=r}return null}function Su(){if(null!==Qs){var e=wt(qs),t=Ps.transition,n=bt;try{if(Ps.transition=null,bt=16>e?16:e,null===Qs)var r=!1;else{if(e=Qs,Qs=null,qs=0,0!==(6&js))throw Error(o(331));var a=js;for(js|=4,Zl=e.current;null!==Zl;){var i=Zl,l=i.child;if(0!==(16&Zl.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Zl=c;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var f=d.child;if(null!==f)f.return=d,Zl=f;else for(;null!==Zl;){var p=(d=Zl).sibling,h=d.return;if(os(d),d===c){Zl=null;break}if(null!==p){p.return=h,Zl=p;break}Zl=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Zl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(i=Zl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,Zl=y;break e}Zl=i.return}}var b=e.current;for(Zl=b;null!==Zl;){var w=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==w)w.return=l,Zl=w;else e:for(l=b;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){ku(s,s.return,S)}if(s===l){Zl=null;break e}var x=s.sibling;if(null!==x){x.return=s.return,Zl=x;break e}Zl=s.return}}if(js=a,Ha(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(S){}r=!0}return r}finally{bt=n,Ps.transition=t}}return!1}function Cu(e,t,n){e=Ao(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function ku(e,t,n){if(3===e.tag)Cu(e,e,n);else for(;null!==t;){if(3===t.tag){Cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ys||!Ys.has(r))){t=Ao(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function _u(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Os===e&&($s&n)===n&&(4===zs||3===zs&&(130023424&$s)===$s&&500>Ge()-Us?fu(e,0):Is|=n),ru(e,t)}function Eu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Lo(e,t))&&(vt(e,t,n),ru(e,n))}function Pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Eu(e,n)}function ju(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Eu(e,n)}function Ou(e,t){return Ke(e,t)}function Tu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $u(e,t,n,r){return new Tu(e,t,n,r)}function Nu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ru(e,t){var n=e.alternate;return null===n?((n=$u(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zu(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Nu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case C:return Lu(n.children,a,i,t);case k:l=8,a|=8;break;case _:return(e=$u(12,n,t,2|a)).elementType=_,e.lanes=i,e;case O:return(e=$u(13,n,t,a)).elementType=O,e.lanes=i,e;case T:return(e=$u(19,n,t,a)).elementType=T,e.lanes=i,e;case R:return Fu(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:l=10;break e;case P:l=9;break e;case j:l=11;break e;case $:l=14;break e;case N:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=$u(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Lu(e,t,n,r){return(e=$u(7,e,r,t)).lanes=n,e}function Fu(e,t,n,r){return(e=$u(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function Mu(e,t,n){return(e=$u(6,e,null,t)).lanes=n,e}function Iu(e,t,n){return(t=$u(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Du(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Au(e,t,n,r,a,o,i,l,s){return e=new Du(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=$u(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mo(o),e}function Uu(e){if(!e)return Pa;e:{if(He(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Na(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Na(n))return La(e,n,t)}return t}function Hu(e,t,n,r,a,o,i,l,s){return(e=Au(n,r,!0,e,0,o,0,l,s)).context=Uu(null),n=e.current,(o=Do(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,Ao(n,o,a),e.current.lanes=a,vt(e,a,r),ru(e,r),e}function Vu(e,t,n,r){var a=t.current,o=eu(),i=tu(a);return n=Uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Do(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ao(a,t,i))&&(nu(e,a,i,o),Uo(e,a,i)),i}function Wu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Bu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yu(e,t){Bu(e,t),(e=e.alternate)&&Bu(e,t)}Cs=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Oa.current)bl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bl=!1,function(e,t,n){switch(t.tag){case 3:Ol(t),ho();break;case 5:Zo(t);break;case 1:Na(t.type)&&Fa(t);break;case 4:Xo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ea(Co,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ea(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ml(e,t,n):(Ea(ei,1&ei.current),null!==(e=Wl(e,t,n))?e.sibling:null);Ea(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Hl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ea(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,kl(e,t,n)}return Wl(e,t,n)}(e,t,n);bl=0!==(131072&e.flags)}else bl=!1,ao&&0!==(1048576&t.flags)&&Ja(t,Ya,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vl(e,t),e=t.pendingProps;var a=$a(t,ja.current);To(t,n),a=gi(null,t,r,e,a,n);var i=vi();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Na(r)?(i=!0,Fa(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Mo(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=jl(null,t,r,!0,i,n)):(t.tag=0,ao&&i&&eo(t),wl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Nu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===j)return 11;if(e===$)return 14}return 2}(r),e=nl(r,e),a){case 0:t=El(null,t,r,e,n);break e;case 1:t=Pl(null,t,r,e,n);break e;case 11:t=xl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,El(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,Pl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(Ol(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,Io(e,t),Vo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Tl(e,t,r,n,a=ul(Error(o(423)),t));break e}if(r!==a){t=Tl(e,t,r,n,a=ul(Error(o(424)),t));break e}for(ro=ua(t.stateNode.containerInfo.firstChild),no=t,ao=!0,oo=null,n=So(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===a){t=Wl(e,t,n);break e}wl(e,t,r,n)}t=t.child}return t;case 5:return Zo(t),null===e&&uo(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==i&&na(r,i)&&(t.flags|=32),_l(e,t),wl(e,t,l,n),t.child;case 6:return null===e&&uo(t),null;case 13:return Ml(e,t,n);case 4:return Xo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=xo(t,null,r,n):wl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,xl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return wl(e,t,t.pendingProps,n),t.child;case 8:case 12:return wl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Ea(Co,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===a.children&&!Oa.current){t=Wl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Do(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),Oo(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Oo(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}wl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,To(t,n),r=r(a=$o(a)),t.flags|=1,wl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),Sl(e,t,r,a=nl(r.type,a),n);case 15:return Cl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Vl(e,t),t.tag=1,Na(r)?(e=!0,Fa(t)):e=!1,To(t,n),il(t,r,a),sl(t,r,a,n),jl(null,t,r,!0,e,n);case 19:return Hl(e,t,n);case 22:return kl(e,t,n)}throw Error(o(156,t.tag))};var Ku="function"===typeof reportError?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}function qu(e){this._internalRoot=e}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function Ju(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"===typeof a){var l=a;a=function(){var e=Wu(i);l.call(e)}}Vu(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=Wu(i);o.call(e)}}var i=Hu(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=i,e[ha]=i.current,Hr(8===e.nodeType?e.parentNode:e),cu(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Wu(s);l.call(e)}}var s=Au(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=s,e[ha]=s.current,Hr(8===e.nodeType?e.parentNode:e),cu((function(){Vu(t,s,n,r)})),s}(n,t,e,a,r);return Wu(i)}qu.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Vu(e,t,null,null)},qu.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Vu(null,e,null,null)})),t[ha]=null}},qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=kt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&Mt(e)}},xt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,Ge()),0===(6&js)&&(Hs=Ge()+500,Ha()))}break;case 13:cu((function(){var t=Lo(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Yu(e,1)}},St=function(e){if(13===e.tag){var t=Lo(e,134217728);if(null!==t)nu(t,e,134217728,eu());Yu(e,134217728)}},Ct=function(e){if(13===e.tag){var t=tu(e),n=Lo(e,t);if(null!==n)nu(n,e,t,eu());Yu(e,t)}},kt=function(){return bt},_t=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},Se=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=xa(r);if(!a)throw Error(o(90));K(r),Z(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},je=uu,Oe=cu;var ec={usingClientEntryPoint:!1,Events:[ba,wa,xa,Ee,Pe,uu]},tc={findFiberByHostInstance:ya,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Be(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xu(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Xu(e))throw Error(o(299));var n=!1,r="",a=Ku;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Au(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Hr(8===e.nodeType?e.parentNode:e),new Qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Be(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Gu(t))throw Error(o(200));return Ju(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Xu(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=Ku;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Hu(t,null,e,1,null!=n?n:null,a,0,i,l),e[ha]=t.current,Hr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new qu(t)},t.render=function(e,t,n){if(!Gu(t))throw Error(o(200));return Ju(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Gu(e))throw Error(o(40));return!!e._reactRootContainer&&(cu((function(){Ju(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Ju(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},352:(e,t,n)=>{"use strict";var r=n(119);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},119:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(345)},654:(e,t,n)=>{"use strict";var r=n(950),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},49:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var w=b.prototype=new y;w.constructor=b,m(w,v.prototype),w.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,a)&&!k.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:C.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function j(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+j(s,0):o,x(i)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),O(i,t,a,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",x(e))for(var u=0;u<e.length;u++){var c=o+j(l=e[u],u);s+=O(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=O(l=l.value,t,a,c=o+j(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],a=0;return O(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},R={transition:null},z={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:R,ReactCurrentOwner:C};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=i,t.PureComponent=b,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=C.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!k.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},950:(e,t,n)=>{"use strict";e.exports=n(49)},414:(e,t,n)=>{"use strict";e.exports=n(654)},761:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function x(e){if(g=!1,w(e),!m)if(null!==r(u))m=!0,R(S);else{var t=r(c);null!==t&&z(x,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,y(E),E=-1),h=!0;var o=p;try{for(w(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!O());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&a(u),w(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&z(x,d.startTime-n),s=!1}return s}finally{f=null,p=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var C,k=!1,_=null,E=-1,P=5,j=-1;function O(){return!(t.unstable_now()-j<P)}function T(){if(null!==_){var e=t.unstable_now();j=e;var n=!0;try{n=_(!0,e)}finally{n?C():(k=!1,_=null)}}else k=!1}if("function"===typeof b)C=function(){b(T)};else if("undefined"!==typeof MessageChannel){var $=new MessageChannel,N=$.port2;$.port1.onmessage=T,C=function(){N.postMessage(null)}}else C=function(){v(T,0)};function R(e){_=e,k||(k=!0,C())}function z(e,n){E=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,R(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(y(E),E=-1):g=!0,z(x,o-i))):(e.sortIndex=l,n(u,e),m||h||(m=!0,R(S))),e},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},340:(e,t,n)=>{"use strict";e.exports=n(761)},403:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},672:(e,t,n)=>{"use strict";var r=n(950);var a="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},o=r.useSyncExternalStore,i=r.useRef,l=r.useEffect,s=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,c){var d=i(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=s((function(){function e(e){if(!l){if(l=!0,o=e,e=r(e),void 0!==c&&f.hasValue){var t=f.value;if(c(t,e))return i=t}return i=e}if(t=i,a(o,e))return t;var n=r(e);return void 0!==c&&c(t,n)?t:(o=e,i=n)}var o,i,l=!1,s=void 0===n?null:n;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]}),[t,n,r,c]);var p=o(e,d[0],d[1]);return l((function(){f.hasValue=!0,f.value=p}),[p]),u(p),p}},256:(e,t,n)=>{"use strict";e.exports=n(672)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".4644f2ac.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="portfolio:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[a];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/portfolio/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var i=n.p+n.u(t),l=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,o,i=r[0],l=r[1],s=r[2],u=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkportfolio=self.webpackChunkportfolio||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(950),t=n.t(e,2),r=n(352);const a=e=>{e&&e instanceof Function&&n.e(206).then(n.bind(n,206)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:o,getTTFB:i}=t;n(e),r(e),a(e),o(e),i(e)}))};var o,i=n(119),l=n.t(i,2);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(o||(o={}));const u="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function d(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function f(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,n,r){return void 0===n&&(n=null),s({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?m(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function m(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g(e,t,n,r){void 0===r&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,l=a.history,d=o.Pop,m=null,g=v();function v(){return(l.state||{idx:null}).idx}function y(){d=o.Pop;let e=v(),t=null==e?null:e-g;g=e,m&&m({action:d,location:w.location,delta:t})}function b(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:h(e);return n=n.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,l.replaceState(s({},l.state,{idx:g}),""));let w={get action(){return d},get location(){return e(a,l)},listen(e){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(u,y),m=e,()=>{a.removeEventListener(u,y),m=null}},createHref:e=>t(a,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){d=o.Push;let r=p(w.location,e,t);n&&n(r,e),g=v()+1;let s=f(r,g),u=w.createHref(r);try{l.pushState(s,"",u)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;a.location.assign(u)}i&&m&&m({action:d,location:w.location,delta:1})},replace:function(e,t){d=o.Replace;let r=p(w.location,e,t);n&&n(r,e),g=v();let a=f(r,g),s=w.createHref(r);l.replaceState(a,"",s),i&&m&&m({action:d,location:w.location,delta:0})},go:e=>l.go(e)};return w}var v;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(v||(v={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function y(e,t,n){return void 0===n&&(n="/"),b(e,t,n,!1)}function b(e,t,n,r){let a=R(("string"===typeof t?m(t):t).pathname||"/",n);if(null==a)return null;let o=w(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=N(a);i=T(o[l],e,r)}return i}function w(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(c(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let l=I([r,i.relativePath]),s=n.concat(i);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),w(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:O(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of x(e.path))a(e,t,r);else a(e,t)})),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=x(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const S=/^:[\w-]+$/,C=3,k=2,_=1,E=10,P=-2,j=e=>"*"===e;function O(e,t){let n=e.split("/"),r=n.length;return n.some(j)&&(r+=P),t&&(r+=k),n.filter((e=>!j(e))).reduce(((e,t)=>e+(S.test(t)?C:""===t?_:E)),r)}function T(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=$({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=$({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),i.push({params:a,pathname:I([o,c.pathname]),pathnameBase:D(I([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=I([o,c.pathnameBase]))}return i}function $(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);d("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function N(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return d(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function z(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function L(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function F(e,t){let n=L(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function M(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=m(e):(a=s({},e),c(!a.pathname||!a.pathname.includes("?"),z("?","pathname","search",a)),c(!a.pathname||!a.pathname.includes("#"),z("#","pathname","hash",a)),c(!a.search||!a.search.includes("#"),z("#","search","hash",a)));let o,i=""===e||""===a.pathname,l=i?"/":a.pathname;if(null==l)o=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?m(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:A(r),hash:U(a)}}(a,o),d=l&&"/"!==l&&l.endsWith("/"),f=(i||"."===l)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}const I=e=>e.join("/").replace(/\/\/+/g,"/"),D=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",U=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function H(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const V=["post","put","patch","delete"],W=(new Set(V),["get",...V]);new Set(W),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}const Y=e.createContext(null);const K=e.createContext(null);const Q=e.createContext(null);const q=e.createContext(null);const X=e.createContext({outlet:null,matches:[],isDataRoute:!1});const G=e.createContext(null);function Z(){return null!=e.useContext(q)}function J(){return Z()||c(!1),e.useContext(q).location}function ee(t){e.useContext(Q).static||e.useLayoutEffect(t)}function te(){let{isDataRoute:t}=e.useContext(X);return t?function(){let{router:t}=de(ue.UseNavigateStable),n=pe(ce.UseNavigateStable),r=e.useRef(!1);return ee((()=>{r.current=!0})),e.useCallback((function(e,a){void 0===a&&(a={}),r.current&&("number"===typeof e?t.navigate(e):t.navigate(e,B({fromRouteId:n},a)))}),[t,n])}():function(){Z()||c(!1);let t=e.useContext(Y),{basename:n,future:r,navigator:a}=e.useContext(Q),{matches:o}=e.useContext(X),{pathname:i}=J(),l=JSON.stringify(F(o,r.v7_relativeSplatPath)),s=e.useRef(!1);return ee((()=>{s.current=!0})),e.useCallback((function(e,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof e)return void a.go(e);let o=M(e,JSON.parse(l),i,"path"===r.relative);null==t&&"/"!==n&&(o.pathname="/"===o.pathname?n:I([n,o.pathname])),(r.replace?a.replace:a.push)(o,r.state,r)}),[n,a,l,i,t])}()}function ne(t,n){let{relative:r}=void 0===n?{}:n,{future:a}=e.useContext(Q),{matches:o}=e.useContext(X),{pathname:i}=J(),l=JSON.stringify(F(o,a.v7_relativeSplatPath));return e.useMemo((()=>M(t,JSON.parse(l),i,"path"===r)),[t,l,i,r])}function re(t,n,r,a){Z()||c(!1);let{navigator:i}=e.useContext(Q),{matches:l}=e.useContext(X),s=l[l.length-1],u=s?s.params:{},d=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let f,p=J();if(n){var h;let e="string"===typeof n?m(n):n;"/"===d||(null==(h=e.pathname)?void 0:h.startsWith(d))||c(!1),f=e}else f=p;let g=f.pathname||"/",v=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=y(t,{pathname:v});let w=se(b&&b.map((e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:I([d,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:I([d,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,r,a);return n&&w?e.createElement(q.Provider,{value:{location:B({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:o.Pop}},w):w}function ae(){let t=function(){var t;let n=e.useContext(G),r=fe(ce.UseRouteError),a=pe(ce.UseRouteError);if(void 0!==n)return n;return null==(t=r.errors)?void 0:t[a]}(),n=H(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a};return e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:o},r):null,null)}const oe=e.createElement(ae,null);class ie extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(X.Provider,{value:this.props.routeContext},e.createElement(G.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function le(t){let{routeContext:n,match:r,children:a}=t,o=e.useContext(Y);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(X.Provider,{value:n},a)}function se(t,n,r,a){var o;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==t){var i;if(!r)return null;if(r.errors)t=r.matches;else{if(!(null!=(i=a)&&i.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;t=r.matches}}let l=t,s=null==(o=r)?void 0:o.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||c(!1),l=l.slice(0,Math.min(l.length,e+1))}let u=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let e=0;e<l.length;e++){let t=l[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(d=e),t.route.id){let{loaderData:e,errors:n}=r,a=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||a){u=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((t,a,o)=>{let i,c=!1,f=null,p=null;var h;r&&(i=s&&a.route.id?s[a.route.id]:void 0,f=a.route.errorElement||oe,u&&(d<0&&0===o?(h="route-fallback",!1||he[h]||(he[h]=!0),c=!0,p=null):d===o&&(c=!0,p=a.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,o+1)),g=()=>{let n;return n=i?f:c?p:a.route.Component?e.createElement(a.route.Component,null):a.route.element?a.route.element:t,e.createElement(le,{match:a,routeContext:{outlet:t,matches:m,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?e.createElement(ie,{location:r.location,revalidation:r.revalidation,component:f,error:i,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var ue=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ue||{}),ce=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ce||{});function de(t){let n=e.useContext(Y);return n||c(!1),n}function fe(t){let n=e.useContext(K);return n||c(!1),n}function pe(t){let n=function(){let t=e.useContext(X);return t||c(!1),t}(),r=n.matches[n.matches.length-1];return r.route.id||c(!1),r.route.id}const he={};t.startTransition;function me(e){c(!1)}function ge(t){let{basename:n="/",children:r=null,location:a,navigationType:i=o.Pop,navigator:l,static:s=!1,future:u}=t;Z()&&c(!1);let d=n.replace(/^\/*/,"/"),f=e.useMemo((()=>({basename:d,navigator:l,static:s,future:B({v7_relativeSplatPath:!1},u)})),[d,u,l,s]);"string"===typeof a&&(a=m(a));let{pathname:p="/",search:h="",hash:g="",state:v=null,key:y="default"}=a,b=e.useMemo((()=>{let e=R(p,d);return null==e?null:{location:{pathname:e,search:h,hash:g,state:v,key:y},navigationType:i}}),[d,p,h,g,v,y,i]);return null==b?null:e.createElement(Q.Provider,{value:f},e.createElement(q.Provider,{children:r,value:b}))}function ve(e){let{children:t,location:n}=e;return re(ye(t),n)}new Promise((()=>{}));e.Component;function ye(t,n){void 0===n&&(n=[]);let r=[];return e.Children.forEach(t,((t,a)=>{if(!e.isValidElement(t))return;let o=[...n,a];if(t.type===e.Fragment)return void r.push.apply(r,ye(t.props.children,o));t.type!==me&&c(!1),t.props.index&&t.props.children&&c(!1);let i={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(i.children=ye(t.props.children,o)),r.push(i)})),r}function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function we(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const xe=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(Hc){}new Map;const Se=t.startTransition;l.flushSync,t.useId;function Ce(t){let{basename:n,children:r,future:a,window:o}=t,i=e.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:o,v5Compat:!0})&&(l={}),g((function(e,t){let{pathname:n="/",search:r="",hash:a=""}=m(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),p("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:h(t))}),(function(e,t){d("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),l)));let s=i.current,[u,c]=e.useState({action:s.action,location:s.location}),{v7_startTransition:f}=a||{},v=e.useCallback((e=>{f&&Se?Se((()=>c(e))):c(e)}),[c,f]);return e.useLayoutEffect((()=>s.listen(v)),[s,v]),e.createElement(ge,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:s,future:a})}const ke="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,_e=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ee=e.forwardRef((function(t,n){let r,{onClick:a,relative:o,reloadDocument:i,replace:l,state:s,target:u,to:d,preventScrollReset:f,unstable_viewTransition:p}=t,m=we(t,xe),{basename:g}=e.useContext(Q),v=!1;if("string"===typeof d&&_e.test(d)&&(r=d,ke))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=R(t.pathname,g);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:v=!0}catch(Hc){}let y=function(t,n){let{relative:r}=void 0===n?{}:n;Z()||c(!1);let{basename:a,navigator:o}=e.useContext(Q),{hash:i,pathname:l,search:s}=ne(t,{relative:r}),u=l;return"/"!==a&&(u="/"===l?a:I([a,l])),o.createHref({pathname:u,search:s,hash:i})}(d,{relative:o}),b=function(t,n){let{target:r,replace:a,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:s}=void 0===n?{}:n,u=te(),c=J(),d=ne(t,{relative:l});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,r)){e.preventDefault();let n=void 0!==a?a:h(c)===h(d);u(t,{replace:n,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:s})}}),[c,u,d,a,o,r,t,i,l,s])}(d,{replace:l,state:s,target:u,preventScrollReset:f,relative:o,unstable_viewTransition:p});return e.createElement("a",be({},m,{href:r||y,onClick:v||i?a:function(e){a&&a(e),e.defaultPrevented||b(e)},ref:n,target:u}))}));var Pe,je;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pe||(Pe={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(je||(je={}));var Oe=function(){return Oe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Oe.apply(this,arguments)};Object.create;function Te(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var $e=n(403),Ne=n.n($e),Re="-ms-",ze="-moz-",Le="-webkit-",Fe="comm",Me="rule",Ie="decl",De="@keyframes",Ae=Math.abs,Ue=String.fromCharCode,He=Object.assign;function Ve(e){return e.trim()}function We(e,t){return(e=t.exec(e))?e[0]:e}function Be(e,t,n){return e.replace(t,n)}function Ye(e,t,n){return e.indexOf(t,n)}function Ke(e,t){return 0|e.charCodeAt(t)}function Qe(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function Xe(e){return e.length}function Ge(e,t){return t.push(e),e}function Ze(e,t){return e.filter((function(e){return!We(e,t)}))}var Je=1,et=1,tt=0,nt=0,rt=0,at="";function ot(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:Je,column:et,length:i,return:"",siblings:l}}function it(e,t){return He(ot("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function lt(e){for(;e.root;)e=it(e.root,{children:[e]});Ge(e,e.siblings)}function st(){return rt=nt>0?Ke(at,--nt):0,et--,10===rt&&(et=1,Je--),rt}function ut(){return rt=nt<tt?Ke(at,nt++):0,et++,10===rt&&(et=1,Je++),rt}function ct(){return Ke(at,nt)}function dt(){return nt}function ft(e,t){return Qe(at,e,t)}function pt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ht(e){return Je=et=1,tt=qe(at=e),nt=0,[]}function mt(e){return at="",e}function gt(e){return Ve(ft(nt-1,bt(91===e?e+2:40===e?e+1:e)))}function vt(e){for(;(rt=ct())&&rt<33;)ut();return pt(e)>2||pt(rt)>3?"":" "}function yt(e,t){for(;--t&&ut()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return ft(e,dt()+(t<6&&32==ct()&&32==ut()))}function bt(e){for(;ut();)switch(rt){case e:return nt;case 34:case 39:34!==e&&39!==e&&bt(rt);break;case 40:41===e&&bt(e);break;case 92:ut()}return nt}function wt(e,t){for(;ut()&&e+rt!==57&&(e+rt!==84||47!==ct()););return"/*"+ft(t,nt-1)+"*"+Ue(47===e?e:ut())}function xt(e){for(;!pt(ct());)ut();return ft(e,nt)}function St(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ct(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Ie:return e.return=e.return||e.value;case Fe:return"";case De:return e.return=e.value+"{"+St(e.children,r)+"}";case Me:if(!qe(e.value=e.props.join(",")))return""}return qe(n=St(e.children,r))?e.return=e.value+"{"+n+"}":""}function kt(e,t,n){switch(function(e,t){return 45^Ke(e,0)?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}(e,t)){case 5103:return Le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Le+e+e;case 4789:return ze+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Le+e+ze+e+Re+e+e;case 5936:switch(Ke(e,t+11)){case 114:return Le+e+Re+Be(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Le+e+Re+Be(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Le+e+Re+Be(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Le+e+Re+e+e;case 6165:return Le+e+Re+"flex-"+e+e;case 5187:return Le+e+Be(e,/(\w+).+(:[^]+)/,Le+"box-$1$2"+Re+"flex-$1$2")+e;case 5443:return Le+e+Re+"flex-item-"+Be(e,/flex-|-self/g,"")+(We(e,/flex-|baseline/)?"":Re+"grid-row-"+Be(e,/flex-|-self/g,""))+e;case 4675:return Le+e+Re+"flex-line-pack"+Be(e,/align-content|flex-|-self/g,"")+e;case 5548:return Le+e+Re+Be(e,"shrink","negative")+e;case 5292:return Le+e+Re+Be(e,"basis","preferred-size")+e;case 6060:return Le+"box-"+Be(e,"-grow","")+Le+e+Re+Be(e,"grow","positive")+e;case 4554:return Le+Be(e,/([^-])(transform)/g,"$1"+Le+"$2")+e;case 6187:return Be(Be(Be(e,/(zoom-|grab)/,Le+"$1"),/(image-set)/,Le+"$1"),e,"")+e;case 5495:case 3959:return Be(e,/(image-set\([^]*)/,Le+"$1$`$1");case 4968:return Be(Be(e,/(.+:)(flex-)?(.*)/,Le+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Le+e+e;case 4200:if(!We(e,/flex-|baseline/))return Re+"grid-column-align"+Qe(e,t)+e;break;case 2592:case 3360:return Re+Be(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,We(e.props,/grid-\w+-end/)}))?~Ye(e+(n=n[t].value),"span",0)?e:Re+Be(e,"-start","")+e+Re+"grid-row-span:"+(~Ye(n,"span",0)?We(n,/\d+/):+We(n,/\d+/)-+We(e,/\d+/))+";":Re+Be(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return We(e.props,/grid-\w+-start/)}))?e:Re+Be(Be(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Be(e,/(.+)-inline(.+)/,Le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(45!==Ke(e,t+4))break;case 102:return Be(e,/(.+:)(.+)-([^]+)/,"$1"+Le+"$2-$3$1"+ze+(108==Ke(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ye(e,"stretch",0)?kt(Be(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Be(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,l){return Re+n+":"+r+l+(a?Re+n+"-span:"+(o?i:+i-+r)+l:"")+e}));case 4949:if(121===Ke(e,t+6))return Be(e,":",":"+Le)+e;break;case 6444:switch(Ke(e,45===Ke(e,14)?18:11)){case 120:return Be(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Le+(45===Ke(e,14)?"inline-":"")+"box$3$1"+Le+"$2$3$1"+Re+"$2box$3")+e;case 100:return Be(e,":",":"+Re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(e,"scroll-","scroll-snap-")+e}return e}function _t(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ie:return void(e.return=kt(e.value,e.length,n));case De:return St([it(e,{value:Be(e.value,"@","@"+Le)})],r);case Me:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(We(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lt(it(e,{props:[Be(t,/:(read-\w+)/,":-moz-$1")]})),lt(it(e,{props:[t]})),He(e,{props:Ze(n,r)});break;case"::placeholder":lt(it(e,{props:[Be(t,/:(plac\w+)/,":"+Le+"input-$1")]})),lt(it(e,{props:[Be(t,/:(plac\w+)/,":-moz-$1")]})),lt(it(e,{props:[Be(t,/:(plac\w+)/,Re+"input-$1")]})),lt(it(e,{props:[t]})),He(e,{props:Ze(n,r)})}return""}))}}function Et(e){return mt(Pt("",null,null,null,[""],e=ht(e),0,[0],e))}function Pt(e,t,n,r,a,o,i,l,s){for(var u=0,c=0,d=i,f=0,p=0,h=0,m=1,g=1,v=1,y=0,b="",w=a,x=o,S=r,C=b;g;)switch(h=y,y=ut()){case 40:if(108!=h&&58==Ke(C,d-1)){-1!=Ye(C+=Be(gt(y),"&","&\f"),"&\f",Ae(u?l[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:C+=gt(y);break;case 9:case 10:case 13:case 32:C+=vt(h);break;case 92:C+=yt(dt()-1,7);continue;case 47:switch(ct()){case 42:case 47:Ge(Ot(wt(ut(),dt()),t,n,s),s);break;default:C+="/"}break;case 123*m:l[u++]=qe(C)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(C=Be(C,/\f/g,"")),p>0&&qe(C)-d&&Ge(p>32?Tt(C+";",r,n,d-1,s):Tt(Be(C," ","")+";",r,n,d-2,s),s);break;case 59:C+=";";default:if(Ge(S=jt(C,t,n,u,c,a,l,b,w=[],x=[],d,o),o),123===y)if(0===c)Pt(C,t,S,S,w,o,d,l,x);else switch(99===f&&110===Ke(C,3)?100:f){case 100:case 108:case 109:case 115:Pt(e,S,S,r&&Ge(jt(e,S,S,0,0,a,l,b,a,w=[],d,x),x),a,x,d,l,r?w:x);break;default:Pt(C,S,S,S,[""],x,0,l,x)}}u=c=p=0,m=v=1,b=C="",d=i;break;case 58:d=1+qe(C),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==st())continue;switch(C+=Ue(y),y*m){case 38:v=c>0?1:(C+="\f",-1);break;case 44:l[u++]=(qe(C)-1)*v,v=1;break;case 64:45===ct()&&(C+=gt(ut())),f=ct(),c=d=qe(b=C+=xt(dt())),y++;break;case 45:45===h&&2==qe(C)&&(m=0)}}return o}function jt(e,t,n,r,a,o,i,l,s,u,c,d){for(var f=a-1,p=0===a?o:[""],h=Xe(p),m=0,g=0,v=0;m<r;++m)for(var y=0,b=Qe(e,f+1,f=Ae(g=i[m])),w=e;y<h;++y)(w=Ve(g>0?p[y]+" "+b:Be(b,/&\f/g,p[y])))&&(s[v++]=w);return ot(e,t,n,0===a?Me:l,s,u,c,d)}function Ot(e,t,n,r){return ot(e,t,n,Fe,Ue(rt),Qe(e,2,-2),0,r)}function Tt(e,t,n,r,a){return ot(e,t,n,Ie,Qe(e,0,r),Qe(e,r+1,-1),r,a)}var $t={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Rt="active",zt="data-styled-version",Lt="6.1.13",Ft="/*!sc*/\n",Mt="undefined"!=typeof window&&"HTMLElement"in window,It=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Dt=(new Set,Object.freeze([])),At=Object.freeze({});function Ut(e,t,n){return void 0===n&&(n=At),e.theme!==n.theme&&e.theme||t||n.theme}var Ht=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Vt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wt=/(^-|-$)/g;function Bt(e){return e.replace(Vt,"-").replace(Wt,"")}var Yt=/(a)(d)/gi,Kt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Qt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Kt(t%52)+n;return(Kt(t%52)+n).replace(Yt,"$1-$2")}var qt,Xt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Gt=function(e){return Xt(5381,e)};function Zt(e){return Qt(Gt(e)>>>0)}function Jt(e){return e.displayName||e.name||"Component"}function en(e){return"string"==typeof e&&!0}var tn="function"==typeof Symbol&&Symbol.for,nn=tn?Symbol.for("react.memo"):60115,rn=tn?Symbol.for("react.forward_ref"):60112,an={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},on={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ln={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sn=((qt={})[rn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qt[nn]=ln,qt);function un(e){return("type"in(t=e)&&t.type.$$typeof)===nn?ln:"$$typeof"in e?sn[e.$$typeof]:an;var t}var cn=Object.defineProperty,dn=Object.getOwnPropertyNames,fn=Object.getOwnPropertySymbols,pn=Object.getOwnPropertyDescriptor,hn=Object.getPrototypeOf,mn=Object.prototype;function gn(e,t,n){if("string"!=typeof t){if(mn){var r=hn(t);r&&r!==mn&&gn(e,r,n)}var a=dn(t);fn&&(a=a.concat(fn(t)));for(var o=un(e),i=un(t),l=0;l<a.length;++l){var s=a[l];if(!(s in on||n&&n[s]||i&&s in i||o&&s in o)){var u=pn(t,s);try{cn(e,s,u)}catch(e){}}}}return e}function vn(e){return"function"==typeof e}function yn(e){return"object"==typeof e&&"styledComponentId"in e}function bn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function wn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function xn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sn(e,t,n){if(void 0===n&&(n=!1),!n&&!xn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Sn(e[r],t[r]);else if(xn(t))for(var r in t)e[r]=Sn(e[r],t[r]);return e}function Cn(e,t){Object.defineProperty(e,"toString",{value:t})}function kn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _n=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw kn(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(Ft);return t},e}(),En=new Map,Pn=new Map,jn=1,On=function(e){if(En.has(e))return En.get(e);for(;Pn.has(jn);)jn++;var t=jn++;return En.set(e,t),Pn.set(t,e),t},Tn=function(e,t){jn=t+1,En.set(e,t),Pn.set(t,e)},$n="style[".concat(Nt,"][").concat(zt,'="').concat(Lt,'"]'),Nn=new RegExp("^".concat(Nt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Rn=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},zn=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Ft),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(Nn);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(Tn(c,u),Rn(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},Ln=function(e){for(var t=document.querySelectorAll($n),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(Nt)!==Rt&&(zn(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Fn(){return n.nc}var Mn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Nt,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(Nt,Rt),r.setAttribute(zt,Lt);var i=Fn();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},In=function(){function e(e){this.element=Mn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw kn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Dn=function(){function e(e){this.element=Mn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),An=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Un=Mt,Hn={isServer:!Mt,useCSSOMInjection:!It},Vn=function(){function e(e,t,n){void 0===e&&(e=At),void 0===t&&(t={});var r=this;this.options=Oe(Oe({},Hn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Mt&&Un&&(Un=!1,Ln(this)),Cn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return Pn.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(Nt,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(Ft)},o=0;o<n;o++)a(o);return r}(r)}))}return e.registerId=function(e){return On(e)},e.prototype.rehydrate=function(){!this.server&&Mt&&Ln(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Oe(Oe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new An(n):t?new In(n):new Dn(n)}(this.options),new _n(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(On(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(On(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(On(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Wn=/&/g,Bn=/^\s*\/\/.*$/gm;function Yn(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Yn(e.children,t)),e}))}function Kn(e){var t,n,r,a=void 0===e?At:e,o=a.options,i=void 0===o?At:o,l=a.plugins,s=void 0===l?Dt:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===Me&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Wn,n).replace(r,u))})),i.prefix&&c.push(_t),c.push(Ct);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Bn,""),u=Et(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(u=Yn(u,i.namespace));var d,f=[];return St(u,function(e){var t=Xe(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||kn(15),Xt(e,t.name)}),5381).toString():"",d}var Qn=new Vn,qn=Kn(),Xn=e.createContext({shouldForwardProp:void 0,styleSheet:Qn,stylis:qn}),Gn=(Xn.Consumer,e.createContext(void 0));function Zn(){return(0,e.useContext)(Xn)}function Jn(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],o=Zn().styleSheet,i=(0,e.useMemo)((function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,o]),l=(0,e.useMemo)((function(){return Kn({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){Ne()(r,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var s=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:i,stylis:l}}),[t.shouldForwardProp,i,l]);return e.createElement(Xn.Provider,{value:s},e.createElement(Gn.Provider,{value:l},t.children))}var er=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=qn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Cn(this,(function(){throw kn(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=qn),this.name+e.hash},e}(),tr=function(e){return e>="A"&&e<="Z"};function nr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;tr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var rr=function(e){return null==e||!1===e||""===e},ar=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!rr(o)&&(Array.isArray(o)&&o.isCss||vn(o)?r.push("".concat(nr(a),":"),o,";"):xn(o)?r.push.apply(r,Te(Te(["".concat(a," {")],ar(o),!1),["}"],!1)):r.push("".concat(nr(a),": ").concat((t=a,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in $t||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function or(e,t,n,r){return rr(e)?[]:yn(e)?[".".concat(e.styledComponentId)]:vn(e)?!vn(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:or(e(t),t,n,r):e instanceof er?n?(e.inject(n,r),[e.getName(r)]):[e]:xn(e)?ar(e):Array.isArray(e)?Array.prototype.concat.apply(Dt,e.map((function(e){return or(e,t,n,r)}))):[e.toString()];var a}function ir(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vn(n)&&!yn(n))return!1}return!0}var lr=Gt(Lt),sr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ir(e),this.componentId=t,this.baseHash=Xt(lr,t),this.baseStyle=n,Vn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=bn(r,this.staticRulesId);else{var a=wn(or(this.rules,e,t,n)),o=Qt(Xt(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=bn(r,o),this.staticRulesId=o}else{for(var l=Xt(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=wn(or(c,e,t,n));l=Xt(l,d+u),s+=d}}if(s){var f=Qt(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=bn(r,f)}}return r},e}(),ur=e.createContext(void 0);ur.Consumer;var cr={};new Set;function dr(t,n,r){var a=yn(t),o=t,i=!en(t),l=n.attrs,s=void 0===l?Dt:l,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Bt(e);cr[n]=(cr[n]||0)+1;var r="".concat(n,"-").concat(Zt(Lt+n+cr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return en(e)?"styled.".concat(e):"Styled(".concat(Jt(e),")")}(t):d,p=n.displayName&&n.componentId?"".concat(Bt(n.displayName),"-").concat(n.componentId):n.componentId||c,h=a&&o.attrs?o.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new sr(r,p,a?o.componentStyle:void 0);function b(t,n){return function(t,n,r){var a=t.attrs,o=t.componentStyle,i=t.defaultProps,l=t.foldedComponentIds,s=t.styledComponentId,u=t.target,c=e.useContext(ur),d=Zn(),f=t.shouldForwardProp||d.shouldForwardProp,p=Ut(n,c,i)||At,h=function(e,t,n){for(var r,a=Oe(Oe({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=vn(r=e[o])?r(a):r;for(var l in i)a[l]="className"===l?bn(a[l],i[l]):"style"===l?Oe(Oe({},a[l]),i[l]):i[l]}return t.className&&(a.className=bn(a.className,t.className)),a}(a,n,p),m=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var y=function(e,t){var n=Zn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),b=bn(l,s);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[en(m)&&!Ht.has(m)?"class":"className"]=b,g.ref=r,(0,e.createElement)(m,g)}(w,t,n)}b.displayName=f;var w=e.forwardRef(b);return w.attrs=h,w.componentStyle=y,w.displayName=f,w.shouldForwardProp=m,w.foldedComponentIds=a?bn(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=p,w.target=a?o.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Sn(e,a[r],!0);return e}({},o.defaultProps,e):e}}),Cn(w,(function(){return".".concat(w.styledComponentId)})),i&&gn(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function fr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var pr=function(e){return Object.assign(e,{isCss:!0})};function hr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(vn(e)||xn(e))return pr(or(fr(Dt,Te([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?or(r):pr(or(fr(r,t)))}function mr(e,t,n){if(void 0===n&&(n=At),!t)throw kn(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,hr.apply(void 0,Te([r],a,!1)))};return r.attrs=function(r){return mr(e,t,Oe(Oe({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return mr(e,t,Oe(Oe({},n),r))},r}var gr=function(e){return mr(dr,e)},vr=gr;Ht.forEach((function(e){vr[e]=gr(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ir(e),Vn.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var a=r(wn(or(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Vn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function yr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=wn(hr.apply(void 0,Te([e],t,!1))),a=Zt(r);return new er(a,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=Fn(),r=wn([n&&'nonce="'.concat(n,'"'),"".concat(Nt,'="true"'),"".concat(zt,'="').concat(Lt,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw kn(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw kn(2);var r=t.instance.toString();if(!r)return[];var a=((n={})[Nt]="",n[zt]=Lt,n.dangerouslySetInnerHTML={__html:r},n),o=Fn();return o&&(a.nonce=o),[e.createElement("style",Oe({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Vn({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw kn(2);return e.createElement(Jn,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw kn(3)}})(),"__sc-".concat(Nt,"__");const br={base:"#264653",accent:"#2c9984",secondary:"#e0c792",neutral:"#fff9e3",background:"#f7f7f7",highlight:"#81c9c1",text:"#050505"},wr="#486b7a",xr="#315260",Sr="#23404c",Cr="#1d343d",kr={mobile:576,tabletPortrait:768,tabletLandscape:992,laptop:1200,imac:3e3},_r=[{id:0,category:"side",title:"Cookie or Death",date:"2021.08 - 2021.09",subtitle:"\ucfe0\ud0a4\ub97c \uc88b\uc544\ud558\ub294 \uc678\uacc4\uc778\uc774 \uc9c0\uad6c\uc5d0 \uc640\uc11c \uc18c\ud1b5\ud558\uae30 \uc704\ud55c \uc678\uacc4\uc5b4 \ubc88\uc5ed\uae30",description:["\ub370\uc774\ud130 \ud1b5\uc2e0 \uacfc\ubaa9\uc5d0\uc11c 1:1 \uc554\ud638\ud654\ub97c \ubc30\uc6b0\uace0 \uc601\uac10\uc744 \ubc1b\uc544 \ub9cc\ub4e0 \uc6f9\uc0ac\uc774\ud2b8","\ud504\ub808\uc784\uc6cc\ud06c \uc5c6\uc774 VanilaJS\ub85c\ub9cc \uad6c\ud604","1\u4eba \uae30\ud68d, \ub514\uc790\uc778, \uac1c\ubc1c","\ucd5c\ucd08 \uc6f9\uc0ac\uc774\ud2b8 \uac1c\ubc1c"],technologies:["VanilaJS","Parcel","Github Pages"],buttons:[{id:0,type:"link",url:"https://nwewave32.github.io/cookie_or_death/",title:"Visit Site"}],thumbnail:"cookie_or_death/cookie1.png",images:["cookie_or_death/cookie1.png","cookie_or_death/cookie2.png","cookie_or_death/cookie3.png","cookie_or_death/cookie4.png"]},{id:1,category:"side",title:"nicknamemaker",date:"2023.01 - 03 -> 2024.08 - 10",subtitle:"\uc708\ub3c4\uc6b095 \ucee8\uc149\uc758 \uc774\ub984 \uc9d3\uae30 \uc6f9\uc0ac\uc774\ud2b8",description:["\ub808\ud2b8\ub85c \uac10\uc131\uc758 \uc6f9\uc0ac\uc774\ud2b8\ub97c \uac1c\ubc1c\ud558\uc5ec \uc0c1\ud0dc \uad00\ub9ac\uc640 \ud6a8\uc728\uc801\uc778 UX\ub97c \uc81c\uacf5","Recoil\uc744 \ud65c\uc6a9\ud558\uc5ec \uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac","\uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8 \uc124\uacc4","1\u4eba \uae30\ud68d, \ub514\uc790\uc778(Figma\uacbd\ud5d8), \uac1c\ubc1c"],technologies:["React Native & TypeScript -> ReactJS","Styled-components","Recoil","Figma"],buttons:[{id:0,type:"link",url:"https://nwewave32.github.io/nicknamemaker/",title:"Visit Site"}],thumbnail:"nicknamemaker/nicknamemaker3.png",images:["nicknamemaker/nicknamemaker1.png","nicknamemaker/nicknamemaker2.png","nicknamemaker/nicknamemaker3.png","nicknamemaker/nicknamemaker4.png","nicknamemaker/nicknamemaker5.png","nicknamemaker/nicknamemaker6.png"]},{id:2,category:"side",title:"\ud544\ub77c\ud14c\uc2a4 \uc608\uc57d \ub9e4\ud06c\ub85c",date:"2023.12 - 2023.12",subtitle:"\ud544\ub77c\ud14c\uc2a4 \uc13c\ud130\uc5d0 \uc790\ub3d9\uc73c\ub85c \ube60\ub974\uac8c \uc608\uc57d\ud574\uc8fc\ub294 \ub9e4\ud06c\ub85c",description:["\ud2f0\ucf13\ud305\uc744 \ub2a5\uac00\ud558\ub294 \uc5b4\ub824\uc6c0\uc744 \ub9e4\ud06c\ub85c\ub85c \ud574\uc18c","\ud0c0\uc774\ubc0d \uc774\uc288 \uac1c\uc120\uc744 \uc704\ud55c \uc2dc\uac04 \uc870\uc808 \uae30\ub2a5","\ub9e4\ud06c\ub85c \uc2e4\ud589 \uc911 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \ub2e4\uc591\ud55c \uc608\uc678 \uc0c1\ud669\uc744 \ucc98\ub9ac\ud558\uae30 \uc704\ud55c \uc5d0\ub7ec \ud578\ub4e4\ub9c1"],technologies:["Python","selenium"],thumbnail:"pilates/pilates_thumb.png",images:["pilates/pilates1.png"]},{id:3,category:"side",title:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc6f9\uc0ac\uc774\ud2b8",date:"2024.10 - 2024.11",subtitle:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc804\uc2dc \uc0ac\uc774\ud2b8",description:["\ud3ec\ud2b8\ud3f4\ub9ac\uc624\ub97c \uc804\uc2dc\ud558\ub294 \uc6f9\uc0ac\uc774\ud2b8\ub97c \uc81c\uc791","\uc778\ud130\ub799\ud2f0\ube0c\ud55c \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uacfc \ubc18\uc751\ud615 \ub514\uc790\uc778\uc744 \uad6c\ud604","\ucd5c\uc2e0 React \uae30\uc220\uacfc styled-components\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac1c\ubc1c","\uc6e8\uc774\ube0c\uc758 \ucee8\uc149\uc744 \uc54c \uc218 \uc788\ub294 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8 \uac1c\ubc1c","1\u4eba \uae30\ud68d, \ub514\uc790\uc778(Figma \uacbd\ud5d8), \uac1c\ubc1c"],technologies:["React","Styled-components","React Router","Figma","Redux"],thumbnail:"portfolio/portfolio_main.png",images:["portfolio/portfolio_main.png","portfolio/portfolio1.png","portfolio/portfolio2.png","portfolio/portfolio3.png","portfolio/portfolio4.png"],buttons:[{id:0,type:"link",url:"https://nwewave32.github.io/portfolio/",title:"Visit Site"}]},{id:4,category:"corp",title:"ThinQ",date:"2022.01 - 2024.04",subtitle:"LG \uc804\uc790\uc758 IoT \uc81c\ud488 \uc804\uc6a9 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 ",description:["5\uac1c \uc774\uc0c1\uc758 \uc81c\ud488\uc5d0\uc11c ReactJS \ud504\ub808\uc784\uc6cc\ud06c \uc774\uc6a9\ud55c \uc2e0\uaddc \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218 \uc791\uc5c5","\ub514\uc790\uc774\ub108, \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790, PM \ub4f1 \ub2e4\uc591\ud55c \ud300\uc6d0\ub4e4\uacfc\uc758 \uc6d0\ud65c\ud55c \ud611\uc5c5","RESTful API \uc5f0\ub3d9 \ubc0f \uc0c1\ud0dc \uad00\ub9ac(Recoil) \uad6c\ud604","\ub2e8\uc704 \ud14c\uc2a4\ud2b8, \ud1b5\ud569 \ud14c\uc2a4\ud2b8 \ub4f1\uc758 \ud14c\uc2a4\ud305 \uacbd\ud5d8\uacfc \ubc84\uc804 \uad00\ub9ac \uacbd\ud5d8(CI/CD \uacbd\ud5d8)","\uc774\ubbf8\uc9c0 \ubd84\ud560 \ub85c\ub4dc\ub85c \ub2e4\uc911 \uc774\ubbf8\uc9c0 \ub85c\ub4dc\uc5d0 5\ucd08 \uc774\uc0c1 \uac78\ub9ac\ub358 \ucd08\uae30 \ub85c\ub529 \uc2dc\uac04\uc744 1\ucd08\ub85c \ub2e8\ucd95","\uc6f9 \uc811\uadfc\uc131 \ucd5c\uc801\ud654"],technologies:["ReactJS","Styled-components","Recoil","Zeplin","Mixpanel","Git"],thumbnail:"thinq/thinq_logo.png",images:["thinq/thinq_thumb.png","thinq/thinq.png","thinq/hb.png","thinq/wm.png","thinq/dw.png","thinq/sc.png"],buttons:[{id:0,type:"link",url:"https://www.lge.co.kr/lg-thinq",title:"Visit Site"},{id:1,type:"download",url:"https://play.google.com/store/apps/details?id=com.lgeha.nuts&hl=ko",title:"Download App"}]},{id:5,category:"corp",title:"\ub098\ucf54\ucc28 (\ub098\uc758 \ucf54\uce58\ub97c \ucc3e\uc544\uc918)",date:"2023.05 - 2023.09",subtitle:"\uc2a4\ud3ec\uce20 \ucf54\uce58 \ub9e4\uce6d \ud50c\ub7ab\ud3fc ",description:["\uc678\ubd80 \uac1c\ubc1c\uc790(\ubc31\uc5d4\ub4dc)\uc640 \ud611\uc5c5","GetX, Bloc, Provider\ub97c \uc774\uc6a9\ud574 \uc0c1\ud0dc \uad00\ub9ac\uc640 \ud6a8\uc728\uc801\uc778 UX\ub97c \uc81c\uacf5","RESTful API \uc5f0\ub3d9 \ubc0f \uc0c1\ud0dc \uad00\ub9ac(GetX) \uad6c\ud604","3\uba85\uc758 \uac1c\ubc1c\uc790\uc640 CI \uacbd\ud5d8"],technologies:["Dart","Flutter","GetX","Postman","Firebase"],thumbnail:"nacocha/nacocha.png",images:["nacocha/nacocha.png","nacocha/nacocha1.png","nacocha/nacocha2.png","nacocha/nacocha3.png"],buttons:[{id:0,type:"link",url:"https://nacocha.com/",title:"Visit Site"},{id:1,type:"download",url:"https://play.google.com/store/apps/details?id=com.nacocha.nacocha_v1&hl=gsw&gl=KR",title:"Download App"}]},{id:6,category:"corp",title:"Rent-Ve",date:"2023.10 - 2024.04",subtitle:"\ub80c\ud2b8\uce74 \uc5c5\uccb4 SaaS \uae30\ubc18 CMS",description:["\ub80c\ud2b8\uce74 \uc5c5\uccb4 SaaS \uae30\ubc18 CMS","1\u4eba \uae30\ud68d, \uac1c\ubc1c(\ud504\ub860\ud2b8\uc640 \ubc31 \ub3d9\uc2dc\uc5d0 \uac1c\ubc1c)","\uc9c1\uad00\uc801\uc778 UI/UX\uc640 API \uc5f0\ub3d9\uc744 \ud1b5\ud574 \uad00\ub9ac\uc790\uc758 \uc5c5\ubb34 \ud6a8\uc728\uc744 \ub192\uc784","Tailwind CSS\ub97c \ud65c\uc6a9\ud558\uc5ec \ubcc4\ub3c4\uc758 CSS \ud30c\uc77c \uc5c6\uc774 \uc2a4\ud0c0\uc77c\ub9c1"],technologies:["PHP","Laravel","Vue.js","Vuex","MySQL","TailwindCSS","Aligo","Nova","tenancy for laravel"],buttons:[{id:0,type:"link",url:"https://amuz.co.kr/service",title:"Visit Site"}],thumbnail:"rentve/rentve.png",images:["rentve/rentve.png"]}],Er=[{name:"HTML",icon:"/skills/HTML.svg"},{name:"CSS",icon:"/skills/CSS.svg"},{name:"JavaScript",icon:"/skills/JavaScript.svg"},{name:"React",icon:"/skills/react.png"},{name:"Vue",icon:"/skills/VueJS-Light.svg"},{name:"TypeScript",icon:"/skills/TypeScript.svg"},{name:"Recoil",icon:"/skills/recoil.png"},{name:"Redux",icon:"/skills/Redux.svg"},{name:"PHP",icon:"/skills/php.png"},{name:"Laravel",icon:"/skills/Laravel-Light.svg"},{name:"MySQL",icon:"/skills/MySQL-Light.svg"},{name:"Dart",icon:"/skills/Dart-Light.svg"},{name:"Flutter",icon:"/skills/Flutter-Light.svg"},{name:"Python",icon:"/skills/Python-Light.svg"},{name:"Babel",icon:"/skills/Babel.svg"},{name:"Zeplin",icon:"/skills/zeplin.png"},{name:"Figma",icon:"/skills/Figma.svg"},{name:"Framer",icon:"/skills/Framer.svg"},{name:"StyledComponents",icon:"/skills/StyledComponents.svg"},{name:"TailwindCSS",icon:"/skills/TailwindCSS-Light.svg"},{name:"Git",icon:"/skills/Git.svg"},{name:"Github",icon:"/skills/Github-Light.svg"},{name:"Firebase",icon:"/skills/Firebase-Light.svg"},{name:"LinkedIn",icon:"/skills/LinkedIn.svg"},{name:"VSCode",icon:"/skills/VSCode-Light.svg"}];var Pr=n(414);const jr=vr.img.withConfig({shouldForwardProp:e=>!["width"].includes(e)})`
  width: ${e=>{let{width:t}=e;return t}};
  ${e=>(null===e||void 0===e?void 0:e.height)||""};
`,Or=e=>{let{imgSrc:t,alt:n,width:r,isLazy:a=!0,...o}=e;return(0,Pr.jsx)(jr,{src:`/portfolio/assets/${t}`,alt:n,loading:a?"lazy":"eager",width:r,...o})},Tr=vr.div`
  display: flex;
  padding: 1vh;
  flex-wrap: wrap;
  @media (max-width: ${kr.mobile}px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
`,$r=vr.div`
  margin-bottom: 1vh;
  background-color: ${br.accent};
  max-width: fit-content;
  padding: 4px 5px;
  border-radius: 8px;
  margin-right: 1vh;
  word-break: keep-all;
  color: ${br.background};

  @media (max-width: ${kr.mobile}px) {
    white-space: nowrap;
  }
`,Nr=vr.div.attrs((e=>{})).withConfig({shouldForwardProp:e=>!["justify","direction","align"].includes(e)})`
  display: flex;
  flex-direction: ${e=>e.direction};
  justify-content: ${e=>e.justify};
  align-items: ${e=>e.align};
`,Rr=vr(Nr).attrs((e=>{let{height:t="auto"}=e;return{style:{height:`${t}`}}})).withConfig({shouldForwardProp:e=>!["windowWidth","px","py"].includes(e)})`
  width: 100%;
`,zr=vr.svg`
  width: 100%;
`,Lr=vr.text`
  font-weight: 300;
  fill: ${e=>{let{color:t}=e;return t}};
  font-size: 3vh;
  opacity: 0.7;
  @media (min-width: ${kr.imac}px) {
    font-size: 2vh;
  }
`,Fr=(vr.tspan`
  fill: ${br.accent};
  font-size: 2em;
`,vr(Or).withConfig({shouldForwardProp:e=>!["height"].includes(e)})`
  height: ${e=>{let{height:t}=e;return t}}vh;

  @media (max-width: ${kr.mobile}px) {
    height: 10vw;
  }

  @media (max-width: ${kr.tabletPortrait}px) {
    height: 10vw;
  }
`),Mr=e=>{let{word:t,height:n,isLazy:r=!0}=e;return t.split("").map(((e,t)=>(0,Pr.jsx)(Fr,{imgSrc:`main/${e}.svg`,alt:e+" logo",height:n,isLazy:r},e+t)))},Ir={getWindowType:e=>{const t=Object.keys(kr);switch(e){case t[0]:return window.innerWidth<=kr.mobile;case t[1]:return window.innerWidth<=kr.tabletPortrait;case t[2]:return window.innerWidth<=kr.tabletLandscape;case t[3]:return window.innerWidth<=kr.laptop;case t[4]:return window.innerWidth>=kr.imac;default:return!1}}},Dr=vr.div.withConfig({shouldForwardProp:e=>!["waveTop","pace"].includes(e)})`
  position: absolute;
  top: -390px;
  left: 0;

  z-index: 10;
  @media (min-width: ${kr.imac}px) {
    top: -790px;
  }
`,Ar=vr.svg`
  width: 6000px;
  height: 400px;
  filter: drop-shadow(-4px -5px -3px rgb(0 0 0 / 0.4));
  @media (min-width: ${kr.imac}px) {
    width: 12000px;
    height: 800px;
  }
`,Ur=vr.path.attrs((e=>{let{wavePace:t}=e;return{style:{transform:`translateX(-${t}px)`}}})).withConfig({shouldForwardProp:e=>!["wavePace"].includes(e)})`
  will-change: transform;
  
`,Hr=e=>{let{waveTop:t,pace:n,text1:r,text2:a}=e;const o="top",i=e=>{let n=0;n=e===o?4*t-550:4*t-window.innerWidth-550;return Ir.getWindowType("imac")&&e===o?n-800:n};return(0,Pr.jsx)(Dr,{waveTop:t,pace:n,children:(0,Pr.jsxs)(Ar,{id:"visual",viewBox:"0 0 6000 400",xmlns:"http://www.w3.org/2000/svg",version:"1.1",preserveAspectRatio:"none",children:[(0,Pr.jsx)(Ur,{id:"text-curve",d:"M0 146L52.7 157.8C105.3 169.7 210.7 193.3 316 198.3C421.3 203.3 526.7 189.7 631.8 166.3C737 143 842 110 947.2 113.2C1052.3 116.3 1157.7 155.7 1263 179.8C1368.3 204 1473.7 213 1579 196.2C1684.3 179.3 1789.7 136.7 1895 139.3C2000.3 142 2105.7 190 2210.8 210C2316 230 2421 222 2526.2 212.7C2631.3 203.3 2736.7 192.7 2842 169.2C2947.3 145.7 3052.7 109.3 3158 90.5C3263.3 71.7 3368.7 70.3 3473.8 93.7C3579 117 3684 165 3789.2 171.8C3894.3 178.7 3999.7 144.3 4105 134C4210.3 123.7 4315.7 137.3 4421 154.5C4526.3 171.7 4631.7 192.3 4737 187.2C4842.3 182 4947.7 151 5052.8 152.3C5158 153.7 5263 187.3 5368.2 202.5C5473.3 217.7 5578.7 214.3 5684 197.5C5789.3 180.7 5894.7 150.3 5947.3 135.2L6000 120L6000 401L5947.3 401C5894.7 401 5789.3 401 5684 401C5578.7 401 5473.3 401 5368.2 401C5263 401 5158 401 5052.8 401C4947.7 401 4842.3 401 4737 401C4631.7 401 4526.3 401 4421 401C4315.7 401 4210.3 401 4105 401C3999.7 401 3894.3 401 3789.2 401C3684 401 3579 401 3473.8 401C3368.7 401 3263.3 401 3158 401C3052.7 401 2947.3 401 2842 401C2736.7 401 2631.3 401 2526.2 401C2421 401 2316 401 2210.8 401C2105.7 401 2000.3 401 1895 401C1789.7 401 1684.3 401 1579 401C1473.7 401 1368.3 401 1263 401C1157.7 401 1052.3 401 947.2 401C842 401 737 401 631.8 401C526.7 401 421.3 401 316 401C210.7 401 105.3 401 52.7 401L0 401Z",fill:br.neutral,wavePace:.35*t}),(0,Pr.jsx)(Lr,{color:br.text,children:(0,Pr.jsx)("textPath",{id:"text-path",href:"#text-curve",startOffset:i(o),children:r})}),(0,Pr.jsx)(Ur,{d:"M0 155L52.7 170.2C105.3 185.3 210.7 215.7 316 224.2C421.3 232.7 526.7 219.3 631.8 204.7C737 190 842 174 947.2 173.3C1052.3 172.7 1157.7 187.3 1263 197C1368.3 206.7 1473.7 211.3 1579 196.5C1684.3 181.7 1789.7 147.3 1895 147.8C2000.3 148.3 2105.7 183.7 2210.8 190C2316 196.3 2421 173.7 2526.2 164.5C2631.3 155.3 2736.7 159.7 2842 170.3C2947.3 181 3052.7 198 3158 204.7C3263.3 211.3 3368.7 207.7 3473.8 196.8C3579 186 3684 168 3789.2 162.2C3894.3 156.3 3999.7 162.7 4105 182.5C4210.3 202.3 4315.7 235.7 4421 232.5C4526.3 229.3 4631.7 189.7 4737 175.8C4842.3 162 4947.7 174 5052.8 182C5158 190 5263 194 5368.2 188C5473.3 182 5578.7 166 5684 153.8C5789.3 141.7 5894.7 133.3 5947.3 129.2L6000 125L6000 401L5947.3 401C5894.7 401 5789.3 401 5684 401C5578.7 401 5473.3 401 5368.2 401C5263 401 5158 401 5052.8 401C4947.7 401 4842.3 401 4737 401C4631.7 401 4526.3 401 4421 401C4315.7 401 4210.3 401 4105 401C3999.7 401 3894.3 401 3789.2 401C3684 401 3579 401 3473.8 401C3368.7 401 3263.3 401 3158 401C3052.7 401 2947.3 401 2842 401C2736.7 401 2631.3 401 2526.2 401C2421 401 2316 401 2210.8 401C2105.7 401 2000.3 401 1895 401C1789.7 401 1684.3 401 1579 401C1473.7 401 1368.3 401 1263 401C1157.7 401 1052.3 401 947.2 401C842 401 737 401 631.8 401C526.7 401 421.3 401 316 401C210.7 401 105.3 401 52.7 401L0 401Z",fill:wr,wavePace:.23*t}),(0,Pr.jsx)(Ur,{d:"M0 219L43.5 219.8C87 220.7 174 222.3 261 227.8C348 233.3 435 242.7 522 247C609 251.3 696 250.7 782.8 257.5C869.7 264.3 956.3 278.7 1043.2 274.3C1130 270 1217 247 1304 233.3C1391 219.7 1478 215.3 1565 226.8C1652 238.3 1739 265.7 1826 274.3C1913 283 2000 273 2087 262.7C2174 252.3 2261 241.7 2348 233.8C2435 226 2522 221 2609 232C2696 243 2783 270 2869.8 285.5C2956.7 301 3043.3 305 3130.2 305.8C3217 306.7 3304 304.3 3391 297.5C3478 290.7 3565 279.3 3652 279.3C3739 279.3 3826 290.7 3913 292C4000 293.3 4087 284.7 4174 281.8C4261 279 4348 282 4435 282.3C4522 282.7 4609 280.3 4696 277.8C4783 275.3 4870 272.7 4956.8 263C5043.7 253.3 5130.3 236.7 5217.2 239.5C5304 242.3 5391 264.7 5478 278C5565 291.3 5652 295.7 5739 282.3C5826 269 5913 238 5956.5 222.5L6000 207L6000 401L5956.5 401C5913 401 5826 401 5739 401C5652 401 5565 401 5478 401C5391 401 5304 401 5217.2 401C5130.3 401 5043.7 401 4956.8 401C4870 401 4783 401 4696 401C4609 401 4522 401 4435 401C4348 401 4261 401 4174 401C4087 401 4000 401 3913 401C3826 401 3739 401 3652 401C3565 401 3478 401 3391 401C3304 401 3217 401 3130.2 401C3043.3 401 2956.7 401 2869.8 401C2783 401 2696 401 2609 401C2522 401 2435 401 2348 401C2261 401 2174 401 2087 401C2000 401 1913 401 1826 401C1739 401 1652 401 1565 401C1478 401 1391 401 1304 401C1217 401 1130 401 1043.2 401C956.3 401 869.7 401 782.8 401C696 401 609 401 522 401C435 401 348 401 261 401C174 401 87 401 43.5 401L0 401Z",fill:xr,wavePace:.35*t}),(0,Pr.jsx)(Ur,{d:"M0 313L43.5 312.7C87 312.3 174 311.7 261 309C348 306.3 435 301.7 522 297C609 292.3 696 287.7 782.8 285.3C869.7 283 956.3 283 1043.2 285.5C1130 288 1217 293 1304 290.7C1391 288.3 1478 278.7 1565 274.5C1652 270.3 1739 271.7 1826 271.8C1913 272 2000 271 2087 273C2174 275 2261 280 2348 286.2C2435 292.3 2522 299.7 2609 304C2696 308.3 2783 309.7 2869.8 313.5C2956.7 317.3 3043.3 323.7 3130.2 330.2C3217 336.7 3304 343.3 3391 346.2C3478 349 3565 348 3652 334.3C3739 320.7 3826 294.3 3913 285.2C4000 276 4087 284 4174 290.3C4261 296.7 4348 301.3 4435 295.7C4522 290 4609 274 4696 279.2C4783 284.3 4870 310.7 4956.8 317.7C5043.7 324.7 5130.3 312.3 5217.2 315.5C5304 318.7 5391 337.3 5478 341.2C5565 345 5652 334 5739 328.8C5826 323.7 5913 324.3 5956.5 324.7L6000 325L6000 401L5956.5 401C5913 401 5826 401 5739 401C5652 401 5565 401 5478 401C5391 401 5304 401 5217.2 401C5130.3 401 5043.7 401 4956.8 401C4870 401 4783 401 4696 401C4609 401 4522 401 4435 401C4348 401 4261 401 4174 401C4087 401 4000 401 3913 401C3826 401 3739 401 3652 401C3565 401 3478 401 3391 401C3304 401 3217 401 3130.2 401C3043.3 401 2956.7 401 2869.8 401C2783 401 2696 401 2609 401C2522 401 2435 401 2348 401C2261 401 2174 401 2087 401C2000 401 1913 401 1826 401C1739 401 1652 401 1565 401C1478 401 1391 401 1304 401C1217 401 1130 401 1043.2 401C956.3 401 869.7 401 782.8 401C696 401 609 401 522 401C435 401 348 401 261 401C174 401 87 401 43.5 401L0 401Z",fill:Sr,wavePace:.4*t}),(0,Pr.jsx)(Ur,{id:"text-curve2",d:"M0 326L43.5 324.5C87 323 174 320 261 329.8C348 339.7 435 362.3 522 362C609 361.7 696 338.3 782.8 331.7C869.7 325 956.3 335 1043.2 345.5C1130 356 1217 367 1304 360.5C1391 354 1478 330 1565 332.2C1652 334.3 1739 362.7 1826 375.5C1913 388.3 2000 385.7 2087 377.5C2174 369.3 2261 355.7 2348 349C2435 342.3 2522 342.7 2609 345.5C2696 348.3 2783 353.7 2869.8 359.3C2956.7 365 3043.3 371 3130.2 362C3217 353 3304 329 3391 322.8C3478 316.7 3565 328.3 3652 337.5C3739 346.7 3826 353.3 3913 361.8C4000 370.3 4087 380.7 4174 385.5C4261 390.3 4348 389.7 4435 386.3C4522 383 4609 377 4696 373.5C4783 370 4870 369 4956.8 371C5043.7 373 5130.3 378 5217.2 371.2C5304 364.3 5391 345.7 5478 338.2C5565 330.7 5652 334.3 5739 337C5826 339.7 5913 341.3 5956.5 342.2L6000 343L6000 401L5956.5 401C5913 401 5826 401 5739 401C5652 401 5565 401 5478 401C5391 401 5304 401 5217.2 401C5130.3 401 5043.7 401 4956.8 401C4870 401 4783 401 4696 401C4609 401 4522 401 4435 401C4348 401 4261 401 4174 401C4087 401 4000 401 3913 401C3826 401 3739 401 3652 401C3565 401 3478 401 3391 401C3304 401 3217 401 3130.2 401C3043.3 401 2956.7 401 2869.8 401C2783 401 2696 401 2609 401C2522 401 2435 401 2348 401C2261 401 2174 401 2087 401C2000 401 1913 401 1826 401C1739 401 1652 401 1565 401C1478 401 1391 401 1304 401C1217 401 1130 401 1043.2 401C956.3 401 869.7 401 782.8 401C696 401 609 401 522 401C435 401 348 401 261 401C174 401 87 401 43.5 401L0 401Z",fill:Cr,wavePace:.3*t}),(0,Pr.jsx)(Lr,{fontSize:20,color:br.background,children:(0,Pr.jsx)("textPath",{id:"text-path",href:"#text-curve2",startOffset:i("bottom"),children:a})})]})})},Vr=vr(Nr).withConfig({shouldForwardProp:e=>!["isVisible","left"].includes(e)})`
  width: max-content;
  padding: 30px;
  border-radius: 50%;

  position: absolute;
  left: ${e=>{let{left:t}=e;return t}}%;
  z-index: 10;
  opacity: 0;

  ${e=>{let{isVisible:t,top:n,time:r}=e;return t&&hr`
      animation: ${(e=>yr`
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: calc(100% - 20vh - ${e}%);
    opacity: 1;
  }
`)(n)} 3s ease-in forwards,
        ${(e=>yr`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-${10+e}px);
  }
  100% {
    transform: translateY(0);
  }
`)(r)} ${r}s ease-in-out infinite 3s;
    `}}
`,Wr=yr`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.5;
    transform: translateY(10px);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
`,Br=vr.div`
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translate(-50%, -10%);
  display: flex;
  flex-direction: column;
  align-items: center;
`,Yr=vr.div`
  opacity: 1;
  animation: ${Wr} 1.5s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
`,Kr=vr(Or)`
  transform: rotate(90deg);
  width: 3vh;
  filter: invert(60%);
  margin-top: -5px;
`,Qr=vr(Or)`
  position: absolute;
  bottom: 0;
  right: 0;
`,qr=e=>{let{isTargetShown:t}=e;const n=Ir.getWindowType("tabletPortrait");return(0,Pr.jsxs)(Pr.Fragment,{children:[t&&(0,Pr.jsxs)(Pr.Fragment,{children:[(0,Pr.jsx)(Vr,{isVisible:t,top:n?12:15,left:n?2:8,time:4,children:(0,Pr.jsx)(Fr,{imgSrc:"main/&.svg",alt:"logo",height:15})}),(0,Pr.jsx)(Vr,{isVisible:t,top:n?28:20,left:n?14:20,time:3,children:(0,Pr.jsx)(Mr,{word:"we",height:15})}),(0,Pr.jsx)(Vr,{isVisible:t,top:n?20:17,left:n?38:50,time:2.5,children:(0,Pr.jsx)(Mr,{word:"wave",height:15})})]}),(0,Pr.jsx)(Br,{children:Array.from({length:3},((e,t)=>(0,Pr.jsx)(Yr,{children:(0,Pr.jsx)(Kr,{imgSrc:"next.png",alt:"keep_scroll"})},t)))}),(0,Pr.jsx)(Qr,{imgSrc:"main/bottom.svg",alt:"bottom_",width:"100%"})]})};var Xr=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(Hc){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}(),Gr=Math.abs,Zr=String.fromCharCode,Jr=Object.assign;function ea(e){return e.trim()}function ta(e,t,n){return e.replace(t,n)}function na(e,t){return e.indexOf(t)}function ra(e,t){return 0|e.charCodeAt(t)}function aa(e,t,n){return e.slice(t,n)}function oa(e){return e.length}function ia(e){return e.length}function la(e,t){return t.push(e),e}var sa=1,ua=1,ca=0,da=0,fa=0,pa="";function ha(e,t,n,r,a,o,i){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:sa,column:ua,length:i,return:""}}function ma(e,t){return Jr(ha("",null,null,"",null,null,0),e,{length:-e.length},t)}function ga(){return fa=da<ca?ra(pa,da++):0,ua++,10===fa&&(ua=1,sa++),fa}function va(){return ra(pa,da)}function ya(){return da}function ba(e,t){return aa(pa,e,t)}function wa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xa(e){return sa=ua=1,ca=oa(pa=e),da=0,[]}function Sa(e){return pa="",e}function Ca(e){return ea(ba(da-1,Ea(91===e?e+2:40===e?e+1:e)))}function ka(e){for(;(fa=va())&&fa<33;)ga();return wa(e)>2||wa(fa)>3?"":" "}function _a(e,t){for(;--t&&ga()&&!(fa<48||fa>102||fa>57&&fa<65||fa>70&&fa<97););return ba(e,ya()+(t<6&&32==va()&&32==ga()))}function Ea(e){for(;ga();)switch(fa){case e:return da;case 34:case 39:34!==e&&39!==e&&Ea(fa);break;case 40:41===e&&Ea(e);break;case 92:ga()}return da}function Pa(e,t){for(;ga()&&e+fa!==57&&(e+fa!==84||47!==va()););return"/*"+ba(t,da-1)+"*"+Zr(47===e?e:ga())}function ja(e){for(;!wa(va());)ga();return ba(e,da)}var Oa="-ms-",Ta="-moz-",$a="-webkit-",Na="comm",Ra="rule",za="decl",La="@keyframes";function Fa(e,t){for(var n="",r=ia(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function Ma(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case za:return e.return=e.return||e.value;case Na:return"";case La:return e.return=e.value+"{"+Fa(e.children,r)+"}";case Ra:e.value=e.props.join(",")}return oa(n=Fa(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ia(e){return Sa(Da("",null,null,null,[""],e=xa(e),0,[0],e))}function Da(e,t,n,r,a,o,i,l,s){for(var u=0,c=0,d=i,f=0,p=0,h=0,m=1,g=1,v=1,y=0,b="",w=a,x=o,S=r,C=b;g;)switch(h=y,y=ga()){case 40:if(108!=h&&58==ra(C,d-1)){-1!=na(C+=ta(Ca(y),"&","&\f"),"&\f")&&(v=-1);break}case 34:case 39:case 91:C+=Ca(y);break;case 9:case 10:case 13:case 32:C+=ka(h);break;case 92:C+=_a(ya()-1,7);continue;case 47:switch(va()){case 42:case 47:la(Ua(Pa(ga(),ya()),t,n),s);break;default:C+="/"}break;case 123*m:l[u++]=oa(C)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(C=ta(C,/\f/g,"")),p>0&&oa(C)-d&&la(p>32?Ha(C+";",r,n,d-1):Ha(ta(C," ","")+";",r,n,d-2),s);break;case 59:C+=";";default:if(la(S=Aa(C,t,n,u,c,a,l,b,w=[],x=[],d),o),123===y)if(0===c)Da(C,t,S,S,w,o,d,l,x);else switch(99===f&&110===ra(C,3)?100:f){case 100:case 108:case 109:case 115:Da(e,S,S,r&&la(Aa(e,S,S,0,0,a,l,b,a,w=[],d),x),a,x,d,l,r?w:x);break;default:Da(C,S,S,S,[""],x,0,l,x)}}u=c=p=0,m=v=1,b=C="",d=i;break;case 58:d=1+oa(C),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==(fa=da>0?ra(pa,--da):0,ua--,10===fa&&(ua=1,sa--),fa))continue;switch(C+=Zr(y),y*m){case 38:v=c>0?1:(C+="\f",-1);break;case 44:l[u++]=(oa(C)-1)*v,v=1;break;case 64:45===va()&&(C+=Ca(ga())),f=va(),c=d=oa(b=C+=ja(ya())),y++;break;case 45:45===h&&2==oa(C)&&(m=0)}}return o}function Aa(e,t,n,r,a,o,i,l,s,u,c){for(var d=a-1,f=0===a?o:[""],p=ia(f),h=0,m=0,g=0;h<r;++h)for(var v=0,y=aa(e,d+1,d=Gr(m=i[h])),b=e;v<p;++v)(b=ea(m>0?f[v]+" "+y:ta(y,/&\f/g,f[v])))&&(s[g++]=b);return ha(e,t,n,0===a?Ra:l,s,u,c)}function Ua(e,t,n){return ha(e,t,n,Na,Zr(fa),aa(e,2,-2),0)}function Ha(e,t,n,r){return ha(e,t,n,za,aa(e,0,r),aa(e,r+1,-1),r)}var Va=function(e,t,n){for(var r=0,a=0;r=a,a=va(),38===r&&12===a&&(t[n]=1),!wa(a);)ga();return ba(e,da)},Wa=function(e,t){return Sa(function(e,t){var n=-1,r=44;do{switch(wa(r)){case 0:38===r&&12===va()&&(t[n]=1),e[n]+=Va(da-1,t,n);break;case 2:e[n]+=Ca(r);break;case 4:if(44===r){e[++n]=58===va()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=Zr(r)}}while(r=ga());return e}(xa(e),t))},Ba=new WeakMap,Ya=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Ba.get(n))&&!r){Ba.set(e,!0);for(var a=[],o=Wa(t,a),i=n.props,l=0,s=0;l<o.length;l++)for(var u=0;u<i.length;u++,s++)e.props[s]=a[l]?o[l].replace(/&\f/g,i[u]):i[u]+" "+o[l]}}},Ka=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function Qa(e,t){switch(function(e,t){return 45^ra(e,0)?(((t<<2^ra(e,0))<<2^ra(e,1))<<2^ra(e,2))<<2^ra(e,3):0}(e,t)){case 5103:return $a+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $a+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $a+e+Ta+e+Oa+e+e;case 6828:case 4268:return $a+e+Oa+e+e;case 6165:return $a+e+Oa+"flex-"+e+e;case 5187:return $a+e+ta(e,/(\w+).+(:[^]+)/,$a+"box-$1$2"+Oa+"flex-$1$2")+e;case 5443:return $a+e+Oa+"flex-item-"+ta(e,/flex-|-self/,"")+e;case 4675:return $a+e+Oa+"flex-line-pack"+ta(e,/align-content|flex-|-self/,"")+e;case 5548:return $a+e+Oa+ta(e,"shrink","negative")+e;case 5292:return $a+e+Oa+ta(e,"basis","preferred-size")+e;case 6060:return $a+"box-"+ta(e,"-grow","")+$a+e+Oa+ta(e,"grow","positive")+e;case 4554:return $a+ta(e,/([^-])(transform)/g,"$1"+$a+"$2")+e;case 6187:return ta(ta(ta(e,/(zoom-|grab)/,$a+"$1"),/(image-set)/,$a+"$1"),e,"")+e;case 5495:case 3959:return ta(e,/(image-set\([^]*)/,$a+"$1$`$1");case 4968:return ta(ta(e,/(.+:)(flex-)?(.*)/,$a+"box-pack:$3"+Oa+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$a+e+e;case 4095:case 3583:case 4068:case 2532:return ta(e,/(.+)-inline(.+)/,$a+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(oa(e)-1-t>6)switch(ra(e,t+1)){case 109:if(45!==ra(e,t+4))break;case 102:return ta(e,/(.+:)(.+)-([^]+)/,"$1"+$a+"$2-$3$1"+Ta+(108==ra(e,t+3)?"$3":"$2-$3"))+e;case 115:return~na(e,"stretch")?Qa(ta(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==ra(e,t+1))break;case 6444:switch(ra(e,oa(e)-3-(~na(e,"!important")&&10))){case 107:return ta(e,":",":"+$a)+e;case 101:return ta(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$a+(45===ra(e,14)?"inline-":"")+"box$3$1"+$a+"$2$3$1"+Oa+"$2box$3")+e}break;case 5936:switch(ra(e,t+11)){case 114:return $a+e+Oa+ta(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $a+e+Oa+ta(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $a+e+Oa+ta(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $a+e+Oa+e+e}return e}var qa=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case za:e.return=Qa(e.value,e.length);break;case La:return Fa([ma(e,{value:ta(e.value,"@","@"+$a)})],r);case Ra:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Fa([ma(e,{props:[ta(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return Fa([ma(e,{props:[ta(t,/:(plac\w+)/,":"+$a+"input-$1")]}),ma(e,{props:[ta(t,/:(plac\w+)/,":-moz-$1")]}),ma(e,{props:[ta(t,/:(plac\w+)/,Oa+"input-$1")]})],r)}return""}))}}],Xa=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,a,o=e.stylisPlugins||qa,i={},l=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)i[t[n]]=!0;l.push(e)}));var s,u,c=[Ma,(u=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],d=function(e){var t=ia(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}([Ya,Ka].concat(o,c));a=function(e,t,n,r){s=n,Fa(Ia(e?e+"{"+t.styles+"}":t.styles),d),r&&(f.inserted[t.name]=!0)};var f={key:t,sheet:new Xr({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:a};return f.sheet.hydrate(l),f};function Ga(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):n&&(r+=n+" ")})),r}var Za=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},Ja=function(e,t,n){Za(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}};var eo={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function to(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var no=/[A-Z]|^ms/g,ro=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ao=function(e){return 45===e.charCodeAt(1)},oo=function(e){return null!=e&&"boolean"!==typeof e},io=to((function(e){return ao(e)?e:e.replace(no,"-$&").toLowerCase()})),lo=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(ro,(function(e,t,n){return uo={name:t,styles:n,next:uo},t}))}return 1===eo[e]||ao(e)||"number"!==typeof t||0===t?t:t+"px"};function so(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var a=n;if(1===a.anim)return uo={name:a.name,styles:a.styles,next:uo},a.name;var o=n;if(void 0!==o.styles){var i=o.next;if(void 0!==i)for(;void 0!==i;)uo={name:i.name,styles:i.styles,next:uo},i=i.next;return o.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=so(e,t,n[a])+";";else for(var o in n){var i=n[o];if("object"!==typeof i){var l=i;null!=t&&void 0!==t[l]?r+=o+"{"+t[l]+"}":oo(l)&&(r+=io(o)+":"+lo(o,l)+";")}else if(!Array.isArray(i)||"string"!==typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=so(e,t,i);switch(o){case"animation":case"animationName":r+=io(o)+":"+s+";";break;default:r+=o+"{"+s+"}"}}else for(var u=0;u<i.length;u++)oo(i[u])&&(r+=io(o)+":"+lo(o,i[u])+";")}return r}(e,t,n);case"function":if(void 0!==e){var l=uo,s=n(e);return uo=l,so(e,t,s)}}var u=n;if(null==t)return u;var c=t[u];return void 0!==c?c:u}var uo,co=/label:\s*([^\s;{]+)\s*(;|$)/g;function fo(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";uo=void 0;var o=e[0];null==o||void 0===o.raw?(r=!1,a+=so(n,t,o)):a+=o[0];for(var i=1;i<e.length;i++){if(a+=so(n,t,e[i]),r)a+=o[i]}co.lastIndex=0;for(var l,s="";null!==(l=co.exec(a));)s+="-"+l[1];var u=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(a)+s;return{name:u,styles:a,next:uo}}var po=!!t.useInsertionEffect&&t.useInsertionEffect,ho=po||function(e){return e()},mo=(po||e.useLayoutEffect,e.createContext("undefined"!==typeof HTMLElement?Xa({key:"css"}):null)),go=(mo.Provider,function(t){return(0,e.forwardRef)((function(n,r){var a=(0,e.useContext)(mo);return t(n,a,r)}))}),vo=e.createContext({});var yo={}.hasOwnProperty,bo="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",wo=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Za(t,n,r),ho((function(){return Ja(t,n,r)})),null},xo=go((function(t,n,r){var a=t.css;"string"===typeof a&&void 0!==n.registered[a]&&(a=n.registered[a]);var o=t[bo],i=[a],l="";"string"===typeof t.className?l=Ga(n.registered,i,t.className):null!=t.className&&(l=t.className+" ");var s=fo(i,void 0,e.useContext(vo));l+=n.key+"-"+s.name;var u={};for(var c in t)yo.call(t,c)&&"css"!==c&&c!==bo&&(u[c]=t[c]);return u.className=l,r&&(u.ref=r),e.createElement(e.Fragment,null,e.createElement(wo,{cache:n,serialized:s,isStringTag:"string"===typeof o}),e.createElement(o,u))})),So=(n(876),Pr.Fragment);function Co(e,t,n){return yo.call(t,"css")?Pr.jsx(xo,function(e,t){var n={};for(var r in t)yo.call(t,r)&&(n[r]=t[r]);return n[bo]=e,n}(e,t),n):Pr.jsx(e,t,n)}function ko(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return fo(t)}var _o=function(){var e=ko.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Eo=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var o=t[r];if(null!=o){var i=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))i=e(o);else for(var l in i="",o)o[l]&&l&&(i&&(i+=" "),i+=l);break;default:i=o}i&&(a&&(a+=" "),a+=i)}}return a};var Po=function(e){var t=e.cache,n=e.serializedArr;return ho((function(){for(var e=0;e<n.length;e++)Ja(t,n[e],!1)})),null},jo=go((function(t,n){var r=[],a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var o=fo(t,n.registered);return r.push(o),Za(n,o,!1),n.key+"-"+o.name},o={css:a,cx:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e,t,n){var r=[],a=Ga(e,r,n);return r.length<2?n:a+t(r)}(n.registered,a,Eo(t))},theme:e.useContext(vo)},i=t.children(o);return e.createElement(e.Fragment,null,e.createElement(Po,{cache:n,serializedArr:r}),i)})),Oo=Object.defineProperty,To=(e,t,n)=>((e,t,n)=>t in e?Oo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),$o=new Map,No=new WeakMap,Ro=0,zo=void 0;function Lo(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(No.has(e)||(Ro+=1,No.set(e,Ro.toString())),No.get(e)):"0"}(e.root):e[t]}`)).toString()}function Fo(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:zo;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:o,elements:i}=function(e){const t=Lo(e);let n=$o.get(t);if(!n){const r=new Map;let a;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&a.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);a=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},$o.set(t,n)}return n}(n),l=i.get(e)||[];return i.has(e)||i.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(i.delete(e),o.unobserve(e)),0===i.size&&(o.disconnect(),$o.delete(a))}}var Mo=class extends e.Component{constructor(e){super(e),To(this,"node",null),To(this,"_unobserveCb",null),To(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),To(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:o}=this.props;this._unobserveCb=Fo(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if("function"===typeof t){const{inView:e,entry:n}=this.state;return t({inView:e,entry:n,ref:this.handleNode})}const{as:n,triggerOnce:r,threshold:a,root:o,rootMargin:i,onChange:l,skip:s,trackVisibility:u,delay:c,initialInView:d,fallbackInView:f,...p}=this.props;return e.createElement(n||"div",{ref:this.handleNode,...p},t)}};function Io(){let{threshold:t,delay:n,trackVisibility:r,rootMargin:a,root:o,triggerOnce:i,skip:l,initialInView:s,fallbackInView:u,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var d;const[f,p]=e.useState(null),h=e.useRef(),[m,g]=e.useState({inView:!!s,entry:void 0});h.current=c,e.useEffect((()=>{if(l||!f)return;let e;return e=Fo(f,((t,n)=>{g({inView:t,entry:n}),h.current&&h.current(t,n),n.isIntersecting&&i&&e&&(e(),e=void 0)}),{root:o,rootMargin:a,threshold:t,trackVisibility:r,delay:n},u),()=>{e&&e()}}),[Array.isArray(t)?t.toString():t,f,o,a,i,l,r,u,n]);const v=null==(d=m.entry)?void 0:d.target,y=e.useRef();f||!v||i||l||y.current===v||(y.current=v,g({inView:!!s,entry:void 0}));const b=[p,m.inView,m.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var Do=n(116);_o`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,_o`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,_o`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,_o`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,_o`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,_o`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,_o`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,_o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,_o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,_o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,_o`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,_o`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,_o`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Ao=_o`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Uo=_o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ho=_o`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vo=_o`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wo=_o`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bo=_o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Yo=_o`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ko=_o`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qo=_o`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qo=_o`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xo=_o`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Go=_o`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Zo=_o`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Jo(e,t){return n=>n?e():t()}function ei(e){return Jo(e,(()=>null))}function ti(e){return ei((()=>({opacity:0})))(e)}const ni=t=>{const{cascade:n=!1,damping:r=.5,delay:a=0,duration:o=1e3,fraction:i=0,keyframes:l=Bo,triggerOnce:s=!1,className:u,style:c,childClassName:d,childStyle:f,children:p,onVisibilityChange:h}=t,m=(0,e.useMemo)((()=>function(e){let{duration:t=1e3,delay:n=0,timingFunction:r="ease",keyframes:a=Bo,iterationCount:o=1}=e;return ko`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${n}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:l,duration:o})),[o,l]);return void 0==p?null:"string"===typeof(g=p)||"number"===typeof g||"boolean"===typeof g?Co(ai,{...t,animationStyles:m,children:String(p)}):(0,Do.isFragment)(p)?Co(oi,{...t,animationStyles:m}):Co(So,{children:e.Children.map(p,((l,p)=>{if(!(0,e.isValidElement)(l))return null;const g=a+(n?p*o*r:0);switch(l.type){case"ol":case"ul":return Co(jo,{children:e=>{let{cx:n}=e;return Co(l.type,{...l.props,className:n(u,l.props.className),style:Object.assign({},c,l.props.style),children:Co(ni,{...t,children:l.props.children})})}});case"li":return Co(Mo,{threshold:i,triggerOnce:s,onChange:h,children:e=>{let{inView:t,ref:n}=e;return Co(jo,{children:e=>{let{cx:r}=e;return Co(l.type,{...l.props,ref:n,className:r(d,l.props.className),css:ei((()=>m))(t),style:Object.assign({},f,l.props.style,ti(!t),{animationDelay:g+"ms"})})}})}});default:return Co(Mo,{threshold:i,triggerOnce:s,onChange:h,children:e=>{let{inView:t,ref:n}=e;return Co("div",{ref:n,className:u,css:ei((()=>m))(t),style:Object.assign({},c,ti(!t),{animationDelay:g+"ms"}),children:Co(jo,{children:e=>{let{cx:t}=e;return Co(l.type,{...l.props,className:t(d,l.props.className),style:Object.assign({},f,l.props.style)})}})})}})}}))});var g},ri={display:"inline-block",whiteSpace:"pre"},ai=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:o=1e3,fraction:i=0,triggerOnce:l=!1,className:s,style:u,children:c,onVisibilityChange:d}=e,{ref:f,inView:p}=Io({triggerOnce:l,threshold:i,onChange:d});return Jo((()=>Co("div",{ref:f,className:s,style:Object.assign({},u,ri),children:c.split("").map(((e,n)=>Co("span",{css:ei((()=>t))(p),style:{animationDelay:a+n*o*r+"ms"},children:e},n)))})),(()=>Co(oi,{...e,children:c})))(n)},oi=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:o,children:i,onVisibilityChange:l}=e,{ref:s,inView:u}=Io({triggerOnce:r,threshold:n,onChange:l});return Co("div",{ref:s,className:a,css:ei((()=>t))(u),style:Object.assign({},o,ti(!u)),children:i})};_o`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,_o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_o`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,_o`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,_o`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,_o`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,_o`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const ii=_o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,li=_o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,si=_o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,ui=_o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,ci=_o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,di=_o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,fi=_o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,pi=_o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,hi=_o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,mi=_o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,gi=_o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,vi=_o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,yi=_o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const bi=t=>{const{big:n=!1,direction:r,reverse:a=!1,...o}=t,i=(0,e.useMemo)((()=>function(e,t,n){switch(n){case"bottom-left":return t?li:Uo;case"bottom-right":return t?si:Ho;case"down":return e?t?ci:Wo:t?ui:Vo;case"left":return e?t?fi:Yo:t?di:Bo;case"right":return e?t?hi:Qo:t?pi:Ko;case"top-left":return t?mi:qo;case"top-right":return t?gi:Xo;case"up":return e?t?yi:Zo:t?vi:Go;default:return t?ii:Ao}}(n,a,r)),[n,r,a]);return Co(ni,{keyframes:i,...o})};_o`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,_o`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,_o`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,_o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,_o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;_o`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,_o`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,_o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;_o`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,_o`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,_o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,_o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,_o`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,_o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,_o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,_o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,_o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,_o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;_o`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_o`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_o`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_o`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,_o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,_o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,_o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const wi=_o`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,xi=_o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Si=_o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ci=_o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ki=_o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,_i=_o`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Ei=_o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Pi=_o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,ji=_o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Oi=_o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const Ti=t=>{const{direction:n,reverse:r=!1,...a}=t,o=(0,e.useMemo)((()=>function(e,t){switch(t){case"down":return e?Ei:xi;case"left":return e?Pi:Si;case"right":return e?ji:Ci;case"up":return e?Oi:ki;default:return e?_i:wi}}(r,n)),[n,r]);return Co(ni,{keyframes:o,...a})},$i=vr.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Cr};
  overflow: hidden;
`,Ni=vr(Nr)`
  color: ${br.background};
  box-sizing: border-box;
  padding: 0 25%;

  position: absolute;
  top: 2%;
  left: 0;
  font-size: 3vh;
  z-index: 2;
  text-align: center;

  width: 100%;
  height: 100%;
  font-weight: 300;
  line-height: 1.8;
  @media (max-width: ${kr.mobile}px) {
    padding: 0 10%;
  }

  @media (max-width: ${kr.tabletPortrait}px) {
    color: ${br.text};
    font-weight: 100;
    font-size: 1.8vh;
  }
`,Ri=vr(Ni)`
  color: ${br.text};
  clip-path: url(#myClipPath);

  width: 100%;
  height: 100%;
  > div {
    font-size: 3vh;
  }
`,zi=vr(zr)`
  position: absolute;
  top: 2%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    ${Cr} 51%,
    ${br.secondary} 51%
  );
`,Li=()=>{const e=Ir.getWindowType("tabletPortrait"),t="\uc800\ub294 \uc0c8\ub85c\uc6b4 \uacbd\ud5d8\uc744 \ucc3d\uc870\ud558\ub294 \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4. \ucc3d\uc758\uc801\uc778 \uc544\uc774\ub514\uc5b4\uc640 \uae30\uc220\uc744 \uacb0\ud569\ud574, \uc0ac\uc6a9\uc790\uc640 \uc9c1\uad00\uc801\uc73c\ub85c \uc18c\ud1b5\ud558\ub294 \ud654\uba74\uc744 \ub9cc\ub4e4\uc5b4\ub0b4\ub294 \ub370 \uc5f4\uc815\uc744 \uc3df\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc740 \ub2e8\uc21c\ud55c \ucf54\ub529\uc744 \ub118\uc5b4 \uc608\uc220\ucc98\ub7fc \ub290\uaef4\uc9c0\ub294 \uacfc\uc815\uc73c\ub85c, \ub9ac\uc561\ud2b8\ub97c \uae30\ubc18\uc73c\ub85c \uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc774\uace0 \uba85\ud655\ud55c \uba54\uc2dc\uc9c0\ub97c \uc804\ub2ec\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc124\uacc4\ud569\ub2c8\ub2e4. \uc81c \ud3ec\ud2b8\ud3f4\ub9ac\uc624\uc758 \uc8fc\uc81c\uc778 'wave'\ub294 \ubb3c\uc758 \uc720\ub3d9\uc131\uacfc \uc720\uc5f0\ud568\uc744 \ub2f4\uc544 \uc790\uc5f0\uc758 \uc6d0\ub9ac\ub97c \uce5c\uadfc\ud558\uace0 \ud3b8\uc548\ud558\uac8c \ub290\ub084 \uc218 \uc788\ub3c4\ub85d \uad6c\uc131\ud588\uc2b5\ub2c8\ub2e4. \ubcc0\ud654\uc758 \ud750\ub984\uc744 \ub530\ub77c\uac00\uba70, \ucc3d\uc758\uc801\uc774\uace0 \uc720\uc5f0\ud55c \uc2dc\uc120\uc73c\ub85c \uc138\uc0c1\uc744 \ubc14\ub77c\ubcf4\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uace0\uc790 \ud569\ub2c8\ub2e4.";return(0,Pr.jsxs)($i,{children:[(0,Pr.jsx)(Pr.Fragment,{children:(0,Pr.jsxs)(zi,{viewBox:"0 0 1278 804",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:e?"xMidYMax slice":"none",children:[(0,Pr.jsx)("defs",{children:(0,Pr.jsx)("clipPath",{id:"myClipPath",clipPathUnits:"objectBoundingBox",children:(0,Pr.jsx)("path",{d:" M1 0.896V0.481C0.828 0.531 0.618 0.512 0.591 0.374C0.564 0.235 0.563 0.165 0.495 0.134 C0.427 0.104 0.359 0.276 0.287 0.242C0.216 0.208 0.228 0.075 0.196 0.031 C0.164 -0.014 0.104 -0.006 0 0.056V0.896H1Z",fill:"none"})})}),(0,Pr.jsx)("path",{d:"M1278 721.358V386.858C1059.94 427.194 790.686 411.814 756 300.858C721.314 189.901 720.071 132.939 632.5 108.358C544.929 83.7759 459.562 221.511 367 194.358C274.438 167.204 290.428 59.977 249.5 24.3576C208.572 -11.2617 132.178 -7.45573 0 44.8576V721.358H1278Z",fill:"#FFF9E3",stroke:"#FFF9E3"}),(0,Pr.jsx)("path",{d:"M1278 803V468.5C1059.94 508.836 790.686 493.457 756 382.5C721.314 271.543 720.071 214.582 632.5 190C544.929 165.418 459.562 303.154 367 276C274.438 248.846 290.428 141.619 249.5 106C208.572 70.3807 132.178 74.1866 0 126.5V803H1278Z",fill:"#E0C792",stroke:"#E0C792"})]})}),(0,Pr.jsx)(Ni,{justify:"center",align:"center",children:t}),!e&&(0,Pr.jsx)(Ri,{justify:"center",align:"center",children:(0,Pr.jsx)(bi,{delay:1e5,children:t})})]})},Fi=vr.div`
  position: absolute;
  bottom: -2%;
  width: 100vw;
  height: 300px;
  overflow: hidden;

  @media (min-width: ${kr.imac}px) {
    height: 900px;
  }
`,Mi=vr.svg.attrs((e=>{let{px:t}=e;return{style:{transform:`translate3d(${t}px, 0px, 0px) `}}})).withConfig({shouldForwardProp:e=>!["px"].includes(e)})`
  width: auto;
  height: 300px;
  will-change: transform;

      @media (min-width: ${kr.imac}px) {
    height: 900px;
  }
`,Ii=vr(Mi)`
  position: absolute;
  top: -35px;
`,Di=vr(Mi)``,Ai=t=>{let{mainColor:n=br.background,backColor:r=br.accent}=t;const a=(0,e.useRef)(),[o,i]=(0,e.useState)(0),l=Ir.getWindowType("imac"),s=()=>{i(window.scrollY)};(0,e.useEffect)((()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)})),[]);const u=e=>{const t=window.innerWidth,n=-(l?10320:3440)+t+o*e;return Math.min(0,n)};return(0,Pr.jsxs)(Fi,{ref:a,children:[(0,Pr.jsx)(Ii,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 3440 300",px:u(.4),children:(0,Pr.jsx)("path",{d:"M-196.61 0V21.1232C-196.61 90.5281 -148.913 67.6768 -101.5 115.09C-14.9999 201.59 116.787 115.09 227.697 115.09C338.606 115.09 400.788 152.442 511.698 152.442C622.607 152.442 676.557 122.132 795.699 115.09C908.436 108.426 966.566 155.325 1079.7 155.325C1192.83 155.325 1252.79 115.09 1363.7 115.09C1474.61 115.09 1534.57 155.325 1647.7 155.325C1760.84 155.325 1820.79 115.09 1931.7 115.09C2042.61 115.09 2102.57 155.325 2215.7 155.325C2328.84 155.325 2386.57 115.09 2499.7 115.09C2612.84 115.09 2672.8 155.325 2783.71 155.325C2894.61 155.325 2954.57 115.09 3067.71 115.09C3180.84 115.09 3238.57 155.325 3351.71 155.325C3464.84 155.325 3524.8 115.09 3635.71 115.09C3746.62 115.09 3845.02 185.125 3919.71 125.325C3976.61 79.7659 3919.71 0 3919.71 0H5000V1000H-196.61Z",fill:r})}),(0,Pr.jsx)(Di,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 3440 300",preserveAspectRatio:"none",px:u(.6),children:(0,Pr.jsx)("path",{d:"M-174.61 -157V-116.765C-174.61 15.4344 -112.186 139 -3.49988 139C111 139 138.787 62.2189 249.697 62.2189C360.606 62.2189 356 156.175 533.698 156.175C683 156.175 698.557 75.6322 817.699 62.2189C930.436 49.5265 988.565 138.856 1101.7 138.856C1214.83 138.856 1274.79 62.2189 1385.7 62.2189C1496.61 62.2189 1556.57 138.856 1669.7 138.856C1782.84 138.856 1842.79 62.2189 1953.7 62.2189C2064.61 62.2189 2124.57 138.856 2237.7 138.856C2350.84 138.856 2408.57 62.2188 2521.7 62.2189C2634.84 62.2189 2694.8 138.856 2805.71 138.856C2916.61 138.856 2976.57 62.2189 3089.71 62.2189C3202.84 62.2188 3260.57 138.856 3373.71 138.856C3486.84 138.856 3546.8 62.2189 3657.71 62.2189C3768.62 62.2189 3867.02 222.761 3941.71 108.856C3998.61 22.0779 3941.71 -157 3941.71 -157H5000V1000H-174.61Z",fill:n})})]})},Ui=vr(Nr).withConfig({shouldForwardProp:e=>!["isHovered"].includes(e)})`
  width: max-content;

  flex-wrap: nowrap;
  text-align: center;
  position: relative;

  padding: 10px;

  word-break: keep-all;
  cursor: pointer;
  border: 1px solid ${br.base};
  border-radius: 1.4vh;
  will-change: color;
  color: ${e=>e.isHovered?br.text:br.base};
  font-weight: 400;
  background-color: transparent;
  overflow: hidden;
  transition: color 1.2s ease-in-out;

  @media (min-width: ${kr.imac}px) {
    padding: 30px;
  }
`,Hi=vr.div.withConfig({shouldForwardProp:e=>!["isHovered"].includes(e)})`
  position: absolute;
  will-change: bottom;
  bottom: ${e=>e.isHovered?"60%":"-100%"};
  left: 0;
  opacity: 0.4;
  transform: ${e=>e.isHovered?"translateX(-50px)":" translateX(0px)"};
  width: 100%;
  height: 100%;
  transition: bottom 1.2s ease-in-out, transform 5.2s ease-in-out;
  @media (min-width: ${kr.imac}px) {
    bottom: ${e=>e.isHovered?"100%":"-100%"};
  }
`,Vi=t=>{let{button:n,isBlank:r=!0,onClick:a}=t;const[o,i]=(0,e.useState)(!1),[l,s]=(0,e.useState)(""),u=Ir.getWindowType("imac"),c=e=>{i((e=>!e)),s(e)};return(0,Pr.jsx)(Pr.Fragment,{children:(0,Pr.jsxs)(Ui,{onClick:()=>{a&&a(),r&&window.open(n.url,r?"_blank":"_self","noopener, noreferrer")},onMouseEnter:()=>c(n.type),onMouseLeave:()=>c(n.type),isHovered:o&&l===n.type,children:[(0,Pr.jsx)("span",{children:n.title}),(0,Pr.jsx)(Hi,{isHovered:o&&l===n.type,children:(0,Pr.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:u?1e3:350,height:u?240:80,viewBox:"0 0 3150 200",children:(0,Pr.jsx)("path",{d:"M-174.61 -157V-116.765C-174.61 15.4344 -112.186 139 -3.49988 139C111 139 138.787 62.2189 249.697 62.2189C360.606 62.2189 356 156.175 533.698 156.175C683 156.175 698.557 75.6322 817.699 62.2189C930.436 49.5265 988.565 138.856 1101.7 138.856C1214.83 138.856 1274.79 62.2189 1385.7 62.2189C1496.61 62.2189 1556.57 138.856 1669.7 138.856C1782.84 138.856 1842.79 62.2189 1953.7 62.2189C2064.61 62.2189 2124.57 138.856 2237.7 138.856C2350.84 138.856 2408.57 62.2188 2521.7 62.2189C2634.84 62.2189 2694.8 138.856 2805.71 138.856C2916.61 138.856 2976.57 62.2189 3089.71 62.2189C3202.84 62.2188 3260.57 138.856 3373.71 138.856C3486.84 138.856 3546.8 62.2189 3657.71 62.2189C3768.62 62.2189 3867.02 222.761 3941.71 108.856C3998.61 22.0779 3941.71 -157 3941.71 -157H5000V1000H-174.61Z",fill:br.accent})})})]},n.type)})};var Wi=n(256),Bi=e,Yi=Symbol.for("react-redux-context"),Ki="undefined"!==typeof globalThis?globalThis:{};function Qi(){if(!Bi.createContext)return{};const e=Ki[Yi]??(Ki[Yi]=new Map);let t=e.get(Bi.createContext);return t||(t=Bi.createContext(null),e.set(Bi.createContext,t)),t}var qi=Qi(),Xi=()=>{throw new Error("uSES not initialized!")};function Gi(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qi;return function(){return Bi.useContext(e)}}var Zi=Gi(),Ji=Xi,el=(e,t)=>e===t;function tl(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qi;const t=e===qi?Zi:Gi(e),n=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{equalityFn:r=el,devModeChecks:a={}}="function"===typeof n?{equalityFn:n}:n;const{store:o,subscription:i,getServerState:l,stabilityCheck:s,identityFunctionCheck:u}=t(),c=(Bi.useRef(!0),Bi.useCallback({[e.name]:t=>e(t)}[e.name],[e,s,a.stabilityCheck])),d=Ji(i.addNestedSub,o.getState,l||o.getState,c,r);return Bi.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var nl=tl();Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.client.reference");function rl(e){e()}var al={notify(){},get:()=>[]};function ol(e,t){let n,r=al,a=0,o=!1;function i(){u.onStateChange&&u.onStateChange()}function l(){a++,n||(n=t?t.addNestedSub(i):e.subscribe(i),r=function(){let e=null,t=null;return{clear(){e=null,t=null},notify(){rl((()=>{let t=e;for(;t;)t.callback(),t=t.next}))},get(){const t=[];let n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0;const a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){r&&null!==e&&(r=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}())}function s(){a--,n&&0===a&&(n(),n=void 0,r.clear(),r=al)}const u={addNestedSub:function(e){l();const t=r.subscribe(e);let n=!1;return()=>{n||(n=!0,t(),s())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:i,isSubscribed:function(){return o},trySubscribe:function(){o||(o=!0,l())},tryUnsubscribe:function(){o&&(o=!1,s())},getListeners:()=>r};return u}var il=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ll="undefined"!==typeof navigator&&"ReactNative"===navigator.product,sl=il||ll?Bi.useLayoutEffect:Bi.useEffect;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype;var ul=function(e){let{store:t,context:n,children:r,serverState:a,stabilityCheck:o="once",identityFunctionCheck:i="once"}=e;const l=Bi.useMemo((()=>{const e=ol(t);return{store:t,subscription:e,getServerState:a?()=>a:void 0,stabilityCheck:o,identityFunctionCheck:i}}),[t,a,o,i]),s=Bi.useMemo((()=>t.getState()),[t]);sl((()=>{const{subscription:e}=l;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),s!==t.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}}),[l,s]);const u=n||qi;return Bi.createElement(u.Provider,{value:l},r)};function cl(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qi;const t=e===qi?Zi:Gi(e),n=()=>{const{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var dl=cl();function fl(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qi;const t=e===qi?dl:cl(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var pl,hl=fl();function ml(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}pl=Wi.useSyncExternalStoreWithSelector,Ji=pl,(e=>{0})(e.useSyncExternalStore);var gl=(()=>"function"===typeof Symbol&&Symbol.observable||"@@observable")(),vl=()=>Math.random().toString(36).substring(7).split("").join("."),yl={INIT:`@@redux/INIT${vl()}`,REPLACE:`@@redux/REPLACE${vl()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${vl()}`};function bl(e){if("object"!==typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function wl(e,t,n){if("function"!==typeof e)throw new Error(ml(2));if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error(ml(0));if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error(ml(1));return n(wl)(e,t)}let r=e,a=t,o=new Map,i=o,l=0,s=!1;function u(){i===o&&(i=new Map,o.forEach(((e,t)=>{i.set(t,e)})))}function c(){if(s)throw new Error(ml(3));return a}function d(e){if("function"!==typeof e)throw new Error(ml(4));if(s)throw new Error(ml(5));let t=!0;u();const n=l++;return i.set(n,e),function(){if(t){if(s)throw new Error(ml(6));t=!1,u(),i.delete(n),o=null}}}function f(e){if(!bl(e))throw new Error(ml(7));if("undefined"===typeof e.type)throw new Error(ml(8));if("string"!==typeof e.type)throw new Error(ml(17));if(s)throw new Error(ml(9));try{s=!0,a=r(a,e)}finally{s=!1}return(o=i).forEach((e=>{e()})),e}f({type:yl.INIT});return{dispatch:f,subscribe:d,getState:c,replaceReducer:function(e){if("function"!==typeof e)throw new Error(ml(10));r=e,f({type:yl.REPLACE})},[gl]:function(){const e=d;return{subscribe(t){if("object"!==typeof t||null===t)throw new Error(ml(11));function n(){const e=t;e.next&&e.next(c())}n();return{unsubscribe:e(n)}},[gl](){return this}}}}}function xl(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const r=t[o];0,"function"===typeof e[r]&&(n[r]=e[r])}const r=Object.keys(n);let a;try{!function(e){Object.keys(e).forEach((t=>{const n=e[t];if("undefined"===typeof n(void 0,{type:yl.INIT}))throw new Error(ml(12));if("undefined"===typeof n(void 0,{type:yl.PROBE_UNKNOWN_ACTION()}))throw new Error(ml(13))}))}(n)}catch(Hc){a=Hc}return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(a)throw a;let o=!1;const i={};for(let a=0;a<r.length;a++){const l=r[a],s=n[l],u=e[l],c=s(u,t);if("undefined"===typeof c){t&&t.type;throw new Error(ml(14))}i[l]=c,o=o||c!==u}return o=o||r.length!==Object.keys(e).length,o?i:e}}function Sl(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?e=>e:1===t.length?t[0]:t.reduce(((e,t)=>function(){return e(t(...arguments))}))}function Cl(e){return t=>{let{dispatch:n,getState:r}=t;return t=>a=>"function"===typeof a?a(n,r,e):t(a)}}var kl=Cl(),_l=Cl,El=Symbol.for("immer-nothing"),Pl=Symbol.for("immer-draftable"),jl=Symbol.for("immer-state");function Ol(e){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Tl=Object.getPrototypeOf;function $l(e){return!!e&&!!e[jl]}function Nl(e){return!!e&&(zl(e)||Array.isArray(e)||!!e[Pl]||!!e.constructor?.[Pl]||Dl(e)||Al(e))}var Rl=Object.prototype.constructor.toString();function zl(e){if(!e||"object"!==typeof e)return!1;const t=Tl(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===Rl}function Ll(e,t){0===Fl(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function Fl(e){const t=e[jl];return t?t.type_:Array.isArray(e)?1:Dl(e)?2:Al(e)?3:0}function Ml(e,t){return 2===Fl(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Il(e,t,n){const r=Fl(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function Dl(e){return e instanceof Map}function Al(e){return e instanceof Set}function Ul(e){return e.copy_||e.base_}function Hl(e,t){if(Dl(e))return new Map(e);if(Al(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=zl(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[jl];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const a=n[r],o=t[a];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[a]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[a]})}return Object.create(Tl(e),t)}{const t=Tl(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function Vl(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Bl(e)||$l(e)||!Nl(e)||(Fl(e)>1&&(e.set=e.add=e.clear=e.delete=Wl),Object.freeze(e),t&&Object.entries(e).forEach((e=>{let[t,n]=e;return Vl(n,!0)}))),e}function Wl(){Ol(2)}function Bl(e){return Object.isFrozen(e)}var Yl,Kl={};function Ql(e){const t=Kl[e];return t||Ol(0),t}function ql(){return Yl}function Xl(e,t){t&&(Ql("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Gl(e){Zl(e),e.drafts_.forEach(es),e.drafts_=null}function Zl(e){e===Yl&&(Yl=e.parent_)}function Jl(e){return Yl={drafts_:[],parent_:Yl,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function es(e){const t=e[jl];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function ts(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[jl].modified_&&(Gl(t),Ol(4)),Nl(e)&&(e=ns(t,e),t.parent_||as(t,e)),t.patches_&&Ql("Patches").generateReplacementPatches_(n[jl].base_,e,t.patches_,t.inversePatches_)):e=ns(t,n,[]),Gl(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==El?e:void 0}function ns(e,t,n){if(Bl(t))return t;const r=t[jl];if(!r)return Ll(t,((a,o)=>rs(e,r,t,a,o,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return as(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let a=t,o=!1;3===r.type_&&(a=new Set(t),t.clear(),o=!0),Ll(a,((a,i)=>rs(e,r,t,a,i,n,o))),as(e,t,!1),n&&e.patches_&&Ql("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function rs(e,t,n,r,a,o,i){if($l(a)){const i=ns(e,a,o&&t&&3!==t.type_&&!Ml(t.assigned_,r)?o.concat(r):void 0);if(Il(n,r,i),!$l(i))return;e.canAutoFreeze_=!1}else i&&n.add(a);if(Nl(a)&&!Bl(a)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ns(e,a),t&&t.scope_.parent_||"symbol"===typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||as(e,a)}}function as(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Vl(t,n)}var os={get(e,t){if(t===jl)return e;const n=Ul(e);if(!Ml(n,t))return function(e,t,n){const r=ss(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!Nl(r)?r:r===ls(e.base_,t)?(cs(e),e.copy_[t]=ds(r,e)):r},has:(e,t)=>t in Ul(e),ownKeys:e=>Reflect.ownKeys(Ul(e)),set(e,t,n){const r=ss(Ul(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=ls(Ul(e),t),a=r?.[jl];if(a&&a.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}(n,r)&&(void 0!==n||Ml(e.base_,t)))return!0;cs(e),us(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==ls(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,cs(e),us(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=Ul(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){Ol(11)},getPrototypeOf:e=>Tl(e.base_),setPrototypeOf(){Ol(12)}},is={};function ls(e,t){const n=e[jl];return(n?Ul(n):e)[t]}function ss(e,t){if(!(t in e))return;let n=Tl(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Tl(n)}}function us(e){e.modified_||(e.modified_=!0,e.parent_&&us(e.parent_))}function cs(e){e.copy_||(e.copy_=Hl(e.base_,e.scope_.immer_.useStrictShallowCopy_))}Ll(os,((e,t)=>{is[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),is.deleteProperty=function(e,t){return is.set.call(this,e,t,void 0)},is.set=function(e,t,n){return os.set.call(this,e[0],t,n,e[0])};function ds(e,t){const n=Dl(e)?Ql("MapSet").proxyMap_(e,t):Al(e)?Ql("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:ql(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=r,o=os;n&&(a=[r],o=is);const{revoke:i,proxy:l}=Proxy.revocable(a,o);return r.draft_=l,r.revoke_=i,l}(e,t);return(t?t.scope_:ql()).drafts_.push(n),n}function fs(e){if(!Nl(e)||Bl(e))return e;const t=e[jl];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Hl(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Hl(e,!0);return Ll(n,((e,t)=>{Il(n,e,fs(t))})),t&&(t.finalized_=!1),n}var ps=new class{constructor(e){var t=this;this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"===typeof e&&"function"!==typeof t){const n=t;t=e;const r=this;return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;for(var a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];return r.produce(e,(e=>t.call(this,e,...o)))}}let r;if("function"!==typeof t&&Ol(6),void 0!==n&&"function"!==typeof n&&Ol(7),Nl(e)){const a=Jl(this),o=ds(e,void 0);let i=!0;try{r=t(o),i=!1}finally{i?Gl(a):Zl(a)}return Xl(a,n),ts(r,a)}if(!e||"object"!==typeof e){if(r=t(e),void 0===r&&(r=e),r===El&&(r=void 0),this.autoFreeze_&&Vl(r,!0),n){const t=[],a=[];Ql("Patches").generateReplacementPatches_(e,r,t,a),n(t,a)}return r}Ol(1)},this.produceWithPatches=(e,n)=>{if("function"===typeof e)return function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return t.produceWithPatches(n,(t=>e(t,...a)))};let r,a;return[this.produce(e,n,((e,t)=>{r=e,a=t})),r,a]},"boolean"===typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"===typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Nl(e)||Ol(8),$l(e)&&(e=function(e){$l(e)||Ol(10);return fs(e)}(e));const t=Jl(this),n=ds(e,void 0);return n[jl].isManual_=!0,Zl(t),n}finishDraft(e,t){const n=e&&e[jl];n&&n.isManual_||Ol(9);const{scope_:r}=n;return Xl(r,t),ts(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=Ql("Patches").applyPatches_;return $l(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},hs=ps.produce;ps.produceWithPatches.bind(ps),ps.setAutoFreeze.bind(ps),ps.setUseStrictShallowCopy.bind(ps),ps.applyPatches.bind(ps),ps.createDraft.bind(ps),ps.finishDraft.bind(ps);var ms="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?Sl:Sl.apply(null,arguments)};"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function gs(e,t){function n(){if(t){let n=t(...arguments);if(!n)throw new Error(Ns(0));return{type:e,payload:n.payload,..."meta"in n&&{meta:n.meta},..."error"in n&&{error:n.error}}}return{type:e,payload:arguments.length<=0?void 0:arguments[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>function(e){return bl(e)&&"type"in e&&"string"===typeof e.type}(t)&&t.type===e,n}var vs=class e extends Array{constructor(){super(...arguments),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return super.concat.apply(this,t)}prepend(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return 1===n.length&&Array.isArray(n[0])?new e(...n[0].concat(this)):new e(...n.concat(this))}};function ys(e){return Nl(e)?hs(e,(()=>{})):e}function bs(e,t,n){if(e.has(t)){let r=e.get(t);return n.update&&(r=n.update(r,t,e),e.set(t,r)),r}if(!n.insert)throw new Error(Ns(10));const r=n.insert(t,e);return e.set(t,r),r}var ws="RTK_autoBatch",xs=e=>t=>{setTimeout(t,e)},Ss="undefined"!==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:xs(10),Cs=e=>function(t){const{autoBatch:n=!0}=t??{};let r=new vs(e);return n&&r.push(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"raf"};return t=>function(){const n=t(...arguments);let r=!0,a=!1,o=!1;const i=new Set,l="tick"===e.type?queueMicrotask:"raf"===e.type?Ss:"callback"===e.type?e.queueNotification:xs(e.timeout),s=()=>{o=!1,a&&(a=!1,i.forEach((e=>e())))};return Object.assign({},n,{subscribe(e){const t=n.subscribe((()=>r&&e()));return i.add(e),()=>{t(),i.delete(e)}},dispatch(e){try{return r=!e?.meta?.[ws],a=!r,a&&(o||(o=!0,l(s))),n.dispatch(e)}finally{r=!0}}})}}("object"===typeof n?n:void 0)),r};function ks(e){const t={},n=[];let r;const a={addCase(e,n){const r="string"===typeof e?e:e.type;if(!r)throw new Error(Ns(28));if(r in t)throw new Error(Ns(29));return t[r]=n,a},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),a),addDefaultCase:e=>(r=e,a)};return e(a),[t,n,r]}var _s=Symbol.for("rtk-slice-createasyncthunk");function Es(e,t){return`${e}/${t}`}function Ps(){let{creators:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=e?.asyncThunk?.[_s];return function(e){const{name:n,reducerPath:r=n}=e;if(!n)throw new Error(Ns(11));const a=("function"===typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name](){return e(...arguments)}}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},o=Object.keys(a),i={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},l={addCase(e,t){const n="string"===typeof e?e:e.type;if(!n)throw new Error(Ns(12));if(n in i.sliceCaseReducersByType)throw new Error(Ns(13));return i.sliceCaseReducersByType[n]=t,l},addMatcher:(e,t)=>(i.sliceMatchers.push({matcher:e,reducer:t}),l),exposeAction:(e,t)=>(i.actionCreators[e]=t,l),exposeCaseReducer:(e,t)=>(i.sliceCaseReducersByName[e]=t,l)};function s(){const[t={},n=[],r]="function"===typeof e.extraReducers?ks(e.extraReducers):[e.extraReducers],a={...t,...i.sliceCaseReducersByType};return function(e,t){let n,[r,a,o]=ks(t);if(function(e){return"function"===typeof e}(e))n=()=>ys(e());else{const t=ys(e);n=()=>t}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n(),t=arguments.length>1?arguments[1]:void 0,i=[r[t.type],...a.filter((e=>{let{matcher:n}=e;return n(t)})).map((e=>{let{reducer:t}=e;return t}))];return 0===i.filter((e=>!!e)).length&&(i=[o]),i.reduce(((e,n)=>{if(n){if($l(e)){const r=n(e,t);return void 0===r?e:r}if(Nl(e))return hs(e,(e=>n(e,t)));{const r=n(e,t);if(void 0===r){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}}return e}),e)}return i.getInitialState=n,i}(e.initialState,(e=>{for(let t in a)e.addCase(t,a[t]);for(let t of i.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)}))}o.forEach((r=>{const o=a[r],i={reducerName:r,type:Es(n,r),createNotation:"function"===typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(o)?function(e,t,n){let r,a,{type:o,reducerName:i,createNotation:l}=e;if("reducer"in t){if(l&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(t))throw new Error(Ns(17));r=t.reducer,a=t.prepare}else r=t;n.addCase(o,r).exposeCaseReducer(i,r).exposeAction(i,a?gs(o,a):gs(o))}(i,o,l):function(e,t,n,r){let{type:a,reducerName:o}=e;if(!r)throw new Error(Ns(18));const{payloadCreator:i,fulfilled:l,pending:s,rejected:u,settled:c,options:d}=t,f=r(a,i,d);n.exposeAction(o,f),l&&n.addCase(f.fulfilled,l);s&&n.addCase(f.pending,s);u&&n.addCase(f.rejected,u);c&&n.addMatcher(f.settled,c);n.exposeCaseReducer(o,{fulfilled:l||Ts,pending:s||Ts,rejected:u||Ts,settled:c||Ts})}(i,o,l,t)}));const u=e=>e,c=new Map;let d;function f(e,t){return d||(d=s()),d(e,t)}function p(){return d||(d=s()),d.getInitialState()}function h(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function r(e){let r=e[t];return"undefined"===typeof r&&n&&(r=p()),r}function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;const r=bs(c,n,{insert:()=>new WeakMap});return bs(r,t,{insert:()=>{const r={};for(const[a,o]of Object.entries(e.selectors??{}))r[a]=js(o,t,p,n);return r}})}return{reducerPath:t,getSelectors:a,get selectors(){return a(r)},selectSlice:r}}const m={name:n,reducer:f,actions:i.actionCreators,caseReducers:i.sliceCaseReducersByName,getInitialState:p,...h(r),injectInto(e){let{reducerPath:t,...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=t??r;return e.inject({reducerPath:a,reducer:f},n),{...m,...h(a,!0)}}};return m}}function js(e,t,n,r){function a(a){let o=t(a);"undefined"===typeof o&&r&&(o=n());for(var i=arguments.length,l=new Array(i>1?i-1:0),s=1;s<i;s++)l[s-1]=arguments[s];return e(o,...l)}return a.unwrapped=e,a}var Os=Ps();function Ts(){}var{assign:$s}=Object;Symbol.for("rtk-state-proxy-original");function Ns(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Rs=Os({name:"project",initialState:{selectedProjectId:null},reducers:{setSelectedProjectId:(e,t)=>{e.selectedProjectId=t.payload},clearSelectedProjectId:e=>{e.selectedProjectId=null}}}),{setSelectedProjectId:zs,clearSelectedProjectId:Ls}=Rs.actions,Fs=Rs.reducer,Ms=vr(Nr).attrs((e=>{let{visibility:t}=e;return{style:{opacity:`${t}`,transform:`scale(${t}) translateY(-10%)`}}})).withConfig({shouldForwardProp:e=>!["visibility"].includes(e)})`
  width: 50vw;
  height: 70%;
  transition: opacity 1s ease-in-out, transform 0.4s ease-in-out;    
  @media (max-width: ${kr.tabletPortrait}px) {
    width: 90vw;
  }

`,Is=vr(Nr)`
  flex-wrap: nowrap;
  margin-bottom: 20px;

  @media (max-width: ${kr.tabletPortrait}px) {
    flex-wrap: wrap;
    &:last-child {
      flex-wrap: wrap-reverse;
    }
  }
`,Ds=vr(Nr).withConfig({shouldForwardProp:e=>!["imgUrl"].includes(e)})`
  flex: 3;
  width: 100%;
  height: 30vh;
  background-image: url(${e=>{let{imgUrl:t}=e;return"/portfolio/assets/"+t}});
  background-size: cover;
  background-position: center;
  border-radius: 8px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  @media (max-width: ${kr.tabletPortrait}px) {
    height: 25vh;
  }

  @media (max-width: ${kr.mobile}px) {
    min-width: 300px;
  }
`,As=vr(Nr)`
  flex: 2;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;

  @media (max-width: ${kr.mobile}px) {
    height: auto;
  }

  @media (min-width: ${kr.imac}px) {
  }
`,Us=t=>{let{scroll:n}=t;const r=hl(),a=te(),o=Ir.getWindowType("mobile"),i={type:"link",url:"/works",title:"View Project"},l=(e,t)=>{r(zs(t))},s=nl((e=>e.project.selectedProjectId));return(0,e.useEffect)((()=>{s?a(`/works/${s}`):null===s&&a("/")}),[s,a]),(0,Pr.jsx)(Pr.Fragment,{children:(0,Pr.jsxs)(Rr,{justify:"center",align:"center",height:"100%",children:[(0,Pr.jsxs)(Ms,{visibility:(()=>{const e=1-(n-2*window.innerHeight)/window.innerHeight;return e>1?1:e<0?0:e})(),direction:"column",children:[(0,Pr.jsxs)(Is,{children:[(0,Pr.jsx)(Ds,{onClick:e=>l(0,1),imgUrl:_r[1].thumbnail}),(0,Pr.jsxs)(As,{direction:"column",justify:"space-between",align:"start",children:[(0,Pr.jsx)("span",{children:!o&&_r[1].description[0]}),(0,Pr.jsx)(Vi,{onClick:e=>l(0,1),button:{...i},isBlank:!1})]})]}),(0,Pr.jsxs)(Is,{children:[(0,Pr.jsxs)(As,{direction:"column",justify:"space-between",align:"end",children:[(0,Pr.jsx)(Vi,{onClick:e=>l(0,6),button:{...i},isBlank:!1}),(0,Pr.jsx)("span",{children:!o&&_r[6].description[0]})]}),(0,Pr.jsx)(Ds,{onClick:e=>l(0,6),imgUrl:_r[6].thumbnail})]})]}),(0,Pr.jsx)(Ai,{mainColor:br.background})]})})},Hs=br.background,Vs=br.secondary,Ws=vr.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: ${Hs};
`,Bs=vr.div.withConfig({shouldForwardProp:e=>!["per"].includes(e)})`
  position: fixed;
  top: 50%;
  left: 50%;

  z-index: 10;
  width: max-content;

  ${e=>{let{per:t}=e;return(e=>{let{per:t}=e;const n=100-100*t,r=1.5*Number(t);return n<20?"display: none;":`\n  transform: \n    translate(-50%, -50%) \n    scale(${1-r}, ${1-r});\n`})({per:t})}};
  transition: transform 2s linear;
`,Ys=vr.div.attrs((e=>{let{per:t}=e;return{style:{marginTop:`calc(100vh - ${t}px)`,transform:`translateY(${t}px)`}}})).withConfig({shouldForwardProp:e=>!["per","pageHeight"].includes(e)})`
  height: 400vh;
`,Ks=vr.section.withConfig({shouldForwardProp:e=>!["bg"].includes(e)})`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${e=>{let{bg:t}=e;return null!==t&&void 0!==t?t:Hs}};
`,Qs=vr(Ks).withConfig({shouldForwardProp:e=>!["per"].includes(e)})`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${Vs};
  visibility: ${e=>{let{per:t}=e;return t>200?"hidden":"visible"}};
`,qs=["\ubcc0\ud654\uc758 \ud750\ub984\uc744 \ud0c0\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790","\uc6f9\uc758 \uac00\ub2a5\uc131\uc744 \ud0d0\ud5d8\ud558\uba70, \ub05d\uc5c6\uc774 \uc0c8\ub85c\uc6b4 \ud30c\ub3c4\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.","\uae30\uc220\uc758 \ubb3c\uacb0 \uc704\uc5d0\uc11c \ucc3d\uc758\uc801\uc778 \uc778\ud130\ub799\uc158\uc744 \ub514\uc790\uc778\ud569\ub2c8\ub2e4.","\uc0ac\uc6a9\uc790\uc640\uc758 \uc18c\ud1b5\uc744 \uc78a\uc9c0 \uc54a\ub294, \uc720\uc5f0\ud55c \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4.","\uae30\uc220\uc758 \ubcc0\ud654 \uc18d\uc5d0\uc11c \ub354\uc6b1 \uc720\uc5f0\ud558\uac8c, \ub354 \ub098\uc740 \uc6f9\uc744 \ub9cc\ub4e4\uc5b4\uac11\ub2c8\ub2e4.","\ud30c\ub3c4\ucc98\ub7fc \uc720\uc5f0\ud558\uac8c \uc801\uc751\ud558\uace0, \ucc3d\uc758\uc801\uc73c\ub85c \ubb38\uc81c\ub97c \ud574\uacb0\ud569\ub2c8\ub2e4."],Xs=()=>{const t=(0,e.useRef)(),n=(0,e.useRef)(),[r,a]=(0,e.useState)(0),[o,i]=(0,e.useState)(0),[l,s]=(0,e.useState)(!1),[u,c]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{const e=()=>{const e=window.scrollY;a(e),n.current&&(n.current.offsetTop-window.innerHeight/2<=e?c(!0):c(!1)),t.current&&(t.current.offsetTop-window.innerHeight/2<=e?s(!0):s(!1))};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,e.useEffect)((()=>{i((2*r+100)/window.innerHeight)}),[r]),(0,Pr.jsxs)(Ws,{children:[(0,Pr.jsx)(Qs,{per:Math.floor(100*o),children:(0,Pr.jsx)(Bs,{per:o.toFixed(3),children:(0,Pr.jsx)(Mr,{height:20,word:"nwewave",isLazy:!1})})}),(0,Pr.jsxs)(Ys,{per:2*r>=window.innerHeight?window.innerHeight:2*r,children:[(0,Pr.jsx)(Hr,{waveTop:r,pace:2,text1:qs[0],text2:qs[1]}),(0,Pr.jsx)(Ks,{id:"first",ref:t,children:(0,Pr.jsx)(Li,{isTargetShown:l,scroll:r})}),(0,Pr.jsx)(Ks,{id:"second",bg:br.secondary,children:(0,Pr.jsx)(Us,{scroll:r})}),(0,Pr.jsx)(Ks,{id:"third",ref:n,bg:br.background,children:(0,Pr.jsx)(qr,{isTargetShown:u})})]})]})},Gs=vr(Nr)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Zs=vr.section`
  width: 100%;
  padding: 150px;
  background-color: ${br.base};
`,Js=vr(bi)`
  display: flex;
  flex-direction: column;

  align-items: center;
`,eu=vr.div`
  position: relative;
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
  background-color: ${br.background};
  margin-bottom: 10px;
`,tu=vr(Or)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`,nu=vr.h2`
  margin: 30px 0;
  text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.3);
  color: ${br.background};
`,ru=vr(bi)`
  width: 50%;

  text-align: center;
  margin: 20px 0;
  padding: 0 20px;
  font-size: 2vh;
  line-height: 1.5;

  color: ${br.background};
  overflow-wrap: break-word;
  white-space: normal !important;

  @media (max-width: ${kr.tabletPortrait}px) {
    width: 90%;
  }

  @media (min-width: ${kr.imac}px) {
    width: 35%;
  }
`,au=vr.h3`
  margin-bottom: 10px;
  cursor: pointer;
`,ou=vr.ul`
  list-style-type: none;
  padding: 0;
`,iu=vr.li`
  margin-bottom: 15px;
  position: relative;
`,lu=vr.h3`
  margin-top: 30px;
  margin-bottom: 10px;
`,su=yr`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,uu=vr(Nr)`
  width: 100%;

  background-color: ${br.background};
`,cu=vr.div`
  animation: ${su} 0.6s ease forwards;
  padding: 50px 18px;

  @media (max-width: ${kr.mobile}px) {
    padding: 50px 24px;
  }
`,du=vr.ul`
  margin-top: 5px;
  list-style-type: none;
  padding: 0;
`,fu=vr.section`
  padding: 80px 100px 50px 100px;
  text-align: center;
  max-width: 1000px;

  @media (max-width: ${kr.mobile}px) {
    padding: 50px 18px;
  }

  @media (min-width: ${kr.imac}px) {
    max-width: 3000px;
  }
`,pu=vr.h2`
  margin-bottom: 20px;
  font-weight: 400;
`,hu=vr(Nr)`
  flex-wrap: wrap;
`,mu=vr.div`
  margin: 10px;
  text-align: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  padding: 15px;
  border-radius: 10px;
  @media (max-width: ${kr.mobile}px) {
    margin: 5px;
    padding: 10px;
  }

  @media (min-width: ${kr.imac}px) {
    margin: 15px;
    padding: 20px;
  }
`,gu=vr(Or)`
  width: 10vw;
  height: 10vw;
  margin-bottom: 10px;

  @media (max-width: ${kr.mobile}px) {
    margin-bottom: 5px;
  }

  @media (min-width: ${kr.imac}px) {
    margin-bottom: 15px;
  }
`,vu=vr.p``,yu=vr.div`
  width: 100%;
  padding-top: 500px;
  background-color: ${br.base};
  position: relative;

  @media (max-width: ${kr.mobile}px) {
    padding-top: 200px;
  }

  @media (min-width: ${kr.mobile}px) {
    padding-top: 350px;
  }

  @media (min-width: ${kr.imac}px) {
    padding-top: 900px;
  }
`,bu=()=>{const[t,n]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{console.log("##isHovered",t)}),[t]),(0,Pr.jsxs)(Gs,{direction:"column",align:"center",children:[(0,Pr.jsx)(Zs,{children:(0,Pr.jsxs)(Js,{triggerOnce:!0,children:[(0,Pr.jsx)(eu,{onClick:()=>{window.open("https://github.com/nwewave32","_blank","noopener, noreferrer")},children:(0,Pr.jsx)(tu,{imgSrc:t?"main/me.png":"wave.png",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),alt:"My Profile"})}),(0,Pr.jsx)(nu,{children:"About Me"}),(0,Pr.jsx)(ru,{children:"\uc0c8\ub85c\uc6b4 \uac83\uc744 \ucc3d\uc870\ud558\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790. \ub04a\uc784\uc5c6\ub294 \ud638\uae30\uc2ec, \uc720\uc5f0\ud55c \uc0ac\uace0, \uadf8\ub9ac\uace0 \ube60\ub978 \uc801\uc751\ub825\uc740 \uc800\uc758 \ub2c9\ub124\uc784\uc778 \u2018nwewave\u2019\uc640 \ube44\uc2b7\ud569\ub2c8\ub2e4. \ud30c\ub3c4\uac00 \uc27c \uc5c6\uc774 \ubc00\ub824\uc624\ub4ef, \uc800\ub3c4 \ubcc0\ud654\ud558\ub294 \uae30\uc220 \ud2b8\ub80c\ub4dc \uc18d\uc5d0\uc11c \ub04a\uc784\uc5c6\uc774 \ubc1c\uc804\ud558\uba70, \ud30c\ub3c4\uc758 \ud750\ub984\ucc98\ub7fc \uc0ac\ub78c\ub4e4\uacfc \uc138\uc0c1\uc5d0 \uae0d\uc815\uc801\uc778 \uae30\uc5ec\ub97c \ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4."}),(0,Pr.jsx)(ru,{children:"A frontend developer who loves creating new things. My boundless curiosity, flexible thinking, and quick adaptability are much like my nickname, \u2018nwewave' Just as waves continuously roll in, I strive to grow in the ever-changing tech landscape and, like the flow of the wave, I aim to make a positive impact on people and the world."})]})}),(0,Pr.jsx)(yu,{children:(0,Pr.jsx)(Ai,{mainColor:br.background,backColor:br.accent})}),(0,Pr.jsxs)(uu,{direction:"column",align:"center",children:[(0,Pr.jsx)(bi,{delay:100,children:(0,Pr.jsxs)(fu,{children:[(0,Pr.jsx)(pu,{children:"Languages & Dev Tools"}),(0,Pr.jsx)(hu,{justify:"center",children:Er.map((e=>(0,Pr.jsx)(bi,{delay:100,children:(0,Pr.jsxs)(mu,{children:[(0,Pr.jsx)(gu,{imgSrc:e.icon,alt:e.name}),(0,Pr.jsx)(vu,{children:e.name})]},e.name)},e.name)))})]})}),(0,Pr.jsxs)(cu,{children:[(0,Pr.jsxs)(bi,{cascade:!0,delay:100,children:[(0,Pr.jsx)(au,{children:"\uacbd\ub825"}),(0,Pr.jsx)(ou,{children:(0,Pr.jsxs)(iu,{children:[(0,Pr.jsx)("span",{children:"(\uc8fc)\uc544\ubba4\uc988 (2021.12 \u2013 2024.04) / \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 (\ub300\ub9ac)"}),(0,Pr.jsxs)(du,{children:[(0,Pr.jsx)("li",{children:"React \uae30\ubc18\uc758 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218"}),(0,Pr.jsx)("li",{children:"API \uc5f0\ub3d9 \ubc0f \uc0c1\ud0dc \uad00\ub9ac(Recoil) \uad6c\ud604"}),(0,Pr.jsx)("li",{children:"\ubc18\uc751\ud615 \uc6f9\uc0ac\uc774\ud2b8 \uac1c\ubc1c \ubc0f \uc131\ub2a5 \ucd5c\uc801\ud654"}),(0,Pr.jsx)("li",{children:"\ub514\uc790\uc774\ub108, \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790, PM \ub4f1 \ub2e4\uc591\ud55c \ud300\uc6d0\ub4e4\uacfc\uc758 \uc6d0\ud65c\ud55c \ud611\uc5c5"})]})]})})]}),(0,Pr.jsxs)(bi,{cascade:!0,delay:100,children:[(0,Pr.jsx)(lu,{children:"\ud559\ub825"}),(0,Pr.jsx)(ou,{children:(0,Pr.jsxs)(iu,{children:[(0,Pr.jsx)("span",{children:"\ubd80\uacbd\ub300\ud559\uad50 (2017.03 - 2022.08)"}),(0,Pr.jsxs)(du,{children:[(0,Pr.jsx)("li",{children:"\uc81c1\uc804\uacf5: \uc804\uae30\uacf5\ud559\ubd80 \ub514\uc2a4\ud50c\ub808\uc774\ubc18\ub3c4\uccb4\uacf5\ud559\uc804\uacf5"}),(0,Pr.jsx)("li",{children:"\uc81c2\uc804\uacf5: \ucef4\ud4e8\ud130\uacf5\ud559\ubd80 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc778\uacf5\uc9c0\ub2a5\uc804\uacf5"})]})]})})]})]})]})]})},wu=vr.div.withConfig({shouldForwardProp:e=>!["isHovered","type"].includes(e)})`
  position: relative;

  font-size: 3vh;
  color: ${e=>{let{isHovered:t}=e;return t?"transparent":br.highlight}};
  overflow: hidden;
  text-align: ${e=>{let{type:t}=e;return"next"===t?"right":"left"}};
  @media (max-width: ${kr.mobile}px) {
    font-size: 2vh;
  }
  > div {
    display: inline;
    height: 3.2vh;

    background-color: ${br.background};
    position: absolute;
    top: 50%;
    ${e=>{let{type:t,isHovered:n}=e;return"prev"===t?`left: ${n?0:100}%; transition: left 1.5s; padding-right: 100%;`:`right: ${n?0:100}%; transition: right 1.5s; padding-left: 100%;`}}
    transform: translate(0%, -50%);
    > img {
      height: 3vh;
      filter: invert(79%) sepia(44%) saturate(265%) hue-rotate(124deg)
        brightness(87%) contrast(89%);
    }
  }
`,xu=t=>{let{text:n,type:r,onClick:a}=t;const[o,i]=(0,e.useState)(!1),l=()=>{i((e=>!e))};return(0,Pr.jsx)(Pr.Fragment,{children:(0,Pr.jsxs)(wu,{onClick:()=>{a&&a()},onMouseEnter:()=>l(),onMouseLeave:()=>l(),isHovered:o,type:r,children:[n,(0,Pr.jsx)("div",{children:(0,Pr.jsx)(Or,{imgSrc:`${r}.png`,alt:r})})]})})},Su=vr.div`
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
  background-color: ${br.background};
  margin-bottom: 100vh;
`,Cu=vr.div`
  position: relative;
  transition: transform 0.3s ease-out;
  transform: translateZ(${e=>e.depth}px)
    scale(${e=>e.scale});
  background-color: ${br.background};
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0px;
  }
`,ku=t=>{let{images:n}=t;const r=(0,e.useRef)(),[a,o]=(0,e.useState)(0),i=()=>{if(r.current){const{top:e}=r.current.getBoundingClientRect();o(-e)}};(0,e.useEffect)((()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),[]);return(0,Pr.jsx)("div",{ref:r,children:(0,Pr.jsx)(Su,{children:n.map(((e,t)=>{const{depth:n,scale:r}=(e=>{const t=0+100*e-a/5;return{depth:t,scale:Math.min(1-t/500,.7)}})(t);return(0,Pr.jsx)(Cu,{depth:n,scale:r,children:(0,Pr.jsx)(bi,{children:(0,Pr.jsx)(Or,{imgSrc:e,alt:e,width:"100%",height:"auto"})})},t)}))})})},_u=vr(Nr)`
  width: 100%;
  background-color: ${br.background};
`,Eu=vr(Nr)`
  padding: 24px 0px;
  width: 80%;
  box-sizing: border-box;
  @media (max-width: ${kr.mobile}px) {
    width: 100%;

    padding: 18px;
  }

  @media (max-width: ${kr.tabletPortrait}px) {
    width: 100%;
  }
`,Pu=vr.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 80%;
  height: 40vh;
  padding: 100px 0 30px 0;
  box-sizing: border-box;
  margin-bottom: 30vh;

  position: sticky;
  top: 0px;

  @media (max-width: ${kr.mobile}px) {
    width: 100%;
  }
  @media (min-width: ${kr.imac}px) {
  }
`,ju=vr.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
`,Ou=vr.h2`
  font-weight: 500;
  line-height: 1.3;
  height: max-content;
`,Tu=vr.div`
  width: 100%;
  margin-top: 20px;
  @media (max-width: ${kr.mobile}px) {
    padding: 0 18px;

    box-sizing: border-box;
  }
`,$u=vr(Nr)`
  width: 100%;
  margin-bottom: 10px;

  box-sizing: border-box;
`,Nu=vr.div`
  margin-right: 10px;
`,Ru=vr.div`
  width: max-content;
  text-align: left;
`,zu=vr.section`
  width: 80%;
  margin-top: 20px;

  box-sizing: border-box;

  @media (max-width: ${kr.mobile}px) {
    width: 100%;
    padding: 0 18px;
  }
`,Lu=vr.ul`
  list-style: decimal-leading-zero;
  list-style-position: inside;

  max-height: 30vh;
  overflow: scroll;
  margin-bottom: 5px;
`,Fu=vr.li`
  margin-bottom: 5px;
`,Mu=vr.section`
  background-color: ${br.background};

  width: 80vw;
  margin-bottom: 500px;

  @media (max-width: ${kr.tabletPortrait}px) {
    width: 100vw;
    padding: 0 18px;
    box-sizing: border-box;
  }
  @media (min-width: ${kr.imac}px) {
    margin-bottom: 100vh;
  }
`,Iu=vr(Nr)`
  will-change: transform;
  transform: perspective(1200px);
`,Du=vr(Nr).withConfig({shouldForwardProp:e=>!["imgUrl","height"].includes(e)})`
  margin-bottom: 300px;
  box-sizing: border-box;
  position: sticky;
  top: 100px;

  height: 100%;
  min-height: 500px;
  background-color: ${br.background};
  opacity: 1;

  @media (min-width: ${kr.mobile+50}px) {
    padding: 0 20px;
    width: 100%;
    height: ${e=>{let{height:t}=e;return t}}px;
    overflow: hidden;
    background-image: url(${e=>{let{imgUrl:t}=e;return"/portfolio/assets/"+t}});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`,Au=vr(Nr)`
  cursor: pointer;
  padding: 0 20px;
`,Uu=vr.div.withConfig({shouldForwardProp:e=>!["btnLeng"].includes(e)})`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(${e=>e.$btnLeng}, 1fr);
  column-gap: 10px;
`,Hu=t=>{let{project:n}=t;const r=n.id,a=[{key:"Subtitle:",value:n.subtitle},{key:"Category:",value:"corp"===n.category?"\ud68c\uc0ac \ud504\ub85c\uc81d\ud2b8":"\uac1c\uc778 \ud504\ub85c\uc81d\ud2b8"},{key:"Duration:",value:n.date}],o=(0,e.useRef)(),i="prev",l=e=>e===i?r-1<0?_r.length-1:r-1:r+1>_r.length-1?0:r+1,s=hl(),u=te(),c=Ir.getWindowType("mobile");return(0,Pr.jsx)(_u,{align:"center",direction:"column",children:(0,Pr.jsxs)(Eu,{direction:"column",justify:"space-between",align:"center",children:[(0,Pr.jsxs)(Pu,{ref:o,id:"title",children:[(0,Pr.jsx)(ju,{children:(0,Pr.jsx)(Ou,{children:n.title})}),(0,Pr.jsx)(Tu,{children:a.map((e=>(0,Pr.jsxs)($u,{justify:"space-between",children:[(0,Pr.jsxs)(Nu,{children:[e.key," "]}),(0,Pr.jsx)(Ru,{children:e.value})]},e.key)))}),(null===n||void 0===n?void 0:n.buttons)&&(0,Pr.jsx)(Uu,{$btnLeng:null!==n&&void 0!==n&&n.buttons?null===n||void 0===n?void 0:n.buttons.length:0,children:null===n||void 0===n?void 0:n.buttons.map(((e,t)=>(0,Pr.jsx)(Vi,{button:e},"key"+t)))})]}),c?(0,Pr.jsx)(ku,{images:null===n||void 0===n?void 0:n.images}):(0,Pr.jsx)(Mu,{children:(null===n||void 0===n?void 0:n.images)&&(0,Pr.jsx)(bi,{children:(0,Pr.jsx)(Iu,{direction:"column",children:n.images.map(((e,t)=>(0,Pr.jsx)(bi,{children:(0,Pr.jsx)(Du,{justify:"center",imgUrl:e,height:window.innerHeight-100-20},`img-${t}`)})))})})}),(0,Pr.jsxs)(zu,{children:[(0,Pr.jsxs)(bi,{children:[(0,Pr.jsx)(Lu,{direction:"column",align:"flex-start",children:n.description.map(((e,t)=>(0,Pr.jsx)(Fu,{children:e},t+e)))}),(0,Pr.jsx)(Nr,{justify:"space-between",children:(0,Pr.jsx)(Tr,{children:n.technologies.map((e=>(0,Pr.jsx)($r,{children:e},e)))})})]}),(0,Pr.jsx)(Au,{style:{width:"100%",marginTop:"10px",boxSizing:"border-box",padding:0},justify:"space-between",children:[i,"next"].map((e=>(0,Pr.jsx)(xu,{text:_r[l(e)].title,onClick:()=>{return t=l(e),s(zs(t)),void u(`/works/${t}`);var t},type:e},e)))})]})]})})},Vu=vr.div`
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  overflow: hidden;
  position: relative;
  height: 100%;
`,Wu=vr.div.withConfig({shouldForwardProp:e=>!["isUp","needStop"].includes(e)})`
  display: flex;
  flex-direction: column;
  height: calc(
    ${e=>(e.height+e.margin)*e.length*2}px
  );
  animation: ${e=>e.isUp?((e,t,n)=>yr`
  0% { transform: translateY(0); }
  100% { transform: translateY(calc(-${e+t}px * ${n})); }
`)(e.height,e.margin,e.length):((e,t,n)=>yr`
0% { transform: translateY(calc(-${e+t}px * ${n})); }
100% { transform: translateY(0); }
`)(e.height,e.margin,e.length)}
    40s linear infinite;
  animation-play-state: ${e=>e.needStop?"paused":"running"};
`,Bu=vr.div.withConfig({shouldForwardProp:e=>!["isHovered","imgUrl"].includes(e)})`
  position: relative;
  background-color: ${e=>e.isHovered?br.base:br.background};
  text-shadow: ${e=>e.isHovered?"1px 1px 2px #000":"unset"};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: ${e=>e.margin}px;
  height: ${e=>e.height}px;

  font-weight: 400;
  ${e=>{let{isHovered:t,imgUrl:n}=e;return t?`background-image: url(${"/portfolio/assets/"+n}); background-size: cover; background-position: center; `:""}}
`,Yu=vr.div.withConfig({shouldForwardProp:e=>!["isHovered"].includes(e)})`
  display: inline-block;
  position: absolute;
  top: 5%;
  left: 4%;
  ${e=>{let{isHovered:t}=e;return t?"top: 65%; transition-duration: 1.5s;":""}};
  color: ${e=>e.isHovered?br.background:br.base};
  font-size: 3.5vh;
  line-height: 1;
  overflow-wrap: normal;
`,Ku=vr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`,Qu=t=>{let{columnIndex:n,projects:r,isUp:a,clickProject:o,height:i}=t;const[l,s]=(0,e.useState)(!1);(0,e.useEffect)((()=>{}),[]);const u=()=>{f(c),s(!1)},c={column:"",idx:""},[d,f]=(0,e.useState)(c),p=r.length,h=(0,e.useCallback)((e=>n===d.column&&e===d.idx),[d]);return(0,Pr.jsx)(Vu,{children:(0,Pr.jsx)(Wu,{height:i,length:p,margin:20,isUp:a,needStop:l,children:r.concat(r).map(((e,t)=>(0,Pr.jsxs)(Bu,{height:i,margin:20,onClick:()=>o(e.id),onMouseEnter:()=>{return t=e.id,f({column:n,idx:t}),void s(!0);var t},onMouseLeave:u,isHovered:h(e.id),imgUrl:e.thumbnail,children:[h(e.id)&&(0,Pr.jsx)(Ku,{}),(0,Pr.jsx)(Yu,{isHovered:h(e.id),children:e.title})]},t)))})})},qu=vr(Nr)`
  width: 100%;
  box-sizing: border-box;
  background-color: ${br.base};
`,Xu=vr(Nr).attrs((e=>{let{visibility:t}=e;return{style:{opacity:`${t}`,transform:`scale(${t})`}}})).withConfig({shouldForwardProp:e=>!["visibility"].includes(e)})`
  position: relative;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  background-color: ${br.base};
  box-sizing: border-box;
  will-change: opacity, transform;

  transition: opacity 1s ease-in-out, transform 0.4s ease-in-out;
`,Gu=vr(Nr)`
  width: 100%;
`,Zu=vr.div`
  width: 100%;
  padding-top: 500px;
  background-color: ${br.base};
  position: relative;

  @media (min-width: ${kr.imac}px) {
    padding-top: 900px;
  }
`,Ju=yr`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ec=vr.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  background-color: ${br.accent};
  color: #fff;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  z-index: 15;

  &:hover {
    animation: ${Ju} 2s linear infinite;
  }
`,tc=vr.section`
  position: absolute;
  animation: ${Ju} 10.5s linear infinite;
`,nc=vr.span`
  position: absolute;

  top: -35px;
  will-change: transform;
  font-size: 10px;
  display: inline-block;
  color: white;
  transform-origin: 0 35px;
  transform: ${e=>{let{index:t}=e;return`rotate(${14.5*t}deg)`}};
`,rc=()=>{const t=hl(),n=te(),[r,a]=(0,e.useState)(1),o=(0,e.useRef)(null),[i,l]=(0,e.useState)(!1),s=nl((e=>e.project.selectedProjectId));(0,e.useEffect)((()=>{const e=document.body.querySelector("#detail");if(e){const t=e.offsetTop;window.scrollTo({top:t,behavior:"smooth"})}const t=()=>{window.scrollY>window.outerHeight/4?a(1-window.scrollY/window.outerHeight):a(1),window.scrollY>window.outerHeight/3?l(!0):l(!1)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}}),[s]),(0,e.useEffect)((()=>()=>{t(Ls())}),[]);const u="back to top".split("");return(0,Pr.jsxs)(qu,{direction:"column",align:"center",ref:o,children:[(0,Pr.jsx)(Ti,{children:(0,Pr.jsx)(Xu,{justify:"center",visibility:r<0?0:r,id:"project",children:(0,Pr.jsx)(ic,{clickProject:e=>{t(zs(e)),n(`/works/${e}`)}})})}),(0,Pr.jsx)(Zu,{children:(0,Pr.jsx)(Ai,{mainColor:br.background,backColor:br.accent})}),null!==s&&(0,Pr.jsx)(Gu,{id:"detail",children:(0,Pr.jsx)(Hu,{project:_r[s]})}),i&&(0,Pr.jsx)(ec,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,Pr.jsx)(tc,{children:u.map(((e,t)=>(0,Pr.jsx)(nc,{index:t,children:e},t)))})})]})},ac=vr.div`
  display: grid;
  grid-template-columns: repeat(
    ${e=>{let{length:t}=e;return t}},
    ${e=>{let{width:t}=e;return t}}px
  );
  gap: 24px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  border-radius: 0 0 10px 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 0 20px;
  justify-content: center;
`,oc=vr.div`
  flex: 1;
`,ic=e=>{let{clickProject:t}=e;const n=Ir.getWindowType("mobile"),r=n?250:Math.max(Math.floor(window.innerHeight/4),300),a=n?3:4;return(0,Pr.jsx)(ac,{width:r,length:a,children:Array.from({length:a}).map(((e,n)=>(0,Pr.jsx)(oc,{direction:"column",children:(0,Pr.jsx)(Qu,{projects:_r,isUp:n%2===0,clickProject:t,columnIndex:n,height:r})},n)))})},lc=vr.section.attrs((e=>{let{scrollPer:t}=e;return{style:{transform:`translateY( ${100-t}%)`,opacity:""+t/100}}})).withConfig({shouldForwardProp:e=>!["scrollPer"].includes(e)})`
  will-change: transform, opacity;
  transition: transform 1.5s ease, opacity 1.5s ease;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  height: 100vh;
  background-color: #fff;
  text-align: center;
  overflow: hidden;
  position: fixed;
  bottom: 0;

  
  @media (max-width: ${kr.tabletPortrait}px) {
    flex-direction: column-reverse;
  }
`,sc=vr.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;

  @media (max-width: ${kr.tabletPortrait}px) {
    margin-top: 10px;
  }

  @media (min-width: ${kr.imac}px) {
    padding: 80px;
  }
`,uc=vr.h2`
  box-sizing: border-box;
  margin-top: 20px;
  @media (min-width: ${kr.tabletLandscape}px) {
    padding: 18px;
  }
`,cc=vr.label`
  margin-bottom: 1vh;
`,dc=vr.input`
  padding: 10px;
  margin-bottom: 2vh;

  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-weight: 300;
  box-sizing: border-box;

  @media (max-width: ${kr.tabletPortrait}px) {
    margin-bottom: 10px;
  }
`,fc=vr.textarea`
  padding: 10px;
  margin-bottom: 2vh;

  border: 1px solid #ccc;
  border-radius: 4px;
  height: 20vh;
  width: 100%;
  font-weight: 300;
  resize: none;
  box-sizing: border-box;
  @media (max-width: ${kr.tabletPortrait}px) {
    height: 15vh;
  }
`,pc=vr.button`
  padding: 10px 20px;
  background-color: rgb(239, 239, 239);
  color: ${br.background};

  border: none;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: ${br.highlight};
  }

  @media (max-width: ${kr.tabletPortrait}px) {
    padding: 1vh;
  }
`,hc=vr(Nr)`
  flex: 6;
  @media (max-width: ${kr.tabletPortrait}px) {
    flex: 1;
  }
`,mc=vr(Nr)`
  flex: 4;

  padding: 50px 20px;
  box-sizing: border-box;

  @media (max-width: ${kr.tabletPortrait}px) {
    padding: 2vh 3.5vh;
    flex: 1;
  }
`,gc=t=>{let{visible:n=!0,isContact:r=!0}=t;const[a,o]=(0,e.useState)(""),[i,l]=(0,e.useState)(""),[s,u]=(0,e.useState)(r?100:0),c=(0,e.useRef)(0),d=(0,e.useCallback)((e=>{u(n?t=>{let n=void 0!==t&&t>=0?t:0;return e.deltaY>0?(n+=5,n>100&&(n=100)):e.deltaY<0&&(n-=5,n<0&&(n=0)),n}:0)}),[n]),f=(0,e.useCallback)((e=>{c.current=e.touches[0].clientY}),[]),p=(0,e.useCallback)((e=>{if(!n)return void u(0);const t=e.touches[0].clientY,r=c.current-t;u((e=>{let t=void 0!==e&&e>=0?e:0;return r>0?(t+=5,t>100&&(t=100)):r<0&&(t-=5,t<0&&(t=0)),t})),c.current=t}),[n]);return(0,e.useEffect)((()=>(r||(window.addEventListener("wheel",d),window.addEventListener("touchstart",f),window.addEventListener("touchmove",p)),()=>{window.removeEventListener("wheel",d),window.removeEventListener("touchstart",f),window.removeEventListener("touchmove",p)})),[d,f,p,n]),(0,Pr.jsxs)(lc,{scrollPer:s,children:[(0,Pr.jsx)(hc,{children:(0,Pr.jsxs)(zr,{id:"visual",viewBox:"0 0 900 600",xmlns:"http://www.w3.org/2000/svg",version:"1.1",preserveAspectRatio:"none",children:[(0,Pr.jsx)("path",{d:"M0 217L25 196C50 175 100 133 150 126C200 119 250 147 300 174C350 201 400 227 450 239C500 251 550 249 600 228C650 207 700 167 750 153C800 139 850 151 875 157L900 163L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z",fill:"#a9dad6"}),(0,Pr.jsx)("path",{d:"M0 271L25 259C50 247 100 223 150 225C200 227 250 255 300 277C350 299 400 315 450 317C500 319 550 307 600 291C650 275 700 255 750 247C800 239 850 243 875 245L900 247L900 161L875 155C850 149 800 137 750 151C700 165 650 205 600 226C550 247 500 249 450 237C400 225 350 199 300 172C250 145 200 117 150 124C100 131 50 173 25 194L0 215Z",fill:"#95d2cc"}),(0,Pr.jsx)("path",{d:"M0 439L25 436C50 433 100 427 150 421C200 415 250 409 300 407C350 405 400 407 450 416C500 425 550 441 600 442C650 443 700 429 750 414C800 399 850 383 875 375L900 367L900 245L875 243C850 241 800 237 750 245C700 253 650 273 600 289C550 305 500 317 450 315C400 313 350 297 300 275C250 253 200 225 150 223C100 221 50 245 25 257L0 269Z",fill:"#81c9c1"}),(0,Pr.jsx)("path",{d:"M0 517L25 520C50 523 100 529 150 535C200 541 250 547 300 549C350 551 400 549 450 549C500 549 550 551 600 553C650 555 700 557 750 551C800 545 850 531 875 524L900 517L900 365L875 373C850 381 800 397 750 412C700 427 650 441 600 440C550 439 500 423 450 414C400 405 350 403 300 405C250 407 200 413 150 419C100 425 50 431 25 434L0 437Z",fill:"#6eafa8"}),(0,Pr.jsx)("path",{d:"M0 601L25 601C50 601 100 601 150 601C200 601 250 601 300 601C350 601 400 601 450 601C500 601 550 601 600 601C650 601 700 601 750 601C800 601 850 601 875 601L900 601L900 515L875 522C850 529 800 543 750 549C700 555 650 553 600 551C550 549 500 547 450 547C400 547 350 549 300 547C250 545 200 539 150 533C100 527 50 521 25 518L0 515Z",fill:"#5c968f"})]})}),(0,Pr.jsxs)(mc,{direction:"column",justify:"center",children:[(0,Pr.jsx)(uc,{children:"Let's surf with me!"}),(0,Pr.jsxs)(sc,{onSubmit:e=>{e.preventDefault();const t=`mailto:nwewave.32@gmail.com?subject=\ud83c\udf0aContact from ${encodeURIComponent(a)}&body=${encodeURIComponent(i)}`;window.location.href=t},children:[(0,Pr.jsx)(cc,{children:"Name"}),(0,Pr.jsx)(dc,{id:"name",type:"text",name:"name",required:!0,value:a,onChange:e=>o(e.target.value)}),(0,Pr.jsx)(cc,{children:"Message"}),(0,Pr.jsx)(fc,{id:"emailContent",name:"message",required:!0,value:i,onChange:e=>l(e.target.value)}),(0,Pr.jsx)(pc,{type:"submit",children:"Send"})]})]})]})},vc=vr.footer.withConfig({shouldForwardProp:e=>!["isHome"].includes(e)})`
  background-color: ${e=>{let{isHome:t}=e;return br.background}};
  overflow-y: hidden;
  padding: 20px 0 25px 0;
  text-align: center;
  p {
    z-index: 10;
    position: relative;
  }
`,yc=vr.div`
  margin-top: 10px;

  a {
    margin: 0 10px;
    text-decoration: none;
    position: relative;
    z-index: 10;

    &:hover {
      text-decoration: underline;
    }
  }
`,bc=t=>{let{}=t;const[n,r]=(0,e.useState)(!1),[a,o]=(0,e.useState)(!1),i=J(),l=(0,e.useRef)();return(0,e.useEffect)((()=>{"/contact"===i.pathname?r(!0):r(!1)}),[i]),(0,e.useEffect)((()=>{const e=new IntersectionObserver((e=>{let[t]=e;return o(t.isIntersecting)}),{threshold:1});return l.current&&e.observe(l.current),()=>{l.current&&e.unobserve(l.current)}}),[]),(0,Pr.jsxs)(Pr.Fragment,{children:[(0,Pr.jsxs)(vc,{isHome:"/"===i.pathname,children:[(0,Pr.jsx)("p",{children:"Copyright 2024. KIMHAMIN. All rights reserved."}),(0,Pr.jsxs)(yc,{ref:l,children:[(0,Pr.jsx)("a",{href:"https://github.com/nwewave32",children:"GitHub"}),(0,Pr.jsx)("a",{href:"https://linkedin.com/in/hamin-kim-6379472b1",children:"LinkedIn"})]})]}),a&&"/"===i.pathname&&(0,Pr.jsx)(Pr.Fragment,{children:(0,Pr.jsx)(gc,{visible:a,isContact:n})})]})},wc=yr`
  0% {
    top: 0px;
  }
  50% {
    top: -15px;
  }
  100% {
    top: 0px;
  }
`,xc=vr.span.attrs((e=>({style:{animationDelay:` ${e.delay}s`}}))).withConfig({shouldForwardProp:e=>!["delay"].includes(e)})`
  position: relative;
  display: inline-block;
  animation: ${wc} 1.3s ease infinite;
  font-size: 10vh;

  @media (max-width: ${kr.mobile}px) {
  font-size: 8vh;
  }
  
`,Sc=vr(Nr).withConfig({shouldForwardProp:e=>!["highlight","color"].includes(e)})`
  margin-bottom: 2rem;
  color: ${e=>{let{color:t}=e;return t}};
  border-bottom: ${e=>e.highlight?"2px solid":"none"};
  padding-bottom: 1px;
  box-sizing: border-box;
  font-size: 10vh;
  line-height: 1;
  @media (max-width: ${kr.mobile}px) {
    font-size: 8vh;
  }
`,Cc=t=>{let{text:n,highlight:r=!1,color:a=br.background}=t;const[o,i]=(0,e.useState)(!1),l=n.split("").map(((e,t)=>(0,Pr.jsx)(xc,{delay:.06*t,children:e},t))),s=()=>{i((e=>!e))};return(0,Pr.jsx)(Sc,{onMouseEnter:s,onMouseLeave:s,highlight:r,color:a,children:o?l:n})},kc=vr.div`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 101;
  cursor: pointer;
  display: flex;
  align-items: center;
  > img {
    width: 5vh;

    @media (min-width: ${kr.imac}px) {
      width: 6vh;
    }
  }
`,_c=vr.button`
  position: fixed;
  top: 20px;
  right: 45px;
  z-index: 101;
  border: none;

  @media (min-width: ${kr.imac}px) {
    top: 1.5vw;
    right: 4vw;
  }
`,Ec=vr.a`
  display: block;
  width: 28px;
  height: 16px;
  position: absolute;
  top: 0px;
  left: 0px;

  cursor: pointer;

  @media (min-width: ${kr.imac}px) {
    width: 2.5vw;
    height: 1.5vw;
  }
  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    height: 0;
    border-bottom: 4px solid ${br.accent};
    width: 100%;
    left: 0;
    right: 0;
    transition: all ease-out 0.3s;

    @media (min-width: ${kr.imac}px) {
      border-bottom: 0.3vw solid ${br.accent};
    }
  }

  &:after {
    top: 100%;
  }

  i {
    display: block;
    text-indent: 100%;
    overflow: hidden;
    white-space: nowrap;
    height: 4px;
    background-color: ${br.accent};
    width: 100%;
    position: absolute;
    top: 50%;
    transition: all ease-out 0.1s;

    @media (min-width: ${kr.imac}px) {
      height: 0.3vw;
    }
  }

  &.active-menu {
    &:after {
      transform: rotate(-45deg);
      transform-origin: center;
      top: 50%;
    }

    &:before {
      transform: rotate(45deg);
      transform-origin: center;
      top: 50%;
    }

    i {
      opacity: 0;
    }
  }
`,Pc=vr.div.withConfig({shouldForwardProp:e=>!["isOpen"].includes(e)})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${br.neutral};

  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${e=>{let{isOpen:t}=e;return t?"translateY(0)":"translateY(-100%)"}};
  opacity: ${e=>{let{isOpen:t}=e;return t?"1":"0"}};
  transition: transform 0.5s ease, opacity 0.5s ease;
  z-index: 100;
`,jc=vr.svg`
  width: 100vw;
  height: 100vh;
  will-change: transform;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 101;
  filter: drop-shadow(4px 5px 3px rgb(0 0 0 / 0.4));
`,Oc=vr.nav`
  width: 100%;
  height: 100vh;

  a,
  a > div {
    text-decoration: none;
    margin: 0 10px;

    color: ${br.base};
  }
`,Tc=vr(Nr)`
  padding: 50px;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 101;

  @media (max-width: ${kr.mobile}px) {
    padding: 20px;
  }
`,$c=vr(Ee)`
  box-sizing: border-box;
`,Nc=vr.div.withConfig({shouldForwardProp:e=>!["isSamePage"].includes(e)})`
  text-decoration: ${e=>e.isSamePage?"underline":"none"};
  width: min-content;
`,Rc=[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Work",path:"/works"},{title:"Contact",path:"/contact"}],zc=()=>{const[t,n]=(0,e.useState)(!1),r=te(),a=J();return(0,e.useEffect)((()=>{n(!1),window.scrollTo(0,0)}),[a]),(0,e.useEffect)((()=>{document.body.style.overflow=t?"hidden":"auto"}),[t]),(0,Pr.jsxs)(Pr.Fragment,{children:[(0,Pr.jsx)(kc,{onClick:()=>{r("/")},children:(0,Pr.jsx)(Or,{imgSrc:"wave.png",alt:"nwewave"})}),(0,Pr.jsx)(_c,{onClick:()=>{n(!t)},children:(0,Pr.jsx)(Ec,{className:t?"active-menu":"",children:(0,Pr.jsx)("i",{children:"Menu"})})}),(0,Pr.jsxs)(Pc,{isOpen:t,children:[(0,Pr.jsx)(jc,{viewBox:"0 0 1440 780",fill:"none",preserveAspectRatio:Ir.getWindowType("tabletPortrait")?"xMinYMin slice":"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Pr.jsx)("path",{d:"M391.76 206.372C398.561 257.577 422.989 333.816 564.264 307.142C623.961 295.87 672.971 246.349 725.851 192.917C798.112 119.9 877.602 39.5799 1001.47 39.5799C1020.03 39.5799 1045.16 44.9126 1072.57 50.73C1117.77 60.2253 1171.78 75.3692 1217.1 58.8446C1235.02 52.3131 1251.54 29.2773 1269.26 0H1440V757.5C1409.35 752.861 1330.28 742.392 1297.5 780H962.5C1253.14 611 992 438 927 557.5C901.437 604.497 858 780 629.5 780H0V0H234.397C255.086 12.6598 283.808 20.9856 336.62 15.677C379.328 15.677 422.989 38.5147 422.989 81.0731C422.989 99.9999 415.468 116.747 407.713 134.014C398.519 158.147 388.212 179.658 391.76 206.372Z",fill:br.base})}),(0,Pr.jsx)(Oc,{children:(0,Pr.jsx)(Tc,{direction:"column",justify:"space-evenly",children:Rc.map((e=>(0,Pr.jsx)($c,{to:e.path,children:(0,Pr.jsx)(Nc,{children:(0,Pr.jsx)(Cc,{highlight:e.path===a.pathname,text:e.title})})},e.title)))})})]})]})},Lc=vr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
  background-color: rgba(240, 120, 50, 0.2);
`,Fc=vr.div`
  position: relative;
  transition: transform 0.3s ease-out;
  transform: translateZ(${e=>e.depth}px)
    scale(${e=>e.scale});
  opacity: ${e=>e.opacity};
`,Mc=()=>{const t=(0,e.useRef)(),[n,r]=(0,e.useState)(0),a=()=>{if(t.current){const{top:e}=t.current.getBoundingClientRect();r(-e)}};(0,e.useEffect)((()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)})),[]);return(0,Pr.jsx)("div",{ref:t,children:(0,Pr.jsx)(Lc,{children:["cookie_or_death/cookie1.png","cookie_or_death/cookie2.png","cookie_or_death/cookie3.png","cookie_or_death/cookie4.png"].map(((e,t)=>{const{depth:r,scale:a,opacity:o}=(e=>{const t=100*e-200-n/5,r=Math.min(Math.max(1-t/500,.8),1),a=Math.min(Math.max(1-t/1e3,.5),1);return console.log("##",e,{depth:t,scale:r,opacity:a}),{depth:t,scale:r,opacity:a}})(t);return(0,Pr.jsx)(Fc,{depth:r,scale:a,opacity:o,children:(0,Pr.jsx)(bi,{children:(0,Pr.jsx)(Or,{imgSrc:e,alt:e,width:"100%",height:"auto"})})},t)}))})})},Ic=vr.main`
  flex: 1;
`,Dc=vr.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${br.background};
`,Ac=()=>(0,Pr.jsx)(Pr.Fragment,{children:(0,Pr.jsx)(Ce,{children:(0,Pr.jsxs)(Dc,{children:[(0,Pr.jsx)(zc,{}),(0,Pr.jsx)(Ic,{children:(0,Pr.jsxs)(ve,{children:[(0,Pr.jsx)(me,{exact:!0,path:"/",element:(0,Pr.jsx)(Xs,{})}),(0,Pr.jsx)(me,{path:"/about",element:(0,Pr.jsx)(bu,{})}),(0,Pr.jsx)(me,{path:"/works",element:(0,Pr.jsx)(rc,{}),children:(0,Pr.jsx)(me,{path:"/works/:id",element:(0,Pr.jsx)(rc,{})})}),(0,Pr.jsx)(me,{path:"/contact",element:(0,Pr.jsx)(gc,{})}),(0,Pr.jsx)(me,{path:"/test",element:(0,Pr.jsx)(Mc,{})})]})}),(0,Pr.jsx)(bc,{})]})})}),Uc=function(e){const t=function(e){const{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:a=!0}=e??{};let o=new vs;return t&&(function(e){return"boolean"===typeof e}(t)?o.push(kl):o.push(_l(t.extraArgument))),o},{reducer:n,middleware:r,devTools:a=!0,preloadedState:o,enhancers:i}=e||{};let l,s;if("function"===typeof n)l=n;else{if(!bl(n))throw new Error(Ns(1));l=xl(n)}s="function"===typeof r?r(t):t();let u=Sl;a&&(u=ms({trace:!1,..."object"===typeof a&&a}));const c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>(n,r)=>{const a=e(n,r);let o=()=>{throw new Error(ml(15))};const i={getState:a.getState,dispatch:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return o(e,...n)}},l=t.map((e=>e(i)));return o=Sl(...l)(a.dispatch),{...a,dispatch:o}}}(...s),d=Cs(c);return wl(l,o,u(..."function"===typeof i?i(d):d()))}({reducer:{project:Fs}});r.createRoot(document.getElementById("root")).render((0,Pr.jsx)(ul,{store:Uc,children:(0,Pr.jsx)(Ac,{})})),a()})()})();
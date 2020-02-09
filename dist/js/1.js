(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{180:function(e,t,n){"use strict";n(186)},186:function(ni,ri,ii){"use strict";(function(h){var C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(ri,"__esModule",{value:!0});var e,t=(e=ii(62))&&"object"===(void 0===e?"undefined":C(e))&&"default"in e?e.default:e,f=ii(53),E=ii(83),n=ii(121),r=ii(84),i=(o.prototype.set=function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),E.stringify(t))},o.prototype.get=function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:E.jsonEval(t)},o.prototype.remove=function(e){this.domStorage_.removeItem(this.prefixedName_(e))},o.prototype.prefixedName_=function(e){return this.prefix_+e},o.prototype.toString=function(){return this.domStorage_.toString()},o);function o(e){this.domStorage_=e,this.prefix_="firebase:"}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var s=(a.prototype.set=function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t},a.prototype.get=function(e){return E.contains(this.cache_,e)?this.cache_[e]:null},a.prototype.remove=function(e){delete this.cache_[e]},a);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a(){this.cache_={},this.isInMemoryStorage=!0}function l(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new i(t)}}catch(e){}return new s}function u(e){var t=E.stringToByteArray(e),n=new E.Sha1;n.update(t);var r=n.digest();return E.base64.encodeByteArray(r)}function c(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n="",r=0;r<e.length;r++){var i=e[r];Array.isArray(i)||i&&"object"===(void 0===i?"undefined":C(i))&&"number"==typeof i.length?n+=c.apply(null,i):"object"===(void 0===i?"undefined":C(i))?n+=E.stringify(i):n+=i,n+=" "}return n}function p(e,t){E.assert(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(R.logLevel=n.LogLevel.VERBOSE,x=R.log.bind(R),t&&P.set("logging_enabled",!0)):"function"==typeof e?x=e:(x=null,P.remove("logging_enabled"))}function d(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(!0===k&&(k=!1,null===x&&!0===P.get("logging_enabled")&&p(!0)),x){var n=c.apply(null,e);x(n)}}function _(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];d.apply(void 0,f.__spread([n],e))}}function y(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE INTERNAL ERROR: "+c.apply(void 0,f.__spread(e));R.error(n)}function v(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE FATAL ERROR: "+c.apply(void 0,f.__spread(e));throw R.error(n),new Error(n)}function g(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="FIREBASE WARNING: "+c.apply(void 0,f.__spread(e));R.warn(n)}function m(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)}function w(e,t){return e===t?0:e<t?-1:1}function T(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+E.stringify(t))}function b(e){if("object"!==(void 0===e?"undefined":C(e))||null===e)return E.stringify(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=E.stringify(t[i]),r+=":",r+=b(e[t[i]]);return r+="}"}function S(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)n<i+t?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r}var I,N=l("localStorage"),P=l("sessionStorage"),R=new n.Logger("@firebase/database"),D=(I=1,function(){return I++}),x=null,k=!0,O="[MIN_NAME]",F="[MAX_NAME]",A=function(e,t){if(e===t)return 0;if(e===O||t===F)return-1;if(t===O||e===F)return 1;var n=U(e),r=U(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null===r&&e<t?-1:1};function L(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}function M(e){var t,n,r,i,o;E.assert(!m(e),"Invalid JSON number"),0===e?t=1/e==-1/(r=n=0)?1:0:(t=e<0,r=(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,Math.round(e/Math.pow(2,-1074))));var s=[];for(o=52;o;--o)s.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;--o)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var a=s.join(""),h="";for(o=0;o<64;o+=8){var l=parseInt(a.substr(o,8),2).toString(16);1===l.length&&(l="0"+l),h+=l}return h.toLowerCase()}function W(e){try{e()}catch(t){setTimeout(function(){var e=t.stack||"";throw g("Exception was thrown by user callback.",e),t},Math.floor(0))}}function Q(e,t){var n=setTimeout(e,t);return"object"===(void 0===n?"undefined":C(n))&&n.unref&&n.unref(),n}var q=new RegExp("^-?(0*)\\d{1,10}$"),U=function(e){if(q.test(e)){var t=Number(e);if(-2147483648<=t&&t<=2147483647)return t}return null},V=(Object.defineProperty(H,"Empty",{get:function(){return new H("")},enumerable:!0,configurable:!0}),H.prototype.getFront=function(){return this.pieceNum_>=this.pieces_.length?null:this.pieces_[this.pieceNum_]},H.prototype.getLength=function(){return this.pieces_.length-this.pieceNum_},H.prototype.popFront=function(){var e=this.pieceNum_;return e<this.pieces_.length&&e++,new H(this.pieces_,e)},H.prototype.getBack=function(){return this.pieceNum_<this.pieces_.length?this.pieces_[this.pieces_.length-1]:null},H.prototype.toString=function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"},H.prototype.toUrlEncodedString=function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+encodeURIComponent(String(this.pieces_[t])));return e||"/"},H.prototype.slice=function(e){return void 0===e&&(e=0),this.pieces_.slice(this.pieceNum_+e)},H.prototype.parent=function(){if(this.pieceNum_>=this.pieces_.length)return null;for(var e=[],t=this.pieceNum_;t<this.pieces_.length-1;t++)e.push(this.pieces_[t]);return new H(e,0)},H.prototype.child=function(e){for(var t=[],n=this.pieceNum_;n<this.pieces_.length;n++)t.push(this.pieces_[n]);if(e instanceof H)for(n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{var r=e.split("/");for(n=0;n<r.length;n++)0<r[n].length&&t.push(r[n])}return new H(t,0)},H.prototype.isEmpty=function(){return this.pieceNum_>=this.pieces_.length},H.relativePath=function(e,t){var n=e.getFront(),r=t.getFront();if(null===n)return t;if(n===r)return H.relativePath(e.popFront(),t.popFront());throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")},H.comparePaths=function(e,t){for(var n=e.slice(),r=t.slice(),i=0;i<n.length&&i<r.length;i++){var o=A(n[i],r[i]);if(0!==o)return o}return n.length===r.length?0:n.length<r.length?-1:1},H.prototype.equals=function(e){if(this.getLength()!==e.getLength())return!1;for(var t=this.pieceNum_,n=e.pieceNum_;t<=this.pieces_.length;t++,n++)if(this.pieces_[t]!==e.pieces_[n])return!1;return!0},H.prototype.contains=function(e){var t=this.pieceNum_,n=e.pieceNum_;if(this.getLength()>e.getLength())return!1;for(;t<this.pieces_.length;){if(this.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0},H);function H(e,t){if(void 0===t){this.pieces_=e.split("/");for(var n=0,r=0;r<this.pieces_.length;r++)0<this.pieces_[r].length&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}var j=(Object.defineProperty(B,"MAX_PATH_DEPTH",{get:function(){return 32},enumerable:!0,configurable:!0}),Object.defineProperty(B,"MAX_PATH_LENGTH_BYTES",{get:function(){return 768},enumerable:!0,configurable:!0}),B.prototype.push=function(e){0<this.parts_.length&&(this.byteLength_+=1),this.parts_.push(e),this.byteLength_+=E.stringLength(e),this.checkValid_()},B.prototype.pop=function(){var e=this.parts_.pop();this.byteLength_-=E.stringLength(e),0<this.parts_.length&&--this.byteLength_},B.prototype.checkValid_=function(){if(this.byteLength_>B.MAX_PATH_LENGTH_BYTES)throw new Error(this.errorPrefix_+"has a key path longer than "+B.MAX_PATH_LENGTH_BYTES+" bytes ("+this.byteLength_+").");if(this.parts_.length>B.MAX_PATH_DEPTH)throw new Error(this.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+B.MAX_PATH_DEPTH+") or object contains a cycle "+this.toErrorString())},B.prototype.toErrorString=function(){return 0===this.parts_.length?"":"in property '"+this.parts_.join(".")+"'"},B);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){this.errorPrefix_=t,this.parts_=e.slice(),this.byteLength_=Math.max(1,this.parts_.length);for(var n=0;n<this.parts_.length;n++)this.byteLength_+=E.stringLength(this.parts_[n]);this.checkValid_()}var Y="5",K="firebaseio.com",z="websocket",G="long_polling",X=($.prototype.needsQueryParam=function(){return this.host!==this.internalHost||this.isCustomHost()||this.includeNamespaceInQueryParams},$.prototype.isCacheableHost=function(){return"s-"===this.internalHost.substr(0,2)},$.prototype.isDemoHost=function(){return"firebaseio-demo.com"===this.domain},$.prototype.isCustomHost=function(){return"firebaseio.com"!==this.domain&&"firebaseio-demo.com"!==this.domain},$.prototype.updateHost=function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&N.set("host:"+this.host,this.internalHost))},$.prototype.connectionURL=function(e,t){var n;if(E.assert("string"==typeof e,"typeof type must == string"),E.assert("object"===(void 0===t?"undefined":C(t)),"typeof params must == object"),e===z)n=(this.secure?"wss://":"ws://")+this.internalHost+"/.ws?";else{if(e!==G)throw new Error("Unknown connection type: "+e);n=(this.secure?"https://":"http://")+this.internalHost+"/.lp?"}this.needsQueryParam()&&(t.ns=this.namespace);var r=[];return L(t,function(e,t){r.push(e+"="+t)}),n+r.join("&")},$.prototype.toString=function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e},$.prototype.toURLString=function(){return(this.secure?"https://":"http://")+this.host},$);function $(e,t,n,r,i,o){void 0===i&&(i=""),void 0===o&&(o=!1),this.secure=t,this.namespace=n,this.webSocketOnly=r,this.persistenceKey=i,this.includeNamespaceInQueryParams=o,this.host=e.toLowerCase(),this.domain=this.host.substr(this.host.indexOf(".")+1),this.internalHost=N.get("host:"+e)||this.host}function J(e){var t=ue(e),n=t.namespace;"firebase"===t.domain&&v(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!==n||"localhost"===t.domain||v("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&g("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var r="ws"===t.scheme||"wss"===t.scheme;return{repoInfo:new X(t.host,t.secure,n,r,"",n!==t.subdomain),path:new V(t.pathString)}}function Z(e){return"string"==typeof e&&0!==e.length&&!ce.test(e)}function ee(e){return"string"==typeof e&&0!==e.length&&!pe.test(e)}function te(e){return null===e||"string"==typeof e||"number"==typeof e&&!m(e)||e&&"object"===(void 0===e?"undefined":C(e))&&E.contains(e,".sv")}function ne(e,t,n,r,i){i&&void 0===n||fe(E.errorPrefix(e,t,i),n,r)}function re(e,t,n,r,i){if(!i||void 0!==n){var o=E.errorPrefix(e,t,i);if(!n||"object"!==(void 0===n?"undefined":C(n))||Array.isArray(n))throw new Error(o+" must be an object containing the children to replace.");var s=[];L(n,function(e,t){var n=new V(e);if(fe(o,t,r.child(n)),".priority"===n.getBack()&&!te(t))throw new Error(o+"contains an invalid value for '"+n.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(n)}),function(e,t){var n,r;for(n=0;n<t.length;n++)for(var i=(r=t[n]).slice(),o=0;o<i.length;o++)if((".priority"!==i[o]||o!==i.length-1)&&!Z(i[o]))throw new Error(e+"contains an invalid key ("+i[o]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');t.sort(V.comparePaths);var s=null;for(n=0;n<t.length;n++){if(r=t[n],null!==s&&s.contains(r))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}}(o,s)}}function ie(e,t,n,r){if(!r||void 0!==n){if(m(n))throw new Error(E.errorPrefix(e,t,r)+"is "+n.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!te(n))throw new Error(E.errorPrefix(e,t,r)+"must be a valid Firebase priority (a string, finite number, server value, or null).")}}function oe(e,t,n,r){if(!r||void 0!==n)switch(n){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(E.errorPrefix(e,t,r)+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}function se(e,t,n,r){if(!(r&&void 0===n||Z(n)))throw new Error(E.errorPrefix(e,t,r)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')}function ae(e,t,n,r){if(!(r&&void 0===n||ee(n)))throw new Error(E.errorPrefix(e,t,r)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')}function he(e,t){if(".info"===t.getFront())throw new Error(e+" failed = Can't modify data under /.info/")}function le(e,t,n){var r,i=n.path.toString();if("string"!=typeof n.repoInfo.host||0===n.repoInfo.host.length||!Z(n.repoInfo.namespace)&&"localhost"!==n.repoInfo.host.split(":")[0]||0!==i.length&&(r=(r=i)&&r.replace(/^\/*\.info(\/|$)/,"/"),!ee(r)))throw new Error(E.errorPrefix(e,t,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')}var ue=function(e){var t="",n="",r="",i="",o="",s=!0,a="https",h=443;if("string"==typeof e){var l=e.indexOf("//");0<=l&&(a=e.substring(0,l-1),e=e.substring(l+2));var u=e.indexOf("/");-1===u&&(u=e.length);var c=e.indexOf("?");-1===c&&(c=e.length),t=e.substring(0,Math.min(u,c)),u<c&&(i=
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(0<n[r].length){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,c)));var p=function(e){var t,n,r={};"?"===e.charAt(0)&&(e=e.substring(1));try{for(var i=f.__values(e.split("&")),o=i.next();!o.done;o=i.next()){var s=o.value;if(0!==s.length){var a=s.split("=");2===a.length?r[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):g("Invalid query segment '"+s+"' in query '"+e+"'")}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}(e.substring(Math.min(e.length,c)));0<=(l=t.indexOf(":"))?(s="https"===a||"wss"===a,h=parseInt(t.substring(l+1),10)):l=e.length;var d=t.split(".");3===d.length?(n=d[1],o=r=d[0].toLowerCase()):2===d.length?n=d[0]:"localhost"===d[0].slice(0,l).toLowerCase()&&(n="localhost"),"ns"in p&&(o=p.ns)}return{host:t,port:h,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}},ce=/[\[\].#$\/\u0000-\u001F\u007F]/,pe=/[\[\].#$\u0000-\u001F\u007F]/,de=10485760,fe=function n(r,e,t){var i=t instanceof V?new j(t,r):t;if(void 0===e)throw new Error(r+"contains undefined "+i.toErrorString());if("function"==typeof e)throw new Error(r+"contains a function "+i.toErrorString()+" with contents = "+e.toString());if(m(e))throw new Error(r+"contains "+e.toString()+" "+i.toErrorString());if("string"==typeof e&&e.length>de/3&&E.stringLength(e)>de)throw new Error(r+"contains a string greater than "+de+" utf8 bytes "+i.toErrorString()+" ('"+e.substring(0,50)+"...')");if(e&&"object"===(void 0===e?"undefined":C(e))){var o=!1,s=!1;if(L(e,function(e,t){if(".value"===e)o=!0;else if(".priority"!==e&&".sv"!==e&&(s=!0,!Z(e)))throw new Error(r+" contains an invalid key ("+e+") "+i.toErrorString()+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');i.push(e),n(r,t,i),i.pop()}),o&&s)throw new Error(r+' contains ".value" child '+i.toErrorString()+" in addition to actual children.")}},_e=(ye.prototype.cancel=function(e){E.validateArgCount("OnDisconnect.cancel",0,1,arguments.length),E.validateCallback("OnDisconnect.cancel",1,e,!0);var t=new E.Deferred;return this.repo_.onDisconnectCancel(this.path_,t.wrapCallback(e)),t.promise},ye.prototype.remove=function(e){E.validateArgCount("OnDisconnect.remove",0,1,arguments.length),he("OnDisconnect.remove",this.path_),E.validateCallback("OnDisconnect.remove",1,e,!0);var t=new E.Deferred;return this.repo_.onDisconnectSet(this.path_,null,t.wrapCallback(e)),t.promise},ye.prototype.set=function(e,t){E.validateArgCount("OnDisconnect.set",1,2,arguments.length),he("OnDisconnect.set",this.path_),ne("OnDisconnect.set",1,e,this.path_,!1),E.validateCallback("OnDisconnect.set",2,t,!0);var n=new E.Deferred;return this.repo_.onDisconnectSet(this.path_,e,n.wrapCallback(t)),n.promise},ye.prototype.setWithPriority=function(e,t,n){E.validateArgCount("OnDisconnect.setWithPriority",2,3,arguments.length),he("OnDisconnect.setWithPriority",this.path_),ne("OnDisconnect.setWithPriority",1,e,this.path_,!1),ie("OnDisconnect.setWithPriority",2,t,!1),E.validateCallback("OnDisconnect.setWithPriority",3,n,!0);var r=new E.Deferred;return this.repo_.onDisconnectSetWithPriority(this.path_,e,t,r.wrapCallback(n)),r.promise},ye.prototype.update=function(e,t){if(E.validateArgCount("OnDisconnect.update",1,2,arguments.length),he("OnDisconnect.update",this.path_),Array.isArray(e)){for(var n={},r=0;r<e.length;++r)n[""+r]=e[r];e=n,g("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}re("OnDisconnect.update",1,e,this.path_,!1),E.validateCallback("OnDisconnect.update",2,t,!0);var i=new E.Deferred;return this.repo_.onDisconnectUpdate(this.path_,e,i.wrapCallback(t)),i.promise},ye);function ye(e,t){this.repo_=e,this.path_=t}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve=(ge.prototype.toJSON=function(){return E.validateArgCount("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},ge);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e,t){this.committed=e,this.snapshot=t}var me,Ce,Ee,we=(me="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ce=0,Ee=[],function(e){var t,n=e===Ce;Ce=e;var r=new Array(8);for(t=7;0<=t;t--)r[t]=me.charAt(e%64),e=Math.floor(e/64);E.assert(0===e,"Cannot push at time == 0");var i=r.join("");if(n){for(t=11;0<=t&&63===Ee[t];t--)Ee[t]=0;Ee[t]++}else for(t=0;t<12;t++)Ee[t]=Math.floor(64*Math.random());for(t=0;t<12;t++)i+=me.charAt(Ee[t]);return E.assert(20===i.length,"nextPushId: Length should be 20."),i}),Te=(be.Wrap=function(e,t){return new be(e,t)},be);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e,t){this.name=e,this.node=t}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,Ie=(Ne.prototype.getCompare=function(){return this.compare.bind(this)},Ne.prototype.indexedValueChanged=function(e,t){var n=new Te(O,e),r=new Te(O,t);return 0!==this.compare(n,r)},Ne.prototype.minPost=function(){return Te.MIN},Ne);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){}var Pe,Re=(Pe=Ie,f.__extends(De,Pe),Object.defineProperty(De,"__EMPTY_NODE",{get:function(){return Se},set:function(e){Se=e},enumerable:!0,configurable:!0}),De.prototype.compare=function(e,t){return A(e.name,t.name)},De.prototype.isDefinedOn=function(e){throw E.assertionError("KeyIndex.isDefinedOn not expected to be called.")},De.prototype.indexedValueChanged=function(e,t){return!1},De.prototype.minPost=function(){return Te.MIN},De.prototype.maxPost=function(){return new Te(F,Se)},De.prototype.makePost=function(e,t){return E.assert("string"==typeof e,"KeyIndex indexValue must always be a string."),new Te(e,Se)},De.prototype.toString=function(){return".key"},De);function De(){return null!==Pe&&Pe.apply(this,arguments)||this}var xe,ke=new Re;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e){return"number"==typeof e?"number:"+M(e):"string:"+e}function Fe(e){if(e.isLeafNode()){var t=e.val();E.assert("string"==typeof t||"number"==typeof t||"object"===(void 0===t?"undefined":C(t))&&E.contains(t,".sv"),"Priority must be a string or number.")}else E.assert(e===xe||e.isEmpty(),"priority of unexpected type.");E.assert(e===xe||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")}var Ae,Le,Me,We,Qe=(Object.defineProperty(qe,"__childrenNodeConstructor",{get:function(){return Ae},set:function(e){Ae=e},enumerable:!0,configurable:!0}),qe.prototype.isLeafNode=function(){return!0},qe.prototype.getPriority=function(){return this.priorityNode_},qe.prototype.updatePriority=function(e){return new qe(this.value_,e)},qe.prototype.getImmediateChild=function(e){return".priority"===e?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE},qe.prototype.getChild=function(e){return e.isEmpty()?this:".priority"===e.getFront()?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE},qe.prototype.hasChild=function(){return!1},qe.prototype.getPredecessorChildName=function(e,t){return null},qe.prototype.updateImmediateChild=function(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)},qe.prototype.updateChild=function(e,t){var n=e.getFront();return null===n?t:t.isEmpty()&&".priority"!==n?this:(E.assert(".priority"!==n||1===e.getLength(),".priority must be the last token in a path"),this.updateImmediateChild(n,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(e.popFront(),t)))},qe.prototype.isEmpty=function(){return!1},qe.prototype.numChildren=function(){return 0},qe.prototype.forEachChild=function(e,t){return!1},qe.prototype.val=function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},qe.prototype.hash=function(){if(null===this.lazyHash_){var e="";this.priorityNode_.isEmpty()||(e+="priority:"+Oe(this.priorityNode_.val())+":");var t=C(this.value_);e+=t+":",e+="number"===t?M(this.value_):this.value_,this.lazyHash_=u(e)}return this.lazyHash_},qe.prototype.getValue=function(){return this.value_},qe.prototype.compareTo=function(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(E.assert(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))},qe.prototype.compareToLeafNode_=function(e){var t=C(e.value_),n=C(this.value_),r=qe.VALUE_TYPE_ORDER.indexOf(t),i=qe.VALUE_TYPE_ORDER.indexOf(n);return E.assert(0<=r,"Unknown leaf type: "+t),E.assert(0<=i,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r},qe.prototype.withIndex=function(){return this},qe.prototype.isIndexed=function(){return!0},qe.prototype.equals=function(e){return e===this||!!e.isLeafNode()&&(this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_))},qe.VALUE_TYPE_ORDER=["object","boolean","number","string"],qe);function qe(e,t){void 0===t&&(t=qe.__childrenNodeConstructor.EMPTY_NODE),this.value_=e,this.priorityNode_=t,this.lazyHash_=null,E.assert(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Fe(this.priorityNode_)}function Ue(){return null!==We&&We.apply(this,arguments)||this}var Ve=new(We=Ie,f.__extends(Ue,We),Ue.prototype.compare=function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?A(e.name,t.name):i},Ue.prototype.isDefinedOn=function(e){return!e.getPriority().isEmpty()},Ue.prototype.indexedValueChanged=function(e,t){return!e.getPriority().equals(t.getPriority())},Ue.prototype.minPost=function(){return Te.MIN},Ue.prototype.maxPost=function(){return new Te(F,new Qe("[PRIORITY-POST]",Me))},Ue.prototype.makePost=function(e,t){var n=Le(e);return new Te(t,new Qe("[PRIORITY-POST]",n))},Ue.prototype.toString=function(){return".priority"},Ue),He=(je.prototype.getNext=function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e},je.prototype.hasNext=function(){return 0<this.nodeStack_.length},je.prototype.peek=function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}},je);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e,t,n,r,i){void 0===i&&(i=null),this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];for(var o=1;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}var Be=(Ye.prototype.copy=function(e,t,n,r,i){return new Ye(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)},Ye.prototype.count=function(){return this.left.count()+1+this.right.count()},Ye.prototype.isEmpty=function(){return!1},Ye.prototype.inorderTraversal=function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)},Ye.prototype.reverseTraversal=function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)},Ye.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},Ye.prototype.minKey=function(){return this.min_().key},Ye.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},Ye.prototype.insert=function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()},Ye.prototype.removeMin_=function(){if(this.left.isEmpty())return Ge.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()},Ye.prototype.remove=function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ge.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()},Ye.prototype.isRed_=function(){return this.color},Ye.prototype.fixUp_=function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e},Ye.prototype.moveRedLeft_=function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e},Ye.prototype.moveRedRight_=function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e},Ye.prototype.rotateLeft_=function(){var e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)},Ye.prototype.rotateRight_=function(){var e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)},Ye.prototype.colorFlip_=function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)},Ye.prototype.checkMaxDepth_=function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1},Ye.prototype.check_=function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)},Ye.RED=!0,Ye.BLACK=!1,Ye);function Ye(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ye.RED,this.left=null!=r?r:Ge.EMPTY_NODE,this.right=null!=i?i:Ge.EMPTY_NODE}var Ke=(ze.prototype.copy=function(e,t,n,r,i){return this},ze.prototype.insert=function(e,t,n){return new Be(e,t,null)},ze.prototype.remove=function(e,t){return this},ze.prototype.count=function(){return 0},ze.prototype.isEmpty=function(){return!0},ze.prototype.inorderTraversal=function(e){return!1},ze.prototype.reverseTraversal=function(e){return!1},ze.prototype.minKey=function(){return null},ze.prototype.maxKey=function(){return null},ze.prototype.check_=function(){return 0},ze.prototype.isRed_=function(){return!1},ze);function ze(){}var Ge=(Xe.prototype.insert=function(e,t){return new Xe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Be.BLACK,null,null))},Xe.prototype.remove=function(e){return new Xe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Be.BLACK,null,null))},Xe.prototype.get=function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:0<t&&(n=n.right)}return null},Xe.prototype.getPredecessorKey=function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:0<t&&(n=(r=n).right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},Xe.prototype.isEmpty=function(){return this.root_.isEmpty()},Xe.prototype.count=function(){return this.root_.count()},Xe.prototype.minKey=function(){return this.root_.minKey()},Xe.prototype.maxKey=function(){return this.root_.maxKey()},Xe.prototype.inorderTraversal=function(e){return this.root_.inorderTraversal(e)},Xe.prototype.reverseTraversal=function(e){return this.root_.reverseTraversal(e)},Xe.prototype.getIterator=function(e){return new He(this.root_,null,this.comparator_,!1,e)},Xe.prototype.getIteratorFrom=function(e,t){return new He(this.root_,e,this.comparator_,!1,t)},Xe.prototype.getReverseIteratorFrom=function(e,t){return new He(this.root_,e,this.comparator_,!0,t)},Xe.prototype.getReverseIterator=function(e){return new He(this.root_,null,this.comparator_,!0,e)},Xe.EMPTY_NODE=new Ke,Xe);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e,t){void 0===t&&(t=Xe.EMPTY_NODE),this.comparator_=e,this.root_=t}var $e=Math.log(2),Je=(Ze.prototype.nextBitIsOne=function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e},Ze);function Ze(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/$e,10)),this.current_=this.count-1;var n,r=(n=this.count,parseInt(Array(n+1).join("1"),2));this.bits_=e+1&r}var et,tt,nt=function(l,e,u,t){l.sort(e);var n=function(e){for(var t=null,n=null,a=l.length,r=function(e,t){var n=a-e,r=a;a-=e;var i=function e(t,n){var r,i,o=n-t;if(0==o)return null;if(1==o)return r=l[t],i=u?u(r):r,new Be(i,r.node,Be.BLACK,null,null);var s=parseInt(o/2,10)+t,a=e(t,s),h=e(s+1,n);return r=l[s],i=u?u(r):r,new Be(i,r.node,Be.BLACK,a,h)}(1+n,r),o=l[n],s=u?u(o):o;h(new Be(s,o.node,t,null,i))},h=function(e){t=t?t.left=e:n=e},i=0;i<e.count;++i){var o=e.nextBitIsOne(),s=Math.pow(2,e.count-(i+1));o?r(s,Be.BLACK):(r(s,Be.BLACK),r(s,Be.RED))}return n}(new Je(l.length));return new Ge(t||e,n)},rt={},it=(Object.defineProperty(ot,"Default",{get:function(){return E.assert(Ve,"ChildrenNode.ts has not been loaded"),et=et||new ot({".priority":rt},{".priority":Ve})},enumerable:!0,configurable:!0}),ot.prototype.get=function(e){var t=E.safeGet(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ge?t:null},ot.prototype.hasIndex=function(e){return E.contains(this.indexSet_,e.toString())},ot.prototype.addIndex=function(e,t){E.assert(e!==ke,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var n,r=[],i=!1,o=t.getIterator(Te.Wrap),s=o.getNext();s;)i=i||e.isDefinedOn(s.node),r.push(s),s=o.getNext();n=i?nt(r,e.getCompare()):rt;var a=e.toString(),h=f.__assign({},this.indexSet_);h[a]=e;var l=f.__assign({},this.indexes_);return l[a]=n,new ot(l,h)},ot.prototype.addToIndexes=function(h,l){var u=this;return new ot(E.map(this.indexes_,function(e,t){var n=E.safeGet(u.indexSet_,t);if(E.assert(n,"Missing index implementation for "+t),e===rt){if(n.isDefinedOn(h.node)){for(var r=[],i=l.getIterator(Te.Wrap),o=i.getNext();o;)o.name!==h.name&&r.push(o),o=i.getNext();return r.push(h),nt(r,n.getCompare())}return rt}var s=l.get(h.name),a=e;return s&&(a=a.remove(new Te(h.name,s))),a.insert(h,h.node)}),this.indexSet_)},ot.prototype.removeFromIndexes=function(n,r){return new ot(E.map(this.indexes_,function(e){if(e===rt)return e;var t=r.get(n.name);return t?e.remove(new Te(n.name,t)):e}),this.indexSet_)},ot);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e,t){this.indexes_=e,this.indexSet_=t}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e,t){return A(e.name,t.name)}function at(e,t){return A(e,t)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,lt=(Object.defineProperty(ut,"EMPTY_NODE",{get:function(){return tt=tt||new ut(new Ge(at),null,it.Default)},enumerable:!0,configurable:!0}),ut.prototype.isLeafNode=function(){return!1},ut.prototype.getPriority=function(){return this.priorityNode_||tt},ut.prototype.updatePriority=function(e){return this.children_.isEmpty()?this:new ut(this.children_,e,this.indexMap_)},ut.prototype.getImmediateChild=function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?tt:t},ut.prototype.getChild=function(e){var t=e.getFront();return null===t?this:this.getImmediateChild(t).getChild(e.popFront())},ut.prototype.hasChild=function(e){return null!==this.children_.get(e)},ut.prototype.updateImmediateChild=function(e,t){if(E.assert(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);var n=new Te(e,t),r=void 0,i=void 0;i=t.isEmpty()?(r=this.children_.remove(e),this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),this.indexMap_.addToIndexes(n,this.children_));var o=r.isEmpty()?tt:this.priorityNode_;return new ut(r,o,i)},ut.prototype.updateChild=function(e,t){var n=e.getFront();if(null===n)return t;E.assert(".priority"!==e.getFront()||1===e.getLength(),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(e.popFront(),t);return this.updateImmediateChild(n,r)},ut.prototype.isEmpty=function(){return this.children_.isEmpty()},ut.prototype.numChildren=function(){return this.children_.count()},ut.prototype.val=function(n){if(this.isEmpty())return null;var r={},i=0,o=0,s=!0;if(this.forEachChild(Ve,function(e,t){r[e]=t.val(n),i++,s&&ut.INTEGER_REGEXP_.test(e)?o=Math.max(o,Number(e)):s=!1}),!n&&s&&o<2*i){var e=[];for(var t in r)e[t]=r[t];return e}return n&&!this.getPriority().isEmpty()&&(r[".priority"]=this.getPriority().val()),r},ut.prototype.hash=function(){if(null===this.lazyHash_){var r="";this.getPriority().isEmpty()||(r+="priority:"+Oe(this.getPriority().val())+":"),this.forEachChild(Ve,function(e,t){var n=t.hash();""!==n&&(r+=":"+e+":"+n)}),this.lazyHash_=""===r?"":u(r)}return this.lazyHash_},ut.prototype.getPredecessorChildName=function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new Te(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)},ut.prototype.getFirstChildName=function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()},ut.prototype.getFirstChild=function(e){var t=this.getFirstChildName(e);return t?new Te(t,this.children_.get(t)):null},ut.prototype.getLastChildName=function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()},ut.prototype.getLastChild=function(e){var t=this.getLastChildName(e);return t?new Te(t,this.children_.get(t)):null},ut.prototype.forEachChild=function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal(function(e){return t(e.name,e.node)}):this.children_.inorderTraversal(t)},ut.prototype.getIterator=function(e){return this.getIteratorFrom(e.minPost(),e)},ut.prototype.getIteratorFrom=function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,function(e){return e});for(var r=this.children_.getIteratorFrom(e.name,Te.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r},ut.prototype.getReverseIterator=function(e){return this.getReverseIteratorFrom(e.maxPost(),e)},ut.prototype.getReverseIteratorFrom=function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,function(e){return e});for(var r=this.children_.getReverseIteratorFrom(e.name,Te.Wrap),i=r.peek();null!=i&&0<t.compare(i,e);)r.getNext(),i=r.peek();return r},ut.prototype.compareTo=function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pt?-1:0},ut.prototype.withIndex=function(e){if(e===ke||this.indexMap_.hasIndex(e))return this;var t=this.indexMap_.addIndex(e,this.children_);return new ut(this.children_,this.priorityNode_,t)},ut.prototype.isIndexed=function(e){return e===ke||this.indexMap_.hasIndex(e)},ut.prototype.equals=function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()!==t.children_.count())return!1;for(var n=this.getIterator(Ve),r=t.getIterator(Ve),i=n.getNext(),o=r.getNext();i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1},ut.prototype.resolveIndex_=function(e){return e===ke?null:this.indexMap_.get(e.toString())},ut.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,ut);function ut(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Fe(this.priorityNode_),this.children_.isEmpty()&&E.assert(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}function ct(){return ht.call(this,new Ge(at),lt.EMPTY_NODE,it.Default)||this}var pt=new(ht=lt,f.__extends(ct,ht),ct.prototype.compareTo=function(e){return e===this?0:1},ct.prototype.equals=function(e){return e===this},ct.prototype.getPriority=function(){return this},ct.prototype.getImmediateChild=function(e){return lt.EMPTY_NODE},ct.prototype.isEmpty=function(){return!1},ct);Object.defineProperties(Te,{MIN:{value:new Te(O,lt.EMPTY_NODE)},MAX:{value:new Te(F,pt)}}),Re.__EMPTY_NODE=lt.EMPTY_NODE,Qe.__childrenNodeConstructor=lt,xe=pt,Me=pt;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,ft=!0;function _t(r,e){if(void 0===e&&(e=null),null===r)return lt.EMPTY_NODE;if("object"===(void 0===r?"undefined":C(r))&&".priority"in r&&(e=r[".priority"]),E.assert(null===e||"string"==typeof e||"number"==typeof e||"object"===(void 0===e?"undefined":C(e))&&".sv"in e,"Invalid priority type found: "+(void 0===e?"undefined":C(e))),"object"===(void 0===r?"undefined":C(r))&&".value"in r&&null!==r[".value"]&&(r=r[".value"]),"object"!==(void 0===r?"undefined":C(r))||".sv"in r)return new Qe(r,_t(e));if(r instanceof Array||!ft){var i=lt.EMPTY_NODE;return L(r,function(e,t){if(E.contains(r,e)&&"."!==e.substring(0,1)){var n=_t(t);!n.isLeafNode()&&n.isEmpty()||(i=i.updateImmediateChild(e,n))}}),i.updatePriority(_t(e))}var o=[],s=!1;if(L(r,function(e,t){if("."!==e.substring(0,1)){var n=_t(t);n.isEmpty()||(s=s||!n.getPriority().isEmpty(),o.push(new Te(e,n)))}}),0===o.length)return lt.EMPTY_NODE;var t=nt(o,st,function(e){return e.name},at);if(s){var n=nt(o,Ve.getCompare());return new lt(t,_t(e),new it({".priority":n},{".priority":Ve}))}return new lt(t,_t(e),it.Default)}function yt(){return null!==dt&&dt.apply(this,arguments)||this}Le=_t;var vt,gt=new(dt=Ie,f.__extends(yt,dt),yt.prototype.compare=function(e,t){var n=e.node.compareTo(t.node);return 0===n?A(e.name,t.name):n},yt.prototype.isDefinedOn=function(e){return!0},yt.prototype.indexedValueChanged=function(e,t){return!e.equals(t)},yt.prototype.minPost=function(){return Te.MIN},yt.prototype.maxPost=function(){return Te.MAX},yt.prototype.makePost=function(e,t){var n=_t(e);return new Te(t,n)},yt.prototype.toString=function(){return".value"},yt),mt=(vt=Ie,f.__extends(Ct,vt),Ct.prototype.extractChild=function(e){return e.getChild(this.indexPath_)},Ct.prototype.isDefinedOn=function(e){return!e.getChild(this.indexPath_).isEmpty()},Ct.prototype.compare=function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?A(e.name,t.name):i},Ct.prototype.makePost=function(e,t){var n=_t(e),r=lt.EMPTY_NODE.updateChild(this.indexPath_,n);return new Te(t,r)},Ct.prototype.maxPost=function(){var e=lt.EMPTY_NODE.updateChild(this.indexPath_,pt);return new Te(F,e)},Ct.prototype.toString=function(){return this.indexPath_.slice().join("/")},Ct);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){var t=vt.call(this)||this;return t.indexPath_=e,E.assert(!e.isEmpty()&&".priority"!==e.getFront(),"Can't create PathIndex with empty path or .priority key"),t}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et=(wt.prototype.val=function(){return E.validateArgCount("DataSnapshot.val",0,0,arguments.length),this.node_.val()},wt.prototype.exportVal=function(){return E.validateArgCount("DataSnapshot.exportVal",0,0,arguments.length),this.node_.val(!0)},wt.prototype.toJSON=function(){return E.validateArgCount("DataSnapshot.toJSON",0,1,arguments.length),this.exportVal()},wt.prototype.exists=function(){return E.validateArgCount("DataSnapshot.exists",0,0,arguments.length),!this.node_.isEmpty()},wt.prototype.child=function(e){E.validateArgCount("DataSnapshot.child",0,1,arguments.length),e=String(e),ae("DataSnapshot.child",1,e,!1);var t=new V(e),n=this.ref_.child(t);return new wt(this.node_.getChild(t),n,Ve)},wt.prototype.hasChild=function(e){E.validateArgCount("DataSnapshot.hasChild",1,1,arguments.length),ae("DataSnapshot.hasChild",1,e,!1);var t=new V(e);return!this.node_.getChild(t).isEmpty()},wt.prototype.getPriority=function(){return E.validateArgCount("DataSnapshot.getPriority",0,0,arguments.length),this.node_.getPriority().val()},wt.prototype.forEach=function(n){var r=this;return E.validateArgCount("DataSnapshot.forEach",1,1,arguments.length),E.validateCallback("DataSnapshot.forEach",1,n,!1),!this.node_.isLeafNode()&&!!this.node_.forEachChild(this.index_,function(e,t){return n(new wt(t,r.ref_.child(e),Ve))})},wt.prototype.hasChildren=function(){return E.validateArgCount("DataSnapshot.hasChildren",0,0,arguments.length),!this.node_.isLeafNode()&&!this.node_.isEmpty()},Object.defineProperty(wt.prototype,"key",{get:function(){return this.ref_.getKey()},enumerable:!0,configurable:!0}),wt.prototype.numChildren=function(){return E.validateArgCount("DataSnapshot.numChildren",0,0,arguments.length),this.node_.numChildren()},wt.prototype.getRef=function(){return E.validateArgCount("DataSnapshot.ref",0,0,arguments.length),this.ref_},Object.defineProperty(wt.prototype,"ref",{get:function(){return this.getRef()},enumerable:!0,configurable:!0}),wt);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e,t,n){this.node_=e,this.ref_=t,this.index_=n}var Tt=(bt.prototype.getPath=function(){var e=this.snapshot.getRef();return"value"===this.eventType?e.path:e.getParent().path},bt.prototype.getEventType=function(){return this.eventType},bt.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},bt.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+E.stringify(this.snapshot.exportVal())},bt);function bt(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}var St=(It.prototype.getPath=function(){return this.path},It.prototype.getEventType=function(){return"cancel"},It.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},It.prototype.toString=function(){return this.path.toString()+":cancel"},It);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}var Nt=(Pt.prototype.respondsTo=function(e){return"value"===e},Pt.prototype.createEvent=function(e,t){var n=t.getQueryParams().getIndex();return new Tt("value",this,new Et(e.snapshotNode,t.getRef(),n))},Pt.prototype.getEventRunner=function(e){var t=this.context_;if("cancel"===e.getEventType()){E.assert(this.cancelCallback_,"Raising a cancel event on a listener with no cancel callback");var n=this.cancelCallback_;return function(){n.call(t,e.error)}}var r=this.callback_;return function(){r.call(t,e.snapshot)}},Pt.prototype.createCancelEvent=function(e,t){return this.cancelCallback_?new St(this,e,t):null},Pt.prototype.matches=function(e){return e instanceof Pt&&(!e.callback_||!this.callback_||e.callback_===this.callback_&&e.context_===this.context_)},Pt.prototype.hasAnyCallback=function(){return null!==this.callback_},Pt);function Pt(e,t,n){this.callback_=e,this.cancelCallback_=t,this.context_=n}var Rt,Dt=(xt.prototype.respondsTo=function(e){var t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,E.contains(this.callbacks_,t)},xt.prototype.createCancelEvent=function(e,t){return this.cancelCallback_?new St(this,e,t):null},xt.prototype.createEvent=function(e,t){E.assert(null!=e.childName,"Child events should have a childName.");var n=t.getRef().child(e.childName),r=t.getQueryParams().getIndex();return new Tt(e.type,this,new Et(e.snapshotNode,n,r),e.prevName)},xt.prototype.getEventRunner=function(e){var t=this.context_;if("cancel"===e.getEventType()){E.assert(this.cancelCallback_,"Raising a cancel event on a listener with no cancel callback");var n=this.cancelCallback_;return function(){n.call(t,e.error)}}var r=this.callbacks_[e.eventType];return function(){r.call(t,e.snapshot,e.prevName)}},xt.prototype.matches=function(t){var n=this;if(t instanceof xt){if(!this.callbacks_||!t.callbacks_)return!0;if(this.context_===t.context_){var e=Object.keys(t.callbacks_),r=Object.keys(this.callbacks_),i=e.length;if(i===r.length){if(1!==i)return r.every(function(e){return t.callbacks_[e]===n.callbacks_[e]});var o=e[0],s=r[0];return!(s!==o||t.callbacks_[o]&&this.callbacks_[s]&&t.callbacks_[o]!==this.callbacks_[s])}}}return!1},xt.prototype.hasAnyCallback=function(){return null!==this.callbacks_},xt);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e,t,n){this.callbacks_=e,this.cancelCallback_=t,this.context_=n}var kt=(Object.defineProperty(Ot,"__referenceConstructor",{get:function(){return E.assert(Rt,"Reference.ts has not been loaded"),Rt},set:function(e){Rt=e},enumerable:!0,configurable:!0}),Ot.validateQueryEndpoints_=function(e){var t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===ke){var r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==O)throw new Error(r);if("string"!=typeof t)throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==F)throw new Error(r);if("string"!=typeof n)throw new Error(i)}}else if(e.getIndex()===Ve){if(null!=t&&!te(t)||null!=n&&!te(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(E.assert(e.getIndex()instanceof mt||e.getIndex()===gt,"unknown index type."),null!=t&&"object"===(void 0===t?"undefined":C(t))||null!=n&&"object"===(void 0===n?"undefined":C(n)))throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")},Ot.validateLimit_=function(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")},Ot.prototype.validateNoPreviousOrderByCall_=function(e){if(!0===this.orderByCalled_)throw new Error(e+": You can't combine multiple orderBy calls.")},Ot.prototype.getQueryParams=function(){return this.queryParams_},Ot.prototype.getRef=function(){return E.validateArgCount("Query.ref",0,0,arguments.length),new Ot.__referenceConstructor(this.repo,this.path)},Ot.prototype.on=function(e,t,n,r){E.validateArgCount("Query.on",2,4,arguments.length),oe("Query.on",1,e,!1),E.validateCallback("Query.on",2,t,!1);var i=Ot.getCancelAndContextArgs_("Query.on",n,r);if("value"===e)this.onValueEvent(t,i.cancel,i.context);else{var o={};o[e]=t,this.onChildEvent(o,i.cancel,i.context)}return t},Ot.prototype.onValueEvent=function(e,t,n){var r=new Nt(e,t||null,n||null);this.repo.addEventCallbackForQuery(this,r)},Ot.prototype.onChildEvent=function(e,t,n){var r=new Dt(e,t,n);this.repo.addEventCallbackForQuery(this,r)},Ot.prototype.off=function(e,t,n){E.validateArgCount("Query.off",0,3,arguments.length),oe("Query.off",1,e,!0),E.validateCallback("Query.off",2,t,!0),E.validateContextObject("Query.off",3,n,!0);var r=null,i=null;"value"===e?r=new Nt(t||null,null,n||null):e&&(t&&((i={})[e]=t),r=new Dt(i,null,n||null)),this.repo.removeEventCallbackForQuery(this,r)},Ot.prototype.once=function(t,n,e,r){var i=this;E.validateArgCount("Query.once",1,4,arguments.length),oe("Query.once",1,t,!1),E.validateCallback("Query.once",2,n,!0);var o=Ot.getCancelAndContextArgs_("Query.once",e,r),s=!0,a=new E.Deferred;function h(e){s&&(s=!1,i.off(t,h),n&&n.bind(o.context)(e),a.resolve(e))}return a.promise.catch(function(){}),this.on(t,h,function(e){i.off(t,h),o.cancel&&o.cancel.bind(o.context)(e),a.reject(e)}),a.promise},Ot.prototype.limitToFirst=function(e){if(E.validateArgCount("Query.limitToFirst",1,1,arguments.length),"number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("Query.limitToFirst: First argument must be a positive integer.");if(this.queryParams_.hasLimit())throw new Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Ot(this.repo,this.path,this.queryParams_.limitToFirst(e),this.orderByCalled_)},Ot.prototype.limitToLast=function(e){if(E.validateArgCount("Query.limitToLast",1,1,arguments.length),"number"!=typeof e||Math.floor(e)!==e||e<=0)throw new Error("Query.limitToLast: First argument must be a positive integer.");if(this.queryParams_.hasLimit())throw new Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Ot(this.repo,this.path,this.queryParams_.limitToLast(e),this.orderByCalled_)},Ot.prototype.orderByChild=function(e){if(E.validateArgCount("Query.orderByChild",1,1,arguments.length),"$key"===e)throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===e)throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===e)throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');ae("Query.orderByChild",1,e,!1),this.validateNoPreviousOrderByCall_("Query.orderByChild");var t=new V(e);if(t.isEmpty())throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");var n=new mt(t),r=this.queryParams_.orderBy(n);return Ot.validateQueryEndpoints_(r),new Ot(this.repo,this.path,r,!0)},Ot.prototype.orderByKey=function(){E.validateArgCount("Query.orderByKey",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByKey");var e=this.queryParams_.orderBy(ke);return Ot.validateQueryEndpoints_(e),new Ot(this.repo,this.path,e,!0)},Ot.prototype.orderByPriority=function(){E.validateArgCount("Query.orderByPriority",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByPriority");var e=this.queryParams_.orderBy(Ve);return Ot.validateQueryEndpoints_(e),new Ot(this.repo,this.path,e,!0)},Ot.prototype.orderByValue=function(){E.validateArgCount("Query.orderByValue",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByValue");var e=this.queryParams_.orderBy(gt);return Ot.validateQueryEndpoints_(e),new Ot(this.repo,this.path,e,!0)},Ot.prototype.startAt=function(e,t){void 0===e&&(e=null),E.validateArgCount("Query.startAt",0,2,arguments.length),ne("Query.startAt",1,e,this.path,!0),se("Query.startAt",2,t,!0);var n=this.queryParams_.startAt(e,t);if(Ot.validateLimit_(n),Ot.validateQueryEndpoints_(n),this.queryParams_.hasStart())throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");return void 0===e&&(t=e=null),new Ot(this.repo,this.path,n,this.orderByCalled_)},Ot.prototype.endAt=function(e,t){void 0===e&&(e=null),E.validateArgCount("Query.endAt",0,2,arguments.length),ne("Query.endAt",1,e,this.path,!0),se("Query.endAt",2,t,!0);var n=this.queryParams_.endAt(e,t);if(Ot.validateLimit_(n),Ot.validateQueryEndpoints_(n),this.queryParams_.hasEnd())throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new Ot(this.repo,this.path,n,this.orderByCalled_)},Ot.prototype.equalTo=function(e,t){if(E.validateArgCount("Query.equalTo",1,2,arguments.length),ne("Query.equalTo",1,e,this.path,!1),se("Query.equalTo",2,t,!0),this.queryParams_.hasStart())throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");if(this.queryParams_.hasEnd())throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.startAt(e,t).endAt(e,t)},Ot.prototype.toString=function(){return E.validateArgCount("Query.toString",0,0,arguments.length),this.repo.toString()+this.path.toUrlEncodedString()},Ot.prototype.toJSON=function(){return E.validateArgCount("Query.toJSON",0,1,arguments.length),this.toString()},Ot.prototype.queryObject=function(){return this.queryParams_.getQueryObject()},Ot.prototype.queryIdentifier=function(){var e=this.queryObject(),t=b(e);return"{}"===t?"default":t},Ot.prototype.isEqual=function(e){if(E.validateArgCount("Query.isEqual",1,1,arguments.length),!(e instanceof Ot))throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");var t=this.repo===e.repo,n=this.path.equals(e.path),r=this.queryIdentifier()===e.queryIdentifier();return t&&n&&r},Ot.getCancelAndContextArgs_=function(e,t,n){var r={cancel:null,context:null};if(t&&n)r.cancel=t,E.validateCallback(e,3,r.cancel,!0),r.context=n,E.validateContextObject(e,4,r.context,!0);else if(t)if("object"===(void 0===t?"undefined":C(t))&&null!==t)r.context=t;else{if("function"!=typeof t)throw new Error(E.errorPrefix(e,3,!0)+" must either be a cancel callback or a context object.");r.cancel=t}return r},Object.defineProperty(Ot.prototype,"ref",{get:function(){return this.getRef()},enumerable:!0,configurable:!0}),Ot);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e,t,n,r){this.repo=e,this.path=t,this.queryParams_=n,this.orderByCalled_=r}var Ft=(At.prototype.find=function(e){if(null!=this.value)return this.value.getChild(e);if(!e.isEmpty()&&0<this.children.size){var t=e.getFront();return e=e.popFront(),this.children.has(t)?this.children.get(t).find(e):null}return null},At.prototype.remember=function(e,t){if(e.isEmpty())this.value=t,this.children.clear();else if(null!==this.value)this.value=this.value.updateChild(e,t);else{var n=e.getFront();this.children.has(n)||this.children.set(n,new At);var r=this.children.get(n);e=e.popFront(),r.remember(e,t)}},At.prototype.forget=function(e){if(e.isEmpty())return this.value=null,this.children.clear(),!0;if(null!==this.value){if(this.value.isLeafNode())return!1;var t=this.value;this.value=null;var n=this;return t.forEachChild(Ve,function(e,t){n.remember(new V(e),t)}),this.forget(e)}if(0<this.children.size){var r=e.getFront();return e=e.popFront(),!this.children.has(r)||this.children.get(r).forget(e)&&this.children.delete(r),0===this.children.size}return!0},At.prototype.forEachTree=function(r,i){null!==this.value?i(r,this.value):this.forEachChild(function(e,t){var n=new V(r.toString()+"/"+e);t.forEachTree(n,i)})},At.prototype.forEachChild=function(n){this.children.forEach(function(e,t){n(t,e)})},At);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){this.value=null,this.children=new Map}function Lt(e,t){return e&&"object"===(void 0===e?"undefined":C(e))?(E.assert(".sv"in e,"Unexpected leaf node or priority contents"),t[e[".sv"]]):e}var Mt,Wt,Qt=function r(e,i){var o,t=e.getPriority().val(),n=Lt(t,i);if(e.isLeafNode()){var s=e,a=Lt(s.getValue(),i);return a!==s.getValue()||n!==s.getPriority().val()?new Qe(a,_t(n)):e}var h=e;return n!==(o=h).getPriority().val()&&(o=o.updatePriority(new Qe(n))),h.forEachChild(Ve,function(e,t){var n=r(t,i);n!==t&&(o=o.updateImmediateChild(e,n))}),o};(Wt=Mt=Mt||{})[Wt.OVERWRITE=0]="OVERWRITE",Wt[Wt.MERGE=1]="MERGE",Wt[Wt.ACK_USER_WRITE=2]="ACK_USER_WRITE",Wt[Wt.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var qt=(Ut.User=new Ut(!0,!1,null,!1),Ut.Server=new Ut(!1,!0,null,!1),Ut.forServerTaggedQuery=function(e){return new Ut(!1,!0,e,!0)},Ut);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t,n,r){this.fromUser=e,this.fromServer=t,this.queryId=n,this.tagged=r,E.assert(!r||t,"Tagged queries must be from server.")}var Vt,Ht=(jt.prototype.operationForChild=function(e){if(this.path.isEmpty()){if(null!=this.affectedTree.value)return E.assert(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var t=this.affectedTree.subtree(new V(e));return new jt(V.Empty,t,this.revert)}return E.assert(this.path.getFront()===e,"operationForChild called for unrelated child."),new jt(this.path.popFront(),this.affectedTree,this.revert)},jt);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Mt.ACK_USER_WRITE,this.source=qt.User}var Bt=(Yt.fromObject=function(e){var n=Yt.Empty;return L(e,function(e,t){n=n.set(new V(e),t)}),n},Yt.prototype.isEmpty=function(){return null===this.value&&this.children.isEmpty()},Yt.prototype.findRootMostMatchingPathAndValue=function(e,t){if(null!=this.value&&t(this.value))return{path:V.Empty,value:this.value};if(e.isEmpty())return null;var n=e.getFront(),r=this.children.get(n);if(null===r)return null;var i=r.findRootMostMatchingPathAndValue(e.popFront(),t);return null==i?null:{path:new V(n).child(i.path),value:i.value}},Yt.prototype.findRootMostValueAndPath=function(e){return this.findRootMostMatchingPathAndValue(e,function(){return!0})},Yt.prototype.subtree=function(e){if(e.isEmpty())return this;var t=e.getFront(),n=this.children.get(t);return null!==n?n.subtree(e.popFront()):Yt.Empty},Yt.prototype.set=function(e,t){if(e.isEmpty())return new Yt(t,this.children);var n=e.getFront(),r=(this.children.get(n)||Yt.Empty).set(e.popFront(),t),i=this.children.insert(n,r);return new Yt(this.value,i)},Yt.prototype.remove=function(e){if(e.isEmpty())return this.children.isEmpty()?Yt.Empty:new Yt(null,this.children);var t=e.getFront(),n=this.children.get(t);if(n){var r=n.remove(e.popFront()),i=void 0;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?Yt.Empty:new Yt(this.value,i)}return this},Yt.prototype.get=function(e){if(e.isEmpty())return this.value;var t=e.getFront(),n=this.children.get(t);return n?n.get(e.popFront()):null},Yt.prototype.setTree=function(e,t){if(e.isEmpty())return t;var n=e.getFront(),r=(this.children.get(n)||Yt.Empty).setTree(e.popFront(),t),i=void 0;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Yt(this.value,i)},Yt.prototype.fold=function(e){return this.fold_(V.Empty,e)},Yt.prototype.fold_=function(n,r){var i={};return this.children.inorderTraversal(function(e,t){i[e]=t.fold_(n.child(e),r)}),r(n,this.value,i)},Yt.prototype.findOnPath=function(e,t){return this.findOnPath_(e,V.Empty,t)},Yt.prototype.findOnPath_=function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(e.isEmpty())return null;var i=e.getFront(),o=this.children.get(i);return o?o.findOnPath_(e.popFront(),t.child(i),n):null},Yt.prototype.foreachOnPath=function(e,t){return this.foreachOnPath_(e,V.Empty,t)},Yt.prototype.foreachOnPath_=function(e,t,n){if(e.isEmpty())return this;this.value&&n(t,this.value);var r=e.getFront(),i=this.children.get(r);return i?i.foreachOnPath_(e.popFront(),t.child(r),n):Yt.Empty},Yt.prototype.foreach=function(e){this.foreach_(V.Empty,e)},Yt.prototype.foreach_=function(n,r){this.children.inorderTraversal(function(e,t){t.foreach_(n.child(e),r)}),this.value&&r(n,this.value)},Yt.prototype.foreachChild=function(n){this.children.inorderTraversal(function(e,t){t.value&&n(e,t.value)})},Yt.Empty=new Yt(null),Yt);function Yt(e,t){void 0===t&&(t=Vt=Vt||new Ge(w)),this.value=e,this.children=t}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt=(zt.prototype.operationForChild=function(e){return this.path.isEmpty()?new zt(this.source,V.Empty):new zt(this.source,this.path.popFront())},zt);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,t){this.source=e,this.path=t,this.type=Mt.LISTEN_COMPLETE}var Gt=(Xt.prototype.operationForChild=function(e){return this.path.isEmpty()?new Xt(this.source,V.Empty,this.snap.getImmediateChild(e)):new Xt(this.source,this.path.popFront(),this.snap)},Xt);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Mt.OVERWRITE}var $t=(Jt.prototype.operationForChild=function(e){if(this.path.isEmpty()){var t=this.children.subtree(new V(e));return t.isEmpty()?null:t.value?new Gt(this.source,V.Empty,t.value):new Jt(this.source,V.Empty,t)}return E.assert(this.path.getFront()===e,"Can't get a merge for a child not on the path of the operation"),new Jt(this.source,this.path.popFront(),this.children)},Jt.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},Jt);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Mt.MERGE}var Zt=(en.prototype.isFullyInitialized=function(){return this.fullyInitialized_},en.prototype.isFiltered=function(){return this.filtered_},en.prototype.isCompleteForPath=function(e){if(e.isEmpty())return this.isFullyInitialized()&&!this.filtered_;var t=e.getFront();return this.isCompleteForChild(t)},en.prototype.isCompleteForChild=function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)},en.prototype.getNode=function(){return this.node_},en);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}var tn=(nn.prototype.updateEventSnap=function(e,t,n){return new nn(new Zt(e,t,n),this.serverCache_)},nn.prototype.updateServerSnap=function(e,t,n){return new nn(this.eventCache_,new Zt(e,t,n))},nn.prototype.getEventCache=function(){return this.eventCache_},nn.prototype.getCompleteEventSnap=function(){return this.eventCache_.isFullyInitialized()?this.eventCache_.getNode():null},nn.prototype.getServerCache=function(){return this.serverCache_},nn.prototype.getCompleteServerSnap=function(){return this.serverCache_.isFullyInitialized()?this.serverCache_.getNode():null},nn.Empty=new nn(new Zt(lt.EMPTY_NODE,!1,!1),new Zt(lt.EMPTY_NODE,!1,!1)),nn);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e,t){this.eventCache_=e,this.serverCache_=t}var rn=(on.valueChange=function(e){return new on(on.VALUE,e)},on.childAddedChange=function(e,t){return new on(on.CHILD_ADDED,t,e)},on.childRemovedChange=function(e,t){return new on(on.CHILD_REMOVED,t,e)},on.childChangedChange=function(e,t,n){return new on(on.CHILD_CHANGED,t,e,n)},on.childMovedChange=function(e,t){return new on(on.CHILD_MOVED,t,e)},on.CHILD_ADDED="child_added",on.CHILD_REMOVED="child_removed",on.CHILD_CHANGED="child_changed",on.CHILD_MOVED="child_moved",on.VALUE="value",on);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e,t,n,r,i){this.type=e,this.snapshotNode=t,this.childName=n,this.oldSnap=r,this.prevName=i}var sn=(an.prototype.updateChild=function(e,t,n,r,i,o){E.assert(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var s=e.getImmediateChild(t);return s.getChild(r).equals(n.getChild(r))&&s.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(rn.childRemovedChange(t,s)):E.assert(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?o.trackChildChange(rn.childAddedChange(t,n)):o.trackChildChange(rn.childChangedChange(t,n,s))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))},an.prototype.updateFullNode=function(r,n,i){return null!=i&&(r.isLeafNode()||r.forEachChild(Ve,function(e,t){n.hasChild(e)||i.trackChildChange(rn.childRemovedChange(e,t))}),n.isLeafNode()||n.forEachChild(Ve,function(e,t){if(r.hasChild(e)){var n=r.getImmediateChild(e);n.equals(t)||i.trackChildChange(rn.childChangedChange(e,t,n))}else i.trackChildChange(rn.childAddedChange(e,t))})),n.withIndex(this.index_)},an.prototype.updatePriority=function(e,t){return e.isEmpty()?lt.EMPTY_NODE:e.updatePriority(t)},an.prototype.filtersNodes=function(){return!1},an.prototype.getIndexedFilter=function(){return this},an.prototype.getIndex=function(){return this.index_},an);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e){this.index_=e}var hn=(ln.prototype.trackChildChange=function(e){var t=e.type,n=e.childName;E.assert(t===rn.CHILD_ADDED||t===rn.CHILD_CHANGED||t===rn.CHILD_REMOVED,"Only child changes supported for tracking"),E.assert(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if(t===rn.CHILD_ADDED&&i===rn.CHILD_REMOVED)this.changeMap.set(n,rn.childChangedChange(n,e.snapshotNode,r.snapshotNode));else if(t===rn.CHILD_REMOVED&&i===rn.CHILD_ADDED)this.changeMap.delete(n);else if(t===rn.CHILD_REMOVED&&i===rn.CHILD_CHANGED)this.changeMap.set(n,rn.childRemovedChange(n,r.oldSnap));else if(t===rn.CHILD_CHANGED&&i===rn.CHILD_ADDED)this.changeMap.set(n,rn.childAddedChange(n,e.snapshotNode));else{if(t!==rn.CHILD_CHANGED||i!==rn.CHILD_CHANGED)throw E.assertionError("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,rn.childChangedChange(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)},ln.prototype.getChanges=function(){return Array.from(this.changeMap.values())},ln);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){this.changeMap=new Map}function un(){}var cn=new(un.prototype.getCompleteChild=function(e){return null},un.prototype.getChildAfterChild=function(e,t,n){return null},un),pn=(dn.prototype.getCompleteChild=function(e){var t=this.viewCache_.getEventCache();if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new Zt(this.optCompleteServerCache_,!0,!1):this.viewCache_.getServerCache();return this.writes_.calcCompleteChild(e,n)},dn.prototype.getChildAfterChild=function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:this.viewCache_.getCompleteServerSnap(),i=this.writes_.calcIndexedSlice(r,t,1,n,e);return 0===i.length?null:i[0]},dn);function dn(e,t,n){void 0===n&&(n=null),this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fn=function(e,t){this.viewCache=e,this.changes=t},_n=(yn.prototype.assertIndexed=function(e){E.assert(e.getEventCache().getNode().isIndexed(this.filter_.getIndex()),"Event snap not indexed"),E.assert(e.getServerCache().getNode().isIndexed(this.filter_.getIndex()),"Server snap not indexed")},yn.prototype.applyOperation=function(e,t,n,r){var i,o,s=new hn;if(t.type===Mt.OVERWRITE){var a=t;i=a.source.fromUser?this.applyUserOverwrite_(e,a.path,a.snap,n,r,s):(E.assert(a.source.fromServer,"Unknown source."),o=a.source.tagged||e.getServerCache().isFiltered()&&!a.path.isEmpty(),this.applyServerOverwrite_(e,a.path,a.snap,n,r,o,s))}else if(t.type===Mt.MERGE){var h=t;i=h.source.fromUser?this.applyUserMerge_(e,h.path,h.children,n,r,s):(E.assert(h.source.fromServer,"Unknown source."),o=h.source.tagged||e.getServerCache().isFiltered(),this.applyServerMerge_(e,h.path,h.children,n,r,o,s))}else if(t.type===Mt.ACK_USER_WRITE){var l=t;i=l.revert?this.revertUserWrite_(e,l.path,n,r,s):this.ackUserWrite_(e,l.path,l.affectedTree,n,r,s)}else{if(t.type!==Mt.LISTEN_COMPLETE)throw E.assertionError("Unknown operation type: "+t.type);i=this.listenComplete_(e,t.path,n,s)}var u=s.getChanges();return yn.maybeAddValueEvent_(e,i,u),new fn(i,u)},yn.maybeAddValueEvent_=function(e,t,n){var r=t.getEventCache();if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=e.getCompleteEventSnap();(0<n.length||!e.getEventCache().isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(rn.valueChange(t.getCompleteEventSnap()))}},yn.prototype.generateEventCacheAfterServerEvent_=function(e,t,n,r,i){var o=e.getEventCache();if(null!=n.shadowingWrite(t))return e;var s=void 0,a=void 0;if(t.isEmpty())if(E.assert(e.getServerCache().isFullyInitialized(),"If change path is empty, we must have complete server data"),e.getServerCache().isFiltered()){var h=e.getCompleteServerSnap(),l=h instanceof lt?h:lt.EMPTY_NODE,u=n.calcCompleteEventChildren(l);s=this.filter_.updateFullNode(e.getEventCache().getNode(),u,i)}else{var c=n.calcCompleteEventCache(e.getCompleteServerSnap());s=this.filter_.updateFullNode(e.getEventCache().getNode(),c,i)}else{var p=t.getFront();if(".priority"===p){E.assert(1===t.getLength(),"Can't have a priority with additional path components");var d=o.getNode();a=e.getServerCache().getNode();var f=n.calcEventCacheAfterServerOverwrite(t,d,a);s=null!=f?this.filter_.updatePriority(d,f):o.getNode()}else{var _=t.popFront(),y=void 0;if(o.isCompleteForChild(p)){a=e.getServerCache().getNode();var v=n.calcEventCacheAfterServerOverwrite(t,o.getNode(),a);y=null!=v?o.getNode().getImmediateChild(p).updateChild(_,v):o.getNode().getImmediateChild(p)}else y=n.calcCompleteChild(p,e.getServerCache());s=null!=y?this.filter_.updateChild(o.getNode(),p,y,_,r,i):o.getNode()}}return e.updateEventSnap(s,o.isFullyInitialized()||t.isEmpty(),this.filter_.filtersNodes())},yn.prototype.applyServerOverwrite_=function(e,t,n,r,i,o,s){var a,h=e.getServerCache(),l=o?this.filter_:this.filter_.getIndexedFilter();if(t.isEmpty())a=l.updateFullNode(h.getNode(),n,null);else if(l.filtersNodes()&&!h.isFiltered()){var u=h.getNode().updateChild(t,n);a=l.updateFullNode(h.getNode(),u,null)}else{var c=t.getFront();if(!h.isCompleteForPath(t)&&1<t.getLength())return e;var p=t.popFront(),d=h.getNode().getImmediateChild(c).updateChild(p,n);a=".priority"===c?l.updatePriority(h.getNode(),d):l.updateChild(h.getNode(),c,d,p,cn,null)}var f=e.updateServerSnap(a,h.isFullyInitialized()||t.isEmpty(),l.filtersNodes()),_=new pn(r,f,i);return this.generateEventCacheAfterServerEvent_(f,t,r,_,s)},yn.prototype.applyUserOverwrite_=function(e,t,n,r,i,o){var s,a,h=e.getEventCache(),l=new pn(r,e,i);if(t.isEmpty())a=this.filter_.updateFullNode(e.getEventCache().getNode(),n,o),s=e.updateEventSnap(a,!0,this.filter_.filtersNodes());else{var u=t.getFront();if(".priority"===u)a=this.filter_.updatePriority(e.getEventCache().getNode(),n),s=e.updateEventSnap(a,h.isFullyInitialized(),h.isFiltered());else{var c=t.popFront(),p=h.getNode().getImmediateChild(u),d=void 0;if(c.isEmpty())d=n;else{var f=l.getCompleteChild(u);d=null!=f?".priority"===c.getBack()&&f.getChild(c.parent()).isEmpty()?f:f.updateChild(c,n):lt.EMPTY_NODE}if(p.equals(d))s=e;else{var _=this.filter_.updateChild(h.getNode(),u,d,c,l,o);s=e.updateEventSnap(_,h.isFullyInitialized(),this.filter_.filtersNodes())}}}return s},yn.cacheHasChild_=function(e,t){return e.getEventCache().isCompleteForChild(t)},yn.prototype.applyUserMerge_=function(r,i,e,o,s,a){var h=this,l=r;return e.foreach(function(e,t){var n=i.child(e);yn.cacheHasChild_(r,n.getFront())&&(l=h.applyUserOverwrite_(l,n,t,o,s,a))}),e.foreach(function(e,t){var n=i.child(e);yn.cacheHasChild_(r,n.getFront())||(l=h.applyUserOverwrite_(l,n,t,o,s,a))}),l},yn.prototype.applyMerge_=function(n,e){return e.foreach(function(e,t){n=n.updateChild(e,t)}),n},yn.prototype.applyServerMerge_=function(o,e,t,s,a,h,l){var u=this;if(o.getServerCache().getNode().isEmpty()&&!o.getServerCache().isFullyInitialized())return o;var n,c=o;n=e.isEmpty()?t:Bt.Empty.setTree(e,t);var p=o.getServerCache().getNode();return n.children.inorderTraversal(function(e,t){if(p.hasChild(e)){var n=o.getServerCache().getNode().getImmediateChild(e),r=u.applyMerge_(n,t);c=u.applyServerOverwrite_(c,new V(e),r,s,a,h,l)}}),n.children.inorderTraversal(function(e,t){var n=!o.getServerCache().isCompleteForChild(e)&&null==t.value;if(!p.hasChild(e)&&!n){var r=o.getServerCache().getNode().getImmediateChild(e),i=u.applyMerge_(r,t);c=u.applyServerOverwrite_(c,new V(e),i,s,a,h,l)}}),c},yn.prototype.ackUserWrite_=function(e,r,t,n,i,o){if(null!=n.shadowingWrite(r))return e;var s=e.getServerCache().isFiltered(),a=e.getServerCache();if(null!=t.value){if(r.isEmpty()&&a.isFullyInitialized()||a.isCompleteForPath(r))return this.applyServerOverwrite_(e,r,a.getNode().getChild(r),n,i,s,o);if(r.isEmpty()){var h=Bt.Empty;return a.getNode().forEachChild(ke,function(e,t){h=h.set(new V(e),t)}),this.applyServerMerge_(e,r,h,n,i,s,o)}return e}var l=Bt.Empty;return t.foreach(function(e,t){var n=r.child(e);a.isCompleteForPath(n)&&(l=l.set(e,a.getNode().getChild(n)))}),this.applyServerMerge_(e,r,l,n,i,s,o)},yn.prototype.listenComplete_=function(e,t,n,r){var i=e.getServerCache(),o=e.updateServerSnap(i.getNode(),i.isFullyInitialized()||t.isEmpty(),i.isFiltered());return this.generateEventCacheAfterServerEvent_(o,t,n,cn,r)},yn.prototype.revertUserWrite_=function(e,t,n,r,i){var o;if(null!=n.shadowingWrite(t))return e;var s=new pn(n,e,r),a=e.getEventCache().getNode(),h=void 0;if(t.isEmpty()||".priority"===t.getFront()){var l=void 0;if(e.getServerCache().isFullyInitialized())l=n.calcCompleteEventCache(e.getCompleteServerSnap());else{var u=e.getServerCache().getNode();E.assert(u instanceof lt,"serverChildren would be complete if leaf node"),l=n.calcCompleteEventChildren(u)}l=l,h=this.filter_.updateFullNode(a,l,i)}else{var c=t.getFront(),p=n.calcCompleteChild(c,e.getServerCache());null==p&&e.getServerCache().isCompleteForChild(c)&&(p=a.getImmediateChild(c)),(h=null!=p?this.filter_.updateChild(a,c,p,t.popFront(),s,i):e.getEventCache().getNode().hasChild(c)?this.filter_.updateChild(a,c,lt.EMPTY_NODE,t.popFront(),s,i):a).isEmpty()&&e.getServerCache().isFullyInitialized()&&(o=n.calcCompleteEventCache(e.getCompleteServerSnap())).isLeafNode()&&(h=this.filter_.updateFullNode(h,o,i))}return o=e.getServerCache().isFullyInitialized()||null!=n.shadowingWrite(V.Empty),e.updateEventSnap(h,o,this.filter_.filtersNodes())},yn);function yn(e){this.filter_=e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vn=(gn.prototype.generateEventsForChanges=function(e,t,n){var r=this,i=[],o=[];return e.forEach(function(e){e.type===rn.CHILD_CHANGED&&r.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&o.push(rn.childMovedChange(e.childName,e.snapshotNode))}),this.generateEventsForType_(i,rn.CHILD_REMOVED,e,n,t),this.generateEventsForType_(i,rn.CHILD_ADDED,e,n,t),this.generateEventsForType_(i,rn.CHILD_MOVED,o,n,t),this.generateEventsForType_(i,rn.CHILD_CHANGED,e,n,t),this.generateEventsForType_(i,rn.VALUE,e,n,t),i},gn.prototype.generateEventsForType_=function(r,t,e,i,o){var s=this,n=e.filter(function(e){return e.type===t});n.sort(this.compareChanges_.bind(this)),n.forEach(function(t){var n=s.materializeSingleChange_(t,o);i.forEach(function(e){e.respondsTo(t.type)&&r.push(e.createEvent(n,s.query_))})})},gn.prototype.materializeSingleChange_=function(e,t){return"value"===e.type||"child_removed"===e.type||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,this.index_)),e},gn.prototype.compareChanges_=function(e,t){if(null==e.childName||null==t.childName)throw E.assertionError("Should only compare child_ events.");var n=new Te(e.childName,e.snapshotNode),r=new Te(t.childName,t.snapshotNode);return this.index_.compare(n,r)},gn);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(e){this.query_=e,this.index_=this.query_.getQueryParams().getIndex()}var mn,Cn=(En.prototype.getQuery=function(){return this.query_},En.prototype.getServerCache=function(){return this.viewCache_.getServerCache().getNode()},En.prototype.getCompleteServerCache=function(e){var t=this.viewCache_.getCompleteServerSnap();return t&&(this.query_.getQueryParams().loadsAllData()||!e.isEmpty()&&!t.getImmediateChild(e.getFront()).isEmpty())?t.getChild(e):null},En.prototype.isEmpty=function(){return 0===this.eventRegistrations_.length},En.prototype.addEventRegistration=function(e){this.eventRegistrations_.push(e)},En.prototype.removeEventRegistration=function(e,n){var r=[];if(n){E.assert(null==e,"A cancel should cancel all event registrations.");var i=this.query_.path;this.eventRegistrations_.forEach(function(e){n=n;var t=e.createCancelEvent(n,i);t&&r.push(t)})}if(e){for(var t=[],o=0;o<this.eventRegistrations_.length;++o){var s=this.eventRegistrations_[o];if(s.matches(e)){if(e.hasAnyCallback()){t=t.concat(this.eventRegistrations_.slice(o+1));break}}else t.push(s)}this.eventRegistrations_=t}else this.eventRegistrations_=[];return r},En.prototype.applyOperation=function(e,t,n){e.type===Mt.MERGE&&null!==e.source.queryId&&(E.assert(this.viewCache_.getCompleteServerSnap(),"We should always have a full cache before handling merges"),E.assert(this.viewCache_.getCompleteEventSnap(),"Missing event cache, even though we have a server cache"));var r=this.viewCache_,i=this.processor_.applyOperation(r,e,t,n);return this.processor_.assertIndexed(i.viewCache),E.assert(i.viewCache.getServerCache().isFullyInitialized()||!r.getServerCache().isFullyInitialized(),"Once a server snap is complete, it should never go back"),this.viewCache_=i.viewCache,this.generateEventsForChanges_(i.changes,i.viewCache.getEventCache().getNode(),null)},En.prototype.getInitialEvents=function(e){var t=this.viewCache_.getEventCache(),n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ve,function(e,t){n.push(rn.childAddedChange(e,t))}),t.isFullyInitialized()&&n.push(rn.valueChange(t.getNode())),this.generateEventsForChanges_(n,t.getNode(),e)},En.prototype.generateEventsForChanges_=function(e,t,n){var r=n?[n]:this.eventRegistrations_;return this.eventGenerator_.generateEventsForChanges(e,t,r)},En);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e,t){this.query_=e,this.eventRegistrations_=[];var n=this.query_.getQueryParams(),r=new sn(n.getIndex()),i=n.getNodeFilter();this.processor_=new _n(i);var o=t.getServerCache(),s=t.getEventCache(),a=r.updateFullNode(lt.EMPTY_NODE,o.getNode(),null),h=i.updateFullNode(lt.EMPTY_NODE,s.getNode(),null),l=new Zt(a,o.isFullyInitialized(),r.filtersNodes()),u=new Zt(h,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=new tn(u,l),this.eventGenerator_=new vn(this.query_)}var wn=(Object.defineProperty(Tn,"__referenceConstructor",{get:function(){return E.assert(mn,"Reference.ts has not been loaded"),mn},set:function(e){E.assert(!mn,"__referenceConstructor has already been defined"),mn=e},enumerable:!0,configurable:!0}),Tn.prototype.isEmpty=function(){return 0===this.views.size},Tn.prototype.applyOperation=function(e,t,n){var r,i,o=e.source.queryId;if(null!==o){var s=this.views.get(o);return E.assert(null!=s,"SyncTree gave us an op for an invalid query."),s.applyOperation(e,t,n)}var a=[];try{for(var h=f.__values(this.views.values()),l=h.next();!l.done;l=h.next())s=l.value,a=a.concat(s.applyOperation(e,t,n))}catch(e){r={error:e}}finally{try{l&&!l.done&&(i=h.return)&&i.call(h)}finally{if(r)throw r.error}}return a},Tn.prototype.addEventRegistration=function(e,t,n,r,i){var o=e.queryIdentifier(),s=this.views.get(o);if(!s){var a=n.calcCompleteEventCache(i?r:null),h=!1;h=!!a||(a=r instanceof lt?n.calcCompleteEventChildren(r):lt.EMPTY_NODE,!1);var l=new tn(new Zt(a,h,!1),new Zt(r,i,!1));s=new Cn(e,l),this.views.set(o,s)}return s.addEventRegistration(t),s.getInitialEvents(t)},Tn.prototype.removeEventRegistration=function(e,t,n){var r,i,o=e.queryIdentifier(),s=[],a=[],h=this.hasCompleteView();if("default"===o)try{for(var l=f.__values(this.views.entries()),u=l.next();!u.done;u=l.next()){var c=f.__read(u.value,2),p=c[0],d=c[1];a=a.concat(d.removeEventRegistration(t,n)),d.isEmpty()&&(this.views.delete(p),d.getQuery().getQueryParams().loadsAllData()||s.push(d.getQuery()))}}catch(e){r={error:e}}finally{try{u&&!u.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}else(d=this.views.get(o))&&(a=a.concat(d.removeEventRegistration(t,n)),d.isEmpty()&&(this.views.delete(o),d.getQuery().getQueryParams().loadsAllData()||s.push(d.getQuery())));return h&&!this.hasCompleteView()&&s.push(new Tn.__referenceConstructor(e.repo,e.path)),{removed:s,events:a}},Tn.prototype.getQueryViews=function(){var t,e,n=[];try{for(var r=f.__values(this.views.values()),i=r.next();!i.done;i=r.next()){var o=i.value;o.getQuery().getQueryParams().loadsAllData()||n.push(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}return n},Tn.prototype.getCompleteServerCache=function(e){var t,n,r=null;try{for(var i=f.__values(this.views.values()),o=i.next();!o.done;o=i.next()){var s=o.value;r=r||s.getCompleteServerCache(e)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r},Tn.prototype.viewForQuery=function(e){if(e.getQueryParams().loadsAllData())return this.getCompleteView();var t=e.queryIdentifier();return this.views.get(t)},Tn.prototype.viewExistsForQuery=function(e){return null!=this.viewForQuery(e)},Tn.prototype.hasCompleteView=function(){return null!=this.getCompleteView()},Tn.prototype.getCompleteView=function(){var t,e;try{for(var n=f.__values(this.views.values()),r=n.next();!r.done;r=n.next()){var i=r.value;if(i.getQuery().getQueryParams().loadsAllData())return i}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}return null},Tn);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){this.views=new Map}var bn=(Sn.prototype.addWrite=function(e,t){if(e.isEmpty())return new Sn(new Bt(t));var n=this.writeTree_.findRootMostValueAndPath(e);if(null!=n){var r=n.path,i=n.value,o=V.relativePath(r,e);return i=i.updateChild(o,t),new Sn(this.writeTree_.set(r,i))}var s=new Bt(t);return new Sn(this.writeTree_.setTree(e,s))},Sn.prototype.addWrites=function(n,e){var r=this;return L(e,function(e,t){r=r.addWrite(n.child(e),t)}),r},Sn.prototype.removeWrite=function(e){return e.isEmpty()?Sn.Empty:new Sn(this.writeTree_.setTree(e,Bt.Empty))},Sn.prototype.hasCompleteWrite=function(e){return null!=this.getCompleteNode(e)},Sn.prototype.getCompleteNode=function(e){var t=this.writeTree_.findRootMostValueAndPath(e);return null!=t?this.writeTree_.get(t.path).getChild(V.relativePath(t.path,e)):null},Sn.prototype.getCompleteChildren=function(){var n=[],e=this.writeTree_.value;return null!=e?e.isLeafNode()||e.forEachChild(Ve,function(e,t){n.push(new Te(e,t))}):this.writeTree_.children.inorderTraversal(function(e,t){null!=t.value&&n.push(new Te(e,t.value))}),n},Sn.prototype.childCompoundWrite=function(e){if(e.isEmpty())return this;var t=this.getCompleteNode(e);return new Sn(null!=t?new Bt(t):this.writeTree_.subtree(e))},Sn.prototype.isEmpty=function(){return this.writeTree_.isEmpty()},Sn.prototype.apply=function(e){return function n(r,e,i){if(null!=e.value)return i.updateChild(r,e.value);var o=null;return e.children.inorderTraversal(function(e,t){".priority"===e?(E.assert(null!==t.value,"Priority writes must always be leaf nodes"),o=t.value):i=n(r.child(e),t,i)}),i.getChild(r).isEmpty()||null===o||(i=i.updateChild(r.child(".priority"),o)),i}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(V.Empty,this.writeTree_,e)},Sn.Empty=new Sn(new Bt(null)),Sn);function Sn(e){this.writeTree_=e}var In=(Nn.prototype.childWrites=function(e){return new Pn(e,this)},Nn.prototype.addOverwrite=function(e,t,n,r){E.assert(n>this.lastWriteId_,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),this.allWrites_.push({path:e,snap:t,writeId:n,visible:r}),r&&(this.visibleWrites_=this.visibleWrites_.addWrite(e,t)),this.lastWriteId_=n},Nn.prototype.addMerge=function(e,t,n){E.assert(n>this.lastWriteId_,"Stacking an older merge on top of newer ones"),this.allWrites_.push({path:e,children:t,writeId:n,visible:!0}),this.visibleWrites_=this.visibleWrites_.addWrites(e,t),this.lastWriteId_=n},Nn.prototype.getWrite=function(e){for(var t=0;t<this.allWrites_.length;t++){var n=this.allWrites_[t];if(n.writeId===e)return n}return null},Nn.prototype.removeWrite=function(t){var n=this,e=this.allWrites_.findIndex(function(e){return e.writeId===t});E.assert(0<=e,"removeWrite called with nonexistent writeId.");var r=this.allWrites_[e];this.allWrites_.splice(e,1);for(var i=r.visible,o=!1,s=this.allWrites_.length-1;i&&0<=s;){var a=this.allWrites_[s];a.visible&&(e<=s&&this.recordContainsPath_(a,r.path)?i=!1:r.path.contains(a.path)&&(o=!0)),s--}return!!i&&(o?this.resetTree_():r.snap?this.visibleWrites_=this.visibleWrites_.removeWrite(r.path):L(r.children,function(e){n.visibleWrites_=n.visibleWrites_.removeWrite(r.path.child(e))}),!0)},Nn.prototype.getCompleteWriteData=function(e){return this.visibleWrites_.getCompleteNode(e)},Nn.prototype.calcCompleteEventCache=function(t,e,n,r){if(n||r){var i=this.visibleWrites_.childCompoundWrite(t);if(!r&&i.isEmpty())return e;if(r||null!=e||i.hasCompleteWrite(V.Empty)){var o=Nn.layerTree_(this.allWrites_,function(e){return(e.visible||r)&&(!n||!~n.indexOf(e.writeId))&&(e.path.contains(t)||t.contains(e.path))},t);return h=e||lt.EMPTY_NODE,o.apply(h)}return null}var s=this.visibleWrites_.getCompleteNode(t);if(null!=s)return s;var a=this.visibleWrites_.childCompoundWrite(t);if(a.isEmpty())return e;if(null!=e||a.hasCompleteWrite(V.Empty)){var h=e||lt.EMPTY_NODE;return a.apply(h)}return null},Nn.prototype.calcCompleteEventChildren=function(e,t){var r=lt.EMPTY_NODE,n=this.visibleWrites_.getCompleteNode(e);if(n)return n.isLeafNode()||n.forEachChild(Ve,function(e,t){r=r.updateImmediateChild(e,t)}),r;if(t){var i=this.visibleWrites_.childCompoundWrite(e);return t.forEachChild(Ve,function(e,t){var n=i.childCompoundWrite(new V(e)).apply(t);r=r.updateImmediateChild(e,n)}),i.getCompleteChildren().forEach(function(e){r=r.updateImmediateChild(e.name,e.node)}),r}return this.visibleWrites_.childCompoundWrite(e).getCompleteChildren().forEach(function(e){r=r.updateImmediateChild(e.name,e.node)}),r},Nn.prototype.calcEventCacheAfterServerOverwrite=function(e,t,n,r){E.assert(n||r,"Either existingEventSnap or existingServerSnap must exist");var i=e.child(t);if(this.visibleWrites_.hasCompleteWrite(i))return null;var o=this.visibleWrites_.childCompoundWrite(i);return o.isEmpty()?r.getChild(t):o.apply(r.getChild(t))},Nn.prototype.calcCompleteChild=function(e,t,n){var r=e.child(t),i=this.visibleWrites_.getCompleteNode(r);return null!=i?i:n.isCompleteForChild(t)?this.visibleWrites_.childCompoundWrite(r).apply(n.getNode().getImmediateChild(t)):null},Nn.prototype.shadowingWrite=function(e){return this.visibleWrites_.getCompleteNode(e)},Nn.prototype.calcIndexedSlice=function(e,t,n,r,i,o){var s,a=this.visibleWrites_.childCompoundWrite(e),h=a.getCompleteNode(V.Empty);if(null!=h)s=h;else{if(null==t)return[];s=a.apply(t)}if((s=s.withIndex(o)).isEmpty()||s.isLeafNode())return[];for(var l=[],u=o.getCompare(),c=i?s.getReverseIteratorFrom(n,o):s.getIteratorFrom(n,o),p=c.getNext();p&&l.length<r;)0!==u(p,n)&&l.push(p),p=c.getNext();return l},Nn.prototype.recordContainsPath_=function(e,t){if(e.snap)return e.path.contains(t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&e.path.child(n).contains(t))return!0;return!1},Nn.prototype.resetTree_=function(){this.visibleWrites_=Nn.layerTree_(this.allWrites_,Nn.DefaultFilter_,V.Empty),0<this.allWrites_.length?this.lastWriteId_=this.allWrites_[this.allWrites_.length-1].writeId:this.lastWriteId_=-1},Nn.DefaultFilter_=function(e){return e.visible},Nn.layerTree_=function(e,t,n){for(var r=bn.Empty,i=0;i<e.length;++i){var o=e[i];if(t(o)){var s=o.path,a=void 0;if(o.snap)n.contains(s)?(a=V.relativePath(n,s),r=r.addWrite(a,o.snap)):s.contains(n)&&(a=V.relativePath(s,n),r=r.addWrite(V.Empty,o.snap.getChild(a)));else{if(!o.children)throw E.assertionError("WriteRecord should have .snap or .children");if(n.contains(s))a=V.relativePath(n,s),r=r.addWrites(a,o.children);else if(s.contains(n))if((a=V.relativePath(s,n)).isEmpty())r=r.addWrites(V.Empty,o.children);else{var h=E.safeGet(o.children,a.getFront());if(h){var l=h.getChild(a.popFront());r=r.addWrite(V.Empty,l)}}}}}return r},Nn);function Nn(){this.visibleWrites_=bn.Empty,this.allWrites_=[],this.lastWriteId_=-1}var Pn=(Rn.prototype.calcCompleteEventCache=function(e,t,n){return this.writeTree_.calcCompleteEventCache(this.treePath_,e,t,n)},Rn.prototype.calcCompleteEventChildren=function(e){return this.writeTree_.calcCompleteEventChildren(this.treePath_,e)},Rn.prototype.calcEventCacheAfterServerOverwrite=function(e,t,n){return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_,e,t,n)},Rn.prototype.shadowingWrite=function(e){return this.writeTree_.shadowingWrite(this.treePath_.child(e))},Rn.prototype.calcIndexedSlice=function(e,t,n,r,i){return this.writeTree_.calcIndexedSlice(this.treePath_,e,t,n,r,i)},Rn.prototype.calcCompleteChild=function(e,t){return this.writeTree_.calcCompleteChild(this.treePath_,e,t)},Rn.prototype.child=function(e){return new Rn(this.treePath_.child(e),this.writeTree_)},Rn);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e,t){this.treePath_=e,this.writeTree_=t}var Dn=(xn.prototype.applyUserOverwrite=function(e,t,n,r){return this.pendingWriteTree_.addOverwrite(e,t,n,r),r?this.applyOperationToSyncPoints_(new Gt(qt.User,e,t)):[]},xn.prototype.applyUserMerge=function(e,t,n){this.pendingWriteTree_.addMerge(e,t,n);var r=Bt.fromObject(t);return this.applyOperationToSyncPoints_(new $t(qt.User,e,r))},xn.prototype.ackUserWrite=function(e,t){void 0===t&&(t=!1);var n=this.pendingWriteTree_.getWrite(e);if(this.pendingWriteTree_.removeWrite(e)){var r=Bt.Empty;return null!=n.snap?r=r.set(V.Empty,!0):L(n.children,function(e,t){r=r.set(new V(e),t)}),this.applyOperationToSyncPoints_(new Ht(n.path,r,t))}return[]},xn.prototype.applyServerOverwrite=function(e,t){return this.applyOperationToSyncPoints_(new Gt(qt.Server,e,t))},xn.prototype.applyServerMerge=function(e,t){var n=Bt.fromObject(t);return this.applyOperationToSyncPoints_(new $t(qt.Server,e,n))},xn.prototype.applyListenComplete=function(e){return this.applyOperationToSyncPoints_(new Kt(qt.Server,e))},xn.prototype.applyTaggedQueryOverwrite=function(e,t,n){var r=this.queryKeyForTag_(n);if(null==r)return[];var i=xn.parseQueryKey_(r),o=i.path,s=i.queryId,a=V.relativePath(o,e),h=new Gt(qt.forServerTaggedQuery(s),a,t);return this.applyTaggedOperation_(o,h)},xn.prototype.applyTaggedQueryMerge=function(e,t,n){var r=this.queryKeyForTag_(n);if(r){var i=xn.parseQueryKey_(r),o=i.path,s=i.queryId,a=V.relativePath(o,e),h=Bt.fromObject(t),l=new $t(qt.forServerTaggedQuery(s),a,h);return this.applyTaggedOperation_(o,l)}return[]},xn.prototype.applyTaggedListenComplete=function(e,t){var n=this.queryKeyForTag_(t);if(n){var r=xn.parseQueryKey_(n),i=r.path,o=r.queryId,s=V.relativePath(i,e),a=new Kt(qt.forServerTaggedQuery(o),s);return this.applyTaggedOperation_(i,a)}return[]},xn.prototype.addEventRegistration=function(e,t){var r=e.path,i=null,o=!1;this.syncPointTree_.foreachOnPath(r,function(e,t){var n=V.relativePath(e,r);i=i||t.getCompleteServerCache(n),o=o||t.hasCompleteView()});var n,s=this.syncPointTree_.get(r);s?(o=o||s.hasCompleteView(),i=i||s.getCompleteServerCache(V.Empty)):(s=new wn,this.syncPointTree_=this.syncPointTree_.set(r,s)),null!=i?n=!0:(n=!1,i=lt.EMPTY_NODE,this.syncPointTree_.subtree(r).foreachChild(function(e,t){var n=t.getCompleteServerCache(V.Empty);n&&(i=i.updateImmediateChild(e,n))}));var a=s.viewExistsForQuery(e);if(!a&&!e.getQueryParams().loadsAllData()){var h=xn.makeQueryKey_(e);E.assert(!this.queryToTagMap.has(h),"View does not exist, but we have a tag");var l=xn.getNextQueryTag_();this.queryToTagMap.set(h,l),this.tagToQueryMap.set(l,h)}var u=this.pendingWriteTree_.childWrites(r),c=s.addEventRegistration(e,t,u,i,n);if(!a&&!o){var p=s.viewForQuery(e);c=c.concat(this.setupListener_(e,p))}return c},xn.prototype.removeEventRegistration=function(e,t,n){var r=this,i=e.path,o=this.syncPointTree_.get(i),s=[];if(o&&("default"===e.queryIdentifier()||o.viewExistsForQuery(e))){var a=o.removeEventRegistration(e,t,n);o.isEmpty()&&(this.syncPointTree_=this.syncPointTree_.remove(i));var h=a.removed;s=a.events;var l=-1!==h.findIndex(function(e){return e.getQueryParams().loadsAllData()}),u=this.syncPointTree_.findOnPath(i,function(e,t){return t.hasCompleteView()});if(l&&!u){var c=this.syncPointTree_.subtree(i);if(!c.isEmpty())for(var p=this.collectDistinctViewsForSubTree_(c),d=0;d<p.length;++d){var f=p[d],_=f.getQuery(),y=this.createListenerForView_(f);this.listenProvider_.startListening(xn.queryForListening_(_),this.tagForQuery_(_),y.hashFn,y.onComplete)}}!u&&0<h.length&&!n&&(l?this.listenProvider_.stopListening(xn.queryForListening_(e),null):h.forEach(function(e){var t=r.queryToTagMap.get(xn.makeQueryKey_(e));r.listenProvider_.stopListening(xn.queryForListening_(e),t)})),this.removeTags_(h)}return s},xn.prototype.calcCompleteEventCache=function(i,e){var t=this.pendingWriteTree_,n=this.syncPointTree_.findOnPath(i,function(e,t){var n=V.relativePath(e,i),r=t.getCompleteServerCache(n);if(r)return r});return t.calcCompleteEventCache(i,n,e,!0)},xn.prototype.collectDistinctViewsForSubTree_=function(e){return e.fold(function(e,t,n){if(t&&t.hasCompleteView())return[t.getCompleteView()];var r=[];return t&&(r=t.getQueryViews()),L(n,function(e,t){r=r.concat(t)}),r})},xn.prototype.removeTags_=function(e){for(var t=0;t<e.length;++t){var n=e[t];if(!n.getQueryParams().loadsAllData()){var r=xn.makeQueryKey_(n),i=this.queryToTagMap.get(r);this.queryToTagMap.delete(r),this.tagToQueryMap.delete(i)}}},xn.queryForListening_=function(e){return e.getQueryParams().loadsAllData()&&!e.getQueryParams().isDefault()?e.getRef():e},xn.prototype.setupListener_=function(e,t){var n=e.path,r=this.tagForQuery_(e),i=this.createListenerForView_(t),o=this.listenProvider_.startListening(xn.queryForListening_(e),r,i.hashFn,i.onComplete),s=this.syncPointTree_.subtree(n);if(r)E.assert(!s.value.hasCompleteView(),"If we're adding a query, it shouldn't be shadowed");else for(var a=s.fold(function(e,t,n){if(!e.isEmpty()&&t&&t.hasCompleteView())return[t.getCompleteView().getQuery()];var r=[];return t&&(r=r.concat(t.getQueryViews().map(function(e){return e.getQuery()}))),L(n,function(e,t){r=r.concat(t)}),r}),h=0;h<a.length;++h){var l=a[h];this.listenProvider_.stopListening(xn.queryForListening_(l),this.tagForQuery_(l))}return o},xn.prototype.createListenerForView_=function(e){var n=this,r=e.getQuery(),i=this.tagForQuery_(r);return{hashFn:function(){return(e.getServerCache()||lt.EMPTY_NODE).hash()},onComplete:function(e){if("ok"===e)return i?n.applyTaggedListenComplete(r.path,i):n.applyListenComplete(r.path);var t=function(e,t){var n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");var r=new Error(e+" at "+t.path.toString()+": "+n);return r.code=e.toUpperCase(),r}(e,r);return n.removeEventRegistration(r,null,t)}}},xn.makeQueryKey_=function(e){return e.path.toString()+"$"+e.queryIdentifier()},xn.parseQueryKey_=function(e){var t=e.indexOf("$");return E.assert(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new V(e.substr(0,t))}},xn.prototype.queryKeyForTag_=function(e){return this.tagToQueryMap.get(e)},xn.prototype.tagForQuery_=function(e){var t=xn.makeQueryKey_(e);return this.queryToTagMap.get(t)},xn.getNextQueryTag_=function(){return xn.nextQueryTag_++},xn.prototype.applyTaggedOperation_=function(e,t){var n=this.syncPointTree_.get(e);E.assert(n,"Missing sync point for query tag that we're tracking");var r=this.pendingWriteTree_.childWrites(e);return n.applyOperation(t,r,null)},xn.prototype.applyOperationToSyncPoints_=function(e){return this.applyOperationHelper_(e,this.syncPointTree_,null,this.pendingWriteTree_.childWrites(V.Empty))},xn.prototype.applyOperationHelper_=function(e,t,n,r){if(e.path.isEmpty())return this.applyOperationDescendantsHelper_(e,t,n,r);var i=t.get(V.Empty);null==n&&null!=i&&(n=i.getCompleteServerCache(V.Empty));var o=[],s=e.path.getFront(),a=e.operationForChild(s),h=t.children.get(s);if(h&&a){var l=n?n.getImmediateChild(s):null,u=r.child(s);o=o.concat(this.applyOperationHelper_(a,h,l,u))}return i&&(o=o.concat(i.applyOperation(e,r,n))),o},xn.prototype.applyOperationDescendantsHelper_=function(o,e,s,a){var h=this,t=e.get(V.Empty);null==s&&null!=t&&(s=t.getCompleteServerCache(V.Empty));var l=[];return e.children.inorderTraversal(function(e,t){var n=s?s.getImmediateChild(e):null,r=a.child(e),i=o.operationForChild(e);i&&(l=l.concat(h.applyOperationDescendantsHelper_(i,t,n,r)))}),t&&(l=l.concat(t.applyOperation(o,a,s))),l},xn.nextQueryTag_=1,xn);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(e){this.listenProvider_=e,this.syncPointTree_=Bt.Empty,this.pendingWriteTree_=new In,this.tagToQueryMap=new Map,this.queryToTagMap=new Map}var kn=(On.prototype.getNode=function(e){return this.rootNode_.getChild(e)},On.prototype.updateSnapshot=function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)},On);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){this.rootNode_=lt.EMPTY_NODE}var Fn=(An.prototype.getToken=function(e){return this.auth_?this.auth_.getToken(e).catch(function(e){return e&&"auth/token-not-initialized"===e.code?(d("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)}):Promise.resolve(null)},An.prototype.addTokenChangeListener=function(t){this.auth_?this.auth_.addAuthTokenListener(t):(setTimeout(function(){return t(null)},0),this.authProvider_.get().then(function(e){return e.addAuthTokenListener(t)}))},An.prototype.removeTokenChangeListener=function(t){this.authProvider_.get().then(function(e){return e.removeAuthTokenListener(t)})},An.prototype.notifyForInvalidToken=function(){var e='Provided authentication credentials for the app named "'+this.app_.name+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.app_.options?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.app_.options?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',g(e)},An);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(e,t){var n=this;this.app_=e,this.authProvider_=t,this.auth_=null,this.auth_=t.getImmediate({optional:!0}),this.auth_||t.get().then(function(e){return n.auth_=e})}var Ln=(Mn.prototype.incrementCounter=function(e,t){void 0===t&&(t=1),E.contains(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t},Mn.prototype.get=function(){return E.deepCopy(this.counters_)},Mn);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){this.counters_={}}var Wn=(Qn.getCollection=function(e){var t=e.toString();return this.collections_[t]||(this.collections_[t]=new Ln),this.collections_[t]},Qn.getOrCreateReporter=function(e,t){var n=e.toString();return this.reporters_[n]||(this.reporters_[n]=t()),this.reporters_[n]},Qn.collections_={},Qn.reporters_={},Qn);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){}var qn=(Un.prototype.get=function(){var e=this.collection_.get(),n=f.__assign({},e);return this.last_&&L(this.last_,function(e,t){n[e]=n[e]-t}),this.last_=e,n},Un);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(e){this.collection_=e,this.last_=null}var Vn=(Hn.prototype.includeStat=function(e){this.statsToReport_[e]=!0},Hn.prototype.reportStats_=function(){var n=this,e=this.statsListener_.get(),r={},i=!1;L(e,function(e,t){0<t&&E.contains(n.statsToReport_,e)&&(r[e]=t,i=!0)}),i&&this.server_.reportStats(r),Q(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))},Hn);function Hn(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new qn(e);var n=1e4+2e4*Math.random();Q(this.reportStats_.bind(this),Math.floor(n))}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jn=(Bn.prototype.queueEvents=function(e){for(var t=null,n=0;n<e.length;n++){var r=e[n],i=r.getPath();null===t||i.equals(t.getPath())||(this.eventLists_.push(t),t=null),null===t&&(t=new Yn(i)),t.add(r)}t&&this.eventLists_.push(t)},Bn.prototype.raiseEventsAtPath=function(t,e){this.queueEvents(e),this.raiseQueuedEventsMatchingPredicate_(function(e){return e.equals(t)})},Bn.prototype.raiseEventsForChangedPath=function(t,e){this.queueEvents(e),this.raiseQueuedEventsMatchingPredicate_(function(e){return e.contains(t)||t.contains(e)})},Bn.prototype.raiseQueuedEventsMatchingPredicate_=function(e){this.recursionDepth_++;for(var t=!0,n=0;n<this.eventLists_.length;n++){var r=this.eventLists_[n];r&&(e(r.getPath())?(this.eventLists_[n].raise(),this.eventLists_[n]=null):t=!1)}t&&(this.eventLists_=[]),this.recursionDepth_--},Bn);function Bn(){this.eventLists_=[],this.recursionDepth_=0}var Yn=(Kn.prototype.add=function(e){this.events_.push(e)},Kn.prototype.raise=function(){for(var e=0;e<this.events_.length;e++){var t=this.events_[e];if(null!==t){this.events_[e]=null;var n=t.getEventRunner();x&&d("event: "+t.toString()),W(n)}}},Kn.prototype.getPath=function(){return this.path_},Kn);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e){this.path_=e,this.events_=[]}var zn=(Gn.prototype.trigger=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Array.isArray(this.listeners_[e]))for(var r=f.__spread(this.listeners_[e]),i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)},Gn.prototype.on=function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)},Gn.prototype.off=function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)},Gn.prototype.validateEventType_=function(t){E.assert(this.allowedEvents_.find(function(e){return e===t}),"Unknown event: "+t)},Gn);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(e){this.allowedEvents_=e,this.listeners_={},E.assert(Array.isArray(e)&&0<e.length,"Requires a non-empty array")}var Xn,$n=(Xn=zn,f.__extends(Jn,Xn),Jn.getInstance=function(){return new Jn},Jn.prototype.getInitialEvent=function(e){return E.assert("visible"===e,"Unknown event type: "+e),[this.visible_]},Jn);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){var t,e,n=Xn.call(this,["visible"])||this;return"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(e="visibilitychange",t="hidden"):void 0!==document.mozHidden?(e="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(e="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(e="webkitvisibilitychange",t="webkitHidden")),n.visible_=!0,e&&document.addEventListener(e,function(){var e=!document[t];e!==n.visible_&&(n.visible_=e,n.trigger("visible",e))},!1),n}var Zn,er=(Zn=zn,f.__extends(tr,Zn),tr.getInstance=function(){return new tr},tr.prototype.getInitialEvent=function(e){return E.assert("online"===e,"Unknown event type: "+e),[this.online_]},tr.prototype.currentlyOnline=function(){return this.online_},tr);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){var e=Zn.call(this,["online"])||this;return e.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||E.isMobileCordova()||(window.addEventListener("online",function(){e.online_||(e.online_=!0,e.trigger("online",!0))},!1),window.addEventListener("offline",function(){e.online_&&(e.online_=!1,e.trigger("online",!1))},!1)),e}var nr=(rr.prototype.closeAfter=function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},rr.prototype.handleResponse=function(e,t){var r=this;this.pendingResponses[e]=t;for(var n=function(){var t=i.pendingResponses[i.currentResponseNum];delete i.pendingResponses[i.currentResponseNum];for(var e=function(e){t[e]&&W(function(){r.onMessage_(t[e])})},n=0;n<t.length;++n)e(n);if(i.currentResponseNum===i.closeAfterResponse)return i.onClose&&(i.onClose(),i.onClose=null),"break";i.currentResponseNum++},i=this;this.pendingResponses[this.currentResponseNum]&&"break"!==n(););},rr);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}var ir=(or.prototype.open=function(e,t){var s=this;this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new nr(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(function(){s.log_("Timed out trying to connect."),s.onClosed_(),s.connectTimeoutTimer_=null},Math.floor(3e4)),function(t){if(E.isNodeSdk()||"complete"===document.readyState)t();else{var n=!1,e=function e(){document.body?n||(n=!0,t()):setTimeout(e,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&e()}),window.attachEvent("onload",e))}}(function(){if(!s.isClosed_){s.scriptTagHolder=new sr(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=f.__read(e,5),r=n[0],i=n[1],o=n[2];if(n[3],n[4],s.incrementIncomingBytes_(e),s.scriptTagHolder)if(s.connectTimeoutTimer_&&(clearTimeout(s.connectTimeoutTimer_),s.connectTimeoutTimer_=null),s.everConnected_=!0,"start"===r)s.id=i,s.password=o;else{if("close"!==r)throw new Error("Unrecognized command received: "+r);i?(s.scriptTagHolder.sendNewPolls=!1,s.myPacketOrderer.closeAfter(i,function(){s.onClosed_()})):s.onClosed_()}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=f.__read(e,2),r=n[0],i=n[1];s.incrementIncomingBytes_(e),s.myPacketOrderer.handleResponse(r,i)},function(){s.onClosed_()},s.urlFn);var e={start:"t"};e.ser=Math.floor(1e8*Math.random()),s.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=s.scriptTagHolder.uniqueCallbackIdentifier),e.v=Y,s.transportSessionId&&(e.s=s.transportSessionId),s.lastSessionId&&(e.ls=s.lastSessionId),"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf(K)&&(e.r="f");var t=s.urlFn(e);s.log_("Connecting via long-poll to "+t),s.scriptTagHolder.addTag(t,function(){})}})},or.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},or.forceAllow=function(){or.forceAllow_=!0},or.forceDisallow=function(){or.forceDisallow_=!0},or.isAvailable=function(){return!(E.isNodeSdk()||!or.forceAllow_&&(or.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"===("undefined"==typeof window?"undefined":C(window))&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"===("undefined"==typeof Windows?"undefined":C(Windows))&&"object"===C(Windows.UI)))},or.prototype.markConnectionHealthy=function(){},or.prototype.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},or.prototype.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},or.prototype.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},or.prototype.send=function(e){var t=E.stringify(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=E.base64Encode(t),r=S(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++},or.prototype.addDisconnectPingFrame=function(e,t){if(!E.isNodeSdk()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}},or.prototype.incrementIncomingBytes_=function(e){var t=E.stringify(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)},or);function or(e,t,n,r){this.connId=e,this.repoInfo=t,this.transportSessionId=n,this.lastSessionId=r,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_(e),this.stats_=Wn.getCollection(t),this.urlFn=function(e){return t.connectionURL(G,e)}}var sr=(ar.createIFrame_=function(){var t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{t.contentWindow.document||d("No IE domain setting required")}catch(e){var n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t},ar.prototype.close=function(){var e=this;this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)},Math.floor(0)));var t=this.onDisconnect;t&&(this.onDisconnect=null,t())},ar.prototype.startLongPoll=function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););},ar.prototype.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(0<this.pendingSegs.length?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;0<this.pendingSegs.length&&this.pendingSegs[0].d.length+30+n.length<=1870;){var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1},ar.prototype.enqueueSegment=function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()},ar.prototype.addLongPollTag_=function(e,t){var n=this;function r(){n.outstandingRequests.delete(t),n.newRequest_()}this.outstandingRequests.add(t);var i=setTimeout(r,Math.floor(25e3));this.addTag(e,function(){clearTimeout(i),r()})},ar.prototype.addTag=function(e,n){var r=this;E.isNodeSdk()?this.doNodeLongPoll(e,n):setTimeout(function(){try{if(!r.sendNewPolls)return;var t=r.myIFrame.doc.createElement("script");t.type="text/javascript",t.async=!0,t.src=e,t.onload=t.onreadystatechange=function(){var e=t.readyState;e&&"loaded"!==e&&"complete"!==e||(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),n())},t.onerror=function(){d("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},r.myIFrame.doc.body.appendChild(t)}catch(e){}},Math.floor(1))},ar);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,E.isNodeSdk())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=D(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ar.createIFrame_();var i="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length))i='<script>document.domain="'+document.domain+'";<\/script>';var o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(e){d("frame writing exception"),e.stack&&d(e.stack),d(e)}}}var hr="";
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lr=null;"undefined"!=typeof MozWebSocket?lr=MozWebSocket:"undefined"!=typeof WebSocket&&(lr=WebSocket);var ur=(cr.connectionURL_=function(e,t,n){var r={};return r.v=Y,!E.isNodeSdk()&&"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf(K)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),e.connectionURL(z,r)},cr.prototype.open=function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,N.set("previous_websocket_failure",!0);try{if(E.isNodeSdk()){var r=E.CONSTANTS.NODE_ADMIN?"AdminNode":"Node",i={headers:{"User-Agent":"Firebase/5/"+hr+"/"+h.platform+"/"+r}},o=h.env,s=0===this.connURL.indexOf("wss://")?o.HTTPS_PROXY||o.https_proxy:o.HTTP_PROXY||o.http_proxy;s&&(i.proxy={origin:s}),this.mySock=new lr(this.connURL,[],i)}else this.mySock=new lr(this.connURL)}catch(e){this.log_("Error instantiating WebSocket.");var a=e.message||e.data;return a&&this.log_(a),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}},cr.prototype.start=function(){},cr.forceDisallow=function(){cr.forceDisallow_=!0},cr.isAvailable=function(){var e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&1<t.length&&parseFloat(t[1])<4.4&&(e=!0)}return!e&&null!==lr&&!cr.forceDisallow_},cr.previouslyFailed=function(){return N.isInMemoryStorage||!0===N.get("previous_websocket_failure")},cr.prototype.markConnectionHealthy=function(){N.remove("previous_websocket_failure")},cr.prototype.appendFrame_=function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=E.jsonEval(t);this.onMessage(n)}},cr.prototype.handleNewFrameCount_=function(e){this.totalFrames=e,this.frames=[]},cr.prototype.extractFrameCount_=function(e){if(E.assert(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e},cr.prototype.handleIncomingFrame=function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}},cr.prototype.send=function(e){this.resetKeepAlive();var t=E.stringify(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=S(t,16384);1<n.length&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])},cr.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},cr.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},cr.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},cr.prototype.resetKeepAlive=function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()},Math.floor(45e3))},cr.prototype.sendString_=function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},cr.responsesRequiredToBeHealthy=2,cr.healthyTimeout=3e4,cr);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e,t,n,r){this.connId=e,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_(this.connId),this.stats_=Wn.getCollection(t),this.connURL=cr.connectionURL_(t,n,r)}var pr=(Object.defineProperty(dr,"ALL_TRANSPORTS",{get:function(){return[ir,ur]},enumerable:!0,configurable:!0}),dr.prototype.initTransports_=function(e){var t,n,r=ur&&ur.isAvailable(),i=r&&!ur.previouslyFailed();if(e.webSocketOnly&&(r||g("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ur];else{var o=this.transports_=[];try{for(var s=f.__values(dr.ALL_TRANSPORTS),a=s.next();!a.done;a=s.next()){var h=a.value;h&&h.isAvailable()&&o.push(h)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}}},dr.prototype.initialTransport=function(){if(0<this.transports_.length)return this.transports_[0];throw new Error("No transports available")},dr.prototype.upgradeTransport=function(){return 1<this.transports_.length?this.transports_[1]:null},dr);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e){this.initTransports_(e)}var fr=(_r.prototype.start_=function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,void 0,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(function(){e.conn_&&e.conn_.open(n,r)},Math.floor(0));var i=t.healthyTimeout||0;0<i&&(this.healthyTimeout_=Q(function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&102400<e.conn_.bytesReceived?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&10240<e.conn_.bytesSent?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))},Math.floor(i)))},_r.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},_r.prototype.disconnReceiver_=function(t){var n=this;return function(e){t===n.conn_?n.onConnectionLost_(e):t===n.secondaryConn_?(n.log_("Secondary connection lost."),n.onSecondaryConnectionLost_()):n.log_("closing an old connection")}},_r.prototype.connReceiver_=function(t){var n=this;return function(e){2!==n.state_&&(t===n.rx_?n.onPrimaryMessageReceived_(e):t===n.secondaryConn_?n.onSecondaryMessageReceived_(e):n.log_("message on old connection"))}},_r.prototype.sendRequest=function(e){var t={t:"d",d:e};this.sendData_(t)},_r.prototype.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},_r.prototype.onSecondaryControl_=function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}},_r.prototype.onSecondaryMessageReceived_=function(e){var t=T("t",e),n=T("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}},_r.prototype.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))},_r.prototype.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},_r.prototype.onPrimaryMessageReceived_=function(e){var t=T("t",e),n=T("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)},_r.prototype.onDataMessage_=function(e){this.onPrimaryResponse_(),this.onMessage_(e)},_r.prototype.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},_r.prototype.onControl_=function(e){var t=T("t",e);if("d"in e){var n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?y("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):y("Unknown control packet command: "+t)}},_r.prototype.onHandshake_=function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.updateHost(r),0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Y!==n&&g("Protocol version mismatch detected"),this.tryStartUpgrade_())},_r.prototype.tryStartUpgrade_=function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)},_r.prototype.startUpgrade_=function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Q(function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())},Math.floor(6e4))},_r.prototype.onReset_=function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.updateHost(e),1===this.state_?this.close():(this.closeConnections_(),this.start_())},_r.prototype.onConnectionEstablished_=function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Q(function(){n.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))},_r.prototype.sendPingOnPrimaryIfNecessary_=function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))},_r.prototype.onSecondaryConnectionLost_=function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()},_r.prototype.onConnectionLost_=function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(N.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()},_r.prototype.onConnectionShutdown_=function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()},_r.prototype.sendData_=function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)},_r.prototype.close=function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},_r.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},_r);function _r(e,t,n,r,i,o,s){this.id=e,this.repoInfo_=t,this.onMessage_=n,this.onReady_=r,this.onDisconnect_=i,this.onKill_=o,this.lastSessionId=s,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_("c:"+this.id+":"),this.transportManager_=new pr(t),this.log_("Connection created"),this.start_()}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yr=(vr.prototype.put=function(e,t,n,r){},vr.prototype.merge=function(e,t,n,r){},vr.prototype.refreshAuthToken=function(e){},vr.prototype.onDisconnectPut=function(e,t,n){},vr.prototype.onDisconnectMerge=function(e,t,n){},vr.prototype.onDisconnectCancel=function(e,t){},vr.prototype.reportStats=function(e){},vr);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(){}var gr,mr=(gr=yr,f.__extends(Cr,gr),Cr.prototype.sendRequest=function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(E.stringify(i)),E.assert(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)},Cr.prototype.listen=function(e,t,n,r){var i=e.queryIdentifier(),o=e.path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),E.assert(e.getQueryParams().isDefault()||!e.getQueryParams().loadsAllData(),"listen() called for non-default but complete query"),E.assert(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");var s={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,s),this.connected_&&this.sendListen_(s)},Cr.prototype.sendListen_=function(r){var i=this,o=r.query,s=o.path.toString(),a=o.queryIdentifier();this.log_("Listen on "+s+" for "+a);var e={p:s};r.tag&&(e.q=o.queryObject(),e.t=r.tag),e.h=r.hashFn(),this.sendRequest("q",e,function(e){var t=e.d,n=e.s;Cr.warnOnListenWarnings_(t,o),(i.listens.get(s)&&i.listens.get(s).get(a))===r&&(i.log_("listen response",e),"ok"!==n&&i.removeListen_(s,a),r.onComplete&&r.onComplete(n,t))})},Cr.warnOnListenWarnings_=function(e,t){if(e&&"object"===(void 0===e?"undefined":C(e))&&E.contains(e,"w")){var n=E.safeGet(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t.getQueryParams().getIndex().toString()+'"',i=t.path.toString();g("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding "+r+" at "+i+" to your security rules for better performance.")}}},Cr.prototype.refreshAuthToken=function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},function(){}),this.reduceReconnectDelayIfAdminCredential_(e)},Cr.prototype.reduceReconnectDelayIfAdminCredential_=function(e){(e&&40===e.length||E.isAdmin(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)},Cr.prototype.tryAuth=function(){var r=this;if(this.connected_&&this.authToken_){var i=this.authToken_,e=E.isValidFormat(i)?"auth":"gauth",t={cred:i};null===this.authOverride_?t.noauth=!0:"object"===C(this.authOverride_)&&(t.authvar=this.authOverride_),this.sendRequest(e,t,function(e){var t=e.s,n=e.d||"error";r.authToken_===i&&("ok"===t?r.invalidAuthTokenCount_=0:r.onAuthRevoked_(t,n))})}},Cr.prototype.unlisten=function(e,t){var n=e.path.toString(),r=e.queryIdentifier();this.log_("Unlisten called for "+n+" "+r),E.assert(e.getQueryParams().isDefault()||!e.getQueryParams().loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e.queryObject(),t)},Cr.prototype.sendUnlisten_=function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)},Cr.prototype.onDisconnectPut=function(e,t,n){this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})},Cr.prototype.onDisconnectMerge=function(e,t,n){this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})},Cr.prototype.onDisconnectCancel=function(e,t){this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})},Cr.prototype.sendOnDisconnect_=function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,function(e){r&&setTimeout(function(){r(e.s,e.d)},Math.floor(0))})},Cr.prototype.put=function(e,t,n,r){this.putInternal("p",e,t,n,r)},Cr.prototype.merge=function(e,t,n,r){this.putInternal("m",e,t,n,r)},Cr.prototype.putInternal=function(e,t,n,r,i){var o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;var s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)},Cr.prototype.sendPut_=function(t){var n=this,r=this.outstandingPuts_[t].action,e=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(r,e,function(e){n.log_(r+" response",e),delete n.outstandingPuts_[t],n.outstandingPutCount_--,0===n.outstandingPutCount_&&(n.outstandingPuts_=[]),i&&i(e.s,e.d)})},Cr.prototype.reportStats=function(e){var n=this;if(this.connected_){var t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,function(e){if("ok"!==e.s){var t=e.d;n.log_("reportStats","Error sending stats: "+t)}})}},Cr.prototype.onDataMessage_=function(e){if("r"in e){this.log_("from server: "+E.stringify(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}},Cr.prototype.onDataPush_=function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):y("Unrecognized action received from server: "+E.stringify(e)+"\nAre you using the latest client?")},Cr.prototype.onReady_=function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},Cr.prototype.scheduleConnect_=function(e){var t=this;E.assert(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(function(){t.establishConnectionTimer_=null,t.establishConnection_()},Math.floor(e))},Cr.prototype.onVisible_=function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e},Cr.prototype.onOnline_=function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},Cr.prototype.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(3e4<(new Date).getTime()-this.lastConnectionEstablishedTime_&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime());var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)},Cr.prototype.establishConnection_=function(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;var t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Cr.nextConnectionId_++,o=this,s=this.lastSessionId,a=!1,h=null,l=function(){h?h.close():(a=!0,r())};this.realtime_={close:l,sendRequest:function(e){E.assert(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(e)}};var e=this.forceTokenRefresh_;this.forceTokenRefresh_=!1,this.authTokenProvider_.getToken(e).then(function(e){a?d("getToken() completed but was canceled"):(d("getToken() completed. Creating connection."),o.authToken_=e&&e.accessToken,h=new fr(i,o.repoInfo_,t,n,r,function(e){g(e+" ("+o.repoInfo_.toString()+")"),o.interrupt("server_kill")},s))}).then(null,function(e){o.log_("Failed to get token: "+e),a||(E.CONSTANTS.NODE_ADMIN&&g(e),l())})}},Cr.prototype.interrupt=function(e){d("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},Cr.prototype.resume=function(e){d("Resuming connection for reason: "+e),delete this.interruptReasons_[e],E.isEmpty(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))},Cr.prototype.handleTimestamp_=function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})},Cr.prototype.cancelSentTransactions_=function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])},Cr.prototype.onListenRevoked_=function(e,t){var n;n=t?t.map(function(e){return b(e)}).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")},Cr.prototype.removeListen_=function(e,t){var n,r=new V(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n},Cr.prototype.onAuthRevoked_=function(e,t){d("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,3<=this.invalidAuthTokenCount_&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))},Cr.prototype.onSecurityDebugPacket_=function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))},Cr.prototype.restoreState_=function(){var t,e,n,r;this.tryAuth();try{for(var i=f.__values(this.listens.values()),o=i.next();!o.done;o=i.next()){var s=o.value;try{for(var a=(n=void 0,f.__values(s.values())),h=a.next();!h.done;h=a.next()){var l=h.value;this.sendListen_(l)}}catch(e){n={error:e}}finally{try{h&&!h.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}for(var u=0;u<this.outstandingPuts_.length;u++)this.outstandingPuts_[u]&&this.sendPut_(u);for(;this.onDisconnectRequestQueue_.length;){var c=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(c.action,c.pathString,c.data,c.onComplete)}},Cr.prototype.sendConnectStats_=function(){var e={},t="js";E.CONSTANTS.NODE_ADMIN?t="admin_node":E.CONSTANTS.NODE_CLIENT&&(t="node"),e["sdk."+t+"."+hr.replace(/\./g,"-")]=1,E.isMobileCordova()?e["framework.cordova"]=1:E.isReactNative()&&(e["framework.reactnative"]=1),this.reportStats(e)},Cr.prototype.shouldReconnect_=function(){var e=er.getInstance().currentlyOnline();return E.isEmpty(this.interruptReasons_)&&e},Cr.nextPersistentConnectionId_=0,Cr.nextConnectionId_=0,Cr);function Cr(e,t,n,r,i,o){var s=gr.call(this)||this;if(s.repoInfo_=e,s.onDataUpdate_=t,s.onConnectStatus_=n,s.onServerInfoUpdate_=r,s.authTokenProvider_=i,s.authOverride_=o,s.id=Cr.nextPersistentConnectionId_++,s.log_=_("p:"+s.id+":"),s.interruptReasons_={},s.listens=new Map,s.outstandingPuts_=[],s.outstandingPutCount_=0,s.onDisconnectRequestQueue_=[],s.connected_=!1,s.reconnectDelay_=1e3,s.maxReconnectDelay_=3e5,s.securityDebugCallback_=null,s.lastSessionId=null,s.establishConnectionTimer_=null,s.visible_=!1,s.requestCBHash_={},s.requestNumber_=0,s.realtime_=null,s.authToken_=null,s.forceTokenRefresh_=!1,s.invalidAuthTokenCount_=0,s.firstConnection_=!0,s.lastConnectionAttemptTime_=null,s.lastConnectionEstablishedTime_=null,o&&!E.isNodeSdk())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return s.scheduleConnect_(0),$n.getInstance().on("visible",s.onVisible_,s),-1===e.host.indexOf("fblocal")&&er.getInstance().on("online",s.onOnline_,s),s}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Er,wr=(Er=yr,f.__extends(Tr,Er),Tr.prototype.reportStats=function(e){throw new Error("Method not implemented.")},Tr.getListenId_=function(e,t){return void 0!==t?"tag$"+t:(E.assert(e.getQueryParams().isDefault(),"should have a tag if it's not a default query."),e.path.toString())},Tr.prototype.listen=function(e,t,r,i){var o=this,s=e.path.toString();this.log_("Listen called for "+s+" "+e.queryIdentifier());var a=Tr.getListenId_(e,r),h={};this.listens_[a]=h;var n=e.getQueryParams().toRestQueryStringParameters();this.restRequest_(s+".json",n,function(e,t){var n=t;404===e&&(e=n=null),null===e&&o.onDataUpdate_(s,n,!1,r),E.safeGet(o.listens_,a)===h&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})},Tr.prototype.unlisten=function(e,t){var n=Tr.getListenId_(e,t);delete this.listens_[n]},Tr.prototype.refreshAuthToken=function(e){},Tr.prototype.restRequest_=function(i,o,s){var a=this;void 0===o&&(o={}),o.format="export",this.authTokenProvider_.getToken(!1).then(function(e){var t=e&&e.accessToken;t&&(o.auth=t);var n=(a.repoInfo_.secure?"https://":"http://")+a.repoInfo_.host+i+"?ns="+a.repoInfo_.namespace+E.querystring(o);a.log_("Sending REST request for "+n);var r=new XMLHttpRequest;r.onreadystatechange=function(){if(s&&4===r.readyState){a.log_("REST Response for "+n+" received. status:",r.status,"response:",r.responseText);var e=null;if(200<=r.status&&r.status<300){try{e=E.jsonEval(r.responseText)}catch(e){g("Failed to parse JSON response for "+n+": "+r.responseText)}s(null,e)}else 401!==r.status&&404!==r.status&&g("Got unsuccessful REST response for "+n+" Status: "+r.status),s(r.status);s=null}},r.open("GET",n,!0),r.send()})},Tr);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e,t,n){var r=Er.call(this)||this;return r.repoInfo_=e,r.onDataUpdate_=t,r.authTokenProvider_=n,r.log_=_("p:rest:"),r.listens_={},r}var br="repo_interrupt",Sr=(Ir.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},Ir.prototype.name=function(){return this.repoInfo_.namespace},Ir.prototype.serverTime=function(){var e=this.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+e},Ir.prototype.generateServerValues=function(){return(e=e={timestamp:this.serverTime()}).timestamp=e.timestamp||(new Date).getTime(),e;var e},Ir.prototype.onDataUpdate_=function(e,t,n,r){this.dataUpdateCount++;var i=new V(e);t=this.interceptServerDataCallback_?this.interceptServerDataCallback_(e,t):t;var o=[];if(r)if(n){var s=E.map(t,function(e){return _t(e)});o=this.serverSyncTree_.applyTaggedQueryMerge(i,s,r)}else{var a=_t(t);o=this.serverSyncTree_.applyTaggedQueryOverwrite(i,a,r)}else if(n){var h=E.map(t,function(e){return _t(e)});o=this.serverSyncTree_.applyServerMerge(i,h)}else{var l=_t(t);o=this.serverSyncTree_.applyServerOverwrite(i,l)}var u=i;0<o.length&&(u=this.rerunTransactions_(i)),this.eventQueue_.raiseEventsForChangedPath(u,o)},Ir.prototype.interceptServerData_=function(e){this.interceptServerDataCallback_=e},Ir.prototype.onConnectStatus_=function(e){this.updateInfo_("connected",e),!1===e&&this.runOnDisconnectEvents_()},Ir.prototype.onServerInfoUpdate_=function(e){var n=this;L(e,function(e,t){n.updateInfo_(e,t)})},Ir.prototype.updateInfo_=function(e,t){var n=new V("/.info/"+e),r=_t(t);this.infoData_.updateSnapshot(n,r);var i=this.infoSyncTree_.applyServerOverwrite(n,r);this.eventQueue_.raiseEventsForChangedPath(n,i)},Ir.prototype.getNextWriteId_=function(){return this.nextWriteId_++},Ir.prototype.setWithPriority=function(i,e,t,o){var s=this;this.log_("set",{path:i.toString(),value:e,priority:t});var n=this.generateServerValues(),r=_t(e,t),a=Qt(r,n),h=this.getNextWriteId_(),l=this.serverSyncTree_.applyUserOverwrite(i,a,h,!0);this.eventQueue_.queueEvents(l),this.server_.put(i.toString(),r.val(!0),function(e,t){var n="ok"===e;n||g("set at "+i+" failed: "+e);var r=s.serverSyncTree_.ackUserWrite(h,!n);s.eventQueue_.raiseEventsForChangedPath(i,r),s.callOnCompleteCallback(o,e,t)});var u=this.abortTransactions_(i);this.rerunTransactions_(u),this.eventQueue_.raiseEventsForChangedPath(u,[])},Ir.prototype.update=function(o,e,s){var a=this;this.log_("update",{path:o.toString(),value:e});var r=!0,i=this.generateServerValues(),h={};if(L(e,function(e,t){r=!1;var n=_t(t);h[e]=Qt(n,i)}),r)d("update() called with empty data.  Don't do anything."),this.callOnCompleteCallback(s,"ok");else{var l=this.getNextWriteId_(),t=this.serverSyncTree_.applyUserMerge(o,h,l);this.eventQueue_.queueEvents(t),this.server_.merge(o.toString(),e,function(e,t){var n="ok"===e;n||g("update at "+o+" failed: "+e);var r=a.serverSyncTree_.ackUserWrite(l,!n),i=0<r.length?a.rerunTransactions_(o):o;a.eventQueue_.raiseEventsForChangedPath(i,r),a.callOnCompleteCallback(s,e,t)}),L(e,function(e){var t=a.abortTransactions_(o.child(e));a.rerunTransactions_(t)}),this.eventQueue_.raiseEventsForChangedPath(o,[])}},Ir.prototype.runOnDisconnectEvents_=function(){var r=this;this.log_("onDisconnectEvents");var e,n,i,t=this.generateServerValues(),o=(e=this.onDisconnect_,n=t,i=new Ft,e.forEachTree(new V(""),function(e,t){i.remember(e,Qt(t,n))}),i),s=[];o.forEachTree(V.Empty,function(e,t){s=s.concat(r.serverSyncTree_.applyServerOverwrite(e,t));var n=r.abortTransactions_(e);r.rerunTransactions_(n)}),this.onDisconnect_=new Ft,this.eventQueue_.raiseEventsForChangedPath(V.Empty,s)},Ir.prototype.onDisconnectCancel=function(n,r){var i=this;this.server_.onDisconnectCancel(n.toString(),function(e,t){"ok"===e&&i.onDisconnect_.forget(n),i.callOnCompleteCallback(r,e,t)})},Ir.prototype.onDisconnectSet=function(n,e,r){var i=this,o=_t(e);this.server_.onDisconnectPut(n.toString(),o.val(!0),function(e,t){"ok"===e&&i.onDisconnect_.remember(n,o),i.callOnCompleteCallback(r,e,t)})},Ir.prototype.onDisconnectSetWithPriority=function(n,e,t,r){var i=this,o=_t(e,t);this.server_.onDisconnectPut(n.toString(),o.val(!0),function(e,t){"ok"===e&&i.onDisconnect_.remember(n,o),i.callOnCompleteCallback(r,e,t)})},Ir.prototype.onDisconnectUpdate=function(r,n,i){var o=this;if(E.isEmpty(n))return d("onDisconnect().update() called with empty data.  Don't do anything."),void this.callOnCompleteCallback(i,"ok");this.server_.onDisconnectMerge(r.toString(),n,function(e,t){"ok"===e&&L(n,function(e,t){var n=_t(t);o.onDisconnect_.remember(r.child(e),n)}),o.callOnCompleteCallback(i,e,t)})},Ir.prototype.addEventCallbackForQuery=function(e,t){var n;n=".info"===e.path.getFront()?this.infoSyncTree_.addEventRegistration(e,t):this.serverSyncTree_.addEventRegistration(e,t),this.eventQueue_.raiseEventsAtPath(e.path,n)},Ir.prototype.removeEventCallbackForQuery=function(e,t){var n;n=".info"===e.path.getFront()?this.infoSyncTree_.removeEventRegistration(e,t):this.serverSyncTree_.removeEventRegistration(e,t),this.eventQueue_.raiseEventsAtPath(e.path,n)},Ir.prototype.interrupt=function(){this.persistentConnection_&&this.persistentConnection_.interrupt(br)},Ir.prototype.resume=function(){this.persistentConnection_&&this.persistentConnection_.resume(br)},Ir.prototype.stats=function(e){if(void 0===e&&(e=!1),"undefined"!=typeof console){var t;t=e?(this.statsListener_||(this.statsListener_=new qn(this.stats_)),this.statsListener_.get()):this.stats_.get();var i=Object.keys(t).reduce(function(e,t){return Math.max(t.length,e)},0);L(t,function(e,t){for(var n=e,r=e.length;r<i+2;r++)n+=" ";console.log(n+t)})}},Ir.prototype.statsIncrementCounter=function(e){this.stats_.incrementCounter(e),this.statsReporter_.includeStat(e)},Ir.prototype.log_=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="";this.persistentConnection_&&(n=this.persistentConnection_.id+":"),d.apply(void 0,f.__spread([n],e))},Ir.prototype.callOnCompleteCallback=function(r,i,o){r&&W(function(){if("ok"===i)r(null);else{var e=(i||"error").toUpperCase(),t=e;o&&(t+=": "+o);var n=new Error(t);n.code=e,r(n)}})},Object.defineProperty(Ir.prototype,"database",{get:function(){return this.__database||(this.__database=new Br(this))},enumerable:!0,configurable:!0}),Ir);function Ir(e,t,n,r){var s=this;this.repoInfo_=e,this.app=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jn,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=new Ft,this.persistentConnection_=null;var i=new Fn(n,r);if(this.stats_=Wn.getCollection(e),t||0<=("object"===("undefined"==typeof window?"undefined":C(window))&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.server_=new wr(this.repoInfo_,this.onDataUpdate_.bind(this),i),setTimeout(this.onConnectStatus_.bind(this,!0),0);else{var o=n.options.databaseAuthVariableOverride;if(null!=o){if("object"!==(void 0===o?"undefined":C(o)))throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{E.stringify(o)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}this.persistentConnection_=new mr(this.repoInfo_,this.onDataUpdate_.bind(this),this.onConnectStatus_.bind(this),this.onServerInfoUpdate_.bind(this),i,o),this.server_=this.persistentConnection_}i.addTokenChangeListener(function(e){s.server_.refreshAuthToken(e)}),this.statsReporter_=Wn.getOrCreateReporter(e,function(){return new Vn(s.stats_,s.server_)}),this.transactionsInit_(),this.infoData_=new kn,this.infoSyncTree_=new Dn({startListening:function(e,t,n,r){var i=[],o=s.infoData_.getNode(e.path);return o.isEmpty()||(i=s.infoSyncTree_.applyServerOverwrite(e.path,o),setTimeout(function(){r("ok")},0)),i},stopListening:function(){}}),this.updateInfo_("connected",!1),this.serverSyncTree_=new Dn({startListening:function(r,e,t,i){return s.server_.listen(r,t,e,function(e,t){var n=i(e,t);s.eventQueue_.raiseEventsForChangedPath(r.path,n)}),[]},stopListening:function(e,t){s.server_.unlisten(e,t)}})}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nr=(Pr.prototype.getStartPost=function(){return this.startPost_},Pr.prototype.getEndPost=function(){return this.endPost_},Pr.prototype.matches=function(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0},Pr.prototype.updateChild=function(e,t,n,r,i,o){return this.matches(new Te(t,n))||(n=lt.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)},Pr.prototype.updateFullNode=function(e,t,n){t.isLeafNode()&&(t=lt.EMPTY_NODE);var r=t.withIndex(this.index_);r=r.updatePriority(lt.EMPTY_NODE);var i=this;return t.forEachChild(Ve,function(e,t){i.matches(new Te(e,t))||(r=r.updateImmediateChild(e,lt.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)},Pr.prototype.updatePriority=function(e,t){return e},Pr.prototype.filtersNodes=function(){return!0},Pr.prototype.getIndexedFilter=function(){return this.indexedFilter_},Pr.prototype.getIndex=function(){return this.index_},Pr.getStartPost_=function(e){if(e.hasStart()){var t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()},Pr.getEndPost_=function(e){if(e.hasEnd()){var t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()},Pr);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(e){this.indexedFilter_=new sn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Pr.getStartPost_(e),this.endPost_=Pr.getEndPost_(e)}var Rr=(Dr.prototype.updateChild=function(e,t,n,r,i,o){return this.rangedFilter_.matches(new Te(t,n))||(n=lt.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)},Dr.prototype.updateFullNode=function(e,t,n){var r;if(t.isLeafNode()||t.isEmpty())r=lt.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){r=lt.EMPTY_NODE.withIndex(this.index_);var i=void 0;i=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var o=0;i.hasNext()&&o<this.limit_;){var s=i.getNext();if(!(this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),s)<=0:this.index_.compare(s,this.rangedFilter_.getEndPost())<=0))break;r=r.updateImmediateChild(s.name,s.node),o++}}else{r=(r=t.withIndex(this.index_)).updatePriority(lt.EMPTY_NODE);var a=void 0,h=void 0,l=void 0;if(i=void 0,this.reverse_){i=r.getReverseIterator(this.index_),a=this.rangedFilter_.getEndPost(),h=this.rangedFilter_.getStartPost();var u=this.index_.getCompare();l=function(e,t){return u(t,e)}}else i=r.getIterator(this.index_),a=this.rangedFilter_.getStartPost(),h=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();o=0;for(var c=!1;i.hasNext();)s=i.getNext(),!c&&l(a,s)<=0&&(c=!0),c&&o<this.limit_&&l(s,h)<=0?o++:r=r.updateImmediateChild(s.name,lt.EMPTY_NODE)}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)},Dr.prototype.updatePriority=function(e,t){return e},Dr.prototype.filtersNodes=function(){return!0},Dr.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},Dr.prototype.getIndex=function(){return this.index_},Dr.prototype.fullLimitUpdateChild_=function(e,t,n,r,i){var o;if(this.reverse_){var s=this.index_.getCompare();o=function(e,t){return s(t,e)}}else o=this.index_.getCompare();var a=e;E.assert(a.numChildren()===this.limit_,"");var h=new Te(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(h);if(a.hasChild(t)){for(var c=a.getImmediateChild(t),p=r.getChildAfterChild(this.index_,l,this.reverse_);null!=p&&(p.name===t||a.hasChild(p.name));)p=r.getChildAfterChild(this.index_,p,this.reverse_);var d=null==p?1:o(p,h);if(u&&!n.isEmpty()&&0<=d)return null!=i&&i.trackChildChange(rn.childChangedChange(t,n,c)),a.updateImmediateChild(t,n);null!=i&&i.trackChildChange(rn.childRemovedChange(t,c));var f=a.updateImmediateChild(t,lt.EMPTY_NODE);return null!=p&&this.rangedFilter_.matches(p)?(null!=i&&i.trackChildChange(rn.childAddedChange(p.name,p.node)),f.updateImmediateChild(p.name,p.node)):f}return!n.isEmpty()&&u&&0<=o(l,h)?(null!=i&&(i.trackChildChange(rn.childRemovedChange(l.name,l.node)),i.trackChildChange(rn.childAddedChange(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,lt.EMPTY_NODE)):e},Dr);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e){this.rangedFilter_=new Nr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}var xr=(kr.prototype.hasStart=function(){return this.startSet_},kr.prototype.isViewFromLeft=function(){return""===this.viewFrom_?this.startSet_:this.viewFrom_===kr.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT},kr.prototype.getIndexStartValue=function(){return E.assert(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},kr.prototype.getIndexStartName=function(){return E.assert(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:O},kr.prototype.hasEnd=function(){return this.endSet_},kr.prototype.getIndexEndValue=function(){return E.assert(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},kr.prototype.getIndexEndName=function(){return E.assert(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:F},kr.prototype.hasLimit=function(){return this.limitSet_},kr.prototype.hasAnchoredLimit=function(){return this.limitSet_&&""!==this.viewFrom_},kr.prototype.getLimit=function(){return E.assert(this.limitSet_,"Only valid if limit has been set"),this.limit_},kr.prototype.getIndex=function(){return this.index_},kr.prototype.copy_=function(){var e=new kr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e},kr.prototype.limit=function(e){var t=this.copy_();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="",t},kr.prototype.limitToFirst=function(e){var t=this.copy_();return t.limitSet_=!0,t.limit_=e,t.viewFrom_=kr.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT,t},kr.prototype.limitToLast=function(e){var t=this.copy_();return t.limitSet_=!0,t.limit_=e,t.viewFrom_=kr.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT,t},kr.prototype.startAt=function(e,t){var n=this.copy_();return n.startSet_=!0,void 0===e&&(e=null),n.indexStartValue_=e,null!=t?(n.startNameSet_=!0,n.indexStartName_=t):(n.startNameSet_=!1,n.indexStartName_=""),n},kr.prototype.endAt=function(e,t){var n=this.copy_();return n.endSet_=!0,void 0===e&&(e=null),n.indexEndValue_=e,void 0!==t?(n.endNameSet_=!0,n.indexEndName_=t):(n.endNameSet_=!1,n.indexEndName_=""),n},kr.prototype.orderBy=function(e){var t=this.copy_();return t.index_=e,t},kr.prototype.getQueryObject=function(){var e=kr.WIRE_PROTOCOL_CONSTANTS_,t={};if(this.startSet_&&(t[e.INDEX_START_VALUE]=this.indexStartValue_,this.startNameSet_&&(t[e.INDEX_START_NAME]=this.indexStartName_)),this.endSet_&&(t[e.INDEX_END_VALUE]=this.indexEndValue_,this.endNameSet_&&(t[e.INDEX_END_NAME]=this.indexEndName_)),this.limitSet_){t[e.LIMIT]=this.limit_;var n=this.viewFrom_;""===n&&(n=this.isViewFromLeft()?e.VIEW_FROM_LEFT:e.VIEW_FROM_RIGHT),t[e.VIEW_FROM]=n}return this.index_!==Ve&&(t[e.INDEX]=this.index_.toString()),t},kr.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},kr.prototype.isDefault=function(){return this.loadsAllData()&&this.index_===Ve},kr.prototype.getNodeFilter=function(){return this.loadsAllData()?new sn(this.getIndex()):new(this.hasLimit()?Rr:Nr)(this)},kr.prototype.toRestQueryStringParameters=function(){var e,t=kr.REST_QUERY_CONSTANTS_,n={};return this.isDefault()||(e=this.index_===Ve?t.PRIORITY_INDEX:this.index_===gt?t.VALUE_INDEX:this.index_===ke?t.KEY_INDEX:(E.assert(this.index_ instanceof mt,"Unrecognized index type!"),this.index_.toString()),n[t.ORDER_BY]=E.stringify(e),this.startSet_&&(n[t.START_AT]=E.stringify(this.indexStartValue_),this.startNameSet_&&(n[t.START_AT]+=","+E.stringify(this.indexStartName_))),this.endSet_&&(n[t.END_AT]=E.stringify(this.indexEndValue_),this.endNameSet_&&(n[t.END_AT]+=","+E.stringify(this.indexEndName_))),this.limitSet_&&(this.isViewFromLeft()?n[t.LIMIT_TO_FIRST]=this.limit_:n[t.LIMIT_TO_LAST]=this.limit_)),n},kr.WIRE_PROTOCOL_CONSTANTS_={INDEX_START_VALUE:"sp",INDEX_START_NAME:"sn",INDEX_END_VALUE:"ep",INDEX_END_NAME:"en",LIMIT:"l",VIEW_FROM:"vf",VIEW_FROM_LEFT:"l",VIEW_FROM_RIGHT:"r",INDEX:"i"},kr.REST_QUERY_CONSTANTS_={ORDER_BY:"orderBy",PRIORITY_INDEX:"$priority",VALUE_INDEX:"$value",KEY_INDEX:"$key",START_AT:"startAt",END_AT:"endAt",LIMIT_TO_FIRST:"limitToFirst",LIMIT_TO_LAST:"limitToLast"},kr.DEFAULT=new kr,kr);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}var Or,Fr=(Or=kt,f.__extends(Ar,Or),Ar.prototype.getKey=function(){return E.validateArgCount("Reference.key",0,0,arguments.length),this.path.isEmpty()?null:this.path.getBack()},Ar.prototype.child=function(e){var t,n,r,i;return E.validateArgCount("Reference.child",1,1,arguments.length),"number"==typeof e?e=String(e):e instanceof V||(null===this.path.getFront()?(t="Reference.child",i=!(n=1),r=(r=e)&&r.replace(/^\/*\.info(\/|$)/,"/"),ae(t,n,r,i)):ae("Reference.child",1,e,!1)),new Ar(this.repo,this.path.child(e))},Ar.prototype.getParent=function(){E.validateArgCount("Reference.parent",0,0,arguments.length);var e=this.path.parent();return null===e?null:new Ar(this.repo,e)},Ar.prototype.getRoot=function(){E.validateArgCount("Reference.root",0,0,arguments.length);for(var e=this;null!==e.getParent();)e=e.getParent();return e},Ar.prototype.databaseProp=function(){return this.repo.database},Ar.prototype.set=function(e,t){E.validateArgCount("Reference.set",1,2,arguments.length),he("Reference.set",this.path),ne("Reference.set",1,e,this.path,!1),E.validateCallback("Reference.set",2,t,!0);var n=new E.Deferred;return this.repo.setWithPriority(this.path,e,null,n.wrapCallback(t)),n.promise},Ar.prototype.update=function(e,t){if(E.validateArgCount("Reference.update",1,2,arguments.length),he("Reference.update",this.path),Array.isArray(e)){for(var n={},r=0;r<e.length;++r)n[""+r]=e[r];e=n,g("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}re("Reference.update",1,e,this.path,!1),E.validateCallback("Reference.update",2,t,!0);var i=new E.Deferred;return this.repo.update(this.path,e,i.wrapCallback(t)),i.promise},Ar.prototype.setWithPriority=function(e,t,n){if(E.validateArgCount("Reference.setWithPriority",2,3,arguments.length),he("Reference.setWithPriority",this.path),ne("Reference.setWithPriority",1,e,this.path,!1),ie("Reference.setWithPriority",2,t,!1),E.validateCallback("Reference.setWithPriority",3,n,!0),".length"===this.getKey()||".keys"===this.getKey())throw"Reference.setWithPriority failed: "+this.getKey()+" is a read-only object.";var r=new E.Deferred;return this.repo.setWithPriority(this.path,e,t,r.wrapCallback(n)),r.promise},Ar.prototype.remove=function(e){return E.validateArgCount("Reference.remove",0,1,arguments.length),he("Reference.remove",this.path),E.validateCallback("Reference.remove",1,e,!0),this.set(null,e)},Ar.prototype.transaction=function(e,r,t){if(E.validateArgCount("Reference.transaction",1,3,arguments.length),he("Reference.transaction",this.path),E.validateCallback("Reference.transaction",1,e,!1),E.validateCallback("Reference.transaction",2,r,!0),function(e,t,n,r){if((!r||void 0!==n)&&"boolean"!=typeof n)throw new Error(E.errorPrefix(e,t,r)+"must be a boolean.")}("Reference.transaction",3,t,!0),".length"===this.getKey()||".keys"===this.getKey())throw"Reference.transaction failed: "+this.getKey()+" is a read-only object.";void 0===t&&(t=!0);var i=new E.Deferred;return"function"==typeof r&&i.promise.catch(function(){}),this.repo.startTransaction(this.path,e,function(e,t,n){e?i.reject(e):i.resolve(new ve(t,n)),"function"==typeof r&&r(e,t,n)},t),i.promise},Ar.prototype.setPriority=function(e,t){E.validateArgCount("Reference.setPriority",1,2,arguments.length),he("Reference.setPriority",this.path),ie("Reference.setPriority",1,e,!1),E.validateCallback("Reference.setPriority",2,t,!0);var n=new E.Deferred;return this.repo.setWithPriority(this.path.child(".priority"),e,null,n.wrapCallback(t)),n.promise},Ar.prototype.push=function(e,t){E.validateArgCount("Reference.push",0,2,arguments.length),he("Reference.push",this.path),ne("Reference.push",1,e,this.path,!0),E.validateCallback("Reference.push",2,t,!0);var n,r=this.repo.serverTime(),i=we(r),o=this.child(i),s=this.child(i);return n=null!=e?o.set(e,t).then(function(){return s}):Promise.resolve(s),o.then=n.then.bind(n),o.catch=n.then.bind(n,void 0),"function"==typeof t&&n.catch(function(){}),o},Ar.prototype.onDisconnect=function(){return he("Reference.onDisconnect",this.path),new _e(this.repo,this.path)},Object.defineProperty(Ar.prototype,"database",{get:function(){return this.databaseProp()},enumerable:!0,configurable:!0}),Object.defineProperty(Ar.prototype,"key",{get:function(){return this.getKey()},enumerable:!0,configurable:!0}),Object.defineProperty(Ar.prototype,"parent",{get:function(){return this.getParent()},enumerable:!0,configurable:!0}),Object.defineProperty(Ar.prototype,"root",{get:function(){return this.getRoot()},enumerable:!0,configurable:!0}),Ar);function Ar(e,t){if(!(e instanceof Sr))throw new Error("new Reference() no longer supported - use app.database().");return Or.call(this,e,t,xr.DEFAULT,!1)||this}kt.__referenceConstructor=Fr,wn.__referenceConstructor=Fr;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lr,Mr,Wr=function(){this.children={},this.childCount=0,this.value=null},Qr=(qr.prototype.subTree=function(e){for(var t=e instanceof V?e:new V(e),n=this,r=t.getFront();null!==r;)n=new qr(r,n,E.safeGet(n.node_.children,r)||new Wr),r=(t=t.popFront()).getFront();return n},qr.prototype.getValue=function(){return this.node_.value},qr.prototype.setValue=function(e){E.assert(void 0!==e,"Cannot set value to undefined"),this.node_.value=e,this.updateParents_()},qr.prototype.clear=function(){this.node_.value=null,this.node_.children={},this.node_.childCount=0,this.updateParents_()},qr.prototype.hasChildren=function(){return 0<this.node_.childCount},qr.prototype.isEmpty=function(){return null===this.getValue()&&!this.hasChildren()},qr.prototype.forEachChild=function(n){var r=this;L(this.node_.children,function(e,t){n(new qr(e,r,t))})},qr.prototype.forEachDescendant=function(t,e,n){e&&!n&&t(this),this.forEachChild(function(e){e.forEachDescendant(t,!0,n)}),e&&n&&t(this)},qr.prototype.forEachAncestor=function(e,t){for(var n=t?this:this.parent();null!==n;){if(e(n))return!0;n=n.parent()}return!1},qr.prototype.forEachImmediateDescendantWithValue=function(t){this.forEachChild(function(e){null!==e.getValue()?t(e):e.forEachImmediateDescendantWithValue(t)})},qr.prototype.path=function(){return new V(null===this.parent_?this.name_:this.parent_.path()+"/"+this.name_)},qr.prototype.name=function(){return this.name_},qr.prototype.parent=function(){return this.parent_},qr.prototype.updateParents_=function(){null!==this.parent_&&this.parent_.updateChild_(this.name_,this)},qr.prototype.updateChild_=function(e,t){var n=t.isEmpty(),r=E.contains(this.node_.children,e);n&&r?(delete this.node_.children[e],this.node_.childCount--,this.updateParents_()):n||r||(this.node_.children[e]=t.node_,this.node_.childCount++,this.updateParents_())},qr);function qr(e,t,n){void 0===e&&(e=""),void 0===t&&(t=null),void 0===n&&(n=new Wr),this.name_=e,this.parent_=t,this.node_=n}(Mr=Lr=Lr||{})[Mr.RUN=0]="RUN",Mr[Mr.SENT=1]="SENT",Mr[Mr.COMPLETED=2]="COMPLETED",Mr[Mr.SENT_NEEDS_ABORT=3]="SENT_NEEDS_ABORT",Mr[Mr.NEEDS_ABORT=4]="NEEDS_ABORT",Sr.MAX_TRANSACTION_RETRIES_=25,Sr.prototype.transactionsInit_=function(){this.transactionQueueTree_=new Qr},Sr.prototype.startTransaction=function(e,t,n,r){this.log_("transaction on "+e);function i(){}var o=new Fr(this,e);o.on("value",i);var s={path:e,update:t,onComplete:n,status:null,order:D(),applyLocally:r,retryCount:0,unwatcher:function(){o.off("value",i)},abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=this.getLatestState_(e);s.currentInputSnapshot=a;var h=s.update(a.val());if(void 0===h){if(s.unwatcher(),s.currentOutputSnapshotRaw=null,s.currentOutputSnapshotResolved=null,s.onComplete){var l=new Et(s.currentInputSnapshot,new Fr(this,s.path),Ve);s.onComplete(null,!1,l)}}else{fe("transaction failed: Data returned ",h,s.path),s.status=Lr.RUN;var u=this.transactionQueueTree_.subTree(e),c=u.getValue()||[];c.push(s),u.setValue(c);var p=void 0;if("object"===(void 0===h?"undefined":C(h))&&null!==h&&E.contains(h,".priority"))p=E.safeGet(h,".priority"),E.assert(te(p),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else p=(this.serverSyncTree_.calcCompleteEventCache(e)||lt.EMPTY_NODE).getPriority().val();p=p;var d=this.generateServerValues(),f=_t(h,p),_=Qt(f,d);s.currentOutputSnapshotRaw=f,s.currentOutputSnapshotResolved=_,s.currentWriteId=this.getNextWriteId_();var y=this.serverSyncTree_.applyUserOverwrite(e,_,s.currentWriteId,s.applyLocally);this.eventQueue_.raiseEventsForChangedPath(e,y),this.sendReadyTransactions_()}},Sr.prototype.getLatestState_=function(e,t){return this.serverSyncTree_.calcCompleteEventCache(e,t)||lt.EMPTY_NODE},Sr.prototype.sendReadyTransactions_=function(e){var t=this;if(void 0===e&&(e=this.transactionQueueTree_),e||this.pruneCompletedTransactionsBelowNode_(e),null!==e.getValue()){var n=this.buildTransactionQueue_(e);E.assert(0<n.length,"Sending zero length transaction queue"),n.every(function(e){return e.status===Lr.RUN})&&this.sendTransactionQueue_(e.path(),n)}else e.hasChildren()&&e.forEachChild(function(e){t.sendReadyTransactions_(e)})},Sr.prototype.sendTransactionQueue_=function(a,h){for(var l=this,e=h.map(function(e){return e.currentWriteId}),t=this.getLatestState_(a,e),n=t,r=t.hash(),i=0;i<h.length;i++){var o=h[i];E.assert(o.status===Lr.RUN,"tryToSendTransactionQueue_: items in queue should all be run."),o.status=Lr.SENT,o.retryCount++;var s=V.relativePath(a,o.path);n=n.updateChild(s,o.currentOutputSnapshotRaw)}var u=n.val(!0),c=a;this.server_.put(c.toString(),u,function(e){l.log_("transaction put response",{path:c.toString(),status:e});var t=[];if("ok"===e){for(var n=[],r=0;r<h.length;r++){if(h[r].status=Lr.COMPLETED,t=t.concat(l.serverSyncTree_.ackUserWrite(h[r].currentWriteId)),h[r].onComplete){var i=h[r].currentOutputSnapshotResolved,o=new Fr(l,h[r].path),s=new Et(i,o,Ve);n.push(h[r].onComplete.bind(null,null,!0,s))}h[r].unwatcher()}l.pruneCompletedTransactionsBelowNode_(l.transactionQueueTree_.subTree(a)),l.sendReadyTransactions_(),l.eventQueue_.raiseEventsForChangedPath(a,t);for(r=0;r<n.length;r++)W(n[r])}else{if("datastale"===e)for(r=0;r<h.length;r++)h[r].status===Lr.SENT_NEEDS_ABORT?h[r].status=Lr.NEEDS_ABORT:h[r].status=Lr.RUN;else{g("transaction at "+c.toString()+" failed: "+e);for(r=0;r<h.length;r++)h[r].status=Lr.NEEDS_ABORT,h[r].abortReason=e}l.rerunTransactions_(a)}},r)},Sr.prototype.rerunTransactions_=function(e){var t=this.getAncestorTransactionNode_(e),n=t.path(),r=this.buildTransactionQueue_(t);return this.rerunTransactionQueue_(r,n),n},Sr.prototype.rerunTransactionQueue_=function(e,t){if(0!==e.length){for(var n,r=[],i=[],o=e.filter(function(e){return e.status===Lr.RUN}).map(function(e){return e.currentWriteId}),s=0;s<e.length;s++){var a=e[s],h=V.relativePath(t,a.path),l=!1,u=void 0;if(E.assert(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===Lr.NEEDS_ABORT)l=!0,u=a.abortReason,i=i.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId,!0));else if(a.status===Lr.RUN)if(a.retryCount>=Sr.MAX_TRANSACTION_RETRIES_)l=!0,u="maxretry",i=i.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId,!0));else{var c=this.getLatestState_(a.path,o);a.currentInputSnapshot=c;var p=e[s].update(c.val());if(void 0!==p){fe("transaction failed: Data returned ",p,a.path);var d=_t(p);"object"===(void 0===p?"undefined":C(p))&&null!=p&&E.contains(p,".priority")||(d=d.updatePriority(c.getPriority()));var f=a.currentWriteId,_=this.generateServerValues(),y=Qt(d,_);a.currentOutputSnapshotRaw=d,a.currentOutputSnapshotResolved=y,a.currentWriteId=this.getNextWriteId_(),o.splice(o.indexOf(f),1),i=(i=i.concat(this.serverSyncTree_.applyUserOverwrite(a.path,y,a.currentWriteId,a.applyLocally))).concat(this.serverSyncTree_.ackUserWrite(f,!0))}else l=!0,u="nodata",i=i.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId,!0))}if(this.eventQueue_.raiseEventsForChangedPath(t,i),i=[],l&&(e[s].status=Lr.COMPLETED,n=e[s].unwatcher,setTimeout(n,Math.floor(0)),e[s].onComplete))if("nodata"===u){var v=new Fr(this,e[s].path),g=e[s].currentInputSnapshot,m=new Et(g,v,Ve);r.push(e[s].onComplete.bind(null,null,!1,m))}else r.push(e[s].onComplete.bind(null,new Error(u),!1,null))}this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);for(s=0;s<r.length;s++)W(r[s]);this.sendReadyTransactions_()}},Sr.prototype.getAncestorTransactionNode_=function(e){var t,n=this.transactionQueueTree_;for(t=e.getFront();null!==t&&null===n.getValue();)n=n.subTree(t),t=(e=e.popFront()).getFront();return n},Sr.prototype.buildTransactionQueue_=function(e){var t=[];return this.aggregateTransactionQueuesForNode_(e,t),t.sort(function(e,t){return e.order-t.order}),t},Sr.prototype.aggregateTransactionQueuesForNode_=function(e,t){var n=this,r=e.getValue();if(null!==r)for(var i=0;i<r.length;i++)t.push(r[i]);e.forEachChild(function(e){n.aggregateTransactionQueuesForNode_(e,t)})},Sr.prototype.pruneCompletedTransactionsBelowNode_=function(e){var t=this,n=e.getValue();if(n){for(var r=0,i=0;i<n.length;i++)n[i].status!==Lr.COMPLETED&&(n[r]=n[i],r++);n.length=r,e.setValue(0<n.length?n:null)}e.forEachChild(function(e){t.pruneCompletedTransactionsBelowNode_(e)})},Sr.prototype.abortTransactions_=function(e){var t=this,n=this.getAncestorTransactionNode_(e).path(),r=this.transactionQueueTree_.subTree(e);return r.forEachAncestor(function(e){t.abortTransactionsOnNode_(e)}),this.abortTransactionsOnNode_(r),r.forEachDescendant(function(e){t.abortTransactionsOnNode_(e)}),n},Sr.prototype.abortTransactionsOnNode_=function(e){var t=e.getValue();if(null!==t){for(var n=[],r=[],i=-1,o=0;o<t.length;o++)if(t[o].status!==Lr.SENT_NEEDS_ABORT)if(t[o].status===Lr.SENT)E.assert(i===o-1,"All SENT items should be at beginning of queue."),t[i=o].status=Lr.SENT_NEEDS_ABORT,t[o].abortReason="set";else if(E.assert(t[o].status===Lr.RUN,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(this.serverSyncTree_.ackUserWrite(t[o].currentWriteId,!0)),t[o].onComplete){n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))}-1===i?e.setValue(null):t.length=i+1,this.eventQueue_.raiseEventsForChangedPath(e.path(),r);for(o=0;o<n.length;o++)W(n[o])}};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ur,Vr="databaseURL",Hr=(jr.getInstance=function(){return Ur=Ur||new jr},jr.prototype.interrupt=function(){var t,e,n,r;try{for(var i=f.__values(Object.keys(this.repos_)),o=i.next();!o.done;o=i.next()){var s=o.value;try{for(var a=(n=void 0,f.__values(Object.keys(this.repos_[s]))),h=a.next();!h.done;h=a.next()){var l=h.value;this.repos_[s][l].interrupt()}}catch(e){n={error:e}}finally{try{h&&!h.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},jr.prototype.resume=function(){var t,e,n,r;try{for(var i=f.__values(Object.keys(this.repos_)),o=i.next();!o.done;o=i.next()){var s=o.value;try{for(var a=(n=void 0,f.__values(Object.keys(this.repos_[s]))),h=a.next();!h.done;h=a.next()){var l=h.value;this.repos_[s][l].resume()}}catch(e){n={error:e}}finally{try{h&&!h.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},jr.prototype.databaseFromApp=function(e,t,n){var r=n||e.options[Vr];void 0===r&&v("Can't determine Firebase Database URL.  Be sure to include "+Vr+" option when calling firebase.initializeApp().");var i=J(r),o=i.repoInfo,s=void 0;return void 0!==h&&(s=h.env.FIREBASE_DATABASE_EMULATOR_HOST),s&&(r="http://"+s+"?ns="+o.namespace,o=(i=J(r)).repoInfo),le("Invalid Firebase Database URL",1,i),i.path.isEmpty()||v("Database URL must point to the root of a Firebase Database (not including a child path)."),this.createRepo(o,e,t).database},jr.prototype.deleteRepo=function(e){var t=E.safeGet(this.repos_,e.app.name);t&&E.safeGet(t,e.repoInfo_.toURLString())===e||v("Database "+e.app.name+"("+e.repoInfo_+") has already been deleted."),e.interrupt(),delete t[e.repoInfo_.toURLString()]},jr.prototype.createRepo=function(e,t,n){var r=E.safeGet(this.repos_,t.name);r||(r={},this.repos_[t.name]=r);var i=E.safeGet(r,e.toURLString());return i&&v("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new Sr(e,this.useRestClient_,t,n),r[e.toURLString()]=i},jr.prototype.forceRestClient=function(e){this.useRestClient_=e},jr);function jr(){this.repos_={},this.useRestClient_=!1}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Br=(Object.defineProperty(Yr.prototype,"app",{get:function(){return this.repo_.app},enumerable:!0,configurable:!0}),Yr.prototype.ref=function(e){return this.checkDeleted_("ref"),E.validateArgCount("database.ref",0,1,arguments.length),e instanceof Fr?this.refFromURL(e.toString()):void 0!==e?this.root_.child(e):this.root_},Yr.prototype.refFromURL=function(e){var t="database.refFromURL";this.checkDeleted_(t),E.validateArgCount(t,1,1,arguments.length);var n=J(e);le(t,1,n);var r=n.repoInfo;return r.host!==this.repo_.repoInfo_.host&&v(t+": Host name does not match the current database: (found "+r.host+" but expected "+this.repo_.repoInfo_.host+")"),this.ref(n.path.toString())},Yr.prototype.checkDeleted_=function(e){null===this.repo_&&v("Cannot call "+e+" on a deleted database.")},Yr.prototype.goOffline=function(){E.validateArgCount("database.goOffline",0,0,arguments.length),this.checkDeleted_("goOffline"),this.repo_.interrupt()},Yr.prototype.goOnline=function(){E.validateArgCount("database.goOnline",0,0,arguments.length),this.checkDeleted_("goOnline"),this.repo_.resume()},Yr.ServerValue={TIMESTAMP:{".sv":"timestamp"}},Yr);function Yr(e){(this.repo_=e)instanceof Sr||v("Don't call new Database() directly - please use firebase.database()."),this.root_=new Fr(e,V.Empty),this.INTERNAL=new Kr(this)}var Kr=(zr.prototype.delete=function(){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(e){return this.database.checkDeleted_("delete"),Hr.getInstance().deleteRepo(this.database.repo_),this.database.repo_=null,this.database.root_=null,this.database.INTERNAL=null,this.database=null,[2]})})},zr);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e){this.database=e}var Gr=Object.freeze({__proto__:null,forceLongPolling:function(){ur.forceDisallow(),ir.forceAllow()},forceWebSockets:function(){ir.forceDisallow()},isWebSocketsAvailable:function(){return ur.isAvailable()},setSecurityDebugCallback:function(e,t){e.repo.persistentConnection_.securityDebugCallback_=t},stats:function(e,t){e.repo.stats(t)},statsIncrementCounter:function(e,t){e.repo.statsIncrementCounter(t)},dataUpdateCount:function(e){return e.repo.dataUpdateCount},interceptServerData:function(e,t){return e.repo.interceptServerData_(t)}}),Xr=mr;mr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},mr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};var $r=fr,Jr=X,Zr=Object.freeze({__proto__:null,DataConnection:Xr,RealTimeConnection:$r,hijackHash:function(i){var o=mr.prototype.put;return mr.prototype.put=function(e,t,n,r){void 0!==r&&(r=i()),o.call(this,e,t,n,r)},function(){mr.prototype.put=o}},ConnectionTarget:Jr,queryIdentifier:function(e){return e.queryIdentifier()},forceRestClient:function(e){Hr.getInstance().forceRestClient(e)}}),ei=Br.ServerValue;function ti(e){var t;t=e.SDK_VERSION,hr=t;var n=e.INTERNAL.registerComponent(new r.Component("database",function(e,t){var n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal");return Hr.getInstance().databaseFromApp(n,r,t)},"PUBLIC").setServiceProps({Reference:Fr,Query:kt,Database:Br,DataSnapshot:Et,enableLogging:p,INTERNAL:Gr,ServerValue:ei,TEST_ACCESS:Zr}).setMultipleInstances(!0));e.registerVersion("@firebase/database","0.5.19"),E.isNodeSdk()&&(ni.exports=n)}ti(t),ri.DataSnapshot=Et,ri.Database=Br,ri.OnDisconnect=_e,ri.Query=kt,ri.Reference=Fr,ri.ServerValue=ei,ri.enableLogging=p,ri.registerDatabase=ti}).call(this,ii(187))},187:function(e,t,n){"use strict";var r,i,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function h(t){if(r===setTimeout)return setTimeout(t,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var l,u=[],c=!1,p=-1;function d(){c&&l&&(c=!1,l.length?u=l.concat(u):p=-1,u.length&&f())}function f(){if(!c){var e=h(d);c=!0;for(var t=u.length;t;){for(l=u,u=[];++p<t;)l&&l[p].run();p=-1,t=u.length}l=null,c=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(e)}}function _(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new _(e,t)),1!==u.length||c||h(f)},_.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);
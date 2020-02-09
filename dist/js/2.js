(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{127:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.registerStorage=void 0;var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=r(16),c=(n=i)&&n.__esModule?n:{default:n},v=r(17),a=r(27);
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
 */
var h="firebasestorage.googleapis.com",p="storageBucket",m=(s.prototype.codeProp=function(){return this.code},s.prototype.codeEquals=function(e){return u(e)===this.codeProp()},s.prototype.serverResponseProp=function(){return this.serverResponse_},s.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(s.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),s);function s(e,t){this.code_=u(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}var g={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};function u(e){return"storage/"+e}function b(){return new m(g.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function y(){return new m(g.CANCELED,"User canceled the upload/download.")}function w(){return new m(g.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function f(e,t,r){return new m(g.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+r)}function R(){return new m(g.APP_DELETED,"The Firebase app was deleted.")}function l(e,t){return new m(g.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function d(e){throw new m(g.INTERNAL_ERROR,"Internal error: "+e)}
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
 */var _={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function T(e){switch(e){case _.RAW:case _.BASE64:case _.BASE64URL:case _.DATA_URL:return;default:throw"Expected one of the event types: ["+_.RAW+", "+_.BASE64+", "+_.BASE64URL+", "+_.DATA_URL+"]."}}var E=function(e,t){this.data=e,this.contentType=t||null};function k(e,t){switch(e){case _.RAW:return new E(O(t));case _.BASE64:case _.BASE64URL:return new E(U(e,t));case _.DATA_URL:return new E((r=new A(t)).base64?U(_.BASE64,r.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(e){throw l(_.DATA_URL,"Malformed data URL.")}return O(t)}(r.rest),new A(t).contentType)}var r;throw b()}function O(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296==(64512&n))if(r<e.length-1&&56320==(64512&e.charCodeAt(r+1)))n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n);else t.push(239,191,189);else 56320==(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function U(t,e){switch(t){case _.BASE64:var r=-1!==e.indexOf("-"),n=-1!==e.indexOf("_");if(r||n)throw l(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break;case _.BASE64URL:var o=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(o||i)throw l(t,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/")}var a;try{a=atob(e)}catch(e){throw l(t,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u);return s}var A=function(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw l(_.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r,n,o=t[1]||null;null!=o&&(this.base64=(n=";base64",(r=o).length>=n.length&&r.substring(r.length-n.length)===n),this.contentType=this.base64?o.substring(0,o.length-";base64".length):o),this.rest=e.substring(e.indexOf(",")+1)};
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
 */
var x,S,C={STATE_CHANGED:"state_changed"},P="running",N="pausing",L="paused",I="success",D="canceling",M="canceled",W="error",B={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function j(e){switch(e){case P:case N:case D:return B.RUNNING;case L:return B.PAUSED;case I:return B.SUCCESS;case M:return B.CANCELED;case W:default:return B.ERROR}}
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
 */function q(e){return null!=e}function F(e){return void 0!==e}function H(e){return"function"==typeof e}function z(e){return"object"===(void 0===e?"undefined":o(e))}function G(e){return"string"==typeof e||e instanceof String}function X(e){return"number"==typeof e||e instanceof Number}function V(e){return K()&&e instanceof Blob}function K(){return"undefined"!=typeof Blob}
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
 */(S=x=x||{})[S.NO_ERROR=0]="NO_ERROR",S[S.NETWORK_ERROR=1]="NETWORK_ERROR",S[S.ABORT=2]="ABORT";
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
 */
var Z=(J.prototype.send=function(e,t,r,n){if(this.sent_)throw d("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),q(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return q(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},J.prototype.getErrorCode=function(){if(!this.sent_)throw d("cannot .getErrorCode() before sending");return this.errorCode_},J.prototype.getStatus=function(){if(!this.sent_)throw d("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},J.prototype.getResponseText=function(){if(!this.sent_)throw d("cannot .getResponseText() before sending");return this.xhr_.responseText},J.prototype.abort=function(){this.xhr_.abort()},J.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},J.prototype.addUploadProgressListener=function(e){q(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},J.prototype.removeUploadProgressListener=function(e){q(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},J);
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
 */function J(){var t=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=x.NO_ERROR,this.sendPromise_=new Promise(function(e){t.xhr_.addEventListener("abort",function(){t.errorCode_=x.ABORT,e(t)}),t.xhr_.addEventListener("error",function(){t.errorCode_=x.NETWORK_ERROR,e(t)}),t.xhr_.addEventListener("load",function(){e(t)})})}var Q=($.prototype.createXhrIo=function(){return new Z},$);
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
 */function $(){}function Y(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(K())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}
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
 */
var ee=(te.prototype.size=function(){return this.size_},te.prototype.type=function(){return this.type_},te.prototype.slice=function(e,t){if(V(this.data_)){var r=this.data_,n=(i=e,a=t,(o=r).webkitSlice?o.webkitSlice(i,a):o.mozSlice?o.mozSlice(i,a):o.slice?o.slice(i,a):null);return null===n?null:new te(n)}var o,i,a;return new te(new Uint8Array(this.data_.buffer,e,t-e),!0)},te.getBlob=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(K()){var r=e.map(function(e){return e instanceof te?e.data_:e});return new te(Y.apply(null,r))}var n=e.map(function(e){return G(e)?k(_.RAW,e).data:e.data_}),o=0;n.forEach(function(e){o+=e.byteLength});var i=new Uint8Array(o),a=0;return n.forEach(function(e){for(var t=0;t<e.length;t++)i[a++]=e[t]}),new te(i,!0)},te.prototype.uploadData=function(){return this.data_},te);
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
 */function te(e,t){var r=0,n="";V(e)?(r=(this.data_=e).size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}var re=(Object.defineProperty(ne.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),Object.defineProperty(ne.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!0,configurable:!0}),ne.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},ne.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},ne.makeFromBucketSpec=function(t){var e,r;try{e=ne.makeFromUrl(t)}catch(e){return new ne(t,"")}if(""===e.path)return e;throw r=t,new m(g.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")},ne.makeFromUrl=function(e){for(var t,r=null,n="([A-Za-z0-9.\\-_]+)",o=new RegExp("^gs://"+n+"(/(.*))?$","i"),i=h.replace(/[.]/g,"\\."),a=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+i+"/v[A-Za-z0-9_]+/b/"+n+"/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:function(e){e.path_=decodeURIComponent(e.path)}}],s=0;s<a.length;s++){var u=a[s],l=u.regex.exec(e);if(l){var c=l[u.indices.bucket],p=l[u.indices.path];r=new ne(c,p=p||""),u.postModify(r);break}}if(null==r)throw t=e,new m(g.INVALID_URL,"Invalid URL '"+t+"'.");return r},ne);
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
 */function ne(e,t){this.bucket=e,this.path_=t}function oe(e){var t,r;try{t=JSON.parse(e)}catch(e){return null}return z(r=t)&&!Array.isArray(r)?t:null}
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
 */function ie(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function ae(e){return"https://"+h+"/v0"+e}function se(e){var t=encodeURIComponent,r="?";for(var n in e){if(e.hasOwnProperty(n))r=r+(t(n)+"="+t(e[n]))+"&"}return r=r.slice(0,-1)}
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
 */function ue(e,t){return t}var le=function(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||ue},ce=null;function pe(){if(ce)return ce;var e=[];e.push(new le("bucket")),e.push(new le("generation")),e.push(new le("metageneration")),e.push(new le("name","fullPath",!0));var t=new le("name");t.xform=function(e,t){return!G(r=t)||r.length<2?r:ie(r);var r},e.push(t);var r=new le("size");return r.xform=function(e,t){return q(t)?Number(t):t},e.push(r),e.push(new le("timeCreated")),e.push(new le("updated")),e.push(new le("md5Hash",null,!0)),e.push(new le("cacheControl",null,!0)),e.push(new le("contentDisposition",null,!0)),e.push(new le("contentEncoding",null,!0)),e.push(new le("contentLanguage",null,!0)),e.push(new le("contentType",null,!0)),e.push(new le("metadata","customMetadata",!0)),ce=e}function he(n,o){Object.defineProperty(n,"ref",{get:function(){var e=n.bucket,t=n.fullPath,r=new re(e,t);return o.makeStorageReference(r)}})}function fe(e,t,r){var n=oe(t);return null===n?null:function(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return he(n,e),n}(e,n,r)}function de(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function _e(e){if(!z(e)||!e)throw"Expected Metadata object.";for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if("customMetadata"===t){if(!z(r))throw"Expected object for 'customMetadata' mapping."}else if(z(n=r)&&null!==n)throw"Mapping for '"+t+"' cannot be an object."}var n}
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
 */var ve="maxResults",me=1e3,ge="pageToken",be="prefixes",ye="items";function we(e,t){var r={prefixes:[],items:[],nextPageToken:t.nextPageToken},n=e.bucket();if(null===n)throw new m(g.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+p+"' property when initializing the app?");if(t[be])for(var o=0,i=t[be];o<i.length;o++){var a=i[o].replace(/\/$/,""),s=e.makeStorageReference(new re(n,a));r.prefixes.push(s)}if(t[ye])for(var u=0,l=t[ye];u<l.length;u++){var c=l[u];s=e.makeStorageReference(new re(n,c.name));r.items.push(s)}return r}function Re(e){if(!z(e)||!e)throw"Expected ListOptions object.";for(var t in e)if(t===ve){if(!X(r=e[ve])||!Number.isInteger(r)||e[ve]<=0)throw"Expected maxResults to be a positive number.";if(1e3<e[ve])throw"Expected maxResults to be less than or equal to "+me+"."}else{if(t!==ge)throw"Unknown option: "+t;if(e[ge]&&!G(e[ge]))throw"Expected pageToken to be string."}var r}var Te=function(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]};
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
 */function Ee(e){if(!e)throw b()}function ke(n,o){return function(e,t){var r=fe(n,t,o);return Ee(null!==r),r}}function Oe(i){return function(e,t){var r,n,o=(r=i,null===(n=oe(t))?null:we(r,n));return Ee(null!==o),o}}function Ue(n,o){return function(e,t){var r=fe(n,t,o);return Ee(null!==r),function(n,e){var t=oe(e);if(null===t)return null;if(!G(t.downloadTokens))return null;var r=t.downloadTokens;if(0===r.length)return null;var o=encodeURIComponent;return r.split(",").map(function(e){var t=n.bucket,r=n.fullPath;return ae("/b/"+o(t)+"/o/"+o(r))+se({alt:"media",token:e})})[0]}(r,t)}}function Ae(i){return function(e,t){var r,n,o;return(r=401===e.getStatus()?new m(g.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(o=i.bucket,new m(g.QUOTA_EXCEEDED,"Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(n=i.path,new m(g.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")):t).setServerResponseProp(t.serverResponseProp()),r}}function xe(o){var i=Ae(o);return function(e,t){var r,n=i(e,t);return 404===e.getStatus()&&(r=o.path,n=new m(g.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")),n.setServerResponseProp(t.serverResponseProp()),n}}function Se(e,t,r){var n=ae(t.fullServerUrl()),o=e.maxOperationRetryTime(),i=new Te(n,"GET",ke(e,r),o);return i.errorHandler=xe(t),i}function Ce(e,t,r){var n,o,i=Object.assign({},r);return i.fullPath=e.path,i.size=t.size(),i.contentType||(i.contentType=(o=t,(n=null)&&n.contentType||o&&o.type()||"application/octet-stream")),i}function Pe(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};var s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;var u=Ce(t,n,o),l="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+de(u,r)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",c="\r\n--"+s+"--",p=ee.getBlob(l,n,c);if(null===p)throw w();var h={name:u.fullPath},f=ae(i),d=e.maxUploadRetryTime(),_=new Te(f,"POST",ke(e,r),d);return _.urlParams=h,_.headers=a,_.body=p.uploadData(),_.errorHandler=Ae(t),_}var Ne=function(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null};function Le(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){Ee(!1)}return Ee(!!r&&-1!==(t||["active"]).indexOf(r)),r}function Ie(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=Ce(t,n,o),s={name:a.fullPath},u=ae(i),l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},c=de(a,r),p=e.maxUploadRetryTime();var h=new Te(u,"POST",function(e){var t;Le(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){Ee(!1)}return Ee(G(t)),t},p);return h.urlParams=s,h.headers=l,h.body=c,h.errorHandler=Ae(t),h}function De(e,t,r,o){var n=e.maxUploadRetryTime(),i=new Te(r,"POST",function(e){var t=Le(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){Ee(!1)}r||Ee(!1);var n=Number(r);return Ee(!isNaN(n)),new Ne(n,o.size(),"final"===t)},n);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=Ae(t),i}function Me(e,a,t,s,r,u,n,o){var l=new Ne(0,0);if(n?(l.current=n.current,l.total=n.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw new m(g.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");var i=l.total-l.current,c=i;0<r&&(c=Math.min(c,r));var p=l.current,h=p+c,f={"X-Goog-Upload-Command":c===i?"upload, finalize":"upload","X-Goog-Upload-Offset":l.current},d=s.slice(p,h);if(null===d)throw w();var _=a.maxUploadRetryTime(),v=new Te(t,"POST",function(e,t){var r,n=Le(e,["active","final"]),o=l.current+c,i=s.size();return r="final"===n?ke(a,u)(e,t):null,new Ne(o,i,"final"===n,r)},_);return v.headers=f,v.body=d.uploadData(),v.progressCallback=o||null,v.errorHandler=Ae(e),v}
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
 */var We=function(e,t,r){if(H(e)||q(t)||q(r))this.next=e,this.error=t||null,this.complete=r||null;else{var n=e;this.next=n.next||null,this.error=n.error||null,this.complete=n.complete||null}},Be=function(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i};
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
 */
function je(t,e,r){for(var n=e.length,o=e.length,i=0;i<e.length;i++)if(e[i].optional){n=i;break}var a,s,u,l,c,p;if(!(n<=r.length&&r.length<=o))throw a=n,s=o,u=t,l=r.length,p=a===s?1===(c=a)?"argument":"arguments":(c="between "+a+" and "+s,"arguments"),new m(g.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+u+"`: Expected "+c+" "+p+", received "+l+".");for(i=0;i<r.length;i++)try{e[i].validator(r[i])}catch(e){throw e instanceof Error?f(i,t,e.message):f(i,t,e)}}var qe=function(t,e){var r=this;this.validator=function(e){r.optional&&!F(e)||t(e)},this.optional=!!e};function Fe(e,t){function r(e){if(!G(e))throw"Expected string."}var n,o,i;return n=e?(o=r,i=e,function(e){o(e),i(e)}):r,new qe(n,t)}function He(){return new qe(function(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer||K()&&e instanceof Blob))throw"Expected Blob or File."})}function ze(e){return new qe(_e,e)}function Ge(){return new qe(function(e){if(!(X(e)&&0<=e))throw"Expected a number 0 or greater."})}function Xe(t,e){return new qe(function(e){if(!(null===e||q(e)&&e instanceof Object))throw"Expected an Object.";null!=t&&t(e)},e)}function Ve(e){return new qe(function(e){if(!(null===e||H(e)))throw"Expected a Function."},e)}
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
 */function Ke(r){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];Promise.resolve().then(function(){return r.apply(void 0,e)})}}
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
 */var Ze=(Je.prototype.makeProgressCallback_=function(){var t=this,r=this.transferred_;return function(e){return t.updateProgress_(r+e)}},Je.prototype.shouldDoResumable_=function(e){return 262144<e.size()},Je.prototype.start_=function(){this.state_===P&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},Je.prototype.resolveToken_=function(t){var r=this;this.authWrapper_.getAuthToken().then(function(e){switch(r.state_){case P:t(e);break;case D:r.transition_(M);break;case N:r.transition_(L)}})},Je.prototype.createResumable_=function(){var n=this;this.resolveToken_(function(e){var t=Ie(n.authWrapper_,n.location_,n.mappings_,n.blob_,n.metadata_),r=n.authWrapper_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){n.request_=null,n.uploadUrl_=e,n.needToFetchStatus_=!1,n.completeTransitions_()},n.errorHandler_)})},Je.prototype.fetchStatus_=function(){var n=this,o=this.uploadUrl_;this.resolveToken_(function(e){var t=De(n.authWrapper_,n.location_,o,n.blob_),r=n.authWrapper_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){e=e,n.request_=null,n.updateProgress_(e.current),n.needToFetchStatus_=!1,e.finalized&&(n.needToFetchMetadata_=!0),n.completeTransitions_()},n.errorHandler_)})},Je.prototype.continueUpload_=function(){var n=this,o=262144*this.chunkMultiplier_,i=new Ne(this.transferred_,this.blob_.size()),a=this.uploadUrl_;this.resolveToken_(function(e){var t;try{t=Me(n.location_,n.authWrapper_,a,n.blob_,o,n.mappings_,i,n.makeProgressCallback_())}catch(e){return n.error_=e,void n.transition_(W)}var r=n.authWrapper_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){n.increaseMultiplier_(),n.request_=null,n.updateProgress_(e.current),e.finalized?(n.metadata_=e.metadata,n.transition_(I)):n.completeTransitions_()},n.errorHandler_)})},Je.prototype.increaseMultiplier_=function(){262144*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)},Je.prototype.fetchMetadata_=function(){var n=this;this.resolveToken_(function(e){var t=Se(n.authWrapper_,n.location_,n.mappings_),r=n.authWrapper_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){n.request_=null,n.metadata_=e,n.transition_(I)},n.metadataErrorHandler_)})},Je.prototype.oneShotUpload_=function(){var n=this;this.resolveToken_(function(e){var t=Pe(n.authWrapper_,n.location_,n.mappings_,n.blob_,n.metadata_),r=n.authWrapper_.makeRequest(t,e);(n.request_=r).getPromise().then(function(e){n.request_=null,n.metadata_=e,n.updateProgress_(n.blob_.size()),n.transition_(I)},n.errorHandler_)})},Je.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},Je.prototype.transition_=function(e){if(this.state_!==e)switch(e){case D:case N:this.state_=e,null!==this.request_&&this.request_.cancel();break;case P:var t=this.state_===L;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case L:this.state_=e,this.notifyObservers_();break;case M:this.error_=y(),this.state_=e,this.notifyObservers_();break;case W:case I:this.state_=e,this.notifyObservers_()}},Je.prototype.completeTransitions_=function(){switch(this.state_){case N:this.transition_(L);break;case D:this.transition_(M);break;case P:this.start_()}},Object.defineProperty(Je.prototype,"snapshot",{get:function(){var e=j(this.state_);return new Be(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),Je.prototype.on=function(e,t,r,i){var n="Expected a function or an Object with one of `next`, `error`, `complete` properties.",o=Ve(!0).validator,a=Xe(null,!0).validator;function s(e){try{return void o(e)}catch(e){}try{if(a(e),!(F(e.next)||F(e.error)||F(e.complete)))throw"";return}catch(e){throw n}}je("on",[Fe(function(){if(e!==C.STATE_CHANGED)throw"Expected one of the event types: ["+C.STATE_CHANGED+"]."}),Xe(s,!0),Ve(!0),Ve(!0)],arguments);var u=this;function l(o){return function(e,t,r){null!==o&&je("on",o,arguments);var n=new We(e,t,i);return u.addObserver_(n),function(){u.removeObserver_(n)}}}var c=[Xe(function(e){if(null===e)throw n;s(e)}),Ve(!0),Ve(!0)];return F(t)||F(r)||F(i)?l(null)(t,r,i):l(c)},Je.prototype.then=function(e,t){return this.promise_.then(e,t)},Je.prototype.catch=function(e){return this.then(null,e)},Je.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},Je.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},Je.prototype.notifyObservers_=function(){var t=this;this.finishPromise_(),this.observers_.slice().forEach(function(e){t.notifyObserver_(e)})},Je.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(j(this.state_)){case B.SUCCESS:Ke(this.resolve_.bind(null,this.snapshot))();break;case B.CANCELED:case B.ERROR:Ke(this.reject_.bind(null,this.error_))();break;default:e=!1}e&&(this.resolve_=null,this.reject_=null)}},Je.prototype.notifyObserver_=function(e){switch(j(this.state_)){case B.RUNNING:case B.PAUSED:e.next&&Ke(e.next.bind(e,this.snapshot))();break;case B.SUCCESS:e.complete&&Ke(e.complete.bind(e))();break;case B.CANCELED:case B.ERROR:e.error&&Ke(e.error.bind(e,this.error_))();break;default:e.error&&Ke(e.error.bind(e,this.error_))()}},Je.prototype.resume=function(){je("resume",[],arguments);var e=this.state_===L||this.state_===N;return e&&this.transition_(P),e},Je.prototype.pause=function(){je("pause",[],arguments);var e=this.state_===P;return e&&this.transition_(N),e},Je.prototype.cancel=function(){je("cancel",[],arguments);var e=this.state_===P||this.state_===N;return e&&this.transition_(D),e},Je);
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
 */function Je(e,t,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.authWrapper_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=P,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(g.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(W))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(g.CANCELED)?a.completeTransitions_():(a.error_=e,a.transition_(W))},this.promise_=new Promise(function(e,t){a.resolve_=e,a.reject_=t,a.start_()}),this.promise_.then(null,function(){})}var Qe=($e.prototype.toString=function(){return je("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},$e.prototype.newRef=function(e,t){return new $e(e,t)},$e.prototype.mappings=function(){return pe()},$e.prototype.child=function(e){je("child",[Fe()],arguments);var t,r,n=(t=this.location.path,r=e.split("/").filter(function(e){return 0<e.length}).join("/"),0===t.length?r:t+"/"+r),o=new re(this.location.bucket,n);return this.newRef(this.authWrapper,o)},Object.defineProperty($e.prototype,"parent",{get:function(){var e=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this.location.path);if(null===e)return null;var t=new re(this.location.bucket,e);return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty($e.prototype,"root",{get:function(){var e=new re(this.location.bucket,"");return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty($e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty($e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty($e.prototype,"name",{get:function(){return ie(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty($e.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),$e.prototype.put=function(e,t){return void 0===t&&(t=null),je("put",[He(),ze(!0)],arguments),this.throwIfRoot_("put"),new Ze(this,this.authWrapper,this.location,this.mappings(),new ee(e),t)},$e.prototype.putString=function(e,t,r){void 0===t&&(t=_.RAW),je("putString",[Fe(),Fe(T,!0),ze(!0)],arguments),this.throwIfRoot_("putString");var n=k(t,e),o=Object.assign({},r);return!q(o.contentType)&&q(n.contentType)&&(o.contentType=n.contentType),new Ze(this,this.authWrapper,this.location,this.mappings(),new ee(n.data,!0),o)},$e.prototype.delete=function(){var s=this;return je("delete",[],arguments),this.throwIfRoot_("delete"),this.authWrapper.getAuthToken().then(function(e){var t,r,n,o,i,a=(t=s.authWrapper,r=s.location,n=ae(r.fullServerUrl()),o=t.maxOperationRetryTime(),(i=new Te(n,"DELETE",function(e,t){},o)).successCodes=[200,204],i.errorHandler=xe(r),i);return s.authWrapper.makeRequest(a,e).getPromise()})},$e.prototype.listAll=function(){je("listAll",[],arguments);var e={prefixes:[],items:[]};return this.listAllHelper(e).then(function(){return e})},$e.prototype.listAllHelper=function(i,a){return(0,v.__awaiter)(this,void 0,void 0,function(){var t,r,n,o;return(0,v.__generator)(this,function(e){switch(e.label){case 0:return t={pageToken:a},[4,this.list(t)];case 1:return r=e.sent(),(n=i.prefixes).push.apply(n,r.prefixes),(o=i.items).push.apply(o,r.items),null==r.nextPageToken?[3,3]:[4,this.listAllHelper(i,r.nextPageToken)];case 2:e.sent(),e.label=3;case 3:return[2]}})})},$e.prototype.list=function(n){je("list",[new qe(Re,!0)],arguments);var o=this;return this.authWrapper.getAuthToken().then(function(e){var t=n||{},r=function(e,t,r,n,o){var i={};t.isRoot?i.prefix="":i.prefix=t.path+"/",r&&0<r.length&&(i.delimiter=r),n&&(i.pageToken=n),o&&(i.maxResults=o);var a=ae(t.bucketOnlyServerUrl()),s=e.maxOperationRetryTime(),u=new Te(a,"GET",Oe(e),s);return u.urlParams=i,u.errorHandler=Ae(t),u}(o.authWrapper,o.location,"/",t.pageToken,t.maxResults);return o.authWrapper.makeRequest(r,e).getPromise()})},$e.prototype.getMetadata=function(){var r=this;return je("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.authWrapper.getAuthToken().then(function(e){var t=Se(r.authWrapper,r.location,r.mappings());return r.authWrapper.makeRequest(t,e).getPromise()})},$e.prototype.updateMetadata=function(c){var p=this;return je("updateMetadata",[ze()],arguments),this.throwIfRoot_("updateMetadata"),this.authWrapper.getAuthToken().then(function(e){var t,r,n,o,i,a,s,u,l=(t=p.authWrapper,r=p.location,n=c,o=p.mappings(),i=ae(r.fullServerUrl()),a=de(n,o),s=t.maxOperationRetryTime(),(u=new Te(i,"PATCH",ke(t,o),s)).headers={"Content-Type":"application/json; charset=utf-8"},u.body=a,u.errorHandler=xe(r),u);return p.authWrapper.makeRequest(l,e).getPromise()})},$e.prototype.getDownloadURL=function(){var u=this;return je("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.authWrapper.getAuthToken().then(function(e){var t,r,n,o,i,a,s=(t=u.authWrapper,r=u.location,n=u.mappings(),o=ae(r.fullServerUrl()),i=t.maxOperationRetryTime(),(a=new Te(o,"GET",Ue(t,n),i)).errorHandler=xe(r),a);return u.authWrapper.makeRequest(s,e).getPromise().then(function(e){if(null===e)throw new m(g.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})})},$e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw t=e,new m(g.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");var t},$e);function $e(e,t){this.authWrapper=e,this.location=t instanceof re?t:re.makeFromUrl(t)}var Ye=(et.prototype.getPromise=function(){return this.promise_},et.prototype.cancel=function(e){},et);function et(e){this.promise_=Promise.reject(e)}var tt=(rt.prototype.addRequest=function(e){var t=this,r=this.id;this.id++,this.map.set(r,e),e.getPromise().then(function(){return t.map.delete(r)},function(){return t.map.delete(r)})},rt.prototype.clear=function(){this.map.forEach(function(e){e&&e.cancel(!0)}),this.map.clear()},rt);function rt(){this.map=new Map,this.id=-9007199254740991}var nt=(ot.extractBucket_=function(e){var t=e[p]||null;return null==t?null:re.makeFromBucketSpec(t).bucket},ot.prototype.getAuthToken=function(){var e=this.authProvider_.getImmediate({optional:!0});return e?e.getToken().then(function(e){return null!==e?e.accessToken:null},function(){return null}):Promise.resolve(null)},ot.prototype.bucket=function(){if(this.deleted_)throw R();return this.bucket_},ot.prototype.service=function(){return this.service_},ot.prototype.makeStorageReference=function(e){return this.storageRefMaker_(this,e)},ot.prototype.makeRequest=function(e,t){if(this.deleted_)return new Ye(R());var r=this.requestMaker_(e,t,this.pool_);return this.requestMap_.addRequest(r),r},ot.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},ot.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},ot.prototype.setMaxUploadRetryTime=function(e){this.maxUploadRetryTime_=e},ot.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},ot.prototype.setMaxOperationRetryTime=function(e){this.maxOperationRetryTime_=e},ot);
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
 */function ot(e,t,r,n,o,i){if(this.bucket_=null,this.deleted_=!1,this.app_=e,null!==this.app_){var a=this.app_.options;q(a)&&(this.bucket_=ot.extractBucket_(a))}this.authProvider_=t,this.storageRefMaker_=r,this.requestMaker_=n,this.pool_=i,this.service_=o,this.maxOperationRetryTime_=12e4,this.maxUploadRetryTime_=6e5,this.requestMap_=new tt}
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
 */
var it=(at.prototype.start_=function(){var t,r,e,n,o,i,a,s,u,l=this;function c(e,t){var r,n=l.resolve_,o=l.reject_,i=t.xhr;if(t.wasSuccessCode)try{var a=l.callback_(i,i.getResponseText());F(a)?n(a):n()}catch(e){o(e)}else null!==i?((r=b()).setServerResponseProp(i.getResponseText()),l.errorCallback_?o(l.errorCallback_(i,r)):o(r)):t.canceled?o(r=(l.appDelete_?R:y)()):o(r=new m(g.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}function p(){return 2===a}function h(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];s||(s=!0,r.apply(null,e))}function f(e){o=setTimeout(function(){o=null,t(d,p())},e)}function d(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];s||(e||p()||i?h.call.apply(h,(0,v.__spreadArrays)([null,e],t)):(n<64&&(n*=2),f(1===a?(a=2,0):1e3*(n+Math.random()))))}function _(e){u||(u=!0,s||(null!==o?(e||(a=2),clearTimeout(o),f(0)):e||(a=1)))}this.canceled_?c(0,new st(!1,null,!0)):this.backoffId_=(t=function(i,e){if(e)i(!1,new st(!1,null,!0));else{var t=l.pool_.createXhrIo();l.pendingXhr_=t,null!==l.progressCallback_&&t.addUploadProgressListener(a),t.send(l.url_,l.method_,l.body_,l.headers_).then(function(e){null!==l.progressCallback_&&e.removeUploadProgressListener(a),l.pendingXhr_=null;var t=(e=e).getErrorCode()===x.NO_ERROR,r=e.getStatus();if(t&&!l.isRetryStatusCode_(r)){var n=-1!==l.successCodes_.indexOf(r);i(!0,new st(n,e))}else{var o=e.getErrorCode()===x.ABORT;i(!1,new st(!1,null,o))}})}function a(e){var t=e.loaded,r=e.lengthComputable?e.total:-1;null!==l.progressCallback_&&l.progressCallback_(t,r)}},r=c,e=this.timeout_,o=null,u=s=i=!(n=1),f(a=0),setTimeout(function(){_(i=!0)},e),_)},at.prototype.getPromise=function(){return this.promise_},at.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},at.prototype.isRetryStatusCode_=function(e){var t=500<=e&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||n},at);function at(e,t,r,n,o,i,a,s,u,l,c){var p=this;this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=l,this.timeout_=u,this.pool_=c,this.promise_=new Promise(function(e,t){p.resolve_=e,p.reject_=t,p.start_()})}var st=function(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r};function ut(e,t,r){var n,o,i,a,s=se(e.urlParams),u=e.url+s,l=Object.assign({},e.headers);return n=l,null!==(o=t)&&0<o.length&&(n.Authorization="Firebase "+o),i=l,a=void 0!==c.default?c.default.SDK_VERSION:"AppManager",i["X-Firebase-Storage-Version"]="webjs/"+a,new it(u,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r)}
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
 */var lt=(ct.prototype.ref=function(e){if(je("ref",[Fe(function(e){if("string"!=typeof e)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."},!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var t=new Qe(this.authWrapper_,this.bucket_);return null!=e?t.child(e):t},ct.prototype.refFromURL=function(e){return je("refFromURL",[Fe(function(e){if("string"!=typeof e)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{re.makeFromUrl(e)}catch(e){throw"Expected valid full URL but got an invalid one."}},!1)],arguments),new Qe(this.authWrapper_,e)},Object.defineProperty(ct.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),ct.prototype.setMaxUploadRetryTime=function(e){je("setMaxUploadRetryTime",[Ge()],arguments),this.authWrapper_.setMaxUploadRetryTime(e)},ct.prototype.setMaxOperationRetryTime=function(e){je("setMaxOperationRetryTime",[Ge()],arguments),this.authWrapper_.setMaxOperationRetryTime(e)},Object.defineProperty(ct.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(ct.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),ct);function ct(e,t,r,n){if(this.bucket_=null,this.authWrapper_=new nt(e,t,function(e,t){return new Qe(e,t)},ut,this,r),this.app_=e,null!=n)this.bucket_=re.makeFromBucketSpec(n);else{var o=this.authWrapper_.bucket();null!=o&&(this.bucket_=new re(o,""))}this.internals_=new pt(this)}var pt=(ht.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Promise.resolve()},ht);function ht(e){this.service_=e}function ft(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal");return new lt(r,n,new Q,t)}function dt(e){var t={TaskState:B,TaskEvent:C,StringFormat:_,Storage:lt,Reference:Qe};e.INTERNAL.registerComponent(new a.Component("storage",ft,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion("@firebase/storage","0.3.24")}dt(c.default),t.registerStorage=dt}}]);
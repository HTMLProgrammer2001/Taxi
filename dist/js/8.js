(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{183:function(e,t,r){"use strict";r(184)},184:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.registerStorage=void 0;var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=r(75),a=(n=i)&&n.__esModule?n:{default:n},s=r(57),u=r(110);
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
var c="firebasestorage.googleapis.com",l="storageBucket",p=12e4,h=6e5,f=-9007199254740991,d=function(){function e(e,t){this.code_=v(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}return e.prototype.codeProp=function(){return this.code},e.prototype.codeEquals=function(e){return v(e)===this.codeProp()},e.prototype.serverResponseProp=function(){return this.serverResponse_},e.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(e.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),e}(),_={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};function v(e){return"storage/"+e}function m(){return new d(_.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function g(){return new d(_.CANCELED,"User canceled the upload/download.")}function b(){return new d(_.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function y(){return new d(_.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function R(e,t,r){return new d(_.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+r)}function w(){return new d(_.APP_DELETED,"The Firebase app was deleted.")}function E(e,t){return new d(_.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function T(e){throw new d(_.INTERNAL_ERROR,"Internal error: "+e)}
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
 */var U={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function A(e){switch(e){case U.RAW:case U.BASE64:case U.BASE64URL:case U.DATA_URL:return;default:throw"Expected one of the event types: ["+U.RAW+", "+U.BASE64+", "+U.BASE64URL+", "+U.DATA_URL+"]."}}var N=function(e,t){this.data=e,this.contentType=t||null};function O(e,t){switch(e){case U.RAW:return new N(k(t));case U.BASE64:case U.BASE64URL:return new N(S(e,t));case U.DATA_URL:return new N((r=new C(t)).base64?S(U.BASE64,r.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(e){throw E(U.DATA_URL,"Malformed data URL.")}return k(t)}(r.rest),function(e){return new C(e).contentType}(t))}var r;throw m()}function k(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296==(64512&n))if(r<e.length-1&&56320==(64512&e.charCodeAt(r+1)))n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n);else t.push(239,191,189);else 56320==(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function S(e,t){switch(e){case U.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw E(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break;case U.BASE64URL:var o=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(o||i)throw E(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}var a;try{a=atob(t)}catch(t){throw E(e,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u);return s}var C=function(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw E(U.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=t[1]||null;null!=r&&(this.base64=(n=r,o=";base64",n.length>=o.length&&n.substring(n.length-o.length)===o),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1);var n,o;
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
 */};var x,P={STATE_CHANGED:"state_changed"},I={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},L={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function D(e){switch(e){case I.RUNNING:case I.PAUSING:case I.CANCELING:return L.RUNNING;case I.PAUSED:return L.PAUSED;case I.SUCCESS:return L.SUCCESS;case I.CANCELED:return L.CANCELED;case I.ERROR:default:return L.ERROR}}
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
 */function M(e){return null!=e}function W(e){return void 0!==e}function B(e){return"function"==typeof e}function G(e){return"object"===(void 0===e?"undefined":o(e))}function j(e){return G(e)&&null!==e}function q(e){return"string"==typeof e||e instanceof String}function F(e){return H(e)&&Number.isInteger(e)}function H(e){return"number"==typeof e||e instanceof Number}function z(e){return X()&&e instanceof Blob}function X(){return"undefined"!=typeof Blob}
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
 */!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(x||(x={}));
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
var V=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=x.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=x.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=x.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw T("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),M(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return M(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw T("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw T("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw T("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){M(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){M(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},e}(),K=function(){function e(){}return e.prototype.createXhrIo=function(){return new V},e}();
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
function Z(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function J(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Z();if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(X())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}
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
var Q=function(){function e(e,t){var r=0,n="";z(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(z(this.data_)){var n=function(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}(this.data_,t,r);return null===n?null:new e(n)}return new e(new Uint8Array(this.data_.buffer,t,r-t),!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(X()){var n=t.map((function(t){return t instanceof e?t.data_:t}));return new e(J.apply(null,n))}var o=t.map((function(e){return q(e)?O(U.RAW,e).data:e.data_})),i=0;o.forEach((function(e){i+=e.byteLength}));var a=new Uint8Array(i),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),$=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!0,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r,n;try{r=e.makeFromUrl(t)}catch(r){return new e(t,"")}if(""===r.path)return r;throw n=t,new d(_.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")},e.makeFromUrl=function(t){var r=null;var n=new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i");for(var o=c.replace(/[.]/g,"\\."),i=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+o+"/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:function(e){e.path_=decodeURIComponent(e.path)}}],a=0;a<i.length;a++){var s=i[a],u=s.regex.exec(t);if(u){var l=u[s.indices.bucket],p=u[s.indices.path];p||(p=""),r=new e(l,p),s.postModify(r);break}}if(null==r)throw function(e){return new d(_.INVALID_URL,"Invalid URL '"+e+"'.")}(t);return r},e}();
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
function Y(e){var t,r;try{t=JSON.parse(e)}catch(e){return null}return G(r=t)&&!Array.isArray(r)?t:null}
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
 */function ee(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}function te(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function re(e){return"https://"+c+"/v0"+e}function ne(e){var t=encodeURIComponent,r="?";for(var n in e){if(e.hasOwnProperty(n))r=r+(t(n)+"="+t(e[n]))+"&"}return r=r.slice(0,-1)}
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
 */function oe(e,t){return t}var ie=function(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||oe},ae=null;function se(){if(ae)return ae;var e=[];e.push(new ie("bucket")),e.push(new ie("generation")),e.push(new ie("metageneration")),e.push(new ie("name","fullPath",!0));var t=new ie("name");t.xform=function(e,t){return function(e){return!q(e)||e.length<2?e:te(e)}(t)},e.push(t);var r=new ie("size");return r.xform=function(e,t){return M(t)?Number(t):t},e.push(r),e.push(new ie("timeCreated")),e.push(new ie("updated")),e.push(new ie("md5Hash",null,!0)),e.push(new ie("cacheControl",null,!0)),e.push(new ie("contentDisposition",null,!0)),e.push(new ie("contentEncoding",null,!0)),e.push(new ie("contentLanguage",null,!0)),e.push(new ie("contentType",null,!0)),e.push(new ie("metadata","customMetadata",!0)),ae=e}function ue(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){var r=e.bucket,n=e.fullPath,o=new $(r,n);return t.makeStorageReference(o)}})}(n,e),n}function ce(e,t,r){var n=Y(t);return null===n?null:ue(e,n,r)}function le(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function pe(e){if(!G(e)||!e)throw"Expected Metadata object.";for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if("customMetadata"===t){if(!G(r))throw"Expected object for 'customMetadata' mapping."}else if(j(r))throw"Mapping for '"+t+"' cannot be an object."}}
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
 */var he="maxResults",fe=1e3,de="pageToken",_e="prefixes",ve="items";function me(e,t){var r={prefixes:[],items:[],nextPageToken:t.nextPageToken},n=e.bucket();if(null===n)throw new d(_.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+l+"' property when initializing the app?");if(t[_e])for(var o=0,i=t[_e];o<i.length;o++){var a=i[o].replace(/\/$/,""),s=e.makeStorageReference(new $(n,a));r.prefixes.push(s)}if(t[ve])for(var u=0,c=t[ve];u<c.length;u++){var p=c[u];s=e.makeStorageReference(new $(n,p.name));r.items.push(s)}return r}function ge(e){if(!G(e)||!e)throw"Expected ListOptions object.";for(var t in e)if(t===he){if(!F(e[he])||e[he]<=0)throw"Expected maxResults to be a positive number.";if(e[he]>1e3)throw"Expected maxResults to be less than or equal to "+fe+"."}else{if(t!==de)throw"Unknown option: "+t;if(e[de]&&!q(e[de]))throw"Expected pageToken to be string."}}var be=function(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]};
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
 */function ye(e){if(!e)throw m()}function Re(e,t){return function(r,n){var o=ce(e,n,t);return ye(null!==o),o}}function we(e){return function(t,r){var n=function(e,t){var r=Y(t);return null===r?null:me(e,r)}(e,r);return ye(null!==n),n}}function Ee(e,t){return function(r,n){var o=ce(e,n,t);return ye(null!==o),function(e,t){var r=Y(t);if(null===r)return null;if(!q(r.downloadTokens))return null;var n=r.downloadTokens;if(0===n.length)return null;var o=encodeURIComponent;return n.split(",").map((function(t){var r=e.bucket,n=e.fullPath;return re("/b/"+o(r)+"/o/"+o(n))+ne({alt:"media",token:t})}))[0]}(o,n)}}function Te(e){return function(t,r){var n,o,i;return 401===t.getStatus()?n=new d(_.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,n=new d(_.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,n=new d(_.UNAUTHORIZED,"User does not have permission to access '"+o+"'.")):n=r,n.setServerResponseProp(r.serverResponseProp()),n}}function Ue(e){var t=Te(e);return function(r,n){var o,i=t(r,n);return 404===r.getStatus()&&(o=e.path,i=new d(_.OBJECT_NOT_FOUND,"Object '"+o+"' does not exist.")),i.setServerResponseProp(n.serverResponseProp()),i}}function Ae(e,t,r){var n=re(t.fullServerUrl()),o=e.maxOperationRetryTime(),i=new be(n,"GET",Re(e,r),o);return i.errorHandler=Ue(t),i}function Ne(e,t,r,n,o){var i={};t.isRoot?i.prefix="":i.prefix=t.path+"/",r&&r.length>0&&(i.delimiter=r),n&&(i.pageToken=n),o&&(i.maxResults=o);var a=re(t.bucketOnlyServerUrl()),s=e.maxOperationRetryTime(),u=new be(a,"GET",we(e),s);return u.urlParams=i,u.errorHandler=Te(t),u}function Oe(e,t,r){var n=re(t.fullServerUrl()),o=e.maxOperationRetryTime(),i=new be(n,"GET",Ee(e,r),o);return i.errorHandler=Ue(t),i}function ke(e,t,r,n){var o=re(t.fullServerUrl()),i=le(r,n),a=e.maxOperationRetryTime(),s=new be(o,"PATCH",Re(e,n),a);return s.headers={"Content-Type":"application/json; charset=utf-8"},s.body=i,s.errorHandler=Ue(t),s}function Se(e,t){var r=re(t.fullServerUrl()),n=e.maxOperationRetryTime();var o=new be(r,"DELETE",(function(e,t){}),n);return o.successCodes=[200,204],o.errorHandler=Ue(t),o}function Ce(e,t,r){var n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),n}var xe=function(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null};function Pe(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){ye(!1)}return ye(!!r&&-1!==(t||["active"]).indexOf(r)),r}function Ie(e,t,r,n,o,i,a,s){var u=new xe(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw new d(_.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");var c=u.total-u.current,l=c;o>0&&(l=Math.min(l,o));var p=u.current,h=p+l,f={"X-Goog-Upload-Command":l===c?"upload, finalize":"upload","X-Goog-Upload-Offset":u.current},v=n.slice(p,h);if(null===v)throw b();var m=t.maxUploadRetryTime(),g=new be(r,"POST",(function(e,r){var o,a=Pe(e,["active","final"]),s=u.current+l,c=n.size();return o="final"===a?Re(t,i)(e,r):null,new xe(s,c,"final"===a,o)}),m);return g.headers=f,g.body=v.uploadData(),g.progressCallback=s||null,g.errorHandler=Te(e),g}
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
 */var Le=function(e,t,r){if(B(e)||M(t)||M(r))this.next=e,this.error=t||null,this.complete=r||null;else{var n=e;this.next=n.next||null,this.error=n.error||null,this.complete=n.complete||null}},De=function(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i};
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
function Me(e,t,r){for(var n=t.length,o=t.length,i=0;i<t.length;i++)if(t[i].optional){n=i;break}var a,s,u,c,l,p;if(!(n<=r.length&&r.length<=o))throw a=n,s=o,u=e,c=r.length,a===s?(l=a,p=1===a?"argument":"arguments"):(l="between "+a+" and "+s,p="arguments"),new d(_.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+u+"`: Expected "+l+" "+p+", received "+c+".");for(i=0;i<r.length;i++)try{t[i].validator(r[i])}catch(t){throw t instanceof Error?R(i,e,t.message):R(i,e,t)}}var We=function(e,t){var r=this;this.validator=function(t){r.optional&&!W(t)||e(t)},this.optional=!!t};function Be(e,t){function r(e){if(!q(e))throw"Expected string."}var n,o,i;return e?(o=r,i=e,n=function(e){o(e),i(e)}):n=r,new We(n,t)}function Ge(){return new We((function(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer||X()&&e instanceof Blob))throw"Expected Blob or File."}))}function je(e){return new We(pe,e)}function qe(e){return new We(ge,e)}function Fe(){return new We((function(e){if(!(H(e)&&e>=0))throw"Expected a number 0 or greater."}))}function He(e,t){return new We((function(t){if(!(null===t||M(t)&&t instanceof Object))throw"Expected an Object.";null!=e&&e(t)}),t)}function ze(e){return new We((function(e){if(!(null===e||B(e)))throw"Expected a Function."}),e)}
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
 */function Xe(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}
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
 */var Ve=function(){function e(e,t,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.authWrapper_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=I.RUNNING,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(_.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(I.ERROR))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(_.CANCELED)?a.completeTransitions_():(a.error_=e,a.transition_(I.ERROR))},this.promise_=new Promise((function(e,t){a.resolve_=e,a.reject_=t,a.start_()})),this.promise_.then(null,(function(){}))}return e.prototype.makeProgressCallback_=function(){var e=this,t=this.transferred_;return function(r){return e.updateProgress_(t+r)}},e.prototype.shouldDoResumable_=function(e){return e.size()>262144},e.prototype.start_=function(){this.state_===I.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},e.prototype.resolveToken_=function(e){var t=this;this.authWrapper_.getAuthToken().then((function(r){switch(t.state_){case I.RUNNING:e(r);break;case I.CANCELING:t.transition_(I.CANCELED);break;case I.PAUSING:t.transition_(I.PAUSED)}}))},e.prototype.createResumable_=function(){var e=this;this.resolveToken_((function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=Ce(t,n,o),s={name:a.fullPath},u=re(i),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},l=le(a,r),p=e.maxUploadRetryTime(),h=new be(u,"POST",(function(e){var t;Pe(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){ye(!1)}return ye(q(t)),t}),p);return h.urlParams=s,h.headers=c,h.body=l,h.errorHandler=Te(t),h}(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.fetchStatus_=function(){var e=this,t=this.uploadUrl_;this.resolveToken_((function(r){var n=function(e,t,r,n){var o=e.maxUploadRetryTime(),i=new be(r,"POST",(function(e){var t=Pe(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){ye(!1)}r||ye(!1);var o=Number(r);return ye(!isNaN(o)),new xe(o,n.size(),"final"===t)}),o);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=Te(t),i}(e.authWrapper_,e.location_,t,e.blob_),o=e.authWrapper_.makeRequest(n,r);e.request_=o,o.getPromise().then((function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.continueUpload_=function(){var e=this,t=262144*this.chunkMultiplier_,r=new xe(this.transferred_,this.blob_.size()),n=this.uploadUrl_;this.resolveToken_((function(o){var i;try{i=Ie(e.location_,e.authWrapper_,n,e.blob_,t,e.mappings_,r,e.makeProgressCallback_())}catch(t){return e.error_=t,void e.transition_(I.ERROR)}var a=e.authWrapper_.makeRequest(i,o);e.request_=a,a.getPromise().then((function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(I.SUCCESS)):e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.increaseMultiplier_=function(){262144*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)},e.prototype.fetchMetadata_=function(){var e=this;this.resolveToken_((function(t){var r=Ae(e.authWrapper_,e.location_,e.mappings_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.transition_(I.SUCCESS)}),e.metadataErrorHandler_)}))},e.prototype.oneShotUpload_=function(){var e=this;this.resolveToken_((function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;var u=Ce(t,n,o),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+le(u,r)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",l="\r\n--"+s+"--",p=Q.getBlob(c,n,l);if(null===p)throw b();var h={name:u.fullPath},f=re(i),d=e.maxUploadRetryTime(),_=new be(f,"POST",Re(e,r),d);return _.urlParams=h,_.headers=a,_.body=p.uploadData(),_.errorHandler=Te(t),_}(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(I.SUCCESS)}),e.errorHandler_)}))},e.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},e.prototype.transition_=function(e){if(this.state_!==e)switch(e){case I.CANCELING:case I.PAUSING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case I.RUNNING:var t=this.state_===I.PAUSED;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case I.PAUSED:this.state_=e,this.notifyObservers_();break;case I.CANCELED:this.error_=g(),this.state_=e,this.notifyObservers_();break;case I.ERROR:case I.SUCCESS:this.state_=e,this.notifyObservers_()}},e.prototype.completeTransitions_=function(){switch(this.state_){case I.PAUSING:this.transition_(I.PAUSED);break;case I.CANCELING:this.transition_(I.CANCELED);break;case I.RUNNING:this.start_()}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=D(this.state_);return new De(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),e.prototype.on=function(e,t,r,n){function o(){if(e!==P.STATE_CHANGED)throw"Expected one of the event types: ["+P.STATE_CHANGED+"]."}var i="Expected a function or an Object with one of `next`, `error`, `complete` properties.",a=ze(!0).validator,s=He(null,!0).validator;function u(e){try{return void a(e)}catch(e){}try{if(s(e),!(W(e.next)||W(e.error)||W(e.complete)))throw"";return}catch(e){throw i}}var c=[Be(o),He(u,!0),ze(!0),ze(!0)];Me("on",c,arguments);var l=this;function p(e){return function(t,r,o){null!==e&&Me("on",e,arguments);var i=new Le(t,r,n);return l.addObserver_(i),function(){l.removeObserver_(i)}}}function h(e){if(null===e)throw i;u(e)}var f=[He(h),ze(!0),ze(!0)],d=!(W(t)||W(r)||W(n));return d?p(f):p(null)(t,r,n)},e.prototype.then=function(e,t){return this.promise_.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},e.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},e.prototype.notifyObservers_=function(){var e=this;this.finishPromise_(),this.observers_.slice().forEach((function(t){e.notifyObserver_(t)}))},e.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(D(this.state_)){case L.SUCCESS:Xe(this.resolve_.bind(null,this.snapshot))();break;case L.CANCELED:case L.ERROR:Xe(this.reject_.bind(null,this.error_))();break;default:e=!1}e&&(this.resolve_=null,this.reject_=null)}},e.prototype.notifyObserver_=function(e){switch(D(this.state_)){case L.RUNNING:case L.PAUSED:e.next&&Xe(e.next.bind(e,this.snapshot))();break;case L.SUCCESS:e.complete&&Xe(e.complete.bind(e))();break;case L.CANCELED:case L.ERROR:e.error&&Xe(e.error.bind(e,this.error_))();break;default:e.error&&Xe(e.error.bind(e,this.error_))()}},e.prototype.resume=function(){Me("resume",[],arguments);var e=this.state_===I.PAUSED||this.state_===I.PAUSING;return e&&this.transition_(I.RUNNING),e},e.prototype.pause=function(){Me("pause",[],arguments);var e=this.state_===I.RUNNING;return e&&this.transition_(I.PAUSING),e},e.prototype.cancel=function(){Me("cancel",[],arguments);var e=this.state_===I.RUNNING||this.state_===I.PAUSING;return e&&this.transition_(I.CANCELING),e},e}(),Ke=function(){function e(e,t){this.authWrapper=e,this.location=t instanceof $?t:$.makeFromUrl(t)}return e.prototype.toString=function(){return Me("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},e.prototype.newRef=function(t,r){return new e(t,r)},e.prototype.mappings=function(){return se()},e.prototype.child=function(e){Me("child",[Be()],arguments);var t=ee(this.location.path,e),r=new $(this.location.bucket,t);return this.newRef(this.authWrapper,r)},Object.defineProperty(e.prototype,"parent",{get:function(){var e=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this.location.path);if(null===e)return null;var t=new $(this.location.bucket,e);return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){var e=new $(this.location.bucket,"");return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return te(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),e.prototype.put=function(e,t){return void 0===t&&(t=null),Me("put",[Ge(),je(!0)],arguments),this.throwIfRoot_("put"),new Ve(this,this.authWrapper,this.location,this.mappings(),new Q(e),t)},e.prototype.putString=function(e,t,r){void 0===t&&(t=U.RAW),Me("putString",[Be(),Be(A,!0),je(!0)],arguments),this.throwIfRoot_("putString");var n=O(t,e),o=Object.assign({},r);return!M(o.contentType)&&M(n.contentType)&&(o.contentType=n.contentType),new Ve(this,this.authWrapper,this.location,this.mappings(),new Q(n.data,!0),o)},e.prototype.delete=function(){var e=this;return Me("delete",[],arguments),this.throwIfRoot_("delete"),this.authWrapper.getAuthToken().then((function(t){var r=Se(e.authWrapper,e.location);return e.authWrapper.makeRequest(r,t).getPromise()}))},e.prototype.listAll=function(){Me("listAll",[],arguments);var e={prefixes:[],items:[]};return this.listAllHelper(e).then((function(){return e}))},e.prototype.listAllHelper=function(e,t){return(0,s.__awaiter)(this,void 0,void 0,(function(){var r,n,o,i;return(0,s.__generator)(this,(function(a){switch(a.label){case 0:return r={pageToken:t},[4,this.list(r)];case 1:return n=a.sent(),(o=e.prefixes).push.apply(o,n.prefixes),(i=e.items).push.apply(i,n.items),null==n.nextPageToken?[3,3]:[4,this.listAllHelper(e,n.nextPageToken)];case 2:a.sent(),a.label=3;case 3:return[2]}}))}))},e.prototype.list=function(e){Me("list",[qe(!0)],arguments);var t=this;return this.authWrapper.getAuthToken().then((function(r){var n=e||{},o=Ne(t.authWrapper,t.location,"/",n.pageToken,n.maxResults);return t.authWrapper.makeRequest(o,r).getPromise()}))},e.prototype.getMetadata=function(){var e=this;return Me("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.authWrapper.getAuthToken().then((function(t){var r=Ae(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(r,t).getPromise()}))},e.prototype.updateMetadata=function(e){var t=this;return Me("updateMetadata",[je()],arguments),this.throwIfRoot_("updateMetadata"),this.authWrapper.getAuthToken().then((function(r){var n=ke(t.authWrapper,t.location,e,t.mappings());return t.authWrapper.makeRequest(n,r).getPromise()}))},e.prototype.getDownloadURL=function(){var e=this;return Me("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.authWrapper.getAuthToken().then((function(t){var r=Oe(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(r,t).getPromise().then((function(e){if(null===e)throw y();return e}))}))},e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw function(e){return new d(_.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)},e}(),Ze=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}(),Je=function(){function e(){this.map=new Map,this.id=f}return e.prototype.addRequest=function(e){var t=this,r=this.id;this.id++,this.map.set(r,e),e.getPromise().then((function(){return t.map.delete(r)}),(function(){return t.map.delete(r)}))},e.prototype.clear=function(){this.map.forEach((function(e){e&&e.cancel(!0)})),this.map.clear()},e}(),Qe=function(){function e(t,r,n,o,i,a){if(this.bucket_=null,this.deleted_=!1,this.app_=t,null!==this.app_){var s=this.app_.options;M(s)&&(this.bucket_=e.extractBucket_(s))}this.authProvider_=r,this.storageRefMaker_=n,this.requestMaker_=o,this.pool_=a,this.service_=i,this.maxOperationRetryTime_=p,this.maxUploadRetryTime_=h,this.requestMap_=new Je}return e.extractBucket_=function(e){var t=e[l]||null;return null==t?null:$.makeFromBucketSpec(t).bucket},e.prototype.getAuthToken=function(){var e=this.authProvider_.getImmediate({optional:!0});return e?e.getToken().then((function(e){return null!==e?e.accessToken:null}),(function(){return null})):Promise.resolve(null)},e.prototype.bucket=function(){if(this.deleted_)throw w();return this.bucket_},e.prototype.service=function(){return this.service_},e.prototype.makeStorageReference=function(e){return this.storageRefMaker_(this,e)},e.prototype.makeRequest=function(e,t){if(this.deleted_)return new Ze(w());var r=this.requestMaker_(e,t,this.pool_);return this.requestMap_.addRequest(r),r},e.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},e.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},e.prototype.setMaxUploadRetryTime=function(e){this.maxUploadRetryTime_=e},e.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},e.prototype.setMaxOperationRetryTime=function(e){this.maxOperationRetryTime_=e},e}();
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
 */
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
var $e=function(){function e(e,t,r,n,o,i,a,s,u,c,l){var p=this;this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(e,t){p.resolve_=e,p.reject_=t,p.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,r){var n,o=e.resolve_,i=e.reject_,a=r.xhr;if(r.wasSuccessCode)try{var s=e.callback_(a,a.getResponseText());W(s)?o(s):o()}catch(e){i(e)}else null!==a?((n=m()).setServerResponseProp(a.getResponseText()),e.errorCallback_?i(e.errorCallback_(a,n)):i(n)):r.canceled?i(n=e.appDelete_?w():g()):i(n=new d(_.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}this.canceled_?t(0,new Ye(!1,null,!0)):this.backoffId_=
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
function(e,t,r){var n=1,o=null,i=!1,a=0;function u(){return 2===a}var c=!1;function l(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];c||(c=!0,t.apply(null,e))}function p(t){o=setTimeout((function(){o=null,e(h,u())}),t)}function h(e){for(var t,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];c||(e?l.call.apply(l,(0,s.__spreadArrays)([null,e],r)):u()||i?l.call.apply(l,(0,s.__spreadArrays)([null,e],r)):(n<64&&(n*=2),1===a?(a=2,t=0):t=1e3*(n+Math.random()),p(t)))}var f=!1;function d(e){f||(f=!0,c||(null!==o?(e||(a=2),clearTimeout(o),p(0)):e||(a=1)))}return p(0),setTimeout((function(){i=!0,d(!0)}),r),d}((function(t,r){if(r)t(!1,new Ye(!1,null,!0));else{var n=e.pool_.createXhrIo();e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null;var n=(r=r).getErrorCode()===x.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new Ye(a,r))}else{var s=r.getErrorCode()===x.ABORT;t(!1,new Ye(!1,null,s))}}))}function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(r,n)}}),t,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||n},e}(),Ye=function(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r};function et(e,t,r){var n=ne(e.urlParams),o=e.url+n,i=Object.assign({},e.headers);return function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(i,t),function(e){var t=void 0!==a.default?a.default.SDK_VERSION:"AppManager";e["X-Firebase-Storage-Version"]="webjs/"+t}(i),new $e(o,e.method,i,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r)}
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
 */var tt=function(){function e(e,t,r,n){if(this.bucket_=null,this.authWrapper_=new Qe(e,t,(function(e,t){return new Ke(e,t)}),et,this,r),this.app_=e,null!=n)this.bucket_=$.makeFromBucketSpec(n);else{var o=this.authWrapper_.bucket();null!=o&&(this.bucket_=new $(o,""))}this.internals_=new rt(this)}return e.prototype.ref=function(e){function t(e){if("string"!=typeof e)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."}if(Me("ref",[Be(t,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var r=new Ke(this.authWrapper_,this.bucket_);return null!=e?r.child(e):r},e.prototype.refFromURL=function(e){function t(e){if("string"!=typeof e)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{$.makeFromUrl(e)}catch(e){throw"Expected valid full URL but got an invalid one."}}return Me("refFromURL",[Be(t,!1)],arguments),new Ke(this.authWrapper_,e)},Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),e.prototype.setMaxUploadRetryTime=function(e){Me("setMaxUploadRetryTime",[Fe()],arguments),this.authWrapper_.setMaxUploadRetryTime(e)},e.prototype.setMaxOperationRetryTime=function(e){Me("setMaxOperationRetryTime",[Fe()],arguments),this.authWrapper_.setMaxOperationRetryTime(e)},Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),e}(),rt=function(){function e(e){this.service_=e}return e.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Promise.resolve()},e}(),nt="@firebase/storage",ot="0.3.24",it="storage";function at(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal");return new tt(r,n,new K,t)}function st(e){var t={TaskState:L,TaskEvent:P,StringFormat:U,Storage:tt,Reference:Ke};e.INTERNAL.registerComponent(new u.Component(it,at,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(nt,ot)}st(a.default),t.registerStorage=st}}]);
(function(){"use strict";const Cl=()=>{};var Wi={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ki=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Pl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Qi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,y=(o&3)<<4|u>>4;let w=(u&15)<<2|d>>6,C=d&63;h||(C=64,a||(w=64)),r.push(e[m],e[y],e[w],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ki(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Pl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const y=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||y==null)throw new Vl;const w=o<<2|u>>4;if(r.push(w),d!==64){const C=u<<4&240|d>>2;if(r.push(C),y!==64){const P=d<<6&192|y;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Vl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dl=function(n){const t=Ki(n);return Qi.encodeByteArray(t,!0)},jn=function(n){return Dl(n).replace(/\./g,"")},kl=function(n){try{return Qi.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Nl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Ol=()=>Nl().__FIREBASE_DEFAULTS__,Ml=()=>{if(typeof process>"u"||typeof Wi>"u")return;const n=Wi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&kl(n[1]);return t&&JSON.parse(t)},Xr=()=>{try{return Cl()||Ol()||Ml()||xl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ll=n=>{var t,e;return(e=(t=Xr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Fl=n=>{const t=Ll(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Xi=()=>{var n;return(n=Xr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ul{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Yr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Bl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function $l(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[jn(JSON.stringify(e)),jn(JSON.stringify(a)),""].join(".")}const Ze={};function jl(){const n={prod:[],emulator:[]};for(const t of Object.keys(Ze))Ze[t]?n.emulator.push(t):n.prod.push(t);return n}function ql(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Yi=!1;function zl(n,t){if(typeof window>"u"||typeof document>"u"||!Yr(window.location.host)||Ze[n]===t||Ze[n]||Yi)return;Ze[n]=t;function e(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=jl().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function u(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,C){w.setAttribute("width","24"),w.setAttribute("id",C),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Yi=!0,a()},w}function m(w,C){w.setAttribute("id",C),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=ql(r),C=e("text"),P=document.getElementById(C)||document.createElement("span"),k=e("learnmore"),V=document.getElementById(k)||document.createElement("a"),B=e("preprendIcon"),x=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const z=w.element;u(z),m(V,k);const tt=d();h(x,B),z.append(x,P,V,tt),document.body.appendChild(z)}o?(P.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Gl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hl(){var n;const t=(n=Xr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Kl(){return!Hl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ji(){try{return typeof indexedDB=="object"}catch{return!1}}function Zi(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function Ql(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Xl="FirebaseError";class Kt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Xl,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Yl(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Kt(s,u,r)}}function Yl(n,t){return n.replace(Jl,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Jl=/\{\$([^}]+)}/g;function zn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(to(o)&&to(a)){if(!zn(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function to(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Zl=1e3,th=2,eh=4*60*60*1e3,nh=.5;function eo(n,t=Zl,e=th){const r=t*Math.pow(e,n),s=Math.round(nh*r*(Math.random()-.5)*2);return Math.min(eh,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function fe(n){return n&&n._delegate?n._delegate:n}class Bt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const me="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class rh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ul;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ih(t))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=me){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=me){return this.instances.has(t)}getOptions(t=me){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=me){return this.component?this.component.multipleInstances?t:me:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sh(n){return n===me?void 0:n}function ih(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class oh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new rh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const ah={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},ch=G.INFO,uh={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},lh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=uh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Jr{constructor(t){this.name=t,this._logLevel=ch,this._logHandler=lh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ah[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}const hh=(n,t)=>t.some(e=>n instanceof e);let no,ro;function dh(){return no||(no=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fh(){return ro||(ro=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const so=new WeakMap,Zr=new WeakMap,io=new WeakMap,ts=new WeakMap,es=new WeakMap;function mh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Qt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&so.set(e,n)}).catch(()=>{}),es.set(t,n),t}function ph(n){if(Zr.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Zr.set(n,t)}let ns={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Zr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||io.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Qt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function gh(n){ns=n(ns)}function _h(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(rs(this),t,...e);return io.set(r,t.sort?t.sort():[t]),Qt(r)}:fh().includes(n)?function(...t){return n.apply(rs(this),t),Qt(so.get(this))}:function(...t){return Qt(n.apply(rs(this),t))}}function yh(n){return typeof n=="function"?_h(n):(n instanceof IDBTransaction&&ph(n),hh(n,dh())?new Proxy(n,ns):n)}function Qt(n){if(n instanceof IDBRequest)return mh(n);if(ts.has(n))return ts.get(n);const t=yh(n);return t!==n&&(ts.set(n,t),es.set(t,n)),t}const rs=n=>es.get(n);function oo(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=Qt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Qt(a.result),h.oldVersion,h.newVersion,Qt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Eh=["get","getKey","getAll","getAllKeys","count"],vh=["put","add","delete","clear"],ss=new Map;function ao(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ss.get(t))return ss.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=vh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Eh.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return ss.set(t,o),o}gh(n=>({...n,get:(t,e,r)=>ao(t,e)||n.get(t,e,r),has:(t,e)=>!!ao(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Th{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ih(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ih(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const is="@firebase/app",co="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const $t=new Jr("@firebase/app"),wh="@firebase/app-compat",Ah="@firebase/analytics-compat",Rh="@firebase/analytics",bh="@firebase/app-check-compat",Sh="@firebase/app-check",Ch="@firebase/auth",Ph="@firebase/auth-compat",Vh="@firebase/database",Dh="@firebase/data-connect",kh="@firebase/database-compat",Nh="@firebase/functions",Oh="@firebase/functions-compat",Mh="@firebase/installations",xh="@firebase/installations-compat",Lh="@firebase/messaging",Fh="@firebase/messaging-compat",Uh="@firebase/performance",Bh="@firebase/performance-compat",$h="@firebase/remote-config",jh="@firebase/remote-config-compat",qh="@firebase/storage",zh="@firebase/storage-compat",Gh="@firebase/firestore",Hh="@firebase/ai",Wh="@firebase/firestore-compat",Kh="firebase",Qh="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const os="[DEFAULT]",Xh={[is]:"fire-core",[wh]:"fire-core-compat",[Rh]:"fire-analytics",[Ah]:"fire-analytics-compat",[Sh]:"fire-app-check",[bh]:"fire-app-check-compat",[Ch]:"fire-auth",[Ph]:"fire-auth-compat",[Vh]:"fire-rtdb",[Dh]:"fire-data-connect",[kh]:"fire-rtdb-compat",[Nh]:"fire-fn",[Oh]:"fire-fn-compat",[Mh]:"fire-iid",[xh]:"fire-iid-compat",[Lh]:"fire-fcm",[Fh]:"fire-fcm-compat",[Uh]:"fire-perf",[Bh]:"fire-perf-compat",[$h]:"fire-rc",[jh]:"fire-rc-compat",[qh]:"fire-gcs",[zh]:"fire-gcs-compat",[Gh]:"fire-fst",[Wh]:"fire-fst-compat",[Hh]:"fire-vertex","fire-js":"fire-js",[Kh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Gn=new Map,Yh=new Map,as=new Map;function uo(n,t){try{n.container.addComponent(t)}catch(e){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Xt(n){const t=n.name;if(as.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;as.set(t,n);for(const e of Gn.values())uo(e,n);for(const e of Yh.values())uo(e,n);return!0}function cs(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Jh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Zh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new qn("app","Firebase",Zh);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class td{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ed=Qh;function lo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:os,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(e||(e=Xi()),!e)throw Yt.create("no-options");const o=Gn.get(s);if(o){if(zn(e,o.options)&&zn(r,o.config))return o;throw Yt.create("duplicate-app",{appName:s})}const a=new oh(s);for(const h of as.values())a.addComponent(h);const u=new td(e,r,a);return Gn.set(s,u),u}function nd(n=os){const t=Gn.get(n);if(!t&&n===os&&Xi())return lo();if(!t)throw Yt.create("no-app",{appName:n});return t}function Nt(n,t,e){var r;let s=(r=Xh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(u.join(" "));return}Xt(new Bt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const rd="firebase-heartbeat-database",sd=1,tn="firebase-heartbeat-store";let us=null;function ho(){return us||(us=oo(rd,sd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(tn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),us}async function id(n){try{const e=(await ho()).transaction(tn),r=await e.objectStore(tn).get(mo(n));return await e.done,r}catch(t){if(t instanceof Kt)$t.warn(t.message);else{const e=Yt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(e.message)}}}async function fo(n,t){try{const r=(await ho()).transaction(tn,"readwrite");await r.objectStore(tn).put(t,mo(n)),await r.done}catch(e){if(e instanceof Kt)$t.warn(e.message);else{const r=Yt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});$t.warn(r.message)}}}function mo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const od=1024,ad=30;class cd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ld(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=po();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>ad){const a=hd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=po(),{heartbeatsToSend:r,unsentEntries:s}=ud(this._heartbeatsCache.heartbeats),o=jn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return $t.warn(e),""}}}function po(){return new Date().toISOString().substring(0,10)}function ud(n,t=od){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),go(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),go(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class ld{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ji()?Zi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await id(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return fo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return fo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function go(n){return jn(JSON.stringify({version:2,heartbeats:n})).length}function hd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function dd(n){Xt(new Bt("platform-logger",t=>new Th(t),"PRIVATE")),Xt(new Bt("heartbeat",t=>new cd(t),"PRIVATE")),Nt(is,co,n),Nt(is,co,"esm2017"),Nt("fire-js","")}dd("");var fd="firebase",md="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */Nt(fd,md,"app");var _o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jt,yo;(function(){var n;/** @license

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(E,T,A){for(var g=Array(arguments.length-2),Gt=2;Gt<arguments.length;Gt++)g[Gt-2]=arguments[Gt];return p.prototype[T].apply(E,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,_){_||(_=0);var E=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)E[T]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(T=0;16>T;++T)E[T]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],T=v.g[2];var A=v.g[3],g=p+(A^_&(T^A))+E[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+E[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+E[2]+606105819&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+E[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+E[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+E[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+E[6]+2821735955&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+E[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+E[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+E[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+E[10]+4294925233&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+E[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+E[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+E[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+E[14]+2792965006&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+E[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(T^A&(_^T))+E[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+E[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+E[11]+643717713&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+E[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+E[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+E[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+E[15]+3634488961&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+E[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+E[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+E[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+E[3]+4107603335&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+E[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+E[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+E[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+E[7]+1735328473&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+E[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(_^T^A)+E[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+E[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+E[11]+1839030562&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+E[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+E[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+E[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+E[7]+4139469664&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+E[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+E[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+E[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+E[3]+3572445317&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+E[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+E[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+E[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+E[15]+530742520&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+E[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(T^(_|~A))+E[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+E[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+E[14]+2878612391&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+E[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+E[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+E[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+E[10]+4293915773&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+E[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+E[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+E[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+E[6]+2734768916&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+E[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+E[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+E[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+E[2]+718787259&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+A&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,E=this.B,T=this.h,A=0;A<p;){if(T==0)for(;A<=_;)s(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<p;)if(E[T++]=v.charCodeAt(A++),T==this.blockSize){s(this,E),T=0;break}}else for(;A<p;)if(E[T++]=v[A++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var E=0;32>E;E+=8)v[_++]=this.g[p]>>>E&255;return v};function o(v,p){var _=u;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function a(v,p){this.h=p;for(var _=[],E=!0,T=v.length-1;0<=T;T--){var A=v[T]|0;E&&A==p||(_[T]=A,E=!1)}this.g=_}var u={};function h(v){return-128<=v&&128>v?o(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return y;if(0>v)return V(d(-v));for(var p=[],_=1,E=0;v>=_;E++)p[E]=v/_|0,_*=4294967296;return new a(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return V(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),E=y,T=0;T<v.length;T+=8){var A=Math.min(8,v.length-T),g=parseInt(v.substring(T,T+A),p);8>A?(A=d(Math.pow(p,A)),E=E.j(A).add(d(g))):(E=E.j(_),E=E.add(d(g)))}return E}var y=h(0),w=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-V(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var E=this.i(_);v+=(0<=E?E:4294967296+E)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(k(this))return"-"+V(this).toString(v);for(var p=d(Math.pow(v,6)),_=this,E="";;){var T=tt(_,p).g;_=B(_,T.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=T,P(_))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=B(this,v),k(v)?-1:P(v)?0:1};function V(v){for(var p=v.g.length,_=[],E=0;E<p;E++)_[E]=~v.g[E];return new a(_,~v.h).add(w)}n.abs=function(){return k(this)?V(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],E=0,T=0;T<=p;T++){var A=E+(this.i(T)&65535)+(v.i(T)&65535),g=(A>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);E=g>>>16,A&=65535,g&=65535,_[T]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function B(v,p){return v.add(V(p))}n.j=function(v){if(P(this)||P(v))return y;if(k(this))return k(v)?V(this).j(V(v)):V(V(this).j(v));if(k(v))return V(this.j(V(v)));if(0>this.l(C)&&0>v.l(C))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],E=0;E<2*p;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<v.g.length;T++){var A=this.i(E)>>>16,g=this.i(E)&65535,Gt=v.i(T)>>>16,Rn=v.i(T)&65535;_[2*E+2*T]+=g*Rn,x(_,2*E+2*T),_[2*E+2*T+1]+=A*Rn,x(_,2*E+2*T+1),_[2*E+2*T+1]+=g*Gt,x(_,2*E+2*T+1),_[2*E+2*T+2]+=A*Gt,x(_,2*E+2*T+2)}for(E=0;E<p;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=p;E<2*p;E++)_[E]=0;return new a(_,0)};function x(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function z(v,p){this.g=v,this.h=p}function tt(v,p){if(P(p))throw Error("division by zero");if(P(v))return new z(y,y);if(k(v))return p=tt(V(v),p),new z(V(p.g),V(p.h));if(k(p))return p=tt(v,V(p)),new z(V(p.g),p.h);if(30<v.g.length){if(k(v)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var _=w,E=p;0>=E.l(v);)_=Dt(_),E=Dt(E);var T=at(_,1),A=at(E,1);for(E=at(E,2),_=at(_,2);!P(E);){var g=A.add(E);0>=g.l(v)&&(T=T.add(_),A=g),E=at(E,1),_=at(_,1)}return p=B(v,T.j(p)),new z(T,p)}for(T=y;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(_),g=A.j(p);k(g)||0<g.l(v);)_-=E,A=d(_),g=A.j(p);P(A)&&(A=w),T=T.add(A),v=B(v,g)}return new z(T,v)}n.A=function(v){return tt(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)&v.i(E);return new a(_,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)|v.i(E);return new a(_,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)^v.i(E);return new a(_,this.h^v.h)};function Dt(v){for(var p=v.g.length+1,_=[],E=0;E<p;E++)_[E]=v.i(E)<<1|v.i(E-1)>>>31;return new a(_,v.h)}function at(v,p){var _=p>>5;p%=32;for(var E=v.g.length-_,T=[],A=0;A<E;A++)T[A]=0<p?v.i(A+_)>>>p|v.i(A+_+1)<<32-p:v.i(A+_);return new a(T,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yo=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Jt=a}).apply(typeof _o<"u"?_o:typeof self<"u"?self:typeof window<"u"?window:{});var Hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Eo,en,vo,Wn,ls,To,Io,wo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,l){return i==Array.prototype||i==Object.prototype||(i[c]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hn=="object"&&Hn];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var I=i[f];if(!(I in l))break t;l=l[I]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&t(l,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var l=0,f=!1,I={next:function(){if(!f&&l<i.length){var R=l++;return{value:c(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,l){return l})}});/** @license

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */var a=a||{},u=this||self;function h(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function m(i,c,l){return i.call.apply(i.bind,arguments)}function y(i,c,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),i.apply(c,I)}}return function(){return i.apply(c,arguments)}}function w(i,c,l){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,w.apply(null,arguments)}function C(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function P(i,c){function l(){}l.prototype=c.prototype,i.aa=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,I,R){for(var D=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)D[Q-2]=arguments[Q];return c.prototype[I].apply(f,D)}}function k(i){const c=i.length;if(0<c){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function V(i,c){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const I=i.length||0,R=f.length||0;i.length=I+R;for(let D=0;D<R;D++)i[I+D]=f[D]}else i.push(f)}}class B{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function x(i){return/^[\s\xa0]*$/.test(i)}function z(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function tt(i){return tt[" "](i),i}tt[" "]=function(){};var Dt=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function at(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function v(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function p(i){const c={};for(const l in i)c[l]=i[l];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,c){let l,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(l in f)i[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function T(i){var c=1;i=i.split(":");const l=[];for(;0<c&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function A(i){u.setTimeout(()=>{throw i},0)}function g(){var i=wi;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class Gt{constructor(){this.h=this.g=null}add(c,l){const f=Rn.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Rn=new B(()=>new c_,i=>i.reset());class c_{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let bn,Sn=!1,wi=new Gt,Cu=()=>{const i=u.Promise.resolve(void 0);bn=()=>{i.then(u_)}};var u_=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){A(l)}var c=Rn;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}Sn=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _t(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var l_=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return i}();function Cn(i,c){if(_t.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(Dt){t:{try{tt(c.nodeName);var I=!0;break t}catch{}I=!1}I||(c=null)}}else l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:h_[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Cn.aa.h.call(this)}}P(Cn,_t);var h_={2:"touch",3:"pen",4:"mouse"};Cn.prototype.h=function(){Cn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Dr="closure_listenable_"+(1e6*Math.random()|0),d_=0;function f_(i,c,l,f,I){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=I,this.key=++d_,this.da=this.fa=!1}function kr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Nr(i){this.src=i,this.g={},this.h=0}Nr.prototype.add=function(i,c,l,f,I){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var D=Ri(i,c,f,I);return-1<D?(c=i[D],l||(c.fa=!1)):(c=new f_(c,this.src,R,!!f,I),c.fa=l,i.push(c)),c};function Ai(i,c){var l=c.type;if(l in i.g){var f=i.g[l],I=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=I)&&Array.prototype.splice.call(f,I,1),R&&(kr(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Ri(i,c,l,f){for(var I=0;I<i.length;++I){var R=i[I];if(!R.da&&R.listener==c&&R.capture==!!l&&R.ha==f)return I}return-1}var bi="closure_lm_"+(1e6*Math.random()|0),Si={};function Pu(i,c,l,f,I){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Pu(i,c[R],l,f,I);return null}return l=ku(l),i&&i[Dr]?i.K(c,l,d(f)?!!f.capture:!1,I):m_(i,c,l,!1,f,I)}function m_(i,c,l,f,I,R){if(!c)throw Error("Invalid event type");var D=d(I)?!!I.capture:!!I,Q=Pi(i);if(Q||(i[bi]=Q=new Nr(i)),l=Q.add(c,l,f,D,R),l.proxy)return l;if(f=p_(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)l_||(I=D),I===void 0&&(I=!1),i.addEventListener(c.toString(),f,I);else if(i.attachEvent)i.attachEvent(Du(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function p_(){function i(l){return c.call(i.src,i.listener,l)}const c=g_;return i}function Vu(i,c,l,f,I){if(Array.isArray(c))for(var R=0;R<c.length;R++)Vu(i,c[R],l,f,I);else f=d(f)?!!f.capture:!!f,l=ku(l),i&&i[Dr]?(i=i.i,c=String(c).toString(),c in i.g&&(R=i.g[c],l=Ri(R,l,f,I),-1<l&&(kr(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[c],i.h--)))):i&&(i=Pi(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Ri(c,l,f,I)),(l=-1<i?c[i]:null)&&Ci(l))}function Ci(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Dr])Ai(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(Du(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=Pi(c))?(Ai(l,i),l.h==0&&(l.src=null,c[bi]=null)):kr(i)}}}function Du(i){return i in Si?Si[i]:Si[i]="on"+i}function g_(i,c){if(i.da)i=!0;else{c=new Cn(c,this);var l=i.listener,f=i.ha||i.src;i.fa&&Ci(i),i=l.call(f,c)}return i}function Pi(i){return i=i[bi],i instanceof Nr?i:null}var Vi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ku(i){return typeof i=="function"?i:(i[Vi]||(i[Vi]=function(c){return i.handleEvent(c)}),i[Vi])}function yt(){ue.call(this),this.i=new Nr(this),this.M=this,this.F=null}P(yt,ue),yt.prototype[Dr]=!0,yt.prototype.removeEventListener=function(i,c,l,f){Vu(this,i,c,l,f)};function Tt(i,c){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new _t(c,i);else if(c instanceof _t)c.target=c.target||i;else{var I=c;c=new _t(f,i),E(c,I)}if(I=!0,l)for(var R=l.length-1;0<=R;R--){var D=c.g=l[R];I=Or(D,f,!0,c)&&I}if(D=c.g=i,I=Or(D,f,!0,c)&&I,I=Or(D,f,!1,c)&&I,l)for(R=0;R<l.length;R++)D=c.g=l[R],I=Or(D,f,!1,c)&&I}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var l=i.g[c],f=0;f<l.length;f++)kr(l[f]);delete i.g[c],i.h--}}this.F=null},yt.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},yt.prototype.L=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function Or(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var I=!0,R=0;R<c.length;++R){var D=c[R];if(D&&!D.da&&D.capture==l){var Q=D.listener,ft=D.ha||D.src;D.fa&&Ai(i.i,D),I=Q.call(ft,f)!==!1&&I}}return I&&!f.defaultPrevented}function Nu(i,c,l){if(typeof i=="function")l&&(i=w(i,l));else if(i&&typeof i.handleEvent=="function")i=w(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(i,c||0)}function Ou(i){i.g=Nu(()=>{i.g=null,i.i&&(i.i=!1,Ou(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class __ extends ue{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ou(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pn(i){ue.call(this),this.h=i,this.g={}}P(Pn,ue);var Mu=[];function xu(i){at(i.g,function(c,l){this.g.hasOwnProperty(l)&&Ci(c)},i),i.g={}}Pn.prototype.N=function(){Pn.aa.N.call(this),xu(this)},Pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Di=u.JSON.stringify,y_=u.JSON.parse,E_=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function ki(){}ki.prototype.h=null;function Lu(i){return i.h||(i.h=i.i())}function Fu(){}var Vn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ni(){_t.call(this,"d")}P(Ni,_t);function Oi(){_t.call(this,"c")}P(Oi,_t);var Se={},Uu=null;function Mr(){return Uu=Uu||new yt}Se.La="serverreachability";function Bu(i){_t.call(this,Se.La,i)}P(Bu,_t);function Dn(i){const c=Mr();Tt(c,new Bu(c))}Se.STAT_EVENT="statevent";function $u(i,c){_t.call(this,Se.STAT_EVENT,i),this.stat=c}P($u,_t);function It(i){const c=Mr();Tt(c,new $u(c,i))}Se.Ma="timingevent";function ju(i,c){_t.call(this,Se.Ma,i),this.size=c}P(ju,_t);function kn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},c)}function Nn(){this.g=!0}Nn.prototype.xa=function(){this.g=!1};function v_(i,c,l,f,I,R){i.info(function(){if(i.g)if(R)for(var D="",Q=R.split("&"),ft=0;ft<Q.length;ft++){var W=Q[ft].split("=");if(1<W.length){var Et=W[0];W=W[1];var vt=Et.split("_");D=2<=vt.length&&vt[1]=="type"?D+(Et+"="+W+"&"):D+(Et+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+c+`
`+l+`
`+D})}function T_(i,c,l,f,I,R,D){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+c+`
`+l+`
`+R+" "+D})}function Qe(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+w_(i,l)+(f?" "+f:"")})}function I_(i,c){i.info(function(){return"TIMEOUT: "+c})}Nn.prototype.info=function(){};function w_(i,c){if(!i.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<I.length;D++)I[D]=""}}}}return Di(l)}catch{return c}}var xr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Mi;function Lr(){}P(Lr,ki),Lr.prototype.g=function(){return new XMLHttpRequest},Lr.prototype.i=function(){return{}},Mi=new Lr;function le(i,c,l,f){this.j=i,this.i=c,this.l=l,this.R=f||1,this.U=new Pn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zu}function zu(){this.i=null,this.g="",this.h=!1}var Gu={},xi={};function Li(i,c,l){i.L=1,i.v=$r(Ht(c)),i.m=l,i.P=!0,Hu(i,null)}function Hu(i,c){i.F=Date.now(),Fr(i),i.A=Ht(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),ol(l.i,"t",f),i.C=0,l=i.j.J,i.h=new zu,i.g=Al(i.j,l?c:null,!i.m),0<i.O&&(i.M=new __(w(i.Y,i,i.g),i.O)),c=i.U,l=i.g,f=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(Mu[0]=I.toString()),I=Mu);for(var R=0;R<I.length;R++){var D=Pu(l,I[R],f||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),Dn(),v_(i.i,i.u,i.A,i.l,i.R,i.m)}le.prototype.ca=function(i){i=i.target;const c=this.M;c&&Wt(i)==3?c.j():this.Y(i)},le.prototype.Y=function(i){try{if(i==this.g)t:{const vt=Wt(this.g);var c=this.g.Ba();const Je=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||fl(this.g)))){this.J||vt!=4||c==7||(c==8||0>=Je?Dn(3):Dn(2)),Fi(this);var l=this.g.Z();this.X=l;e:if(Wu(this)){var f=fl(this.g);i="";var I=f.length,R=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ce(this),On(this);var D="";break e}this.h.i=new u.TextDecoder}for(c=0;c<I;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(R&&c==I-1)});f.length=0,this.h.g+=i,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=l==200,T_(this.i,this.u,this.A,this.l,this.R,vt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,ft=this.g;if((Q=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Q)){var W=Q;break e}}W=null}if(l=W)Qe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ui(this,l);else{this.o=!1,this.s=3,It(12),Ce(this),On(this);break t}}if(this.P){l=!0;let kt;for(;!this.J&&this.C<D.length;)if(kt=A_(this,D),kt==xi){vt==4&&(this.s=4,It(14),l=!1),Qe(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==Gu){this.s=4,It(15),Qe(this.i,this.l,D,"[Invalid Chunk]"),l=!1;break}else Qe(this.i,this.l,kt,null),Ui(this,kt);if(Wu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||D.length!=0||this.h.h||(this.s=1,It(16),l=!1),this.o=this.o&&l,!l)Qe(this.i,this.l,D,"[Invalid Chunked Response]"),Ce(this),On(this);else if(0<D.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Gi(Et),Et.M=!0,It(11))}}else Qe(this.i,this.l,D,null),Ui(this,D);vt==4&&Ce(this),this.o&&!this.J&&(vt==4?vl(this.j,this):(this.o=!1,Fr(this)))}else $_(this.g),l==400&&0<D.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),Ce(this),On(this)}}}catch{}finally{}};function Wu(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function A_(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?xi:(l=Number(c.substring(l,f)),isNaN(l)?Gu:(f+=1,f+l>c.length?xi:(c=c.slice(f,f+l),i.C=f+l,c)))}le.prototype.cancel=function(){this.J=!0,Ce(this)};function Fr(i){i.S=Date.now()+i.I,Ku(i,i.I)}function Ku(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=kn(w(i.ba,i),c)}function Fi(i){i.B&&(u.clearTimeout(i.B),i.B=null)}le.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(I_(this.i,this.A),this.L!=2&&(Dn(),It(17)),Ce(this),this.s=2,On(this)):Ku(this,this.S-i)};function On(i){i.j.G==0||i.J||vl(i.j,i)}function Ce(i){Fi(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,xu(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function Ui(i,c){try{var l=i.j;if(l.G!=0&&(l.g==i||Bi(l.h,i))){if(!i.K&&Bi(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Wr(l),Gr(l);else break t;zi(l),It(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=kn(w(l.Za,l),6e3));if(1>=Yu(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Ve(l,11)}else if((i.K||l.g==i)&&Wr(l),!x(c))for(I=l.Da.g.parse(c),c=0;c<I.length;c++){let W=I[c];if(l.T=W[0],W=W[1],l.G==2)if(W[0]=="c"){l.K=W[1],l.ia=W[2];const Et=W[3];Et!=null&&(l.la=Et,l.j.info("VER="+l.la));const vt=W[4];vt!=null&&(l.Aa=vt,l.j.info("SVER="+l.Aa));const Je=W[5];Je!=null&&typeof Je=="number"&&0<Je&&(f=1.5*Je,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const kt=i.g;if(kt){const Qr=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qr){var R=f.h;R.g||Qr.indexOf("spdy")==-1&&Qr.indexOf("quic")==-1&&Qr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&($i(R,R.h),R.h=null))}if(f.D){const Hi=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Hi&&(f.ya=Hi,J(f.I,f.D,Hi))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var D=i;if(f.qa=wl(f,f.J?f.ia:null,f.W),D.K){Ju(f.h,D);var Q=D,ft=f.L;ft&&(Q.I=ft),Q.B&&(Fi(Q),Fr(Q)),f.g=D}else yl(f);0<l.i.length&&Hr(l)}else W[0]!="stop"&&W[0]!="close"||Ve(l,7);else l.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?Ve(l,7):qi(l):W[0]!="noop"&&l.l&&l.l.ta(W),l.v=0)}}Dn(4)}catch{}}var R_=class{constructor(i,c){this.g=i,this.map=c}};function Qu(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xu(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Yu(i){return i.h?1:i.g?i.g.size:0}function Bi(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function $i(i,c){i.g?i.g.add(c):i.h=c}function Ju(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Qu.prototype.cancel=function(){if(this.i=Zu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Zu(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.D);return c}return k(i.i)}function b_(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var c=[],l=i.length,f=0;f<l;f++)c.push(i[f]);return c}c=[],l=0;for(f in i)c[l++]=i[f];return c}function S_(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var c=[];i=i.length;for(var l=0;l<i;l++)c.push(l);return c}c=[],l=0;for(const f in i)c[l++]=f;return c}}}function tl(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var l=S_(i),f=b_(i),I=f.length,R=0;R<I;R++)c.call(void 0,f[R],l&&l[R],i)}var el=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function C_(i,c){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),I=null;if(0<=f){var R=i[l].substring(0,f);I=i[l].substring(f+1)}else R=i[l];c(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Pe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Pe){this.h=i.h,Ur(this,i.j),this.o=i.o,this.g=i.g,Br(this,i.s),this.l=i.l;var c=i.i,l=new Ln;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),nl(this,l),this.m=i.m}else i&&(c=String(i).match(el))?(this.h=!1,Ur(this,c[1]||"",!0),this.o=Mn(c[2]||""),this.g=Mn(c[3]||"",!0),Br(this,c[4]),this.l=Mn(c[5]||"",!0),nl(this,c[6]||"",!0),this.m=Mn(c[7]||"")):(this.h=!1,this.i=new Ln(null,this.h))}Pe.prototype.toString=function(){var i=[],c=this.j;c&&i.push(xn(c,rl,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(xn(c,rl,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(xn(l,l.charAt(0)=="/"?D_:V_,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",xn(l,N_)),i.join("")};function Ht(i){return new Pe(i)}function Ur(i,c,l){i.j=l?Mn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Br(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function nl(i,c,l){c instanceof Ln?(i.i=c,O_(i.i,i.h)):(l||(c=xn(c,k_)),i.i=new Ln(c,i.h))}function J(i,c,l){i.i.set(c,l)}function $r(i){return J(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Mn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function xn(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,P_),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function P_(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var rl=/[#\/\?@]/g,V_=/[#\?:]/g,D_=/[#\?]/g,k_=/[#\?@]/g,N_=/#/g;function Ln(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function he(i){i.g||(i.g=new Map,i.h=0,i.i&&C_(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Ln.prototype,n.add=function(i,c){he(this),this.i=null,i=Xe(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function sl(i,c){he(i),c=Xe(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function il(i,c){return he(i),c=Xe(i,c),i.g.has(c)}n.forEach=function(i,c){he(this),this.g.forEach(function(l,f){l.forEach(function(I){i.call(c,I,f,this)},this)},this)},n.na=function(){he(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){const I=i[f];for(let R=0;R<I.length;R++)l.push(c[f])}return l},n.V=function(i){he(this);let c=[];if(typeof i=="string")il(this,i)&&(c=c.concat(this.g.get(Xe(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)c=c.concat(i[l])}return c},n.set=function(i,c){return he(this),this.i=null,i=Xe(this,i),il(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function ol(i,c,l){sl(i,c),0<l.length&&(i.i=null,i.g.set(Xe(i,c),k(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];const R=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var I=R;D[f]!==""&&(I+="="+encodeURIComponent(String(D[f]))),i.push(I)}}return this.i=i.join("&")};function Xe(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function O_(i,c){c&&!i.j&&(he(i),i.i=null,i.g.forEach(function(l,f){var I=f.toLowerCase();f!=I&&(sl(this,f),ol(this,I,l))},i)),i.j=c}function M_(i,c){const l=new Nn;if(u.Image){const f=new Image;f.onload=C(de,l,"TestLoadImage: loaded",!0,c,f),f.onerror=C(de,l,"TestLoadImage: error",!1,c,f),f.onabort=C(de,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=C(de,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function x_(i,c){const l=new Nn,f=new AbortController,I=setTimeout(()=>{f.abort(),de(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(I),R.ok?de(l,"TestPingServer: ok",!0,c):de(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(I),de(l,"TestPingServer: error",!1,c)})}function de(i,c,l,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(l)}catch{}}function L_(){this.g=new E_}function F_(i,c,l){const f=l||"";try{tl(i,function(I,R){let D=I;d(I)&&(D=Di(I)),c.push(f+R+"="+encodeURIComponent(D))})}catch(I){throw c.push(f+"type="+encodeURIComponent("_badmap")),I}}function jr(i){this.l=i.Ub||null,this.j=i.eb||!1}P(jr,ki),jr.prototype.g=function(){return new qr(this.l,this.j)},jr.prototype.i=function(i){return function(){return i}}({});function qr(i,c){yt.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(qr,yt),n=qr.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,Un(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;al(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function al(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Fn(this):Un(this),this.readyState==3&&al(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Fn(this))},n.Qa=function(i){this.g&&(this.response=i,Fn(this))},n.ga=function(){this.g&&Fn(this)};function Fn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Un(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function Un(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function cl(i){let c="";return at(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function ji(i,c,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=cl(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):J(i,c,l))}function et(i){yt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(et,yt);var U_=/^https?$/i,B_=["POST","PUT"];n=et.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mi.g(),this.v=this.o?Lu(this.o):Lu(Mi),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){ul(this,R);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)l.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),I=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(B_,c,void 0))||f||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of l)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dl(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){ul(this,R)}};function ul(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,ll(i),zr(i)}function ll(i){i.A||(i.A=!0,Tt(i,"complete"),Tt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Tt(this,"complete"),Tt(this,"abort"),zr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zr(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?hl(this):this.bb())},n.bb=function(){hl(this)};function hl(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Wt(i)!=4||i.Z()!=2)){if(i.u&&Wt(i)==4)Nu(i.Ea,0,i);else if(Tt(i,"readystatechange"),Wt(i)==4){i.h=!1;try{const D=i.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var f;if(f=D===0){var I=String(i.D).match(el)[1]||null;!I&&u.self&&u.self.location&&(I=u.self.location.protocol.slice(0,-1)),f=!U_.test(I?I.toLowerCase():"")}l=f}if(l)Tt(i,"complete"),Tt(i,"success");else{i.m=6;try{var R=2<Wt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",ll(i)}}finally{zr(i)}}}}function zr(i,c){if(i.g){dl(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||Tt(i,"ready");try{l.onreadystatechange=f}catch{}}}function dl(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Wt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),y_(c)}};function fl(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function $_(i){const c={};i=(i.g&&2<=Wt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(x(i[f]))continue;var l=T(i[f]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=c[I]||[];c[I]=R,R.push(l)}v(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function ml(i){this.Aa=0,this.i=[],this.j=new Nn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bn("baseRetryDelayMs",5e3,i),this.cb=Bn("retryDelaySeedMs",1e4,i),this.Wa=Bn("forwardChannelMaxRetries",2,i),this.wa=Bn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Qu(i&&i.concurrentRequestLimit),this.Da=new L_,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ml.prototype,n.la=8,n.G=1,n.connect=function(i,c,l,f){It(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=wl(this,null,this.W),Hr(this)};function qi(i){if(pl(i),i.G==3){var c=i.U++,l=Ht(i.I);if(J(l,"SID",i.K),J(l,"RID",c),J(l,"TYPE","terminate"),$n(i,l),c=new le(i,i.j,c),c.L=2,c.v=$r(Ht(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=Al(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Fr(c)}Il(i)}function Gr(i){i.g&&(Gi(i),i.g.cancel(),i.g=null)}function pl(i){Gr(i),i.u&&(u.clearTimeout(i.u),i.u=null),Wr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function Hr(i){if(!Xu(i.h)&&!i.s){i.s=!0;var c=i.Ga;bn||Cu(),Sn||(bn(),Sn=!0),wi.add(c,i),i.B=0}}function j_(i,c){return Yu(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=kn(w(i.Ga,i,c),Tl(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new le(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=_l(this,I,c),l=Ht(this.I),J(l,"RID",i),J(l,"CVER",22),this.D&&J(l,"X-HTTP-Session-Id",this.D),$n(this,l),R&&(this.O?c="headers="+encodeURIComponent(String(cl(R)))+"&"+c:this.m&&ji(l,this.m,R)),$i(this.h,I),this.Ua&&J(l,"TYPE","init"),this.P?(J(l,"$req",c),J(l,"SID","null"),I.T=!0,Li(I,l,null)):Li(I,l,c),this.G=2}}else this.G==3&&(i?gl(this,i):this.i.length==0||Xu(this.h)||gl(this))};function gl(i,c){var l;c?l=c.l:l=i.U++;const f=Ht(i.I);J(f,"SID",i.K),J(f,"RID",l),J(f,"AID",i.T),$n(i,f),i.m&&i.o&&ji(f,i.m,i.o),l=new le(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),c&&(i.i=c.D.concat(i.i)),c=_l(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),$i(i.h,l),Li(l,f,c)}function $n(i,c){i.H&&at(i.H,function(l,f){J(c,f,l)}),i.l&&tl({},function(l,f){J(c,f,l)})}function _l(i,c,l){l=Math.min(i.i.length,l);var f=i.l?w(i.l.Na,i.l,i):null;t:{var I=i.i;let R=-1;for(;;){const D=["count="+l];R==-1?0<l?(R=I[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let Q=!0;for(let ft=0;ft<l;ft++){let W=I[ft].g;const Et=I[ft].map;if(W-=R,0>W)R=Math.max(0,I[ft].g-100),Q=!1;else try{F_(Et,D,"req"+W+"_")}catch{f&&f(Et)}}if(Q){f=D.join("&");break t}}}return i=i.i.splice(0,l),c.D=i,f}function yl(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;bn||Cu(),Sn||(bn(),Sn=!0),wi.add(c,i),i.v=0}}function zi(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=kn(w(i.Fa,i),Tl(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,El(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=kn(w(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Gr(this),El(this))};function Gi(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function El(i){i.g=new le(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=Ht(i.qa);J(c,"RID","rpc"),J(c,"SID",i.K),J(c,"AID",i.T),J(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&J(c,"TO",i.ja),J(c,"TYPE","xmlhttp"),$n(i,c),i.m&&i.o&&ji(c,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=$r(Ht(c)),l.m=null,l.P=!0,Hu(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Gr(this),zi(this),It(19))};function Wr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function vl(i,c){var l=null;if(i.g==c){Wr(i),Gi(i),i.g=null;var f=2}else if(Bi(i.h,c))l=c.D,Ju(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var I=i.B;f=Mr(),Tt(f,new ju(f,l)),Hr(i)}else yl(i);else if(I=c.s,I==3||I==0&&0<c.X||!(f==1&&j_(i,c)||f==2&&zi(i)))switch(l&&0<l.length&&(c=i.h,c.i=c.i.concat(l)),I){case 1:Ve(i,5);break;case 4:Ve(i,10);break;case 3:Ve(i,6);break;default:Ve(i,2)}}}function Tl(i,c){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*c}function Ve(i,c){if(i.j.info("Error code "+c),c==2){var l=w(i.fb,i),f=i.Xa;const I=!f;f=new Pe(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Ur(f,"https"),$r(f),I?M_(f.toString(),l):x_(f.toString(),l)}else It(2);i.G=0,i.l&&i.l.sa(c),Il(i),pl(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Il(i){if(i.G=0,i.ka=[],i.l){const c=Zu(i.h);(c.length!=0||i.i.length!=0)&&(V(i.ka,c),V(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function wl(i,c,l){var f=l instanceof Pe?Ht(l):new Pe(l);if(f.g!="")c&&(f.g=c+"."+f.g),Br(f,f.s);else{var I=u.location;f=I.protocol,c=c?c+"."+I.hostname:I.hostname,I=+I.port;var R=new Pe(null);f&&Ur(R,f),c&&(R.g=c),I&&Br(R,I),l&&(R.l=l),f=R}return l=i.D,c=i.ya,l&&c&&J(f,l,c),J(f,"VER",i.la),$n(i,f),f}function Al(i,c,l){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new et(new jr({eb:l})):new et(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rl(){}n=Rl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Kr(){}Kr.prototype.g=function(i,c){return new Rt(i,c)};function Rt(i,c){yt.call(this),this.g=new ml(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!x(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!x(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Ye(this)}P(Rt,yt),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){qi(this.g)},Rt.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Di(i),i=l);c.i.push(new R_(c.Ya++,i)),c.G==3&&Hr(c)},Rt.prototype.N=function(){this.g.l=null,delete this.j,qi(this.g),delete this.g,Rt.aa.N.call(this)};function bl(i){Ni.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const l in c){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}P(bl,Ni);function Sl(){Oi.call(this),this.status=1}P(Sl,Oi);function Ye(i){this.g=i}P(Ye,Rl),Ye.prototype.ua=function(){Tt(this.g,"a")},Ye.prototype.ta=function(i){Tt(this.g,new bl(i))},Ye.prototype.sa=function(i){Tt(this.g,new Sl)},Ye.prototype.ra=function(){Tt(this.g,"b")},Kr.prototype.createWebChannel=Kr.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,wo=function(){return new Kr},Io=function(){return Mr()},To=Se,ls={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xr.NO_ERROR=0,xr.TIMEOUT=8,xr.HTTP_ERROR=6,Wn=xr,qu.COMPLETE="complete",vo=qu,Fu.EventType=Vn,Vn.OPEN="a",Vn.CLOSE="b",Vn.ERROR="c",Vn.MESSAGE="d",yt.prototype.listen=yt.prototype.K,en=Fu,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,Eo=et}).apply(typeof Hn<"u"?Hn:typeof self<"u"?self:typeof window<"u"?window:{});const Ao="@firebase/firestore",Ro="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let De="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const pe=new Jr("@firebase/firestore");function ke(){return pe.logLevel}function O(n,...t){if(pe.logLevel<=G.DEBUG){const e=t.map(hs);pe.debug(`Firestore (${De}): ${n}`,...e)}}function jt(n,...t){if(pe.logLevel<=G.ERROR){const e=t.map(hs);pe.error(`Firestore (${De}): ${n}`,...e)}}function Zt(n,...t){if(pe.logLevel<=G.WARN){const e=t.map(hs);pe.warn(`Firestore (${De}): ${n}`,...e)}}function hs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function F(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,bo(n,r,e)}function bo(n,t,e){let r=`FIRESTORE (${De}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw jt(r),new Error(r)}function K(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||bo(t,s,r)}function $(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Kt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class te{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class So{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class gd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class _d{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new te;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new te,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new te)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new So(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new mt(t)}}class yd{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ed{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new yd(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Co{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vd{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Co(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Co(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Td(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Po(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ds{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Td(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function j(n,t){return n<t?-1:n>t?1:0}function fs(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return j(r,s);{const o=Po(),a=Id(o.encode(Vo(n,e)),o.encode(Vo(t,e)));return a!==0?a:j(r,s)}}e+=r>65535?2:1}return j(n.length,t.length)}function Vo(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Id(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return j(n[e],t[e]);return j(n.length,t.length)}function Ne(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Do="__name__";class Ot{constructor(t,e,r){e===void 0?e=0:e>t.length&&F(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&F(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ot.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ot?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Ot.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return j(t.length,e.length)}static compareSegments(t,e){const r=Ot.isNumericId(t),s=Ot.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Ot.extractNumericId(t).compare(Ot.extractNumericId(e)):fs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jt.fromString(t.substring(4,t.length-2))}}class X extends Ot{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const wd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Ot{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return wd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Do}static keyField(){return new lt([Do])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ko(n,t,e){if(!e)throw new N(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ad(n,t,e,r){if(t===!0&&r===!0)throw new N(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function No(n){if(!M.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Oo(n){if(M.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mo(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Kn(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function Qn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Kn(n);throw new N(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function rt(n,t){const e={typeString:n};return t&&(e.value=t),e}function nn(n,t){if(!Mo(n))throw new N(b.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new N(b.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const xo=-62135596800,Lo=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Lo);return new Y(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<xo)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lo}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(nn(t,Y._jsonSchema))return new Y(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-xo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:rt("string",Y._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new Y(0,0))}static max(){return new U(new Y(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const rn=-1;function Rd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new Y(e+1,0):new Y(e,r));return new ee(s,M.empty(),t)}function bd(n){return new ee(n.readTime,n.key,rn)}class ee{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ee(U.min(),M.empty(),rn)}static max(){return new ee(U.max(),M.empty(),rn)}}function Sd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Cd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function Oe(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Cd)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(s=>s?S.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++u,u===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new S((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Vd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Me(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Xn{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Xn.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ms=-1;function Yn(n){return n==null}function Jn(n){return n===0&&1/n==-1/0}function Dd(n){return typeof n=="number"&&Number.isInteger(n)&&!Jn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Fo="";function kd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Uo(t)),t=Nd(n.get(e),t);return Uo(t)}function Nd(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Fo:e+="";break;default:e+=o}}return e}function Uo(n){return n+Fo+""}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Bo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ge(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function $o(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Z{constructor(t,e){this.comparator=t,this.root=e||ht.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ht.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zn(this.root,t,this.comparator,!0)}}class Zn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ht{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=o??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ht(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw F(27949);return t+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1,ht.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new ht(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ot{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new jo(this.data.getIterator())}getIteratorFrom(t){return new jo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class jo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Pt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new ot(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ne(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class qo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new qo("Invalid base64 string: "+o):o}}(t);return new dt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Od=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(n){if(K(!!n,39018),typeof n=="string"){let t=0;const e=Od.exec(n);if(K(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:nt(n.seconds),nanos:nt(n.nanos)}}function nt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function re(n){return typeof n=="string"?dt.fromBase64String(n):dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const zo="server_timestamp",Go="__type__",Ho="__previous_value__",Wo="__local_write_time__";function ps(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Go])===null||e===void 0?void 0:e.stringValue)===zo}function tr(n){const t=n.mapValue.fields[Ho];return ps(t)?tr(t):t}function sn(n){const t=ne(n.mapValue.fields[Wo].timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Md{constructor(t,e,r,s,o,a,u,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const er="(default)";class on{constructor(t,e){this.projectId=t,this.database=e||er}static empty(){return new on("","")}get isDefaultDatabase(){return this.database===er}isEqual(t){return t instanceof on&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ko="__type__",xd="__max__",nr={mapValue:{}},Qo="__vector__",rr="value";function se(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ps(n)?4:Fd(n)?9007199254740991:Ld(n)?10:11:F(28295,{value:n})}function Mt(n,t){if(n===t)return!0;const e=se(n);if(e!==se(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return sn(n).isEqual(sn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ne(s.timestampValue),u=ne(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return re(s.bytesValue).isEqual(re(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return nt(s.geoPointValue.latitude)===nt(o.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return nt(s.integerValue)===nt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=nt(s.doubleValue),u=nt(o.doubleValue);return a===u?Jn(a)===Jn(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Ne(n.arrayValue.values||[],t.arrayValue.values||[],Mt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Bo(a)!==Bo(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Mt(a[h],u[h])))return!1;return!0}(n,t);default:return F(52216,{left:n})}}function an(n,t){return(n.values||[]).find(e=>Mt(e,t))!==void 0}function xe(n,t){if(n===t)return 0;const e=se(n),r=se(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=nt(o.integerValue||o.doubleValue),h=nt(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Xo(n.timestampValue,t.timestampValue);case 4:return Xo(sn(n),sn(t));case 5:return fs(n.stringValue,t.stringValue);case 6:return function(o,a){const u=re(o),h=re(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const m=j(u[d],h[d]);if(m!==0)return m}return j(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=j(nt(o.latitude),nt(a.latitude));return u!==0?u:j(nt(o.longitude),nt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Yo(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,m;const y=o.fields||{},w=a.fields||{},C=(u=y[rr])===null||u===void 0?void 0:u.arrayValue,P=(h=w[rr])===null||h===void 0?void 0:h.arrayValue,k=j(((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0,((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0);return k!==0?k:Yo(C,P)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===nr.mapValue&&a===nr.mapValue)return 0;if(o===nr.mapValue)return 1;if(a===nr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const w=fs(h[y],m[y]);if(w!==0)return w;const C=xe(u[h[y]],d[m[y]]);if(C!==0)return C}return j(h.length,m.length)}(n.mapValue,t.mapValue);default:throw F(23264,{le:e})}}function Xo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=ne(n),r=ne(t),s=j(e.seconds,r.seconds);return s!==0?s:j(e.nanos,r.nanos)}function Yo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=xe(e[s],r[s]);if(o)return o}return j(e.length,r.length)}function Le(n){return gs(n)}function gs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ne(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return re(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=gs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${gs(e.fields[a])}`;return s+"}"}(n.mapValue):F(61005,{value:n})}function sr(n){switch(se(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=tr(n);return t?16+sr(t):16;case 5:return 2*n.stringValue.length;case 6:return re(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+sr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ge(r.fields,(o,a)=>{s+=o.length+sr(a)}),s}(n.mapValue);default:throw F(13486,{value:n})}}function Jo(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function _s(n){return!!n&&"integerValue"in n}function ys(n){return!!n&&"arrayValue"in n}function Zo(n){return!!n&&"nullValue"in n}function ta(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ir(n){return!!n&&"mapValue"in n}function Ld(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ko])===null||e===void 0?void 0:e.stringValue)===Qo}function cn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ge(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=cn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=cn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Fd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===xd}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bt{constructor(t){this.value=t}static empty(){return new bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ir(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=cn(e)}setAll(t){let e=lt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=cn(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ir(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Mt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ir(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ge(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new bt(cn(this.value))}}function ea(n){const t=[];return ge(n.fields,(e,r)=>{const s=new lt([e]);if(ir(r)){const o=ea(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Pt(t)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pt{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new pt(t,0,U.min(),U.min(),U.min(),bt.empty(),0)}static newFoundDocument(t,e,r,s){return new pt(t,1,e,U.min(),r,s,0)}static newNoDocument(t,e){return new pt(t,2,e,U.min(),U.min(),bt.empty(),0)}static newUnknownDocument(t,e){return new pt(t,3,e,U.min(),U.min(),bt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class or{constructor(t,e){this.position=t,this.inclusive=e}}function na(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=xe(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ra(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Mt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class un{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ud(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class sa{}class st extends sa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new $d(t,e,r):e==="array-contains"?new zd(t,r):e==="in"?new Gd(t,r):e==="not-in"?new Hd(t,r):e==="array-contains-any"?new Wd(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new jd(t,r):new qd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(xe(e,this.value)):e!==null&&se(this.value)===se(e)&&this.matchesComparison(xe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends sa{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Vt(t,e)}matches(t){return ia(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ia(n){return n.op==="and"}function oa(n){return Bd(n)&&ia(n)}function Bd(n){for(const t of n.filters)if(t instanceof Vt)return!1;return!0}function Es(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+Le(n.value);if(oa(n))return n.filters.map(t=>Es(t)).join(",");{const t=n.filters.map(e=>Es(e)).join(",");return`${n.op}(${t})`}}function aa(n,t){return n instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.field.isEqual(s.field)&&Mt(r.value,s.value)}(n,t):n instanceof Vt?function(r,s){return s instanceof Vt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&aa(a,s.filters[u]),!0):!1}(n,t):void F(19439)}function ca(n){return n instanceof st?function(e){return`${e.field.canonicalString()} ${e.op} ${Le(e.value)}`}(n):n instanceof Vt?function(e){return e.op.toString()+" {"+e.getFilters().map(ca).join(" ,")+"}"}(n):"Filter"}class $d extends st{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class jd extends st{constructor(t,e){super(t,"in",e),this.keys=ua("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class qd extends st{constructor(t,e){super(t,"not-in",e),this.keys=ua("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ua(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class zd extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ys(e)&&an(e.arrayValue,this.value)}}class Gd extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&an(this.value.arrayValue,e)}}class Hd extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(an(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!an(this.value.arrayValue,e)}}class Wd extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ys(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>an(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Kd{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Pe=null}}function la(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Kd(n,t,e,r,s,o,a)}function vs(n){const t=$(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Es(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Yn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Le(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Le(r)).join(",")),t.Pe=e}return t.Pe}function Ts(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ud(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!aa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ra(n.startAt,t.startAt)&&ra(n.endAt,t.endAt)}function Is(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Fe{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Qd(n,t,e,r,s,o,a,u){return new Fe(n,t,e,r,s,o,a,u)}function ha(n){return new Fe(n)}function da(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fa(n){return n.collectionGroup!==null}function ln(n){const t=$(n);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ot(lt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new un(o,r))}),e.has(lt.keyField().canonicalString())||t.Te.push(new un(lt.keyField(),r))}return t.Te}function xt(n){const t=$(n);return t.Ie||(t.Ie=Xd(t,ln(n))),t.Ie}function Xd(n,t){if(n.limitType==="F")return la(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new un(s.field,o)});const e=n.endAt?new or(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new or(n.startAt.position,n.startAt.inclusive):null;return la(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ws(n,t){const e=n.filters.concat([t]);return new Fe(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function As(n,t,e){return new Fe(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ar(n,t){return Ts(xt(n),xt(t))&&n.limitType===t.limitType}function ma(n){return`${vs(xt(n))}|lt:${n.limitType}`}function Ue(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ca(s)).join(", ")}]`),Yn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Le(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Le(s)).join(",")),`Target(${r})`}(xt(n))}; limitType=${n.limitType})`}function cr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of ln(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=na(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,ln(r),s)||r.endAt&&!function(a,u,h){const d=na(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,ln(r),s))}(n,t)}function Yd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pa(n){return(t,e)=>{let r=!1;for(const s of ln(n)){const o=Jd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Jd(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?xe(h,d):F(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _e{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ge(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return $o(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Zd=new Z(M.comparator);function qt(){return Zd}const ga=new Z(M.comparator);function hn(...n){let t=ga;for(const e of n)t=t.insert(e.key,e);return t}function _a(n){let t=ga;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ye(){return dn()}function ya(){return dn()}function dn(){return new _e(n=>n.toString(),(n,t)=>n.isEqual(t))}const tf=new Z(M.comparator),ef=new ot(M.comparator);function q(...n){let t=ef;for(const e of n)t=t.add(e);return t}const nf=new ot(j);function rf(){return nf}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Rs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jn(t)?"-0":t}}function Ea(n){return{integerValue:""+n}}function sf(n,t){return Dd(t)?Ea(t):Rs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ur{constructor(){this._=void 0}}function of(n,t,e){return n instanceof fn?function(s,o){const a={fields:{[Go]:{stringValue:zo},[Wo]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ps(o)&&(o=tr(o)),o&&(a.fields[Ho]=o),{mapValue:a}}(e,t):n instanceof mn?Ta(n,t):n instanceof pn?Ia(n,t):function(s,o){const a=va(s,o),u=wa(a)+wa(s.Ee);return _s(a)&&_s(s.Ee)?Ea(u):Rs(s.serializer,u)}(n,t)}function af(n,t,e){return n instanceof mn?Ta(n,t):n instanceof pn?Ia(n,t):e}function va(n,t){return n instanceof lr?function(r){return _s(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class fn extends ur{}class mn extends ur{constructor(t){super(),this.elements=t}}function Ta(n,t){const e=Aa(t);for(const r of n.elements)e.some(s=>Mt(s,r))||e.push(r);return{arrayValue:{values:e}}}class pn extends ur{constructor(t){super(),this.elements=t}}function Ia(n,t){let e=Aa(t);for(const r of n.elements)e=e.filter(s=>!Mt(s,r));return{arrayValue:{values:e}}}class lr extends ur{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function wa(n){return nt(n.integerValue||n.doubleValue)}function Aa(n){return ys(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cf{constructor(t,e){this.field=t,this.transform=e}}function uf(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof mn&&s instanceof mn||r instanceof pn&&s instanceof pn?Ne(r.elements,s.elements,Mt):r instanceof lr&&s instanceof lr?Mt(r.Ee,s.Ee):r instanceof fn&&s instanceof fn}(n.transform,t.transform)}class lf{constructor(t,e){this.version=t,this.transformResults=e}}class zt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new zt}static exists(t){return new zt(void 0,t)}static updateTime(t){return new zt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function hr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class dr{}function Ra(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Va(n.key,zt.none()):new _n(n.key,n.data,zt.none());{const e=n.data,r=bt.empty();let s=new ot(lt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Ee(n.key,r,new Pt(s.toArray()),zt.none())}}function hf(n,t,e){n instanceof _n?function(s,o,a){const u=s.value.clone(),h=Ca(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Ee?function(s,o,a){if(!hr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Ca(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Sa(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function gn(n,t,e,r){return n instanceof _n?function(o,a,u,h){if(!hr(o.precondition,a))return u;const d=o.value.clone(),m=Pa(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ee?function(o,a,u,h){if(!hr(o.precondition,a))return u;const d=Pa(o.fieldTransforms,h,a),m=a.data;return m.setAll(Sa(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,t,e,r):function(o,a,u){return hr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function df(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=va(r.transform,s||null);o!=null&&(e===null&&(e=bt.empty()),e.set(r.field,o))}return e||null}function ba(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ne(r,s,(o,a)=>uf(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class _n extends dr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ee extends dr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Sa(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ca(n,t,e){const r=new Map;K(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,af(a,u,e[s]))}return r}function Pa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,of(o,a,t))}return r}class Va extends dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ff extends dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class mf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&hf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=gn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=gn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ya();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Ra(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Ne(this.mutations,t.mutations,(e,r)=>ba(e,r))&&Ne(this.baseMutations,t.baseMutations,(e,r)=>ba(e,r))}}class bs{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){K(t.mutations.length===r.length,58842,{Ve:t.mutations.length,me:r.length});let s=function(){return tf}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new bs(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class pf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class gf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var it,H;function _f(n){switch(n){case b.OK:return F(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function Da(n){if(n===void 0)return jt("GRPC error has no .code"),b.UNKNOWN;switch(n){case it.OK:return b.OK;case it.CANCELLED:return b.CANCELLED;case it.UNKNOWN:return b.UNKNOWN;case it.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case it.INTERNAL:return b.INTERNAL;case it.UNAVAILABLE:return b.UNAVAILABLE;case it.UNAUTHENTICATED:return b.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case it.NOT_FOUND:return b.NOT_FOUND;case it.ALREADY_EXISTS:return b.ALREADY_EXISTS;case it.PERMISSION_DENIED:return b.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case it.ABORTED:return b.ABORTED;case it.OUT_OF_RANGE:return b.OUT_OF_RANGE;case it.UNIMPLEMENTED:return b.UNIMPLEMENTED;case it.DATA_LOSS:return b.DATA_LOSS;default:return F(39323,{code:n})}}(H=it||(it={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
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
 */const yf=new Jt([4294967295,4294967295],0);function ka(n){const t=Po().encode(n),e=new yo;return e.update(t),new Uint8Array(e.digest())}function Na(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Jt([e,r],0),new Jt([s,o],0)]}class Ss{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new yn(`Invalid padding: ${e}`);if(r<0)throw new yn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new yn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new yn(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Jt.fromNumber(this.fe)}pe(t,e,r){let s=t.add(e.multiply(Jt.fromNumber(r)));return s.compare(yf)===1&&(s=new Jt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=ka(t),[r,s]=Na(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);if(!this.ye(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ss(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.fe===0)return;const e=ka(t),[r,s]=Na(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);this.we(a)}}we(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class yn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,En.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new fr(U.min(),s,new Z(j),qt(),q())}}class En{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new En(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class mr{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.be=s}}class Oa{constructor(t,e){this.targetId=t,this.De=e}}class Ma{constructor(t,e,r=dt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class xa{constructor(){this.ve=0,this.Ce=La(),this.Fe=dt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=q(),e=q(),r=q();return this.Ce.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:F(38017,{changeType:o})}}),new En(this.Fe,this.Me,t,e,r)}ke(){this.xe=!1,this.Ce=La()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Ef{constructor(t){this.We=t,this.Ge=new Map,this.ze=qt(),this.je=pr(),this.Je=pr(),this.He=new Z(j)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,e=>{const r=this.tt(e);switch(t.state){case 0:this.nt(e)&&r.Be(t.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(t.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(r.Ke(),r.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),r.Be(t.resumeToken));break;default:F(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach((r,s)=>{this.nt(s)&&e(s)})}it(t){const e=t.targetId,r=t.De.count,s=this.st(e);if(s){const o=s.target;if(Is(o))if(r===0){const a=new M(o.path);this.Xe(e,a,pt.newNoDocument(a,U.min()))}else K(r===1,20013,{expectedCount:r});else{const a=this.ot(e);if(a!==r){const u=this._t(t),h=u?this.ut(u,t,a):1;if(h!==0){this.rt(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=re(r).toUint8Array()}catch(h){if(h instanceof qo)return Zt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Ss(a,s,o)}catch(h){return Zt(h instanceof yn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.fe===0?null:u}ut(t,e,r){return e.De.count===r-this.ht(t,e.targetId)?0:2}ht(t,e){const r=this.We.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Xe(e,o,null),s++)}),s}Pt(t){const e=new Map;this.Ge.forEach((o,a)=>{const u=this.st(a);if(u){if(o.current&&Is(u.target)){const h=new M(u.target.path);this.Tt(h).has(a)||this.It(a,h)||this.Xe(a,h,pt.newNoDocument(h,t))}o.Ne&&(e.set(a,o.Le()),o.ke())}});let r=q();this.Je.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ze.forEach((o,a)=>a.setReadTime(t));const s=new fr(t,e,this.He,this.ze,r);return this.ze=qt(),this.je=pr(),this.Je=pr(),this.He=new Z(j),s}Ze(t,e){if(!this.nt(t))return;const r=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,r),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,r){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),r&&(this.ze=this.ze.insert(e,r))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new xa,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new ot(j),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new ot(j),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||O("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new xa),this.We.getRemoteKeysForTarget(t).forEach(e=>{this.Xe(t,e,null)})}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function pr(){return new Z(M.comparator)}function La(){return new Z(M.comparator)}const vf={asc:"ASCENDING",desc:"DESCENDING"},Tf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},If={and:"AND",or:"OR"};class wf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Cs(n,t){return n.useProto3Json||Yn(t)?t:{value:t}}function gr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fa(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Af(n,t){return gr(n,t.toTimestamp())}function Lt(n){return K(!!n,49232),U.fromTimestamp(function(e){const r=ne(e);return new Y(r.seconds,r.nanos)}(n))}function Ps(n,t){return Vs(n,t).canonicalString()}function Vs(n,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ua(n){const t=X.fromString(n);return K(Ga(t),10190,{key:t.toString()}),t}function Ds(n,t){return Ps(n.databaseId,t.path)}function ks(n,t){const e=Ua(t);if(e.get(1)!==n.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M($a(e))}function Ba(n,t){return Ps(n.databaseId,t)}function Rf(n){const t=Ua(n);return t.length===4?X.emptyPath():$a(t)}function Ns(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $a(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ja(n,t,e){return{name:Ds(n,t),fields:e.value.mapValue.fields}}function bf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(K(m===void 0||typeof m=="string",58123),dt.fromBase64String(m||"")):(K(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),dt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?b.UNKNOWN:Da(d.code);return new N(m,d.message||"")}(a);e=new Ma(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ks(n,r.document.name),o=Lt(r.document.updateTime),a=r.document.createTime?Lt(r.document.createTime):U.min(),u=new bt({mapValue:{fields:r.document.fields}}),h=pt.newFoundDocument(s,o,a,u),d=r.targetIds||[],m=r.removedTargetIds||[];e=new mr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ks(n,r.document),o=r.readTime?Lt(r.readTime):U.min(),a=pt.newNoDocument(s,o),u=r.removedTargetIds||[];e=new mr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ks(n,r.document),o=r.removedTargetIds||[];e=new mr([],o,s,null)}else{if(!("filter"in t))return F(11601,{At:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new gf(s,o),u=r.targetId;e=new Oa(u,a)}}return e}function Sf(n,t){let e;if(t instanceof _n)e={update:ja(n,t.key,t.value)};else if(t instanceof Va)e={delete:Ds(n,t.key)};else if(t instanceof Ee)e={update:ja(n,t.key,t.data),updateMask:xf(t.fieldMask)};else{if(!(t instanceof ff))return F(16599,{Rt:t.type});e={verify:Ds(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof fn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof mn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof pn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof lr)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw F(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Af(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)}(n,t.precondition)),e}function Cf(n,t){return n&&n.length>0?(K(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?Lt(s.updateTime):Lt(o);return a.isEqual(U.min())&&(a=Lt(o)),new lf(a,s.transformResults||[])}(e,t))):[]}function Pf(n,t){return{documents:[Ba(n,t.path)]}}function Vf(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ba(n,s);const o=function(d){if(d.length!==0)return za(Vt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(w){return{field:Be(w.field),direction:Nf(w.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Cs(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{Vt:e,parent:s}}function Df(n){let t=Rf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){K(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(y){const w=qa(y);return w instanceof Vt&&oa(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(y){return y.map(w=>function(P){return new un($e(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(e.orderBy));let u=null;e.limit&&(u=function(y){let w;return w=typeof y=="object"?y.value:y,Yn(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(y){const w=!!y.before,C=y.values||[];return new or(C,w)}(e.startAt));let d=null;return e.endAt&&(d=function(y){const w=!y.before,C=y.values||[];return new or(C,w)}(e.endAt)),Qd(t,s,a,o,u,"F",h,d)}function kf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function qa(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=$e(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$e(e.unaryFilter.field);return st.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=$e(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=$e(e.unaryFilter.field);return st.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(e){return st.create($e(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Vt.create(e.compositeFilter.filters.map(r=>qa(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(e.compositeFilter.op))}(n):F(30097,{filter:n})}function Nf(n){return vf[n]}function Of(n){return Tf[n]}function Mf(n){return If[n]}function Be(n){return{fieldPath:n.canonicalString()}}function $e(n){return lt.fromServerFormat(n.fieldPath)}function za(n){return n instanceof st?function(e){if(e.op==="=="){if(ta(e.value))return{unaryFilter:{field:Be(e.field),op:"IS_NAN"}};if(Zo(e.value))return{unaryFilter:{field:Be(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ta(e.value))return{unaryFilter:{field:Be(e.field),op:"IS_NOT_NAN"}};if(Zo(e.value))return{unaryFilter:{field:Be(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Be(e.field),op:Of(e.op),value:e.value}}}(n):n instanceof Vt?function(e){const r=e.getFilters().map(s=>za(s));return r.length===1?r[0]:{compositeFilter:{op:Mf(e.op),filters:r}}}(n):F(54877,{filter:n})}function xf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ga(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ie{constructor(t,e,r,s,o=U.min(),a=U.min(),u=dt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new ie(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Lf{constructor(t){this.gt=t}}function Ff(n){const t=Df({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?As(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Uf{constructor(){this.Dn=new Bf}addToCollectionParentIndex(t,e){return this.Dn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(ee.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(ee.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Bf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ot(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ot(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Ha={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Wa=41943040;class wt{static withCacheSize(t){return new wt(t,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(Wa,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class je{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new je(0)}static ur(){return new je(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ka="LruGarbageCollector",$f=1048576;function Qa([n,t],[e,r]){const s=j(n,e);return s===0?j(t,r):s}class jf{constructor(t){this.Tr=t,this.buffer=new ot(Qa),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Qa(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class qf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){O(Ka,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Me(e)?O(Ka,"Ignoring IndexedDB error during garbage collection: ",e):await Oe(e)}await this.Rr(3e5)})}}class zf{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return S.resolve(Xn.ue);const r=new jf(e);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Ha)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ha):this.pr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,s,o,a,u,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(t,s))).next(y=>(r=y,u=Date.now(),this.removeTargets(t,r,e))).next(y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(y=>(d=Date.now(),ke()<=G.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y})))}}function Gf(n,t){return new zf(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Hf{constructor(){this.changes=new _e(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class Wf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Kf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&gn(r.mutation,s,Pt.empty(),Y.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const s=ye();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=hn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ye();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=qt();const a=dn(),u=function(){return dn()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Ee)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),gn(m.mutation,d,m.mutation.getFieldMask(),Y.now())):a.set(d.key,Pt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var y;return u.set(d,new Wf(m,(y=a.get(d))!==null&&y!==void 0?y:null))}),u))}recalculateAndSaveOverlays(t,e){const r=dn();let s=new Z((a,u)=>a-u),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Pt.empty();m=u.applyToLocalView(d,m),r.set(h,m);const y=(s.get(u.batchId)||q()).add(h);s=s.insert(u.batchId,y)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,m=h.value,y=ya();m.forEach(w=>{if(!o.has(w)){const C=Ra(e.get(w),r.get(w));C!==null&&y.set(w,C),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):fa(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(ye());let u=rn,h=o;return a.next(d=>S.forEach(d,(m,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),o.get(m)?S.resolve():this.remoteDocumentCache.getEntry(t,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,q())).next(m=>({batchId:u,changes:_a(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=hn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=hn();return this.indexManager.getCollectionParents(t,o).next(u=>S.forEach(u,h=>{const d=function(y,w){return new Fe(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((y,w)=>{a=a.insert(y,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,pt.newInvalidDocument(m)))});let u=hn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&gn(m.mutation,d,Pt.empty(),Y.now()),cr(e,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Qf{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return S.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Lt(s.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,function(s){return{name:s.name,query:Ff(s.bundledQuery),readTime:Lt(s.readTime)}}(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Xf{constructor(){this.overlays=new Z(M.comparator),this.kr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ye();return S.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.wt(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.kr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=ye(),o=e.length+1,a=new M(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Z((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=ye(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=ye(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return S.resolve(u)}wt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new pf(e,r));let o=this.kr.get(e);o===void 0&&(o=q(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Yf{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Os{constructor(){this.qr=new ot(ct.Qr),this.$r=new ot(ct.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const r=new ct(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new ct(t,e))}Gr(t,e){t.forEach(r=>this.removeReference(r,e))}zr(t){const e=new M(new X([])),r=new ct(e,t),s=new ct(e,t+1),o=[];return this.$r.forEachInRange([r,s],a=>{this.Wr(a),o.push(a.key)}),o}jr(){this.qr.forEach(t=>this.Wr(t))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new M(new X([])),r=new ct(e,t),s=new ct(e,t+1);let o=q();return this.$r.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ct(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ct{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return M.comparator(t.key,e.key)||j(t.Hr,e.Hr)}static Ur(t,e){return j(t.Hr,e.Hr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Jf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new ot(ct.Qr)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new mf(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Yr=this.Yr.add(new ct(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?ms:this.er-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ct(e,0),s=new ct(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,s],a=>{const u=this.Zr(a.Hr);o.push(u)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ot(j);return e.forEach(s=>{const o=new ct(s,0),a=new ct(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],u=>{r=r.add(u.Hr)})}),S.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new ct(new M(o),0);let u=new ot(j);return this.Yr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Hr)),!0)},a),S.resolve(this.ei(u))}ei(t){const e=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){K(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return S.forEach(e.mutations,s=>{const o=new ct(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Yr=r})}rr(t){}containsKey(t,e){const r=new ct(e,0),s=this.Yr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zf{constructor(t){this.ni=t,this.docs=function(){return new Z(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(e))}getEntries(t,e){let r=qt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():pt.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=qt();const a=e.path,u=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Sd(bd(m),r)<=0||(s.has(m.key)||cr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){F(9500)}ri(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new tm(this)}getSize(t){return S.resolve(this.size)}}class tm extends Hf{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class em{constructor(t){this.persistence=t,this.ii=new _e(e=>vs(e),Ts),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.si=0,this.oi=new Os,this.targetCount=0,this._i=je.ar()}forEachTarget(t,e){return this.ii.forEach((r,s)=>e(s)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),S.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new je(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.hr(e),S.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ii.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),S.waitFor(o).next(()=>s)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.ii.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.oi.Jr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Xa{constructor(t,e){this.ai={},this.overlays={},this.ui=new Xn(0),this.ci=!1,this.ci=!0,this.li=new Yf,this.referenceDelegate=t(this),this.hi=new em(this),this.indexManager=new Uf,this.remoteDocumentCache=function(s){return new Zf(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new Lf(e),this.Ti=new Qf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Xf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new Jf(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){O("MemoryPersistence","Starting transaction:",t);const s=new nm(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ei(t,e){return S.or(Object.values(this.ai).map(r=>()=>r.containsKey(t,e)))}}class nm extends Pd{constructor(t){super(),this.currentSequenceNumber=t}}class Ms{constructor(t){this.persistence=t,this.Ai=new Os,this.Ri=null}static Vi(t){return new Ms(t)}get mi(){if(this.Ri)return this.Ri;throw F(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.mi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.mi,r=>{const s=M.fromPath(r);return this.fi(t,s).next(o=>{o||e.removeEntry(s,U.min())})}).next(()=>(this.Ri=null,e.apply(t)))}updateLimboDocument(t,e){return this.fi(t,e).next(r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())})}Pi(t){return 0}fi(t,e){return S.or([()=>S.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class _r{constructor(t,e){this.persistence=t,this.gi=new _e(r=>kd(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Gf(this,e)}static Vi(t,e){return new _r(t,e)}Ii(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}yr(t){let e=0;return this.gr(t,r=>{e++}).next(()=>e)}gr(t,e){return S.forEach(this.gi,(r,s)=>this.Sr(t,r,s).next(o=>o?S.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(t,a=>this.Sr(t,a,e).next(u=>{u||(r++,o.removeEntry(a,U.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),S.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=sr(t.data.value)),e}Sr(t,e,r){return S.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xs{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=s}static Es(t,e){let r=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new xs(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class rm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class sm{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Kl()?8:Vd(Gl())>0?6:4}()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ps(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ys(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new rm;return this.ws(t,e,a).next(u=>{if(o.result=u,this.Rs)return this.Ss(t,e,a,u.size)})}).next(()=>o.result)}Ss(t,e,r,s){return r.documentReadCount<this.Vs?(ke()<=G.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Ue(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),S.resolve()):(ke()<=G.DEBUG&&O("QueryEngine","Query:",Ue(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(ke()<=G.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Ue(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xt(e))):S.resolve())}ps(t,e){if(da(e))return S.resolve(null);let r=xt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=As(e,null,"F"),r=xt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=q(...o);return this.gs.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.bs(e,u);return this.Ds(e,d,a,h.readTime)?this.ps(t,As(e,null,"F")):this.vs(t,d,e,h)}))})))}ys(t,e,r,s){return da(e)||s.isEqual(U.min())?S.resolve(null):this.gs.getDocuments(t,r).next(o=>{const a=this.bs(e,o);return this.Ds(e,a,r,s)?S.resolve(null):(ke()<=G.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ue(e)),this.vs(t,a,e,Rd(s,rn)).next(u=>u))})}bs(t,e){let r=new ot(pa(t));return e.forEach((s,o)=>{cr(t,o)&&(r=r.add(o))}),r}Ds(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(t,e,r){return ke()<=G.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Ue(e)),this.gs.getDocumentsMatchingQuery(t,e,ee.min(),r)}vs(t,e,r,s){return this.gs.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ls="LocalStore",im=3e8;class om{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new Z(j),this.Ms=new _e(o=>vs(o),Ts),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Kf(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Fs))}}function am(n,t,e,r){return new om(n,t,e,r)}async function Ya(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=q();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:u}))})})}function cm(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return function(u,h,d,m){const y=d.batch,w=y.keys();let C=S.resolve();return w.forEach(P=>{C=C.next(()=>m.getEntry(h,P)).next(k=>{const V=d.docVersions.get(P);K(V!==null,48541),k.version.compareTo(V)<0&&(y.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(h,y))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=q();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Ja(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.hi.getLastRemoteSnapshotVersion(e))}function um(n,t){const e=$(n),r=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const u=[];t.targetChanges.forEach((m,y)=>{const w=s.get(y);if(!w)return;u.push(e.hi.removeMatchingKeys(o,m.removedDocuments,y).next(()=>e.hi.addMatchingKeys(o,m.addedDocuments,y)));let C=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?C=C.withResumeToken(dt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,r)),s=s.insert(y,C),function(k,V,B){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=im?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(w,C,m)&&u.push(e.hi.updateTargetData(o,C))});let h=qt(),d=q();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(lm(o,a,t.documentUpdates).next(m=>{h=m.Ls,d=m.ks})),!r.isEqual(U.min())){const m=e.hi.getLastRemoteSnapshotVersion(o).next(y=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return S.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Fs=s,o))}function lm(n,t,e){let r=q(),s=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=qt();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(U.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):O(Ls,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ls:a,ks:s}})}function hm(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=ms),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function dm(n,t){const e=$(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.hi.getTargetData(r,t).next(o=>o?(s=o,S.resolve(s)):e.hi.allocateTargetId(r).next(a=>(s=new ie(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(r.targetId,r),e.Ms.set(t,r.targetId)),r})}async function Fs(n,t,e){const r=$(n),s=r.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Me(a))throw a;O(Ls,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(s.target)}function Za(n,t,e){const r=$(n);let s=U.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const y=$(h),w=y.Ms.get(m);return w!==void 0?S.resolve(y.Fs.get(w)):y.hi.getTargetData(d,m)}(r,a,xt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?o:q())).next(u=>(fm(r,Yd(t),u),{documents:u,qs:o})))}function fm(n,t,e){let r=n.xs.get(t)||U.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.xs.set(t,r)}class tc{constructor(){this.activeTargetIds=rf()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mm{constructor(){this.Fo=new tc,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new tc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class pm{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ec="ConnectivityMonitor";class nc{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){O(ec,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){O(ec,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let yr=null;function Us(){return yr===null?yr=function(){return 268435456+Math.round(2147483648*Math.random())}():yr++,"0x"+yr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Bs="RestConnection",gm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _m{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===er?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=Us(),u=this.Go(t,e.toUriEncodedString());O(Bs,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,s,o);const{host:d}=new URL(u),m=Yr(d);return this.jo(t,u,h,r,m).then(y=>(O(Bs,`Received RPC '${t}' ${a}: `,y),y),y=>{throw Zt(Bs,`RPC '${t}' ${a} failed with error: `,y,"url: ",u,"request:",r),y})}Jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}zo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+De}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}Go(t,e){const r=gm[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ym{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const gt="WebChannelConnection";class Em extends _m{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,s,o){const a=Us();return new Promise((u,h)=>{const d=new Eo;d.setWithCredentials(!0),d.listenOnce(vo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Wn.NO_ERROR:const y=d.getResponseJson();O(gt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(y)),u(y);break;case Wn.TIMEOUT:O(gt,`RPC '${t}' ${a} timed out`),h(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case Wn.HTTP_ERROR:const w=d.getStatus();if(O(gt,`RPC '${t}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C==null?void 0:C.error;if(P&&P.status&&P.message){const k=function(B){const x=B.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(x)>=0?x:b.UNKNOWN}(P.status);h(new N(k,P.message))}else h(new N(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new N(b.UNAVAILABLE,"Connection failed."));break;default:F(9055,{c_:t,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{O(gt,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);O(gt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,r,15)})}P_(t,e,r){const s=Us(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=wo(),u=Io(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");O(gt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const y=a.createWebChannel(m,h);this.T_(y);let w=!1,C=!1;const P=new ym({Ho:V=>{C?O(gt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(w||(O(gt,`Opening RPC '${t}' stream ${s} transport.`),y.open(),w=!0),O(gt,`RPC '${t}' stream ${s} sending:`,V),y.send(V))},Yo:()=>y.close()}),k=(V,B,x)=>{V.listen(B,z=>{try{x(z)}catch(tt){setTimeout(()=>{throw tt},0)}})};return k(y,en.EventType.OPEN,()=>{C||(O(gt,`RPC '${t}' stream ${s} transport opened.`),P.s_())}),k(y,en.EventType.CLOSE,()=>{C||(C=!0,O(gt,`RPC '${t}' stream ${s} transport closed`),P.__(),this.I_(y))}),k(y,en.EventType.ERROR,V=>{C||(C=!0,Zt(gt,`RPC '${t}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),P.__(new N(b.UNAVAILABLE,"The operation could not be completed")))}),k(y,en.EventType.MESSAGE,V=>{var B;if(!C){const x=V.data[0];K(!!x,16349);const z=x,tt=(z==null?void 0:z.error)||((B=z[0])===null||B===void 0?void 0:B.error);if(tt){O(gt,`RPC '${t}' stream ${s} received error:`,tt);const Dt=tt.status;let at=function(_){const E=it[_];if(E!==void 0)return Da(E)}(Dt),v=tt.message;at===void 0&&(at=b.INTERNAL,v="Unknown error status: "+Dt+" with message "+tt.message),C=!0,P.__(new N(at,v)),y.close()}else O(gt,`RPC '${t}' stream ${s} received:`,x),P.a_(x)}}),k(u,To.STAT_EVENT,V=>{V.stat===ls.PROXY?O(gt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===ls.NOPROXY&&O(gt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.o_()},0),P}terminate(){this.u_.forEach(t=>t.close()),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter(e=>e===t)}}function $s(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Er(n){return new wf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const sc="PersistentStream";class ic{constructor(t,e,r,s,o,a,u,h){this.Fi=t,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new rc(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(jt(e.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===e&&this.W_(r,s)},r=>{t(()=>{const s=new N(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(t,e){const r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(t){return O(sc,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget(()=>this.b_===t?e():(O(sc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vm extends ic{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=bf(this.serializer,t),r=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Lt(a.readTime):U.min()}(t);return this.listener.J_(e,r)}H_(t){const e={};e.database=Ns(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=Is(h)?{documents:Pf(o,h)}:{query:Vf(o,h).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Fa(o,a.resumeToken);const d=Cs(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=gr(o,a.snapshotVersion.toTimestamp());const d=Cs(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=kf(this.serializer,t);r&&(e.labels=r),this.k_(e)}Y_(t){const e={};e.database=Ns(this.serializer),e.removeTarget=t,this.k_(e)}}class Tm extends ic{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Cf(t.writeResults,t.commitTime),r=Lt(t.commitTime);return this.listener.ta(r,e)}na(){const t={};t.database=Ns(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Sf(this.serializer,r))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Im{}class wm extends Im{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(t,Vs(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())})}Jo(t,e,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Jo(t,Vs(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(b.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Am{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(jt(e),this._a=!1):O("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ve="RemoteStore";class Rm{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{Te(this)&&(O(ve,"Restarting streams for network reachability change."),await async function(h){const d=$(h);d.Ia.add(4),await vn(d),d.Aa.set("Unknown"),d.Ia.delete(4),await vr(d)}(this))})}),this.Aa=new Am(r,s)}}async function vr(n){if(Te(n))for(const t of n.da)await t(!0)}async function vn(n){for(const t of n.da)await t(!1)}function oc(n,t){const e=$(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Gs(e)?zs(e):qe(e).x_()&&qs(e,t))}function js(n,t){const e=$(n),r=qe(e);e.Ta.delete(t),r.x_()&&ac(e,t),e.Ta.size===0&&(r.x_()?r.B_():Te(e)&&e.Aa.set("Unknown"))}function qs(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}qe(n).H_(t)}function ac(n,t){n.Ra.$e(t),qe(n).Y_(t)}function zs(n){n.Ra=new Ef({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),qe(n).start(),n.Aa.aa()}function Gs(n){return Te(n)&&!qe(n).M_()&&n.Ta.size>0}function Te(n){return $(n).Ia.size===0}function cc(n){n.Ra=void 0}async function bm(n){n.Aa.set("Online")}async function Sm(n){n.Ta.forEach((t,e)=>{qs(n,t)})}async function Cm(n,t){cc(n),Gs(n)?(n.Aa.la(t),zs(n)):n.Aa.set("Unknown")}async function Pm(n,t,e){if(n.Aa.set("Online"),t instanceof Ma&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ta.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ta.delete(u),s.Ra.removeTarget(u))}(n,t)}catch(r){O(ve,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Tr(n,r)}else if(t instanceof mr?n.Ra.Ye(t):t instanceof Oa?n.Ra.it(t):n.Ra.et(t),!e.isEqual(U.min()))try{const r=await Ja(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.Ra.Pt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ta.get(d);m&&o.Ta.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const m=o.Ta.get(h);if(!m)return;o.Ta.set(h,m.withResumeToken(dt.EMPTY_BYTE_STRING,m.snapshotVersion)),ac(o,h);const y=new ie(m.target,h,d,m.sequenceNumber);qs(o,y)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){O(ve,"Failed to raise snapshot:",r),await Tr(n,r)}}async function Tr(n,t,e){if(!Me(t))throw t;n.Ia.add(1),await vn(n),n.Aa.set("Offline"),e||(e=()=>Ja(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O(ve,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await vr(n)})}function uc(n,t){return t().catch(e=>Tr(n,e,t))}async function Ir(n){const t=$(n),e=oe(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:ms;for(;Vm(t);)try{const s=await hm(t.localStore,r);if(s===null){t.Pa.length===0&&e.B_();break}r=s.batchId,Dm(t,s)}catch(s){await Tr(t,s)}lc(t)&&hc(t)}function Vm(n){return Te(n)&&n.Pa.length<10}function Dm(n,t){n.Pa.push(t);const e=oe(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function lc(n){return Te(n)&&!oe(n).M_()&&n.Pa.length>0}function hc(n){oe(n).start()}async function km(n){oe(n).na()}async function Nm(n){const t=oe(n);for(const e of n.Pa)t.X_(e.mutations)}async function Om(n,t,e){const r=n.Pa.shift(),s=bs.from(r,t,e);await uc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ir(n)}async function Mm(n,t){t&&oe(n).Z_&&await async function(r,s){if(function(a){return _f(a)&&a!==b.ABORTED}(s.code)){const o=r.Pa.shift();oe(r).N_(),await uc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Ir(r)}}(n,t),lc(n)&&hc(n)}async function dc(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),O(ve,"RemoteStore received new credentials");const r=Te(e);e.Ia.add(3),await vn(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await vr(e)}async function xm(n,t){const e=$(n);t?(e.Ia.delete(2),await vr(e)):t||(e.Ia.add(2),await vn(e),e.Aa.set("Unknown"))}function qe(n){return n.Va||(n.Va=function(e,r,s){const o=$(e);return o.ia(),new vm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:bm.bind(null,n),e_:Sm.bind(null,n),n_:Cm.bind(null,n),J_:Pm.bind(null,n)}),n.da.push(async t=>{t?(n.Va.N_(),Gs(n)?zs(n):n.Aa.set("Unknown")):(await n.Va.stop(),cc(n))})),n.Va}function oe(n){return n.ma||(n.ma=function(e,r,s){const o=$(e);return o.ia(),new Tm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:km.bind(null,n),n_:Mm.bind(null,n),ea:Nm.bind(null,n),ta:Om.bind(null,n)}),n.da.push(async t=>{t?(n.ma.N_(),await Ir(n)):(await n.ma.stop(),n.Pa.length>0&&(O(ve,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Hs{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new Hs(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ws(n,t){if(jt("AsyncQueue",`${t}: ${n}`),Me(n))return new N(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ze{static emptySet(t){return new ze(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=hn(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ze)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new ze;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fc{constructor(){this.fa=new Z(M.comparator)}track(t){const e=t.doc.key,r=this.fa.get(e);r?t.type!==0&&r.type===3?this.fa=this.fa.insert(e,t):t.type===3&&r.type!==1?this.fa=this.fa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.fa=this.fa.remove(e):t.type===1&&r.type===2?this.fa=this.fa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):F(63341,{At:t,ga:r}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ge{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Ge(t,e,ze.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ar(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Lm{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(t=>t.ba())}}class Fm{constructor(){this.queries=mc(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){const s=$(e),o=s.queries;s.queries=mc(),o.forEach((a,u)=>{for(const h of u.wa)h.onError(r)})})(this,new N(b.ABORTED,"Firestore shutting down"))}}function mc(){return new _e(n=>ma(n),ar)}async function Um(n,t){const e=$(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.ba()&&(r=2):(o=new Lm,r=t.ba()?0:1);try{switch(r){case 0:o.ya=await e.onListen(s,!0);break;case 1:o.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Ws(a,`Initialization of query '${Ue(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&Ks(e)}async function Bm(n,t){const e=$(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.wa.indexOf(t);a>=0&&(o.wa.splice(a,1),o.wa.length===0?s=t.ba()?0:1:!o.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function $m(n,t){const e=$(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.wa)u.Ca(s)&&(r=!0);a.ya=s}}r&&Ks(e)}function jm(n,t,e){const r=$(n),s=r.queries.get(t);if(s)for(const o of s.wa)o.onError(e);r.queries.delete(t)}function Ks(n){n.Da.forEach(t=>{t.next()})}var Qs,pc;(pc=Qs||(Qs={})).Fa="default",pc.Cache="cache";class qm{constructor(t,e,r){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ge(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const r=e!=="Offline";return(!this.options.ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=Ge.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==Qs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class gc{constructor(t){this.key=t}}class _c{constructor(t){this.key=t}}class zm{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=q(),this.mutatedKeys=q(),this.Xa=pa(t),this.eu=new ze(this.Xa)}get tu(){return this.Ha}nu(t,e){const r=e?e.ru:new fc,s=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,y)=>{const w=s.get(m),C=cr(this.query,y)?y:null,P=!!w&&this.mutatedKeys.has(w.key),k=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let V=!1;w&&C?w.data.isEqual(C.data)?P!==k&&(r.track({type:3,doc:C}),V=!0):this.iu(w,C)||(r.track({type:2,doc:C}),V=!0,(h&&this.Xa(C,h)>0||d&&this.Xa(C,d)<0)&&(u=!0)):!w&&C?(r.track({type:0,doc:C}),V=!0):w&&!C&&(r.track({type:1,doc:w}),V=!0,(h||d)&&(u=!0)),V&&(C?(a=a.add(C),o=k?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{eu:a,ru:r,Ds:u,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort((m,y)=>function(C,P){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{At:V})}};return k(C)-k(P)}(m.type,y.type)||this.Xa(m.doc,y.doc)),this.su(r),s=s!=null&&s;const u=e&&!s?this.ou():[],h=this.Za.size===0&&this.current&&!s?1:0,d=h!==this.Ya;return this.Ya=h,a.length!==0||d?{snapshot:new Ge(this.query,t.eu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new fc,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=q(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const e=[];return t.forEach(r=>{this.Za.has(r)||e.push(new _c(r))}),this.Za.forEach(r=>{t.has(r)||e.push(new gc(r))}),e}uu(t){this.Ha=t.qs,this.Za=q();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return Ge.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Xs="SyncEngine";class Gm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Hm{constructor(t){this.key=t,this.lu=!1}}class Wm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new _e(u=>ma(u),ar),this.Tu=new Map,this.Iu=new Set,this.du=new Z(M.comparator),this.Eu=new Map,this.Au=new Os,this.Ru={},this.Vu=new Map,this.mu=je.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Km(n,t,e=!0){const r=Rc(n);let s;const o=r.Pu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.cu()):s=await yc(r,t,e,!0),s}async function Qm(n,t){const e=Rc(n);await yc(e,t,!0,!1)}async function yc(n,t,e,r){const s=await dm(n.localStore,xt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await Xm(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&oc(n.remoteStore,s),u}async function Xm(n,t,e,r,s){n.gu=(y,w,C)=>async function(k,V,B,x){let z=V.view.nu(B);z.Ds&&(z=await Za(k.localStore,V.query,!1).then(({documents:v})=>V.view.nu(v,z)));const tt=x&&x.targetChanges.get(V.targetId),Dt=x&&x.targetMismatches.get(V.targetId)!=null,at=V.view.applyChanges(z,k.isPrimaryClient,tt,Dt);return Ac(k,V.targetId,at._u),at.snapshot}(n,y,w,C);const o=await Za(n.localStore,t,!0),a=new zm(t,o.qs),u=a.nu(o.documents),h=En.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);Ac(n,e,d._u);const m=new Gm(t,e,a);return n.Pu.set(t,m),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),d.snapshot}async function Ym(n,t,e){const r=$(n),s=r.Pu.get(t),o=r.Tu.get(s.targetId);if(o.length>1)return r.Tu.set(s.targetId,o.filter(a=>!ar(a,t))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&js(r.remoteStore,s.targetId),Ys(r,s.targetId)}).catch(Oe)):(Ys(r,s.targetId),await Fs(r.localStore,s.targetId,!0))}async function Jm(n,t){const e=$(n),r=e.Pu.get(t),s=e.Tu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),js(e.remoteStore,r.targetId))}async function Zm(n,t,e){const r=op(n);try{const s=await function(a,u){const h=$(a),d=Y.now(),m=u.reduce((C,P)=>C.add(P.key),q());let y,w;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let P=qt(),k=q();return h.Os.getEntries(C,m).next(V=>{P=V,P.forEach((B,x)=>{x.isValidDocument()||(k=k.add(B))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,P)).next(V=>{y=V;const B=[];for(const x of u){const z=df(x,y.get(x.key).overlayedDocument);z!=null&&B.push(new Ee(x.key,z,ea(z.value.mapValue),zt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,d,B,u)}).next(V=>{w=V;const B=V.applyToLocalDocumentSet(y,k);return h.documentOverlayCache.saveOverlays(C,V.batchId,B)})}).then(()=>({batchId:w.batchId,changes:_a(y)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.Ru[a.currentUser.toKey()];d||(d=new Z(j)),d=d.insert(u,h),a.Ru[a.currentUser.toKey()]=d}(r,s.batchId,e),await Tn(r,s.changes),await Ir(r.remoteStore)}catch(s){const o=Ws(s,"Failed to persist write");e.reject(o)}}async function Ec(n,t){const e=$(n);try{const r=await um(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Eu.get(o);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?K(a.lu,14607):s.removedDocuments.size>0&&(K(a.lu,42227),a.lu=!1))}),await Tn(e,r,t)}catch(r){await Oe(r)}}function vc(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Pu.forEach((o,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=$(a);h.onlineState=u;let d=!1;h.queries.forEach((m,y)=>{for(const w of y.wa)w.va(u)&&(d=!0)}),d&&Ks(h)}(r.eventManager,t),s.length&&r.hu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function tp(n,t,e){const r=$(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let a=new Z(M.comparator);a=a.insert(o,pt.newNoDocument(o,U.min()));const u=q().add(o),h=new fr(U.min(),new Map,new Z(j),a,u);await Ec(r,h),r.du=r.du.remove(o),r.Eu.delete(t),Js(r)}else await Fs(r.localStore,t,!1).then(()=>Ys(r,t,e)).catch(Oe)}async function ep(n,t){const e=$(n),r=t.batch.batchId;try{const s=await cm(e.localStore,t);Ic(e,r,null),Tc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Tn(e,s)}catch(s){await Oe(s)}}async function np(n,t,e){const r=$(n);try{const s=await function(a,u){const h=$(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,u).next(y=>(K(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(d,y))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);Ic(r,t,e),Tc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Tn(r,s)}catch(s){await Oe(s)}}function Tc(n,t){(n.Vu.get(t)||[]).forEach(e=>{e.resolve()}),n.Vu.delete(t)}function Ic(n,t,e){const r=$(n);let s=r.Ru[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ru[r.currentUser.toKey()]=s}}function Ys(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Tu.get(t))n.Pu.delete(r),e&&n.hu.pu(r,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach(r=>{n.Au.containsKey(r)||wc(n,r)})}function wc(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(js(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),Js(n))}function Ac(n,t,e){for(const r of e)r instanceof gc?(n.Au.addReference(r.key,t),rp(n,r)):r instanceof _c?(O(Xs,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,t),n.Au.containsKey(r.key)||wc(n,r.key)):F(19791,{yu:r})}function rp(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Iu.has(r)||(O(Xs,"New document in limbo: "+e),n.Iu.add(r),Js(n))}function Js(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new M(X.fromString(t)),r=n.mu.next();n.Eu.set(r,new Hm(e)),n.du=n.du.insert(e,r),oc(n.remoteStore,new ie(xt(ha(e.path)),r,"TargetPurposeLimboResolution",Xn.ue))}}async function Tn(n,t,e){const r=$(n),s=[],o=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((u,h)=>{a.push(r.gu(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const y=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){s.push(d);const y=xs.Es(h.targetId,d);o.push(y)}}))}),await Promise.all(a),r.hu.J_(s),await async function(h,d){const m=$(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>S.forEach(d,w=>S.forEach(w.Is,C=>m.persistence.referenceDelegate.addReference(y,w.targetId,C)).next(()=>S.forEach(w.ds,C=>m.persistence.referenceDelegate.removeReference(y,w.targetId,C)))))}catch(y){if(!Me(y))throw y;O(Ls,"Failed to update sequence numbers: "+y)}for(const y of d){const w=y.targetId;if(!y.fromCache){const C=m.Fs.get(w),P=C.snapshotVersion,k=C.withLastLimboFreeSnapshotVersion(P);m.Fs=m.Fs.insert(w,k)}}}(r.localStore,o))}async function sp(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){O(Xs,"User change. New user:",t.toKey());const r=await Ya(e.localStore,t);e.currentUser=t,function(o,a){o.Vu.forEach(u=>{u.forEach(h=>{h.reject(new N(b.CANCELLED,a))})}),o.Vu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Tn(e,r.Bs)}}function ip(n,t){const e=$(n),r=e.Eu.get(t);if(r&&r.lu)return q().add(r.key);{let s=q();const o=e.Tu.get(t);if(!o)return s;for(const a of o){const u=e.Pu.get(a);s=s.unionWith(u.view.tu)}return s}}function Rc(n){const t=$(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ec.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ip.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=tp.bind(null,t),t.hu.J_=$m.bind(null,t.eventManager),t.hu.pu=jm.bind(null,t.eventManager),t}function op(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ep.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=np.bind(null,t),t}class wr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Er(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return am(this.persistence,new sm,t.initialUser,this.serializer)}Du(t){return new Xa(Ms.Vi,this.serializer)}bu(t){return new mm}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wr.provider={build:()=>new wr};class ap extends wr{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){K(this.persistence.referenceDelegate instanceof _r,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new qf(r,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new Xa(r=>_r.Vi(r,e),this.serializer)}}class Zs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sp.bind(null,this.syncEngine),await xm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Fm}()}createDatastore(t){const e=Er(t.databaseInfo.databaseId),r=function(o){return new Em(o)}(t.databaseInfo);return function(o,a,u,h){return new wm(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new Rm(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>vc(this.syncEngine,e,0),function(){return nc.C()?new nc:new pm}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,m){const y=new Wm(s,o,a,u,h,d);return m&&(y.fu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=$(s);O(ve,"RemoteStore shutting down."),o.Ia.add(5),await vn(o),o.Ea.shutdown(),o.Aa.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Zs.provider={build:()=>new Zs};/**
 * @license
 * Copyright 2020 Google LLC
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class cp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ae="FirestoreClient";class up{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=ds.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{O(ae,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O(ae,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ws(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ti(n,t){n.asyncQueue.verifyOperationInProgress(),O(ae,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ya(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>{Zt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{O("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Zt("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=t}async function bc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await lp(n);O(ae,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>dc(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>dc(t.remoteStore,s)),n._onlineComponents=t}async function lp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(ae,"Using user provided OfflineComponentProvider");try{await ti(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Zt("Error using user provided cache. Falling back to memory cache: "+e),await ti(n,new wr)}}else O(ae,"Using default OfflineComponentProvider"),await ti(n,new ap(void 0));return n._offlineComponents}async function Sc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(ae,"Using user provided OnlineComponentProvider"),await bc(n,n._uninitializedComponentsProvider._online)):(O(ae,"Using default OnlineComponentProvider"),await bc(n,new Zs))),n._onlineComponents}function hp(n){return Sc(n).then(t=>t.syncEngine)}async function dp(n){const t=await Sc(n),e=t.eventManager;return e.onListen=Km.bind(null,t.syncEngine),e.onUnlisten=Ym.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Qm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Jm.bind(null,t.syncEngine),e}function fp(n,t,e={}){const r=new te;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new cp({next:w=>{m.Ou(),a.enqueueAndForget(()=>Bm(o,y)),w.fromCache&&h.source==="server"?d.reject(new N(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new qm(u,m,{includeMetadataChanges:!0,ka:!0});return Um(o,y)}(await dp(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Cc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Pc=new Map;/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Vc="firestore.googleapis.com",Dc=!0;class kc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vc,this.ssl=Dc}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Dc;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Wa;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<$f)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ad("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ar{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pd;switch(r.type){case"firstParty":return new Ed(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Pc.get(e);r&&(O("ComponentProvider","Removing Datastore"),Pc.delete(e),r.terminate())}(this),Promise.resolve()}}function mp(n,t,e,r={}){var s;n=Qn(n,Ar);const o=Yr(t),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(Bl(`https://${h}`),zl("Firestore",!0)),a.host!==Vc&&a.host!==h&&Zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!zn(d,u)&&(n._setSettings(d),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=mt.MOCK_USER;else{m=$l(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new mt(w)}n._authCredentials=new gd(new So(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ie{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ie(this.firestore,t,this._query)}}class ut{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ce(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ut(this.firestore,t,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(nn(e,ut._jsonSchema))return new ut(t,r||null,new M(X.fromString(e.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:rt("string",ut._jsonSchemaVersion),referencePath:rt("string")};class ce extends Ie{constructor(t,e,r){super(t,e,ha(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ut(this.firestore,null,new M(t))}withConverter(t){return new ce(this.firestore,t,this._path)}}function Nc(n,t,...e){if(n=fe(n),ko("collection","path",t),n instanceof Ar){const r=X.fromString(t,...e);return Oo(r),new ce(n,null,r)}{if(!(n instanceof ut||n instanceof ce))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Oo(r),new ce(n.firestore,null,r)}}function pp(n,t,...e){if(n=fe(n),arguments.length===1&&(t=ds.newId()),ko("doc","path",t),n instanceof Ar){const r=X.fromString(t,...e);return No(r),new ut(n,null,new M(r))}{if(!(n instanceof ut||n instanceof ce))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return No(r),new ut(n.firestore,n instanceof ce?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Oc="AsyncQueue";class Mc{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new rc(this,"async_queue_retry"),this.oc=()=>{const r=$s();r&&O(Oc,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const e=$s();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=$s();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const e=new te;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Me(t))throw t;O(Oc,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const e=this._c.then(()=>(this.nc=!0,t().catch(r=>{throw this.tc=r,this.nc=!1,jt("INTERNAL UNHANDLED ERROR: ",xc(r)),r}).then(r=>(this.nc=!1,r))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=Hs.createAndSchedule(this,t,e,r,o=>this.lc(o));return this.ec.push(s),s}ac(){this.tc&&F(47125,{hc:xc(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function xc(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class ei extends Ar{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Mc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Mc(t),this._firestoreClient=void 0,await t}}}function gp(n,t){const e=typeof n=="object"?n:nd(),r=typeof n=="string"?n:er,s=cs(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Fl("firestore");o&&mp(s,...o)}return s}function Lc(n){if(n._terminated)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_p(n),n._firestoreClient}function _p(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,d,m){return new Md(u,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Cc(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new up(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class St{constructor(t){this._byteString=t}static fromBase64String(t){try{return new St(dt.fromBase64String(t))}catch(e){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new St(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(nn(t,St._jsonSchema))return St.fromBase64String(t.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:rt("string",St._jsonSchemaVersion),bytes:rt("string")};/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ni{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ri{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ft{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ft._jsonSchemaVersion}}static fromJSON(t){if(nn(t,Ft._jsonSchema))return new Ft(t.latitude,t.longitude)}}Ft._jsonSchemaVersion="firestore/geoPoint/1.0",Ft._jsonSchema={type:rt("string",Ft._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ut{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Ut._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(nn(t,Ut._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Ut(t.vectorValues);throw new N(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ut._jsonSchemaVersion="firestore/vectorValue/1.0",Ut._jsonSchema={type:rt("string",Ut._jsonSchemaVersion),vectorValues:rt("object")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const yp=/^__.*__$/;class Ep{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ee(t,this.data,this.fieldMask,e,this.fieldTransforms):new _n(t,this.data,e,this.fieldTransforms)}}function Fc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ec:n})}}class si{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new si(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.fc(t),s}gc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return Rr(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(Fc(this.Ec)&&yp.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class vp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Er(t)}Dc(t,e,r,s=!1){return new si({Ec:t,methodName:e,bc:r,path:lt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uc(n){const t=n._freezeSettings(),e=Er(n._databaseId);return new vp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Tp(n,t,e,r,s,o={}){const a=n.Dc(o.merge||o.mergeFields?2:0,t,e,s);jc("Data must be an object, but it was:",a,r);const u=Bc(r,a);let h,d;if(o.merge)h=new Pt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const y of o.mergeFields){const w=wp(t,y,e);if(!a.contains(w))throw new N(b.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Rp(m,w)||m.push(w)}h=new Pt(m),d=a.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,d=a.fieldTransforms;return new Ep(new bt(u),h,d)}class ii extends ri{_toFieldTransform(t){return new cf(t.path,new fn)}isEqual(t){return t instanceof ii}}function Ip(n,t,e,r=!1){return oi(e,n.Dc(r?4:3,t))}function oi(n,t){if($c(n=fe(n)))return jc("Unsupported field value:",t,n),Bc(n,t);if(n instanceof ri)return function(r,s){if(!Fc(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=oi(u,s.yc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Y.fromDate(r);return{timestampValue:gr(s.serializer,o)}}if(r instanceof Y){const o=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gr(s.serializer,o)}}if(r instanceof Ft)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof St)return{bytesValue:Fa(s.serializer,r._byteString)};if(r instanceof ut){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ps(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ut)return function(a,u){return{mapValue:{fields:{[Ko]:{stringValue:Qo},[rr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return Rs(u.serializer,d)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${Kn(r)}`)}(n,t)}function Bc(n,t){const e={};return $o(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ge(n,(r,s)=>{const o=oi(s,t.Vc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function $c(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof Ft||n instanceof St||n instanceof ut||n instanceof ri||n instanceof Ut)}function jc(n,t,e){if(!$c(e)||!Mo(e)){const r=Kn(e);throw r==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+r)}}function wp(n,t,e){if((t=fe(t))instanceof ni)return t._internalPath;if(typeof t=="string")return qc(n,t);throw Rr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Ap=new RegExp("[~\\*/\\[\\]]");function qc(n,t,e){if(t.search(Ap)>=0)throw Rr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ni(...t.split("."))._internalPath}catch{throw Rr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Rr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(b.INVALID_ARGUMENT,u+n+h)}function Rp(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class zc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new bp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ai("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class bp extends zc{data(){return super.data()}}function ai(n,t){return typeof t=="string"?qc(n,t):t instanceof ni?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Sp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ci{}class Gc extends ci{}function Cp(n,t,...e){let r=[];t instanceof ci&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof li).length,u=o.filter(h=>h instanceof ui).length;if(a>1||a>0&&u>0)throw new N(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ui extends Gc{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ui(t,e,r)}_apply(t){const e=this._parse(t);return Kc(t._query,e),new Ie(t.firestore,t.converter,ws(t._query,e))}_parse(t){const e=Uc(t.firestore);return function(o,a,u,h,d,m,y){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Wc(y,m);const P=[];for(const k of y)P.push(Hc(h,o,k));w={arrayValue:{values:P}}}else w=Hc(h,o,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Wc(y,m),w=Ip(u,a,y,m==="in"||m==="not-in");return st.create(d,m,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class li extends ci{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new li(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Vt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Kc(a,h),a=ws(a,h)}(t._query,e),new Ie(t.firestore,t.converter,ws(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hi extends Gc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new hi(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new un(o,a)}(t._query,this._field,this._direction);return new Ie(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new Fe(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Pp(n,t="asc"){const e=t,r=ai("orderBy",n);return hi._create(r,e)}function Hc(n,t,e){if(typeof(e=fe(e))=="string"){if(e==="")throw new N(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fa(t)&&e.indexOf("/")!==-1)throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(X.fromString(e));if(!M.isDocumentKey(r))throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jo(n,new M(r))}if(e instanceof ut)return Jo(n,e._key);throw new N(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kn(e)}.`)}function Wc(n,t){if(!Array.isArray(n)||n.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Kc(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Vp{convertValue(t,e="none"){switch(se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return nt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ge(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[rr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>nt(a.doubleValue));return new Ut(o)}convertGeoPoint(t){return new Ft(nt(t.latitude),nt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=tr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(sn(t));default:return null}}convertTimestamp(t){const e=ne(t);return new Y(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);K(Ga(r),9688,{name:t});const s=new on(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||jt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Dp(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class br{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class He extends zc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ai("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=He._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}He._jsonSchemaVersion="firestore/documentSnapshot/1.0",He._jsonSchema={type:rt("string",He._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class Sr extends He{data(t={}){return super.data(t)}}class We{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new br(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Sr(this._firestore,this._userDataWriter,r.key,r,new br(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new Sr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new br(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Sr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new br(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:kp(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=We._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ds.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function kp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}We._jsonSchemaVersion="firestore/querySnapshot/1.0",We._jsonSchema={type:rt("string",We._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};class Np extends Vp{constructor(t){super(),this.firestore=t}convertBytes(t){return new St(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ut(this.firestore,null,e)}}function Op(n){n=Qn(n,Ie);const t=Qn(n.firestore,ei),e=Lc(t),r=new Np(t);return Sp(n._query),fp(e,n._query).then(s=>new We(t,r,n,s))}function Mp(n,t){const e=Qn(n.firestore,ei),r=pp(n),s=Dp(n.converter,t);return xp(e,[Tp(Uc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function xp(n,t){return function(r,s){const o=new te;return r.asyncQueue.enqueueAndForget(async()=>Zm(await hp(r),s,o)),o.promise}(Lc(n),t)}function Lp(){return new ii("serverTimestamp")}(function(t,e=!0){(function(s){De=s})(ed),Xt(new Bt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new ei(new _d(r.getProvider("auth-internal")),new vd(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Nt(Ao,Ro,t),Nt(Ao,Ro,"esm2017")})();const Qc="@firebase/installations",di="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Xc=1e4,Yc=`w:${di}`,Jc="FIS_v2",Fp="https://firebaseinstallations.googleapis.com/v1",Up=60*60*1e3,Bp="installations",$p="Installations";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const jp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},we=new qn(Bp,$p,jp);function Zc(n){return n instanceof Kt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function tu({projectId:n}){return`${Fp}/projects/${n}/installations`}function eu(n){return{token:n.token,requestStatus:2,expiresIn:zp(n.expiresIn),creationTime:Date.now()}}async function nu(n,t){const r=(await t.json()).error;return we.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ru({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function qp(n,{refreshToken:t}){const e=ru(n);return e.append("Authorization",Gp(t)),e}async function su(n){const t=await n();return t.status>=500&&t.status<600?n():t}function zp(n){return Number(n.replace("s","000"))}function Gp(n){return`${Jc} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Hp({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=tu(n),s=ru(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:Jc,appId:n.appId,sdkVersion:Yc},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await su(()=>fetch(r,u));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:eu(d.authToken)}}else throw await nu("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function iu(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Wp(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Kp=/^[cdef][\w-]{21}$/,fi="";function Qp(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Xp(n);return Kp.test(e)?e:fi}catch{return fi}}function Xp(n){return Wp(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Cr(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ou=new Map;function au(n,t){const e=Cr(n);cu(e,t),Yp(e,t)}function cu(n,t){const e=ou.get(n);if(e)for(const r of e)r(t)}function Yp(n,t){const e=Jp();e&&e.postMessage({key:n,fid:t}),Zp()}let Ae=null;function Jp(){return!Ae&&"BroadcastChannel"in self&&(Ae=new BroadcastChannel("[Firebase] FID Change"),Ae.onmessage=n=>{cu(n.data.key,n.data.fid)}),Ae}function Zp(){ou.size===0&&Ae&&(Ae.close(),Ae=null)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const tg="firebase-installations-database",eg=1,Re="firebase-installations-store";let mi=null;function pi(){return mi||(mi=oo(tg,eg,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Re)}}})),mi}async function Pr(n,t){const e=Cr(n),s=(await pi()).transaction(Re,"readwrite"),o=s.objectStore(Re),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&au(n,t.fid),t}async function uu(n){const t=Cr(n),r=(await pi()).transaction(Re,"readwrite");await r.objectStore(Re).delete(t),await r.done}async function Vr(n,t){const e=Cr(n),s=(await pi()).transaction(Re,"readwrite"),o=s.objectStore(Re),a=await o.get(e),u=t(a);return u===void 0?await o.delete(e):await o.put(u,e),await s.done,u&&(!a||a.fid!==u.fid)&&au(n,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function gi(n){let t;const e=await Vr(n.appConfig,r=>{const s=ng(r),o=rg(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===fi?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function ng(n){const t=n||{fid:Qp(),registrationStatus:0};return hu(t)}function rg(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(we.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=sg(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ig(n)}:{installationEntry:t}}async function sg(n,t){try{const e=await Hp(n,t);return Pr(n.appConfig,e)}catch(e){throw Zc(e)&&e.customData.serverCode===409?await uu(n.appConfig):await Pr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function ig(n){let t=await lu(n.appConfig);for(;t.registrationStatus===1;)await iu(100),t=await lu(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await gi(n);return r||e}return t}function lu(n){return Vr(n,t=>{if(!t)throw we.create("installation-not-found");return hu(t)})}function hu(n){return og(n)?{fid:n.fid,registrationStatus:0}:n}function og(n){return n.registrationStatus===1&&n.registrationTime+Xc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function ag({appConfig:n,heartbeatServiceProvider:t},e){const r=cg(n,e),s=qp(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Yc,appId:n.appId}},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await su(()=>fetch(r,u));if(h.ok){const d=await h.json();return eu(d)}else throw await nu("Generate Auth Token",h)}function cg(n,{fid:t}){return`${tu(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function _i(n,t=!1){let e;const r=await Vr(n.appConfig,o=>{if(!fu(o))throw we.create("not-registered");const a=o.authToken;if(!t&&hg(a))return o;if(a.requestStatus===1)return e=ug(n,t),o;{if(!navigator.onLine)throw we.create("app-offline");const u=fg(o);return e=lg(n,u),u}});return e?await e:r.authToken}async function ug(n,t){let e=await du(n.appConfig);for(;e.authToken.requestStatus===1;)await iu(100),e=await du(n.appConfig);const r=e.authToken;return r.requestStatus===0?_i(n,t):r}function du(n){return Vr(n,t=>{if(!fu(t))throw we.create("not-registered");const e=t.authToken;return mg(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function lg(n,t){try{const e=await ag(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Pr(n.appConfig,r),e}catch(e){if(Zc(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await uu(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Pr(n.appConfig,r)}throw e}}function fu(n){return n!==void 0&&n.registrationStatus===2}function hg(n){return n.requestStatus===2&&!dg(n)}function dg(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Up}function fg(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function mg(n){return n.requestStatus===1&&n.requestTime+Xc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function pg(n){const t=n,{installationEntry:e,registrationPromise:r}=await gi(t);return r?r.catch(console.error):_i(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function gg(n,t=!1){const e=n;return await _g(e),(await _i(e,t)).token}async function _g(n){const{registrationPromise:t}=await gi(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function yg(n){if(!n||!n.options)throw yi("App Configuration");if(!n.name)throw yi("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw yi(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function yi(n){return we.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const mu="installations",Eg="installations-internal",vg=n=>{const t=n.getProvider("app").getImmediate(),e=yg(t),r=cs(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Tg=n=>{const t=n.getProvider("app").getImmediate(),e=cs(t,mu).getImmediate();return{getId:()=>pg(e),getToken:s=>gg(e,s)}};function Ig(){Xt(new Bt(mu,vg,"PUBLIC")),Xt(new Bt(Eg,Tg,"PRIVATE"))}Ig(),Nt(Qc,di),Nt(Qc,di,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
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
 */const pu="analytics",wg="firebase_id",Ag="origin",Rg=60*1e3,bg="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ei="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const At=new Jr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Sg={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new qn("analytics","Analytics",Sg);/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Cg(n){if(!n.startsWith(Ei)){const t=Ct.create("invalid-gtag-resource",{gtagURL:n});return At.warn(t.message),""}return n}function gu(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Pg(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Vg(n,t){const e=Pg("firebase-js-sdk-policy",{createScriptURL:Cg}),r=document.createElement("script"),s=`${Ei}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Dg(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function kg(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await gu(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(u){At.error(u)}n("config",s,o)}async function Ng(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const u=await gu(e);for(const h of a){const d=u.find(y=>y.measurementId===h),m=d&&t[d.appId];if(m)o.push(m);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){At.error(o)}}function Og(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[u,h]=a;await Ng(n,t,e,u,h)}else if(o==="config"){const[u,h]=a;await kg(n,t,e,r,u,h)}else if(o==="consent"){const[u,h]=a;n("consent",u,h)}else if(o==="get"){const[u,h,d]=a;n("get",u,h,d)}else if(o==="set"){const[u]=a;n("set",u)}else n(o,...a)}catch(u){At.error(u)}}return s}function Mg(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Og(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function xg(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Ei)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Lg=30,Fg=1e3;class Ug{constructor(t={},e=Fg){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const _u=new Ug;function Bg(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function $g(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:Bg(r)},o=bg.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let u="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(u=h.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function jg(n,t=_u,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw Ct.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Ct.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new Gg;return setTimeout(async()=>{u.abort()},Rg),yu({appId:r,apiKey:s,measurementId:o},a,u,t)}async function yu(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=_u){var o;const{appId:a,measurementId:u}=n;try{await qg(r,t)}catch(h){if(u)return At.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:u};throw h}try{const h=await $g(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!zg(d)){if(s.deleteThrottleMetadata(a),u)return At.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:u};throw h}const m=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?eo(e,s.intervalMillis,Lg):eo(e,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+m,backoffCount:e+1};return s.setThrottleMetadata(a,y),At.debug(`Calling attemptFetch again in ${m} millis`),yu(n,y,r,s)}}function qg(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(Ct.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function zg(n){if(!(n instanceof Kt)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class Gg{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Hg(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Wg(){if(Ji())try{await Zi()}catch(n){return At.warn(Ct.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return At.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Kg(n,t,e,r,s,o,a){var u;const h=jg(n);h.then(C=>{e[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&At.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>At.error(C)),t.push(h);const d=Wg().then(C=>{if(C)return r.getId()}),[m,y]=await Promise.all([h,d]);xg(o)||Vg(o,m.measurementId),s("js",new Date);const w=(u=a==null?void 0:a.config)!==null&&u!==void 0?u:{};return w[Ag]="firebase",w.update=!0,y!=null&&(w[wg]=y),s("config",m.measurementId,w),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Qg{constructor(t){this.app=t}_delete(){return delete In[this.app.options.appId],Promise.resolve()}}let In={},Eu=[];const vu={};let vi="dataLayer",Xg="gtag",Tu,Iu,wu=!1;function Yg(){const n=[];if(Wl()&&n.push("This is a browser extension environment."),Ql()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=Ct.create("invalid-analytics-context",{errorInfo:t});At.warn(e.message)}}function Jg(n,t,e){Yg();const r=n.options.appId;if(!r)throw Ct.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)At.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(In[r]!=null)throw Ct.create("already-exists",{id:r});if(!wu){Dg(vi);const{wrappedGtag:o,gtagCore:a}=Mg(In,Eu,vu,vi,Xg);Iu=o,Tu=a,wu=!0}return In[r]=Kg(n,Eu,vu,t,Tu,vi,e),new Qg(n)}function Zg(n,t,e,r){n=fe(n),Hg(Iu,In[n.app.options.appId],t,e,r).catch(s=>At.error(s))}const Au="@firebase/analytics",Ru="0.10.17";function t_(){Xt(new Bt(pu,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Jg(r,s,e)},"PUBLIC")),Xt(new Bt("analytics-internal",n,"PRIVATE")),Nt(Au,Ru),Nt(Au,Ru,"esm2017");function n(t){try{const e=t.getProvider(pu).getImmediate();return{logEvent:(r,s,o)=>Zg(e,r,s,o)}}catch(e){throw Ct.create("interop-component-reg-failed",{reason:e})}}}t_();const e_=lo({apiKey:"AIzaSyDTp17mp34dX47aQBswgGWTyzimOJawrbg",authDomain:"tradey-86d5c.firebaseapp.com",projectId:"tradey-86d5c",storageBucket:"tradey-86d5c.firebasestorage.app",messagingSenderId:"1042076341500",appId:"1:1042076341500:web:d716dddff66c58e652f379",measurementId:"G-YBXWY1GY4D"}),bu=gp(e_);async function n_(n){try{return(await Mp(Nc(bu,"items"),{...n,timestamp:Lp()})).id}catch(t){throw new Error("Error adding item: "+t.message)}}async function r_(){const n=Cp(Nc(bu,"items"),Pp("timestamp","desc"));try{const t=await Op(n),e=[];return t.forEach(r=>{var o,a;const s=r.data();e.push({id:r.id,...s,timestamp:((a=(o=s.timestamp)==null?void 0:o.toDate)==null?void 0:a.call(o))||new Date})}),e}catch(t){throw new Error("Error fetching items: "+t.message)}}let Ke=null,Ti=[],wn=[];const be=new Map,s_=()=>{const n=localStorage.getItem("geocache");if(n){const t=JSON.parse(n);for(const[e,r]of Object.entries(t))be.set(e,r.coords),wn.push({address:e,fullAddress:r.fullAddress,coords:r.coords})}},Su=()=>{const n={};be.forEach((t,e)=>{const r=wn.find(s=>s.address===e);n[e]={coords:t,fullAddress:r?r.fullAddress:e}}),localStorage.setItem("geocache",JSON.stringify(n))};function i_(){if(Ke)return;s_(),Ke=L.map("map").setView([1.9441,30.0619],13),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(Ke);const n=document.getElementById("address-list");n&&(n.innerHTML="<h4>Pinned Locations</h4><p>No locations to display. Perform a search to see pinned locations.</p>")}const o_=n=>new Promise(t=>setTimeout(t,n));async function a_(n){if(be.has(n))return be.get(n);try{const t=`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(n)}&format=json&limit=1&addressdetails=1`,r=await(await fetch(t,{headers:{"User-Agent":"LostAndFoundTracker/1.0 (your-email@example.com)"}})).json();if(r.length>0){const{lat:s,lon:o,display_name:a}=r[0],u=[parseFloat(s),parseFloat(o)];return be.set(n,u),wn.push({address:n,fullAddress:a,coords:u}),Su(),u}}catch(t){console.warn(`Nominatim geocoding failed for "${n}":`,t)}try{const e=`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(n)}.json?access_token=pk.eyJ1IjoiZWJpdGVjaCIsImEiOiJjbThxMWpvZzEwNzcyMm1zaHdqYWs0aDE0In0.WWDbJkiV_ICjVIO9wWw_ZQ`,s=await(await fetch(e)).json();if(s.features&&s.features.length>0){const[o,a]=s.features[0].center,u=s.features[0].place_name,h=[a,o];return be.set(n,h),wn.push({address:n,fullAddress:u,coords:h}),Su(),h}}catch(t){console.error(`Mapbox geocoding failed for "${n}":`,t)}return null}async function Ii(n){Ti.forEach(o=>o.remove()),Ti=[];const t=[...new Set(n.map(o=>o.location_desc).filter(Boolean))];for(let o=0;o<t.length;o++){const a=t[o];await a_(a),o<t.length-1&&await o_(1e3)}const e=new Map;for(const o of n){const a=o.location_desc;if(!a)continue;const u=be.get(a);if(!u)continue;const h=u.join(",");e.has(h)||e.set(h,[]),e.get(h).push(o)}const r=[];e.forEach((o,a)=>{const[u,h]=a.split(",").map(parseFloat),d=o.map(y=>`
            <b>${y.title}</b><br>
            ${y.description||"No description"}
        `).join("<hr>"),m=L.marker([u,h]).addTo(Ke).bindPopup(d);Ti.push(m),r.push([u,h])}),r.length>0?Ke.fitBounds(r,{padding:[50,50]}):Ke.setView([1.9441,30.0619],13);const s=document.getElementById("address-list");if(s)if(s.innerHTML="<h4>Pinned Locations</h4>",e.size===0)s.innerHTML+="<p>No locations to display. Perform a search to see pinned locations.</p>";else{const o=[];if(e.forEach((a,u)=>{const h=wn.find(d=>d.coords.join(",")===u);h&&o.push(h.fullAddress)}),o.length>0){const a=document.createElement("ul");o.forEach(u=>{const h=document.createElement("li");h.textContent=u,a.appendChild(h)}),s.appendChild(a)}else s.innerHTML+="<p>No addresses found for the pinned locations.</p>"}}async function An(n="all",t=""){const e=document.getElementById("items-list"),r=document.getElementById("search-feedback");if(!e){console.error("Items list element not found!");return}e.innerHTML="",r?(console.log("Feedback element found:",r),r.innerHTML=""):console.warn("Search feedback element not found!");try{const s=await r_();console.log("Fetched items:",s);const o=new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i"),a=s.filter(u=>(n==="all"||u.status===n)&&((u.title?o.test(u.title):!1)||(u.description?o.test(u.description):!1)));if(console.log("Filtered items:",a),r&&(a.length===0?r.innerHTML="0 items matched":r.innerHTML=`${a.length} item${a.length===1?"":"s"} matched`,console.log("Feedback message set to:",r.innerHTML)),a.length===0){e.innerHTML="<p class='no-items'>No items found</p>",await Ii([]);return}a.forEach(u=>{const h=document.createElement("div");h.classList.add("item-card");const d=u.title.split(" - "),m=d[0]||"Untitled Item",y=d[1]||"Date unknown";h.innerHTML=`
                <div class="card-body">
                    <div class="card-header">
                        <h4 class="card-title">${m}</h4>
                        <small class="timestamp">${y}</small>
                    </div>
                    <span class="status-badge ${u.status==="found"?"status-found":u.status==="lost"?"status-lost":""}">${u.status?u.status.toUpperCase():"UNKNOWN"}</span>
                    <p class="card-text">${u.description||"No description provided."}</p>
                    <div class="item-details">
                        <p><strong>Location:</strong> ${u.location_desc||"Not specified"}</p>
                        <p data-contact-info><strong>Contact:</strong> ${u.contact_info||"Not provided"}</p>
                    </div>
                    ${u.image_link?`
                    <div class="card-image">
                        <img src="${u.image_link}" alt="${m}" class="item-image">
                    </div>`:""}
                </div>
            `,e.appendChild(h)}),await Ii(a)}catch(s){console.error("Error fetching items:",s),e.innerHTML=`
            <div class="alert alert-danger">
                Error loading items. Please refresh the page.
                ${s.message?`<div class="error-detail">${s.message}</div>`:""}
            </div>
        `,r&&(r.innerHTML="Error loading items."),await Ii([])}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM fully loaded"),i_();const n=document.getElementById("report-form"),t=document.getElementById("keyword-search-btn"),e=document.getElementById("keyword-search"),r=document.getElementById("statusTabs"),s=document.getElementById("report-date"),o=document.getElementById("item-title"),a=document.getElementById("reportModal"),u=document.getElementById("report-btn"),h=document.getElementById("report-modal-toggle"),d=document.getElementById("report-modal-close"),m=document.getElementById("report-modal-cancel"),y=document.getElementById("navbar-toggle"),w=document.getElementById("navbarNav");An();const C=()=>{if(n&&(console.log("Resetting form state"),n.reset(),n.classList.remove("was-validated"),n.querySelectorAll(".form-input, .form-select").forEach(P=>{P.classList.remove("is-invalid"),P.setCustomValidity(""),P.setAttribute("data-pristine","true")}),s&&(s.valueAsDate=new Date),o)){const P=new Date,k=String(P.getDate()).padStart(2,"0"),V=String(P.getMonth()+1).padStart(2,"0"),B=P.getFullYear(),x=`${k}/${V}/${B}`;o.placeholder=`e.g., Lost Wallet - ${x}`,o.value=""}};if(y&&w&&y.addEventListener("click",()=>{console.log("Navbar toggle clicked"),w.classList.toggle("show")}),u&&u.addEventListener("click",()=>{console.log("Report button clicked"),a&&(C(),a.classList.add("show"))}),h&&h.addEventListener("click",P=>{P.preventDefault(),console.log("Report modal toggle clicked"),a&&(C(),a.classList.add("show"))}),d&&d.addEventListener("click",()=>{console.log("Modal close clicked"),a&&a.classList.remove("show")}),m&&m.addEventListener("click",()=>{console.log("Modal cancel clicked"),a&&a.classList.remove("show")}),a&&a.addEventListener("click",P=>{P.target===a&&a.classList.remove("show")}),s&&o){const P=new Date;s.valueAsDate=P;const k=String(P.getDate()).padStart(2,"0"),V=String(P.getMonth()+1).padStart(2,"0"),B=P.getFullYear(),x=`${k}/${V}/${B}`;o.placeholder=`e.g., Lost Wallet - ${x}`,s.addEventListener("change",function(){const z=new Date(this.value),tt=String(z.getDate()).padStart(2,"0"),Dt=String(z.getMonth()+1).padStart(2,"0"),at=z.getFullYear(),v=`${tt}/${Dt}/${at}`,p=o.value.split(" - ")[0]||"";o.value=p?`${p} - ${v}`:"",o.placeholder=`e.g., Lost Wallet - ${v}`})}n&&(n.querySelectorAll(".form-input, .form-select").forEach(P=>{P.addEventListener("input",()=>{P.setAttribute("data-pristine","false"),P.classList.remove("is-invalid"),P.setCustomValidity("")})}),n.addEventListener("submit",async P=>{if(P.preventDefault(),!n.checkValidity()){P.stopPropagation(),n.classList.add("was-validated"),n.querySelectorAll(".form-input, .form-select").forEach(B=>{B.validity.valid||B.classList.add("is-invalid")});return}const k=o.value.trim();if(k.match(/.+\s-\s\d{2}\/\d{2}\/\d{4}/))o.setCustomValidity("");else{o.classList.add("is-invalid"),o.setCustomValidity("Invalid format"),P.stopPropagation(),n.classList.add("was-validated");return}const V=n.querySelector("#submit-btn");V.disabled=!0,V.classList.add("loading");try{const B={title:k,description:document.getElementById("description").value,location_desc:document.getElementById("location-desc").value,image_link:document.getElementById("image-link").value||"",contact_info:document.getElementById("contact-info").value,status:document.getElementById("item-status").value,item_type:document.getElementById("item-type").value,report_date:s.value};await n_(B),console.log("Item added:",B),n.reset(),s.valueAsDate=new Date,o.placeholder=`e.g., Lost Wallet - ${new Date().toLocaleDateString("en-GB")}`,n.classList.remove("was-validated"),a&&a.classList.remove("show");const x=document.createElement("div");x.className="alert alert-success",x.innerHTML=`
                    <strong>Success!</strong> Item reported successfully.
                    <button type="button" class="alert-close">×</button>
                `,document.body.appendChild(x),setTimeout(()=>x.remove(),3e3),x.querySelector(".alert-close").addEventListener("click",()=>x.remove()),An()}catch(B){console.error("Error reporting item:",B);const x=document.createElement("div");x.className="alert alert-danger",x.innerHTML=`
                    <strong>Error!</strong> ${B.message}
                    <button type="button" class="alert-close">×</button>
                `,document.body.appendChild(x),setTimeout(()=>x.remove(),3e3),x.querySelector(".alert-close").addEventListener("click",()=>x.remove())}finally{V.disabled=!1,V.classList.remove("loading")}})),t&&e&&(t.addEventListener("click",()=>{const P=e.value;console.log("Search clicked, query:",P),An("all",P)}),e.addEventListener("keypress",P=>{if(P.key==="Enter"){P.preventDefault();const k=e.value;console.log("Search triggered by Enter key, query:",k),An("all",k)}})),r&&r.addEventListener("click",P=>{const k=P.target.closest(".tab-link");if(k&&k.dataset.status){console.log("Tab clicked:",k.dataset.status),document.querySelectorAll(".tab-link").forEach(B=>B.classList.remove("active")),k.classList.add("active");const V=document.getElementById("keyword-search").value;An(k.dataset.status,V)}})})})();

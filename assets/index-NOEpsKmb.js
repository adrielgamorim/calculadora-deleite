function hI(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in t)){const l=Object.getOwnPropertyDescriptor(i,s);l&&Object.defineProperty(t,s,l.get?l:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function fI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vg={exports:{}},ju={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function dI(){if(A_)return ju;A_=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(i,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var m in s)m!=="key"&&(l[m]=s[m])}else l=s;return s=l.ref,{$$typeof:t,type:i,key:c,ref:s!==void 0?s:null,props:l}}return ju.Fragment=e,ju.jsx=n,ju.jsxs=n,ju}var C_;function mI(){return C_||(C_=1,vg.exports=dI()),vg.exports}var T=mI(),bg={exports:{}},$e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function pI(){if(R_)return $e;R_=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function E(z){return z===null||typeof z!="object"?null:(z=b&&z[b]||z["@@iterator"],typeof z=="function"?z:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,k={};function D(z,J,ie){this.props=z,this.context=J,this.refs=k,this.updater=ie||I}D.prototype.isReactComponent={},D.prototype.setState=function(z,J){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,J,"setState")},D.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function $(){}$.prototype=D.prototype;function H(z,J,ie){this.props=z,this.context=J,this.refs=k,this.updater=ie||I}var F=H.prototype=new $;F.constructor=H,P(F,D.prototype),F.isPureReactComponent=!0;var te=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},K=Object.prototype.hasOwnProperty;function C(z,J,ie,ae,me,Te){return ie=Te.ref,{$$typeof:t,type:z,key:J,ref:ie!==void 0?ie:null,props:Te}}function w(z,J){return C(z.type,J,void 0,void 0,void 0,z.props)}function x(z){return typeof z=="object"&&z!==null&&z.$$typeof===t}function M(z){var J={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ie){return J[ie]})}var V=/\/+/g;function j(z,J){return typeof z=="object"&&z!==null&&z.key!=null?M(""+z.key):J.toString(36)}function N(){}function Me(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(N,N):(z.status="pending",z.then(function(J){z.status==="pending"&&(z.status="fulfilled",z.value=J)},function(J){z.status==="pending"&&(z.status="rejected",z.reason=J)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function fe(z,J,ie,ae,me){var Te=typeof z;(Te==="undefined"||Te==="boolean")&&(z=null);var ge=!1;if(z===null)ge=!0;else switch(Te){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(z.$$typeof){case t:case e:ge=!0;break;case y:return ge=z._init,fe(ge(z._payload),J,ie,ae,me)}}if(ge)return me=me(z),ge=ae===""?"."+j(z,0):ae,te(me)?(ie="",ge!=null&&(ie=ge.replace(V,"$&/")+"/"),fe(me,J,ie,"",function(_e){return _e})):me!=null&&(x(me)&&(me=w(me,ie+(me.key==null||z&&z.key===me.key?"":(""+me.key).replace(V,"$&/")+"/")+ge)),J.push(me)),1;ge=0;var Qe=ae===""?".":ae+":";if(te(z))for(var Ve=0;Ve<z.length;Ve++)ae=z[Ve],Te=Qe+j(ae,Ve),ge+=fe(ae,J,ie,Te,me);else if(Ve=E(z),typeof Ve=="function")for(z=Ve.call(z),Ve=0;!(ae=z.next()).done;)ae=ae.value,Te=Qe+j(ae,Ve++),ge+=fe(ae,J,ie,Te,me);else if(Te==="object"){if(typeof z.then=="function")return fe(Me(z),J,ie,ae,me);throw J=String(z),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ge}function X(z,J,ie){if(z==null)return z;var ae=[],me=0;return fe(z,ae,"","",function(Te){return J.call(ie,Te,me++)}),ae}function ce(z){if(z._status===-1){var J=z._result;J=J(),J.then(function(ie){(z._status===0||z._status===-1)&&(z._status=1,z._result=ie)},function(ie){(z._status===0||z._status===-1)&&(z._status=2,z._result=ie)}),z._status===-1&&(z._status=0,z._result=J)}if(z._status===1)return z._result.default;throw z._result}var de=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function be(){}return $e.Children={map:X,forEach:function(z,J,ie){X(z,function(){J.apply(this,arguments)},ie)},count:function(z){var J=0;return X(z,function(){J++}),J},toArray:function(z){return X(z,function(J){return J})||[]},only:function(z){if(!x(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},$e.Component=D,$e.Fragment=n,$e.Profiler=s,$e.PureComponent=H,$e.StrictMode=i,$e.Suspense=d,$e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,$e.__COMPILER_RUNTIME={__proto__:null,c:function(z){return L.H.useMemoCache(z)}},$e.cache=function(z){return function(){return z.apply(null,arguments)}},$e.cloneElement=function(z,J,ie){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var ae=P({},z.props),me=z.key,Te=void 0;if(J!=null)for(ge in J.ref!==void 0&&(Te=void 0),J.key!==void 0&&(me=""+J.key),J)!K.call(J,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&J.ref===void 0||(ae[ge]=J[ge]);var ge=arguments.length-2;if(ge===1)ae.children=ie;else if(1<ge){for(var Qe=Array(ge),Ve=0;Ve<ge;Ve++)Qe[Ve]=arguments[Ve+2];ae.children=Qe}return C(z.type,me,void 0,void 0,Te,ae)},$e.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},$e.createElement=function(z,J,ie){var ae,me={},Te=null;if(J!=null)for(ae in J.key!==void 0&&(Te=""+J.key),J)K.call(J,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(me[ae]=J[ae]);var ge=arguments.length-2;if(ge===1)me.children=ie;else if(1<ge){for(var Qe=Array(ge),Ve=0;Ve<ge;Ve++)Qe[Ve]=arguments[Ve+2];me.children=Qe}if(z&&z.defaultProps)for(ae in ge=z.defaultProps,ge)me[ae]===void 0&&(me[ae]=ge[ae]);return C(z,Te,void 0,void 0,null,me)},$e.createRef=function(){return{current:null}},$e.forwardRef=function(z){return{$$typeof:m,render:z}},$e.isValidElement=x,$e.lazy=function(z){return{$$typeof:y,_payload:{_status:-1,_result:z},_init:ce}},$e.memo=function(z,J){return{$$typeof:p,type:z,compare:J===void 0?null:J}},$e.startTransition=function(z){var J=L.T,ie={};L.T=ie;try{var ae=z(),me=L.S;me!==null&&me(ie,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(be,de)}catch(Te){de(Te)}finally{L.T=J}},$e.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},$e.use=function(z){return L.H.use(z)},$e.useActionState=function(z,J,ie){return L.H.useActionState(z,J,ie)},$e.useCallback=function(z,J){return L.H.useCallback(z,J)},$e.useContext=function(z){return L.H.useContext(z)},$e.useDebugValue=function(){},$e.useDeferredValue=function(z,J){return L.H.useDeferredValue(z,J)},$e.useEffect=function(z,J,ie){var ae=L.H;if(typeof ie=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(z,J)},$e.useId=function(){return L.H.useId()},$e.useImperativeHandle=function(z,J,ie){return L.H.useImperativeHandle(z,J,ie)},$e.useInsertionEffect=function(z,J){return L.H.useInsertionEffect(z,J)},$e.useLayoutEffect=function(z,J){return L.H.useLayoutEffect(z,J)},$e.useMemo=function(z,J){return L.H.useMemo(z,J)},$e.useOptimistic=function(z,J){return L.H.useOptimistic(z,J)},$e.useReducer=function(z,J,ie){return L.H.useReducer(z,J,ie)},$e.useRef=function(z){return L.H.useRef(z)},$e.useState=function(z){return L.H.useState(z)},$e.useSyncExternalStore=function(z,J,ie){return L.H.useSyncExternalStore(z,J,ie)},$e.useTransition=function(){return L.H.useTransition()},$e.version="19.1.1",$e}var I_;function Qy(){return I_||(I_=1,bg.exports=pI()),bg.exports}var O=Qy();const en=fI(O),O_=hI({__proto__:null,default:en},[O]),pT=O.createContext(void 0),gT=()=>{const t=O.useContext(pT);if(!t)throw new Error("useAuth must be used inside an AuthProvider");return t};/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var D_="popstate";function gI(t={}){function e(s,l){let{pathname:c="/",search:m="",hash:d=""}=Ks(s.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),ry("",{pathname:c,search:m,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(s,l){let c=s.document.querySelector("base"),m="";if(c&&c.getAttribute("href")){let d=s.location.href,p=d.indexOf("#");m=p===-1?d:d.slice(0,p)}return m+"#"+(typeof l=="string"?l:ac(l))}function i(s,l){Mr(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return vI(e,n,i,t)}function Ct(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Mr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yI(){return Math.random().toString(36).substring(2,10)}function P_(t,e){return{usr:t.state,key:t.key,idx:e}}function ry(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Ks(e):e,state:n,key:e&&e.key||i||yI()}}function ac({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ks(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function vI(t,e,n,i={}){let{window:s=document.defaultView,v5Compat:l=!1}=i,c=s.history,m="POP",d=null,p=y();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function y(){return(c.state||{idx:null}).idx}function b(){m="POP";let D=y(),$=D==null?null:D-p;p=D,d&&d({action:m,location:k.location,delta:$})}function E(D,$){m="PUSH";let H=ry(k.location,D,$);n&&n(H,D),p=y()+1;let F=P_(H,p),te=k.createHref(H);try{c.pushState(F,"",te)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;s.location.assign(te)}l&&d&&d({action:m,location:k.location,delta:1})}function I(D,$){m="REPLACE";let H=ry(k.location,D,$);n&&n(H,D),p=y();let F=P_(H,p),te=k.createHref(H);c.replaceState(F,"",te),l&&d&&d({action:m,location:k.location,delta:0})}function P(D){return bI(D)}let k={get action(){return m},get location(){return t(s,c)},listen(D){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(D_,b),d=D,()=>{s.removeEventListener(D_,b),d=null}},createHref(D){return e(s,D)},createURL:P,encodeLocation(D){let $=P(D);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:E,replace:I,go(D){return c.go(D)}};return k}function bI(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ct(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:ac(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function yT(t,e,n="/"){return _I(t,e,n,!1)}function _I(t,e,n,i){let s=typeof e=="string"?Ks(e):e,l=Qi(s.pathname||"/",n);if(l==null)return null;let c=vT(t);SI(c);let m=null;for(let d=0;m==null&&d<c.length;++d){let p=PI(l);m=OI(c[d],p,i)}return m}function vT(t,e=[],n=[],i=""){let s=(l,c,m)=>{let d={relativePath:m===void 0?l.path||"":m,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};d.relativePath.startsWith("/")&&(Ct(d.relativePath.startsWith(i),`Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(i.length));let p=Hi([i,d.relativePath]),y=n.concat(d);l.children&&l.children.length>0&&(Ct(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),vT(l.children,e,y,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:RI(p,l.index),routesMeta:y})};return t.forEach((l,c)=>{if(l.path===""||!l.path?.includes("?"))s(l,c);else for(let m of bT(l.path))s(l,c,m)}),e}function bT(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,s=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return s?[l,""]:[l];let c=bT(i.join("/")),m=[];return m.push(...c.map(d=>d===""?l:[l,d].join("/"))),s&&m.push(...c),m.map(d=>t.startsWith("/")&&d===""?"/":d)}function SI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:II(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var EI=/^:[\w-]+$/,TI=3,wI=2,xI=1,AI=10,CI=-2,M_=t=>t==="*";function RI(t,e){let n=t.split("/"),i=n.length;return n.some(M_)&&(i+=CI),e&&(i+=wI),n.filter(s=>!M_(s)).reduce((s,l)=>s+(EI.test(l)?TI:l===""?xI:AI),i)}function II(t,e){return t.length===e.length&&t.slice(0,-1).every((i,s)=>i===e[s])?t[t.length-1]-e[e.length-1]:0}function OI(t,e,n=!1){let{routesMeta:i}=t,s={},l="/",c=[];for(let m=0;m<i.length;++m){let d=i[m],p=m===i.length-1,y=l==="/"?e:e.slice(l.length)||"/",b=Qf({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},y),E=d.route;if(!b&&p&&n&&!i[i.length-1].route.index&&(b=Qf({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},y)),!b)return null;Object.assign(s,b.params),c.push({params:s,pathname:Hi([l,b.pathname]),pathnameBase:NI(Hi([l,b.pathnameBase])),route:E}),b.pathnameBase!=="/"&&(l=Hi([l,b.pathnameBase]))}return c}function Qf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=DI(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),m=s.slice(1);return{params:i.reduce((p,{paramName:y,isOptional:b},E)=>{if(y==="*"){let P=m[E]||"";c=l.slice(0,l.length-P.length).replace(/(.)\/+$/,"$1")}const I=m[E];return b&&!I?p[y]=void 0:p[y]=(I||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:t}}function DI(t,e=!1,n=!0){Mr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,m,d)=>(i.push({paramName:m,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function PI(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mr(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Qi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function MI(t,e="/"){let{pathname:n,search:i="",hash:s=""}=typeof t=="string"?Ks(t):t;return{pathname:n?n.startsWith("/")?n:kI(n,e):e,search:$I(i),hash:LI(s)}}function kI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function _g(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function VI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function _T(t){let e=VI(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function ST(t,e,n,i=!1){let s;typeof t=="string"?s=Ks(t):(s={...t},Ct(!s.pathname||!s.pathname.includes("?"),_g("?","pathname","search",s)),Ct(!s.pathname||!s.pathname.includes("#"),_g("#","pathname","hash",s)),Ct(!s.search||!s.search.includes("#"),_g("#","search","hash",s)));let l=t===""||s.pathname==="",c=l?"/":s.pathname,m;if(c==null)m=n;else{let b=e.length-1;if(!i&&c.startsWith("..")){let E=c.split("/");for(;E[0]==="..";)E.shift(),b-=1;s.pathname=E.join("/")}m=b>=0?e[b]:"/"}let d=MI(s,m),p=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(p||y)&&(d.pathname+="/"),d}var Hi=t=>t.join("/").replace(/\/\/+/g,"/"),NI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$I=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,LI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function jI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var ET=["POST","PUT","PATCH","DELETE"];new Set(ET);var UI=["GET",...ET];new Set(UI);var Sl=O.createContext(null);Sl.displayName="DataRouter";var Dd=O.createContext(null);Dd.displayName="DataRouterState";O.createContext(!1);var TT=O.createContext({isTransitioning:!1});TT.displayName="ViewTransition";var zI=O.createContext(new Map);zI.displayName="Fetchers";var BI=O.createContext(null);BI.displayName="Await";var ci=O.createContext(null);ci.displayName="Navigation";var bc=O.createContext(null);bc.displayName="Location";var hi=O.createContext({outlet:null,matches:[],isDataRoute:!1});hi.displayName="Route";var Yy=O.createContext(null);Yy.displayName="RouteError";function FI(t,{relative:e}={}){Ct(_c(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=O.useContext(ci),{hash:s,pathname:l,search:c}=Sc(t,{relative:e}),m=l;return n!=="/"&&(m=l==="/"?n:Hi([n,l])),i.createHref({pathname:m,search:c,hash:s})}function _c(){return O.useContext(bc)!=null}function Za(){return Ct(_c(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(bc).location}var wT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xT(t){O.useContext(ci).static||O.useLayoutEffect(t)}function HI(){let{isDataRoute:t}=O.useContext(hi);return t?a2():qI()}function qI(){Ct(_c(),"useNavigate() may be used only in the context of a <Router> component.");let t=O.useContext(Sl),{basename:e,navigator:n}=O.useContext(ci),{matches:i}=O.useContext(hi),{pathname:s}=Za(),l=JSON.stringify(_T(i)),c=O.useRef(!1);return xT(()=>{c.current=!0}),O.useCallback((d,p={})=>{if(Mr(c.current,wT),!c.current)return;if(typeof d=="number"){n.go(d);return}let y=ST(d,JSON.parse(l),s,p.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Hi([e,y.pathname])),(p.replace?n.replace:n.push)(y,p.state,p)},[e,n,l,s,t])}var GI=O.createContext(null);function QI(t){let e=O.useContext(hi).outlet;return e&&O.createElement(GI.Provider,{value:t},e)}function Sc(t,{relative:e}={}){let{matches:n}=O.useContext(hi),{pathname:i}=Za(),s=JSON.stringify(_T(n));return O.useMemo(()=>ST(t,JSON.parse(s),i,e==="path"),[t,s,i,e])}function YI(t,e){return AT(t,e)}function AT(t,e,n,i){Ct(_c(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=O.useContext(ci),{matches:l}=O.useContext(hi),c=l[l.length-1],m=c?c.params:{},d=c?c.pathname:"/",p=c?c.pathnameBase:"/",y=c&&c.route;{let $=y&&y.path||"";CT(d,!y||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let b=Za(),E;if(e){let $=typeof e=="string"?Ks(e):e;Ct(p==="/"||$.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${$.pathname}" was given in the \`location\` prop.`),E=$}else E=b;let I=E.pathname||"/",P=I;if(p!=="/"){let $=p.replace(/^\//,"").split("/");P="/"+I.replace(/^\//,"").split("/").slice($.length).join("/")}let k=yT(t,{pathname:P});Mr(y||k!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Mr(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=JI(k&&k.map($=>Object.assign({},$,{params:Object.assign({},m,$.params),pathname:Hi([p,s.encodeLocation?s.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?p:Hi([p,s.encodeLocation?s.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),l,n,i);return e&&D?O.createElement(bc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},D):D}function KI(){let t=i2(),e=jI(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:l},"ErrorBoundary")," or"," ",O.createElement("code",{style:l},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:s},n):null,c)}var XI=O.createElement(KI,null),WI=class extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?O.createElement(hi.Provider,{value:this.props.routeContext},O.createElement(Yy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ZI({routeContext:t,match:e,children:n}){let i=O.useContext(Sl);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),O.createElement(hi.Provider,{value:t},n)}function JI(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,l=n?.errors;if(l!=null){let d=s.findIndex(p=>p.route.id&&l?.[p.route.id]!==void 0);Ct(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,m=-1;if(n)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(m=d),p.route.id){let{loaderData:y,errors:b}=n,E=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!b||b[p.route.id]===void 0);if(p.route.lazy||E){c=!0,m>=0?s=s.slice(0,m+1):s=[s[0]];break}}}return s.reduceRight((d,p,y)=>{let b,E=!1,I=null,P=null;n&&(b=l&&p.route.id?l[p.route.id]:void 0,I=p.route.errorElement||XI,c&&(m<0&&y===0?(CT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,P=null):m===y&&(E=!0,P=p.route.hydrateFallbackElement||null)));let k=e.concat(s.slice(0,y+1)),D=()=>{let $;return b?$=I:E?$=P:p.route.Component?$=O.createElement(p.route.Component,null):p.route.element?$=p.route.element:$=d,O.createElement(ZI,{match:p,routeContext:{outlet:d,matches:k,isDataRoute:n!=null},children:$})};return n&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?O.createElement(WI,{location:n.location,revalidation:n.revalidation,component:I,error:b,children:D(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):D()},null)}function Ky(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function e2(t){let e=O.useContext(Sl);return Ct(e,Ky(t)),e}function t2(t){let e=O.useContext(Dd);return Ct(e,Ky(t)),e}function n2(t){let e=O.useContext(hi);return Ct(e,Ky(t)),e}function Xy(t){let e=n2(t),n=e.matches[e.matches.length-1];return Ct(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function r2(){return Xy("useRouteId")}function i2(){let t=O.useContext(Yy),e=t2("useRouteError"),n=Xy("useRouteError");return t!==void 0?t:e.errors?.[n]}function a2(){let{router:t}=e2("useNavigate"),e=Xy("useNavigate"),n=O.useRef(!1);return xT(()=>{n.current=!0}),O.useCallback(async(s,l={})=>{Mr(n.current,wT),n.current&&(typeof s=="number"?t.navigate(s):await t.navigate(s,{fromRouteId:e,...l}))},[t,e])}var k_={};function CT(t,e,n){!e&&!k_[t]&&(k_[t]=!0,Mr(!1,n))}O.memo(s2);function s2({routes:t,future:e,state:n}){return AT(t,void 0,n,e)}function RT(t){return QI(t.context)}function Pa(t){Ct(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function o2({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:s,static:l=!1}){Ct(!_c(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),m=O.useMemo(()=>({basename:c,navigator:s,static:l,future:{}}),[c,s,l]);typeof n=="string"&&(n=Ks(n));let{pathname:d="/",search:p="",hash:y="",state:b=null,key:E="default"}=n,I=O.useMemo(()=>{let P=Qi(d,c);return P==null?null:{location:{pathname:P,search:p,hash:y,state:b,key:E},navigationType:i}},[c,d,p,y,b,E,i]);return Mr(I!=null,`<Router basename="${c}"> is not able to match the URL "${d}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:O.createElement(ci.Provider,{value:m},O.createElement(bc.Provider,{children:e,value:I}))}function l2({children:t,location:e}){return YI(iy(t),e)}function iy(t,e=[]){let n=[];return O.Children.forEach(t,(i,s)=>{if(!O.isValidElement(i))return;let l=[...e,s];if(i.type===O.Fragment){n.push.apply(n,iy(i.props.children,l));return}Ct(i.type===Pa,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ct(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=iy(i.props.children,l)),n.push(c)}),n}var xf="get",Af="application/x-www-form-urlencoded";function Pd(t){return t!=null&&typeof t.tagName=="string"}function u2(t){return Pd(t)&&t.tagName.toLowerCase()==="button"}function c2(t){return Pd(t)&&t.tagName.toLowerCase()==="form"}function h2(t){return Pd(t)&&t.tagName.toLowerCase()==="input"}function f2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function d2(t,e){return t.button===0&&(!e||e==="_self")&&!f2(t)}var of=null;function m2(){if(of===null)try{new FormData(document.createElement("form"),0),of=!1}catch{of=!0}return of}var p2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sg(t){return t!=null&&!p2.has(t)?(Mr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Af}"`),null):t}function g2(t,e){let n,i,s,l,c;if(c2(t)){let m=t.getAttribute("action");i=m?Qi(m,e):null,n=t.getAttribute("method")||xf,s=Sg(t.getAttribute("enctype"))||Af,l=new FormData(t)}else if(u2(t)||h2(t)&&(t.type==="submit"||t.type==="image")){let m=t.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=t.getAttribute("formaction")||m.getAttribute("action");if(i=d?Qi(d,e):null,n=t.getAttribute("formmethod")||m.getAttribute("method")||xf,s=Sg(t.getAttribute("formenctype"))||Sg(m.getAttribute("enctype"))||Af,l=new FormData(m,t),!m2()){let{name:p,type:y,value:b}=t;if(y==="image"){let E=p?`${p}.`:"";l.append(`${E}x`,"0"),l.append(`${E}y`,"0")}else p&&l.append(p,b)}}else{if(Pd(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=xf,i=null,s=Af,c=t}return l&&s==="text/plain"&&(c=l,l=void 0),{action:i,method:n.toLowerCase(),encType:s,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Wy(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function y2(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&Qi(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function v2(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function b2(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function _2(t,e,n){let i=await Promise.all(t.map(async s=>{let l=e.routes[s.route.id];if(l){let c=await v2(l,n);return c.links?c.links():[]}return[]}));return w2(i.flat(1).filter(b2).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function V_(t,e,n,i,s,l){let c=(d,p)=>n[p]?d.route.id!==n[p].route.id:!0,m=(d,p)=>n[p].pathname!==d.pathname||n[p].route.path?.endsWith("*")&&n[p].params["*"]!==d.params["*"];return l==="assets"?e.filter((d,p)=>c(d,p)||m(d,p)):l==="data"?e.filter((d,p)=>{let y=i.routes[d.route.id];if(!y||!y.hasLoader)return!1;if(c(d,p)||m(d,p))return!0;if(d.route.shouldRevalidate){let b=d.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function S2(t,e,{includeHydrateFallback:n}={}){return E2(t.map(i=>{let s=e.routes[i.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function E2(t){return[...new Set(t)]}function T2(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function w2(t,e){let n=new Set;return new Set(e),t.reduce((i,s)=>{let l=JSON.stringify(T2(s));return n.has(l)||(n.add(l),i.push({key:l,link:s})),i},[])}function IT(){let t=O.useContext(Sl);return Wy(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function x2(){let t=O.useContext(Dd);return Wy(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Zy=O.createContext(void 0);Zy.displayName="FrameworkContext";function OT(){let t=O.useContext(Zy);return Wy(t,"You must render this element inside a <HydratedRouter> element"),t}function A2(t,e){let n=O.useContext(Zy),[i,s]=O.useState(!1),[l,c]=O.useState(!1),{onFocus:m,onBlur:d,onMouseEnter:p,onMouseLeave:y,onTouchStart:b}=e,E=O.useRef(null);O.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let k=$=>{$.forEach(H=>{c(H.isIntersecting)})},D=new IntersectionObserver(k,{threshold:.5});return E.current&&D.observe(E.current),()=>{D.disconnect()}}},[t]),O.useEffect(()=>{if(i){let k=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(k)}}},[i]);let I=()=>{s(!0)},P=()=>{s(!1),c(!1)};return n?t!=="intent"?[l,E,{}]:[l,E,{onFocus:Uu(m,I),onBlur:Uu(d,P),onMouseEnter:Uu(p,I),onMouseLeave:Uu(y,P),onTouchStart:Uu(b,I)}]:[!1,E,{}]}function Uu(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function C2({page:t,...e}){let{router:n}=IT(),i=O.useMemo(()=>yT(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?O.createElement(I2,{page:t,matches:i,...e}):null}function R2(t){let{manifest:e,routeModules:n}=OT(),[i,s]=O.useState([]);return O.useEffect(()=>{let l=!1;return _2(t,e,n).then(c=>{l||s(c)}),()=>{l=!0}},[t,e,n]),i}function I2({page:t,matches:e,...n}){let i=Za(),{manifest:s,routeModules:l}=OT(),{basename:c}=IT(),{loaderData:m,matches:d}=x2(),p=O.useMemo(()=>V_(t,e,d,s,i,"data"),[t,e,d,s,i]),y=O.useMemo(()=>V_(t,e,d,s,i,"assets"),[t,e,d,s,i]),b=O.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let P=new Set,k=!1;if(e.forEach($=>{let H=s.routes[$.route.id];!H||!H.hasLoader||(!p.some(F=>F.route.id===$.route.id)&&$.route.id in m&&l[$.route.id]?.shouldRevalidate||H.hasClientLoader?k=!0:P.add($.route.id))}),P.size===0)return[];let D=y2(t,c,"data");return k&&P.size>0&&D.searchParams.set("_routes",e.filter($=>P.has($.route.id)).map($=>$.route.id).join(",")),[D.pathname+D.search]},[c,m,i,s,p,e,t,l]),E=O.useMemo(()=>S2(y,s),[y,s]),I=R2(y);return O.createElement(O.Fragment,null,b.map(P=>O.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...n})),E.map(P=>O.createElement("link",{key:P,rel:"modulepreload",href:P,...n})),I.map(({key:P,link:k})=>O.createElement("link",{key:P,...k})))}function O2(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var DT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{DT&&(window.__reactRouterVersion="7.7.1")}catch{}function D2({basename:t,children:e,window:n}){let i=O.useRef();i.current==null&&(i.current=gI({window:n,v5Compat:!0}));let s=i.current,[l,c]=O.useState({action:s.action,location:s.location}),m=O.useCallback(d=>{O.startTransition(()=>c(d))},[c]);return O.useLayoutEffect(()=>s.listen(m),[s,m]),O.createElement(o2,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:s})}var PT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ks=O.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:s,reloadDocument:l,replace:c,state:m,target:d,to:p,preventScrollReset:y,viewTransition:b,...E},I){let{basename:P}=O.useContext(ci),k=typeof p=="string"&&PT.test(p),D,$=!1;if(typeof p=="string"&&k&&(D=p,DT))try{let x=new URL(window.location.href),M=p.startsWith("//")?new URL(x.protocol+p):new URL(p),V=Qi(M.pathname,P);M.origin===x.origin&&V!=null?p=V+M.search+M.hash:$=!0}catch{Mr(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=FI(p,{relative:s}),[F,te,L]=A2(i,E),K=V2(p,{replace:c,state:m,target:d,preventScrollReset:y,relative:s,viewTransition:b});function C(x){e&&e(x),x.defaultPrevented||K(x)}let w=O.createElement("a",{...E,...L,href:D||H,onClick:$||l?e:C,ref:O2(I,te),target:d,"data-discover":!k&&n==="render"?"true":void 0});return F&&!k?O.createElement(O.Fragment,null,w,O.createElement(C2,{page:H})):w});ks.displayName="Link";var P2=O.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:s=!1,style:l,to:c,viewTransition:m,children:d,...p},y){let b=Sc(c,{relative:p.relative}),E=Za(),I=O.useContext(Dd),{navigator:P,basename:k}=O.useContext(ci),D=I!=null&&U2(b)&&m===!0,$=P.encodeLocation?P.encodeLocation(b).pathname:b.pathname,H=E.pathname,F=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;n||(H=H.toLowerCase(),F=F?F.toLowerCase():null,$=$.toLowerCase()),F&&k&&(F=Qi(F,k)||F);const te=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let L=H===$||!s&&H.startsWith($)&&H.charAt(te)==="/",K=F!=null&&(F===$||!s&&F.startsWith($)&&F.charAt($.length)==="/"),C={isActive:L,isPending:K,isTransitioning:D},w=L?e:void 0,x;typeof i=="function"?x=i(C):x=[i,L?"active":null,K?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let M=typeof l=="function"?l(C):l;return O.createElement(ks,{...p,"aria-current":w,className:x,ref:y,style:M,to:c,viewTransition:m},typeof d=="function"?d(C):d)});P2.displayName="NavLink";var M2=O.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:s,state:l,method:c=xf,action:m,onSubmit:d,relative:p,preventScrollReset:y,viewTransition:b,...E},I)=>{let P=L2(),k=j2(m,{relative:p}),D=c.toLowerCase()==="get"?"get":"post",$=typeof m=="string"&&PT.test(m),H=F=>{if(d&&d(F),F.defaultPrevented)return;F.preventDefault();let te=F.nativeEvent.submitter,L=te?.getAttribute("formmethod")||c;P(te||F.currentTarget,{fetcherKey:e,method:L,navigate:n,replace:s,state:l,relative:p,preventScrollReset:y,viewTransition:b})};return O.createElement("form",{ref:I,method:D,action:k,onSubmit:i?d:H,...E,"data-discover":!$&&t==="render"?"true":void 0})});M2.displayName="Form";function k2(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function MT(t){let e=O.useContext(Sl);return Ct(e,k2(t)),e}function V2(t,{target:e,replace:n,state:i,preventScrollReset:s,relative:l,viewTransition:c}={}){let m=HI(),d=Za(),p=Sc(t,{relative:l});return O.useCallback(y=>{if(d2(y,e)){y.preventDefault();let b=n!==void 0?n:ac(d)===ac(p);m(t,{replace:b,state:i,preventScrollReset:s,relative:l,viewTransition:c})}},[d,m,p,n,i,e,t,s,l,c])}var N2=0,$2=()=>`__${String(++N2)}__`;function L2(){let{router:t}=MT("useSubmit"),{basename:e}=O.useContext(ci),n=r2();return O.useCallback(async(i,s={})=>{let{action:l,method:c,encType:m,formData:d,body:p}=g2(i,e);if(s.navigate===!1){let y=s.fetcherKey||$2();await t.fetch(y,n,s.action||l,{preventScrollReset:s.preventScrollReset,formData:d,body:p,formMethod:s.method||c,formEncType:s.encType||m,flushSync:s.flushSync})}else await t.navigate(s.action||l,{preventScrollReset:s.preventScrollReset,formData:d,body:p,formMethod:s.method||c,formEncType:s.encType||m,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[t,e,n])}function j2(t,{relative:e}={}){let{basename:n}=O.useContext(ci),i=O.useContext(hi);Ct(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),l={...Sc(t||".",{relative:e})},c=Za();if(t==null){l.search=c.search;let m=new URLSearchParams(l.search),d=m.getAll("index");if(d.some(y=>y==="")){m.delete("index"),d.filter(b=>b).forEach(b=>m.append("index",b));let y=m.toString();l.search=y?`?${y}`:""}}return(!t||t===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Hi([n,l.pathname])),ac(l)}function U2(t,{relative:e}={}){let n=O.useContext(TT);Ct(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=MT("useViewTransitionState"),s=Sc(t,{relative:e});if(!n.isTransitioning)return!1;let l=Qi(n.currentLocation.pathname,i)||n.currentLocation.pathname,c=Qi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Qf(s.pathname,c)!=null||Qf(s.pathname,l)!=null}var Eg={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function z2(){if(N_)return An;N_=1;var t=Qy();function e(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(d,p,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:b==null?null:""+b,children:d,containerInfo:p,implementation:y}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,An.createPortal=function(d,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return l(d,p,null,y)},An.flushSync=function(d){var p=c.T,y=i.p;try{if(c.T=null,i.p=2,d)return d()}finally{c.T=p,i.p=y,i.d.f()}},An.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(d,p))},An.prefetchDNS=function(d){typeof d=="string"&&i.d.D(d)},An.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var y=p.as,b=m(y,p.crossOrigin),E=typeof p.integrity=="string"?p.integrity:void 0,I=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?i.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:E,fetchPriority:I}):y==="script"&&i.d.X(d,{crossOrigin:b,integrity:E,fetchPriority:I,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=m(p.as,p.crossOrigin);i.d.M(d,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(d)},An.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,b=m(y,p.crossOrigin);i.d.L(d,y,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(d,p){if(typeof d=="string")if(p){var y=m(p.as,p.crossOrigin);i.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(d)},An.requestFormReset=function(d){i.d.r(d)},An.unstable_batchedUpdates=function(d,p){return d(p)},An.useFormState=function(d,p,y){return c.H.useFormState(d,p,y)},An.useFormStatus=function(){return c.H.useHostTransitionStatus()},An.version="19.1.1",An}var $_;function kT(){if($_)return Eg.exports;$_=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Eg.exports=z2(),Eg.exports}var VT=kT(),fn=function(){return fn=Object.assign||function(e){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},fn.apply(this,arguments)};function ol(t,e,n){if(n||arguments.length===2)for(var i=0,s=e.length,l;i<s;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return t.concat(l||Array.prototype.slice.call(e))}var bt="-ms-",Zu="-moz-",at="-webkit-",NT="comm",Md="rule",Jy="decl",B2="@import",$T="@keyframes",F2="@layer",LT=Math.abs,ev=String.fromCharCode,ay=Object.assign;function H2(t,e){return hn(t,0)^45?(((e<<2^hn(t,0))<<2^hn(t,1))<<2^hn(t,2))<<2^hn(t,3):0}function jT(t){return t.trim()}function $i(t,e){return(t=e.exec(t))?t[0]:t}function Le(t,e,n){return t.replace(e,n)}function Cf(t,e,n){return t.indexOf(e,n)}function hn(t,e){return t.charCodeAt(e)|0}function ll(t,e,n){return t.slice(e,n)}function Zr(t){return t.length}function UT(t){return t.length}function Gu(t,e){return e.push(t),t}function q2(t,e){return t.map(e).join("")}function L_(t,e){return t.filter(function(n){return!$i(n,e)})}var kd=1,ul=1,zT=0,_r=0,Ht=0,El="";function Vd(t,e,n,i,s,l,c,m){return{value:t,root:e,parent:n,type:i,props:s,children:l,line:kd,column:ul,length:c,return:"",siblings:m}}function Ma(t,e){return ay(Vd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Qo(t){for(;t.root;)t=Ma(t.root,{children:[t]});Gu(t,t.siblings)}function G2(){return Ht}function Q2(){return Ht=_r>0?hn(El,--_r):0,ul--,Ht===10&&(ul=1,kd--),Ht}function Or(){return Ht=_r<zT?hn(El,_r++):0,ul++,Ht===10&&(ul=1,kd++),Ht}function Ls(){return hn(El,_r)}function Rf(){return _r}function Nd(t,e){return ll(El,t,e)}function sy(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y2(t){return kd=ul=1,zT=Zr(El=t),_r=0,[]}function K2(t){return El="",t}function Tg(t){return jT(Nd(_r-1,oy(t===91?t+2:t===40?t+1:t)))}function X2(t){for(;(Ht=Ls())&&Ht<33;)Or();return sy(t)>2||sy(Ht)>3?"":" "}function W2(t,e){for(;--e&&Or()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return Nd(t,Rf()+(e<6&&Ls()==32&&Or()==32))}function oy(t){for(;Or();)switch(Ht){case t:return _r;case 34:case 39:t!==34&&t!==39&&oy(Ht);break;case 40:t===41&&oy(t);break;case 92:Or();break}return _r}function Z2(t,e){for(;Or()&&t+Ht!==57;)if(t+Ht===84&&Ls()===47)break;return"/*"+Nd(e,_r-1)+"*"+ev(t===47?t:Or())}function J2(t){for(;!sy(Ls());)Or();return Nd(t,_r)}function eO(t){return K2(If("",null,null,null,[""],t=Y2(t),0,[0],t))}function If(t,e,n,i,s,l,c,m,d){for(var p=0,y=0,b=c,E=0,I=0,P=0,k=1,D=1,$=1,H=0,F="",te=s,L=l,K=i,C=F;D;)switch(P=H,H=Or()){case 40:if(P!=108&&hn(C,b-1)==58){Cf(C+=Le(Tg(H),"&","&\f"),"&\f",LT(p?m[p-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:C+=Tg(H);break;case 9:case 10:case 13:case 32:C+=X2(P);break;case 92:C+=W2(Rf()-1,7);continue;case 47:switch(Ls()){case 42:case 47:Gu(tO(Z2(Or(),Rf()),e,n,d),d);break;default:C+="/"}break;case 123*k:m[p++]=Zr(C)*$;case 125*k:case 59:case 0:switch(H){case 0:case 125:D=0;case 59+y:$==-1&&(C=Le(C,/\f/g,"")),I>0&&Zr(C)-b&&Gu(I>32?U_(C+";",i,n,b-1,d):U_(Le(C," ","")+";",i,n,b-2,d),d);break;case 59:C+=";";default:if(Gu(K=j_(C,e,n,p,y,s,m,F,te=[],L=[],b,l),l),H===123)if(y===0)If(C,e,K,K,te,l,b,m,L);else switch(E===99&&hn(C,3)===110?100:E){case 100:case 108:case 109:case 115:If(t,K,K,i&&Gu(j_(t,K,K,0,0,s,m,F,s,te=[],b,L),L),s,L,b,m,i?te:L);break;default:If(C,K,K,K,[""],L,0,m,L)}}p=y=I=0,k=$=1,F=C="",b=c;break;case 58:b=1+Zr(C),I=P;default:if(k<1){if(H==123)--k;else if(H==125&&k++==0&&Q2()==125)continue}switch(C+=ev(H),H*k){case 38:$=y>0?1:(C+="\f",-1);break;case 44:m[p++]=(Zr(C)-1)*$,$=1;break;case 64:Ls()===45&&(C+=Tg(Or())),E=Ls(),y=b=Zr(F=C+=J2(Rf())),H++;break;case 45:P===45&&Zr(C)==2&&(k=0)}}return l}function j_(t,e,n,i,s,l,c,m,d,p,y,b){for(var E=s-1,I=s===0?l:[""],P=UT(I),k=0,D=0,$=0;k<i;++k)for(var H=0,F=ll(t,E+1,E=LT(D=c[k])),te=t;H<P;++H)(te=jT(D>0?I[H]+" "+F:Le(F,/&\f/g,I[H])))&&(d[$++]=te);return Vd(t,e,n,s===0?Md:m,d,p,y,b)}function tO(t,e,n,i){return Vd(t,e,n,NT,ev(G2()),ll(t,2,-2),0,i)}function U_(t,e,n,i,s){return Vd(t,e,n,Jy,ll(t,0,i),ll(t,i+1,-1),i,s)}function BT(t,e,n){switch(H2(t,e)){case 5103:return at+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return at+t+t;case 4789:return Zu+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return at+t+Zu+t+bt+t+t;case 5936:switch(hn(t,e+11)){case 114:return at+t+bt+Le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return at+t+bt+Le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return at+t+bt+Le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return at+t+bt+t+t;case 6165:return at+t+bt+"flex-"+t+t;case 5187:return at+t+Le(t,/(\w+).+(:[^]+)/,at+"box-$1$2"+bt+"flex-$1$2")+t;case 5443:return at+t+bt+"flex-item-"+Le(t,/flex-|-self/g,"")+($i(t,/flex-|baseline/)?"":bt+"grid-row-"+Le(t,/flex-|-self/g,""))+t;case 4675:return at+t+bt+"flex-line-pack"+Le(t,/align-content|flex-|-self/g,"")+t;case 5548:return at+t+bt+Le(t,"shrink","negative")+t;case 5292:return at+t+bt+Le(t,"basis","preferred-size")+t;case 6060:return at+"box-"+Le(t,"-grow","")+at+t+bt+Le(t,"grow","positive")+t;case 4554:return at+Le(t,/([^-])(transform)/g,"$1"+at+"$2")+t;case 6187:return Le(Le(Le(t,/(zoom-|grab)/,at+"$1"),/(image-set)/,at+"$1"),t,"")+t;case 5495:case 3959:return Le(t,/(image-set\([^]*)/,at+"$1$`$1");case 4968:return Le(Le(t,/(.+:)(flex-)?(.*)/,at+"box-pack:$3"+bt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+at+t+t;case 4200:if(!$i(t,/flex-|baseline/))return bt+"grid-column-align"+ll(t,e)+t;break;case 2592:case 3360:return bt+Le(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,s){return e=s,$i(i.props,/grid-\w+-end/)})?~Cf(t+(n=n[e].value),"span",0)?t:bt+Le(t,"-start","")+t+bt+"grid-row-span:"+(~Cf(n,"span",0)?$i(n,/\d+/):+$i(n,/\d+/)-+$i(t,/\d+/))+";":bt+Le(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return $i(i.props,/grid-\w+-start/)})?t:bt+Le(Le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Le(t,/(.+)-inline(.+)/,at+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zr(t)-1-e>6)switch(hn(t,e+1)){case 109:if(hn(t,e+4)!==45)break;case 102:return Le(t,/(.+:)(.+)-([^]+)/,"$1"+at+"$2-$3$1"+Zu+(hn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Cf(t,"stretch",0)?BT(Le(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,s,l,c,m,d,p){return bt+s+":"+l+p+(c?bt+s+"-span:"+(m?d:+d-+l)+p:"")+t});case 4949:if(hn(t,e+6)===121)return Le(t,":",":"+at)+t;break;case 6444:switch(hn(t,hn(t,14)===45?18:11)){case 120:return Le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+at+(hn(t,14)===45?"inline-":"")+"box$3$1"+at+"$2$3$1"+bt+"$2box$3")+t;case 100:return Le(t,":",":"+bt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Le(t,"scroll-","scroll-snap-")+t}return t}function Yf(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function nO(t,e,n,i){switch(t.type){case F2:if(t.children.length)break;case B2:case Jy:return t.return=t.return||t.value;case NT:return"";case $T:return t.return=t.value+"{"+Yf(t.children,i)+"}";case Md:if(!Zr(t.value=t.props.join(",")))return""}return Zr(n=Yf(t.children,i))?t.return=t.value+"{"+n+"}":""}function rO(t){var e=UT(t);return function(n,i,s,l){for(var c="",m=0;m<e;m++)c+=t[m](n,i,s,l)||"";return c}}function iO(t){return function(e){e.root||(e=e.return)&&t(e)}}function aO(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case Jy:t.return=BT(t.value,t.length,n);return;case $T:return Yf([Ma(t,{value:Le(t.value,"@","@"+at)})],i);case Md:if(t.length)return q2(n=t.props,function(s){switch($i(s,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Qo(Ma(t,{props:[Le(s,/:(read-\w+)/,":"+Zu+"$1")]})),Qo(Ma(t,{props:[s]})),ay(t,{props:L_(n,i)});break;case"::placeholder":Qo(Ma(t,{props:[Le(s,/:(plac\w+)/,":"+at+"input-$1")]})),Qo(Ma(t,{props:[Le(s,/:(plac\w+)/,":"+Zu+"$1")]})),Qo(Ma(t,{props:[Le(s,/:(plac\w+)/,bt+"input-$1")]})),Qo(Ma(t,{props:[s]})),ay(t,{props:L_(n,i)});break}return""})}}var sO={},tr={},cl=typeof process<"u"&&tr!==void 0&&(tr.REACT_APP_SC_ATTR||tr.SC_ATTR)||"data-styled",FT="active",HT="data-styled-version",$d="6.1.19",tv=`/*!sc*/
`,Kf=typeof window<"u"&&typeof document<"u",oO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&tr!==void 0&&tr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&tr.REACT_APP_SC_DISABLE_SPEEDY!==""?tr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&tr.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&tr!==void 0&&tr.SC_DISABLE_SPEEDY!==void 0&&tr.SC_DISABLE_SPEEDY!==""&&tr.SC_DISABLE_SPEEDY!=="false"&&tr.SC_DISABLE_SPEEDY),lO={},Ld=Object.freeze([]),hl=Object.freeze({});function qT(t,e,n){return n===void 0&&(n=hl),t.theme!==n.theme&&t.theme||e||n.theme}var GT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),uO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cO=/(^-|-$)/g;function z_(t){return t.replace(uO,"-").replace(cO,"")}var hO=/(a)(d)/gi,lf=52,B_=function(t){return String.fromCharCode(t+(t>25?39:97))};function ly(t){var e,n="";for(e=Math.abs(t);e>lf;e=e/lf|0)n=B_(e%lf)+n;return(B_(e%lf)+n).replace(hO,"$1-$2")}var wg,QT=5381,Jo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},YT=function(t){return Jo(QT,t)};function nv(t){return ly(YT(t)>>>0)}function fO(t){return t.displayName||t.name||"Component"}function xg(t){return typeof t=="string"&&!0}var KT=typeof Symbol=="function"&&Symbol.for,XT=KT?Symbol.for("react.memo"):60115,dO=KT?Symbol.for("react.forward_ref"):60112,mO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pO={},WT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gO=((wg={})[dO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wg[XT]=WT,wg);function F_(t){return("type"in(e=t)&&e.type.$$typeof)===XT?WT:"$$typeof"in t?gO[t.$$typeof]:mO;var e}var yO=Object.defineProperty,vO=Object.getOwnPropertyNames,H_=Object.getOwnPropertySymbols,bO=Object.getOwnPropertyDescriptor,_O=Object.getPrototypeOf,q_=Object.prototype;function ZT(t,e,n){if(typeof e!="string"){if(q_){var i=_O(e);i&&i!==q_&&ZT(t,i,n)}var s=vO(e);H_&&(s=s.concat(H_(e)));for(var l=F_(t),c=F_(e),m=0;m<s.length;++m){var d=s[m];if(!(d in pO||n&&n[d]||c&&d in c||l&&d in l)){var p=bO(e,d);try{yO(t,d,p)}catch{}}}}return t}function zs(t){return typeof t=="function"}function rv(t){return typeof t=="object"&&"styledComponentId"in t}function Vs(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Xf(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function sc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function uy(t,e,n){if(n===void 0&&(n=!1),!n&&!sc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=uy(t[i],e[i]);else if(sc(e))for(var i in e)t[i]=uy(t[i],e[i]);return t}function iv(t,e){Object.defineProperty(t,"toString",{value:e})}function Bs(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var SO=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,l=s;e>=l;)if((l<<=1)<0)throw Bs(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=s;c<l;c++)this.groupSizes[c]=0}for(var m=this.indexOfGroup(e+1),d=(c=0,n.length);c<d;c++)this.tag.insertRule(m,n[c])&&(this.groupSizes[e]++,m++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),s=i+n;this.groupSizes[e]=0;for(var l=i;l<s;l++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i,c=s;c<l;c++)n+="".concat(this.tag.getRule(c)).concat(tv);return n},t}(),Of=new Map,Wf=new Map,Df=1,uf=function(t){if(Of.has(t))return Of.get(t);for(;Wf.has(Df);)Df++;var e=Df++;return Of.set(t,e),Wf.set(e,t),e},EO=function(t,e){Df=e+1,Of.set(t,e),Wf.set(e,t)},TO="style[".concat(cl,"][").concat(HT,'="').concat($d,'"]'),wO=new RegExp("^".concat(cl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xO=function(t,e,n){for(var i,s=n.split(","),l=0,c=s.length;l<c;l++)(i=s[l])&&t.registerName(e,i)},AO=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(tv),s=[],l=0,c=i.length;l<c;l++){var m=i[l].trim();if(m){var d=m.match(wO);if(d){var p=0|parseInt(d[1],10),y=d[2];p!==0&&(EO(y,p),xO(t,y,d[3]),t.getTag().insertRules(p,s)),s.length=0}else s.push(m)}}},G_=function(t){for(var e=document.querySelectorAll(TO),n=0,i=e.length;n<i;n++){var s=e[n];s&&s.getAttribute(cl)!==FT&&(AO(t,s),s.parentNode&&s.parentNode.removeChild(s))}};function CO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var JT=function(t){var e=document.head,n=t||e,i=document.createElement("style"),s=function(m){var d=Array.from(m.querySelectorAll("style[".concat(cl,"]")));return d[d.length-1]}(n),l=s!==void 0?s.nextSibling:null;i.setAttribute(cl,FT),i.setAttribute(HT,$d);var c=CO();return c&&i.setAttribute("nonce",c),n.insertBefore(i,l),i},RO=function(){function t(e){this.element=JT(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,s=0,l=i.length;s<l;s++){var c=i[s];if(c.ownerNode===n)return c}throw Bs(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),IO=function(){function t(e){this.element=JT(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),OO=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Q_=Kf,DO={isServer:!Kf,useCSSOMInjection:!oO},Zf=function(){function t(e,n,i){e===void 0&&(e=hl),n===void 0&&(n={});var s=this;this.options=fn(fn({},DO),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Kf&&Q_&&(Q_=!1,G_(this)),iv(this,function(){return function(l){for(var c=l.getTag(),m=c.length,d="",p=function(b){var E=function($){return Wf.get($)}(b);if(E===void 0)return"continue";var I=l.names.get(E),P=c.getGroup(b);if(I===void 0||!I.size||P.length===0)return"continue";var k="".concat(cl,".g").concat(b,'[id="').concat(E,'"]'),D="";I!==void 0&&I.forEach(function($){$.length>0&&(D+="".concat($,","))}),d+="".concat(P).concat(k,'{content:"').concat(D,'"}').concat(tv)},y=0;y<m;y++)p(y);return d}(s)})}return t.registerId=function(e){return uf(e)},t.prototype.rehydrate=function(){!this.server&&Kf&&G_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(fn(fn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,s=n.target;return n.isServer?new OO(s):i?new RO(s):new IO(s)}(this.options),new SO(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(uf(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(uf(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(uf(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),PO=/&/g,MO=/^\s*\/\/.*$/gm;function ew(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ew(n.children,e)),n})}function kO(t){var e,n,i,s=hl,l=s.options,c=l===void 0?hl:l,m=s.plugins,d=m===void 0?Ld:m,p=function(E,I,P){return P.startsWith(n)&&P.endsWith(n)&&P.replaceAll(n,"").length>0?".".concat(e):E},y=d.slice();y.push(function(E){E.type===Md&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(PO,n).replace(i,p))}),c.prefix&&y.push(aO),y.push(nO);var b=function(E,I,P,k){I===void 0&&(I=""),P===void 0&&(P=""),k===void 0&&(k="&"),e=k,n=I,i=new RegExp("\\".concat(n,"\\b"),"g");var D=E.replace(MO,""),$=eO(P||I?"".concat(P," ").concat(I," { ").concat(D," }"):D);c.namespace&&($=ew($,c.namespace));var H=[];return Yf($,rO(y.concat(iO(function(F){return H.push(F)})))),H};return b.hash=d.length?d.reduce(function(E,I){return I.name||Bs(15),Jo(E,I.name)},QT).toString():"",b}var VO=new Zf,cy=kO(),tw=en.createContext({shouldForwardProp:void 0,styleSheet:VO,stylis:cy});tw.Consumer;en.createContext(void 0);function hy(){return O.useContext(tw)}var nw=function(){function t(e,n){var i=this;this.inject=function(s,l){l===void 0&&(l=cy);var c=i.name+l.hash;s.hasNameForId(i.id,c)||s.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,iv(this,function(){throw Bs(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=cy),this.name+e.hash},t}(),NO=function(t){return t>="A"&&t<="Z"};function Y_(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;NO(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var rw=function(t){return t==null||t===!1||t===""},iw=function(t){var e,n,i=[];for(var s in t){var l=t[s];t.hasOwnProperty(s)&&!rw(l)&&(Array.isArray(l)&&l.isCss||zs(l)?i.push("".concat(Y_(s),":"),l,";"):sc(l)?i.push.apply(i,ol(ol(["".concat(s," {")],iw(l),!1),["}"],!1)):i.push("".concat(Y_(s),": ").concat((e=s,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in sO||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function ja(t,e,n,i){if(rw(t))return[];if(rv(t))return[".".concat(t.styledComponentId)];if(zs(t)){if(!zs(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var s=t(e);return ja(s,e,n,i)}var l;return t instanceof nw?n?(t.inject(n,i),[t.getName(i)]):[t]:sc(t)?iw(t):Array.isArray(t)?Array.prototype.concat.apply(Ld,t.map(function(c){return ja(c,e,n,i)})):[t.toString()]}function aw(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(zs(n)&&!rv(n))return!1}return!0}var $O=YT($d),LO=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&aw(e),this.componentId=n,this.baseHash=Jo($O,n),this.baseStyle=i,Zf.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))s=Vs(s,this.staticRulesId);else{var l=Xf(ja(this.rules,e,n,i)),c=ly(Jo(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,c)){var m=i(l,".".concat(c),void 0,this.componentId);n.insertRules(this.componentId,c,m)}s=Vs(s,c),this.staticRulesId=c}else{for(var d=Jo(this.baseHash,i.hash),p="",y=0;y<this.rules.length;y++){var b=this.rules[y];if(typeof b=="string")p+=b;else if(b){var E=Xf(ja(b,e,n,i));d=Jo(d,E+y),p+=E}}if(p){var I=ly(d>>>0);n.hasNameForId(this.componentId,I)||n.insertRules(this.componentId,I,i(p,".".concat(I),void 0,this.componentId)),s=Vs(s,I)}}return s},t}(),oc=en.createContext(void 0);oc.Consumer;function jO(t){var e=en.useContext(oc),n=O.useMemo(function(){return function(i,s){if(!i)throw Bs(14);if(zs(i)){var l=i(s);return l}if(Array.isArray(i)||typeof i!="object")throw Bs(8);return s?fn(fn({},s),i):i}(t.theme,e)},[t.theme,e]);return t.children?en.createElement(oc.Provider,{value:n},t.children):null}var Ag={};function UO(t,e,n){var i=rv(t),s=t,l=!xg(t),c=e.attrs,m=c===void 0?Ld:c,d=e.componentId,p=d===void 0?function(te,L){var K=typeof te!="string"?"sc":z_(te);Ag[K]=(Ag[K]||0)+1;var C="".concat(K,"-").concat(nv($d+K+Ag[K]));return L?"".concat(L,"-").concat(C):C}(e.displayName,e.parentComponentId):d,y=e.displayName,b=y===void 0?function(te){return xg(te)?"styled.".concat(te):"Styled(".concat(fO(te),")")}(t):y,E=e.displayName&&e.componentId?"".concat(z_(e.displayName),"-").concat(e.componentId):e.componentId||p,I=i&&s.attrs?s.attrs.concat(m).filter(Boolean):m,P=e.shouldForwardProp;if(i&&s.shouldForwardProp){var k=s.shouldForwardProp;if(e.shouldForwardProp){var D=e.shouldForwardProp;P=function(te,L){return k(te,L)&&D(te,L)}}else P=k}var $=new LO(n,E,i?s.componentStyle:void 0);function H(te,L){return function(K,C,w){var x=K.attrs,M=K.componentStyle,V=K.defaultProps,j=K.foldedComponentIds,N=K.styledComponentId,Me=K.target,fe=en.useContext(oc),X=hy(),ce=K.shouldForwardProp||X.shouldForwardProp,de=qT(C,fe,V)||hl,be=function(Te,ge,Qe){for(var Ve,_e=fn(fn({},ge),{className:void 0,theme:Qe}),Ze=0;Ze<Te.length;Ze+=1){var gt=zs(Ve=Te[Ze])?Ve(_e):Ve;for(var vt in gt)_e[vt]=vt==="className"?Vs(_e[vt],gt[vt]):vt==="style"?fn(fn({},_e[vt]),gt[vt]):gt[vt]}return ge.className&&(_e.className=Vs(_e.className,ge.className)),_e}(x,C,de),z=be.as||Me,J={};for(var ie in be)be[ie]===void 0||ie[0]==="$"||ie==="as"||ie==="theme"&&be.theme===de||(ie==="forwardedAs"?J.as=be.forwardedAs:ce&&!ce(ie,z)||(J[ie]=be[ie]));var ae=function(Te,ge){var Qe=hy(),Ve=Te.generateAndInjectStyles(ge,Qe.styleSheet,Qe.stylis);return Ve}(M,be),me=Vs(j,N);return ae&&(me+=" "+ae),be.className&&(me+=" "+be.className),J[xg(z)&&!GT.has(z)?"class":"className"]=me,w&&(J.ref=w),O.createElement(z,J)}(F,te,L)}H.displayName=b;var F=en.forwardRef(H);return F.attrs=I,F.componentStyle=$,F.displayName=b,F.shouldForwardProp=P,F.foldedComponentIds=i?Vs(s.foldedComponentIds,s.styledComponentId):"",F.styledComponentId=E,F.target=i?s.target:t,Object.defineProperty(F,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(te){this._foldedDefaultProps=i?function(L){for(var K=[],C=1;C<arguments.length;C++)K[C-1]=arguments[C];for(var w=0,x=K;w<x.length;w++)uy(L,x[w],!0);return L}({},s.defaultProps,te):te}}),iv(F,function(){return".".concat(F.styledComponentId)}),l&&ZT(F,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),F}function K_(t,e){for(var n=[t[0]],i=0,s=e.length;i<s;i+=1)n.push(e[i],t[i+1]);return n}var X_=function(t){return Object.assign(t,{isCss:!0})};function Et(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(zs(t)||sc(t))return X_(ja(K_(Ld,ol([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?ja(i):X_(ja(K_(i,e)))}function fy(t,e,n){if(n===void 0&&(n=hl),!e)throw Bs(1,e);var i=function(s){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return t(e,n,Et.apply(void 0,ol([s],l,!1)))};return i.attrs=function(s){return fy(t,e,fn(fn({},n),{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},i.withConfig=function(s){return fy(t,e,fn(fn({},n),s))},i}var sw=function(t){return fy(UO,t)},ne=sw;GT.forEach(function(t){ne[t]=sw(t)});var zO=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=aw(e),Zf.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,i,s){var l=s(Xf(ja(this.rules,n,i,s)),""),c=this.componentId+e;i.insertRules(c,c,l)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,i,s){e>2&&Zf.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,n,i,s)},t}();function BO(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=Et.apply(void 0,ol([t],e,!1)),s="sc-global-".concat(nv(JSON.stringify(i))),l=new zO(i,s),c=function(d){var p=hy(),y=en.useContext(oc),b=en.useRef(p.styleSheet.allocateGSInstance(s)).current;return p.styleSheet.server&&m(b,d,p.styleSheet,y,p.stylis),en.useLayoutEffect(function(){if(!p.styleSheet.server)return m(b,d,p.styleSheet,y,p.stylis),function(){return l.removeStyles(b,p.styleSheet)}},[b,d,p.styleSheet,y,p.stylis]),null};function m(d,p,y,b,E){if(l.isStatic)l.renderStyles(d,lO,y,E);else{var I=fn(fn({},p),{theme:qT(p,b,c.defaultProps)});l.renderStyles(d,I,y,E)}}return en.memo(c)}function Ln(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=Xf(Et.apply(void 0,ol([t],e,!1))),s=nv(i);return new nw(s,i)}const av=Ln`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,FO=Ln`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,HO=Ln`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`,qO=Ln`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,GO=Ln`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;Ln`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;Ln`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;Ln`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;Ln`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;Ln`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
`;const QO=Ln`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;Ln`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;Ln`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;const YO={small:Et`
    padding: ${t=>t.theme.spacing.xs} ${t=>t.theme.spacing.sm};
    font-size: ${t=>t.theme.typography.fontSize.sm};
    min-height: 32px;
  `,medium:Et`
    padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
    font-size: ${t=>t.theme.typography.fontSize.base};
    min-height: 40px;
  `,large:Et`
    padding: ${t=>t.theme.spacing.md} ${t=>t.theme.spacing.lg};
    font-size: ${t=>t.theme.typography.fontSize.lg};
    min-height: 48px;
  `},KO={primary:Et`
    background: ${t=>t.theme.colors.primary};
    color: ${t=>t.theme.colors.onPrimary};
    border: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.primary};

    &:hover:not(:disabled) {
      background: ${t=>t.theme.colors.primaryHover};
      border-color: ${t=>t.theme.colors.primaryHover};
    }

    &:active:not(:disabled) {
      background: ${t=>t.theme.colors.primaryPressed};
      border-color: ${t=>t.theme.colors.primaryPressed};
    }
  `,secondary:Et`
    background: transparent;
    color: ${t=>t.theme.colors.textPrimary};
    border: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.border};

    &:hover:not(:disabled) {
      background: ${t=>t.theme.colors.hover};
      border-color: ${t=>t.theme.colors.borderHover};
    }

    &:active:not(:disabled) {
      background: ${t=>t.theme.colors.pressed};
    }
  `,danger:Et`
    background: ${t=>t.theme.colors.error};
    color: ${t=>t.theme.colors.onPrimary};
    border: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.error};

    &:hover:not(:disabled) {
      background: ${t=>t.theme.colors.errorLight};
      border-color: ${t=>t.theme.colors.errorLight};
    }

    &:active:not(:disabled) {
      background: ${t=>t.theme.colors.errorDark};
      border-color: ${t=>t.theme.colors.errorDark};
    }
  `,ghost:Et`
    background: transparent;
    color: ${t=>t.theme.colors.textPrimary};
    border: ${t=>t.theme.spacing.xxs} solid transparent;

    &:hover:not(:disabled) {
      background: ${t=>t.theme.colors.hover};
    }

    &:active:not(:disabled) {
      background: ${t=>t.theme.colors.pressed};
    }
  `},pt=ne.button`
  /* Reset */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${t=>t.theme.spacing.xs};
  font-family: ${t=>t.theme.typography.fontFamily.sans};
  font-weight: ${t=>t.theme.typography.fontWeight.medium};
  border-radius: ${t=>t.theme.spacing.xs};
  cursor: pointer;
  user-select: none;
  transition: ${t=>t.theme.animations.transitions.default};
  white-space: nowrap;

  /* Size */
  ${t=>YO[t.size||"medium"]}

  /* Variant */
  ${t=>KO[t.variant||"primary"]}

  /* Full Width */
  ${t=>t.fullWidth&&Et`
    width: 100%;
  `}

  /* Disabled */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Loading */
  ${t=>t.isLoading&&Et`
    position: relative;
    color: transparent;
    pointer-events: none;

    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      top: 50%;
      left: 50%;
      margin-left: -8px;
      margin-top: -8px;
      border: ${e=>e.theme.spacing.xxs} solid currentColor;
      border-radius: 50%;
      border-right-color: transparent;
      animation: ${QO} 0.6s linear infinite;
    }
  `}

  /* Focus */
  &:focus-visible {
    outline: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.primary};
    outline-offset: ${t=>t.theme.spacing.xxs};
  }

  /* Mobile touch target */
  ${t=>t.theme.mediaQueries.maxMobile} {
    min-height: 44px;
  }
`;pt.defaultProps={variant:"primary",size:"medium",type:"button"};const XO="1.0.0",WO={version:XO},ZO=ne.footer`
  font-size: ${t=>t.theme.typography.fontSize.xs};
  text-align: center;
  padding: ${t=>t.theme.spacing.md};
  color: ${t=>t.theme.colors.textTertiary};
  margin-top: auto;
`,W_=ne.p`
  margin: ${t=>t.theme.spacing.xs} 0;
`;function JO(){return T.jsxs(ZO,{children:[T.jsx(W_,{children:"© 2025 Calculadora D'Leite. Todos os direitos reservados."}),T.jsxs(W_,{children:["Versão ",WO.version]})]})}const eD=()=>{};var Z_={};/**
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
 */const ow=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tD=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const l=t[n++];e[i++]=String.fromCharCode((s&31)<<6|l&63)}else if(s>239&&s<365){const l=t[n++],c=t[n++],m=t[n++],d=((s&7)<<18|(l&63)<<12|(c&63)<<6|m&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{const l=t[n++],c=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(l&63)<<6|c&63)}}return e.join("")},lw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const l=t[s],c=s+1<t.length,m=c?t[s+1]:0,d=s+2<t.length,p=d?t[s+2]:0,y=l>>2,b=(l&3)<<4|m>>4;let E=(m&15)<<2|p>>6,I=p&63;d||(I=64,c||(E=64)),i.push(n[y],n[b],n[E],n[I])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ow(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const l=n[t.charAt(s++)],m=s<t.length?n[t.charAt(s)]:0;++s;const p=s<t.length?n[t.charAt(s)]:64;++s;const b=s<t.length?n[t.charAt(s)]:64;if(++s,l==null||m==null||p==null||b==null)throw new nD;const E=l<<2|m>>4;if(i.push(E),p!==64){const I=m<<4&240|p>>2;if(i.push(I),b!==64){const P=p<<6&192|b;i.push(P)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rD=function(t){const e=ow(t);return lw.encodeByteArray(e,!0)},Jf=function(t){return rD(t).replace(/\./g,"")},uw=function(t){try{return lw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aD=()=>iD().__FIREBASE_DEFAULTS__,sD=()=>{if(typeof process>"u"||typeof Z_>"u")return;const t=Z_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uw(t[1]);return e&&JSON.parse(e)},jd=()=>{try{return eD()||aD()||sD()||oD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cw=t=>jd()?.emulatorHosts?.[t],lD=t=>{const e=cw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},hw=()=>jd()?.config,fw=t=>jd()?.[`_${t}`];/**
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
 */class uD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Tl(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dw(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function cD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Jf(JSON.stringify(n)),Jf(JSON.stringify(c)),""].join(".")}const Ju={};function hD(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ju))Ju[e]?t.emulator.push(e):t.prod.push(e);return t}function fD(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let J_=!1;function mw(t,e){if(typeof window>"u"||typeof document>"u"||!Tl(window.location.host)||Ju[t]===e||Ju[t]||J_)return;Ju[t]=e;function n(E){return`__firebase__banner__${E}`}const i="__firebase__banner",l=hD().prod.length>0;function c(){const E=document.getElementById(i);E&&E.remove()}function m(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function d(E,I){E.setAttribute("width","24"),E.setAttribute("id",I),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function p(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{J_=!0,c()},E}function y(E,I){E.setAttribute("id",I),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function b(){const E=fD(i),I=n("text"),P=document.getElementById(I)||document.createElement("span"),k=n("learnmore"),D=document.getElementById(k)||document.createElement("a"),$=n("preprendIcon"),H=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const F=E.element;m(F),y(D,k);const te=p();d(H,$),F.append(H,P,D,te),document.body.appendChild(F)}l?(P.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
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
 */function Pn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pn())}function mD(){const t=jd()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vD(){const t=Pn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bD(){return!mD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _D(){try{return typeof indexedDB=="object"}catch{return!1}}function SD(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const ED="FirebaseError";class ea extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ED,Object.setPrototypeOf(this,ea.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ec.prototype.create)}}class Ec{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,l=this.errors[e],c=l?TD(l,i):"Error",m=`${this.serviceName}: ${c} (${s}).`;return new ea(s,m,i)}}function TD(t,e){return t.replace(wD,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const wD=/\{\$([^}]+)}/g;function xD(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fs(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const l=t[s],c=e[s];if(eS(l)&&eS(c)){if(!Fs(l,c))return!1}else if(l!==c)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function eS(t){return t!==null&&typeof t=="object"}/**
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
 */function Tc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function AD(t,e){const n=new CD(t,e);return n.subscribe.bind(n)}class CD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");RD(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Cg),s.error===void 0&&(s.error=Cg),s.complete===void 0&&(s.complete=Cg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cg(){}/**
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
 */function Hn(t){return t&&t._delegate?t._delegate:t}class Hs{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ms="[DEFAULT]";/**
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
 */class ID{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new uD;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DD(e))try{this.getOrInitializeService({instanceIdentifier:Ms})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:s});i.resolve(l)}catch{}}}}clearInstance(e=Ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ms){return this.instances.has(e)}getOptions(e=Ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,c]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);i===m&&c.resolve(s)}return s}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const l=this.instances.get(i);return l&&e(l,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:OD(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ms){return this.component?this.component.multipleInstances?e:Ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OD(t){return t===Ms?void 0:t}function DD(t){return t.instantiationMode==="EAGER"}/**
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
 */class PD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ID(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var He;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(He||(He={}));const MD={debug:He.DEBUG,verbose:He.VERBOSE,info:He.INFO,warn:He.WARN,error:He.ERROR,silent:He.SILENT},kD=He.INFO,VD={[He.DEBUG]:"log",[He.VERBOSE]:"log",[He.INFO]:"info",[He.WARN]:"warn",[He.ERROR]:"error"},ND=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=VD[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sv{constructor(e){this.name=e,this._logLevel=kD,this._logHandler=ND,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in He))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,He.DEBUG,...e),this._logHandler(this,He.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,He.VERBOSE,...e),this._logHandler(this,He.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,He.INFO,...e),this._logHandler(this,He.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,He.WARN,...e),this._logHandler(this,He.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,He.ERROR,...e),this._logHandler(this,He.ERROR,...e)}}const $D=(t,e)=>e.some(n=>t instanceof n);let tS,nS;function LD(){return tS||(tS=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jD(){return nS||(nS=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pw=new WeakMap,dy=new WeakMap,gw=new WeakMap,Rg=new WeakMap,ov=new WeakMap;function UD(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",l),t.removeEventListener("error",c)},l=()=>{n(Ua(t.result)),s()},c=()=>{i(t.error),s()};t.addEventListener("success",l),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&pw.set(n,t)}).catch(()=>{}),ov.set(e,t),e}function zD(t){if(dy.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",c),t.removeEventListener("abort",c)},l=()=>{n(),s()},c=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",l),t.addEventListener("error",c),t.addEventListener("abort",c)});dy.set(t,e)}let my={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dy.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ua(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BD(t){my=t(my)}function FD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ig(this),e,...n);return gw.set(i,e.sort?e.sort():[e]),Ua(i)}:jD().includes(t)?function(...e){return t.apply(Ig(this),e),Ua(pw.get(this))}:function(...e){return Ua(t.apply(Ig(this),e))}}function HD(t){return typeof t=="function"?FD(t):(t instanceof IDBTransaction&&zD(t),$D(t,LD())?new Proxy(t,my):t)}function Ua(t){if(t instanceof IDBRequest)return UD(t);if(Rg.has(t))return Rg.get(t);const e=HD(t);return e!==t&&(Rg.set(t,e),ov.set(e,t)),e}const Ig=t=>ov.get(t);function qD(t,e,{blocked:n,upgrade:i,blocking:s,terminated:l}={}){const c=indexedDB.open(t,e),m=Ua(c);return i&&c.addEventListener("upgradeneeded",d=>{i(Ua(c.result),d.oldVersion,d.newVersion,Ua(c.transaction),d)}),n&&c.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),m.then(d=>{l&&d.addEventListener("close",()=>l()),s&&d.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),m}const GD=["get","getKey","getAll","getAllKeys","count"],QD=["put","add","delete","clear"],Og=new Map;function rS(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Og.get(e))return Og.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=QD.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||GD.includes(n)))return;const l=async function(c,...m){const d=this.transaction(c,s?"readwrite":"readonly");let p=d.store;return i&&(p=p.index(m.shift())),(await Promise.all([p[n](...m),s&&d.done]))[0]};return Og.set(e,l),l}BD(t=>({...t,get:(e,n,i)=>rS(e,n)||t.get(e,n,i),has:(e,n)=>!!rS(e,n)||t.has(e,n)}));/**
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
 */class YD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KD(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function KD(t){return t.getComponent()?.type==="VERSION"}const py="@firebase/app",iS="0.14.0";/**
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
 */const Yi=new sv("@firebase/app"),XD="@firebase/app-compat",WD="@firebase/analytics-compat",ZD="@firebase/analytics",JD="@firebase/app-check-compat",e4="@firebase/app-check",t4="@firebase/auth",n4="@firebase/auth-compat",r4="@firebase/database",i4="@firebase/data-connect",a4="@firebase/database-compat",s4="@firebase/functions",o4="@firebase/functions-compat",l4="@firebase/installations",u4="@firebase/installations-compat",c4="@firebase/messaging",h4="@firebase/messaging-compat",f4="@firebase/performance",d4="@firebase/performance-compat",m4="@firebase/remote-config",p4="@firebase/remote-config-compat",g4="@firebase/storage",y4="@firebase/storage-compat",v4="@firebase/firestore",b4="@firebase/ai",_4="@firebase/firestore-compat",S4="firebase",E4="12.0.0";/**
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
 */const gy="[DEFAULT]",T4={[py]:"fire-core",[XD]:"fire-core-compat",[ZD]:"fire-analytics",[WD]:"fire-analytics-compat",[e4]:"fire-app-check",[JD]:"fire-app-check-compat",[t4]:"fire-auth",[n4]:"fire-auth-compat",[r4]:"fire-rtdb",[i4]:"fire-data-connect",[a4]:"fire-rtdb-compat",[s4]:"fire-fn",[o4]:"fire-fn-compat",[l4]:"fire-iid",[u4]:"fire-iid-compat",[c4]:"fire-fcm",[h4]:"fire-fcm-compat",[f4]:"fire-perf",[d4]:"fire-perf-compat",[m4]:"fire-rc",[p4]:"fire-rc-compat",[g4]:"fire-gcs",[y4]:"fire-gcs-compat",[v4]:"fire-fst",[_4]:"fire-fst-compat",[b4]:"fire-vertex","fire-js":"fire-js",[S4]:"fire-js-all"};/**
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
 */const ed=new Map,w4=new Map,yy=new Map;function aS(t,e){try{t.container.addComponent(e)}catch(n){Yi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fl(t){const e=t.name;if(yy.has(e))return Yi.debug(`There were multiple attempts to register component ${e}.`),!1;yy.set(e,t);for(const n of ed.values())aS(n,t);for(const n of w4.values())aS(n,t);return!0}function lv(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Cr(t){return t==null?!1:t.settings!==void 0}/**
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
 */const x4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},za=new Ec("app","Firebase",x4);/**
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
 */class A4{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw za.create("app-deleted",{appName:this._name})}}/**
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
 */const wl=E4;function yw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:gy,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw za.create("bad-app-name",{appName:String(s)});if(n||(n=hw()),!n)throw za.create("no-options");const l=ed.get(s);if(l){if(Fs(n,l.options)&&Fs(i,l.config))return l;throw za.create("duplicate-app",{appName:s})}const c=new PD(s);for(const d of yy.values())c.addComponent(d);const m=new A4(n,i,c);return ed.set(s,m),m}function vw(t=gy){const e=ed.get(t);if(!e&&t===gy&&hw())return yw();if(!e)throw za.create("no-app",{appName:t});return e}function Ba(t,e,n){let i=T4[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),l=e.match(/\s|\//);if(s||l){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yi.warn(c.join(" "));return}fl(new Hs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const C4="firebase-heartbeat-database",R4=1,lc="firebase-heartbeat-store";let Dg=null;function bw(){return Dg||(Dg=qD(C4,R4,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(lc)}catch(n){console.warn(n)}}}}).catch(t=>{throw za.create("idb-open",{originalErrorMessage:t.message})})),Dg}async function I4(t){try{const n=(await bw()).transaction(lc),i=await n.objectStore(lc).get(_w(t));return await n.done,i}catch(e){if(e instanceof ea)Yi.warn(e.message);else{const n=za.create("idb-get",{originalErrorMessage:e?.message});Yi.warn(n.message)}}}async function sS(t,e){try{const i=(await bw()).transaction(lc,"readwrite");await i.objectStore(lc).put(e,_w(t)),await i.done}catch(n){if(n instanceof ea)Yi.warn(n.message);else{const i=za.create("idb-set",{originalErrorMessage:n?.message});Yi.warn(i.message)}}}function _w(t){return`${t.name}!${t.options.appId}`}/**
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
 */const O4=1024,D4=30;class P4{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new k4(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=oS();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>D4){const s=V4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Yi.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oS(),{heartbeatsToSend:n,unsentEntries:i}=M4(this._heartbeatsCache.heartbeats),s=Jf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Yi.warn(e),""}}}function oS(){return new Date().toISOString().substring(0,10)}function M4(t,e=O4){const n=[];let i=t.slice();for(const s of t){const l=n.find(c=>c.agent===s.agent);if(l){if(l.dates.push(s.date),lS(n)>e){l.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lS(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class k4{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _D()?SD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await I4(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return sS(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return sS(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lS(t){return Jf(JSON.stringify({version:2,heartbeats:t})).length}function V4(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function N4(t){fl(new Hs("platform-logger",e=>new YD(e),"PRIVATE")),fl(new Hs("heartbeat",e=>new P4(e),"PRIVATE")),Ba(py,iS,t),Ba(py,iS,"esm2020"),Ba("fire-js","")}N4("");var $4="firebase",L4="12.0.0";/**
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
 */Ba($4,L4,"app");var uS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fa,Sw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,w){function x(){}x.prototype=w.prototype,C.D=w.prototype,C.prototype=new x,C.prototype.constructor=C,C.C=function(M,V,j){for(var N=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)N[Me-2]=arguments[Me];return w.prototype[V].apply(M,N)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(C,w,x){x||(x=0);var M=Array(16);if(typeof w=="string")for(var V=0;16>V;++V)M[V]=w.charCodeAt(x++)|w.charCodeAt(x++)<<8|w.charCodeAt(x++)<<16|w.charCodeAt(x++)<<24;else for(V=0;16>V;++V)M[V]=w[x++]|w[x++]<<8|w[x++]<<16|w[x++]<<24;w=C.g[0],x=C.g[1],V=C.g[2];var j=C.g[3],N=w+(j^x&(V^j))+M[0]+3614090360&4294967295;w=x+(N<<7&4294967295|N>>>25),N=j+(V^w&(x^V))+M[1]+3905402710&4294967295,j=w+(N<<12&4294967295|N>>>20),N=V+(x^j&(w^x))+M[2]+606105819&4294967295,V=j+(N<<17&4294967295|N>>>15),N=x+(w^V&(j^w))+M[3]+3250441966&4294967295,x=V+(N<<22&4294967295|N>>>10),N=w+(j^x&(V^j))+M[4]+4118548399&4294967295,w=x+(N<<7&4294967295|N>>>25),N=j+(V^w&(x^V))+M[5]+1200080426&4294967295,j=w+(N<<12&4294967295|N>>>20),N=V+(x^j&(w^x))+M[6]+2821735955&4294967295,V=j+(N<<17&4294967295|N>>>15),N=x+(w^V&(j^w))+M[7]+4249261313&4294967295,x=V+(N<<22&4294967295|N>>>10),N=w+(j^x&(V^j))+M[8]+1770035416&4294967295,w=x+(N<<7&4294967295|N>>>25),N=j+(V^w&(x^V))+M[9]+2336552879&4294967295,j=w+(N<<12&4294967295|N>>>20),N=V+(x^j&(w^x))+M[10]+4294925233&4294967295,V=j+(N<<17&4294967295|N>>>15),N=x+(w^V&(j^w))+M[11]+2304563134&4294967295,x=V+(N<<22&4294967295|N>>>10),N=w+(j^x&(V^j))+M[12]+1804603682&4294967295,w=x+(N<<7&4294967295|N>>>25),N=j+(V^w&(x^V))+M[13]+4254626195&4294967295,j=w+(N<<12&4294967295|N>>>20),N=V+(x^j&(w^x))+M[14]+2792965006&4294967295,V=j+(N<<17&4294967295|N>>>15),N=x+(w^V&(j^w))+M[15]+1236535329&4294967295,x=V+(N<<22&4294967295|N>>>10),N=w+(V^j&(x^V))+M[1]+4129170786&4294967295,w=x+(N<<5&4294967295|N>>>27),N=j+(x^V&(w^x))+M[6]+3225465664&4294967295,j=w+(N<<9&4294967295|N>>>23),N=V+(w^x&(j^w))+M[11]+643717713&4294967295,V=j+(N<<14&4294967295|N>>>18),N=x+(j^w&(V^j))+M[0]+3921069994&4294967295,x=V+(N<<20&4294967295|N>>>12),N=w+(V^j&(x^V))+M[5]+3593408605&4294967295,w=x+(N<<5&4294967295|N>>>27),N=j+(x^V&(w^x))+M[10]+38016083&4294967295,j=w+(N<<9&4294967295|N>>>23),N=V+(w^x&(j^w))+M[15]+3634488961&4294967295,V=j+(N<<14&4294967295|N>>>18),N=x+(j^w&(V^j))+M[4]+3889429448&4294967295,x=V+(N<<20&4294967295|N>>>12),N=w+(V^j&(x^V))+M[9]+568446438&4294967295,w=x+(N<<5&4294967295|N>>>27),N=j+(x^V&(w^x))+M[14]+3275163606&4294967295,j=w+(N<<9&4294967295|N>>>23),N=V+(w^x&(j^w))+M[3]+4107603335&4294967295,V=j+(N<<14&4294967295|N>>>18),N=x+(j^w&(V^j))+M[8]+1163531501&4294967295,x=V+(N<<20&4294967295|N>>>12),N=w+(V^j&(x^V))+M[13]+2850285829&4294967295,w=x+(N<<5&4294967295|N>>>27),N=j+(x^V&(w^x))+M[2]+4243563512&4294967295,j=w+(N<<9&4294967295|N>>>23),N=V+(w^x&(j^w))+M[7]+1735328473&4294967295,V=j+(N<<14&4294967295|N>>>18),N=x+(j^w&(V^j))+M[12]+2368359562&4294967295,x=V+(N<<20&4294967295|N>>>12),N=w+(x^V^j)+M[5]+4294588738&4294967295,w=x+(N<<4&4294967295|N>>>28),N=j+(w^x^V)+M[8]+2272392833&4294967295,j=w+(N<<11&4294967295|N>>>21),N=V+(j^w^x)+M[11]+1839030562&4294967295,V=j+(N<<16&4294967295|N>>>16),N=x+(V^j^w)+M[14]+4259657740&4294967295,x=V+(N<<23&4294967295|N>>>9),N=w+(x^V^j)+M[1]+2763975236&4294967295,w=x+(N<<4&4294967295|N>>>28),N=j+(w^x^V)+M[4]+1272893353&4294967295,j=w+(N<<11&4294967295|N>>>21),N=V+(j^w^x)+M[7]+4139469664&4294967295,V=j+(N<<16&4294967295|N>>>16),N=x+(V^j^w)+M[10]+3200236656&4294967295,x=V+(N<<23&4294967295|N>>>9),N=w+(x^V^j)+M[13]+681279174&4294967295,w=x+(N<<4&4294967295|N>>>28),N=j+(w^x^V)+M[0]+3936430074&4294967295,j=w+(N<<11&4294967295|N>>>21),N=V+(j^w^x)+M[3]+3572445317&4294967295,V=j+(N<<16&4294967295|N>>>16),N=x+(V^j^w)+M[6]+76029189&4294967295,x=V+(N<<23&4294967295|N>>>9),N=w+(x^V^j)+M[9]+3654602809&4294967295,w=x+(N<<4&4294967295|N>>>28),N=j+(w^x^V)+M[12]+3873151461&4294967295,j=w+(N<<11&4294967295|N>>>21),N=V+(j^w^x)+M[15]+530742520&4294967295,V=j+(N<<16&4294967295|N>>>16),N=x+(V^j^w)+M[2]+3299628645&4294967295,x=V+(N<<23&4294967295|N>>>9),N=w+(V^(x|~j))+M[0]+4096336452&4294967295,w=x+(N<<6&4294967295|N>>>26),N=j+(x^(w|~V))+M[7]+1126891415&4294967295,j=w+(N<<10&4294967295|N>>>22),N=V+(w^(j|~x))+M[14]+2878612391&4294967295,V=j+(N<<15&4294967295|N>>>17),N=x+(j^(V|~w))+M[5]+4237533241&4294967295,x=V+(N<<21&4294967295|N>>>11),N=w+(V^(x|~j))+M[12]+1700485571&4294967295,w=x+(N<<6&4294967295|N>>>26),N=j+(x^(w|~V))+M[3]+2399980690&4294967295,j=w+(N<<10&4294967295|N>>>22),N=V+(w^(j|~x))+M[10]+4293915773&4294967295,V=j+(N<<15&4294967295|N>>>17),N=x+(j^(V|~w))+M[1]+2240044497&4294967295,x=V+(N<<21&4294967295|N>>>11),N=w+(V^(x|~j))+M[8]+1873313359&4294967295,w=x+(N<<6&4294967295|N>>>26),N=j+(x^(w|~V))+M[15]+4264355552&4294967295,j=w+(N<<10&4294967295|N>>>22),N=V+(w^(j|~x))+M[6]+2734768916&4294967295,V=j+(N<<15&4294967295|N>>>17),N=x+(j^(V|~w))+M[13]+1309151649&4294967295,x=V+(N<<21&4294967295|N>>>11),N=w+(V^(x|~j))+M[4]+4149444226&4294967295,w=x+(N<<6&4294967295|N>>>26),N=j+(x^(w|~V))+M[11]+3174756917&4294967295,j=w+(N<<10&4294967295|N>>>22),N=V+(w^(j|~x))+M[2]+718787259&4294967295,V=j+(N<<15&4294967295|N>>>17),N=x+(j^(V|~w))+M[9]+3951481745&4294967295,C.g[0]=C.g[0]+w&4294967295,C.g[1]=C.g[1]+(V+(N<<21&4294967295|N>>>11))&4294967295,C.g[2]=C.g[2]+V&4294967295,C.g[3]=C.g[3]+j&4294967295}i.prototype.u=function(C,w){w===void 0&&(w=C.length);for(var x=w-this.blockSize,M=this.B,V=this.h,j=0;j<w;){if(V==0)for(;j<=x;)s(this,C,j),j+=this.blockSize;if(typeof C=="string"){for(;j<w;)if(M[V++]=C.charCodeAt(j++),V==this.blockSize){s(this,M),V=0;break}}else for(;j<w;)if(M[V++]=C[j++],V==this.blockSize){s(this,M),V=0;break}}this.h=V,this.o+=w},i.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var w=1;w<C.length-8;++w)C[w]=0;var x=8*this.o;for(w=C.length-8;w<C.length;++w)C[w]=x&255,x/=256;for(this.u(C),C=Array(16),w=x=0;4>w;++w)for(var M=0;32>M;M+=8)C[x++]=this.g[w]>>>M&255;return C};function l(C,w){var x=m;return Object.prototype.hasOwnProperty.call(x,C)?x[C]:x[C]=w(C)}function c(C,w){this.h=w;for(var x=[],M=!0,V=C.length-1;0<=V;V--){var j=C[V]|0;M&&j==w||(x[V]=j,M=!1)}this.g=x}var m={};function d(C){return-128<=C&&128>C?l(C,function(w){return new c([w|0],0>w?-1:0)}):new c([C|0],0>C?-1:0)}function p(C){if(isNaN(C)||!isFinite(C))return b;if(0>C)return D(p(-C));for(var w=[],x=1,M=0;C>=x;M++)w[M]=C/x|0,x*=4294967296;return new c(w,0)}function y(C,w){if(C.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C.charAt(0)=="-")return D(y(C.substring(1),w));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=p(Math.pow(w,8)),M=b,V=0;V<C.length;V+=8){var j=Math.min(8,C.length-V),N=parseInt(C.substring(V,V+j),w);8>j?(j=p(Math.pow(w,j)),M=M.j(j).add(p(N))):(M=M.j(x),M=M.add(p(N)))}return M}var b=d(0),E=d(1),I=d(16777216);t=c.prototype,t.m=function(){if(k(this))return-D(this).m();for(var C=0,w=1,x=0;x<this.g.length;x++){var M=this.i(x);C+=(0<=M?M:4294967296+M)*w,w*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(P(this))return"0";if(k(this))return"-"+D(this).toString(C);for(var w=p(Math.pow(C,6)),x=this,M="";;){var V=te(x,w).g;x=$(x,V.j(w));var j=((0<x.g.length?x.g[0]:x.h)>>>0).toString(C);if(x=V,P(x))return j+M;for(;6>j.length;)j="0"+j;M=j+M}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function P(C){if(C.h!=0)return!1;for(var w=0;w<C.g.length;w++)if(C.g[w]!=0)return!1;return!0}function k(C){return C.h==-1}t.l=function(C){return C=$(this,C),k(C)?-1:P(C)?0:1};function D(C){for(var w=C.g.length,x=[],M=0;M<w;M++)x[M]=~C.g[M];return new c(x,~C.h).add(E)}t.abs=function(){return k(this)?D(this):this},t.add=function(C){for(var w=Math.max(this.g.length,C.g.length),x=[],M=0,V=0;V<=w;V++){var j=M+(this.i(V)&65535)+(C.i(V)&65535),N=(j>>>16)+(this.i(V)>>>16)+(C.i(V)>>>16);M=N>>>16,j&=65535,N&=65535,x[V]=N<<16|j}return new c(x,x[x.length-1]&-2147483648?-1:0)};function $(C,w){return C.add(D(w))}t.j=function(C){if(P(this)||P(C))return b;if(k(this))return k(C)?D(this).j(D(C)):D(D(this).j(C));if(k(C))return D(this.j(D(C)));if(0>this.l(I)&&0>C.l(I))return p(this.m()*C.m());for(var w=this.g.length+C.g.length,x=[],M=0;M<2*w;M++)x[M]=0;for(M=0;M<this.g.length;M++)for(var V=0;V<C.g.length;V++){var j=this.i(M)>>>16,N=this.i(M)&65535,Me=C.i(V)>>>16,fe=C.i(V)&65535;x[2*M+2*V]+=N*fe,H(x,2*M+2*V),x[2*M+2*V+1]+=j*fe,H(x,2*M+2*V+1),x[2*M+2*V+1]+=N*Me,H(x,2*M+2*V+1),x[2*M+2*V+2]+=j*Me,H(x,2*M+2*V+2)}for(M=0;M<w;M++)x[M]=x[2*M+1]<<16|x[2*M];for(M=w;M<2*w;M++)x[M]=0;return new c(x,0)};function H(C,w){for(;(C[w]&65535)!=C[w];)C[w+1]+=C[w]>>>16,C[w]&=65535,w++}function F(C,w){this.g=C,this.h=w}function te(C,w){if(P(w))throw Error("division by zero");if(P(C))return new F(b,b);if(k(C))return w=te(D(C),w),new F(D(w.g),D(w.h));if(k(w))return w=te(C,D(w)),new F(D(w.g),w.h);if(30<C.g.length){if(k(C)||k(w))throw Error("slowDivide_ only works with positive integers.");for(var x=E,M=w;0>=M.l(C);)x=L(x),M=L(M);var V=K(x,1),j=K(M,1);for(M=K(M,2),x=K(x,2);!P(M);){var N=j.add(M);0>=N.l(C)&&(V=V.add(x),j=N),M=K(M,1),x=K(x,1)}return w=$(C,V.j(w)),new F(V,w)}for(V=b;0<=C.l(w);){for(x=Math.max(1,Math.floor(C.m()/w.m())),M=Math.ceil(Math.log(x)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),j=p(x),N=j.j(w);k(N)||0<N.l(C);)x-=M,j=p(x),N=j.j(w);P(j)&&(j=E),V=V.add(j),C=$(C,N)}return new F(V,C)}t.A=function(C){return te(this,C).h},t.and=function(C){for(var w=Math.max(this.g.length,C.g.length),x=[],M=0;M<w;M++)x[M]=this.i(M)&C.i(M);return new c(x,this.h&C.h)},t.or=function(C){for(var w=Math.max(this.g.length,C.g.length),x=[],M=0;M<w;M++)x[M]=this.i(M)|C.i(M);return new c(x,this.h|C.h)},t.xor=function(C){for(var w=Math.max(this.g.length,C.g.length),x=[],M=0;M<w;M++)x[M]=this.i(M)^C.i(M);return new c(x,this.h^C.h)};function L(C){for(var w=C.g.length+1,x=[],M=0;M<w;M++)x[M]=C.i(M)<<1|C.i(M-1)>>>31;return new c(x,C.h)}function K(C,w){var x=w>>5;w%=32;for(var M=C.g.length-x,V=[],j=0;j<M;j++)V[j]=0<w?C.i(j+x)>>>w|C.i(j+x+1)<<32-w:C.i(j+x);return new c(V,C.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Sw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=p,c.fromString=y,Fa=c}).apply(typeof uS<"u"?uS:typeof self<"u"?self:typeof window<"u"?window:{});var cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ew,Qu,Tw,Pf,vy,ww,xw,Aw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,v,_){return h==Array.prototype||h==Object.prototype||(h[v]=_.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof cf=="object"&&cf];for(var v=0;v<h.length;++v){var _=h[v];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=n(this);function s(h,v){if(v)e:{var _=i;h=h.split(".");for(var R=0;R<h.length-1;R++){var G=h[R];if(!(G in _))break e;_=_[G]}h=h[h.length-1],R=_[h],v=v(R),v!=R&&v!=null&&e(_,h,{configurable:!0,writable:!0,value:v})}}function l(h,v){h instanceof String&&(h+="");var _=0,R=!1,G={next:function(){if(!R&&_<h.length){var ee=_++;return{value:v(ee,h[ee]),done:!1}}return R=!0,{done:!0,value:void 0}}};return G[Symbol.iterator]=function(){return G},G}s("Array.prototype.values",function(h){return h||function(){return l(this,function(v,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},m=this||self;function d(h){var v=typeof h;return v=v!="object"?v:h?Array.isArray(h)?"array":v:"null",v=="array"||v=="object"&&typeof h.length=="number"}function p(h){var v=typeof h;return v=="object"&&h!=null||v=="function"}function y(h,v,_){return h.call.apply(h.bind,arguments)}function b(h,v,_){if(!h)throw Error();if(2<arguments.length){var R=Array.prototype.slice.call(arguments,2);return function(){var G=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(G,R),h.apply(v,G)}}return function(){return h.apply(v,arguments)}}function E(h,v,_){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:b,E.apply(null,arguments)}function I(h,v){var _=Array.prototype.slice.call(arguments,1);return function(){var R=_.slice();return R.push.apply(R,arguments),h.apply(this,R)}}function P(h,v){function _(){}_.prototype=v.prototype,h.aa=v.prototype,h.prototype=new _,h.prototype.constructor=h,h.Qb=function(R,G,ee){for(var he=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)he[Ye-2]=arguments[Ye];return v.prototype[G].apply(R,he)}}function k(h){const v=h.length;if(0<v){const _=Array(v);for(let R=0;R<v;R++)_[R]=h[R];return _}return[]}function D(h,v){for(let _=1;_<arguments.length;_++){const R=arguments[_];if(d(R)){const G=h.length||0,ee=R.length||0;h.length=G+ee;for(let he=0;he<ee;he++)h[G+he]=R[he]}else h.push(R)}}class ${constructor(v,_){this.i=v,this.j=_,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function H(h){return/^[\s\xa0]*$/.test(h)}function F(){var h=m.navigator;return h&&(h=h.userAgent)?h:""}function te(h){return te[" "](h),h}te[" "]=function(){};var L=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function K(h,v,_){for(const R in h)v.call(_,h[R],R,h)}function C(h,v){for(const _ in h)v.call(void 0,h[_],_,h)}function w(h){const v={};for(const _ in h)v[_]=h[_];return v}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,v){let _,R;for(let G=1;G<arguments.length;G++){R=arguments[G];for(_ in R)h[_]=R[_];for(let ee=0;ee<x.length;ee++)_=x[ee],Object.prototype.hasOwnProperty.call(R,_)&&(h[_]=R[_])}}function V(h){var v=1;h=h.split(":");const _=[];for(;0<v&&h.length;)_.push(h.shift()),v--;return h.length&&_.push(h.join(":")),_}function j(h){m.setTimeout(()=>{throw h},0)}function N(){var h=be;let v=null;return h.g&&(v=h.g,h.g=h.g.next,h.g||(h.h=null),v.next=null),v}class Me{constructor(){this.h=this.g=null}add(v,_){const R=fe.get();R.set(v,_),this.h?this.h.next=R:this.g=R,this.h=R}}var fe=new $(()=>new X,h=>h.reset());class X{constructor(){this.next=this.g=this.h=null}set(v,_){this.h=v,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,de=!1,be=new Me,z=()=>{const h=m.Promise.resolve(void 0);ce=()=>{h.then(J)}};var J=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(_){j(_)}var v=fe;v.j(h),100>v.h&&(v.h++,h.next=v.g,v.g=h)}de=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(h,v){this.type=h,this.g=this.target=v,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var h=!1,v=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const _=()=>{};m.addEventListener("test",_,v),m.removeEventListener("test",_,v)}catch{}return h}();function Te(h,v){if(ae.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var _=this.type=h.type,R=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=v,v=h.relatedTarget){if(L){e:{try{te(v.nodeName);var G=!0;break e}catch{}G=!1}G||(v=null)}}else _=="mouseover"?v=h.fromElement:_=="mouseout"&&(v=h.toElement);this.relatedTarget=v,R?(this.clientX=R.clientX!==void 0?R.clientX:R.pageX,this.clientY=R.clientY!==void 0?R.clientY:R.pageY,this.screenX=R.screenX||0,this.screenY=R.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:ge[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Te.aa.h.call(this)}}P(Te,ae);var ge={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Qe="closure_listenable_"+(1e6*Math.random()|0),Ve=0;function _e(h,v,_,R,G){this.listener=h,this.proxy=null,this.src=v,this.type=_,this.capture=!!R,this.ha=G,this.key=++Ve,this.da=this.fa=!1}function Ze(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function gt(h){this.src=h,this.g={},this.h=0}gt.prototype.add=function(h,v,_,R,G){var ee=h.toString();h=this.g[ee],h||(h=this.g[ee]=[],this.h++);var he=dn(h,v,R,G);return-1<he?(v=h[he],_||(v.fa=!1)):(v=new _e(v,this.src,ee,!!R,G),v.fa=_,h.push(v)),v};function vt(h,v){var _=v.type;if(_ in h.g){var R=h.g[_],G=Array.prototype.indexOf.call(R,v,void 0),ee;(ee=0<=G)&&Array.prototype.splice.call(R,G,1),ee&&(Ze(v),h.g[_].length==0&&(delete h.g[_],h.h--))}}function dn(h,v,_,R){for(var G=0;G<h.length;++G){var ee=h[G];if(!ee.da&&ee.listener==v&&ee.capture==!!_&&ee.ha==R)return G}return-1}var It="closure_lm_"+(1e6*Math.random()|0),ir={};function Nc(h,v,_,R,G){if(Array.isArray(v)){for(var ee=0;ee<v.length;ee++)Nc(h,v[ee],_,R,G);return null}return _=$c(_),h&&h[Qe]?h.K(v,_,p(R)?!!R.capture:!1,G):ar(h,v,_,!1,R,G)}function ar(h,v,_,R,G,ee){if(!v)throw Error("Invalid event type");var he=p(G)?!!G.capture:!!G,Ye=to(h);if(Ye||(h[It]=Ye=new gt(h)),_=Ye.add(v,_,R,he,ee),_.proxy)return _;if(R=vm(),_.proxy=R,R.src=h,R.listener=_,h.addEventListener)me||(G=he),G===void 0&&(G=!1),h.addEventListener(v.toString(),R,G);else if(h.attachEvent)h.attachEvent(Ja(v.toString()),R);else if(h.addListener&&h.removeListener)h.addListener(R);else throw Error("addEventListener and attachEvent are unavailable.");return _}function vm(){function h(_){return v.call(h.src,h.listener,_)}const v=bm;return h}function Pl(h,v,_,R,G){if(Array.isArray(v))for(var ee=0;ee<v.length;ee++)Pl(h,v[ee],_,R,G);else R=p(R)?!!R.capture:!!R,_=$c(_),h&&h[Qe]?(h=h.i,v=String(v).toString(),v in h.g&&(ee=h.g[v],_=dn(ee,_,R,G),-1<_&&(Ze(ee[_]),Array.prototype.splice.call(ee,_,1),ee.length==0&&(delete h.g[v],h.h--)))):h&&(h=to(h))&&(v=h.g[v.toString()],h=-1,v&&(h=dn(v,_,R,G)),(_=-1<h?v[h]:null)&&eo(_))}function eo(h){if(typeof h!="number"&&h&&!h.da){var v=h.src;if(v&&v[Qe])vt(v.i,h);else{var _=h.type,R=h.proxy;v.removeEventListener?v.removeEventListener(_,R,h.capture):v.detachEvent?v.detachEvent(Ja(_),R):v.addListener&&v.removeListener&&v.removeListener(R),(_=to(v))?(vt(_,h),_.h==0&&(_.src=null,v[It]=null)):Ze(h)}}}function Ja(h){return h in ir?ir[h]:ir[h]="on"+h}function bm(h,v){if(h.da)h=!0;else{v=new Te(v,this);var _=h.listener,R=h.ha||h.src;h.fa&&eo(h),h=_.call(R,v)}return h}function to(h){return h=h[It],h instanceof gt?h:null}var Ml="__closure_events_fn_"+(1e9*Math.random()>>>0);function $c(h){return typeof h=="function"?h:(h[Ml]||(h[Ml]=function(v){return h.handleEvent(v)}),h[Ml])}function Ot(){ie.call(this),this.i=new gt(this),this.M=this,this.F=null}P(Ot,ie),Ot.prototype[Qe]=!0,Ot.prototype.removeEventListener=function(h,v,_,R){Pl(this,h,v,_,R)};function ot(h,v){var _,R=h.F;if(R)for(_=[];R;R=R.F)_.push(R);if(h=h.M,R=v.type||v,typeof v=="string")v=new ae(v,h);else if(v instanceof ae)v.target=v.target||h;else{var G=v;v=new ae(R,h),M(v,G)}if(G=!0,_)for(var ee=_.length-1;0<=ee;ee--){var he=v.g=_[ee];G=Gn(he,R,!0,v)&&G}if(he=v.g=h,G=Gn(he,R,!0,v)&&G,G=Gn(he,R,!1,v)&&G,_)for(ee=0;ee<_.length;ee++)he=v.g=_[ee],G=Gn(he,R,!1,v)&&G}Ot.prototype.N=function(){if(Ot.aa.N.call(this),this.i){var h=this.i,v;for(v in h.g){for(var _=h.g[v],R=0;R<_.length;R++)Ze(_[R]);delete h.g[v],h.h--}}this.F=null},Ot.prototype.K=function(h,v,_,R){return this.i.add(String(h),v,!1,_,R)},Ot.prototype.L=function(h,v,_,R){return this.i.add(String(h),v,!0,_,R)};function Gn(h,v,_,R){if(v=h.i.g[String(v)],!v)return!0;v=v.concat();for(var G=!0,ee=0;ee<v.length;++ee){var he=v[ee];if(he&&!he.da&&he.capture==_){var Ye=he.listener,Yt=he.ha||he.src;he.fa&&vt(h.i,he),G=Ye.call(Yt,R)!==!1&&G}}return G&&!R.defaultPrevented}function wn(h,v,_){if(typeof h=="function")_&&(h=E(h,_));else if(h&&typeof h.handleEvent=="function")h=E(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:m.setTimeout(h,v||0)}function Lc(h){h.g=wn(()=>{h.g=null,h.i&&(h.i=!1,Lc(h))},h.l);const v=h.h;h.h=null,h.m.apply(null,v)}class _m extends ie{constructor(v,_){super(),this.m=v,this.l=_,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:Lc(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(h){ie.call(this),this.h=h,this.g={}}P(es,ie);var ts=[];function ns(h){K(h.g,function(v,_){this.g.hasOwnProperty(_)&&eo(v)},h),h.g={}}es.prototype.N=function(){es.aa.N.call(this),ns(this)},es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Sr=m.JSON.stringify,no=m.JSON.parse,rs=class{stringify(h){return m.JSON.stringify(h,void 0)}parse(h){return m.JSON.parse(h,void 0)}};function kl(){}kl.prototype.h=null;function Vl(h){return h.h||(h.h=h.i())}function Nl(){}var fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function di(){ae.call(this,"d")}P(di,ae);function $l(){ae.call(this,"c")}P($l,ae);var kr={},Ll=null;function ra(){return Ll=Ll||new Ot}kr.La="serverreachability";function ro(h){ae.call(this,kr.La,h)}P(ro,ae);function ia(h){const v=ra();ot(v,new ro(v))}kr.STAT_EVENT="statevent";function jc(h,v){ae.call(this,kr.STAT_EVENT,h),this.stat=v}P(jc,ae);function Tt(h){const v=ra();ot(v,new jc(v,h))}kr.Ma="timingevent";function Qt(h,v){ae.call(this,kr.Ma,h),this.size=v}P(Qt,ae);function Lt(h,v){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){h()},v)}function sr(){this.g=!0}sr.prototype.xa=function(){this.g=!1};function jl(h,v,_,R,G,ee){h.info(function(){if(h.g)if(ee)for(var he="",Ye=ee.split("&"),Yt=0;Yt<Ye.length;Yt++){var Ke=Ye[Yt].split("=");if(1<Ke.length){var an=Ke[0];Ke=Ke[1];var Kt=an.split("_");he=2<=Kt.length&&Kt[1]=="type"?he+(an+"="+Ke+"&"):he+(an+"=redacted&")}}else he=null;else he=ee;return"XMLHTTP REQ ("+R+") [attempt "+G+"]: "+v+`
`+_+`
`+he})}function Sm(h,v,_,R,G,ee,he){h.info(function(){return"XMLHTTP RESP ("+R+") [ attempt "+G+"]: "+v+`
`+_+`
`+ee+" "+he})}function aa(h,v,_,R){h.info(function(){return"XMLHTTP TEXT ("+v+"): "+is(h,_)+(R?" "+R:"")})}function Uc(h,v){h.info(function(){return"TIMEOUT: "+v})}sr.prototype.info=function(){};function is(h,v){if(!h.g)return v;if(!v)return null;try{var _=JSON.parse(v);if(_){for(h=0;h<_.length;h++)if(Array.isArray(_[h])){var R=_[h];if(!(2>R.length)){var G=R[1];if(Array.isArray(G)&&!(1>G.length)){var ee=G[0];if(ee!="noop"&&ee!="stop"&&ee!="close")for(var he=1;he<G.length;he++)G[he]=""}}}}return Sr(_)}catch{return v}}var sa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vr;function Nr(){}P(Nr,kl),Nr.prototype.g=function(){return new XMLHttpRequest},Nr.prototype.i=function(){return{}},Vr=new Nr;function kn(h,v,_,R){this.j=h,this.i=v,this.l=_,this.R=R||1,this.U=new es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kt}function kt(){this.i=null,this.g="",this.h=!1}var Ul={},io={};function Er(h,v,_){h.L=1,h.v=us(Qn(v)),h.m=_,h.P=!0,pi(h,null)}function pi(h,v){h.F=Date.now(),as(h),h.A=Qn(h.v);var _=h.A,R=h.R;Array.isArray(R)||(R=[String(R)]),Gl(_.i,"t",R),h.C=0,_=h.j.J,h.h=new kt,h.g=nh(h.j,_?v:null,!h.m),0<h.O&&(h.M=new _m(E(h.Y,h,h.g),h.O)),v=h.U,_=h.g,R=h.ca;var G="readystatechange";Array.isArray(G)||(G&&(ts[0]=G.toString()),G=ts);for(var ee=0;ee<G.length;ee++){var he=Nc(_,G[ee],R||v.handleEvent,!1,v.h||v);if(!he)break;v.g[he.key]=he}v=h.H?w(h.H):{},h.m?(h.u||(h.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,v)):(h.u="GET",h.g.ea(h.A,h.u,null,v)),ia(),jl(h.i,h.u,h.A,h.l,h.R,h.m)}kn.prototype.ca=function(h){h=h.target;const v=this.M;v&&cr(h)==3?v.j():this.Y(h)},kn.prototype.Y=function(h){try{if(h==this.g)e:{const Kt=cr(this.g);var v=this.g.Ba();const Ti=this.g.Z();if(!(3>Kt)&&(Kt!=3||this.g&&(this.h.h||this.g.oa()||Yc(this.g)))){this.J||Kt!=4||v==7||(v==8||0>=Ti?ia(3):ia(2)),oa(this);var _=this.g.Z();this.X=_;t:if(zc(this)){var R=Yc(this.g);h="";var G=R.length,ee=cr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),$r(this);var he="";break t}this.h.i=new m.TextDecoder}for(v=0;v<G;v++)this.h.h=!0,h+=this.h.i.decode(R[v],{stream:!(ee&&v==G-1)});R.length=0,this.h.g+=h,this.C=0,he=this.h.g}else he=this.g.oa();if(this.o=_==200,Sm(this.i,this.u,this.A,this.l,this.R,Kt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Ye,Yt=this.g;if((Ye=Yt.g?Yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(Ye)){var Ke=Ye;break t}}Ke=null}if(_=Ke)aa(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ss(this,_);else{this.o=!1,this.s=3,Tt(12),mn(this),$r(this);break e}}if(this.P){_=!0;let pn;for(;!this.J&&this.C<he.length;)if(pn=Bc(this,he),pn==io){Kt==4&&(this.s=4,Tt(14),_=!1),aa(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==Ul){this.s=4,Tt(15),aa(this.i,this.l,he,"[Invalid Chunk]"),_=!1;break}else aa(this.i,this.l,pn,null),ss(this,pn);if(zc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Kt!=4||he.length!=0||this.h.h||(this.s=1,Tt(16),_=!1),this.o=this.o&&_,!_)aa(this.i,this.l,he,"[Invalid Chunked Response]"),mn(this),$r(this);else if(0<he.length&&!this.W){this.W=!0;var an=this.j;an.g==this&&an.ba&&!an.M&&(an.j.info("Great, no buffering proxy detected. Bytes received: "+he.length),ys(an),an.M=!0,Tt(11))}}else aa(this.i,this.l,he,null),ss(this,he);Kt==4&&mn(this),this.o&&!this.J&&(Kt==4?Jc(this.j,this):(this.o=!1,as(this)))}else Am(this.g),_==400&&0<he.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),mn(this),$r(this)}}}catch{}finally{}};function zc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Bc(h,v){var _=h.C,R=v.indexOf(`
`,_);return R==-1?io:(_=Number(v.substring(_,R)),isNaN(_)?Ul:(R+=1,R+_>v.length?io:(v=v.slice(R,R+_),h.C=R+_,v)))}kn.prototype.cancel=function(){this.J=!0,mn(this)};function as(h){h.S=Date.now()+h.I,Fc(h,h.I)}function Fc(h,v){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Lt(E(h.ba,h),v)}function oa(h){h.B&&(m.clearTimeout(h.B),h.B=null)}kn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Uc(this.i,this.A),this.L!=2&&(ia(),Tt(17)),mn(this),this.s=2,$r(this)):Fc(this,this.S-h)};function $r(h){h.j.G==0||h.J||Jc(h.j,h)}function mn(h){oa(h);var v=h.M;v&&typeof v.ma=="function"&&v.ma(),h.M=null,ns(h.U),h.g&&(v=h.g,h.g=null,v.abort(),v.ma())}function ss(h,v){try{var _=h.j;if(_.G!=0&&(_.g==h||zl(_.h,h))){if(!h.K&&zl(_.h,h)&&_.G==3){try{var R=_.Da.g.parse(v)}catch{R=null}if(Array.isArray(R)&&R.length==3){var G=R;if(G[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<h.F)yo(_),po(_);else break e;Wl(_),Tt(18)}}else _.za=G[1],0<_.za-_.T&&37500>G[2]&&_.F&&_.v==0&&!_.C&&(_.C=Lt(E(_.Za,_),6e3));if(1>=so(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ei(_,11)}else if((h.K||_.g==h)&&yo(_),!H(v))for(G=_.Da.g.parse(v),v=0;v<G.length;v++){let Ke=G[v];if(_.T=Ke[0],Ke=Ke[1],_.G==2)if(Ke[0]=="c"){_.K=Ke[1],_.ia=Ke[2];const an=Ke[3];an!=null&&(_.la=an,_.j.info("VER="+_.la));const Kt=Ke[4];Kt!=null&&(_.Aa=Kt,_.j.info("SVER="+_.Aa));const Ti=Ke[5];Ti!=null&&typeof Ti=="number"&&0<Ti&&(R=1.5*Ti,_.L=R,_.j.info("backChannelRequestTimeoutMs_="+R)),R=_;const pn=h.g;if(pn){const Hr=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hr){var ee=R.h;ee.g||Hr.indexOf("spdy")==-1&&Hr.indexOf("quic")==-1&&Hr.indexOf("h2")==-1||(ee.j=ee.l,ee.g=new Set,ee.h&&(oo(ee,ee.h),ee.h=null))}if(R.D){const Jl=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;Jl&&(R.ya=Jl,ct(R.I,R.D,Jl))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-h.F,_.j.info("Handshake RTT: "+_.R+"ms")),R=_;var he=h;if(R.qa=th(R,R.J?R.ia:null,R.W),he.K){Vn(R.h,he);var Ye=he,Yt=R.L;Yt&&(Ye.I=Yt),Ye.B&&(oa(Ye),as(Ye)),R.g=he}else Wc(R);0<_.i.length&&go(_)}else Ke[0]!="stop"&&Ke[0]!="close"||Ei(_,7);else _.G==3&&(Ke[0]=="stop"||Ke[0]=="close"?Ke[0]=="stop"?Ei(_,7):Kl(_):Ke[0]!="noop"&&_.l&&_.l.ta(Ke),_.v=0)}}ia(4)}catch{}}var Hc=class{constructor(h,v){this.g=h,this.map=v}};function gi(h){this.l=h||10,m.PerformanceNavigationTiming?(h=m.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ao(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function so(h){return h.h?1:h.g?h.g.size:0}function zl(h,v){return h.h?h.h==v:h.g?h.g.has(v):!1}function oo(h,v){h.g?h.g.add(v):h.h=v}function Vn(h,v){h.h&&h.h==v?h.h=null:h.g&&h.g.has(v)&&h.g.delete(v)}gi.prototype.cancel=function(){if(this.i=Bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Bl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let v=h.i;for(const _ of h.g.values())v=v.concat(_.D);return v}return k(h.i)}function Em(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(d(h)){for(var v=[],_=h.length,R=0;R<_;R++)v.push(h[R]);return v}v=[],_=0;for(R in h)v[_++]=h[R];return v}function lo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(d(h)||typeof h=="string"){var v=[];h=h.length;for(var _=0;_<h;_++)v.push(_);return v}v=[],_=0;for(const R in h)v[_++]=R;return v}}}function Fl(h,v){if(h.forEach&&typeof h.forEach=="function")h.forEach(v,void 0);else if(d(h)||typeof h=="string")Array.prototype.forEach.call(h,v,void 0);else for(var _=lo(h),R=Em(h),G=R.length,ee=0;ee<G;ee++)v.call(void 0,R[ee],_&&_[ee],h)}var os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tm(h,v){if(h){h=h.split("&");for(var _=0;_<h.length;_++){var R=h[_].indexOf("="),G=null;if(0<=R){var ee=h[_].substring(0,R);G=h[_].substring(R+1)}else ee=h[_];v(ee,G?decodeURIComponent(G.replace(/\+/g," ")):"")}}}function jt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof jt){this.h=h.h,ls(this,h.j),this.o=h.o,this.g=h.g,la(this,h.s),this.l=h.l;var v=h.i,_=new vi;_.i=v.i,v.g&&(_.g=new Map(v.g),_.h=v.h),yi(this,_),this.m=h.m}else h&&(v=String(h).match(os))?(this.h=!1,ls(this,v[1]||"",!0),this.o=or(v[2]||""),this.g=or(v[3]||"",!0),la(this,v[4]),this.l=or(v[5]||"",!0),yi(this,v[6]||"",!0),this.m=or(v[7]||"")):(this.h=!1,this.i=new vi(null,this.h))}jt.prototype.toString=function(){var h=[],v=this.j;v&&h.push(cs(v,Hl,!0),":");var _=this.g;return(_||v=="file")&&(h.push("//"),(v=this.o)&&h.push(cs(v,Hl,!0),"@"),h.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&h.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&h.push("/"),h.push(cs(_,_.charAt(0)=="/"?wm:ql,!0))),(_=this.i.toString())&&h.push("?",_),(_=this.m)&&h.push("#",cs(_,uo)),h.join("")};function Qn(h){return new jt(h)}function ls(h,v,_){h.j=_?or(v,!0):v,h.j&&(h.j=h.j.replace(/:$/,""))}function la(h,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);h.s=v}else h.s=null}function yi(h,v,_){v instanceof vi?(h.i=v,Gc(h.i,h.h)):(_||(v=cs(v,xm)),h.i=new vi(v,h.h))}function ct(h,v,_){h.i.set(v,_)}function us(h){return ct(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function or(h,v){return h?v?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function cs(h,v,_){return typeof h=="string"?(h=encodeURI(h).replace(v,qc),_&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function qc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Hl=/[#\/\?@]/g,ql=/[#\?:]/g,wm=/[#\?]/g,xm=/[#\?@]/g,uo=/#/g;function vi(h,v){this.h=this.g=null,this.i=h||null,this.j=!!v}function lr(h){h.g||(h.g=new Map,h.h=0,h.i&&Tm(h.i,function(v,_){h.add(decodeURIComponent(v.replace(/\+/g," ")),_)}))}t=vi.prototype,t.add=function(h,v){lr(this),this.i=null,h=Lr(this,h);var _=this.g.get(h);return _||this.g.set(h,_=[]),_.push(v),this.h+=1,this};function bi(h,v){lr(h),v=Lr(h,v),h.g.has(v)&&(h.i=null,h.h-=h.g.get(v).length,h.g.delete(v))}function _i(h,v){return lr(h),v=Lr(h,v),h.g.has(v)}t.forEach=function(h,v){lr(this),this.g.forEach(function(_,R){_.forEach(function(G){h.call(v,G,R,this)},this)},this)},t.na=function(){lr(this);const h=Array.from(this.g.values()),v=Array.from(this.g.keys()),_=[];for(let R=0;R<v.length;R++){const G=h[R];for(let ee=0;ee<G.length;ee++)_.push(v[R])}return _},t.V=function(h){lr(this);let v=[];if(typeof h=="string")_i(this,h)&&(v=v.concat(this.g.get(Lr(this,h))));else{h=Array.from(this.g.values());for(let _=0;_<h.length;_++)v=v.concat(h[_])}return v},t.set=function(h,v){return lr(this),this.i=null,h=Lr(this,h),_i(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[v]),this.h+=1,this},t.get=function(h,v){return h?(h=this.V(h),0<h.length?String(h[0]):v):v};function Gl(h,v,_){bi(h,v),0<_.length&&(h.i=null,h.g.set(Lr(h,v),k(_)),h.h+=_.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],v=Array.from(this.g.keys());for(var _=0;_<v.length;_++){var R=v[_];const ee=encodeURIComponent(String(R)),he=this.V(R);for(R=0;R<he.length;R++){var G=ee;he[R]!==""&&(G+="="+encodeURIComponent(String(he[R]))),h.push(G)}}return this.i=h.join("&")};function Lr(h,v){return v=String(v),h.j&&(v=v.toLowerCase()),v}function Gc(h,v){v&&!h.j&&(lr(h),h.i=null,h.g.forEach(function(_,R){var G=R.toLowerCase();R!=G&&(bi(this,R),Gl(this,G,_))},h)),h.j=v}function hs(h,v){const _=new sr;if(m.Image){const R=new Image;R.onload=I(ur,_,"TestLoadImage: loaded",!0,v,R),R.onerror=I(ur,_,"TestLoadImage: error",!1,v,R),R.onabort=I(ur,_,"TestLoadImage: abort",!1,v,R),R.ontimeout=I(ur,_,"TestLoadImage: timeout",!1,v,R),m.setTimeout(function(){R.ontimeout&&R.ontimeout()},1e4),R.src=h}else v(!1)}function Tr(h,v){const _=new sr,R=new AbortController,G=setTimeout(()=>{R.abort(),ur(_,"TestPingServer: timeout",!1,v)},1e4);fetch(h,{signal:R.signal}).then(ee=>{clearTimeout(G),ee.ok?ur(_,"TestPingServer: ok",!0,v):ur(_,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(G),ur(_,"TestPingServer: error",!1,v)})}function ur(h,v,_,R,G){try{G&&(G.onload=null,G.onerror=null,G.onabort=null,G.ontimeout=null),R(_)}catch{}}function fs(){this.g=new rs}function jr(h,v,_){const R=_||"";try{Fl(h,function(G,ee){let he=G;p(G)&&(he=Sr(G)),v.push(R+ee+"="+encodeURIComponent(he))})}catch(G){throw v.push(R+"type="+encodeURIComponent("_badmap")),G}}function ua(h){this.l=h.Ub||null,this.j=h.eb||!1}P(ua,kl),ua.prototype.g=function(){return new Si(this.l,this.j)},ua.prototype.i=function(h){return function(){return h}}({});function Si(h,v){Ot.call(this),this.D=h,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Si,Ot),t=Si.prototype,t.open=function(h,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=v,this.readyState=1,zr(this)},t.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(v.body=h),(this.D||m).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ur(this)),this.readyState=0},t.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ql(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ql(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}t.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var v=h.value?h.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!h.done}))&&(this.response=this.responseText+=v)}h.done?Ur(this):zr(this),this.readyState==3&&Ql(this)}},t.Ra=function(h){this.g&&(this.response=this.responseText=h,Ur(this))},t.Qa=function(h){this.g&&(this.response=h,Ur(this))},t.ga=function(){this.g&&Ur(this)};function Ur(h){h.readyState=4,h.l=null,h.j=null,h.v=null,zr(h)}t.setRequestHeader=function(h,v){this.u.append(h,v)},t.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],v=this.h.entries();for(var _=v.next();!_.done;)_=_.value,h.push(_[0]+": "+_[1]),_=v.next();return h.join(`\r
`)};function zr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Yl(h){let v="";return K(h,function(_,R){v+=R,v+=":",v+=_,v+=`\r
`}),v}function rn(h,v,_){e:{for(R in _){var R=!1;break e}R=!0}R||(_=Yl(_),typeof h=="string"?_!=null&&encodeURIComponent(String(_)):ct(h,v,_))}function rt(h){Ot.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(rt,Ot);var co=/^https?$/i,ds=["POST","PUT"];t=rt.prototype,t.Ha=function(h){this.J=h},t.ea=function(h,v,_,R){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);v=v?v.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vr.g(),this.v=this.o?Vl(this.o):Vl(Vr),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(v,String(h),!0),this.B=!1}catch(ee){Qc(this,ee);return}if(h=_||"",_=new Map(this.headers),R)if(Object.getPrototypeOf(R)===Object.prototype)for(var G in R)_.set(G,R[G]);else if(typeof R.keys=="function"&&typeof R.get=="function")for(const ee of R.keys())_.set(ee,R.get(ee));else throw Error("Unknown input type for opt_headers: "+String(R));R=Array.from(_.keys()).find(ee=>ee.toLowerCase()=="content-type"),G=m.FormData&&h instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ds,v,void 0))||R||G||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ee,he]of _)this.g.setRequestHeader(ee,he);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ms(this),this.u=!0,this.g.send(h),this.u=!1}catch(ee){Qc(this,ee)}};function Qc(h,v){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=v,h.m=5,ho(h),Br(h)}function ho(h){h.A||(h.A=!0,ot(h,"complete"),ot(h,"error"))}t.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,ot(this,"complete"),ot(this,"abort"),Br(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Br(this,!0)),rt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?fo(this):this.bb())},t.bb=function(){fo(this)};function fo(h){if(h.h&&typeof c<"u"&&(!h.v[1]||cr(h)!=4||h.Z()!=2)){if(h.u&&cr(h)==4)wn(h.Ea,0,h);else if(ot(h,"readystatechange"),cr(h)==4){h.h=!1;try{const he=h.Z();e:switch(he){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break e;default:v=!1}var _;if(!(_=v)){var R;if(R=he===0){var G=String(h.D).match(os)[1]||null;!G&&m.self&&m.self.location&&(G=m.self.location.protocol.slice(0,-1)),R=!co.test(G?G.toLowerCase():"")}_=R}if(_)ot(h,"complete"),ot(h,"success");else{h.m=6;try{var ee=2<cr(h)?h.g.statusText:""}catch{ee=""}h.l=ee+" ["+h.Z()+"]",ho(h)}}finally{Br(h)}}}}function Br(h,v){if(h.g){ms(h);const _=h.g,R=h.v[0]?()=>{}:null;h.g=null,h.v=null,v||ot(h,"ready");try{_.onreadystatechange=R}catch{}}}function ms(h){h.I&&(m.clearTimeout(h.I),h.I=null)}t.isActive=function(){return!!this.g};function cr(h){return h.g?h.g.readyState:0}t.Z=function(){try{return 2<cr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(h){if(this.g){var v=this.g.responseText;return h&&v.indexOf(h)==0&&(v=v.substring(h.length)),no(v)}};function Yc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Am(h){const v={};h=(h.g&&2<=cr(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let R=0;R<h.length;R++){if(H(h[R]))continue;var _=V(h[R]);const G=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const ee=v[G]||[];v[G]=ee,ee.push(_)}C(v,function(R){return R.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ps(h,v,_){return _&&_.internalChannelParams&&_.internalChannelParams[h]||v}function mo(h){this.Aa=0,this.i=[],this.j=new sr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ps("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ps("baseRetryDelayMs",5e3,h),this.cb=ps("retryDelaySeedMs",1e4,h),this.Wa=ps("forwardChannelMaxRetries",2,h),this.wa=ps("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new gi(h&&h.concurrentRequestLimit),this.Da=new fs,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=mo.prototype,t.la=8,t.G=1,t.connect=function(h,v,_,R){Tt(0),this.W=h,this.H=v||{},_&&R!==void 0&&(this.H.OSID=_,this.H.OAID=R),this.F=this.X,this.I=th(this,null,this.W),go(this)};function Kl(h){if(Kc(h),h.G==3){var v=h.U++,_=Qn(h.I);if(ct(_,"SID",h.K),ct(_,"RID",v),ct(_,"TYPE","terminate"),gs(h,_),v=new kn(h,h.j,v),v.L=2,v.v=us(Qn(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(v.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=v.v,_=!0),_||(v.g=nh(v.j,null),v.g.ea(v.v)),v.F=Date.now(),as(v)}eh(h)}function po(h){h.g&&(ys(h),h.g.cancel(),h.g=null)}function Kc(h){po(h),h.u&&(m.clearTimeout(h.u),h.u=null),yo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&m.clearTimeout(h.s),h.s=null)}function go(h){if(!ao(h.h)&&!h.s){h.s=!0;var v=h.Ga;ce||z(),de||(ce(),de=!0),be.add(v,h),h.B=0}}function Cm(h,v){return so(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=v.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Lt(E(h.Ga,h,v),Zl(h,h.B)),h.B++,!0)}t.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const G=new kn(this,this.j,h);let ee=this.o;if(this.S&&(ee?(ee=w(ee),M(ee,this.S)):ee=this.S),this.m!==null||this.O||(G.H=ee,ee=null),this.P)e:{for(var v=0,_=0;_<this.i.length;_++){t:{var R=this.i[_];if("__data__"in R.map&&(R=R.map.__data__,typeof R=="string")){R=R.length;break t}R=void 0}if(R===void 0)break;if(v+=R,4096<v){v=_;break e}if(v===4096||_===this.i.length-1){v=_+1;break e}}v=1e3}else v=1e3;v=Xc(this,G,v),_=Qn(this.I),ct(_,"RID",h),ct(_,"CVER",22),this.D&&ct(_,"X-HTTP-Session-Id",this.D),gs(this,_),ee&&(this.O?v="headers="+encodeURIComponent(String(Yl(ee)))+"&"+v:this.m&&rn(_,this.m,ee)),oo(this.h,G),this.Ua&&ct(_,"TYPE","init"),this.P?(ct(_,"$req",v),ct(_,"SID","null"),G.T=!0,Er(G,_,null)):Er(G,_,v),this.G=2}}else this.G==3&&(h?Xl(this,h):this.i.length==0||ao(this.h)||Xl(this))};function Xl(h,v){var _;v?_=v.l:_=h.U++;const R=Qn(h.I);ct(R,"SID",h.K),ct(R,"RID",_),ct(R,"AID",h.T),gs(h,R),h.m&&h.o&&rn(R,h.m,h.o),_=new kn(h,h.j,_,h.B+1),h.m===null&&(_.H=h.o),v&&(h.i=v.D.concat(h.i)),v=Xc(h,_,1e3),_.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),oo(h.h,_),Er(_,R,v)}function gs(h,v){h.H&&K(h.H,function(_,R){ct(v,R,_)}),h.l&&Fl({},function(_,R){ct(v,R,_)})}function Xc(h,v,_){_=Math.min(h.i.length,_);var R=h.l?E(h.l.Na,h.l,h):null;e:{var G=h.i;let ee=-1;for(;;){const he=["count="+_];ee==-1?0<_?(ee=G[0].g,he.push("ofs="+ee)):ee=0:he.push("ofs="+ee);let Ye=!0;for(let Yt=0;Yt<_;Yt++){let Ke=G[Yt].g;const an=G[Yt].map;if(Ke-=ee,0>Ke)ee=Math.max(0,G[Yt].g-100),Ye=!1;else try{jr(an,he,"req"+Ke+"_")}catch{R&&R(an)}}if(Ye){R=he.join("&");break e}}}return h=h.i.splice(0,_),v.D=h,R}function Wc(h){if(!h.g&&!h.u){h.Y=1;var v=h.Fa;ce||z(),de||(ce(),de=!0),be.add(v,h),h.v=0}}function Wl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Lt(E(h.Fa,h),Zl(h,h.v)),h.v++,!0)}t.Fa=function(){if(this.u=null,Zc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Lt(E(this.ab,this),h)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),po(this),Zc(this))};function ys(h){h.A!=null&&(m.clearTimeout(h.A),h.A=null)}function Zc(h){h.g=new kn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var v=Qn(h.qa);ct(v,"RID","rpc"),ct(v,"SID",h.K),ct(v,"AID",h.T),ct(v,"CI",h.F?"0":"1"),!h.F&&h.ja&&ct(v,"TO",h.ja),ct(v,"TYPE","xmlhttp"),gs(h,v),h.m&&h.o&&rn(v,h.m,h.o),h.L&&(h.g.I=h.L);var _=h.g;h=h.ia,_.L=1,_.v=us(Qn(v)),_.m=null,_.P=!0,pi(_,h)}t.Za=function(){this.C!=null&&(this.C=null,po(this),Wl(this),Tt(19))};function yo(h){h.C!=null&&(m.clearTimeout(h.C),h.C=null)}function Jc(h,v){var _=null;if(h.g==v){yo(h),ys(h),h.g=null;var R=2}else if(zl(h.h,v))_=v.D,Vn(h.h,v),R=1;else return;if(h.G!=0){if(v.o)if(R==1){_=v.m?v.m.length:0,v=Date.now()-v.F;var G=h.B;R=ra(),ot(R,new Qt(R,_)),go(h)}else Wc(h);else if(G=v.s,G==3||G==0&&0<v.X||!(R==1&&Cm(h,v)||R==2&&Wl(h)))switch(_&&0<_.length&&(v=h.h,v.i=v.i.concat(_)),G){case 1:Ei(h,5);break;case 4:Ei(h,10);break;case 3:Ei(h,6);break;default:Ei(h,2)}}}function Zl(h,v){let _=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(_*=2),_*v}function Ei(h,v){if(h.j.info("Error code "+v),v==2){var _=E(h.fb,h),R=h.Xa;const G=!R;R=new jt(R||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||ls(R,"https"),us(R),G?hs(R.toString(),_):Tr(R.toString(),_)}else Tt(2);h.G=0,h.l&&h.l.sa(v),eh(h),Kc(h)}t.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function eh(h){if(h.G=0,h.ka=[],h.l){const v=Bl(h.h);(v.length!=0||h.i.length!=0)&&(D(h.ka,v),D(h.ka,h.i),h.h.i.length=0,k(h.i),h.i.length=0),h.l.ra()}}function th(h,v,_){var R=_ instanceof jt?Qn(_):new jt(_);if(R.g!="")v&&(R.g=v+"."+R.g),la(R,R.s);else{var G=m.location;R=G.protocol,v=v?v+"."+G.hostname:G.hostname,G=+G.port;var ee=new jt(null);R&&ls(ee,R),v&&(ee.g=v),G&&la(ee,G),_&&(ee.l=_),R=ee}return _=h.D,v=h.ya,_&&v&&ct(R,_,v),ct(R,"VER",h.la),gs(h,R),R}function nh(h,v,_){if(v&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=h.Ca&&!h.pa?new rt(new ua({eb:_})):new rt(h.pa),v.Ha(h.J),v}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rh(){}t=rh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function vo(){}vo.prototype.g=function(h,v){return new Nn(h,v)};function Nn(h,v){Ot.call(this),this.g=new mo(v),this.l=h,this.h=v&&v.messageUrlParams||null,h=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(h?h["X-WebChannel-Content-Type"]=v.messageContentType:h={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(h?h["X-WebChannel-Client-Profile"]=v.va:h={"X-WebChannel-Client-Profile":v.va}),this.g.S=h,(h=v&&v.Sb)&&!H(h)&&(this.g.m=h),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!H(v)&&(this.g.D=v,h=this.h,h!==null&&v in h&&(h=this.h,v in h&&delete h[v])),this.j=new Fr(this)}P(Nn,Ot),Nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nn.prototype.close=function(){Kl(this.g)},Nn.prototype.o=function(h){var v=this.g;if(typeof h=="string"){var _={};_.__data__=h,h=_}else this.u&&(_={},_.__data__=Sr(h),h=_);v.i.push(new Hc(v.Ya++,h)),v.G==3&&go(v)},Nn.prototype.N=function(){this.g.l=null,delete this.j,Kl(this.g),delete this.g,Nn.aa.N.call(this)};function ih(h){di.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var v=h.__sm__;if(v){e:{for(const _ in v){h=_;break e}h=void 0}(this.i=h)&&(h=this.i,v=v!==null&&h in v?v[h]:void 0),this.data=v}else this.data=h}P(ih,di);function ah(){$l.call(this),this.status=1}P(ah,$l);function Fr(h){this.g=h}P(Fr,rh),Fr.prototype.ua=function(){ot(this.g,"a")},Fr.prototype.ta=function(h){ot(this.g,new ih(h))},Fr.prototype.sa=function(h){ot(this.g,new ah)},Fr.prototype.ra=function(){ot(this.g,"b")},vo.prototype.createWebChannel=vo.prototype.g,Nn.prototype.send=Nn.prototype.o,Nn.prototype.open=Nn.prototype.m,Nn.prototype.close=Nn.prototype.close,Aw=function(){return new vo},xw=function(){return ra()},ww=kr,vy={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sa.NO_ERROR=0,sa.TIMEOUT=8,sa.HTTP_ERROR=6,Pf=sa,mi.COMPLETE="complete",Tw=mi,Nl.EventType=fi,fi.OPEN="a",fi.CLOSE="b",fi.ERROR="c",fi.MESSAGE="d",Ot.prototype.listen=Ot.prototype.K,Qu=Nl,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,Ew=rt}).apply(typeof cf<"u"?cf:typeof self<"u"?self:typeof window<"u"?window:{});const cS="@firebase/firestore",hS="4.9.0";/**
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
 */class In{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}In.UNAUTHENTICATED=new In(null),In.GOOGLE_CREDENTIALS=new In("google-credentials-uid"),In.FIRST_PARTY=new In("first-party-uid"),In.MOCK_USER=new In("mock-user");/**
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
 */let xl="12.0.0";/**
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
 */const qs=new sv("@firebase/firestore");function Ko(){return qs.logLevel}function pe(t,...e){if(qs.logLevel<=He.DEBUG){const n=e.map(uv);qs.debug(`Firestore (${xl}): ${t}`,...n)}}function Ki(t,...e){if(qs.logLevel<=He.ERROR){const n=e.map(uv);qs.error(`Firestore (${xl}): ${t}`,...n)}}function dl(t,...e){if(qs.logLevel<=He.WARN){const n=e.map(uv);qs.warn(`Firestore (${xl}): ${t}`,...n)}}function uv(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Oe(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,Cw(t,i,n)}function Cw(t,e,n){let i=`FIRESTORE (${xl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw Ki(i),new Error(i)}function st(t,e,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,t||Cw(e,s,i)}function Ne(t,e){return t}/**
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
 */const ue={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends ea{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Rw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class j4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(In.UNAUTHENTICATED))}shutdown(){}}class U4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class z4{constructor(e){this.t=e,this.currentUser=In.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){st(this.o===void 0,42304);let i=this.i;const s=d=>this.i!==i?(i=this.i,n(d)):Promise.resolve();let l=new qi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new qi,e.enqueueRetryable(()=>s(this.currentUser))};const c=()=>{const d=l;e.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},m=d=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(d=>m(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?m(d):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new qi)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(st(typeof i.accessToken=="string",31837,{l:i}),new Rw(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return st(e===null||typeof e=="string",2055,{h:e}),new In(e)}}class B4{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=In.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class F4{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new B4(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(In.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class H4{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){st(this.o===void 0,3512);const i=l=>{l.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,pe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const s=l=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>s(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?s(l):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new fS(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(st(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new fS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function q4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class cv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=q4(40);for(let l=0;l<s.length;++l)i.length<20&&s[l]<n&&(i+=e.charAt(s[l]%62))}return i}}function qe(t,e){return t<e?-1:t>e?1:0}function by(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const s=t.charAt(i),l=e.charAt(i);if(s!==l)return Pg(s)===Pg(l)?qe(s,l):Pg(s)?1:-1}return qe(t.length,e.length)}const G4=55296,Q4=57343;function Pg(t){const e=t.charCodeAt(0);return e>=G4&&e<=Q4}function ml(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
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
 */const dS="__name__";class Wr{constructor(e,n,i){n===void 0?n=0:n>e.length&&Oe(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&Oe(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Wr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wr?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const l=Wr.compareSegments(e.get(s),n.get(s));if(l!==0)return l}return qe(e.length,n.length)}static compareSegments(e,n){const i=Wr.isNumericId(e),s=Wr.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?Wr.extractNumericId(e).compare(Wr.extractNumericId(n)):by(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Fa.fromString(e.substring(4,e.length-2))}}class _t extends Wr{construct(e,n,i){return new _t(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new ve(ue.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new _t(n)}static emptyPath(){return new _t([])}}const Y4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class En extends Wr{construct(e,n,i){return new En(e,n,i)}static isValidIdentifier(e){return Y4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),En.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dS}static keyField(){return new En([dS])}static fromServerFormat(e){const n=[];let i="",s=0;const l=()=>{if(i.length===0)throw new ve(ue.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let c=!1;for(;s<e.length;){const m=e[s];if(m==="\\"){if(s+1===e.length)throw new ve(ue.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new ve(ue.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=d,s+=2}else m==="`"?(c=!c,s++):m!=="."||c?(i+=m,s++):(l(),s++)}if(l(),c)throw new ve(ue.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new En(n)}static emptyPath(){return new En([])}}/**
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
 */class xe{constructor(e){this.path=e}static fromPath(e){return new xe(_t.fromString(e))}static fromName(e){return new xe(_t.fromString(e).popFirst(5))}static empty(){return new xe(_t.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_t.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _t.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new xe(new _t(e.slice()))}}/**
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
 */function Iw(t,e,n){if(!n)throw new ve(ue.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function K4(t,e,n,i){if(e===!0&&i===!0)throw new ve(ue.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mS(t){if(!xe.isDocumentKey(t))throw new ve(ue.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pS(t){if(xe.isDocumentKey(t))throw new ve(ue.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ow(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function hv(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Oe(12329,{type:typeof t})}function Xi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ve(ue.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hv(t);throw new ve(ue.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Gt(t,e){const n={typeString:t};return e&&(n.value=e),n}function wc(t,e){if(!Ow(t))throw new ve(ue.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const s=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const c=t[i];if(s&&typeof c!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(l!==void 0&&c!==l.value){n=`Expected '${i}' field to equal '${l.value}'`;break}}if(n)throw new ve(ue.INVALID_ARGUMENT,n);return!0}/**
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
 */const gS=-62135596800,yS=1e6;class St{static now(){return St.fromMillis(Date.now())}static fromDate(e){return St.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*yS);return new St(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ve(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ve(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<gS)throw new ve(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ve(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yS}_compareTo(e){return this.seconds===e.seconds?qe(this.nanoseconds,e.nanoseconds):qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:St._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wc(e,St._jsonSchema))return new St(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gS;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}St._jsonSchemaVersion="firestore/timestamp/1.0",St._jsonSchema={type:Gt("string",St._jsonSchemaVersion),seconds:Gt("number"),nanoseconds:Gt("number")};/**
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
 */class ke{static fromTimestamp(e){return new ke(e)}static min(){return new ke(new St(0,0))}static max(){return new ke(new St(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const uc=-1;function X4(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=ke.fromTimestamp(i===1e9?new St(n+1,0):new St(n,i));return new qa(s,xe.empty(),e)}function W4(t){return new qa(t.readTime,t.key,uc)}class qa{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new qa(ke.min(),xe.empty(),uc)}static max(){return new qa(ke.max(),xe.empty(),uc)}}function Z4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=xe.comparator(t.documentKey,e.documentKey),n!==0?n:qe(t.largestBatchId,e.largestBatchId))}/**
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
 */const J4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Al(t){if(t.code!==ue.FAILED_PRECONDITION||t.message!==J4)throw t;pe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class le{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new le((i,s)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,s)},this.catchCallback=l=>{this.wrapFailure(n,l).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof le?n:le.resolve(n)}catch(n){return le.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):le.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):le.reject(n)}static resolve(e){return new le((n,i)=>{n(e)})}static reject(e){return new le((n,i)=>{i(e)})}static waitFor(e){return new le((n,i)=>{let s=0,l=0,c=!1;e.forEach(m=>{++s,m.next(()=>{++l,c&&l===s&&n()},d=>i(d))}),c=!0,l===s&&n()})}static or(e){let n=le.resolve(!1);for(const i of e)n=n.next(s=>s?le.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,l)=>{i.push(n.call(this,s,l))}),this.waitFor(i)}static mapArray(e,n){return new le((i,s)=>{const l=e.length,c=new Array(l);let m=0;for(let d=0;d<l;d++){const p=d;n(e[p]).next(y=>{c[p]=y,++m,m===l&&i(c)},y=>s(y))}})}static doWhile(e,n){return new le((i,s)=>{const l=()=>{e()===!0?n().next(()=>{l()},s):i()};l()})}}function tP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Cl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ud{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ud.ce=-1;/**
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
 */const fv=-1;function zd(t){return t==null}function td(t){return t===0&&1/t==-1/0}function nP(t){return typeof t=="number"&&Number.isInteger(t)&&!td(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Dw="";function rP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=vS(e)),e=iP(t.get(n),e);return vS(e)}function iP(t,e){let n=e;const i=t.length;for(let s=0;s<i;s++){const l=t.charAt(s);switch(l){case"\0":n+="";break;case Dw:n+="";break;default:n+=l}}return n}function vS(t){return t+Dw+""}/**
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
 */function bS(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Pw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Rt{constructor(e,n){this.comparator=e,this.root=n||_n.EMPTY}insert(e,n){return new Rt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_n.BLACK,null,null))}remove(e){return new Rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_n.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hf(this.root,e,this.comparator,!1)}getReverseIterator(){return new hf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hf(this.root,e,this.comparator,!0)}}class hf{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=n?i(e.key,n):1,n&&s&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _n{constructor(e,n,i,s,l){this.key=e,this.value=n,this.color=i??_n.RED,this.left=s??_n.EMPTY,this.right=l??_n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,l){return new _n(e??this.key,n??this.value,i??this.color,s??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const l=i(e,s.key);return s=l<0?s.copy(null,null,null,s.left.insert(e,n,i),null):l===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return _n.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Oe(27949);return e+(this.isRed()?0:1)}}_n.EMPTY=null,_n.RED=!0,_n.BLACK=!1;_n.EMPTY=new class{constructor(){this.size=0}get key(){throw Oe(57766)}get value(){throw Oe(16141)}get color(){throw Oe(16727)}get left(){throw Oe(29726)}get right(){throw Oe(36894)}copy(e,n,i,s,l){return this}insert(e,n,i){return new _n(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nn{constructor(e){this.comparator=e,this.data=new Rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _S(this.data.getIterator())}getIteratorFrom(e){return new _S(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof nn)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,l=i.getNext().key;if(this.comparator(s,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nn(this.comparator);return n.data=e,n}}class _S{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rr{constructor(e){this.fields=e,e.sort(En.comparator)}static empty(){return new Rr([])}unionWith(e){let n=new nn(En.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Rr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ml(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class Mw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Mw("Invalid base64 string: "+l):l}}(e);return new Tn(n)}static fromUint8Array(e){const n=function(s){let l="";for(let c=0;c<s.length;++c)l+=String.fromCharCode(s[c]);return l}(e);return new Tn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tn.EMPTY_BYTE_STRING=new Tn("");const aP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ga(t){if(st(!!t,39018),typeof t=="string"){let e=0;const n=aP.exec(t);if(st(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:$t(t.seconds),nanos:$t(t.nanos)}}function $t(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qa(t){return typeof t=="string"?Tn.fromBase64String(t):Tn.fromUint8Array(t)}/**
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
 */const kw="server_timestamp",Vw="__type__",Nw="__previous_value__",$w="__local_write_time__";function dv(t){return(t?.mapValue?.fields||{})[Vw]?.stringValue===kw}function Bd(t){const e=t.mapValue.fields[Nw];return dv(e)?Bd(e):e}function cc(t){const e=Ga(t.mapValue.fields[$w].timestampValue);return new St(e.seconds,e.nanos)}/**
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
 */class sP{constructor(e,n,i,s,l,c,m,d,p,y){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=m,this.longPollingOptions=d,this.useFetchStreams=p,this.isUsingEmulator=y}}const nd="(default)";class hc{constructor(e,n){this.projectId=e,this.database=n||nd}static empty(){return new hc("","")}get isDefaultDatabase(){return this.database===nd}isEqual(e){return e instanceof hc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Lw="__type__",oP="__max__",ff={mapValue:{}},jw="__vector__",rd="value";function Ya(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dv(t)?4:uP(t)?9007199254740991:lP(t)?10:11:Oe(28295,{value:t})}function oi(t,e){if(t===e)return!0;const n=Ya(t);if(n!==Ya(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cc(t).isEqual(cc(e));case 3:return function(s,l){if(typeof s.timestampValue=="string"&&typeof l.timestampValue=="string"&&s.timestampValue.length===l.timestampValue.length)return s.timestampValue===l.timestampValue;const c=Ga(s.timestampValue),m=Ga(l.timestampValue);return c.seconds===m.seconds&&c.nanos===m.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,l){return Qa(s.bytesValue).isEqual(Qa(l.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,l){return $t(s.geoPointValue.latitude)===$t(l.geoPointValue.latitude)&&$t(s.geoPointValue.longitude)===$t(l.geoPointValue.longitude)}(t,e);case 2:return function(s,l){if("integerValue"in s&&"integerValue"in l)return $t(s.integerValue)===$t(l.integerValue);if("doubleValue"in s&&"doubleValue"in l){const c=$t(s.doubleValue),m=$t(l.doubleValue);return c===m?td(c)===td(m):isNaN(c)&&isNaN(m)}return!1}(t,e);case 9:return ml(t.arrayValue.values||[],e.arrayValue.values||[],oi);case 10:case 11:return function(s,l){const c=s.mapValue.fields||{},m=l.mapValue.fields||{};if(bS(c)!==bS(m))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(m[d]===void 0||!oi(c[d],m[d])))return!1;return!0}(t,e);default:return Oe(52216,{left:t})}}function fc(t,e){return(t.values||[]).find(n=>oi(n,e))!==void 0}function pl(t,e){if(t===e)return 0;const n=Ya(t),i=Ya(e);if(n!==i)return qe(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return qe(t.booleanValue,e.booleanValue);case 2:return function(l,c){const m=$t(l.integerValue||l.doubleValue),d=$t(c.integerValue||c.doubleValue);return m<d?-1:m>d?1:m===d?0:isNaN(m)?isNaN(d)?0:-1:1}(t,e);case 3:return SS(t.timestampValue,e.timestampValue);case 4:return SS(cc(t),cc(e));case 5:return by(t.stringValue,e.stringValue);case 6:return function(l,c){const m=Qa(l),d=Qa(c);return m.compareTo(d)}(t.bytesValue,e.bytesValue);case 7:return function(l,c){const m=l.split("/"),d=c.split("/");for(let p=0;p<m.length&&p<d.length;p++){const y=qe(m[p],d[p]);if(y!==0)return y}return qe(m.length,d.length)}(t.referenceValue,e.referenceValue);case 8:return function(l,c){const m=qe($t(l.latitude),$t(c.latitude));return m!==0?m:qe($t(l.longitude),$t(c.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ES(t.arrayValue,e.arrayValue);case 10:return function(l,c){const m=l.fields||{},d=c.fields||{},p=m[rd]?.arrayValue,y=d[rd]?.arrayValue,b=qe(p?.values?.length||0,y?.values?.length||0);return b!==0?b:ES(p,y)}(t.mapValue,e.mapValue);case 11:return function(l,c){if(l===ff.mapValue&&c===ff.mapValue)return 0;if(l===ff.mapValue)return 1;if(c===ff.mapValue)return-1;const m=l.fields||{},d=Object.keys(m),p=c.fields||{},y=Object.keys(p);d.sort(),y.sort();for(let b=0;b<d.length&&b<y.length;++b){const E=by(d[b],y[b]);if(E!==0)return E;const I=pl(m[d[b]],p[y[b]]);if(I!==0)return I}return qe(d.length,y.length)}(t.mapValue,e.mapValue);default:throw Oe(23264,{he:n})}}function SS(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return qe(t,e);const n=Ga(t),i=Ga(e),s=qe(n.seconds,i.seconds);return s!==0?s:qe(n.nanos,i.nanos)}function ES(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const l=pl(n[s],i[s]);if(l)return l}return qe(n.length,i.length)}function gl(t){return _y(t)}function _y(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Ga(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qa(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return xe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const l of n.values||[])s?s=!1:i+=",",i+=_y(l);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",l=!0;for(const c of i)l?l=!1:s+=",",s+=`${c}:${_y(n.fields[c])}`;return s+"}"}(t.mapValue):Oe(61005,{value:t})}function Mf(t){switch(Ya(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bd(t);return e?16+Mf(e):16;case 5:return 2*t.stringValue.length;case 6:return Qa(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,l)=>s+Mf(l),0)}(t.arrayValue);case 10:case 11:return function(i){let s=0;return Xs(i.fields,(l,c)=>{s+=l.length+Mf(c)}),s}(t.mapValue);default:throw Oe(13486,{value:t})}}function Sy(t){return!!t&&"integerValue"in t}function mv(t){return!!t&&"arrayValue"in t}function TS(t){return!!t&&"nullValue"in t}function wS(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function kf(t){return!!t&&"mapValue"in t}function lP(t){return(t?.mapValue?.fields||{})[Lw]?.stringValue===jw}function ec(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Xs(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=ec(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ec(t.arrayValue.values[n]);return e}return{...t}}function uP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===oP}/**
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
 */class vr{constructor(e){this.value=e}static empty(){return new vr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!kf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ec(n)}setAll(e){let n=En.emptyPath(),i={},s=[];e.forEach((c,m)=>{if(!n.isImmediateParentOf(m)){const d=this.getFieldsMap(n);this.applyChanges(d,i,s),i={},s=[],n=m.popLast()}c?i[m.lastSegment()]=ec(c):s.push(m.lastSegment())});const l=this.getFieldsMap(n);this.applyChanges(l,i,s)}delete(e){const n=this.field(e.popLast());kf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return oi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];kf(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Xs(n,(s,l)=>e[s]=l);for(const s of i)delete e[s]}clone(){return new vr(ec(this.value))}}function Uw(t){const e=[];return Xs(t.fields,(n,i)=>{const s=new En([n]);if(kf(i)){const l=Uw(i.mapValue).fields;if(l.length===0)e.push(s);else for(const c of l)e.push(s.child(c))}else e.push(s)}),new Rr(e)}/**
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
 */class On{constructor(e,n,i,s,l,c,m){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=l,this.data=c,this.documentState=m}static newInvalidDocument(e){return new On(e,0,ke.min(),ke.min(),ke.min(),vr.empty(),0)}static newFoundDocument(e,n,i,s){return new On(e,1,n,ke.min(),i,s,0)}static newNoDocument(e,n){return new On(e,2,n,ke.min(),ke.min(),vr.empty(),0)}static newUnknownDocument(e,n){return new On(e,3,n,ke.min(),ke.min(),vr.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof On&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new On(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class id{constructor(e,n){this.position=e,this.inclusive=n}}function xS(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const l=e[s],c=t.position[s];if(l.field.isKeyField()?i=xe.comparator(xe.fromName(c.referenceValue),n.key):i=pl(c,n.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function AS(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!oi(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ad{constructor(e,n="asc"){this.field=e,this.dir=n}}function cP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class zw{}class Jt extends zw{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new fP(e,n,i):n==="array-contains"?new pP(e,i):n==="in"?new gP(e,i):n==="not-in"?new yP(e,i):n==="array-contains-any"?new vP(e,i):new Jt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new dP(e,i):new mP(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(pl(n,this.value)):n!==null&&Ya(this.value)===Ya(n)&&this.matchesComparison(pl(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class li extends zw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new li(e,n)}matches(e){return Bw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Bw(t){return t.op==="and"}function Fw(t){return hP(t)&&Bw(t)}function hP(t){for(const e of t.filters)if(e instanceof li)return!1;return!0}function Ey(t){if(t instanceof Jt)return t.field.canonicalString()+t.op.toString()+gl(t.value);if(Fw(t))return t.filters.map(e=>Ey(e)).join(",");{const e=t.filters.map(n=>Ey(n)).join(",");return`${t.op}(${e})`}}function Hw(t,e){return t instanceof Jt?function(i,s){return s instanceof Jt&&i.op===s.op&&i.field.isEqual(s.field)&&oi(i.value,s.value)}(t,e):t instanceof li?function(i,s){return s instanceof li&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((l,c,m)=>l&&Hw(c,s.filters[m]),!0):!1}(t,e):void Oe(19439)}function qw(t){return t instanceof Jt?function(n){return`${n.field.canonicalString()} ${n.op} ${gl(n.value)}`}(t):t instanceof li?function(n){return n.op.toString()+" {"+n.getFilters().map(qw).join(" ,")+"}"}(t):"Filter"}class fP extends Jt{constructor(e,n,i){super(e,n,i),this.key=xe.fromName(i.referenceValue)}matches(e){const n=xe.comparator(e.key,this.key);return this.matchesComparison(n)}}class dP extends Jt{constructor(e,n){super(e,"in",n),this.keys=Gw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mP extends Jt{constructor(e,n){super(e,"not-in",n),this.keys=Gw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gw(t,e){return(e.arrayValue?.values||[]).map(n=>xe.fromName(n.referenceValue))}class pP extends Jt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mv(n)&&fc(n.arrayValue,this.value)}}class gP extends Jt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fc(this.value.arrayValue,n)}}class yP extends Jt{constructor(e,n){super(e,"not-in",n)}matches(e){if(fc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!fc(this.value.arrayValue,n)}}class vP extends Jt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>fc(this.value.arrayValue,i))}}/**
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
 */class bP{constructor(e,n=null,i=[],s=[],l=null,c=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=l,this.startAt=c,this.endAt=m,this.Te=null}}function CS(t,e=null,n=[],i=[],s=null,l=null,c=null){return new bP(t,e,n,i,s,l,c)}function pv(t){const e=Ne(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Ey(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),zd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>gl(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>gl(i)).join(",")),e.Te=n}return e.Te}function gv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Hw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!AS(t.startAt,e.startAt)&&AS(t.endAt,e.endAt)}function Ty(t){return xe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Fd{constructor(e,n=null,i=[],s=[],l=null,c="F",m=null,d=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=l,this.limitType=c,this.startAt=m,this.endAt=d,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function _P(t,e,n,i,s,l,c,m){return new Fd(t,e,n,i,s,l,c,m)}function yv(t){return new Fd(t)}function RS(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function SP(t){return t.collectionGroup!==null}function tc(t){const e=Ne(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),n.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let m=new nn(En.comparator);return c.filters.forEach(d=>{d.getFlattenedFilters().forEach(p=>{p.isInequality()&&(m=m.add(p.field))})}),m})(e).forEach(l=>{n.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new ad(l,i))}),n.has(En.keyField().canonicalString())||e.Ie.push(new ad(En.keyField(),i))}return e.Ie}function ti(t){const e=Ne(t);return e.Ee||(e.Ee=EP(e,tc(t))),e.Ee}function EP(t,e){if(t.limitType==="F")return CS(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const l=s.dir==="desc"?"asc":"desc";return new ad(s.field,l)});const n=t.endAt?new id(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new id(t.startAt.position,t.startAt.inclusive):null;return CS(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function wy(t,e,n){return new Fd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hd(t,e){return gv(ti(t),ti(e))&&t.limitType===e.limitType}function Qw(t){return`${pv(ti(t))}|lt:${t.limitType}`}function Xo(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>qw(s)).join(", ")}]`),zd(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>gl(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>gl(s)).join(",")),`Target(${i})`}(ti(t))}; limitType=${t.limitType})`}function qd(t,e){return e.isFoundDocument()&&function(i,s){const l=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):xe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(t,e)&&function(i,s){for(const l of tc(i))if(!l.field.isKeyField()&&s.data.field(l.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const l of i.filters)if(!l.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(c,m,d){const p=xS(c,m,d);return c.inclusive?p<=0:p<0}(i.startAt,tc(i),s)||i.endAt&&!function(c,m,d){const p=xS(c,m,d);return c.inclusive?p>=0:p>0}(i.endAt,tc(i),s))}(t,e)}function TP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yw(t){return(e,n)=>{let i=!1;for(const s of tc(t)){const l=wP(s,e,n);if(l!==0)return l;i=i||s.field.isKeyField()}return 0}}function wP(t,e,n){const i=t.field.isKeyField()?xe.comparator(e.key,n.key):function(l,c,m){const d=c.data.field(l),p=m.data.field(l);return d!==null&&p!==null?pl(d,p):Oe(42886)}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Oe(19790,{direction:t.dir})}}/**
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
 */class Ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,l]of i)if(this.equalsFn(s,e))return l}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],e))return void(s[l]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Xs(this.inner,(n,i)=>{for(const[s,l]of i)e(s,l)})}isEmpty(){return Pw(this.inner)}size(){return this.innerSize}}/**
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
 */const xP=new Rt(xe.comparator);function Wi(){return xP}const Kw=new Rt(xe.comparator);function Yu(...t){let e=Kw;for(const n of t)e=e.insert(n.key,n);return e}function Xw(t){let e=Kw;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Ns(){return nc()}function Ww(){return nc()}function nc(){return new Ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const AP=new Rt(xe.comparator),CP=new nn(xe.comparator);function Ge(...t){let e=CP;for(const n of t)e=e.add(n);return e}const RP=new nn(qe);function IP(){return RP}/**
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
 */function vv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:td(e)?"-0":e}}function Zw(t){return{integerValue:""+t}}function OP(t,e){return nP(e)?Zw(e):vv(t,e)}/**
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
 */class Gd{constructor(){this._=void 0}}function DP(t,e,n){return t instanceof sd?function(s,l){const c={fields:{[Vw]:{stringValue:kw},[$w]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return l&&dv(l)&&(l=Bd(l)),l&&(c.fields[Nw]=l),{mapValue:c}}(n,e):t instanceof dc?ex(t,e):t instanceof mc?tx(t,e):function(s,l){const c=Jw(s,l),m=IS(c)+IS(s.Ae);return Sy(c)&&Sy(s.Ae)?Zw(m):vv(s.serializer,m)}(t,e)}function PP(t,e,n){return t instanceof dc?ex(t,e):t instanceof mc?tx(t,e):n}function Jw(t,e){return t instanceof od?function(i){return Sy(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class sd extends Gd{}class dc extends Gd{constructor(e){super(),this.elements=e}}function ex(t,e){const n=nx(e);for(const i of t.elements)n.some(s=>oi(s,i))||n.push(i);return{arrayValue:{values:n}}}class mc extends Gd{constructor(e){super(),this.elements=e}}function tx(t,e){let n=nx(e);for(const i of t.elements)n=n.filter(s=>!oi(s,i));return{arrayValue:{values:n}}}class od extends Gd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function IS(t){return $t(t.integerValue||t.doubleValue)}function nx(t){return mv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function MP(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof dc&&s instanceof dc||i instanceof mc&&s instanceof mc?ml(i.elements,s.elements,oi):i instanceof od&&s instanceof od?oi(i.Ae,s.Ae):i instanceof sd&&s instanceof sd}(t.transform,e.transform)}class kP{constructor(e,n){this.version=e,this.transformResults=n}}class Dr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dr}static exists(e){return new Dr(void 0,e)}static updateTime(e){return new Dr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qd{}function rx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bv(t.key,Dr.none()):new xc(t.key,t.data,Dr.none());{const n=t.data,i=vr.empty();let s=new nn(En.comparator);for(let l of e.fields)if(!s.has(l)){let c=n.field(l);c===null&&l.length>1&&(l=l.popLast(),c=n.field(l)),c===null?i.delete(l):i.set(l,c),s=s.add(l)}return new Zs(t.key,i,new Rr(s.toArray()),Dr.none())}}function VP(t,e,n){t instanceof xc?function(s,l,c){const m=s.value.clone(),d=DS(s.fieldTransforms,l,c.transformResults);m.setAll(d),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()}(t,e,n):t instanceof Zs?function(s,l,c){if(!Vf(s.precondition,l))return void l.convertToUnknownDocument(c.version);const m=DS(s.fieldTransforms,l,c.transformResults),d=l.data;d.setAll(ix(s)),d.setAll(m),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(t,e,n):function(s,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,n)}function rc(t,e,n,i){return t instanceof xc?function(l,c,m,d){if(!Vf(l.precondition,c))return m;const p=l.value.clone(),y=PS(l.fieldTransforms,d,c);return p.setAll(y),c.convertToFoundDocument(c.version,p).setHasLocalMutations(),null}(t,e,n,i):t instanceof Zs?function(l,c,m,d){if(!Vf(l.precondition,c))return m;const p=PS(l.fieldTransforms,d,c),y=c.data;return y.setAll(ix(l)),y.setAll(p),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(b=>b.field))}(t,e,n,i):function(l,c,m){return Vf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):m}(t,e,n)}function NP(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),l=Jw(i.transform,s||null);l!=null&&(n===null&&(n=vr.empty()),n.set(i.field,l))}return n||null}function OS(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ml(i,s,(l,c)=>MP(l,c))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xc extends Qd{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zs extends Qd{constructor(e,n,i,s,l=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function ix(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function DS(t,e,n){const i=new Map;st(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const l=t[s],c=l.transform,m=e.data.field(l.field);i.set(l.field,PP(c,m,n[s]))}return i}function PS(t,e,n){const i=new Map;for(const s of t){const l=s.transform,c=n.data.field(s.field);i.set(s.field,DP(l,c,e))}return i}class bv extends Qd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $P extends Qd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LP{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const l=this.mutations[s];l.key.isEqual(e.key)&&VP(l,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=rc(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=rc(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Ww();return this.mutations.forEach(s=>{const l=e.get(s.key),c=l.overlayedDocument;let m=this.applyToLocalView(c,l.mutatedFields);m=n.has(s.key)?null:m;const d=rx(c,m);d!==null&&i.set(s.key,d),c.isValidDocument()||c.convertToNoDocument(ke.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ge())}isEqual(e){return this.batchId===e.batchId&&ml(this.mutations,e.mutations,(n,i)=>OS(n,i))&&ml(this.baseMutations,e.baseMutations,(n,i)=>OS(n,i))}}class _v{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){st(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let s=function(){return AP}();const l=e.mutations;for(let c=0;c<l.length;c++)s=s.insert(l[c].key,i[c].version);return new _v(e,n,i,s)}}/**
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
 */let jP=class{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
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
 */class UP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Bt,We;function zP(t){switch(t){case ue.OK:return Oe(64938);case ue.CANCELLED:case ue.UNKNOWN:case ue.DEADLINE_EXCEEDED:case ue.RESOURCE_EXHAUSTED:case ue.INTERNAL:case ue.UNAVAILABLE:case ue.UNAUTHENTICATED:return!1;case ue.INVALID_ARGUMENT:case ue.NOT_FOUND:case ue.ALREADY_EXISTS:case ue.PERMISSION_DENIED:case ue.FAILED_PRECONDITION:case ue.ABORTED:case ue.OUT_OF_RANGE:case ue.UNIMPLEMENTED:case ue.DATA_LOSS:return!0;default:return Oe(15467,{code:t})}}function ax(t){if(t===void 0)return Ki("GRPC error has no .code"),ue.UNKNOWN;switch(t){case Bt.OK:return ue.OK;case Bt.CANCELLED:return ue.CANCELLED;case Bt.UNKNOWN:return ue.UNKNOWN;case Bt.DEADLINE_EXCEEDED:return ue.DEADLINE_EXCEEDED;case Bt.RESOURCE_EXHAUSTED:return ue.RESOURCE_EXHAUSTED;case Bt.INTERNAL:return ue.INTERNAL;case Bt.UNAVAILABLE:return ue.UNAVAILABLE;case Bt.UNAUTHENTICATED:return ue.UNAUTHENTICATED;case Bt.INVALID_ARGUMENT:return ue.INVALID_ARGUMENT;case Bt.NOT_FOUND:return ue.NOT_FOUND;case Bt.ALREADY_EXISTS:return ue.ALREADY_EXISTS;case Bt.PERMISSION_DENIED:return ue.PERMISSION_DENIED;case Bt.FAILED_PRECONDITION:return ue.FAILED_PRECONDITION;case Bt.ABORTED:return ue.ABORTED;case Bt.OUT_OF_RANGE:return ue.OUT_OF_RANGE;case Bt.UNIMPLEMENTED:return ue.UNIMPLEMENTED;case Bt.DATA_LOSS:return ue.DATA_LOSS;default:return Oe(39323,{code:t})}}(We=Bt||(Bt={}))[We.OK=0]="OK",We[We.CANCELLED=1]="CANCELLED",We[We.UNKNOWN=2]="UNKNOWN",We[We.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",We[We.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",We[We.NOT_FOUND=5]="NOT_FOUND",We[We.ALREADY_EXISTS=6]="ALREADY_EXISTS",We[We.PERMISSION_DENIED=7]="PERMISSION_DENIED",We[We.UNAUTHENTICATED=16]="UNAUTHENTICATED",We[We.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",We[We.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",We[We.ABORTED=10]="ABORTED",We[We.OUT_OF_RANGE=11]="OUT_OF_RANGE",We[We.UNIMPLEMENTED=12]="UNIMPLEMENTED",We[We.INTERNAL=13]="INTERNAL",We[We.UNAVAILABLE=14]="UNAVAILABLE",We[We.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function BP(){return new TextEncoder}/**
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
 */const FP=new Fa([4294967295,4294967295],0);function MS(t){const e=BP().encode(t),n=new Sw;return n.update(e),new Uint8Array(n.digest())}function kS(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Fa([n,i],0),new Fa([s,l],0)]}class Sv{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Ku(`Invalid padding: ${n}`);if(i<0)throw new Ku(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ku(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Ku(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Fa.fromNumber(this.ge)}ye(e,n,i){let s=e.add(n.multiply(Fa.fromNumber(i)));return s.compare(FP)===1&&(s=new Fa([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=MS(e),[i,s]=kS(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,s,l);if(!this.we(c))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Sv(l,s,n);return i.forEach(m=>c.insert(m)),c}insert(e){if(this.ge===0)return;const n=MS(e),[i,s]=kS(n);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,s,l);this.Se(c)}}Se(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Ku extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Yd{constructor(e,n,i,s,l){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,Ac.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Yd(ke.min(),s,new Rt(qe),Wi(),Ge())}}class Ac{constructor(e,n,i,s,l){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Ac(i,n,Ge(),Ge(),Ge())}}/**
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
 */class Nf{constructor(e,n,i,s){this.be=e,this.removedTargetIds=n,this.key=i,this.De=s}}class sx{constructor(e,n){this.targetId=e,this.Ce=n}}class ox{constructor(e,n,i=Tn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class VS{constructor(){this.ve=0,this.Fe=NS(),this.Me=Tn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ge(),n=Ge(),i=Ge();return this.Fe.forEach((s,l)=>{switch(l){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:Oe(38017,{changeType:l})}}),new Ac(this.Me,this.xe,e,n,i)}qe(){this.Oe=!1,this.Fe=NS()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,st(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class HP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Wi(),this.Je=df(),this.He=df(),this.Ye=new Rt(qe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const i=this.nt(n);switch(e.state){case 0:this.rt(n)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(e.resumeToken));break;default:Oe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((i,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,i=e.Ce.count,s=this.ot(n);if(s){const l=s.target;if(Ty(l))if(i===0){const c=new xe(l.path);this.et(n,c,On.newNoDocument(c,ke.min()))}else st(i===1,20013,{expectedCount:i});else{const c=this._t(n);if(c!==i){const m=this.ut(e),d=m?this.ct(m,e,c):1;if(d!==0){this.it(n);const p=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,p)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:l=0}=n;let c,m;try{c=Qa(i).toUint8Array()}catch(d){if(d instanceof Mw)return dl("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{m=new Sv(c,s,l)}catch(d){return dl(d instanceof Ku?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return m.ge===0?null:m}ct(e,n,i){return n.Ce.count===i-this.Pt(e,n.targetId)?0:2}Pt(e,n){const i=this.Ge.getRemoteKeysForTarget(n);let s=0;return i.forEach(l=>{const c=this.Ge.ht(),m=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.et(n,l,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((l,c)=>{const m=this.ot(c);if(m){if(l.current&&Ty(m.target)){const d=new xe(m.target.path);this.It(d).has(c)||this.Et(c,d)||this.et(c,d,On.newNoDocument(d,e))}l.Be&&(n.set(c,l.ke()),l.qe())}});let i=Ge();this.He.forEach((l,c)=>{let m=!0;c.forEachWhile(d=>{const p=this.ot(d);return!p||p.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(i=i.add(l))}),this.je.forEach((l,c)=>c.setReadTime(e));const s=new Yd(e,n,this.Ye,this.je,i);return this.je=Wi(),this.Je=df(),this.He=df(),this.Ye=new Rt(qe),s}Xe(e,n){if(!this.rt(e))return;const i=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),i&&(this.je=this.je.insert(n,i))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new VS,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new nn(qe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new nn(qe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||pe("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new VS),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function df(){return new Rt(xe.comparator)}function NS(){return new Rt(xe.comparator)}const qP={asc:"ASCENDING",desc:"DESCENDING"},GP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QP={and:"AND",or:"OR"};class YP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xy(t,e){return t.useProto3Json||zd(e)?e:{value:e}}function ld(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KP(t,e){return ld(t,e.toTimestamp())}function ni(t){return st(!!t,49232),ke.fromTimestamp(function(n){const i=Ga(n);return new St(i.seconds,i.nanos)}(t))}function Ev(t,e){return Ay(t,e).canonicalString()}function Ay(t,e){const n=function(s){return new _t(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ux(t){const e=_t.fromString(t);return st(mx(e),10190,{key:e.toString()}),e}function Cy(t,e){return Ev(t.databaseId,e.path)}function Mg(t,e){const n=ux(e);if(n.get(1)!==t.databaseId.projectId)throw new ve(ue.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ve(ue.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new xe(hx(n))}function cx(t,e){return Ev(t.databaseId,e)}function XP(t){const e=ux(t);return e.length===4?_t.emptyPath():hx(e)}function Ry(t){return new _t(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hx(t){return st(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function $S(t,e,n){return{name:Cy(t,e),fields:n.value.mapValue.fields}}function WP(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Oe(39313,{state:p})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],l=function(p,y){return p.useProto3Json?(st(y===void 0||typeof y=="string",58123),Tn.fromBase64String(y||"")):(st(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),Tn.fromUint8Array(y||new Uint8Array))}(t,e.targetChange.resumeToken),c=e.targetChange.cause,m=c&&function(p){const y=p.code===void 0?ue.UNKNOWN:ax(p.code);return new ve(y,p.message||"")}(c);n=new ox(i,s,l,m||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Mg(t,i.document.name),l=ni(i.document.updateTime),c=i.document.createTime?ni(i.document.createTime):ke.min(),m=new vr({mapValue:{fields:i.document.fields}}),d=On.newFoundDocument(s,l,c,m),p=i.targetIds||[],y=i.removedTargetIds||[];n=new Nf(p,y,d.key,d)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Mg(t,i.document),l=i.readTime?ni(i.readTime):ke.min(),c=On.newNoDocument(s,l),m=i.removedTargetIds||[];n=new Nf([],m,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Mg(t,i.document),l=i.removedTargetIds||[];n=new Nf([],l,s,null)}else{if(!("filter"in e))return Oe(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:l}=i,c=new UP(s,l),m=i.targetId;n=new sx(m,c)}}return n}function ZP(t,e){let n;if(e instanceof xc)n={update:$S(t,e.key,e.value)};else if(e instanceof bv)n={delete:Cy(t,e.key)};else if(e instanceof Zs)n={update:$S(t,e.key,e.data),updateMask:oM(e.fieldMask)};else{if(!(e instanceof $P))return Oe(16599,{Vt:e.type});n={verify:Cy(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const m=c.transform;if(m instanceof sd)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof dc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof mc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof od)return{fieldPath:c.field.canonicalString(),increment:m.Ae};throw Oe(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,l){return l.updateTime!==void 0?{updateTime:KP(s,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Oe(27497)}(t,e.precondition)),n}function JP(t,e){return t&&t.length>0?(st(e!==void 0,14353),t.map(n=>function(s,l){let c=s.updateTime?ni(s.updateTime):ni(l);return c.isEqual(ke.min())&&(c=ni(l)),new kP(c,s.transformResults||[])}(n,e))):[]}function eM(t,e){return{documents:[cx(t,e.path)]}}function tM(t,e){const n={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=cx(t,s);const l=function(p){if(p.length!==0)return dx(li.create(p,"and"))}(e.filters);l&&(n.structuredQuery.where=l);const c=function(p){if(p.length!==0)return p.map(y=>function(E){return{field:Wo(E.field),direction:iM(E.dir)}}(y))}(e.orderBy);c&&(n.structuredQuery.orderBy=c);const m=xy(t,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ft:n,parent:s}}function nM(t){let e=XP(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){st(i===1,65062);const y=n.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let l=[];n.where&&(l=function(b){const E=fx(b);return E instanceof li&&Fw(E)?E.getFilters():[E]}(n.where));let c=[];n.orderBy&&(c=function(b){return b.map(E=>function(P){return new ad(Zo(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(E))}(n.orderBy));let m=null;n.limit&&(m=function(b){let E;return E=typeof b=="object"?b.value:b,zd(E)?null:E}(n.limit));let d=null;n.startAt&&(d=function(b){const E=!!b.before,I=b.values||[];return new id(I,E)}(n.startAt));let p=null;return n.endAt&&(p=function(b){const E=!b.before,I=b.values||[];return new id(I,E)}(n.endAt)),_P(e,s,c,l,m,"F",d,p)}function rM(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Oe(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Zo(n.unaryFilter.field);return Jt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Zo(n.unaryFilter.field);return Jt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Zo(n.unaryFilter.field);return Jt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Zo(n.unaryFilter.field);return Jt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Oe(61313);default:return Oe(60726)}}(t):t.fieldFilter!==void 0?function(n){return Jt.create(Zo(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Oe(58110);default:return Oe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return li.create(n.compositeFilter.filters.map(i=>fx(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Oe(1026)}}(n.compositeFilter.op))}(t):Oe(30097,{filter:t})}function iM(t){return qP[t]}function aM(t){return GP[t]}function sM(t){return QP[t]}function Wo(t){return{fieldPath:t.canonicalString()}}function Zo(t){return En.fromServerFormat(t.fieldPath)}function dx(t){return t instanceof Jt?function(n){if(n.op==="=="){if(wS(n.value))return{unaryFilter:{field:Wo(n.field),op:"IS_NAN"}};if(TS(n.value))return{unaryFilter:{field:Wo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wS(n.value))return{unaryFilter:{field:Wo(n.field),op:"IS_NOT_NAN"}};if(TS(n.value))return{unaryFilter:{field:Wo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wo(n.field),op:aM(n.op),value:n.value}}}(t):t instanceof li?function(n){const i=n.getFilters().map(s=>dx(s));return i.length===1?i[0]:{compositeFilter:{op:sM(n.op),filters:i}}}(t):Oe(54877,{filter:t})}function oM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $a{constructor(e,n,i,s,l=ke.min(),c=ke.min(),m=Tn.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=m,this.expectedCount=d}withSequenceNumber(e){return new $a(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class lM{constructor(e){this.yt=e}}function uM(t){const e=nM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wy(e,e.limit,"L"):e}/**
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
 */class cM{constructor(){this.Cn=new hM}addToCollectionParentIndex(e,n){return this.Cn.add(n),le.resolve()}getCollectionParents(e,n){return le.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return le.resolve()}deleteFieldIndex(e,n){return le.resolve()}deleteAllFieldIndexes(e){return le.resolve()}createTargetIndexes(e,n){return le.resolve()}getDocumentsMatchingTarget(e,n){return le.resolve(null)}getIndexType(e,n){return le.resolve(0)}getFieldIndexes(e,n){return le.resolve([])}getNextCollectionGroupToUpdate(e){return le.resolve(null)}getMinOffset(e,n){return le.resolve(qa.min())}getMinOffsetFromCollectionGroup(e,n){return le.resolve(qa.min())}updateCollectionGroup(e,n,i){return le.resolve()}updateIndexEntries(e,n){return le.resolve()}}class hM{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new nn(_t.comparator),l=!s.has(i);return this.index[n]=s.add(i),l}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new nn(_t.comparator)).toArray()}}/**
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
 */const LS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},px=41943040;class Fn{static withCacheSize(e){return new Fn(e,Fn.DEFAULT_COLLECTION_PERCENTILE,Fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Fn.DEFAULT_COLLECTION_PERCENTILE=10,Fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fn.DEFAULT=new Fn(px,Fn.DEFAULT_COLLECTION_PERCENTILE,Fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fn.DISABLED=new Fn(-1,0,0);/**
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
 */class yl{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new yl(0)}static cr(){return new yl(-1)}}/**
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
 */const jS="LruGarbageCollector",fM=1048576;function US([t,e],[n,i]){const s=qe(t,n);return s===0?qe(e,i):s}class dM{constructor(e){this.Ir=e,this.buffer=new nn(US),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();US(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class mM{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){pe(jS,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Cl(n)?pe(jS,"Ignoring IndexedDB error during garbage collection: ",n):await Al(n)}await this.Vr(3e5)})}}class pM{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return le.resolve(Ud.ce);const i=new dM(n);return this.mr.forEachTarget(e,s=>i.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>i.Ar(s))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.mr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(pe("LruGarbageCollector","Garbage collection skipped; disabled"),le.resolve(LS)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(pe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),LS):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let i,s,l,c,m,d,p;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(pe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),s=this.params.maximumSequenceNumbersToCollect):s=b,c=Date.now(),this.nthSequenceNumber(e,s))).next(b=>(i=b,m=Date.now(),this.removeTargets(e,i,n))).next(b=>(l=b,d=Date.now(),this.removeOrphanedDocuments(e,i))).next(b=>(p=Date.now(),Ko()<=He.DEBUG&&pe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${s} in `+(m-c)+`ms
	Removed ${l} targets in `+(d-m)+`ms
	Removed ${b} documents in `+(p-d)+`ms
Total Duration: ${p-y}ms`),le.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:l,documentsRemoved:b})))}}function gM(t,e){return new pM(t,e)}/**
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
 */class yM{constructor(){this.changes=new Ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,On.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?le.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class vM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class bM{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&rc(i.mutation,s,Rr.empty(),St.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Ge()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Ge()){const s=Ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(l=>{let c=Yu();return l.forEach((m,d)=>{c=c.insert(m,d.overlayedDocument)}),c}))}getOverlayedDocuments(e,n){const i=Ns();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Ge()))}populateOverlays(e,n,i){const s=[];return i.forEach(l=>{n.has(l)||s.push(l)}),this.documentOverlayCache.getOverlays(e,s).next(l=>{l.forEach((c,m)=>{n.set(c,m)})})}computeViews(e,n,i,s){let l=Wi();const c=nc(),m=function(){return nc()}();return n.forEach((d,p)=>{const y=i.get(p.key);s.has(p.key)&&(y===void 0||y.mutation instanceof Zs)?l=l.insert(p.key,p):y!==void 0?(c.set(p.key,y.mutation.getFieldMask()),rc(y.mutation,p,y.mutation.getFieldMask(),St.now())):c.set(p.key,Rr.empty())}),this.recalculateAndSaveOverlays(e,l).next(d=>(d.forEach((p,y)=>c.set(p,y)),n.forEach((p,y)=>m.set(p,new vM(y,c.get(p)??null))),m))}recalculateAndSaveOverlays(e,n){const i=nc();let s=new Rt((c,m)=>c-m),l=Ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(c=>{for(const m of c)m.keys().forEach(d=>{const p=n.get(d);if(p===null)return;let y=i.get(d)||Rr.empty();y=m.applyToLocalView(p,y),i.set(d,y);const b=(s.get(m.batchId)||Ge()).add(d);s=s.insert(m.batchId,b)})}).next(()=>{const c=[],m=s.getReverseIterator();for(;m.hasNext();){const d=m.getNext(),p=d.key,y=d.value,b=Ww();y.forEach(E=>{if(!l.has(E)){const I=rx(n.get(E),i.get(E));I!==null&&b.set(E,I),l=l.add(E)}}),c.push(this.documentOverlayCache.saveOverlays(e,p,b))}return le.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,s){return function(c){return xe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):SP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(l=>{const c=s-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-l.size):le.resolve(Ns());let m=uc,d=l;return c.next(p=>le.forEach(p,(y,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),l.get(y)?le.resolve():this.remoteDocumentCache.getEntry(e,y).next(E=>{d=d.insert(y,E)}))).next(()=>this.populateOverlays(e,p,l)).next(()=>this.computeViews(e,d,p,Ge())).next(y=>({batchId:m,changes:Xw(y)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new xe(n)).next(i=>{let s=Yu();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const l=n.collectionGroup;let c=Yu();return this.indexManager.getCollectionParents(e,l).next(m=>le.forEach(m,d=>{const p=function(b,E){return new Fd(E,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(n,d.child(l));return this.getDocumentsMatchingCollectionQuery(e,p,i,s).next(y=>{y.forEach((b,E)=>{c=c.insert(b,E)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,n,i,s){let l;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,l,s))).next(c=>{l.forEach((d,p)=>{const y=p.getKey();c.get(y)===null&&(c=c.insert(y,On.newInvalidDocument(y)))});let m=Yu();return c.forEach((d,p)=>{const y=l.get(d);y!==void 0&&rc(y.mutation,p,Rr.empty(),St.now()),qd(n,p)&&(m=m.insert(d,p))}),m})}}/**
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
 */class _M{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return le.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ni(s.createTime)}}(n)),le.resolve()}getNamedQuery(e,n){return le.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:uM(s.bundledQuery),readTime:ni(s.readTime)}}(n)),le.resolve()}}/**
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
 */class SM{constructor(){this.overlays=new Rt(xe.comparator),this.qr=new Map}getOverlay(e,n){return le.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Ns();return le.forEach(n,s=>this.getOverlay(e,s).next(l=>{l!==null&&i.set(s,l)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,l)=>{this.St(e,n,l)}),le.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.qr.get(i);return s!==void 0&&(s.forEach(l=>this.overlays=this.overlays.remove(l)),this.qr.delete(i)),le.resolve()}getOverlaysForCollection(e,n,i){const s=Ns(),l=n.length+1,c=new xe(n.child("")),m=this.overlays.getIteratorFrom(c);for(;m.hasNext();){const d=m.getNext().value,p=d.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===l&&d.largestBatchId>i&&s.set(d.getKey(),d)}return le.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let l=new Rt((p,y)=>p-y);const c=this.overlays.getIterator();for(;c.hasNext();){const p=c.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>i){let y=l.get(p.largestBatchId);y===null&&(y=Ns(),l=l.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const m=Ns(),d=l.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((p,y)=>m.set(p,y)),!(m.size()>=s)););return le.resolve(m)}St(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const c=this.qr.get(s.largestBatchId).delete(i.key);this.qr.set(s.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new jP(n,i));let l=this.qr.get(n);l===void 0&&(l=Ge(),this.qr.set(n,l)),this.qr.set(n,l.add(i.key))}}/**
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
 */class EM{constructor(){this.sessionToken=Tn.EMPTY_BYTE_STRING}getSessionToken(e){return le.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,le.resolve()}}/**
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
 */class Tv{constructor(){this.Qr=new nn(un.$r),this.Ur=new nn(un.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const i=new un(e,n);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Gr(new un(e,n))}zr(e,n){e.forEach(i=>this.removeReference(i,n))}jr(e){const n=new xe(new _t([])),i=new un(n,e),s=new un(n,e+1),l=[];return this.Ur.forEachInRange([i,s],c=>{this.Gr(c),l.push(c.key)}),l}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new xe(new _t([])),i=new un(n,e),s=new un(n,e+1);let l=Ge();return this.Ur.forEachInRange([i,s],c=>{l=l.add(c.key)}),l}containsKey(e){const n=new un(e,0),i=this.Qr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class un{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return xe.comparator(e.key,n.key)||qe(e.Yr,n.Yr)}static Kr(e,n){return qe(e.Yr,n.Yr)||xe.comparator(e.key,n.key)}}/**
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
 */class TM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new nn(un.$r)}checkEmpty(e){return le.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new LP(l,n,i,s);this.mutationQueue.push(c);for(const m of s)this.Zr=this.Zr.add(new un(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return le.resolve(c)}lookupMutationBatch(e,n){return le.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.ei(i),l=s<0?0:s;return le.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return le.resolve(this.mutationQueue.length===0?fv:this.tr-1)}getAllMutationBatches(e){return le.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new un(n,0),s=new un(n,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,s],c=>{const m=this.Xr(c.Yr);l.push(m)}),le.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new nn(qe);return n.forEach(s=>{const l=new un(s,0),c=new un(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],m=>{i=i.add(m.Yr)})}),le.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let l=i;xe.isDocumentKey(l)||(l=l.child(""));const c=new un(new xe(l),0);let m=new nn(qe);return this.Zr.forEachWhile(d=>{const p=d.key.path;return!!i.isPrefixOf(p)&&(p.length===s&&(m=m.add(d.Yr)),!0)},c),le.resolve(this.ti(m))}ti(e){const n=[];return e.forEach(i=>{const s=this.Xr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){st(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return le.forEach(n.mutations,s=>{const l=new un(s.key,n.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=i})}ir(e){}containsKey(e,n){const i=new un(n,0),s=this.Zr.firstAfterOrEqual(i);return le.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,le.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wM{constructor(e){this.ri=e,this.docs=function(){return new Rt(xe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),l=s?s.size:0,c=this.ri(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return le.resolve(i?i.document.mutableCopy():On.newInvalidDocument(n))}getEntries(e,n){let i=Wi();return n.forEach(s=>{const l=this.docs.get(s);i=i.insert(s,l?l.document.mutableCopy():On.newInvalidDocument(s))}),le.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let l=Wi();const c=n.path,m=new xe(c.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(m);for(;d.hasNext();){const{key:p,value:{document:y}}=d.getNext();if(!c.isPrefixOf(p.path))break;p.path.length>c.length+1||Z4(W4(y),i)<=0||(s.has(y.key)||qd(n,y))&&(l=l.insert(y.key,y.mutableCopy()))}return le.resolve(l)}getAllFromCollectionGroup(e,n,i,s){Oe(9500)}ii(e,n){return le.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new xM(this)}getSize(e){return le.resolve(this.size)}}class xM extends yM{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(i)}),le.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class AM{constructor(e){this.persistence=e,this.si=new Ws(n=>pv(n),gv),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.oi=0,this._i=new Tv,this.targetCount=0,this.ai=yl.ur()}forEachTarget(e,n){return this.si.forEach((i,s)=>n(s)),le.resolve()}getLastRemoteSnapshotVersion(e){return le.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return le.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),le.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.oi&&(this.oi=n),le.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new yl(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,le.resolve()}updateTargetData(e,n){return this.Pr(n),le.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,le.resolve()}removeTargets(e,n,i){let s=0;const l=[];return this.si.forEach((c,m)=>{m.sequenceNumber<=n&&i.get(m.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),s++)}),le.waitFor(l).next(()=>s)}getTargetCount(e){return le.resolve(this.targetCount)}getTargetData(e,n){const i=this.si.get(n)||null;return le.resolve(i)}addMatchingKeys(e,n,i){return this._i.Wr(n,i),le.resolve()}removeMatchingKeys(e,n,i){this._i.zr(n,i);const s=this.persistence.referenceDelegate,l=[];return s&&n.forEach(c=>{l.push(s.markPotentiallyOrphaned(e,c))}),le.waitFor(l)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),le.resolve()}getMatchingKeysForTargetId(e,n){const i=this._i.Hr(n);return le.resolve(i)}containsKey(e,n){return le.resolve(this._i.containsKey(n))}}/**
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
 */class gx{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ud(0),this.li=!1,this.li=!0,this.hi=new EM,this.referenceDelegate=e(this),this.Pi=new AM(this),this.indexManager=new cM,this.remoteDocumentCache=function(s){return new wM(s)}(i=>this.referenceDelegate.Ti(i)),this.serializer=new lM(n),this.Ii=new _M(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.ui[e.toKey()];return i||(i=new TM(n,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,i){pe("MemoryPersistence","Starting transaction:",e);const s=new CM(this.ci.next());return this.referenceDelegate.Ei(),i(s).next(l=>this.referenceDelegate.di(s).next(()=>l)).toPromise().then(l=>(s.raiseOnCommittedEvent(),l))}Ai(e,n){return le.or(Object.values(this.ui).map(i=>()=>i.containsKey(e,n)))}}class CM extends eP{constructor(e){super(),this.currentSequenceNumber=e}}class wv{constructor(e){this.persistence=e,this.Ri=new Tv,this.Vi=null}static mi(e){return new wv(e)}get fi(){if(this.Vi)return this.Vi;throw Oe(60996)}addReference(e,n,i){return this.Ri.addReference(i,n),this.fi.delete(i.toString()),le.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.fi.add(i.toString()),le.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),le.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(l=>this.fi.add(l.toString()))}).next(()=>i.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return le.forEach(this.fi,i=>{const s=xe.fromPath(i);return this.gi(e,s).next(l=>{l||n.removeEntry(s,ke.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(i=>{i?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return le.or([()=>le.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ud{constructor(e,n){this.persistence=e,this.pi=new Ws(i=>rP(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=gM(this,n)}static mi(e,n){return new ud(e,n)}Ei(){}di(e){return le.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(s=>i+s))}wr(e){let n=0;return this.pr(e,i=>{n++}).next(()=>n)}pr(e,n){return le.forEach(this.pi,(i,s)=>this.br(e,i,s).next(l=>l?le.resolve():n(s)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),l=s.newChangeBuffer();return s.ii(e,c=>this.br(e,c,n).next(m=>{m||(i++,l.removeEntry(c,ke.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),le.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),le.resolve()}removeReference(e,n,i){return this.pi.set(i,e.currentSequenceNumber),le.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),le.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Mf(e.data.value)),n}br(e,n,i){return le.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return le.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class xv{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Es=i,this.ds=s}static As(e,n){let i=Ge(),s=Ge();for(const l of n.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:s=s.add(l.doc.key)}return new xv(e,n.fromCache,i,s)}}/**
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
 */class RM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class IM{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return bD()?8:tP(Pn())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,i,s){const l={result:null};return this.ys(e,n).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ws(e,n,s,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new RM;return this.Ss(e,n,c).next(m=>{if(l.result=m,this.Vs)return this.bs(e,n,c,m.size)})}).next(()=>l.result)}bs(e,n,i,s){return i.documentReadCount<this.fs?(Ko()<=He.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",Xo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),le.resolve()):(Ko()<=He.DEBUG&&pe("QueryEngine","Query:",Xo(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.gs*s?(Ko()<=He.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",Xo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ti(n))):le.resolve())}ys(e,n){if(RS(n))return le.resolve(null);let i=ti(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=wy(n,null,"F"),i=ti(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Ge(...l);return this.ps.getDocuments(e,c).next(m=>this.indexManager.getMinOffset(e,i).next(d=>{const p=this.Ds(n,m);return this.Cs(n,p,c,d.readTime)?this.ys(e,wy(n,null,"F")):this.vs(e,p,n,d)}))})))}ws(e,n,i,s){return RS(n)||s.isEqual(ke.min())?le.resolve(null):this.ps.getDocuments(e,i).next(l=>{const c=this.Ds(n,l);return this.Cs(n,c,i,s)?le.resolve(null):(Ko()<=He.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xo(n)),this.vs(e,c,n,X4(s,uc)).next(m=>m))})}Ds(e,n){let i=new nn(Yw(e));return n.forEach((s,l)=>{qd(e,l)&&(i=i.add(l))}),i}Cs(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const l=e.limitType==="F"?n.last():n.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(s)>0)}Ss(e,n,i){return Ko()<=He.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",Xo(n)),this.ps.getDocumentsMatchingQuery(e,n,qa.min(),i)}vs(e,n,i,s){return this.ps.getDocumentsMatchingQuery(e,i,s).next(l=>(n.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */const Av="LocalStore",OM=3e8;class DM{constructor(e,n,i,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Rt(qe),this.xs=new Ws(l=>pv(l),gv),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bM(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function PM(t,e,n,i){return new DM(t,e,n,i)}async function yx(t,e){const n=Ne(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(l=>(s=l,n.Bs(e),n.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],m=[];let d=Ge();for(const p of s){c.push(p.batchId);for(const y of p.mutations)d=d.add(y.key)}for(const p of l){m.push(p.batchId);for(const y of p.mutations)d=d.add(y.key)}return n.localDocuments.getDocuments(i,d).next(p=>({Ls:p,removedBatchIds:c,addedBatchIds:m}))})})}function MM(t,e){const n=Ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),l=n.Ns.newChangeBuffer({trackRemovals:!0});return function(m,d,p,y){const b=p.batch,E=b.keys();let I=le.resolve();return E.forEach(P=>{I=I.next(()=>y.getEntry(d,P)).next(k=>{const D=p.docVersions.get(P);st(D!==null,48541),k.version.compareTo(D)<0&&(b.applyToRemoteDocument(k,p),k.isValidDocument()&&(k.setReadTime(p.commitVersion),y.addEntry(k)))})}),I.next(()=>m.mutationQueue.removeMutationBatch(d,b))}(n,i,e,l).next(()=>l.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(m){let d=Ge();for(let p=0;p<m.mutationResults.length;++p)m.mutationResults[p].transformResults.length>0&&(d=d.add(m.batch.mutations[p].key));return d}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function vx(t){const e=Ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function kM(t,e){const n=Ne(t),i=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const m=[];e.targetChanges.forEach((y,b)=>{const E=s.get(b);if(!E)return;m.push(n.Pi.removeMatchingKeys(l,y.removedDocuments,b).next(()=>n.Pi.addMatchingKeys(l,y.addedDocuments,b)));let I=E.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(b)!==null?I=I.withResumeToken(Tn.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):y.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(y.resumeToken,i)),s=s.insert(b,I),function(k,D,$){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=OM?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(E,I,y)&&m.push(n.Pi.updateTargetData(l,I))});let d=Wi(),p=Ge();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(l,y))}),m.push(VM(l,c,e.documentUpdates).next(y=>{d=y.ks,p=y.qs})),!i.isEqual(ke.min())){const y=n.Pi.getLastRemoteSnapshotVersion(l).next(b=>n.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i));m.push(y)}return le.waitFor(m).next(()=>c.apply(l)).next(()=>n.localDocuments.getLocalViewOfDocuments(l,d,p)).next(()=>d)}).then(l=>(n.Ms=s,l))}function VM(t,e,n){let i=Ge(),s=Ge();return n.forEach(l=>i=i.add(l)),e.getEntries(t,i).next(l=>{let c=Wi();return n.forEach((m,d)=>{const p=l.get(m);d.isFoundDocument()!==p.isFoundDocument()&&(s=s.add(m)),d.isNoDocument()&&d.version.isEqual(ke.min())?(e.removeEntry(m,d.readTime),c=c.insert(m,d)):!p.isValidDocument()||d.version.compareTo(p.version)>0||d.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(d),c=c.insert(m,d)):pe(Av,"Ignoring outdated watch update for ",m,". Current version:",p.version," Watch version:",d.version)}),{ks:c,qs:s}})}function NM(t,e){const n=Ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=fv),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function $M(t,e){const n=Ne(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Pi.getTargetData(i,e).next(l=>l?(s=l,le.resolve(s)):n.Pi.allocateTargetId(i).next(c=>(s=new $a(e,c,"TargetPurposeListen",i.currentSequenceNumber),n.Pi.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Ms.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(i.targetId,i),n.xs.set(e,i.targetId)),i})}async function Iy(t,e,n){const i=Ne(t),s=i.Ms.get(e),l=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,s))}catch(c){if(!Cl(c))throw c;pe(Av,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ms=i.Ms.remove(e),i.xs.delete(s.target)}function zS(t,e,n){const i=Ne(t);let s=ke.min(),l=Ge();return i.persistence.runTransaction("Execute query","readwrite",c=>function(d,p,y){const b=Ne(d),E=b.xs.get(y);return E!==void 0?le.resolve(b.Ms.get(E)):b.Pi.getTargetData(p,y)}(i,c,ti(e)).next(m=>{if(m)return s=m.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(c,m.targetId).next(d=>{l=d})}).next(()=>i.Fs.getDocumentsMatchingQuery(c,e,n?s:ke.min(),n?l:Ge())).next(m=>(LM(i,TP(e),m),{documents:m,Qs:l})))}function LM(t,e,n){let i=t.Os.get(e)||ke.min();n.forEach((s,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),t.Os.set(e,i)}class BS{constructor(){this.activeTargetIds=IP()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jM{constructor(){this.Mo=new BS,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,i){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new BS,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UM{Oo(e){}shutdown(){}}/**
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
 */const FS="ConnectivityMonitor";class HS{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){pe(FS,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){pe(FS,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mf=null;function Oy(){return mf===null?mf=function(){return 268435456+Math.round(2147483648*Math.random())}():mf++,"0x"+mf.toString(16)}/**
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
 */const kg="RestConnection",zM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class BM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${i}/databases/${s}`,this.Wo=this.databaseId.database===nd?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Go(e,n,i,s,l){const c=Oy(),m=this.zo(e,n.toUriEncodedString());pe(kg,`Sending RPC '${e}' ${c}:`,m,i);const d={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(d,s,l);const{host:p}=new URL(m),y=Tl(p);return this.Jo(e,m,d,i,y).then(b=>(pe(kg,`Received RPC '${e}' ${c}: `,b),b),b=>{throw dl(kg,`RPC '${e}' ${c} failed with error: `,b,"url: ",m,"request:",i),b})}Ho(e,n,i,s,l,c){return this.Go(e,n,i,s,l)}jo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,l)=>e[l]=s),i&&i.headers.forEach((s,l)=>e[l]=s)}zo(e,n){const i=zM[e];return`${this.Uo}/v1/${n}:${i}`}terminate(){}}/**
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
 */class FM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Cn="WebChannelConnection";class HM extends BM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,i,s,l){const c=Oy();return new Promise((m,d)=>{const p=new Ew;p.setWithCredentials(!0),p.listenOnce(Tw.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Pf.NO_ERROR:const b=p.getResponseJson();pe(Cn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(b)),m(b);break;case Pf.TIMEOUT:pe(Cn,`RPC '${e}' ${c} timed out`),d(new ve(ue.DEADLINE_EXCEEDED,"Request time out"));break;case Pf.HTTP_ERROR:const E=p.getStatus();if(pe(Cn,`RPC '${e}' ${c} failed with status:`,E,"response text:",p.getResponseText()),E>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const P=I?.error;if(P&&P.status&&P.message){const k=function($){const H=$.toLowerCase().replace(/_/g,"-");return Object.values(ue).indexOf(H)>=0?H:ue.UNKNOWN}(P.status);d(new ve(k,P.message))}else d(new ve(ue.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ve(ue.UNAVAILABLE,"Connection failed."));break;default:Oe(9055,{l_:e,streamId:c,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{pe(Cn,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(s);pe(Cn,`RPC '${e}' ${c} sending request:`,s),p.send(n,"POST",y,i,15)})}T_(e,n,i){const s=Oy(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Aw(),m=xw(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(d.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(d.useFetchStreams=!0),this.jo(d.initMessageHeaders,n,i),d.encodeInitMessageHeaders=!0;const y=l.join("");pe(Cn,`Creating RPC '${e}' stream ${s}: ${y}`,d);const b=c.createWebChannel(y,d);this.I_(b);let E=!1,I=!1;const P=new FM({Yo:D=>{I?pe(Cn,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(E||(pe(Cn,`Opening RPC '${e}' stream ${s} transport.`),b.open(),E=!0),pe(Cn,`RPC '${e}' stream ${s} sending:`,D),b.send(D))},Zo:()=>b.close()}),k=(D,$,H)=>{D.listen($,F=>{try{H(F)}catch(te){setTimeout(()=>{throw te},0)}})};return k(b,Qu.EventType.OPEN,()=>{I||(pe(Cn,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),k(b,Qu.EventType.CLOSE,()=>{I||(I=!0,pe(Cn,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(b))}),k(b,Qu.EventType.ERROR,D=>{I||(I=!0,dl(Cn,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),P.a_(new ve(ue.UNAVAILABLE,"The operation could not be completed")))}),k(b,Qu.EventType.MESSAGE,D=>{if(!I){const $=D.data[0];st(!!$,16349);const H=$,F=H?.error||H[0]?.error;if(F){pe(Cn,`RPC '${e}' stream ${s} received error:`,F);const te=F.status;let L=function(w){const x=Bt[w];if(x!==void 0)return ax(x)}(te),K=F.message;L===void 0&&(L=ue.INTERNAL,K="Unknown error status: "+te+" with message "+F.message),I=!0,P.a_(new ve(L,K)),b.close()}else pe(Cn,`RPC '${e}' stream ${s} received:`,$),P.u_($)}}),k(m,ww.STAT_EVENT,D=>{D.stat===vy.PROXY?pe(Cn,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===vy.NOPROXY&&pe(Cn,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Vg(){return typeof document<"u"?document:null}/**
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
 */function Kd(t){return new YP(t,!0)}/**
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
 */class bx{constructor(e,n,i=1e3,s=1.5,l=6e4){this.Mi=e,this.timerId=n,this.d_=i,this.A_=s,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-i);s>0&&pe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const qS="PersistentStream";class _x{constructor(e,n,i,s,l,c,m,d){this.Mi=e,this.S_=i,this.b_=s,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=m,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bx(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===ue.RESOURCE_EXHAUSTED?(Ki(n.toString()),Ki("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===ue.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.D_===n&&this.G_(i,s)},i=>{e(()=>{const s=new ve(ue.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)})})}G_(e,n){const i=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{i(()=>this.listener.Xo())}),this.stream.t_(()=>{i(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{i(()=>this.z_(s))}),this.stream.onMessage(s=>{i(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return pe(qS,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(pe(qS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qM extends _x{constructor(e,n,i,s,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,c),this.serializer=l}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=WP(this.serializer,e),i=function(l){if(!("targetChange"in l))return ke.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ke.min():c.readTime?ni(c.readTime):ke.min()}(e);return this.listener.H_(n,i)}Y_(e){const n={};n.database=Ry(this.serializer),n.addTarget=function(l,c){let m;const d=c.target;if(m=Ty(d)?{documents:eM(l,d)}:{query:tM(l,d).ft},m.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){m.resumeToken=lx(l,c.resumeToken);const p=xy(l,c.expectedCount);p!==null&&(m.expectedCount=p)}else if(c.snapshotVersion.compareTo(ke.min())>0){m.readTime=ld(l,c.snapshotVersion.toTimestamp());const p=xy(l,c.expectedCount);p!==null&&(m.expectedCount=p)}return m}(this.serializer,e);const i=rM(this.serializer,e);i&&(n.labels=i),this.q_(n)}Z_(e){const n={};n.database=Ry(this.serializer),n.removeTarget=e,this.q_(n)}}class GM extends _x{constructor(e,n,i,s,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return st(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,st(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){st(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=JP(e.writeResults,e.commitTime),i=ni(e.commitTime);return this.listener.na(i,n)}ra(){const e={};e.database=Ry(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>ZP(this.serializer,i))};this.q_(n)}}/**
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
 */class QM{}class YM extends QM{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ve(ue.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Go(e,Ay(n,i),s,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ue.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ve(ue.UNKNOWN,l.toString())})}Ho(e,n,i,s,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,m])=>this.connection.Ho(e,Ay(n,i),s,c,m,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ue.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ve(ue.UNKNOWN,c.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class KM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ki(n),this.aa=!1):pe("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Gs="RemoteStore";class XM{constructor(e,n,i,s,l){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo(c=>{i.enqueueAndForget(async()=>{Js(this)&&(pe(Gs,"Restarting streams for network reachability change."),await async function(d){const p=Ne(d);p.Ea.add(4),await Cc(p),p.Ra.set("Unknown"),p.Ea.delete(4),await Xd(p)}(this))})}),this.Ra=new KM(i,s)}}async function Xd(t){if(Js(t))for(const e of t.da)await e(!0)}async function Cc(t){for(const e of t.da)await e(!1)}function Sx(t,e){const n=Ne(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Ov(n)?Iv(n):Rl(n).O_()&&Rv(n,e))}function Cv(t,e){const n=Ne(t),i=Rl(n);n.Ia.delete(e),i.O_()&&Ex(n,e),n.Ia.size===0&&(i.O_()?i.L_():Js(n)&&n.Ra.set("Unknown"))}function Rv(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rl(t).Y_(e)}function Ex(t,e){t.Va.Ue(e),Rl(t).Z_(e)}function Iv(t){t.Va=new HP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Rl(t).start(),t.Ra.ua()}function Ov(t){return Js(t)&&!Rl(t).x_()&&t.Ia.size>0}function Js(t){return Ne(t).Ea.size===0}function Tx(t){t.Va=void 0}async function WM(t){t.Ra.set("Online")}async function ZM(t){t.Ia.forEach((e,n)=>{Rv(t,e)})}async function JM(t,e){Tx(t),Ov(t)?(t.Ra.ha(e),Iv(t)):t.Ra.set("Unknown")}async function ek(t,e,n){if(t.Ra.set("Online"),e instanceof ox&&e.state===2&&e.cause)try{await async function(s,l){const c=l.cause;for(const m of l.targetIds)s.Ia.has(m)&&(await s.remoteSyncer.rejectListen(m,c),s.Ia.delete(m),s.Va.removeTarget(m))}(t,e)}catch(i){pe(Gs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await cd(t,i)}else if(e instanceof Nf?t.Va.Ze(e):e instanceof sx?t.Va.st(e):t.Va.tt(e),!n.isEqual(ke.min()))try{const i=await vx(t.localStore);n.compareTo(i)>=0&&await function(l,c){const m=l.Va.Tt(c);return m.targetChanges.forEach((d,p)=>{if(d.resumeToken.approximateByteSize()>0){const y=l.Ia.get(p);y&&l.Ia.set(p,y.withResumeToken(d.resumeToken,c))}}),m.targetMismatches.forEach((d,p)=>{const y=l.Ia.get(d);if(!y)return;l.Ia.set(d,y.withResumeToken(Tn.EMPTY_BYTE_STRING,y.snapshotVersion)),Ex(l,d);const b=new $a(y.target,d,p,y.sequenceNumber);Rv(l,b)}),l.remoteSyncer.applyRemoteEvent(m)}(t,n)}catch(i){pe(Gs,"Failed to raise snapshot:",i),await cd(t,i)}}async function cd(t,e,n){if(!Cl(e))throw e;t.Ea.add(1),await Cc(t),t.Ra.set("Offline"),n||(n=()=>vx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{pe(Gs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Xd(t)})}function wx(t,e){return e().catch(n=>cd(t,n,e))}async function Wd(t){const e=Ne(t),n=Ka(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:fv;for(;tk(e);)try{const s=await NM(e.localStore,i);if(s===null){e.Ta.length===0&&n.L_();break}i=s.batchId,nk(e,s)}catch(s){await cd(e,s)}xx(e)&&Ax(e)}function tk(t){return Js(t)&&t.Ta.length<10}function nk(t,e){t.Ta.push(e);const n=Ka(t);n.O_()&&n.X_&&n.ea(e.mutations)}function xx(t){return Js(t)&&!Ka(t).x_()&&t.Ta.length>0}function Ax(t){Ka(t).start()}async function rk(t){Ka(t).ra()}async function ik(t){const e=Ka(t);for(const n of t.Ta)e.ea(n.mutations)}async function ak(t,e,n){const i=t.Ta.shift(),s=_v.from(i,e,n);await wx(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Wd(t)}async function sk(t,e){e&&Ka(t).X_&&await async function(i,s){if(function(c){return zP(c)&&c!==ue.ABORTED}(s.code)){const l=i.Ta.shift();Ka(i).B_(),await wx(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,s)),await Wd(i)}}(t,e),xx(t)&&Ax(t)}async function GS(t,e){const n=Ne(t);n.asyncQueue.verifyOperationInProgress(),pe(Gs,"RemoteStore received new credentials");const i=Js(n);n.Ea.add(3),await Cc(n),i&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Xd(n)}async function ok(t,e){const n=Ne(t);e?(n.Ea.delete(2),await Xd(n)):e||(n.Ea.add(2),await Cc(n),n.Ra.set("Unknown"))}function Rl(t){return t.ma||(t.ma=function(n,i,s){const l=Ne(n);return l.sa(),new qM(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,s)}(t.datastore,t.asyncQueue,{Xo:WM.bind(null,t),t_:ZM.bind(null,t),r_:JM.bind(null,t),H_:ek.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Ov(t)?Iv(t):t.Ra.set("Unknown")):(await t.ma.stop(),Tx(t))})),t.ma}function Ka(t){return t.fa||(t.fa=function(n,i,s){const l=Ne(n);return l.sa(),new GM(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:rk.bind(null,t),r_:sk.bind(null,t),ta:ik.bind(null,t),na:ak.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Wd(t)):(await t.fa.stop(),t.Ta.length>0&&(pe(Gs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Dv{constructor(e,n,i,s,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=l,this.deferred=new qi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,l){const c=Date.now()+i,m=new Dv(e,n,c,s,l);return m.start(i),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(ue.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pv(t,e){if(Ki("AsyncQueue",`${e}: ${t}`),Cl(t))return new ve(ue.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class tl{static emptySet(e){return new tl(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||xe.comparator(n.key,i.key):(n,i)=>xe.comparator(n.key,i.key),this.keyedMap=Yu(),this.sortedSet=new Rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof tl)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,l=i.getNext().key;if(!s.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new tl;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
 */class QS{constructor(){this.ga=new Rt(xe.comparator)}track(e){const n=e.doc.key,i=this.ga.get(n);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(n,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(n):e.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Oe(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,i)=>{e.push(i)}),e}}class vl{constructor(e,n,i,s,l,c,m,d,p){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=m,this.excludesMetadataChanges=d,this.hasCachedResults=p}static fromInitialDocuments(e,n,i,s,l){const c=[];return n.forEach(m=>{c.push({type:0,doc:m})}),new vl(e,n,tl.emptySet(n),c,i,s,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class lk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class uk{constructor(){this.queries=YS(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const s=Ne(n),l=s.queries;s.queries=YS(),l.forEach((c,m)=>{for(const d of m.Sa)d.onError(i)})})(this,new ve(ue.ABORTED,"Firestore shutting down"))}}function YS(){return new Ws(t=>Qw(t),Hd)}async function Cx(t,e){const n=Ne(t);let i=3;const s=e.query;let l=n.queries.get(s);l?!l.ba()&&e.Da()&&(i=2):(l=new lk,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await n.onListen(s,!0);break;case 1:l.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(c){const m=Pv(c,`Initialization of query '${Xo(e.query)}' failed`);return void e.onError(m)}n.queries.set(s,l),l.Sa.push(e),e.va(n.onlineState),l.wa&&e.Fa(l.wa)&&Mv(n)}async function Rx(t,e){const n=Ne(t),i=e.query;let s=3;const l=n.queries.get(i);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?s=e.Da()?0:1:!l.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function ck(t,e){const n=Ne(t);let i=!1;for(const s of e){const l=s.query,c=n.queries.get(l);if(c){for(const m of c.Sa)m.Fa(s)&&(i=!0);c.wa=s}}i&&Mv(n)}function hk(t,e,n){const i=Ne(t),s=i.queries.get(e);if(s)for(const l of s.Sa)l.onError(n);i.queries.delete(e)}function Mv(t){t.Ca.forEach(e=>{e.next()})}var Dy,KS;(KS=Dy||(Dy={})).Ma="default",KS.Cache="cache";class Ix{constructor(e,n,i){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new vl(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=vl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Dy.Cache}}/**
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
 */class Ox{constructor(e){this.key=e}}class Dx{constructor(e){this.key=e}}class fk{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ge(),this.mutatedKeys=Ge(),this.eu=Yw(e),this.tu=new tl(this.eu)}get nu(){return this.Ya}ru(e,n){const i=n?n.iu:new QS,s=n?n.tu:this.tu;let l=n?n.mutatedKeys:this.mutatedKeys,c=s,m=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,p=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((y,b)=>{const E=s.get(y),I=qd(this.query,b)?b:null,P=!!E&&this.mutatedKeys.has(E.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let D=!1;E&&I?E.data.isEqual(I.data)?P!==k&&(i.track({type:3,doc:I}),D=!0):this.su(E,I)||(i.track({type:2,doc:I}),D=!0,(d&&this.eu(I,d)>0||p&&this.eu(I,p)<0)&&(m=!0)):!E&&I?(i.track({type:0,doc:I}),D=!0):E&&!I&&(i.track({type:1,doc:E}),D=!0,(d||p)&&(m=!0)),D&&(I?(c=c.add(I),l=k?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),i.track({type:1,doc:y})}return{tu:c,iu:i,Cs:m,mutatedKeys:l}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,s){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort((y,b)=>function(I,P){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Oe(20277,{Rt:D})}};return k(I)-k(P)}(y.type,b.type)||this.eu(y.doc,b.doc)),this.ou(i),s=s??!1;const m=n&&!s?this._u():[],d=this.Xa.size===0&&this.current&&!s?1:0,p=d!==this.Za;return this.Za=d,c.length!==0||p?{snapshot:new vl(this.query,e.tu,l,c,e.mutatedKeys,d===0,p,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new QS,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ge(),this.tu.forEach(i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))});const n=[];return e.forEach(i=>{this.Xa.has(i)||n.push(new Dx(i))}),this.Xa.forEach(i=>{e.has(i)||n.push(new Ox(i))}),n}cu(e){this.Ya=e.Qs,this.Xa=Ge();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return vl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const kv="SyncEngine";class dk{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class mk{constructor(e){this.key=e,this.hu=!1}}class pk{constructor(e,n,i,s,l,c){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Ws(m=>Qw(m),Hd),this.Iu=new Map,this.Eu=new Set,this.du=new Rt(xe.comparator),this.Au=new Map,this.Ru=new Tv,this.Vu={},this.mu=new Map,this.fu=yl.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function gk(t,e,n=!0){const i=$x(t);let s;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),s=l.view.lu()):s=await Px(i,e,n,!0),s}async function yk(t,e){const n=$x(t);await Px(n,e,!0,!1)}async function Px(t,e,n,i){const s=await $M(t.localStore,ti(e)),l=s.targetId,c=t.sharedClientState.addLocalQueryTarget(l,n);let m;return i&&(m=await vk(t,e,l,c==="current",s.resumeToken)),t.isPrimaryClient&&n&&Sx(t.remoteStore,s),m}async function vk(t,e,n,i,s){t.pu=(b,E,I)=>async function(k,D,$,H){let F=D.view.ru($);F.Cs&&(F=await zS(k.localStore,D.query,!1).then(({documents:C})=>D.view.ru(C,F)));const te=H&&H.targetChanges.get(D.targetId),L=H&&H.targetMismatches.get(D.targetId)!=null,K=D.view.applyChanges(F,k.isPrimaryClient,te,L);return WS(k,D.targetId,K.au),K.snapshot}(t,b,E,I);const l=await zS(t.localStore,e,!0),c=new fk(e,l.Qs),m=c.ru(l.documents),d=Ac.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),p=c.applyChanges(m,t.isPrimaryClient,d);WS(t,n,p.au);const y=new dk(e,n,c);return t.Tu.set(e,y),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),p.snapshot}async function bk(t,e,n){const i=Ne(t),s=i.Tu.get(e),l=i.Iu.get(s.targetId);if(l.length>1)return i.Iu.set(s.targetId,l.filter(c=>!Hd(c,e))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Iy(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),n&&Cv(i.remoteStore,s.targetId),Py(i,s.targetId)}).catch(Al)):(Py(i,s.targetId),await Iy(i.localStore,s.targetId,!0))}async function _k(t,e){const n=Ne(t),i=n.Tu.get(e),s=n.Iu.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Cv(n.remoteStore,i.targetId))}async function Sk(t,e,n){const i=Rk(t);try{const s=await function(c,m){const d=Ne(c),p=St.now(),y=m.reduce((I,P)=>I.add(P.key),Ge());let b,E;return d.persistence.runTransaction("Locally write mutations","readwrite",I=>{let P=Wi(),k=Ge();return d.Ns.getEntries(I,y).next(D=>{P=D,P.forEach(($,H)=>{H.isValidDocument()||(k=k.add($))})}).next(()=>d.localDocuments.getOverlayedDocuments(I,P)).next(D=>{b=D;const $=[];for(const H of m){const F=NP(H,b.get(H.key).overlayedDocument);F!=null&&$.push(new Zs(H.key,F,Uw(F.value.mapValue),Dr.exists(!0)))}return d.mutationQueue.addMutationBatch(I,p,$,m)}).next(D=>{E=D;const $=D.applyToLocalDocumentSet(b,k);return d.documentOverlayCache.saveOverlays(I,D.batchId,$)})}).then(()=>({batchId:E.batchId,changes:Xw(b)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(c,m,d){let p=c.Vu[c.currentUser.toKey()];p||(p=new Rt(qe)),p=p.insert(m,d),c.Vu[c.currentUser.toKey()]=p}(i,s.batchId,n),await Rc(i,s.changes),await Wd(i.remoteStore)}catch(s){const l=Pv(s,"Failed to persist write");n.reject(l)}}async function Mx(t,e){const n=Ne(t);try{const i=await kM(n.localStore,e);e.targetChanges.forEach((s,l)=>{const c=n.Au.get(l);c&&(st(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?c.hu=!0:s.modifiedDocuments.size>0?st(c.hu,14607):s.removedDocuments.size>0&&(st(c.hu,42227),c.hu=!1))}),await Rc(n,i,e)}catch(i){await Al(i)}}function XS(t,e,n){const i=Ne(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Tu.forEach((l,c)=>{const m=c.view.va(e);m.snapshot&&s.push(m.snapshot)}),function(c,m){const d=Ne(c);d.onlineState=m;let p=!1;d.queries.forEach((y,b)=>{for(const E of b.Sa)E.va(m)&&(p=!0)}),p&&Mv(d)}(i.eventManager,e),s.length&&i.Pu.H_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Ek(t,e,n){const i=Ne(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Au.get(e),l=s&&s.key;if(l){let c=new Rt(xe.comparator);c=c.insert(l,On.newNoDocument(l,ke.min()));const m=Ge().add(l),d=new Yd(ke.min(),new Map,new Rt(qe),c,m);await Mx(i,d),i.du=i.du.remove(l),i.Au.delete(e),Vv(i)}else await Iy(i.localStore,e,!1).then(()=>Py(i,e,n)).catch(Al)}async function Tk(t,e){const n=Ne(t),i=e.batch.batchId;try{const s=await MM(n.localStore,e);Vx(n,i,null),kx(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Rc(n,s)}catch(s){await Al(s)}}async function wk(t,e,n){const i=Ne(t);try{const s=await function(c,m){const d=Ne(c);return d.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return d.mutationQueue.lookupMutationBatch(p,m).next(b=>(st(b!==null,37113),y=b.keys(),d.mutationQueue.removeMutationBatch(p,b))).next(()=>d.mutationQueue.performConsistencyCheck(p)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(p,y,m)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>d.localDocuments.getDocuments(p,y))})}(i.localStore,e);Vx(i,e,n),kx(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Rc(i,s)}catch(s){await Al(s)}}function kx(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Vx(t,e,n){const i=Ne(t);let s=i.Vu[i.currentUser.toKey()];if(s){const l=s.get(e);l&&(n?l.reject(n):l.resolve(),s=s.remove(e)),i.Vu[i.currentUser.toKey()]=s}}function Py(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Iu.get(e))t.Tu.delete(i),n&&t.Pu.yu(i,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(i=>{t.Ru.containsKey(i)||Nx(t,i)})}function Nx(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Cv(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Vv(t))}function WS(t,e,n){for(const i of n)i instanceof Ox?(t.Ru.addReference(i.key,e),xk(t,i)):i instanceof Dx?(pe(kv,"Document no longer in limbo: "+i.key),t.Ru.removeReference(i.key,e),t.Ru.containsKey(i.key)||Nx(t,i.key)):Oe(19791,{wu:i})}function xk(t,e){const n=e.key,i=n.path.canonicalString();t.du.get(n)||t.Eu.has(i)||(pe(kv,"New document in limbo: "+n),t.Eu.add(i),Vv(t))}function Vv(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new xe(_t.fromString(e)),i=t.fu.next();t.Au.set(i,new mk(n)),t.du=t.du.insert(n,i),Sx(t.remoteStore,new $a(ti(yv(n.path)),i,"TargetPurposeLimboResolution",Ud.ce))}}async function Rc(t,e,n){const i=Ne(t),s=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach((m,d)=>{c.push(i.pu(d,e,n).then(p=>{if((p||n)&&i.isPrimaryClient){const y=p?!p.fromCache:n?.targetChanges.get(d.targetId)?.current;i.sharedClientState.updateQueryState(d.targetId,y?"current":"not-current")}if(p){s.push(p);const y=xv.As(d.targetId,p);l.push(y)}}))}),await Promise.all(c),i.Pu.H_(s),await async function(d,p){const y=Ne(d);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>le.forEach(p,E=>le.forEach(E.Es,I=>y.persistence.referenceDelegate.addReference(b,E.targetId,I)).next(()=>le.forEach(E.ds,I=>y.persistence.referenceDelegate.removeReference(b,E.targetId,I)))))}catch(b){if(!Cl(b))throw b;pe(Av,"Failed to update sequence numbers: "+b)}for(const b of p){const E=b.targetId;if(!b.fromCache){const I=y.Ms.get(E),P=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(P);y.Ms=y.Ms.insert(E,k)}}}(i.localStore,l))}async function Ak(t,e){const n=Ne(t);if(!n.currentUser.isEqual(e)){pe(kv,"User change. New user:",e.toKey());const i=await yx(n.localStore,e);n.currentUser=e,function(l,c){l.mu.forEach(m=>{m.forEach(d=>{d.reject(new ve(ue.CANCELLED,c))})}),l.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Rc(n,i.Ls)}}function Ck(t,e){const n=Ne(t),i=n.Au.get(e);if(i&&i.hu)return Ge().add(i.key);{let s=Ge();const l=n.Iu.get(e);if(!l)return s;for(const c of l){const m=n.Tu.get(c);s=s.unionWith(m.view.nu)}return s}}function $x(t){const e=Ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ck.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ek.bind(null,e),e.Pu.H_=ck.bind(null,e.eventManager),e.Pu.yu=hk.bind(null,e.eventManager),e}function Rk(t){const e=Ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Tk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wk.bind(null,e),e}class hd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return PM(this.persistence,new IM,e.initialUser,this.serializer)}Cu(e){return new gx(wv.mi,this.serializer)}Du(e){return new jM}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hd.provider={build:()=>new hd};class Ik extends hd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){st(this.persistence.referenceDelegate instanceof ud,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new mM(i,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Fn.withCacheSize(this.cacheSizeBytes):Fn.DEFAULT;return new gx(i=>ud.mi(i,n),this.serializer)}}class My{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>XS(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ak.bind(null,this.syncEngine),await ok(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uk}()}createDatastore(e){const n=Kd(e.databaseInfo.databaseId),i=function(l){return new HM(l)}(e.databaseInfo);return function(l,c,m,d){return new YM(l,c,m,d)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,l,c,m){return new XM(i,s,l,c,m)}(this.localStore,this.datastore,e.asyncQueue,n=>XS(this.syncEngine,n,0),function(){return HS.v()?new HS:new UM}())}createSyncEngine(e,n){return function(s,l,c,m,d,p,y){const b=new pk(s,l,c,m,d,p);return y&&(b.gu=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const i=Ne(n);pe(Gs,"RemoteStore shutting down."),i.Ea.add(5),await Cc(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}My.provider={build:()=>new My};/**
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
 */class Lx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ki("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Xa="FirestoreClient";class Ok{constructor(e,n,i,s,l){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=In.UNAUTHENTICATED,this.clientId=cv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{pe(Xa,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(pe(Xa,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Pv(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ng(t,e){t.asyncQueue.verifyOperationInProgress(),pe(Xa,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await yx(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ZS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Dk(t);pe(Xa,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>GS(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>GS(e.remoteStore,s)),t._onlineComponents=e}async function Dk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){pe(Xa,"Using user provided OfflineComponentProvider");try{await Ng(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===ue.FAILED_PRECONDITION||s.code===ue.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;dl("Error using user provided cache. Falling back to memory cache: "+n),await Ng(t,new hd)}}else pe(Xa,"Using default OfflineComponentProvider"),await Ng(t,new Ik(void 0));return t._offlineComponents}async function jx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(pe(Xa,"Using user provided OnlineComponentProvider"),await ZS(t,t._uninitializedComponentsProvider._online)):(pe(Xa,"Using default OnlineComponentProvider"),await ZS(t,new My))),t._onlineComponents}function Pk(t){return jx(t).then(e=>e.syncEngine)}async function Ux(t){const e=await jx(t),n=e.eventManager;return n.onListen=gk.bind(null,e.syncEngine),n.onUnlisten=bk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_k.bind(null,e.syncEngine),n}function Mk(t,e,n={}){const i=new qi;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,m,d,p){const y=new Lx({next:E=>{y.Nu(),c.enqueueAndForget(()=>Rx(l,b));const I=E.docs.has(m);!I&&E.fromCache?p.reject(new ve(ue.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&E.fromCache&&d&&d.source==="server"?p.reject(new ve(ue.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(E)},error:E=>p.reject(E)}),b=new Ix(yv(m.path),y,{includeMetadataChanges:!0,qa:!0});return Cx(l,b)}(await Ux(t),t.asyncQueue,e,n,i)),i.promise}function kk(t,e,n={}){const i=new qi;return t.asyncQueue.enqueueAndForget(async()=>function(l,c,m,d,p){const y=new Lx({next:E=>{y.Nu(),c.enqueueAndForget(()=>Rx(l,b)),E.fromCache&&d.source==="server"?p.reject(new ve(ue.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(E)},error:E=>p.reject(E)}),b=new Ix(m,y,{includeMetadataChanges:!0,qa:!0});return Cx(l,b)}(await Ux(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function zx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const JS=new Map;/**
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
 */const Bx="firestore.googleapis.com",eE=!0;class tE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ve(ue.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bx,this.ssl=eE}else this.host=e.host,this.ssl=e.ssl??eE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=px;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fM)throw new ve(ue.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}K4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zx(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ve(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ve(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ve(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zd{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ve(ue.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ve(ue.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new j4;switch(i.type){case"firstParty":return new F4(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ve(ue.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=JS.get(n);i&&(pe("ComponentProvider","Removing Datastore"),JS.delete(n),i.terminate())}(this),Promise.resolve()}}function Vk(t,e,n,i={}){t=Xi(t,Zd);const s=Tl(e),l=t._getSettings(),c={...l,emulatorOptions:t._getEmulatorOptions()},m=`${e}:${n}`;s&&(dw(`https://${m}`),mw("Firestore",!0)),l.host!==Bx&&l.host!==m&&dl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...l,host:m,ssl:s,emulatorOptions:i};if(!Fs(d,c)&&(t._setSettings(d),i.mockUserToken)){let p,y;if(typeof i.mockUserToken=="string")p=i.mockUserToken,y=In.MOCK_USER;else{p=cD(i.mockUserToken,t._app?.options.projectId);const b=i.mockUserToken.sub||i.mockUserToken.user_id;if(!b)throw new ve(ue.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new In(b)}t._authCredentials=new U4(new Rw(p,y))}}/**
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
 */class Jd{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Jd(this.firestore,e,this._query)}}class tn{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ha(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tn(this.firestore,e,this._key)}toJSON(){return{type:tn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(wc(n,tn._jsonSchema))return new tn(e,i||null,new xe(_t.fromString(n.referencePath)))}}tn._jsonSchemaVersion="firestore/documentReference/1.0",tn._jsonSchema={type:Gt("string",tn._jsonSchemaVersion),referencePath:Gt("string")};class Ha extends Jd{constructor(e,n,i){super(e,n,yv(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tn(this.firestore,null,new xe(e))}withConverter(e){return new Ha(this.firestore,e,this._path)}}function Fx(t,e,...n){if(t=Hn(t),Iw("collection","path",e),t instanceof Zd){const i=_t.fromString(e,...n);return pS(i),new Ha(t,null,i)}{if(!(t instanceof tn||t instanceof Ha))throw new ve(ue.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(_t.fromString(e,...n));return pS(i),new Ha(t.firestore,null,i)}}function em(t,e,...n){if(t=Hn(t),arguments.length===1&&(e=cv.newId()),Iw("doc","path",e),t instanceof Zd){const i=_t.fromString(e,...n);return mS(i),new tn(t,null,new xe(i))}{if(!(t instanceof tn||t instanceof Ha))throw new ve(ue.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(_t.fromString(e,...n));return mS(i),new tn(t.firestore,t instanceof Ha?t.converter:null,new xe(i))}}/**
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
 */const nE="AsyncQueue";class rE{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bx(this,"async_queue_retry"),this._c=()=>{const i=Vg();i&&pe(nE,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=Vg();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Vg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new qi;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Cl(e))throw e;pe(nE,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(i=>{throw this.nc=i,this.rc=!1,Ki("INTERNAL UNHANDLED ERROR: ",iE(i)),i}).then(i=>(this.rc=!1,i))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Dv.createAndSchedule(this,e,n,i,l=>this.hc(l));return this.tc.push(s),s}uc(){this.nc&&Oe(47125,{Pc:iE(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function iE(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Il extends Zd{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new rE,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rE(e),this._firestoreClient=void 0,await e}}}function Nk(t,e){const n=typeof t=="object"?t:vw(),i=typeof t=="string"?t:nd,s=lv(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const l=lD("firestore");l&&Vk(s,...l)}return s}function Nv(t){if(t._terminated)throw new ve(ue.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||$k(t),t._firestoreClient}function $k(t){const e=t._freezeSettings(),n=function(s,l,c,m){return new sP(s,l,c,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,zx(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Ok(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const l=s?._online.build();return{_offline:s?._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class br{constructor(e){this._byteString=e}static fromBase64String(e){try{return new br(Tn.fromBase64String(e))}catch(n){throw new ve(ue.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new br(Tn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:br._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wc(e,br._jsonSchema))return br.fromBase64String(e.bytes)}}br._jsonSchemaVersion="firestore/bytes/1.0",br._jsonSchema={type:Gt("string",br._jsonSchemaVersion),bytes:Gt("string")};/**
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
 */class $v{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ve(ue.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new En(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Hx{constructor(e){this._methodName=e}}/**
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
 */class ri{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ve(ue.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ve(ue.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return qe(this._lat,e._lat)||qe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ri._jsonSchemaVersion}}static fromJSON(e){if(wc(e,ri._jsonSchema))return new ri(e.latitude,e.longitude)}}ri._jsonSchemaVersion="firestore/geoPoint/1.0",ri._jsonSchema={type:Gt("string",ri._jsonSchemaVersion),latitude:Gt("number"),longitude:Gt("number")};/**
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
 */class ii{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==s[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ii._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wc(e,ii._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new ii(e.vectorValues);throw new ve(ue.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ii._jsonSchemaVersion="firestore/vectorValue/1.0",ii._jsonSchema={type:Gt("string",ii._jsonSchemaVersion),vectorValues:Gt("object")};/**
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
 */const Lk=/^__.*__$/;class jk{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Zs(e,this.data,this.fieldMask,n,this.fieldTransforms):new xc(e,this.data,n,this.fieldTransforms)}}function qx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Oe(40011,{Ac:t})}}class Lv{constructor(e,n,i,s,l,c){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Lv({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),i=this.Vc({path:n,fc:!1});return i.gc(e),i}yc(e){const n=this.path?.child(e),i=this.Vc({path:n,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return fd(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(qx(this.Ac)&&Lk.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Uk{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Kd(e)}Cc(e,n,i,s=!1){return new Lv({Ac:e,methodName:n,Dc:i,path:En.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gx(t){const e=t._freezeSettings(),n=Kd(t._databaseId);return new Uk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Qx(t,e,n,i,s,l={}){const c=t.Cc(l.merge||l.mergeFields?2:0,e,n,s);Wx("Data must be an object, but it was:",c,i);const m=Kx(i,c);let d,p;if(l.merge)d=new Rr(c.fieldMask),p=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const b of l.mergeFields){const E=zk(e,b,n);if(!c.contains(E))throw new ve(ue.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Fk(y,E)||y.push(E)}d=new Rr(y),p=c.fieldTransforms.filter(b=>d.covers(b.field))}else d=null,p=c.fieldTransforms;return new jk(new vr(m),d,p)}function Yx(t,e){if(Xx(t=Hn(t)))return Wx("Unsupported field value:",e,t),Kx(t,e);if(t instanceof Hx)return function(i,s){if(!qx(s.Ac))throw s.Sc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(s);l&&s.fieldTransforms.push(l)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(i,s){const l=[];let c=0;for(const m of i){let d=Yx(m,s.wc(c));d==null&&(d={nullValue:"NULL_VALUE"}),l.push(d),c++}return{arrayValue:{values:l}}}(t,e)}return function(i,s){if((i=Hn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return OP(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=St.fromDate(i);return{timestampValue:ld(s.serializer,l)}}if(i instanceof St){const l=new St(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ld(s.serializer,l)}}if(i instanceof ri)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof br)return{bytesValue:lx(s.serializer,i._byteString)};if(i instanceof tn){const l=s.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw s.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Ev(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof ii)return function(c,m){return{mapValue:{fields:{[Lw]:{stringValue:jw},[rd]:{arrayValue:{values:c.toArray().map(p=>{if(typeof p!="number")throw m.Sc("VectorValues must only contain numeric values.");return vv(m.serializer,p)})}}}}}}(i,s);throw s.Sc(`Unsupported field value: ${hv(i)}`)}(t,e)}function Kx(t,e){const n={};return Pw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xs(t,(i,s)=>{const l=Yx(s,e.mc(i));l!=null&&(n[i]=l)}),{mapValue:{fields:n}}}function Xx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof St||t instanceof ri||t instanceof br||t instanceof tn||t instanceof Hx||t instanceof ii)}function Wx(t,e,n){if(!Xx(n)||!Ow(n)){const i=hv(n);throw i==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+i)}}function zk(t,e,n){if((e=Hn(e))instanceof $v)return e._internalPath;if(typeof e=="string")return Zx(t,e);throw fd("Field path arguments must be of type string or ",t,!1,void 0,n)}const Bk=new RegExp("[~\\*/\\[\\]]");function Zx(t,e,n){if(e.search(Bk)>=0)throw fd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $v(...e.split("."))._internalPath}catch{throw fd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fd(t,e,n,i,s){const l=i&&!i.isEmpty(),c=s!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let d="";return(l||c)&&(d+=" (found",l&&(d+=` in field ${i}`),c&&(d+=` in document ${s}`),d+=")"),new ve(ue.INVALID_ARGUMENT,m+t+d)}function Fk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Jx{constructor(e,n,i,s,l){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Hk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(eA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Hk extends Jx{data(){return super.data()}}function eA(t,e){return typeof e=="string"?Zx(t,e):e instanceof $v?e._internalPath:e._delegate._internalPath}/**
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
 */function qk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ve(ue.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gk{convertValue(e,n="none"){switch(Ya(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qa(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Xs(e,(s,l)=>{i[s]=this.convertValue(l,n)}),i}convertVectorValue(e){const n=e.fields?.[rd].arrayValue?.values?.map(i=>$t(i.doubleValue));return new ii(n)}convertGeoPoint(e){return new ri($t(e.latitude),$t(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Bd(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(cc(e));default:return null}}convertTimestamp(e){const n=Ga(e);return new St(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=_t.fromString(e);st(mx(i),9688,{name:e});const s=new hc(i.get(1),i.get(3)),l=new xe(i.popFirst(5));return s.isEqual(n)||Ki(`Document ${l} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),l}}/**
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
 */function tA(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class Xu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class js extends Jx{constructor(e,n,i,s,l,c){super(e,n,i,s,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $f(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(eA("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ve(ue.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=js._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}js._jsonSchemaVersion="firestore/documentSnapshot/1.0",js._jsonSchema={type:Gt("string",js._jsonSchemaVersion),bundleSource:Gt("string","DocumentSnapshot"),bundleName:Gt("string"),bundle:Gt("string")};class $f extends js{data(e={}){return super.data(e)}}class nl{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xu(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new $f(this._firestore,this._userDataWriter,i.key,i,new Xu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ve(ue.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,l){if(s._snapshot.oldDocs.isEmpty()){let c=0;return s._snapshot.docChanges.map(m=>{const d=new $f(s._firestore,s._userDataWriter,m.doc.key,m.doc,new Xu(s._snapshot.mutatedKeys.has(m.doc.key),s._snapshot.fromCache),s.query.converter);return m.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}})}{let c=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(m=>l||m.type!==3).map(m=>{const d=new $f(s._firestore,s._userDataWriter,m.doc.key,m.doc,new Xu(s._snapshot.mutatedKeys.has(m.doc.key),s._snapshot.fromCache),s.query.converter);let p=-1,y=-1;return m.type!==0&&(p=c.indexOf(m.doc.key),c=c.delete(m.doc.key)),m.type!==1&&(c=c.add(m.doc),y=c.indexOf(m.doc.key)),{type:Qk(m.type),doc:d,oldIndex:p,newIndex:y}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ve(ue.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=nl._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=cv.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],s=[];return this.docs.forEach(l=>{l._document!==null&&(n.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),s.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Qk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Oe(61501,{type:t})}}/**
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
 */function Yk(t){t=Xi(t,tn);const e=Xi(t.firestore,Il);return Mk(Nv(e),t._key).then(n=>Jk(e,t,n))}nl._jsonSchemaVersion="firestore/querySnapshot/1.0",nl._jsonSchema={type:Gt("string",nl._jsonSchemaVersion),bundleSource:Gt("string","QuerySnapshot"),bundleName:Gt("string"),bundle:Gt("string")};class nA extends Gk{constructor(e){super(),this.firestore=e}convertBytes(e){return new br(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tn(this.firestore,null,n)}}function Kk(t){t=Xi(t,Jd);const e=Xi(t.firestore,Il),n=Nv(e),i=new nA(e);return qk(t._query),kk(n,t._query).then(s=>new nl(e,i,t,s))}function Xk(t,e,n){t=Xi(t,tn);const i=Xi(t.firestore,Il),s=tA(t.converter,e,n);return jv(i,[Qx(Gx(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Dr.none())])}function Wk(t){return jv(Xi(t.firestore,Il),[new bv(t._key,Dr.none())])}function Zk(t,e){const n=Xi(t.firestore,Il),i=em(t),s=tA(t.converter,e);return jv(n,[Qx(Gx(t.firestore),"addDoc",i._key,s,t.converter!==null,{}).toMutation(i._key,Dr.exists(!1))]).then(()=>i)}function jv(t,e){return function(i,s){const l=new qi;return i.asyncQueue.enqueueAndForget(async()=>Sk(await Pk(i),s,l)),l.promise}(Nv(t),e)}function Jk(t,e,n){const i=n.docs.get(e._key),s=new nA(t);return new js(t,s,e._key,i,new Xu(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){xl=s})(wl),fl(new Hs("firestore",(i,{instanceIdentifier:s,options:l})=>{const c=i.getProvider("app").getImmediate(),m=new Il(new z4(i.getProvider("auth-internal")),new H4(c,i.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new ve(ue.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hc(p.options.projectId,y)}(c,s),c);return l={useFetchStreams:n,...l},m._setSettings(l),m},"PUBLIC").setMultipleInstances(!0)),Ba(cS,hS,e),Ba(cS,hS,"esm2020")})();function rA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eV=rA,iA=new Ec("auth","Firebase",rA());/**
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
 */const dd=new sv("@firebase/auth");function tV(t,...e){dd.logLevel<=He.WARN&&dd.warn(`Auth (${wl}): ${t}`,...e)}function Lf(t,...e){dd.logLevel<=He.ERROR&&dd.error(`Auth (${wl}): ${t}`,...e)}/**
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
 */function ui(t,...e){throw zv(t,...e)}function Pr(t,...e){return zv(t,...e)}function Uv(t,e,n){const i={...eV(),[e]:n};return new Ec("auth","Firebase",i).create(e,{appName:t.name})}function Us(t){return Uv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nV(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ui(t,"argument-error"),Uv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zv(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return iA.create(t,...e)}function Pe(t,e,...n){if(!t)throw zv(e,...n)}function Bi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lf(e),new Error(e)}function Zi(t,e){t||Bi(e)}/**
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
 */function ky(){return typeof self<"u"&&self.location?.href||""}function rV(){return aE()==="http:"||aE()==="https:"}function aE(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function iV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rV()||gD()||"connection"in navigator)?navigator.onLine:!0}function aV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ic{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zi(n>e,"Short delay should be less than long delay!"),this.isMobile=dD()||yD()}get(){return iV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bv(t,e){Zi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class aA{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oV=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lV=new Ic(3e4,6e4);function Fv(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ol(t,e,n,i,s={}){return sA(t,s,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const m=Tc({key:t.config.apiKey,...c}).slice(1),d=await t._getAdditionalHeaders();d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode);const p={method:e,headers:d,...l};return pD()||(p.referrerPolicy="no-referrer"),t.emulatorConfig&&Tl(t.emulatorConfig.host)&&(p.credentials="include"),aA.fetch()(await oA(t,t.config.apiHost,n,m),p)})}async function sA(t,e,n){t._canInitEmulator=!1;const i={...sV,...e};try{const s=new cV(t),l=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw pf(t,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const m=l.ok?c.errorMessage:c.error.message,[d,p]=m.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw pf(t,"credential-already-in-use",c);if(d==="EMAIL_EXISTS")throw pf(t,"email-already-in-use",c);if(d==="USER_DISABLED")throw pf(t,"user-disabled",c);const y=i[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Uv(t,y,p);ui(t,y)}}catch(s){if(s instanceof ea)throw s;ui(t,"network-request-failed",{message:String(s)})}}async function uV(t,e,n,i,s={}){const l=await Ol(t,e,n,i,s);return"mfaPendingCredential"in l&&ui(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function oA(t,e,n,i){const s=`${e}${n}?${i}`,l=t,c=l.config.emulator?Bv(t.config,s):`${t.config.apiScheme}://${s}`;return oV.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class cV{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Pr(this.auth,"network-request-failed")),lV.get())})}}function pf(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Pr(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function hV(t,e){return Ol(t,"POST","/v1/accounts:delete",e)}async function md(t,e){return Ol(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ic(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fV(t,e=!1){const n=Hn(t),i=await n.getIdToken(e),s=Hv(i);Pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const l=typeof s.firebase=="object"?s.firebase:void 0,c=l?.sign_in_provider;return{claims:s,token:i,authTime:ic($g(s.auth_time)),issuedAtTime:ic($g(s.iat)),expirationTime:ic($g(s.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function $g(t){return Number(t)*1e3}function Hv(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Lf("JWT malformed, contained fewer than 3 sections"),null;try{const s=uw(n);return s?JSON.parse(s):(Lf("Failed to decode base64 JWT payload"),null)}catch(s){return Lf("Caught error parsing JWT payload as JSON",s?.toString()),null}}function sE(t){const e=Hv(t);return Pe(e,"internal-error"),Pe(typeof e.exp<"u","internal-error"),Pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pc(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ea&&dV(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function dV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ic(this.lastLoginAt),this.creationTime=ic(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pd(t){const e=t.auth,n=await t.getIdToken(),i=await pc(t,md(e,{idToken:n}));Pe(i?.users.length,e,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const l=s.providerUserInfo?.length?lA(s.providerUserInfo):[],c=gV(t.providerData,l),m=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!c?.length,p=m?d:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Vy(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,y)}async function pV(t){const e=Hn(t);await pd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gV(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function lA(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function yV(t,e){const n=await sA(t,{},async()=>{const i=Tc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:l}=t.config,c=await oA(t,s,"/v1/token",`key=${l}`),m=await t._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:m,body:i};return t.emulatorConfig&&Tl(t.emulatorConfig.host)&&(d.credentials="include"),aA.fetch()(c,d)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vV(t,e){return Ol(t,"POST","/v2/accounts:revokeToken",Fv(t,e))}/**
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
 */class rl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Pe(e.idToken,"internal-error"),Pe(typeof e.idToken<"u","internal-error"),Pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Pe(e.length!==0,"internal-error");const n=sE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:l}=await yV(e,n);this.updateTokensAndExpiration(i,s,Number(l))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:l}=n,c=new rl;return i&&(Pe(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),s&&(Pe(typeof s=="string","internal-error",{appName:e}),c.accessToken=s),l&&(Pe(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rl,this.toJSON())}_performRefresh(){return Bi("not implemented")}}/**
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
 */function Da(t,e){Pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ir{constructor({uid:e,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new mV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pc(this,this.stsTokenManager.getToken(this.auth,e));return Pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fV(this,e)}reload(){return pV(this)}_assign(e){this!==e&&(Pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ir({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await pd(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cr(this.auth.app))return Promise.reject(Us(this.auth));const e=await this.getIdToken();return await pc(this,hV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,s=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,m=n.tenantId??void 0,d=n._redirectEventId??void 0,p=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:b,emailVerified:E,isAnonymous:I,providerData:P,stsTokenManager:k}=n;Pe(b&&k,e,"internal-error");const D=rl.fromJSON(this.name,k);Pe(typeof b=="string",e,"internal-error"),Da(i,e.name),Da(s,e.name),Pe(typeof E=="boolean",e,"internal-error"),Pe(typeof I=="boolean",e,"internal-error"),Da(l,e.name),Da(c,e.name),Da(m,e.name),Da(d,e.name),Da(p,e.name),Da(y,e.name);const $=new Ir({uid:b,auth:e,email:s,emailVerified:E,displayName:i,isAnonymous:I,photoURL:c,phoneNumber:l,tenantId:m,stsTokenManager:D,createdAt:p,lastLoginAt:y});return P&&Array.isArray(P)&&($.providerData=P.map(H=>({...H}))),d&&($._redirectEventId=d),$}static async _fromIdTokenResponse(e,n,i=!1){const s=new rl;s.updateFromServerResponse(n);const l=new Ir({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await pd(l),l}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];Pe(s.localId!==void 0,"internal-error");const l=s.providerUserInfo!==void 0?lA(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!l?.length,m=new rl;m.updateFromIdToken(i);const d=new Ir({uid:s.localId,auth:e,stsTokenManager:m,isAnonymous:c}),p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Vy(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!l?.length};return Object.assign(d,p),d}}/**
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
 */const oE=new Map;function Fi(t){Zi(t instanceof Function,"Expected a class definition");let e=oE.get(t);return e?(Zi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,oE.set(t,e),e)}/**
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
 */class uA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uA.type="NONE";const lE=uA;/**
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
 */function jf(t,e,n){return`firebase:${t}:${e}:${n}`}class il{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:l}=this.auth;this.fullUserKey=jf(this.userKey,s.apiKey,l),this.fullPersistenceKey=jf("persistence",s.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await md(this.auth,{idToken:e}).catch(()=>{});return n?Ir._fromGetAccountInfoResponse(this.auth,n,e):null}return Ir._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new il(Fi(lE),e,i);const s=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let l=s[0]||Fi(lE);const c=jf(i,e.config.apiKey,e.name);let m=null;for(const p of n)try{const y=await p._get(c);if(y){let b;if(typeof y=="string"){const E=await md(e,{idToken:y}).catch(()=>{});if(!E)break;b=await Ir._fromGetAccountInfoResponse(e,E,y)}else b=Ir._fromJSON(e,y);p!==l&&(m=b),l=p;break}}catch{}const d=s.filter(p=>p._shouldAllowMigration);return!l._shouldAllowMigration||!d.length?new il(l,e,i):(l=d[0],m&&await l._set(c,m.toJSON()),await Promise.all(n.map(async p=>{if(p!==l)try{await p._remove(c)}catch{}})),new il(l,e,i))}}/**
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
 */function uE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pA(e))return"Blackberry";if(gA(e))return"Webos";if(hA(e))return"Safari";if((e.includes("chrome/")||fA(e))&&!e.includes("edge/"))return"Chrome";if(mA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function cA(t=Pn()){return/firefox\//i.test(t)}function hA(t=Pn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fA(t=Pn()){return/crios\//i.test(t)}function dA(t=Pn()){return/iemobile/i.test(t)}function mA(t=Pn()){return/android/i.test(t)}function pA(t=Pn()){return/blackberry/i.test(t)}function gA(t=Pn()){return/webos/i.test(t)}function qv(t=Pn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bV(t=Pn()){return qv(t)&&!!window.navigator?.standalone}function _V(){return vD()&&document.documentMode===10}function yA(t=Pn()){return qv(t)||mA(t)||gA(t)||pA(t)||/windows phone/i.test(t)||dA(t)}/**
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
 */function vA(t,e=[]){let n;switch(t){case"Browser":n=uE(Pn());break;case"Worker":n=`${uE(Pn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wl}/${i}`}/**
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
 */class SV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=l=>new Promise((c,m)=>{try{const d=e(l);c(d)}catch(d){m(d)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function EV(t,e={}){return Ol(t,"GET","/v2/passwordPolicy",Fv(t,e))}/**
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
 */const TV=6;class wV{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??TV,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class xV{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cE(this),this.idTokenSubscription=new cE(this),this.beforeStateQueue=new SV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fi(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await il.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await md(this,{idToken:e}),i=await Ir._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Cr(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,c=i?._redirectEventId,m=await this.tryRedirectSignIn(e);(!l||l===c)&&m?.user&&(i=m.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pd(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cr(this.app))return Promise.reject(Us(this));const n=e?Hn(e):null;return n&&Pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cr(this.app)?Promise.reject(Us(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cr(this.app)?Promise.reject(Us(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EV(this),n=new wV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ec("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await vV(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fi(e)||this._popupRedirectResolver;Pe(n,this,"argument-error"),this.redirectPersistenceManager=await il.create(this,[Fi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Pe(m,this,"internal-error"),m.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const d=e.addObserver(n,i,s);return()=>{c=!0,d()}}else{const d=e.addObserver(n);return()=>{c=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(Cr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&tV(`Error while retrieving App Check token: ${e.error}`),e?.token}}function tm(t){return Hn(t)}class cE{constructor(e){this.auth=e,this.observer=null,this.addObserver=AD(n=>this.observer=n)}get next(){return Pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gv={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AV(t){Gv=t}function CV(t){return Gv.loadJS(t)}function RV(){return Gv.gapiScript}function IV(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function OV(t,e){const n=lv(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),l=n.getOptions();if(Fs(l,e??{}))return s;ui(s,"already-initialized")}return n.initialize({options:e})}function DV(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(Fi);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function PV(t,e,n){const i=tm(t);Pe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,l=bA(e),{host:c,port:m}=MV(e),d=m===null?"":`:${m}`,p={url:`${l}//${c}${d}/`},y=Object.freeze({host:c,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){Pe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Pe(Fs(p,i.config.emulator)&&Fs(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=p,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,Tl(c)?(dw(`${l}//${c}${d}`),mw("Auth",!0)):kV()}function bA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MV(t){const e=bA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const l=s[1];return{host:l,port:hE(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:hE(c)}}}function hE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class _A{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bi("not implemented")}_getIdTokenResponse(e){return Bi("not implemented")}_linkToIdToken(e,n){return Bi("not implemented")}_getReauthenticationResolver(e){return Bi("not implemented")}}/**
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
 */async function al(t,e){return uV(t,"POST","/v1/accounts:signInWithIdp",Fv(t,e))}/**
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
 */const VV="http://localhost";class Qs extends _A{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ui("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...l}=n;if(!i||!s)return null;const c=new Qs(i,s);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return al(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,al(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,al(e,n)}buildRequest(){const e={requestUri:VV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Tc(n)}return e}}/**
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
 */class Qv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oc extends Qv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ka extends Oc{constructor(){super("facebook.com")}static credential(e){return Qs._fromParams({providerId:ka.PROVIDER_ID,signInMethod:ka.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ka.credentialFromTaggedObject(e)}static credentialFromError(e){return ka.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ka.credential(e.oauthAccessToken)}catch{return null}}}ka.FACEBOOK_SIGN_IN_METHOD="facebook.com";ka.PROVIDER_ID="facebook.com";/**
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
 */class Ui extends Oc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qs._fromParams({providerId:Ui.PROVIDER_ID,signInMethod:Ui.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ui.credentialFromTaggedObject(e)}static credentialFromError(e){return Ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ui.credential(n,i)}catch{return null}}}Ui.GOOGLE_SIGN_IN_METHOD="google.com";Ui.PROVIDER_ID="google.com";/**
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
 */class Va extends Oc{constructor(){super("github.com")}static credential(e){return Qs._fromParams({providerId:Va.PROVIDER_ID,signInMethod:Va.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Va.credentialFromTaggedObject(e)}static credentialFromError(e){return Va.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Va.credential(e.oauthAccessToken)}catch{return null}}}Va.GITHUB_SIGN_IN_METHOD="github.com";Va.PROVIDER_ID="github.com";/**
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
 */class Na extends Oc{constructor(){super("twitter.com")}static credential(e,n){return Qs._fromParams({providerId:Na.PROVIDER_ID,signInMethod:Na.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Na.credentialFromTaggedObject(e)}static credentialFromError(e){return Na.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Na.credential(n,i)}catch{return null}}}Na.TWITTER_SIGN_IN_METHOD="twitter.com";Na.PROVIDER_ID="twitter.com";/**
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
 */class bl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const l=await Ir._fromIdTokenResponse(e,i,s),c=fE(i);return new bl({user:l,providerId:c,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=fE(i);return new bl({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function fE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class gd extends ea{constructor(e,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,gd.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new gd(e,n,i,s)}}function SA(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?gd._fromErrorAndOperation(t,l,e,i):l})}async function NV(t,e,n=!1){const i=await pc(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bl._forOperation(t,"link",i)}/**
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
 */async function $V(t,e,n=!1){const{auth:i}=t;if(Cr(i.app))return Promise.reject(Us(i));const s="reauthenticate";try{const l=await pc(t,SA(i,s,e,t),n);Pe(l.idToken,i,"internal-error");const c=Hv(l.idToken);Pe(c,i,"internal-error");const{sub:m}=c;return Pe(t.uid===m,i,"user-mismatch"),bl._forOperation(t,s,l)}catch(l){throw l?.code==="auth/user-not-found"&&ui(i,"user-mismatch"),l}}/**
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
 */async function LV(t,e,n=!1){if(Cr(t.app))return Promise.reject(Us(t));const i="signIn",s=await SA(t,i,e),l=await bl._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(l.user),l}/**
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
 */function jV(t,e){return Hn(t).setPersistence(e)}function UV(t,e,n,i){return Hn(t).onIdTokenChanged(e,n,i)}function zV(t,e,n){return Hn(t).beforeAuthStateChanged(e,n)}function BV(t,e,n,i){return Hn(t).onAuthStateChanged(e,n,i)}function FV(t){return Hn(t).signOut()}const yd="__sak";/**
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
 */class EA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yd,"1"),this.storage.removeItem(yd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const HV=1e3,qV=10;class TA extends EA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,m,d)=>{this.notifyListeners(c,d)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const c=this.storage.getItem(i);!n&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);_V()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,qV):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},HV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TA.type="LOCAL";const wA=TA;/**
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
 */class xA extends EA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xA.type="SESSION";const AA=xA;/**
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
 */function GV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new nm(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:l}=n.data,c=this.handlersMap[s];if(!c?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const m=Array.from(c).map(async p=>p(n.origin,l)),d=await GV(m);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:d})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nm.receivers=[];/**
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
 */function Yv(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class QV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let l,c;return new Promise((m,d)=>{const p=Yv("",20);s.port1.start();const y=setTimeout(()=>{d(new Error("unsupported_event"))},i);c={messageChannel:s,onMessage(b){const E=b;if(E.data.eventId===p)switch(E.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(E.data.response);break;default:clearTimeout(y),clearTimeout(l),d(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:p,data:n},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function ai(){return window}function YV(t){ai().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(){return typeof ai().WorkerGlobalScope<"u"&&typeof ai().importScripts=="function"}async function KV(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XV(){return navigator?.serviceWorker?.controller||null}function WV(){return CA()?self:null}/**
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
 */const RA="firebaseLocalStorageDb",ZV=1,vd="firebaseLocalStorage",IA="fbase_key";class Dc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rm(t,e){return t.transaction([vd],e?"readwrite":"readonly").objectStore(vd)}function JV(){const t=indexedDB.deleteDatabase(RA);return new Dc(t).toPromise()}function Ny(){const t=indexedDB.open(RA,ZV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(vd,{keyPath:IA})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(vd)?e(i):(i.close(),await JV(),e(await Ny()))})})}async function dE(t,e,n){const i=rm(t,!0).put({[IA]:e,value:n});return new Dc(i).toPromise()}async function e6(t,e){const n=rm(t,!1).get(e),i=await new Dc(n).toPromise();return i===void 0?null:i.value}function mE(t,e){const n=rm(t,!0).delete(e);return new Dc(n).toPromise()}const t6=800,n6=3;class OA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ny(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>n6)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return CA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nm._getInstance(WV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await KV(),!this.activeServiceWorker)return;this.sender=new QV(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ny();return await dE(e,yd,"1"),await mE(e,yd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>dE(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>e6(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const l=rm(s,!1).getAll();return new Dc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:l}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(l)&&(this.notifyListeners(s,l),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}OA.type="LOCAL";const r6=OA;new Ic(3e4,6e4);/**
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
 */function DA(t,e){return e?Fi(e):(Pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kv extends _A{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return al(e,this._buildIdpRequest())}_linkToIdToken(e,n){return al(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return al(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function i6(t){return LV(t.auth,new Kv(t),t.bypassAuthState)}function a6(t){const{auth:e,user:n}=t;return Pe(n,e,"internal-error"),$V(n,new Kv(t),t.bypassAuthState)}async function s6(t){const{auth:e,user:n}=t;return Pe(n,e,"internal-error"),NV(n,new Kv(t),t.bypassAuthState)}/**
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
 */class PA{constructor(e,n,i,s,l=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:l,error:c,type:m}=e;if(c){this.reject(c);return}const d={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(d))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return i6;case"linkViaPopup":case"linkViaRedirect":return s6;case"reauthViaPopup":case"reauthViaRedirect":return a6;default:ui(this.auth,"internal-error")}}resolve(e){Zi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const o6=new Ic(2e3,1e4);async function l6(t,e,n){if(Cr(t.app))return Promise.reject(Pr(t,"operation-not-supported-in-this-environment"));const i=tm(t);nV(t,e,Qv);const s=DA(i,n);return new $s(i,"signInViaPopup",e,s).executeNotNull()}class $s extends PA{constructor(e,n,i,s,l){super(e,n,s,l),this.provider=i,this.authWindow=null,this.pollId=null,$s.currentPopupAction&&$s.currentPopupAction.cancel(),$s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Pe(e,this.auth,"internal-error"),e}async onExecution(){Zi(this.filter.length===1,"Popup operations only handle one event");const e=Yv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Pr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$s.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o6.get())};e()}}$s.currentPopupAction=null;/**
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
 */const u6="pendingRedirect",Uf=new Map;class c6 extends PA{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Uf.get(this.auth._key());if(!e){try{const i=await h6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Uf.set(this.auth._key(),e)}return this.bypassAuthState||Uf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h6(t,e){const n=m6(e),i=d6(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function f6(t,e){Uf.set(t._key(),e)}function d6(t){return Fi(t._redirectPersistence)}function m6(t){return jf(u6,t.config.apiKey,t.name)}async function p6(t,e,n=!1){if(Cr(t.app))return Promise.reject(Us(t));const i=tm(t),s=DA(i,e),c=await new c6(i,s,n).execute();return c&&!n&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const g6=600*1e3;class y6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!v6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!MA(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Pr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g6&&this.cachedEventUids.clear(),this.cachedEventUids.has(pE(e))}saveEventToCache(e){this.cachedEventUids.add(pE(e)),this.lastProcessedEventTime=Date.now()}}function pE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function MA({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function v6(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return MA(t);default:return!1}}/**
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
 */async function b6(t,e={}){return Ol(t,"GET","/v1/projects",e)}/**
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
 */const _6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,S6=/^https?/;async function E6(t){if(t.config.emulator)return;const{authorizedDomains:e}=await b6(t);for(const n of e)try{if(T6(n))return}catch{}ui(t,"unauthorized-domain")}function T6(t){const e=ky(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===i}if(!S6.test(n))return!1;if(_6.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w6=new Ic(3e4,6e4);function gE(){const t=ai().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function x6(t){return new Promise((e,n)=>{function i(){gE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gE(),n(Pr(t,"network-request-failed"))},timeout:w6.get()})}if(ai().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ai().gapi?.load)i();else{const s=IV("iframefcb");return ai()[s]=()=>{gapi.load?i():n(Pr(t,"network-request-failed"))},CV(`${RV()}?onload=${s}`).catch(l=>n(l))}}).catch(e=>{throw zf=null,e})}let zf=null;function A6(t){return zf=zf||x6(t),zf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C6=new Ic(5e3,15e3),R6="__/auth/iframe",I6="emulator/auth/iframe",O6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function P6(t){const e=t.config;Pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bv(e,I6):`https://${t.config.authDomain}/${R6}`,i={apiKey:e.apiKey,appName:t.name,v:wl},s=D6.get(t.config.apiHost);s&&(i.eid=s);const l=t._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Tc(i).slice(1)}`}async function M6(t){const e=await A6(t),n=ai().gapi;return Pe(n,t,"internal-error"),e.open({where:document.body,url:P6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:O6,dontclear:!0},i=>new Promise(async(s,l)=>{await i.restyle({setHideOnLeave:!1});const c=Pr(t,"network-request-failed"),m=ai().setTimeout(()=>{l(c)},C6.get());function d(){ai().clearTimeout(m),s(i)}i.ping(d).then(d,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},V6=500,N6=600,$6="_blank",L6="http://localhost";class yE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function j6(t,e,n,i=V6,s=N6){const l=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let m="";const d={...k6,width:i.toString(),height:s.toString(),top:l,left:c},p=Pn().toLowerCase();n&&(m=fA(p)?$6:n),cA(p)&&(e=e||L6,d.scrollbars="yes");const y=Object.entries(d).reduce((E,[I,P])=>`${E}${I}=${P},`,"");if(bV(p)&&m!=="_self")return U6(e||"",m),new yE(null);const b=window.open(e||"",m,y);Pe(b,t,"popup-blocked");try{b.focus()}catch{}return new yE(b)}function U6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const z6="__/auth/handler",B6="emulator/auth/handler",F6=encodeURIComponent("fac");async function vE(t,e,n,i,s,l){Pe(t.config.authDomain,t,"auth-domain-config-required"),Pe(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:wl,eventId:s};if(e instanceof Qv){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",xD(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,b]of Object.entries({}))c[y]=b}if(e instanceof Oc){const y=e.getScopes().filter(b=>b!=="");y.length>0&&(c.scopes=y.join(","))}t.tenantId&&(c.tid=t.tenantId);const m=c;for(const y of Object.keys(m))m[y]===void 0&&delete m[y];const d=await t._getAppCheckToken(),p=d?`#${F6}=${encodeURIComponent(d)}`:"";return`${H6(t)}?${Tc(m).slice(1)}${p}`}function H6({config:t}){return t.emulator?Bv(t,B6):`https://${t.authDomain}/${z6}`}/**
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
 */const Lg="webStorageSupport";class q6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=AA,this._completeRedirectFn=p6,this._overrideRedirectResult=f6}async _openPopup(e,n,i,s){Zi(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await vE(e,n,i,ky(),s);return j6(e,l,Yv())}async _openRedirect(e,n,i,s){await this._originValidation(e);const l=await vE(e,n,i,ky(),s);return YV(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:l}=this.eventManagers[n];return s?Promise.resolve(s):(Zi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await M6(e),i=new y6(e);return n.register("authEvent",s=>(Pe(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lg,{type:Lg},s=>{const l=s?.[0]?.[Lg];l!==void 0&&n(!!l),ui(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=E6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yA()||hA()||qv()}}const G6=q6;var bE="@firebase/auth",_E="1.11.0";/**
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
 */class Q6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Y6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function K6(t){fl(new Hs("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:m}=i.options;Pe(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const d={apiKey:c,authDomain:m,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vA(t)},p=new xV(i,s,l,d);return DV(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),fl(new Hs("auth-internal",e=>{const n=tm(e.getProvider("auth").getImmediate());return(i=>new Q6(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ba(bE,_E,Y6(t)),Ba(bE,_E,"esm2020")}/**
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
 */const X6=300,W6=fw("authIdTokenMaxAge")||X6;let SE=null;const Z6=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>W6)return;const s=n?.token;SE!==s&&(SE=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function J6(t=vw()){const e=lv(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OV(t,{popupRedirectResolver:G6,persistence:[r6,wA,AA]}),i=fw("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=Z6(l.toString());zV(n,c,()=>c(n.currentUser)),UV(n,m=>c(m))}}const s=cw("auth");return s&&PV(n,`http://${s}`),n}function eN(){return document.getElementsByTagName("head")?.[0]??document}AV({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const l=Pr("internal-error");l.customData=s,n(l)},i.type="text/javascript",i.charset="UTF-8",eN().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});K6("Browser");const tN={apiKey:"AIzaSyDCZtDHtJbGDHY4Dy2TXTh-Cd9TB6Ouz5M",authDomain:"calculadora-deleite.firebaseapp.com",projectId:"calculadora-deleite",storageBucket:"calculadora-deleite.firebasestorage.app",messagingSenderId:"499021770511",appId:"1:499021770511:web:dd150600ceebee0364587a",measurementId:"G-H1NYDH4PM8"},kA=yw(tN),Pc=Nk(kA),bd=J6(kA),nN=new Ui,rN=async()=>{try{await jV(bd,wA);const t=await l6(bd,nN);return console.log("Logged in successfully!"),t}catch(t){throw console.error("Error logging in: ",t),t}},EE=async()=>{try{await FV(bd)}catch(t){throw console.error("Error signing out:",t),t}};async function At(t){const e=Fx(Pc,t);return(await Kk(e)).docs.map(i=>({id:i.id,...i.data()}))}async function zu(t,e){const n=em(Pc,t,e),i=await Yk(n);return i.exists()?{id:i.id,...i.data()}:null}async function im(t,e){const n=Fx(Pc,t),i=await Zk(n,e);return console.log(`${t} written with name: ${e.name}`),i.id}async function am(t,e,n){const i=em(Pc,t,e);await Xk(i,n,{merge:!0}),console.log(`${t} with ID ${e} updated`)}async function Xv(t,e){const n=em(Pc,t,e);await Wk(n),console.log(`${t} with ID ${e} deleted`)}class Ue{static ingredients="/ingredients/";static bundles="/bundles/";static cakes="/cakes/";static config="/config/"}class cn{static frame15="frame15";static frame25="frame25";static frame35="frame35"}const we={parseDecimal(t){return parseFloat(t.replace(",","."))},ceilDecimal(t){return Math.ceil(t*100)/100},humanizePrice(t){t=this.ceilDecimal(t);const e=t.toString().split(".");return e[1]?(e[1].length===1&&(e[1]+="0"),e.join(",")):e[0]+",00"},convertUnitForDisplay(t){return t==="kg"?"g":t==="l"?"ml":t},calculateIngredientCost(t,e){let n=t.quantity;return t.unit==="un"||(t.unit==="kg"||t.unit==="l")&&(n*=1e3),t.price/n*e},getFrameName(t){switch(t){case cn.frame15:return"15cm";case cn.frame25:return"25cm";case cn.frame35:return"35cm";default:return"Desconhecido"}},getIngredientOptionsForSelect(t){return t.map(e=>({value:e.id,label:e.name})).sort((e,n)=>e.label.localeCompare(n.label))},async checkIngredientIsUsedInBundles(t){return(await At(Ue.bundles))?.some(n=>n.ingredients.includes(t))},async checkIngredientIsUsedInCakes(t){return(await At(Ue.cakes))?.some(n=>n.ingredients?.some(i=>i.ingredientId===t)||n.bundles?.some(i=>i.ingredientQuantities?.some(s=>s.ingredientId===t)))},async checkBundleIsUsedInCakes(t){return(await At(Ue.cakes))?.some(n=>n.bundles?.some(i=>(i.id||i.bundleId)===t))},async pullCakesWithIngredients(t){return await Promise.all(t.map(async e=>{if(e.ingredients&&e.ingredients.length>0){const n=await Promise.all(e.ingredients.map(async i=>{const s=typeof i.ingredientId=="string"?i.ingredientId:i.ingredientId?.id;if(!s)return null;const l=await zu(Ue.ingredients,s);return l?{...i,ingredientId:s,ingredient:l}:null}));e.hydratedIngredients=n.filter(i=>i!==null)}if(e.bundles&&e.bundles.length>0){const n=await Promise.all(e.bundles.map(async i=>{const s=await zu(Ue.bundles,i.id);if(!s)return null;const l=(s.ingredients||[]).map(p=>typeof p=="string"?p:p?.id).filter(p=>!!p),c=await Promise.all(l.map(p=>zu(Ue.ingredients,p))),m=i.ingredientQuantities||[],d=await Promise.all(m.map(async p=>{const y=typeof p.ingredientId=="string"?p.ingredientId:p.ingredientId?.id;if(!y)return null;const b=await zu(Ue.ingredients,y);return b?{...p,ingredientId:y,ingredient:b}:null}));return{...i,bundle:s,bundleIngredients:c.filter(p=>p!==null),hydratedQuantities:d.filter(p=>p!==null)}}));e.hydratedBundles=n.filter(i=>i!==null)}return e}))},async pullBundlesWithIngredients(t){return await Promise.all(t.map(async e=>{if(!e.ingredients||e.ingredients.length===0)return e;const n=e.ingredients.map(s=>typeof s=="string"?s:s.id).filter(Boolean),i=(await Promise.all(n.map(s=>zu(Ue.ingredients,s)))).filter(s=>s!==null);return e.hydratedIngredients=i,e}))}};function iN(){const[t,e]=O.useState([]),n=O.useCallback(m=>{e(d=>d.filter(p=>p.id!==m))},[]),i=O.useCallback((m,d)=>{const y={id:Date.now()+Math.random(),message:m,type:d};e(b=>[...b,y])},[]),s=O.useCallback(m=>{i(m,"success")},[i]),l=O.useCallback(m=>{i(m,"error")},[i]),c=O.useCallback(m=>{i(m,"info")},[i]);return{toasts:t,remove:n,success:s,error:l,info:c}}const aN=ne.div`
  position: fixed;
  top: ${t=>t.theme.spacing.md};
  right: ${t=>t.theme.spacing.md};
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing.sm};
  max-width: 400px;

  /* Mobile: bottom position */
  ${t=>t.theme.mediaQueries.maxMobile} {
    top: auto;
    bottom: ${t=>t.theme.spacing.md};
    left: ${t=>t.theme.spacing.md};
    right: ${t=>t.theme.spacing.md};
    max-width: none;
  }
`,sN={success:Et`
    border-left: 4px solid ${t=>t.theme.colors.success};

    & > span:first-child {
      background-color: ${t=>t.theme.colors.success};
    }
  `,error:Et`
    border-left: 4px solid ${t=>t.theme.colors.error};

    & > span:first-child {
      background-color: ${t=>t.theme.colors.error};
    }
  `,info:Et`
    border-left: 4px solid ${t=>t.theme.colors.info};

    & > span:first-child {
      background-color: ${t=>t.theme.colors.info};
    }
  `},oN=ne.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.sm};
  padding: ${t=>t.theme.spacing.md};
  border-radius: ${t=>t.theme.spacing.sm};
  box-shadow: ${t=>t.theme.shadows.lg};
  background: ${t=>t.theme.colors.surface};
  animation: ${qO} 0.3s ease-out;
  min-width: 300px;

  ${t=>sN[t.$variant]}

  /* Mobile: slide from bottom */
  ${t=>t.theme.mediaQueries.maxMobile} {
    min-width: auto;
    animation: ${GO} 0.3s ease-out;
  }
`,lN=ne.span`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${t=>t.theme.typography.fontWeight.bold};
  font-size: ${t=>t.theme.typography.fontSize.sm};
  color: ${t=>t.theme.colors.surface};
`,uN=ne.span`
  flex: 1;
  font-size: ${t=>t.theme.typography.fontSize.sm};
  color: ${t=>t.theme.colors.textPrimary};
`,cN=ne.button`
  flex-shrink: 0;
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: ${t=>t.theme.colors.textTertiary};
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${t=>t.theme.animations.transitions.colors};

  &:hover {
    color: ${t=>t.theme.colors.textPrimary};
  }

  &:focus-visible {
    outline: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.primary};
    outline-offset: ${t=>t.theme.spacing.xxs};
  }
`;function hN({id:t,message:e,type:n,onClose:i,duration:s}){const l=s||(n==="error"?5e3:3e3);O.useEffect(()=>{const m=setTimeout(()=>{i(t)},l);return()=>clearTimeout(m)},[t,l,i]);const c={success:"✓",error:"✕",info:"ℹ"};return T.jsxs(oN,{$variant:n,children:[T.jsx(lN,{children:c[n]}),T.jsx(uN,{children:e}),T.jsx(cN,{onClick:()=>i(t),"aria-label":"Fechar",children:"×"})]})}function fN({toasts:t,onClose:e}){return T.jsx(aN,{children:t.map(n=>T.jsx(hN,{...n,onClose:e},n.id))})}const VA=O.createContext(void 0);function dN({children:t}){const e=iN(),n={success:e.success,error:e.error,info:e.info};return T.jsxs(VA.Provider,{value:n,children:[t,T.jsx(fN,{toasts:e.toasts,onClose:e.remove})]})}function Mc(){const t=O.useContext(VA);if(!t)throw new Error("useToastContext must be used within a ToastProvider");return t}const mN=ne.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${av} ${t=>t.theme.animations.duration.normal} ${t=>t.theme.animations.easing.easeOut};
  backdrop-filter: blur(4px);
`,pN={xxs:`
    width: 90%;
    max-width: 280px;
    min-height: 200px;
  `,xs:`
    width: 90%;
    max-width: 320px;
    min-height: 200px;
  `,small:`
    width: 90%;
    max-width: 400px;
    min-height: 200px;
  `,medium:`
    width: 90%;
    max-width: 600px;
    min-height: 300px;
  `,large:`
    width: 90%;
    max-width: 900px;
    min-height: 600px;
  `},gN=ne.div`
  background: ${t=>t.theme.colors.surface};
  border-radius: ${t=>t.theme.spacing.sm};
  box-shadow: ${t=>t.theme.shadows.xl};
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: ${FO} ${t=>t.theme.animations.duration.normal} ${t=>t.theme.animations.easing.easeOut};
  
  ${t=>pN[t.$size]}
  ${t=>t.$minHeight&&`min-height: ${t.$minHeight};`}

  /* Mobile: full-screen */
  ${t=>t.theme.mediaQueries.maxMobile} {
    width: 100%;
    max-width: none;
    max-height: 100vh;
    border-radius: 0;
    animation: ${HO} 0.3s ease-out;
  }
`,yN=ne.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${t=>t.theme.spacing.md};
  border-bottom: 1px solid ${t=>t.theme.colors.divider};

  ${t=>t.theme.mediaQueries.maxMobile} {
    padding: ${t=>t.theme.spacing.sm};
  }
`,vN=ne.h2`
  margin: 0;
  font-size: ${t=>t.theme.typography.fontSize.xl};
  font-weight: ${t=>t.theme.typography.fontWeight.semibold};
  color: ${t=>t.theme.colors.textPrimary};
`,bN=ne.button`
  background: none;
  border: none;
  font-size: 2rem;
  line-height: 1;
  color: ${t=>t.theme.colors.textSecondary};
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${t=>t.theme.spacing.xs};
  transition: ${t=>t.theme.animations.transitions.default};

  &:hover {
    background-color: ${t=>t.theme.colors.hover};
    color: ${t=>t.theme.colors.textPrimary};
  }

  &:focus-visible {
    outline: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.primary};
    outline-offset: ${t=>t.theme.spacing.xxs};
  }
`,_N=ne.div`
  padding: ${t=>t.theme.spacing.md};
  overflow-y: auto;
  flex: 1;
  min-height: 0; /* Important for flex scrolling */

  ${t=>t.theme.mediaQueries.maxMobile} {
    padding: ${t=>t.theme.spacing.sm};
  }
`,SN=ne.div`
  padding: ${t=>t.theme.spacing.md};
  border-top: 1px solid ${t=>t.theme.colors.divider};
  background: ${t=>t.theme.colors.surface};
  border-bottom-left-radius: ${t=>t.theme.spacing.sm};
  border-bottom-right-radius: ${t=>t.theme.spacing.sm};

  ${t=>t.theme.mediaQueries.maxMobile} {
    padding: ${t=>t.theme.spacing.sm};
  }
`;function kc({isOpen:t,onClose:e,title:n,children:i,footer:s,size:l="medium",minHeight:c}){return O.useEffect(()=>{const m=d=>{d.key==="Escape"&&t&&e()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[t,e]),O.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]),t?T.jsx(mN,{onClick:e,children:T.jsxs(gN,{$size:l,$minHeight:c,onClick:m=>m.stopPropagation(),children:[n&&T.jsxs(yN,{children:[T.jsx(vN,{children:n}),T.jsx(bN,{onClick:e,"aria-label":"Fechar",children:"×"})]}),T.jsx(_N,{children:i}),s&&T.jsx(SN,{children:s})]})}):null}const Ft=ne.div`
  display: flex;
  flex-direction: ${t=>t.horizontal?"row":"column"};
  flex-wrap: ${t=>t.horizontal?"wrap":"nowrap"};
  gap: ${t=>t.horizontal?t.theme.spacing.md:t.theme.spacing.xs};
  align-items: ${t=>t.horizontal?"center":"flex-start"};
  margin-bottom: ${t=>t.theme.spacing.md};

  /* Horizontal: label fixo, input flex */
  ${t=>t.horizontal&&`
    & > label {
      flex: 0 0 200px;
      font-weight: ${t.theme.typography.fontWeight.medium};
    }

    & > input,
    & > select,
    & > textarea {
      flex: 1;
    }

    & > small {
      flex-basis: 100%;
      margin-left: calc(200px + ${t.theme.spacing.md});
      margin-top: -${t.theme.spacing.xs};
    }
  `}

  /* Mobile: sempre vertical */
  ${t=>t.theme.mediaQueries.maxMobile} {
    flex-direction: column;
    align-items: flex-start;

    & > label {
      flex: none;
    }

    & > input,
    & > select,
    & > textarea {
      width: 100%;
    }

    & > small {
      margin-left: 0;
    }
  }
`;Ft.defaultProps={horizontal:!1};const Zt=ne.label`
  display: block;
  font-family: ${t=>t.theme.typography.fontFamily.sans};
  font-size: ${t=>t.theme.typography.fontSize.sm};
  font-weight: ${t=>t.theme.typography.fontWeight.medium};
  color: ${t=>t.theme.colors.textPrimary};
  margin-bottom: ${t=>t.theme.spacing.xs};

  ${t=>t.required&&`
    &::after {
      content: ' *';
      color: ${t.theme.colors.error};
    }
  `}
`;ne.small`
  display: block;
  font-family: ${t=>t.theme.typography.fontFamily.sans};
  font-size: ${t=>t.theme.typography.fontSize.xs};
  color: ${t=>t.theme.colors.error};
  margin-top: ${t=>t.theme.spacing.xs};
`;const jg=ne.small`
  display: block;
  font-family: ${t=>t.theme.typography.fontFamily.sans};
  font-size: ${t=>t.theme.typography.fontSize.xs};
  color: ${t=>t.theme.colors.textTertiary};
  margin-top: ${t=>t.theme.spacing.xs};
`,EN={left:"flex-start",center:"center",right:"flex-end",between:"space-between"},ta=ne.div`
  display: flex;
  align-items: center;
  justify-content: ${t=>EN[t.align||"right"]};
  gap: ${t=>t.theme.spacing.sm};
  
  ${t=>!t.noDivider&&`
    margin-top: ${t.theme.spacing.md};
    padding-top: ${t.theme.spacing.md};
    border-top: 1px solid ${t.theme.colors.divider};
  `}

  /* Mobile: stack buttons vertically */
  ${t=>t.theme.mediaQueries.maxMobile} {
    flex-direction: column-reverse;
    
    & > button {
      width: 100%;
    }
  }
`;ta.defaultProps={align:"right",noDivider:!1};const TN={small:Et`
    padding: ${t=>t.theme.spacing.xs} ${t=>t.theme.spacing.sm};
    font-size: ${t=>t.theme.typography.fontSize.sm};
    min-height: 32px;
  `,medium:Et`
    padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
    font-size: ${t=>t.theme.typography.fontSize.base};
    min-height: 40px;
  `,large:Et`
    padding: ${t=>t.theme.spacing.md} ${t=>t.theme.spacing.lg};
    font-size: ${t=>t.theme.typography.fontSize.lg};
    min-height: 48px;
  `},nr=ne.input`
  /* Reset */
  display: block;
  width: ${t=>t.fullWidth?"100%":"auto"};
  font-family: ${t=>t.theme.typography.fontFamily.sans};
  font-weight: ${t=>t.theme.typography.fontWeight.normal};
  border-radius: ${t=>t.theme.spacing.xs};
  transition: ${t=>t.theme.animations.transitions.default};
  
  /* Size */
  ${t=>TN[t.inputSize||"medium"]}
  
  /* Default variant */
  background: ${t=>t.theme.colors.surface};
  color: ${t=>t.theme.colors.textPrimary};
  border: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.border};

  &::placeholder {
    color: ${t=>t.theme.colors.textTertiary};
  }

  &:hover:not(:disabled) {
    border-color: ${t=>t.theme.colors.borderHover};
  }

  &:focus {
    outline: none;
    border-color: ${t=>t.theme.colors.primary};
    box-shadow: 0 0 0 3px ${t=>t.theme.colors.focus};
  }

  /* Error state */
  ${t=>t.error&&Et`
    border-color: ${e=>e.theme.colors.error};

    &:focus {
      border-color: ${e=>e.theme.colors.error};
      box-shadow: 0 0 0 3px ${e=>e.theme.colors.errorFocus};
    }
  `}

  /* Success state */
  ${t=>t.success&&Et`
    border-color: ${e=>e.theme.colors.success};

    &:focus {
      border-color: ${e=>e.theme.colors.success};
      box-shadow: 0 0 0 3px ${e=>e.theme.colors.successFocus};
    }
  `}

  /* Disabled */
  &:disabled {
    background: ${t=>t.theme.colors.surfaceVariant};
    color: ${t=>t.theme.colors.textDisabled};
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Remove number spinners */
  &[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  /* Mobile touch target */
  ${t=>t.theme.mediaQueries.maxMobile} {
    min-height: 44px;
  }
`;nr.defaultProps={variant:"default",inputSize:"medium",type:"text"};const sm=ne.select`
  /* Reset */
  display: block;
  width: ${t=>t.fullWidth?"100%":"auto"};
  font-family: ${t=>t.theme.typography.fontFamily.sans};
  font-weight: ${t=>t.theme.typography.fontWeight.normal};
  font-size: ${t=>t.theme.typography.fontSize.base};
  border-radius: ${t=>t.theme.spacing.xs};
  transition: ${t=>t.theme.animations.transitions.default};
  cursor: pointer;
  
  /* Styling */
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  padding-right: ${t=>t.theme.spacing.xl};
  min-height: 40px;
  background: ${t=>t.theme.colors.surface};
  color: ${t=>t.theme.colors.textPrimary};
  border: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.border};
  
  /* Custom arrow */
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23844830' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${t=>t.theme.spacing.sm} center;

  &:hover:not(:disabled) {
    border-color: ${t=>t.theme.colors.borderHover};
  }

  &:focus {
    outline: none;
    border-color: ${t=>t.theme.colors.primary};
    box-shadow: 0 0 0 3px ${t=>t.theme.colors.focus};
  }

  /* Error state */
  ${t=>t.error&&`
    border-color: ${t.theme.colors.error};

    &:focus {
      border-color: ${t.theme.colors.error};
      box-shadow: 0 0 0 3px ${t.theme.colors.errorFocus};
    }
  `}

  /* Disabled */
  &:disabled {
    background: ${t=>t.theme.colors.surfaceVariant};
    color: ${t=>t.theme.colors.textDisabled};
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Mobile touch target */
  ${t=>t.theme.mediaQueries.maxMobile} {
    min-height: 44px;
  }

  /* Options styling */
  option {
    background: ${t=>t.theme.colors.surface};
    color: ${t=>t.theme.colors.textPrimary};
    padding: ${t=>t.theme.spacing.sm};
  }
`;sm.defaultProps={fullWidth:!1};function wN({isOpen:t,onClose:e}){const[n,i]=O.useState(null),[s,l]=O.useState({conversionRate:"",frame15PackagingPrice:"",frame25PackagingPrice:"",frame35PackagingPrice:"",slicePackagingPrice:"",ifoodTax:"",roundingStrategy:"none"}),c=Mc();O.useEffect(()=>{t&&m()},[t]);async function m(){const b=(await At(Ue.config))[0]||{name:"Configurações",conversionRate:1,frame15PackagingPrice:0,frame25PackagingPrice:0,frame35PackagingPrice:0,slicePackagingPrice:0,ifoodTax:0,roundingStrategy:"none"};i(b),l({conversionRate:b.conversionRate.toString().replace(".",","),frame15PackagingPrice:b.frame15PackagingPrice.toString().replace(".",","),frame25PackagingPrice:b.frame25PackagingPrice.toString().replace(".",","),frame35PackagingPrice:b.frame35PackagingPrice.toString().replace(".",","),slicePackagingPrice:b.slicePackagingPrice.toString().replace(".",","),ifoodTax:b.ifoodTax.toString().replace(".",","),roundingStrategy:b.roundingStrategy})}function d(y,b){l(E=>({...E,[y]:b}))}async function p(){if(!n)return;const y={name:n.name,conversionRate:we.parseDecimal(s.conversionRate),frame15PackagingPrice:we.parseDecimal(s.frame15PackagingPrice),frame25PackagingPrice:we.parseDecimal(s.frame25PackagingPrice),frame35PackagingPrice:we.parseDecimal(s.frame35PackagingPrice),slicePackagingPrice:we.parseDecimal(s.slicePackagingPrice),ifoodTax:we.parseDecimal(s.ifoodTax),roundingStrategy:s.roundingStrategy};if(["conversionRate","frame15PackagingPrice","frame25PackagingPrice","frame35PackagingPrice","slicePackagingPrice","ifoodTax"].forEach(E=>{const I=y[E];typeof I=="number"&&isNaN(I)&&(y[E]=n[E])}),n.id)await am(Ue.config,n.id,y);else{const E=await im(Ue.config,y);y.id=E}i(y),c.success("Configurações salvas com sucesso!"),e()}return T.jsx(kc,{isOpen:t,onClose:e,title:"⚙️ Configurações",size:"medium",children:T.jsxs("form",{onSubmit:y=>{y.preventDefault(),p()},children:[T.jsxs(Ft,{horizontal:!0,children:[T.jsx(Zt,{htmlFor:"conversion-rate",children:"Taxa de conversão (%)"}),T.jsx(nr,{type:"text",id:"conversion-rate",value:s.conversionRate,onChange:y=>d("conversionRate",y.target.value),placeholder:"Ex: 30"}),T.jsx(jg,{children:"Margem de lucro aplicada sobre o custo base"})]}),T.jsxs(Ft,{horizontal:!0,children:[T.jsx(Zt,{htmlFor:"ifood-tax",children:"Taxa do iFood (%)"}),T.jsx(nr,{type:"text",id:"ifood-tax",value:s.ifoodTax,onChange:y=>d("ifoodTax",y.target.value),placeholder:"Ex: 15"}),T.jsx(jg,{children:"Taxa cobrada pela plataforma de delivery"})]}),T.jsxs(Ft,{horizontal:!0,children:[T.jsx(Zt,{htmlFor:"rounding-strategy",children:"Estratégia de arredondamento"}),T.jsxs(sm,{id:"rounding-strategy",value:s.roundingStrategy,onChange:y=>d("roundingStrategy",y.target.value),children:[T.jsx("option",{value:"none",children:"Nenhum"}),T.jsx("option",{value:"to_90",children:"Arredondar para .90"}),T.jsx("option",{value:"to_50",children:"Arredondar para .50"}),T.jsx("option",{value:"to_integer",children:"Arredondar para inteiro"})]}),T.jsx(jg,{children:"Como arredondar os preços finais"})]}),T.jsxs(Ft,{horizontal:!0,children:[T.jsx(Zt,{htmlFor:"frame15-packaging-price",children:"Embalagem aro 15 (R$)"}),T.jsx(nr,{type:"text",id:"frame15-packaging-price",value:s.frame15PackagingPrice,onChange:y=>d("frame15PackagingPrice",y.target.value),placeholder:"Ex: 5,00"})]}),T.jsxs(Ft,{horizontal:!0,children:[T.jsx(Zt,{htmlFor:"frame25-packaging-price",children:"Embalagem aro 25 (R$)"}),T.jsx(nr,{type:"text",id:"frame25-packaging-price",value:s.frame25PackagingPrice,onChange:y=>d("frame25PackagingPrice",y.target.value),placeholder:"Ex: 7,00"})]}),T.jsxs(Ft,{horizontal:!0,children:[T.jsx(Zt,{htmlFor:"frame35-packaging-price",children:"Embalagem aro 35 (R$)"}),T.jsx(nr,{type:"text",id:"frame35-packaging-price",value:s.frame35PackagingPrice,onChange:y=>d("frame35PackagingPrice",y.target.value),placeholder:"Ex: 10,00"})]}),T.jsxs(Ft,{horizontal:!0,children:[T.jsx(Zt,{htmlFor:"slice-packaging-price",children:"Embalagem fatia (R$)"}),T.jsx(nr,{type:"text",id:"slice-packaging-price",value:s.slicePackagingPrice,onChange:y=>d("slicePackagingPrice",y.target.value),placeholder:"Ex: 1,50"})]}),T.jsxs(ta,{children:[T.jsx(pt,{type:"button",onClick:e,variant:"secondary",children:"Cancelar"}),T.jsx(pt,{type:"submit",variant:"primary",children:"Salvar Configurações"})]})]})})}var NA={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},TE=en.createContext&&en.createContext(NA),xN=["attr","size","title"];function AN(t,e){if(t==null)return{};var n=CN(t,e),i,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(s=0;s<l.length;s++)i=l[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function CN(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function _d(){return _d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_d.apply(this,arguments)}function wE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Sd(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?wE(Object(n),!0).forEach(function(i){RN(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wE(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function RN(t,e,n){return e=IN(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function IN(t){var e=ON(t,"string");return typeof e=="symbol"?e:e+""}function ON(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function $A(t){return t&&t.map((e,n)=>en.createElement(e.tag,Sd({key:n},e.attr),$A(e.child)))}function Mn(t){return e=>en.createElement(DN,_d({attr:Sd({},t.attr)},e),$A(t.child))}function DN(t){var e=n=>{var{attr:i,size:s,title:l}=t,c=AN(t,xN),m=s||n.size||"1em",d;return n.className&&(d=n.className),t.className&&(d=(d?d+" ":"")+t.className),en.createElement("svg",_d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,c,{className:d,style:Sd(Sd({color:t.color||n.color},n.style),t.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),l&&en.createElement("title",null,l),t.children)};return TE!==void 0?en.createElement(TE.Consumer,null,n=>e(n)):e(NA)}function PN(t){return Mn({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"},child:[]}]})(t)}function MN(t){return Mn({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"},child:[]}]})(t)}function kN(t){return Mn({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"},child:[]}]})(t)}function Wv(t){return Mn({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM15.9896 8.81412L17.4038 7.3999L22 11.9961L17.4038 16.5923L15.9896 15.1781L19.1716 11.9961L15.9896 8.81412Z"},child:[]}]})(t)}function VN(t){return Mn({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"},child:[]}]})(t)}function NN(t){return Mn({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"},child:[]}]})(t)}function $N(t){return Mn({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"},child:[]}]})(t)}const zi={darkChocolate:"#220b03",milkChocolate:"#502516",cream:"#e1cdb5"},bn={50:"#F0E8DC",100:"#e1cdb5",300:"#C08560",400:"#A36548",500:"#844830",600:"#6B3420",700:"#502516"},La={100:"#F5D9C8",400:"#E08A5B",500:"#D4713D",600:"#B85E2F"},Bn={50:"#fafcfb",200:"#e1cdb5",300:"#D1BFA8",400:"#B5A593",600:"#6B5D51"},Xr={50:"#1A0F0A",100:"#2A1B12",200:"#3D2618",300:"#502516",400:"#6B3420",600:"#A36548",700:"#C08560"},Dn=(t,e)=>{const n=parseInt(t.slice(1,3),16),i=parseInt(t.slice(3,5),16),s=parseInt(t.slice(5,7),16);return`rgba(${n}, ${i}, ${s}, ${e})`},LN={success:"#7A9D54",successLight:"#A8C786",successDark:"#5E7D40",successFocus:Dn("#7A9D54",.12),warning:"#D4A017",warningLight:"#E5B73B",warningDark:"#A67D0F",error:"#C44536",errorLight:"#D4634F",errorDark:"#9A3428",errorFocus:Dn("#C44536",.12),info:"#5B8FA3",infoLight:"#7AA8BB",infoDark:"#46717F"},jN={success:"#92B868",successLight:"#A8C786",successDark:"#7A9D54",successFocus:Dn("#92B868",.12),warning:"#E5B73B",warningLight:"#F0CA66",warningDark:"#D4A017",error:"#D4634F",errorLight:"#E0826F",errorDark:"#C44536",errorFocus:Dn("#D4634F",.12),info:"#72A3B5",infoLight:"#8BB5C5",infoDark:"#5B8FA3"},UN={background:bn[50],surface:Bn[50],surfaceVariant:zi.cream,surfaceHover:Bn[200],primary:bn[500],primaryHover:bn[400],primaryPressed:bn[600],primaryLight:bn[100],onPrimary:Bn[50],secondary:La[500],secondaryHover:La[400],secondaryPressed:La[600],secondaryLight:La[100],onSecondary:Bn[50],textPrimary:zi.darkChocolate,textSecondary:zi.milkChocolate,textTertiary:Bn[600],textDisabled:Bn[400],textOnPrimary:Bn[50],border:zi.cream,borderLight:Bn[300],borderHover:Bn[400],divider:Bn[300],hover:Dn(bn[500],.08),pressed:Dn(bn[500],.12),focus:Dn(bn[500],.12),disabled:Dn(bn[500],.38),hoverOverlay:Dn(Bn[50],.1),activeOverlay:Dn(Bn[50],.15),...LN},zN={background:Xr[50],surface:Xr[100],surfaceVariant:Xr[200],surfaceHover:Xr[300],primary:bn[400],primaryHover:bn[300],primaryPressed:bn[500],primaryLight:bn[700],onPrimary:zi.darkChocolate,secondary:La[400],secondaryHover:La[100],secondaryPressed:La[500],secondaryLight:La[600],onSecondary:zi.darkChocolate,textPrimary:zi.cream,textSecondary:Xr[700],textTertiary:Xr[600],textDisabled:Xr[400],textOnPrimary:zi.darkChocolate,border:zi.milkChocolate,borderLight:Xr[300],borderHover:Xr[400],divider:Xr[200],hover:Dn(bn[300],.08),pressed:Dn(bn[300],.12),focus:Dn(bn[300],.12),disabled:Dn(bn[300],.38),hoverOverlay:Dn(Bn[50],.08),activeOverlay:Dn(Bn[50],.12),...jN},LA={xxs:"2px",xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px","2xl":"48px","3xl":"64px","4xl":"96px"},jA={sans:"'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",mono:"'Roboto Mono', 'Courier New', monospace"},UA={xs:"12px",sm:"14px",base:"16px",lg:"18px",xl:"20px","2xl":"24px","3xl":"30px","4xl":"36px","5xl":"48px"},zA={normal:400,medium:500,semibold:600,bold:700},BA={tight:1.2,normal:1.5,relaxed:1.75,loose:2},FA={tight:"-0.02em",normal:"0",wide:"0.02em",wider:"0.05em"},el={mobile:"0px",tablet:"768px",desktop:"1024px",wide:"1440px"},Ug={tablet:768,desktop:1024,wide:1440},HA={mobile:`@media (min-width: ${el.mobile})`,tablet:`@media (min-width: ${el.tablet})`,desktop:`@media (min-width: ${el.desktop})`,wide:`@media (min-width: ${el.wide})`,maxMobile:`@media (max-width: ${Ug.tablet-1}px)`,maxTablet:`@media (max-width: ${Ug.desktop-1}px)`,maxDesktop:`@media (max-width: ${Ug.wide-1}px)`},BN={none:"none",sm:"0 1px 2px rgba(34, 11, 3, 0.05)",md:"0 4px 6px rgba(34, 11, 3, 0.07)",lg:"0 10px 15px rgba(34, 11, 3, 0.1)",xl:"0 20px 25px rgba(34, 11, 3, 0.15)","2xl":"0 25px 50px rgba(34, 11, 3, 0.2)",inner:"inset 0 2px 4px rgba(34, 11, 3, 0.06)"},FN={none:"none",sm:"0 1px 2px rgba(0, 0, 0, 0.3)",md:"0 4px 6px rgba(0, 0, 0, 0.4)",lg:"0 10px 15px rgba(0, 0, 0, 0.5)",xl:"0 20px 25px rgba(0, 0, 0, 0.6)","2xl":"0 25px 50px rgba(0, 0, 0, 0.7)",inner:"inset 0 2px 4px rgba(0, 0, 0, 0.25)"},Li={fast:"150ms",normal:"250ms",slow:"350ms",slower:"500ms"},ji={easeIn:"cubic-bezier(0.4, 0, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.2, 1)",easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},qA={default:`all ${Li.normal} ${ji.easeInOut}`,fast:`all ${Li.fast} ${ji.easeOut}`,slow:`all ${Li.slow} ${ji.easeInOut}`,colors:`background-color ${Li.normal} ${ji.easeInOut}, color ${Li.normal} ${ji.easeInOut}, border-color ${Li.normal} ${ji.easeInOut}`,transform:`transform ${Li.normal} ${ji.easeOut}`},GA={fadeIn:`
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,slideUp:`
    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,slideUpMobile:`
    @keyframes slideUpMobile {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
  `,slideInRight:`
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `,slideInUp:`
    @keyframes slideInUp {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `},HN={colors:UN,spacing:LA,typography:{fontFamily:jA,fontSize:UA,fontWeight:zA,lineHeight:BA,letterSpacing:FA},breakpoints:el,mediaQueries:HA,shadows:BN,animations:{duration:Li,easing:ji,transitions:qA,keyframes:GA},isDark:!1},qN={colors:zN,spacing:LA,typography:{fontFamily:jA,fontSize:UA,fontWeight:zA,lineHeight:BA,letterSpacing:FA},breakpoints:el,mediaQueries:HA,shadows:FN,animations:{duration:Li,easing:ji,transitions:qA,keyframes:GA},isDark:!0},QA=O.createContext(void 0),xE="calculadora-deleite-theme";function GN({children:t}){const[e,n]=O.useState(()=>{const c=localStorage.getItem(xE);return c==="light"||c==="dark"?c:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),i=e==="dark"?qN:HN;O.useEffect(()=>{localStorage.setItem(xE,e),document.documentElement.setAttribute("data-theme",e)},[e]);const s=()=>{n(c=>c==="light"?"dark":"light")},l=c=>{n(c)};return T.jsx(QA.Provider,{value:{theme:i,themeMode:e,toggleTheme:s,setThemeMode:l},children:T.jsx(jO,{theme:i,children:t})})}function QN(){const t=O.useContext(QA);if(!t)throw new Error("useTheme must be used within ThemeProvider");return t}const YN=ne.button`
  background: ${t=>t.theme.colors.surfaceVariant};
  border: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.border};
  cursor: pointer;
  padding: ${t=>t.theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${t=>t.theme.colors.textPrimary};
  border-radius: 50%;
  transition: ${t=>t.theme.animations.transitions.default};
  width: 40px;
  height: 40px;

  &:hover {
    background-color: ${t=>t.theme.colors.hover};
    border-color: ${t=>t.theme.colors.primary};
  }

  &:active {
    background-color: ${t=>t.theme.colors.surfaceVariant};
  }

  &:focus-visible {
    outline: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.primary};
    outline-offset: ${t=>t.theme.spacing.xxs};
  }

  svg {
    width: 32px;
    height: 32px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(20deg);
  }
`;function KN(){const{themeMode:t,toggleTheme:e}=QN();return T.jsx(YN,{onClick:e,"aria-label":`Alternar para modo ${t==="light"?"escuro":"claro"}`,title:`Modo ${t==="light"?"escuro":"claro"}`,children:t==="light"?T.jsx(NN,{}):T.jsx($N,{})})}function Wa(){const[t,e]=O.useState(!1);return{isOpen:t,open:()=>e(!0),close:()=>e(!1),toggle:()=>e(l=>!l)}}function XN(t){return Mn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(t)}const WN=ne.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${t=>t.theme.spacing.sm};
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  max-width: 100%;
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.lg};
  box-sizing: border-box;
`,ZN=ne.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.sm};
  position: absolute;
  right: ${t=>t.theme.spacing.xl};

  ${t=>t.theme.mediaQueries.maxMobile} {
    position: static;
    margin-top: ${t=>t.theme.spacing.sm};
  }
`,AE=ne.button`
  background: ${t=>t.theme.colors.surfaceVariant};
  border: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.border};
  cursor: pointer;
  padding: ${t=>t.theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${t=>t.theme.colors.textPrimary};
  border-radius: 50%;
  transition: ${t=>t.theme.animations.transitions.default};
  width: 40px;
  height: 40px;

  &:hover {
    background-color: ${t=>t.theme.colors.hover};
    border-color: ${t=>t.theme.colors.primary};
  }

  &:active {
    background-color: ${t=>t.theme.colors.surfaceVariant};
  }

  &:focus-visible {
    outline: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.primary};
    outline-offset: ${t=>t.theme.spacing.xxs};
  }

  svg {
    width: 32px;
    height: 32px;
  }
`,YA=ne.div`
  position: relative;
  display: inline-block;
`,JN=ne.div`
  display: none;
  position: absolute;
  top: 100%;
  left: -0.2rem;
  background-color: ${t=>t.theme.colors.surface};
  box-shadow: ${t=>t.theme.shadows.lg};
  border-radius: 8px;
  overflow: hidden;
  z-index: 1000;
  flex-direction: column;

  ${YA}:hover & {
    display: flex;
  }

  a {
    text-decoration: none;
    display: block;
  }

  a + a {
    margin-top: 4px;
  }
`;function e3(){const{signOut:t}=gT(),e=Za(),n=Wa();return T.jsxs(WN,{children:[T.jsxs(YA,{children:[T.jsx(pt,{variant:"ghost",className:e.pathname==="/"||e.pathname==="/calculadora"?"active":"",children:"Dashboard"}),T.jsxs(JN,{children:[T.jsx(ks,{to:"/",children:T.jsx(pt,{variant:"ghost",className:e.pathname==="/"?"active":"",children:"Visão Geral"})}),T.jsx(ks,{to:"/calculadora",children:T.jsx(pt,{variant:"ghost",className:e.pathname==="/calculadora"?"active":"",children:"Calculadora"})})]})]}),T.jsx(ks,{to:"/ingredientes",children:T.jsx(pt,{variant:"ghost",className:e.pathname==="/ingredientes"?"active":"",children:"Ingredientes"})}),T.jsx(ks,{to:"/conjuntos",children:T.jsx(pt,{variant:"ghost",className:e.pathname==="/conjuntos"?"active":"",children:"Conjuntos"})}),T.jsx(ks,{to:"/bolos",children:T.jsx(pt,{variant:"ghost",className:e.pathname==="/bolos"?"active":"",children:"Bolos"})}),T.jsxs(ZN,{children:[T.jsx(KN,{}),T.jsx(AE,{onClick:n.open,"aria-label":"Configuração",title:"Configuração",children:T.jsx(XN,{size:32})}),T.jsx(AE,{onClick:()=>t(!0),"aria-label":"Sair",title:"Sair",children:T.jsx(kN,{size:24})})]}),T.jsx(wN,{isOpen:n.isOpen,onClose:n.close})]})}const t3=Ln`
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`,KA=Ln`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,n3=ne.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${t3} ${t=>t.theme.animations.duration.slow} ${t=>t.theme.animations.easing.easeOut};
`,r3=ne.circle`
  stroke: ${t=>t.theme.colors.textPrimary};
  stroke-width: 6;
  fill: none;
  opacity: 0.3;
  transform-origin: center;
  animation: ${KA} 3s linear infinite;
`,i3=ne.circle`
  fill: ${t=>t.theme.colors.primary};
  transform-origin: center;
  animation: ${KA} 1s linear infinite;
`;function Zv(){return T.jsx(n3,{children:T.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:[T.jsx(r3,{cx:"50",cy:"50",r:"45"}),T.jsx(i3,{cx:"50",cy:"5",r:"7",children:T.jsx("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"1s",repeatCount:"indefinite"})})]})})}const a3=ne.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.lg};
  background: ${t=>t.theme.colors.surface};
  border: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.border};
  border-radius: ${t=>t.theme.spacing.xs};
  font-family: ${t=>t.theme.typography.fontFamily.sans};
  font-size: ${t=>t.theme.typography.fontSize.base};
  font-weight: ${t=>t.theme.typography.fontWeight.medium};
  color: ${t=>t.theme.colors.textPrimary};
  cursor: pointer;
  transition: ${t=>t.theme.animations.transitions.default};

  &:hover {
    background: ${t=>t.theme.colors.surfaceHover};
    border-color: ${t=>t.theme.colors.borderHover};
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    border-color: ${t=>t.theme.colors.primary};
    box-shadow: 0 0 0 3px ${t=>t.theme.colors.focus};
  }
`,s3=ne.svg`
  margin-right: ${t=>t.theme.spacing.sm};
  flex-shrink: 0;
`,o3=ne.span`
  display: inline;
`,l3=ne.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;function u3(t){return T.jsxs(a3,{onClick:t.handleClick,children:[T.jsxs(s3,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:24,height:24,xmlnsXlink:"http://www.w3.org/1999/xlink",children:[T.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),T.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),T.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),T.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),T.jsx("path",{fill:"none",d:"M0 0h48v48H0z"})]}),T.jsx(o3,{children:"Entrar com Google"}),T.jsx(l3,{children:"Entrar com Google"})]})}const c3=ne.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing.lg};
`,h3=ne.p`
  color: ${t=>t.theme.colors.textSecondary};
  font-size: ${t=>t.theme.typography.fontSize.base};
  line-height: ${t=>t.theme.typography.lineHeight.relaxed};
  margin: 0;
`,f3=ne.div`
  display: flex;
  gap: ${t=>t.theme.spacing.sm};
  justify-content: flex-end;
  padding-top: ${t=>t.theme.spacing.lg};
  border-top: 1px solid ${t=>t.theme.colors.divider};

  /* Mobile: stack vertically */
  ${t=>t.theme.mediaQueries.maxMobile} {
    flex-direction: column-reverse;
  }
`,d3={info:Et`
    background-color: ${t=>t.theme.colors.info};

    &:hover:not(:disabled) {
      background-color: ${t=>t.theme.colors.infoDark};
    }
  `,warning:Et`
    background-color: ${t=>t.theme.colors.warning};

    &:hover:not(:disabled) {
      background-color: ${t=>t.theme.colors.warningDark};
    }
  `,danger:Et`
    background-color: ${t=>t.theme.colors.error};

    &:hover:not(:disabled) {
      background-color: ${t=>t.theme.colors.errorDark};
    }
  `},m3=ne.button`
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  border-radius: ${t=>t.theme.spacing.xs};
  font-size: ${t=>t.theme.typography.fontSize.sm};
  font-weight: ${t=>t.theme.typography.fontWeight.medium};
  font-family: ${t=>t.theme.typography.fontFamily.sans};
  cursor: pointer;
  transition: ${t=>t.theme.animations.transitions.default};
  border: none;
  background-color: ${t=>t.theme.colors.surfaceVariant};
  color: ${t=>t.theme.colors.textPrimary};

  &:hover:not(:disabled) {
    background-color: ${t=>t.theme.colors.hover};
  }

  &:focus-visible {
    outline: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.primary};
    outline-offset: ${t=>t.theme.spacing.xxs};
  }

  /* Mobile: full width */
  ${t=>t.theme.mediaQueries.maxMobile} {
    width: 100%;
    padding: ${t=>t.theme.spacing.sm};
  }
`,p3=ne.button`
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  border-radius: ${t=>t.theme.spacing.xs};
  font-size: ${t=>t.theme.typography.fontSize.sm};
  font-weight: ${t=>t.theme.typography.fontWeight.medium};
  font-family: ${t=>t.theme.typography.fontFamily.sans};
  cursor: pointer;
  transition: ${t=>t.theme.animations.transitions.default};
  border: none;
  color: ${t=>t.theme.colors.surface};

  ${t=>d3[t.$variant]}

  &:focus-visible {
    outline: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.primary};
    outline-offset: ${t=>t.theme.spacing.xxs};
  }

  /* Mobile: full width */
  ${t=>t.theme.mediaQueries.maxMobile} {
    width: 100%;
    padding: ${t=>t.theme.spacing.sm};
  }
`;function om({isOpen:t,title:e,message:n,confirmText:i="Confirmar",cancelText:s="Cancelar",onConfirm:l,onCancel:c,variant:m="info"}){const d=async()=>{await l()};return T.jsx(kc,{isOpen:t,onClose:c,title:e,size:"small",children:T.jsxs(c3,{children:[T.jsx(h3,{children:n}),T.jsxs(f3,{children:[T.jsx(m3,{onClick:c,children:s}),T.jsx(p3,{$variant:m,onClick:d,children:i})]})]})})}const g3=ne.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
`,y3=ne.main`
  flex-grow: 1;
  padding: ${t=>t.theme.spacing.lg};
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;

  ${t=>t.theme.mediaQueries.maxMobile} {
    padding: ${t=>t.theme.spacing.md};
  }
`,v3=ne.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: ${t=>t.theme.spacing.xl};
  text-align: center;
  gap: ${t=>t.theme.spacing.lg};
`,b3=ne.h1`
  color: ${t=>t.theme.colors.textPrimary};
  font-size: ${t=>t.theme.typography.fontSize["2xl"]};
  font-weight: ${t=>t.theme.typography.fontWeight.bold};
  margin: 0;
`,_3=ne.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${t=>t.theme.spacing.xl};
  text-align: center;
  gap: ${t=>t.theme.spacing.lg};
`,S3=ne.h1`
  color: ${t=>t.theme.colors.textPrimary};
  font-size: ${t=>t.theme.typography.fontSize["2xl"]};
  font-weight: ${t=>t.theme.typography.fontWeight.bold};
  margin: 0;
`;function E3(){const{user:t,loading:e,signInWithGoogle:n,signOut:i,confirmLogoutModal:s,handleConfirmLogout:l}=gT();if(e)return T.jsx(Zv,{});const c="erica.aruantes707@gmail.com,agimenescomercial@gmail.com,alexandre.development@gmail.com".split(","),m=t?.email?c.includes(t.email):!1;return T.jsxs(dN,{children:[t?m?T.jsxs(g3,{children:[T.jsx(e3,{}),T.jsx(y3,{children:T.jsx(RT,{})}),T.jsx(JO,{})]}):T.jsxs(v3,{children:[T.jsx(b3,{children:"Você não tem permissão para acessar esta página"}),T.jsx(pt,{onClick:async()=>await i(),children:"Sair"})]}):T.jsxs(_3,{children:[T.jsx(S3,{children:"Faça o login para acessar esta página"}),T.jsx(u3,{handleClick:async()=>{try{await n()}catch(d){console.error(d)}}})]}),T.jsx(om,{isOpen:s.isOpen,onCancel:s.close,onConfirm:l,title:"Confirmar Saída",message:"Tem certeza que deseja sair?",variant:"warning"})]})}class Bf{static noTableItemFoundContent="-";static tableItemSeparator=", "}function Ys(t){"@babel/helpers - typeof";return Ys=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ys(t)}function T3(t,e){if(Ys(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(Ys(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function XA(t){var e=T3(t,"string");return Ys(e)=="symbol"?e:e+""}function Wu(t,e,n){return(e=XA(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function CE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function Ae(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?CE(Object(n),!0).forEach(function(i){Wu(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):CE(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function w3(t){if(Array.isArray(t))return t}function x3(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,s,l,c,m=[],d=!0,p=!1;try{if(l=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(i=l.call(n)).done)&&(m.push(i.value),m.length!==e);d=!0);}catch(y){p=!0,s=y}finally{try{if(!d&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(p)throw s}}return m}}function $y(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function WA(t,e){if(t){if(typeof t=="string")return $y(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$y(t,e):void 0}}function A3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gi(t,e){return w3(t)||x3(t,e)||WA(t,e)||A3()}function C3(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function na(t,e){if(t==null)return{};var n,i,s=C3(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var R3=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function I3(t){var e=t.defaultInputValue,n=e===void 0?"":e,i=t.defaultMenuIsOpen,s=i===void 0?!1:i,l=t.defaultValue,c=l===void 0?null:l,m=t.inputValue,d=t.menuIsOpen,p=t.onChange,y=t.onInputChange,b=t.onMenuClose,E=t.onMenuOpen,I=t.value,P=na(t,R3),k=O.useState(m!==void 0?m:n),D=Gi(k,2),$=D[0],H=D[1],F=O.useState(d!==void 0?d:s),te=Gi(F,2),L=te[0],K=te[1],C=O.useState(I!==void 0?I:c),w=Gi(C,2),x=w[0],M=w[1],V=O.useCallback(function(de,be){typeof p=="function"&&p(de,be),M(de)},[p]),j=O.useCallback(function(de,be){var z;typeof y=="function"&&(z=y(de,be)),H(z!==void 0?z:de)},[y]),N=O.useCallback(function(){typeof E=="function"&&E(),K(!0)},[E]),Me=O.useCallback(function(){typeof b=="function"&&b(),K(!1)},[b]),fe=m!==void 0?m:$,X=d!==void 0?d:L,ce=I!==void 0?I:x;return Ae(Ae({},P),{},{inputValue:fe,menuIsOpen:X,onChange:V,onInputChange:j,onMenuClose:Me,onMenuOpen:N,value:ce})}function Ie(){return Ie=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ie.apply(null,arguments)}function O3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function RE(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,XA(i.key),i)}}function D3(t,e,n){return e&&RE(t.prototype,e),n&&RE(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ly(t,e){return Ly=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Ly(t,e)}function P3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ly(t,e)}function Ed(t){return Ed=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ed(t)}function ZA(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ZA=function(){return!!t})()}function M3(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k3(t,e){if(e&&(Ys(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return M3(t)}function V3(t){var e=ZA();return function(){var n,i=Ed(t);if(e){var s=Ed(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return k3(this,n)}}function N3(t){if(Array.isArray(t))return $y(t)}function $3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function L3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jv(t){return N3(t)||$3(t)||WA(t)||L3()}function j3(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function U3(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var z3=function(){function t(n){var i=this;this._insertTag=function(s){var l;i.tags.length===0?i.insertionPoint?l=i.insertionPoint.nextSibling:i.prepend?l=i.container.firstChild:l=i.before:l=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(s,l),i.tags.push(s)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(U3(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var l=j3(s);try{l.insertRule(i,l.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var s;return(s=i.parentNode)==null?void 0:s.removeChild(i)}),this.tags=[],this.ctr=0},t}(),Rn="-ms-",Td="-moz-",tt="-webkit-",JA="comm",e0="rule",t0="decl",B3="@import",eC="@keyframes",F3="@layer",H3=Math.abs,lm=String.fromCharCode,q3=Object.assign;function G3(t,e){return Sn(t,0)^45?(((e<<2^Sn(t,0))<<2^Sn(t,1))<<2^Sn(t,2))<<2^Sn(t,3):0}function tC(t){return t.trim()}function Q3(t,e){return(t=e.exec(t))?t[0]:t}function nt(t,e,n){return t.replace(e,n)}function jy(t,e){return t.indexOf(e)}function Sn(t,e){return t.charCodeAt(e)|0}function gc(t,e,n){return t.slice(e,n)}function Jr(t){return t.length}function n0(t){return t.length}function gf(t,e){return e.push(t),t}function Y3(t,e){return t.map(e).join("")}var um=1,_l=1,nC=0,qn=0,qt=0,Dl="";function cm(t,e,n,i,s,l,c){return{value:t,root:e,parent:n,type:i,props:s,children:l,line:um,column:_l,length:c,return:""}}function Bu(t,e){return q3(cm("",null,null,"",null,null,0),t,{length:-t.length},e)}function K3(){return qt}function X3(){return qt=qn>0?Sn(Dl,--qn):0,_l--,qt===10&&(_l=1,um--),qt}function rr(){return qt=qn<nC?Sn(Dl,qn++):0,_l++,qt===10&&(_l=1,um++),qt}function si(){return Sn(Dl,qn)}function Ff(){return qn}function Vc(t,e){return gc(Dl,t,e)}function yc(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rC(t){return um=_l=1,nC=Jr(Dl=t),qn=0,[]}function iC(t){return Dl="",t}function Hf(t){return tC(Vc(qn-1,Uy(t===91?t+2:t===40?t+1:t)))}function W3(t){for(;(qt=si())&&qt<33;)rr();return yc(t)>2||yc(qt)>3?"":" "}function Z3(t,e){for(;--e&&rr()&&!(qt<48||qt>102||qt>57&&qt<65||qt>70&&qt<97););return Vc(t,Ff()+(e<6&&si()==32&&rr()==32))}function Uy(t){for(;rr();)switch(qt){case t:return qn;case 34:case 39:t!==34&&t!==39&&Uy(qt);break;case 40:t===41&&Uy(t);break;case 92:rr();break}return qn}function J3(t,e){for(;rr()&&t+qt!==57;)if(t+qt===84&&si()===47)break;return"/*"+Vc(e,qn-1)+"*"+lm(t===47?t:rr())}function e5(t){for(;!yc(si());)rr();return Vc(t,qn)}function t5(t){return iC(qf("",null,null,null,[""],t=rC(t),0,[0],t))}function qf(t,e,n,i,s,l,c,m,d){for(var p=0,y=0,b=c,E=0,I=0,P=0,k=1,D=1,$=1,H=0,F="",te=s,L=l,K=i,C=F;D;)switch(P=H,H=rr()){case 40:if(P!=108&&Sn(C,b-1)==58){jy(C+=nt(Hf(H),"&","&\f"),"&\f")!=-1&&($=-1);break}case 34:case 39:case 91:C+=Hf(H);break;case 9:case 10:case 13:case 32:C+=W3(P);break;case 92:C+=Z3(Ff()-1,7);continue;case 47:switch(si()){case 42:case 47:gf(n5(J3(rr(),Ff()),e,n),d);break;default:C+="/"}break;case 123*k:m[p++]=Jr(C)*$;case 125*k:case 59:case 0:switch(H){case 0:case 125:D=0;case 59+y:$==-1&&(C=nt(C,/\f/g,"")),I>0&&Jr(C)-b&&gf(I>32?OE(C+";",i,n,b-1):OE(nt(C," ","")+";",i,n,b-2),d);break;case 59:C+=";";default:if(gf(K=IE(C,e,n,p,y,s,m,F,te=[],L=[],b),l),H===123)if(y===0)qf(C,e,K,K,te,l,b,m,L);else switch(E===99&&Sn(C,3)===110?100:E){case 100:case 108:case 109:case 115:qf(t,K,K,i&&gf(IE(t,K,K,0,0,s,m,F,s,te=[],b),L),s,L,b,m,i?te:L);break;default:qf(C,K,K,K,[""],L,0,m,L)}}p=y=I=0,k=$=1,F=C="",b=c;break;case 58:b=1+Jr(C),I=P;default:if(k<1){if(H==123)--k;else if(H==125&&k++==0&&X3()==125)continue}switch(C+=lm(H),H*k){case 38:$=y>0?1:(C+="\f",-1);break;case 44:m[p++]=(Jr(C)-1)*$,$=1;break;case 64:si()===45&&(C+=Hf(rr())),E=si(),y=b=Jr(F=C+=e5(Ff())),H++;break;case 45:P===45&&Jr(C)==2&&(k=0)}}return l}function IE(t,e,n,i,s,l,c,m,d,p,y){for(var b=s-1,E=s===0?l:[""],I=n0(E),P=0,k=0,D=0;P<i;++P)for(var $=0,H=gc(t,b+1,b=H3(k=c[P])),F=t;$<I;++$)(F=tC(k>0?E[$]+" "+H:nt(H,/&\f/g,E[$])))&&(d[D++]=F);return cm(t,e,n,s===0?e0:m,d,p,y)}function n5(t,e,n){return cm(t,e,n,JA,lm(K3()),gc(t,2,-2),0)}function OE(t,e,n,i){return cm(t,e,n,t0,gc(t,0,i),gc(t,i+1,-1),i)}function sl(t,e){for(var n="",i=n0(t),s=0;s<i;s++)n+=e(t[s],s,t,e)||"";return n}function r5(t,e,n,i){switch(t.type){case F3:if(t.children.length)break;case B3:case t0:return t.return=t.return||t.value;case JA:return"";case eC:return t.return=t.value+"{"+sl(t.children,i)+"}";case e0:t.value=t.props.join(",")}return Jr(n=sl(t.children,i))?t.return=t.value+"{"+n+"}":""}function i5(t){var e=n0(t);return function(n,i,s,l){for(var c="",m=0;m<e;m++)c+=t[m](n,i,s,l)||"";return c}}function a5(t){return function(e){e.root||(e=e.return)&&t(e)}}function s5(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var o5=function(e,n,i){for(var s=0,l=0;s=l,l=si(),s===38&&l===12&&(n[i]=1),!yc(l);)rr();return Vc(e,qn)},l5=function(e,n){var i=-1,s=44;do switch(yc(s)){case 0:s===38&&si()===12&&(n[i]=1),e[i]+=o5(qn-1,n,i);break;case 2:e[i]+=Hf(s);break;case 4:if(s===44){e[++i]=si()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=lm(s)}while(s=rr());return e},u5=function(e,n){return iC(l5(rC(e),n))},DE=new WeakMap,c5=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,s=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!DE.get(i))&&!s){DE.set(e,!0);for(var l=[],c=u5(n,l),m=i.props,d=0,p=0;d<c.length;d++)for(var y=0;y<m.length;y++,p++)e.props[p]=l[d]?c[d].replace(/&\f/g,m[y]):m[y]+" "+c[d]}}},h5=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function aC(t,e){switch(G3(t,e)){case 5103:return tt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tt+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return tt+t+Td+t+Rn+t+t;case 6828:case 4268:return tt+t+Rn+t+t;case 6165:return tt+t+Rn+"flex-"+t+t;case 5187:return tt+t+nt(t,/(\w+).+(:[^]+)/,tt+"box-$1$2"+Rn+"flex-$1$2")+t;case 5443:return tt+t+Rn+"flex-item-"+nt(t,/flex-|-self/,"")+t;case 4675:return tt+t+Rn+"flex-line-pack"+nt(t,/align-content|flex-|-self/,"")+t;case 5548:return tt+t+Rn+nt(t,"shrink","negative")+t;case 5292:return tt+t+Rn+nt(t,"basis","preferred-size")+t;case 6060:return tt+"box-"+nt(t,"-grow","")+tt+t+Rn+nt(t,"grow","positive")+t;case 4554:return tt+nt(t,/([^-])(transform)/g,"$1"+tt+"$2")+t;case 6187:return nt(nt(nt(t,/(zoom-|grab)/,tt+"$1"),/(image-set)/,tt+"$1"),t,"")+t;case 5495:case 3959:return nt(t,/(image-set\([^]*)/,tt+"$1$`$1");case 4968:return nt(nt(t,/(.+:)(flex-)?(.*)/,tt+"box-pack:$3"+Rn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tt+t+t;case 4095:case 3583:case 4068:case 2532:return nt(t,/(.+)-inline(.+)/,tt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jr(t)-1-e>6)switch(Sn(t,e+1)){case 109:if(Sn(t,e+4)!==45)break;case 102:return nt(t,/(.+:)(.+)-([^]+)/,"$1"+tt+"$2-$3$1"+Td+(Sn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~jy(t,"stretch")?aC(nt(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Sn(t,e+1)!==115)break;case 6444:switch(Sn(t,Jr(t)-3-(~jy(t,"!important")&&10))){case 107:return nt(t,":",":"+tt)+t;case 101:return nt(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+tt+(Sn(t,14)===45?"inline-":"")+"box$3$1"+tt+"$2$3$1"+Rn+"$2box$3")+t}break;case 5936:switch(Sn(t,e+11)){case 114:return tt+t+Rn+nt(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return tt+t+Rn+nt(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return tt+t+Rn+nt(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return tt+t+Rn+t+t}return t}var f5=function(e,n,i,s){if(e.length>-1&&!e.return)switch(e.type){case t0:e.return=aC(e.value,e.length);break;case eC:return sl([Bu(e,{value:nt(e.value,"@","@"+tt)})],s);case e0:if(e.length)return Y3(e.props,function(l){switch(Q3(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return sl([Bu(e,{props:[nt(l,/:(read-\w+)/,":"+Td+"$1")]})],s);case"::placeholder":return sl([Bu(e,{props:[nt(l,/:(plac\w+)/,":"+tt+"input-$1")]}),Bu(e,{props:[nt(l,/:(plac\w+)/,":"+Td+"$1")]}),Bu(e,{props:[nt(l,/:(plac\w+)/,Rn+"input-$1")]})],s)}return""})}},d5=[f5],m5=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(k){var D=k.getAttribute("data-emotion");D.indexOf(" ")!==-1&&(document.head.appendChild(k),k.setAttribute("data-s",""))})}var s=e.stylisPlugins||d5,l={},c,m=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(k){for(var D=k.getAttribute("data-emotion").split(" "),$=1;$<D.length;$++)l[D[$]]=!0;m.push(k)});var d,p=[c5,h5];{var y,b=[r5,a5(function(k){y.insert(k)})],E=i5(p.concat(s,b)),I=function(D){return sl(t5(D),E)};d=function(D,$,H,F){y=H,I(D?D+"{"+$.styles+"}":$.styles),F&&(P.inserted[$.name]=!0)}}var P={key:n,sheet:new z3({key:n,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:d};return P.sheet.hydrate(m),P},zg={exports:{}},it={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PE;function p5(){if(PE)return it;PE=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,s=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,c=t?Symbol.for("react.provider"):60109,m=t?Symbol.for("react.context"):60110,d=t?Symbol.for("react.async_mode"):60111,p=t?Symbol.for("react.concurrent_mode"):60111,y=t?Symbol.for("react.forward_ref"):60112,b=t?Symbol.for("react.suspense"):60113,E=t?Symbol.for("react.suspense_list"):60120,I=t?Symbol.for("react.memo"):60115,P=t?Symbol.for("react.lazy"):60116,k=t?Symbol.for("react.block"):60121,D=t?Symbol.for("react.fundamental"):60117,$=t?Symbol.for("react.responder"):60118,H=t?Symbol.for("react.scope"):60119;function F(L){if(typeof L=="object"&&L!==null){var K=L.$$typeof;switch(K){case e:switch(L=L.type,L){case d:case p:case i:case l:case s:case b:return L;default:switch(L=L&&L.$$typeof,L){case m:case y:case P:case I:case c:return L;default:return K}}case n:return K}}}function te(L){return F(L)===p}return it.AsyncMode=d,it.ConcurrentMode=p,it.ContextConsumer=m,it.ContextProvider=c,it.Element=e,it.ForwardRef=y,it.Fragment=i,it.Lazy=P,it.Memo=I,it.Portal=n,it.Profiler=l,it.StrictMode=s,it.Suspense=b,it.isAsyncMode=function(L){return te(L)||F(L)===d},it.isConcurrentMode=te,it.isContextConsumer=function(L){return F(L)===m},it.isContextProvider=function(L){return F(L)===c},it.isElement=function(L){return typeof L=="object"&&L!==null&&L.$$typeof===e},it.isForwardRef=function(L){return F(L)===y},it.isFragment=function(L){return F(L)===i},it.isLazy=function(L){return F(L)===P},it.isMemo=function(L){return F(L)===I},it.isPortal=function(L){return F(L)===n},it.isProfiler=function(L){return F(L)===l},it.isStrictMode=function(L){return F(L)===s},it.isSuspense=function(L){return F(L)===b},it.isValidElementType=function(L){return typeof L=="string"||typeof L=="function"||L===i||L===p||L===l||L===s||L===b||L===E||typeof L=="object"&&L!==null&&(L.$$typeof===P||L.$$typeof===I||L.$$typeof===c||L.$$typeof===m||L.$$typeof===y||L.$$typeof===D||L.$$typeof===$||L.$$typeof===H||L.$$typeof===k)},it.typeOf=F,it}var ME;function g5(){return ME||(ME=1,zg.exports=p5()),zg.exports}var Bg,kE;function y5(){if(kE)return Bg;kE=1;var t=g5(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[t.ForwardRef]=i,l[t.Memo]=s;function c(P){return t.isMemo(P)?s:l[P.$$typeof]||e}var m=Object.defineProperty,d=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,E=Object.prototype;function I(P,k,D){if(typeof k!="string"){if(E){var $=b(k);$&&$!==E&&I(P,$,D)}var H=d(k);p&&(H=H.concat(p(k)));for(var F=c(P),te=c(k),L=0;L<H.length;++L){var K=H[L];if(!n[K]&&!(D&&D[K])&&!(te&&te[K])&&!(F&&F[K])){var C=y(k,K);try{m(P,K,C)}catch{}}}}return P}return Bg=I,Bg}y5();var v5=!0;function b5(t,e,n){var i="";return n.split(" ").forEach(function(s){t[s]!==void 0?e.push(t[s]+";"):s&&(i+=s+" ")}),i}var sC=function(e,n,i){var s=e.key+"-"+n.name;(i===!1||v5===!1)&&e.registered[s]===void 0&&(e.registered[s]=n.styles)},_5=function(e,n,i){sC(e,n,i);var s=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var l=n;do e.insert(n===l?"."+s:"",l,e.sheet,!0),l=l.next;while(l!==void 0)}};function S5(t){for(var e=0,n,i=0,s=t.length;s>=4;++i,s-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(s){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var E5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},T5=/[A-Z]|^ms/g,w5=/_EMO_([^_]+?)_([^]*?)_EMO_/g,oC=function(e){return e.charCodeAt(1)===45},VE=function(e){return e!=null&&typeof e!="boolean"},Fg=s5(function(t){return oC(t)?t:t.replace(T5,"-$&").toLowerCase()}),NE=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(w5,function(i,s,l){return ei={name:s,styles:l,next:ei},s})}return E5[e]!==1&&!oC(e)&&typeof n=="number"&&n!==0?n+"px":n};function vc(t,e,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var s=n;if(s.anim===1)return ei={name:s.name,styles:s.styles,next:ei},s.name;var l=n;if(l.styles!==void 0){var c=l.next;if(c!==void 0)for(;c!==void 0;)ei={name:c.name,styles:c.styles,next:ei},c=c.next;var m=l.styles+";";return m}return x5(t,e,n)}case"function":{if(t!==void 0){var d=ei,p=n(t);return ei=d,vc(t,e,p)}break}}var y=n;return y}function x5(t,e,n){var i="";if(Array.isArray(n))for(var s=0;s<n.length;s++)i+=vc(t,e,n[s])+";";else for(var l in n){var c=n[l];if(typeof c!="object"){var m=c;VE(m)&&(i+=Fg(l)+":"+NE(l,m)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&e==null)for(var d=0;d<c.length;d++)VE(c[d])&&(i+=Fg(l)+":"+NE(l,c[d])+";");else{var p=vc(t,e,c);switch(l){case"animation":case"animationName":{i+=Fg(l)+":"+p+";";break}default:i+=l+"{"+p+"}"}}}return i}var $E=/label:\s*([^\s;{]+)\s*(;|$)/g,ei;function lC(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,s="";ei=void 0;var l=t[0];if(l==null||l.raw===void 0)i=!1,s+=vc(n,e,l);else{var c=l;s+=c[0]}for(var m=1;m<t.length;m++)if(s+=vc(n,e,t[m]),i){var d=l;s+=d[m]}$E.lastIndex=0;for(var p="",y;(y=$E.exec(s))!==null;)p+="-"+y[1];var b=S5(s)+p;return{name:b,styles:s,next:ei}}var A5=function(e){return e()},C5=O_.useInsertionEffect?O_.useInsertionEffect:!1,R5=C5||A5,uC=O.createContext(typeof HTMLElement<"u"?m5({key:"css"}):null);uC.Provider;var I5=function(e){return O.forwardRef(function(n,i){var s=O.useContext(uC);return e(n,s,i)})},O5=O.createContext({}),r0={}.hasOwnProperty,zy="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",D5=function(e,n){var i={};for(var s in n)r0.call(n,s)&&(i[s]=n[s]);return i[zy]=e,i},P5=function(e){var n=e.cache,i=e.serialized,s=e.isStringTag;return sC(n,i,s),R5(function(){return _5(n,i,s)}),null},M5=I5(function(t,e,n){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var s=t[zy],l=[i],c="";typeof t.className=="string"?c=b5(e.registered,l,t.className):t.className!=null&&(c=t.className+" ");var m=lC(l,void 0,O.useContext(O5));c+=e.key+"-"+m.name;var d={};for(var p in t)r0.call(t,p)&&p!=="css"&&p!==zy&&(d[p]=t[p]);return d.className=c,n&&(d.ref=n),O.createElement(O.Fragment,null,O.createElement(P5,{cache:e,serialized:m,isStringTag:typeof s=="string"}),O.createElement(s,d))}),k5=M5,Ee=function(e,n){var i=arguments;if(n==null||!r0.call(n,"css"))return O.createElement.apply(void 0,i);var s=i.length,l=new Array(s);l[0]=k5,l[1]=D5(e,n);for(var c=2;c<s;c++)l[c]=i[c];return O.createElement.apply(null,l)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(Ee||(Ee={}));function i0(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return lC(e)}function V5(){var t=i0.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function N5(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const $5=Math.min,L5=Math.max,wd=Math.round,yf=Math.floor,xd=t=>({x:t,y:t});function j5(t){const{x:e,y:n,width:i,height:s}=t;return{width:i,height:s,top:n,left:e,right:e+i,bottom:n+s,x:e,y:n}}function hm(){return typeof window<"u"}function cC(t){return fC(t)?(t.nodeName||"").toLowerCase():"#document"}function Ji(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function hC(t){var e;return(e=(fC(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function fC(t){return hm()?t instanceof Node||t instanceof Ji(t).Node:!1}function U5(t){return hm()?t instanceof Element||t instanceof Ji(t).Element:!1}function a0(t){return hm()?t instanceof HTMLElement||t instanceof Ji(t).HTMLElement:!1}function LE(t){return!hm()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Ji(t).ShadowRoot}const z5=new Set(["inline","contents"]);function dC(t){const{overflow:e,overflowX:n,overflowY:i,display:s}=s0(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!z5.has(s)}function B5(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const F5=new Set(["html","body","#document"]);function H5(t){return F5.has(cC(t))}function s0(t){return Ji(t).getComputedStyle(t)}function q5(t){if(cC(t)==="html")return t;const e=t.assignedSlot||t.parentNode||LE(t)&&t.host||hC(t);return LE(e)?e.host:e}function mC(t){const e=q5(t);return H5(e)?t.ownerDocument?t.ownerDocument.body:t.body:a0(e)&&dC(e)?e:mC(e)}function Ad(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=mC(t),l=s===((i=t.ownerDocument)==null?void 0:i.body),c=Ji(s);if(l){const m=By(c);return e.concat(c,c.visualViewport||[],dC(s)?s:[],m&&n?Ad(m):[])}return e.concat(s,Ad(s,[],n))}function By(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function G5(t){const e=s0(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=a0(t),l=s?t.offsetWidth:n,c=s?t.offsetHeight:i,m=wd(n)!==l||wd(i)!==c;return m&&(n=l,i=c),{width:n,height:i,$:m}}function o0(t){return U5(t)?t:t.contextElement}function jE(t){const e=o0(t);if(!a0(e))return xd(1);const n=e.getBoundingClientRect(),{width:i,height:s,$:l}=G5(e);let c=(l?wd(n.width):n.width)/i,m=(l?wd(n.height):n.height)/s;return(!c||!Number.isFinite(c))&&(c=1),(!m||!Number.isFinite(m))&&(m=1),{x:c,y:m}}const Q5=xd(0);function Y5(t){const e=Ji(t);return!B5()||!e.visualViewport?Q5:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function K5(t,e,n){return!1}function UE(t,e,n,i){e===void 0&&(e=!1);const s=t.getBoundingClientRect(),l=o0(t);let c=xd(1);e&&(c=jE(t));const m=K5()?Y5(l):xd(0);let d=(s.left+m.x)/c.x,p=(s.top+m.y)/c.y,y=s.width/c.x,b=s.height/c.y;if(l){const E=Ji(l),I=i;let P=E,k=By(P);for(;k&&i&&I!==P;){const D=jE(k),$=k.getBoundingClientRect(),H=s0(k),F=$.left+(k.clientLeft+parseFloat(H.paddingLeft))*D.x,te=$.top+(k.clientTop+parseFloat(H.paddingTop))*D.y;d*=D.x,p*=D.y,y*=D.x,b*=D.y,d+=F,p+=te,P=Ji(k),k=By(P)}}return j5({width:y,height:b,x:d,y:p})}function pC(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function X5(t,e){let n=null,i;const s=hC(t);function l(){var m;clearTimeout(i),(m=n)==null||m.disconnect(),n=null}function c(m,d){m===void 0&&(m=!1),d===void 0&&(d=1),l();const p=t.getBoundingClientRect(),{left:y,top:b,width:E,height:I}=p;if(m||e(),!E||!I)return;const P=yf(b),k=yf(s.clientWidth-(y+E)),D=yf(s.clientHeight-(b+I)),$=yf(y),F={rootMargin:-P+"px "+-k+"px "+-D+"px "+-$+"px",threshold:L5(0,$5(1,d))||1};let te=!0;function L(K){const C=K[0].intersectionRatio;if(C!==d){if(!te)return c();C?c(!1,C):i=setTimeout(()=>{c(!1,1e-7)},1e3)}C===1&&!pC(p,t.getBoundingClientRect())&&c(),te=!1}try{n=new IntersectionObserver(L,{...F,root:s.ownerDocument})}catch{n=new IntersectionObserver(L,F)}n.observe(t)}return c(!0),l}function W5(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:l=!0,elementResize:c=typeof ResizeObserver=="function",layoutShift:m=typeof IntersectionObserver=="function",animationFrame:d=!1}=i,p=o0(t),y=s||l?[...p?Ad(p):[],...Ad(e)]:[];y.forEach($=>{s&&$.addEventListener("scroll",n,{passive:!0}),l&&$.addEventListener("resize",n)});const b=p&&m?X5(p,n):null;let E=-1,I=null;c&&(I=new ResizeObserver($=>{let[H]=$;H&&H.target===p&&I&&(I.unobserve(e),cancelAnimationFrame(E),E=requestAnimationFrame(()=>{var F;(F=I)==null||F.observe(e)})),n()}),p&&!d&&I.observe(p),I.observe(e));let P,k=d?UE(t):null;d&&D();function D(){const $=UE(t);k&&!pC(k,$)&&n(),k=$,P=requestAnimationFrame(D)}return n(),()=>{var $;y.forEach(H=>{s&&H.removeEventListener("scroll",n),l&&H.removeEventListener("resize",n)}),b?.(),($=I)==null||$.disconnect(),I=null,d&&cancelAnimationFrame(P)}}var Fy=O.useLayoutEffect,Z5=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Cd=function(){};function J5(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function e9(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];var l=[].concat(i);if(e&&t)for(var c in e)e.hasOwnProperty(c)&&e[c]&&l.push("".concat(J5(t,c)));return l.filter(function(m){return m}).map(function(m){return String(m).trim()}).join(" ")}var zE=function(e){return u9(e)?e.filter(Boolean):Ys(e)==="object"&&e!==null?[e]:[]},gC=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var n=na(e,Z5);return Ae({},n)},Mt=function(e,n,i){var s=e.cx,l=e.getStyles,c=e.getClassNames,m=e.className;return{css:l(n,e),className:s(i??{},c(n,e),m)}};function fm(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function t9(t){return fm(t)?window.innerHeight:t.clientHeight}function yC(t){return fm(t)?window.pageYOffset:t.scrollTop}function Rd(t,e){if(fm(t)){window.scrollTo(0,e);return}t.scrollTop=e}function n9(t){var e=getComputedStyle(t),n=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var s=t;s=s.parentElement;)if(e=getComputedStyle(s),!(n&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return s;return document.documentElement}function r9(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e}function vf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Cd,s=yC(t),l=e-s,c=10,m=0;function d(){m+=c;var p=r9(m,s,l,n);Rd(t,p),m<n?window.requestAnimationFrame(d):i(t)}d()}function BE(t,e){var n=t.getBoundingClientRect(),i=e.getBoundingClientRect(),s=e.offsetHeight/3;i.bottom+s>n.bottom?Rd(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+s,t.scrollHeight)):i.top-s<n.top&&Rd(t,Math.max(e.offsetTop-s,0))}function i9(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function FE(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function a9(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var vC=!1,s9={get passive(){return vC=!0}},bf=typeof window<"u"?window:{};bf.addEventListener&&bf.removeEventListener&&(bf.addEventListener("p",Cd,s9),bf.removeEventListener("p",Cd,!1));var o9=vC;function l9(t){return t!=null}function u9(t){return Array.isArray(t)}function _f(t,e,n){return t?e:n}var c9=function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];var l=Object.entries(e).filter(function(c){var m=Gi(c,1),d=m[0];return!i.includes(d)});return l.reduce(function(c,m){var d=Gi(m,2),p=d[0],y=d[1];return c[p]=y,c},{})},h9=["children","innerProps"],f9=["children","innerProps"];function d9(t){var e=t.maxHeight,n=t.menuEl,i=t.minHeight,s=t.placement,l=t.shouldScroll,c=t.isFixedPosition,m=t.controlHeight,d=n9(n),p={placement:"bottom",maxHeight:e};if(!n||!n.offsetParent)return p;var y=d.getBoundingClientRect(),b=y.height,E=n.getBoundingClientRect(),I=E.bottom,P=E.height,k=E.top,D=n.offsetParent.getBoundingClientRect(),$=D.top,H=c?window.innerHeight:t9(d),F=yC(d),te=parseInt(getComputedStyle(n).marginBottom,10),L=parseInt(getComputedStyle(n).marginTop,10),K=$-L,C=H-k,w=K+F,x=b-F-k,M=I-H+F+te,V=F+k-L,j=160;switch(s){case"auto":case"bottom":if(C>=P)return{placement:"bottom",maxHeight:e};if(x>=P&&!c)return l&&vf(d,M,j),{placement:"bottom",maxHeight:e};if(!c&&x>=i||c&&C>=i){l&&vf(d,M,j);var N=c?C-te:x-te;return{placement:"bottom",maxHeight:N}}if(s==="auto"||c){var Me=e,fe=c?K:w;return fe>=i&&(Me=Math.min(fe-te-m,e)),{placement:"top",maxHeight:Me}}if(s==="bottom")return l&&Rd(d,M),{placement:"bottom",maxHeight:e};break;case"top":if(K>=P)return{placement:"top",maxHeight:e};if(w>=P&&!c)return l&&vf(d,V,j),{placement:"top",maxHeight:e};if(!c&&w>=i||c&&K>=i){var X=e;return(!c&&w>=i||c&&K>=i)&&(X=c?K-L:w-L),l&&vf(d,V,j),{placement:"top",maxHeight:X}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(s,'".'))}return p}function m9(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var bC=function(e){return e==="auto"?"bottom":e},p9=function(e,n){var i,s=e.placement,l=e.theme,c=l.borderRadius,m=l.spacing,d=l.colors;return Ae((i={label:"menu"},Wu(i,m9(s),"100%"),Wu(i,"position","absolute"),Wu(i,"width","100%"),Wu(i,"zIndex",1),i),n?{}:{backgroundColor:d.neutral0,borderRadius:c,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:m.menuGutter,marginTop:m.menuGutter})},_C=O.createContext(null),g9=function(e){var n=e.children,i=e.minMenuHeight,s=e.maxMenuHeight,l=e.menuPlacement,c=e.menuPosition,m=e.menuShouldScrollIntoView,d=e.theme,p=O.useContext(_C)||{},y=p.setPortalPlacement,b=O.useRef(null),E=O.useState(s),I=Gi(E,2),P=I[0],k=I[1],D=O.useState(null),$=Gi(D,2),H=$[0],F=$[1],te=d.spacing.controlHeight;return Fy(function(){var L=b.current;if(L){var K=c==="fixed",C=m&&!K,w=d9({maxHeight:s,menuEl:L,minHeight:i,placement:l,shouldScroll:C,isFixedPosition:K,controlHeight:te});k(w.maxHeight),F(w.placement),y?.(w.placement)}},[s,l,c,m,i,y,te]),n({ref:b,placerProps:Ae(Ae({},e),{},{placement:H||bC(l),maxHeight:P})})},y9=function(e){var n=e.children,i=e.innerRef,s=e.innerProps;return Ee("div",Ie({},Mt(e,"menu",{menu:!0}),{ref:i},s),n)},v9=y9,b9=function(e,n){var i=e.maxHeight,s=e.theme.spacing.baseUnit;return Ae({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:s,paddingTop:s})},_9=function(e){var n=e.children,i=e.innerProps,s=e.innerRef,l=e.isMulti;return Ee("div",Ie({},Mt(e,"menuList",{"menu-list":!0,"menu-list--is-multi":l}),{ref:s},i),n)},SC=function(e,n){var i=e.theme,s=i.spacing.baseUnit,l=i.colors;return Ae({textAlign:"center"},n?{}:{color:l.neutral40,padding:"".concat(s*2,"px ").concat(s*3,"px")})},S9=SC,E9=SC,T9=function(e){var n=e.children,i=n===void 0?"No options":n,s=e.innerProps,l=na(e,h9);return Ee("div",Ie({},Mt(Ae(Ae({},l),{},{children:i,innerProps:s}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),s),i)},w9=function(e){var n=e.children,i=n===void 0?"Loading...":n,s=e.innerProps,l=na(e,f9);return Ee("div",Ie({},Mt(Ae(Ae({},l),{},{children:i,innerProps:s}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),s),i)},x9=function(e){var n=e.rect,i=e.offset,s=e.position;return{left:n.left,position:s,top:i,width:n.width,zIndex:1}},A9=function(e){var n=e.appendTo,i=e.children,s=e.controlElement,l=e.innerProps,c=e.menuPlacement,m=e.menuPosition,d=O.useRef(null),p=O.useRef(null),y=O.useState(bC(c)),b=Gi(y,2),E=b[0],I=b[1],P=O.useMemo(function(){return{setPortalPlacement:I}},[]),k=O.useState(null),D=Gi(k,2),$=D[0],H=D[1],F=O.useCallback(function(){if(s){var C=i9(s),w=m==="fixed"?0:window.pageYOffset,x=C[E]+w;(x!==$?.offset||C.left!==$?.rect.left||C.width!==$?.rect.width)&&H({offset:x,rect:C})}},[s,m,E,$?.offset,$?.rect.left,$?.rect.width]);Fy(function(){F()},[F]);var te=O.useCallback(function(){typeof p.current=="function"&&(p.current(),p.current=null),s&&d.current&&(p.current=W5(s,d.current,F,{elementResize:"ResizeObserver"in window}))},[s,F]);Fy(function(){te()},[te]);var L=O.useCallback(function(C){d.current=C,te()},[te]);if(!n&&m!=="fixed"||!$)return null;var K=Ee("div",Ie({ref:L},Mt(Ae(Ae({},e),{},{offset:$.offset,position:m,rect:$.rect}),"menuPortal",{"menu-portal":!0}),l),i);return Ee(_C.Provider,{value:P},n?VT.createPortal(K,n):K)},C9=function(e){var n=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},R9=function(e){var n=e.children,i=e.innerProps,s=e.isDisabled,l=e.isRtl;return Ee("div",Ie({},Mt(e,"container",{"--is-disabled":s,"--is-rtl":l}),i),n)},I9=function(e,n){var i=e.theme.spacing,s=e.isMulti,l=e.hasValue,c=e.selectProps.controlShouldRenderValue;return Ae({alignItems:"center",display:s&&l&&c?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},O9=function(e){var n=e.children,i=e.innerProps,s=e.isMulti,l=e.hasValue;return Ee("div",Ie({},Mt(e,"valueContainer",{"value-container":!0,"value-container--is-multi":s,"value-container--has-value":l}),i),n)},D9=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},P9=function(e){var n=e.children,i=e.innerProps;return Ee("div",Ie({},Mt(e,"indicatorsContainer",{indicators:!0}),i),n)},HE,M9=["size"],k9=["innerProps","isRtl","size"],V9={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},EC=function(e){var n=e.size,i=na(e,M9);return Ee("svg",Ie({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:V9},i))},l0=function(e){return Ee(EC,Ie({size:20},e),Ee("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},TC=function(e){return Ee(EC,Ie({size:20},e),Ee("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},wC=function(e,n){var i=e.isFocused,s=e.theme,l=s.spacing.baseUnit,c=s.colors;return Ae({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:i?c.neutral60:c.neutral20,padding:l*2,":hover":{color:i?c.neutral80:c.neutral40}})},N9=wC,$9=function(e){var n=e.children,i=e.innerProps;return Ee("div",Ie({},Mt(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),n||Ee(TC,null))},L9=wC,j9=function(e){var n=e.children,i=e.innerProps;return Ee("div",Ie({},Mt(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),n||Ee(l0,null))},U9=function(e,n){var i=e.isDisabled,s=e.theme,l=s.spacing.baseUnit,c=s.colors;return Ae({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:i?c.neutral10:c.neutral20,marginBottom:l*2,marginTop:l*2})},z9=function(e){var n=e.innerProps;return Ee("span",Ie({},n,Mt(e,"indicatorSeparator",{"indicator-separator":!0})))},B9=V5(HE||(HE=N5([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),F9=function(e,n){var i=e.isFocused,s=e.size,l=e.theme,c=l.colors,m=l.spacing.baseUnit;return Ae({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:s,lineHeight:1,marginRight:s,textAlign:"center",verticalAlign:"middle"},n?{}:{color:i?c.neutral60:c.neutral20,padding:m*2})},Hg=function(e){var n=e.delay,i=e.offset;return Ee("span",{css:i0({animation:"".concat(B9," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},H9=function(e){var n=e.innerProps,i=e.isRtl,s=e.size,l=s===void 0?4:s,c=na(e,k9);return Ee("div",Ie({},Mt(Ae(Ae({},c),{},{innerProps:n,isRtl:i,size:l}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),Ee(Hg,{delay:0,offset:i}),Ee(Hg,{delay:160,offset:!0}),Ee(Hg,{delay:320,offset:!i}))},q9=function(e,n){var i=e.isDisabled,s=e.isFocused,l=e.theme,c=l.colors,m=l.borderRadius,d=l.spacing;return Ae({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:d.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:i?c.neutral5:c.neutral0,borderColor:i?c.neutral10:s?c.primary:c.neutral20,borderRadius:m,borderStyle:"solid",borderWidth:1,boxShadow:s?"0 0 0 1px ".concat(c.primary):void 0,"&:hover":{borderColor:s?c.primary:c.neutral30}})},G9=function(e){var n=e.children,i=e.isDisabled,s=e.isFocused,l=e.innerRef,c=e.innerProps,m=e.menuIsOpen;return Ee("div",Ie({ref:l},Mt(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":s,"control--menu-is-open":m}),c,{"aria-disabled":i||void 0}),n)},Q9=G9,Y9=["data"],K9=function(e,n){var i=e.theme.spacing;return n?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},X9=function(e){var n=e.children,i=e.cx,s=e.getStyles,l=e.getClassNames,c=e.Heading,m=e.headingProps,d=e.innerProps,p=e.label,y=e.theme,b=e.selectProps;return Ee("div",Ie({},Mt(e,"group",{group:!0}),d),Ee(c,Ie({},m,{selectProps:b,theme:y,getStyles:s,getClassNames:l,cx:i}),p),Ee("div",null,n))},W9=function(e,n){var i=e.theme,s=i.colors,l=i.spacing;return Ae({label:"group",cursor:"default",display:"block"},n?{}:{color:s.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:l.baseUnit*3,paddingRight:l.baseUnit*3,textTransform:"uppercase"})},Z9=function(e){var n=gC(e);n.data;var i=na(n,Y9);return Ee("div",Ie({},Mt(e,"groupHeading",{"group-heading":!0}),i))},J9=X9,e$=["innerRef","isDisabled","isHidden","inputClassName"],t$=function(e,n){var i=e.isDisabled,s=e.value,l=e.theme,c=l.spacing,m=l.colors;return Ae(Ae({visibility:i?"hidden":"visible",transform:s?"translateZ(0)":""},n$),n?{}:{margin:c.baseUnit/2,paddingBottom:c.baseUnit/2,paddingTop:c.baseUnit/2,color:m.neutral80})},xC={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},n$={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":Ae({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},xC)},r$=function(e){return Ae({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},xC)},i$=function(e){var n=e.cx,i=e.value,s=gC(e),l=s.innerRef,c=s.isDisabled,m=s.isHidden,d=s.inputClassName,p=na(s,e$);return Ee("div",Ie({},Mt(e,"input",{"input-container":!0}),{"data-value":i||""}),Ee("input",Ie({className:n({input:!0},d),ref:l,style:r$(m),disabled:c},p)))},a$=i$,s$=function(e,n){var i=e.theme,s=i.spacing,l=i.borderRadius,c=i.colors;return Ae({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:c.neutral10,borderRadius:l/2,margin:s.baseUnit/2})},o$=function(e,n){var i=e.theme,s=i.borderRadius,l=i.colors,c=e.cropWithEllipsis;return Ae({overflow:"hidden",textOverflow:c||c===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:s/2,color:l.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},l$=function(e,n){var i=e.theme,s=i.spacing,l=i.borderRadius,c=i.colors,m=e.isFocused;return Ae({alignItems:"center",display:"flex"},n?{}:{borderRadius:l/2,backgroundColor:m?c.dangerLight:void 0,paddingLeft:s.baseUnit,paddingRight:s.baseUnit,":hover":{backgroundColor:c.dangerLight,color:c.danger}})},AC=function(e){var n=e.children,i=e.innerProps;return Ee("div",i,n)},u$=AC,c$=AC;function h$(t){var e=t.children,n=t.innerProps;return Ee("div",Ie({role:"button"},n),e||Ee(l0,{size:14}))}var f$=function(e){var n=e.children,i=e.components,s=e.data,l=e.innerProps,c=e.isDisabled,m=e.removeProps,d=e.selectProps,p=i.Container,y=i.Label,b=i.Remove;return Ee(p,{data:s,innerProps:Ae(Ae({},Mt(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":c})),l),selectProps:d},Ee(y,{data:s,innerProps:Ae({},Mt(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:d},n),Ee(b,{data:s,innerProps:Ae(Ae({},Mt(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},m),selectProps:d}))},d$=f$,m$=function(e,n){var i=e.isDisabled,s=e.isFocused,l=e.isSelected,c=e.theme,m=c.spacing,d=c.colors;return Ae({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:l?d.primary:s?d.primary25:"transparent",color:i?d.neutral20:l?d.neutral0:"inherit",padding:"".concat(m.baseUnit*2,"px ").concat(m.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:l?d.primary:d.primary50}})},p$=function(e){var n=e.children,i=e.isDisabled,s=e.isFocused,l=e.isSelected,c=e.innerRef,m=e.innerProps;return Ee("div",Ie({},Mt(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":s,"option--is-selected":l}),{ref:c,"aria-disabled":i},m),n)},g$=p$,y$=function(e,n){var i=e.theme,s=i.spacing,l=i.colors;return Ae({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:l.neutral50,marginLeft:s.baseUnit/2,marginRight:s.baseUnit/2})},v$=function(e){var n=e.children,i=e.innerProps;return Ee("div",Ie({},Mt(e,"placeholder",{placeholder:!0}),i),n)},b$=v$,_$=function(e,n){var i=e.isDisabled,s=e.theme,l=s.spacing,c=s.colors;return Ae({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:i?c.neutral40:c.neutral80,marginLeft:l.baseUnit/2,marginRight:l.baseUnit/2})},S$=function(e){var n=e.children,i=e.isDisabled,s=e.innerProps;return Ee("div",Ie({},Mt(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),s),n)},E$=S$,T$={ClearIndicator:j9,Control:Q9,DropdownIndicator:$9,DownChevron:TC,CrossIcon:l0,Group:J9,GroupHeading:Z9,IndicatorsContainer:P9,IndicatorSeparator:z9,Input:a$,LoadingIndicator:H9,Menu:v9,MenuList:_9,MenuPortal:A9,LoadingMessage:w9,NoOptionsMessage:T9,MultiValue:d$,MultiValueContainer:u$,MultiValueLabel:c$,MultiValueRemove:h$,Option:g$,Placeholder:b$,SelectContainer:R9,SingleValue:E$,ValueContainer:O9},w$=function(e){return Ae(Ae({},T$),e.components)},qE=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function x$(t,e){return!!(t===e||qE(t)&&qE(e))}function A$(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!x$(t[n],e[n]))return!1;return!0}function C$(t,e){e===void 0&&(e=A$);var n=null;function i(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];if(n&&n.lastThis===this&&e(s,n.lastArgs))return n.lastResult;var c=t.apply(this,s);return n={lastResult:c,lastArgs:s,lastThis:this},c}return i.clear=function(){n=null},i}var R$={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},I$=function(e){return Ee("span",Ie({css:R$},e))},GE=I$,O$={guidance:function(e){var n=e.isSearchable,i=e.isMulti,s=e.tabSelectsValue,l=e.context,c=e.isInitialFocus;switch(l){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(s?", press Tab to select the option and exit the menu":"",".");case"input":return c?"".concat(e["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var n=e.action,i=e.label,s=i===void 0?"":i,l=e.labels,c=e.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(s,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(l.length>1?"s":""," ").concat(l.join(","),", selected.");case"select-option":return c?"option ".concat(s," is disabled. Select another option."):"option ".concat(s,", selected.");default:return""}},onFocus:function(e){var n=e.context,i=e.focused,s=e.options,l=e.label,c=l===void 0?"":l,m=e.selectValue,d=e.isDisabled,p=e.isSelected,y=e.isAppleDevice,b=function(k,D){return k&&k.length?"".concat(k.indexOf(D)+1," of ").concat(k.length):""};if(n==="value"&&m)return"value ".concat(c," focused, ").concat(b(m,i),".");if(n==="menu"&&y){var E=d?" disabled":"",I="".concat(p?" selected":"").concat(E);return"".concat(c).concat(I,", ").concat(b(s,i),".")}return""},onFilter:function(e){var n=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(n?" for search term "+n:"",".")}},D$=function(e){var n=e.ariaSelection,i=e.focusedOption,s=e.focusedValue,l=e.focusableOptions,c=e.isFocused,m=e.selectValue,d=e.selectProps,p=e.id,y=e.isAppleDevice,b=d.ariaLiveMessages,E=d.getOptionLabel,I=d.inputValue,P=d.isMulti,k=d.isOptionDisabled,D=d.isSearchable,$=d.menuIsOpen,H=d.options,F=d.screenReaderStatus,te=d.tabSelectsValue,L=d.isLoading,K=d["aria-label"],C=d["aria-live"],w=O.useMemo(function(){return Ae(Ae({},O$),b||{})},[b]),x=O.useMemo(function(){var fe="";if(n&&w.onChange){var X=n.option,ce=n.options,de=n.removedValue,be=n.removedValues,z=n.value,J=function(Ve){return Array.isArray(Ve)?null:Ve},ie=de||X||J(z),ae=ie?E(ie):"",me=ce||be||void 0,Te=me?me.map(E):[],ge=Ae({isDisabled:ie&&k(ie,m),label:ae,labels:Te},n);fe=w.onChange(ge)}return fe},[n,w,k,m,E]),M=O.useMemo(function(){var fe="",X=i||s,ce=!!(i&&m&&m.includes(i));if(X&&w.onFocus){var de={focused:X,label:E(X),isDisabled:k(X,m),isSelected:ce,options:l,context:X===i?"menu":"value",selectValue:m,isAppleDevice:y};fe=w.onFocus(de)}return fe},[i,s,E,k,w,l,m,y]),V=O.useMemo(function(){var fe="";if($&&H.length&&!L&&w.onFilter){var X=F({count:l.length});fe=w.onFilter({inputValue:I,resultsMessage:X})}return fe},[l,I,$,w,H,F,L]),j=n?.action==="initial-input-focus",N=O.useMemo(function(){var fe="";if(w.guidance){var X=s?"value":$?"menu":"input";fe=w.guidance({"aria-label":K,context:X,isDisabled:i&&k(i,m),isMulti:P,isSearchable:D,tabSelectsValue:te,isInitialFocus:j})}return fe},[K,i,s,P,k,D,$,w,m,te,j]),Me=Ee(O.Fragment,null,Ee("span",{id:"aria-selection"},x),Ee("span",{id:"aria-focused"},M),Ee("span",{id:"aria-results"},V),Ee("span",{id:"aria-guidance"},N));return Ee(O.Fragment,null,Ee(GE,{id:p},j&&Me),Ee(GE,{"aria-live":C,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},c&&!j&&Me))},P$=D$,Hy=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],M$=new RegExp("["+Hy.map(function(t){return t.letters}).join("")+"]","g"),CC={};for(var qg=0;qg<Hy.length;qg++)for(var Gg=Hy[qg],Qg=0;Qg<Gg.letters.length;Qg++)CC[Gg.letters[Qg]]=Gg.base;var RC=function(e){return e.replace(M$,function(n){return CC[n]})},k$=C$(RC),QE=function(e){return e.replace(/^\s+|\s+$/g,"")},V$=function(e){return"".concat(e.label," ").concat(e.value)},N$=function(e){return function(n,i){if(n.data.__isNew__)return!0;var s=Ae({ignoreCase:!0,ignoreAccents:!0,stringify:V$,trim:!0,matchFrom:"any"},e),l=s.ignoreCase,c=s.ignoreAccents,m=s.stringify,d=s.trim,p=s.matchFrom,y=d?QE(i):i,b=d?QE(m(n)):m(n);return l&&(y=y.toLowerCase(),b=b.toLowerCase()),c&&(y=k$(y),b=RC(b)),p==="start"?b.substr(0,y.length)===y:b.indexOf(y)>-1}},$$=["innerRef"];function L$(t){var e=t.innerRef,n=na(t,$$),i=c9(n,"onExited","in","enter","exit","appear");return Ee("input",Ie({ref:e},i,{css:i0({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var j$=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function U$(t){var e=t.isEnabled,n=t.onBottomArrive,i=t.onBottomLeave,s=t.onTopArrive,l=t.onTopLeave,c=O.useRef(!1),m=O.useRef(!1),d=O.useRef(0),p=O.useRef(null),y=O.useCallback(function(D,$){if(p.current!==null){var H=p.current,F=H.scrollTop,te=H.scrollHeight,L=H.clientHeight,K=p.current,C=$>0,w=te-L-F,x=!1;w>$&&c.current&&(i&&i(D),c.current=!1),C&&m.current&&(l&&l(D),m.current=!1),C&&$>w?(n&&!c.current&&n(D),K.scrollTop=te,x=!0,c.current=!0):!C&&-$>F&&(s&&!m.current&&s(D),K.scrollTop=0,x=!0,m.current=!0),x&&j$(D)}},[n,i,s,l]),b=O.useCallback(function(D){y(D,D.deltaY)},[y]),E=O.useCallback(function(D){d.current=D.changedTouches[0].clientY},[]),I=O.useCallback(function(D){var $=d.current-D.changedTouches[0].clientY;y(D,$)},[y]),P=O.useCallback(function(D){if(D){var $=o9?{passive:!1}:!1;D.addEventListener("wheel",b,$),D.addEventListener("touchstart",E,$),D.addEventListener("touchmove",I,$)}},[I,E,b]),k=O.useCallback(function(D){D&&(D.removeEventListener("wheel",b,!1),D.removeEventListener("touchstart",E,!1),D.removeEventListener("touchmove",I,!1))},[I,E,b]);return O.useEffect(function(){if(e){var D=p.current;return P(D),function(){k(D)}}},[e,P,k]),function(D){p.current=D}}var YE=["boxSizing","height","overflow","paddingRight","position"],KE={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function XE(t){t.cancelable&&t.preventDefault()}function WE(t){t.stopPropagation()}function ZE(){var t=this.scrollTop,e=this.scrollHeight,n=t+this.offsetHeight;t===0?this.scrollTop=1:n===e&&(this.scrollTop=t-1)}function JE(){return"ontouchstart"in window||navigator.maxTouchPoints}var eT=!!(typeof window<"u"&&window.document&&window.document.createElement),Fu=0,Yo={capture:!1,passive:!1};function z$(t){var e=t.isEnabled,n=t.accountForScrollbars,i=n===void 0?!0:n,s=O.useRef({}),l=O.useRef(null),c=O.useCallback(function(d){if(eT){var p=document.body,y=p&&p.style;if(i&&YE.forEach(function(P){var k=y&&y[P];s.current[P]=k}),i&&Fu<1){var b=parseInt(s.current.paddingRight,10)||0,E=document.body?document.body.clientWidth:0,I=window.innerWidth-E+b||0;Object.keys(KE).forEach(function(P){var k=KE[P];y&&(y[P]=k)}),y&&(y.paddingRight="".concat(I,"px"))}p&&JE()&&(p.addEventListener("touchmove",XE,Yo),d&&(d.addEventListener("touchstart",ZE,Yo),d.addEventListener("touchmove",WE,Yo))),Fu+=1}},[i]),m=O.useCallback(function(d){if(eT){var p=document.body,y=p&&p.style;Fu=Math.max(Fu-1,0),i&&Fu<1&&YE.forEach(function(b){var E=s.current[b];y&&(y[b]=E)}),p&&JE()&&(p.removeEventListener("touchmove",XE,Yo),d&&(d.removeEventListener("touchstart",ZE,Yo),d.removeEventListener("touchmove",WE,Yo)))}},[i]);return O.useEffect(function(){if(e){var d=l.current;return c(d),function(){m(d)}}},[e,c,m]),function(d){l.current=d}}var B$=function(e){var n=e.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},F$={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function H$(t){var e=t.children,n=t.lockEnabled,i=t.captureEnabled,s=i===void 0?!0:i,l=t.onBottomArrive,c=t.onBottomLeave,m=t.onTopArrive,d=t.onTopLeave,p=U$({isEnabled:s,onBottomArrive:l,onBottomLeave:c,onTopArrive:m,onTopLeave:d}),y=z$({isEnabled:n}),b=function(I){p(I),y(I)};return Ee(O.Fragment,null,n&&Ee("div",{onClick:B$,css:F$}),e(b))}var q$={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},G$=function(e){var n=e.name,i=e.onFocus;return Ee("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:q$,value:"",onChange:function(){}})},Q$=G$;function u0(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Y$(){return u0(/^iPhone/i)}function IC(){return u0(/^Mac/i)}function K$(){return u0(/^iPad/i)||IC()&&navigator.maxTouchPoints>1}function X$(){return Y$()||K$()}function W$(){return IC()||X$()}var Z$=function(e){return e.label},J$=function(e){return e.label},eL=function(e){return e.value},tL=function(e){return!!e.isDisabled},nL={clearIndicator:L9,container:C9,control:q9,dropdownIndicator:N9,group:K9,groupHeading:W9,indicatorsContainer:D9,indicatorSeparator:U9,input:t$,loadingIndicator:F9,loadingMessage:E9,menu:p9,menuList:b9,menuPortal:x9,multiValue:s$,multiValueLabel:o$,multiValueRemove:l$,noOptionsMessage:S9,option:m$,placeholder:y$,singleValue:_$,valueContainer:I9},rL={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},iL=4,OC=4,aL=38,sL=OC*2,oL={baseUnit:OC,controlHeight:aL,menuGutter:sL},Yg={borderRadius:iL,colors:rL,spacing:oL},lL={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:FE(),captureMenuScroll:!FE(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:N$(),formatGroupLabel:Z$,getOptionLabel:J$,getOptionValue:eL,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:tL,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!a9(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var n=e.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function tT(t,e,n,i){var s=MC(t,e,n),l=kC(t,e,n),c=PC(t,e),m=Id(t,e);return{type:"option",data:e,isDisabled:s,isSelected:l,label:c,value:m,index:i}}function Gf(t,e){return t.options.map(function(n,i){if("options"in n){var s=n.options.map(function(c,m){return tT(t,c,e,m)}).filter(function(c){return rT(t,c)});return s.length>0?{type:"group",data:n,options:s,index:i}:void 0}var l=tT(t,n,e,i);return rT(t,l)?l:void 0}).filter(l9)}function DC(t){return t.reduce(function(e,n){return n.type==="group"?e.push.apply(e,Jv(n.options.map(function(i){return i.data}))):e.push(n.data),e},[])}function nT(t,e){return t.reduce(function(n,i){return i.type==="group"?n.push.apply(n,Jv(i.options.map(function(s){return{data:s.data,id:"".concat(e,"-").concat(i.index,"-").concat(s.index)}}))):n.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),n},[])}function uL(t,e){return DC(Gf(t,e))}function rT(t,e){var n=t.inputValue,i=n===void 0?"":n,s=e.data,l=e.isSelected,c=e.label,m=e.value;return(!NC(t)||!l)&&VC(t,{label:c,value:m,data:s},i)}function cL(t,e){var n=t.focusedValue,i=t.selectValue,s=i.indexOf(n);if(s>-1){var l=e.indexOf(n);if(l>-1)return n;if(s<e.length)return e[s]}return null}function hL(t,e){var n=t.focusedOption;return n&&e.indexOf(n)>-1?n:e[0]}var Kg=function(e,n){var i,s=(i=e.find(function(l){return l.data===n}))===null||i===void 0?void 0:i.id;return s||null},PC=function(e,n){return e.getOptionLabel(n)},Id=function(e,n){return e.getOptionValue(n)};function MC(t,e,n){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,n):!1}function kC(t,e,n){if(n.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,n);var i=Id(t,e);return n.some(function(s){return Id(t,s)===i})}function VC(t,e,n){return t.filterOption?t.filterOption(e,n):!0}var NC=function(e){var n=e.hideSelectedOptions,i=e.isMulti;return n===void 0?i:n},fL=1,$C=function(t){P3(n,t);var e=V3(n);function n(i){var s;if(O3(this,n),s=e.call(this,i),s.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},s.blockOptionHover=!1,s.isComposing=!1,s.commonProps=void 0,s.initialTouchX=0,s.initialTouchY=0,s.openAfterFocus=!1,s.scrollToFocusedOptionOnUpdate=!1,s.userIsDragging=void 0,s.controlRef=null,s.getControlRef=function(d){s.controlRef=d},s.focusedOptionRef=null,s.getFocusedOptionRef=function(d){s.focusedOptionRef=d},s.menuListRef=null,s.getMenuListRef=function(d){s.menuListRef=d},s.inputRef=null,s.getInputRef=function(d){s.inputRef=d},s.focus=s.focusInput,s.blur=s.blurInput,s.onChange=function(d,p){var y=s.props,b=y.onChange,E=y.name;p.name=E,s.ariaOnChange(d,p),b(d,p)},s.setValue=function(d,p,y){var b=s.props,E=b.closeMenuOnSelect,I=b.isMulti,P=b.inputValue;s.onInputChange("",{action:"set-value",prevInputValue:P}),E&&(s.setState({inputIsHiddenAfterUpdate:!I}),s.onMenuClose()),s.setState({clearFocusValueOnUpdate:!0}),s.onChange(d,{action:p,option:y})},s.selectOption=function(d){var p=s.props,y=p.blurInputOnSelect,b=p.isMulti,E=p.name,I=s.state.selectValue,P=b&&s.isOptionSelected(d,I),k=s.isOptionDisabled(d,I);if(P){var D=s.getOptionValue(d);s.setValue(I.filter(function($){return s.getOptionValue($)!==D}),"deselect-option",d)}else if(!k)b?s.setValue([].concat(Jv(I),[d]),"select-option",d):s.setValue(d,"select-option");else{s.ariaOnChange(d,{action:"select-option",option:d,name:E});return}y&&s.blurInput()},s.removeValue=function(d){var p=s.props.isMulti,y=s.state.selectValue,b=s.getOptionValue(d),E=y.filter(function(P){return s.getOptionValue(P)!==b}),I=_f(p,E,E[0]||null);s.onChange(I,{action:"remove-value",removedValue:d}),s.focusInput()},s.clearValue=function(){var d=s.state.selectValue;s.onChange(_f(s.props.isMulti,[],null),{action:"clear",removedValues:d})},s.popValue=function(){var d=s.props.isMulti,p=s.state.selectValue,y=p[p.length-1],b=p.slice(0,p.length-1),E=_f(d,b,b[0]||null);y&&s.onChange(E,{action:"pop-value",removedValue:y})},s.getFocusedOptionId=function(d){return Kg(s.state.focusableOptionsWithIds,d)},s.getFocusableOptionsWithIds=function(){return nT(Gf(s.props,s.state.selectValue),s.getElementId("option"))},s.getValue=function(){return s.state.selectValue},s.cx=function(){for(var d=arguments.length,p=new Array(d),y=0;y<d;y++)p[y]=arguments[y];return e9.apply(void 0,[s.props.classNamePrefix].concat(p))},s.getOptionLabel=function(d){return PC(s.props,d)},s.getOptionValue=function(d){return Id(s.props,d)},s.getStyles=function(d,p){var y=s.props.unstyled,b=nL[d](p,y);b.boxSizing="border-box";var E=s.props.styles[d];return E?E(b,p):b},s.getClassNames=function(d,p){var y,b;return(y=(b=s.props.classNames)[d])===null||y===void 0?void 0:y.call(b,p)},s.getElementId=function(d){return"".concat(s.state.instancePrefix,"-").concat(d)},s.getComponents=function(){return w$(s.props)},s.buildCategorizedOptions=function(){return Gf(s.props,s.state.selectValue)},s.getCategorizedOptions=function(){return s.props.menuIsOpen?s.buildCategorizedOptions():[]},s.buildFocusableOptions=function(){return DC(s.buildCategorizedOptions())},s.getFocusableOptions=function(){return s.props.menuIsOpen?s.buildFocusableOptions():[]},s.ariaOnChange=function(d,p){s.setState({ariaSelection:Ae({value:d},p)})},s.onMenuMouseDown=function(d){d.button===0&&(d.stopPropagation(),d.preventDefault(),s.focusInput())},s.onMenuMouseMove=function(d){s.blockOptionHover=!1},s.onControlMouseDown=function(d){if(!d.defaultPrevented){var p=s.props.openMenuOnClick;s.state.isFocused?s.props.menuIsOpen?d.target.tagName!=="INPUT"&&d.target.tagName!=="TEXTAREA"&&s.onMenuClose():p&&s.openMenu("first"):(p&&(s.openAfterFocus=!0),s.focusInput()),d.target.tagName!=="INPUT"&&d.target.tagName!=="TEXTAREA"&&d.preventDefault()}},s.onDropdownIndicatorMouseDown=function(d){if(!(d&&d.type==="mousedown"&&d.button!==0)&&!s.props.isDisabled){var p=s.props,y=p.isMulti,b=p.menuIsOpen;s.focusInput(),b?(s.setState({inputIsHiddenAfterUpdate:!y}),s.onMenuClose()):s.openMenu("first"),d.preventDefault()}},s.onClearIndicatorMouseDown=function(d){d&&d.type==="mousedown"&&d.button!==0||(s.clearValue(),d.preventDefault(),s.openAfterFocus=!1,d.type==="touchend"?s.focusInput():setTimeout(function(){return s.focusInput()}))},s.onScroll=function(d){typeof s.props.closeMenuOnScroll=="boolean"?d.target instanceof HTMLElement&&fm(d.target)&&s.props.onMenuClose():typeof s.props.closeMenuOnScroll=="function"&&s.props.closeMenuOnScroll(d)&&s.props.onMenuClose()},s.onCompositionStart=function(){s.isComposing=!0},s.onCompositionEnd=function(){s.isComposing=!1},s.onTouchStart=function(d){var p=d.touches,y=p&&p.item(0);y&&(s.initialTouchX=y.clientX,s.initialTouchY=y.clientY,s.userIsDragging=!1)},s.onTouchMove=function(d){var p=d.touches,y=p&&p.item(0);if(y){var b=Math.abs(y.clientX-s.initialTouchX),E=Math.abs(y.clientY-s.initialTouchY),I=5;s.userIsDragging=b>I||E>I}},s.onTouchEnd=function(d){s.userIsDragging||(s.controlRef&&!s.controlRef.contains(d.target)&&s.menuListRef&&!s.menuListRef.contains(d.target)&&s.blurInput(),s.initialTouchX=0,s.initialTouchY=0)},s.onControlTouchEnd=function(d){s.userIsDragging||s.onControlMouseDown(d)},s.onClearIndicatorTouchEnd=function(d){s.userIsDragging||s.onClearIndicatorMouseDown(d)},s.onDropdownIndicatorTouchEnd=function(d){s.userIsDragging||s.onDropdownIndicatorMouseDown(d)},s.handleInputChange=function(d){var p=s.props.inputValue,y=d.currentTarget.value;s.setState({inputIsHiddenAfterUpdate:!1}),s.onInputChange(y,{action:"input-change",prevInputValue:p}),s.props.menuIsOpen||s.onMenuOpen()},s.onInputFocus=function(d){s.props.onFocus&&s.props.onFocus(d),s.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(s.openAfterFocus||s.props.openMenuOnFocus)&&s.openMenu("first"),s.openAfterFocus=!1},s.onInputBlur=function(d){var p=s.props.inputValue;if(s.menuListRef&&s.menuListRef.contains(document.activeElement)){s.inputRef.focus();return}s.props.onBlur&&s.props.onBlur(d),s.onInputChange("",{action:"input-blur",prevInputValue:p}),s.onMenuClose(),s.setState({focusedValue:null,isFocused:!1})},s.onOptionHover=function(d){if(!(s.blockOptionHover||s.state.focusedOption===d)){var p=s.getFocusableOptions(),y=p.indexOf(d);s.setState({focusedOption:d,focusedOptionId:y>-1?s.getFocusedOptionId(d):null})}},s.shouldHideSelectedOptions=function(){return NC(s.props)},s.onValueInputFocus=function(d){d.preventDefault(),d.stopPropagation(),s.focus()},s.onKeyDown=function(d){var p=s.props,y=p.isMulti,b=p.backspaceRemovesValue,E=p.escapeClearsValue,I=p.inputValue,P=p.isClearable,k=p.isDisabled,D=p.menuIsOpen,$=p.onKeyDown,H=p.tabSelectsValue,F=p.openMenuOnFocus,te=s.state,L=te.focusedOption,K=te.focusedValue,C=te.selectValue;if(!k&&!(typeof $=="function"&&($(d),d.defaultPrevented))){switch(s.blockOptionHover=!0,d.key){case"ArrowLeft":if(!y||I)return;s.focusValue("previous");break;case"ArrowRight":if(!y||I)return;s.focusValue("next");break;case"Delete":case"Backspace":if(I)return;if(K)s.removeValue(K);else{if(!b)return;y?s.popValue():P&&s.clearValue()}break;case"Tab":if(s.isComposing||d.shiftKey||!D||!H||!L||F&&s.isOptionSelected(L,C))return;s.selectOption(L);break;case"Enter":if(d.keyCode===229)break;if(D){if(!L||s.isComposing)return;s.selectOption(L);break}return;case"Escape":D?(s.setState({inputIsHiddenAfterUpdate:!1}),s.onInputChange("",{action:"menu-close",prevInputValue:I}),s.onMenuClose()):P&&E&&s.clearValue();break;case" ":if(I)return;if(!D){s.openMenu("first");break}if(!L)return;s.selectOption(L);break;case"ArrowUp":D?s.focusOption("up"):s.openMenu("last");break;case"ArrowDown":D?s.focusOption("down"):s.openMenu("first");break;case"PageUp":if(!D)return;s.focusOption("pageup");break;case"PageDown":if(!D)return;s.focusOption("pagedown");break;case"Home":if(!D)return;s.focusOption("first");break;case"End":if(!D)return;s.focusOption("last");break;default:return}d.preventDefault()}},s.state.instancePrefix="react-select-"+(s.props.instanceId||++fL),s.state.selectValue=zE(i.value),i.menuIsOpen&&s.state.selectValue.length){var l=s.getFocusableOptionsWithIds(),c=s.buildFocusableOptions(),m=c.indexOf(s.state.selectValue[0]);s.state.focusableOptionsWithIds=l,s.state.focusedOption=c[m],s.state.focusedOptionId=Kg(l,c[m])}return s}return D3(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&BE(this.menuListRef,this.focusedOptionRef),W$()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(s){var l=this.props,c=l.isDisabled,m=l.menuIsOpen,d=this.state.isFocused;(d&&!c&&s.isDisabled||d&&m&&!s.menuIsOpen)&&this.focusInput(),d&&c&&!s.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!d&&!c&&s.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(BE(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(s,l){this.props.onInputChange(s,l)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(s){var l=this,c=this.state,m=c.selectValue,d=c.isFocused,p=this.buildFocusableOptions(),y=s==="first"?0:p.length-1;if(!this.props.isMulti){var b=p.indexOf(m[0]);b>-1&&(y=b)}this.scrollToFocusedOptionOnUpdate=!(d&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:p[y],focusedOptionId:this.getFocusedOptionId(p[y])},function(){return l.onMenuOpen()})}},{key:"focusValue",value:function(s){var l=this.state,c=l.selectValue,m=l.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var d=c.indexOf(m);m||(d=-1);var p=c.length-1,y=-1;if(c.length){switch(s){case"previous":d===0?y=0:d===-1?y=p:y=d-1;break;case"next":d>-1&&d<p&&(y=d+1);break}this.setState({inputIsHidden:y!==-1,focusedValue:c[y]})}}}},{key:"focusOption",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",l=this.props.pageSize,c=this.state.focusedOption,m=this.getFocusableOptions();if(m.length){var d=0,p=m.indexOf(c);c||(p=-1),s==="up"?d=p>0?p-1:m.length-1:s==="down"?d=(p+1)%m.length:s==="pageup"?(d=p-l,d<0&&(d=0)):s==="pagedown"?(d=p+l,d>m.length-1&&(d=m.length-1)):s==="last"&&(d=m.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:m[d],focusedValue:null,focusedOptionId:this.getFocusedOptionId(m[d])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Yg):Ae(Ae({},Yg),this.props.theme):Yg}},{key:"getCommonProps",value:function(){var s=this.clearValue,l=this.cx,c=this.getStyles,m=this.getClassNames,d=this.getValue,p=this.selectOption,y=this.setValue,b=this.props,E=b.isMulti,I=b.isRtl,P=b.options,k=this.hasValue();return{clearValue:s,cx:l,getStyles:c,getClassNames:m,getValue:d,hasValue:k,isMulti:E,isRtl:I,options:P,selectOption:p,selectProps:b,setValue:y,theme:this.getTheme()}}},{key:"hasValue",value:function(){var s=this.state.selectValue;return s.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var s=this.props,l=s.isClearable,c=s.isMulti;return l===void 0?c:l}},{key:"isOptionDisabled",value:function(s,l){return MC(this.props,s,l)}},{key:"isOptionSelected",value:function(s,l){return kC(this.props,s,l)}},{key:"filterOption",value:function(s,l){return VC(this.props,s,l)}},{key:"formatOptionLabel",value:function(s,l){if(typeof this.props.formatOptionLabel=="function"){var c=this.props.inputValue,m=this.state.selectValue;return this.props.formatOptionLabel(s,{context:l,inputValue:c,selectValue:m})}else return this.getOptionLabel(s)}},{key:"formatGroupLabel",value:function(s){return this.props.formatGroupLabel(s)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var s=this.props,l=s.isDisabled,c=s.isSearchable,m=s.inputId,d=s.inputValue,p=s.tabIndex,y=s.form,b=s.menuIsOpen,E=s.required,I=this.getComponents(),P=I.Input,k=this.state,D=k.inputIsHidden,$=k.ariaSelection,H=this.commonProps,F=m||this.getElementId("input"),te=Ae(Ae(Ae({"aria-autocomplete":"list","aria-expanded":b,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":E,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},b&&{"aria-controls":this.getElementId("listbox")}),!c&&{"aria-readonly":!0}),this.hasValue()?$?.action==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return c?O.createElement(P,Ie({},H,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:F,innerRef:this.getInputRef,isDisabled:l,isHidden:D,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:p,form:y,type:"text",value:d},te)):O.createElement(L$,Ie({id:F,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Cd,onFocus:this.onInputFocus,disabled:l,tabIndex:p,inputMode:"none",form:y,value:""},te))}},{key:"renderPlaceholderOrValue",value:function(){var s=this,l=this.getComponents(),c=l.MultiValue,m=l.MultiValueContainer,d=l.MultiValueLabel,p=l.MultiValueRemove,y=l.SingleValue,b=l.Placeholder,E=this.commonProps,I=this.props,P=I.controlShouldRenderValue,k=I.isDisabled,D=I.isMulti,$=I.inputValue,H=I.placeholder,F=this.state,te=F.selectValue,L=F.focusedValue,K=F.isFocused;if(!this.hasValue()||!P)return $?null:O.createElement(b,Ie({},E,{key:"placeholder",isDisabled:k,isFocused:K,innerProps:{id:this.getElementId("placeholder")}}),H);if(D)return te.map(function(w,x){var M=w===L,V="".concat(s.getOptionLabel(w),"-").concat(s.getOptionValue(w));return O.createElement(c,Ie({},E,{components:{Container:m,Label:d,Remove:p},isFocused:M,isDisabled:k,key:V,index:x,removeProps:{onClick:function(){return s.removeValue(w)},onTouchEnd:function(){return s.removeValue(w)},onMouseDown:function(N){N.preventDefault()}},data:w}),s.formatOptionLabel(w,"value"))});if($)return null;var C=te[0];return O.createElement(y,Ie({},E,{data:C,isDisabled:k}),this.formatOptionLabel(C,"value"))}},{key:"renderClearIndicator",value:function(){var s=this.getComponents(),l=s.ClearIndicator,c=this.commonProps,m=this.props,d=m.isDisabled,p=m.isLoading,y=this.state.isFocused;if(!this.isClearable()||!l||d||!this.hasValue()||p)return null;var b={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return O.createElement(l,Ie({},c,{innerProps:b,isFocused:y}))}},{key:"renderLoadingIndicator",value:function(){var s=this.getComponents(),l=s.LoadingIndicator,c=this.commonProps,m=this.props,d=m.isDisabled,p=m.isLoading,y=this.state.isFocused;if(!l||!p)return null;var b={"aria-hidden":"true"};return O.createElement(l,Ie({},c,{innerProps:b,isDisabled:d,isFocused:y}))}},{key:"renderIndicatorSeparator",value:function(){var s=this.getComponents(),l=s.DropdownIndicator,c=s.IndicatorSeparator;if(!l||!c)return null;var m=this.commonProps,d=this.props.isDisabled,p=this.state.isFocused;return O.createElement(c,Ie({},m,{isDisabled:d,isFocused:p}))}},{key:"renderDropdownIndicator",value:function(){var s=this.getComponents(),l=s.DropdownIndicator;if(!l)return null;var c=this.commonProps,m=this.props.isDisabled,d=this.state.isFocused,p={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return O.createElement(l,Ie({},c,{innerProps:p,isDisabled:m,isFocused:d}))}},{key:"renderMenu",value:function(){var s=this,l=this.getComponents(),c=l.Group,m=l.GroupHeading,d=l.Menu,p=l.MenuList,y=l.MenuPortal,b=l.LoadingMessage,E=l.NoOptionsMessage,I=l.Option,P=this.commonProps,k=this.state.focusedOption,D=this.props,$=D.captureMenuScroll,H=D.inputValue,F=D.isLoading,te=D.loadingMessage,L=D.minMenuHeight,K=D.maxMenuHeight,C=D.menuIsOpen,w=D.menuPlacement,x=D.menuPosition,M=D.menuPortalTarget,V=D.menuShouldBlockScroll,j=D.menuShouldScrollIntoView,N=D.noOptionsMessage,Me=D.onMenuScrollToTop,fe=D.onMenuScrollToBottom;if(!C)return null;var X=function(ae,me){var Te=ae.type,ge=ae.data,Qe=ae.isDisabled,Ve=ae.isSelected,_e=ae.label,Ze=ae.value,gt=k===ge,vt=Qe?void 0:function(){return s.onOptionHover(ge)},dn=Qe?void 0:function(){return s.selectOption(ge)},It="".concat(s.getElementId("option"),"-").concat(me),ir={id:It,onClick:dn,onMouseMove:vt,onMouseOver:vt,tabIndex:-1,role:"option","aria-selected":s.state.isAppleDevice?void 0:Ve};return O.createElement(I,Ie({},P,{innerProps:ir,data:ge,isDisabled:Qe,isSelected:Ve,key:It,label:_e,type:Te,value:Ze,isFocused:gt,innerRef:gt?s.getFocusedOptionRef:void 0}),s.formatOptionLabel(ae.data,"menu"))},ce;if(this.hasOptions())ce=this.getCategorizedOptions().map(function(ie){if(ie.type==="group"){var ae=ie.data,me=ie.options,Te=ie.index,ge="".concat(s.getElementId("group"),"-").concat(Te),Qe="".concat(ge,"-heading");return O.createElement(c,Ie({},P,{key:ge,data:ae,options:me,Heading:m,headingProps:{id:Qe,data:ie.data},label:s.formatGroupLabel(ie.data)}),ie.options.map(function(Ve){return X(Ve,"".concat(Te,"-").concat(Ve.index))}))}else if(ie.type==="option")return X(ie,"".concat(ie.index))});else if(F){var de=te({inputValue:H});if(de===null)return null;ce=O.createElement(b,P,de)}else{var be=N({inputValue:H});if(be===null)return null;ce=O.createElement(E,P,be)}var z={minMenuHeight:L,maxMenuHeight:K,menuPlacement:w,menuPosition:x,menuShouldScrollIntoView:j},J=O.createElement(g9,Ie({},P,z),function(ie){var ae=ie.ref,me=ie.placerProps,Te=me.placement,ge=me.maxHeight;return O.createElement(d,Ie({},P,z,{innerRef:ae,innerProps:{onMouseDown:s.onMenuMouseDown,onMouseMove:s.onMenuMouseMove},isLoading:F,placement:Te}),O.createElement(H$,{captureEnabled:$,onTopArrive:Me,onBottomArrive:fe,lockEnabled:V},function(Qe){return O.createElement(p,Ie({},P,{innerRef:function(_e){s.getMenuListRef(_e),Qe(_e)},innerProps:{role:"listbox","aria-multiselectable":P.isMulti,id:s.getElementId("listbox")},isLoading:F,maxHeight:ge,focusedOption:k}),ce)}))});return M||x==="fixed"?O.createElement(y,Ie({},P,{appendTo:M,controlElement:this.controlRef,menuPlacement:w,menuPosition:x}),J):J}},{key:"renderFormField",value:function(){var s=this,l=this.props,c=l.delimiter,m=l.isDisabled,d=l.isMulti,p=l.name,y=l.required,b=this.state.selectValue;if(y&&!this.hasValue()&&!m)return O.createElement(Q$,{name:p,onFocus:this.onValueInputFocus});if(!(!p||m))if(d)if(c){var E=b.map(function(k){return s.getOptionValue(k)}).join(c);return O.createElement("input",{name:p,type:"hidden",value:E})}else{var I=b.length>0?b.map(function(k,D){return O.createElement("input",{key:"i-".concat(D),name:p,type:"hidden",value:s.getOptionValue(k)})}):O.createElement("input",{name:p,type:"hidden",value:""});return O.createElement("div",null,I)}else{var P=b[0]?this.getOptionValue(b[0]):"";return O.createElement("input",{name:p,type:"hidden",value:P})}}},{key:"renderLiveRegion",value:function(){var s=this.commonProps,l=this.state,c=l.ariaSelection,m=l.focusedOption,d=l.focusedValue,p=l.isFocused,y=l.selectValue,b=this.getFocusableOptions();return O.createElement(P$,Ie({},s,{id:this.getElementId("live-region"),ariaSelection:c,focusedOption:m,focusedValue:d,isFocused:p,selectValue:y,focusableOptions:b,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var s=this.getComponents(),l=s.Control,c=s.IndicatorsContainer,m=s.SelectContainer,d=s.ValueContainer,p=this.props,y=p.className,b=p.id,E=p.isDisabled,I=p.menuIsOpen,P=this.state.isFocused,k=this.commonProps=this.getCommonProps();return O.createElement(m,Ie({},k,{className:y,innerProps:{id:b,onKeyDown:this.onKeyDown},isDisabled:E,isFocused:P}),this.renderLiveRegion(),O.createElement(l,Ie({},k,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:E,isFocused:P,menuIsOpen:I}),O.createElement(d,Ie({},k,{isDisabled:E}),this.renderPlaceholderOrValue(),this.renderInput()),O.createElement(c,Ie({},k,{isDisabled:E}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(s,l){var c=l.prevProps,m=l.clearFocusValueOnUpdate,d=l.inputIsHiddenAfterUpdate,p=l.ariaSelection,y=l.isFocused,b=l.prevWasFocused,E=l.instancePrefix,I=s.options,P=s.value,k=s.menuIsOpen,D=s.inputValue,$=s.isMulti,H=zE(P),F={};if(c&&(P!==c.value||I!==c.options||k!==c.menuIsOpen||D!==c.inputValue)){var te=k?uL(s,H):[],L=k?nT(Gf(s,H),"".concat(E,"-option")):[],K=m?cL(l,H):null,C=hL(l,te),w=Kg(L,C);F={selectValue:H,focusedOption:C,focusedOptionId:w,focusableOptionsWithIds:L,focusedValue:K,clearFocusValueOnUpdate:!1}}var x=d!=null&&s!==c?{inputIsHidden:d,inputIsHiddenAfterUpdate:void 0}:{},M=p,V=y&&b;return y&&!V&&(M={value:_f($,H,H[0]||null),options:H,action:"initial-input-focus"},V=!b),p?.action==="initial-input-focus"&&(M=null),Ae(Ae(Ae({},F),x),{},{prevProps:s,ariaSelection:M,prevWasFocused:V})}}]),n}(O.Component);$C.defaultProps=lL;var dL=O.forwardRef(function(t,e){var n=I3(t);return O.createElement($C,Ie({ref:e},n))}),qy=dL;const iT=ne.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.sm};
`,aT=ne.label`
  flex: 1;
  font-size: ${t=>t.theme.typography.fontSize.sm};
  color: ${t=>t.theme.colors.textPrimary};
`,sT=ne(nr)`
  width: 120px;
`,oT=ne.span`
  width: 50px;
  font-size: ${t=>t.theme.typography.fontSize.sm};
  color: ${t=>t.theme.colors.textSecondary};
`,mL=ne.div`
  padding: ${t=>t.theme.spacing.md};
  border: 1px solid ${t=>t.theme.colors.border};
  border-radius: ${t=>t.theme.spacing.xs};
  background-color: ${t=>t.theme.colors.surfaceVariant};
`,pL=ne.strong`
  font-size: ${t=>t.theme.typography.fontSize.sm};
  color: ${t=>t.theme.colors.textPrimary};
`,gL=ne.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing.sm};
  margin-top: ${t=>t.theme.spacing.sm};
  margin-left: ${t=>t.theme.spacing.md};
`,yL=ne.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing.sm};
  margin-top: ${t=>t.theme.spacing.sm};
`,vL=ne.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing.md};
  margin-top: ${t=>t.theme.spacing.sm};
`;function bL({initialValues:t,onSubmit:e,onCancel:n,getIngredientOptionsForSelect:i,getBundleOptionsForSelect:s,ingredients:l,bundles:c,selectedIngredientIds:m,setSelectedIngredientIds:d,selectedBundleIds:p,setSelectedBundleIds:y,ingredientQuantities:b,setIngredientQuantities:E,bundleIngredientQuantities:I,setBundleIngredientQuantities:P,isEditing:k=!1,hideActions:D=!1}){const[$,H]=O.useState(""),[F,te]=O.useState("");O.useEffect(()=>{t&&(H(t.name||""),te(t.frame.toString()||""))},[t]);function L(x){const M=x?x.map(j=>j.value):[];d(M);const V=new Map(b);M.forEach(j=>{V.has(j)||V.set(j,0)}),Array.from(V.keys()).forEach(j=>{M.includes(j)||V.delete(j)}),E(V)}function K(x){const M=x?x.map(j=>j.value):[];y(M);const V=new Map(I);M.forEach(j=>{if(!V.has(j)){const N=c.find(Me=>Me.id===j);if(N?.hydratedIngredients){const Me=new Map;N.hydratedIngredients.forEach(fe=>{Me.set(fe.id,0)}),V.set(j,Me)}}}),Array.from(V.keys()).forEach(j=>{M.includes(j)||V.delete(j)}),P(V)}function C(x,M){const V=new Map(b);V.set(x,M),E(V)}function w(x,M,V){const j=new Map(I),N=j.get(x)||new Map;N.set(M,V),j.set(x,N),P(j)}return T.jsxs("form",{id:"cake-form",children:[T.jsxs(Ft,{children:[T.jsx(Zt,{htmlFor:"cake-name",required:!0,children:"Nome"}),T.jsx(nr,{id:"cake-name",name:"cake-name",type:"text",value:$,onChange:x=>H(x.target.value),fullWidth:!0})]}),T.jsxs(Ft,{children:[T.jsx(Zt,{htmlFor:"cake-frame",required:!0,children:"Tamanho"}),T.jsxs(sm,{id:"cake-frame",name:"cake-frame",value:F,onChange:x=>te(x.target.value),children:[T.jsx("option",{value:"",disabled:!0,children:"Selecione"}),T.jsx("option",{value:cn.frame15,children:"15cm"}),T.jsx("option",{value:cn.frame25,children:"25cm"}),T.jsx("option",{value:cn.frame35,children:"35cm"})]})]}),T.jsxs(Ft,{children:[T.jsx(Zt,{htmlFor:"cake-ingredients",children:"Ingredientes Diretos"}),T.jsx(qy,{options:i(),value:i().filter(x=>m.includes(x.value)),onChange:L,isMulti:!0,id:"cake-ingredients",placeholder:"Selecione ingredientes",menuPortalTarget:document.body,styles:{menuPortal:x=>({...x,zIndex:9999})}})]}),m.length>0&&T.jsxs(Ft,{children:[T.jsx(Zt,{children:"Quantidades (g, ml, ou un)"}),T.jsx(yL,{children:m.map(x=>{const M=l.find(V=>V.id===x);return T.jsxs(iT,{children:[T.jsxs(aT,{children:[M?.name,":"]}),T.jsx(sT,{type:"number",min:"0",step:"0.01",value:b.get(x)||0,onChange:V=>C(x,parseFloat(V.target.value)||0)}),T.jsx(oT,{children:we.convertUnitForDisplay(M?.unit||"")})]},x)})})]}),T.jsxs(Ft,{children:[T.jsx(Zt,{htmlFor:"cake-bundles",children:"Conjuntos"}),T.jsx(qy,{options:s(),value:s().filter(x=>p.includes(x.value)),onChange:K,isMulti:!0,id:"cake-bundles",placeholder:"Selecione conjuntos",menuPortalTarget:document.body,styles:{menuPortal:x=>({...x,zIndex:9999})}})]}),p.length>0&&T.jsxs(Ft,{children:[T.jsx(Zt,{children:"Quantidades dos Conjuntos"}),T.jsx(vL,{children:p.map(x=>{const M=c.find(V=>V.id===x);return M?.hydratedIngredients?T.jsxs(mL,{children:[T.jsxs(pL,{children:[M.name,":"]}),T.jsx(gL,{children:M.hydratedIngredients.map(V=>T.jsxs(iT,{children:[T.jsxs(aT,{children:[V.name,":"]}),T.jsx(sT,{type:"number",min:"0",step:"0.01",value:I.get(x)?.get(V.id)||0,onChange:j=>w(x,V.id,parseFloat(j.target.value)||0)}),T.jsx(oT,{children:we.convertUnitForDisplay(V.unit)})]},V.id))})]},x):null})})]}),!D&&T.jsxs(ta,{children:[T.jsx(pt,{type:"button",variant:"secondary",onClick:n,children:"Cancelar"}),T.jsx(pt,{type:"button",variant:"primary",onClick:e,children:k?"Salvar Alterações":"Adicionar Bolo"})]})]})}function dm(t){const[e,n]=O.useState(t),[i,s]=O.useState(null),[l,c]=O.useState("ascending");O.useEffect(()=>{const p=y=>{if(typeof y=="string"){const b=y.replace(",","."),E=parseFloat(b);return isNaN(E)?y:E}return y};if(i){const y=[...t].sort((b,E)=>{const I=p(b[i]),P=p(E[i]);return I<P?l==="ascending"?-1:1:I>P?l==="ascending"?1:-1:0});n(y)}else n(t)},[t,i,l]);function m(p){let y="ascending";i===p&&(y=l==="ascending"?"descending":"ascending"),s(p),c(y)}function d(p){n(p)}return{data:e,sortColumn:i,sortDirection:l,handleSort:m,setNewData:d}}function c0(t,e={}){const{initialPage:n=1,initialPageSize:i=10}=e,[s,l]=O.useState(n),[c,m]=O.useState(i),d=t.length,p=Math.ceil(d/c);O.useMemo(()=>{s>p&&p>0&&l(1)},[p,s]);const y=O.useMemo(()=>{const k=(s-1)*c,D=k+c;return t.slice(k,D)},[t,s,c]);return{currentPage:s,pageSize:c,totalPages:p,totalItems:d,paginatedData:y,goToPage:k=>{const D=Math.max(1,Math.min(k,p));l(D)},nextPage:()=>{s<p&&l(k=>k+1)},previousPage:()=>{s>1&&l(k=>k-1)},setPageSize:k=>{m(k),l(1)},canGoNext:s<p,canGoPrevious:s>1}}function _L(t){return Mn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 268 144 144 144-144M256 392V100"},child:[]}]})(t)}function SL(t){return Mn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 244 144-144 144 144M256 120v292"},child:[]}]})(t)}function EL(t){return Mn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M416 128 192 384l-96-96"},child:[]}]})(t)}function TL(t){return Mn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M328 112 184 256l144 144"},child:[]}]})(t)}function wL(t){return Mn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m184 112 144 144-144 144"},child:[]}]})(t)}function xL(t){return Mn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368 144 144m224 0L144 368"},child:[]}]})(t)}function AL(t){return Mn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M32 144h448M112 256h288M208 368h96"},child:[]}]})(t)}function CL(t){return Mn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M338.29 338.29 448 448"},child:[]}]})(t)}const RL=ne.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 500px;

  ${t=>t.theme.mediaQueries.maxTablet} {
    max-width: 100%;
  }
`,IL=ne.div`
  position: absolute;
  left: ${t=>t.theme.spacing.md};
  font-size: ${t=>t.theme.typography.fontSize.xl};
  color: ${t=>t.theme.colors.textTertiary};
  pointer-events: none;
  display: flex;
  align-items: center;
`,OL=ne.input`
  width: 100%;
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  padding-left: 48px;
  padding-right: 32px;
  font-size: ${t=>t.theme.typography.fontSize.base};
  font-family: ${t=>t.theme.typography.fontFamily.sans};
  border: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.border};
  border-radius: ${t=>t.theme.spacing.sm};
  background: ${t=>t.theme.colors.surface};
  color: ${t=>t.theme.colors.textPrimary};
  outline: none;
  transition: ${t=>t.theme.animations.transitions.default};

  &:focus {
    border-color: ${t=>t.theme.colors.primary};
    box-shadow: 0 0 0 3px ${t=>t.theme.colors.focus};
  }

  &::placeholder {
    color: ${t=>t.theme.colors.textTertiary};
  }
`,DL=ne.button`
  position: absolute;
  right: ${t=>t.theme.spacing.xs};
  background: none;
  border: none;
  padding: ${t=>t.theme.spacing.xs};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${t=>t.theme.colors.textTertiary};
  font-size: ${t=>t.theme.typography.fontSize.xl};
  border-radius: 50%;
  transition: ${t=>t.theme.animations.transitions.default};

  &:hover {
    background-color: ${t=>t.theme.colors.hover};
    color: ${t=>t.theme.colors.textPrimary};
  }

  &:active {
    background-color: ${t=>t.theme.colors.pressed};
  }

  &:focus-visible {
    outline: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.primary};
    outline-offset: ${t=>t.theme.spacing.xxs};
  }
`;function h0({value:t,onChange:e,placeholder:n="Buscar..."}){return T.jsxs(RL,{children:[T.jsx(IL,{children:T.jsx(CL,{})}),T.jsx(OL,{type:"text",value:t,onChange:i=>e(i.target.value),placeholder:"Buscar",title:n}),t&&T.jsx(DL,{type:"button",onClick:()=>e(""),"aria-label":"Limpar busca",children:T.jsx(xL,{})})]})}function f0(t,e){const[n,i]=O.useState(""),s=O.useMemo(()=>{if(!n.trim())return t;const l=n.toLowerCase();return t.filter(c=>e.some(m=>{const d=c[m];return d==null?!1:String(d).toLowerCase().includes(l)}))},[t,n,e]);return{searchTerm:n,setSearchTerm:i,filteredData:s}}const PL=ne.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  animation: ${av} 0.15s ease-out;
`,ML=ne.div`
  position: fixed;
  top: ${t=>t.$top}px;
  left: ${t=>t.$left}px;
  background: ${t=>t.theme.colors.surface};
  border-radius: ${t=>t.theme.spacing.sm};
  box-shadow: ${t=>t.theme.shadows.xl};
  z-index: 1001;
  min-width: 200px;
  animation: ${av} ${t=>t.theme.animations.duration.fast} ${t=>t.theme.animations.easing.easeOut};
  transform-origin: top left;
  transition: transform ${t=>t.theme.animations.duration.fast} ${t=>t.theme.animations.easing.easeOut},
              opacity ${t=>t.theme.animations.duration.fast} ${t=>t.theme.animations.easing.easeOut};

  &:hover {
    transform: translateY(-2px);
  }

  /* Mobile: center on screen */
  ${t=>t.theme.mediaQueries.maxMobile} {
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 280px;
  }
`,kL=ne.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${t=>t.theme.spacing.md};
  border-bottom: 1px solid ${t=>t.theme.colors.divider};

  ${t=>t.theme.mediaQueries.maxMobile} {
    padding: ${t=>t.theme.spacing.sm};
  }
`,VL=ne.h3`
  margin: 0;
  font-size: ${t=>t.theme.typography.fontSize.base};
  font-weight: ${t=>t.theme.typography.fontWeight.semibold};
  color: ${t=>t.theme.colors.textPrimary};
`,NL=ne.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: ${t=>t.theme.colors.textSecondary};
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${t=>t.theme.spacing.xs};
  transition: ${t=>t.theme.animations.transitions.default};

  &:hover {
    background-color: ${t=>t.theme.colors.hover};
    color: ${t=>t.theme.colors.textPrimary};
  }

  &:focus-visible {
    outline: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.primary};
    outline-offset: ${t=>t.theme.spacing.xxs};
  }
`,$L=ne.div`
  padding: ${t=>t.theme.spacing.md};

  ${t=>t.theme.mediaQueries.maxMobile} {
    padding: ${t=>t.theme.spacing.sm};
  }
`;function LL({isOpen:t,onClose:e,title:n,children:i,anchorEl:s}){const[l,c]=O.useState({top:0,left:0}),m=O.useRef(null);return O.useEffect(()=>{if(t&&s&&m.current){const d=s.getBoundingClientRect(),p=m.current.getBoundingClientRect();let y=d.top+d.height/2-p.height/2,b=d.right+24;b+p.width>window.innerWidth-8&&(b=d.left-p.width-8),b<8&&(b=d.right+8),y+p.height>window.innerHeight-8&&(y=window.innerHeight-p.height-8),y<8&&(y=8),c({top:y,left:b})}},[t,s]),O.useEffect(()=>{const d=p=>{p.key==="Escape"&&t&&e()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[t,e]),t?VT.createPortal(T.jsx(PL,{onClick:e,children:T.jsxs(ML,{ref:m,$top:l.top,$left:l.left,onClick:d=>d.stopPropagation(),children:[n&&T.jsxs(kL,{children:[T.jsx(VL,{children:n}),T.jsx(NL,{onClick:e,"aria-label":"Fechar",children:"×"})]}),T.jsx($L,{children:i})]})}),document.body):null}const jL=ne.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing.xs};
`,UL=ne.p`
  margin: 0;
  font-size: ${t=>t.theme.typography.fontSize.base};
  color: ${t=>t.theme.colors.textSecondary};
  text-align: center;
`;function zL({isOpen:t,onClose:e,onEdit:n,onDelete:i,itemName:s,anchorEl:l}){function c(){n(),e()}function m(){i(),e()}return T.jsx(LL,{isOpen:t,onClose:e,title:"Ações",anchorEl:l,children:T.jsxs(jL,{children:[T.jsxs(UL,{children:["O que você deseja fazer",s?` com "${s}"`:"","?"]}),T.jsxs(ta,{align:"center",children:[T.jsxs(pt,{onClick:c,variant:"primary",children:[T.jsx(PN,{size:20}),"Editar"]}),T.jsxs(pt,{onClick:m,variant:"danger",children:[T.jsx(MN,{size:20}),"Deletar"]})]})]})})}const BL=ne.td`
  text-align: center;
  vertical-align: middle;
`,FL=ne.button`
  background: none;
  border: none;
  padding: ${t=>t.theme.spacing.xs};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${t=>t.theme.colors.textSecondary};
  border-radius: 50%;
  transition: ${t=>t.theme.animations.transitions.default};

  &:hover {
    background-color: ${t=>t.theme.colors.hover};
    color: ${t=>t.theme.colors.textPrimary};
  }

  &:active {
    background-color: ${t=>t.theme.colors.pressed};
  }

  &:focus-visible {
    outline: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.primary};
    outline-offset: ${t=>t.theme.spacing.xxs};
  }
`;function d0({handleEdit:t,handleDelete:e,itemName:n}){const[i,s]=O.useState(!1),l=O.useRef(null);function c(){s(!0)}function m(){s(!1)}return T.jsxs(T.Fragment,{children:[T.jsx(BL,{children:T.jsx(FL,{ref:l,onClick:c,children:T.jsx(VN,{size:24})})}),T.jsx(zL,{isOpen:i,onClose:m,onEdit:t||(()=>{}),onDelete:e||(()=>{}),itemName:n,anchorEl:l.current})]})}function HL(t,e){O.useEffect(()=>{const n=i=>{!t.current||t.current.contains(i.target)||e(i)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[t,e])}const LC=ne.details`
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  vertical-align: top;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`,qL=ne.summary`
  cursor: pointer;
  font-weight: 500;
  user-select: none;
  padding: 0.25rem 0.5rem;
  list-style-position: outside;
  display: inline-block;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${t=>t.theme.colors.hoverOverlay};
  }

  ${LC}[open] & {
    background-color: ${t=>t.theme.colors.activeOverlay};
  }
`,GL=ne.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  min-width: 200px;
  margin: 0.25rem 0 0 0;
  padding: 0.75rem 1rem 0.75rem 2rem;
  font-size: 0.9em;
  color: ${t=>t.theme.colors.textPrimary};
  list-style: disc;
  background-color: ${t=>t.theme.colors.background};
  border: 1px solid ${t=>t.theme.colors.border};
  border-radius: 6px;
  box-shadow: ${t=>t.theme.shadows.lg};
`,jC=ne.li`
  margin: 0.4rem 0;
  padding-left: 0.25rem;
  color: ${t=>t.theme.colors.textPrimary};
`,QL=ne(jC)`
  font-style: italic;
  color: ${t=>t.theme.colors.textTertiary};
`;function YL({bundleName:t,ingredients:e,convertUnitForDisplay:n}){const i=O.useRef(null);return HL(i,()=>{i.current?.open&&(i.current.open=!1)}),T.jsxs(LC,{ref:i,children:[T.jsx(qL,{children:t}),T.jsx(GL,{children:e&&e.length>0?e.map(s=>T.jsxs(jC,{children:[s.ingredient.name,": ",s.quantity,n(s.ingredient.unit)]},s.ingredientId)):T.jsx(QL,{children:"Quantidades não definidas para este bolo"})})]})}const UC=ne.div`
  min-height: ${t=>t.$minHeight};
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
  padding: ${t=>t.theme.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: ${t=>t.theme.spacing.sm};
  background: ${t=>t.theme.colors.surface};
  box-shadow: ${t=>t.theme.shadows.sm};
  transition: opacity ${t=>t.theme.animations.transitions.default};
  ${t=>t.$loading&&Et`
    opacity: 0.7;
    pointer-events: none;
  `}

  & > table {
    width: auto;
    border-collapse: collapse;
    table-layout: auto;

    th {
      padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
      color: ${t=>t.theme.colors.textPrimary};
      font-size: ${t=>t.theme.typography.fontSize.sm};
      font-weight: ${t=>t.theme.typography.fontWeight.medium};
      white-space: nowrap;
      word-wrap: break-word;
      height: auto;
      cursor: pointer;

      &:hover {
        background: ${t=>t.theme.colors.hover};
      }
    }
  }

  ${t=>t.theme.mediaQueries.maxMobile} {
    padding: ${t=>t.theme.spacing.sm};
  }
`,Od=ne.tr`
  user-select: none;
  border-bottom: 1px solid ${t=>t.theme.colors.border};
  background: ${t=>t.theme.colors.surface};
  transition: background-color ${t=>t.theme.animations.transitions.default};

  &:hover {
    background: ${t=>t.theme.colors.hover};
  }

  &:last-child {
    border-bottom: none;
  }

  /* Zebra striping */
  &:nth-child(even) {
    background: ${t=>t.theme.colors.surfaceVariant};

    &:hover {
      background: ${t=>t.theme.colors.hover};
    }
  }
`;ne.td`
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  color: ${t=>t.theme.colors.textPrimary};
  font-size: ${t=>t.theme.typography.fontSize.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${t=>t.theme.mediaQueries.maxMobile} {
    padding: ${t=>t.theme.spacing.xs} ${t=>t.theme.spacing.sm};
  }
`;const KL=ne.details`
  display: inline-block;
  margin-right: ${t=>t.theme.spacing.xs};
  margin-bottom: ${t=>t.theme.spacing.xxs};
  vertical-align: top;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`;ne.summary`
  cursor: pointer;
  font-weight: ${t=>t.theme.typography.fontWeight.medium};
  user-select: none;
  padding: ${t=>t.theme.spacing.xxs} ${t=>t.theme.spacing.xs};
  list-style-position: outside;
  display: inline-block;
  border-radius: ${t=>t.theme.spacing.xxs};
  transition: background-color ${t=>t.theme.animations.transitions.default};

  &:hover {
    background-color: ${t=>t.theme.colors.hover};
  }

  ${KL}[open] & {
    background-color: ${t=>t.theme.colors.pressed};
  }
`;ne.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  min-width: 200px;
  margin: ${t=>t.theme.spacing.xs} 0 0 0;
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md} 
          ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.xl};
  font-size: ${t=>t.theme.typography.fontSize.sm};
  color: ${t=>t.theme.colors.textPrimary};
  list-style: disc;
  background-color: ${t=>t.theme.colors.surface};
  border: 1px solid ${t=>t.theme.colors.border};
  border-radius: ${t=>t.theme.spacing.xs};
  box-shadow: ${t=>t.theme.shadows.lg};
`;ne.li`
  margin: ${t=>t.theme.spacing.xs} 0;
  padding-left: ${t=>t.theme.spacing.xs};
  color: ${t=>t.theme.colors.textPrimary};
`;const XL=ne.th`
  position: sticky;
  top: 0;
  z-index: 2;
  padding: ${t=>t.theme.spacing.sm} ${t=>t.theme.spacing.md};
  font-weight: ${t=>t.theme.typography.fontWeight.medium};
  color: ${t=>t.theme.colors.textPrimary};
  background-color: ${t=>t.theme.colors.surfaceVariant};
  border-bottom: 1px solid ${t=>t.theme.colors.border};
  transition: background-color ${t=>t.theme.animations.transitions.default};
  user-select: none;
  white-space: nowrap;
  ${t=>t.$width&&`width: ${t.$width};`}

  /* Sortable styles */
  ${t=>t.$isSortable&&Et`
    cursor: pointer;

    &:hover {
      background-color: ${e=>e.theme.colors.hover};
    }

    &:active {
      background-color: ${e=>e.theme.colors.pressed};
    }
  `}

  /* Screen reader only text */
  &[aria-sort]::after {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
    content: "(${t=>t["aria-sort"]==="ascending"?"ordem crescente":"ordem decrescente"})";
  }
`,WL=ne.span`
  display: inline-flex;
  align-items: center;
  margin-left: ${t=>t.theme.spacing.xs};
  opacity: ${t=>t.$active?1:.3};
  color: ${t=>t.$active?t.theme.colors.primary:"inherit"};
  transition: opacity ${t=>t.theme.animations.transitions.fast},
              color ${t=>t.theme.animations.transitions.fast};

  svg {
    width: 16px;
    height: 16px;
  }
`;function Gy({column:t,sortColumn:e,sortDirection:n,onSort:i,width:s}){const l=e===t.key,c=t.sortable!==!1;function m(){c&&i(t.key)}return T.jsxs(XL,{onClick:m,$isSortable:c,$width:s,role:c?"columnheader button":"columnheader","aria-sort":l?n:void 0,children:[T.jsx("span",{children:t.label}),c&&l&&T.jsx(WL,{$active:l,children:l&&n==="ascending"?T.jsx(SL,{size:16}):T.jsx(_L,{size:16})})]})}const ZL=ne.div`
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${t=>t.theme.spacing.md};
  padding: ${t=>t.theme.spacing.md};
  background: ${t=>t.theme.colors.surface};
  border-top: 1px solid ${t=>t.theme.colors.divider};
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;

  ${t=>t.theme.mediaQueries.maxMobile} {
    flex-direction: column;
    gap: ${t=>t.theme.spacing.sm};
  }
`,JL=ne.div`
  font-size: ${t=>t.theme.typography.fontSize.sm};
  color: ${t=>t.theme.colors.textSecondary};

  ${t=>t.theme.mediaQueries.maxMobile} {
    font-size: ${t=>t.theme.typography.fontSize.xs};
  }
`,ej=ne.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.xs};
`,Xg=ne.button`
  min-width: 36px;
  height: 36px;
  padding: ${t=>t.theme.spacing.xs} ${t=>t.theme.spacing.sm};
  border: 1px solid ${t=>t.$active?t.theme.colors.primary:t.theme.colors.border};
  background: ${t=>t.$active?t.theme.colors.primary:t.theme.colors.surface};
  color: ${t=>t.$active?t.theme.colors.background:t.theme.colors.textPrimary};
  font-size: ${t=>t.theme.typography.fontSize.sm};
  font-weight: ${t=>t.$active?t.theme.typography.fontWeight.semibold:t.theme.typography.fontWeight.normal};
  border-radius: ${t=>t.theme.spacing.xs};
  cursor: pointer;
  transition: ${t=>t.theme.animations.transitions.default};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: ${t=>t.$active?t.theme.colors.primary:t.theme.colors.hover};
    border-color: ${t=>t.theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.primary};
    outline-offset: ${t=>t.theme.spacing.xxs};
  }

  ${t=>t.theme.mediaQueries.maxMobile} {
    min-width: 32px;
    height: 32px;
    padding: ${t=>t.theme.spacing.xxs} ${t=>t.theme.spacing.xs};
    font-size: ${t=>t.theme.typography.fontSize.xs};
  }
`,tj=ne.span`
  padding: 0 ${t=>t.theme.spacing.xs};
  color: ${t=>t.theme.colors.textSecondary};
  user-select: none;
`,nj=ne.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.sm};
  font-size: ${t=>t.theme.typography.fontSize.sm};
  color: ${t=>t.theme.colors.textSecondary};

  ${t=>t.theme.mediaQueries.maxMobile} {
    font-size: ${t=>t.theme.typography.fontSize.xs};
  }
`,rj=ne.select`
  padding: ${t=>t.theme.spacing.xs} ${t=>t.theme.spacing.sm};
  border: 1px solid ${t=>t.theme.colors.border};
  background: ${t=>t.theme.colors.surface};
  color: ${t=>t.theme.colors.textPrimary};
  font-size: ${t=>t.theme.typography.fontSize.sm};
  border-radius: ${t=>t.theme.spacing.xs};
  cursor: pointer;
  transition: ${t=>t.theme.animations.transitions.default};

  &:hover {
    border-color: ${t=>t.theme.colors.primary};
  }

  &:focus-visible {
    outline: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.primary};
    outline-offset: ${t=>t.theme.spacing.xxs};
  }

  ${t=>t.theme.mediaQueries.maxMobile} {
    font-size: ${t=>t.theme.typography.fontSize.xs};
    padding: ${t=>t.theme.spacing.xxs} ${t=>t.theme.spacing.xs};
  }
`,ij=[10,25,50,100];function aj({currentPage:t,totalPages:e,totalItems:n,pageSize:i,onPageChange:s,onPageSizeChange:l,canGoPrevious:c,canGoNext:m,pageSizeOptions:d=ij}){const p=()=>{const E=[];if(e<=5)for(let P=1;P<=e;P++)E.push(P);else{E.push(1);let P=Math.max(2,t-1),k=Math.min(e-1,t+1);t<=3&&(k=4),t>=e-2&&(P=e-3),P>2&&E.push("ellipsis");for(let D=P;D<=k;D++)E.push(D);k<e-1&&E.push("ellipsis"),E.push(e)}return E},y=(t-1)*i+1,b=Math.min(t*i,n);return T.jsxs(ZL,{children:[T.jsxs(JL,{children:["Mostrando ",y," a ",b," de ",n," ",n===1?"item":"itens"]}),T.jsxs(ej,{children:[T.jsx(Xg,{onClick:()=>s(t-1),disabled:!c,"aria-label":"Página anterior",children:T.jsx(TL,{size:18})}),p().map((E,I)=>E==="ellipsis"?T.jsx(tj,{children:"..."},`ellipsis-${I}`):T.jsx(Xg,{$active:E===t,onClick:()=>s(E),"aria-label":`Página ${E}`,"aria-current":E===t?"page":void 0,children:E},E)),T.jsx(Xg,{onClick:()=>s(t+1),disabled:!m,"aria-label":"Próxima página",children:T.jsx(wL,{size:18})})]}),T.jsxs(nj,{children:[T.jsx("label",{htmlFor:"page-size-select",children:"Itens por página:"}),T.jsx(rj,{id:"page-size-select",value:i,onChange:E=>l(Number(E.target.value)),children:d.map(E=>T.jsx("option",{value:E,children:E},E))})]})]})}function m0({data:t,columns:e,loading:n=!1,emptyMessage:i="Nenhum item encontrado.",sortColumn:s,sortDirection:l,onSort:c,renderActions:m,getRowKey:d=y=>y.id||String(Math.random()),pagination:p}){return n?T.jsx(Zv,{}):t.length===0?T.jsx("div",{style:{padding:"2rem",textAlign:"center",color:"var(--text-secondary)",background:"var(--surface)",borderRadius:"8px",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"},children:i}):T.jsxs(T.Fragment,{children:[T.jsx(UC,{children:T.jsxs("table",{children:[T.jsx("thead",{children:T.jsxs(Od,{children:[e.map((y,b)=>T.jsx(Gy,{column:{key:y.key,label:y.label,sortable:y.sortable??!0},sortColumn:s,sortDirection:l||"ascending",onSort:E=>c&&c(E)},String(y.key||`action-${b}`))),m&&T.jsx(Gy,{column:{label:"Ações",sortable:!1},sortColumn:s,sortDirection:l||"ascending",onSort:()=>{}})]})}),T.jsx("tbody",{children:t.map(y=>T.jsxs(Od,{children:[e.map((b,E)=>T.jsx("td",{children:b.render?b.render(y):String(y[b.key]??"")},String(b.key||`cell-${E}`))),m&&m(y)]},d(y)))})]})}),p&&T.jsx(aj,{currentPage:p.currentPage,totalPages:p.totalPages,totalItems:p.totalItems,pageSize:p.pageSize,onPageChange:p.onPageChange,onPageSizeChange:p.onPageSizeChange,canGoPrevious:p.canGoPrevious,canGoNext:p.canGoNext,pageSizeOptions:p.pageSizeOptions})]})}const mm=ne.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing.xl};
  padding: ${t=>t.theme.spacing.lg} 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
`,pm=ne.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing.md};
`,gm=ne.h1`
  margin: 0;
  font-size: ${t=>t.theme.typography.fontSize["2xl"]};
  font-weight: ${t=>t.theme.typography.fontWeight.bold};
  color: ${t=>t.theme.colors.textPrimary};
`,ym=ne.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: ${t=>t.theme.spacing.xl};
  width: 100%;
  min-width: 0;

  & > *:first-child {
    grid-column: 3;
    min-width: 0;
  }

  & > *:nth-child(2) {
    grid-column: 4;
  }

  ${t=>t.theme.mediaQueries.maxMobile} {
    grid-template-columns: 1fr;
    
    & > *:first-child,
    & > *:nth-child(2) {
      grid-column: 1;
      width: 100%;
    }
  }
`;ne.div`
  display: flex;
  gap: ${t=>t.theme.spacing.sm};
  align-items: center;

  ${t=>t.theme.mediaQueries.maxMobile} {
    width: 100%;
  }
`;const p0=ne.div`
  text-align: center;
  padding: ${t=>t.theme.spacing["2xl"]};
  color: ${t=>t.theme.colors.textSecondary};
  font-size: ${t=>t.theme.typography.fontSize.base};
`;function sj(){const[t,e]=O.useState([]),[n,i]=O.useState([]),[s,l]=O.useState([]),[c,m]=O.useState([]),[d,p]=O.useState([]),[y,b]=O.useState(new Map),[E,I]=O.useState(new Map),[P,k]=O.useState(null),[D,$]=O.useState(null),{searchTerm:H,setSearchTerm:F,filteredData:te}=f0(t,["name","frame"]),{data:L,sortColumn:K,sortDirection:C,handleSort:w}=dm(te),{paginatedData:x,currentPage:M,pageSize:V,totalPages:j,totalItems:N,goToPage:Me,setPageSize:fe,canGoNext:X,canGoPrevious:ce}=c0(L,{initialPageSize:10}),de=Wa(),be=Wa(),z=Mc();O.useEffect(()=>{Promise.all([At(Ue.cakes),At(Ue.ingredients),At(Ue.bundles)]).then(async([_e,Ze,gt])=>{e(_e),l(Ze);const vt=await we.pullBundlesWithIngredients(gt);i(vt)})},[]),O.useEffect(()=>{(async()=>e(await we.pullCakesWithIngredients(t)))()},[n]);function J(){$(null),m([]),p([]),b(new Map),I(new Map),be.open()}function ie(_e){$(_e);const Ze=_e.ingredients?.map(It=>It.ingredientId)||[],gt=new Map(_e.ingredients?.map(It=>[It.ingredientId,It.quantity])||[]),vt=_e.bundles?.map(It=>It.id)||[],dn=new Map(_e.bundles?.map(It=>[It.id,new Map(It.ingredientQuantities.map(ir=>[ir.ingredientId,ir.quantity]))])||[]);m(Ze),b(gt),p(vt),I(dn),be.open()}function ae(){$(null),m([]),p([]),b(new Map),I(new Map),be.close()}async function me(){const _e=document.getElementById("cake-name")?.value||"",Ze=document.getElementById("cake-frame")?.value;if(!_e){z.error("Por favor, preencha o campo Nome.");return}if(!Ze){z.error("Por favor, selecione o tamanho do Bolo.");return}if(c.length+d.length===0){z.error("Por favor, selecione pelo menos um ingrediente ou conjunto.");return}const gt={name:_e,frame:Ze,ingredients:c.map(dn=>({ingredientId:dn,quantity:y.get(dn)||0})),bundles:d.map(dn=>({id:dn,ingredientQuantities:Array.from(E.get(dn)?.entries()||[]).map(([It,ir])=>({ingredientId:It,quantity:ir}))}))};D?.id?(await am(Ue.cakes,D.id,gt),z.success("Bolo atualizado com sucesso!")):(await im(Ue.cakes,gt),z.success("Bolo adicionado com sucesso!"));const vt=await At(Ue.cakes);e(await we.pullCakesWithIngredients(vt)),ae()}async function Te(_e){k(_e),de.open()}async function ge(){if(P){await Xv(Ue.cakes,P);const _e=await At(Ue.cakes);e(await we.pullCakesWithIngredients(_e)),z.success("Bolo removido com sucesso!"),de.close(),k(null)}}function Qe(){return we.getIngredientOptionsForSelect(s)}function Ve(){return n.map(_e=>({value:_e.id,label:_e.name})).sort((_e,Ze)=>_e.label.localeCompare(Ze.label))}return T.jsxs(mm,{children:[T.jsxs(pm,{children:[T.jsx(gm,{children:"Bolos"}),T.jsxs(ym,{children:[T.jsx(h0,{value:H,onChange:F,placeholder:"Buscar por nome ou tamanho."}),T.jsxs(pt,{onClick:J,variant:"primary",children:[T.jsx(Wv,{size:20}),"Adicionar Bolo"]})]})]}),T.jsx(kc,{isOpen:be.isOpen,onClose:ae,title:D?"Editar Bolo":"Adicionar Bolo",size:"small",footer:T.jsxs(ta,{noDivider:!0,children:[T.jsx(pt,{type:"button",variant:"secondary",onClick:ae,children:"Cancelar"}),T.jsx(pt,{type:"button",variant:"primary",onClick:me,children:D?"Salvar Alterações":"Adicionar Bolo"})]}),children:T.jsx(bL,{initialValues:D||void 0,onSubmit:me,onCancel:ae,isEditing:!!D,getIngredientOptionsForSelect:Qe,getBundleOptionsForSelect:Ve,ingredients:s,bundles:n,selectedIngredientIds:c,setSelectedIngredientIds:m,selectedBundleIds:d,setSelectedBundleIds:p,ingredientQuantities:y,setIngredientQuantities:b,bundleIngredientQuantities:E,setBundleIngredientQuantities:I,hideActions:!0})}),t.length===0?T.jsx(p0,{children:"Nenhum bolo encontrado."}):T.jsx(m0,{data:x,columns:[{key:"name",label:"Nome"},{key:"frame",label:"Tamanho",render:_e=>we.getFrameName(_e.frame)},{key:"hydratedBundles",label:"Conjuntos",sortable:!1,render:_e=>T.jsx(T.Fragment,{children:_e.hydratedBundles&&_e.hydratedBundles.length>0?_e.hydratedBundles.map(Ze=>T.jsx(YL,{bundleName:Ze.bundle.name,ingredients:Ze.hydratedQuantities||[],convertUnitForDisplay:we.convertUnitForDisplay},Ze.id)):Bf.noTableItemFoundContent})},{key:"hydratedIngredients",label:"Ingredientes",sortable:!1,render:_e=>T.jsx(T.Fragment,{children:_e.hydratedIngredients&&_e.hydratedIngredients.length>0?_e.hydratedIngredients.map((Ze,gt)=>T.jsxs("span",{children:[Ze.ingredient.name," (",Ze.quantity,we.convertUnitForDisplay(Ze.ingredient.unit),")",gt<_e.hydratedIngredients.length-1&&Bf.tableItemSeparator]},Ze.ingredientId)):Bf.noTableItemFoundContent})}],sortColumn:K,sortDirection:C,onSort:w,renderActions:_e=>T.jsx(d0,{handleEdit:()=>ie(_e),handleDelete:()=>Te(_e.id)}),pagination:{currentPage:M,totalPages:j,totalItems:N,pageSize:V,onPageChange:Me,onPageSizeChange:fe,canGoPrevious:ce,canGoNext:X}}),T.jsx(om,{isOpen:de.isOpen,title:"Remover Bolo",message:"Tem certeza que deseja remover este bolo?",confirmText:"Remover",cancelText:"Cancelar",variant:"danger",onConfirm:ge,onCancel:de.close})]})}function oj({initialValues:t,onSubmit:e,onCancel:n,handleOptionsChange:i,getIngredientOptionsForSelect:s,selectedIngredientIds:l,isEditing:c=!1,hideActions:m=!1}){const[d,p]=O.useState({name:""});O.useEffect(()=>{t&&p({name:t.name||""})},[t]);function y(E,I){p(P=>({...P,[E]:I}))}async function b(E){E.preventDefault(),await e({name:d.name})}return T.jsxs("form",{id:"bundle-form",onSubmit:b,children:[T.jsxs(Ft,{children:[T.jsx(Zt,{htmlFor:"bundle-name",required:!0,children:"Nome"}),T.jsx(nr,{id:"bundle-name",name:"bundle-name",type:"text",value:d.name,onChange:E=>y("name",E.target.value),fullWidth:!0})]}),T.jsxs(Ft,{children:[T.jsx(Zt,{htmlFor:"bundle-ingredients",required:!0,children:"Ingredientes"}),T.jsx(qy,{options:s(),value:s().filter(E=>l.includes(E.value)),onChange:i,isMulti:!0,id:"bundle-ingredients",placeholder:"Selecione",menuPortalTarget:document.body,styles:{menuPortal:E=>({...E,zIndex:9999})}})]}),!m&&T.jsxs(ta,{children:[T.jsx(pt,{type:"button",variant:"secondary",onClick:n,children:"Cancelar"}),T.jsx(pt,{type:"submit",variant:"primary",children:c?"Salvar Alterações":"Adicionar Conjunto"})]})]})}function lj(){const[t,e]=O.useState([]),[n,i]=O.useState([]),[s,l]=O.useState([]),[c,m]=O.useState(null),[d,p]=O.useState(null),{searchTerm:y,setSearchTerm:b,filteredData:E}=f0(t,["name"]),{data:I,sortColumn:P,sortDirection:k,handleSort:D}=dm(E),{paginatedData:$,currentPage:H,pageSize:F,totalPages:te,totalItems:L,goToPage:K,setPageSize:C,canGoNext:w,canGoPrevious:x}=c0(I,{initialPageSize:10}),M=Wa(),V=Wa(),j=Mc();O.useEffect(()=>{Promise.all([At(Ue.bundles),At(Ue.ingredients)]).then(([J,ie])=>{e(J),i(ie)})},[]),O.useEffect(()=>{(async()=>e(await we.pullBundlesWithIngredients(t)))()},[n]);function N(){p(null),l([]),V.open()}function Me(J){p(J),l(J.ingredients||[]),V.open()}function fe(){V.close(),p(null),l([])}async function X(J){if(!J.name){j.error("Por favor, preencha o Nome.");return}if(s.length<=1){j.error("Por favor, selecione pelo menos dois ingredientes.");return}const ie={name:J.name,ingredients:s};if(d){await am(Ue.bundles,d.id,ie);const ae=await At(Ue.bundles);e(await we.pullBundlesWithIngredients(ae)),j.success("Conjunto atualizado com sucesso!")}else{await im(Ue.bundles,ie);const ae=await At(Ue.bundles);e(await we.pullBundlesWithIngredients(ae)),j.success("Conjunto adicionado com sucesso!")}fe()}async function ce(J){if(await we.checkBundleIsUsedInCakes(J)){j.error("Este conjunto está sendo usado em um bolo e não pode ser removido.");return}m(J),M.open()}async function de(){if(c){await Xv(Ue.bundles,c);const J=await At(Ue.bundles);e(await we.pullBundlesWithIngredients(J)),j.success("Conjunto removido com sucesso!"),M.close(),m(null)}}function be(){return we.getIngredientOptionsForSelect(n)}function z(J){const ie=J?J.map(ae=>ae.value):[];l(ie)}return T.jsxs(mm,{children:[T.jsxs(pm,{children:[T.jsx(gm,{children:"Conjuntos"}),T.jsxs(ym,{children:[T.jsx(h0,{value:y,onChange:b,placeholder:"Buscar por nome."}),T.jsxs(pt,{onClick:N,variant:"primary",children:[T.jsx(Wv,{size:20}),"Adicionar Conjunto"]})]})]}),t.length===0?T.jsx(p0,{children:"Nenhum conjunto encontrado."}):T.jsx(m0,{data:$,columns:[{key:"name",label:"Nome"},{key:"hydratedIngredients",label:"Ingredientes",sortable:!1,render:J=>T.jsx(T.Fragment,{children:J.hydratedIngredients?.map((ie,ae)=>T.jsxs("span",{children:[ie.name.trim(),ae<J.hydratedIngredients.length-1&&Bf.tableItemSeparator]},ie.id))})}],sortColumn:P,sortDirection:k,onSort:D,renderActions:J=>T.jsx(d0,{handleEdit:()=>Me(J),handleDelete:()=>ce(J.id)}),pagination:{currentPage:H,totalPages:te,totalItems:L,pageSize:F,onPageChange:K,onPageSizeChange:C,canGoPrevious:x,canGoNext:w}}),T.jsx(kc,{isOpen:V.isOpen,onClose:fe,title:d?"Editar Conjunto":"Adicionar Conjunto",size:"small",footer:T.jsxs(ta,{noDivider:!0,children:[T.jsx(pt,{type:"button",variant:"secondary",onClick:fe,children:"Cancelar"}),T.jsx(pt,{type:"submit",form:"bundle-form",variant:"primary",children:d?"Salvar Alterações":"Adicionar Conjunto"})]}),children:T.jsx(oj,{initialValues:d,onSubmit:X,onCancel:fe,handleOptionsChange:z,getIngredientOptionsForSelect:be,selectedIngredientIds:s,isEditing:!!d,hideActions:!0})}),T.jsx(om,{isOpen:M.isOpen,title:"Remover Conjunto",message:"Tem certeza que deseja remover este conjunto?",confirmText:"Remover",cancelText:"Cancelar",variant:"danger",onConfirm:de,onCancel:M.close})]})}function uj({initialValues:t,onSubmit:e,onCancel:n,isEditing:i=!1,hideActions:s=!1}){const[l,c]=O.useState({name:"",price:"",quantity:"",unit:""});O.useEffect(()=>{c(t?{name:t.name||"",price:t.price?.toString().replace(".",",")||"",quantity:t.quantity?.toString().replace(".",",")||"",unit:t.unit||""}:{name:"",price:"",quantity:"",unit:""})},[t]);function m(p,y){c(b=>({...b,[p]:y}))}async function d(p){p.preventDefault(),await e({name:l.name,price:l.price,quantity:l.quantity,unit:l.unit})}return T.jsxs("form",{id:"ingredient-form",onSubmit:d,children:[T.jsxs(Ft,{children:[T.jsx(Zt,{htmlFor:"ingredient-name",required:!0,children:"Nome"}),T.jsx(nr,{id:"ingredient-name",name:"ingredient-name",type:"text",value:l.name,onChange:p=>m("name",p.target.value),fullWidth:!0})]}),T.jsxs(Ft,{children:[T.jsx(Zt,{htmlFor:"ingredient-price",required:!0,children:"Preço"}),T.jsx(nr,{id:"ingredient-price",name:"ingredient-price",type:"text",value:l.price,onChange:p=>m("price",p.target.value),placeholder:"Ex: 10,50",fullWidth:!0})]}),T.jsxs(Ft,{children:[T.jsx(Zt,{htmlFor:"ingredient-quantity",required:!0,children:"Quantidade"}),T.jsx(nr,{id:"ingredient-quantity",name:"ingredient-quantity",type:"text",value:l.quantity,onChange:p=>m("quantity",p.target.value),placeholder:"Ex: 500",fullWidth:!0})]}),T.jsxs(Ft,{children:[T.jsx(Zt,{htmlFor:"ingredient-unit",required:!0,children:"Tipo de unidade"}),T.jsxs(sm,{id:"ingredient-unit",name:"ingredient-unit",value:l.unit,onChange:p=>m("unit",p.target.value),fullWidth:!0,children:[T.jsx("option",{value:"",disabled:!0,children:"Selecione"}),T.jsx("option",{value:"kg",children:"kg"}),T.jsx("option",{value:"g",children:"g"}),T.jsx("option",{value:"l",children:"l"}),T.jsx("option",{value:"ml",children:"ml"}),T.jsx("option",{value:"un",children:"un"})]})]}),!s&&T.jsxs(ta,{children:[T.jsx(pt,{type:"button",variant:"secondary",onClick:n,children:"Cancelar"}),T.jsx(pt,{type:"submit",variant:"primary",children:i?"Salvar Alterações":"Adicionar Ingrediente"})]})]})}function cj(){const[t,e]=O.useState([]),[n,i]=O.useState(null),[s,l]=O.useState(null),{searchTerm:c,setSearchTerm:m,filteredData:d}=f0(t,["name","unit"]),{data:p,sortColumn:y,sortDirection:b,handleSort:E}=dm(d),{paginatedData:I,currentPage:P,pageSize:k,totalPages:D,totalItems:$,goToPage:H,setPageSize:F,canGoNext:te,canGoPrevious:L}=c0(p,{initialPageSize:10}),K=Wa(),C=Wa(),w=Mc();O.useEffect(()=>{Promise.resolve(At(Ue.ingredients)).then(fe=>e(fe))},[]);function x(){l(null),C.open()}function M(fe){l(fe),C.open()}function V(){C.close(),l(null)}async function j(fe){if(!fe.name||!fe.price||!fe.quantity||!fe.unit){w.error("Por favor, preencha os campos obrigatórios.");return}const X={...fe,price:we.parseDecimal(fe.price),quantity:we.parseDecimal(fe.quantity)};if(s)await am(Ue.ingredients,s.id,X),e(await At(Ue.ingredients)),w.success("Ingrediente atualizado com sucesso!");else{if(t.some(ce=>ce.name===X.name)){w.error("Este ingrediente já está na lista.");return}await im(Ue.ingredients,X),e(await At(Ue.ingredients)),w.success("Ingrediente adicionado com sucesso!")}V()}async function N(fe){if(await we.checkIngredientIsUsedInBundles(fe)){w.error("Este ingrediente está sendo usado em um conjunto e não pode ser removido.");return}if(await we.checkIngredientIsUsedInCakes(fe)){w.error("Este ingrediente está sendo usado em um bolo e não pode ser removido.");return}i(fe),K.open()}async function Me(){n&&(await Xv(Ue.ingredients,n),e(await At(Ue.ingredients)),w.success("Ingrediente removido com sucesso!"),K.close(),i(null))}return T.jsxs(mm,{children:[T.jsxs(pm,{children:[T.jsx(gm,{children:"Ingredientes"}),T.jsxs(ym,{children:[T.jsx(h0,{value:c,onChange:m,placeholder:"Buscar por nome ou unidade."}),T.jsxs(pt,{onClick:x,variant:"primary",children:[T.jsx(Wv,{size:20}),"Adicionar Ingrediente"]})]})]}),t.length===0?T.jsx(p0,{children:"Nenhum ingrediente encontrado."}):T.jsx(m0,{data:I,columns:[{key:"name",label:"Nome"},{key:"price",label:"Preço",render:fe=>`R$ ${we.humanizePrice(fe.price)}`},{key:"quantity",label:"Quantidade",render:fe=>`${fe.quantity}${we.convertUnitForDisplay(fe.unit)}`}],sortColumn:y,sortDirection:b,onSort:E,renderActions:fe=>T.jsx(d0,{handleEdit:()=>M(fe),handleDelete:()=>N(fe.id)}),pagination:{currentPage:P,totalPages:D,totalItems:$,pageSize:k,onPageChange:H,onPageSizeChange:F,canGoPrevious:L,canGoNext:te}}),T.jsx(kc,{isOpen:C.isOpen,onClose:V,title:s?"Editar Ingrediente":"Adicionar Ingrediente",size:"small",footer:T.jsxs(ta,{noDivider:!0,children:[T.jsx(pt,{type:"button",variant:"secondary",onClick:V,children:"Cancelar"}),T.jsx(pt,{type:"submit",form:"ingredient-form",variant:"primary",children:s?"Salvar Alterações":"Adicionar Ingrediente"})]}),children:T.jsx(uj,{initialValues:s,onSubmit:j,onCancel:V,isEditing:!!s,hideActions:!0})}),T.jsx(om,{isOpen:K.isOpen,title:"Remover Ingrediente",message:"Tem certeza que deseja remover este ingrediente?",confirmText:"Remover",cancelText:"Cancelar",variant:"danger",onConfirm:Me,onCancel:K.close})]})}function hj(){return T.jsx("div",{children:T.jsx(RT,{})})}const lT=ne.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  color: ${t=>t.theme.colors.textPrimary};

  h1 {
    margin-bottom: 2rem;
    color: ${t=>t.theme.colors.textPrimary};
  }

  h2 {
    font-size: ${t=>t.theme.typography.fontSize.lg};
    margin-bottom: 1rem;
    color: ${t=>t.theme.colors.textPrimary};
  }
`,fj=ne.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: ${t=>t.theme.spacing.xl};
  margin-bottom: ${t=>t.theme.spacing["3xl"]};
`,Sf=ne.div`
  background: ${t=>t.theme.colors.surface};
  border: 1px solid ${t=>t.theme.colors.divider};
  border-radius: ${t=>t.theme.spacing.sm};
  padding: ${t=>t.theme.spacing.lg};
  text-align: center;
  box-shadow: ${t=>t.theme.shadows.sm};
  transition: box-shadow ${t=>t.theme.animations.transitions.default};

  &:hover {
    box-shadow: ${t=>t.theme.shadows.md};
  }
`,Ef=ne.div`
  font-size: 2.5rem;
  margin-bottom: ${t=>t.theme.spacing.sm};
`,Tf=ne.div`
  font-size: ${t=>t.theme.typography.fontSize.sm};
  color: ${t=>t.theme.colors.textSecondary};
  margin-bottom: ${t=>t.theme.spacing.sm};
`,wf=ne.div`
  font-size: ${t=>t.theme.typography.fontSize["2xl"]};
  font-weight: ${t=>t.theme.typography.fontWeight.bold};
  color: ${t=>t.theme.colors.textPrimary};
`,dj=ne.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${t=>t.theme.spacing["2xl"]};

  @media ${t=>t.theme.mediaQueries.maxMobile} {
    grid-template-columns: 1fr;
  }
`,Hu=ne.div`
  background: ${t=>t.theme.colors.surface};
  border: 1px solid ${t=>t.theme.colors.divider};
  border-radius: ${t=>t.theme.spacing.sm};
  padding: ${t=>t.theme.spacing.xl};
  box-shadow: ${t=>t.theme.shadows.sm};
`,mj=ne.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing["2xl"]};
`,pj=ne.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing.lg};
`,gj=ne.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.lg};
  padding: ${t=>t.theme.spacing.md};
  background: ${t=>t.theme.colors.surfaceVariant};
  border-radius: ${t=>t.theme.spacing.xs};
  border: 1px solid ${t=>t.theme.colors.divider};
  transition: background-color ${t=>t.theme.animations.transitions.default};

  &:hover {
    background: ${t=>t.theme.colors.hover};
  }
`,yj=ne.span`
  font-size: 2rem;
`,vj=ne.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing.xs};
  flex: 1;
`,bj=ne.span`
  font-weight: ${t=>t.theme.typography.fontWeight.semibold};
  color: ${t=>t.theme.colors.textPrimary};
`,_j=ne.span`
  font-size: ${t=>t.theme.typography.fontSize.sm};
  color: ${t=>t.theme.colors.textSecondary};
`,uT=ne.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,cT=ne.li`
  padding: ${t=>t.theme.spacing.sm} 0;
  border-bottom: 1px solid ${t=>t.theme.colors.divider};
  color: ${t=>t.theme.colors.textPrimary};

  &:last-child {
    border-bottom: none;
  }
`,Sj=ne.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing.md};
`,Wg=ne.div`
  display: flex;
  justify-content: space-between;
  padding: ${t=>t.theme.spacing.sm} 0;
  border-bottom: 1px solid ${t=>t.theme.colors.divider};

  &:last-child {
    border-bottom: none;
  }
`,Zg=ne.span`
  color: ${t=>t.theme.colors.textSecondary};
`,Jg=ne.span`
  font-weight: ${t=>t.theme.typography.fontWeight.semibold};
  color: ${t=>t.theme.colors.textPrimary};
`,Ej=ne.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.theme.spacing.md};
`,Tj=ne.div`
  display: flex;
  justify-content: space-between;
  padding: ${t=>t.theme.spacing.sm} 0;
  border-bottom: 1px solid ${t=>t.theme.colors.divider};

  &:last-child {
    border-bottom: none;
  }
`,wj=ne.span`
  color: ${t=>t.theme.colors.textSecondary};
  font-weight: ${t=>t.theme.typography.fontWeight.semibold};
`,xj=ne.span`
  color: ${t=>t.theme.colors.textPrimary};
`;function Aj(){const[t,e]=O.useState([]),[n,i]=O.useState([]),[s,l]=O.useState([]),[c,m]=O.useState(!0);O.useEffect(()=>{Promise.all([At(Ue.ingredients),At(Ue.bundles),At(Ue.cakes)]).then(async([L,K,C])=>{e(L),i(K);const w=await we.pullCakesWithIngredients(C);l(w),m(!1)})},[]);function d(L){let K=0;return L.hydratedIngredients&&L.hydratedIngredients.forEach(C=>{K+=we.calculateIngredientCost(C.ingredient,C.quantity)}),L.hydratedBundles&&L.hydratedBundles.forEach(C=>{C.hydratedQuantities?.forEach(w=>{K+=we.calculateIngredientCost(w.ingredient,w.quantity)})}),K}function p(){return s.map(K=>({cake:K,wholePrice:d(K)})).sort((K,C)=>C.wholePrice-K.wholePrice).slice(0,3)}function y(){return s.length===0?0:s.reduce((K,C)=>K+d(C),0)/s.length}function b(){const L=new Map;return s.forEach(C=>{C.hydratedIngredients?.forEach(w=>{const x=w.ingredient.id;L.set(x,(L.get(x)||0)+1)}),C.hydratedBundles?.forEach(w=>{w.hydratedQuantities?.forEach(x=>{const M=x.ingredient.id;L.set(M,(L.get(M)||0)+1)})})}),Array.from(L.entries()).map(([C,w])=>{const x=t.find(M=>M.id===C);return x?{ingredient:x,count:w}:null}).filter(C=>C!==null).sort((C,w)=>w.count-C.count).slice(0,3)}function E(){const L=new Map;return s.forEach(C=>{C.hydratedBundles?.forEach(w=>{const x=w.id;L.set(x,(L.get(x)||0)+1)})}),Array.from(L.entries()).map(([C,w])=>{const x=n.find(M=>M.id===C);return x?{bundle:x,count:w}:null}).filter(C=>C!==null).sort((C,w)=>w.count-C.count).slice(0,3)}function I(){if(s.length===0)return{min:0,max:0,diff:0};const L=s.map(w=>d(w)),K=Math.min(...L),C=Math.max(...L);return{min:K,max:C,diff:C-K}}function P(){const L={[cn.frame15]:0,[cn.frame25]:0,[cn.frame35]:0};s.forEach(C=>{L[C.frame]++});const K=s.length||1;return[{frame:"15cm",count:L[cn.frame15],percentage:L[cn.frame15]/K*100},{frame:"25cm",count:L[cn.frame25],percentage:L[cn.frame25]/K*100},{frame:"35cm",count:L[cn.frame35],percentage:L[cn.frame35]/K*100}]}const k=O.useMemo(()=>p(),[s]),D=O.useMemo(()=>b(),[s,t]),$=O.useMemo(()=>E(),[s,n]),H=O.useMemo(()=>I(),[s]),F=O.useMemo(()=>P(),[s]),te=O.useMemo(()=>y(),[s]);return c?T.jsx(lT,{children:T.jsx("p",{children:"Carregando..."})}):T.jsxs(lT,{children:[T.jsx("h1",{children:"Visão Geral"}),T.jsxs(fj,{children:[T.jsxs(Sf,{children:[T.jsx(Ef,{children:"🥚"}),T.jsx(Tf,{children:"Ingredientes"}),T.jsx(wf,{children:t.length})]}),T.jsxs(Sf,{children:[T.jsx(Ef,{children:"🎁"}),T.jsx(Tf,{children:"Conjuntos"}),T.jsx(wf,{children:n.length})]}),T.jsxs(Sf,{children:[T.jsx(Ef,{children:"🎂"}),T.jsx(Tf,{children:"Bolos"}),T.jsx(wf,{children:s.length})]}),T.jsxs(Sf,{children:[T.jsx(Ef,{children:"💰"}),T.jsx(Tf,{children:"Preço Médio"}),T.jsxs(wf,{children:["R$ ",we.humanizePrice(te)]})]})]}),T.jsxs(dj,{children:[T.jsxs(Hu,{children:[T.jsx("h2",{children:"Top 3 Bolos Mais Caros"}),k.length===0?T.jsx("p",{children:"Nenhum bolo cadastrado"}):T.jsx(pj,{children:k.map((L,K)=>T.jsxs(gj,{children:[T.jsx(yj,{children:K===0?"🥇":K===1?"🥈":"🥉"}),T.jsxs(vj,{children:[T.jsx(bj,{children:L.cake.name}),T.jsxs(_j,{children:[we.getFrameName(L.cake.frame)," - R$ ",we.humanizePrice(L.wholePrice)]})]})]},L.cake.id))})]}),T.jsxs(mj,{children:[T.jsxs(Hu,{children:[T.jsx("h2",{children:"Ingredientes Mais Usados"}),D.length===0?T.jsx("p",{children:"Nenhum ingrediente usado ainda"}):T.jsx(uT,{children:D.map(L=>T.jsxs(cT,{children:[L.ingredient.name," (",L.count," ",L.count===1?"bolo":"bolos",")"]},L.ingredient.id))})]}),T.jsxs(Hu,{children:[T.jsx("h2",{children:"Conjuntos Mais Usados"}),$.length===0?T.jsx("p",{children:"Nenhum conjunto usado ainda"}):T.jsx(uT,{children:$.map(L=>T.jsxs(cT,{children:[L.bundle.name," (",L.count," ",L.count===1?"bolo":"bolos",")"]},L.bundle.id))})]}),T.jsxs(Hu,{children:[T.jsx("h2",{children:"Faixa de Preços"}),s.length===0?T.jsx("p",{children:"Nenhum bolo cadastrado"}):T.jsxs(Sj,{children:[T.jsxs(Wg,{children:[T.jsx(Zg,{children:"Mais barato:"}),T.jsxs(Jg,{children:["R$ ",we.humanizePrice(H.min)]})]}),T.jsxs(Wg,{children:[T.jsx(Zg,{children:"Mais caro:"}),T.jsxs(Jg,{children:["R$ ",we.humanizePrice(H.max)]})]}),T.jsxs(Wg,{children:[T.jsx(Zg,{children:"Diferença:"}),T.jsxs(Jg,{children:["R$ ",we.humanizePrice(H.diff)]})]})]})]}),T.jsxs(Hu,{children:[T.jsx("h2",{children:"Distribuição por Tamanho"}),s.length===0?T.jsx("p",{children:"Nenhum bolo cadastrado"}):T.jsx(Ej,{children:F.map(L=>T.jsxs(Tj,{children:[T.jsxs(wj,{children:[L.frame,":"]}),T.jsxs(xj,{children:[L.count," ",L.count===1?"bolo":"bolos"," (",L.percentage.toFixed(0),"%)"]})]},L.frame))})]})]})]})]})}const Cj={frame15:8,frame25:12,frame35:16};function Rj(t){const[e,n]=O.useState(new Set(t));return{visibleColumns:e,toggleColumn:m=>{n(d=>{const p=new Set(d);return p.has(m)?p.delete(m):p.add(m),p})},isColumnVisible:m=>e.has(m),showAllColumns:m=>{n(new Set(m))},hideAllColumns:()=>{n(new Set)}}}const Ij=ne.div`
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
`,Oj=ne.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: ${t=>t.theme.colors.primary};
  color: ${t=>t.theme.colors.onPrimary};
  border: 1px solid ${t=>t.theme.colors.primary};
  border-radius: 8px;
  cursor: pointer;
  font-size: ${t=>t.theme.typography.fontSize.base};
  transition: all ${t=>t.theme.animations.transitions.default};

  &:hover {
    background: ${t=>t.theme.colors.surfaceVariant};
    border-color: ${t=>t.theme.colors.borderHover};
  }
`,Dj=ne.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  background: ${t=>t.theme.colors.background};
  border: 1px solid ${t=>t.theme.colors.border};
  border-radius: 8px;
  box-shadow: ${t=>t.theme.shadows.lg};
  min-width: 250px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;

  @media ${t=>t.theme.mediaQueries.maxMobile} {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 350px;
  }
`,Pj=ne.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${t=>t.theme.colors.border};
  font-weight: 600;

  span {
    color: ${t=>t.theme.colors.textPrimary};
  }
`,Mj=ne.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${t=>t.theme.colors.textSecondary};
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color ${t=>t.theme.animations.transitions.default};

  &:hover {
    background: ${t=>t.theme.colors.surfaceVariant};
  }
`,kj=ne.div`
  padding: 0.5rem;
`,Vj=ne.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color ${t=>t.theme.animations.transitions.default};
  user-select: none;

  &:hover {
    background: ${t=>t.theme.colors.surfaceVariant};
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
`,Nj=ne.span`
  width: 20px;
  height: 20px;
  border: ${t=>t.theme.spacing.xxs} solid ${t=>t.$checked?t.theme.colors.primary:t.theme.colors.border};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all ${t=>t.theme.animations.transitions.default};
  background: ${t=>t.$checked?t.theme.colors.primary:t.theme.colors.background};
  color: ${t=>t.$checked?t.theme.colors.textOnPrimary:"transparent"};
`,$j=ne.span`
  flex: 1;
  font-size: ${t=>t.theme.typography.fontSize.sm};
  color: ${t=>t.theme.colors.textPrimary};
`;function Lj({columns:t,visibleColumns:e,onToggle:n}){const[i,s]=O.useState(!1),l=O.useRef(null);return O.useEffect(()=>{function c(m){l.current&&!l.current.contains(m.target)&&s(!1)}return i&&document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[i]),T.jsxs(Ij,{ref:l,children:[T.jsxs(Oj,{onClick:()=>s(!i),"aria-label":"Filtrar colunas",children:[T.jsx(AL,{size:20}),"Filtrar Colunas"]}),i&&T.jsxs(Dj,{children:[T.jsxs(Pj,{children:[T.jsx("span",{children:"Mostrar colunas"}),T.jsx(Mj,{onClick:()=>s(!1),"aria-label":"Fechar",children:"×"})]}),T.jsx(kj,{children:t.map(c=>T.jsxs(Vj,{children:[T.jsx("input",{type:"checkbox",checked:e.has(c.key),onChange:()=>n(c.key)}),T.jsx(Nj,{$checked:e.has(c.key),children:e.has(c.key)&&T.jsx(EL,{})}),T.jsx($j,{children:c.label})]},c.key))})]})]})}function jj(){const[t,e]=O.useState(null),[n,i]=O.useState([]),[s,l]=O.useState([]),{data:c,sortColumn:m,sortDirection:d,handleSort:p}=dm(s),y=Mc(),b=[{key:"name",label:"Nome"},{key:"base",label:"Preço base"},{key:"baseWithPackaging",label:"Preço com embalagem"},{key:"baseSlice",label:"Preço base Fatia"},{key:"baseSliceWithPackaging",label:"Preço Fatia com embalagem"},{key:"converted",label:"Preço Bolo convertido"},{key:"convertedWithPackaging",label:"Preço convertido com embalagem"},{key:"convertedSlice",label:"Preço Fatia convertido"},{key:"convertedSliceWithPackaging",label:"Preço Fatia convertido com embalagem"},{key:"sellingBasePrice",label:"Preço Bolo praticado"},{key:"sellingSlicePrice",label:"Preço Fatia praticado"},{key:"ifoodSellingBasePrice",label:"Preço Bolo Ifood"},{key:"ifoodSellingSlicePrice",label:"Preço Fatia Ifood"}],E=["name","base","baseSlice","converted","convertedSlice","sellingBasePrice","sellingSlicePrice","ifoodSellingBasePrice","ifoodSellingSlicePrice"],{visibleColumns:I,toggleColumn:P,isColumnVisible:k}=Rj(E);O.useEffect(()=>{Promise.all([At(Ue.config),At(Ue.cakes)]).then(async([w,x])=>{e(w[0]||(V=>V));const M=await we.pullCakesWithIngredients(x);i(M)})},[]),O.useEffect(()=>{const w=n.map(x=>{const M=$(x),V=H(x.frame,M),j=K(x.frame,M),N=H(x.frame,j,!0),Me=F(M),fe=F(j),X=H(x.frame,Me),ce=H(x.frame,fe,!0),de=te(X),be=te(ce),z=te(L(X)),J=te(L(ce)),ie=we.getFrameName(x.frame).replace("cm","");return{id:x.id,name:`${x.name} - Aro ${ie}`,base:we.humanizePrice(M),baseWithPackaging:we.humanizePrice(V),baseSlice:we.humanizePrice(j),baseSliceWithPackaging:we.humanizePrice(N),converted:we.humanizePrice(Me),convertedWithPackaging:we.humanizePrice(X),convertedSlice:we.humanizePrice(fe),convertedSliceWithPackaging:we.humanizePrice(ce),sellingBasePrice:we.humanizePrice(de),sellingSlicePrice:we.humanizePrice(be),ifoodSellingBasePrice:we.humanizePrice(z),ifoodSellingSlicePrice:we.humanizePrice(J)}});l(w)},[n]);function D(w){return w.hydratedIngredients?w.hydratedIngredients.reduce((x,M)=>x+we.calculateIngredientCost(M.ingredient,M.quantity),0):0}function $(w){if(!t)return y.error("Configurações não carregadas."),0;const x=D(w),M=w.hydratedBundles?.reduce((V,j)=>{const N=j.hydratedQuantities.reduce((Me,fe)=>Me+we.calculateIngredientCost(fe.ingredient,fe.quantity),0);return V+N},0)||0;return x+M}function H(w,x,M=!1){if(!t)return y.error("Configurações não carregadas."),0;if(M)return x+t.slicePackagingPrice;let V;switch(w){case cn.frame15:V=x+t.frame15PackagingPrice;break;case cn.frame25:V=x+t.frame25PackagingPrice;break;case cn.frame35:V=x+t.frame35PackagingPrice;break;default:y.error("Tamanho de bolo inválido."),V=x;break}return V}function F(w){return w/(1-(100-t.conversionRate)/100)}function te(w){if(!t||t.roundingStrategy==="none")return w;const x=Math.floor(w);if(t.roundingStrategy==="to_90"){const M=x-.1,V=x+.9,j=Math.abs(w-M),N=Math.abs(w-V);return j<N?M:V}else if(t.roundingStrategy==="to_50"){const M=x+.5,V=x+1.5,j=Math.abs(w-M),N=Math.abs(w-V);return j<N?M:V}else if(t.roundingStrategy==="to_integer")return Math.round(w);return w}function L(w){return t?we.ceilDecimal(w*(1+t.ifoodTax/100)):w}function K(w,x){const M=C(w);return x/M}function C(w){return Cj[w]}return T.jsxs(mm,{children:[T.jsxs(pm,{children:[T.jsx(gm,{children:"Calculadora"}),T.jsx(ym,{children:T.jsx(Lj,{columns:b.map(w=>({key:w.key,label:w.label})),visibleColumns:I,onToggle:P})})]}),s.length===0?T.jsx(Zv,{}):T.jsx(UC,{children:T.jsxs("table",{children:[T.jsx("thead",{children:T.jsx(Od,{children:b.filter(w=>k(w.key)).map(w=>T.jsx(Gy,{column:{key:w.key,label:w.label},sortColumn:m,sortDirection:d,onSort:p}))})}),T.jsx("tbody",{children:c.map(w=>T.jsx(Od,{children:b.filter(x=>k(x.key)).map(x=>T.jsx("td",{children:x.key==="name"?w[x.key]:`R$ ${w[x.key]}`},x.key))},w.id))})]})})]})}const Uj=BO`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${t=>t.theme.typography.fontFamily.sans};
    font-size: ${t=>t.theme.typography.fontSize.base};
    font-weight: ${t=>t.theme.typography.fontWeight.normal};
    line-height: ${t=>t.theme.typography.lineHeight.normal};
    color: ${t=>t.theme.colors.textPrimary};
    background-color: ${t=>t.theme.colors.background};
    transition: ${t=>t.theme.animations.transitions.colors};
    
    /* Prevent horizontal scroll */
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${t=>t.theme.typography.fontWeight.bold};
    line-height: ${t=>t.theme.typography.lineHeight.tight};
    color: ${t=>t.theme.colors.textPrimary};
    transition: ${t=>t.theme.animations.transitions.colors};
  }

  h1 {
    font-size: ${t=>t.theme.typography.fontSize["4xl"]};
    
    ${t=>t.theme.mediaQueries.maxMobile} {
      font-size: ${t=>t.theme.typography.fontSize["3xl"]};
    }
  }

  h2 {
    font-size: ${t=>t.theme.typography.fontSize["3xl"]};
    
    ${t=>t.theme.mediaQueries.maxMobile} {
      font-size: ${t=>t.theme.typography.fontSize["2xl"]};
    }
  }

  h3 {
    font-size: ${t=>t.theme.typography.fontSize["2xl"]};
  }

  h4 {
    font-size: ${t=>t.theme.typography.fontSize.xl};
  }

  a {
    color: ${t=>t.theme.colors.primary};
    text-decoration: none;
    transition: ${t=>t.theme.animations.transitions.fast};

    &:hover {
      color: ${t=>t.theme.colors.primaryHover};
      text-decoration: underline;
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${t=>t.theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${t=>t.theme.colors.border};
    border-radius: 6px;

    &:hover {
      background: ${t=>t.theme.colors.borderHover};
    }
  }

  /* Focus visible for accessibility */
  *:focus-visible {
    outline: ${t=>t.theme.spacing.xxs} solid ${t=>t.theme.colors.primary};
    outline-offset: ${t=>t.theme.spacing.xxs};
  }

  /* Remove default focus outline (replaced by focus-visible) */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  /* Remove number input spinners */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  /* Root layout */
  #root {
    height: 100vh;
    width: 100vw;
    text-align: center;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  /* List reset */
  ul {
    list-style-type: none;
    padding: 0;
  }

  /* Active utility class */
  .active {
    background-color: ${t=>t.theme.colors.primary};
    outline: 4px auto -webkit-focus-ring-color;
  }

  /* Respect user's motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;function zj(){return T.jsxs(GN,{children:[T.jsx(Uj,{}),T.jsx(D2,{children:T.jsx(l2,{children:T.jsxs(Pa,{element:T.jsx(E3,{}),children:[T.jsxs(Pa,{path:"/",element:T.jsx(hj,{}),children:[T.jsx(Pa,{index:!0,element:T.jsx(Aj,{})}),T.jsx(Pa,{path:"calculadora",element:T.jsx(jj,{})})]}),T.jsx(Pa,{path:"/ingredientes",element:T.jsx(cj,{})}),T.jsx(Pa,{path:"/conjuntos",element:T.jsx(lj,{})}),T.jsx(Pa,{path:"/bolos",element:T.jsx(sj,{})})]})})})]})}var ey={exports:{}},qu={},ty={exports:{}},ny={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hT;function Bj(){return hT||(hT=1,function(t){function e(X,ce){var de=X.length;X.push(ce);e:for(;0<de;){var be=de-1>>>1,z=X[be];if(0<s(z,ce))X[be]=ce,X[de]=z,de=be;else break e}}function n(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var ce=X[0],de=X.pop();if(de!==ce){X[0]=de;e:for(var be=0,z=X.length,J=z>>>1;be<J;){var ie=2*(be+1)-1,ae=X[ie],me=ie+1,Te=X[me];if(0>s(ae,de))me<z&&0>s(Te,ae)?(X[be]=Te,X[me]=de,be=me):(X[be]=ae,X[ie]=de,be=ie);else if(me<z&&0>s(Te,de))X[be]=Te,X[me]=de,be=me;else break e}}return ce}function s(X,ce){var de=X.sortIndex-ce.sortIndex;return de!==0?de:X.id-ce.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,m=c.now();t.unstable_now=function(){return c.now()-m}}var d=[],p=[],y=1,b=null,E=3,I=!1,P=!1,k=!1,D=!1,$=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function te(X){for(var ce=n(p);ce!==null;){if(ce.callback===null)i(p);else if(ce.startTime<=X)i(p),ce.sortIndex=ce.expirationTime,e(d,ce);else break;ce=n(p)}}function L(X){if(k=!1,te(X),!P)if(n(d)!==null)P=!0,K||(K=!0,j());else{var ce=n(p);ce!==null&&fe(L,ce.startTime-X)}}var K=!1,C=-1,w=5,x=-1;function M(){return D?!0:!(t.unstable_now()-x<w)}function V(){if(D=!1,K){var X=t.unstable_now();x=X;var ce=!0;try{e:{P=!1,k&&(k=!1,H(C),C=-1),I=!0;var de=E;try{t:{for(te(X),b=n(d);b!==null&&!(b.expirationTime>X&&M());){var be=b.callback;if(typeof be=="function"){b.callback=null,E=b.priorityLevel;var z=be(b.expirationTime<=X);if(X=t.unstable_now(),typeof z=="function"){b.callback=z,te(X),ce=!0;break t}b===n(d)&&i(d),te(X)}else i(d);b=n(d)}if(b!==null)ce=!0;else{var J=n(p);J!==null&&fe(L,J.startTime-X),ce=!1}}break e}finally{b=null,E=de,I=!1}ce=void 0}}finally{ce?j():K=!1}}}var j;if(typeof F=="function")j=function(){F(V)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,Me=N.port2;N.port1.onmessage=V,j=function(){Me.postMessage(null)}}else j=function(){$(V,0)};function fe(X,ce){C=$(function(){X(t.unstable_now())},ce)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(X){X.callback=null},t.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<X?Math.floor(1e3/X):5},t.unstable_getCurrentPriorityLevel=function(){return E},t.unstable_next=function(X){switch(E){case 1:case 2:case 3:var ce=3;break;default:ce=E}var de=E;E=ce;try{return X()}finally{E=de}},t.unstable_requestPaint=function(){D=!0},t.unstable_runWithPriority=function(X,ce){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var de=E;E=X;try{return ce()}finally{E=de}},t.unstable_scheduleCallback=function(X,ce,de){var be=t.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?be+de:be):de=be,X){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=de+z,X={id:y++,callback:ce,priorityLevel:X,startTime:de,expirationTime:z,sortIndex:-1},de>be?(X.sortIndex=de,e(p,X),n(d)===null&&X===n(p)&&(k?(H(C),C=-1):k=!0,fe(L,de-be))):(X.sortIndex=z,e(d,X),P||I||(P=!0,K||(K=!0,j()))),X},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(X){var ce=E;return function(){var de=E;E=ce;try{return X.apply(this,arguments)}finally{E=de}}}}(ny)),ny}var fT;function Fj(){return fT||(fT=1,ty.exports=Bj()),ty.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dT;function Hj(){if(dT)return qu;dT=1;var t=Fj(),e=Qy(),n=kT();function i(r){var a="https://react.dev/errors/"+r;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var a=r,o=r;if(r.alternate)for(;a.return;)a=a.return;else{r=a;do a=r,(a.flags&4098)!==0&&(o=a.return),r=a.return;while(r)}return a.tag===3?o:null}function c(r){if(r.tag===13){var a=r.memoizedState;if(a===null&&(r=r.alternate,r!==null&&(a=r.memoizedState)),a!==null)return a.dehydrated}return null}function m(r){if(l(r)!==r)throw Error(i(188))}function d(r){var a=r.alternate;if(!a){if(a=l(r),a===null)throw Error(i(188));return a!==r?null:r}for(var o=r,u=a;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return m(f),r;if(g===u)return m(f),a;g=g.sibling}throw Error(i(188))}if(o.return!==u.return)o=f,u=g;else{for(var S=!1,A=f.child;A;){if(A===o){S=!0,o=f,u=g;break}if(A===u){S=!0,u=f,o=g;break}A=A.sibling}if(!S){for(A=g.child;A;){if(A===o){S=!0,o=g,u=f;break}if(A===u){S=!0,u=g,o=f;break}A=A.sibling}if(!S)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:a}function p(r){var a=r.tag;if(a===5||a===26||a===27||a===6)return r;for(r=r.child;r!==null;){if(a=p(r),a!==null)return a;r=r.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),F=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function j(r){return r===null||typeof r!="object"?null:(r=V&&r[V]||r["@@iterator"],typeof r=="function"?r:null)}var N=Symbol.for("react.client.reference");function Me(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===N?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case D:return"Profiler";case k:return"StrictMode";case L:return"Suspense";case K:return"SuspenseList";case x:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case I:return"Portal";case F:return(r.displayName||"Context")+".Provider";case H:return(r._context.displayName||"Context")+".Consumer";case te:var a=r.render;return r=r.displayName,r||(r=a.displayName||a.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case C:return a=r.displayName||null,a!==null?a:Me(r.type)||"Memo";case w:a=r._payload,r=r._init;try{return Me(r(a))}catch{}}return null}var fe=Array.isArray,X=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},be=[],z=-1;function J(r){return{current:r}}function ie(r){0>z||(r.current=be[z],be[z]=null,z--)}function ae(r,a){z++,be[z]=r.current,r.current=a}var me=J(null),Te=J(null),ge=J(null),Qe=J(null);function Ve(r,a){switch(ae(ge,a),ae(Te,r),ae(me,null),a.nodeType){case 9:case 11:r=(r=a.documentElement)&&(r=r.namespaceURI)?e_(r):0;break;default:if(r=a.tagName,a=a.namespaceURI)a=e_(a),r=t_(a,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ie(me),ae(me,r)}function _e(){ie(me),ie(Te),ie(ge)}function Ze(r){r.memoizedState!==null&&ae(Qe,r);var a=me.current,o=t_(a,r.type);a!==o&&(ae(Te,r),ae(me,o))}function gt(r){Te.current===r&&(ie(me),ie(Te)),Qe.current===r&&(ie(Qe),ku._currentValue=de)}var vt=Object.prototype.hasOwnProperty,dn=t.unstable_scheduleCallback,It=t.unstable_cancelCallback,ir=t.unstable_shouldYield,Nc=t.unstable_requestPaint,ar=t.unstable_now,vm=t.unstable_getCurrentPriorityLevel,Pl=t.unstable_ImmediatePriority,eo=t.unstable_UserBlockingPriority,Ja=t.unstable_NormalPriority,bm=t.unstable_LowPriority,to=t.unstable_IdlePriority,Ml=t.log,$c=t.unstable_setDisableYieldValue,Ot=null,ot=null;function Gn(r){if(typeof Ml=="function"&&$c(r),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(Ot,r)}catch{}}var wn=Math.clz32?Math.clz32:es,Lc=Math.log,_m=Math.LN2;function es(r){return r>>>=0,r===0?32:31-(Lc(r)/_m|0)|0}var ts=256,ns=4194304;function Sr(r){var a=r&42;if(a!==0)return a;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function no(r,a,o){var u=r.pendingLanes;if(u===0)return 0;var f=0,g=r.suspendedLanes,S=r.pingedLanes;r=r.warmLanes;var A=u&134217727;return A!==0?(u=A&~g,u!==0?f=Sr(u):(S&=A,S!==0?f=Sr(S):o||(o=A&~r,o!==0&&(f=Sr(o))))):(A=u&~g,A!==0?f=Sr(A):S!==0?f=Sr(S):o||(o=u&~r,o!==0&&(f=Sr(o)))),f===0?0:a!==0&&a!==f&&(a&g)===0&&(g=f&-f,o=a&-a,g>=o||g===32&&(o&4194048)!==0)?a:f}function rs(r,a){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&a)===0}function kl(r,a){switch(r){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vl(){var r=ts;return ts<<=1,(ts&4194048)===0&&(ts=256),r}function Nl(){var r=ns;return ns<<=1,(ns&62914560)===0&&(ns=4194304),r}function fi(r){for(var a=[],o=0;31>o;o++)a.push(r);return a}function di(r,a){r.pendingLanes|=a,a!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function $l(r,a,o,u,f,g){var S=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var A=r.entanglements,U=r.expirationTimes,Y=r.hiddenUpdates;for(o=S&~o;0<o;){var re=31-wn(o),oe=1<<re;A[re]=0,U[re]=-1;var W=Y[re];if(W!==null)for(Y[re]=null,re=0;re<W.length;re++){var Z=W[re];Z!==null&&(Z.lane&=-536870913)}o&=~oe}u!==0&&kr(r,u,0),g!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=g&~(S&~a))}function kr(r,a,o){r.pendingLanes|=a,r.suspendedLanes&=~a;var u=31-wn(a);r.entangledLanes|=a,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function Ll(r,a){var o=r.entangledLanes|=a;for(r=r.entanglements;o;){var u=31-wn(o),f=1<<u;f&a|r[u]&a&&(r[u]|=a),o&=~f}}function ra(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ro(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function ia(){var r=ce.p;return r!==0?r:(r=window.event,r===void 0?32:__(r.type))}function jc(r,a){var o=ce.p;try{return ce.p=r,a()}finally{ce.p=o}}var Tt=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Tt,Lt="__reactProps$"+Tt,sr="__reactContainer$"+Tt,jl="__reactEvents$"+Tt,Sm="__reactListeners$"+Tt,aa="__reactHandles$"+Tt,Uc="__reactResources$"+Tt,is="__reactMarker$"+Tt;function sa(r){delete r[Qt],delete r[Lt],delete r[jl],delete r[Sm],delete r[aa]}function mi(r){var a=r[Qt];if(a)return a;for(var o=r.parentNode;o;){if(a=o[sr]||o[Qt]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(r=a_(r);r!==null;){if(o=r[Qt])return o;r=a_(r)}return a}r=o,o=r.parentNode}return null}function Vr(r){if(r=r[Qt]||r[sr]){var a=r.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return r}return null}function Nr(r){var a=r.tag;if(a===5||a===26||a===27||a===6)return r.stateNode;throw Error(i(33))}function kn(r){var a=r[Uc];return a||(a=r[Uc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function kt(r){r[is]=!0}var Ul=new Set,io={};function Er(r,a){pi(r,a),pi(r+"Capture",a)}function pi(r,a){for(io[r]=a,r=0;r<a.length;r++)Ul.add(a[r])}var zc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bc={},as={};function Fc(r){return vt.call(as,r)?!0:vt.call(Bc,r)?!1:zc.test(r)?as[r]=!0:(Bc[r]=!0,!1)}function oa(r,a,o){if(Fc(a))if(o===null)r.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(a);return;case"boolean":var u=a.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(a);return}}r.setAttribute(a,""+o)}}function $r(r,a,o){if(o===null)r.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttribute(a,""+o)}}function mn(r,a,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(a,o,""+u)}}var ss,Hc;function gi(r){if(ss===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);ss=a&&a[1]||"",Hc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ss+r+Hc}var ao=!1;function so(r,a){if(!r||ao)return"";ao=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(a){var oe=function(){throw Error()};if(Object.defineProperty(oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(oe,[])}catch(Z){var W=Z}Reflect.construct(r,[],oe)}else{try{oe.call()}catch(Z){W=Z}r.call(oe.prototype)}}else{try{throw Error()}catch(Z){W=Z}(oe=r())&&typeof oe.catch=="function"&&oe.catch(function(){})}}catch(Z){if(Z&&W&&typeof Z.stack=="string")return[Z.stack,W.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),S=g[0],A=g[1];if(S&&A){var U=S.split(`
`),Y=A.split(`
`);for(f=u=0;u<U.length&&!U[u].includes("DetermineComponentFrameRoot");)u++;for(;f<Y.length&&!Y[f].includes("DetermineComponentFrameRoot");)f++;if(u===U.length||f===Y.length)for(u=U.length-1,f=Y.length-1;1<=u&&0<=f&&U[u]!==Y[f];)f--;for(;1<=u&&0<=f;u--,f--)if(U[u]!==Y[f]){if(u!==1||f!==1)do if(u--,f--,0>f||U[u]!==Y[f]){var re=`
`+U[u].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=u&&0<=f);break}}}finally{ao=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?gi(o):""}function zl(r){switch(r.tag){case 26:case 27:case 5:return gi(r.type);case 16:return gi("Lazy");case 13:return gi("Suspense");case 19:return gi("SuspenseList");case 0:case 15:return so(r.type,!1);case 11:return so(r.type.render,!1);case 1:return so(r.type,!0);case 31:return gi("Activity");default:return""}}function oo(r){try{var a="";do a+=zl(r),r=r.return;while(r);return a}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Vn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Bl(r){var a=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Em(r){var a=Bl(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,a),u=""+r[a];if(!r.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(r,a,{configurable:!0,get:function(){return f.call(this)},set:function(S){u=""+S,g.call(this,S)}}),Object.defineProperty(r,a,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(S){u=""+S},stopTracking:function(){r._valueTracker=null,delete r[a]}}}}function lo(r){r._valueTracker||(r._valueTracker=Em(r))}function Fl(r){if(!r)return!1;var a=r._valueTracker;if(!a)return!0;var o=a.getValue(),u="";return r&&(u=Bl(r)?r.checked?"true":"false":r.value),r=u,r!==o?(a.setValue(r),!0):!1}function os(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var Tm=/[\n"\\]/g;function jt(r){return r.replace(Tm,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Qn(r,a,o,u,f,g,S,A){r.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.type=S:r.removeAttribute("type"),a!=null?S==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+Vn(a)):r.value!==""+Vn(a)&&(r.value=""+Vn(a)):S!=="submit"&&S!=="reset"||r.removeAttribute("value"),a!=null?la(r,S,Vn(a)):o!=null?la(r,S,Vn(o)):u!=null&&r.removeAttribute("value"),f==null&&g!=null&&(r.defaultChecked=!!g),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?r.name=""+Vn(A):r.removeAttribute("name")}function ls(r,a,o,u,f,g,S,A){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(r.type=g),a!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;o=o!=null?""+Vn(o):"",a=a!=null?""+Vn(a):o,A||a===r.value||(r.value=a),r.defaultValue=a}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=A?r.checked:!!u,r.defaultChecked=!!u,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(r.name=S)}function la(r,a,o){a==="number"&&os(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function yi(r,a,o,u){if(r=r.options,a){a={};for(var f=0;f<o.length;f++)a["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=a.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+Vn(o),a=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}a!==null||r[f].disabled||(a=r[f])}a!==null&&(a.selected=!0)}}function ct(r,a,o){if(a!=null&&(a=""+Vn(a),a!==r.value&&(r.value=a),o==null)){r.defaultValue!==a&&(r.defaultValue=a);return}r.defaultValue=o!=null?""+Vn(o):""}function us(r,a,o,u){if(a==null){if(u!=null){if(o!=null)throw Error(i(92));if(fe(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),a=o}o=Vn(a),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function or(r,a){if(a){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=a;return}}r.textContent=a}var cs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qc(r,a,o){var u=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(a,""):a==="float"?r.cssFloat="":r[a]="":u?r.setProperty(a,o):typeof o!="number"||o===0||cs.has(a)?a==="float"?r.cssFloat=o:r[a]=(""+o).trim():r[a]=o+"px"}function Hl(r,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||a!=null&&a.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in a)u=a[f],a.hasOwnProperty(f)&&o[f]!==u&&qc(r,f,u)}else for(var g in a)a.hasOwnProperty(g)&&qc(r,g,a[g])}function ql(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function uo(r){return xm.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var vi=null;function lr(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var bi=null,_i=null;function Gl(r){var a=Vr(r);if(a&&(r=a.stateNode)){var o=r[Lt]||null;e:switch(r=a.stateNode,a.type){case"input":if(Qn(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+jt(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var u=o[a];if(u!==r&&u.form===r.form){var f=u[Lt]||null;if(!f)throw Error(i(90));Qn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<o.length;a++)u=o[a],u.form===r.form&&Fl(u)}break e;case"textarea":ct(r,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&yi(r,!!o.multiple,a,!1)}}}var Lr=!1;function Gc(r,a,o){if(Lr)return r(a,o);Lr=!0;try{var u=r(a);return u}finally{if(Lr=!1,(bi!==null||_i!==null)&&(jh(),bi&&(a=bi,r=_i,_i=bi=null,Gl(a),r)))for(a=0;a<r.length;a++)Gl(r[a])}}function hs(r,a){var o=r.stateNode;if(o===null)return null;var u=o[Lt]||null;if(u===null)return null;o=u[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ur=!1;if(Tr)try{var fs={};Object.defineProperty(fs,"passive",{get:function(){ur=!0}}),window.addEventListener("test",fs,fs),window.removeEventListener("test",fs,fs)}catch{ur=!1}var jr=null,ua=null,Si=null;function Ql(){if(Si)return Si;var r,a=ua,o=a.length,u,f="value"in jr?jr.value:jr.textContent,g=f.length;for(r=0;r<o&&a[r]===f[r];r++);var S=o-r;for(u=1;u<=S&&a[o-u]===f[g-u];u++);return Si=f.slice(r,1<u?1-u:void 0)}function Ur(r){var a=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&a===13&&(r=13)):r=a,r===10&&(r=13),32<=r||r===13?r:0}function zr(){return!0}function Yl(){return!1}function rn(r){function a(o,u,f,g,S){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=g,this.target=S,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(o=r[A],this[A]=o?o(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?zr:Yl,this.isPropagationStopped=Yl,this}return y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),a}var rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=rn(rt),ds=y({},rt,{view:0,detail:0}),Qc=rn(ds),ho,fo,Br,ms=y({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Br&&(Br&&r.type==="mousemove"?(ho=r.screenX-Br.screenX,fo=r.screenY-Br.screenY):fo=ho=0,Br=r),ho)},movementY:function(r){return"movementY"in r?r.movementY:fo}}),cr=rn(ms),Yc=y({},ms,{dataTransfer:0}),Am=rn(Yc),ps=y({},ds,{relatedTarget:0}),mo=rn(ps),Kl=y({},rt,{animationName:0,elapsedTime:0,pseudoElement:0}),po=rn(Kl),Kc=y({},rt,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),go=rn(Kc),Cm=y({},rt,{data:0}),Xl=rn(Cm),gs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wl(r){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(r):(r=Wc[r])?!!a[r]:!1}function ys(){return Wl}var Zc=y({},ds,{key:function(r){if(r.key){var a=gs[r.key]||r.key;if(a!=="Unidentified")return a}return r.type==="keypress"?(r=Ur(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Xc[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(r){return r.type==="keypress"?Ur(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ur(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),yo=rn(Zc),Jc=y({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zl=rn(Jc),Ei=y({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),eh=rn(Ei),th=y({},rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),nh=rn(th),rh=y({},ms,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),vo=rn(rh),Nn=y({},rt,{newState:0,oldState:0}),ih=rn(Nn),ah=[9,13,27,32],Fr=Tr&&"CompositionEvent"in window,h=null;Tr&&"documentMode"in document&&(h=document.documentMode);var v=Tr&&"TextEvent"in window&&!h,_=Tr&&(!Fr||h&&8<h&&11>=h),R=" ",G=!1;function ee(r,a){switch(r){case"keyup":return ah.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ye=!1;function Yt(r,a){switch(r){case"compositionend":return he(a);case"keypress":return a.which!==32?null:(G=!0,R);case"textInput":return r=a.data,r===R&&G?null:r;default:return null}}function Ke(r,a){if(Ye)return r==="compositionend"||!Fr&&ee(r,a)?(r=Ql(),Si=ua=jr=null,Ye=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return _&&a.locale!=="ko"?null:a.data;default:return null}}var an={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kt(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a==="input"?!!an[r.type]:a==="textarea"}function Ti(r,a,o,u){bi?_i?_i.push(u):_i=[u]:bi=u,a=qh(a,"onChange"),0<a.length&&(o=new co("onChange","change",null,o,u),r.push({event:o,listeners:a}))}var pn=null,Hr=null;function Jl(r){K1(r,0)}function sh(r){var a=Nr(r);if(Fl(a))return r}function g0(r,a){if(r==="change")return a}var y0=!1;if(Tr){var Rm;if(Tr){var Im="oninput"in document;if(!Im){var v0=document.createElement("div");v0.setAttribute("oninput","return;"),Im=typeof v0.oninput=="function"}Rm=Im}else Rm=!1;y0=Rm&&(!document.documentMode||9<document.documentMode)}function b0(){pn&&(pn.detachEvent("onpropertychange",_0),Hr=pn=null)}function _0(r){if(r.propertyName==="value"&&sh(Hr)){var a=[];Ti(a,Hr,r,lr(r)),Gc(Jl,a)}}function zC(r,a,o){r==="focusin"?(b0(),pn=a,Hr=o,pn.attachEvent("onpropertychange",_0)):r==="focusout"&&b0()}function BC(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return sh(Hr)}function FC(r,a){if(r==="click")return sh(a)}function HC(r,a){if(r==="input"||r==="change")return sh(a)}function qC(r,a){return r===a&&(r!==0||1/r===1/a)||r!==r&&a!==a}var Yn=typeof Object.is=="function"?Object.is:qC;function eu(r,a){if(Yn(r,a))return!0;if(typeof r!="object"||r===null||typeof a!="object"||a===null)return!1;var o=Object.keys(r),u=Object.keys(a);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!vt.call(a,f)||!Yn(r[f],a[f]))return!1}return!0}function S0(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function E0(r,a){var o=S0(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=a&&u>=a)return{node:o,offset:a-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=S0(o)}}function T0(r,a){return r&&a?r===a?!0:r&&r.nodeType===3?!1:a&&a.nodeType===3?T0(r,a.parentNode):"contains"in r?r.contains(a):r.compareDocumentPosition?!!(r.compareDocumentPosition(a)&16):!1:!1}function w0(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var a=os(r.document);a instanceof r.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)r=a.contentWindow;else break;a=os(r.document)}return a}function Om(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a&&(a==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||a==="textarea"||r.contentEditable==="true")}var GC=Tr&&"documentMode"in document&&11>=document.documentMode,bo=null,Dm=null,tu=null,Pm=!1;function x0(r,a,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Pm||bo==null||bo!==os(u)||(u=bo,"selectionStart"in u&&Om(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),tu&&eu(tu,u)||(tu=u,u=qh(Dm,"onSelect"),0<u.length&&(a=new co("onSelect","select",null,a,o),r.push({event:a,listeners:u}),a.target=bo)))}function vs(r,a){var o={};return o[r.toLowerCase()]=a.toLowerCase(),o["Webkit"+r]="webkit"+a,o["Moz"+r]="moz"+a,o}var _o={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},Mm={},A0={};Tr&&(A0=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);function bs(r){if(Mm[r])return Mm[r];if(!_o[r])return r;var a=_o[r],o;for(o in a)if(a.hasOwnProperty(o)&&o in A0)return Mm[r]=a[o];return r}var C0=bs("animationend"),R0=bs("animationiteration"),I0=bs("animationstart"),QC=bs("transitionrun"),YC=bs("transitionstart"),KC=bs("transitioncancel"),O0=bs("transitionend"),D0=new Map,km="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");km.push("scrollEnd");function wr(r,a){D0.set(r,a),Er(a,[r])}var P0=new WeakMap;function hr(r,a){if(typeof r=="object"&&r!==null){var o=P0.get(r);return o!==void 0?o:(a={value:r,source:a,stack:oo(a)},P0.set(r,a),a)}return{value:r,source:a,stack:oo(a)}}var fr=[],So=0,Vm=0;function oh(){for(var r=So,a=Vm=So=0;a<r;){var o=fr[a];fr[a++]=null;var u=fr[a];fr[a++]=null;var f=fr[a];fr[a++]=null;var g=fr[a];if(fr[a++]=null,u!==null&&f!==null){var S=u.pending;S===null?f.next=f:(f.next=S.next,S.next=f),u.pending=f}g!==0&&M0(o,f,g)}}function lh(r,a,o,u){fr[So++]=r,fr[So++]=a,fr[So++]=o,fr[So++]=u,Vm|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function Nm(r,a,o,u){return lh(r,a,o,u),uh(r)}function Eo(r,a){return lh(r,null,null,a),uh(r)}function M0(r,a,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,g=r.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(r=g.stateNode,r===null||r._visibility&1||(f=!0)),r=g,g=g.return;return r.tag===3?(g=r.stateNode,f&&a!==null&&(f=31-wn(o),r=g.hiddenUpdates,u=r[f],u===null?r[f]=[a]:u.push(a),a.lane=o|536870912),g):null}function uh(r){if(50<Au)throw Au=0,Bp=null,Error(i(185));for(var a=r.return;a!==null;)r=a,a=r.return;return r.tag===3?r.stateNode:null}var To={};function XC(r,a,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(r,a,o,u){return new XC(r,a,o,u)}function $m(r){return r=r.prototype,!(!r||!r.isReactComponent)}function wi(r,a){var o=r.alternate;return o===null?(o=Kn(r.tag,a,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=a,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,a=r.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function k0(r,a){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=a,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,a=o.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),r}function ch(r,a,o,u,f,g){var S=0;if(u=r,typeof r=="function")$m(r)&&(S=1);else if(typeof r=="string")S=ZR(r,o,me.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case x:return r=Kn(31,o,a,f),r.elementType=x,r.lanes=g,r;case P:return _s(o.children,f,g,a);case k:S=8,f|=24;break;case D:return r=Kn(12,o,a,f|2),r.elementType=D,r.lanes=g,r;case L:return r=Kn(13,o,a,f),r.elementType=L,r.lanes=g,r;case K:return r=Kn(19,o,a,f),r.elementType=K,r.lanes=g,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case $:case F:S=10;break e;case H:S=9;break e;case te:S=11;break e;case C:S=14;break e;case w:S=16,u=null;break e}S=29,o=Error(i(130,r===null?"null":typeof r,"")),u=null}return a=Kn(S,o,a,f),a.elementType=r,a.type=u,a.lanes=g,a}function _s(r,a,o,u){return r=Kn(7,r,u,a),r.lanes=o,r}function Lm(r,a,o){return r=Kn(6,r,null,a),r.lanes=o,r}function jm(r,a,o){return a=Kn(4,r.children!==null?r.children:[],r.key,a),a.lanes=o,a.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},a}var wo=[],xo=0,hh=null,fh=0,dr=[],mr=0,Ss=null,xi=1,Ai="";function Es(r,a){wo[xo++]=fh,wo[xo++]=hh,hh=r,fh=a}function V0(r,a,o){dr[mr++]=xi,dr[mr++]=Ai,dr[mr++]=Ss,Ss=r;var u=xi;r=Ai;var f=32-wn(u)-1;u&=~(1<<f),o+=1;var g=32-wn(a)+f;if(30<g){var S=f-f%5;g=(u&(1<<S)-1).toString(32),u>>=S,f-=S,xi=1<<32-wn(a)+f|o<<f|u,Ai=g+r}else xi=1<<g|o<<f|u,Ai=r}function Um(r){r.return!==null&&(Es(r,1),V0(r,1,0))}function zm(r){for(;r===hh;)hh=wo[--xo],wo[xo]=null,fh=wo[--xo],wo[xo]=null;for(;r===Ss;)Ss=dr[--mr],dr[mr]=null,Ai=dr[--mr],dr[mr]=null,xi=dr[--mr],dr[mr]=null}var $n=null,Dt=null,et=!1,Ts=null,qr=!1,Bm=Error(i(519));function ws(r){var a=Error(i(418,""));throw iu(hr(a,r)),Bm}function N0(r){var a=r.stateNode,o=r.type,u=r.memoizedProps;switch(a[Qt]=r,a[Lt]=u,o){case"dialog":Fe("cancel",a),Fe("close",a);break;case"iframe":case"object":case"embed":Fe("load",a);break;case"video":case"audio":for(o=0;o<Ru.length;o++)Fe(Ru[o],a);break;case"source":Fe("error",a);break;case"img":case"image":case"link":Fe("error",a),Fe("load",a);break;case"details":Fe("toggle",a);break;case"input":Fe("invalid",a),ls(a,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),lo(a);break;case"select":Fe("invalid",a);break;case"textarea":Fe("invalid",a),us(a,u.value,u.defaultValue,u.children),lo(a)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||u.suppressHydrationWarning===!0||J1(a.textContent,o)?(u.popover!=null&&(Fe("beforetoggle",a),Fe("toggle",a)),u.onScroll!=null&&Fe("scroll",a),u.onScrollEnd!=null&&Fe("scrollend",a),u.onClick!=null&&(a.onclick=Gh),a=!0):a=!1,a||ws(r)}function $0(r){for($n=r.return;$n;)switch($n.tag){case 5:case 13:qr=!1;return;case 27:case 3:qr=!0;return;default:$n=$n.return}}function nu(r){if(r!==$n)return!1;if(!et)return $0(r),et=!0,!1;var a=r.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||ig(r.type,r.memoizedProps)),o=!o),o&&Dt&&ws(r),$0(r),a===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,a=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(a===0){Dt=Ar(r.nextSibling);break e}a--}else o!=="$"&&o!=="$!"&&o!=="$?"||a++;r=r.nextSibling}Dt=null}}else a===27?(a=Dt,xa(r.type)?(r=lg,lg=null,Dt=r):Dt=a):Dt=$n?Ar(r.stateNode.nextSibling):null;return!0}function ru(){Dt=$n=null,et=!1}function L0(){var r=Ts;return r!==null&&(zn===null?zn=r:zn.push.apply(zn,r),Ts=null),r}function iu(r){Ts===null?Ts=[r]:Ts.push(r)}var Fm=J(null),xs=null,Ci=null;function ca(r,a,o){ae(Fm,a._currentValue),a._currentValue=o}function Ri(r){r._currentValue=Fm.current,ie(Fm)}function Hm(r,a,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&a)!==a?(r.childLanes|=a,u!==null&&(u.childLanes|=a)):u!==null&&(u.childLanes&a)!==a&&(u.childLanes|=a),r===o)break;r=r.return}}function qm(r,a,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var g=f.dependencies;if(g!==null){var S=f.child;g=g.firstContext;e:for(;g!==null;){var A=g;g=f;for(var U=0;U<a.length;U++)if(A.context===a[U]){g.lanes|=o,A=g.alternate,A!==null&&(A.lanes|=o),Hm(g.return,o,r),u||(S=null);break e}g=A.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(i(341));S.lanes|=o,g=S.alternate,g!==null&&(g.lanes|=o),Hm(S,o,r),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===r){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function au(r,a,o,u){r=null;for(var f=a,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(i(387));if(S=S.memoizedProps,S!==null){var A=f.type;Yn(f.pendingProps.value,S.value)||(r!==null?r.push(A):r=[A])}}else if(f===Qe.current){if(S=f.alternate,S===null)throw Error(i(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(ku):r=[ku])}f=f.return}r!==null&&qm(a,r,o,u),a.flags|=262144}function dh(r){for(r=r.firstContext;r!==null;){if(!Yn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function As(r){xs=r,Ci=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function xn(r){return j0(xs,r)}function mh(r,a){return xs===null&&As(r),j0(r,a)}function j0(r,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},Ci===null){if(r===null)throw Error(i(308));Ci=a,r.dependencies={lanes:0,firstContext:a},r.flags|=524288}else Ci=Ci.next=a;return o}var WC=typeof AbortController<"u"?AbortController:function(){var r=[],a=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){a.aborted=!0,r.forEach(function(o){return o()})}},ZC=t.unstable_scheduleCallback,JC=t.unstable_NormalPriority,Xt={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gm(){return{controller:new WC,data:new Map,refCount:0}}function su(r){r.refCount--,r.refCount===0&&ZC(JC,function(){r.controller.abort()})}var ou=null,Qm=0,Ao=0,Co=null;function eR(r,a){if(ou===null){var o=ou=[];Qm=0,Ao=Kp(),Co={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Qm++,a.then(U0,U0),a}function U0(){if(--Qm===0&&ou!==null){Co!==null&&(Co.status="fulfilled");var r=ou;ou=null,Ao=0,Co=null;for(var a=0;a<r.length;a++)(0,r[a])()}}function tR(r,a){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=a;for(var f=0;f<o.length;f++)(0,o[f])(a)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var z0=X.S;X.S=function(r,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&eR(r,a),z0!==null&&z0(r,a)};var Cs=J(null);function Ym(){var r=Cs.current;return r!==null?r:yt.pooledCache}function ph(r,a){a===null?ae(Cs,Cs.current):ae(Cs,a.pool)}function B0(){var r=Ym();return r===null?null:{parent:Xt._currentValue,pool:r}}var lu=Error(i(460)),F0=Error(i(474)),gh=Error(i(542)),Km={then:function(){}};function H0(r){return r=r.status,r==="fulfilled"||r==="rejected"}function yh(){}function q0(r,a,o){switch(o=r[o],o===void 0?r.push(a):o!==a&&(a.then(yh,yh),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw r=a.reason,Q0(r),r;default:if(typeof a.status=="string")a.then(yh,yh);else{if(r=yt,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=a,r.status="pending",r.then(function(u){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=u}},function(u){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=u}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw r=a.reason,Q0(r),r}throw uu=a,lu}}var uu=null;function G0(){if(uu===null)throw Error(i(459));var r=uu;return uu=null,r}function Q0(r){if(r===lu||r===gh)throw Error(i(483))}var ha=!1;function Xm(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wm(r,a){r=r.updateQueue,a.updateQueue===r&&(a.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function fa(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function da(r,a,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(lt&2)!==0){var f=u.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a,a=uh(r),M0(r,null,o),a}return lh(r,u,a,o),uh(r)}function cu(r,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var u=a.lanes;u&=r.pendingLanes,o|=u,a.lanes=o,Ll(r,o)}}function Zm(r,a){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var S={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?f=g=S:g=g.next=S,o=o.next}while(o!==null);g===null?f=g=a:g=g.next=a}else f=g=a;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=a:r.next=a,o.lastBaseUpdate=a}var Jm=!1;function hu(){if(Jm){var r=Co;if(r!==null)throw r}}function fu(r,a,o,u){Jm=!1;var f=r.updateQueue;ha=!1;var g=f.firstBaseUpdate,S=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var U=A,Y=U.next;U.next=null,S===null?g=Y:S.next=Y,S=U;var re=r.alternate;re!==null&&(re=re.updateQueue,A=re.lastBaseUpdate,A!==S&&(A===null?re.firstBaseUpdate=Y:A.next=Y,re.lastBaseUpdate=U))}if(g!==null){var oe=f.baseState;S=0,re=Y=U=null,A=g;do{var W=A.lane&-536870913,Z=W!==A.lane;if(Z?(Xe&W)===W:(u&W)===W){W!==0&&W===Ao&&(Jm=!0),re!==null&&(re=re.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var De=r,Ce=A;W=a;var dt=o;switch(Ce.tag){case 1:if(De=Ce.payload,typeof De=="function"){oe=De.call(dt,oe,W);break e}oe=De;break e;case 3:De.flags=De.flags&-65537|128;case 0:if(De=Ce.payload,W=typeof De=="function"?De.call(dt,oe,W):De,W==null)break e;oe=y({},oe,W);break e;case 2:ha=!0}}W=A.callback,W!==null&&(r.flags|=64,Z&&(r.flags|=8192),Z=f.callbacks,Z===null?f.callbacks=[W]:Z.push(W))}else Z={lane:W,tag:A.tag,payload:A.payload,callback:A.callback,next:null},re===null?(Y=re=Z,U=oe):re=re.next=Z,S|=W;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;Z=A,A=Z.next,Z.next=null,f.lastBaseUpdate=Z,f.shared.pending=null}}while(!0);re===null&&(U=oe),f.baseState=U,f.firstBaseUpdate=Y,f.lastBaseUpdate=re,g===null&&(f.shared.lanes=0),Sa|=S,r.lanes=S,r.memoizedState=oe}}function Y0(r,a){if(typeof r!="function")throw Error(i(191,r));r.call(a)}function K0(r,a){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)Y0(o[r],a)}var Ro=J(null),vh=J(0);function X0(r,a){r=Vi,ae(vh,r),ae(Ro,a),Vi=r|a.baseLanes}function ep(){ae(vh,Vi),ae(Ro,Ro.current)}function tp(){Vi=vh.current,ie(Ro),ie(vh)}var ma=0,je=null,ht=null,Ut=null,bh=!1,Io=!1,Rs=!1,_h=0,du=0,Oo=null,nR=0;function Vt(){throw Error(i(321))}function np(r,a){if(a===null)return!1;for(var o=0;o<a.length&&o<r.length;o++)if(!Yn(r[o],a[o]))return!1;return!0}function rp(r,a,o,u,f,g){return ma=g,je=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,X.H=r===null||r.memoizedState===null?Mb:kb,Rs=!1,g=o(u,f),Rs=!1,Io&&(g=Z0(a,o,u,f)),W0(r),g}function W0(r){X.H=Ah;var a=ht!==null&&ht.next!==null;if(ma=0,Ut=ht=je=null,bh=!1,du=0,Oo=null,a)throw Error(i(300));r===null||sn||(r=r.dependencies,r!==null&&dh(r)&&(sn=!0))}function Z0(r,a,o,u){je=r;var f=0;do{if(Io&&(Oo=null),du=0,Io=!1,25<=f)throw Error(i(301));if(f+=1,Ut=ht=null,r.updateQueue!=null){var g=r.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}X.H=uR,g=a(o,u)}while(Io);return g}function rR(){var r=X.H,a=r.useState()[0];return a=typeof a.then=="function"?mu(a):a,r=r.useState()[0],(ht!==null?ht.memoizedState:null)!==r&&(je.flags|=1024),a}function ip(){var r=_h!==0;return _h=0,r}function ap(r,a,o){a.updateQueue=r.updateQueue,a.flags&=-2053,r.lanes&=~o}function sp(r){if(bh){for(r=r.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}bh=!1}ma=0,Ut=ht=je=null,Io=!1,du=_h=0,Oo=null}function jn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?je.memoizedState=Ut=r:Ut=Ut.next=r,Ut}function zt(){if(ht===null){var r=je.alternate;r=r!==null?r.memoizedState:null}else r=ht.next;var a=Ut===null?je.memoizedState:Ut.next;if(a!==null)Ut=a,ht=r;else{if(r===null)throw je.alternate===null?Error(i(467)):Error(i(310));ht=r,r={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},Ut===null?je.memoizedState=Ut=r:Ut=Ut.next=r}return Ut}function op(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mu(r){var a=du;return du+=1,Oo===null&&(Oo=[]),r=q0(Oo,r,a),a=je,(Ut===null?a.memoizedState:Ut.next)===null&&(a=a.alternate,X.H=a===null||a.memoizedState===null?Mb:kb),r}function Sh(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return mu(r);if(r.$$typeof===F)return xn(r)}throw Error(i(438,String(r)))}function lp(r){var a=null,o=je.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var u=je.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(a={data:u.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=op(),je.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(r),u=0;u<r;u++)o[u]=M;return a.index++,o}function Ii(r,a){return typeof a=="function"?a(r):a}function Eh(r){var a=zt();return up(a,ht,r)}function up(r,a,o){var u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var f=r.baseQueue,g=u.pending;if(g!==null){if(f!==null){var S=f.next;f.next=g.next,g.next=S}a.baseQueue=f=g,u.pending=null}if(g=r.baseState,f===null)r.memoizedState=g;else{a=f.next;var A=S=null,U=null,Y=a,re=!1;do{var oe=Y.lane&-536870913;if(oe!==Y.lane?(Xe&oe)===oe:(ma&oe)===oe){var W=Y.revertLane;if(W===0)U!==null&&(U=U.next={lane:0,revertLane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),oe===Ao&&(re=!0);else if((ma&W)===W){Y=Y.next,W===Ao&&(re=!0);continue}else oe={lane:0,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},U===null?(A=U=oe,S=g):U=U.next=oe,je.lanes|=W,Sa|=W;oe=Y.action,Rs&&o(g,oe),g=Y.hasEagerState?Y.eagerState:o(g,oe)}else W={lane:oe,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},U===null?(A=U=W,S=g):U=U.next=W,je.lanes|=oe,Sa|=oe;Y=Y.next}while(Y!==null&&Y!==a);if(U===null?S=g:U.next=A,!Yn(g,r.memoizedState)&&(sn=!0,re&&(o=Co,o!==null)))throw o;r.memoizedState=g,r.baseState=S,r.baseQueue=U,u.lastRenderedState=g}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function cp(r){var a=zt(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,g=a.memoizedState;if(f!==null){o.pending=null;var S=f=f.next;do g=r(g,S.action),S=S.next;while(S!==f);Yn(g,a.memoizedState)||(sn=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),o.lastRenderedState=g}return[g,u]}function J0(r,a,o){var u=je,f=zt(),g=et;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=a();var S=!Yn((ht||f).memoizedState,o);S&&(f.memoizedState=o,sn=!0),f=f.queue;var A=nb.bind(null,u,f,r);if(pu(2048,8,A,[r]),f.getSnapshot!==a||S||Ut!==null&&Ut.memoizedState.tag&1){if(u.flags|=2048,Do(9,Th(),tb.bind(null,u,f,o,a),null),yt===null)throw Error(i(349));g||(ma&124)!==0||eb(u,a,o)}return o}function eb(r,a,o){r.flags|=16384,r={getSnapshot:a,value:o},a=je.updateQueue,a===null?(a=op(),je.updateQueue=a,a.stores=[r]):(o=a.stores,o===null?a.stores=[r]:o.push(r))}function tb(r,a,o,u){a.value=o,a.getSnapshot=u,rb(a)&&ib(r)}function nb(r,a,o){return o(function(){rb(a)&&ib(r)})}function rb(r){var a=r.getSnapshot;r=r.value;try{var o=a();return!Yn(r,o)}catch{return!0}}function ib(r){var a=Eo(r,2);a!==null&&er(a,r,2)}function hp(r){var a=jn();if(typeof r=="function"){var o=r;if(r=o(),Rs){Gn(!0);try{o()}finally{Gn(!1)}}}return a.memoizedState=a.baseState=r,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:r},a}function ab(r,a,o,u){return r.baseState=o,up(r,ht,typeof u=="function"?u:Ii)}function iR(r,a,o,u,f){if(xh(r))throw Error(i(485));if(r=a.action,r!==null){var g={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){g.listeners.push(S)}};X.T!==null?o(!0):g.isTransition=!1,u(g),o=a.pending,o===null?(g.next=a.pending=g,sb(a,g)):(g.next=o.next,a.pending=o.next=g)}}function sb(r,a){var o=a.action,u=a.payload,f=r.state;if(a.isTransition){var g=X.T,S={};X.T=S;try{var A=o(f,u),U=X.S;U!==null&&U(S,A),ob(r,a,A)}catch(Y){fp(r,a,Y)}finally{X.T=g}}else try{g=o(f,u),ob(r,a,g)}catch(Y){fp(r,a,Y)}}function ob(r,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){lb(r,a,u)},function(u){return fp(r,a,u)}):lb(r,a,o)}function lb(r,a,o){a.status="fulfilled",a.value=o,ub(a),r.state=o,a=r.pending,a!==null&&(o=a.next,o===a?r.pending=null:(o=o.next,a.next=o,sb(r,o)))}function fp(r,a,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do a.status="rejected",a.reason=o,ub(a),a=a.next;while(a!==u)}r.action=null}function ub(r){r=r.listeners;for(var a=0;a<r.length;a++)(0,r[a])()}function cb(r,a){return a}function hb(r,a){if(et){var o=yt.formState;if(o!==null){e:{var u=je;if(et){if(Dt){t:{for(var f=Dt,g=qr;f.nodeType!==8;){if(!g){f=null;break t}if(f=Ar(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){Dt=Ar(f.nextSibling),u=f.data==="F!";break e}}ws(u)}u=!1}u&&(a=o[0])}}return o=jn(),o.memoizedState=o.baseState=a,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cb,lastRenderedState:a},o.queue=u,o=Ob.bind(null,je,u),u.dispatch=o,u=hp(!1),g=yp.bind(null,je,!1,u.queue),u=jn(),f={state:a,dispatch:null,action:r,pending:null},u.queue=f,o=iR.bind(null,je,f,g,o),f.dispatch=o,u.memoizedState=r,[a,o,!1]}function fb(r){var a=zt();return db(a,ht,r)}function db(r,a,o){if(a=up(r,a,cb)[0],r=Eh(Ii)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var u=mu(a)}catch(S){throw S===lu?gh:S}else u=a;a=zt();var f=a.queue,g=f.dispatch;return o!==a.memoizedState&&(je.flags|=2048,Do(9,Th(),aR.bind(null,f,o),null)),[u,g,r]}function aR(r,a){r.action=a}function mb(r){var a=zt(),o=ht;if(o!==null)return db(a,o,r);zt(),a=a.memoizedState,o=zt();var u=o.queue.dispatch;return o.memoizedState=r,[a,u,!1]}function Do(r,a,o,u){return r={tag:r,create:o,deps:u,inst:a,next:null},a=je.updateQueue,a===null&&(a=op(),je.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,a.lastEffect=r),r}function Th(){return{destroy:void 0,resource:void 0}}function pb(){return zt().memoizedState}function wh(r,a,o,u){var f=jn();u=u===void 0?null:u,je.flags|=r,f.memoizedState=Do(1|a,Th(),o,u)}function pu(r,a,o,u){var f=zt();u=u===void 0?null:u;var g=f.memoizedState.inst;ht!==null&&u!==null&&np(u,ht.memoizedState.deps)?f.memoizedState=Do(a,g,o,u):(je.flags|=r,f.memoizedState=Do(1|a,g,o,u))}function gb(r,a){wh(8390656,8,r,a)}function yb(r,a){pu(2048,8,r,a)}function vb(r,a){return pu(4,2,r,a)}function bb(r,a){return pu(4,4,r,a)}function _b(r,a){if(typeof a=="function"){r=r();var o=a(r);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return r=r(),a.current=r,function(){a.current=null}}function Sb(r,a,o){o=o!=null?o.concat([r]):null,pu(4,4,_b.bind(null,a,r),o)}function dp(){}function Eb(r,a){var o=zt();a=a===void 0?null:a;var u=o.memoizedState;return a!==null&&np(a,u[1])?u[0]:(o.memoizedState=[r,a],r)}function Tb(r,a){var o=zt();a=a===void 0?null:a;var u=o.memoizedState;if(a!==null&&np(a,u[1]))return u[0];if(u=r(),Rs){Gn(!0);try{r()}finally{Gn(!1)}}return o.memoizedState=[u,a],u}function mp(r,a,o){return o===void 0||(ma&1073741824)!==0?r.memoizedState=a:(r.memoizedState=o,r=A1(),je.lanes|=r,Sa|=r,o)}function wb(r,a,o,u){return Yn(o,a)?o:Ro.current!==null?(r=mp(r,o,u),Yn(r,a)||(sn=!0),r):(ma&42)===0?(sn=!0,r.memoizedState=o):(r=A1(),je.lanes|=r,Sa|=r,a)}function xb(r,a,o,u,f){var g=ce.p;ce.p=g!==0&&8>g?g:8;var S=X.T,A={};X.T=A,yp(r,!1,a,o);try{var U=f(),Y=X.S;if(Y!==null&&Y(A,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var re=tR(U,u);gu(r,a,re,Jn(r))}else gu(r,a,u,Jn(r))}catch(oe){gu(r,a,{then:function(){},status:"rejected",reason:oe},Jn())}finally{ce.p=g,X.T=S}}function sR(){}function pp(r,a,o,u){if(r.tag!==5)throw Error(i(476));var f=Ab(r).queue;xb(r,f,a,de,o===null?sR:function(){return Cb(r),o(u)})}function Ab(r){var a=r.memoizedState;if(a!==null)return a;a={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:de},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:o},next:null},r.memoizedState=a,r=r.alternate,r!==null&&(r.memoizedState=a),a}function Cb(r){var a=Ab(r).next.queue;gu(r,a,{},Jn())}function gp(){return xn(ku)}function Rb(){return zt().memoizedState}function Ib(){return zt().memoizedState}function oR(r){for(var a=r.return;a!==null;){switch(a.tag){case 24:case 3:var o=Jn();r=fa(o);var u=da(a,r,o);u!==null&&(er(u,a,o),cu(u,a,o)),a={cache:Gm()},r.payload=a;return}a=a.return}}function lR(r,a,o){var u=Jn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},xh(r)?Db(a,o):(o=Nm(r,a,o,u),o!==null&&(er(o,r,u),Pb(o,a,u)))}function Ob(r,a,o){var u=Jn();gu(r,a,o,u)}function gu(r,a,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(xh(r))Db(a,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var S=a.lastRenderedState,A=g(S,o);if(f.hasEagerState=!0,f.eagerState=A,Yn(A,S))return lh(r,a,f,0),yt===null&&oh(),!1}catch{}finally{}if(o=Nm(r,a,f,u),o!==null)return er(o,r,u),Pb(o,a,u),!0}return!1}function yp(r,a,o,u){if(u={lane:2,revertLane:Kp(),action:u,hasEagerState:!1,eagerState:null,next:null},xh(r)){if(a)throw Error(i(479))}else a=Nm(r,o,u,2),a!==null&&er(a,r,2)}function xh(r){var a=r.alternate;return r===je||a!==null&&a===je}function Db(r,a){Io=bh=!0;var o=r.pending;o===null?a.next=a:(a.next=o.next,o.next=a),r.pending=a}function Pb(r,a,o){if((o&4194048)!==0){var u=a.lanes;u&=r.pendingLanes,o|=u,a.lanes=o,Ll(r,o)}}var Ah={readContext:xn,use:Sh,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useInsertionEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useSyncExternalStore:Vt,useId:Vt,useHostTransitionStatus:Vt,useFormState:Vt,useActionState:Vt,useOptimistic:Vt,useMemoCache:Vt,useCacheRefresh:Vt},Mb={readContext:xn,use:Sh,useCallback:function(r,a){return jn().memoizedState=[r,a===void 0?null:a],r},useContext:xn,useEffect:gb,useImperativeHandle:function(r,a,o){o=o!=null?o.concat([r]):null,wh(4194308,4,_b.bind(null,a,r),o)},useLayoutEffect:function(r,a){return wh(4194308,4,r,a)},useInsertionEffect:function(r,a){wh(4,2,r,a)},useMemo:function(r,a){var o=jn();a=a===void 0?null:a;var u=r();if(Rs){Gn(!0);try{r()}finally{Gn(!1)}}return o.memoizedState=[u,a],u},useReducer:function(r,a,o){var u=jn();if(o!==void 0){var f=o(a);if(Rs){Gn(!0);try{o(a)}finally{Gn(!1)}}}else f=a;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=lR.bind(null,je,r),[u.memoizedState,r]},useRef:function(r){var a=jn();return r={current:r},a.memoizedState=r},useState:function(r){r=hp(r);var a=r.queue,o=Ob.bind(null,je,a);return a.dispatch=o,[r.memoizedState,o]},useDebugValue:dp,useDeferredValue:function(r,a){var o=jn();return mp(o,r,a)},useTransition:function(){var r=hp(!1);return r=xb.bind(null,je,r.queue,!0,!1),jn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,a,o){var u=je,f=jn();if(et){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),yt===null)throw Error(i(349));(Xe&124)!==0||eb(u,a,o)}f.memoizedState=o;var g={value:o,getSnapshot:a};return f.queue=g,gb(nb.bind(null,u,g,r),[r]),u.flags|=2048,Do(9,Th(),tb.bind(null,u,g,o,a),null),o},useId:function(){var r=jn(),a=yt.identifierPrefix;if(et){var o=Ai,u=xi;o=(u&~(1<<32-wn(u)-1)).toString(32)+o,a="«"+a+"R"+o,o=_h++,0<o&&(a+="H"+o.toString(32)),a+="»"}else o=nR++,a="«"+a+"r"+o.toString(32)+"»";return r.memoizedState=a},useHostTransitionStatus:gp,useFormState:hb,useActionState:hb,useOptimistic:function(r){var a=jn();a.memoizedState=a.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=yp.bind(null,je,!0,o),o.dispatch=a,[r,a]},useMemoCache:lp,useCacheRefresh:function(){return jn().memoizedState=oR.bind(null,je)}},kb={readContext:xn,use:Sh,useCallback:Eb,useContext:xn,useEffect:yb,useImperativeHandle:Sb,useInsertionEffect:vb,useLayoutEffect:bb,useMemo:Tb,useReducer:Eh,useRef:pb,useState:function(){return Eh(Ii)},useDebugValue:dp,useDeferredValue:function(r,a){var o=zt();return wb(o,ht.memoizedState,r,a)},useTransition:function(){var r=Eh(Ii)[0],a=zt().memoizedState;return[typeof r=="boolean"?r:mu(r),a]},useSyncExternalStore:J0,useId:Rb,useHostTransitionStatus:gp,useFormState:fb,useActionState:fb,useOptimistic:function(r,a){var o=zt();return ab(o,ht,r,a)},useMemoCache:lp,useCacheRefresh:Ib},uR={readContext:xn,use:Sh,useCallback:Eb,useContext:xn,useEffect:yb,useImperativeHandle:Sb,useInsertionEffect:vb,useLayoutEffect:bb,useMemo:Tb,useReducer:cp,useRef:pb,useState:function(){return cp(Ii)},useDebugValue:dp,useDeferredValue:function(r,a){var o=zt();return ht===null?mp(o,r,a):wb(o,ht.memoizedState,r,a)},useTransition:function(){var r=cp(Ii)[0],a=zt().memoizedState;return[typeof r=="boolean"?r:mu(r),a]},useSyncExternalStore:J0,useId:Rb,useHostTransitionStatus:gp,useFormState:mb,useActionState:mb,useOptimistic:function(r,a){var o=zt();return ht!==null?ab(o,ht,r,a):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:lp,useCacheRefresh:Ib},Po=null,yu=0;function Ch(r){var a=yu;return yu+=1,Po===null&&(Po=[]),q0(Po,r,a)}function vu(r,a){a=a.props.ref,r.ref=a!==void 0?a:null}function Rh(r,a){throw a.$$typeof===b?Error(i(525)):(r=Object.prototype.toString.call(a),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":r)))}function Vb(r){var a=r._init;return a(r._payload)}function Nb(r){function a(q,B){if(r){var Q=q.deletions;Q===null?(q.deletions=[B],q.flags|=16):Q.push(B)}}function o(q,B){if(!r)return null;for(;B!==null;)a(q,B),B=B.sibling;return null}function u(q){for(var B=new Map;q!==null;)q.key!==null?B.set(q.key,q):B.set(q.index,q),q=q.sibling;return B}function f(q,B){return q=wi(q,B),q.index=0,q.sibling=null,q}function g(q,B,Q){return q.index=Q,r?(Q=q.alternate,Q!==null?(Q=Q.index,Q<B?(q.flags|=67108866,B):Q):(q.flags|=67108866,B)):(q.flags|=1048576,B)}function S(q){return r&&q.alternate===null&&(q.flags|=67108866),q}function A(q,B,Q,se){return B===null||B.tag!==6?(B=Lm(Q,q.mode,se),B.return=q,B):(B=f(B,Q),B.return=q,B)}function U(q,B,Q,se){var ye=Q.type;return ye===P?re(q,B,Q.props.children,se,Q.key):B!==null&&(B.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===w&&Vb(ye)===B.type)?(B=f(B,Q.props),vu(B,Q),B.return=q,B):(B=ch(Q.type,Q.key,Q.props,null,q.mode,se),vu(B,Q),B.return=q,B)}function Y(q,B,Q,se){return B===null||B.tag!==4||B.stateNode.containerInfo!==Q.containerInfo||B.stateNode.implementation!==Q.implementation?(B=jm(Q,q.mode,se),B.return=q,B):(B=f(B,Q.children||[]),B.return=q,B)}function re(q,B,Q,se,ye){return B===null||B.tag!==7?(B=_s(Q,q.mode,se,ye),B.return=q,B):(B=f(B,Q),B.return=q,B)}function oe(q,B,Q){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=Lm(""+B,q.mode,Q),B.return=q,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case E:return Q=ch(B.type,B.key,B.props,null,q.mode,Q),vu(Q,B),Q.return=q,Q;case I:return B=jm(B,q.mode,Q),B.return=q,B;case w:var se=B._init;return B=se(B._payload),oe(q,B,Q)}if(fe(B)||j(B))return B=_s(B,q.mode,Q,null),B.return=q,B;if(typeof B.then=="function")return oe(q,Ch(B),Q);if(B.$$typeof===F)return oe(q,mh(q,B),Q);Rh(q,B)}return null}function W(q,B,Q,se){var ye=B!==null?B.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return ye!==null?null:A(q,B,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return Q.key===ye?U(q,B,Q,se):null;case I:return Q.key===ye?Y(q,B,Q,se):null;case w:return ye=Q._init,Q=ye(Q._payload),W(q,B,Q,se)}if(fe(Q)||j(Q))return ye!==null?null:re(q,B,Q,se,null);if(typeof Q.then=="function")return W(q,B,Ch(Q),se);if(Q.$$typeof===F)return W(q,B,mh(q,Q),se);Rh(q,Q)}return null}function Z(q,B,Q,se,ye){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return q=q.get(Q)||null,A(B,q,""+se,ye);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case E:return q=q.get(se.key===null?Q:se.key)||null,U(B,q,se,ye);case I:return q=q.get(se.key===null?Q:se.key)||null,Y(B,q,se,ye);case w:var ze=se._init;return se=ze(se._payload),Z(q,B,Q,se,ye)}if(fe(se)||j(se))return q=q.get(Q)||null,re(B,q,se,ye,null);if(typeof se.then=="function")return Z(q,B,Q,Ch(se),ye);if(se.$$typeof===F)return Z(q,B,Q,mh(B,se),ye);Rh(B,se)}return null}function De(q,B,Q,se){for(var ye=null,ze=null,Se=B,Re=B=0,ln=null;Se!==null&&Re<Q.length;Re++){Se.index>Re?(ln=Se,Se=null):ln=Se.sibling;var Je=W(q,Se,Q[Re],se);if(Je===null){Se===null&&(Se=ln);break}r&&Se&&Je.alternate===null&&a(q,Se),B=g(Je,B,Re),ze===null?ye=Je:ze.sibling=Je,ze=Je,Se=ln}if(Re===Q.length)return o(q,Se),et&&Es(q,Re),ye;if(Se===null){for(;Re<Q.length;Re++)Se=oe(q,Q[Re],se),Se!==null&&(B=g(Se,B,Re),ze===null?ye=Se:ze.sibling=Se,ze=Se);return et&&Es(q,Re),ye}for(Se=u(Se);Re<Q.length;Re++)ln=Z(Se,q,Re,Q[Re],se),ln!==null&&(r&&ln.alternate!==null&&Se.delete(ln.key===null?Re:ln.key),B=g(ln,B,Re),ze===null?ye=ln:ze.sibling=ln,ze=ln);return r&&Se.forEach(function(Oa){return a(q,Oa)}),et&&Es(q,Re),ye}function Ce(q,B,Q,se){if(Q==null)throw Error(i(151));for(var ye=null,ze=null,Se=B,Re=B=0,ln=null,Je=Q.next();Se!==null&&!Je.done;Re++,Je=Q.next()){Se.index>Re?(ln=Se,Se=null):ln=Se.sibling;var Oa=W(q,Se,Je.value,se);if(Oa===null){Se===null&&(Se=ln);break}r&&Se&&Oa.alternate===null&&a(q,Se),B=g(Oa,B,Re),ze===null?ye=Oa:ze.sibling=Oa,ze=Oa,Se=ln}if(Je.done)return o(q,Se),et&&Es(q,Re),ye;if(Se===null){for(;!Je.done;Re++,Je=Q.next())Je=oe(q,Je.value,se),Je!==null&&(B=g(Je,B,Re),ze===null?ye=Je:ze.sibling=Je,ze=Je);return et&&Es(q,Re),ye}for(Se=u(Se);!Je.done;Re++,Je=Q.next())Je=Z(Se,q,Re,Je.value,se),Je!==null&&(r&&Je.alternate!==null&&Se.delete(Je.key===null?Re:Je.key),B=g(Je,B,Re),ze===null?ye=Je:ze.sibling=Je,ze=Je);return r&&Se.forEach(function(cI){return a(q,cI)}),et&&Es(q,Re),ye}function dt(q,B,Q,se){if(typeof Q=="object"&&Q!==null&&Q.type===P&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:e:{for(var ye=Q.key;B!==null;){if(B.key===ye){if(ye=Q.type,ye===P){if(B.tag===7){o(q,B.sibling),se=f(B,Q.props.children),se.return=q,q=se;break e}}else if(B.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===w&&Vb(ye)===B.type){o(q,B.sibling),se=f(B,Q.props),vu(se,Q),se.return=q,q=se;break e}o(q,B);break}else a(q,B);B=B.sibling}Q.type===P?(se=_s(Q.props.children,q.mode,se,Q.key),se.return=q,q=se):(se=ch(Q.type,Q.key,Q.props,null,q.mode,se),vu(se,Q),se.return=q,q=se)}return S(q);case I:e:{for(ye=Q.key;B!==null;){if(B.key===ye)if(B.tag===4&&B.stateNode.containerInfo===Q.containerInfo&&B.stateNode.implementation===Q.implementation){o(q,B.sibling),se=f(B,Q.children||[]),se.return=q,q=se;break e}else{o(q,B);break}else a(q,B);B=B.sibling}se=jm(Q,q.mode,se),se.return=q,q=se}return S(q);case w:return ye=Q._init,Q=ye(Q._payload),dt(q,B,Q,se)}if(fe(Q))return De(q,B,Q,se);if(j(Q)){if(ye=j(Q),typeof ye!="function")throw Error(i(150));return Q=ye.call(Q),Ce(q,B,Q,se)}if(typeof Q.then=="function")return dt(q,B,Ch(Q),se);if(Q.$$typeof===F)return dt(q,B,mh(q,Q),se);Rh(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,B!==null&&B.tag===6?(o(q,B.sibling),se=f(B,Q),se.return=q,q=se):(o(q,B),se=Lm(Q,q.mode,se),se.return=q,q=se),S(q)):o(q,B)}return function(q,B,Q,se){try{yu=0;var ye=dt(q,B,Q,se);return Po=null,ye}catch(Se){if(Se===lu||Se===gh)throw Se;var ze=Kn(29,Se,null,q.mode);return ze.lanes=se,ze.return=q,ze}finally{}}}var Mo=Nb(!0),$b=Nb(!1),pr=J(null),Gr=null;function pa(r){var a=r.alternate;ae(Wt,Wt.current&1),ae(pr,r),Gr===null&&(a===null||Ro.current!==null||a.memoizedState!==null)&&(Gr=r)}function Lb(r){if(r.tag===22){if(ae(Wt,Wt.current),ae(pr,r),Gr===null){var a=r.alternate;a!==null&&a.memoizedState!==null&&(Gr=r)}}else ga()}function ga(){ae(Wt,Wt.current),ae(pr,pr.current)}function Oi(r){ie(pr),Gr===r&&(Gr=null),ie(Wt)}var Wt=J(0);function Ih(r){for(var a=r;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||og(o)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function vp(r,a,o,u){a=r.memoizedState,o=o(u,a),o=o==null?a:y({},a,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var bp={enqueueSetState:function(r,a,o){r=r._reactInternals;var u=Jn(),f=fa(u);f.payload=a,o!=null&&(f.callback=o),a=da(r,f,u),a!==null&&(er(a,r,u),cu(a,r,u))},enqueueReplaceState:function(r,a,o){r=r._reactInternals;var u=Jn(),f=fa(u);f.tag=1,f.payload=a,o!=null&&(f.callback=o),a=da(r,f,u),a!==null&&(er(a,r,u),cu(a,r,u))},enqueueForceUpdate:function(r,a){r=r._reactInternals;var o=Jn(),u=fa(o);u.tag=2,a!=null&&(u.callback=a),a=da(r,u,o),a!==null&&(er(a,r,o),cu(a,r,o))}};function jb(r,a,o,u,f,g,S){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,g,S):a.prototype&&a.prototype.isPureReactComponent?!eu(o,u)||!eu(f,g):!0}function Ub(r,a,o,u){r=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,u),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,u),a.state!==r&&bp.enqueueReplaceState(a,a.state,null)}function Is(r,a){var o=a;if("ref"in a){o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}if(r=r.defaultProps){o===a&&(o=y({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var Oh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function zb(r){Oh(r)}function Bb(r){console.error(r)}function Fb(r){Oh(r)}function Dh(r,a){try{var o=r.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(u){setTimeout(function(){throw u})}}function Hb(r,a,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function _p(r,a,o){return o=fa(o),o.tag=3,o.payload={element:null},o.callback=function(){Dh(r,a)},o}function qb(r){return r=fa(r),r.tag=3,r}function Gb(r,a,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var g=u.value;r.payload=function(){return f(g)},r.callback=function(){Hb(a,o,u)}}var S=o.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(r.callback=function(){Hb(a,o,u),typeof f!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var A=u.stack;this.componentDidCatch(u.value,{componentStack:A!==null?A:""})})}function cR(r,a,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(a=o.alternate,a!==null&&au(a,o,f,!0),o=pr.current,o!==null){switch(o.tag){case 13:return Gr===null?Hp():o.alternate===null&&Pt===0&&(Pt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Km?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([u]):a.add(u),Gp(r,u,f)),!1;case 22:return o.flags|=65536,u===Km?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([u]):o.add(u)),Gp(r,u,f)),!1}throw Error(i(435,o.tag))}return Gp(r,u,f),Hp(),!1}if(et)return a=pr.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,u!==Bm&&(r=Error(i(422),{cause:u}),iu(hr(r,o)))):(u!==Bm&&(a=Error(i(423),{cause:u}),iu(hr(a,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=hr(u,o),f=_p(r.stateNode,u,f),Zm(r,f),Pt!==4&&(Pt=2)),!1;var g=Error(i(520),{cause:u});if(g=hr(g,o),xu===null?xu=[g]:xu.push(g),Pt!==4&&(Pt=2),a===null)return!0;u=hr(u,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=_p(o.stateNode,u,r),Zm(o,r),!1;case 1:if(a=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ea===null||!Ea.has(g))))return o.flags|=65536,f&=-f,o.lanes|=f,f=qb(f),Gb(f,r,o,u),Zm(o,f),!1}o=o.return}while(o!==null);return!1}var Qb=Error(i(461)),sn=!1;function gn(r,a,o,u){a.child=r===null?$b(a,null,o,u):Mo(a,r.child,o,u)}function Yb(r,a,o,u,f){o=o.render;var g=a.ref;if("ref"in u){var S={};for(var A in u)A!=="ref"&&(S[A]=u[A])}else S=u;return As(a),u=rp(r,a,o,S,g,f),A=ip(),r!==null&&!sn?(ap(r,a,f),Di(r,a,f)):(et&&A&&Um(a),a.flags|=1,gn(r,a,u,f),a.child)}function Kb(r,a,o,u,f){if(r===null){var g=o.type;return typeof g=="function"&&!$m(g)&&g.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=g,Xb(r,a,g,u,f)):(r=ch(o.type,null,u,a,a.mode,f),r.ref=a.ref,r.return=a,a.child=r)}if(g=r.child,!Rp(r,f)){var S=g.memoizedProps;if(o=o.compare,o=o!==null?o:eu,o(S,u)&&r.ref===a.ref)return Di(r,a,f)}return a.flags|=1,r=wi(g,u),r.ref=a.ref,r.return=a,a.child=r}function Xb(r,a,o,u,f){if(r!==null){var g=r.memoizedProps;if(eu(g,u)&&r.ref===a.ref)if(sn=!1,a.pendingProps=u=g,Rp(r,f))(r.flags&131072)!==0&&(sn=!0);else return a.lanes=r.lanes,Di(r,a,f)}return Sp(r,a,o,u,f)}function Wb(r,a,o){var u=a.pendingProps,f=u.children,g=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((a.flags&128)!==0){if(u=g!==null?g.baseLanes|o:o,r!==null){for(f=a.child=r.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;a.childLanes=g&~u}else a.childLanes=0,a.child=null;return Zb(r,a,u,o)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},r!==null&&ph(a,g!==null?g.cachePool:null),g!==null?X0(a,g):ep(),Lb(a);else return a.lanes=a.childLanes=536870912,Zb(r,a,g!==null?g.baseLanes|o:o,o)}else g!==null?(ph(a,g.cachePool),X0(a,g),ga(),a.memoizedState=null):(r!==null&&ph(a,null),ep(),ga());return gn(r,a,f,o),a.child}function Zb(r,a,o,u){var f=Ym();return f=f===null?null:{parent:Xt._currentValue,pool:f},a.memoizedState={baseLanes:o,cachePool:f},r!==null&&ph(a,null),ep(),Lb(a),r!==null&&au(r,a,u,!0),null}function Ph(r,a){var o=a.ref;if(o===null)r!==null&&r.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(a.flags|=4194816)}}function Sp(r,a,o,u,f){return As(a),o=rp(r,a,o,u,void 0,f),u=ip(),r!==null&&!sn?(ap(r,a,f),Di(r,a,f)):(et&&u&&Um(a),a.flags|=1,gn(r,a,o,f),a.child)}function Jb(r,a,o,u,f,g){return As(a),a.updateQueue=null,o=Z0(a,u,o,f),W0(r),u=ip(),r!==null&&!sn?(ap(r,a,g),Di(r,a,g)):(et&&u&&Um(a),a.flags|=1,gn(r,a,o,g),a.child)}function e1(r,a,o,u,f){if(As(a),a.stateNode===null){var g=To,S=o.contextType;typeof S=="object"&&S!==null&&(g=xn(S)),g=new o(u,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=bp,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=u,g.state=a.memoizedState,g.refs={},Xm(a),S=o.contextType,g.context=typeof S=="object"&&S!==null?xn(S):To,g.state=a.memoizedState,S=o.getDerivedStateFromProps,typeof S=="function"&&(vp(a,o,S,u),g.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(S=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),S!==g.state&&bp.enqueueReplaceState(g,g.state,null),fu(a,u,g,f),hu(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),u=!0}else if(r===null){g=a.stateNode;var A=a.memoizedProps,U=Is(o,A);g.props=U;var Y=g.context,re=o.contextType;S=To,typeof re=="object"&&re!==null&&(S=xn(re));var oe=o.getDerivedStateFromProps;re=typeof oe=="function"||typeof g.getSnapshotBeforeUpdate=="function",A=a.pendingProps!==A,re||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(A||Y!==S)&&Ub(a,g,u,S),ha=!1;var W=a.memoizedState;g.state=W,fu(a,u,g,f),hu(),Y=a.memoizedState,A||W!==Y||ha?(typeof oe=="function"&&(vp(a,o,oe,u),Y=a.memoizedState),(U=ha||jb(a,o,U,u,W,Y,S))?(re||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=u,a.memoizedState=Y),g.props=u,g.state=Y,g.context=S,u=U):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),u=!1)}else{g=a.stateNode,Wm(r,a),S=a.memoizedProps,re=Is(o,S),g.props=re,oe=a.pendingProps,W=g.context,Y=o.contextType,U=To,typeof Y=="object"&&Y!==null&&(U=xn(Y)),A=o.getDerivedStateFromProps,(Y=typeof A=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(S!==oe||W!==U)&&Ub(a,g,u,U),ha=!1,W=a.memoizedState,g.state=W,fu(a,u,g,f),hu();var Z=a.memoizedState;S!==oe||W!==Z||ha||r!==null&&r.dependencies!==null&&dh(r.dependencies)?(typeof A=="function"&&(vp(a,o,A,u),Z=a.memoizedState),(re=ha||jb(a,o,re,u,W,Z,U)||r!==null&&r.dependencies!==null&&dh(r.dependencies))?(Y||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,Z,U),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,Z,U)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||S===r.memoizedProps&&W===r.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&W===r.memoizedState||(a.flags|=1024),a.memoizedProps=u,a.memoizedState=Z),g.props=u,g.state=Z,g.context=U,u=re):(typeof g.componentDidUpdate!="function"||S===r.memoizedProps&&W===r.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&W===r.memoizedState||(a.flags|=1024),u=!1)}return g=u,Ph(r,a),u=(a.flags&128)!==0,g||u?(g=a.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,r!==null&&u?(a.child=Mo(a,r.child,null,f),a.child=Mo(a,null,o,f)):gn(r,a,o,f),a.memoizedState=g.state,r=a.child):r=Di(r,a,f),r}function t1(r,a,o,u){return ru(),a.flags|=256,gn(r,a,o,u),a.child}var Ep={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tp(r){return{baseLanes:r,cachePool:B0()}}function wp(r,a,o){return r=r!==null?r.childLanes&~o:0,a&&(r|=gr),r}function n1(r,a,o){var u=a.pendingProps,f=!1,g=(a.flags&128)!==0,S;if((S=g)||(S=r!==null&&r.memoizedState===null?!1:(Wt.current&2)!==0),S&&(f=!0,a.flags&=-129),S=(a.flags&32)!==0,a.flags&=-33,r===null){if(et){if(f?pa(a):ga(),et){var A=Dt,U;if(U=A){e:{for(U=A,A=qr;U.nodeType!==8;){if(!A){A=null;break e}if(U=Ar(U.nextSibling),U===null){A=null;break e}}A=U}A!==null?(a.memoizedState={dehydrated:A,treeContext:Ss!==null?{id:xi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},U=Kn(18,null,null,0),U.stateNode=A,U.return=a,a.child=U,$n=a,Dt=null,U=!0):U=!1}U||ws(a)}if(A=a.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return og(A)?a.lanes=32:a.lanes=536870912,null;Oi(a)}return A=u.children,u=u.fallback,f?(ga(),f=a.mode,A=Mh({mode:"hidden",children:A},f),u=_s(u,f,o,null),A.return=a,u.return=a,A.sibling=u,a.child=A,f=a.child,f.memoizedState=Tp(o),f.childLanes=wp(r,S,o),a.memoizedState=Ep,u):(pa(a),xp(a,A))}if(U=r.memoizedState,U!==null&&(A=U.dehydrated,A!==null)){if(g)a.flags&256?(pa(a),a.flags&=-257,a=Ap(r,a,o)):a.memoizedState!==null?(ga(),a.child=r.child,a.flags|=128,a=null):(ga(),f=u.fallback,A=a.mode,u=Mh({mode:"visible",children:u.children},A),f=_s(f,A,o,null),f.flags|=2,u.return=a,f.return=a,u.sibling=f,a.child=u,Mo(a,r.child,null,o),u=a.child,u.memoizedState=Tp(o),u.childLanes=wp(r,S,o),a.memoizedState=Ep,a=f);else if(pa(a),og(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var Y=S.dgst;S=Y,u=Error(i(419)),u.stack="",u.digest=S,iu({value:u,source:null,stack:null}),a=Ap(r,a,o)}else if(sn||au(r,a,o,!1),S=(o&r.childLanes)!==0,sn||S){if(S=yt,S!==null&&(u=o&-o,u=(u&42)!==0?1:ra(u),u=(u&(S.suspendedLanes|o))!==0?0:u,u!==0&&u!==U.retryLane))throw U.retryLane=u,Eo(r,u),er(S,r,u),Qb;A.data==="$?"||Hp(),a=Ap(r,a,o)}else A.data==="$?"?(a.flags|=192,a.child=r.child,a=null):(r=U.treeContext,Dt=Ar(A.nextSibling),$n=a,et=!0,Ts=null,qr=!1,r!==null&&(dr[mr++]=xi,dr[mr++]=Ai,dr[mr++]=Ss,xi=r.id,Ai=r.overflow,Ss=a),a=xp(a,u.children),a.flags|=4096);return a}return f?(ga(),f=u.fallback,A=a.mode,U=r.child,Y=U.sibling,u=wi(U,{mode:"hidden",children:u.children}),u.subtreeFlags=U.subtreeFlags&65011712,Y!==null?f=wi(Y,f):(f=_s(f,A,o,null),f.flags|=2),f.return=a,u.return=a,u.sibling=f,a.child=u,u=f,f=a.child,A=r.child.memoizedState,A===null?A=Tp(o):(U=A.cachePool,U!==null?(Y=Xt._currentValue,U=U.parent!==Y?{parent:Y,pool:Y}:U):U=B0(),A={baseLanes:A.baseLanes|o,cachePool:U}),f.memoizedState=A,f.childLanes=wp(r,S,o),a.memoizedState=Ep,u):(pa(a),o=r.child,r=o.sibling,o=wi(o,{mode:"visible",children:u.children}),o.return=a,o.sibling=null,r!==null&&(S=a.deletions,S===null?(a.deletions=[r],a.flags|=16):S.push(r)),a.child=o,a.memoizedState=null,o)}function xp(r,a){return a=Mh({mode:"visible",children:a},r.mode),a.return=r,r.child=a}function Mh(r,a){return r=Kn(22,r,null,a),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function Ap(r,a,o){return Mo(a,r.child,null,o),r=xp(a,a.pendingProps.children),r.flags|=2,a.memoizedState=null,r}function r1(r,a,o){r.lanes|=a;var u=r.alternate;u!==null&&(u.lanes|=a),Hm(r.return,a,o)}function Cp(r,a,o,u,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=f)}function i1(r,a,o){var u=a.pendingProps,f=u.revealOrder,g=u.tail;if(gn(r,a,u.children,o),u=Wt.current,(u&2)!==0)u=u&1|2,a.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=a.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&r1(r,o,a);else if(r.tag===19)r1(r,o,a);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break e;for(;r.sibling===null;){if(r.return===null||r.return===a)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(ae(Wt,u),f){case"forwards":for(o=a.child,f=null;o!==null;)r=o.alternate,r!==null&&Ih(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=a.child,a.child=null):(f=o.sibling,o.sibling=null),Cp(a,!1,f,o,g);break;case"backwards":for(o=null,f=a.child,a.child=null;f!==null;){if(r=f.alternate,r!==null&&Ih(r)===null){a.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}Cp(a,!0,o,null,g);break;case"together":Cp(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Di(r,a,o){if(r!==null&&(a.dependencies=r.dependencies),Sa|=a.lanes,(o&a.childLanes)===0)if(r!==null){if(au(r,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(r!==null&&a.child!==r.child)throw Error(i(153));if(a.child!==null){for(r=a.child,o=wi(r,r.pendingProps),a.child=o,o.return=a;r.sibling!==null;)r=r.sibling,o=o.sibling=wi(r,r.pendingProps),o.return=a;o.sibling=null}return a.child}function Rp(r,a){return(r.lanes&a)!==0?!0:(r=r.dependencies,!!(r!==null&&dh(r)))}function hR(r,a,o){switch(a.tag){case 3:Ve(a,a.stateNode.containerInfo),ca(a,Xt,r.memoizedState.cache),ru();break;case 27:case 5:Ze(a);break;case 4:Ve(a,a.stateNode.containerInfo);break;case 10:ca(a,a.type,a.memoizedProps.value);break;case 13:var u=a.memoizedState;if(u!==null)return u.dehydrated!==null?(pa(a),a.flags|=128,null):(o&a.child.childLanes)!==0?n1(r,a,o):(pa(a),r=Di(r,a,o),r!==null?r.sibling:null);pa(a);break;case 19:var f=(r.flags&128)!==0;if(u=(o&a.childLanes)!==0,u||(au(r,a,o,!1),u=(o&a.childLanes)!==0),f){if(u)return i1(r,a,o);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ae(Wt,Wt.current),u)break;return null;case 22:case 23:return a.lanes=0,Wb(r,a,o);case 24:ca(a,Xt,r.memoizedState.cache)}return Di(r,a,o)}function a1(r,a,o){if(r!==null)if(r.memoizedProps!==a.pendingProps)sn=!0;else{if(!Rp(r,o)&&(a.flags&128)===0)return sn=!1,hR(r,a,o);sn=(r.flags&131072)!==0}else sn=!1,et&&(a.flags&1048576)!==0&&V0(a,fh,a.index);switch(a.lanes=0,a.tag){case 16:e:{r=a.pendingProps;var u=a.elementType,f=u._init;if(u=f(u._payload),a.type=u,typeof u=="function")$m(u)?(r=Is(u,r),a.tag=1,a=e1(null,a,u,r,o)):(a.tag=0,a=Sp(null,a,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===te){a.tag=11,a=Yb(null,a,u,r,o);break e}else if(f===C){a.tag=14,a=Kb(null,a,u,r,o);break e}}throw a=Me(u)||u,Error(i(306,a,""))}}return a;case 0:return Sp(r,a,a.type,a.pendingProps,o);case 1:return u=a.type,f=Is(u,a.pendingProps),e1(r,a,u,f,o);case 3:e:{if(Ve(a,a.stateNode.containerInfo),r===null)throw Error(i(387));u=a.pendingProps;var g=a.memoizedState;f=g.element,Wm(r,a),fu(a,u,null,o);var S=a.memoizedState;if(u=S.cache,ca(a,Xt,u),u!==g.cache&&qm(a,[Xt],o,!0),hu(),u=S.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:S.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=t1(r,a,u,o);break e}else if(u!==f){f=hr(Error(i(424)),a),iu(f),a=t1(r,a,u,o);break e}else{switch(r=a.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Dt=Ar(r.firstChild),$n=a,et=!0,Ts=null,qr=!0,o=$b(a,null,u,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ru(),u===f){a=Di(r,a,o);break e}gn(r,a,u,o)}a=a.child}return a;case 26:return Ph(r,a),r===null?(o=u_(a.type,null,a.pendingProps,null))?a.memoizedState=o:et||(o=a.type,r=a.pendingProps,u=Qh(ge.current).createElement(o),u[Qt]=a,u[Lt]=r,vn(u,o,r),kt(u),a.stateNode=u):a.memoizedState=u_(a.type,r.memoizedProps,a.pendingProps,r.memoizedState),null;case 27:return Ze(a),r===null&&et&&(u=a.stateNode=s_(a.type,a.pendingProps,ge.current),$n=a,qr=!0,f=Dt,xa(a.type)?(lg=f,Dt=Ar(u.firstChild)):Dt=f),gn(r,a,a.pendingProps.children,o),Ph(r,a),r===null&&(a.flags|=4194304),a.child;case 5:return r===null&&et&&((f=u=Dt)&&(u=jR(u,a.type,a.pendingProps,qr),u!==null?(a.stateNode=u,$n=a,Dt=Ar(u.firstChild),qr=!1,f=!0):f=!1),f||ws(a)),Ze(a),f=a.type,g=a.pendingProps,S=r!==null?r.memoizedProps:null,u=g.children,ig(f,g)?u=null:S!==null&&ig(f,S)&&(a.flags|=32),a.memoizedState!==null&&(f=rp(r,a,rR,null,null,o),ku._currentValue=f),Ph(r,a),gn(r,a,u,o),a.child;case 6:return r===null&&et&&((r=o=Dt)&&(o=UR(o,a.pendingProps,qr),o!==null?(a.stateNode=o,$n=a,Dt=null,r=!0):r=!1),r||ws(a)),null;case 13:return n1(r,a,o);case 4:return Ve(a,a.stateNode.containerInfo),u=a.pendingProps,r===null?a.child=Mo(a,null,u,o):gn(r,a,u,o),a.child;case 11:return Yb(r,a,a.type,a.pendingProps,o);case 7:return gn(r,a,a.pendingProps,o),a.child;case 8:return gn(r,a,a.pendingProps.children,o),a.child;case 12:return gn(r,a,a.pendingProps.children,o),a.child;case 10:return u=a.pendingProps,ca(a,a.type,u.value),gn(r,a,u.children,o),a.child;case 9:return f=a.type._context,u=a.pendingProps.children,As(a),f=xn(f),u=u(f),a.flags|=1,gn(r,a,u,o),a.child;case 14:return Kb(r,a,a.type,a.pendingProps,o);case 15:return Xb(r,a,a.type,a.pendingProps,o);case 19:return i1(r,a,o);case 31:return u=a.pendingProps,o=a.mode,u={mode:u.mode,children:u.children},r===null?(o=Mh(u,o),o.ref=a.ref,a.child=o,o.return=a,a=o):(o=wi(r.child,u),o.ref=a.ref,a.child=o,o.return=a,a=o),a;case 22:return Wb(r,a,o);case 24:return As(a),u=xn(Xt),r===null?(f=Ym(),f===null&&(f=yt,g=Gm(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=o),f=g),a.memoizedState={parent:u,cache:f},Xm(a),ca(a,Xt,f)):((r.lanes&o)!==0&&(Wm(r,a),fu(a,null,null,o),hu()),f=r.memoizedState,g=a.memoizedState,f.parent!==u?(f={parent:u,cache:u},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),ca(a,Xt,u)):(u=g.cache,ca(a,Xt,u),u!==f.cache&&qm(a,[Xt],o,!0))),gn(r,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function Pi(r){r.flags|=4}function s1(r,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!m_(a)){if(a=pr.current,a!==null&&((Xe&4194048)===Xe?Gr!==null:(Xe&62914560)!==Xe&&(Xe&536870912)===0||a!==Gr))throw uu=Km,F0;r.flags|=8192}}function kh(r,a){a!==null&&(r.flags|=4),r.flags&16384&&(a=r.tag!==22?Nl():536870912,r.lanes|=a,$o|=a)}function bu(r,a){if(!et)switch(r.tailMode){case"hidden":a=r.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?a||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function xt(r){var a=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(a)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,a}function fR(r,a,o){var u=a.pendingProps;switch(zm(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(a),null;case 1:return xt(a),null;case 3:return o=a.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),a.memoizedState.cache!==u&&(a.flags|=2048),Ri(Xt),_e(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(nu(a)?Pi(a):r===null||r.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,L0())),xt(a),null;case 26:return o=a.memoizedState,r===null?(Pi(a),o!==null?(xt(a),s1(a,o)):(xt(a),a.flags&=-16777217)):o?o!==r.memoizedState?(Pi(a),xt(a),s1(a,o)):(xt(a),a.flags&=-16777217):(r.memoizedProps!==u&&Pi(a),xt(a),a.flags&=-16777217),null;case 27:gt(a),o=ge.current;var f=a.type;if(r!==null&&a.stateNode!=null)r.memoizedProps!==u&&Pi(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return xt(a),null}r=me.current,nu(a)?N0(a):(r=s_(f,u,o),a.stateNode=r,Pi(a))}return xt(a),null;case 5:if(gt(a),o=a.type,r!==null&&a.stateNode!=null)r.memoizedProps!==u&&Pi(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return xt(a),null}if(r=me.current,nu(a))N0(a);else{switch(f=Qh(ge.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[Qt]=a,r[Lt]=u;e:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break e;for(;f.sibling===null;){if(f.return===null||f.return===a)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=r;e:switch(vn(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Pi(a)}}return xt(a),a.flags&=-16777217,null;case 6:if(r&&a.stateNode!=null)r.memoizedProps!==u&&Pi(a);else{if(typeof u!="string"&&a.stateNode===null)throw Error(i(166));if(r=ge.current,nu(a)){if(r=a.stateNode,o=a.memoizedProps,u=null,f=$n,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[Qt]=a,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||J1(r.nodeValue,o)),r||ws(a)}else r=Qh(r).createTextNode(u),r[Qt]=a,a.stateNode=r}return xt(a),null;case 13:if(u=a.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=nu(a),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Qt]=a}else ru(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;xt(a),f=!1}else f=L0(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(Oi(a),a):(Oi(a),null)}if(Oi(a),(a.flags&128)!==0)return a.lanes=o,a;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=a.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var g=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==f&&(u.flags|=2048)}return o!==r&&o&&(a.child.flags|=8192),kh(a,a.updateQueue),xt(a),null;case 4:return _e(),r===null&&Jp(a.stateNode.containerInfo),xt(a),null;case 10:return Ri(a.type),xt(a),null;case 19:if(ie(Wt),f=a.memoizedState,f===null)return xt(a),null;if(u=(a.flags&128)!==0,g=f.rendering,g===null)if(u)bu(f,!1);else{if(Pt!==0||r!==null&&(r.flags&128)!==0)for(r=a.child;r!==null;){if(g=Ih(r),g!==null){for(a.flags|=128,bu(f,!1),r=g.updateQueue,a.updateQueue=r,kh(a,r),a.subtreeFlags=0,r=o,o=a.child;o!==null;)k0(o,r),o=o.sibling;return ae(Wt,Wt.current&1|2),a.child}r=r.sibling}f.tail!==null&&ar()>$h&&(a.flags|=128,u=!0,bu(f,!1),a.lanes=4194304)}else{if(!u)if(r=Ih(g),r!==null){if(a.flags|=128,u=!0,r=r.updateQueue,a.updateQueue=r,kh(a,r),bu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!et)return xt(a),null}else 2*ar()-f.renderingStartTime>$h&&o!==536870912&&(a.flags|=128,u=!0,bu(f,!1),a.lanes=4194304);f.isBackwards?(g.sibling=a.child,a.child=g):(r=f.last,r!==null?r.sibling=g:a.child=g,f.last=g)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=ar(),a.sibling=null,r=Wt.current,ae(Wt,u?r&1|2:r&1),a):(xt(a),null);case 22:case 23:return Oi(a),tp(),u=a.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(a.flags|=8192):u&&(a.flags|=8192),u?(o&536870912)!==0&&(a.flags&128)===0&&(xt(a),a.subtreeFlags&6&&(a.flags|=8192)):xt(a),o=a.updateQueue,o!==null&&kh(a,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==o&&(a.flags|=2048),r!==null&&ie(Cs),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),Ri(Xt),xt(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function dR(r,a){switch(zm(a),a.tag){case 1:return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 3:return Ri(Xt),_e(),r=a.flags,(r&65536)!==0&&(r&128)===0?(a.flags=r&-65537|128,a):null;case 26:case 27:case 5:return gt(a),null;case 13:if(Oi(a),r=a.memoizedState,r!==null&&r.dehydrated!==null){if(a.alternate===null)throw Error(i(340));ru()}return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 19:return ie(Wt),null;case 4:return _e(),null;case 10:return Ri(a.type),null;case 22:case 23:return Oi(a),tp(),r!==null&&ie(Cs),r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 24:return Ri(Xt),null;case 25:return null;default:return null}}function o1(r,a){switch(zm(a),a.tag){case 3:Ri(Xt),_e();break;case 26:case 27:case 5:gt(a);break;case 4:_e();break;case 13:Oi(a);break;case 19:ie(Wt);break;case 10:Ri(a.type);break;case 22:case 23:Oi(a),tp(),r!==null&&ie(Cs);break;case 24:Ri(Xt)}}function _u(r,a){try{var o=a.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var g=o.create,S=o.inst;u=g(),S.destroy=u}o=o.next}while(o!==f)}}catch(A){mt(a,a.return,A)}}function ya(r,a,o){try{var u=a.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var g=f.next;u=g;do{if((u.tag&r)===r){var S=u.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,f=a;var U=o,Y=A;try{Y()}catch(re){mt(f,U,re)}}}u=u.next}while(u!==g)}}catch(re){mt(a,a.return,re)}}function l1(r){var a=r.updateQueue;if(a!==null){var o=r.stateNode;try{K0(a,o)}catch(u){mt(r,r.return,u)}}}function u1(r,a,o){o.props=Is(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){mt(r,a,u)}}function Su(r,a){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(f){mt(r,a,f)}}function Qr(r,a){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){mt(r,a,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){mt(r,a,f)}else o.current=null}function c1(r){var a=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){mt(r,r.return,f)}}function Ip(r,a,o){try{var u=r.stateNode;kR(u,r.type,o,a),u[Lt]=a}catch(f){mt(r,r.return,f)}}function h1(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&xa(r.type)||r.tag===4}function Op(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||h1(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&xa(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Dp(r,a,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(r),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=Gh));else if(u!==4&&(u===27&&xa(r.type)&&(o=r.stateNode,a=null),r=r.child,r!==null))for(Dp(r,a,o),r=r.sibling;r!==null;)Dp(r,a,o),r=r.sibling}function Vh(r,a,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,a?o.insertBefore(r,a):o.appendChild(r);else if(u!==4&&(u===27&&xa(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Vh(r,a,o),r=r.sibling;r!==null;)Vh(r,a,o),r=r.sibling}function f1(r){var a=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);vn(a,u,o),a[Qt]=r,a[Lt]=o}catch(g){mt(r,r.return,g)}}var Mi=!1,Nt=!1,Pp=!1,d1=typeof WeakSet=="function"?WeakSet:Set,on=null;function mR(r,a){if(r=r.containerInfo,ng=Jh,r=w0(r),Om(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var S=0,A=-1,U=-1,Y=0,re=0,oe=r,W=null;t:for(;;){for(var Z;oe!==o||f!==0&&oe.nodeType!==3||(A=S+f),oe!==g||u!==0&&oe.nodeType!==3||(U=S+u),oe.nodeType===3&&(S+=oe.nodeValue.length),(Z=oe.firstChild)!==null;)W=oe,oe=Z;for(;;){if(oe===r)break t;if(W===o&&++Y===f&&(A=S),W===g&&++re===u&&(U=S),(Z=oe.nextSibling)!==null)break;oe=W,W=oe.parentNode}oe=Z}o=A===-1||U===-1?null:{start:A,end:U}}else o=null}o=o||{start:0,end:0}}else o=null;for(rg={focusedElem:r,selectionRange:o},Jh=!1,on=a;on!==null;)if(a=on,r=a.child,(a.subtreeFlags&1024)!==0&&r!==null)r.return=a,on=r;else for(;on!==null;){switch(a=on,g=a.alternate,r=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&g!==null){r=void 0,o=a,f=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var De=Is(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(De,g),u.__reactInternalSnapshotBeforeUpdate=r}catch(Ce){mt(o,o.return,Ce)}}break;case 3:if((r&1024)!==0){if(r=a.stateNode.containerInfo,o=r.nodeType,o===9)sg(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":sg(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=a.sibling,r!==null){r.return=a.return,on=r;break}on=a.return}}function m1(r,a,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:va(r,o),u&4&&_u(5,o);break;case 1:if(va(r,o),u&4)if(r=o.stateNode,a===null)try{r.componentDidMount()}catch(S){mt(o,o.return,S)}else{var f=Is(o.type,a.memoizedProps);a=a.memoizedState;try{r.componentDidUpdate(f,a,r.__reactInternalSnapshotBeforeUpdate)}catch(S){mt(o,o.return,S)}}u&64&&l1(o),u&512&&Su(o,o.return);break;case 3:if(va(r,o),u&64&&(r=o.updateQueue,r!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{K0(r,a)}catch(S){mt(o,o.return,S)}}break;case 27:a===null&&u&4&&f1(o);case 26:case 5:va(r,o),a===null&&u&4&&c1(o),u&512&&Su(o,o.return);break;case 12:va(r,o);break;case 13:va(r,o),u&4&&y1(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=TR.bind(null,o),zR(r,o))));break;case 22:if(u=o.memoizedState!==null||Mi,!u){a=a!==null&&a.memoizedState!==null||Nt,f=Mi;var g=Nt;Mi=u,(Nt=a)&&!g?ba(r,o,(o.subtreeFlags&8772)!==0):va(r,o),Mi=f,Nt=g}break;case 30:break;default:va(r,o)}}function p1(r){var a=r.alternate;a!==null&&(r.alternate=null,p1(a)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(a=r.stateNode,a!==null&&sa(a)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var wt=null,Un=!1;function ki(r,a,o){for(o=o.child;o!==null;)g1(r,a,o),o=o.sibling}function g1(r,a,o){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ot,o)}catch{}switch(o.tag){case 26:Nt||Qr(o,a),ki(r,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Nt||Qr(o,a);var u=wt,f=Un;xa(o.type)&&(wt=o.stateNode,Un=!1),ki(r,a,o),Ou(o.stateNode),wt=u,Un=f;break;case 5:Nt||Qr(o,a);case 6:if(u=wt,f=Un,wt=null,ki(r,a,o),wt=u,Un=f,wt!==null)if(Un)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(o.stateNode)}catch(g){mt(o,a,g)}else try{wt.removeChild(o.stateNode)}catch(g){mt(o,a,g)}break;case 18:wt!==null&&(Un?(r=wt,i_(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),Lu(r)):i_(wt,o.stateNode));break;case 4:u=wt,f=Un,wt=o.stateNode.containerInfo,Un=!0,ki(r,a,o),wt=u,Un=f;break;case 0:case 11:case 14:case 15:Nt||ya(2,o,a),Nt||ya(4,o,a),ki(r,a,o);break;case 1:Nt||(Qr(o,a),u=o.stateNode,typeof u.componentWillUnmount=="function"&&u1(o,a,u)),ki(r,a,o);break;case 21:ki(r,a,o);break;case 22:Nt=(u=Nt)||o.memoizedState!==null,ki(r,a,o),Nt=u;break;default:ki(r,a,o)}}function y1(r,a){if(a.memoizedState===null&&(r=a.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Lu(r)}catch(o){mt(a,a.return,o)}}function pR(r){switch(r.tag){case 13:case 19:var a=r.stateNode;return a===null&&(a=r.stateNode=new d1),a;case 22:return r=r.stateNode,a=r._retryCache,a===null&&(a=r._retryCache=new d1),a;default:throw Error(i(435,r.tag))}}function Mp(r,a){var o=pR(r);a.forEach(function(u){var f=wR.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function Xn(r,a){var o=a.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],g=r,S=a,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(xa(A.type)){wt=A.stateNode,Un=!1;break e}break;case 5:wt=A.stateNode,Un=!1;break e;case 3:case 4:wt=A.stateNode.containerInfo,Un=!0;break e}A=A.return}if(wt===null)throw Error(i(160));g1(g,S,f),wt=null,Un=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)v1(a,r),a=a.sibling}var xr=null;function v1(r,a){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Xn(a,r),Wn(r),u&4&&(ya(3,r,r.return),_u(3,r),ya(5,r,r.return));break;case 1:Xn(a,r),Wn(r),u&512&&(Nt||o===null||Qr(o,o.return)),u&64&&Mi&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=xr;if(Xn(a,r),Wn(r),u&512&&(Nt||o===null||Qr(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":g=f.getElementsByTagName("title")[0],(!g||g[is]||g[Qt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(u),f.head.insertBefore(g,f.querySelector("head > title"))),vn(g,u,o),g[Qt]=r,kt(g),u=g;break e;case"link":var S=f_("link","href",f).get(u+(o.href||""));if(S){for(var A=0;A<S.length;A++)if(g=S[A],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){S.splice(A,1);break t}}g=f.createElement(u),vn(g,u,o),f.head.appendChild(g);break;case"meta":if(S=f_("meta","content",f).get(u+(o.content||""))){for(A=0;A<S.length;A++)if(g=S[A],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){S.splice(A,1);break t}}g=f.createElement(u),vn(g,u,o),f.head.appendChild(g);break;default:throw Error(i(468,u))}g[Qt]=r,kt(g),u=g}r.stateNode=u}else d_(f,r.type,r.stateNode);else r.stateNode=h_(f,u,r.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?d_(f,r.type,r.stateNode):h_(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&Ip(r,r.memoizedProps,o.memoizedProps)}break;case 27:Xn(a,r),Wn(r),u&512&&(Nt||o===null||Qr(o,o.return)),o!==null&&u&4&&Ip(r,r.memoizedProps,o.memoizedProps);break;case 5:if(Xn(a,r),Wn(r),u&512&&(Nt||o===null||Qr(o,o.return)),r.flags&32){f=r.stateNode;try{or(f,"")}catch(Z){mt(r,r.return,Z)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,Ip(r,f,o!==null?o.memoizedProps:f)),u&1024&&(Pp=!0);break;case 6:if(Xn(a,r),Wn(r),u&4){if(r.stateNode===null)throw Error(i(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(Z){mt(r,r.return,Z)}}break;case 3:if(Xh=null,f=xr,xr=Yh(a.containerInfo),Xn(a,r),xr=f,Wn(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Lu(a.containerInfo)}catch(Z){mt(r,r.return,Z)}Pp&&(Pp=!1,b1(r));break;case 4:u=xr,xr=Yh(r.stateNode.containerInfo),Xn(a,r),Wn(r),xr=u;break;case 12:Xn(a,r),Wn(r);break;case 13:Xn(a,r),Wn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(jp=ar()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,Mp(r,u)));break;case 22:f=r.memoizedState!==null;var U=o!==null&&o.memoizedState!==null,Y=Mi,re=Nt;if(Mi=Y||f,Nt=re||U,Xn(a,r),Nt=re,Mi=Y,Wn(r),u&8192)e:for(a=r.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(o===null||U||Mi||Nt||Os(r)),o=null,a=r;;){if(a.tag===5||a.tag===26){if(o===null){U=o=a;try{if(g=U.stateNode,f)S=g.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=U.stateNode;var oe=U.memoizedProps.style,W=oe!=null&&oe.hasOwnProperty("display")?oe.display:null;A.style.display=W==null||typeof W=="boolean"?"":(""+W).trim()}}catch(Z){mt(U,U.return,Z)}}}else if(a.tag===6){if(o===null){U=a;try{U.stateNode.nodeValue=f?"":U.memoizedProps}catch(Z){mt(U,U.return,Z)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===r)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break e;for(;a.sibling===null;){if(a.return===null||a.return===r)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Mp(r,o))));break;case 19:Xn(a,r),Wn(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,Mp(r,u)));break;case 30:break;case 21:break;default:Xn(a,r),Wn(r)}}function Wn(r){var a=r.flags;if(a&2){try{for(var o,u=r.return;u!==null;){if(h1(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,g=Op(r);Vh(r,g,f);break;case 5:var S=o.stateNode;o.flags&32&&(or(S,""),o.flags&=-33);var A=Op(r);Vh(r,A,S);break;case 3:case 4:var U=o.stateNode.containerInfo,Y=Op(r);Dp(r,Y,U);break;default:throw Error(i(161))}}catch(re){mt(r,r.return,re)}r.flags&=-3}a&4096&&(r.flags&=-4097)}function b1(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var a=r;b1(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),r=r.sibling}}function va(r,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)m1(r,a.alternate,a),a=a.sibling}function Os(r){for(r=r.child;r!==null;){var a=r;switch(a.tag){case 0:case 11:case 14:case 15:ya(4,a,a.return),Os(a);break;case 1:Qr(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&u1(a,a.return,o),Os(a);break;case 27:Ou(a.stateNode);case 26:case 5:Qr(a,a.return),Os(a);break;case 22:a.memoizedState===null&&Os(a);break;case 30:Os(a);break;default:Os(a)}r=r.sibling}}function ba(r,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var u=a.alternate,f=r,g=a,S=g.flags;switch(g.tag){case 0:case 11:case 15:ba(f,g,o),_u(4,g);break;case 1:if(ba(f,g,o),u=g,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(Y){mt(u,u.return,Y)}if(u=g,f=u.updateQueue,f!==null){var A=u.stateNode;try{var U=f.shared.hiddenCallbacks;if(U!==null)for(f.shared.hiddenCallbacks=null,f=0;f<U.length;f++)Y0(U[f],A)}catch(Y){mt(u,u.return,Y)}}o&&S&64&&l1(g),Su(g,g.return);break;case 27:f1(g);case 26:case 5:ba(f,g,o),o&&u===null&&S&4&&c1(g),Su(g,g.return);break;case 12:ba(f,g,o);break;case 13:ba(f,g,o),o&&S&4&&y1(f,g);break;case 22:g.memoizedState===null&&ba(f,g,o),Su(g,g.return);break;case 30:break;default:ba(f,g,o)}a=a.sibling}}function kp(r,a){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&su(o))}function Vp(r,a){r=null,a.alternate!==null&&(r=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==r&&(a.refCount++,r!=null&&su(r))}function Yr(r,a,o,u){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)_1(r,a,o,u),a=a.sibling}function _1(r,a,o,u){var f=a.flags;switch(a.tag){case 0:case 11:case 15:Yr(r,a,o,u),f&2048&&_u(9,a);break;case 1:Yr(r,a,o,u);break;case 3:Yr(r,a,o,u),f&2048&&(r=null,a.alternate!==null&&(r=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==r&&(a.refCount++,r!=null&&su(r)));break;case 12:if(f&2048){Yr(r,a,o,u),r=a.stateNode;try{var g=a.memoizedProps,S=g.id,A=g.onPostCommit;typeof A=="function"&&A(S,a.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(U){mt(a,a.return,U)}}else Yr(r,a,o,u);break;case 13:Yr(r,a,o,u);break;case 23:break;case 22:g=a.stateNode,S=a.alternate,a.memoizedState!==null?g._visibility&2?Yr(r,a,o,u):Eu(r,a):g._visibility&2?Yr(r,a,o,u):(g._visibility|=2,ko(r,a,o,u,(a.subtreeFlags&10256)!==0)),f&2048&&kp(S,a);break;case 24:Yr(r,a,o,u),f&2048&&Vp(a.alternate,a);break;default:Yr(r,a,o,u)}}function ko(r,a,o,u,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=r,S=a,A=o,U=u,Y=S.flags;switch(S.tag){case 0:case 11:case 15:ko(g,S,A,U,f),_u(8,S);break;case 23:break;case 22:var re=S.stateNode;S.memoizedState!==null?re._visibility&2?ko(g,S,A,U,f):Eu(g,S):(re._visibility|=2,ko(g,S,A,U,f)),f&&Y&2048&&kp(S.alternate,S);break;case 24:ko(g,S,A,U,f),f&&Y&2048&&Vp(S.alternate,S);break;default:ko(g,S,A,U,f)}a=a.sibling}}function Eu(r,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=r,u=a,f=u.flags;switch(u.tag){case 22:Eu(o,u),f&2048&&kp(u.alternate,u);break;case 24:Eu(o,u),f&2048&&Vp(u.alternate,u);break;default:Eu(o,u)}a=a.sibling}}var Tu=8192;function Vo(r){if(r.subtreeFlags&Tu)for(r=r.child;r!==null;)S1(r),r=r.sibling}function S1(r){switch(r.tag){case 26:Vo(r),r.flags&Tu&&r.memoizedState!==null&&eI(xr,r.memoizedState,r.memoizedProps);break;case 5:Vo(r);break;case 3:case 4:var a=xr;xr=Yh(r.stateNode.containerInfo),Vo(r),xr=a;break;case 22:r.memoizedState===null&&(a=r.alternate,a!==null&&a.memoizedState!==null?(a=Tu,Tu=16777216,Vo(r),Tu=a):Vo(r));break;default:Vo(r)}}function E1(r){var a=r.alternate;if(a!==null&&(r=a.child,r!==null)){a.child=null;do a=r.sibling,r.sibling=null,r=a;while(r!==null)}}function wu(r){var a=r.deletions;if((r.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];on=u,w1(u,r)}E1(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)T1(r),r=r.sibling}function T1(r){switch(r.tag){case 0:case 11:case 15:wu(r),r.flags&2048&&ya(9,r,r.return);break;case 3:wu(r);break;case 12:wu(r);break;case 22:var a=r.stateNode;r.memoizedState!==null&&a._visibility&2&&(r.return===null||r.return.tag!==13)?(a._visibility&=-3,Nh(r)):wu(r);break;default:wu(r)}}function Nh(r){var a=r.deletions;if((r.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];on=u,w1(u,r)}E1(r)}for(r=r.child;r!==null;){switch(a=r,a.tag){case 0:case 11:case 15:ya(8,a,a.return),Nh(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,Nh(a));break;default:Nh(a)}r=r.sibling}}function w1(r,a){for(;on!==null;){var o=on;switch(o.tag){case 0:case 11:case 15:ya(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:su(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,on=u;else e:for(o=r;on!==null;){u=on;var f=u.sibling,g=u.return;if(p1(u),u===o){on=null;break e}if(f!==null){f.return=g,on=f;break e}on=g}}}var gR={getCacheForType:function(r){var a=xn(Xt),o=a.data.get(r);return o===void 0&&(o=r(),a.data.set(r,o)),o}},yR=typeof WeakMap=="function"?WeakMap:Map,lt=0,yt=null,Be=null,Xe=0,ut=0,Zn=null,_a=!1,No=!1,Np=!1,Vi=0,Pt=0,Sa=0,Ds=0,$p=0,gr=0,$o=0,xu=null,zn=null,Lp=!1,jp=0,$h=1/0,Lh=null,Ea=null,yn=0,Ta=null,Lo=null,jo=0,Up=0,zp=null,x1=null,Au=0,Bp=null;function Jn(){if((lt&2)!==0&&Xe!==0)return Xe&-Xe;if(X.T!==null){var r=Ao;return r!==0?r:Kp()}return ia()}function A1(){gr===0&&(gr=(Xe&536870912)===0||et?Vl():536870912);var r=pr.current;return r!==null&&(r.flags|=32),gr}function er(r,a,o){(r===yt&&(ut===2||ut===9)||r.cancelPendingCommit!==null)&&(Uo(r,0),wa(r,Xe,gr,!1)),di(r,o),((lt&2)===0||r!==yt)&&(r===yt&&((lt&2)===0&&(Ds|=o),Pt===4&&wa(r,Xe,gr,!1)),Kr(r))}function C1(r,a,o){if((lt&6)!==0)throw Error(i(327));var u=!o&&(a&124)===0&&(a&r.expiredLanes)===0||rs(r,a),f=u?_R(r,a):qp(r,a,!0),g=u;do{if(f===0){No&&!u&&wa(r,a,0,!1);break}else{if(o=r.current.alternate,g&&!vR(o)){f=qp(r,a,!1),g=!1;continue}if(f===2){if(g=a,r.errorRecoveryDisabledLanes&g)var S=0;else S=r.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){a=S;e:{var A=r;f=xu;var U=A.current.memoizedState.isDehydrated;if(U&&(Uo(A,S).flags|=256),S=qp(A,S,!1),S!==2){if(Np&&!U){A.errorRecoveryDisabledLanes|=g,Ds|=g,f=4;break e}g=zn,zn=f,g!==null&&(zn===null?zn=g:zn.push.apply(zn,g))}f=S}if(g=!1,f!==2)continue}}if(f===1){Uo(r,0),wa(r,a,0,!0);break}e:{switch(u=r,g=f,g){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:wa(u,a,gr,!_a);break e;case 2:zn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(f=jp+300-ar(),10<f)){if(wa(u,a,gr,!_a),no(u,0,!0)!==0)break e;u.timeoutHandle=n_(R1.bind(null,u,o,zn,Lh,Lp,a,gr,Ds,$o,_a,g,2,-0,0),f);break e}R1(u,o,zn,Lh,Lp,a,gr,Ds,$o,_a,g,0,-0,0)}}break}while(!0);Kr(r)}function R1(r,a,o,u,f,g,S,A,U,Y,re,oe,W,Z){if(r.timeoutHandle=-1,oe=a.subtreeFlags,(oe&8192||(oe&16785408)===16785408)&&(Mu={stylesheets:null,count:0,unsuspend:JR},S1(a),oe=tI(),oe!==null)){r.cancelPendingCommit=oe(V1.bind(null,r,a,g,o,u,f,S,A,U,re,1,W,Z)),wa(r,g,S,!Y);return}V1(r,a,g,o,u,f,S,A,U)}function vR(r){for(var a=r;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],g=f.getSnapshot;f=f.value;try{if(!Yn(g(),f))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function wa(r,a,o,u){a&=~$p,a&=~Ds,r.suspendedLanes|=a,r.pingedLanes&=~a,u&&(r.warmLanes|=a),u=r.expirationTimes;for(var f=a;0<f;){var g=31-wn(f),S=1<<g;u[g]=-1,f&=~S}o!==0&&kr(r,o,a)}function jh(){return(lt&6)===0?(Cu(0),!1):!0}function Fp(){if(Be!==null){if(ut===0)var r=Be.return;else r=Be,Ci=xs=null,sp(r),Po=null,yu=0,r=Be;for(;r!==null;)o1(r.alternate,r),r=r.return;Be=null}}function Uo(r,a){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,NR(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),Fp(),yt=r,Be=o=wi(r.current,null),Xe=a,ut=0,Zn=null,_a=!1,No=rs(r,a),Np=!1,$o=gr=$p=Ds=Sa=Pt=0,zn=xu=null,Lp=!1,(a&8)!==0&&(a|=a&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=a;0<u;){var f=31-wn(u),g=1<<f;a|=r[f],u&=~g}return Vi=a,oh(),o}function I1(r,a){je=null,X.H=Ah,a===lu||a===gh?(a=G0(),ut=3):a===F0?(a=G0(),ut=4):ut=a===Qb?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Zn=a,Be===null&&(Pt=1,Dh(r,hr(a,r.current)))}function O1(){var r=X.H;return X.H=Ah,r===null?Ah:r}function D1(){var r=X.A;return X.A=gR,r}function Hp(){Pt=4,_a||(Xe&4194048)!==Xe&&pr.current!==null||(No=!0),(Sa&134217727)===0&&(Ds&134217727)===0||yt===null||wa(yt,Xe,gr,!1)}function qp(r,a,o){var u=lt;lt|=2;var f=O1(),g=D1();(yt!==r||Xe!==a)&&(Lh=null,Uo(r,a)),a=!1;var S=Pt;e:do try{if(ut!==0&&Be!==null){var A=Be,U=Zn;switch(ut){case 8:Fp(),S=6;break e;case 3:case 2:case 9:case 6:pr.current===null&&(a=!0);var Y=ut;if(ut=0,Zn=null,zo(r,A,U,Y),o&&No){S=0;break e}break;default:Y=ut,ut=0,Zn=null,zo(r,A,U,Y)}}bR(),S=Pt;break}catch(re){I1(r,re)}while(!0);return a&&r.shellSuspendCounter++,Ci=xs=null,lt=u,X.H=f,X.A=g,Be===null&&(yt=null,Xe=0,oh()),S}function bR(){for(;Be!==null;)P1(Be)}function _R(r,a){var o=lt;lt|=2;var u=O1(),f=D1();yt!==r||Xe!==a?(Lh=null,$h=ar()+500,Uo(r,a)):No=rs(r,a);e:do try{if(ut!==0&&Be!==null){a=Be;var g=Zn;t:switch(ut){case 1:ut=0,Zn=null,zo(r,a,g,1);break;case 2:case 9:if(H0(g)){ut=0,Zn=null,M1(a);break}a=function(){ut!==2&&ut!==9||yt!==r||(ut=7),Kr(r)},g.then(a,a);break e;case 3:ut=7;break e;case 4:ut=5;break e;case 7:H0(g)?(ut=0,Zn=null,M1(a)):(ut=0,Zn=null,zo(r,a,g,7));break;case 5:var S=null;switch(Be.tag){case 26:S=Be.memoizedState;case 5:case 27:var A=Be;if(!S||m_(S)){ut=0,Zn=null;var U=A.sibling;if(U!==null)Be=U;else{var Y=A.return;Y!==null?(Be=Y,Uh(Y)):Be=null}break t}}ut=0,Zn=null,zo(r,a,g,5);break;case 6:ut=0,Zn=null,zo(r,a,g,6);break;case 8:Fp(),Pt=6;break e;default:throw Error(i(462))}}SR();break}catch(re){I1(r,re)}while(!0);return Ci=xs=null,X.H=u,X.A=f,lt=o,Be!==null?0:(yt=null,Xe=0,oh(),Pt)}function SR(){for(;Be!==null&&!ir();)P1(Be)}function P1(r){var a=a1(r.alternate,r,Vi);r.memoizedProps=r.pendingProps,a===null?Uh(r):Be=a}function M1(r){var a=r,o=a.alternate;switch(a.tag){case 15:case 0:a=Jb(o,a,a.pendingProps,a.type,void 0,Xe);break;case 11:a=Jb(o,a,a.pendingProps,a.type.render,a.ref,Xe);break;case 5:sp(a);default:o1(o,a),a=Be=k0(a,Vi),a=a1(o,a,Vi)}r.memoizedProps=r.pendingProps,a===null?Uh(r):Be=a}function zo(r,a,o,u){Ci=xs=null,sp(a),Po=null,yu=0;var f=a.return;try{if(cR(r,f,a,o,Xe)){Pt=1,Dh(r,hr(o,r.current)),Be=null;return}}catch(g){if(f!==null)throw Be=f,g;Pt=1,Dh(r,hr(o,r.current)),Be=null;return}a.flags&32768?(et||u===1?r=!0:No||(Xe&536870912)!==0?r=!1:(_a=r=!0,(u===2||u===9||u===3||u===6)&&(u=pr.current,u!==null&&u.tag===13&&(u.flags|=16384))),k1(a,r)):Uh(a)}function Uh(r){var a=r;do{if((a.flags&32768)!==0){k1(a,_a);return}r=a.return;var o=fR(a.alternate,a,Vi);if(o!==null){Be=o;return}if(a=a.sibling,a!==null){Be=a;return}Be=a=r}while(a!==null);Pt===0&&(Pt=5)}function k1(r,a){do{var o=dR(r.alternate,r);if(o!==null){o.flags&=32767,Be=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(r=r.sibling,r!==null)){Be=r;return}Be=r=o}while(r!==null);Pt=6,Be=null}function V1(r,a,o,u,f,g,S,A,U){r.cancelPendingCommit=null;do zh();while(yn!==0);if((lt&6)!==0)throw Error(i(327));if(a!==null){if(a===r.current)throw Error(i(177));if(g=a.lanes|a.childLanes,g|=Vm,$l(r,o,g,S,A,U),r===yt&&(Be=yt=null,Xe=0),Lo=a,Ta=r,jo=o,Up=g,zp=f,x1=u,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,xR(Ja,function(){return U1(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||u){u=X.T,X.T=null,f=ce.p,ce.p=2,S=lt,lt|=4;try{mR(r,a,o)}finally{lt=S,ce.p=f,X.T=u}}yn=1,N1(),$1(),L1()}}function N1(){if(yn===1){yn=0;var r=Ta,a=Lo,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=X.T,X.T=null;var u=ce.p;ce.p=2;var f=lt;lt|=4;try{v1(a,r);var g=rg,S=w0(r.containerInfo),A=g.focusedElem,U=g.selectionRange;if(S!==A&&A&&A.ownerDocument&&T0(A.ownerDocument.documentElement,A)){if(U!==null&&Om(A)){var Y=U.start,re=U.end;if(re===void 0&&(re=Y),"selectionStart"in A)A.selectionStart=Y,A.selectionEnd=Math.min(re,A.value.length);else{var oe=A.ownerDocument||document,W=oe&&oe.defaultView||window;if(W.getSelection){var Z=W.getSelection(),De=A.textContent.length,Ce=Math.min(U.start,De),dt=U.end===void 0?Ce:Math.min(U.end,De);!Z.extend&&Ce>dt&&(S=dt,dt=Ce,Ce=S);var q=E0(A,Ce),B=E0(A,dt);if(q&&B&&(Z.rangeCount!==1||Z.anchorNode!==q.node||Z.anchorOffset!==q.offset||Z.focusNode!==B.node||Z.focusOffset!==B.offset)){var Q=oe.createRange();Q.setStart(q.node,q.offset),Z.removeAllRanges(),Ce>dt?(Z.addRange(Q),Z.extend(B.node,B.offset)):(Q.setEnd(B.node,B.offset),Z.addRange(Q))}}}}for(oe=[],Z=A;Z=Z.parentNode;)Z.nodeType===1&&oe.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<oe.length;A++){var se=oe[A];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}Jh=!!ng,rg=ng=null}finally{lt=f,ce.p=u,X.T=o}}r.current=a,yn=2}}function $1(){if(yn===2){yn=0;var r=Ta,a=Lo,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=X.T,X.T=null;var u=ce.p;ce.p=2;var f=lt;lt|=4;try{m1(r,a.alternate,a)}finally{lt=f,ce.p=u,X.T=o}}yn=3}}function L1(){if(yn===4||yn===3){yn=0,Nc();var r=Ta,a=Lo,o=jo,u=x1;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?yn=5:(yn=0,Lo=Ta=null,j1(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(Ea=null),ro(o),a=a.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ot,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=X.T,f=ce.p,ce.p=2,X.T=null;try{for(var g=r.onRecoverableError,S=0;S<u.length;S++){var A=u[S];g(A.value,{componentStack:A.stack})}}finally{X.T=a,ce.p=f}}(jo&3)!==0&&zh(),Kr(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===Bp?Au++:(Au=0,Bp=r):Au=0,Cu(0)}}function j1(r,a){(r.pooledCacheLanes&=a)===0&&(a=r.pooledCache,a!=null&&(r.pooledCache=null,su(a)))}function zh(r){return N1(),$1(),L1(),U1()}function U1(){if(yn!==5)return!1;var r=Ta,a=Up;Up=0;var o=ro(jo),u=X.T,f=ce.p;try{ce.p=32>o?32:o,X.T=null,o=zp,zp=null;var g=Ta,S=jo;if(yn=0,Lo=Ta=null,jo=0,(lt&6)!==0)throw Error(i(331));var A=lt;if(lt|=4,T1(g.current),_1(g,g.current,S,o),lt=A,Cu(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ot,g)}catch{}return!0}finally{ce.p=f,X.T=u,j1(r,a)}}function z1(r,a,o){a=hr(o,a),a=_p(r.stateNode,a,2),r=da(r,a,2),r!==null&&(di(r,2),Kr(r))}function mt(r,a,o){if(r.tag===3)z1(r,r,o);else for(;a!==null;){if(a.tag===3){z1(a,r,o);break}else if(a.tag===1){var u=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ea===null||!Ea.has(u))){r=hr(o,r),o=qb(2),u=da(a,o,2),u!==null&&(Gb(o,u,a,r),di(u,2),Kr(u));break}}a=a.return}}function Gp(r,a,o){var u=r.pingCache;if(u===null){u=r.pingCache=new yR;var f=new Set;u.set(a,f)}else f=u.get(a),f===void 0&&(f=new Set,u.set(a,f));f.has(o)||(Np=!0,f.add(o),r=ER.bind(null,r,a,o),a.then(r,r))}function ER(r,a,o){var u=r.pingCache;u!==null&&u.delete(a),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,yt===r&&(Xe&o)===o&&(Pt===4||Pt===3&&(Xe&62914560)===Xe&&300>ar()-jp?(lt&2)===0&&Uo(r,0):$p|=o,$o===Xe&&($o=0)),Kr(r)}function B1(r,a){a===0&&(a=Nl()),r=Eo(r,a),r!==null&&(di(r,a),Kr(r))}function TR(r){var a=r.memoizedState,o=0;a!==null&&(o=a.retryLane),B1(r,o)}function wR(r,a){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(a),B1(r,o)}function xR(r,a){return dn(r,a)}var Bh=null,Bo=null,Qp=!1,Fh=!1,Yp=!1,Ps=0;function Kr(r){r!==Bo&&r.next===null&&(Bo===null?Bh=Bo=r:Bo=Bo.next=r),Fh=!0,Qp||(Qp=!0,CR())}function Cu(r,a){if(!Yp&&Fh){Yp=!0;do for(var o=!1,u=Bh;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var g=0;else{var S=u.suspendedLanes,A=u.pingedLanes;g=(1<<31-wn(42|r)+1)-1,g&=f&~(S&~A),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,G1(u,g))}else g=Xe,g=no(u,u===yt?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||rs(u,g)||(o=!0,G1(u,g));u=u.next}while(o);Yp=!1}}function AR(){F1()}function F1(){Fh=Qp=!1;var r=0;Ps!==0&&(VR()&&(r=Ps),Ps=0);for(var a=ar(),o=null,u=Bh;u!==null;){var f=u.next,g=H1(u,a);g===0?(u.next=null,o===null?Bh=f:o.next=f,f===null&&(Bo=o)):(o=u,(r!==0||(g&3)!==0)&&(Fh=!0)),u=f}Cu(r)}function H1(r,a){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes&-62914561;0<g;){var S=31-wn(g),A=1<<S,U=f[S];U===-1?((A&o)===0||(A&u)!==0)&&(f[S]=kl(A,a)):U<=a&&(r.expiredLanes|=A),g&=~A}if(a=yt,o=Xe,o=no(r,r===a?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===a&&(ut===2||ut===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&It(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||rs(r,o)){if(a=o&-o,a===r.callbackPriority)return a;switch(u!==null&&It(u),ro(o)){case 2:case 8:o=eo;break;case 32:o=Ja;break;case 268435456:o=to;break;default:o=Ja}return u=q1.bind(null,r),o=dn(o,u),r.callbackPriority=a,r.callbackNode=o,a}return u!==null&&u!==null&&It(u),r.callbackPriority=2,r.callbackNode=null,2}function q1(r,a){if(yn!==0&&yn!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(zh()&&r.callbackNode!==o)return null;var u=Xe;return u=no(r,r===yt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(C1(r,u,a),H1(r,ar()),r.callbackNode!=null&&r.callbackNode===o?q1.bind(null,r):null)}function G1(r,a){if(zh())return null;C1(r,a,!0)}function CR(){$R(function(){(lt&6)!==0?dn(Pl,AR):F1()})}function Kp(){return Ps===0&&(Ps=Vl()),Ps}function Q1(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:uo(""+r)}function Y1(r,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,r.id&&o.setAttribute("form",r.id),a.parentNode.insertBefore(o,a),r=new FormData(r),o.parentNode.removeChild(o),r}function RR(r,a,o,u,f){if(a==="submit"&&o&&o.stateNode===f){var g=Q1((f[Lt]||null).action),S=u.submitter;S&&(a=(a=S[Lt]||null)?Q1(a.formAction):S.getAttribute("formAction"),a!==null&&(g=a,S=null));var A=new co("action","action",null,u,f);r.push({event:A,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ps!==0){var U=S?Y1(f,S):new FormData(f);pp(o,{pending:!0,data:U,method:f.method,action:g},null,U)}}else typeof g=="function"&&(A.preventDefault(),U=S?Y1(f,S):new FormData(f),pp(o,{pending:!0,data:U,method:f.method,action:g},g,U))},currentTarget:f}]})}}for(var Xp=0;Xp<km.length;Xp++){var Wp=km[Xp],IR=Wp.toLowerCase(),OR=Wp[0].toUpperCase()+Wp.slice(1);wr(IR,"on"+OR)}wr(C0,"onAnimationEnd"),wr(R0,"onAnimationIteration"),wr(I0,"onAnimationStart"),wr("dblclick","onDoubleClick"),wr("focusin","onFocus"),wr("focusout","onBlur"),wr(QC,"onTransitionRun"),wr(YC,"onTransitionStart"),wr(KC,"onTransitionCancel"),wr(O0,"onTransitionEnd"),pi("onMouseEnter",["mouseout","mouseover"]),pi("onMouseLeave",["mouseout","mouseover"]),pi("onPointerEnter",["pointerout","pointerover"]),pi("onPointerLeave",["pointerout","pointerover"]),Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Er("onBeforeInput",["compositionend","keypress","textInput","paste"]),Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ru));function K1(r,a){a=(a&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;e:{var g=void 0;if(a)for(var S=u.length-1;0<=S;S--){var A=u[S],U=A.instance,Y=A.currentTarget;if(A=A.listener,U!==g&&f.isPropagationStopped())break e;g=A,f.currentTarget=Y;try{g(f)}catch(re){Oh(re)}f.currentTarget=null,g=U}else for(S=0;S<u.length;S++){if(A=u[S],U=A.instance,Y=A.currentTarget,A=A.listener,U!==g&&f.isPropagationStopped())break e;g=A,f.currentTarget=Y;try{g(f)}catch(re){Oh(re)}f.currentTarget=null,g=U}}}}function Fe(r,a){var o=a[jl];o===void 0&&(o=a[jl]=new Set);var u=r+"__bubble";o.has(u)||(X1(a,r,2,!1),o.add(u))}function Zp(r,a,o){var u=0;a&&(u|=4),X1(o,r,u,a)}var Hh="_reactListening"+Math.random().toString(36).slice(2);function Jp(r){if(!r[Hh]){r[Hh]=!0,Ul.forEach(function(o){o!=="selectionchange"&&(DR.has(o)||Zp(o,!1,r),Zp(o,!0,r))});var a=r.nodeType===9?r:r.ownerDocument;a===null||a[Hh]||(a[Hh]=!0,Zp("selectionchange",!1,a))}}function X1(r,a,o,u){switch(__(a)){case 2:var f=iI;break;case 8:f=aI;break;default:f=dg}o=f.bind(null,a,o,r),f=void 0,!ur||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(a,o,{capture:!0,passive:f}):r.addEventListener(a,o,!0):f!==void 0?r.addEventListener(a,o,{passive:f}):r.addEventListener(a,o,!1)}function eg(r,a,o,u,f){var g=u;if((a&1)===0&&(a&2)===0&&u!==null)e:for(;;){if(u===null)return;var S=u.tag;if(S===3||S===4){var A=u.stateNode.containerInfo;if(A===f)break;if(S===4)for(S=u.return;S!==null;){var U=S.tag;if((U===3||U===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;A!==null;){if(S=mi(A),S===null)return;if(U=S.tag,U===5||U===6||U===26||U===27){u=g=S;continue e}A=A.parentNode}}u=u.return}Gc(function(){var Y=g,re=lr(o),oe=[];e:{var W=D0.get(r);if(W!==void 0){var Z=co,De=r;switch(r){case"keypress":if(Ur(o)===0)break e;case"keydown":case"keyup":Z=yo;break;case"focusin":De="focus",Z=mo;break;case"focusout":De="blur",Z=mo;break;case"beforeblur":case"afterblur":Z=mo;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=cr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=eh;break;case C0:case R0:case I0:Z=po;break;case O0:Z=nh;break;case"scroll":case"scrollend":Z=Qc;break;case"wheel":Z=vo;break;case"copy":case"cut":case"paste":Z=go;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=Zl;break;case"toggle":case"beforetoggle":Z=ih}var Ce=(a&4)!==0,dt=!Ce&&(r==="scroll"||r==="scrollend"),q=Ce?W!==null?W+"Capture":null:W;Ce=[];for(var B=Y,Q;B!==null;){var se=B;if(Q=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||Q===null||q===null||(se=hs(B,q),se!=null&&Ce.push(Iu(B,se,Q))),dt)break;B=B.return}0<Ce.length&&(W=new Z(W,De,null,o,re),oe.push({event:W,listeners:Ce}))}}if((a&7)===0){e:{if(W=r==="mouseover"||r==="pointerover",Z=r==="mouseout"||r==="pointerout",W&&o!==vi&&(De=o.relatedTarget||o.fromElement)&&(mi(De)||De[sr]))break e;if((Z||W)&&(W=re.window===re?re:(W=re.ownerDocument)?W.defaultView||W.parentWindow:window,Z?(De=o.relatedTarget||o.toElement,Z=Y,De=De?mi(De):null,De!==null&&(dt=l(De),Ce=De.tag,De!==dt||Ce!==5&&Ce!==27&&Ce!==6)&&(De=null)):(Z=null,De=Y),Z!==De)){if(Ce=cr,se="onMouseLeave",q="onMouseEnter",B="mouse",(r==="pointerout"||r==="pointerover")&&(Ce=Zl,se="onPointerLeave",q="onPointerEnter",B="pointer"),dt=Z==null?W:Nr(Z),Q=De==null?W:Nr(De),W=new Ce(se,B+"leave",Z,o,re),W.target=dt,W.relatedTarget=Q,se=null,mi(re)===Y&&(Ce=new Ce(q,B+"enter",De,o,re),Ce.target=Q,Ce.relatedTarget=dt,se=Ce),dt=se,Z&&De)t:{for(Ce=Z,q=De,B=0,Q=Ce;Q;Q=Fo(Q))B++;for(Q=0,se=q;se;se=Fo(se))Q++;for(;0<B-Q;)Ce=Fo(Ce),B--;for(;0<Q-B;)q=Fo(q),Q--;for(;B--;){if(Ce===q||q!==null&&Ce===q.alternate)break t;Ce=Fo(Ce),q=Fo(q)}Ce=null}else Ce=null;Z!==null&&W1(oe,W,Z,Ce,!1),De!==null&&dt!==null&&W1(oe,dt,De,Ce,!0)}}e:{if(W=Y?Nr(Y):window,Z=W.nodeName&&W.nodeName.toLowerCase(),Z==="select"||Z==="input"&&W.type==="file")var ye=g0;else if(Kt(W))if(y0)ye=HC;else{ye=BC;var ze=zC}else Z=W.nodeName,!Z||Z.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?Y&&ql(Y.elementType)&&(ye=g0):ye=FC;if(ye&&(ye=ye(r,Y))){Ti(oe,ye,o,re);break e}ze&&ze(r,W,Y),r==="focusout"&&Y&&W.type==="number"&&Y.memoizedProps.value!=null&&la(W,"number",W.value)}switch(ze=Y?Nr(Y):window,r){case"focusin":(Kt(ze)||ze.contentEditable==="true")&&(bo=ze,Dm=Y,tu=null);break;case"focusout":tu=Dm=bo=null;break;case"mousedown":Pm=!0;break;case"contextmenu":case"mouseup":case"dragend":Pm=!1,x0(oe,o,re);break;case"selectionchange":if(GC)break;case"keydown":case"keyup":x0(oe,o,re)}var Se;if(Fr)e:{switch(r){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Ye?ee(r,o)&&(Re="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Re="onCompositionStart");Re&&(_&&o.locale!=="ko"&&(Ye||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Ye&&(Se=Ql()):(jr=re,ua="value"in jr?jr.value:jr.textContent,Ye=!0)),ze=qh(Y,Re),0<ze.length&&(Re=new Xl(Re,r,null,o,re),oe.push({event:Re,listeners:ze}),Se?Re.data=Se:(Se=he(o),Se!==null&&(Re.data=Se)))),(Se=v?Yt(r,o):Ke(r,o))&&(Re=qh(Y,"onBeforeInput"),0<Re.length&&(ze=new Xl("onBeforeInput","beforeinput",null,o,re),oe.push({event:ze,listeners:Re}),ze.data=Se)),RR(oe,r,Y,o,re)}K1(oe,a)})}function Iu(r,a,o){return{instance:r,listener:a,currentTarget:o}}function qh(r,a){for(var o=a+"Capture",u=[];r!==null;){var f=r,g=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=hs(r,o),f!=null&&u.unshift(Iu(r,f,g)),f=hs(r,a),f!=null&&u.push(Iu(r,f,g))),r.tag===3)return u;r=r.return}return[]}function Fo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function W1(r,a,o,u,f){for(var g=a._reactName,S=[];o!==null&&o!==u;){var A=o,U=A.alternate,Y=A.stateNode;if(A=A.tag,U!==null&&U===u)break;A!==5&&A!==26&&A!==27||Y===null||(U=Y,f?(Y=hs(o,g),Y!=null&&S.unshift(Iu(o,Y,U))):f||(Y=hs(o,g),Y!=null&&S.push(Iu(o,Y,U)))),o=o.return}S.length!==0&&r.push({event:a,listeners:S})}var PR=/\r\n?/g,MR=/\u0000|\uFFFD/g;function Z1(r){return(typeof r=="string"?r:""+r).replace(PR,`
`).replace(MR,"")}function J1(r,a){return a=Z1(a),Z1(r)===a}function Gh(){}function ft(r,a,o,u,f,g){switch(o){case"children":typeof u=="string"?a==="body"||a==="textarea"&&u===""||or(r,u):(typeof u=="number"||typeof u=="bigint")&&a!=="body"&&or(r,""+u);break;case"className":$r(r,"class",u);break;case"tabIndex":$r(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":$r(r,o,u);break;case"style":Hl(r,u,g);break;case"data":if(a!=="object"){$r(r,"data",u);break}case"src":case"href":if(u===""&&(a!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=uo(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(a!=="input"&&ft(r,a,"name",f.name,f,null),ft(r,a,"formEncType",f.formEncType,f,null),ft(r,a,"formMethod",f.formMethod,f,null),ft(r,a,"formTarget",f.formTarget,f,null)):(ft(r,a,"encType",f.encType,f,null),ft(r,a,"method",f.method,f,null),ft(r,a,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=uo(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=Gh);break;case"onScroll":u!=null&&Fe("scroll",r);break;case"onScrollEnd":u!=null&&Fe("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=uo(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Fe("beforetoggle",r),Fe("toggle",r),oa(r,"popover",u);break;case"xlinkActuate":mn(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":mn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":mn(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":mn(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":mn(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":mn(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":mn(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":mn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":mn(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":oa(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=wm.get(o)||o,oa(r,o,u))}}function tg(r,a,o,u,f,g){switch(o){case"style":Hl(r,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof u=="string"?or(r,u):(typeof u=="number"||typeof u=="bigint")&&or(r,""+u);break;case"onScroll":u!=null&&Fe("scroll",r);break;case"onScrollEnd":u!=null&&Fe("scrollend",r);break;case"onClick":u!=null&&(r.onclick=Gh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!io.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),a=o.slice(2,f?o.length-7:void 0),g=r[Lt]||null,g=g!=null?g[o]:null,typeof g=="function"&&r.removeEventListener(a,g,f),typeof u=="function")){typeof g!="function"&&g!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(a,u,f);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):oa(r,o,u)}}}function vn(r,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fe("error",r),Fe("load",r);var u=!1,f=!1,g;for(g in o)if(o.hasOwnProperty(g)){var S=o[g];if(S!=null)switch(g){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:ft(r,a,g,S,o,null)}}f&&ft(r,a,"srcSet",o.srcSet,o,null),u&&ft(r,a,"src",o.src,o,null);return;case"input":Fe("invalid",r);var A=g=S=f=null,U=null,Y=null;for(u in o)if(o.hasOwnProperty(u)){var re=o[u];if(re!=null)switch(u){case"name":f=re;break;case"type":S=re;break;case"checked":U=re;break;case"defaultChecked":Y=re;break;case"value":g=re;break;case"defaultValue":A=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(i(137,a));break;default:ft(r,a,u,re,o,null)}}ls(r,g,A,U,Y,S,f,!1),lo(r);return;case"select":Fe("invalid",r),u=S=g=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":g=A;break;case"defaultValue":S=A;break;case"multiple":u=A;default:ft(r,a,f,A,o,null)}a=g,o=S,r.multiple=!!u,a!=null?yi(r,!!u,a,!1):o!=null&&yi(r,!!u,o,!0);return;case"textarea":Fe("invalid",r),g=f=u=null;for(S in o)if(o.hasOwnProperty(S)&&(A=o[S],A!=null))switch(S){case"value":u=A;break;case"defaultValue":f=A;break;case"children":g=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(i(91));break;default:ft(r,a,S,A,o,null)}us(r,u,f,g),lo(r);return;case"option":for(U in o)if(o.hasOwnProperty(U)&&(u=o[U],u!=null))switch(U){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ft(r,a,U,u,o,null)}return;case"dialog":Fe("beforetoggle",r),Fe("toggle",r),Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":Fe("load",r);break;case"video":case"audio":for(u=0;u<Ru.length;u++)Fe(Ru[u],r);break;case"image":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"embed":case"source":case"link":Fe("error",r),Fe("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in o)if(o.hasOwnProperty(Y)&&(u=o[Y],u!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:ft(r,a,Y,u,o,null)}return;default:if(ql(a)){for(re in o)o.hasOwnProperty(re)&&(u=o[re],u!==void 0&&tg(r,a,re,u,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(u=o[A],u!=null&&ft(r,a,A,u,o,null))}function kR(r,a,o,u){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,S=null,A=null,U=null,Y=null,re=null;for(Z in o){var oe=o[Z];if(o.hasOwnProperty(Z)&&oe!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":U=oe;default:u.hasOwnProperty(Z)||ft(r,a,Z,null,u,oe)}}for(var W in u){var Z=u[W];if(oe=o[W],u.hasOwnProperty(W)&&(Z!=null||oe!=null))switch(W){case"type":g=Z;break;case"name":f=Z;break;case"checked":Y=Z;break;case"defaultChecked":re=Z;break;case"value":S=Z;break;case"defaultValue":A=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,a));break;default:Z!==oe&&ft(r,a,W,Z,u,oe)}}Qn(r,S,A,U,Y,re,g,f);return;case"select":Z=S=A=W=null;for(g in o)if(U=o[g],o.hasOwnProperty(g)&&U!=null)switch(g){case"value":break;case"multiple":Z=U;default:u.hasOwnProperty(g)||ft(r,a,g,null,u,U)}for(f in u)if(g=u[f],U=o[f],u.hasOwnProperty(f)&&(g!=null||U!=null))switch(f){case"value":W=g;break;case"defaultValue":A=g;break;case"multiple":S=g;default:g!==U&&ft(r,a,f,g,u,U)}a=A,o=S,u=Z,W!=null?yi(r,!!o,W,!1):!!u!=!!o&&(a!=null?yi(r,!!o,a,!0):yi(r,!!o,o?[]:"",!1));return;case"textarea":Z=W=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!u.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ft(r,a,A,null,u,f)}for(S in u)if(f=u[S],g=o[S],u.hasOwnProperty(S)&&(f!=null||g!=null))switch(S){case"value":W=f;break;case"defaultValue":Z=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==g&&ft(r,a,S,f,u,g)}ct(r,W,Z);return;case"option":for(var De in o)if(W=o[De],o.hasOwnProperty(De)&&W!=null&&!u.hasOwnProperty(De))switch(De){case"selected":r.selected=!1;break;default:ft(r,a,De,null,u,W)}for(U in u)if(W=u[U],Z=o[U],u.hasOwnProperty(U)&&W!==Z&&(W!=null||Z!=null))switch(U){case"selected":r.selected=W&&typeof W!="function"&&typeof W!="symbol";break;default:ft(r,a,U,W,u,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ce in o)W=o[Ce],o.hasOwnProperty(Ce)&&W!=null&&!u.hasOwnProperty(Ce)&&ft(r,a,Ce,null,u,W);for(Y in u)if(W=u[Y],Z=o[Y],u.hasOwnProperty(Y)&&W!==Z&&(W!=null||Z!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(i(137,a));break;default:ft(r,a,Y,W,u,Z)}return;default:if(ql(a)){for(var dt in o)W=o[dt],o.hasOwnProperty(dt)&&W!==void 0&&!u.hasOwnProperty(dt)&&tg(r,a,dt,void 0,u,W);for(re in u)W=u[re],Z=o[re],!u.hasOwnProperty(re)||W===Z||W===void 0&&Z===void 0||tg(r,a,re,W,u,Z);return}}for(var q in o)W=o[q],o.hasOwnProperty(q)&&W!=null&&!u.hasOwnProperty(q)&&ft(r,a,q,null,u,W);for(oe in u)W=u[oe],Z=o[oe],!u.hasOwnProperty(oe)||W===Z||W==null&&Z==null||ft(r,a,oe,W,u,Z)}var ng=null,rg=null;function Qh(r){return r.nodeType===9?r:r.ownerDocument}function e_(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t_(r,a){if(r===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&a==="foreignObject"?0:r}function ig(r,a){return r==="textarea"||r==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ag=null;function VR(){var r=window.event;return r&&r.type==="popstate"?r===ag?!1:(ag=r,!0):(ag=null,!1)}var n_=typeof setTimeout=="function"?setTimeout:void 0,NR=typeof clearTimeout=="function"?clearTimeout:void 0,r_=typeof Promise=="function"?Promise:void 0,$R=typeof queueMicrotask=="function"?queueMicrotask:typeof r_<"u"?function(r){return r_.resolve(null).then(r).catch(LR)}:n_;function LR(r){setTimeout(function(){throw r})}function xa(r){return r==="head"}function i_(r,a){var o=a,u=0,f=0;do{var g=o.nextSibling;if(r.removeChild(o),g&&g.nodeType===8)if(o=g.data,o==="/$"){if(0<u&&8>u){o=u;var S=r.ownerDocument;if(o&1&&Ou(S.documentElement),o&2&&Ou(S.body),o&4)for(o=S.head,Ou(o),S=o.firstChild;S;){var A=S.nextSibling,U=S.nodeName;S[is]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&S.rel.toLowerCase()==="stylesheet"||o.removeChild(S),S=A}}if(f===0){r.removeChild(g),Lu(a);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=g}while(o);Lu(a)}function sg(r){var a=r.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":sg(o),sa(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function jR(r,a,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==a.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[is])switch(a){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(g=r.getAttribute("rel"),g==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(g!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(g=r.getAttribute("src"),(g!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(a==="input"&&r.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===g)return r}else return r;if(r=Ar(r.nextSibling),r===null)break}return null}function UR(r,a,o){if(a==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=Ar(r.nextSibling),r===null))return null;return r}function og(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function zR(r,a){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")a();else{var u=function(){a(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function Ar(r){for(;r!=null;r=r.nextSibling){var a=r.nodeType;if(a===1||a===3)break;if(a===8){if(a=r.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return r}var lg=null;function a_(r){r=r.previousSibling;for(var a=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(a===0)return r;a--}else o==="/$"&&a++}r=r.previousSibling}return null}function s_(r,a,o){switch(a=Qh(o),r){case"html":if(r=a.documentElement,!r)throw Error(i(452));return r;case"head":if(r=a.head,!r)throw Error(i(453));return r;case"body":if(r=a.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Ou(r){for(var a=r.attributes;a.length;)r.removeAttributeNode(a[0]);sa(r)}var yr=new Map,o_=new Set;function Yh(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Ni=ce.d;ce.d={f:BR,r:FR,D:HR,C:qR,L:GR,m:QR,X:KR,S:YR,M:XR};function BR(){var r=Ni.f(),a=jh();return r||a}function FR(r){var a=Vr(r);a!==null&&a.tag===5&&a.type==="form"?Cb(a):Ni.r(r)}var Ho=typeof document>"u"?null:document;function l_(r,a,o){var u=Ho;if(u&&typeof a=="string"&&a){var f=jt(a);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),o_.has(f)||(o_.add(f),r={rel:r,crossOrigin:o,href:a},u.querySelector(f)===null&&(a=u.createElement("link"),vn(a,"link",r),kt(a),u.head.appendChild(a)))}}function HR(r){Ni.D(r),l_("dns-prefetch",r,null)}function qR(r,a){Ni.C(r,a),l_("preconnect",r,a)}function GR(r,a,o){Ni.L(r,a,o);var u=Ho;if(u&&r&&a){var f='link[rel="preload"][as="'+jt(a)+'"]';a==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+jt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+jt(o.imageSizes)+'"]')):f+='[href="'+jt(r)+'"]';var g=f;switch(a){case"style":g=qo(r);break;case"script":g=Go(r)}yr.has(g)||(r=y({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:r,as:a},o),yr.set(g,r),u.querySelector(f)!==null||a==="style"&&u.querySelector(Du(g))||a==="script"&&u.querySelector(Pu(g))||(a=u.createElement("link"),vn(a,"link",r),kt(a),u.head.appendChild(a)))}}function QR(r,a){Ni.m(r,a);var o=Ho;if(o&&r){var u=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+jt(u)+'"][href="'+jt(r)+'"]',g=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Go(r)}if(!yr.has(g)&&(r=y({rel:"modulepreload",href:r},a),yr.set(g,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Pu(g)))return}u=o.createElement("link"),vn(u,"link",r),kt(u),o.head.appendChild(u)}}}function YR(r,a,o){Ni.S(r,a,o);var u=Ho;if(u&&r){var f=kn(u).hoistableStyles,g=qo(r);a=a||"default";var S=f.get(g);if(!S){var A={loading:0,preload:null};if(S=u.querySelector(Du(g)))A.loading=5;else{r=y({rel:"stylesheet",href:r,"data-precedence":a},o),(o=yr.get(g))&&ug(r,o);var U=S=u.createElement("link");kt(U),vn(U,"link",r),U._p=new Promise(function(Y,re){U.onload=Y,U.onerror=re}),U.addEventListener("load",function(){A.loading|=1}),U.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Kh(S,a,u)}S={type:"stylesheet",instance:S,count:1,state:A},f.set(g,S)}}}function KR(r,a){Ni.X(r,a);var o=Ho;if(o&&r){var u=kn(o).hoistableScripts,f=Go(r),g=u.get(f);g||(g=o.querySelector(Pu(f)),g||(r=y({src:r,async:!0},a),(a=yr.get(f))&&cg(r,a),g=o.createElement("script"),kt(g),vn(g,"link",r),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(f,g))}}function XR(r,a){Ni.M(r,a);var o=Ho;if(o&&r){var u=kn(o).hoistableScripts,f=Go(r),g=u.get(f);g||(g=o.querySelector(Pu(f)),g||(r=y({src:r,async:!0,type:"module"},a),(a=yr.get(f))&&cg(r,a),g=o.createElement("script"),kt(g),vn(g,"link",r),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(f,g))}}function u_(r,a,o,u){var f=(f=ge.current)?Yh(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=qo(o.href),o=kn(f).hoistableStyles,u=o.get(a),u||(u={type:"style",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=qo(o.href);var g=kn(f).hoistableStyles,S=g.get(r);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(r,S),(g=f.querySelector(Du(r)))&&!g._p&&(S.instance=g,S.state.loading=5),yr.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},yr.set(r,o),g||WR(f,r,o,S.state))),a&&u===null)throw Error(i(528,""));return S}if(a&&u!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Go(o),o=kn(f).hoistableScripts,u=o.get(a),u||(u={type:"script",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function qo(r){return'href="'+jt(r)+'"'}function Du(r){return'link[rel="stylesheet"]['+r+"]"}function c_(r){return y({},r,{"data-precedence":r.precedence,precedence:null})}function WR(r,a,o,u){r.querySelector('link[rel="preload"][as="style"]['+a+"]")?u.loading=1:(a=r.createElement("link"),u.preload=a,a.addEventListener("load",function(){return u.loading|=1}),a.addEventListener("error",function(){return u.loading|=2}),vn(a,"link",o),kt(a),r.head.appendChild(a))}function Go(r){return'[src="'+jt(r)+'"]'}function Pu(r){return"script[async]"+r}function h_(r,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var u=r.querySelector('style[data-href~="'+jt(o.href)+'"]');if(u)return a.instance=u,kt(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),kt(u),vn(u,"style",f),Kh(u,o.precedence,r),a.instance=u;case"stylesheet":f=qo(o.href);var g=r.querySelector(Du(f));if(g)return a.state.loading|=4,a.instance=g,kt(g),g;u=c_(o),(f=yr.get(f))&&ug(u,f),g=(r.ownerDocument||r).createElement("link"),kt(g);var S=g;return S._p=new Promise(function(A,U){S.onload=A,S.onerror=U}),vn(g,"link",u),a.state.loading|=4,Kh(g,o.precedence,r),a.instance=g;case"script":return g=Go(o.src),(f=r.querySelector(Pu(g)))?(a.instance=f,kt(f),f):(u=o,(f=yr.get(g))&&(u=y({},o),cg(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),kt(f),vn(f,"link",u),r.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(u=a.instance,a.state.loading|=4,Kh(u,o.precedence,r));return a.instance}function Kh(r,a,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,g=f,S=0;S<u.length;S++){var A=u[S];if(A.dataset.precedence===a)g=A;else if(g!==f)break}g?g.parentNode.insertBefore(r,g.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(r,a.firstChild))}function ug(r,a){r.crossOrigin==null&&(r.crossOrigin=a.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=a.referrerPolicy),r.title==null&&(r.title=a.title)}function cg(r,a){r.crossOrigin==null&&(r.crossOrigin=a.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=a.referrerPolicy),r.integrity==null&&(r.integrity=a.integrity)}var Xh=null;function f_(r,a,o){if(Xh===null){var u=new Map,f=Xh=new Map;f.set(o,u)}else f=Xh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var g=o[f];if(!(g[is]||g[Qt]||r==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var S=g.getAttribute(a)||"";S=r+S;var A=u.get(S);A?A.push(g):u.set(S,[g])}}return u}function d_(r,a,o){r=r.ownerDocument||r,r.head.insertBefore(o,a==="title"?r.querySelector("head > title"):null)}function ZR(r,a,o){if(o===1||a.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return r=a.disabled,typeof a.precedence=="string"&&r==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function m_(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Mu=null;function JR(){}function eI(r,a,o){if(Mu===null)throw Error(i(475));var u=Mu;if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=qo(o.href),g=r.querySelector(Du(f));if(g){r=g._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=Wh.bind(u),r.then(u,u)),a.state.loading|=4,a.instance=g,kt(g);return}g=r.ownerDocument||r,o=c_(o),(f=yr.get(f))&&ug(o,f),g=g.createElement("link"),kt(g);var S=g;S._p=new Promise(function(A,U){S.onload=A,S.onerror=U}),vn(g,"link",o),a.instance=g}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(a,r),(r=a.state.preload)&&(a.state.loading&3)===0&&(u.count++,a=Wh.bind(u),r.addEventListener("load",a),r.addEventListener("error",a))}}function tI(){if(Mu===null)throw Error(i(475));var r=Mu;return r.stylesheets&&r.count===0&&hg(r,r.stylesheets),0<r.count?function(a){var o=setTimeout(function(){if(r.stylesheets&&hg(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=a,function(){r.unsuspend=null,clearTimeout(o)}}:null}function Wh(){if(this.count--,this.count===0){if(this.stylesheets)hg(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Zh=null;function hg(r,a){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Zh=new Map,a.forEach(nI,r),Zh=null,Wh.call(r))}function nI(r,a){if(!(a.state.loading&4)){var o=Zh.get(r);if(o)var u=o.get(null);else{o=new Map,Zh.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var S=f[g];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(o.set(S.dataset.precedence,S),u=S)}u&&o.set(null,u)}f=a.instance,S=f.getAttribute("data-precedence"),g=o.get(S)||u,g===u&&o.set(null,f),o.set(S,f),this.count++,u=Wh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),g?g.parentNode.insertBefore(f,g.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),a.state.loading|=4}}var ku={$$typeof:F,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function rI(r,a,o,u,f,g,S,A){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fi(0),this.hiddenUpdates=fi(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function p_(r,a,o,u,f,g,S,A,U,Y,re,oe){return r=new rI(r,a,o,S,A,U,Y,oe),a=1,g===!0&&(a|=24),g=Kn(3,null,null,a),r.current=g,g.stateNode=r,a=Gm(),a.refCount++,r.pooledCache=a,a.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:a},Xm(g),r}function g_(r){return r?(r=To,r):To}function y_(r,a,o,u,f,g){f=g_(f),u.context===null?u.context=f:u.pendingContext=f,u=fa(a),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=da(r,u,a),o!==null&&(er(o,r,a),cu(o,r,a))}function v_(r,a){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<a?o:a}}function fg(r,a){v_(r,a),(r=r.alternate)&&v_(r,a)}function b_(r){if(r.tag===13){var a=Eo(r,67108864);a!==null&&er(a,r,67108864),fg(r,67108864)}}var Jh=!0;function iI(r,a,o,u){var f=X.T;X.T=null;var g=ce.p;try{ce.p=2,dg(r,a,o,u)}finally{ce.p=g,X.T=f}}function aI(r,a,o,u){var f=X.T;X.T=null;var g=ce.p;try{ce.p=8,dg(r,a,o,u)}finally{ce.p=g,X.T=f}}function dg(r,a,o,u){if(Jh){var f=mg(u);if(f===null)eg(r,a,u,ef,o),S_(r,u);else if(oI(f,r,a,o,u))u.stopPropagation();else if(S_(r,u),a&4&&-1<sI.indexOf(r)){for(;f!==null;){var g=Vr(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var S=Sr(g.pendingLanes);if(S!==0){var A=g;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var U=1<<31-wn(S);A.entanglements[1]|=U,S&=~U}Kr(g),(lt&6)===0&&($h=ar()+500,Cu(0))}}break;case 13:A=Eo(g,2),A!==null&&er(A,g,2),jh(),fg(g,2)}if(g=mg(u),g===null&&eg(r,a,u,ef,o),g===f)break;f=g}f!==null&&u.stopPropagation()}else eg(r,a,u,null,o)}}function mg(r){return r=lr(r),pg(r)}var ef=null;function pg(r){if(ef=null,r=mi(r),r!==null){var a=l(r);if(a===null)r=null;else{var o=a.tag;if(o===13){if(r=c(a),r!==null)return r;r=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;r=null}else a!==r&&(r=null)}}return ef=r,null}function __(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vm()){case Pl:return 2;case eo:return 8;case Ja:case bm:return 32;case to:return 268435456;default:return 32}default:return 32}}var gg=!1,Aa=null,Ca=null,Ra=null,Vu=new Map,Nu=new Map,Ia=[],sI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function S_(r,a){switch(r){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Vu.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nu.delete(a.pointerId)}}function $u(r,a,o,u,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:a,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[f]},a!==null&&(a=Vr(a),a!==null&&b_(a)),r):(r.eventSystemFlags|=u,a=r.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),r)}function oI(r,a,o,u,f){switch(a){case"focusin":return Aa=$u(Aa,r,a,o,u,f),!0;case"dragenter":return Ca=$u(Ca,r,a,o,u,f),!0;case"mouseover":return Ra=$u(Ra,r,a,o,u,f),!0;case"pointerover":var g=f.pointerId;return Vu.set(g,$u(Vu.get(g)||null,r,a,o,u,f)),!0;case"gotpointercapture":return g=f.pointerId,Nu.set(g,$u(Nu.get(g)||null,r,a,o,u,f)),!0}return!1}function E_(r){var a=mi(r.target);if(a!==null){var o=l(a);if(o!==null){if(a=o.tag,a===13){if(a=c(o),a!==null){r.blockedOn=a,jc(r.priority,function(){if(o.tag===13){var u=Jn();u=ra(u);var f=Eo(o,u);f!==null&&er(f,o,u),fg(o,u)}});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function tf(r){if(r.blockedOn!==null)return!1;for(var a=r.targetContainers;0<a.length;){var o=mg(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);vi=u,o.target.dispatchEvent(u),vi=null}else return a=Vr(o),a!==null&&b_(a),r.blockedOn=o,!1;a.shift()}return!0}function T_(r,a,o){tf(r)&&o.delete(a)}function lI(){gg=!1,Aa!==null&&tf(Aa)&&(Aa=null),Ca!==null&&tf(Ca)&&(Ca=null),Ra!==null&&tf(Ra)&&(Ra=null),Vu.forEach(T_),Nu.forEach(T_)}function nf(r,a){r.blockedOn===a&&(r.blockedOn=null,gg||(gg=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,lI)))}var rf=null;function w_(r){rf!==r&&(rf=r,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){rf===r&&(rf=null);for(var a=0;a<r.length;a+=3){var o=r[a],u=r[a+1],f=r[a+2];if(typeof u!="function"){if(pg(u||o)===null)continue;break}var g=Vr(o);g!==null&&(r.splice(a,3),a-=3,pp(g,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Lu(r){function a(U){return nf(U,r)}Aa!==null&&nf(Aa,r),Ca!==null&&nf(Ca,r),Ra!==null&&nf(Ra,r),Vu.forEach(a),Nu.forEach(a);for(var o=0;o<Ia.length;o++){var u=Ia[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<Ia.length&&(o=Ia[0],o.blockedOn===null);)E_(o),o.blockedOn===null&&Ia.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],g=o[u+1],S=f[Lt]||null;if(typeof g=="function")S||w_(o);else if(S){var A=null;if(g&&g.hasAttribute("formAction")){if(f=g,S=g[Lt]||null)A=S.formAction;else if(pg(f)!==null)continue}else A=S.action;typeof A=="function"?o[u+1]=A:(o.splice(u,3),u-=3),w_(o)}}}function yg(r){this._internalRoot=r}af.prototype.render=yg.prototype.render=function(r){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,u=Jn();y_(o,u,r,a,null,null)},af.prototype.unmount=yg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var a=r.containerInfo;y_(r.current,2,null,r,null,null),jh(),a[sr]=null}};function af(r){this._internalRoot=r}af.prototype.unstable_scheduleHydration=function(r){if(r){var a=ia();r={blockedOn:null,target:r,priority:a};for(var o=0;o<Ia.length&&a!==0&&a<Ia[o].priority;o++);Ia.splice(o,0,r),o===0&&E_(r)}};var x_=e.version;if(x_!=="19.1.1")throw Error(i(527,x_,"19.1.1"));ce.findDOMNode=function(r){var a=r._reactInternals;if(a===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=d(a),r=r!==null?p(r):null,r=r===null?null:r.stateNode,r};var uI={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sf.isDisabled&&sf.supportsFiber)try{Ot=sf.inject(uI),ot=sf}catch{}}return qu.createRoot=function(r,a){if(!s(r))throw Error(i(299));var o=!1,u="",f=zb,g=Bb,S=Fb,A=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(A=a.unstable_transitionCallbacks)),a=p_(r,1,!1,null,null,o,u,f,g,S,A,null),r[sr]=a.current,Jp(r),new yg(a)},qu.hydrateRoot=function(r,a,o){if(!s(r))throw Error(i(299));var u=!1,f="",g=zb,S=Bb,A=Fb,U=null,Y=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(S=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(U=o.unstable_transitionCallbacks),o.formState!==void 0&&(Y=o.formState)),a=p_(r,1,!0,a,o??null,u,f,g,S,A,U,Y),a.context=g_(null),o=a.current,u=Jn(),u=ra(u),f=fa(u),f.callback=null,da(o,f,u),o=u,a.current.lanes=o,di(a,o),Kr(a),r[sr]=a.current,Jp(r),new af(a)},qu.version="19.1.1",qu}var mT;function qj(){if(mT)return ey.exports;mT=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),ey.exports=Hj(),ey.exports}var Gj=qj();const Qj=({children:t})=>{const[e,n]=O.useState(null),[i,s]=O.useState(!0),l=Wa();O.useEffect(()=>{const y=BV(bd,b=>{n(b),s(!1)});return()=>y()},[]);const c=O.useCallback(async()=>{await rN()},[]),m=O.useCallback(async(y=!1)=>{y?l.open():await EE()},[l]),d=O.useCallback(async()=>{await EE(),l.close()},[l]),p=O.useMemo(()=>({user:e,loading:i,signInWithGoogle:c,signOut:m,confirmLogoutModal:l,handleConfirmLogout:d}),[e,i,c,m,l,d]);return T.jsx(pT.Provider,{value:p,children:t})};Gj.createRoot(document.getElementById("root")).render(T.jsx(O.StrictMode,{children:T.jsx(Qj,{children:T.jsx(zj,{})})}));

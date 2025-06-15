(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function nl(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var od={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function xy(){if(j_)return zo;j_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return zo.Fragment=t,zo.jsx=i,zo.jsxs=i,zo}var Y_;function Sy(){return Y_||(Y_=1,od.exports=xy()),od.exports}var j=Sy(),ld={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function yy(){if(Z_)return ue;Z_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function y(L,J,_t){this.props=L,this.context=J,this.refs=w,this.updater=_t||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,J){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,J,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function v(){}v.prototype=y.prototype;function N(L,J,_t){this.props=L,this.context=J,this.refs=w,this.updater=_t||M}var U=N.prototype=new v;U.constructor=N,b(U,y.prototype),U.isPureReactComponent=!0;var C=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function P(L,J,_t,xt,Q,pt){return _t=pt.ref,{$$typeof:s,type:L,key:J,ref:_t!==void 0?_t:null,props:pt}}function V(L,J){return P(L.type,J,void 0,void 0,void 0,L.props)}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function A(L){var J={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(_t){return J[_t]})}var G=/\/+/g;function ct(L,J){return typeof L=="object"&&L!==null&&L.key!=null?A(""+L.key):J.toString(36)}function lt(){}function gt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(lt,lt):(L.status="pending",L.then(function(J){L.status==="pending"&&(L.status="fulfilled",L.value=J)},function(J){L.status==="pending"&&(L.status="rejected",L.reason=J)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ht(L,J,_t,xt,Q){var pt=typeof L;(pt==="undefined"||pt==="boolean")&&(L=null);var Mt=!1;if(L===null)Mt=!0;else switch(pt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(L.$$typeof){case s:case t:Mt=!0;break;case g:return Mt=L._init,ht(Mt(L._payload),J,_t,xt,Q)}}if(Mt)return Q=Q(L),Mt=xt===""?"."+ct(L,0):xt,C(Q)?(_t="",Mt!=null&&(_t=Mt.replace(G,"$&/")+"/"),ht(Q,J,_t,"",function(re){return re})):Q!=null&&(D(Q)&&(Q=V(Q,_t+(Q.key==null||L&&L.key===Q.key?"":(""+Q.key).replace(G,"$&/")+"/")+Mt)),J.push(Q)),1;Mt=0;var Ct=xt===""?".":xt+":";if(C(L))for(var wt=0;wt<L.length;wt++)xt=L[wt],pt=Ct+ct(xt,wt),Mt+=ht(xt,J,_t,pt,Q);else if(wt=x(L),typeof wt=="function")for(L=wt.call(L),wt=0;!(xt=L.next()).done;)xt=xt.value,pt=Ct+ct(xt,wt++),Mt+=ht(xt,J,_t,pt,Q);else if(pt==="object"){if(typeof L.then=="function")return ht(gt(L),J,_t,xt,Q);throw J=String(L),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function B(L,J,_t){if(L==null)return L;var xt=[],Q=0;return ht(L,xt,"","",function(pt){return J.call(_t,pt,Q++)}),xt}function Z(L){if(L._status===-1){var J=L._result;J=J(),J.then(function(_t){(L._status===0||L._status===-1)&&(L._status=1,L._result=_t)},function(_t){(L._status===0||L._status===-1)&&(L._status=2,L._result=_t)}),L._status===-1&&(L._status=0,L._result=J)}if(L._status===1)return L._result.default;throw L._result}var W=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Et(){}return ue.Children={map:B,forEach:function(L,J,_t){B(L,function(){J.apply(this,arguments)},_t)},count:function(L){var J=0;return B(L,function(){J++}),J},toArray:function(L){return B(L,function(J){return J})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ue.Component=y,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=N,ue.StrictMode=r,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ue.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},ue.cache=function(L){return function(){return L.apply(null,arguments)}},ue.cloneElement=function(L,J,_t){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var xt=b({},L.props),Q=L.key,pt=void 0;if(J!=null)for(Mt in J.ref!==void 0&&(pt=void 0),J.key!==void 0&&(Q=""+J.key),J)!z.call(J,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&J.ref===void 0||(xt[Mt]=J[Mt]);var Mt=arguments.length-2;if(Mt===1)xt.children=_t;else if(1<Mt){for(var Ct=Array(Mt),wt=0;wt<Mt;wt++)Ct[wt]=arguments[wt+2];xt.children=Ct}return P(L.type,Q,void 0,void 0,pt,xt)},ue.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ue.createElement=function(L,J,_t){var xt,Q={},pt=null;if(J!=null)for(xt in J.key!==void 0&&(pt=""+J.key),J)z.call(J,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(Q[xt]=J[xt]);var Mt=arguments.length-2;if(Mt===1)Q.children=_t;else if(1<Mt){for(var Ct=Array(Mt),wt=0;wt<Mt;wt++)Ct[wt]=arguments[wt+2];Q.children=Ct}if(L&&L.defaultProps)for(xt in Mt=L.defaultProps,Mt)Q[xt]===void 0&&(Q[xt]=Mt[xt]);return P(L,pt,void 0,void 0,null,Q)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(L){return{$$typeof:h,render:L}},ue.isValidElement=D,ue.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:Z}},ue.memo=function(L,J){return{$$typeof:p,type:L,compare:J===void 0?null:J}},ue.startTransition=function(L){var J=F.T,_t={};F.T=_t;try{var xt=L(),Q=F.S;Q!==null&&Q(_t,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(Et,W)}catch(pt){W(pt)}finally{F.T=J}},ue.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ue.use=function(L){return F.H.use(L)},ue.useActionState=function(L,J,_t){return F.H.useActionState(L,J,_t)},ue.useCallback=function(L,J){return F.H.useCallback(L,J)},ue.useContext=function(L){return F.H.useContext(L)},ue.useDebugValue=function(){},ue.useDeferredValue=function(L,J){return F.H.useDeferredValue(L,J)},ue.useEffect=function(L,J,_t){var xt=F.H;if(typeof _t=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(L,J)},ue.useId=function(){return F.H.useId()},ue.useImperativeHandle=function(L,J,_t){return F.H.useImperativeHandle(L,J,_t)},ue.useInsertionEffect=function(L,J){return F.H.useInsertionEffect(L,J)},ue.useLayoutEffect=function(L,J){return F.H.useLayoutEffect(L,J)},ue.useMemo=function(L,J){return F.H.useMemo(L,J)},ue.useOptimistic=function(L,J){return F.H.useOptimistic(L,J)},ue.useReducer=function(L,J,_t){return F.H.useReducer(L,J,_t)},ue.useRef=function(L){return F.H.useRef(L)},ue.useState=function(L){return F.H.useState(L)},ue.useSyncExternalStore=function(L,J,_t){return F.H.useSyncExternalStore(L,J,_t)},ue.useTransition=function(){return F.H.useTransition()},ue.version="19.1.0",ue}var K_;function Jh(){return K_||(K_=1,ld.exports=yy()),ld.exports}var yt=Jh();const la=nl(yt);var cd={exports:{}},Fo={},ud={exports:{}},fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function My(){return Q_||(Q_=1,function(s){function t(B,Z){var W=B.length;B.push(Z);t:for(;0<W;){var Et=W-1>>>1,L=B[Et];if(0<l(L,Z))B[Et]=Z,B[W]=L,W=Et;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],W=B.pop();if(W!==Z){B[0]=W;t:for(var Et=0,L=B.length,J=L>>>1;Et<J;){var _t=2*(Et+1)-1,xt=B[_t],Q=_t+1,pt=B[Q];if(0>l(xt,W))Q<L&&0>l(pt,xt)?(B[Et]=pt,B[Q]=W,Et=Q):(B[Et]=xt,B[_t]=W,Et=_t);else if(Q<L&&0>l(pt,W))B[Et]=pt,B[Q]=W,Et=Q;else break t}}return Z}function l(B,Z){var W=B.sortIndex-Z.sortIndex;return W!==0?W:B.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,_=null,x=3,M=!1,b=!1,w=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=B)r(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function F(B){if(w=!1,C(B),!b)if(i(m)!==null)b=!0,z||(z=!0,ct());else{var Z=i(p);Z!==null&&ht(F,Z.startTime-B)}}var z=!1,P=-1,V=5,D=-1;function A(){return y?!0:!(s.unstable_now()-D<V)}function G(){if(y=!1,z){var B=s.unstable_now();D=B;var Z=!0;try{t:{b=!1,w&&(w=!1,N(P),P=-1),M=!0;var W=x;try{e:{for(C(B),_=i(m);_!==null&&!(_.expirationTime>B&&A());){var Et=_.callback;if(typeof Et=="function"){_.callback=null,x=_.priorityLevel;var L=Et(_.expirationTime<=B);if(B=s.unstable_now(),typeof L=="function"){_.callback=L,C(B),Z=!0;break e}_===i(m)&&r(m),C(B)}else r(m);_=i(m)}if(_!==null)Z=!0;else{var J=i(p);J!==null&&ht(F,J.startTime-B),Z=!1}}break t}finally{_=null,x=W,M=!1}Z=void 0}}finally{Z?ct():z=!1}}}var ct;if(typeof U=="function")ct=function(){U(G)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,gt=lt.port2;lt.port1.onmessage=G,ct=function(){gt.postMessage(null)}}else ct=function(){v(G,0)};function ht(B,Z){P=v(function(){B(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var W=x;x=Z;try{return B()}finally{x=W}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=x;x=B;try{return Z()}finally{x=W}},s.unstable_scheduleCallback=function(B,Z,W){var Et=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Et+W:Et):W=Et,B){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=W+L,B={id:g++,callback:Z,priorityLevel:B,startTime:W,expirationTime:L,sortIndex:-1},W>Et?(B.sortIndex=W,t(p,B),i(m)===null&&B===i(p)&&(w?(N(P),P=-1):w=!0,ht(F,W-Et))):(B.sortIndex=L,t(m,B),b||M||(b=!0,z||(z=!0,ct()))),B},s.unstable_shouldYield=A,s.unstable_wrapCallback=function(B){var Z=x;return function(){var W=x;x=Z;try{return B.apply(this,arguments)}finally{x=W}}}}(fd)),fd}var J_;function Ey(){return J_||(J_=1,ud.exports=My()),ud.exports}var dd={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function Ty(){if($_)return Cn;$_=1;var s=Jh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Cn.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var tv;function S0(){if(tv)return dd.exports;tv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),dd.exports=Ty(),dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function by(){if(ev)return Fo;ev=1;var s=Ey(),t=Jh(),i=S0();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return h(u),e;if(f===o)return h(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,o=f;break}if(T===o){S=!0,o=u,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,o=u;break}if(T===o){S=!0,o=f,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case y:return"Profiler";case w:return"StrictMode";case F:return"Suspense";case z:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case U:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:gt(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return gt(e(n))}catch{}}return null}var ht=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},Et=[],L=-1;function J(e){return{current:e}}function _t(e){0>L||(e.current=Et[L],Et[L]=null,L--)}function xt(e,n){L++,Et[L]=e.current,e.current=n}var Q=J(null),pt=J(null),Mt=J(null),Ct=J(null);function wt(e,n){switch(xt(Mt,n),xt(pt,e),xt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?y_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=y_(n),e=M_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_t(Q),xt(Q,e)}function re(){_t(Q),_t(pt),_t(Mt)}function Xt(e){e.memoizedState!==null&&xt(Ct,e);var n=Q.current,a=M_(n,e.type);n!==a&&(xt(pt,e),xt(Q,a))}function be(e){pt.current===e&&(_t(Q),_t(pt)),Ct.current===e&&(_t(Ct),No._currentValue=W)}var Ee=Object.prototype.hasOwnProperty,ce=s.unstable_scheduleCallback,H=s.unstable_cancelCallback,le=s.unstable_shouldYield,me=s.unstable_requestPaint,oe=s.unstable_now,Vt=s.unstable_getCurrentPriorityLevel,_e=s.unstable_ImmediatePriority,Yt=s.unstable_UserBlockingPriority,ie=s.unstable_NormalPriority,je=s.unstable_LowPriority,O=s.unstable_IdlePriority,E=s.log,et=s.unstable_setDisableYieldValue,it=null,ft=null;function ut(e){if(typeof E=="function"&&et(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(it,e)}catch{}}var Bt=Math.clz32?Math.clz32:Wt,Lt=Math.log,kt=Math.LN2;function Wt(e){return e>>>=0,e===0?32:31-(Lt(e)/kt|0)|0}var Tt=256,It=4194304;function Zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=Zt(o):(S&=T,S!==0?u=Zt(S):a||(a=T&~e,a!==0&&(u=Zt(a))))):(T=o&~f,T!==0?u=Zt(T):S!==0?u=Zt(S):a||(a=o&~e,a!==0&&(u=Zt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Tt;return Tt<<=1,(Tt&4194048)===0&&(Tt=256),e}function Nt(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rt(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,tt=e.hiddenUpdates;for(a=S&~a;0<a;){var dt=31-Bt(a),vt=1<<dt;T[dt]=0,I[dt]=-1;var nt=tt[dt];if(nt!==null)for(tt[dt]=null,dt=0;dt<nt.length;dt++){var rt=nt[dt];rt!==null&&(rt.lane&=-536870913)}a&=~vt}o!==0&&St(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function St(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Ht(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Bt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ce(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:G_(e.type))}function kn(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var hn=Math.random().toString(36).slice(2),on="__reactFiber$"+hn,xn="__reactProps$"+hn,Pn="__reactContainer$"+hn,$a="__reactEvents$"+hn,cl="__reactListeners$"+hn,ul="__reactHandles$"+hn,tr="__reactResources$"+hn,pa="__reactMarker$"+hn;function ma(e){delete e[on],delete e[xn],delete e[$a],delete e[cl],delete e[ul]}function Pi(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pn]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=A_(e);e!==null;){if(a=e[on])return a;e=A_(e)}return n}e=a,a=e.parentNode}return null}function Bi(e){if(e=e[on]||e[Pn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function er(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ga(e){var n=e[tr];return n||(n=e[tr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[pa]=!0}var fl=new Set,dl={};function Ii(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(dl[e]=n,e=0;e<n.length;e++)fl.add(n[e])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},ot={};function K(e){return Ee.call(ot,e)?!0:Ee.call(st,e)?!1:Y.test(e)?ot[e]=!0:(st[e]=!0,!1)}function At(e,n,a){if(K(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ut(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Pt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Ft,te;function Qt(e){if(Ft===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ft=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+e+te}var qt=!1;function he(e,n){if(!e||qt)return"";qt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(rt){var nt=rt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(rt){nt=rt}e.call(vt.prototype)}}else{try{throw Error()}catch(rt){nt=rt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(rt){if(rt&&nt&&typeof rt.stack=="string")return[rt.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var I=S.split(`
`),tt=T.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===tt.length)for(o=I.length-1,u=tt.length-1;1<=o&&0<=u&&I[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==tt[u]){var dt=`
`+I[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{qt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function Ue(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return Qt("Activity");default:return""}}function ke(e){try{var n="";do n+=Ue(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(e){var n=ye(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ze(e){e._valueTracker||(e._valueTracker=Jt(e))}function Ae(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ye(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _a=/[\n"\\]/g;function Xe(e){return e.replace(_a,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zi(e,n,a,o,u,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Se(n)):e.value!==""+Se(n)&&(e.value=""+Se(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?An(e,S,Se(n)):a!=null?An(e,S,Se(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Se(T):e.removeAttribute("name")}function Ge(e,n,a,o,u,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Se(a):"",n=n!=null?""+Se(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function An(e,n,a){n==="number"&&bn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ln(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Se(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function pn(e,n,a){if(n!=null&&(n=""+Se(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Se(a):""}function Sn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ht(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Se(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Mi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Fi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Fi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Mp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&yp(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&yp(e,f,n[f])}function ru(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _x=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(e){return vx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var su=null;function ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,Fr=null;function Ep(e){var n=Bi(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(zi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[xn]||null;if(!u)throw Error(r(90));zi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ae(o)}break t;case"textarea":pn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ln(e,!!a.multiple,n,!1)}}}var lu=!1;function Tp(e,n,a){if(lu)return e(n,a);lu=!0;try{var o=e(n);return o}finally{if(lu=!1,(zr!==null||Fr!==null)&&(Jl(),zr&&(n=zr,e=Fr,Fr=zr=null,Ep(n),e)))for(n=0;n<e.length;n++)Ep(e[n])}}function Ws(e,n){var a=e.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(Hi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){cu=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{cu=!1}var va=null,uu=null,pl=null;function bp(){if(pl)return pl;var e,n=uu,a=n.length,o,u="value"in va?va.value:va.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return pl=u.slice(e,1<o?1-o:void 0)}function ml(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function Ap(){return!1}function Bn(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?gl:Ap,this.isPropagationStopped=Ap,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Bn(nr),js=g({},nr,{view:0,detail:0}),xx=Bn(js),fu,du,Ys,vl=g({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ys&&(Ys&&e.type==="mousemove"?(fu=e.screenX-Ys.screenX,du=e.screenY-Ys.screenY):du=fu=0,Ys=e),fu)},movementY:function(e){return"movementY"in e?e.movementY:du}}),Rp=Bn(vl),Sx=g({},vl,{dataTransfer:0}),yx=Bn(Sx),Mx=g({},js,{relatedTarget:0}),hu=Bn(Mx),Ex=g({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Tx=Bn(Ex),bx=g({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ax=Bn(bx),Rx=g({},nr,{data:0}),Cp=Bn(Rx),Cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ux(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Dx[e])?!!n[e]:!1}function pu(){return Ux}var Lx=g({},js,{key:function(e){if(e.key){var n=Cx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nx=Bn(Lx),Ox=g({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=Bn(Ox),Px=g({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),Bx=Bn(Px),Ix=g({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),zx=Bn(Ix),Fx=g({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hx=Bn(Fx),Gx=g({},nr,{newState:0,oldState:0}),Vx=Bn(Gx),kx=[9,13,27,32],mu=Hi&&"CompositionEvent"in window,Zs=null;Hi&&"documentMode"in document&&(Zs=document.documentMode);var Xx=Hi&&"TextEvent"in window&&!Zs,Dp=Hi&&(!mu||Zs&&8<Zs&&11>=Zs),Up=" ",Lp=!1;function Np(e,n){switch(e){case"keyup":return kx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function Wx(e,n){switch(e){case"compositionend":return Op(n);case"keypress":return n.which!==32?null:(Lp=!0,Up);case"textInput":return e=n.data,e===Up&&Lp?null:e;default:return null}}function qx(e,n){if(Hr)return e==="compositionend"||!mu&&Np(e,n)?(e=bp(),pl=uu=va=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dp&&n.locale!=="ko"?null:n.data;default:return null}}var jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jx[e.type]:n==="textarea"}function Bp(e,n,a,o){zr?Fr?Fr.push(o):Fr=[o]:zr=o,n=ac(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ks=null,Qs=null;function Yx(e){g_(e,0)}function xl(e){var n=er(e);if(Ae(n))return e}function Ip(e,n){if(e==="change")return n}var zp=!1;if(Hi){var gu;if(Hi){var _u="oninput"in document;if(!_u){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),_u=typeof Fp.oninput=="function"}gu=_u}else gu=!1;zp=gu&&(!document.documentMode||9<document.documentMode)}function Hp(){Ks&&(Ks.detachEvent("onpropertychange",Gp),Qs=Ks=null)}function Gp(e){if(e.propertyName==="value"&&xl(Qs)){var n=[];Bp(n,Qs,e,ou(e)),Tp(Yx,n)}}function Zx(e,n,a){e==="focusin"?(Hp(),Ks=n,Qs=a,Ks.attachEvent("onpropertychange",Gp)):e==="focusout"&&Hp()}function Kx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(Qs)}function Qx(e,n){if(e==="click")return xl(n)}function Jx(e,n){if(e==="input"||e==="change")return xl(n)}function $x(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xn=typeof Object.is=="function"?Object.is:$x;function Js(e,n){if(Xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ee.call(n,u)||!Xn(e[u],n[u]))return!1}return!0}function Vp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kp(e,n){var a=Vp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Vp(a)}}function Xp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=bn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=bn(e.document)}return n}function vu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var tS=Hi&&"documentMode"in document&&11>=document.documentMode,Gr=null,xu=null,$s=null,Su=!1;function qp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||Gr==null||Gr!==bn(o)||(o=Gr,"selectionStart"in o&&vu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),$s&&Js($s,o)||($s=o,o=ac(xu,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Gr)))}function ir(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Vr={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},yu={},jp={};Hi&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function ar(e){if(yu[e])return yu[e];if(!Vr[e])return e;var n=Vr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in jp)return yu[e]=n[a];return e}var Yp=ar("animationend"),Zp=ar("animationiteration"),Kp=ar("animationstart"),eS=ar("transitionrun"),nS=ar("transitionstart"),iS=ar("transitioncancel"),Qp=ar("transitionend"),Jp=new Map,Mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mu.push("scrollEnd");function hi(e,n){Jp.set(e,n),Ii(n,[e])}var $p=new WeakMap;function ei(e,n){if(typeof e=="object"&&e!==null){var a=$p.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ke(n)},$p.set(e,n),n)}return{value:e,source:n,stack:ke(n)}}var ni=[],kr=0,Eu=0;function Sl(){for(var e=kr,n=Eu=kr=0;n<e;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&tm(a,u,f)}}function yl(e,n,a,o){ni[kr++]=e,ni[kr++]=n,ni[kr++]=a,ni[kr++]=o,Eu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Tu(e,n,a,o){return yl(e,n,a,o),Ml(e)}function Xr(e,n){return yl(e,null,null,n),Ml(e)}function tm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Bt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Ml(e){if(50<bo)throw bo=0,Uf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Wr={};function aS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,n,a,o){return new aS(e,n,a,o)}function bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Wn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function em(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function El(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")bu(e)&&(S=1);else if(typeof e=="string")S=sy(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Wn(31,a,n,u),e.elementType=D,e.lanes=f,e;case b:return rr(a.children,u,f,n);case w:S=8,u|=24;break;case y:return e=Wn(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case F:return e=Wn(13,a,n,u),e.elementType=F,e.lanes=f,e;case z:return e=Wn(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case U:S=10;break t;case N:S=9;break t;case C:S=11;break t;case P:S=14;break t;case V:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Wn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function rr(e,n,a,o){return e=Wn(7,e,o,n),e.lanes=a,e}function Au(e,n,a){return e=Wn(6,e,null,n),e.lanes=a,e}function Ru(e,n,a){return n=Wn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var qr=[],jr=0,Tl=null,bl=0,ii=[],ai=0,sr=null,Vi=1,ki="";function or(e,n){qr[jr++]=bl,qr[jr++]=Tl,Tl=e,bl=n}function nm(e,n,a){ii[ai++]=Vi,ii[ai++]=ki,ii[ai++]=sr,sr=e;var o=Vi;e=ki;var u=32-Bt(o)-1;o&=~(1<<u),a+=1;var f=32-Bt(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Vi=1<<32-Bt(n)+u|a<<u|o,ki=f+e}else Vi=1<<f|a<<u|o,ki=e}function Cu(e){e.return!==null&&(or(e,1),nm(e,1,0))}function wu(e){for(;e===Tl;)Tl=qr[--jr],qr[jr]=null,bl=qr[--jr],qr[jr]=null;for(;e===sr;)sr=ii[--ai],ii[ai]=null,ki=ii[--ai],ii[ai]=null,Vi=ii[--ai],ii[ai]=null}var Nn=null,Ke=null,Le=!1,lr=null,Ei=!1,Du=Error(r(519));function cr(e){var n=Error(r(418,""));throw no(ei(n,e)),Du}function im(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[xn]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)xe(Ro[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Ge(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ze(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Sn(n,o.value,o.defaultValue,o.children),Ze(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||S_(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=rc),n=!0):n=!1,n||cr(e)}function am(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 5:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Nn=Nn.return}}function to(e){if(e!==Nn)return!1;if(!Le)return am(e),Le=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||jf(e.type,e.memoizedProps)),a=!a),a&&Ke&&cr(e),am(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ke=mi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ke=null}}else n===27?(n=Ke,Oa(e.type)?(e=Qf,Qf=null,Ke=e):Ke=n):Ke=Nn?mi(e.stateNode.nextSibling):null;return!0}function eo(){Ke=Nn=null,Le=!1}function rm(){var e=lr;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),lr=null),e}function no(e){lr===null?lr=[e]:lr.push(e)}var Uu=J(null),ur=null,Xi=null;function xa(e,n,a){xt(Uu,n._currentValue),n._currentValue=a}function Wi(e){e._currentValue=Uu.current,_t(Uu)}function Lu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Nu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Lu(f.return,a,e),o||(S=null);break t}f=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Lu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function io(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;Xn(u.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(u===Ct.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(No):e=[No])}u=u.return}e!==null&&Nu(n,e,a,o),n.flags|=262144}function Al(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fr(e){ur=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return sm(ur,e)}function Rl(e,n){return ur===null&&fr(e),sm(e,n)}function sm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(r(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var rS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},sS=s.unstable_scheduleCallback,oS=s.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new rS,data:new Map,refCount:0}}function ao(e){e.refCount--,e.refCount===0&&sS(oS,function(){e.controller.abort()})}var ro=null,Pu=0,Yr=0,Zr=null;function lS(e,n){if(ro===null){var a=ro=[];Pu=0,Yr=zf(),Zr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Pu++,n.then(om,om),n}function om(){if(--Pu===0&&ro!==null){Zr!==null&&(Zr.status="fulfilled");var e=ro;ro=null,Yr=0,Zr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function cS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var lm=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&lS(e,n),lm!==null&&lm(e,n)};var dr=J(null);function Bu(){var e=dr.current;return e!==null?e:We.pooledCache}function Cl(e,n){n===null?xt(dr,dr.current):xt(dr,n.pool)}function cm(){var e=Bu();return e===null?null:{parent:cn._currentValue,pool:e}}var so=Error(r(460)),um=Error(r(474)),wl=Error(r(542)),Iu={then:function(){}};function fm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dl(){}function dm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Dl,Dl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pm(e),e;default:if(typeof n.status=="string")n.then(Dl,Dl);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pm(e),e}throw oo=n,so}}var oo=null;function hm(){if(oo===null)throw Error(r(459));var e=oo;return oo=null,e}function pm(e){if(e===so||e===wl)throw Error(r(483))}var Sa=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ml(e),tm(e,null,a),n}return yl(e,o,n,a),Ml(e)}function lo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ht(e,a)}}function Hu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Gu=!1;function co(){if(Gu){var e=Zr;if(e!==null)throw e}}function uo(e,n,a,o){Gu=!1;var u=e.updateQueue;Sa=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,tt=I.next;I.next=null,S===null?f=tt:S.next=tt,S=I;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,T=dt.lastBaseUpdate,T!==S&&(T===null?dt.firstBaseUpdate=tt:T.next=tt,dt.lastBaseUpdate=I))}if(f!==null){var vt=u.baseState;S=0,dt=tt=I=null,T=f;do{var nt=T.lane&-536870913,rt=nt!==T.lane;if(rt?(Te&nt)===nt:(o&nt)===nt){nt!==0&&nt===Yr&&(Gu=!0),dt!==null&&(dt=dt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=e,$t=T;nt=n;var Fe=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){vt=ne.call(Fe,vt,nt);break t}vt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,nt=typeof ne=="function"?ne.call(Fe,vt,nt):ne,nt==null)break t;vt=g({},vt,nt);break t;case 2:Sa=!0}}nt=T.callback,nt!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[nt]:rt.push(nt))}else rt={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},dt===null?(tt=dt=rt,I=vt):dt=dt.next=rt,S|=nt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;rt=T,T=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);dt===null&&(I=vt),u.baseState=I,u.firstBaseUpdate=tt,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Da|=S,e.lanes=S,e.memoizedState=vt}}function mm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function gm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mm(a[e],n)}var Kr=J(null),Ul=J(0);function _m(e,n){e=Ji,xt(Ul,e),xt(Kr,n),Ji=e|n.baseLanes}function Vu(){xt(Ul,Ji),xt(Kr,Kr.current)}function ku(){Ji=Ul.current,_t(Kr),_t(Ul)}var Ea=0,pe=null,Ie=null,an=null,Ll=!1,Qr=!1,hr=!1,Nl=0,fo=0,Jr=null,uS=0;function tn(){throw Error(r(321))}function Xu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Xn(e[a],n[a]))return!1;return!0}function Wu(e,n,a,o,u,f){return Ea=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?tg:eg,hr=!1,f=a(o,u),hr=!1,Qr&&(f=xm(n,a,o,u)),vm(e),f}function vm(e){B.H=Fl;var n=Ie!==null&&Ie.next!==null;if(Ea=0,an=Ie=pe=null,Ll=!1,fo=0,Jr=null,n)throw Error(r(300));e===null||mn||(e=e.dependencies,e!==null&&Al(e)&&(mn=!0))}function xm(e,n,a,o){pe=e;var u=0;do{if(Qr&&(Jr=null),fo=0,Qr=!1,25<=u)throw Error(r(301));if(u+=1,an=Ie=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=_S,f=n(a,o)}while(Qr);return f}function fS(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?ho(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(pe.flags|=1024),n}function qu(){var e=Nl!==0;return Nl=0,e}function ju(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Yu(e){if(Ll){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ll=!1}Ea=0,an=Ie=pe=null,Qr=!1,fo=Nl=0,Jr=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?pe.memoizedState=an=e:an=an.next=e,an}function rn(){if(Ie===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=an===null?pe.memoizedState:an.next;if(n!==null)an=n,Ie=e;else{if(e===null)throw pe.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},an===null?pe.memoizedState=an=e:an=an.next=e}return an}function Zu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(e){var n=fo;return fo+=1,Jr===null&&(Jr=[]),e=dm(Jr,e,n),n=pe,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?tg:eg),e}function Ol(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ho(e);if(e.$$typeof===U)return Rn(e)}throw Error(r(438,String(e)))}function Ku(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Zu(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=A;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function Pl(e){var n=rn();return Qu(n,Ie,e)}function Qu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=S=null,I=null,tt=n,dt=!1;do{var vt=tt.lane&-536870913;if(vt!==tt.lane?(Te&vt)===vt:(Ea&vt)===vt){var nt=tt.revertLane;if(nt===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),vt===Yr&&(dt=!0);else if((Ea&nt)===nt){tt=tt.next,nt===Yr&&(dt=!0);continue}else vt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(T=I=vt,S=f):I=I.next=vt,pe.lanes|=nt,Da|=nt;vt=tt.action,hr&&a(f,vt),f=tt.hasEagerState?tt.eagerState:a(f,vt)}else nt={lane:vt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(T=I=nt,S=f):I=I.next=nt,pe.lanes|=vt,Da|=vt;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?S=f:I.next=T,!Xn(f,e.memoizedState)&&(mn=!0,dt&&(a=Zr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=I,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ju(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);Xn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Sm(e,n,a){var o=pe,u=rn(),f=Le;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Xn((Ie||u).memoizedState,a);S&&(u.memoizedState=a,mn=!0),u=u.queue;var T=Em.bind(null,o,u,e);if(po(2048,8,T,[e]),u.getSnapshot!==n||S||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,$r(9,Bl(),Mm.bind(null,o,u,a,n),null),We===null)throw Error(r(349));f||(Ea&124)!==0||ym(o,n,a)}return a}function ym(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Zu(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Mm(e,n,a,o){n.value=a,n.getSnapshot=o,Tm(n)&&bm(e)}function Em(e,n,a){return a(function(){Tm(n)&&bm(e)})}function Tm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Xn(e,a)}catch{return!0}}function bm(e){var n=Xr(e,2);n!==null&&Kn(n,e,2)}function $u(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),hr){ut(!0);try{a()}finally{ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function Am(e,n,a,o){return e.baseState=a,Qu(e,Ie,typeof o=="function"?o:qi)}function dS(e,n,a,o,u){if(zl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Rm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Rm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=B.T,S={};B.T=S;try{var T=a(u,o),I=B.S;I!==null&&I(S,T),Cm(e,n,T)}catch(tt){tf(e,n,tt)}finally{B.T=f}}else try{f=a(u,o),Cm(e,n,f)}catch(tt){tf(e,n,tt)}}function Cm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){wm(e,n,o)},function(o){return tf(e,n,o)}):wm(e,n,a)}function wm(e,n,a){n.status="fulfilled",n.value=a,Dm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Rm(e,a)))}function tf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Dm(n),n=n.next;while(n!==o)}e.action=null}function Dm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Um(e,n){return n}function Lm(e,n){if(Le){var a=We.formState;if(a!==null){t:{var o=pe;if(Le){if(Ke){e:{for(var u=Ke,f=Ei;u.nodeType!==8;){if(!f){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=mi(u.nextSibling),o=u.data==="F!";break t}}cr(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Um,lastRenderedState:n},a.queue=o,a=Qm.bind(null,pe,o),o.dispatch=a,o=$u(!1),f=sf.bind(null,pe,!1,o.queue),o=In(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=dS.bind(null,pe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Nm(e){var n=rn();return Om(n,Ie,e)}function Om(e,n,a){if(n=Qu(e,n,Um)[0],e=Pl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ho(n)}catch(S){throw S===so?wl:S}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,$r(9,Bl(),hS.bind(null,u,a),null)),[o,f,e]}function hS(e,n){e.action=n}function Pm(e){var n=rn(),a=Ie;if(a!==null)return Om(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function $r(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Zu(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Bl(){return{destroy:void 0,resource:void 0}}function Bm(){return rn().memoizedState}function Il(e,n,a,o){var u=In();o=o===void 0?null:o,pe.flags|=e,u.memoizedState=$r(1|n,Bl(),a,o)}function po(e,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ie!==null&&o!==null&&Xu(o,Ie.memoizedState.deps)?u.memoizedState=$r(n,f,a,o):(pe.flags|=e,u.memoizedState=$r(1|n,f,a,o))}function Im(e,n){Il(8390656,8,e,n)}function zm(e,n){po(2048,8,e,n)}function Fm(e,n){return po(4,2,e,n)}function Hm(e,n){return po(4,4,e,n)}function Gm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vm(e,n,a){a=a!=null?a.concat([e]):null,po(4,4,Gm.bind(null,n,e),a)}function ef(){}function km(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Xu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Xm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Xu(n,o[1]))return o[0];if(o=e(),hr){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,n],o}function nf(e,n,a){return a===void 0||(Ea&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=jg(),pe.lanes|=e,Da|=e,a)}function Wm(e,n,a,o){return Xn(a,n)?a:Kr.current!==null?(e=nf(e,a,o),Xn(e,n)||(mn=!0),e):(Ea&42)===0?(mn=!0,e.memoizedState=a):(e=jg(),pe.lanes|=e,Da|=e,n)}function qm(e,n,a,o,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=B.T,T={};B.T=T,sf(e,!1,n,a);try{var I=u(),tt=B.S;if(tt!==null&&tt(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=cS(I,o);mo(e,n,dt,Zn(e))}else mo(e,n,o,Zn(e))}catch(vt){mo(e,n,{then:function(){},status:"rejected",reason:vt},Zn())}finally{Z.p=f,B.T=S}}function pS(){}function af(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=jm(e).queue;qm(e,u,n,W,a===null?pS:function(){return Ym(e),a(o)})}function jm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ym(e){var n=jm(e).next.queue;mo(e,n,{},Zn())}function rf(){return Rn(No)}function Zm(){return rn().memoizedState}function Km(){return rn().memoizedState}function mS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=ya(a);var o=Ma(n,e,a);o!==null&&(Kn(o,n,a),lo(o,n,a)),n={cache:Ou()},e.payload=n;return}n=n.return}}function gS(e,n,a){var o=Zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?Jm(n,a):(a=Tu(e,n,a,o),a!==null&&(Kn(a,e,o),$m(a,n,o)))}function Qm(e,n,a){var o=Zn();mo(e,n,a,o)}function mo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))Jm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(u.hasEagerState=!0,u.eagerState=T,Xn(T,S))return yl(e,n,u,0),We===null&&Sl(),!1}catch{}finally{}if(a=Tu(e,n,u,o),a!==null)return Kn(a,e,o),$m(a,n,o),!0}return!1}function sf(e,n,a,o){if(o={lane:2,revertLane:zf(),action:o,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(r(479))}else n=Tu(e,a,o,2),n!==null&&Kn(n,e,2)}function zl(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function Jm(e,n){Qr=Ll=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function $m(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ht(e,a)}}var Fl={readContext:Rn,use:Ol,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},tg={readContext:Rn,use:Ol,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:Im,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Il(4194308,4,Gm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Il(4194308,4,e,n)},useInsertionEffect:function(e,n){Il(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(hr){ut(!0);try{e()}finally{ut(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var u=a(n);if(hr){ut(!0);try{a(n)}finally{ut(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=gS.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=$u(e);var n=e.queue,a=Qm.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ef,useDeferredValue:function(e,n){var a=In();return nf(a,e,n)},useTransition:function(){var e=$u(!1);return e=qm.bind(null,pe,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=pe,u=In();if(Le){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Te&124)!==0||ym(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Im(Em.bind(null,o,f,e),[e]),o.flags|=2048,$r(9,Bl(),Mm.bind(null,o,f,a,n),null),a},useId:function(){var e=In(),n=We.identifierPrefix;if(Le){var a=ki,o=Vi;a=(o&~(1<<32-Bt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=uS++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:rf,useFormState:Lm,useActionState:Lm,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=sf.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ku,useCacheRefresh:function(){return In().memoizedState=mS.bind(null,pe)}},eg={readContext:Rn,use:Ol,useCallback:km,useContext:Rn,useEffect:zm,useImperativeHandle:Vm,useInsertionEffect:Fm,useLayoutEffect:Hm,useMemo:Xm,useReducer:Pl,useRef:Bm,useState:function(){return Pl(qi)},useDebugValue:ef,useDeferredValue:function(e,n){var a=rn();return Wm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Pl(qi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:Sm,useId:Zm,useHostTransitionStatus:rf,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,n){var a=rn();return Am(a,Ie,e,n)},useMemoCache:Ku,useCacheRefresh:Km},_S={readContext:Rn,use:Ol,useCallback:km,useContext:Rn,useEffect:zm,useImperativeHandle:Vm,useInsertionEffect:Fm,useLayoutEffect:Hm,useMemo:Xm,useReducer:Ju,useRef:Bm,useState:function(){return Ju(qi)},useDebugValue:ef,useDeferredValue:function(e,n){var a=rn();return Ie===null?nf(a,e,n):Wm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Ju(qi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:ho(e),n]},useSyncExternalStore:Sm,useId:Zm,useHostTransitionStatus:rf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e,n){var a=rn();return Ie!==null?Am(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Km},ts=null,go=0;function Hl(e){var n=go;return go+=1,ts===null&&(ts=[]),dm(ts,e,n)}function _o(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Gl(e,n){throw n.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ng(e){var n=e._init;return n(e._payload)}function ig(e){function n(q,k){if(e){var $=q.deletions;$===null?(q.deletions=[k],q.flags|=16):$.push(k)}}function a(q,k){if(!e)return null;for(;k!==null;)n(q,k),k=k.sibling;return null}function o(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function u(q,k){return q=Gi(q,k),q.index=0,q.sibling=null,q}function f(q,k,$){return q.index=$,e?($=q.alternate,$!==null?($=$.index,$<k?(q.flags|=67108866,k):$):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function S(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,k,$,mt){return k===null||k.tag!==6?(k=Au($,q.mode,mt),k.return=q,k):(k=u(k,$),k.return=q,k)}function I(q,k,$,mt){var Gt=$.type;return Gt===b?dt(q,k,$.props.children,mt,$.key):k!==null&&(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===V&&ng(Gt)===k.type)?(k=u(k,$.props),_o(k,$),k.return=q,k):(k=El($.type,$.key,$.props,null,q.mode,mt),_o(k,$),k.return=q,k)}function tt(q,k,$,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Ru($,q.mode,mt),k.return=q,k):(k=u(k,$.children||[]),k.return=q,k)}function dt(q,k,$,mt,Gt){return k===null||k.tag!==7?(k=rr($,q.mode,mt,Gt),k.return=q,k):(k=u(k,$),k.return=q,k)}function vt(q,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Au(""+k,q.mode,$),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return $=El(k.type,k.key,k.props,null,q.mode,$),_o($,k),$.return=q,$;case M:return k=Ru(k,q.mode,$),k.return=q,k;case V:var mt=k._init;return k=mt(k._payload),vt(q,k,$)}if(ht(k)||ct(k))return k=rr(k,q.mode,$,null),k.return=q,k;if(typeof k.then=="function")return vt(q,Hl(k),$);if(k.$$typeof===U)return vt(q,Rl(q,k),$);Gl(q,k)}return null}function nt(q,k,$,mt){var Gt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Gt!==null?null:T(q,k,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Gt?I(q,k,$,mt):null;case M:return $.key===Gt?tt(q,k,$,mt):null;case V:return Gt=$._init,$=Gt($._payload),nt(q,k,$,mt)}if(ht($)||ct($))return Gt!==null?null:dt(q,k,$,mt,null);if(typeof $.then=="function")return nt(q,k,Hl($),mt);if($.$$typeof===U)return nt(q,k,Rl(q,$),mt);Gl(q,$)}return null}function rt(q,k,$,mt,Gt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return q=q.get($)||null,T(k,q,""+mt,Gt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return q=q.get(mt.key===null?$:mt.key)||null,I(k,q,mt,Gt);case M:return q=q.get(mt.key===null?$:mt.key)||null,tt(k,q,mt,Gt);case V:var ge=mt._init;return mt=ge(mt._payload),rt(q,k,$,mt,Gt)}if(ht(mt)||ct(mt))return q=q.get($)||null,dt(k,q,mt,Gt,null);if(typeof mt.then=="function")return rt(q,k,$,Hl(mt),Gt);if(mt.$$typeof===U)return rt(q,k,$,Rl(k,mt),Gt);Gl(k,mt)}return null}function ne(q,k,$,mt){for(var Gt=null,ge=null,jt=k,ee=k=0,_n=null;jt!==null&&ee<$.length;ee++){jt.index>ee?(_n=jt,jt=null):_n=jt.sibling;var we=nt(q,jt,$[ee],mt);if(we===null){jt===null&&(jt=_n);break}e&&jt&&we.alternate===null&&n(q,jt),k=f(we,k,ee),ge===null?Gt=we:ge.sibling=we,ge=we,jt=_n}if(ee===$.length)return a(q,jt),Le&&or(q,ee),Gt;if(jt===null){for(;ee<$.length;ee++)jt=vt(q,$[ee],mt),jt!==null&&(k=f(jt,k,ee),ge===null?Gt=jt:ge.sibling=jt,ge=jt);return Le&&or(q,ee),Gt}for(jt=o(jt);ee<$.length;ee++)_n=rt(jt,q,ee,$[ee],mt),_n!==null&&(e&&_n.alternate!==null&&jt.delete(_n.key===null?ee:_n.key),k=f(_n,k,ee),ge===null?Gt=_n:ge.sibling=_n,ge=_n);return e&&jt.forEach(function(Fa){return n(q,Fa)}),Le&&or(q,ee),Gt}function $t(q,k,$,mt){if($==null)throw Error(r(151));for(var Gt=null,ge=null,jt=k,ee=k=0,_n=null,we=$.next();jt!==null&&!we.done;ee++,we=$.next()){jt.index>ee?(_n=jt,jt=null):_n=jt.sibling;var Fa=nt(q,jt,we.value,mt);if(Fa===null){jt===null&&(jt=_n);break}e&&jt&&Fa.alternate===null&&n(q,jt),k=f(Fa,k,ee),ge===null?Gt=Fa:ge.sibling=Fa,ge=Fa,jt=_n}if(we.done)return a(q,jt),Le&&or(q,ee),Gt;if(jt===null){for(;!we.done;ee++,we=$.next())we=vt(q,we.value,mt),we!==null&&(k=f(we,k,ee),ge===null?Gt=we:ge.sibling=we,ge=we);return Le&&or(q,ee),Gt}for(jt=o(jt);!we.done;ee++,we=$.next())we=rt(jt,q,ee,we.value,mt),we!==null&&(e&&we.alternate!==null&&jt.delete(we.key===null?ee:we.key),k=f(we,k,ee),ge===null?Gt=we:ge.sibling=we,ge=we);return e&&jt.forEach(function(vy){return n(q,vy)}),Le&&or(q,ee),Gt}function Fe(q,k,$,mt){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:t:{for(var Gt=$.key;k!==null;){if(k.key===Gt){if(Gt=$.type,Gt===b){if(k.tag===7){a(q,k.sibling),mt=u(k,$.props.children),mt.return=q,q=mt;break t}}else if(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===V&&ng(Gt)===k.type){a(q,k.sibling),mt=u(k,$.props),_o(mt,$),mt.return=q,q=mt;break t}a(q,k);break}else n(q,k);k=k.sibling}$.type===b?(mt=rr($.props.children,q.mode,mt,$.key),mt.return=q,q=mt):(mt=El($.type,$.key,$.props,null,q.mode,mt),_o(mt,$),mt.return=q,q=mt)}return S(q);case M:t:{for(Gt=$.key;k!==null;){if(k.key===Gt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(q,k.sibling),mt=u(k,$.children||[]),mt.return=q,q=mt;break t}else{a(q,k);break}else n(q,k);k=k.sibling}mt=Ru($,q.mode,mt),mt.return=q,q=mt}return S(q);case V:return Gt=$._init,$=Gt($._payload),Fe(q,k,$,mt)}if(ht($))return ne(q,k,$,mt);if(ct($)){if(Gt=ct($),typeof Gt!="function")throw Error(r(150));return $=Gt.call($),$t(q,k,$,mt)}if(typeof $.then=="function")return Fe(q,k,Hl($),mt);if($.$$typeof===U)return Fe(q,k,Rl(q,$),mt);Gl(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(q,k.sibling),mt=u(k,$),mt.return=q,q=mt):(a(q,k),mt=Au($,q.mode,mt),mt.return=q,q=mt),S(q)):a(q,k)}return function(q,k,$,mt){try{go=0;var Gt=Fe(q,k,$,mt);return ts=null,Gt}catch(jt){if(jt===so||jt===wl)throw jt;var ge=Wn(29,jt,null,q.mode);return ge.lanes=mt,ge.return=q,ge}finally{}}}var es=ig(!0),ag=ig(!1),ri=J(null),Ti=null;function Ta(e){var n=e.alternate;xt(un,un.current&1),xt(ri,e),Ti===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(Ti=e)}function rg(e){if(e.tag===22){if(xt(un,un.current),xt(ri,e),Ti===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ti=e)}}else ba()}function ba(){xt(un,un.current),xt(ri,ri.current)}function ji(e){_t(ri),Ti===e&&(Ti=null),_t(un)}var un=J(0);function Vl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Kf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function of(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Zn(),u=ya(o);u.payload=n,a!=null&&(u.callback=a),n=Ma(e,u,o),n!==null&&(Kn(n,e,o),lo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Zn(),u=ya(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ma(e,u,o),n!==null&&(Kn(n,e,o),lo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),o=ya(a);o.tag=2,n!=null&&(o.callback=n),n=Ma(e,o,a),n!==null&&(Kn(n,e,a),lo(n,e,a))}};function sg(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Js(a,o)||!Js(u,f):!0}function og(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&lf.enqueueReplaceState(n,n.state,null)}function pr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var kl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function lg(e){kl(e)}function cg(e){console.error(e)}function ug(e){kl(e)}function Xl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function fg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function cf(e,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(e,n)},a}function dg(e){return e=ya(e),e.tag=3,e}function hg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){fg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){fg(n,a,o),typeof u!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function vS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&io(n,a,u,!0),a=ri.current,a!==null){switch(a.tag){case 13:return Ti===null?Nf():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Iu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Pf(e,o,u)),!1;case 22:return a.flags|=65536,o===Iu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Pf(e,o,u)),!1}throw Error(r(435,a.tag))}return Pf(e,o,u),Nf(),!1}if(Le)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Du&&(e=Error(r(422),{cause:o}),no(ei(e,a)))):(o!==Du&&(n=Error(r(423),{cause:o}),no(ei(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ei(o,a),u=cf(e.stateNode,o,u),Hu(e,u),Qe!==4&&(Qe=2)),!1;var f=Error(r(520),{cause:o});if(f=ei(f,a),To===null?To=[f]:To.push(f),Qe!==4&&(Qe=2),n===null)return!0;o=ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=cf(a.stateNode,o,e),Hu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ua===null||!Ua.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=dg(u),hg(u,e,a,o),Hu(a,u),!1}a=a.return}while(a!==null);return!1}var pg=Error(r(461)),mn=!1;function yn(e,n,a,o){n.child=e===null?ag(n,null,a,o):es(n,e.child,a,o)}function mg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return fr(n),o=Wu(e,n,a,S,f,u),T=qu(),e!==null&&!mn?(ju(e,n,u),Yi(e,n,u)):(Le&&T&&Cu(n),n.flags|=1,yn(e,n,o,u),n.child)}function gg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!bu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,_g(e,n,f,o,u)):(e=El(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!_f(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Js,a(S,o)&&e.ref===n.ref)return Yi(e,n,u)}return n.flags|=1,e=Gi(f,o),e.ref=n.ref,e.return=n,n.child=e}function _g(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Js(f,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=f,_f(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,Yi(e,n,u)}return uf(e,n,a,o,u)}function vg(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return xg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cl(n,f!==null?f.cachePool:null),f!==null?_m(n,f):Vu(),rg(n);else return n.lanes=n.childLanes=536870912,xg(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Cl(n,f.cachePool),_m(n,f),ba(),n.memoizedState=null):(e!==null&&Cl(n,null),Vu(),ba());return yn(e,n,u,a),n.child}function xg(e,n,a,o){var u=Bu();return u=u===null?null:{parent:cn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Cl(n,null),Vu(),rg(n),e!==null&&io(e,n,o,!0),null}function Wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function uf(e,n,a,o,u){return fr(n),a=Wu(e,n,a,o,void 0,u),o=qu(),e!==null&&!mn?(ju(e,n,u),Yi(e,n,u)):(Le&&o&&Cu(n),n.flags|=1,yn(e,n,a,u),n.child)}function Sg(e,n,a,o,u,f){return fr(n),n.updateQueue=null,a=xm(n,o,a,u),vm(e),o=qu(),e!==null&&!mn?(ju(e,n,f),Yi(e,n,f)):(Le&&o&&Cu(n),n.flags|=1,yn(e,n,a,f),n.child)}function yg(e,n,a,o,u){if(fr(n),n.stateNode===null){var f=Wr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Rn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=lf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},zu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Rn(S):Wr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(of(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&lf.enqueueReplaceState(f,f.state,null),uo(n,o,f,u),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,I=pr(a,T);f.props=I;var tt=f.context,dt=a.contextType;S=Wr,typeof dt=="object"&&dt!==null&&(S=Rn(dt));var vt=a.getDerivedStateFromProps;dt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||tt!==S)&&og(n,f,o,S),Sa=!1;var nt=n.memoizedState;f.state=nt,uo(n,o,f,u),co(),tt=n.memoizedState,T||nt!==tt||Sa?(typeof vt=="function"&&(of(n,a,vt,o),tt=n.memoizedState),(I=Sa||sg(n,a,I,o,nt,tt,S))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=S,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Fu(e,n),S=n.memoizedProps,dt=pr(a,S),f.props=dt,vt=n.pendingProps,nt=f.context,tt=a.contextType,I=Wr,typeof tt=="object"&&tt!==null&&(I=Rn(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==vt||nt!==I)&&og(n,f,o,I),Sa=!1,nt=n.memoizedState,f.state=nt,uo(n,o,f,u),co();var rt=n.memoizedState;S!==vt||nt!==rt||Sa||e!==null&&e.dependencies!==null&&Al(e.dependencies)?(typeof T=="function"&&(of(n,a,T,o),rt=n.memoizedState),(dt=Sa||sg(n,a,dt,o,nt,rt,I)||e!==null&&e.dependencies!==null&&Al(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,rt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,rt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=I,o=dt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Wl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=es(n,e.child,null,u),n.child=es(n,null,a,u)):yn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Yi(e,n,u),e}function Mg(e,n,a,o){return eo(),n.flags|=256,yn(e,n,a,o),n.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(e){return{baseLanes:e,cachePool:cm()}}function hf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function Eg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Le){if(u?Ta(n):ba(),Le){var T=Ke,I;if(I=T){t:{for(I=T,T=Ei;I.nodeType!==8;){if(!T){T=null;break t}if(I=mi(I.nextSibling),I===null){T=null;break t}}T=I}T!==null?(n.memoizedState={dehydrated:T,treeContext:sr!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},I=Wn(18,null,null,0),I.stateNode=T,I.return=n,n.child=I,Nn=n,Ke=null,I=!0):I=!1}I||cr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Kf(T)?n.lanes=32:n.lanes=536870912,null;ji(n)}return T=o.children,o=o.fallback,u?(ba(),u=n.mode,T=ql({mode:"hidden",children:T},u),o=rr(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=df(a),u.childLanes=hf(e,S,a),n.memoizedState=ff,o):(Ta(n),pf(n,T))}if(I=e.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(Ta(n),n.flags&=-257,n=mf(e,n,a)):n.memoizedState!==null?(ba(),n.child=e.child,n.flags|=128,n=null):(ba(),u=o.fallback,T=n.mode,o=ql({mode:"visible",children:o.children},T),u=rr(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,es(n,e.child,null,a),o=n.child,o.memoizedState=df(a),o.childLanes=hf(e,S,a),n.memoizedState=ff,n=u);else if(Ta(n),Kf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var tt=S.dgst;S=tt,o=Error(r(419)),o.stack="",o.digest=S,no({value:o,source:null,stack:null}),n=mf(e,n,a)}else if(mn||io(e,n,a,!1),S=(a&e.childLanes)!==0,mn||S){if(S=We,S!==null&&(o=a&-a,o=(o&42)!==0?1:ae(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Xr(e,o),Kn(S,e,o),pg;T.data==="$?"||Nf(),n=mf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Ke=mi(T.nextSibling),Nn=n,Le=!0,lr=null,Ei=!1,e!==null&&(ii[ai++]=Vi,ii[ai++]=ki,ii[ai++]=sr,Vi=e.id,ki=e.overflow,sr=n),n=pf(n,o.children),n.flags|=4096);return n}return u?(ba(),u=o.fallback,T=n.mode,I=e.child,tt=I.sibling,o=Gi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,tt!==null?u=Gi(tt,u):(u=rr(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=e.child.memoizedState,T===null?T=df(a):(I=T.cachePool,I!==null?(tt=cn._currentValue,I=I.parent!==tt?{parent:tt,pool:tt}:I):I=cm(),T={baseLanes:T.baseLanes|a,cachePool:I}),u.memoizedState=T,u.childLanes=hf(e,S,a),n.memoizedState=ff,o):(Ta(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function pf(e,n){return n=ql({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ql(e,n){return e=Wn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function mf(e,n,a){return es(n,e.child,null,a),e=pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Lu(e.return,n,a)}function gf(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function bg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(yn(e,n,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tg(e,a,n);else if(e.tag===19)Tg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(xt(un,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Vl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Vl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}gf(n,!0,a,null,f);break;case"together":gf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Da|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(io(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function _f(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Al(e)))}function xS(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),xa(n,cn,e.memoizedState.cache),eo();break;case 27:case 5:Xt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Eg(e,n,a):(Ta(n),e=Yi(e,n,a),e!==null?e.sibling:null);Ta(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(io(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return bg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,vg(e,n,a);case 24:xa(n,cn,e.memoizedState.cache)}return Yi(e,n,a)}function Ag(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!_f(e,a)&&(n.flags&128)===0)return mn=!1,xS(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Le&&(n.flags&1048576)!==0&&nm(n,bl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")bu(o)?(e=pr(o,e),n.tag=1,n=yg(null,n,o,e,a)):(n.tag=0,n=uf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===C){n.tag=11,n=mg(null,n,o,e,a);break t}else if(u===P){n.tag=14,n=gg(null,n,o,e,a);break t}}throw n=gt(o)||o,Error(r(306,n,""))}}return n;case 0:return uf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=pr(o,n.pendingProps),yg(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Fu(e,n),uo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,xa(n,cn,o),o!==f.cache&&Nu(n,[cn],a,!0),co(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Mg(e,n,o,a);break t}else if(o!==u){u=ei(Error(r(424)),n),no(u),n=Mg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=mi(e.firstChild),Nn=n,Le=!0,lr=null,Ei=!0,a=ag(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(eo(),o===u){n=Yi(e,n,a);break t}yn(e,n,o,a)}n=n.child}return n;case 26:return Wl(e,n),e===null?(a=D_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Le||(a=n.type,e=n.pendingProps,o=sc(Mt.current).createElement(a),o[on]=n,o[xn]=e,En(o,a,e),nn(o),n.stateNode=o):n.memoizedState=D_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xt(n),e===null&&Le&&(o=n.stateNode=R_(n.type,n.pendingProps,Mt.current),Nn=n,Ei=!0,u=Ke,Oa(n.type)?(Qf=u,Ke=mi(o.firstChild)):Ke=u),yn(e,n,n.pendingProps.children,a),Wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Le&&((u=o=Ke)&&(o=jS(o,n.type,n.pendingProps,Ei),o!==null?(n.stateNode=o,Nn=n,Ke=mi(o.firstChild),Ei=!1,u=!0):u=!1),u||cr(n)),Xt(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,jf(u,f)?o=null:S!==null&&jf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Wu(e,n,fS,null,null,a),No._currentValue=u),Wl(e,n),yn(e,n,o,a),n.child;case 6:return e===null&&Le&&((e=a=Ke)&&(a=YS(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,Nn=n,Ke=null,e=!0):e=!1),e||cr(n)),null;case 13:return Eg(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=es(n,null,o,a):yn(e,n,o,a),n.child;case 11:return mg(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,xa(n,n.type,o.value),yn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,fr(n),u=Rn(u),o=o(u),n.flags|=1,yn(e,n,o,a),n.child;case 14:return gg(e,n,n.type,n.pendingProps,a);case 15:return _g(e,n,n.type,n.pendingProps,a);case 19:return bg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=ql(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Gi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return vg(e,n,a);case 24:return fr(n),o=Rn(cn),e===null?(u=Bu(),u===null&&(u=We,f=Ou(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},zu(n),xa(n,cn,u)):((e.lanes&a)!==0&&(Fu(e,n),uo(n,null,null,a),co()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),xa(n,cn,o)):(o=f.cache,xa(n,cn,o),o!==u.cache&&Nu(n,[cn],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Zi(e){e.flags|=4}function Rg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P_(n)){if(n=ri.current,n!==null&&((Te&4194048)===Te?Ti!==null:(Te&62914560)!==Te&&(Te&536870912)===0||n!==Ti))throw oo=Iu,um;e.flags|=8192}}function jl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Nt():536870912,e.lanes|=n,rs|=n)}function vo(e,n){if(!Le)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function SS(e,n,a){var o=n.pendingProps;switch(wu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Wi(cn),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(to(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,rm())),Ye(n),null;case 26:return a=n.memoizedState,e===null?(Zi(n),a!==null?(Ye(n),Rg(n,a)):(Ye(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Zi(n),Ye(n),Rg(n,a)):(Ye(n),n.flags&=-16777217):(e.memoizedProps!==o&&Zi(n),Ye(n),n.flags&=-16777217),null;case 27:be(n),a=Mt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}e=Q.current,to(n)?im(n):(e=R_(u,o,a),n.stateNode=e,Zi(n))}return Ye(n),null;case 5:if(be(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}if(e=Q.current,to(n))im(n);else{switch(u=sc(Mt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[on]=n,e[xn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(En(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zi(n)}}return Ye(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Mt.current,to(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||S_(e.nodeValue,a)),e||cr(n)}else e=sc(e).createTextNode(o),e[on]=n,n.stateNode=e}return Ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=to(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else eo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=rm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ji(n),n):(ji(n),null)}if(ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),jl(n,n.updateQueue),Ye(n),null;case 4:return re(),e===null&&Vf(n.stateNode.containerInfo),Ye(n),null;case 10:return Wi(n.type),Ye(n),null;case 19:if(_t(un),u=n.memoizedState,u===null)return Ye(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)vo(u,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Vl(e),f!==null){for(n.flags|=128,vo(u,!1),e=f.updateQueue,n.updateQueue=e,jl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)em(a,e),a=a.sibling;return xt(un,un.current&1|2),n.child}e=e.sibling}u.tail!==null&&oe()>Kl&&(n.flags|=128,o=!0,vo(u,!1),n.lanes=4194304)}else{if(!o)if(e=Vl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,jl(n,e),vo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Le)return Ye(n),null}else 2*oe()-u.renderingStartTime>Kl&&a!==536870912&&(n.flags|=128,o=!0,vo(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=oe(),n.sibling=null,e=un.current,xt(un,o?e&1|2:e&1),n):(Ye(n),null);case 22:case 23:return ji(n),ku(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&jl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&_t(dr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(cn),Ye(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function yS(e,n){switch(wu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wi(cn),re(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return be(n),null;case 13:if(ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));eo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _t(un),null;case 4:return re(),null;case 10:return Wi(n.type),null;case 22:case 23:return ji(n),ku(),e!==null&&_t(dr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wi(cn),null;case 25:return null;default:return null}}function Cg(e,n){switch(wu(n),n.tag){case 3:Wi(cn),re();break;case 26:case 27:case 5:be(n);break;case 4:re();break;case 13:ji(n);break;case 19:_t(un);break;case 10:Wi(n.type);break;case 22:case 23:ji(n),ku(),e!==null&&_t(dr);break;case 24:Wi(cn)}}function xo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(T){Ve(n,n.return,T)}}function Aa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var I=a,tt=T;try{tt()}catch(dt){Ve(u,I,dt)}}}o=o.next}while(o!==f)}}catch(dt){Ve(n,n.return,dt)}}function wg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{gm(n,a)}catch(o){Ve(e,e.return,o)}}}function Dg(e,n,a){a.props=pr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function So(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function Ug(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function vf(e,n,a){try{var o=e.stateNode;VS(o,e.type,a,n),o[xn]=n}catch(u){Ve(e,e.return,u)}}function Lg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function xf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Lg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=rc));else if(o!==4&&(o===27&&Oa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sf(e,n,a),e=e.sibling;e!==null;)Sf(e,n,a),e=e.sibling}function Yl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yl(e,n,a),e=e.sibling;e!==null;)Yl(e,n,a),e=e.sibling}function Ng(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,a),n[on]=e,n[xn]=a}catch(f){Ve(e,e.return,f)}}var Ki=!1,en=!1,yf=!1,Og=typeof WeakSet=="function"?WeakSet:Set,gn=null;function MS(e,n){if(e=e.containerInfo,Wf=dc,e=Wp(e),vu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,I=-1,tt=0,dt=0,vt=e,nt=null;e:for(;;){for(var rt;vt!==a||u!==0&&vt.nodeType!==3||(T=S+u),vt!==f||o!==0&&vt.nodeType!==3||(I=S+o),vt.nodeType===3&&(S+=vt.nodeValue.length),(rt=vt.firstChild)!==null;)nt=vt,vt=rt;for(;;){if(vt===e)break e;if(nt===a&&++tt===u&&(T=S),nt===f&&++dt===o&&(I=S),(rt=vt.nextSibling)!==null)break;vt=nt,nt=vt.parentNode}vt=rt}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:e,selectionRange:a},dc=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ne=pr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ne,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Ve(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Zf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function Pg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ra(e,a),o&4&&xo(5,a);break;case 1:if(Ra(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ve(a,a.return,S)}else{var u=pr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ve(a,a.return,S)}}o&64&&wg(a),o&512&&So(a,a.return);break;case 3:if(Ra(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gm(e,n)}catch(S){Ve(a,a.return,S)}}break;case 27:n===null&&o&4&&Ng(a);case 26:case 5:Ra(e,a),n===null&&o&4&&Ug(a),o&512&&So(a,a.return);break;case 12:Ra(e,a);break;case 13:Ra(e,a),o&4&&zg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=US.bind(null,a),ZS(e,a))));break;case 22:if(o=a.memoizedState!==null||Ki,!o){n=n!==null&&n.memoizedState!==null||en,u=Ki;var f=en;Ki=o,(en=n)&&!f?Ca(e,a,(a.subtreeFlags&8772)!==0):Ra(e,a),Ki=u,en=f}break;case 30:break;default:Ra(e,a)}}function Bg(e){var n=e.alternate;n!==null&&(e.alternate=null,Bg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ma(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,zn=!1;function Qi(e,n,a){for(a=a.child;a!==null;)Ig(e,n,a),a=a.sibling}function Ig(e,n,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(it,a)}catch{}switch(a.tag){case 26:en||bi(a,n),Qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||bi(a,n);var o=qe,u=zn;Oa(a.type)&&(qe=a.stateNode,zn=!1),Qi(e,n,a),wo(a.stateNode),qe=o,zn=u;break;case 5:en||bi(a,n);case 6:if(o=qe,u=zn,qe=null,Qi(e,n,a),qe=o,zn=u,qe!==null)if(zn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Ve(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Ve(a,n,f)}break;case 18:qe!==null&&(zn?(e=qe,b_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Io(e)):b_(qe,a.stateNode));break;case 4:o=qe,u=zn,qe=a.stateNode.containerInfo,zn=!0,Qi(e,n,a),qe=o,zn=u;break;case 0:case 11:case 14:case 15:en||Aa(2,a,n),en||Aa(4,a,n),Qi(e,n,a);break;case 1:en||(bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Dg(a,n,o)),Qi(e,n,a);break;case 21:Qi(e,n,a);break;case 22:en=(o=en)||a.memoizedState!==null,Qi(e,n,a),en=o;break;default:Qi(e,n,a)}}function zg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Io(e)}catch(a){Ve(n,n.return,a)}}function ES(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Og),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Og),n;default:throw Error(r(435,e.tag))}}function Mf(e,n){var a=ES(e);n.forEach(function(o){var u=LS.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function qn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Oa(T.type)){qe=T.stateNode,zn=!1;break t}break;case 5:qe=T.stateNode,zn=!1;break t;case 3:case 4:qe=T.stateNode.containerInfo,zn=!0;break t}T=T.return}if(qe===null)throw Error(r(160));Ig(f,S,u),qe=null,zn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Fg(n,e),n=n.sibling}var pi=null;function Fg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),jn(e),o&4&&(Aa(3,e,e.return),xo(3,e),Aa(5,e,e.return));break;case 1:qn(n,e),jn(e),o&512&&(en||a===null||bi(a,a.return)),o&64&&Ki&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=pi;if(qn(n,e),jn(e),o&512&&(en||a===null||bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[pa]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,o,a),f[on]=e,nn(f),o=f;break t;case"link":var S=N_("link","href",u).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=u.createElement(o),En(f,o,a),u.head.appendChild(f);break;case"meta":if(S=N_("meta","content",u).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=u.createElement(o),En(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=e,nn(f),o=f}e.stateNode=o}else O_(u,e.type,e.stateNode);else e.stateNode=L_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?O_(u,e.type,e.stateNode):L_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&vf(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),jn(e),o&512&&(en||a===null||bi(a,a.return)),a!==null&&o&4&&vf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),jn(e),o&512&&(en||a===null||bi(a,a.return)),e.flags&32){u=e.stateNode;try{Mi(u,"")}catch(rt){Ve(e,e.return,rt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,vf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(yf=!0);break;case 6:if(qn(n,e),jn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(rt){Ve(e,e.return,rt)}}break;case 3:if(cc=null,u=pi,pi=oc(n.containerInfo),qn(n,e),pi=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Io(n.containerInfo)}catch(rt){Ve(e,e.return,rt)}yf&&(yf=!1,Hg(e));break;case 4:o=pi,pi=oc(e.stateNode.containerInfo),qn(n,e),jn(e),pi=o;break;case 12:qn(n,e),jn(e);break;case 13:qn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cf=oe()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Mf(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,tt=Ki,dt=en;if(Ki=tt||u,en=dt||I,qn(n,e),en=dt,Ki=tt,jn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Ki||en||mr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=I.stateNode;var vt=I.memoizedProps.style,nt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(rt){Ve(I,I.return,rt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(rt){Ve(I,I.return,rt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Mf(e,a))));break;case 19:qn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Mf(e,o)));break;case 30:break;case 21:break;default:qn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Lg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=xf(e);Yl(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(Mi(S,""),a.flags&=-33);var T=xf(e);Yl(e,T,S);break;case 3:case 4:var I=a.stateNode.containerInfo,tt=xf(e);Sf(e,tt,I);break;default:throw Error(r(161))}}catch(dt){Ve(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Hg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Pg(e,n.alternate,n),n=n.sibling}function mr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),mr(n);break;case 1:bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Dg(n,n.return,a),mr(n);break;case 27:wo(n.stateNode);case 26:case 5:bi(n,n.return),mr(n);break;case 22:n.memoizedState===null&&mr(n);break;case 30:mr(n);break;default:mr(n)}e=e.sibling}}function Ca(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ca(u,f,a),xo(4,f);break;case 1:if(Ca(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Ve(o,o.return,tt)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)mm(I[u],T)}catch(tt){Ve(o,o.return,tt)}}a&&S&64&&wg(f),So(f,f.return);break;case 27:Ng(f);case 26:case 5:Ca(u,f,a),a&&o===null&&S&4&&Ug(f),So(f,f.return);break;case 12:Ca(u,f,a);break;case 13:Ca(u,f,a),a&&S&4&&zg(u,f);break;case 22:f.memoizedState===null&&Ca(u,f,a),So(f,f.return);break;case 30:break;default:Ca(u,f,a)}n=n.sibling}}function Ef(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ao(a))}function Tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e))}function Ai(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gg(e,n,a,o),n=n.sibling}function Gg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,o),u&2048&&xo(9,n);break;case 1:Ai(e,n,a,o);break;case 3:Ai(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ao(e)));break;case 12:if(u&2048){Ai(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ve(n,n.return,I)}}else Ai(e,n,a,o);break;case 13:Ai(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(e,n,a,o):yo(e,n):f._visibility&2?Ai(e,n,a,o):(f._visibility|=2,ns(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Ef(S,n);break;case 24:Ai(e,n,a,o),u&2048&&Tf(n.alternate,n);break;default:Ai(e,n,a,o)}}function ns(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,I=o,tt=S.flags;switch(S.tag){case 0:case 11:case 15:ns(f,S,T,I,u),xo(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?ns(f,S,T,I,u):yo(f,S):(dt._visibility|=2,ns(f,S,T,I,u)),u&&tt&2048&&Ef(S.alternate,S);break;case 24:ns(f,S,T,I,u),u&&tt&2048&&Tf(S.alternate,S);break;default:ns(f,S,T,I,u)}n=n.sibling}}function yo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:yo(a,o),u&2048&&Ef(o.alternate,o);break;case 24:yo(a,o),u&2048&&Tf(o.alternate,o);break;default:yo(a,o)}n=n.sibling}}var Mo=8192;function is(e){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 26:is(e),e.flags&Mo&&e.memoizedState!==null&&ly(pi,e.memoizedState,e.memoizedProps);break;case 5:is(e);break;case 3:case 4:var n=pi;pi=oc(e.stateNode.containerInfo),is(e),pi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Mo,Mo=16777216,is(e),Mo=n):is(e));break;default:is(e)}}function kg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,Wg(o,e)}kg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xg(e),e=e.sibling}function Xg(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zl(e)):Eo(e);break;default:Eo(e)}}function Zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,Wg(o,e)}kg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(n));break;default:Zl(n)}e=e.sibling}}function Wg(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var u=o.sibling,f=o.return;if(Bg(o),o===a){gn=null;break t}if(u!==null){u.return=f,gn=u;break t}gn=f}}}var TS={getCacheForType:function(e){var n=Rn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},bS=typeof WeakMap=="function"?WeakMap:Map,Pe=0,We=null,ve=null,Te=0,Be=0,Yn=null,wa=!1,as=!1,bf=!1,Ji=0,Qe=0,Da=0,gr=0,Af=0,si=0,rs=0,To=null,Fn=null,Rf=!1,Cf=0,Kl=1/0,Ql=null,Ua=null,Mn=0,La=null,ss=null,os=0,wf=0,Df=null,qg=null,bo=0,Uf=null;function Zn(){if((Pe&2)!==0&&Te!==0)return Te&-Te;if(B.T!==null){var e=Yr;return e!==0?e:zf()}return Ce()}function jg(){si===0&&(si=(Te&536870912)===0||Le?X():536870912);var e=ri.current;return e!==null&&(e.flags|=32),si}function Kn(e,n,a){(e===We&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(ls(e,0),Na(e,Te,si,!1)),zt(e,a),((Pe&2)===0||e!==We)&&(e===We&&((Pe&2)===0&&(gr|=a),Qe===4&&Na(e,Te,si,!1)),Ri(e))}function Yg(e,n,a){if((Pe&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=o?CS(e,n):Of(e,n,!0),f=o;do{if(u===0){as&&!o&&Na(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!AS(a)){u=Of(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;u=To;var I=T.current.memoizedState.isDehydrated;if(I&&(ls(T,S).flags|=256),S=Of(T,S,!1),S!==2){if(bf&&!I){T.errorRecoveryDisabledLanes|=f,gr|=f,u=4;break t}f=Fn,Fn=u,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){ls(e,0),Na(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Na(o,n,si,!wa);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Cf+300-oe(),10<u)){if(Na(o,n,si,!wa),Kt(o,0,!0)!==0)break t;o.timeoutHandle=E_(Zg.bind(null,o,a,Fn,Ql,Rf,n,si,gr,rs,wa,f,2,-0,0),u);break t}Zg(o,a,Fn,Ql,Rf,n,si,gr,rs,wa,f,0,-0,0)}}break}while(!0);Ri(e)}function Zg(e,n,a,o,u,f,S,T,I,tt,dt,vt,nt,rt){if(e.timeoutHandle=-1,vt=n.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Lo={stylesheets:null,count:0,unsuspend:oy},Vg(n),vt=cy(),vt!==null)){e.cancelPendingCommit=vt(n_.bind(null,e,n,f,a,o,u,S,T,I,dt,1,nt,rt)),Na(e,f,S,!tt);return}n_(e,n,f,a,o,u,S,T,I)}function AS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Xn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Na(e,n,a,o){n&=~Af,n&=~gr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Bt(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&St(e,a,n)}function Jl(){return(Pe&6)===0?(Ao(0),!1):!0}function Lf(){if(ve!==null){if(Be===0)var e=ve.return;else e=ve,Xi=ur=null,Yu(e),ts=null,go=0,e=ve;for(;e!==null;)Cg(e.alternate,e),e=e.return;ve=null}}function ls(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,XS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Lf(),We=e,ve=a=Gi(e.current,null),Te=n,Be=0,Yn=null,wa=!1,as=Dt(e,n),bf=!1,rs=si=Af=gr=Da=Qe=0,Fn=To=null,Rf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Bt(o),f=1<<u;n|=e[u],o&=~f}return Ji=n,Sl(),a}function Kg(e,n){pe=null,B.H=Fl,n===so||n===wl?(n=hm(),Be=3):n===um?(n=hm(),Be=4):Be=n===pg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,ve===null&&(Qe=1,Xl(e,ei(n,e.current)))}function Qg(){var e=B.H;return B.H=Fl,e===null?Fl:e}function Jg(){var e=B.A;return B.A=TS,e}function Nf(){Qe=4,wa||(Te&4194048)!==Te&&ri.current!==null||(as=!0),(Da&134217727)===0&&(gr&134217727)===0||We===null||Na(We,Te,si,!1)}function Of(e,n,a){var o=Pe;Pe|=2;var u=Qg(),f=Jg();(We!==e||Te!==n)&&(Ql=null,ls(e,n)),n=!1;var S=Qe;t:do try{if(Be!==0&&ve!==null){var T=ve,I=Yn;switch(Be){case 8:Lf(),S=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var tt=Be;if(Be=0,Yn=null,cs(e,T,I,tt),a&&as){S=0;break t}break;default:tt=Be,Be=0,Yn=null,cs(e,T,I,tt)}}RS(),S=Qe;break}catch(dt){Kg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Xi=ur=null,Pe=o,B.H=u,B.A=f,ve===null&&(We=null,Te=0,Sl()),S}function RS(){for(;ve!==null;)$g(ve)}function CS(e,n){var a=Pe;Pe|=2;var o=Qg(),u=Jg();We!==e||Te!==n?(Ql=null,Kl=oe()+500,ls(e,n)):as=Dt(e,n);t:do try{if(Be!==0&&ve!==null){n=ve;var f=Yn;e:switch(Be){case 1:Be=0,Yn=null,cs(e,n,f,1);break;case 2:case 9:if(fm(f)){Be=0,Yn=null,t_(n);break}n=function(){Be!==2&&Be!==9||We!==e||(Be=7),Ri(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:fm(f)?(Be=0,Yn=null,t_(n)):(Be=0,Yn=null,cs(e,n,f,7));break;case 5:var S=null;switch(ve.tag){case 26:S=ve.memoizedState;case 5:case 27:var T=ve;if(!S||P_(S)){Be=0,Yn=null;var I=T.sibling;if(I!==null)ve=I;else{var tt=T.return;tt!==null?(ve=tt,$l(tt)):ve=null}break e}}Be=0,Yn=null,cs(e,n,f,5);break;case 6:Be=0,Yn=null,cs(e,n,f,6);break;case 8:Lf(),Qe=6;break t;default:throw Error(r(462))}}wS();break}catch(dt){Kg(e,dt)}while(!0);return Xi=ur=null,B.H=o,B.A=u,Pe=a,ve!==null?0:(We=null,Te=0,Sl(),Qe)}function wS(){for(;ve!==null&&!le();)$g(ve)}function $g(e){var n=Ag(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,n===null?$l(e):ve=n}function t_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Sg(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=Sg(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:Yu(n);default:Cg(a,n),n=ve=em(n,Ji),n=Ag(a,n,Ji)}e.memoizedProps=e.pendingProps,n===null?$l(e):ve=n}function cs(e,n,a,o){Xi=ur=null,Yu(n),ts=null,go=0;var u=n.return;try{if(vS(e,u,n,a,Te)){Qe=1,Xl(e,ei(a,e.current)),ve=null;return}}catch(f){if(u!==null)throw ve=u,f;Qe=1,Xl(e,ei(a,e.current)),ve=null;return}n.flags&32768?(Le||o===1?e=!0:as||(Te&536870912)!==0?e=!1:(wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ri.current,o!==null&&o.tag===13&&(o.flags|=16384))),e_(n,e)):$l(n)}function $l(e){var n=e;do{if((n.flags&32768)!==0){e_(n,wa);return}e=n.return;var a=SS(n.alternate,n,Ji);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);Qe===0&&(Qe=5)}function e_(e,n){do{var a=yS(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);Qe=6,ve=null}function n_(e,n,a,o,u,f,S,T,I){e.cancelPendingCommit=null;do tc();while(Mn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Eu,Rt(e,a,f,S,T,I),e===We&&(ve=We=null,Te=0),ss=n,La=e,os=a,wf=f,Df=u,qg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,NS(ie,function(){return o_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=Z.p,Z.p=2,S=Pe,Pe|=4;try{MS(e,n,a)}finally{Pe=S,Z.p=u,B.T=o}}Mn=1,i_(),a_(),r_()}}function i_(){if(Mn===1){Mn=0;var e=La,n=ss,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var u=Pe;Pe|=4;try{Fg(n,e);var f=qf,S=Wp(e.containerInfo),T=f.focusedElem,I=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&Xp(T.ownerDocument.documentElement,T)){if(I!==null&&vu(T)){var tt=I.start,dt=I.end;if(dt===void 0&&(dt=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(dt,T.value.length);else{var vt=T.ownerDocument||document,nt=vt&&vt.defaultView||window;if(nt.getSelection){var rt=nt.getSelection(),ne=T.textContent.length,$t=Math.min(I.start,ne),Fe=I.end===void 0?$t:Math.min(I.end,ne);!rt.extend&&$t>Fe&&(S=Fe,Fe=$t,$t=S);var q=kp(T,$t),k=kp(T,Fe);if(q&&k&&(rt.rangeCount!==1||rt.anchorNode!==q.node||rt.anchorOffset!==q.offset||rt.focusNode!==k.node||rt.focusOffset!==k.offset)){var $=vt.createRange();$.setStart(q.node,q.offset),rt.removeAllRanges(),$t>Fe?(rt.addRange($),rt.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),rt.addRange($))}}}}for(vt=[],rt=T;rt=rt.parentNode;)rt.nodeType===1&&vt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<vt.length;T++){var mt=vt[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}dc=!!Wf,qf=Wf=null}finally{Pe=u,Z.p=o,B.T=a}}e.current=n,Mn=2}}function a_(){if(Mn===2){Mn=0;var e=La,n=ss,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var u=Pe;Pe|=4;try{Pg(e,n.alternate,n)}finally{Pe=u,Z.p=o,B.T=a}}Mn=3}}function r_(){if(Mn===4||Mn===3){Mn=0,me();var e=La,n=ss,a=os,o=qg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,ss=La=null,s_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ua=null),Oe(a),n=n.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(it,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=Z.p,Z.p=2,B.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var T=o[S];f(T.value,{componentStack:T.stack})}}finally{B.T=n,Z.p=u}}(os&3)!==0&&tc(),Ri(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Uf?bo++:(bo=0,Uf=e):bo=0,Ao(0)}}function s_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ao(n)))}function tc(e){return i_(),a_(),r_(),o_()}function o_(){if(Mn!==5)return!1;var e=La,n=wf;wf=0;var a=Oe(os),o=B.T,u=Z.p;try{Z.p=32>a?32:a,B.T=null,a=Df,Df=null;var f=La,S=os;if(Mn=0,ss=La=null,os=0,(Pe&6)!==0)throw Error(r(331));var T=Pe;if(Pe|=4,Xg(f.current),Gg(f,f.current,S,a),Pe=T,Ao(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(it,f)}catch{}return!0}finally{Z.p=u,B.T=o,s_(e,n)}}function l_(e,n,a){n=ei(a,n),n=cf(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(zt(e,2),Ri(e))}function Ve(e,n,a){if(e.tag===3)l_(e,e,a);else for(;n!==null;){if(n.tag===3){l_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ua===null||!Ua.has(o))){e=ei(a,e),a=dg(2),o=Ma(n,a,2),o!==null&&(hg(a,o,n,e),zt(o,2),Ri(o));break}}n=n.return}}function Pf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new bS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(bf=!0,u.add(a),e=DS.bind(null,e,n,a),n.then(e,e))}function DS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Te&a)===a&&(Qe===4||Qe===3&&(Te&62914560)===Te&&300>oe()-Cf?(Pe&2)===0&&ls(e,0):Af|=a,rs===Te&&(rs=0)),Ri(e)}function c_(e,n){n===0&&(n=Nt()),e=Xr(e,n),e!==null&&(zt(e,n),Ri(e))}function US(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),c_(e,a)}function LS(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),c_(e,a)}function NS(e,n){return ce(e,n)}var ec=null,us=null,Bf=!1,nc=!1,If=!1,_r=0;function Ri(e){e!==us&&e.next===null&&(us===null?ec=us=e:us=us.next=e),nc=!0,Bf||(Bf=!0,PS())}function Ao(e,n){if(!If&&nc){If=!0;do for(var a=!1,o=ec;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Bt(42|e)+1)-1,f&=u&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,h_(o,f))}else f=Te,f=Kt(o,o===We?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Dt(o,f)||(a=!0,h_(o,f));o=o.next}while(a);If=!1}}function OS(){u_()}function u_(){nc=Bf=!1;var e=0;_r!==0&&(kS()&&(e=_r),_r=0);for(var n=oe(),a=null,o=ec;o!==null;){var u=o.next,f=f_(o,n);f===0?(o.next=null,a===null?ec=u:a.next=u,u===null&&(us=a)):(a=o,(e!==0||(f&3)!==0)&&(nc=!0)),o=u}Ao(e)}function f_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Bt(f),T=1<<S,I=u[S];I===-1?((T&a)===0||(T&o)!==0)&&(u[S]=se(T,n)):I<=n&&(e.expiredLanes|=T),f&=~T}if(n=We,a=Te,a=Kt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&H(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&H(o),Oe(a)){case 2:case 8:a=Yt;break;case 32:a=ie;break;case 268435456:a=O;break;default:a=ie}return o=d_.bind(null,e),a=ce(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&H(o),e.callbackPriority=2,e.callbackNode=null,2}function d_(e,n){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(tc()&&e.callbackNode!==a)return null;var o=Te;return o=Kt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Yg(e,o,n),f_(e,oe()),e.callbackNode!=null&&e.callbackNode===a?d_.bind(null,e):null)}function h_(e,n){if(tc())return null;Yg(e,n,!0)}function PS(){WS(function(){(Pe&6)!==0?ce(_e,OS):u_()})}function zf(){return _r===0&&(_r=X()),_r}function p_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hl(""+e)}function m_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function BS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=p_((u[xn]||null).action),S=o.submitter;S&&(n=(n=S[xn]||null)?p_(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new _l("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(_r!==0){var I=S?m_(u,S):new FormData(u);af(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=S?m_(u,S):new FormData(u),af(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Ff=0;Ff<Mu.length;Ff++){var Hf=Mu[Ff],IS=Hf.toLowerCase(),zS=Hf[0].toUpperCase()+Hf.slice(1);hi(IS,"on"+zS)}hi(Yp,"onAnimationEnd"),hi(Zp,"onAnimationIteration"),hi(Kp,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(eS,"onTransitionRun"),hi(nS,"onTransitionStart"),hi(iS,"onTransitionCancel"),hi(Qp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function g_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],I=T.instance,tt=T.currentTarget;if(T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=tt;try{f(u)}catch(dt){kl(dt)}u.currentTarget=null,f=I}else for(S=0;S<o.length;S++){if(T=o[S],I=T.instance,tt=T.currentTarget,T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=tt;try{f(u)}catch(dt){kl(dt)}u.currentTarget=null,f=I}}}}function xe(e,n){var a=n[$a];a===void 0&&(a=n[$a]=new Set);var o=e+"__bubble";a.has(o)||(__(n,e,2,!1),a.add(o))}function Gf(e,n,a){var o=0;n&&(o|=4),__(a,e,o,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function Vf(e){if(!e[ic]){e[ic]=!0,fl.forEach(function(a){a!=="selectionchange"&&(FS.has(a)||Gf(a,!1,e),Gf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ic]||(n[ic]=!0,Gf("selectionchange",!1,n))}}function __(e,n,a,o){switch(G_(n)){case 2:var u=dy;break;case 8:u=hy;break;default:u=nd}a=u.bind(null,n,a,e),u=void 0,!cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function kf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=o.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=Pi(T),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){o=f=S;continue t}T=T.parentNode}}o=o.return}Tp(function(){var tt=f,dt=ou(a),vt=[];t:{var nt=Jp.get(e);if(nt!==void 0){var rt=_l,ne=e;switch(e){case"keypress":if(ml(a)===0)break t;case"keydown":case"keyup":rt=Nx;break;case"focusin":ne="focus",rt=hu;break;case"focusout":ne="blur",rt=hu;break;case"beforeblur":case"afterblur":rt=hu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Bx;break;case Yp:case Zp:case Kp:rt=Tx;break;case Qp:rt=zx;break;case"scroll":case"scrollend":rt=xx;break;case"wheel":rt=Hx;break;case"copy":case"cut":case"paste":rt=Ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=wp;break;case"toggle":case"beforetoggle":rt=Vx}var $t=(n&4)!==0,Fe=!$t&&(e==="scroll"||e==="scrollend"),q=$t?nt!==null?nt+"Capture":null:nt;$t=[];for(var k=tt,$;k!==null;){var mt=k;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||q===null||(mt=Ws(k,q),mt!=null&&$t.push(Co(k,mt,$))),Fe)break;k=k.return}0<$t.length&&(nt=new rt(nt,ne,null,a,dt),vt.push({event:nt,listeners:$t}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",nt&&a!==su&&(ne=a.relatedTarget||a.fromElement)&&(Pi(ne)||ne[Pn]))break t;if((rt||nt)&&(nt=dt.window===dt?dt:(nt=dt.ownerDocument)?nt.defaultView||nt.parentWindow:window,rt?(ne=a.relatedTarget||a.toElement,rt=tt,ne=ne?Pi(ne):null,ne!==null&&(Fe=c(ne),$t=ne.tag,ne!==Fe||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(rt=null,ne=tt),rt!==ne)){if($t=Rp,mt="onMouseLeave",q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&($t=wp,mt="onPointerLeave",q="onPointerEnter",k="pointer"),Fe=rt==null?nt:er(rt),$=ne==null?nt:er(ne),nt=new $t(mt,k+"leave",rt,a,dt),nt.target=Fe,nt.relatedTarget=$,mt=null,Pi(dt)===tt&&($t=new $t(q,k+"enter",ne,a,dt),$t.target=$,$t.relatedTarget=Fe,mt=$t),Fe=mt,rt&&ne)e:{for($t=rt,q=ne,k=0,$=$t;$;$=fs($))k++;for($=0,mt=q;mt;mt=fs(mt))$++;for(;0<k-$;)$t=fs($t),k--;for(;0<$-k;)q=fs(q),$--;for(;k--;){if($t===q||q!==null&&$t===q.alternate)break e;$t=fs($t),q=fs(q)}$t=null}else $t=null;rt!==null&&v_(vt,nt,rt,$t,!1),ne!==null&&Fe!==null&&v_(vt,Fe,ne,$t,!0)}}t:{if(nt=tt?er(tt):window,rt=nt.nodeName&&nt.nodeName.toLowerCase(),rt==="select"||rt==="input"&&nt.type==="file")var Gt=Ip;else if(Pp(nt))if(zp)Gt=Jx;else{Gt=Kx;var ge=Zx}else rt=nt.nodeName,!rt||rt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&ru(tt.elementType)&&(Gt=Ip):Gt=Qx;if(Gt&&(Gt=Gt(e,tt))){Bp(vt,Gt,a,dt);break t}ge&&ge(e,nt,tt),e==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&An(nt,"number",nt.value)}switch(ge=tt?er(tt):window,e){case"focusin":(Pp(ge)||ge.contentEditable==="true")&&(Gr=ge,xu=tt,$s=null);break;case"focusout":$s=xu=Gr=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,qp(vt,a,dt);break;case"selectionchange":if(tS)break;case"keydown":case"keyup":qp(vt,a,dt)}var jt;if(mu)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Hr?Np(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(Dp&&a.locale!=="ko"&&(Hr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Hr&&(jt=bp()):(va=dt,uu="value"in va?va.value:va.textContent,Hr=!0)),ge=ac(tt,ee),0<ge.length&&(ee=new Cp(ee,e,null,a,dt),vt.push({event:ee,listeners:ge}),jt?ee.data=jt:(jt=Op(a),jt!==null&&(ee.data=jt)))),(jt=Xx?Wx(e,a):qx(e,a))&&(ee=ac(tt,"onBeforeInput"),0<ee.length&&(ge=new Cp("onBeforeInput","beforeinput",null,a,dt),vt.push({event:ge,listeners:ee}),ge.data=jt)),BS(vt,e,tt,a,dt)}g_(vt,n)})}function Co(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ac(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ws(e,a),u!=null&&o.unshift(Co(e,u,f)),u=Ws(e,n),u!=null&&o.push(Co(e,u,f))),e.tag===3)return o;e=e.return}return[]}function fs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function v_(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var T=a,I=T.alternate,tt=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||tt===null||(I=tt,u?(tt=Ws(a,f),tt!=null&&S.unshift(Co(a,tt,I))):u||(tt=Ws(a,f),tt!=null&&S.push(Co(a,tt,I)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var HS=/\r\n?/g,GS=/\u0000|\uFFFD/g;function x_(e){return(typeof e=="string"?e:""+e).replace(HS,`
`).replace(GS,"")}function S_(e,n){return n=x_(n),x_(e)===n}function rc(){}function ze(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Mi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Mi(e,""+o);break;case"className":Ut(e,"class",o);break;case"tabIndex":Ut(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ut(e,a,o);break;case"style":Mp(e,o,f);break;case"data":if(n!=="object"){Ut(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(e,n,"name",u.name,u,null),ze(e,n,"formEncType",u.formEncType,u,null),ze(e,n,"formMethod",u.formMethod,u,null),ze(e,n,"formTarget",u.formTarget,u,null)):(ze(e,n,"encType",u.encType,u,null),ze(e,n,"method",u.method,u,null),ze(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=rc);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=hl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),At(e,"popover",o);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":At(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_x.get(a)||a,At(e,a,o))}}function Xf(e,n,a,o,u,f){switch(a){case"style":Mp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Mi(e,o):(typeof o=="number"||typeof o=="bigint")&&Mi(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=rc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):At(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(e,n,f,S,a,null)}}u&&ze(e,n,"srcSet",a.srcSet,a,null),o&&ze(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var T=f=S=u=null,I=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":S=dt;break;case"checked":I=dt;break;case"defaultChecked":tt=dt;break;case"value":f=dt;break;case"defaultValue":T=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:ze(e,n,o,dt,a,null)}}Ge(e,f,T,I,tt,S,u,!1),Ze(e);return;case"select":xe("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:ze(e,n,u,T,a,null)}n=f,a=S,e.multiple=!!o,n!=null?ln(e,!!o,n,!1):a!=null&&ln(e,!!o,a,!0);return;case"textarea":xe("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:ze(e,n,S,T,a,null)}Sn(e,o,u,f),Ze(e);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ze(e,n,I,o,a,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<Ro.length;o++)xe(Ro[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(e,n,tt,o,a,null)}return;default:if(ru(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&Xf(e,n,dt,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&ze(e,n,T,o,a,null))}function VS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,T=null,I=null,tt=null,dt=null;for(rt in a){var vt=a[rt];if(a.hasOwnProperty(rt)&&vt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":I=vt;default:o.hasOwnProperty(rt)||ze(e,n,rt,null,o,vt)}}for(var nt in o){var rt=o[nt];if(vt=a[nt],o.hasOwnProperty(nt)&&(rt!=null||vt!=null))switch(nt){case"type":f=rt;break;case"name":u=rt;break;case"checked":tt=rt;break;case"defaultChecked":dt=rt;break;case"value":S=rt;break;case"defaultValue":T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==vt&&ze(e,n,nt,rt,o,vt)}}zi(e,S,T,I,tt,dt,f,u);return;case"select":rt=S=T=nt=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":rt=I;default:o.hasOwnProperty(f)||ze(e,n,f,null,o,I)}for(u in o)if(f=o[u],I=a[u],o.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==I&&ze(e,n,u,f,o,I)}n=T,a=S,o=rt,nt!=null?ln(e,!!a,nt,!1):!!o!=!!a&&(n!=null?ln(e,!!a,n,!0):ln(e,!!a,a?[]:"",!1));return;case"textarea":rt=nt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ze(e,n,T,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":nt=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&ze(e,n,S,u,o,f)}pn(e,nt,rt);return;case"option":for(var ne in a)if(nt=a[ne],a.hasOwnProperty(ne)&&nt!=null&&!o.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:ze(e,n,ne,null,o,nt)}for(I in o)if(nt=o[I],rt=a[I],o.hasOwnProperty(I)&&nt!==rt&&(nt!=null||rt!=null))switch(I){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:ze(e,n,I,nt,o,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)nt=a[$t],a.hasOwnProperty($t)&&nt!=null&&!o.hasOwnProperty($t)&&ze(e,n,$t,null,o,nt);for(tt in o)if(nt=o[tt],rt=a[tt],o.hasOwnProperty(tt)&&nt!==rt&&(nt!=null||rt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:ze(e,n,tt,nt,o,rt)}return;default:if(ru(n)){for(var Fe in a)nt=a[Fe],a.hasOwnProperty(Fe)&&nt!==void 0&&!o.hasOwnProperty(Fe)&&Xf(e,n,Fe,void 0,o,nt);for(dt in o)nt=o[dt],rt=a[dt],!o.hasOwnProperty(dt)||nt===rt||nt===void 0&&rt===void 0||Xf(e,n,dt,nt,o,rt);return}}for(var q in a)nt=a[q],a.hasOwnProperty(q)&&nt!=null&&!o.hasOwnProperty(q)&&ze(e,n,q,null,o,nt);for(vt in o)nt=o[vt],rt=a[vt],!o.hasOwnProperty(vt)||nt===rt||nt==null&&rt==null||ze(e,n,vt,nt,o,rt)}var Wf=null,qf=null;function sc(e){return e.nodeType===9?e:e.ownerDocument}function y_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function M_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function jf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yf=null;function kS(){var e=window.event;return e&&e.type==="popstate"?e===Yf?!1:(Yf=e,!0):(Yf=null,!1)}var E_=typeof setTimeout=="function"?setTimeout:void 0,XS=typeof clearTimeout=="function"?clearTimeout:void 0,T_=typeof Promise=="function"?Promise:void 0,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof T_<"u"?function(e){return T_.resolve(null).then(e).catch(qS)}:E_;function qS(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function b_(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&wo(S.documentElement),a&2&&wo(S.body),a&4)for(a=S.head,wo(a),S=a.firstChild;S;){var T=S.nextSibling,I=S.nodeName;S[pa]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(u===0){e.removeChild(f),Io(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Io(n)}function Zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zf(a),ma(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function jS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[pa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function YS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function Kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ZS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Qf=null;function A_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function R_(e,n,a){switch(n=sc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function wo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ma(e)}var oi=new Map,C_=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=Z.d;Z.d={f:KS,r:QS,D:JS,C:$S,L:ty,m:ey,X:iy,S:ny,M:ay};function KS(){var e=$i.f(),n=Jl();return e||n}function QS(e){var n=Bi(e);n!==null&&n.tag===5&&n.type==="form"?Ym(n):$i.r(e)}var ds=typeof document>"u"?null:document;function w_(e,n,a){var o=ds;if(o&&typeof n=="string"&&n){var u=Xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),C_.has(u)||(C_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",e),nn(n),o.head.appendChild(n)))}}function JS(e){$i.D(e),w_("dns-prefetch",e,null)}function $S(e,n){$i.C(e,n),w_("preconnect",e,n)}function ty(e,n,a){$i.L(e,n,a);var o=ds;if(o&&e&&n){var u='link[rel="preload"][as="'+Xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Xe(a.imageSizes)+'"]')):u+='[href="'+Xe(e)+'"]';var f=u;switch(n){case"style":f=hs(e);break;case"script":f=ps(e)}oi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Do(f))||n==="script"&&o.querySelector(Uo(f))||(n=o.createElement("link"),En(n,"link",e),nn(n),o.head.appendChild(n)))}}function ey(e,n){$i.m(e,n);var a=ds;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Xe(o)+'"][href="'+Xe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ps(e)}if(!oi.has(f)&&(e=g({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}o=a.createElement("link"),En(o,"link",e),nn(o),a.head.appendChild(o)}}}function ny(e,n,a){$i.S(e,n,a);var o=ds;if(o&&e){var u=ga(o).hoistableStyles,f=hs(e);n=n||"default";var S=u.get(f);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(Do(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&Jf(e,a);var I=S=o.createElement("link");nn(I),En(I,"link",e),I._p=new Promise(function(tt,dt){I.onload=tt,I.onerror=dt}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,lc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(f,S)}}}function iy(e,n){$i.X(e,n);var a=ds;if(a&&e){var o=ga(a).hoistableScripts,u=ps(e),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(e=g({src:e,async:!0},n),(n=oi.get(u))&&$f(e,n),f=a.createElement("script"),nn(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ay(e,n){$i.M(e,n);var a=ds;if(a&&e){var o=ga(a).hoistableScripts,u=ps(e),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=oi.get(u))&&$f(e,n),f=a.createElement("script"),nn(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function D_(e,n,a,o){var u=(u=Mt.current)?oc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=ga(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=hs(a.href);var f=ga(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(Do(e)))&&!f._p&&(S.instance=f,S.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||ry(u,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ps(a),a=ga(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function hs(e){return'href="'+Xe(e)+'"'}function Do(e){return'link[rel="stylesheet"]['+e+"]"}function U_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function ry(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),nn(n),e.head.appendChild(n))}function ps(e){return'[src="'+Xe(e)+'"]'}function Uo(e){return"script[async]"+e}function L_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Xe(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nn(o),En(o,"style",u),lc(o,a.precedence,e),n.instance=o;case"stylesheet":u=hs(a.href);var f=e.querySelector(Do(u));if(f)return n.state.loading|=4,n.instance=f,nn(f),f;o=U_(a),(u=oi.get(u))&&Jf(o,u),f=(e.ownerDocument||e).createElement("link"),nn(f);var S=f;return S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),En(f,"link",o),n.state.loading|=4,lc(f,a.precedence,e),n.instance=f;case"script":return f=ps(a.src),(u=e.querySelector(Uo(f)))?(n.instance=u,nn(u),u):(o=a,(u=oi.get(f))&&(o=g({},a),$f(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),nn(u),En(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,a.precedence,e));return n.instance}function lc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var cc=null;function N_(e,n,a){if(cc===null){var o=new Map,u=cc=new Map;u.set(a,o)}else u=cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[pa]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=o.get(S);T?T.push(f):o.set(S,[f])}}return o}function O_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function sy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function P_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Lo=null;function oy(){}function ly(e,n,a){if(Lo===null)throw Error(r(475));var o=Lo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=hs(a.href),f=e.querySelector(Do(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=uc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,nn(f);return}f=e.ownerDocument||e,a=U_(a),(u=oi.get(u))&&Jf(a,u),f=f.createElement("link"),nn(f);var S=f;S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),En(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=uc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function cy(){if(Lo===null)throw Error(r(475));var e=Lo;return e.stylesheets&&e.count===0&&td(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&td(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function uc(){if(this.count--,this.count===0){if(this.stylesheets)td(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function td(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,n.forEach(uy,e),fc=null,uc.call(e))}function uy(e,n){if(!(n.state.loading&4)){var a=fc.get(e);if(a)var o=a.get(null);else{a=new Map,fc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var No={$$typeof:U,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function fy(e,n,a,o,u,f,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function B_(e,n,a,o,u,f,S,T,I,tt,dt,vt){return e=new fy(e,n,a,S,T,I,tt,vt),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),e.current=f,f.stateNode=e,n=Ou(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},zu(f),e}function I_(e){return e?(e=Wr,e):Wr}function z_(e,n,a,o,u,f){u=I_(u),o.context===null?o.context=u:o.pendingContext=u,o=ya(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ma(e,o,n),a!==null&&(Kn(a,e,n),lo(a,e,n))}function F_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ed(e,n){F_(e,n),(e=e.alternate)&&F_(e,n)}function H_(e){if(e.tag===13){var n=Xr(e,67108864);n!==null&&Kn(n,e,67108864),ed(e,67108864)}}var dc=!0;function dy(e,n,a,o){var u=B.T;B.T=null;var f=Z.p;try{Z.p=2,nd(e,n,a,o)}finally{Z.p=f,B.T=u}}function hy(e,n,a,o){var u=B.T;B.T=null;var f=Z.p;try{Z.p=8,nd(e,n,a,o)}finally{Z.p=f,B.T=u}}function nd(e,n,a,o){if(dc){var u=id(o);if(u===null)kf(e,n,o,hc,a),V_(e,o);else if(my(u,e,n,a,o))o.stopPropagation();else if(V_(e,o),n&4&&-1<py.indexOf(e)){for(;u!==null;){var f=Bi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Zt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var I=1<<31-Bt(S);T.entanglements[1]|=I,S&=~I}Ri(f),(Pe&6)===0&&(Kl=oe()+500,Ao(0))}}break;case 13:T=Xr(f,2),T!==null&&Kn(T,f,2),Jl(),ed(f,2)}if(f=id(o),f===null&&kf(e,n,o,hc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else kf(e,n,o,null,a)}}function id(e){return e=ou(e),ad(e)}var hc=null;function ad(e){if(hc=null,e=Pi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return hc=e,null}function G_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case _e:return 2;case Yt:return 8;case ie:case je:return 32;case O:return 268435456;default:return 32}default:return 32}}var rd=!1,Pa=null,Ba=null,Ia=null,Oo=new Map,Po=new Map,za=[],py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function V_(e,n){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function Bo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Bi(n),n!==null&&H_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function my(e,n,a,o,u){switch(n){case"focusin":return Pa=Bo(Pa,e,n,a,o,u),!0;case"dragenter":return Ba=Bo(Ba,e,n,a,o,u),!0;case"mouseover":return Ia=Bo(Ia,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Oo.set(f,Bo(Oo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Po.set(f,Bo(Po.get(f)||null,e,n,a,o,u)),!0}return!1}function k_(e){var n=Pi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,kn(e.priority,function(){if(a.tag===13){var o=Zn();o=ae(o);var u=Xr(a,o);u!==null&&Kn(u,a,o),ed(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=id(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);su=o,a.target.dispatchEvent(o),su=null}else return n=Bi(a),n!==null&&H_(n),e.blockedOn=a,!1;n.shift()}return!0}function X_(e,n,a){pc(e)&&a.delete(n)}function gy(){rd=!1,Pa!==null&&pc(Pa)&&(Pa=null),Ba!==null&&pc(Ba)&&(Ba=null),Ia!==null&&pc(Ia)&&(Ia=null),Oo.forEach(X_),Po.forEach(X_)}function mc(e,n){e.blockedOn===n&&(e.blockedOn=null,rd||(rd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,gy)))}var gc=null;function W_(e){gc!==e&&(gc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){gc===e&&(gc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ad(o||a)===null)continue;break}var f=Bi(a);f!==null&&(e.splice(n,3),n-=3,af(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Io(e){function n(I){return mc(I,e)}Pa!==null&&mc(Pa,e),Ba!==null&&mc(Ba,e),Ia!==null&&mc(Ia,e),Oo.forEach(n),Po.forEach(n);for(var a=0;a<za.length;a++){var o=za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)k_(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[xn]||null;if(typeof f=="function")S||W_(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[xn]||null)T=S.formAction;else if(ad(u)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),W_(a)}}}function sd(e){this._internalRoot=e}_c.prototype.render=sd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Zn();z_(a,o,e,n,null,null)},_c.prototype.unmount=sd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;z_(e.current,2,null,e,null,null),Jl(),n[Pn]=null}};function _c(e){this._internalRoot=e}_c.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ce();e={blockedOn:null,target:e,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,e),a===0&&k_(e)}};var q_=t.version;if(q_!=="19.1.0")throw Error(r(527,q_,"19.1.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var _y={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{it=vc.inject(_y),ft=vc}catch{}}return Fo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=lg,f=cg,S=ug,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=B_(e,1,!1,null,null,a,o,u,f,S,T,null),e[Pn]=n.current,Vf(e),new sd(n)},Fo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=lg,S=cg,T=ug,I=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=B_(e,1,!0,n,a??null,o,u,f,S,T,I,tt),n.context=I_(null),a=n.current,o=Zn(),o=ae(o),u=ya(o),u.callback=null,Ma(a,u,o),a=o,n.current.lanes=a,zt(n,a),Ri(n),e[Pn]=n.current,Vf(e),new _c(n)},Fo.version="19.1.0",Fo}var nv;function Ay(){if(nv)return cd.exports;nv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),cd.exports=by(),cd.exports}var Ry=Ay();const Cy=nl(Ry);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Dy=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),iv=s=>{const t=Dy(s);return t.charAt(0).toUpperCase()+t.slice(1)},y0=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),Uy=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ly={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=yt.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...h},m)=>yt.createElement("svg",{ref:m,...Ly,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:y0("lucide",l),...!c&&!Uy(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,g])=>yt.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=(s,t)=>{const i=yt.forwardRef(({className:r,...l},c)=>yt.createElement(Ny,{ref:c,iconNode:t,className:y0(`lucide-${wy(iv(s))}`,`lucide-${s}`,r),...l}));return i.displayName=iv(s),i};/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],M0=ti("arrow-right",Oy);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],E0=ti("book-open",Py);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],T0=ti("briefcase",By);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],zy=ti("chevron-left",Iy);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],nh=ti("code",Fy);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],$h=ti("github",Hy);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],tp=ti("globe",Gy);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],ky=ti("house",Vy);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],ih=ti("lightbulb",Xy);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],qy=ti("menu",Wy);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Yy=ti("moon",jy);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Ky=ti("sun",Zy);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],av=ti("user",Qy),Jy="_errorBoundaryContainer_rl5wd_1",$y="_errorBoundaryTitle_rl5wd_29",tM="_errorBoundaryMessage_rl5wd_41",eM="_errorDetailsToggle_rl5wd_51",nM="_errorDetailsPre_rl5wd_63",Ho={errorBoundaryContainer:Jy,errorBoundaryTitle:$y,errorBoundaryMessage:tM,errorDetailsToggle:eM,errorDetailsPre:nM};class iM extends la.Component{constructor(t){super(t),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,i){console.error("ErrorBoundary caught an error:",t,i),this.setState({errorInfo:i})}render(){return this.state.hasError?j.jsxs("div",{className:Ho.errorBoundaryContainer,children:[j.jsx("h1",{className:Ho.errorBoundaryTitle,children:"Oops! Something went wrong."}),j.jsx("p",{className:Ho.errorBoundaryMessage,children:"We're sorry for the inconvenience. Please try refreshing the page."}),j.jsxs("details",{className:Ho.errorDetailsToggle,children:[j.jsx("summary",{children:"Error Details"}),j.jsxs("pre",{className:Ho.errorDetailsPre,children:[this.state.error&&this.state.error.toString(),j.jsx("br",{}),this.state.errorInfo&&this.state.errorInfo.componentStack]})]})]}):this.props.children}}var hd={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var rv;function aM(){return rv||(rv=1,function(s){(function(){var t={}.hasOwnProperty;function i(){for(var c="",d=0;d<arguments.length;d++){var h=arguments[d];h&&(c=l(c,r(h)))}return c}function r(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return i.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var d="";for(var h in c)t.call(c,h)&&c[h]&&(d=l(d,h));return d}function l(c,d){return d?c?c+" "+d:c+d:c}s.exports?(i.default=i,s.exports=i):window.classNames=i})()}(hd)),hd.exports}var rM=aM();const di=nl(rM),Vs=!!(typeof window<"u"&&window.document&&window.document.createElement);var ah=!1,rh=!1;try{var pd={get passive(){return ah=!0},get once(){return rh=ah=!0}};Vs&&(window.addEventListener("test",pd,pd),window.removeEventListener("test",pd,!0))}catch{}function b0(s,t,i,r){if(r&&typeof r!="boolean"&&!rh){var l=r.once,c=r.capture,d=i;!rh&&l&&(d=i.__once||function h(m){this.removeEventListener(t,h,c),i.call(this,m)},i.__once=d),s.addEventListener(t,d,ah?r:c)}s.addEventListener(t,i,r)}function tu(s){return s&&s.ownerDocument||document}function sh(s,t,i,r){var l=r&&typeof r!="boolean"?r.capture:r;s.removeEventListener(t,i,l),i.__once&&s.removeEventListener(t,i.__once,l)}var xc;function sv(s){if((!xc&&xc!==0||s)&&Vs){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),xc=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return xc}function sM(){return yt.useState(null)}function oM(s){const t=yt.useRef(s);return yt.useEffect(()=>{t.current=s},[s]),t}function oh(s){const t=oM(s);return yt.useCallback(function(...i){return t.current&&t.current(...i)},[t])}const ov=s=>!s||typeof s=="function"?s:t=>{s.current=t};function lM(s,t){const i=ov(s),r=ov(t);return l=>{i&&i(l),r&&r(l)}}function A0(s,t){return yt.useMemo(()=>lM(s,t),[s,t])}function cM(s){const t=yt.useRef(s);return t.current=s,t}function uM(s){const t=cM(s);yt.useEffect(()=>()=>t.current(),[])}function fM(s){var t=tu(s);return t&&t.defaultView||window}function dM(s,t){return fM(s).getComputedStyle(s,t)}var hM=/([A-Z])/g;function pM(s){return s.replace(hM,"-$1").toLowerCase()}var mM=/^ms-/;function Sc(s){return pM(s).replace(mM,"-ms-")}var gM=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function _M(s){return!!(s&&gM.test(s))}function Or(s,t){var i="",r="";if(typeof t=="string")return s.style.getPropertyValue(Sc(t))||dM(s).getPropertyValue(Sc(t));Object.keys(t).forEach(function(l){var c=t[l];!c&&c!==0?s.style.removeProperty(Sc(l)):_M(l)?r+=l+"("+c+") ":i+=Sc(l)+": "+c+";"}),r&&(i+="transform: "+r+";"),s.style.cssText+=";"+i}function Kc(s,t,i,r){return b0(s,t,i,r),function(){sh(s,t,i,r)}}function vM(s,t,i,r){if(r===void 0&&(r=!0),s){var l=document.createEvent("HTMLEvents");l.initEvent(t,i,r),s.dispatchEvent(l)}}function xM(s){var t=Or(s,"transitionDuration")||"",i=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*i}function SM(s,t,i){i===void 0&&(i=5);var r=!1,l=setTimeout(function(){r||vM(s,"transitionend",!0)},t+i),c=Kc(s,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(l),c()}}function R0(s,t,i,r){i==null&&(i=xM(s)||0);var l=SM(s,i,r),c=Kc(s,"transitionend",t);return function(){l(),c()}}function md(s){s===void 0&&(s=tu());try{var t=s.activeElement;return!t||!t.nodeName?null:t}catch{return s.body}}function lv(s,t){if(s.contains)return s.contains(t);if(s.compareDocumentPosition)return s===t||!!(s.compareDocumentPosition(t)&16)}var yM=S0();const Ls=nl(yM);function MM(){const s=yt.useRef(!0),t=yt.useRef(()=>s.current);return yt.useEffect(()=>(s.current=!0,()=>{s.current=!1}),[]),t.current}function EM(s){const t=yt.useRef(s);return t.current=s,t}function TM(s){const t=EM(s);yt.useEffect(()=>()=>t.current(),[])}function bM(s){const t=yt.useRef(null);return yt.useEffect(()=>{t.current=s}),t.current}function AM(s){const t=yt.useRef(s);return yt.useEffect(()=>{t.current=s},[s]),t}function Cr(s){const t=AM(s);return yt.useCallback(function(...i){return t.current&&t.current(...i)},[t])}const RM="data-rr-ui-";function CM(s){return`${RM}${s}`}function wM(s=document){const t=s.defaultView;return Math.abs(t.innerWidth-s.documentElement.clientWidth)}const cv=CM("modal-open");class ep{constructor({ownerDocument:t,handleContainerOverflow:i=!0,isRTL:r=!1}={}){this.handleContainerOverflow=i,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return wM(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const i={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",l=this.getElement();t.style={overflow:l.style.overflow,[r]:l.style[r]},t.scrollBarWidth&&(i[r]=`${parseInt(Or(l,r)||"0",10)+t.scrollBarWidth}px`),l.setAttribute(cv,""),Or(l,i)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const i=this.getElement();i.removeAttribute(cv),Object.assign(i.style,t.style)}add(t){let i=this.modals.indexOf(t);return i!==-1||(i=this.modals.length,this.modals.push(t),this.setModalAttributes(t),i!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),i}remove(t){const i=this.modals.indexOf(t);i!==-1&&(this.modals.splice(i,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const C0=yt.createContext(Vs?window:void 0);C0.Provider;function np(){return yt.useContext(C0)}const gd=(s,t)=>Vs?s==null?(t||tu()).body:(typeof s=="function"&&(s=s()),s&&"current"in s&&(s=s.current),s&&("nodeType"in s||s.getBoundingClientRect)?s:null):null;function DM(s,t){const i=np(),[r,l]=yt.useState(()=>gd(s,i==null?void 0:i.document));if(!r){const c=gd(s);c&&l(c)}return yt.useEffect(()=>{},[t,r]),yt.useEffect(()=>{const c=gd(s);c!==r&&l(c)},[s,r]),r}const uv=s=>!s||typeof s=="function"?s:t=>{s.current=t};function UM(s,t){const i=uv(s),r=uv(t);return l=>{i&&i(l),r&&r(l)}}function ip(s,t){return yt.useMemo(()=>UM(s,t),[s,t])}const LM=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",NM=typeof document<"u",fv=NM||LM?yt.useLayoutEffect:yt.useEffect;function OM(s){return s.code==="Escape"||s.keyCode===27}function PM(){const s=yt.version.split(".");return{major:+s[0],minor:+s[1],patch:+s[2]}}function eu(s){if(!s||typeof s=="function")return null;const{major:t}=PM();return t>=19?s.props.ref:s.ref}function BM({children:s,in:t,onExited:i,mountOnEnter:r,unmountOnExit:l}){const c=yt.useRef(null),d=yt.useRef(t),h=Cr(i);yt.useEffect(()=>{t?d.current=!0:h(c.current)},[t,h]);const m=ip(c,eu(s)),p=yt.cloneElement(s,{ref:m});return t?p:l||!d.current&&r?null:p}const IM=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function zM(s,t){if(s==null)return{};var i={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(t.indexOf(r)>=0)continue;i[r]=s[r]}return i}function FM(s){let{onEnter:t,onEntering:i,onEntered:r,onExit:l,onExiting:c,onExited:d,addEndListener:h,children:m}=s,p=zM(s,IM);const g=yt.useRef(null),_=ip(g,eu(m)),x=C=>F=>{C&&g.current&&C(g.current,F)},M=yt.useCallback(x(t),[t]),b=yt.useCallback(x(i),[i]),w=yt.useCallback(x(r),[r]),y=yt.useCallback(x(l),[l]),v=yt.useCallback(x(c),[c]),N=yt.useCallback(x(d),[d]),U=yt.useCallback(x(h),[h]);return Object.assign({},p,{nodeRef:g},t&&{onEnter:M},i&&{onEntering:b},r&&{onEntered:w},l&&{onExit:y},c&&{onExiting:v},d&&{onExited:N},h&&{addEndListener:U},{children:typeof m=="function"?(C,F)=>m(C,Object.assign({},F,{ref:_})):yt.cloneElement(m,{ref:_})})}const HM=["component"];function GM(s,t){if(s==null)return{};var i={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(t.indexOf(r)>=0)continue;i[r]=s[r]}return i}const VM=yt.forwardRef((s,t)=>{let{component:i}=s,r=GM(s,HM);const l=FM(r);return j.jsx(i,Object.assign({ref:t},l))});function kM({in:s,onTransition:t}){const i=yt.useRef(null),r=yt.useRef(!0),l=Cr(t);return fv(()=>{if(!i.current)return;let c=!1;return l({in:s,element:i.current,initial:r.current,isStale:()=>c}),()=>{c=!0}},[s,l]),fv(()=>(r.current=!1,()=>{r.current=!0}),[]),i}function XM({children:s,in:t,onExited:i,onEntered:r,transition:l}){const[c,d]=yt.useState(!t);t&&c&&d(!1);const h=kM({in:!!t,onTransition:p=>{const g=()=>{p.isStale()||(p.in?r==null||r(p.element,p.initial):(d(!0),i==null||i(p.element)))};Promise.resolve(l(p)).then(g,_=>{throw p.in||d(!0),_})}}),m=ip(h,eu(s));return c&&!t?null:yt.cloneElement(s,{ref:m})}function dv(s,t,i){return s?j.jsx(VM,Object.assign({},i,{component:s})):t?j.jsx(XM,Object.assign({},i,{transition:t})):j.jsx(BM,Object.assign({},i))}const WM=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function qM(s,t){if(s==null)return{};var i={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(t.indexOf(r)>=0)continue;i[r]=s[r]}return i}let _d;function jM(s){return _d||(_d=new ep({ownerDocument:s==null?void 0:s.document})),_d}function YM(s){const t=np(),i=s||jM(t),r=yt.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>i.add(r.current),remove:()=>i.remove(r.current),isTopModal:()=>i.isTopModal(r.current),setDialogRef:yt.useCallback(l=>{r.current.dialog=l},[]),setBackdropRef:yt.useCallback(l=>{r.current.backdrop=l},[])})}const w0=yt.forwardRef((s,t)=>{let{show:i=!1,role:r="dialog",className:l,style:c,children:d,backdrop:h=!0,keyboard:m=!0,onBackdropClick:p,onEscapeKeyDown:g,transition:_,runTransition:x,backdropTransition:M,runBackdropTransition:b,autoFocus:w=!0,enforceFocus:y=!0,restoreFocus:v=!0,restoreFocusOptions:N,renderDialog:U,renderBackdrop:C=le=>j.jsx("div",Object.assign({},le)),manager:F,container:z,onShow:P,onHide:V=()=>{},onExit:D,onExited:A,onExiting:G,onEnter:ct,onEntering:lt,onEntered:gt}=s,ht=qM(s,WM);const B=np(),Z=DM(z),W=YM(F),Et=MM(),L=bM(i),[J,_t]=yt.useState(!i),xt=yt.useRef(null);yt.useImperativeHandle(t,()=>W,[W]),Vs&&!L&&i&&(xt.current=md(B==null?void 0:B.document)),i&&J&&_t(!1);const Q=Cr(()=>{if(W.add(),Xt.current=Kc(document,"keydown",wt),re.current=Kc(document,"focus",()=>setTimeout(Mt),!0),P&&P(),w){var le,me;const oe=md((le=(me=W.dialog)==null?void 0:me.ownerDocument)!=null?le:B==null?void 0:B.document);W.dialog&&oe&&!lv(W.dialog,oe)&&(xt.current=oe,W.dialog.focus())}}),pt=Cr(()=>{if(W.remove(),Xt.current==null||Xt.current(),re.current==null||re.current(),v){var le;(le=xt.current)==null||le.focus==null||le.focus(N),xt.current=null}});yt.useEffect(()=>{!i||!Z||Q()},[i,Z,Q]),yt.useEffect(()=>{J&&pt()},[J,pt]),TM(()=>{pt()});const Mt=Cr(()=>{if(!y||!Et()||!W.isTopModal())return;const le=md(B==null?void 0:B.document);W.dialog&&le&&!lv(W.dialog,le)&&W.dialog.focus()}),Ct=Cr(le=>{le.target===le.currentTarget&&(p==null||p(le),h===!0&&V())}),wt=Cr(le=>{m&&OM(le)&&W.isTopModal()&&(g==null||g(le),le.defaultPrevented||V())}),re=yt.useRef(),Xt=yt.useRef(),be=(...le)=>{_t(!0),A==null||A(...le)};if(!Z)return null;const Ee=Object.assign({role:r,ref:W.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},ht,{style:c,className:l,tabIndex:-1});let ce=U?U(Ee):j.jsx("div",Object.assign({},Ee,{children:yt.cloneElement(d,{role:"document"})}));ce=dv(_,x,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!i,onExit:D,onExiting:G,onExited:be,onEnter:ct,onEntering:lt,onEntered:gt,children:ce});let H=null;return h&&(H=C({ref:W.setBackdropRef,onClick:Ct}),H=dv(M,b,{in:!!i,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:H})),j.jsx(j.Fragment,{children:Ls.createPortal(j.jsxs(j.Fragment,{children:[H,ce]}),Z)})});w0.displayName="Modal";const ZM=Object.assign(w0,{Manager:ep});function KM(s,t){return s.classList?s.classList.contains(t):(" "+(s.className.baseVal||s.className)+" ").indexOf(" "+t+" ")!==-1}function QM(s,t){s.classList?s.classList.add(t):KM(s,t)||(typeof s.className=="string"?s.className=s.className+" "+t:s.setAttribute("class",(s.className&&s.className.baseVal||"")+" "+t))}var JM=Function.prototype.bind.call(Function.prototype.call,[].slice);function ms(s,t){return JM(s.querySelectorAll(t))}function hv(s,t){return s.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function $M(s,t){s.classList?s.classList.remove(t):typeof s.className=="string"?s.className=hv(s.className,t):s.setAttribute("class",hv(s.className&&s.className.baseVal||"",t))}const gs={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class tE extends ep{adjustAndStore(t,i,r){const l=i.style[t];i.dataset[t]=l,Or(i,{[t]:`${parseFloat(Or(i,t))+r}px`})}restore(t,i){const r=i.dataset[t];r!==void 0&&(delete i.dataset[t],Or(i,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const i=this.getElement();if(QM(i,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",l=this.isRTL?"marginLeft":"marginRight";ms(i,gs.FIXED_CONTENT).forEach(c=>this.adjustAndStore(r,c,t.scrollBarWidth)),ms(i,gs.STICKY_CONTENT).forEach(c=>this.adjustAndStore(l,c,-t.scrollBarWidth)),ms(i,gs.NAVBAR_TOGGLER).forEach(c=>this.adjustAndStore(l,c,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const i=this.getElement();$M(i,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",l=this.isRTL?"marginLeft":"marginRight";ms(i,gs.FIXED_CONTENT).forEach(c=>this.restore(r,c)),ms(i,gs.STICKY_CONTENT).forEach(c=>this.restore(l,c)),ms(i,gs.NAVBAR_TOGGLER).forEach(c=>this.restore(l,c))}}let vd;function eE(s){return vd||(vd=new tE(s)),vd}function nE(s,t){if(s==null)return{};var i={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(t.indexOf(r)!==-1)continue;i[r]=s[r]}return i}function lh(s,t){return lh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},lh(s,t)}function iE(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,lh(s,t)}var xd={exports:{}},Sd,pv;function aE(){if(pv)return Sd;pv=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Sd=s,Sd}var yd,mv;function rE(){if(mv)return yd;mv=1;var s=aE();function t(){}function i(){}return i.resetWarningCache=t,yd=function(){function r(d,h,m,p,g,_){if(_!==s){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}r.isRequired=r;function l(){return r}var c={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:l,element:r,elementType:r,instanceOf:l,node:r,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:i,resetWarningCache:t};return c.PropTypes=c,c},yd}var gv;function sE(){return gv||(gv=1,xd.exports=rE()()),xd.exports}var oE=sE();const Md=nl(oE),_v={disabled:!1},D0=la.createContext(null);var lE=function(t){return t.scrollTop},Ko="unmounted",br="exited",qa="entering",wr="entered",ch="exiting",da=function(s){iE(t,s);function t(r,l){var c;c=s.call(this,r,l)||this;var d=l,h=d&&!d.isMounting?r.enter:r.appear,m;return c.appearStatus=null,r.in?h?(m=br,c.appearStatus=qa):m=wr:r.unmountOnExit||r.mountOnEnter?m=Ko:m=br,c.state={status:m},c.nextCallback=null,c}t.getDerivedStateFromProps=function(l,c){var d=l.in;return d&&c.status===Ko?{status:br}:null};var i=t.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(l){var c=null;if(l!==this.props){var d=this.state.status;this.props.in?d!==qa&&d!==wr&&(c=qa):(d===qa||d===wr)&&(c=ch)}this.updateStatus(!1,c)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var l=this.props.timeout,c,d,h;return c=d=h=l,l!=null&&typeof l!="number"&&(c=l.exit,d=l.enter,h=l.appear!==void 0?l.appear:d),{exit:c,enter:d,appear:h}},i.updateStatus=function(l,c){if(l===void 0&&(l=!1),c!==null)if(this.cancelNextCallback(),c===qa){if(this.props.unmountOnExit||this.props.mountOnEnter){var d=this.props.nodeRef?this.props.nodeRef.current:Ls.findDOMNode(this);d&&lE(d)}this.performEnter(l)}else this.performExit();else this.props.unmountOnExit&&this.state.status===br&&this.setState({status:Ko})},i.performEnter=function(l){var c=this,d=this.props.enter,h=this.context?this.context.isMounting:l,m=this.props.nodeRef?[h]:[Ls.findDOMNode(this),h],p=m[0],g=m[1],_=this.getTimeouts(),x=h?_.appear:_.enter;if(!l&&!d||_v.disabled){this.safeSetState({status:wr},function(){c.props.onEntered(p)});return}this.props.onEnter(p,g),this.safeSetState({status:qa},function(){c.props.onEntering(p,g),c.onTransitionEnd(x,function(){c.safeSetState({status:wr},function(){c.props.onEntered(p,g)})})})},i.performExit=function(){var l=this,c=this.props.exit,d=this.getTimeouts(),h=this.props.nodeRef?void 0:Ls.findDOMNode(this);if(!c||_v.disabled){this.safeSetState({status:br},function(){l.props.onExited(h)});return}this.props.onExit(h),this.safeSetState({status:ch},function(){l.props.onExiting(h),l.onTransitionEnd(d.exit,function(){l.safeSetState({status:br},function(){l.props.onExited(h)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(l,c){c=this.setNextCallback(c),this.setState(l,c)},i.setNextCallback=function(l){var c=this,d=!0;return this.nextCallback=function(h){d&&(d=!1,c.nextCallback=null,l(h))},this.nextCallback.cancel=function(){d=!1},this.nextCallback},i.onTransitionEnd=function(l,c){this.setNextCallback(c);var d=this.props.nodeRef?this.props.nodeRef.current:Ls.findDOMNode(this),h=l==null&&!this.props.addEndListener;if(!d||h){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var m=this.props.nodeRef?[this.nextCallback]:[d,this.nextCallback],p=m[0],g=m[1];this.props.addEndListener(p,g)}l!=null&&setTimeout(this.nextCallback,l)},i.render=function(){var l=this.state.status;if(l===Ko)return null;var c=this.props,d=c.children;c.in,c.mountOnEnter,c.unmountOnExit,c.appear,c.enter,c.exit,c.timeout,c.addEndListener,c.onEnter,c.onEntering,c.onEntered,c.onExit,c.onExiting,c.onExited,c.nodeRef;var h=nE(c,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return la.createElement(D0.Provider,{value:null},typeof d=="function"?d(l,h):la.cloneElement(la.Children.only(d),h))},t}(la.Component);da.contextType=D0;da.propTypes={};function _s(){}da.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:_s,onEntering:_s,onEntered:_s,onExit:_s,onExiting:_s,onExited:_s};da.UNMOUNTED=Ko;da.EXITED=br;da.ENTERING=qa;da.ENTERED=wr;da.EXITING=ch;function vv(s,t){const i=Or(s,t)||"",r=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*r}function cE(s,t){const i=vv(s,"transitionDuration"),r=vv(s,"transitionDelay"),l=R0(s,c=>{c.target===s&&(l(),t(c))},i+r)}function uE(s){s.offsetHeight}function fE(s){return s&&"setState"in s?Ls.findDOMNode(s):s??null}const U0=la.forwardRef(({onEnter:s,onEntering:t,onEntered:i,onExit:r,onExiting:l,onExited:c,addEndListener:d,children:h,childRef:m,...p},g)=>{const _=yt.useRef(null),x=A0(_,m),M=z=>{x(fE(z))},b=z=>P=>{z&&_.current&&z(_.current,P)},w=yt.useCallback(b(s),[s]),y=yt.useCallback(b(t),[t]),v=yt.useCallback(b(i),[i]),N=yt.useCallback(b(r),[r]),U=yt.useCallback(b(l),[l]),C=yt.useCallback(b(c),[c]),F=yt.useCallback(b(d),[d]);return j.jsx(da,{ref:g,...p,onEnter:w,onEntered:v,onEntering:y,onExit:N,onExited:C,onExiting:U,addEndListener:F,nodeRef:_,children:typeof h=="function"?(z,P)=>h(z,{...P,ref:M}):la.cloneElement(h,{ref:M})})});U0.displayName="TransitionWrapper";const dE={[qa]:"show",[wr]:"show"},ap=yt.forwardRef(({className:s,children:t,transitionClasses:i={},onEnter:r,...l},c)=>{const d={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...l},h=yt.useCallback((m,p)=>{uE(m),r==null||r(m,p)},[r]);return j.jsx(U0,{ref:c,addEndListener:cE,...d,onEnter:h,childRef:eu(t),children:(m,p)=>yt.cloneElement(t,{...p,className:di("fade",s,t.props.className,dE[m],i[m])})})});ap.displayName="Fade";const hE=["xxl","xl","lg","md","sm","xs"],pE="xs",rp=yt.createContext({prefixes:{},breakpoints:hE,minBreakpoint:pE}),{Consumer:bw,Provider:Aw}=rp;function Ir(s,t){const{prefixes:i}=yt.useContext(rp);return s||i[t]||t}function mE(){const{dir:s}=yt.useContext(rp);return s==="rtl"}const L0=yt.forwardRef(({className:s,bsPrefix:t,as:i="div",...r},l)=>(t=Ir(t,"modal-body"),j.jsx(i,{ref:l,className:di(s,t),...r})));L0.displayName="ModalBody";const N0=yt.createContext({onHide(){}}),sp=yt.forwardRef(({bsPrefix:s,className:t,contentClassName:i,centered:r,size:l,fullscreen:c,children:d,scrollable:h,...m},p)=>{s=Ir(s,"modal");const g=`${s}-dialog`,_=typeof c=="string"?`${s}-fullscreen-${c}`:`${s}-fullscreen`;return j.jsx("div",{...m,ref:p,className:di(g,t,l&&`${s}-${l}`,r&&`${g}-centered`,h&&`${g}-scrollable`,c&&_),children:j.jsx("div",{className:di(`${s}-content`,i),children:d})})});sp.displayName="ModalDialog";const O0=yt.forwardRef(({className:s,bsPrefix:t,as:i="div",...r},l)=>(t=Ir(t,"modal-footer"),j.jsx(i,{ref:l,className:di(s,t),...r})));O0.displayName="ModalFooter";const gE={"aria-label":Md.string,onClick:Md.func,variant:Md.oneOf(["white"])},op=yt.forwardRef(({className:s,variant:t,"aria-label":i="Close",...r},l)=>j.jsx("button",{ref:l,type:"button",className:di("btn-close",t&&`btn-close-${t}`,s),"aria-label":i,...r}));op.displayName="CloseButton";op.propTypes=gE;const P0=yt.forwardRef(({closeLabel:s="Close",closeVariant:t,closeButton:i=!1,onHide:r,children:l,...c},d)=>{const h=yt.useContext(N0),m=oh(()=>{h==null||h.onHide(),r==null||r()});return j.jsxs("div",{ref:d,...c,children:[l,i&&j.jsx(op,{"aria-label":s,variant:t,onClick:m})]})});P0.displayName="AbstractModalHeader";const B0=yt.forwardRef(({bsPrefix:s,className:t,closeLabel:i="Close",closeButton:r=!1,...l},c)=>(s=Ir(s,"modal-header"),j.jsx(P0,{ref:c,...l,className:di(t,s),closeLabel:i,closeButton:r})));B0.displayName="ModalHeader";const _E=s=>yt.forwardRef((t,i)=>j.jsx("div",{...t,ref:i,className:di(t.className,s)})),vE=_E("h4"),I0=yt.forwardRef(({className:s,bsPrefix:t,as:i=vE,...r},l)=>(t=Ir(t,"modal-title"),j.jsx(i,{ref:l,className:di(s,t),...r})));I0.displayName="ModalTitle";function xE(s){return j.jsx(ap,{...s,timeout:null})}function SE(s){return j.jsx(ap,{...s,timeout:null})}const z0=yt.forwardRef(({bsPrefix:s,className:t,style:i,dialogClassName:r,contentClassName:l,children:c,dialogAs:d=sp,"data-bs-theme":h,"aria-labelledby":m,"aria-describedby":p,"aria-label":g,show:_=!1,animation:x=!0,backdrop:M=!0,keyboard:b=!0,onEscapeKeyDown:w,onShow:y,onHide:v,container:N,autoFocus:U=!0,enforceFocus:C=!0,restoreFocus:F=!0,restoreFocusOptions:z,onEntered:P,onExit:V,onExiting:D,onEnter:A,onEntering:G,onExited:ct,backdropClassName:lt,manager:gt,...ht},B)=>{const[Z,W]=yt.useState({}),[Et,L]=yt.useState(!1),J=yt.useRef(!1),_t=yt.useRef(!1),xt=yt.useRef(null),[Q,pt]=sM(),Mt=A0(B,pt),Ct=oh(v),wt=mE();s=Ir(s,"modal");const re=yt.useMemo(()=>({onHide:Ct}),[Ct]);function Xt(){return gt||eE({isRTL:wt})}function be(it){if(!Vs)return;const ft=Xt().getScrollbarWidth()>0,ut=it.scrollHeight>tu(it).documentElement.clientHeight;W({paddingRight:ft&&!ut?sv():void 0,paddingLeft:!ft&&ut?sv():void 0})}const Ee=oh(()=>{Q&&be(Q.dialog)});uM(()=>{sh(window,"resize",Ee),xt.current==null||xt.current()});const ce=()=>{J.current=!0},H=it=>{J.current&&Q&&it.target===Q.dialog&&(_t.current=!0),J.current=!1},le=()=>{L(!0),xt.current=R0(Q.dialog,()=>{L(!1)})},me=it=>{it.target===it.currentTarget&&le()},oe=it=>{if(M==="static"){me(it);return}if(_t.current||it.target!==it.currentTarget){_t.current=!1;return}v==null||v()},Vt=it=>{b?w==null||w(it):(it.preventDefault(),M==="static"&&le())},_e=(it,ft)=>{it&&be(it),A==null||A(it,ft)},Yt=it=>{xt.current==null||xt.current(),V==null||V(it)},ie=(it,ft)=>{G==null||G(it,ft),b0(window,"resize",Ee)},je=it=>{it&&(it.style.display=""),ct==null||ct(it),sh(window,"resize",Ee)},O=yt.useCallback(it=>j.jsx("div",{...it,className:di(`${s}-backdrop`,lt,!x&&"show")}),[x,lt,s]),E={...i,...Z};E.display="block";const et=it=>j.jsx("div",{role:"dialog",...it,style:E,className:di(t,s,Et&&`${s}-static`,!x&&"show"),onClick:M?oe:void 0,onMouseUp:H,"data-bs-theme":h,"aria-label":g,"aria-labelledby":m,"aria-describedby":p,children:j.jsx(d,{...ht,onMouseDown:ce,className:r,contentClassName:l,children:c})});return j.jsx(N0.Provider,{value:re,children:j.jsx(ZM,{show:_,ref:Mt,backdrop:M,container:N,keyboard:!0,autoFocus:U,enforceFocus:C,restoreFocus:F,restoreFocusOptions:z,onEscapeKeyDown:Vt,onShow:y,onHide:v,onEnter:_e,onEntering:ie,onEntered:P,onExit:Yt,onExiting:D,onExited:je,manager:Xt(),transition:x?xE:void 0,backdropTransition:x?SE:void 0,renderBackdrop:O,renderDialog:et})})});z0.displayName="Modal";const Go=Object.assign(z0,{Body:L0,Header:B0,Title:I0,Footer:O0,Dialog:sp,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),yE=["as","disabled"];function ME(s,t){if(s==null)return{};var i={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(t.indexOf(r)>=0)continue;i[r]=s[r]}return i}function EE(s){return!s||s.trim()==="#"}function F0({tagName:s,disabled:t,href:i,target:r,rel:l,role:c,onClick:d,tabIndex:h=0,type:m}){s||(i!=null||r!=null||l!=null?s="a":s="button");const p={tagName:s};if(s==="button")return[{type:m||"button",disabled:t},p];const g=x=>{if((t||s==="a"&&EE(i))&&x.preventDefault(),t){x.stopPropagation();return}d==null||d(x)},_=x=>{x.key===" "&&(x.preventDefault(),g(x))};return s==="a"&&(i||(i="#"),t&&(i=void 0)),[{role:c??"button",disabled:void 0,tabIndex:t?void 0:h,href:i,target:s==="a"?r:void 0,"aria-disabled":t||void 0,rel:s==="a"?l:void 0,onClick:g,onKeyDown:_},p]}const TE=yt.forwardRef((s,t)=>{let{as:i,disabled:r}=s,l=ME(s,yE);const[c,{tagName:d}]=F0(Object.assign({tagName:i,disabled:r},l));return j.jsx(d,Object.assign({},l,c,{ref:t}))});TE.displayName="Button";const uh=yt.forwardRef(({as:s,bsPrefix:t,variant:i="primary",size:r,active:l=!1,disabled:c=!1,className:d,...h},m)=>{const p=Ir(t,"btn"),[g,{tagName:_}]=F0({tagName:s,disabled:c,...h}),x=_;return j.jsx(x,{...g,...h,ref:m,disabled:c,className:di(d,p,l&&"active",i&&`${p}-${i}`,r&&`${p}-${r}`,h.href&&c&&"disabled")})});uh.displayName="Button";const bE="_projectModalDialog_nnecs_1",AE="_modalHeader_nnecs_17",RE="_modalTitle_nnecs_49",CE="_modalBody_nnecs_63",wE="_modalImage_nnecs_75",DE="_modalTextSection_nnecs_93",UE="_modalSectionTitle_nnecs_111",LE="_modalTechList_nnecs_125",NE="_modalTechTag_nnecs_151",OE="_modalFooter_nnecs_175",PE="_modalGithubButton_nnecs_187",BE="_modalLiveDemoButton_nnecs_223",Tn={projectModalDialog:bE,modalHeader:AE,modalTitle:RE,modalBody:CE,modalImage:wE,modalTextSection:DE,modalSectionTitle:UE,modalTechList:LE,modalTechTag:NE,modalFooter:OE,modalGithubButton:PE,modalLiveDemoButton:BE},IE=({project:s,onClose:t})=>s?j.jsxs(Go,{show:!0,onHide:t,centered:!0,size:"lg",dialogClassName:Tn.projectModalDialog,children:[j.jsx(Go.Header,{closeButton:!0,closeVariant:"white",className:Tn.modalHeader,children:j.jsx(Go.Title,{className:Tn.modalTitle,children:s.title})}),j.jsxs(Go.Body,{className:Tn.modalBody,children:[s.imageUrl&&j.jsx("img",{src:s.imageUrl,alt:`${s.title} screenshot`,className:Tn.modalImage,onError:i=>{i.target.onerror=null,i.target.src="https://placehold.co/600x400/333333/E0E0E0?text=Image+Load+Failed"}}),j.jsxs("div",{className:Tn.modalTextSection,children:[j.jsxs("div",{children:[j.jsx("h3",{className:Tn.modalSectionTitle,children:"Problem:"}),j.jsx("p",{children:s.problem})]}),j.jsxs("div",{children:[j.jsx("h3",{className:Tn.modalSectionTitle,children:"Solution:"}),j.jsx("p",{children:s.solution})]}),j.jsxs("div",{children:[j.jsx("h3",{className:Tn.modalSectionTitle,children:"Your Role:"}),j.jsx("p",{children:s.yourRole})]}),j.jsxs("div",{children:[j.jsx("h3",{className:Tn.modalSectionTitle,children:"Impact & Results:"}),j.jsx("p",{children:s.impact})]}),j.jsxs("div",{children:[j.jsx("h3",{className:Tn.modalSectionTitle,children:"Learnings & Takeaways:"}),j.jsx("p",{children:s.learnings})]})]}),j.jsxs("div",{className:Tn.modalTechList,children:[j.jsx("h3",{className:Tn.modalSectionTitle,children:"Technologies Used:"}),s.technologies.map((i,r)=>j.jsx("span",{className:Tn.modalTechTag,children:i},r))]})]}),j.jsxs(Go.Footer,{className:Tn.modalFooter,children:[s.githubLink&&j.jsxs(uh,{href:s.githubLink,target:"_blank",rel:"noopener noreferrer",className:Tn.modalGithubButton,variant:"secondary",children:[j.jsx($h,{size:20,style:{marginRight:"0.5rem"}})," GitHub"]}),s.liveDemoLink&&j.jsxs(uh,{href:s.liveDemoLink,target:"_blank",rel:"noopener noreferrer",className:Tn.modalLiveDemoButton,variant:"primary",children:[j.jsx(tp,{size:20,style:{marginRight:"0.5rem"}})," Live Demo"]})]})]}):null,zE="_sidebarNav_qz75e_1",FE="_minimized_qz75e_33",HE="_maximized_qz75e_43",GE="_sidebarHeader_qz75e_57",VE="_logoContainer_qz75e_75",kE="_logoLabel_qz75e_103",XE="_toggleButton_qz75e_131",WE="_navItemsContainer_qz75e_167",qE="_sidebarNavItem_qz75e_195",jE="_icon_qz75e_225",YE="_sidebarNavItemLabel_qz75e_243",ZE="_active_qz75e_321",li={sidebarNav:zE,minimized:FE,maximized:HE,sidebarHeader:GE,logoContainer:VE,logoLabel:kE,toggleButton:XE,navItemsContainer:WE,sidebarNavItem:qE,icon:jE,sidebarNavItemLabel:YE,active:ZE},KE=[{id:"home",title:"Home",icon:ky},{id:"summary",title:"Summary",icon:ih},{id:"experience",title:"Experience",icon:T0},{id:"projects",title:"Projects",icon:tp},{id:"my-process",title:"My Process",icon:nh},{id:"why-me",title:"Why Me?",icon:av},{id:"testimonials",title:"Testimonials",icon:ih},{id:"roles",title:"Responsibilities",icon:av},{id:"education",title:"Education",icon:E0},{id:"skills",title:"Skills",icon:nh}],QE=({activeSection:s,scrollToSection:t,isMinimized:i,toggleSidebar:r})=>{const l=i?qy:zy;return j.jsxs("nav",{className:`${li.sidebarNav} ${i?li.minimized:li.maximized}`,children:[j.jsxs("div",{className:li.sidebarHeader,children:[j.jsx("div",{className:li.logoContainer,children:!i&&j.jsx("span",{className:li.logoLabel,children:"My Portfolio"})}),j.jsx("button",{onClick:r,className:li.toggleButton,"aria-label":i?"Expand sidebar":"Collapse sidebar",children:j.jsx(l,{size:24})})]}),j.jsx("div",{className:li.navItemsContainer,children:KE.map(c=>{const d=c.icon;return j.jsxs("button",{onClick:()=>t(c.id),className:`${li.sidebarNavItem} ${s===c.id?li.active:""}`,"aria-label":`Maps to ${c.title} section`,children:[j.jsx(d,{size:24,className:li.icon}),j.jsx("span",{className:li.sidebarNavItemLabel,children:c.title==="Responsibilities"?"Roles":c.title})]},c.id)})})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lp="177",JE=0,xv=1,$E=2,H0=1,tT=2,sa=3,Ka=0,Gn=1,oa=2,Ya=0,Os=1,Sv=2,yv=3,Mv=4,eT=5,Dr=100,nT=101,iT=102,aT=103,rT=104,sT=200,oT=201,lT=202,cT=203,fh=204,dh=205,uT=206,fT=207,dT=208,hT=209,pT=210,mT=211,gT=212,_T=213,vT=214,hh=0,ph=1,mh=2,Is=3,gh=4,_h=5,vh=6,xh=7,G0=0,xT=1,ST=2,Za=0,yT=1,MT=2,ET=3,TT=4,bT=5,AT=6,RT=7,V0=300,zs=301,Fs=302,Sh=303,yh=304,nu=306,Mh=1e3,Lr=1001,Eh=1002,yi=1003,CT=1004,yc=1005,wi=1006,Ed=1007,Nr=1008,Ni=1009,k0=1010,X0=1011,Jo=1012,cp=1013,Pr=1014,ca=1015,il=1016,up=1017,fp=1018,$o=1020,W0=35902,q0=1021,j0=1022,Si=1023,tl=1026,el=1027,Y0=1028,dp=1029,Z0=1030,hp=1031,pp=1033,Xc=33776,Wc=33777,qc=33778,jc=33779,Th=35840,bh=35841,Ah=35842,Rh=35843,Ch=36196,wh=37492,Dh=37496,Uh=37808,Lh=37809,Nh=37810,Oh=37811,Ph=37812,Bh=37813,Ih=37814,zh=37815,Fh=37816,Hh=37817,Gh=37818,Vh=37819,kh=37820,Xh=37821,Yc=36492,Wh=36494,qh=36495,K0=36283,jh=36284,Yh=36285,Zh=36286,wT=3200,DT=3201,Q0=0,UT=1,ja="",ui="srgb",Hs="srgb-linear",Qc="linear",He="srgb",vs=7680,Ev=519,LT=512,NT=513,OT=514,J0=515,PT=516,BT=517,IT=518,zT=519,Tv=35044,bv="300 es",ua=2e3,Jc=2001;class ks{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Td=Math.PI/180,Kh=180/Math.PI;function al(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function Me(s,t,i){return Math.max(t,Math.min(i,s))}function FT(s,t){return(s%t+t)%t}function bd(s,t,i){return(1-i)*s+i*t}function Vo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Re{constructor(t=0,i=0){Re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rl{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3];const x=c[d+0],M=c[d+1],b=c[d+2],w=c[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(h===1){t[i+0]=x,t[i+1]=M,t[i+2]=b,t[i+3]=w;return}if(_!==w||m!==x||p!==M||g!==b){let y=1-h;const v=m*x+p*M+g*b+_*w,N=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const F=Math.sqrt(U),z=Math.atan2(F,v*N);y=Math.sin(y*z)/F,h=Math.sin(h*z)/F}const C=h*N;if(m=m*y+x*C,p=p*y+M*C,g=g*y+b*C,_=_*y+w*C,y===1-h){const F=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=F,p*=F,g*=F,_*=F}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=c[d],x=c[d+1],M=c[d+2],b=c[d+3];return t[i]=h*b+g*_+m*M-p*x,t[i+1]=m*b+g*x+p*_-h*M,t[i+2]=p*b+g*M+h*x-m*_,t[i+3]=g*b-h*_-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),_=h(c/2),x=m(r/2),M=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=x*g*_+p*M*b,this._y=p*M*_-x*g*b,this._z=p*g*b+x*M*_,this._w=p*g*_-x*M*b;break;case"YXZ":this._x=x*g*_+p*M*b,this._y=p*M*_-x*g*b,this._z=p*g*b-x*M*_,this._w=p*g*_+x*M*b;break;case"ZXY":this._x=x*g*_-p*M*b,this._y=p*M*_+x*g*b,this._z=p*g*b+x*M*_,this._w=p*g*_-x*M*b;break;case"ZYX":this._x=x*g*_-p*M*b,this._y=p*M*_+x*g*b,this._z=p*g*b-x*M*_,this._w=p*g*_+x*M*b;break;case"YZX":this._x=x*g*_+p*M*b,this._y=p*M*_+x*g*b,this._z=p*g*b-x*M*_,this._w=p*g*_-x*M*b;break;case"XZY":this._x=x*g*_-p*M*b,this._y=p*M*_-x*g*b,this._z=p*g*b+x*M*_,this._w=p*g*_+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=r+h+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(d-l)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(c-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(d-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-c*m,this._y=l*g+d*m+c*h-r*p,this._z=c*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),_=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=d*_+this._w*x,this._x=r*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(t=0,i=0,r=0){at.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Av.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Av.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),g=2*(h*i-c*l),_=2*(c*r-d*i);return this.x=i+m*p+d*_-h*g,this.y=r+m*g+h*p-c*_,this.z=l+m*_+c*g-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ad.copy(this).projectOnVector(t),this.sub(Ad)}reflect(t){return this.sub(Ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new at,Av=new rl;class fe{constructor(t,i,r,l,c,d,h,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p)}set(t,i,r,l,c,d,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],_=r[7],x=r[2],M=r[5],b=r[8],w=l[0],y=l[3],v=l[6],N=l[1],U=l[4],C=l[7],F=l[2],z=l[5],P=l[8];return c[0]=d*w+h*N+m*F,c[3]=d*y+h*U+m*z,c[6]=d*v+h*C+m*P,c[1]=p*w+g*N+_*F,c[4]=p*y+g*U+_*z,c[7]=p*v+g*C+_*P,c[2]=x*w+M*N+b*F,c[5]=x*y+M*U+b*z,c[8]=x*v+M*C+b*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*d*g-i*h*p-r*c*g+r*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*d-h*p,x=h*m-g*c,M=p*c-d*m,b=i*_+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=_*w,t[1]=(l*p-g*r)*w,t[2]=(h*r-l*d)*w,t[3]=x*w,t[4]=(g*i-l*m)*w,t[5]=(l*c-h*i)*w,t[6]=M*w,t[7]=(r*m-p*i)*w,t[8]=(d*i-r*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Rd.makeScale(t,i)),this}rotate(t){return this.premultiply(Rd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Rd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rd=new fe;function $0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function $c(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function HT(){const s=$c("canvas");return s.style.display="block",s}const Rv={};function Ps(s){s in Rv||(Rv[s]=!0,console.warn(s))}function GT(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function VT(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kT(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Cv=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wv=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XT(){const s={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===He&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===He&&(l.r=Bs(l.r),l.g=Bs(l.g),l.b=Bs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ja?Qc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ps("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ps("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Hs]:{primaries:t,whitePoint:r,transfer:Qc,toXYZ:Cv,fromXYZ:wv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:r,transfer:He,toXYZ:Cv,fromXYZ:wv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const De=XT();function fa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xs;class WT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{xs===void 0&&(xs=$c("canvas")),xs.width=t.width,xs.height=t.height;const l=xs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=xs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=$c("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=fa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(fa(i[r]/255)*255):i[r]=fa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qT=0;class mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=al(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Cd(l[d].image)):c.push(Cd(l[d]))}else c=Cd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Cd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?WT.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jT=0;const wd=new at;class Vn extends ks{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=Lr,l=Lr,c=wi,d=Nr,h=Si,m=Ni,p=Vn.DEFAULT_ANISOTROPY,g=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=al(),this.name="",this.source=new mp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==V0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mh:t.x=t.x-Math.floor(t.x);break;case Lr:t.x=t.x<0?0:1;break;case Eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mh:t.y=t.y-Math.floor(t.y);break;case Lr:t.y=t.y<0?0:1;break;case Eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=V0;Vn.DEFAULT_ANISOTROPY=1;class Je{constructor(t=0,i=0,r=0,l=1){Je.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],M=m[5],b=m[9],w=m[2],y=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+w)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,C=(M+1)/2,F=(v+1)/2,z=(g+x)/4,P=(_+w)/4,V=(b+y)/4;return U>C&&U>F?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=z/r,c=P/r):C>F?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=z/l,c=V/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=P/c,l=V/c),this.set(r,l,c,i),this}let N=Math.sqrt((y-b)*(y-b)+(_-w)*(_-w)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(y-b)/N,this.y=(_-w)/N,this.z=(x-g)/N,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YT extends ks{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Je(0,0,t,i),this.scissorTest=!1,this.viewport=new Je(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Vn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new mp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends YT{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class tx extends Vn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZT extends Vn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(t=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,gi):gi.fromBufferAttribute(c,d),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mc.copy(r.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),Ec.subVectors(this.max,ko),Ss.subVectors(t.a,ko),ys.subVectors(t.b,ko),Ms.subVectors(t.c,ko),Ha.subVectors(ys,Ss),Ga.subVectors(Ms,ys),vr.subVectors(Ss,Ms);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-vr.z,vr.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,vr.z,0,-vr.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-vr.y,vr.x,0];return!Dd(i,Ss,ys,Ms,Ec)||(i=[1,0,0,0,1,0,0,0,1],!Dd(i,Ss,ys,Ms,Ec))?!1:(Tc.crossVectors(Ha,Ga),i=[Tc.x,Tc.y,Tc.z],Dd(i,Ss,ys,Ms,Ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ta=[new at,new at,new at,new at,new at,new at,new at,new at],gi=new at,Mc=new sl,Ss=new at,ys=new at,Ms=new at,Ha=new at,Ga=new at,vr=new at,ko=new at,Ec=new at,Tc=new at,xr=new at;function Dd(s,t,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){xr.fromArray(s,c);const h=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=t.dot(xr),p=i.dot(xr),g=r.dot(xr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const KT=new sl,Xo=new at,Ud=new at;class gp{constructor(t=new at,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):KT.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xo.subVectors(t,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Xo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ud.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xo.copy(t.center).add(Ud)),this.expandByPoint(Xo.copy(t.center).sub(Ud))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ea=new at,Ld=new at,bc=new at,Va=new at,Nd=new at,Ac=new at,Od=new at;class QT{constructor(t=new at,i=new at(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Ld.copy(t).add(i).multiplyScalar(.5),bc.copy(i).sub(t).normalize(),Va.copy(this.origin).sub(Ld);const c=t.distanceTo(i)*.5,d=-this.direction.dot(bc),h=Va.dot(this.direction),m=-Va.dot(bc),p=Va.lengthSq(),g=Math.abs(1-d*d);let _,x,M,b;if(g>0)if(_=d*m-h,x=d*h-m,b=c*g,_>=0)if(x>=-b)if(x<=b){const w=1/g;_*=w,x*=w,M=_*(_+d*x+2*h)+x*(d*_+x+2*m)+p}else x=c,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*m)+p;else x<=-b?(_=Math.max(0,-(-d*c+h)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p):x<=b?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(_=Math.max(0,-(d*c+h)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p);else x=d>0?-c:c,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Ld).addScaledVector(bc,x),M}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,d=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,d=(t.min.y-x.y)*g),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),_>=0?(h=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,r,l,c){Nd.subVectors(i,t),Ac.subVectors(r,t),Od.crossVectors(Nd,Ac);let d=this.direction.dot(Od),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Va.subVectors(this.origin,t);const m=h*this.direction.dot(Ac.crossVectors(Va,Ac));if(m<0)return null;const p=h*this.direction.dot(Nd.cross(Va));if(p<0||m+p>d)return null;const g=-h*Va.dot(Od);return g<0?null:this.at(g/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,i,r,l,c,d,h,m,p,g,_,x,M,b,w,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p,g,_,x,M,b,w,y)}set(t,i,r,l,c,d,h,m,p,g,_,x,M,b,w,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=b,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/Es.setFromMatrixColumn(t,0).length(),c=1/Es.setFromMatrixColumn(t,1).length(),d=1/Es.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=d*g,M=d*_,b=h*g,w=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+b*p,i[5]=x-w*p,i[9]=-h*m,i[2]=w-x*p,i[6]=b+M*p,i[10]=d*m}else if(t.order==="YXZ"){const x=m*g,M=m*_,b=p*g,w=p*_;i[0]=x+w*h,i[4]=b*h-M,i[8]=d*p,i[1]=d*_,i[5]=d*g,i[9]=-h,i[2]=M*h-b,i[6]=w+x*h,i[10]=d*m}else if(t.order==="ZXY"){const x=m*g,M=m*_,b=p*g,w=p*_;i[0]=x-w*h,i[4]=-d*_,i[8]=b+M*h,i[1]=M+b*h,i[5]=d*g,i[9]=w-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const x=d*g,M=d*_,b=h*g,w=h*_;i[0]=m*g,i[4]=b*p-M,i[8]=x*p+w,i[1]=m*_,i[5]=w*p+x,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const x=d*m,M=d*p,b=h*m,w=h*p;i[0]=m*g,i[4]=w-x*_,i[8]=b*_+M,i[1]=_,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*_+b,i[10]=x-w*_}else if(t.order==="XZY"){const x=d*m,M=d*p,b=h*m,w=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+w,i[5]=d*g,i[9]=M*_-b,i[2]=b*_-M,i[6]=h*g,i[10]=w*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(JT,t,$T)}lookAt(t,i,r){const l=this.elements;return Qn.subVectors(t,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),ka.crossVectors(r,Qn),ka.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),ka.crossVectors(r,Qn)),ka.normalize(),Rc.crossVectors(Qn,ka),l[0]=ka.x,l[4]=Rc.x,l[8]=Qn.x,l[1]=ka.y,l[5]=Rc.y,l[9]=Qn.y,l[2]=ka.z,l[6]=Rc.z,l[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],_=r[5],x=r[9],M=r[13],b=r[2],w=r[6],y=r[10],v=r[14],N=r[3],U=r[7],C=r[11],F=r[15],z=l[0],P=l[4],V=l[8],D=l[12],A=l[1],G=l[5],ct=l[9],lt=l[13],gt=l[2],ht=l[6],B=l[10],Z=l[14],W=l[3],Et=l[7],L=l[11],J=l[15];return c[0]=d*z+h*A+m*gt+p*W,c[4]=d*P+h*G+m*ht+p*Et,c[8]=d*V+h*ct+m*B+p*L,c[12]=d*D+h*lt+m*Z+p*J,c[1]=g*z+_*A+x*gt+M*W,c[5]=g*P+_*G+x*ht+M*Et,c[9]=g*V+_*ct+x*B+M*L,c[13]=g*D+_*lt+x*Z+M*J,c[2]=b*z+w*A+y*gt+v*W,c[6]=b*P+w*G+y*ht+v*Et,c[10]=b*V+w*ct+y*B+v*L,c[14]=b*D+w*lt+y*Z+v*J,c[3]=N*z+U*A+C*gt+F*W,c[7]=N*P+U*G+C*ht+F*Et,c[11]=N*V+U*ct+C*B+F*L,c[15]=N*D+U*lt+C*Z+F*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],M=t[14],b=t[3],w=t[7],y=t[11],v=t[15];return b*(+c*m*_-l*p*_-c*h*x+r*p*x+l*h*M-r*m*M)+w*(+i*m*M-i*p*x+c*d*x-l*d*M+l*p*g-c*m*g)+y*(+i*p*_-i*h*M-c*d*_+r*d*M+c*h*g-r*p*g)+v*(-l*h*g-i*m*_+i*h*x+l*d*_-r*d*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],M=t[11],b=t[12],w=t[13],y=t[14],v=t[15],N=_*y*p-w*x*p+w*m*M-h*y*M-_*m*v+h*x*v,U=b*x*p-g*y*p-b*m*M+d*y*M+g*m*v-d*x*v,C=g*w*p-b*_*p+b*h*M-d*w*M-g*h*v+d*_*v,F=b*_*m-g*w*m-b*h*x+d*w*x+g*h*y-d*_*y,z=i*N+r*U+l*C+c*F;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return t[0]=N*P,t[1]=(w*x*c-_*y*c-w*l*M+r*y*M+_*l*v-r*x*v)*P,t[2]=(h*y*c-w*m*c+w*l*p-r*y*p-h*l*v+r*m*v)*P,t[3]=(_*m*c-h*x*c-_*l*p+r*x*p+h*l*M-r*m*M)*P,t[4]=U*P,t[5]=(g*y*c-b*x*c+b*l*M-i*y*M-g*l*v+i*x*v)*P,t[6]=(b*m*c-d*y*c-b*l*p+i*y*p+d*l*v-i*m*v)*P,t[7]=(d*x*c-g*m*c+g*l*p-i*x*p-d*l*M+i*m*M)*P,t[8]=C*P,t[9]=(b*_*c-g*w*c-b*r*M+i*w*M+g*r*v-i*_*v)*P,t[10]=(d*w*c-b*h*c+b*r*p-i*w*p-d*r*v+i*h*v)*P,t[11]=(g*h*c-d*_*c-g*r*p+i*_*p+d*r*M-i*h*M)*P,t[12]=F*P,t[13]=(g*w*l-b*_*l+b*r*x-i*w*x-g*r*y+i*_*y)*P,t[14]=(b*h*l-d*w*l-b*r*m+i*w*m+d*r*y-i*h*y)*P,t[15]=(d*_*l-g*h*l+g*r*m-i*_*m-d*r*x+i*h*x)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,h=t.y,m=t.z,p=c*d,g=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,g=d+d,_=h+h,x=c*p,M=c*g,b=c*_,w=d*g,y=d*_,v=h*_,N=m*p,U=m*g,C=m*_,F=r.x,z=r.y,P=r.z;return l[0]=(1-(w+v))*F,l[1]=(M+C)*F,l[2]=(b-U)*F,l[3]=0,l[4]=(M-C)*z,l[5]=(1-(x+v))*z,l[6]=(y+N)*z,l[7]=0,l[8]=(b+U)*P,l[9]=(y-N)*P,l[10]=(1-(x+w))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=Es.set(l[0],l[1],l[2]).length();const d=Es.set(l[4],l[5],l[6]).length(),h=Es.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/c,g=1/d,_=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=_,_i.elements[9]*=_,_i.elements[10]*=_,i.setFromRotationMatrix(_i),r.x=c,r.y=d,r.z=h,this}makePerspective(t,i,r,l,c,d,h=ua){const m=this.elements,p=2*c/(i-t),g=2*c/(r-l),_=(i+t)/(i-t),x=(r+l)/(r-l);let M,b;if(h===ua)M=-(d+c)/(d-c),b=-2*d*c/(d-c);else if(h===Jc)M=-d/(d-c),b=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,c,d,h=ua){const m=this.elements,p=1/(i-t),g=1/(r-l),_=1/(d-c),x=(i+t)*p,M=(r+l)*g;let b,w;if(h===ua)b=(d+c)*_,w=-2*_;else if(h===Jc)b=c*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=w,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Es=new at,_i=new $e,JT=new at(0,0,0),$T=new at(1,1,1),ka=new at,Rc=new at,Qn=new at,Dv=new $e,Uv=new rl;class Oi{constructor(t=0,i=0,r=0,l=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Dv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Uv.setFromEuler(this),this.setFromQuaternion(Uv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class ex{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tb=0;const Lv=new at,Ts=new rl,na=new $e,Cc=new at,Wo=new at,eb=new at,nb=new rl,Nv=new at(1,0,0),Ov=new at(0,1,0),Pv=new at(0,0,1),Bv={type:"added"},ib={type:"removed"},bs={type:"childadded",child:null},Pd={type:"childremoved",child:null};class Ln extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new at,i=new Oi,r=new rl,l=new at(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new fe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ex,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ts.setFromAxisAngle(t,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,i){return Ts.setFromAxisAngle(t,i),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(Nv,t)}rotateY(t){return this.rotateOnAxis(Ov,t)}rotateZ(t){return this.rotateOnAxis(Pv,t)}translateOnAxis(t,i){return Lv.copy(t).applyQuaternion(this.quaternion),this.position.add(Lv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Nv,t)}translateY(t){return this.translateOnAxis(Ov,t)}translateZ(t){return this.translateOnAxis(Pv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Cc.copy(t):Cc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Wo,Cc,this.up):na.lookAt(Cc,Wo,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(na),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bv),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ib),Pd.child=t,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bv),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,t,eb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,nb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),g=d(t.images),_=d(t.shapes),x=d(t.skeletons),M=d(t.animations),b=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new at(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new at,ia=new at,Bd=new at,aa=new at,As=new at,Rs=new at,Iv=new at,Id=new at,zd=new at,Fd=new at,Hd=new Je,Gd=new Je,Vd=new Je;class xi{constructor(t=new at,i=new at,r=new at){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),vi.subVectors(t,i),l.cross(vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){vi.subVectors(l,i),ia.subVectors(r,i),Bd.subVectors(t,i);const d=vi.dot(vi),h=vi.dot(ia),m=vi.dot(Bd),p=ia.dot(ia),g=ia.dot(Bd),_=d*p-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(p*m-h*g)*x,b=(d*g-h*m)*x;return c.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,r,l,c,d,h,m){return this.getBarycoord(t,i,r,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,aa.x),m.addScaledVector(d,aa.y),m.addScaledVector(h,aa.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return Hd.setScalar(0),Gd.setScalar(0),Vd.setScalar(0),Hd.fromBufferAttribute(t,i),Gd.fromBufferAttribute(t,r),Vd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Hd,c.x),d.addScaledVector(Gd,c.y),d.addScaledVector(Vd,c.z),d}static isFrontFacing(t,i,r,l){return vi.subVectors(r,i),ia.subVectors(t,i),vi.cross(ia).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),vi.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return xi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,h;As.subVectors(l,r),Rs.subVectors(c,r),Id.subVectors(t,r);const m=As.dot(Id),p=Rs.dot(Id);if(m<=0&&p<=0)return i.copy(r);zd.subVectors(t,l);const g=As.dot(zd),_=Rs.dot(zd);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(As,d);Fd.subVectors(t,c);const M=As.dot(Fd),b=Rs.dot(Fd);if(b>=0&&M<=b)return i.copy(c);const w=M*p-m*b;if(w<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(Rs,h);const y=g*b-M*_;if(y<=0&&_-g>=0&&M-b>=0)return Iv.subVectors(c,l),h=(_-g)/(_-g+(M-b)),i.copy(l).addScaledVector(Iv,h);const v=1/(y+w+x);return d=w*v,h=x*v,i.copy(r).addScaledVector(As,d).addScaledVector(Rs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},wc={h:0,s:0,l:0};function kd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ne{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=De.workingColorSpace){if(t=FT(t,1),i=Me(i,0,1),r=Me(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=kd(d,c,t+1/3),this.g=kd(d,c,t),this.b=kd(d,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=ui){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ui){const r=nx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return De.workingToColorSpace(Dn.copy(this),t),Math.round(Me(Dn.r*255,0,255))*65536+Math.round(Me(Dn.g*255,0,255))*256+Math.round(Me(Dn.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,c=Dn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=g<=.5?_/(d+h):_/(2-d-h),d){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=ui){De.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,l=Dn.b;return t!==ui?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Xa),this.setHSL(Xa.h+t,Xa.s+i,Xa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Xa),t.getHSL(wc);const r=bd(Xa.h,wc.h,i),l=bd(Xa.s,wc.s,i),c=bd(Xa.l,wc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ne;Ne.NAMES=nx;let ab=0;class ol extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Os,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ev,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==Ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==fh&&(r.blendSrc=this.blendSrc),this.blendDst!==dh&&(r.blendDst=this.blendDst),this.blendEquation!==Dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ev&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ix extends ol{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=G0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new at,Dc=new Re;let rb=0;class Ui{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Tv,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Vo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Vo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Vo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Vo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Vo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tv&&(t.usage=this.usage),t}}class ax extends Ui{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class rx extends Ui{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Li extends Ui{constructor(t,i,r){super(new Float32Array(t),i,r)}}let sb=0;const ci=new $e,Xd=new Ln,Cs=new at,Jn=new sl,qo=new sl,vn=new at;class Ja extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($0(t)?rx:ax)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new fe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,r){return ci.makeTranslation(t,i,r),this.applyMatrix4(ci),this}scale(t,i,r){return ci.makeScale(t,i,r),this.applyMatrix4(ci),this}lookAt(t){return Xd.lookAt(t),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Li(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(t){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];qo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(Jn.min,qo.min),Jn.expandByPoint(vn),vn.addVectors(Jn.max,qo.max),Jn.expandByPoint(vn)):(Jn.expandByPoint(qo.min),Jn.expandByPoint(qo.max))}Jn.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)vn.fromBufferAttribute(h,p),m&&(Cs.fromBufferAttribute(t,p),vn.add(Cs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let V=0;V<r.count;V++)h[V]=new at,m[V]=new at;const p=new at,g=new at,_=new at,x=new Re,M=new Re,b=new Re,w=new at,y=new at;function v(V,D,A){p.fromBufferAttribute(r,V),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,A),x.fromBufferAttribute(c,V),M.fromBufferAttribute(c,D),b.fromBufferAttribute(c,A),g.sub(p),_.sub(p),M.sub(x),b.sub(x);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(G),y.copy(_).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(G),h[V].add(w),h[D].add(w),h[A].add(w),m[V].add(y),m[D].add(y),m[A].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let V=0,D=N.length;V<D;++V){const A=N[V],G=A.start,ct=A.count;for(let lt=G,gt=G+ct;lt<gt;lt+=3)v(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const U=new at,C=new at,F=new at,z=new at;function P(V){F.fromBufferAttribute(l,V),z.copy(F);const D=h[V];U.copy(D),U.sub(F.multiplyScalar(F.dot(D))).normalize(),C.crossVectors(z,D);const G=C.dot(m[V])<0?-1:1;d.setXYZW(V,U.x,U.y,U.z,G)}for(let V=0,D=N.length;V<D;++V){const A=N[V],G=A.start,ct=A.count;for(let lt=G,gt=G+ct;lt<gt;lt+=3)P(t.getX(lt+0)),P(t.getX(lt+1)),P(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new at,c=new at,d=new at,h=new at,m=new at,p=new at,g=new at,_=new at;if(t)for(let x=0,M=t.count;x<M;x+=3){const b=t.getX(x+0),w=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),h.add(g),m.add(g),p.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,x=new p.constructor(m.length*g);let M=0,b=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?M=m[w]*h.data.stride+h.offset:M=m[w]*g;for(let v=0;v<g;v++)x[b++]=p[M++]}return new Ui(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ja,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const x=p[g],M=t(x,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,g=d.length;p<g;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zv=new $e,Sr=new QT,Uc=new gp,Fv=new at,Lc=new at,Nc=new at,Oc=new at,Wd=new at,Pc=new at,Hv=new at,Bc=new at;class Di extends Ln{constructor(t=new Ja,i=new ix){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Wd.fromBufferAttribute(_,t),d?Pc.addScaledVector(Wd,g):Pc.addScaledVector(Wd.sub(i),g))}i.add(Pc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(c),Sr.copy(t.ray).recast(t.near),!(Uc.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Uc,Fv)===null||Sr.origin.distanceToSquared(Fv)>(t.far-t.near)**2))&&(zv.copy(c).invert(),Sr.copy(t.ray).applyMatrix4(zv),!(r.boundingBox!==null&&Sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Sr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,w=x.length;b<w;b++){const y=x[b],v=d[y.materialIndex],N=Math.max(y.start,M.start),U=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let C=N,F=U;C<F;C+=3){const z=h.getX(C),P=h.getX(C+1),V=h.getX(C+2);l=Ic(this,v,t,r,p,g,_,z,P,V),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let y=b,v=w;y<v;y+=3){const N=h.getX(y),U=h.getX(y+1),C=h.getX(y+2);l=Ic(this,d,t,r,p,g,_,N,U,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,w=x.length;b<w;b++){const y=x[b],v=d[y.materialIndex],N=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let C=N,F=U;C<F;C+=3){const z=C,P=C+1,V=C+2;l=Ic(this,v,t,r,p,g,_,z,P,V),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=b,v=w;y<v;y+=3){const N=y,U=y+1,C=y+2;l=Ic(this,d,t,r,p,g,_,N,U,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ob(s,t,i,r,l,c,d,h){let m;if(t.side===Gn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,t.side===Ka,h),m===null)return null;Bc.copy(h),Bc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Bc);return p<i.near||p>i.far?null:{distance:p,point:Bc.clone(),object:s}}function Ic(s,t,i,r,l,c,d,h,m,p){s.getVertexPosition(h,Lc),s.getVertexPosition(m,Nc),s.getVertexPosition(p,Oc);const g=ob(s,t,i,r,Lc,Nc,Oc,Hv);if(g){const _=new at;xi.getBarycoord(Hv,Lc,Nc,Oc,_),l&&(g.uv=xi.getInterpolatedAttribute(l,h,m,p,_,new Re)),c&&(g.uv1=xi.getInterpolatedAttribute(c,h,m,p,_,new Re)),d&&(g.normal=xi.getInterpolatedAttribute(d,h,m,p,_,new at),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new at,materialIndex:0};xi.getNormal(Lc,Nc,Oc,x.normal),g.face=x,g.barycoord=_}return g}class ll extends Ja{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],_=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,t,d,c,0),b("z","y","x",1,-1,r,i,-t,d,c,1),b("x","z","y",1,1,t,r,i,l,d,2),b("x","z","y",1,-1,t,r,-i,l,d,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Li(p,3)),this.setAttribute("normal",new Li(g,3)),this.setAttribute("uv",new Li(_,2));function b(w,y,v,N,U,C,F,z,P,V,D){const A=C/P,G=F/V,ct=C/2,lt=F/2,gt=z/2,ht=P+1,B=V+1;let Z=0,W=0;const Et=new at;for(let L=0;L<B;L++){const J=L*G-lt;for(let _t=0;_t<ht;_t++){const xt=_t*A-ct;Et[w]=xt*N,Et[y]=J*U,Et[v]=gt,p.push(Et.x,Et.y,Et.z),Et[w]=0,Et[y]=0,Et[v]=z>0?1:-1,g.push(Et.x,Et.y,Et.z),_.push(_t/P),_.push(1-L/V),Z+=1}}for(let L=0;L<V;L++)for(let J=0;J<P;J++){const _t=x+J+ht*L,xt=x+J+ht*(L+1),Q=x+(J+1)+ht*(L+1),pt=x+(J+1)+ht*L;m.push(_t,xt,pt),m.push(xt,Q,pt),W+=6}h.addGroup(M,W,D),M+=W,x+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function On(s){const t={};for(let i=0;i<s.length;i++){const r=Gs(s[i]);for(const l in r)t[l]=r[l]}return t}function lb(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function sx(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const cb={clone:Gs,merge:On};var ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qa extends ol{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ub,this.fragmentShader=fb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=lb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class ox extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ua}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wa=new at,Gv=new Re,Vv=new Re;class fi extends ox{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Kh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Td*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kh*2*Math.atan(Math.tan(Td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z),Wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z)}getViewSize(t,i){return this.getViewBounds(t,Gv,Vv),i.subVectors(Vv,Gv)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Td*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ws=-90,Ds=1;class db extends Ln{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(ws,Ds,t,i);l.layers=this.layers,this.add(l);const c=new fi(ws,Ds,t,i);c.layers=this.layers,this.add(c);const d=new fi(ws,Ds,t,i);d.layers=this.layers,this.add(d);const h=new fi(ws,Ds,t,i);h.layers=this.layers,this.add(h);const m=new fi(ws,Ds,t,i);m.layers=this.layers,this.add(m);const p=new fi(ws,Ds,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===ua)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Jc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,x,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class lx extends Vn{constructor(t=[],i=zs,r,l,c,d,h,m,p,g){super(t,i,r,l,c,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hb extends Br{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new lx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ll(5,5,5),c=new Qa({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Ya});c.uniforms.tEquirect.value=i;const d=new Di(l,c),h=i.minFilter;return i.minFilter===Nr&&(i.minFilter=wi),new db(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class zc extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pb={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,r),v=this._getHandJoint(p,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(pb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new zc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class mb extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const jd=new at,gb=new at,_b=new fe;class Ar{constructor(t=new at(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=jd.subVectors(r,i).cross(gb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(jd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||_b.getNormalMatrix(t),l=this.coplanarPoint(jd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new gp,Fc=new at;class _p{constructor(t=new Ar,i=new Ar,r=new Ar,l=new Ar,c=new Ar,d=new Ar){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ua){const r=this.planes,l=t.elements,c=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],_=l[6],x=l[7],M=l[8],b=l[9],w=l[10],y=l[11],v=l[12],N=l[13],U=l[14],C=l[15];if(r[0].setComponents(m-c,x-p,y-M,C-v).normalize(),r[1].setComponents(m+c,x+p,y+M,C+v).normalize(),r[2].setComponents(m+d,x+g,y+b,C+N).normalize(),r[3].setComponents(m-d,x-g,y-b,C-N).normalize(),r[4].setComponents(m-h,x-_,y-w,C-U).normalize(),i===ua)r[5].setComponents(m+h,x+_,y+w,C+U).normalize();else if(i===Jc)r[5].setComponents(h,_,w,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Fc.x=l.normal.x>0?t.max.x:t.min.x,Fc.y=l.normal.y>0?t.max.y:t.min.y,Fc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cx extends Vn{constructor(t,i,r=Pr,l,c,d,h=yi,m=yi,p,g=tl,_=1){if(g!==tl&&g!==el)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,d,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class vp extends Ja{constructor(t=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:l};const c=[],d=[];h(l),p(r),g(),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(c.slice(),3)),this.setAttribute("uv",new Li(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(N){const U=new at,C=new at,F=new at;for(let z=0;z<i.length;z+=3)M(i[z+0],U),M(i[z+1],C),M(i[z+2],F),m(U,C,F,N)}function m(N,U,C,F){const z=F+1,P=[];for(let V=0;V<=z;V++){P[V]=[];const D=N.clone().lerp(C,V/z),A=U.clone().lerp(C,V/z),G=z-V;for(let ct=0;ct<=G;ct++)ct===0&&V===z?P[V][ct]=D:P[V][ct]=D.clone().lerp(A,ct/G)}for(let V=0;V<z;V++)for(let D=0;D<2*(z-V)-1;D++){const A=Math.floor(D/2);D%2===0?(x(P[V][A+1]),x(P[V+1][A]),x(P[V][A])):(x(P[V][A+1]),x(P[V+1][A+1]),x(P[V+1][A]))}}function p(N){const U=new at;for(let C=0;C<c.length;C+=3)U.x=c[C+0],U.y=c[C+1],U.z=c[C+2],U.normalize().multiplyScalar(N),c[C+0]=U.x,c[C+1]=U.y,c[C+2]=U.z}function g(){const N=new at;for(let U=0;U<c.length;U+=3){N.x=c[U+0],N.y=c[U+1],N.z=c[U+2];const C=y(N)/2/Math.PI+.5,F=v(N)/Math.PI+.5;d.push(C,1-F)}b(),_()}function _(){for(let N=0;N<d.length;N+=6){const U=d[N+0],C=d[N+2],F=d[N+4],z=Math.max(U,C,F),P=Math.min(U,C,F);z>.9&&P<.1&&(U<.2&&(d[N+0]+=1),C<.2&&(d[N+2]+=1),F<.2&&(d[N+4]+=1))}}function x(N){c.push(N.x,N.y,N.z)}function M(N,U){const C=N*3;U.x=t[C+0],U.y=t[C+1],U.z=t[C+2]}function b(){const N=new at,U=new at,C=new at,F=new at,z=new Re,P=new Re,V=new Re;for(let D=0,A=0;D<c.length;D+=9,A+=6){N.set(c[D+0],c[D+1],c[D+2]),U.set(c[D+3],c[D+4],c[D+5]),C.set(c[D+6],c[D+7],c[D+8]),z.set(d[A+0],d[A+1]),P.set(d[A+2],d[A+3]),V.set(d[A+4],d[A+5]),F.copy(N).add(U).add(C).divideScalar(3);const G=y(F);w(z,A+0,N,G),w(P,A+2,U,G),w(V,A+4,C,G)}}function w(N,U,C,F){F<0&&N.x===1&&(d[U]=N.x-1),C.x===0&&C.z===0&&(d[U]=F/2/Math.PI+.5)}function y(N){return Math.atan2(N.z,-N.x)}function v(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vp(t.vertices,t.indices,t.radius,t.details)}}class xp extends vp{constructor(t=1,i=0){const r=(1+Math.sqrt(5))/2,l=1/r,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-r,0,-l,r,0,l,-r,0,l,r,-l,-r,0,-l,r,0,l,-r,0,l,r,0,-r,0,-l,r,0,-l,-r,0,l,r,0,l],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,d,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new xp(t.radius,t.detail)}}class iu extends Ja{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,_=t/h,x=i/m,M=[],b=[],w=[],y=[];for(let v=0;v<g;v++){const N=v*x-d;for(let U=0;U<p;U++){const C=U*_-c;b.push(C,-N,0),w.push(0,0,1),y.push(U/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let N=0;N<h;N++){const U=N+p*v,C=N+p*(v+1),F=N+1+p*(v+1),z=N+1+p*v;M.push(U,C,z),M.push(C,F,z)}this.setIndex(M),this.setAttribute("position",new Li(b,3)),this.setAttribute("normal",new Li(w,3)),this.setAttribute("uv",new Li(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new iu(t.width,t.height,t.widthSegments,t.heightSegments)}}class vb extends ol{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Q0,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xb extends ol{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sb extends ol{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ux extends Ln{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Yd=new $e,kv=new at,Xv=new at;class yb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;kv.setFromMatrixPosition(t.matrixWorld),i.position.copy(kv),Xv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Xv),i.updateMatrixWorld(),Yd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Yd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class fx extends ox{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Mb extends yb{constructor(){super(new fx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eb extends ux{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new Mb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tb extends ux{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class bb extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Wv(s,t,i,r){const l=Ab(r);switch(i){case q0:return s*t;case Y0:return s*t/l.components*l.byteLength;case dp:return s*t/l.components*l.byteLength;case Z0:return s*t*2/l.components*l.byteLength;case hp:return s*t*2/l.components*l.byteLength;case j0:return s*t*3/l.components*l.byteLength;case Si:return s*t*4/l.components*l.byteLength;case pp:return s*t*4/l.components*l.byteLength;case Xc:case Wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qc:case jc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bh:case Rh:return Math.max(s,16)*Math.max(t,8)/4;case Th:case Ah:return Math.max(s,8)*Math.max(t,8)/2;case Ch:case wh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Dh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Uh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Nh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Bh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case zh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Gh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Vh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case kh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Xh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Yc:case Wh:case qh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case K0:case jh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Yh:case Zh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ab(s){switch(s){case Ni:case k0:return{byteLength:1,components:1};case Jo:case X0:case il:return{byteLength:2,components:1};case up:case fp:return{byteLength:2,components:4};case Pr:case cp:case ca:return{byteLength:4,components:1};case W0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dx(){let s=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function Rb(s){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,g);else{_.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<_.length;M++){const b=_[x],w=_[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++x,_[x]=w)}_.length=x+1;for(let M=0,b=_.length;M<b;M++){const w=_[M];s.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var Cb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ob=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$b=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a1="gl_FragColor = linearToOutputTexel( gl_FragColor );",r1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,f1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,g1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,S1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,y1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,A1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,I1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,X1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_A=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,JA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$A=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:Cb,alphahash_pars_fragment:wb,alphamap_fragment:Db,alphamap_pars_fragment:Ub,alphatest_fragment:Lb,alphatest_pars_fragment:Nb,aomap_fragment:Ob,aomap_pars_fragment:Pb,batching_pars_vertex:Bb,batching_vertex:Ib,begin_vertex:zb,beginnormal_vertex:Fb,bsdfs:Hb,iridescence_fragment:Gb,bumpmap_pars_fragment:Vb,clipping_planes_fragment:kb,clipping_planes_pars_fragment:Xb,clipping_planes_pars_vertex:Wb,clipping_planes_vertex:qb,color_fragment:jb,color_pars_fragment:Yb,color_pars_vertex:Zb,color_vertex:Kb,common:Qb,cube_uv_reflection_fragment:Jb,defaultnormal_vertex:$b,displacementmap_pars_vertex:t1,displacementmap_vertex:e1,emissivemap_fragment:n1,emissivemap_pars_fragment:i1,colorspace_fragment:a1,colorspace_pars_fragment:r1,envmap_fragment:s1,envmap_common_pars_fragment:o1,envmap_pars_fragment:l1,envmap_pars_vertex:c1,envmap_physical_pars_fragment:S1,envmap_vertex:u1,fog_vertex:f1,fog_pars_vertex:d1,fog_fragment:h1,fog_pars_fragment:p1,gradientmap_pars_fragment:m1,lightmap_pars_fragment:g1,lights_lambert_fragment:_1,lights_lambert_pars_fragment:v1,lights_pars_begin:x1,lights_toon_fragment:y1,lights_toon_pars_fragment:M1,lights_phong_fragment:E1,lights_phong_pars_fragment:T1,lights_physical_fragment:b1,lights_physical_pars_fragment:A1,lights_fragment_begin:R1,lights_fragment_maps:C1,lights_fragment_end:w1,logdepthbuf_fragment:D1,logdepthbuf_pars_fragment:U1,logdepthbuf_pars_vertex:L1,logdepthbuf_vertex:N1,map_fragment:O1,map_pars_fragment:P1,map_particle_fragment:B1,map_particle_pars_fragment:I1,metalnessmap_fragment:z1,metalnessmap_pars_fragment:F1,morphinstance_vertex:H1,morphcolor_vertex:G1,morphnormal_vertex:V1,morphtarget_pars_vertex:k1,morphtarget_vertex:X1,normal_fragment_begin:W1,normal_fragment_maps:q1,normal_pars_fragment:j1,normal_pars_vertex:Y1,normal_vertex:Z1,normalmap_pars_fragment:K1,clearcoat_normal_fragment_begin:Q1,clearcoat_normal_fragment_maps:J1,clearcoat_pars_fragment:$1,iridescence_pars_fragment:tA,opaque_fragment:eA,packing:nA,premultiplied_alpha_fragment:iA,project_vertex:aA,dithering_fragment:rA,dithering_pars_fragment:sA,roughnessmap_fragment:oA,roughnessmap_pars_fragment:lA,shadowmap_pars_fragment:cA,shadowmap_pars_vertex:uA,shadowmap_vertex:fA,shadowmask_pars_fragment:dA,skinbase_vertex:hA,skinning_pars_vertex:pA,skinning_vertex:mA,skinnormal_vertex:gA,specularmap_fragment:_A,specularmap_pars_fragment:vA,tonemapping_fragment:xA,tonemapping_pars_fragment:SA,transmission_fragment:yA,transmission_pars_fragment:MA,uv_pars_fragment:EA,uv_pars_vertex:TA,uv_vertex:bA,worldpos_vertex:AA,background_vert:RA,background_frag:CA,backgroundCube_vert:wA,backgroundCube_frag:DA,cube_vert:UA,cube_frag:LA,depth_vert:NA,depth_frag:OA,distanceRGBA_vert:PA,distanceRGBA_frag:BA,equirect_vert:IA,equirect_frag:zA,linedashed_vert:FA,linedashed_frag:HA,meshbasic_vert:GA,meshbasic_frag:VA,meshlambert_vert:kA,meshlambert_frag:XA,meshmatcap_vert:WA,meshmatcap_frag:qA,meshnormal_vert:jA,meshnormal_frag:YA,meshphong_vert:ZA,meshphong_frag:KA,meshphysical_vert:QA,meshphysical_frag:JA,meshtoon_vert:$A,meshtoon_frag:tR,points_vert:eR,points_frag:nR,shadow_vert:iR,shadow_frag:aR,sprite_vert:rR,sprite_frag:sR},Ot={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ci={basic:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:On([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:On([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:On([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:On([Ot.points,Ot.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:On([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:On([Ot.common,Ot.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:On([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:On([Ot.sprite,Ot.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:On([Ot.common,Ot.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:On([Ot.lights,Ot.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ci.physical={uniforms:On([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Hc={r:0,b:0,g:0},Mr=new Oi,oR=new $e;function lR(s,t,i,r,l,c,d){const h=new Ne(0);let m=c===!0?0:1,p,g,_=null,x=0,M=null;function b(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?i:t).get(C)),C}function w(U){let C=!1;const F=b(U);F===null?v(h,m):F&&F.isColor&&(v(F,1),C=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,d):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,C){const F=b(C);F&&(F.isCubeTexture||F.mapping===nu)?(g===void 0&&(g=new Di(new ll(1,1,1),new Qa({name:"BackgroundCubeMaterial",uniforms:Gs(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Mr.copy(C.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(oR.makeRotationFromEuler(Mr)),g.material.toneMapped=De.getTransfer(F.colorSpace)!==He,(_!==F||x!==F.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=F,x=F.version,M=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Di(new iu(2,2),new Qa({name:"BackgroundMaterial",uniforms:Gs(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=De.getTransfer(F.colorSpace)!==He,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||x!==F.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=F,x=F.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,C){U.getRGB(Hc,sx(s)),r.buffers.color.setClear(Hc.r,Hc.g,Hc.b,C,d)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,C=1){h.set(U),m=C,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:w,addToRenderList:y,dispose:N}}function cR(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,d=!1;function h(A,G,ct,lt,gt){let ht=!1;const B=_(lt,ct,G);c!==B&&(c=B,p(c.object)),ht=M(A,lt,ct,gt),ht&&b(A,lt,ct,gt),gt!==null&&t.update(gt,s.ELEMENT_ARRAY_BUFFER),(ht||d)&&(d=!1,C(A,G,ct,lt),gt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function m(){return s.createVertexArray()}function p(A){return s.bindVertexArray(A)}function g(A){return s.deleteVertexArray(A)}function _(A,G,ct){const lt=ct.wireframe===!0;let gt=r[A.id];gt===void 0&&(gt={},r[A.id]=gt);let ht=gt[G.id];ht===void 0&&(ht={},gt[G.id]=ht);let B=ht[lt];return B===void 0&&(B=x(m()),ht[lt]=B),B}function x(A){const G=[],ct=[],lt=[];for(let gt=0;gt<i;gt++)G[gt]=0,ct[gt]=0,lt[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ct,attributeDivisors:lt,object:A,attributes:{},index:null}}function M(A,G,ct,lt){const gt=c.attributes,ht=G.attributes;let B=0;const Z=ct.getAttributes();for(const W in Z)if(Z[W].location>=0){const L=gt[W];let J=ht[W];if(J===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(J=A.instanceColor)),L===void 0||L.attribute!==J||J&&L.data!==J.data)return!0;B++}return c.attributesNum!==B||c.index!==lt}function b(A,G,ct,lt){const gt={},ht=G.attributes;let B=0;const Z=ct.getAttributes();for(const W in Z)if(Z[W].location>=0){let L=ht[W];L===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(L=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(L=A.instanceColor));const J={};J.attribute=L,L&&L.data&&(J.data=L.data),gt[W]=J,B++}c.attributes=gt,c.attributesNum=B,c.index=lt}function w(){const A=c.newAttributes;for(let G=0,ct=A.length;G<ct;G++)A[G]=0}function y(A){v(A,0)}function v(A,G){const ct=c.newAttributes,lt=c.enabledAttributes,gt=c.attributeDivisors;ct[A]=1,lt[A]===0&&(s.enableVertexAttribArray(A),lt[A]=1),gt[A]!==G&&(s.vertexAttribDivisor(A,G),gt[A]=G)}function N(){const A=c.newAttributes,G=c.enabledAttributes;for(let ct=0,lt=G.length;ct<lt;ct++)G[ct]!==A[ct]&&(s.disableVertexAttribArray(ct),G[ct]=0)}function U(A,G,ct,lt,gt,ht,B){B===!0?s.vertexAttribIPointer(A,G,ct,gt,ht):s.vertexAttribPointer(A,G,ct,lt,gt,ht)}function C(A,G,ct,lt){w();const gt=lt.attributes,ht=ct.getAttributes(),B=G.defaultAttributeValues;for(const Z in ht){const W=ht[Z];if(W.location>=0){let Et=gt[Z];if(Et===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(Et=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(Et=A.instanceColor)),Et!==void 0){const L=Et.normalized,J=Et.itemSize,_t=t.get(Et);if(_t===void 0)continue;const xt=_t.buffer,Q=_t.type,pt=_t.bytesPerElement,Mt=Q===s.INT||Q===s.UNSIGNED_INT||Et.gpuType===cp;if(Et.isInterleavedBufferAttribute){const Ct=Et.data,wt=Ct.stride,re=Et.offset;if(Ct.isInstancedInterleavedBuffer){for(let Xt=0;Xt<W.locationSize;Xt++)v(W.location+Xt,Ct.meshPerAttribute);A.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let Xt=0;Xt<W.locationSize;Xt++)y(W.location+Xt);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let Xt=0;Xt<W.locationSize;Xt++)U(W.location+Xt,J/W.locationSize,Q,L,wt*pt,(re+J/W.locationSize*Xt)*pt,Mt)}else{if(Et.isInstancedBufferAttribute){for(let Ct=0;Ct<W.locationSize;Ct++)v(W.location+Ct,Et.meshPerAttribute);A.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Ct=0;Ct<W.locationSize;Ct++)y(W.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let Ct=0;Ct<W.locationSize;Ct++)U(W.location+Ct,J/W.locationSize,Q,L,J*pt,J/W.locationSize*Ct*pt,Mt)}}else if(B!==void 0){const L=B[Z];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(W.location,L);break;case 3:s.vertexAttrib3fv(W.location,L);break;case 4:s.vertexAttrib4fv(W.location,L);break;default:s.vertexAttrib1fv(W.location,L)}}}}N()}function F(){V();for(const A in r){const G=r[A];for(const ct in G){const lt=G[ct];for(const gt in lt)g(lt[gt].object),delete lt[gt];delete G[ct]}delete r[A]}}function z(A){if(r[A.id]===void 0)return;const G=r[A.id];for(const ct in G){const lt=G[ct];for(const gt in lt)g(lt[gt].object),delete lt[gt];delete G[ct]}delete r[A.id]}function P(A){for(const G in r){const ct=r[G];if(ct[A.id]===void 0)continue;const lt=ct[A.id];for(const gt in lt)g(lt[gt].object),delete lt[gt];delete ct[A.id]}}function V(){D(),d=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:y,disableUnusedAttributes:N}}function uR(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b];i.update(M,r,1)}function m(p,g,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)d(p[b],g[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,_);let b=0;for(let w=0;w<_;w++)b+=g[w]*x[w];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function fR(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Si&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const V=P===il&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ni&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ca&&!V)}function m(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=b>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:F,maxSamples:z}}function dR(s){const t=this;let i=null,r=0,l=!1,c=!1;const d=new Ar,h=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||l;return l=x,r=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const b=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,v=s.get(_);if(!l||b===null||b.length===0||c&&!y)c?g(null):p();else{const N=c?0:r,U=N*4;let C=v.clippingState||null;m.value=C,C=g(b,x,U,M);for(let F=0;F!==U;++F)C[F]=i[F];v.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,x,M,b){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=m.value,b!==!0||y===null){const v=M+w*4,N=x.matrixWorldInverse;h.getNormalMatrix(N),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,C=M;U!==w;++U,C+=4)d.copy(_[U]).applyMatrix4(N,h),d.normal.toArray(y,C),y[C+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function hR(s){let t=new WeakMap;function i(d,h){return h===Sh?d.mapping=zs:h===yh&&(d.mapping=Fs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Sh||h===yh)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new hb(m.height);return p.fromEquirectangularTexture(s,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ns=4,qv=[.125,.215,.35,.446,.526,.582],Ur=20,Zd=new fx,jv=new Ne;let Kd=null,Qd=0,Jd=0,$d=!1;const Rr=(1+Math.sqrt(5))/2,Us=1/Rr,Yv=[new at(-Rr,Us,0),new at(Rr,Us,0),new at(-Us,0,Rr),new at(Us,0,Rr),new at(0,Rr,-Us),new at(0,Rr,Us),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)],pR=new at;class Zv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=pR}=c;Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kd,Qd,Jd),this._renderer.xr.enabled=$d,t.scissorTest=!1,Gc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===zs||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:il,format:Si,colorSpace:Hs,depthBuffer:!1},l=Kv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mR(c)),this._blurMaterial=gR(c,t,i)}return l}_compileMaterial(t){const i=new Di(this._lodPlanes[0],t);this._renderer.compile(i,Zd)}_sceneToCubeUV(t,i,r,l,c){const m=new fi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(jv),_.toneMapping=Za,_.autoClear=!1;const b=new ix({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),w=new Di(new ll,b);let y=!1;const v=t.background;v?v.isColor&&(b.color.copy(v),t.background=null,y=!0):(b.color.copy(jv),y=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const C=this._cubeSize;Gc(l,U*C,N>2?C:0,C,C),_.setRenderTarget(l),y&&_.render(w,m),_.render(t,m)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=M,_.autoClear=x,t.background=v}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===zs||t.mapping===Fs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new Di(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Gc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Zd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Yv[(l-c-1)%Yv.length];this._blur(t,c-1,c,d,h)}i.autoClear=r}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Di(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ur-1),w=c/b,y=isFinite(c)?1+Math.floor(g*w):Ur;y>Ur&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ur}`);const v=[];let N=0;for(let P=0;P<Ur;++P){const V=P/w,D=Math.exp(-V*V/2);v.push(D),P===0?N+=D:P<y&&(N+=2*D)}for(let P=0;P<v.length;P++)v[P]=v[P]/N;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-r;const C=this._sizeLods[l],F=3*C*(l>U-Ns?l-U+Ns:0),z=4*(this._cubeSize-C);Gc(i,F,z,3*C,2*C),m.setRenderTarget(i),m.render(_,Zd)}}function mR(s){const t=[],i=[],r=[];let l=s;const c=s-Ns+1+qv.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>s-Ns?m=qv[d-s+Ns-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,b=6,w=3,y=2,v=1,N=new Float32Array(w*b*M),U=new Float32Array(y*b*M),C=new Float32Array(v*b*M);for(let z=0;z<M;z++){const P=z%3*2/3-1,V=z>2?0:-1,D=[P,V,0,P+2/3,V,0,P+2/3,V+1,0,P,V,0,P+2/3,V+1,0,P,V+1,0];N.set(D,w*b*z),U.set(x,y*b*z);const A=[z,z,z,z,z,z];C.set(A,v*b*z)}const F=new Ja;F.setAttribute("position",new Ui(N,w)),F.setAttribute("uv",new Ui(U,y)),F.setAttribute("faceIndex",new Ui(C,v)),t.push(F),l>Ns&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Kv(s,t,i){const r=new Br(s,t,i);return r.texture.mapping=nu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Gc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function gR(s,t,i){const r=new Float32Array(Ur),l=new at(0,1,0);return new Qa({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function Qv(){return new Qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function Jv(){return new Qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function Sp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _R(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Sh||m===yh,g=m===zs||m===Fs;if(p||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new Zv(s)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Zv(s)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function vR(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ps("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function xR(s,t,i,r){const l={},c=new WeakMap;function d(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",d),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)t.update(x[M],s.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,b=_.attributes.position;let w=0;if(M!==null){const N=M.array;w=M.version;for(let U=0,C=N.length;U<C;U+=3){const F=N[U+0],z=N[U+1],P=N[U+2];x.push(F,z,z,P,P,F)}}else if(b!==void 0){const N=b.array;w=b.version;for(let U=0,C=N.length/3-1;U<C;U+=3){const F=U+0,z=U+1,P=U+2;x.push(F,z,z,P,P,F)}}else return;const y=new($0(x)?rx:ax)(x,1);y.version=w;const v=c.get(_);v&&t.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function SR(s,t,i){let r;function l(x){r=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function m(x,M){s.drawElements(r,M,c,x*d),i.update(M,r,1)}function p(x,M,b){b!==0&&(s.drawElementsInstanced(r,M,c,x*d,b),i.update(M,r,b))}function g(x,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,r,1)}function _(x,M,b,w){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/d,M[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,w,0,b);let v=0;for(let N=0;N<b;N++)v+=M[N]*w[N];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function yR(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function MR(s,t,i){const r=new WeakMap,l=new Je;function c(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==_){let A=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let C=0;b===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let F=h.attributes.position.count*C,z=1;F>t.maxTextureSize&&(z=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const P=new Float32Array(F*z*4*_),V=new tx(P,F,z,_);V.type=ca,V.needsUpdate=!0;const D=C*4;for(let G=0;G<_;G++){const ct=v[G],lt=N[G],gt=U[G],ht=F*z*4*G;for(let B=0;B<ct.count;B++){const Z=B*D;b===!0&&(l.fromBufferAttribute(ct,B),P[ht+Z+0]=l.x,P[ht+Z+1]=l.y,P[ht+Z+2]=l.z,P[ht+Z+3]=0),w===!0&&(l.fromBufferAttribute(lt,B),P[ht+Z+4]=l.x,P[ht+Z+5]=l.y,P[ht+Z+6]=l.z,P[ht+Z+7]=0),y===!0&&(l.fromBufferAttribute(gt,B),P[ht+Z+8]=l.x,P[ht+Z+9]=l.y,P[ht+Z+10]=l.z,P[ht+Z+11]=gt.itemSize===4?l.w:1)}}x={count:_,texture:V,size:new Re(F,z)},r.set(h,x),h.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const w=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",w),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function ER(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const hx=new Vn,$v=new cx(1,1),px=new tx,mx=new ZT,gx=new lx,t0=[],e0=[],n0=new Float32Array(16),i0=new Float32Array(9),a0=new Float32Array(4);function Xs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=t0[l];if(c===void 0&&(c=new Float32Array(l),t0[l]=c),t!==0){r.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,s[d].toArray(c,h)}return c}function fn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function dn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function au(s,t){let i=e0[t];i===void 0&&(i=new Int32Array(t),e0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function TR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function bR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2fv(this.addr,t),dn(i,t)}}function AR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;s.uniform3fv(this.addr,t),dn(i,t)}}function RR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4fv(this.addr,t),dn(i,t)}}function CR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;a0.set(r),s.uniformMatrix2fv(this.addr,!1,a0),dn(i,r)}}function wR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;i0.set(r),s.uniformMatrix3fv(this.addr,!1,i0),dn(i,r)}}function DR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;n0.set(r),s.uniformMatrix4fv(this.addr,!1,n0),dn(i,r)}}function UR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function LR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2iv(this.addr,t),dn(i,t)}}function NR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3iv(this.addr,t),dn(i,t)}}function OR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4iv(this.addr,t),dn(i,t)}}function PR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function BR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2uiv(this.addr,t),dn(i,t)}}function IR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3uiv(this.addr,t),dn(i,t)}}function zR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4uiv(this.addr,t),dn(i,t)}}function FR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?($v.compareFunction=J0,c=$v):c=hx,i.setTexture2D(t||c,l)}function HR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||mx,l)}function GR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||gx,l)}function VR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||px,l)}function kR(s){switch(s){case 5126:return TR;case 35664:return bR;case 35665:return AR;case 35666:return RR;case 35674:return CR;case 35675:return wR;case 35676:return DR;case 5124:case 35670:return UR;case 35667:case 35671:return LR;case 35668:case 35672:return NR;case 35669:case 35673:return OR;case 5125:return PR;case 36294:return BR;case 36295:return IR;case 36296:return zR;case 35678:case 36198:case 36298:case 36306:case 35682:return FR;case 35679:case 36299:case 36307:return HR;case 35680:case 36300:case 36308:case 36293:return GR;case 36289:case 36303:case 36311:case 36292:return VR}}function XR(s,t){s.uniform1fv(this.addr,t)}function WR(s,t){const i=Xs(t,this.size,2);s.uniform2fv(this.addr,i)}function qR(s,t){const i=Xs(t,this.size,3);s.uniform3fv(this.addr,i)}function jR(s,t){const i=Xs(t,this.size,4);s.uniform4fv(this.addr,i)}function YR(s,t){const i=Xs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function ZR(s,t){const i=Xs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function KR(s,t){const i=Xs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function QR(s,t){s.uniform1iv(this.addr,t)}function JR(s,t){s.uniform2iv(this.addr,t)}function $R(s,t){s.uniform3iv(this.addr,t)}function tC(s,t){s.uniform4iv(this.addr,t)}function eC(s,t){s.uniform1uiv(this.addr,t)}function nC(s,t){s.uniform2uiv(this.addr,t)}function iC(s,t){s.uniform3uiv(this.addr,t)}function aC(s,t){s.uniform4uiv(this.addr,t)}function rC(s,t,i){const r=this.cache,l=t.length,c=au(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||hx,c[d])}function sC(s,t,i){const r=this.cache,l=t.length,c=au(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||mx,c[d])}function oC(s,t,i){const r=this.cache,l=t.length,c=au(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||gx,c[d])}function lC(s,t,i){const r=this.cache,l=t.length,c=au(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||px,c[d])}function cC(s){switch(s){case 5126:return XR;case 35664:return WR;case 35665:return qR;case 35666:return jR;case 35674:return YR;case 35675:return ZR;case 35676:return KR;case 5124:case 35670:return QR;case 35667:case 35671:return JR;case 35668:case 35672:return $R;case 35669:case 35673:return tC;case 5125:return eC;case 36294:return nC;case 36295:return iC;case 36296:return aC;case 35678:case 36198:case 36298:case 36306:case 35682:return rC;case 35679:case 36299:case 36307:return sC;case 35680:case 36300:case 36308:case 36293:return oC;case 36289:case 36303:case 36311:case 36292:return lC}}class uC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=kR(i.type)}}class fC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=cC(i.type)}}class dC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const th=/(\w+)(\])?(\[|\.)?/g;function r0(s,t){s.seq.push(t),s.map[t.id]=t}function hC(s,t,i){const r=s.name,l=r.length;for(th.lastIndex=0;;){const c=th.exec(r),d=th.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){r0(i,p===void 0?new uC(h,s,t):new fC(h,s,t));break}else{let _=i.map[h];_===void 0&&(_=new dC(h),r0(i,_)),i=_}}}class Zc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);hC(c,d,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function s0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const pC=37297;let mC=0;function gC(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const o0=new fe;function _C(s){De._getMatrix(o0,De.workingColorSpace,s);const t=`mat3( ${o0.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(s)){case Qc:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function l0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+gC(s.getShaderSource(t),d)}else return l}function vC(s,t){const i=_C(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function xC(s,t){let i;switch(t){case yT:i="Linear";break;case MT:i="Reinhard";break;case ET:i="Cineon";break;case TT:i="ACESFilmic";break;case AT:i="AgX";break;case RT:i="Neutral";break;case bT:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vc=new at;function SC(){De.getLuminanceCoefficients(Vc);const s=Vc.x.toFixed(4),t=Vc.y.toFixed(4),i=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function MC(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function EC(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:s.getAttribLocation(t,d),locationSize:h}}return i}function Qo(s){return s!==""}function c0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function u0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const TC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(s){return s.replace(TC,AC)}const bC=new Map;function AC(s,t){let i=de[t];if(i===void 0){const r=bC.get(t);if(r!==void 0)i=de[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Qh(i)}const RC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(s){return s.replace(RC,CC)}function CC(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function d0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wC(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===H0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===tT?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function DC(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Fs:t="ENVMAP_TYPE_CUBE";break;case nu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function UC(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fs:t="ENVMAP_MODE_REFRACTION";break}return t}function LC(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case G0:t="ENVMAP_BLENDING_MULTIPLY";break;case xT:t="ENVMAP_BLENDING_MIX";break;case ST:t="ENVMAP_BLENDING_ADD";break}return t}function NC(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function OC(s,t,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=wC(i),p=DC(i),g=UC(i),_=LC(i),x=NC(i),M=yC(i),b=MC(c),w=l.createProgram();let y,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Qo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Qo).join(`
`),v.length>0&&(v+=`
`)):(y=[d0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),v=[d0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?de.tonemapping_pars_fragment:"",i.toneMapping!==Za?xC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,vC("linearToOutputTexel",i.outputColorSpace),SC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),d=Qh(d),d=c0(d,i),d=u0(d,i),h=Qh(h),h=c0(h,i),h=u0(h,i),d=f0(d),h=f0(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=N+y+d,C=N+v+h,F=s0(l,l.VERTEX_SHADER,U),z=s0(l,l.FRAGMENT_SHADER,C);l.attachShader(w,F),l.attachShader(w,z),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function P(G){if(s.debug.checkShaderErrors){const ct=l.getProgramInfoLog(w).trim(),lt=l.getShaderInfoLog(F).trim(),gt=l.getShaderInfoLog(z).trim();let ht=!0,B=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ht=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,F,z);else{const Z=l0(l,F,"vertex"),W=l0(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ct+`
`+Z+`
`+W)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(lt===""||gt==="")&&(B=!1);B&&(G.diagnostics={runnable:ht,programLog:ct,vertexShader:{log:lt,prefix:y},fragmentShader:{log:gt,prefix:v}})}l.deleteShader(F),l.deleteShader(z),V=new Zc(l,w),D=EC(l,w)}let V;this.getUniforms=function(){return V===void 0&&P(this),V};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(w,pC)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=mC++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=z,this}let PC=0;class BC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new IC(t),i.set(t,r)),r}}class IC{constructor(t){this.id=PC++,this.code=t,this.usedTimes=0}}function zC(s,t,i,r,l,c,d){const h=new ex,m=new BC,p=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,A,G,ct,lt){const gt=ct.fog,ht=lt.geometry,B=D.isMeshStandardMaterial?ct.environment:null,Z=(D.isMeshStandardMaterial?i:t).get(D.envMap||B),W=Z&&Z.mapping===nu?Z.image.height:null,Et=b[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const L=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,J=L!==void 0?L.length:0;let _t=0;ht.morphAttributes.position!==void 0&&(_t=1),ht.morphAttributes.normal!==void 0&&(_t=2),ht.morphAttributes.color!==void 0&&(_t=3);let xt,Q,pt,Mt;if(Et){const Ce=Ci[Et];xt=Ce.vertexShader,Q=Ce.fragmentShader}else xt=D.vertexShader,Q=D.fragmentShader,m.update(D),pt=m.getVertexShaderID(D),Mt=m.getFragmentShaderID(D);const Ct=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),re=lt.isInstancedMesh===!0,Xt=lt.isBatchedMesh===!0,be=!!D.map,Ee=!!D.matcap,ce=!!Z,H=!!D.aoMap,le=!!D.lightMap,me=!!D.bumpMap,oe=!!D.normalMap,Vt=!!D.displacementMap,_e=!!D.emissiveMap,Yt=!!D.metalnessMap,ie=!!D.roughnessMap,je=D.anisotropy>0,O=D.clearcoat>0,E=D.dispersion>0,et=D.iridescence>0,it=D.sheen>0,ft=D.transmission>0,ut=je&&!!D.anisotropyMap,Bt=O&&!!D.clearcoatMap,Lt=O&&!!D.clearcoatNormalMap,kt=O&&!!D.clearcoatRoughnessMap,Wt=et&&!!D.iridescenceMap,Tt=et&&!!D.iridescenceThicknessMap,It=it&&!!D.sheenColorMap,Zt=it&&!!D.sheenRoughnessMap,Kt=!!D.specularMap,Dt=!!D.specularColorMap,se=!!D.specularIntensityMap,X=ft&&!!D.transmissionMap,Nt=ft&&!!D.thicknessMap,bt=!!D.gradientMap,zt=!!D.alphaMap,Rt=D.alphaTest>0,St=!!D.alphaHash,Ht=!!D.extensions;let ae=Za;D.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Oe={shaderID:Et,shaderType:D.type,shaderName:D.name,vertexShader:xt,fragmentShader:Q,defines:D.defines,customVertexShaderID:pt,customFragmentShaderID:Mt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Xt,batchingColor:Xt&&lt._colorsTexture!==null,instancing:re,instancingColor:re&&lt.instanceColor!==null,instancingMorph:re&&lt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Ct===null?s.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Hs,alphaToCoverage:!!D.alphaToCoverage,map:be,matcap:Ee,envMap:ce,envMapMode:ce&&Z.mapping,envMapCubeUVHeight:W,aoMap:H,lightMap:le,bumpMap:me,normalMap:oe,displacementMap:x&&Vt,emissiveMap:_e,normalMapObjectSpace:oe&&D.normalMapType===UT,normalMapTangentSpace:oe&&D.normalMapType===Q0,metalnessMap:Yt,roughnessMap:ie,anisotropy:je,anisotropyMap:ut,clearcoat:O,clearcoatMap:Bt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:kt,dispersion:E,iridescence:et,iridescenceMap:Wt,iridescenceThicknessMap:Tt,sheen:it,sheenColorMap:It,sheenRoughnessMap:Zt,specularMap:Kt,specularColorMap:Dt,specularIntensityMap:se,transmission:ft,transmissionMap:X,thicknessMap:Nt,gradientMap:bt,opaque:D.transparent===!1&&D.blending===Os&&D.alphaToCoverage===!1,alphaMap:zt,alphaTest:Rt,alphaHash:St,combine:D.combine,mapUv:be&&w(D.map.channel),aoMapUv:H&&w(D.aoMap.channel),lightMapUv:le&&w(D.lightMap.channel),bumpMapUv:me&&w(D.bumpMap.channel),normalMapUv:oe&&w(D.normalMap.channel),displacementMapUv:Vt&&w(D.displacementMap.channel),emissiveMapUv:_e&&w(D.emissiveMap.channel),metalnessMapUv:Yt&&w(D.metalnessMap.channel),roughnessMapUv:ie&&w(D.roughnessMap.channel),anisotropyMapUv:ut&&w(D.anisotropyMap.channel),clearcoatMapUv:Bt&&w(D.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&w(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&w(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&w(D.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&w(D.iridescenceThicknessMap.channel),sheenColorMapUv:It&&w(D.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&w(D.sheenRoughnessMap.channel),specularMapUv:Kt&&w(D.specularMap.channel),specularColorMapUv:Dt&&w(D.specularColorMap.channel),specularIntensityMapUv:se&&w(D.specularIntensityMap.channel),transmissionMapUv:X&&w(D.transmissionMap.channel),thicknessMapUv:Nt&&w(D.thicknessMap.channel),alphaMapUv:zt&&w(D.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(oe||je),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ht.attributes.uv&&(be||zt),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:wt,skinning:lt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:_t,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:be&&D.map.isVideoTexture===!0&&De.getTransfer(D.map.colorSpace)===He,decodeVideoTextureEmissive:_e&&D.emissiveMap.isVideoTexture===!0&&De.getTransfer(D.emissiveMap.colorSpace)===He,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===oa,flipSided:D.side===Gn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ht&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&D.extensions.multiDraw===!0||Xt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function v(D){const A=[];if(D.shaderID?A.push(D.shaderID):(A.push(D.customVertexShaderID),A.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)A.push(G),A.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(N(A,D),U(A,D),A.push(s.outputColorSpace)),A.push(D.customProgramCacheKey),A.join()}function N(D,A){D.push(A.precision),D.push(A.outputColorSpace),D.push(A.envMapMode),D.push(A.envMapCubeUVHeight),D.push(A.mapUv),D.push(A.alphaMapUv),D.push(A.lightMapUv),D.push(A.aoMapUv),D.push(A.bumpMapUv),D.push(A.normalMapUv),D.push(A.displacementMapUv),D.push(A.emissiveMapUv),D.push(A.metalnessMapUv),D.push(A.roughnessMapUv),D.push(A.anisotropyMapUv),D.push(A.clearcoatMapUv),D.push(A.clearcoatNormalMapUv),D.push(A.clearcoatRoughnessMapUv),D.push(A.iridescenceMapUv),D.push(A.iridescenceThicknessMapUv),D.push(A.sheenColorMapUv),D.push(A.sheenRoughnessMapUv),D.push(A.specularMapUv),D.push(A.specularColorMapUv),D.push(A.specularIntensityMapUv),D.push(A.transmissionMapUv),D.push(A.thicknessMapUv),D.push(A.combine),D.push(A.fogExp2),D.push(A.sizeAttenuation),D.push(A.morphTargetsCount),D.push(A.morphAttributeCount),D.push(A.numDirLights),D.push(A.numPointLights),D.push(A.numSpotLights),D.push(A.numSpotLightMaps),D.push(A.numHemiLights),D.push(A.numRectAreaLights),D.push(A.numDirLightShadows),D.push(A.numPointLightShadows),D.push(A.numSpotLightShadows),D.push(A.numSpotLightShadowsWithMaps),D.push(A.numLightProbes),D.push(A.shadowMapType),D.push(A.toneMapping),D.push(A.numClippingPlanes),D.push(A.numClipIntersection),D.push(A.depthPacking)}function U(D,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reverseDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),D.push(h.mask)}function C(D){const A=b[D.type];let G;if(A){const ct=Ci[A];G=cb.clone(ct.uniforms)}else G=D.uniforms;return G}function F(D,A){let G;for(let ct=0,lt=g.length;ct<lt;ct++){const gt=g[ct];if(gt.cacheKey===A){G=gt,++G.usedTimes;break}}return G===void 0&&(G=new OC(s,A,D,c),g.push(G)),G}function z(D){if(--D.usedTimes===0){const A=g.indexOf(D);g[A]=g[g.length-1],g.pop(),D.destroy()}}function P(D){m.remove(D)}function V(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:C,acquireProgram:F,releaseProgram:z,releaseShaderCache:P,programs:g,dispose:V}}function FC(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function HC(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function h0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function p0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(_,x,M,b,w,y){let v=s[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:b,renderOrder:_.renderOrder,z:w,group:y},s[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=w,v.group=y),t++,v}function h(_,x,M,b,w,y){const v=d(_,x,M,b,w,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,x,M,b,w,y){const v=d(_,x,M,b,w,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||HC),r.length>1&&r.sort(x||h0),l.length>1&&l.sort(x||h0)}function g(){for(let _=t,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function GC(){let s=new WeakMap;function t(r,l){const c=s.get(r);let d;return c===void 0?(d=new p0,s.set(r,[d])):l>=c.length?(d=new p0,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function VC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new at,color:new Ne};break;case"SpotLight":i={position:new at,direction:new at,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new at,halfWidth:new at,halfHeight:new at};break}return s[t.id]=i,i}}}function kC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let XC=0;function WC(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function qC(s){const t=new VC,i=kC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new at);const l=new at,c=new $e,d=new $e;function h(p){let g=0,_=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,b=0,w=0,y=0,v=0,N=0,U=0,C=0,F=0,z=0,P=0;p.sort(WC);for(let D=0,A=p.length;D<A;D++){const G=p[D],ct=G.color,lt=G.intensity,gt=G.distance,ht=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=ct.r*lt,_+=ct.g*lt,x+=ct.b*lt;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],lt);P++}else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,W=i.get(G);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=ht,r.directionalShadowMatrix[M]=G.shadow.matrix,N++}r.directional[M]=B,M++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(ct).multiplyScalar(lt),B.distance=gt,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[w]=B;const Z=G.shadow;if(G.map&&(r.spotLightMap[F]=G.map,F++,Z.updateMatrices(G),G.castShadow&&z++),r.spotLightMatrix[w]=Z.matrix,G.castShadow){const W=i.get(G);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,r.spotShadow[w]=W,r.spotShadowMap[w]=ht,C++}w++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy(ct).multiplyScalar(lt),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=B,y++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const Z=G.shadow,W=i.get(G);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,r.pointShadow[b]=W,r.pointShadowMap[b]=ht,r.pointShadowMatrix[b]=G.shadow.matrix,U++}r.point[b]=B,b++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(lt),B.groundColor.copy(G.groundColor).multiplyScalar(lt),r.hemi[v]=B,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==M||V.pointLength!==b||V.spotLength!==w||V.rectAreaLength!==y||V.hemiLength!==v||V.numDirectionalShadows!==N||V.numPointShadows!==U||V.numSpotShadows!==C||V.numSpotMaps!==F||V.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=y,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=C+F-z,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=P,V.directionalLength=M,V.pointLength=b,V.spotLength=w,V.rectAreaLength=y,V.hemiLength=v,V.numDirectionalShadows=N,V.numPointShadows=U,V.numSpotShadows=C,V.numSpotMaps=F,V.numLightProbes=P,r.version=XC++)}function m(p,g){let _=0,x=0,M=0,b=0,w=0;const y=g.matrixWorldInverse;for(let v=0,N=p.length;v<N;v++){const U=p[v];if(U.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),_++}else if(U.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),d.identity(),c.copy(U.matrixWorld),c.premultiply(y),d.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),b++}else if(U.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:r}}function m0(s){const t=new qC(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function d(g){r.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function jC(s){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new m0(s),t.set(l,[h])):c>=d.length?(h=new m0(s),d.push(h)):h=d[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const YC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KC(s,t,i){let r=new _p;const l=new Re,c=new Re,d=new Je,h=new xb({depthPacking:DT}),m=new Sb,p={},g=i.maxTextureSize,_={[Ka]:Gn,[Gn]:Ka,[oa]:oa},x=new Qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:YC,fragmentShader:ZC}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ja;b.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Di(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=H0;let v=this.type;this.render=function(z,P,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const D=s.getRenderTarget(),A=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),ct=s.state;ct.setBlending(Ya),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const lt=v!==sa&&this.type===sa,gt=v===sa&&this.type!==sa;for(let ht=0,B=z.length;ht<B;ht++){const Z=z[ht],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const Et=W.getFrameExtents();if(l.multiply(Et),c.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Et.x),l.x=c.x*Et.x,W.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Et.y),l.y=c.y*Et.y,W.mapSize.y=c.y)),W.map===null||lt===!0||gt===!0){const J=this.type!==sa?{minFilter:yi,magFilter:yi}:{};W.map!==null&&W.map.dispose(),W.map=new Br(l.x,l.y,J),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const L=W.getViewportCount();for(let J=0;J<L;J++){const _t=W.getViewport(J);d.set(c.x*_t.x,c.y*_t.y,c.x*_t.z,c.y*_t.w),ct.viewport(d),W.updateMatrices(Z,J),r=W.getFrustum(),C(P,V,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===sa&&N(W,V),W.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(D,A,G)};function N(z,P){const V=t.update(w);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Br(l.x,l.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(P,null,V,x,w,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(P,null,V,M,w,null)}function U(z,P,V,D){let A=null;const G=V.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)A=G;else if(A=V.isPointLight===!0?m:h,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const ct=A.uuid,lt=P.uuid;let gt=p[ct];gt===void 0&&(gt={},p[ct]=gt);let ht=gt[lt];ht===void 0&&(ht=A.clone(),gt[lt]=ht,P.addEventListener("dispose",F)),A=ht}if(A.visible=P.visible,A.wireframe=P.wireframe,D===sa?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:_[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,V.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ct=s.properties.get(A);ct.light=V}return A}function C(z,P,V,D,A){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===sa)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,z.matrixWorld);const lt=t.update(z),gt=z.material;if(Array.isArray(gt)){const ht=lt.groups;for(let B=0,Z=ht.length;B<Z;B++){const W=ht[B],Et=gt[W.materialIndex];if(Et&&Et.visible){const L=U(z,Et,D,A);z.onBeforeShadow(s,z,P,V,lt,L,W),s.renderBufferDirect(V,null,lt,L,z,W),z.onAfterShadow(s,z,P,V,lt,L,W)}}}else if(gt.visible){const ht=U(z,gt,D,A);z.onBeforeShadow(s,z,P,V,lt,ht,null),s.renderBufferDirect(V,null,lt,ht,z,null),z.onAfterShadow(s,z,P,V,lt,ht,null)}}const ct=z.children;for(let lt=0,gt=ct.length;lt<gt;lt++)C(ct[lt],P,V,D,A)}function F(z){z.target.removeEventListener("dispose",F);for(const V in p){const D=p[V],A=z.target.uuid;A in D&&(D[A].dispose(),delete D[A])}}}const QC={[hh]:ph,[mh]:vh,[gh]:xh,[Is]:_h,[ph]:hh,[vh]:mh,[xh]:gh,[_h]:Is};function JC(s,t){function i(){let X=!1;const Nt=new Je;let bt=null;const zt=new Je(0,0,0,0);return{setMask:function(Rt){bt!==Rt&&!X&&(s.colorMask(Rt,Rt,Rt,Rt),bt=Rt)},setLocked:function(Rt){X=Rt},setClear:function(Rt,St,Ht,ae,Oe){Oe===!0&&(Rt*=ae,St*=ae,Ht*=ae),Nt.set(Rt,St,Ht,ae),zt.equals(Nt)===!1&&(s.clearColor(Rt,St,Ht,ae),zt.copy(Nt))},reset:function(){X=!1,bt=null,zt.set(-1,0,0,0)}}}function r(){let X=!1,Nt=!1,bt=null,zt=null,Rt=null;return{setReversed:function(St){if(Nt!==St){const Ht=t.get("EXT_clip_control");St?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Nt=St;const ae=Rt;Rt=null,this.setClear(ae)}},getReversed:function(){return Nt},setTest:function(St){St?Ct(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(St){bt!==St&&!X&&(s.depthMask(St),bt=St)},setFunc:function(St){if(Nt&&(St=QC[St]),zt!==St){switch(St){case hh:s.depthFunc(s.NEVER);break;case ph:s.depthFunc(s.ALWAYS);break;case mh:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case gh:s.depthFunc(s.EQUAL);break;case _h:s.depthFunc(s.GEQUAL);break;case vh:s.depthFunc(s.GREATER);break;case xh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}zt=St}},setLocked:function(St){X=St},setClear:function(St){Rt!==St&&(Nt&&(St=1-St),s.clearDepth(St),Rt=St)},reset:function(){X=!1,bt=null,zt=null,Rt=null,Nt=!1}}}function l(){let X=!1,Nt=null,bt=null,zt=null,Rt=null,St=null,Ht=null,ae=null,Oe=null;return{setTest:function(Ce){X||(Ce?Ct(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Ce){Nt!==Ce&&!X&&(s.stencilMask(Ce),Nt=Ce)},setFunc:function(Ce,kn,hn){(bt!==Ce||zt!==kn||Rt!==hn)&&(s.stencilFunc(Ce,kn,hn),bt=Ce,zt=kn,Rt=hn)},setOp:function(Ce,kn,hn){(St!==Ce||Ht!==kn||ae!==hn)&&(s.stencilOp(Ce,kn,hn),St=Ce,Ht=kn,ae=hn)},setLocked:function(Ce){X=Ce},setClear:function(Ce){Oe!==Ce&&(s.clearStencil(Ce),Oe=Ce)},reset:function(){X=!1,Nt=null,bt=null,zt=null,Rt=null,St=null,Ht=null,ae=null,Oe=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,M=[],b=null,w=!1,y=null,v=null,N=null,U=null,C=null,F=null,z=null,P=new Ne(0,0,0),V=0,D=!1,A=null,G=null,ct=null,lt=null,gt=null;const ht=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Z>=2);let Et=null,L={};const J=s.getParameter(s.SCISSOR_BOX),_t=s.getParameter(s.VIEWPORT),xt=new Je().fromArray(J),Q=new Je().fromArray(_t);function pt(X,Nt,bt,zt){const Rt=new Uint8Array(4),St=s.createTexture();s.bindTexture(X,St),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<bt;Ht++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Nt,0,s.RGBA,1,1,zt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(Nt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return St}const Mt={};Mt[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Ct(s.DEPTH_TEST),d.setFunc(Is),me(!1),oe(xv),Ct(s.CULL_FACE),H(Ya);function Ct(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function wt(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function re(X,Nt){return _[X]!==Nt?(s.bindFramebuffer(X,Nt),_[X]=Nt,X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Nt),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Xt(X,Nt){let bt=M,zt=!1;if(X){bt=x.get(Nt),bt===void 0&&(bt=[],x.set(Nt,bt));const Rt=X.textures;if(bt.length!==Rt.length||bt[0]!==s.COLOR_ATTACHMENT0){for(let St=0,Ht=Rt.length;St<Ht;St++)bt[St]=s.COLOR_ATTACHMENT0+St;bt.length=Rt.length,zt=!0}}else bt[0]!==s.BACK&&(bt[0]=s.BACK,zt=!0);zt&&s.drawBuffers(bt)}function be(X){return b!==X?(s.useProgram(X),b=X,!0):!1}const Ee={[Dr]:s.FUNC_ADD,[nT]:s.FUNC_SUBTRACT,[iT]:s.FUNC_REVERSE_SUBTRACT};Ee[aT]=s.MIN,Ee[rT]=s.MAX;const ce={[sT]:s.ZERO,[oT]:s.ONE,[lT]:s.SRC_COLOR,[fh]:s.SRC_ALPHA,[pT]:s.SRC_ALPHA_SATURATE,[dT]:s.DST_COLOR,[uT]:s.DST_ALPHA,[cT]:s.ONE_MINUS_SRC_COLOR,[dh]:s.ONE_MINUS_SRC_ALPHA,[hT]:s.ONE_MINUS_DST_COLOR,[fT]:s.ONE_MINUS_DST_ALPHA,[mT]:s.CONSTANT_COLOR,[gT]:s.ONE_MINUS_CONSTANT_COLOR,[_T]:s.CONSTANT_ALPHA,[vT]:s.ONE_MINUS_CONSTANT_ALPHA};function H(X,Nt,bt,zt,Rt,St,Ht,ae,Oe,Ce){if(X===Ya){w===!0&&(wt(s.BLEND),w=!1);return}if(w===!1&&(Ct(s.BLEND),w=!0),X!==eT){if(X!==y||Ce!==D){if((v!==Dr||C!==Dr)&&(s.blendEquation(s.FUNC_ADD),v=Dr,C=Dr),Ce)switch(X){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sv:s.blendFunc(s.ONE,s.ONE);break;case yv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mv:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sv:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case yv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mv:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,U=null,F=null,z=null,P.set(0,0,0),V=0,y=X,D=Ce}return}Rt=Rt||Nt,St=St||bt,Ht=Ht||zt,(Nt!==v||Rt!==C)&&(s.blendEquationSeparate(Ee[Nt],Ee[Rt]),v=Nt,C=Rt),(bt!==N||zt!==U||St!==F||Ht!==z)&&(s.blendFuncSeparate(ce[bt],ce[zt],ce[St],ce[Ht]),N=bt,U=zt,F=St,z=Ht),(ae.equals(P)===!1||Oe!==V)&&(s.blendColor(ae.r,ae.g,ae.b,Oe),P.copy(ae),V=Oe),y=X,D=!1}function le(X,Nt){X.side===oa?wt(s.CULL_FACE):Ct(s.CULL_FACE);let bt=X.side===Gn;Nt&&(bt=!bt),me(bt),X.blending===Os&&X.transparent===!1?H(Ya):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const zt=X.stencilWrite;h.setTest(zt),zt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),_e(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ct(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function me(X){A!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),A=X)}function oe(X){X!==JE?(Ct(s.CULL_FACE),X!==G&&(X===xv?s.cullFace(s.BACK):X===$E?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),G=X}function Vt(X){X!==ct&&(B&&s.lineWidth(X),ct=X)}function _e(X,Nt,bt){X?(Ct(s.POLYGON_OFFSET_FILL),(lt!==Nt||gt!==bt)&&(s.polygonOffset(Nt,bt),lt=Nt,gt=bt)):wt(s.POLYGON_OFFSET_FILL)}function Yt(X){X?Ct(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function ie(X){X===void 0&&(X=s.TEXTURE0+ht-1),Et!==X&&(s.activeTexture(X),Et=X)}function je(X,Nt,bt){bt===void 0&&(Et===null?bt=s.TEXTURE0+ht-1:bt=Et);let zt=L[bt];zt===void 0&&(zt={type:void 0,texture:void 0},L[bt]=zt),(zt.type!==X||zt.texture!==Nt)&&(Et!==bt&&(s.activeTexture(bt),Et=bt),s.bindTexture(X,Nt||Mt[X]),zt.type=X,zt.texture=Nt)}function O(){const X=L[Et];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(X){xt.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),xt.copy(X))}function Zt(X){Q.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function Kt(X,Nt){let bt=p.get(Nt);bt===void 0&&(bt=new WeakMap,p.set(Nt,bt));let zt=bt.get(X);zt===void 0&&(zt=s.getUniformBlockIndex(Nt,X.name),bt.set(X,zt))}function Dt(X,Nt){const zt=p.get(Nt).get(X);m.get(Nt)!==zt&&(s.uniformBlockBinding(Nt,zt,X.__bindingPointIndex),m.set(Nt,zt))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Et=null,L={},_={},x=new WeakMap,M=[],b=null,w=!1,y=null,v=null,N=null,U=null,C=null,F=null,z=null,P=new Ne(0,0,0),V=0,D=!1,A=null,G=null,ct=null,lt=null,gt=null,xt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:Ct,disable:wt,bindFramebuffer:re,drawBuffers:Xt,useProgram:be,setBlending:H,setMaterial:le,setFlipSided:me,setCullFace:oe,setLineWidth:Vt,setPolygonOffset:_e,setScissorTest:Yt,activeTexture:ie,bindTexture:je,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:Wt,texImage3D:Tt,updateUBOMapping:Kt,uniformBlockBinding:Dt,texStorage2D:Lt,texStorage3D:kt,texSubImage2D:it,texSubImage3D:ft,compressedTexSubImage2D:ut,compressedTexSubImage3D:Bt,scissor:It,viewport:Zt,reset:se}}function $C(s,t,i,r,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Re,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,E){return M?new OffscreenCanvas(O,E):$c("canvas")}function w(O,E,et){let it=1;const ft=je(O);if((ft.width>et||ft.height>et)&&(it=et/Math.max(ft.width,ft.height)),it<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ut=Math.floor(it*ft.width),Bt=Math.floor(it*ft.height);_===void 0&&(_=b(ut,Bt));const Lt=E?b(ut,Bt):_;return Lt.width=ut,Lt.height=Bt,Lt.getContext("2d").drawImage(O,0,0,ut,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+ut+"x"+Bt+")."),Lt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),O;return O}function y(O){return O.generateMipmaps}function v(O){s.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(O,E,et,it,ft=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ut=E;if(E===s.RED&&(et===s.FLOAT&&(ut=s.R32F),et===s.HALF_FLOAT&&(ut=s.R16F),et===s.UNSIGNED_BYTE&&(ut=s.R8)),E===s.RED_INTEGER&&(et===s.UNSIGNED_BYTE&&(ut=s.R8UI),et===s.UNSIGNED_SHORT&&(ut=s.R16UI),et===s.UNSIGNED_INT&&(ut=s.R32UI),et===s.BYTE&&(ut=s.R8I),et===s.SHORT&&(ut=s.R16I),et===s.INT&&(ut=s.R32I)),E===s.RG&&(et===s.FLOAT&&(ut=s.RG32F),et===s.HALF_FLOAT&&(ut=s.RG16F),et===s.UNSIGNED_BYTE&&(ut=s.RG8)),E===s.RG_INTEGER&&(et===s.UNSIGNED_BYTE&&(ut=s.RG8UI),et===s.UNSIGNED_SHORT&&(ut=s.RG16UI),et===s.UNSIGNED_INT&&(ut=s.RG32UI),et===s.BYTE&&(ut=s.RG8I),et===s.SHORT&&(ut=s.RG16I),et===s.INT&&(ut=s.RG32I)),E===s.RGB_INTEGER&&(et===s.UNSIGNED_BYTE&&(ut=s.RGB8UI),et===s.UNSIGNED_SHORT&&(ut=s.RGB16UI),et===s.UNSIGNED_INT&&(ut=s.RGB32UI),et===s.BYTE&&(ut=s.RGB8I),et===s.SHORT&&(ut=s.RGB16I),et===s.INT&&(ut=s.RGB32I)),E===s.RGBA_INTEGER&&(et===s.UNSIGNED_BYTE&&(ut=s.RGBA8UI),et===s.UNSIGNED_SHORT&&(ut=s.RGBA16UI),et===s.UNSIGNED_INT&&(ut=s.RGBA32UI),et===s.BYTE&&(ut=s.RGBA8I),et===s.SHORT&&(ut=s.RGBA16I),et===s.INT&&(ut=s.RGBA32I)),E===s.RGB&&et===s.UNSIGNED_INT_5_9_9_9_REV&&(ut=s.RGB9_E5),E===s.RGBA){const Bt=ft?Qc:De.getTransfer(it);et===s.FLOAT&&(ut=s.RGBA32F),et===s.HALF_FLOAT&&(ut=s.RGBA16F),et===s.UNSIGNED_BYTE&&(ut=Bt===He?s.SRGB8_ALPHA8:s.RGBA8),et===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),et===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)}return(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function C(O,E){let et;return O?E===null||E===Pr||E===$o?et=s.DEPTH24_STENCIL8:E===ca?et=s.DEPTH32F_STENCIL8:E===Jo&&(et=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pr||E===$o?et=s.DEPTH_COMPONENT24:E===ca?et=s.DEPTH_COMPONENT32F:E===Jo&&(et=s.DEPTH_COMPONENT16),et}function F(O,E){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==yi&&O.minFilter!==wi?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function z(O){const E=O.target;E.removeEventListener("dispose",z),V(E),E.isVideoTexture&&g.delete(E)}function P(O){const E=O.target;E.removeEventListener("dispose",P),A(E)}function V(O){const E=r.get(O);if(E.__webglInit===void 0)return;const et=O.source,it=x.get(et);if(it){const ft=it[E.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&D(O),Object.keys(it).length===0&&x.delete(et)}r.remove(O)}function D(O){const E=r.get(O);s.deleteTexture(E.__webglTexture);const et=O.source,it=x.get(et);delete it[E.__cacheKey],d.memory.textures--}function A(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(E.__webglFramebuffer[it]))for(let ft=0;ft<E.__webglFramebuffer[it].length;ft++)s.deleteFramebuffer(E.__webglFramebuffer[it][ft]);else s.deleteFramebuffer(E.__webglFramebuffer[it]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[it])}else{if(Array.isArray(E.__webglFramebuffer))for(let it=0;it<E.__webglFramebuffer.length;it++)s.deleteFramebuffer(E.__webglFramebuffer[it]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let it=0;it<E.__webglColorRenderbuffer.length;it++)E.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[it]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=O.textures;for(let it=0,ft=et.length;it<ft;it++){const ut=r.get(et[it]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),d.memory.textures--),r.remove(et[it])}r.remove(O)}let G=0;function ct(){G=0}function lt(){const O=G;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function gt(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function ht(O,E){const et=r.get(O);if(O.isVideoTexture&&Yt(O),O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){const it=O.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(et,O,E);return}}i.bindTexture(s.TEXTURE_2D,et.__webglTexture,s.TEXTURE0+E)}function B(O,E){const et=r.get(O);if(O.version>0&&et.__version!==O.version){Mt(et,O,E);return}i.bindTexture(s.TEXTURE_2D_ARRAY,et.__webglTexture,s.TEXTURE0+E)}function Z(O,E){const et=r.get(O);if(O.version>0&&et.__version!==O.version){Mt(et,O,E);return}i.bindTexture(s.TEXTURE_3D,et.__webglTexture,s.TEXTURE0+E)}function W(O,E){const et=r.get(O);if(O.version>0&&et.__version!==O.version){Ct(et,O,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture,s.TEXTURE0+E)}const Et={[Mh]:s.REPEAT,[Lr]:s.CLAMP_TO_EDGE,[Eh]:s.MIRRORED_REPEAT},L={[yi]:s.NEAREST,[CT]:s.NEAREST_MIPMAP_NEAREST,[yc]:s.NEAREST_MIPMAP_LINEAR,[wi]:s.LINEAR,[Ed]:s.LINEAR_MIPMAP_NEAREST,[Nr]:s.LINEAR_MIPMAP_LINEAR},J={[LT]:s.NEVER,[zT]:s.ALWAYS,[NT]:s.LESS,[J0]:s.LEQUAL,[OT]:s.EQUAL,[IT]:s.GEQUAL,[PT]:s.GREATER,[BT]:s.NOTEQUAL};function _t(O,E){if(E.type===ca&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===wi||E.magFilter===Ed||E.magFilter===yc||E.magFilter===Nr||E.minFilter===wi||E.minFilter===Ed||E.minFilter===yc||E.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,Et[E.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,Et[E.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,Et[E.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,L[E.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yi||E.minFilter!==yc&&E.minFilter!==Nr||E.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function xt(O,E){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",z));const it=E.source;let ft=x.get(it);ft===void 0&&(ft={},x.set(it,ft));const ut=gt(E);if(ut!==O.__cacheKey){ft[ut]===void 0&&(ft[ut]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,et=!0),ft[ut].usedTimes++;const Bt=ft[O.__cacheKey];Bt!==void 0&&(ft[O.__cacheKey].usedTimes--,Bt.usedTimes===0&&D(E)),O.__cacheKey=ut,O.__webglTexture=ft[ut].texture}return et}function Q(O,E,et){return Math.floor(Math.floor(O/et)/E)}function pt(O,E,et,it){const ut=O.updateRanges;if(ut.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,et,it,E.data);else{ut.sort((Tt,It)=>Tt.start-It.start);let Bt=0;for(let Tt=1;Tt<ut.length;Tt++){const It=ut[Bt],Zt=ut[Tt],Kt=It.start+It.count,Dt=Q(Zt.start,E.width,4),se=Q(It.start,E.width,4);Zt.start<=Kt+1&&Dt===se&&Q(Zt.start+Zt.count-1,E.width,4)===Dt?It.count=Math.max(It.count,Zt.start+Zt.count-It.start):(++Bt,ut[Bt]=Zt)}ut.length=Bt+1;const Lt=s.getParameter(s.UNPACK_ROW_LENGTH),kt=s.getParameter(s.UNPACK_SKIP_PIXELS),Wt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Tt=0,It=ut.length;Tt<It;Tt++){const Zt=ut[Tt],Kt=Math.floor(Zt.start/4),Dt=Math.ceil(Zt.count/4),se=Kt%E.width,X=Math.floor(Kt/E.width),Nt=Dt,bt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,se),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,se,X,Nt,bt,et,it,E.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Lt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Wt)}}function Mt(O,E,et){let it=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(it=s.TEXTURE_3D);const ft=xt(O,E),ut=E.source;i.bindTexture(it,O.__webglTexture,s.TEXTURE0+et);const Bt=r.get(ut);if(ut.version!==Bt.__version||ft===!0){i.activeTexture(s.TEXTURE0+et);const Lt=De.getPrimaries(De.workingColorSpace),kt=E.colorSpace===ja?null:De.getPrimaries(E.colorSpace),Wt=E.colorSpace===ja||Lt===kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Tt=w(E.image,!1,l.maxTextureSize);Tt=ie(E,Tt);const It=c.convert(E.format,E.colorSpace),Zt=c.convert(E.type);let Kt=U(E.internalFormat,It,Zt,E.colorSpace,E.isVideoTexture);_t(it,E);let Dt;const se=E.mipmaps,X=E.isVideoTexture!==!0,Nt=Bt.__version===void 0||ft===!0,bt=ut.dataReady,zt=F(E,Tt);if(E.isDepthTexture)Kt=C(E.format===el,E.type),Nt&&(X?i.texStorage2D(s.TEXTURE_2D,1,Kt,Tt.width,Tt.height):i.texImage2D(s.TEXTURE_2D,0,Kt,Tt.width,Tt.height,0,It,Zt,null));else if(E.isDataTexture)if(se.length>0){X&&Nt&&i.texStorage2D(s.TEXTURE_2D,zt,Kt,se[0].width,se[0].height);for(let Rt=0,St=se.length;Rt<St;Rt++)Dt=se[Rt],X?bt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Dt.width,Dt.height,It,Zt,Dt.data):i.texImage2D(s.TEXTURE_2D,Rt,Kt,Dt.width,Dt.height,0,It,Zt,Dt.data);E.generateMipmaps=!1}else X?(Nt&&i.texStorage2D(s.TEXTURE_2D,zt,Kt,Tt.width,Tt.height),bt&&pt(E,Tt,It,Zt)):i.texImage2D(s.TEXTURE_2D,0,Kt,Tt.width,Tt.height,0,It,Zt,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Kt,se[0].width,se[0].height,Tt.depth);for(let Rt=0,St=se.length;Rt<St;Rt++)if(Dt=se[Rt],E.format!==Si)if(It!==null)if(X){if(bt)if(E.layerUpdates.size>0){const Ht=Wv(Dt.width,Dt.height,E.format,E.type);for(const ae of E.layerUpdates){const Oe=Dt.data.subarray(ae*Ht/Dt.data.BYTES_PER_ELEMENT,(ae+1)*Ht/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,ae,Dt.width,Dt.height,1,It,Oe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Dt.width,Dt.height,Tt.depth,It,Dt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Rt,Kt,Dt.width,Dt.height,Tt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?bt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Dt.width,Dt.height,Tt.depth,It,Zt,Dt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Rt,Kt,Dt.width,Dt.height,Tt.depth,0,It,Zt,Dt.data)}else{X&&Nt&&i.texStorage2D(s.TEXTURE_2D,zt,Kt,se[0].width,se[0].height);for(let Rt=0,St=se.length;Rt<St;Rt++)Dt=se[Rt],E.format!==Si?It!==null?X?bt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Rt,0,0,Dt.width,Dt.height,It,Dt.data):i.compressedTexImage2D(s.TEXTURE_2D,Rt,Kt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?bt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Dt.width,Dt.height,It,Zt,Dt.data):i.texImage2D(s.TEXTURE_2D,Rt,Kt,Dt.width,Dt.height,0,It,Zt,Dt.data)}else if(E.isDataArrayTexture)if(X){if(Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Kt,Tt.width,Tt.height,Tt.depth),bt)if(E.layerUpdates.size>0){const Rt=Wv(Tt.width,Tt.height,E.format,E.type);for(const St of E.layerUpdates){const Ht=Tt.data.subarray(St*Rt/Tt.data.BYTES_PER_ELEMENT,(St+1)*Rt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,St,Tt.width,Tt.height,1,It,Zt,Ht)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,Zt,Tt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Kt,Tt.width,Tt.height,Tt.depth,0,It,Zt,Tt.data);else if(E.isData3DTexture)X?(Nt&&i.texStorage3D(s.TEXTURE_3D,zt,Kt,Tt.width,Tt.height,Tt.depth),bt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,Zt,Tt.data)):i.texImage3D(s.TEXTURE_3D,0,Kt,Tt.width,Tt.height,Tt.depth,0,It,Zt,Tt.data);else if(E.isFramebufferTexture){if(Nt)if(X)i.texStorage2D(s.TEXTURE_2D,zt,Kt,Tt.width,Tt.height);else{let Rt=Tt.width,St=Tt.height;for(let Ht=0;Ht<zt;Ht++)i.texImage2D(s.TEXTURE_2D,Ht,Kt,Rt,St,0,It,Zt,null),Rt>>=1,St>>=1}}else if(se.length>0){if(X&&Nt){const Rt=je(se[0]);i.texStorage2D(s.TEXTURE_2D,zt,Kt,Rt.width,Rt.height)}for(let Rt=0,St=se.length;Rt<St;Rt++)Dt=se[Rt],X?bt&&i.texSubImage2D(s.TEXTURE_2D,Rt,0,0,It,Zt,Dt):i.texImage2D(s.TEXTURE_2D,Rt,Kt,It,Zt,Dt);E.generateMipmaps=!1}else if(X){if(Nt){const Rt=je(Tt);i.texStorage2D(s.TEXTURE_2D,zt,Kt,Rt.width,Rt.height)}bt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,It,Zt,Tt)}else i.texImage2D(s.TEXTURE_2D,0,Kt,It,Zt,Tt);y(E)&&v(it),Bt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Ct(O,E,et){if(E.image.length!==6)return;const it=xt(O,E),ft=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+et);const ut=r.get(ft);if(ft.version!==ut.__version||it===!0){i.activeTexture(s.TEXTURE0+et);const Bt=De.getPrimaries(De.workingColorSpace),Lt=E.colorSpace===ja?null:De.getPrimaries(E.colorSpace),kt=E.colorSpace===ja||Bt===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,It=[];for(let St=0;St<6;St++)!Wt&&!Tt?It[St]=w(E.image[St],!0,l.maxCubemapSize):It[St]=Tt?E.image[St].image:E.image[St],It[St]=ie(E,It[St]);const Zt=It[0],Kt=c.convert(E.format,E.colorSpace),Dt=c.convert(E.type),se=U(E.internalFormat,Kt,Dt,E.colorSpace),X=E.isVideoTexture!==!0,Nt=ut.__version===void 0||it===!0,bt=ft.dataReady;let zt=F(E,Zt);_t(s.TEXTURE_CUBE_MAP,E);let Rt;if(Wt){X&&Nt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,zt,se,Zt.width,Zt.height);for(let St=0;St<6;St++){Rt=It[St].mipmaps;for(let Ht=0;Ht<Rt.length;Ht++){const ae=Rt[Ht];E.format!==Si?Kt!==null?X?bt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht,0,0,ae.width,ae.height,Kt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht,se,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht,0,0,ae.width,ae.height,Kt,Dt,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht,se,ae.width,ae.height,0,Kt,Dt,ae.data)}}}else{if(Rt=E.mipmaps,X&&Nt){Rt.length>0&&zt++;const St=je(It[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,zt,se,St.width,St.height)}for(let St=0;St<6;St++)if(Tt){X?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,It[St].width,It[St].height,Kt,Dt,It[St].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,se,It[St].width,It[St].height,0,Kt,Dt,It[St].data);for(let Ht=0;Ht<Rt.length;Ht++){const Oe=Rt[Ht].image[St].image;X?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht+1,0,0,Oe.width,Oe.height,Kt,Dt,Oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht+1,se,Oe.width,Oe.height,0,Kt,Dt,Oe.data)}}else{X?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Kt,Dt,It[St]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,se,Kt,Dt,It[St]);for(let Ht=0;Ht<Rt.length;Ht++){const ae=Rt[Ht];X?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht+1,0,0,Kt,Dt,ae.image[St]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht+1,se,Kt,Dt,ae.image[St])}}}y(E)&&v(s.TEXTURE_CUBE_MAP),ut.__version=ft.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function wt(O,E,et,it,ft,ut){const Bt=c.convert(et.format,et.colorSpace),Lt=c.convert(et.type),kt=U(et.internalFormat,Bt,Lt,et.colorSpace),Wt=r.get(E),Tt=r.get(et);if(Tt.__renderTarget=E,!Wt.__hasExternalTextures){const It=Math.max(1,E.width>>ut),Zt=Math.max(1,E.height>>ut);ft===s.TEXTURE_3D||ft===s.TEXTURE_2D_ARRAY?i.texImage3D(ft,ut,kt,It,Zt,E.depth,0,Bt,Lt,null):i.texImage2D(ft,ut,kt,It,Zt,0,Bt,Lt,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),_e(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,ft,Tt.__webglTexture,0,Vt(E)):(ft===s.TEXTURE_2D||ft>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,ft,Tt.__webglTexture,ut),i.bindFramebuffer(s.FRAMEBUFFER,null)}function re(O,E,et){if(s.bindRenderbuffer(s.RENDERBUFFER,O),E.depthBuffer){const it=E.depthTexture,ft=it&&it.isDepthTexture?it.type:null,ut=C(E.stencilBuffer,ft),Bt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=Vt(E);_e(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt,ut,E.width,E.height):et?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,ut,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ut,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Bt,s.RENDERBUFFER,O)}else{const it=E.textures;for(let ft=0;ft<it.length;ft++){const ut=it[ft],Bt=c.convert(ut.format,ut.colorSpace),Lt=c.convert(ut.type),kt=U(ut.internalFormat,Bt,Lt,ut.colorSpace),Wt=Vt(E);et&&_e(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,kt,E.width,E.height):_e(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,kt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,kt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xt(O,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=r.get(E.depthTexture);it.__renderTarget=E,(!it.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const ft=it.__webglTexture,ut=Vt(E);if(E.depthTexture.format===tl)_e(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ft,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ft,0);else if(E.depthTexture.format===el)_e(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ft,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function be(O){const E=r.get(O),et=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const it=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),it){const ft=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,it.removeEventListener("dispose",ft)};it.addEventListener("dispose",ft),E.__depthDisposeCallback=ft}E.__boundDepthTexture=it}if(O.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const it=O.texture.mipmaps;it&&it.length>0?Xt(E.__webglFramebuffer[0],O):Xt(E.__webglFramebuffer,O)}else if(et){E.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[it]),E.__webglDepthbuffer[it]===void 0)E.__webglDepthbuffer[it]=s.createRenderbuffer(),re(E.__webglDepthbuffer[it],O,!1);else{const ft=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[it];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,ut)}}else{const it=O.texture.mipmaps;if(it&&it.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),re(E.__webglDepthbuffer,O,!1);else{const ft=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,ut)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(O,E,et){const it=r.get(O);E!==void 0&&wt(it.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),et!==void 0&&be(O)}function ce(O){const E=O.texture,et=r.get(O),it=r.get(E);O.addEventListener("dispose",P);const ft=O.textures,ut=O.isWebGLCubeRenderTarget===!0,Bt=ft.length>1;if(Bt||(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=E.version,d.memory.textures++),ut){et.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Lt]=[];for(let kt=0;kt<E.mipmaps.length;kt++)et.__webglFramebuffer[Lt][kt]=s.createFramebuffer()}else et.__webglFramebuffer[Lt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Lt=0;Lt<E.mipmaps.length;Lt++)et.__webglFramebuffer[Lt]=s.createFramebuffer()}else et.__webglFramebuffer=s.createFramebuffer();if(Bt)for(let Lt=0,kt=ft.length;Lt<kt;Lt++){const Wt=r.get(ft[Lt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),d.memory.textures++)}if(O.samples>0&&_e(O)===!1){et.__webglMultisampledFramebuffer=s.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Lt=0;Lt<ft.length;Lt++){const kt=ft[Lt];et.__webglColorRenderbuffer[Lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,et.__webglColorRenderbuffer[Lt]);const Wt=c.convert(kt.format,kt.colorSpace),Tt=c.convert(kt.type),It=U(kt.internalFormat,Wt,Tt,kt.colorSpace,O.isXRRenderTarget===!0),Zt=Vt(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,It,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,et.__webglColorRenderbuffer[Lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=s.createRenderbuffer(),re(et.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){i.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),_t(s.TEXTURE_CUBE_MAP,E);for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)wt(et.__webglFramebuffer[Lt][kt],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,kt);else wt(et.__webglFramebuffer[Lt],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);y(E)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Bt){for(let Lt=0,kt=ft.length;Lt<kt;Lt++){const Wt=ft[Lt],Tt=r.get(Wt);i.bindTexture(s.TEXTURE_2D,Tt.__webglTexture),_t(s.TEXTURE_2D,Wt),wt(et.__webglFramebuffer,O,Wt,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,0),y(Wt)&&v(s.TEXTURE_2D)}i.unbindTexture()}else{let Lt=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Lt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Lt,it.__webglTexture),_t(Lt,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)wt(et.__webglFramebuffer[kt],O,E,s.COLOR_ATTACHMENT0,Lt,kt);else wt(et.__webglFramebuffer,O,E,s.COLOR_ATTACHMENT0,Lt,0);y(E)&&v(Lt),i.unbindTexture()}O.depthBuffer&&be(O)}function H(O){const E=O.textures;for(let et=0,it=E.length;et<it;et++){const ft=E[et];if(y(ft)){const ut=N(O),Bt=r.get(ft).__webglTexture;i.bindTexture(ut,Bt),v(ut),i.unbindTexture()}}}const le=[],me=[];function oe(O){if(O.samples>0){if(_e(O)===!1){const E=O.textures,et=O.width,it=O.height;let ft=s.COLOR_BUFFER_BIT;const ut=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Bt=r.get(O),Lt=E.length>1;if(Lt)for(let Wt=0;Wt<E.length;Wt++)i.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);const kt=O.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ft|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ft|=s.STENCIL_BUFFER_BIT)),Lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Bt.__webglColorRenderbuffer[Wt]);const Tt=r.get(E[Wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,et,it,0,0,et,it,ft,s.NEAREST),m===!0&&(le.length=0,me.length=0,le.push(s.COLOR_ATTACHMENT0+Wt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(le.push(ut),me.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,me)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,le))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Lt)for(let Wt=0;Wt<E.length;Wt++){i.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,Bt.__webglColorRenderbuffer[Wt]);const Tt=r.get(E[Wt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,Tt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Vt(O){return Math.min(l.maxSamples,O.samples)}function _e(O){const E=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Yt(O){const E=d.render.frame;g.get(O)!==E&&(g.set(O,E),O.update())}function ie(O,E){const et=O.colorSpace,it=O.format,ft=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==Hs&&et!==ja&&(De.getTransfer(et)===He?(it!==Si||ft!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function je(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=ct,this.setTexture2D=ht,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Ee,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=_e}function t2(s,t){function i(r,l=ja){let c;const d=De.getTransfer(l);if(r===Ni)return s.UNSIGNED_BYTE;if(r===up)return s.UNSIGNED_SHORT_4_4_4_4;if(r===fp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===W0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===k0)return s.BYTE;if(r===X0)return s.SHORT;if(r===Jo)return s.UNSIGNED_SHORT;if(r===cp)return s.INT;if(r===Pr)return s.UNSIGNED_INT;if(r===ca)return s.FLOAT;if(r===il)return s.HALF_FLOAT;if(r===q0)return s.ALPHA;if(r===j0)return s.RGB;if(r===Si)return s.RGBA;if(r===tl)return s.DEPTH_COMPONENT;if(r===el)return s.DEPTH_STENCIL;if(r===Y0)return s.RED;if(r===dp)return s.RED_INTEGER;if(r===Z0)return s.RG;if(r===hp)return s.RG_INTEGER;if(r===pp)return s.RGBA_INTEGER;if(r===Xc||r===Wc||r===qc||r===jc)if(d===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Th||r===bh||r===Ah||r===Rh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Th)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ah)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ch||r===wh||r===Dh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ch||r===wh)return d===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Dh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===Bh||r===Ih||r===zh||r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Uh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Oh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ph)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ih)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xh)return d===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yc||r===Wh||r===qh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Yc)return d===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===K0||r===jh||r===Yh||r===Zh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Yc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===jh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$o?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const e2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Vn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Qa({vertexShader:e2,fragmentShader:n2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new iu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a2 extends ks{constructor(t,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,g=null,_=null,x=null,M=null,b=null;const w=new i2,y=i.getContextAttributes();let v=null,N=null;const U=[],C=[],F=new Re;let z=null;const P=new fi;P.viewport=new Je;const V=new fi;V.viewport=new Je;const D=[P,V],A=new bb;let G=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pt=U[Q];return pt===void 0&&(pt=new qd,U[Q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Q){let pt=U[Q];return pt===void 0&&(pt=new qd,U[Q]=pt),pt.getGripSpace()},this.getHand=function(Q){let pt=U[Q];return pt===void 0&&(pt=new qd,U[Q]=pt),pt.getHandSpace()};function lt(Q){const pt=C.indexOf(Q.inputSource);if(pt===-1)return;const Mt=U[pt];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,p||d),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function gt(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",ht);for(let Q=0;Q<U.length;Q++){const pt=C[Q];pt!==null&&(C[Q]=null,U[Q].disconnect(pt))}G=null,ct=null,w.reset(),t.setRenderTarget(v),M=null,x=null,_=null,l=null,N=null,xt.stop(),r.isPresenting=!1,t.setPixelRatio(z),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await i.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ct=null,wt=null;y.depth&&(wt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=y.stencil?el:tl,Ct=y.stencil?$o:Pr);const re={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:c};_=new XRWebGLBinding(l,i),x=_.createProjectionLayer(re),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),N=new Br(x.textureWidth,x.textureHeight,{format:Si,type:Ni,depthTexture:new cx(x.textureWidth,x.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Br(M.framebufferWidth,M.framebufferHeight,{format:Si,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),xt.setContext(l),xt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ht(Q){for(let pt=0;pt<Q.removed.length;pt++){const Mt=Q.removed[pt],Ct=C.indexOf(Mt);Ct>=0&&(C[Ct]=null,U[Ct].disconnect(Mt))}for(let pt=0;pt<Q.added.length;pt++){const Mt=Q.added[pt];let Ct=C.indexOf(Mt);if(Ct===-1){for(let re=0;re<U.length;re++)if(re>=C.length){C.push(Mt),Ct=re;break}else if(C[re]===null){C[re]=Mt,Ct=re;break}if(Ct===-1)break}const wt=U[Ct];wt&&wt.connect(Mt)}}const B=new at,Z=new at;function W(Q,pt,Mt){B.setFromMatrixPosition(pt.matrixWorld),Z.setFromMatrixPosition(Mt.matrixWorld);const Ct=B.distanceTo(Z),wt=pt.projectionMatrix.elements,re=Mt.projectionMatrix.elements,Xt=wt[14]/(wt[10]-1),be=wt[14]/(wt[10]+1),Ee=(wt[9]+1)/wt[5],ce=(wt[9]-1)/wt[5],H=(wt[8]-1)/wt[0],le=(re[8]+1)/re[0],me=Xt*H,oe=Xt*le,Vt=Ct/(-H+le),_e=Vt*-H;if(pt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(_e),Q.translateZ(Vt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),wt[10]===-1)Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Yt=Xt+Vt,ie=be+Vt,je=me-_e,O=oe+(Ct-_e),E=Ee*be/ie*Yt,et=ce*be/ie*Yt;Q.projectionMatrix.makePerspective(je,O,E,et,Yt,ie),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Et(Q,pt){pt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let pt=Q.near,Mt=Q.far;w.texture!==null&&(w.depthNear>0&&(pt=w.depthNear),w.depthFar>0&&(Mt=w.depthFar)),A.near=V.near=P.near=pt,A.far=V.far=P.far=Mt,(G!==A.near||ct!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),G=A.near,ct=A.far),P.layers.mask=Q.layers.mask|2,V.layers.mask=Q.layers.mask|4,A.layers.mask=P.layers.mask|V.layers.mask;const Ct=Q.parent,wt=A.cameras;Et(A,Ct);for(let re=0;re<wt.length;re++)Et(wt[re],Ct);wt.length===2?W(A,P,V):A.projectionMatrix.copy(P.projectionMatrix),L(Q,A,Ct)};function L(Q,pt,Mt){Mt===null?Q.matrix.copy(pt.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Kh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let J=null;function _t(Q,pt){if(g=pt.getViewerPose(p||d),b=pt,g!==null){const Mt=g.views;M!==null&&(t.setRenderTargetFramebuffer(N,M.framebuffer),t.setRenderTarget(N));let Ct=!1;Mt.length!==A.cameras.length&&(A.cameras.length=0,Ct=!0);for(let Xt=0;Xt<Mt.length;Xt++){const be=Mt[Xt];let Ee=null;if(M!==null)Ee=M.getViewport(be);else{const H=_.getViewSubImage(x,be);Ee=H.viewport,Xt===0&&(t.setRenderTargetTextures(N,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(N))}let ce=D[Xt];ce===void 0&&(ce=new fi,ce.layers.enable(Xt),ce.viewport=new Je,D[Xt]=ce),ce.matrix.fromArray(be.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(be.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Xt===0&&(A.matrix.copy(ce.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ct===!0&&A.cameras.push(ce)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Xt=_.getDepthInformation(Mt[0]);Xt&&Xt.isValid&&Xt.texture&&w.init(t,Xt,l.renderState)}}for(let Mt=0;Mt<U.length;Mt++){const Ct=C[Mt],wt=U[Mt];Ct!==null&&wt!==void 0&&wt.update(Ct,pt,p||d)}J&&J(Q,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),b=null}const xt=new dx;xt.setAnimationLoop(_t),this.setAnimationLoop=function(Q){J=Q},this.dispose=function(){}}}const Er=new Oi,r2=new $e;function s2(s,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,sx(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,N,U,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&M(y,v,C)):v.isMeshMatcapMaterial?(c(y,v),b(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),w(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,N,U):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Gn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Gn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const N=t.get(v),U=N.envMap,C=N.envMapRotation;U&&(y.envMap.value=U,Er.copy(C),Er.x*=-1,Er.y*=-1,Er.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),y.envMapRotation.value.setFromMatrix4(r2.makeRotationFromEuler(Er)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,N,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*N,y.scale.value=U*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,N){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const N=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function o2(s,t,i,r){let l={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,U){const C=U.program;r.uniformBlockBinding(N,C)}function p(N,U){let C=l[N.id];C===void 0&&(b(N),C=g(N),l[N.id]=C,N.addEventListener("dispose",y));const F=U.program;r.updateUBOMapping(N,F);const z=t.render.frame;c[N.id]!==z&&(x(N),c[N.id]=z)}function g(N){const U=_();N.__bindingPointIndex=U;const C=s.createBuffer(),F=N.__size,z=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,F,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,C),C}function _(){for(let N=0;N<h;N++)if(d.indexOf(N)===-1)return d.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const U=l[N.id],C=N.uniforms,F=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let z=0,P=C.length;z<P;z++){const V=Array.isArray(C[z])?C[z]:[C[z]];for(let D=0,A=V.length;D<A;D++){const G=V[D];if(M(G,z,D,F)===!0){const ct=G.__offset,lt=Array.isArray(G.value)?G.value:[G.value];let gt=0;for(let ht=0;ht<lt.length;ht++){const B=lt[ht],Z=w(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,ct+gt,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ct,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(N,U,C,F){const z=N.value,P=U+"_"+C;if(F[P]===void 0)return typeof z=="number"||typeof z=="boolean"?F[P]=z:F[P]=z.clone(),!0;{const V=F[P];if(typeof z=="number"||typeof z=="boolean"){if(V!==z)return F[P]=z,!0}else if(V.equals(z)===!1)return V.copy(z),!0}return!1}function b(N){const U=N.uniforms;let C=0;const F=16;for(let P=0,V=U.length;P<V;P++){const D=Array.isArray(U[P])?U[P]:[U[P]];for(let A=0,G=D.length;A<G;A++){const ct=D[A],lt=Array.isArray(ct.value)?ct.value:[ct.value];for(let gt=0,ht=lt.length;gt<ht;gt++){const B=lt[gt],Z=w(B),W=C%F,Et=W%Z.boundary,L=W+Et;C+=Et,L!==0&&F-L<Z.storage&&(C+=F-L),ct.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=C,C+=Z.storage}}}const z=C%F;return z>0&&(C+=F-z),N.__size=C,N.__cache={},this}function w(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function y(N){const U=N.target;U.removeEventListener("dispose",y);const C=d.indexOf(U.__bindingPointIndex);d.splice(C,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const N in l)s.deleteBuffer(l[N]);d=[],l={},c={}}return{bind:m,update:p,dispose:v}}class l2{constructor(t={}){const{canvas:i=HT(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const b=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const N=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let F=!1;this._outputColorSpace=ui;let z=0,P=0,V=null,D=-1,A=null;const G=new Je,ct=new Je;let lt=null;const gt=new Ne(0);let ht=0,B=i.width,Z=i.height,W=1,Et=null,L=null;const J=new Je(0,0,B,Z),_t=new Je(0,0,B,Z);let xt=!1;const Q=new _p;let pt=!1,Mt=!1;const Ct=new $e,wt=new $e,re=new at,Xt=new Je,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function ce(){return V===null?W:1}let H=r;function le(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${lp}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",St,!1),H===null){const Y="webgl2";if(H=le(Y,R),H===null)throw le(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let me,oe,Vt,_e,Yt,ie,je,O,E,et,it,ft,ut,Bt,Lt,kt,Wt,Tt,It,Zt,Kt,Dt,se,X;function Nt(){me=new vR(H),me.init(),Dt=new t2(H,me),oe=new fR(H,me,t,Dt),Vt=new JC(H,me),oe.reverseDepthBuffer&&x&&Vt.buffers.depth.setReversed(!0),_e=new yR(H),Yt=new FC,ie=new $C(H,me,Vt,Yt,oe,Dt,_e),je=new hR(C),O=new _R(C),E=new Rb(H),se=new cR(H,E),et=new xR(H,E,_e,se),it=new ER(H,et,E,_e),It=new MR(H,oe,ie),kt=new dR(Yt),ft=new zC(C,je,O,me,oe,se,kt),ut=new s2(C,Yt),Bt=new GC,Lt=new jC(me),Tt=new lR(C,je,O,Vt,it,M,m),Wt=new KC(C,it,oe),X=new o2(H,_e,oe,Vt),Zt=new uR(H,me,_e),Kt=new SR(H,me,_e),_e.programs=ft.programs,C.capabilities=oe,C.extensions=me,C.properties=Yt,C.renderLists=Bt,C.shadowMap=Wt,C.state=Vt,C.info=_e}Nt();const bt=new a2(C,H);this.xr=bt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(B,Z,!1))},this.getSize=function(R){return R.set(B,Z)},this.setSize=function(R,Y,st=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Z=Y,i.width=Math.floor(R*W),i.height=Math.floor(Y*W),st===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(B*W,Z*W).floor()},this.setDrawingBufferSize=function(R,Y,st){B=R,Z=Y,W=st,i.width=Math.floor(R*st),i.height=Math.floor(Y*st),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,Y,st,ot){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,Y,st,ot),Vt.viewport(G.copy(J).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(_t)},this.setScissor=function(R,Y,st,ot){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,Y,st,ot),Vt.scissor(ct.copy(_t).multiplyScalar(W).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){Vt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,st=!0){let ot=0;if(R){let K=!1;if(V!==null){const At=V.texture.format;K=At===pp||At===hp||At===dp}if(K){const At=V.texture.type,Ut=At===Ni||At===Pr||At===Jo||At===$o||At===up||At===fp,Pt=Tt.getClearColor(),Ft=Tt.getClearAlpha(),te=Pt.r,Qt=Pt.g,qt=Pt.b;Ut?(b[0]=te,b[1]=Qt,b[2]=qt,b[3]=Ft,H.clearBufferuiv(H.COLOR,0,b)):(w[0]=te,w[1]=Qt,w[2]=qt,w[3]=Ft,H.clearBufferiv(H.COLOR,0,w))}else ot|=H.COLOR_BUFFER_BIT}Y&&(ot|=H.DEPTH_BUFFER_BIT),st&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",St,!1),Tt.dispose(),Bt.dispose(),Lt.dispose(),Yt.dispose(),je.dispose(),O.dispose(),it.dispose(),se.dispose(),X.dispose(),ft.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",on),bt.removeEventListener("sessionend",xn),Pn.stop()};function zt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=_e.autoReset,Y=Wt.enabled,st=Wt.autoUpdate,ot=Wt.needsUpdate,K=Wt.type;Nt(),_e.autoReset=R,Wt.enabled=Y,Wt.autoUpdate=st,Wt.needsUpdate=ot,Wt.type=K}function St(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ht(R){const Y=R.target;Y.removeEventListener("dispose",Ht),ae(Y)}function ae(R){Oe(R),Yt.remove(R)}function Oe(R){const Y=Yt.get(R).programs;Y!==void 0&&(Y.forEach(function(st){ft.releaseProgram(st)}),R.isShaderMaterial&&ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,st,ot,K,At){Y===null&&(Y=be);const Ut=K.isMesh&&K.matrixWorld.determinant()<0,Pt=er(R,Y,st,ot,K);Vt.setMaterial(ot,Ut);let Ft=st.index,te=1;if(ot.wireframe===!0){if(Ft=et.getWireframeAttribute(st),Ft===void 0)return;te=2}const Qt=st.drawRange,qt=st.attributes.position;let he=Qt.start*te,Ue=(Qt.start+Qt.count)*te;At!==null&&(he=Math.max(he,At.start*te),Ue=Math.min(Ue,(At.start+At.count)*te)),Ft!==null?(he=Math.max(he,0),Ue=Math.min(Ue,Ft.count)):qt!=null&&(he=Math.max(he,0),Ue=Math.min(Ue,qt.count));const ke=Ue-he;if(ke<0||ke===1/0)return;se.setup(K,ot,Pt,st,Ft);let Se,ye=Zt;if(Ft!==null&&(Se=E.get(Ft),ye=Kt,ye.setIndex(Se)),K.isMesh)ot.wireframe===!0?(Vt.setLineWidth(ot.wireframeLinewidth*ce()),ye.setMode(H.LINES)):ye.setMode(H.TRIANGLES);else if(K.isLine){let Jt=ot.linewidth;Jt===void 0&&(Jt=1),Vt.setLineWidth(Jt*ce()),K.isLineSegments?ye.setMode(H.LINES):K.isLineLoop?ye.setMode(H.LINE_LOOP):ye.setMode(H.LINE_STRIP)}else K.isPoints?ye.setMode(H.POINTS):K.isSprite&&ye.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Ps("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))ye.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Jt=K._multiDrawStarts,Ze=K._multiDrawCounts,Ae=K._multiDrawCount,bn=Ft?E.get(Ft).bytesPerElement:1,_a=Yt.get(ot).currentProgram.getUniforms();for(let Xe=0;Xe<Ae;Xe++)_a.setValue(H,"_gl_DrawID",Xe),ye.render(Jt[Xe]/bn,Ze[Xe])}else if(K.isInstancedMesh)ye.renderInstances(he,ke,K.count);else if(st.isInstancedBufferGeometry){const Jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ze=Math.min(st.instanceCount,Jt);ye.renderInstances(he,ke,Ze)}else ye.render(he,ke)};function Ce(R,Y,st){R.transparent===!0&&R.side===oa&&R.forceSinglePass===!1?(R.side=Gn,R.needsUpdate=!0,ma(R,Y,st),R.side=Ka,R.needsUpdate=!0,ma(R,Y,st),R.side=oa):ma(R,Y,st)}this.compile=function(R,Y,st=null){st===null&&(st=R),v=Lt.get(st),v.init(Y),U.push(v),st.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),R!==st&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const ot=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const At=K.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){const Pt=At[Ut];Ce(Pt,st,K),ot.add(Pt)}else Ce(At,st,K),ot.add(At)}),v=U.pop(),ot},this.compileAsync=function(R,Y,st=null){const ot=this.compile(R,Y,st);return new Promise(K=>{function At(){if(ot.forEach(function(Ut){Yt.get(Ut).currentProgram.isReady()&&ot.delete(Ut)}),ot.size===0){K(R);return}setTimeout(At,10)}me.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let kn=null;function hn(R){kn&&kn(R)}function on(){Pn.stop()}function xn(){Pn.start()}const Pn=new dx;Pn.setAnimationLoop(hn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(R){kn=R,bt.setAnimationLoop(R),R===null?Pn.stop():Pn.start()},bt.addEventListener("sessionstart",on),bt.addEventListener("sessionend",xn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(Y),Y=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,V),v=Lt.get(R,U.length),v.init(Y),U.push(v),wt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(wt),Mt=this.localClippingEnabled,pt=kt.init(this.clippingPlanes,Mt),y=Bt.get(R,N.length),y.init(),N.push(y),bt.enabled===!0&&bt.isPresenting===!0){const At=C.xr.getDepthSensingMesh();At!==null&&$a(At,Y,-1/0,C.sortObjects)}$a(R,Y,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(Et,L),Ee=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Ee&&Tt.addToRenderList(y,R),this.info.render.frame++,pt===!0&&kt.beginShadows();const st=v.state.shadowsArray;Wt.render(st,R,Y),pt===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,K=y.transmissive;if(v.setupLights(),Y.isArrayCamera){const At=Y.cameras;if(K.length>0)for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const Ft=At[Ut];ul(ot,K,R,Ft)}Ee&&Tt.render(R);for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const Ft=At[Ut];cl(y,R,Ft,Ft.viewport)}}else K.length>0&&ul(ot,K,R,Y),Ee&&Tt.render(R),cl(y,R,Y);V!==null&&P===0&&(ie.updateMultisampleRenderTarget(V),ie.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(C,R,Y),se.resetDefaultState(),D=-1,A=null,U.pop(),U.length>0?(v=U[U.length-1],pt===!0&&kt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function $a(R,Y,st,ot){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){ot&&Xt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(wt);const Ut=it.update(R),Pt=R.material;Pt.visible&&y.push(R,Ut,Pt,st,Xt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ut=it.update(R),Pt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Xt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Xt.copy(Ut.boundingSphere.center)),Xt.applyMatrix4(R.matrixWorld).applyMatrix4(wt)),Array.isArray(Pt)){const Ft=Ut.groups;for(let te=0,Qt=Ft.length;te<Qt;te++){const qt=Ft[te],he=Pt[qt.materialIndex];he&&he.visible&&y.push(R,Ut,he,st,Xt.z,qt)}}else Pt.visible&&y.push(R,Ut,Pt,st,Xt.z,null)}}const At=R.children;for(let Ut=0,Pt=At.length;Ut<Pt;Ut++)$a(At[Ut],Y,st,ot)}function cl(R,Y,st,ot){const K=R.opaque,At=R.transmissive,Ut=R.transparent;v.setupLightsView(st),pt===!0&&kt.setGlobalState(C.clippingPlanes,st),ot&&Vt.viewport(G.copy(ot)),K.length>0&&tr(K,Y,st),At.length>0&&tr(At,Y,st),Ut.length>0&&tr(Ut,Y,st),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function ul(R,Y,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ot.id]===void 0&&(v.state.transmissionRenderTarget[ot.id]=new Br(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?il:Ni,minFilter:Nr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const At=v.state.transmissionRenderTarget[ot.id],Ut=ot.viewport||G;At.setSize(Ut.z*C.transmissionResolutionScale,Ut.w*C.transmissionResolutionScale);const Pt=C.getRenderTarget();C.setRenderTarget(At),C.getClearColor(gt),ht=C.getClearAlpha(),ht<1&&C.setClearColor(16777215,.5),C.clear(),Ee&&Tt.render(st);const Ft=C.toneMapping;C.toneMapping=Za;const te=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),v.setupLightsView(ot),pt===!0&&kt.setGlobalState(C.clippingPlanes,ot),tr(R,st,ot),ie.updateMultisampleRenderTarget(At),ie.updateRenderTargetMipmap(At),me.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let qt=0,he=Y.length;qt<he;qt++){const Ue=Y[qt],ke=Ue.object,Se=Ue.geometry,ye=Ue.material,Jt=Ue.group;if(ye.side===oa&&ke.layers.test(ot.layers)){const Ze=ye.side;ye.side=Gn,ye.needsUpdate=!0,pa(ke,st,ot,Se,ye,Jt),ye.side=Ze,ye.needsUpdate=!0,Qt=!0}}Qt===!0&&(ie.updateMultisampleRenderTarget(At),ie.updateRenderTargetMipmap(At))}C.setRenderTarget(Pt),C.setClearColor(gt,ht),te!==void 0&&(ot.viewport=te),C.toneMapping=Ft}function tr(R,Y,st){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,At=R.length;K<At;K++){const Ut=R[K],Pt=Ut.object,Ft=Ut.geometry,te=Ut.group;let Qt=Ut.material;Qt.allowOverride===!0&&ot!==null&&(Qt=ot),Pt.layers.test(st.layers)&&pa(Pt,Y,st,Ft,Qt,te)}}function pa(R,Y,st,ot,K,At){R.onBeforeRender(C,Y,st,ot,K,At),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,Y,st,ot,R,At),K.transparent===!0&&K.side===oa&&K.forceSinglePass===!1?(K.side=Gn,K.needsUpdate=!0,C.renderBufferDirect(st,Y,ot,K,R,At),K.side=Ka,K.needsUpdate=!0,C.renderBufferDirect(st,Y,ot,K,R,At),K.side=oa):C.renderBufferDirect(st,Y,ot,K,R,At),R.onAfterRender(C,Y,st,ot,K,At)}function ma(R,Y,st){Y.isScene!==!0&&(Y=be);const ot=Yt.get(R),K=v.state.lights,At=v.state.shadowsArray,Ut=K.state.version,Pt=ft.getParameters(R,K.state,At,Y,st),Ft=ft.getProgramCacheKey(Pt);let te=ot.programs;ot.environment=R.isMeshStandardMaterial?Y.environment:null,ot.fog=Y.fog,ot.envMap=(R.isMeshStandardMaterial?O:je).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",Ht),te=new Map,ot.programs=te);let Qt=te.get(Ft);if(Qt!==void 0){if(ot.currentProgram===Qt&&ot.lightsStateVersion===Ut)return Bi(R,Pt),Qt}else Pt.uniforms=ft.getUniforms(R),R.onBeforeCompile(Pt,C),Qt=ft.acquireProgram(Pt,Ft),te.set(Ft,Qt),ot.uniforms=Pt.uniforms;const qt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=kt.uniform),Bi(R,Pt),ot.needsLights=nn(R),ot.lightsStateVersion=Ut,ot.needsLights&&(qt.ambientLightColor.value=K.state.ambient,qt.lightProbe.value=K.state.probe,qt.directionalLights.value=K.state.directional,qt.directionalLightShadows.value=K.state.directionalShadow,qt.spotLights.value=K.state.spot,qt.spotLightShadows.value=K.state.spotShadow,qt.rectAreaLights.value=K.state.rectArea,qt.ltc_1.value=K.state.rectAreaLTC1,qt.ltc_2.value=K.state.rectAreaLTC2,qt.pointLights.value=K.state.point,qt.pointLightShadows.value=K.state.pointShadow,qt.hemisphereLights.value=K.state.hemi,qt.directionalShadowMap.value=K.state.directionalShadowMap,qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qt.spotShadowMap.value=K.state.spotShadowMap,qt.spotLightMatrix.value=K.state.spotLightMatrix,qt.spotLightMap.value=K.state.spotLightMap,qt.pointShadowMap.value=K.state.pointShadowMap,qt.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=Qt,ot.uniformsList=null,Qt}function Pi(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Zc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Bi(R,Y){const st=Yt.get(R);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function er(R,Y,st,ot,K){Y.isScene!==!0&&(Y=be),ie.resetTextureUnits();const At=Y.fog,Ut=ot.isMeshStandardMaterial?Y.environment:null,Pt=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Hs,Ft=(ot.isMeshStandardMaterial?O:je).get(ot.envMap||Ut),te=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Qt=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),qt=!!st.morphAttributes.position,he=!!st.morphAttributes.normal,Ue=!!st.morphAttributes.color;let ke=Za;ot.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ke=C.toneMapping);const Se=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ye=Se!==void 0?Se.length:0,Jt=Yt.get(ot),Ze=v.state.lights;if(pt===!0&&(Mt===!0||R!==A)){const pn=R===A&&ot.id===D;kt.setState(ot,R,pn)}let Ae=!1;ot.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ze.state.version||Jt.outputColorSpace!==Pt||K.isBatchedMesh&&Jt.batching===!1||!K.isBatchedMesh&&Jt.batching===!0||K.isBatchedMesh&&Jt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Jt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Jt.instancing===!1||!K.isInstancedMesh&&Jt.instancing===!0||K.isSkinnedMesh&&Jt.skinning===!1||!K.isSkinnedMesh&&Jt.skinning===!0||K.isInstancedMesh&&Jt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Jt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Jt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Jt.instancingMorph===!1&&K.morphTexture!==null||Jt.envMap!==Ft||ot.fog===!0&&Jt.fog!==At||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==kt.numPlanes||Jt.numIntersection!==kt.numIntersection)||Jt.vertexAlphas!==te||Jt.vertexTangents!==Qt||Jt.morphTargets!==qt||Jt.morphNormals!==he||Jt.morphColors!==Ue||Jt.toneMapping!==ke||Jt.morphTargetsCount!==ye)&&(Ae=!0):(Ae=!0,Jt.__version=ot.version);let bn=Jt.currentProgram;Ae===!0&&(bn=ma(ot,Y,K));let _a=!1,Xe=!1,zi=!1;const Ge=bn.getUniforms(),An=Jt.uniforms;if(Vt.useProgram(bn.program)&&(_a=!0,Xe=!0,zi=!0),ot.id!==D&&(D=ot.id,Xe=!0),_a||A!==R){Vt.buffers.depth.getReversed()?(Ct.copy(R.projectionMatrix),VT(Ct),kT(Ct),Ge.setValue(H,"projectionMatrix",Ct)):Ge.setValue(H,"projectionMatrix",R.projectionMatrix),Ge.setValue(H,"viewMatrix",R.matrixWorldInverse);const Sn=Ge.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,re.setFromMatrixPosition(R.matrixWorld)),oe.logarithmicDepthBuffer&&Ge.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ge.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,Xe=!0,zi=!0)}if(K.isSkinnedMesh){Ge.setOptional(H,K,"bindMatrix"),Ge.setOptional(H,K,"bindMatrixInverse");const pn=K.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ge.setValue(H,"boneTexture",pn.boneTexture,ie))}K.isBatchedMesh&&(Ge.setOptional(H,K,"batchingTexture"),Ge.setValue(H,"batchingTexture",K._matricesTexture,ie),Ge.setOptional(H,K,"batchingIdTexture"),Ge.setValue(H,"batchingIdTexture",K._indirectTexture,ie),Ge.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Ge.setValue(H,"batchingColorTexture",K._colorsTexture,ie));const ln=st.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&It.update(K,st,bn),(Xe||Jt.receiveShadow!==K.receiveShadow)&&(Jt.receiveShadow=K.receiveShadow,Ge.setValue(H,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(An.envMap.value=Ft,An.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Y.environment!==null&&(An.envMapIntensity.value=Y.environmentIntensity),Xe&&(Ge.setValue(H,"toneMappingExposure",C.toneMappingExposure),Jt.needsLights&&ga(An,zi),At&&ot.fog===!0&&ut.refreshFogUniforms(An,At),ut.refreshMaterialUniforms(An,ot,W,Z,v.state.transmissionRenderTarget[R.id]),Zc.upload(H,Pi(Jt),An,ie)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Zc.upload(H,Pi(Jt),An,ie),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ge.setValue(H,"center",K.center),Ge.setValue(H,"modelViewMatrix",K.modelViewMatrix),Ge.setValue(H,"normalMatrix",K.normalMatrix),Ge.setValue(H,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const pn=ot.uniformsGroups;for(let Sn=0,Mi=pn.length;Sn<Mi;Sn++){const Fi=pn[Sn];X.update(Fi,bn),X.bind(Fi,bn)}}return bn}function ga(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function nn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,Y,st){const ot=Yt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Yt.get(R.texture).__webglTexture=Y,Yt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const st=Yt.get(R);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0};const fl=H.createFramebuffer();this.setRenderTarget=function(R,Y=0,st=0){V=R,z=Y,P=st;let ot=!0,K=null,At=!1,Ut=!1;if(R){const Ft=Yt.get(R);if(Ft.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1;else if(Ft.__webglFramebuffer===void 0)ie.setupRenderTarget(R);else if(Ft.__hasExternalTextures)ie.rebindTextures(R,Yt.get(R.texture).__webglTexture,Yt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qt=R.depthTexture;if(Ft.__boundDepthTexture!==qt){if(qt!==null&&Yt.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ut=!0);const Qt=Yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[Y])?K=Qt[Y][st]:K=Qt[Y],At=!0):R.samples>0&&ie.useMultisampledRTT(R)===!1?K=Yt.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?K=Qt[st]:K=Qt,G.copy(R.viewport),ct.copy(R.scissor),lt=R.scissorTest}else G.copy(J).multiplyScalar(W).floor(),ct.copy(_t).multiplyScalar(W).floor(),lt=xt;if(st!==0&&(K=fl),Vt.bindFramebuffer(H.FRAMEBUFFER,K)&&ot&&Vt.drawBuffers(R,K),Vt.viewport(G),Vt.scissor(ct),Vt.setScissorTest(lt),At){const Ft=Yt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ft.__webglTexture,st)}else if(Ut){const Ft=Yt.get(R.texture),te=Y;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ft.__webglTexture,st,te)}else if(R!==null&&st!==0){const Ft=Yt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ft.__webglTexture,st)}D=-1},this.readRenderTargetPixels=function(R,Y,st,ot,K,At,Ut,Pt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){Vt.bindFramebuffer(H.FRAMEBUFFER,Ft);try{const te=R.textures[Pt],Qt=te.format,qt=te.type;if(!oe.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ot&&st>=0&&st<=R.height-K&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pt),H.readPixels(Y,st,ot,K,Dt.convert(Qt),Dt.convert(qt),At))}finally{const te=V!==null?Yt.get(V).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,Y,st,ot,K,At,Ut,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft)if(Y>=0&&Y<=R.width-ot&&st>=0&&st<=R.height-K){Vt.bindFramebuffer(H.FRAMEBUFFER,Ft);const te=R.textures[Pt],Qt=te.format,qt=te.type;if(!oe.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,he),H.bufferData(H.PIXEL_PACK_BUFFER,At.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pt),H.readPixels(Y,st,ot,K,Dt.convert(Qt),Dt.convert(qt),0);const Ue=V!==null?Yt.get(V).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,Ue);const ke=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await GT(H,ke,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,he),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,At),H.deleteBuffer(he),H.deleteSync(ke),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,st=0){const ot=Math.pow(2,-st),K=Math.floor(R.image.width*ot),At=Math.floor(R.image.height*ot),Ut=Y!==null?Y.x:0,Pt=Y!==null?Y.y:0;ie.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,st,0,0,Ut,Pt,K,At),Vt.unbindTexture()};const dl=H.createFramebuffer(),Ii=H.createFramebuffer();this.copyTextureToTexture=function(R,Y,st=null,ot=null,K=0,At=null){At===null&&(K!==0?(Ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=K,K=0):At=0);let Ut,Pt,Ft,te,Qt,qt,he,Ue,ke;const Se=R.isCompressedTexture?R.mipmaps[At]:R.image;if(st!==null)Ut=st.max.x-st.min.x,Pt=st.max.y-st.min.y,Ft=st.isBox3?st.max.z-st.min.z:1,te=st.min.x,Qt=st.min.y,qt=st.isBox3?st.min.z:0;else{const ln=Math.pow(2,-K);Ut=Math.floor(Se.width*ln),Pt=Math.floor(Se.height*ln),R.isDataArrayTexture?Ft=Se.depth:R.isData3DTexture?Ft=Math.floor(Se.depth*ln):Ft=1,te=0,Qt=0,qt=0}ot!==null?(he=ot.x,Ue=ot.y,ke=ot.z):(he=0,Ue=0,ke=0);const ye=Dt.convert(Y.format),Jt=Dt.convert(Y.type);let Ze;Y.isData3DTexture?(ie.setTexture3D(Y,0),Ze=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ie.setTexture2DArray(Y,0),Ze=H.TEXTURE_2D_ARRAY):(ie.setTexture2D(Y,0),Ze=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ae=H.getParameter(H.UNPACK_ROW_LENGTH),bn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),_a=H.getParameter(H.UNPACK_SKIP_PIXELS),Xe=H.getParameter(H.UNPACK_SKIP_ROWS),zi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Se.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Se.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,te),H.pixelStorei(H.UNPACK_SKIP_ROWS,Qt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qt);const Ge=R.isDataArrayTexture||R.isData3DTexture,An=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const ln=Yt.get(R),pn=Yt.get(Y),Sn=Yt.get(ln.__renderTarget),Mi=Yt.get(pn.__renderTarget);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Fi=0;Fi<Ft;Fi++)Ge&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.get(R).__webglTexture,K,qt+Fi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.get(Y).__webglTexture,At,ke+Fi)),H.blitFramebuffer(te,Qt,Ut,Pt,he,Ue,Ut,Pt,H.DEPTH_BUFFER_BIT,H.NEAREST);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Yt.has(R)){const ln=Yt.get(R),pn=Yt.get(Y);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,dl),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ii);for(let Sn=0;Sn<Ft;Sn++)Ge?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ln.__webglTexture,K,qt+Sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ln.__webglTexture,K),An?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,At,ke+Sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,At),K!==0?H.blitFramebuffer(te,Qt,Ut,Pt,he,Ue,Ut,Pt,H.COLOR_BUFFER_BIT,H.NEAREST):An?H.copyTexSubImage3D(Ze,At,he,Ue,ke+Sn,te,Qt,Ut,Pt):H.copyTexSubImage2D(Ze,At,he,Ue,te,Qt,Ut,Pt);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Ze,At,he,Ue,ke,Ut,Pt,Ft,ye,Jt,Se.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Ze,At,he,Ue,ke,Ut,Pt,Ft,ye,Se.data):H.texSubImage3D(Ze,At,he,Ue,ke,Ut,Pt,Ft,ye,Jt,Se):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,At,he,Ue,Ut,Pt,ye,Jt,Se.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,At,he,Ue,Se.width,Se.height,ye,Se.data):H.texSubImage2D(H.TEXTURE_2D,At,he,Ue,Ut,Pt,ye,Jt,Se);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ae),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,bn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,_a),H.pixelStorei(H.UNPACK_SKIP_ROWS,Xe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,zi),At===0&&Y.generateMipmaps&&H.generateMipmap(Ze),Vt.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,st=null,ot=null,K=0){return Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,st,ot,K)},this.initRenderTarget=function(R){Yt.get(R).__webglFramebuffer===void 0&&ie.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ie.setTextureCube(R,0):R.isData3DTexture?ie.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ie.setTexture2DArray(R,0):ie.setTexture2D(R,0),Vt.unbindTexture()},this.resetState=function(){z=0,P=0,V=null,Vt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const Un={name:"NITESH GIRI",title:"SOFTWARE DEVELOPER",professionalSummary:"I specialize in crafting robust web applications and RESTful APIs using Node.js and React.js, adept in both front-end and back-end development. My expertise extends to the unique requirements of the Hospital and Telecom domains. Currently Working as a Software Developer with SilfraTechnologies Since May 2023 to till date.",aboutTextFull:"I'm a skilled software developer with 3.4 years experience specializing in web technologies, with expertise in React for front-end development and Node.js for building scalable back-end systems. I create seamless, enterprise-level applications by integrating these technologies to deliver user friendly solutions. I’m a strong problem-solver who excels in collaborative environments, ensuring that my work meets both technical and user requirements.",workExperience:[{title:"Software Developer",company:"SilfraTechnologies",duration:"May 2023 - Till Date",description:["Developed a multi-tenant Hospital Management System (HIMS) using React.js, Node.js, and MySQL.","Built and maintained BatteryIQ, a vehicle data and battery visualization platform, with React.js, Node.js, and MySQL for real-time insights.","Created the Apprentice mobile app in Flutter with a Node.js backend, managing apprentice activities and monitoring roles for candidates and employers.","HRMS: Worked on maintaining and updating a React.js and Node.js web app, including Google Gantt chart integrations with MySQL.","Cardiologist App: Managed and enhanced a C# mobile app for cardiologist, addressing bugs and implementing feature improvements.","AIChat: Improved AI models with Azure API for better performance. Added features so users can raise issues with screen recordings and attach screenshots in chat."]},{title:"Junior Developer",company:"Previous Company Inc.",duration:"Jan 2022 - April 2023",description:["Assisted in the development and maintenance of internal web applications using React and Python.","Contributed to database design and optimization for small-scale projects.","Participated in code reviews and learned best practices in software development lifecycle."]}],rolesAndResponsibilities:["Requirement Task planning and Designing","Created and executed the test cases for various scenarios, and participated actively in Functional Testing, validation testing, Usability","Involved in preparation of daily and weekly status reports.","Interacting with developers in resolving the bugs.","Analyze customer requirement","Designing and Executing test cases from the Functional specifications.","Interact with developers and discuss technical problems, Bugs Tracking and Generating Reports."],education:[{degree:"Bachelor of Technology",institution:"SRTM University",year:"2021"}],technicalProficiency:{"Programming Languages":[{name:"Node-JS",proficiency:90},{name:"Python",proficiency:75}],Frameworks:[{name:"React",proficiency:95},{name:"Bootstrap",proficiency:80},{name:"Express.js",proficiency:85},{name:"Flask",proficiency:70}],Databases:[{name:"MySQL",proficiency:88}],Tools:[{name:"Postman",proficiency:92}],"Operating Systems":[{name:"Windows",proficiency:90},{name:"Linux",proficiency:70}],"IDE/Editors":[{name:"Visual Studio Code",proficiency:95},{name:"VS Code",proficiency:95},{name:"Sublime Text",proficiency:70},{name:"Notepad++",proficiency:60},{name:"WebStorm",proficiency:80}]},projects:[{title:"E-commerce Platform Backend",description:"Developed a scalable RESTful API for an e-commerce platform handling user authentication, product catalog, shopping cart, and order processing. Implemented secure payment gateway integrations.",technologies:["Node.js","Express.js","MongoDB","JWT"],githubLink:"https://github.com/yourusername/ecommerce-backend",liveDemoLink:null,imageUrl:"https://placehold.co/600x400/333333/E0E0E0?text=E-commerce+Backend",problem:"The client needed a robust, secure, and scalable backend for their new e-commerce venture that could handle a large product catalog and high transaction volumes.",solution:"I designed and implemented a RESTful API using Node.js and Express.js, integrating MongoDB for data storage. Focused on modular architecture for scalability. Implemented JWT for secure authentication and authorization.",yourRole:"Lead Backend Developer. Responsible for API design, database schema, security implementation, and integrating third-party payment gateways.",impact:"Successfully launched the platform, supporting over 10,000 product listings and processing hundreds of transactions daily without performance degradation. Achieved a 99.9% uptime record.",learnings:"Gained deep insights into API security best practices, asynchronous programming in Node.js, and optimizing MongoDB queries for large datasets."},{title:"Personal Blog Application",description:"A full-stack blog application featuring user authentication, post creation, editing, and commenting. Built with a modern UI and SEO-friendly routing.",technologies:["React","Next.js","Tailwind CSS","Firebase"],githubLink:"https://github.com/yourusername/blog-app",liveDemoLink:"https://yourblog.vercel.app",imageUrl:"https://placehold.co/600x400/333333/E0E0E0?text=Blog+App",problem:"Needed a personal platform to share technical articles and thoughts, requiring user authentication for content creation and a smooth reading experience.",solution:"Built a modern full-stack blog using React and Next.js for a performant frontend with SEO capabilities. Utilized Firebase for authentication and database services. Styled with Tailwind CSS for rapid and responsive UI development.",yourRole:"Sole Developer. Responsible for end-to-end development, from UI/UX design to backend integration and deployment.",impact:"Created a highly responsive and visually appealing blog that attracts consistent traffic. Successfully managed user content and provided an intuitive authoring experience.",learnings:"Enhanced understanding of server-side rendering with Next.js, Firebase services (Auth, Firestore), and advanced Tailwind CSS techniques for complex layouts."},{title:"Real-time Chat App",description:"A real-time chat application with group chat functionality and direct messaging, featuring user presence indicators and message timestamps.",technologies:["React","Socket.IO","Node.js","Redis"],githubLink:"https://github.com/yourusername/chat-app",liveDemoLink:null,imageUrl:"https://placehold.co/600x400/333333/E0E0E0?text=Chat+App",problem:"The objective was to build a low-latency, real-time communication platform demonstrating expertise in WebSocket technologies.",solution:"Developed a chat application with React for the frontend and Node.js with Socket.IO for real-time bidirectional communication. Redis was used for managing user sessions and message caching.",yourRole:"Frontend & Backend Developer. Implemented WebSocket communication, real-time message handling, and UI for chat rooms and direct messages.",impact:"Achieved sub-100ms message delivery latency. Designed a scalable chat architecture capable of supporting multiple concurrent chat rooms and thousands of active users.",learnings:"Deepened understanding of WebSocket protocols, real-time data synchronization, and performance optimization for highly interactive applications."},{title:"Vehicle Data Visualization",description:"Dashboard for real-time vehicle data and battery health visualization, enabling quick insights and predictive maintenance.",technologies:["React","D3.js","Node.js","MySQL"],githubLink:null,liveDemoLink:"https://your-dashboard-demo.com",imageUrl:"https://placehold.co/600x400/333333/E0E0E0?text=Vehicle+Dashboard",problem:"Clients needed a comprehensive dashboard to visualize large datasets of vehicle telematics and battery performance in real-time.",solution:"Developed an interactive dashboard using React for the frontend, leveraging D3.js for custom data visualizations. A Node.js backend processed incoming data streams and stored them in MySQL.",yourRole:"Full-stack Developer. Built the data ingestion pipeline, API endpoints, and designed the interactive visualizations and user interface.",impact:"Enabled fleet managers to gain real-time insights into vehicle performance and predict potential battery failures, leading to a 15% reduction in unplanned maintenance costs.",learnings:"Mastered D3.js for complex data visualizations, optimized database schemas for time-series data, and managed large-scale data processing in Node.js."}],myProcess:{title:"My Development Process",description:"My approach to software development is structured, collaborative, and user-centric. I believe in a phased approach that prioritizes understanding the problem thoroughly before jumping into solutions. This ensures robust, scalable, and maintainable software.",steps:[{name:"Requirement Analysis & Planning",detail:"Deep dive into stakeholder needs, define scope, create user stories, and outline technical specifications. This phase focuses on 'why' and 'what'."},{name:"Design & Architecture",detail:"Translate requirements into a technical design, choose appropriate technologies, and plan the system architecture. Emphasis on scalability, security, and maintainability."},{name:"Development & Implementation",detail:"Write clean, efficient, and well-documented code following best practices (e.g., TDD, modularity). Iterative development with regular feedback loops."},{name:"Testing & Quality Assurance",detail:"Rigorous testing (unit, integration, end-to-end) to ensure functionality, performance, and reliability. Bug tracking and resolution."},{name:"Deployment & Monitoring",detail:"Deploy applications to production environments, configure CI/CD pipelines, and set up monitoring tools for performance and error tracking."},{name:"Maintenance & Iteration",detail:"Continuous improvement based on user feedback and performance data. Adapting to new requirements and technologies."}]},whyMe:{title:"Why Choose Me?",points:["**Full-Stack Proficiency:** Adept in both front-end (React) and back-end (Node.js) development, enabling end-to-end solution delivery.","**Domain Expertise:** Specialized experience in Hospital Management Systems (HIMS) and Telecom, understanding unique industry challenges.","**Problem-Solver:** Proven ability to analyze complex problems and design innovative, efficient solutions.","**Collaborative Team Player:** Excel in cross-functional teams, ensuring seamless communication and shared success.","**User-Centric Approach:** Committed to delivering intuitive and user-friendly applications that meet both technical and business requirements."]},testimonials:[{quote:"Nitesh is an exceptional developer with a keen eye for detail. His contributions to the HIMS project were invaluable, significantly improving system performance and user experience.",author:"Dr. Alok Sharma, Project Lead at SilfraTechnologies"},{quote:"His ability to quickly grasp complex requirements and translate them into robust code is impressive. Nitesh was instrumental in optimizing our data visualization platform.",author:"Priya Singh, Product Manager"}]},c2="_heroSection_lipr6_1",u2="_heroCanvasContainer_lipr6_39",f2="_heroContent_lipr6_59",d2="_heroTitle_lipr6_71",h2="_heroSubtitle_lipr6_87",p2="_heroAboutText_lipr6_101",m2="_heroButton_lipr6_121",Tr={heroSection:c2,heroCanvasContainer:u2,heroContent:f2,heroTitle:d2,heroSubtitle:h2,heroAboutText:p2,heroButton:m2},g2=({scrollToSection:s,setSectionRef:t})=>{const i=yt.useRef(null),[r,l]=yt.useState("");return yt.useEffect(()=>{let c=0;const d=setInterval(()=>{l(Un.aboutTextFull.substring(0,c)),c++,c>Un.aboutTextFull.length&&clearInterval(d)},20);return()=>clearInterval(d)},[]),yt.useEffect(()=>{if(!i.current)return;let c,d,h,m,p=0,g=0;const _=window.innerWidth/2,x=window.innerHeight/2;c=new mb,d=new fi(75,i.current.clientWidth/i.current.clientHeight,.1,1e3),d.position.z=5,h=new l2({antialias:!0,alpha:!0}),h.setSize(i.current.clientWidth,i.current.clientHeight),i.current.appendChild(h.domElement);const M=new xp(2,0),b=new vb({color:44469,roughness:.5,metalness:.5});m=new Di(M,b),c.add(m);const w=new Tb(16777215,.6);c.add(w);const y=new Eb(16777215,.9);y.position.set(0,1,1),c.add(y);let v=0;const N=.05,U=()=>{requestAnimationFrame(U),v<Math.PI*2?(m.rotation.x+=N,m.rotation.y+=N,v+=N):(m.rotation.x+=.003,m.rotation.y+=.003),d.position.x+=(p/100-d.position.x)*.03,d.position.y+=(-g/100-d.position.y)*.03,d.lookAt(c.position),h.render(c,d)},C=z=>{p=z.clientX-_,g=z.clientY-x},F=()=>{i.current&&(d.aspect=i.current.clientWidth/i.current.clientHeight,d.updateProjectionMatrix(),h.setSize(i.current.clientWidth,i.current.clientHeight))};return window.addEventListener("mousemove",C),window.addEventListener("resize",F),U(),()=>{window.removeEventListener("mousemove",C),window.removeEventListener("resize",F),i.current&&h.domElement&&i.current.removeChild(h.domElement),h.dispose(),M.dispose(),b.dispose(),c.clear()}},[]),j.jsxs("header",{id:"home",ref:c=>t(c,"home"),className:Tr.heroSection,children:[j.jsx("div",{ref:i,className:Tr.heroCanvasContainer}),j.jsxs("div",{className:Tr.heroContent,children:[j.jsx("h1",{className:Tr.heroTitle,style:{textShadow:"0 4px 8px rgba(0,0,0,0.5)"},children:Un.name}),j.jsx("p",{className:Tr.heroSubtitle,style:{textShadow:"0 2px 4px rgba(0,0,0,0.4)"},children:Un.title}),j.jsx("p",{className:Tr.heroAboutText,children:r}),j.jsxs("button",{onClick:()=>s("projects"),className:Tr.heroButton,children:["View My Projects",j.jsx(M0,{size:20,style:{marginLeft:"0.5rem"}})]})]})]})},_2="_sectionContainer_3j2yv_1",v2="_sectionTitle_3j2yv_25",g0={sectionContainer:_2,sectionTitle:v2},ha=({children:s,id:t,title:i,setSectionRef:r})=>j.jsxs("section",{id:t,ref:l=>r(l,t),className:`${g0.sectionContainer} animate-reveal`,children:[j.jsx("h2",{className:g0.sectionTitle,children:i}),s]}),x2="_summaryCard_1ryvg_1 undefined",S2="_summaryParagraph_1ryvg_9",_0={summaryCard:x2,summaryParagraph:S2},y2=({setSectionRef:s})=>j.jsx(ha,{id:"summary",title:"Professional Summary",setSectionRef:s,children:j.jsx("div",{className:_0.summaryCard,children:j.jsxs("p",{className:_0.summaryParagraph,children:[j.jsx(ih,{style:{marginRight:"0.5rem",display:"inline-block"},size:20}),Un.professionalSummary]})})}),M2="_experienceList_5yuie_1",E2="_experienceCard_5yuie_13 undefined",T2="_experienceTitle_5yuie_21",b2="_experienceDuration_5yuie_39",A2="_experienceDescriptionList_5yuie_51",jo={experienceList:M2,experienceCard:E2,experienceTitle:T2,experienceDuration:b2,experienceDescriptionList:A2},R2=({setSectionRef:s})=>j.jsx(ha,{id:"experience",title:"Work Experience",setSectionRef:s,children:j.jsx("div",{className:jo.experienceList,children:Un.workExperience.map((t,i)=>j.jsxs("div",{className:jo.experienceCard,children:[j.jsxs("h3",{className:jo.experienceTitle,children:[j.jsx(T0,{style:{marginRight:"0.5rem"},size:24}),t.title," at ",t.company]}),j.jsx("p",{className:jo.experienceDuration,children:t.duration}),j.jsx("ul",{className:jo.experienceDescriptionList,children:t.description.map((r,l)=>j.jsx("li",{children:r},l))})]},i))})}),C2="_projectGrid_qvhsc_1",w2="_projectCardButton_qvhsc_13 undefined",D2="_projectImage_qvhsc_33",U2="_projectTitle_qvhsc_51",L2="_projectDescription_qvhsc_65",N2="_lineClamp3_qvhsc_79",O2="_projectTechList_qvhsc_93",P2="_projectTechTag_qvhsc_107",B2="_projectLinksContainer_qvhsc_129",I2="_projectLinkItem_qvhsc_145",z2="_projectLinkGithub_qvhsc_155",F2="_projectLinkLiveDemo_qvhsc_163",$n={projectGrid:C2,projectCardButton:w2,projectImage:D2,projectTitle:U2,projectDescription:L2,lineClamp3:N2,projectTechList:O2,projectTechTag:P2,projectLinksContainer:B2,projectLinkItem:I2,projectLinkGithub:z2,projectLinkLiveDemo:F2},H2=({setSectionRef:s,openProjectModal:t})=>j.jsx(ha,{id:"projects",title:"My Projects",setSectionRef:s,children:j.jsx("div",{className:$n.projectGrid,children:Un.projects.map((i,r)=>j.jsxs("button",{onClick:()=>t(i),className:$n.projectCardButton,children:[i.imageUrl&&j.jsx("img",{src:i.imageUrl,alt:`${i.title} screenshot`,className:$n.projectImage,onError:l=>{l.target.onerror=null,l.target.src="https://placehold.co/600x400/333333/E0E0E0?text=Image+Load+Failed"}}),j.jsx("h3",{className:$n.projectTitle,children:i.title}),j.jsx("p",{className:`${$n.projectDescription} ${$n.lineClamp3}`,children:i.description}),j.jsx("div",{className:$n.projectTechList,children:i.technologies.map((l,c)=>j.jsx("span",{className:$n.projectTechTag,children:l},c))}),j.jsxs("div",{className:$n.projectLinksContainer,children:[i.githubLink&&j.jsxs("span",{className:`${$n.projectLinkItem} ${$n.projectLinkGithub}`,children:[j.jsx($h,{size:16,style:{marginRight:"0.25rem"}})," GitHub"]}),i.liveDemoLink&&j.jsxs("span",{className:`${$n.projectLinkItem} ${$n.projectLinkLiveDemo}`,children:[j.jsx(tp,{size:16,style:{marginRight:"0.25rem"}})," Live Demo"]})]})]},r))})}),G2="_myProcessCard_1vkoj_1 undefined",V2="_myProcessParagraph_1vkoj_9",k2="_myProcessList_1vkoj_21",eh={myProcessCard:G2,myProcessParagraph:V2,myProcessList:k2},X2=({setSectionRef:s})=>j.jsx(ha,{id:"my-process",title:Un.myProcess.title,setSectionRef:s,children:j.jsxs("div",{className:eh.myProcessCard,children:[j.jsx("p",{className:`${eh.myProcessParagraph} mb-6`,children:Un.myProcess.description}),j.jsx("ol",{className:eh.myProcessList,children:Un.myProcess.steps.map((t,i)=>j.jsxs("li",{children:[j.jsxs("strong",{children:[t.name,":"]})," ",t.detail]},i))})]})}),W2="_whyMeCard_1s1t5_1 undefined",q2="_whyMeList_1s1t5_9",v0={whyMeCard:W2,whyMeList:q2},j2=({setSectionRef:s})=>j.jsx(ha,{id:"why-me",title:Un.whyMe.title,setSectionRef:s,children:j.jsx("div",{className:v0.whyMeCard,children:j.jsx("ul",{className:v0.whyMeList,children:Un.whyMe.points.map((t,i)=>j.jsx("li",{dangerouslySetInnerHTML:{__html:t}},i))})})}),Y2="_testimonialGrid_vfkfv_1",Z2="_testimonialCard_vfkfv_13 undefined",K2="_testimonialQuote_vfkfv_27",Q2="_testimonialAuthor_vfkfv_41",J2="_testimonialMoreInfo_vfkfv_53",Yo={testimonialGrid:Y2,testimonialCard:Z2,testimonialQuote:K2,testimonialAuthor:Q2,testimonialMoreInfo:J2},$2=({setSectionRef:s})=>j.jsxs(ha,{id:"testimonials",title:"What People Say About Me",setSectionRef:s,children:[j.jsx("div",{className:Yo.testimonialGrid,children:Un.testimonials.map((t,i)=>j.jsxs("div",{className:Yo.testimonialCard,children:[j.jsxs("p",{className:Yo.testimonialQuote,children:['"',t.quote,'"']}),j.jsxs("p",{className:Yo.testimonialAuthor,children:["— ",t.author]})]},i))}),j.jsx("p",{className:`${Yo.testimonialMoreInfo} text-center text-sm-custom mt-8`,children:"(More testimonials available upon request)"})]}),tw="_rolesCard_2r4pn_1 undefined",ew="_rolesList_2r4pn_9",x0={rolesCard:tw,rolesList:ew},nw=({setSectionRef:s})=>j.jsx(ha,{id:"roles",title:"Roles & Responsibilities",setSectionRef:s,children:j.jsx("div",{className:x0.rolesCard,children:j.jsx("ul",{className:x0.rolesList,children:Un.rolesAndResponsibilities.map((t,i)=>j.jsx("li",{children:t},i))})})}),iw="_educationCard_1dm0f_1 undefined",aw="_educationItem_1dm0f_9",rw="_educationDegree_1dm0f_25",sw="_educationDetails_1dm0f_43",kc={educationCard:iw,educationItem:aw,educationDegree:rw,educationDetails:sw},ow=({setSectionRef:s})=>j.jsx(ha,{id:"education",title:"Education",setSectionRef:s,children:j.jsx("div",{className:kc.educationCard,children:Un.education.map((t,i)=>j.jsxs("div",{className:kc.educationItem,children:[j.jsxs("h3",{className:kc.educationDegree,children:[j.jsx(E0,{style:{marginRight:"0.5rem"},size:24}),t.degree]}),j.jsxs("p",{className:kc.educationDetails,children:[t.institution,", ",t.year]})]},i))})}),lw="_skillsGrid_1qvnl_1",cw="_skillCard_1qvnl_13 undefined",uw="_skillCategoryTitle_1qvnl_21",fw="_skillList_1qvnl_39",dw="_skillItem_1qvnl_51",hw="_skillName_1qvnl_61",pw="_skillBarContainer_1qvnl_75",mw="_skillBarFill_1qvnl_89",gw="_skillPercentage_1qvnl_103",ra={skillsGrid:lw,skillCard:cw,skillCategoryTitle:uw,skillList:fw,skillItem:dw,skillName:hw,skillBarContainer:pw,skillBarFill:mw,skillPercentage:gw},_w=({setSectionRef:s})=>j.jsx(ha,{id:"skills",title:"Technical Proficiency",setSectionRef:s,children:j.jsx("div",{className:ra.skillsGrid,children:Object.entries(Un.technicalProficiency).map(([t,i],r)=>j.jsxs("div",{className:ra.skillCard,children:[j.jsxs("h3",{className:ra.skillCategoryTitle,children:[j.jsx(nh,{style:{marginRight:"0.5rem"},size:20}),t]}),j.jsx("div",{className:ra.skillList,children:i.map((l,c)=>j.jsxs("div",{className:ra.skillItem,children:[j.jsx("span",{className:ra.skillName,children:l.name}),j.jsx("div",{className:ra.skillBarContainer,children:j.jsx("div",{className:ra.skillBarFill,style:{width:`${l.proficiency}%`},role:"progressbar","aria-valuenow":l.proficiency,"aria-valuemin":0,"aria-valuemax":100})}),j.jsxs("span",{className:ra.skillPercentage,children:[l.proficiency,"%"]})]},c))})]},r))})}),vw="_footer_1bjh2_1",xw="_footerSocialLinks_1bjh2_35",Sw="_footerSocialLink_1bjh2_35",yw="_footerDownloadButtonWrapper_1bjh2_69",Mw="_footerDownloadButton_1bjh2_69",Zo={footer:vw,footerSocialLinks:xw,footerSocialLink:Sw,footerDownloadButtonWrapper:yw,footerDownloadButton:Mw},Ew=()=>j.jsxs("footer",{className:Zo.footer,children:[j.jsxs("p",{children:["© ",new Date().getFullYear()," Nitesh Giri. All rights reserved."]}),j.jsx("div",{className:Zo.footerSocialLinks,children:j.jsx("a",{href:"https://github.com/your-github-profile",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Profile",className:Zo.footerSocialLink,children:j.jsx($h,{size:28})})}),j.jsx("div",{className:Zo.footerDownloadButtonWrapper,children:j.jsxs("a",{href:"/path/to/your/resume.pdf",download:"Nitesh_Giri_Resume.pdf",className:Zo.footerDownloadButton,children:["Download Resume",j.jsx(M0,{size:18,style:{marginLeft:"0.5rem"}})]})})]});function Tw(){const[s,t]=yt.useState("home"),[i,r]=yt.useState(!1),[l,c]=yt.useState(null),[d,h]=yt.useState("dark"),[m,p]=yt.useState(!0),g=yt.useRef({}),_=yt.useCallback((U,C)=>{U&&(g.current[C]=U)},[]),x=yt.useCallback(()=>{h(U=>U==="dark"?"light":"dark")},[]),M=yt.useCallback(()=>{p(U=>!U)},[]);yt.useEffect(()=>{document.body.classList.toggle("light-mode",d==="light")},[d]),yt.useEffect(()=>{const U=new IntersectionObserver(C=>{let F=s;C.forEach(z=>{if(z.isIntersecting){z.target.classList.add("animate-reveal");const P=z.boundingClientRect,V=window.innerHeight,D=P.top+P.height/2,A=(Math.min(V,P.bottom)-Math.max(0,P.top))/P.height;(D>V*.25&&D<V*.75&&A>.4||z.isIntersecting&&z.intersectionRatio>=.5&&P.top>=0&&P.top<V*.1)&&(F=z.target.id)}else z.target.classList.remove("animate-reveal")}),F!==s&&t(F)},{threshold:[.1,.3,.5,.7,.9],rootMargin:"-20% 0% -70% 0%"});return Object.values(g.current).forEach(C=>{C&&U.observe(C)}),()=>{Object.values(g.current).forEach(C=>{C&&U.unobserve(C)})}},[s]);const b=U=>{var C;(C=document.getElementById(U))==null||C.scrollIntoView({behavior:"smooth"})},w=U=>{c(U),r(!0)},y=()=>{r(!1),c(null)},v=d==="dark"?Ky:Yy,N=m?"4rem":"14rem";return j.jsx(iM,{children:j.jsxs("div",{className:"main-container",children:[j.jsx(QE,{activeSection:s,scrollToSection:b,isMinimized:m,toggleSidebar:M}),j.jsxs("main",{className:"main-content",style:{marginLeft:N},children:[j.jsx(g2,{scrollToSection:b,setSectionRef:_}),j.jsx(y2,{setSectionRef:_}),j.jsx(R2,{setSectionRef:_}),j.jsx(H2,{setSectionRef:_,openProjectModal:w}),j.jsx(X2,{setSectionRef:_}),j.jsx(j2,{setSectionRef:_}),j.jsx($2,{setSectionRef:_}),j.jsx(nw,{setSectionRef:_}),j.jsx(ow,{setSectionRef:_}),j.jsx(_w,{setSectionRef:_}),j.jsx(Ew,{})]}),i&&j.jsx(IE,{project:l,onClose:y}),j.jsx("button",{onClick:x,className:"themeToggleButtonFloating","aria-label":`Toggle theme to ${d==="dark"?"light":"dark"}`,children:j.jsx(v,{size:28})})]})})}Cy.createRoot(document.getElementById("root")).render(j.jsx(la.StrictMode,{children:j.jsx(Tw,{})}));

import{l as ot,t as Jt}from"./DIeogL5L.js";const pt=!1;var jn=Array.isArray,Qt=Array.prototype.indexOf,Bn=Array.from,Hn=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,Un=Object.prototype,Gn=Array.prototype,tn=Object.getPrototypeOf;function Vn(t){return typeof t=="function"}const Kn=()=>{};function Zn(t){return t()}function mt(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,Tt=4,Q=8,ft=16,S=32,b=64,G=128,y=256,V=512,v=1024,O=2048,I=4096,C=8192,X=16384,nn=32768,xt=65536,$n=1<<17,rn=1<<19,At=1<<20,dt=Symbol("$state"),zn=Symbol("legacy props"),Wn=Symbol("");function St(t){return t===this.v}function en(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Ot(t){return!en(t,this.v)}function ln(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function an(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function un(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Qn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Xn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function tr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const nr=1,rr=2,er=4,lr=8,ar=16,sr=4,ur=1,or=2,_n="[",cn="[!",vn="]",Rt={},fr=Symbol(),ir="http://www.w3.org/1999/xhtml",_r="http://www.w3.org/2000/svg";function kt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function cr(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function pn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let o=null;function wt(t){o=t}function vr(t){return Dt().get(t)}function pr(t,n){return Dt().set(t,n),n}function hr(t,n=!1,r){var e=o={p:o,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};ot&&!n&&(o.l={s:null,u:null,r1:[],r2:it(!1)}),Tn(()=>{e.d=!0})}function dr(t){const n=o;if(n!==null){const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];z(l.effect),$(l.reaction),Yt(l.fn)}}finally{z(r),$(e)}}o=n.p,n.m=!0}return{}}function tt(){return!ot||o!==null&&o.l===null}function Dt(t){return o===null&&pn(),o.c??(o.c=new Map(hn(o)||void 0))}function hn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}const q=new Map;function it(t,n){var r={f:0,v:t,reactions:null,equals:St,rv:0,wv:0};return r}function wr(t){return Nt(it(t))}function dn(t,n=!1){var e;const r=it(t);return n||(r.equals=Ot),ot&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function yr(t,n=!1){return Nt(dn(t,n))}function Nt(t){return u!==null&&!E&&(u.f&g)!==0&&(A===null?kn([t]):A.push(t)),t}function It(t,n){return u!==null&&!E&&tt()&&(u.f&(g|ft))!==0&&(A===null||!A.includes(t))&&fn(),wn(t,n)}function wn(t,n){if(!t.equals(n)){var r=t.v;B?q.set(t,n):q.set(t,r),t.v=n,t.wv=Zt(),Pt(t,O),tt()&&f!==null&&(f.f&v)!==0&&(f.f&(S|b))===0&&(w===null?Dn([t]):w.push(t))}return n}function Er(t,n=1){var r=ct(t),e=n===1?r++:r--;return It(t,r),e}function Pt(t,n){var r=t.reactions;if(r!==null)for(var e=tt(),a=r.length,l=0;l<a;l++){var s=r[l],i=s.f;(i&O)===0&&(!e&&s===f||(T(s,n),(i&(v|y))!==0&&((i&g)!==0?Pt(s,I):et(s))))}}let D=!1;function gr(t){D=t}let m;function Y(t){if(t===null)throw kt(),Rt;return m=t}function mr(){return Y(P(m))}function Tr(t){if(D){if(P(m)!==null)throw kt(),Rt;m=t}}function xr(t=1){if(D){for(var n=t,r=m;n--;)r=P(r);m=r}}function Ar(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===vn){if(t===0)return n;t-=1}else(r===_n||r===cn)&&(t+=1)}var e=P(n);n.remove(),n=e}}var yt,yn,Ct,bt;function Sr(){if(yt===void 0){yt=window,yn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Ct=ht(n,"firstChild").get,bt=ht(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function at(t){return Ct.call(t)}function P(t){return bt.call(t)}function Or(t,n){if(!D)return at(t);var r=at(m);if(r===null)r=m.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),Y(e),e}return Y(r),r}function Rr(t,n){if(!D){var r=at(t);return r instanceof Comment&&r.data===""?P(r):r}return m}function kr(t,n=1,r=!1){let e=D?m:t;for(var a;n--;)a=e,e=P(e);if(!D)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=lt();return e===null?a==null||a.after(s):e.before(s),Y(s),s}return Y(e),e}function Dr(t){t.textContent=""}function Ft(t){var n=g|O,r=u!==null&&(u.f&g)!==0?u:null;return f===null||r!==null&&(r.f&y)!==0?n|=y:f.f|=At,{ctx:o,deps:null,effects:null,equals:St,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function Nr(t){const n=Ft(t);return n.equals=Ot,n}function Lt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)N(n[r])}}function En(t){for(var n=t.parent;n!==null;){if((n.f&g)===0)return n;n=n.parent}return null}function gn(t){var n,r=f;z(En(t));try{Lt(t),n=zt(t)}finally{z(r)}return n}function Mt(t){var n=gn(t),r=(R||(t.f&y)!==0)&&t.deps!==null?I:v;T(t,r),t.equals(n)||(t.v=n,t.wv=Zt())}function qt(t){f===null&&u===null&&sn(),u!==null&&(u.f&y)!==0&&f===null&&an(),B&&ln()}function mn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var a=f,l={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|O,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{rt(l),l.f|=nn}catch(_){throw N(l),_}else n!==null&&et(l);var s=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(At|G))===0;if(!s&&e&&(a!==null&&mn(l,a),u!==null&&(u.f&g)!==0)){var i=u;(i.effects??(i.effects=[])).push(l)}return l}function Tn(t){const n=F(Q,null,!1);return T(n,v),n.teardown=t,n}function Ir(t){qt();var n=f!==null&&(f.f&S)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Yt(t);return e}}function Pr(t){return qt(),_t(t)}function Cr(t){const n=F(b,t,!0);return(r={})=>new Promise(e=>{r.outro?Sn(n,()=>{N(n),e(void 0)}):(N(n),e(void 0))})}function Yt(t){return F(Tt,t,!1)}function br(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=_t(()=>{t(),!e.ran&&(e.ran=!0,It(r.l.r2,!0),Mn(n))})}function Fr(){var t=o;_t(()=>{if(ct(t.l.r2)){for(var n of t.l.r1){var r=n.effect;(r.f&v)!==0&&T(r,I),L(r)&&rt(r),n.ran=!1}t.l.r2.v=!1}})}function _t(t){return F(Q,t,!0)}function Lr(t,n=[],r=Ft){const e=n.map(r);return xn(()=>t(...e.map(ct)))}function xn(t,n=0){return F(Q|ft|n,t,!0)}function Mr(t,n=!0){return F(Q|S,t,!0,n)}function jt(t){var n=t.teardown;if(n!==null){const r=B,e=u;gt(!0),$(null);try{n.call(null)}finally{gt(r),$(e)}}}function Bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&b)!==0?r.parent=null:N(r,n),r=e}}function An(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&S)===0&&N(n),n=r}}function N(t,n=!0){var r=!1;if((n||(t.f&rn)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:P(e);e.remove(),e=l}r=!0}Bt(t,n&&!r),J(t,0),T(t,X);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();jt(t);var i=t.parent;i!==null&&i.first!==null&&Ht(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ht(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Sn(t,n){var r=[];Ut(t,r,!0),On(r,()=>{N(t),n&&n()})}function On(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Ut(t,n,r){if((t.f&C)===0){if(t.f^=C,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&xt)!==0||(e.f&S)!==0;Ut(e,n,l?r:!1),e=a}}}function qr(t){Gt(t,!0)}function Gt(t,n){if((t.f&C)!==0){t.f^=C,(t.f&v)===0&&(t.f^=v),L(t)&&(T(t,O),et(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&xt)!==0||(r.f&S)!==0;Gt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let j=[],st=[];function Vt(){var t=j;j=[],mt(t)}function Rn(){var t=st;st=[],mt(t)}function Yr(t){j.length===0&&queueMicrotask(Vt),j.push(t)}function Et(){j.length>0&&Vt(),st.length>0&&Rn()}let U=!1,K=!1,Z=null,k=!1,B=!1;function gt(t){B=t}let M=[];let u=null,E=!1;function $(t){u=t}let f=null;function z(t){f=t}let A=null;function kn(t){A=t}let c=null,d=0,w=null;function Dn(t){w=t}let Kt=1,W=0,R=!1;function Zt(){return++Kt}function L(t){var p;var n=t.f;if((n&O)!==0)return!0;if((n&I)!==0){var r=t.deps,e=(n&y)!==0;if(r!==null){var a,l,s=(n&V)!==0,i=e&&f!==null&&!R,_=r.length;if(s||i){var x=t,H=x.parent;for(a=0;a<_;a++)l=r[a],(s||!((p=l==null?void 0:l.reactions)!=null&&p.includes(x)))&&(l.reactions??(l.reactions=[])).push(x);s&&(x.f^=V),i&&H!==null&&(H.f&y)===0&&(x.f^=y)}for(a=0;a<_;a++)if(l=r[a],L(l)&&Mt(l),l.wv>t.wv)return!0}(!e||f!==null&&!R)&&T(t,v)}return!1}function Nn(t,n){for(var r=n;r!==null;){if((r.f&G)!==0)try{r.fn(t);return}catch{r.f^=G}r=r.parent}throw U=!1,t}function In(t){return(t.f&X)===0&&(t.parent===null||(t.parent.f&G)===0)}function nt(t,n,r,e){if(U){if(r===null&&(U=!1),In(n))throw t;return}r!==null&&(U=!0);{Nn(t,n);return}}function $t(t,n,r=!0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];(l.f&g)!==0?$t(l,n,!1):n===l&&(r?T(l,O):(l.f&v)!==0&&T(l,I),et(l))}}function zt(t){var vt;var n=c,r=d,e=w,a=u,l=R,s=A,i=o,_=E,x=t.f;c=null,d=0,w=null,R=(x&y)!==0&&(E||!k||u===null),u=(x&(S|b))===0?t:null,A=null,wt(t.ctx),E=!1,W++;try{var H=(0,t.fn)(),p=t.deps;if(c!==null){var h;if(J(t,d),p!==null&&d>0)for(p.length=d+c.length,h=0;h<c.length;h++)p[d+h]=c[h];else t.deps=p=c;if(!R)for(h=d;h<p.length;h++)((vt=p[h]).reactions??(vt.reactions=[])).push(t)}else p!==null&&d<p.length&&(J(t,d),p.length=d);if(tt()&&w!==null&&!E&&p!==null&&(t.f&(g|I|O))===0)for(h=0;h<w.length;h++)$t(w[h],t);return a!==null&&(W++,w!==null&&(e===null?e=w:e.push(...w))),H}finally{c=n,d=r,w=e,u=a,R=l,A=s,wt(i),E=_}}function Pn(t,n){let r=n.reactions;if(r!==null){var e=Qt.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&(n.f&g)!==0&&(c===null||!c.includes(n))&&(T(n,I),(n.f&(y|V))===0&&(n.f^=V),Lt(n),J(n,0))}function J(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Pn(t,r[e])}function rt(t){var n=t.f;if((n&X)===0){T(t,v);var r=f,e=o,a=k;f=t,k=!0;try{(n&ft)!==0?An(t):Bt(t),jt(t);var l=zt(t);t.teardown=typeof l=="function"?l:null,t.wv=Kt;var s=t.deps,i;pt&&Jt&&t.f&O}catch(_){nt(_,t,r,e||t.ctx)}finally{k=a,f=r}}}function Cn(){try{un()}catch(t){if(Z!==null)nt(t,Z,null);else throw t}}function Wt(){var t=k;try{var n=0;for(k=!0;M.length>0;){n++>1e3&&Cn();var r=M,e=r.length;M=[];for(var a=0;a<e;a++){var l=Fn(r[a]);bn(l)}}}finally{K=!1,k=t,Z=null,q.clear()}}function bn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(X|C))===0)try{L(e)&&(rt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ht(e):e.fn=null))}catch(a){nt(a,e,null,e.ctx)}}}function et(t){K||(K=!0,queueMicrotask(Wt));for(var n=Z=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(b|S))!==0){if((r&v)===0)return;n.f^=v}}M.push(n)}function Fn(t){for(var n=[],r=t;r!==null;){var e=r.f,a=(e&(S|b))!==0,l=a&&(e&v)!==0;if(!l&&(e&C)===0){if((e&Tt)!==0)n.push(r);else if(a)r.f^=v;else{var s=u;try{u=r,L(r)&&rt(r)}catch(x){nt(x,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Ln(t){var n;for(Et();M.length>0;)K=!0,Wt(),Et();return n}async function jr(){await Promise.resolve(),Ln()}function ct(t){var n=t.f,r=(n&g)!==0;if(u!==null&&!E){A!==null&&A.includes(t)&&on();var e=u.deps;t.rv<W&&(t.rv=W,c===null&&e!==null&&e[d]===t?d++:c===null?c=[t]:(!R||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&y)===0&&(a.f^=y)}return r&&(a=t,L(a)&&Mt(a)),B&&q.has(t)?q.get(t):t.v}function Mn(t){var n=E;try{return E=!0,t()}finally{E=n}}const qn=-7169;function T(t,n){t.f=t.f&qn|n}function Br(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&dt in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=tn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Xt(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{$n as $,Rr as A,dr as B,Lr as C,Nr as D,xt as E,xr as F,lt as G,_n as H,at as I,yn as J,f as K,or as L,Or as M,Tr as N,kr as O,Un as P,Gn as Q,it as R,dt as S,ur as T,fr as U,tr as V,It as W,ht as X,Xn as Y,tn as Z,Qn as _,Mn as a,er as a0,Ot as a1,Er as a2,lr as a3,zn as a4,rr as a5,nr as a6,dn as a7,Vn as a8,ar as a9,sr as aA,pr as aB,br as aC,Fr as aD,yr as aE,vr as aF,cr as aG,Kn as aa,N as ab,$ as ac,z as ad,u as ae,Hn as af,Tn as ag,Sr as ah,P as ai,Rt as aj,vn as ak,kt as al,Jn as am,Dr as an,Bn as ao,Cr as ap,Ln as aq,wr as ar,jr as as,_r as at,ir as au,Wn as av,Xt as aw,en as ax,ft as ay,nn as az,Pr as b,o as c,Zn as d,Br as e,Ft as f,ct as g,xn as h,jn as i,D as j,mr as k,pn as l,cn as m,Ar as n,gr as o,qr as p,Mr as q,mt as r,Y as s,Sn as t,Ir as u,m as v,Yt as w,_t as x,Yr as y,hr as z};

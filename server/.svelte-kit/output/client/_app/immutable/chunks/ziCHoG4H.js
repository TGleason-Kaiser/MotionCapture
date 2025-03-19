import{as as g,at as w,au as I,v,a6 as O,L as V,a7 as W,z as F,p as E,C as q,av as B,u as f,H,a as x,c as N,d as C,e as c,g as _,aw as j,ax as P,ay as U,h as $}from"./DyA4cjp6.js";function ie(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const z=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function se(e){return z.includes(e)}const G={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function oe(e){return e=e.toLowerCase(),G[e]??e}const X=["touchstart","touchmove"];function ue(e){return X.includes(e)}const Y=["textarea","script","style","title"];function ce(e){return Y.includes(e)}function J(e){var t=I,r=v;g(null),w(null);try{return e()}finally{g(t),w(r)}}const K=new Set,Q=new Set;function Z(e,t,r,s={}){function n(a){if(s.capture||ee.call(t,a),!a.cancelBubble)return J(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?V(()=>{t.addEventListener(e,n,s)}):t.addEventListener(e,n,s),n}function le(e,t,r,s,n){var a={capture:s,passive:n},i=Z(e,t,r,a);(t===document.body||t===window||t===document)&&O(()=>{t.removeEventListener(e,i,a)})}function fe(e){for(var t=0;t<e.length;t++)K.add(e[t]);for(var r of Q)r(e)}function ee(e){var k;var t=this,r=t.ownerDocument,s=e.type,n=((k=e.composedPath)==null?void 0:k.call(e))||[],a=n[0]||e.target,i=0,p=e.__root;if(p){var l=n.indexOf(p);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var d=n.indexOf(t);if(d===-1)return;l<=d&&(i=l)}if(a=n[i]||e.target,a!==t){W(e,"currentTarget",{configurable:!0,get(){return a||r}});var T=I,b=v;g(null),w(null);try{for(var h,A=[];a!==null;){var S=a.assignedSlot||a.parentNode||a.host||null;try{var m=a["__"+s];if(m!=null&&(!a.disabled||e.target===a))if(F(m)){var[R,...D]=m;R.apply(a,[e,...D])}else m.call(a,e)}catch(y){h?A.push(y):h=y}if(e.cancelBubble||S===t||S===null)break;a=S}if(h){for(let y of A)queueMicrotask(()=>{throw y});throw h}}finally{e.__root=t,delete e.currentTarget,g(T),w(b)}}}let o;function de(){o=void 0}function _e(e){let t=null,r=f;var s;if(f){for(t=c,o===void 0&&(o=_(document.head));o!==null&&(o.nodeType!==8||o.data!==H);)o=x(o);o===null?N(!1):o=C(x(o))}f||(s=document.head.appendChild(E()));try{q(()=>e(s),B)}finally{r&&(N(!0),o=c,C(t))}}function M(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function u(e,t){var r=v;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function te(e,t){var r=(t&P)!==0,s=(t&U)!==0,n,a=!e.startsWith("<!>");return()=>{if(f)return u(c,null),c;n===void 0&&(n=M(a?e:"<!>"+e),r||(n=_(n)));var i=s||j?document.importNode(n,!0):n.cloneNode(!0);if(r){var p=_(i),l=i.lastChild;u(p,l)}else u(i,i);return i}}function pe(e,t){var r=te(e,t);return()=>re(r())}function ve(e,t,r="svg"){var s=!e.startsWith("<!>"),n=(t&P)!==0,a=`<${r}>${s?e:"<!>"+e}</${r}>`,i;return()=>{if(f)return u(c,null),c;if(!i){var p=M(a),l=_(p);if(n)for(i=document.createDocumentFragment();_(l);)i.appendChild(_(l));else i=_(l)}var d=i.cloneNode(!0);if(n){var T=_(d),b=d.lastChild;u(T,b)}else u(d,d);return d}}function re(e){if(f)return e;const t=e.nodeType===11,r=e.tagName==="SCRIPT"?[e]:e.querySelectorAll("script"),s=v;for(const a of r){const i=document.createElement("script");for(var n of a.attributes)i.setAttribute(n.name,n.value);i.textContent=a.textContent,(t?e.firstChild===a:e===a)&&(s.nodes_start=i),(t?e.lastChild===a:e===a)&&(s.nodes_end=i),a.replaceWith(i)}return e}function he(e=""){if(!f){var t=E(e+"");return u(t,t),t}var r=c;return r.nodeType!==3&&(r.before(r=E()),C(r)),u(r,r),r}function me(){if(f)return u(c,null),c;var e=document.createDocumentFragment(),t=document.createComment(""),r=E();return e.append(t,r),u(t,r),e}function ye(e,t){if(f){v.nodes_end=c,$();return}e!==null&&e.before(t)}const ae="5";var L;typeof window<"u"&&((L=window.__svelte??(window.__svelte={})).v??(L.v=new Set)).add(ae);export{K as a,de as b,u as c,ye as d,_e as e,le as f,pe as g,ee as h,ue as i,me as j,he as k,ie as l,Z as m,ve as n,fe as o,oe as p,se as q,Q as r,ce as s,te as t,J as w};

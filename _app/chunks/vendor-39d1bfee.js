function x(){}function et(t,e){for(const n in e)t[n]=e[n];return t}function nt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Q(t){return t()}function G(){return Object.create(null)}function E(t){t.forEach(Q)}function R(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function it(t){return Object.keys(t).length===0}function rt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function vt(t,e,n){t.$$.on_destroy.push(rt(e,n))}function Et(t,e,n,c){if(t){const i=U(t,e,n,c);return t[0](i)}}function U(t,e,n,c){return t[1]&&c?et(n.ctx.slice(),t[1](c(e))):n.ctx}function St(t,e,n,c){if(t[2]&&c){const i=t[2](c(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],s=Math.max(e.dirty.length,i.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|i[u];return o}return e.dirty|i}return e.dirty}function jt(t,e,n,c,i,o){if(i){const s=U(e,n,c,o);t.p(s,i)}}function Nt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let c=0;c<n;c++)e[c]=-1;return e}return-1}function At(t){return t&&R(t.destroy)?t.destroy:x}let M=!1;function st(){M=!0}function lt(){M=!1}function ut(t,e,n,c){for(;t<e;){const i=t+(e-t>>1);n(i)<=c?t=i+1:e=i}return t}function ot(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&r.push(_)}e=r}const n=new Int32Array(e.length+1),c=new Int32Array(e.length);n[0]=-1;let i=0;for(let r=0;r<e.length;r++){const l=e[r].claim_order,_=(i>0&&e[n[i]].claim_order<=l?i+1:ut(1,i,a=>e[n[a]].claim_order,l))-1;c[r]=n[_]+1;const d=_+1;n[d]=r,i=Math.max(d,i)}const o=[],s=[];let u=e.length-1;for(let r=n[i]+1;r!=0;r=c[r-1]){for(o.push(e[r-1]);u>=r;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<s.length;r++){for(;l<o.length&&s[r].claim_order>=o[l].claim_order;)l++;const _=l<o.length?o[l]:null;t.insertBefore(s[r],_)}}function at(t,e){if(M){for(ot(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ct(t,e,n){M&&!n?at(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ft(t){t.parentNode.removeChild(t)}function Mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _t(t){return document.createElement(t)}function dt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function D(t){return document.createTextNode(t)}function Ot(){return D(" ")}function Tt(){return D("")}function Lt(t,e,n,c){return t.addEventListener(e,n,c),()=>t.removeEventListener(e,n,c)}function ht(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Pt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const c in e)e[c]==null?t.removeAttribute(c):c==="style"?t.style.cssText=e[c]:c==="__value"?t.value=t[c]=e[c]:n[c]&&n[c].set?t[c]=e[c]:ht(t,c,e[c])}function mt(t){return Array.from(t.childNodes)}function pt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,e,n,c,i=!1){pt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const r=n(u);return r===void 0?t.splice(s,1):t[s]=r,i||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const r=n(u);return r===void 0?t.splice(s,1):t[s]=r,i?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return c()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function X(t,e,n,c){return V(t,i=>i.nodeName===e,i=>{const o=[];for(let s=0;s<i.attributes.length;s++){const u=i.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>i.removeAttribute(s))},()=>c(e))}function qt(t,e,n){return X(t,e,n,_t)}function zt(t,e,n){return X(t,e,n,dt)}function yt(t,e){return V(t,n=>n.nodeType===3,n=>{const c=""+e;if(n.data.startsWith(c)){if(n.data.length!==c.length)return n.splitText(c.length)}else n.data=c},()=>D(e),!0)}function Bt(t){return yt(t," ")}function Dt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ft(t,e){t.value=e==null?"":e}function Ht(t,e,n,c){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,c?"important":"")}function It(t,e,n){t.classList[n?"add":"remove"](e)}let v;function g(t){v=t}function k(){if(!v)throw new Error("Function called outside component initialization");return v}function Wt(t){k().$$.on_mount.push(t)}function Gt(t){k().$$.after_update.push(t)}function Jt(t){k().$$.on_destroy.push(t)}function Kt(t,e){k().$$.context.set(t,e)}function Qt(t){return k().$$.context.get(t)}const $=[],J=[],A=[],K=[],Y=Promise.resolve();let z=!1;function Z(){z||(z=!0,Y.then(F))}function Rt(){return Z(),Y}function B(t){A.push(t)}const q=new Set;let N=0;function F(){const t=v;do{for(;N<$.length;){const e=$[N];N++,g(e),gt(e.$$)}for(g(null),$.length=0,N=0;J.length;)J.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];q.has(n)||(q.add(n),n())}A.length=0}while($.length);for(;K.length;)K.pop()();z=!1,q.clear(),g(t)}function gt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const C=new Set;let b;function bt(){b={r:0,c:[],p:b}}function xt(){b.r||E(b.c),b=b.p}function H(t,e){t&&t.i&&(C.delete(t),t.i(e))}function tt(t,e,n,c){if(t&&t.o){if(C.has(t))return;C.add(t),b.c.push(()=>{C.delete(t),c&&(n&&t.d(1),c())}),t.o(e)}}function Ut(t,e){const n=e.token={};function c(i,o,s,u){if(e.token!==n)return;e.resolved=u;let r=e.ctx;s!==void 0&&(r=r.slice(),r[s]=u);const l=i&&(e.current=i)(r);let _=!1;e.block&&(e.blocks?e.blocks.forEach((d,a)=>{a!==o&&d&&(bt(),tt(d,1,1,()=>{e.blocks[a]===d&&(e.blocks[a]=null)}),xt())}):e.block.d(1),l.c(),H(l,1),l.m(e.mount(),e.anchor),_=!0),e.block=l,e.blocks&&(e.blocks[o]=l),_&&F()}if(nt(t)){const i=k();if(t.then(o=>{g(i),c(e.then,1,e.value,o),g(null)},o=>{if(g(i),c(e.catch,2,e.error,o),g(null),!e.hasCatch)throw o}),e.current!==e.pending)return c(e.pending,0),!0}else{if(e.current!==e.then)return c(e.then,1,e.value,t),!0;e.resolved=t}}function Vt(t,e,n){const c=e.slice(),{resolved:i}=t;t.current===t.then&&(c[t.value]=i),t.current===t.catch&&(c[t.error]=i),t.block.p(c,n)}function Xt(t,e){tt(t,1,1,()=>{e.delete(t.key)})}function Yt(t,e,n,c,i,o,s,u,r,l,_,d){let a=t.length,m=o.length,h=a;const O={};for(;h--;)O[t[h].key]=h;const S=[],T=new Map,L=new Map;for(h=m;h--;){const f=d(i,o,h),p=n(f);let y=s.get(p);y?c&&y.p(f,e):(y=l(p,f),y.c()),T.set(p,S[h]=y),p in O&&L.set(p,Math.abs(h-O[p]))}const I=new Set,W=new Set;function P(f){H(f,1),f.m(u,_),s.set(f.key,f),_=f.first,m--}for(;a&&m;){const f=S[m-1],p=t[a-1],y=f.key,j=p.key;f===p?(_=f.first,a--,m--):T.has(j)?!s.has(y)||I.has(y)?P(f):W.has(j)?a--:L.get(y)>L.get(j)?(W.add(y),P(f)):(I.add(j),a--):(r(p,s),a--)}for(;a--;){const f=t[a];T.has(f.key)||r(f,s)}for(;m;)P(S[m-1]);return S}function Zt(t,e){const n={},c={},i={$$scope:1};let o=t.length;for(;o--;){const s=t[o],u=e[o];if(u){for(const r in s)r in u||(c[r]=1);for(const r in u)i[r]||(n[r]=u[r],i[r]=1);t[o]=u}else for(const r in s)i[r]=1}for(const s in c)s in n||(n[s]=void 0);return n}function te(t){return typeof t=="object"&&t!==null?t:{}}function ee(t){t&&t.c()}function ne(t,e){t&&t.l(e)}function wt(t,e,n,c){const{fragment:i,on_mount:o,on_destroy:s,after_update:u}=t.$$;i&&i.m(e,n),c||B(()=>{const r=o.map(Q).filter(R);s?s.push(...r):E(r),t.$$.on_mount=[]}),u.forEach(B)}function kt(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){t.$$.dirty[0]===-1&&($.push(t),Z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ce(t,e,n,c,i,o,s,u=[-1]){const r=v;g(t);const l=t.$$={fragment:null,ctx:null,props:o,update:x,not_equal:i,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:e.target||r.$$.root};s&&s(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(d,a,...m)=>{const h=m.length?m[0]:a;return l.ctx&&i(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),_&&$t(t,d)),a}):[],l.update(),_=!0,E(l.before_update),l.fragment=c?c(l.ctx):!1,e.target){if(e.hydrate){st();const d=mt(e.target);l.fragment&&l.fragment.l(d),d.forEach(ft)}else l.fragment&&l.fragment.c();e.intro&&H(t.$$.fragment),wt(t,e.target,e.anchor,e.customElement),lt(),F()}g(r)}class ie{$destroy(){kt(this,1),this.$destroy=x}$on(e,n){const c=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return c.push(n),()=>{const i=c.indexOf(n);i!==-1&&c.splice(i,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const w=[];function re(t,e=x){let n;const c=new Set;function i(u){if(ct(t,u)&&(t=u,n)){const r=!w.length;for(const l of c)l[1](),w.push(l,t);if(r){for(let l=0;l<w.length;l+=2)w[l][0](w[l+1]);w.length=0}}}function o(u){i(u(t))}function s(u,r=x){const l=[u,r];return c.add(l),c.size===1&&(n=e(i)||x),u(t),()=>{c.delete(l),c.size===0&&(n(),n=null)}}return{set:i,update:o,subscribe:s}}export{R as $,te as A,kt as B,et as C,re as D,Rt as E,Et as F,jt as G,Nt as H,St as I,at as J,x as K,Ut as L,Vt as M,B as N,Lt as O,E as P,Qt as Q,J as R,ie as S,Pt as T,It as U,At as V,Mt as W,Ft as X,vt as Y,dt as Z,zt as _,mt as a,Yt as a0,Jt as a1,Xt as a2,ht as b,qt as c,ft as d,_t as e,Ht as f,Ct as g,yt as h,ce as i,Dt as j,Ot as k,Tt as l,Bt as m,bt as n,tt as o,xt as p,H as q,Kt as r,ct as s,D as t,Gt as u,Wt as v,ee as w,ne as x,wt as y,Zt as z};
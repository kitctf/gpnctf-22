import{g}from"../chunks/challenges.BOc6ktCu.js";import{b as p,H as u,e as d}from"../chunks/util.DecpPyr9.js";import{s as _,x as l,i as y,f as b,l as k}from"../chunks/scheduler.DC8yHMXg.js";import{S as C,i as $,t as s,a as i,e as h,c as I,b as S,m as T,d as j,g as w}from"../chunks/index.D1IU_8Bf.js";import{T as N}from"../chunks/TagContent.Cqvzjv3k.js";import{a as O}from"../chunks/state.B89sBy5n.js";const R=async()=>{const n=await g(fetch);return n.error?[]:n.data.map(e=>({key:encodeURIComponent(e.id)}))},v=async({parent:n,params:e})=>{const a=await n();if(a.tags&&Object.keys(a.tags).includes(e.key))return a.tags[e.key].isCategory&&p(u.TemporaryRedirect,"../category/"+encodeURIComponent(e.key)),{tagId:e.key};d(u.NotFound,"Not found")},A=Object.freeze(Object.defineProperty({__proto__:null,entries:R,load:v},Symbol.toStringTag,{value:"Module"}));function m(n){var o;let e,a;return e=new N({props:{tag:(o=n[1])==null?void 0:o[n[0].tagId],listCategory:!0}}),{c(){I(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){T(e,t,r),a=!0},p(t,r){var f;const c={};r&3&&(c.tag=(f=t[1])==null?void 0:f[t[0].tagId]),e.$set(c)},i(t){a||(s(e.$$.fragment,t),a=!0)},o(t){i(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function H(n){let e,a,o=n[1]&&m(n);return{c(){o&&o.c(),e=l()},l(t){o&&o.l(t),e=l()},m(t,r){o&&o.m(t,r),y(t,e,r),a=!0},p(t,[r]){t[1]?o?(o.p(t,r),r&2&&s(o,1)):(o=m(t),o.c(),s(o,1),o.m(e.parentNode,e)):o&&(w(),i(o,1,1,()=>{o=null}),h())},i(t){a||(s(o),a=!0)},o(t){i(o),a=!1},d(t){t&&b(e),o&&o.d(t)}}}function P(n,e,a){let o;k(n,O,r=>a(1,o=r));let{data:t}=e;return n.$$set=r=>{"data"in r&&a(0,t=r.data)},[t,o]}class B extends C{constructor(e){super(),$(this,e,P,H,_,{data:0})}}export{B as component,A as universal};

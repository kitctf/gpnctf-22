import{n as l,d as q,r as k,s as v,i as x}from"./scheduler.BhZJpoxS.js";const c=[];function z(s,o){return{subscribe:A(s,o).subscribe}}function A(s,o=l){let r;const n=new Set;function u(t){if(v(s,t)&&(s=t,r)){const i=!c.length;for(const e of n)e[1](),c.push(e,s);if(i){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function b(t){u(t(s))}function f(t,i=l){const e=[t,i];return n.add(e),n.size===1&&(r=o(u,b)||l),t(s),()=>{n.delete(e),n.size===0&&r&&(r(),r=null)}}return{set:u,update:b,subscribe:f}}function E(s,o,r){const n=!Array.isArray(s),u=n?[s]:s;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return z(r,(f,t)=>{let i=!1;const e=[];let d=0,p=l;const g=()=>{if(d)return;p();const a=o(n?e[0]:e,f,t);b?f(a):p=x(a)?a:l},w=u.map((a,_)=>q(a,m=>{e[_]=m,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){k(w),p(),i=!1}})}function S(s){return{subscribe:s.subscribe.bind(s)}}var y;const T=((y=globalThis.__sveltekit_tyel0d)==null?void 0:y.base)??"";var h;const j=((h=globalThis.__sveltekit_tyel0d)==null?void 0:h.assets)??T;export{z as a,T as b,j as c,E as d,S as r,A as w};

import{g as de,a as he}from"../chunks/teams.RkbZ9XLV.js";import{e as _e,H as ve}from"../chunks/util.hBnsk6km.js";import{s as ge,l as K,e as $,a as N,c as x,b as E,f as d,g as A,H as Q,h as g,i as w,j as b,t as T,d as H,k as U,q as be,r as ye,v as ke,x as j,n as L}from"../chunks/scheduler.DC8yHMXg.js";import{S as $e,i as xe,c as F,b as Y,m as B,t as O,a as D,d as G,g as W,e as X}from"../chunks/index.D1IU_8Bf.js";import{e as q,u as me,o as pe}from"../chunks/each.ByX00CxH.js";import{b as ae}from"../chunks/entry.CFy_tK77.js";import{O as Ce,o as we}from"../chunks/OverviewContent.tkxQeLYF.js";import{C as Se}from"../chunks/ChallengeRow.CA24Bz4q.js";import{T as Ee}from"../chunks/TableRow.D3W5m3gh.js";import{C as Ie}from"../chunks/Card.BGmtsNvv.js";import{p as Ne}from"../chunks/events.Bs3-nudj.js";import{t as Ae,a as Pe,c as Te}from"../chunks/state.Df6o7xx4.js";import{i as He,c as se}from"../chunks/Image.BYkkbeKT.js";const Oe=async()=>{const o=await de(fetch);return o.error?[]:o.data.map(e=>({id:encodeURIComponent(e.id)}))},De=async({fetch:o,params:e})=>{const a=await he(o,e.id);if(a.data)return{team:a.data};_e(ve.NotFound,"Not found")},lt=Object.freeze(Object.defineProperty({__proto__:null,entries:Oe,load:De},Symbol.toStringTag,{value:"Module"}));function ne(o,e,a){const t=o.slice();return t[9]=e[a],t}function re(o,e,a){const t=o.slice();return t[12]=e[a],t[14]=a,t}function oe(o){let e,a,t;return{c(){e=$("a"),a=T("Follow"),this.h()},l(s){e=x(s,"A",{href:!0,"data-sveltekit-reload":!0,target:!0,class:!0});var l=E(e);a=H(l,"Follow"),l.forEach(d),this.h()},h(){g(e,"href",t=o[0].team.website),g(e,"data-sveltekit-reload",""),g(e,"target","_blank"),g(e,"class","flex h-8 items-center justify-center rounded-full border border-neutral-500 px-4 py-1 text-sm font-bold hover:scale-105 hover:border-white active:scale-100 active:opacity-70")},m(s,l){w(s,e,l),b(e,a)},p(s,l){l&1&&t!==(t=s[0].team.website)&&g(e,"href",t)},d(s){s&&d(e)}}}function Re(o){let e,a="No solves yet";return{c(){e=$("p"),e.textContent=a,this.h()},l(t){e=x(t,"P",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-1qw266h"&&(e.textContent=a),this.h()},h(){g(e,"class","flex h-14 items-center justify-center text-neutral-400")},m(t,s){w(t,e,s)},p:L,i:L,o:L,d(t){t&&d(e)}}}function Ue(o){let e,a,t=[],s=new Map,l,r;e=new Ee({props:{hidden:!0,cells:[{type:"simple",priority:0,size:4,value:"Title"},{type:"simple",priority:0,size:1,value:"Your Solves"}]}});let i=q(o[1]);const c=n=>n[12].id;for(let n=0;n<i.length;n+=1){let f=re(o,i,n),v=c(f);s.set(v,t[n]=ie(v,f))}return{c(){F(e.$$.fragment),a=N();for(let n=0;n<t.length;n+=1)t[n].c();l=j()},l(n){Y(e.$$.fragment,n),a=A(n);for(let f=0;f<t.length;f+=1)t[f].l(n);l=j()},m(n,f){B(e,n,f),w(n,a,f);for(let v=0;v<t.length;v+=1)t[v]&&t[v].m(n,f);w(n,l,f),r=!0},p(n,f){f&10&&(i=q(n[1]),W(),t=me(t,f,c,1,n,i,s,l.parentNode,pe,ie,l,re),X())},i(n){if(!r){O(e.$$.fragment,n);for(let f=0;f<i.length;f+=1)O(t[f]);r=!0}},o(n){D(e.$$.fragment,n);for(let f=0;f<t.length;f+=1)D(t[f]);r=!1},d(n){n&&(d(a),d(l)),G(e,n);for(let f=0;f<t.length;f+=1)t[f].d(n)}}}function ie(o,e){let a,t,s;function l(){return e[6](e[12])}return t=new Se({props:{index:e[14],challenge:e[12]}}),t.$on("play",l),{key:o,first:null,c(){a=j(),F(t.$$.fragment),this.h()},l(r){a=j(),Y(t.$$.fragment,r),this.h()},h(){this.first=a},m(r,i){w(r,a,i),B(t,r,i),s=!0},p(r,i){e=r;const c={};i&2&&(c.index=e[14]),i&2&&(c.challenge=e[12]),t.$set(c)},i(r){s||(O(t.$$.fragment,r),s=!0)},o(r){D(t.$$.fragment,r),s=!1},d(r){r&&d(a),G(t,r)}}}function ce(o,e){let a,t,s;return t=new Ie({props:{url:`${ae}/users/${encodeURIComponent(e[9])}`,name:e[9],description:"User",imageUrl:null,imageAlt:`${e[9]} profile picture`,imageRounding:"rounded-full",useColorHash:!0,compact:!0,icon:"person",iconStyle:"text-7xl text-neutral-900"}}),{key:o,first:null,c(){a=j(),F(t.$$.fragment),this.h()},l(l){a=j(),Y(t.$$.fragment,l),this.h()},h(){this.first=a},m(l,r){w(l,a,r),B(t,l,r),s=!0},p(l,r){e=l;const i={};r&1&&(i.url=`${ae}/users/${encodeURIComponent(e[9])}`),r&1&&(i.name=e[9]),r&1&&(i.imageAlt=`${e[9]} profile picture`),t.$set(i)},i(l){s||(O(t.$$.fragment,l),s=!0)},o(l){D(t.$$.fragment,l),s=!1},d(l){l&&d(a),G(t,l)}}}function je(o){let e,a,t,s,l,r="Solves",i,c,n,f,v,p,R="Members",y,_,u=[],S=new Map,I,k=o[0].team.website&&oe(o);const Z=[Ue,Re],P=[];function ee(m,h){return m[0].team.solves.length>0?0:1}c=ee(o),n=P[c]=Z[c](o);let V=q(o[0].team.members);const te=m=>m[9];for(let m=0;m<V.length;m+=1){let h=ne(o,V,m),C=te(h);S.set(C,u[m]=ce(C,h))}return{c(){e=$("div"),k&&k.c(),a=N(),t=$("div"),s=$("section"),l=$("h2"),l.textContent=r,i=N(),n.c(),f=N(),v=$("section"),p=$("h2"),p.textContent=R,y=N(),_=$("div");for(let m=0;m<u.length;m+=1)u[m].c();this.h()},l(m){e=x(m,"DIV",{class:!0});var h=E(e);k&&k.l(h),h.forEach(d),a=A(m),t=x(m,"DIV",{class:!0});var C=E(t);s=x(C,"SECTION",{class:!0});var z=E(s);l=x(z,"H2",{class:!0,"data-svelte-h":!0}),Q(l)!=="svelte-1vuyzev"&&(l.textContent=r),i=A(z),n.l(z),z.forEach(d),f=A(C),v=x(C,"SECTION",{class:!0});var M=E(v);p=x(M,"H2",{class:!0,"data-svelte-h":!0}),Q(p)!=="svelte-1nm8l5d"&&(p.textContent=R),y=A(M),_=x(M,"DIV",{class:!0});var le=E(_);for(let J=0;J<u.length;J+=1)u[J].l(le);le.forEach(d),M.forEach(d),C.forEach(d),this.h()},h(){g(e,"class","relative flex min-h-24 items-center p-6"),g(l,"class","mb-4 px-4 text-2xl font-bold @3xl:px-0"),g(s,"class","relative px-2 @3xl:px-6"),g(p,"class","mb-4 text-2xl font-bold"),g(_,"class","-mx-3 grid grid-cols-2 @xl:grid-cols-4 @3xl:grid-cols-5 @5xl:grid-cols-6 @6xl:grid-cols-7 @7xl:grid-cols-8"),g(v,"class","relative px-6"),g(t,"class","flex flex-col gap-4")},m(m,h){w(m,e,h),k&&k.m(e,null),w(m,a,h),w(m,t,h),b(t,s),b(s,l),b(s,i),P[c].m(s,null),b(t,f),b(t,v),b(v,p),b(v,y),b(v,_);for(let C=0;C<u.length;C+=1)u[C]&&u[C].m(_,null);I=!0},p(m,h){m[0].team.website?k?k.p(m,h):(k=oe(m),k.c(),k.m(e,null)):k&&(k.d(1),k=null);let C=c;c=ee(m),c===C?P[c].p(m,h):(W(),D(P[C],1,1,()=>{P[C]=null}),X(),n=P[c],n?n.p(m,h):(n=P[c]=Z[c](m),n.c()),O(n,1),n.m(s,null)),h&1&&(V=q(m[0].team.members),W(),u=me(u,h,te,1,m,V,S,_,pe,ce,null,ne),X())},i(m){if(!I){O(n);for(let h=0;h<V.length;h+=1)O(u[h]);I=!0}},o(m){D(n);for(let h=0;h<u.length;h+=1)D(u[h]);I=!1},d(m){m&&(d(e),d(a),d(t)),k&&k.d(),P[c].d();for(let h=0;h<u.length;h+=1)u[h].d()}}}function Ve(o){let e,a,t=o[0].team.id+"",s,l;return{c(){e=$("div"),a=$("span"),s=T(t),this.h()},l(r){e=x(r,"DIV",{slot:!0,class:!0});var i=E(e);a=x(i,"SPAN",{class:!0});var c=E(a);s=H(c,t),c.forEach(d),i.forEach(d),this.h()},h(){g(a,"class","text-2xl font-bold"),g(e,"slot","header"),g(e,"class",l="flex flex-1 items-center gap-2 transition-all duration-300 "+(o[2]?"pointer-events-none opacity-0":"pointer-events-auto opacity-100"))},m(r,i){w(r,e,i),b(e,a),b(a,s)},p(r,i){i&1&&t!==(t=r[0].team.id+"")&&U(s,t),i&4&&l!==(l="flex flex-1 items-center gap-2 transition-all duration-300 "+(r[2]?"pointer-events-none opacity-0":"pointer-events-auto opacity-100"))&&g(e,"class",l)},d(r){r&&d(e)}}}function fe(o){let e,a=o[0].team.affiliation+"",t;return{c(){e=$("span"),t=T(a),this.h()},l(s){e=x(s,"SPAN",{class:!0});var l=E(e);t=H(l,a),l.forEach(d),this.h()},h(){g(e,"class","text-sm before:mx-1 before:content-['•']")},m(s,l){w(s,e,l),b(e,t)},p(s,l){l&1&&a!==(a=s[0].team.affiliation+"")&&U(t,a)},d(s){s&&d(e)}}}function ue(o){let e,a=o[0].team.country+"",t,s,l,r=se[o[0].team.country].flag+"",i;return{c(){e=$("span"),t=T(a),s=N(),l=$("span"),i=T(r),this.h()},l(c){e=x(c,"SPAN",{class:!0});var n=E(e);t=H(n,a),s=A(n),l=x(n,"SPAN",{class:!0});var f=E(l);i=H(f,r),f.forEach(d),n.forEach(d),this.h()},h(){g(l,"class","font-mono"),g(e,"class","inline-flex items-center gap-1 text-sm before:ml-1 before:content-['•']")},m(c,n){w(c,e,n),b(e,t),b(e,s),b(e,l),b(l,i)},p(c,n){n&1&&a!==(a=c[0].team.country+"")&&U(t,a),n&1&&r!==(r=se[c[0].team.country].flag+"")&&U(i,r)},d(c){c&&d(e)}}}function ze(o){let e,a=o[0].team.caption+"",t,s,l,r,i=o[0].team.solveCount+"",c,n,f,v,p,R,y=o[0].team.affiliation&&fe(o),_=o[0].team.country&&ue(o);return{c(){e=$("span"),t=T(a),s=N(),l=$("div"),r=$("span"),c=T(i),n=T(" solves"),f=N(),y&&y.c(),v=N(),_&&_.c(),this.h()},l(u){e=x(u,"SPAN",{class:!0});var S=E(e);t=H(S,a),S.forEach(d),s=A(u),l=x(u,"DIV",{class:!0});var I=E(l);r=x(I,"SPAN",{class:!0});var k=E(r);c=H(k,i),n=H(k," solves"),k.forEach(d),f=A(I),y&&y.l(I),v=A(I),_&&_.l(I),I.forEach(d),this.h()},h(){g(e,"class","line-clamp-2 overflow-hidden text-ellipsis text-xs text-white-alpha-70 @md:text-sm @3xl:text-base"),g(r,"class","text-sm font-medium"),g(l,"class","flex items-center")},m(u,S){w(u,e,S),b(e,t),w(u,s,S),w(u,l,S),b(l,r),b(r,c),b(r,n),b(l,f),y&&y.m(l,null),b(l,v),_&&_.m(l,null),p||(R=[be(we.call(null,l,{offset:64,threshold:.6})),ye(l,"screenIntersect",o[4])],p=!0)},p(u,S){S&1&&a!==(a=u[0].team.caption+"")&&U(t,a),S&1&&i!==(i=u[0].team.solveCount+"")&&U(c,i),u[0].team.affiliation?y?y.p(u,S):(y=fe(u),y.c(),y.m(l,v)):y&&(y.d(1),y=null),u[0].team.country?_?_.p(u,S):(_=ue(u),_.c(),_.m(l,null)):_&&(_.d(1),_=null)},d(u){u&&(d(e),d(s),d(l)),y&&y.d(),_&&_.d(),p=!1,ke(R)}}}function Me(o){let e,a;return e=new Ce({props:{label:"Team",name:o[0].team.id,imageUrl:null,imageAlt:"Team profile picture",imageRounding:"rounded-[27%]",useColorHash:!0,icon:"group",iconStyle:"text-9xl text-neutral-900",$$slots:{details:[ze],header:[Ve],default:[je]},$$scope:{ctx:o}}}),{c(){F(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,s){B(e,t,s),a=!0},p(t,[s]){const l={};s&1&&(l.name=t[0].team.id),s&32775&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){a||(O(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){G(e,t)}}}function qe(o,e,a){let t,s,l;K(o,Ae,p=>a(7,t=p)),K(o,Pe,p=>a(8,s=p)),K(o,Te,p=>a(5,l=p));let{data:r}=e,i;function c(p){s&&Ne.playSingle(s[p.tags[0]],p,(t==null?void 0:t[p.tags[0]].map(R=>R.id))??[])}let n=!0;function f(p){a(2,n=p.detail.onScreen)}const v=p=>c(p);return o.$$set=p=>{"data"in p&&a(0,r=p.data)},o.$$.update=()=>{o.$$.dirty&33&&a(1,i=r.team.solves.map(p=>l==null?void 0:l[p]).filter(He))},[r,i,n,c,f,l,v]}class at extends $e{constructor(e){super(),xe(this,e,qe,Me,ge,{data:0})}}export{at as component,lt as universal};
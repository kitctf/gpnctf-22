import{s as ve,e as H,c as M,H as De,h as z,i as F,n as se,f as v,m as ie,a as G,b as S,g as N,I as fe,z as W,j as E,r as Z,u as ue,o as ce,p as he,l as U,J as Ge,C as x,D as V,q as ee,v as we,t as K,d as L,k as Ne,E as He,F as Me}from"./scheduler.DC8yHMXg.js";import{S as ke,i as Te,t as T,g as X,a as I,e as Y,c as B,b as R,m as P,d as A}from"./index.D1IU_8Bf.js";import{e as q,i as y,s as Se,r as ge,m as ze,c as Q,I as te,T as le,g as ae,R as me}from"./Navigation.z42Nwe41.js";import{p as Be}from"./stores.CxEJDAt4.js";import{b as ne}from"./entry.CUj4ca9N.js";function Re(l){let e,t=`<div class="mb-2 flex flex-wrap border-b border-neutral-800"><div class="flex flex-auto gap-6"><div class="mb-8 mr-6 flex w-3/10 flex-col gap-2"><p class="font-medium">Event</p> <a class="text-neutral-400 hover:text-white hover:underline focus:text-white focus:underline" href="${q}">Information</a> <a class="text-neutral-400 hover:text-white hover:underline focus:text-white focus:underline" href="${q+"/rules"}">Rules</a> <a class="text-neutral-400 hover:text-white hover:underline focus:text-white focus:underline" href="${q+"/sponsors"}">Sponsors</a> <a class="text-neutral-400 hover:text-white hover:underline focus:text-white focus:underline" href="${q+"/gpn"}">GPN22</a></div> <div class="mb-8 mr-6 flex w-3/10 flex-col gap-2"><p class="font-medium">KITCTF</p> <a class="text-neutral-400 hover:text-white hover:underline focus:text-white focus:underline" href="https://kitctf.de/">Blog</a> <a class="text-neutral-400 hover:text-white hover:underline focus:text-white focus:underline" href="https://kitctf.de/intro">Intro talks</a> <a class="text-neutral-400 hover:text-white hover:underline focus:text-white focus:underline" href="https://kitctf.de/learning">Talks</a> <a class="text-neutral-400 hover:text-white hover:underline focus:text-white focus:underline" href="https://kitctf.de/writeups">Writeups</a></div></div> <div class="mb-8 flex flex-grow-0 gap-4"><a class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-600 focus:bg-neutral-600" href="https://github.com/kitctf" title="GitHub"><img class="h-5 w-5" src="${ne}/github.svg" alt="GitHub logo"/></a> <a class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-600 focus:bg-neutral-600" href="https://twitter.com/KITCTF" title="Twitter"><img class="h-5 w-5" src="${ne}/twitter.svg" alt="Twitter logo"/></a> <a class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-600 focus:bg-neutral-600" href="https://infosec.exchange/@KITCTF" title="Mastodon"><img class="h-5 w-5" src="${ne}/mastodon.svg" alt="Mastodon logo"/></a></div></div> <p class="text-neutral-400">Made with ♥ by KITCTF</p>`;return{c(){e=H("nav"),e.innerHTML=t,this.h()},l(a){e=M(a,"NAV",{class:!0,"aria-label":!0,"data-svelte-h":!0}),De(e)!=="svelte-eopkv3"&&(e.innerHTML=t),this.h()},h(){z(e,"class","mb-8 px-6"),z(e,"aria-label","external")},m(a,r){F(a,e,r)},p:se,i:se,o:se,d(a){a&&v(e)}}}class Pe extends ke{constructor(e){super(),Te(this,e,null,Re,ve,{})}}const Ae=l=>({}),pe=l=>({});function de(l){let e,t,a,r,b,$,p,w,O,s,u,_,i;a=new te({props:{class:"text-4xl font-medium lg:text-2xl lg:font-normal",$$slots:{default:[Ue]},$$scope:{ctx:l}}});let d=[{class:"flex h-10 w-10 items-center justify-center rounded-full lg:h-8 lg:w-8 lg:bg-black-alpha-70"},{"aria-label":"Go back"},l[7]],f={};for(let n=0;n<d.length;n+=1)f=x(f,d[n]);b=new le({props:{open:l[15],content:l[14],$$slots:{default:[Ve]},$$scope:{ctx:l}}}),w=new te({props:{class:"text-2xl",$$slots:{default:[Ke]},$$scope:{ctx:l}}});let j=[{class:"hidden h-8 w-8 items-center justify-center rounded-full bg-black-alpha-70 lg:flex"},{"aria-label":"Go forward"},l[8]],k={};for(let n=0;n<j.length;n+=1)k=x(k,j[n]);return s=new le({props:{open:l[18],content:l[17],$$slots:{default:[Le]},$$scope:{ctx:l}}}),{c(){e=H("nav"),t=H("button"),B(a.$$.fragment),r=G(),B(b.$$.fragment),$=G(),p=H("button"),B(w.$$.fragment),O=G(),B(s.$$.fragment),this.h()},l(n){e=M(n,"NAV",{class:!0,"aria-label":!0});var g=S(e);t=M(g,"BUTTON",{class:!0,"aria-label":!0});var C=S(t);R(a.$$.fragment,C),C.forEach(v),r=N(g),R(b.$$.fragment,g),$=N(g),p=M(g,"BUTTON",{class:!0,"aria-label":!0});var c=S(p);R(w.$$.fragment,c),c.forEach(v),O=N(g),R(s.$$.fragment,g),g.forEach(v),this.h()},h(){V(t,f),V(p,k),z(e,"class","flex gap-2"),z(e,"aria-label","history")},m(n,g){F(n,e,g),E(e,t),P(a,t,null),t.autofocus&&t.focus(),E(e,r),P(b,e,null),E(e,$),E(e,p),P(w,p,null),p.autofocus&&p.focus(),E(e,O),P(s,e,null),u=!0,_||(i=[ee(l[7].action(t)),Z(t,"click",Xe),ee(l[8].action(p)),Z(p,"click",Ye)],_=!0)},p(n,g){const C={};g&268435488&&(C.$$scope={dirty:g,ctx:n}),a.$set(C),V(t,f=ae(d,[{class:"flex h-10 w-10 items-center justify-center rounded-full lg:h-8 lg:w-8 lg:bg-black-alpha-70"},{"aria-label":"Go back"},g&128&&n[7]]));const c={};g&268435456&&(c.$$scope={dirty:g,ctx:n}),b.$set(c);const o={};g&268435456&&(o.$$scope={dirty:g,ctx:n}),w.$set(o),V(p,k=ae(j,[{class:"hidden h-8 w-8 items-center justify-center rounded-full bg-black-alpha-70 lg:flex"},{"aria-label":"Go forward"},g&256&&n[8]]));const h={};g&268435456&&(h.$$scope={dirty:g,ctx:n}),s.$set(h)},i(n){u||(T(a.$$.fragment,n),T(b.$$.fragment,n),T(w.$$.fragment,n),T(s.$$.fragment,n),u=!0)},o(n){I(a.$$.fragment,n),I(b.$$.fragment,n),I(w.$$.fragment,n),I(s.$$.fragment,n),u=!1},d(n){n&&v(e),A(a),A(b),A(w),A(s),_=!1,we(i)}}}function Ue(l){let e=l[5]?"arrow_back":"navigate_before",t;return{c(){t=K(e)},l(a){t=L(a,e)},m(a,r){F(a,t,r)},p(a,r){r&32&&e!==(e=a[5]?"arrow_back":"navigate_before")&&Ne(t,e)},d(a){a&&v(t)}}}function Ve(l){let e;return{c(){e=K("Go back")},l(t){e=L(t,"Go back")},m(t,a){F(t,e,a)},d(t){t&&v(e)}}}function Ke(l){let e;return{c(){e=K("navigate_next")},l(t){e=L(t,"navigate_next")},m(t,a){F(t,e,a)},d(t){t&&v(e)}}}function Le(l){let e;return{c(){e=K("Go forward")},l(t){e=L(t,"Go forward")},m(t,a){F(t,e,a)},d(t){t&&v(e)}}}function _e(l){let e,t,a,r,b,$,p,w,O,s=!l[5]&&be(l);r=new te({props:{class:"text-2xl",$$slots:{default:[Je]},$$scope:{ctx:l}}});let u=[{href:q},{class:"group flex h-8 w-8 items-center justify-center rounded-full bg-black-alpha-54 hover:scale-105 hover:bg-black-alpha-70 active:opacity-70"},l[10]],_={};for(let i=0;i<u.length;i+=1)_=x(_,u[i]);return $=new le({props:{open:l[24],content:l[23],$$slots:{default:[We]},$$scope:{ctx:l}}}),{c(){e=H("div"),s&&s.c(),t=G(),a=H("a"),B(r.$$.fragment),b=G(),B($.$$.fragment),this.h()},l(i){e=M(i,"DIV",{class:!0});var d=S(e);s&&s.l(d),t=N(d),a=M(d,"A",{href:!0,class:!0});var f=S(a);R(r.$$.fragment,f),f.forEach(v),b=N(d),R($.$$.fragment,d),d.forEach(v),this.h()},h(){V(a,_),z(e,"class","flex gap-2")},m(i,d){F(i,e,d),s&&s.m(e,null),E(e,t),E(e,a),P(r,a,null),E(e,b),P($,e,null),p=!0,w||(O=ee(l[10].action(a)),w=!0)},p(i,d){i[5]?s&&(X(),I(s,1,1,()=>{s=null}),Y()):s?(s.p(i,d),d&32&&T(s,1)):(s=be(i),s.c(),T(s,1),s.m(e,t));const f={};d&268435456&&(f.$$scope={dirty:d,ctx:i}),r.$set(f),V(a,_=ae(u,[{href:q},{class:"group flex h-8 w-8 items-center justify-center rounded-full bg-black-alpha-54 hover:scale-105 hover:bg-black-alpha-70 active:opacity-70"},d&1024&&i[10]]));const j={};d&268435456&&(j.$$scope={dirty:d,ctx:i}),$.$set(j)},i(i){p||(T(s),T(r.$$.fragment,i),T($.$$.fragment,i),p=!0)},o(i){I(s),I(r.$$.fragment,i),I($.$$.fragment,i),p=!1},d(i){i&&v(e),s&&s.d(),A(r),A($),w=!1,O()}}}function be(l){let e,t,a,r,b,$,p;t=new te({props:{class:"text-xl",$$slots:{default:[ye]},$$scope:{ctx:l}}});let w=[{class:"flex h-8 w-8 items-center justify-center rounded-full bg-black-alpha-54 hover:scale-105 hover:bg-black-alpha-70 active:opacity-70"},l[9]],O={};for(let s=0;s<w.length;s+=1)O=x(O,w[s]);return r=new le({props:{open:l[21],content:l[20],$$slots:{default:[qe]},$$scope:{ctx:l}}}),{c(){e=H("button"),B(t.$$.fragment),a=G(),B(r.$$.fragment),this.h()},l(s){e=M(s,"BUTTON",{class:!0});var u=S(e);R(t.$$.fragment,u),u.forEach(v),a=N(s),R(r.$$.fragment,s),this.h()},h(){V(e,O)},m(s,u){F(s,e,u),P(t,e,null),e.autofocus&&e.focus(),F(s,a,u),P(r,s,u),b=!0,$||(p=[ee(l[9].action(e)),Z(e,"click",l[12])],$=!0)},p(s,u){const _={};u&268435456&&(_.$$scope={dirty:u,ctx:s}),t.$set(_),V(e,O=ae(w,[{class:"flex h-8 w-8 items-center justify-center rounded-full bg-black-alpha-54 hover:scale-105 hover:bg-black-alpha-70 active:opacity-70"},u&512&&s[9]]));const i={};u&268435456&&(i.$$scope={dirty:u,ctx:s}),r.$set(i)},i(s){b||(T(t.$$.fragment,s),T(r.$$.fragment,s),b=!0)},o(s){I(t.$$.fragment,s),I(r.$$.fragment,s),b=!1},d(s){s&&(v(e),v(a)),A(t),A(r,s),$=!1,we(p)}}}function ye(l){let e;return{c(){e=K("flag")},l(t){e=L(t,"flag")},m(t,a){F(t,e,a)},d(t){t&&v(e)}}}function qe(l){let e;return{c(){e=K("Recent solves")},l(t){e=L(t,"Recent solves")},m(t,a){F(t,e,a)},d(t){t&&v(e)}}}function Je(l){let e;return{c(){e=K("info")},l(t){e=L(t,"info")},m(t,a){F(t,e,a)},d(t){t&&v(e)}}}function We(l){let e;return{c(){e=K("Information")},l(t){e=L(t,"Information")},m(t,a){F(t,e,a)},d(t){t&&v(e)}}}function $e(l){let e,t;return e=new Pe({}),{c(){B(e.$$.fragment)},l(a){R(e.$$.fragment,a)},m(a,r){P(e,a,r),t=!0},i(a){t||(T(e.$$.fragment,a),t=!0)},o(a){I(e.$$.fragment,a),t=!1},d(a){A(e,a)}}}function Qe(l){let e,t,a,r,b=!l[5]||!y(l[6].url.pathname),$,p,w=!l[5]||y(l[6].url.pathname),O,s,u,_,i,d,f=b&&de(l);const j=l[26].header,k=ie(j,l,l[28],pe);let n=w&&_e(l);const g=l[26].default,C=ie(g,l,l[28],null);let c=!l[2]&&$e();return{c(){e=H("div"),t=H("header"),a=H("div"),r=G(),f&&f.c(),$=G(),k&&k.c(),p=G(),n&&n.c(),O=G(),s=H("main"),C&&C.c(),u=G(),c&&c.c(),this.h()},l(o){e=M(o,"DIV",{class:!0});var h=S(e);t=M(h,"HEADER",{class:!0});var D=S(t);a=M(D,"DIV",{class:!0}),S(a).forEach(v),r=N(D),f&&f.l(D),$=N(D),k&&k.l(D),p=N(D),n&&n.l(D),D.forEach(v),O=N(h),s=M(h,"MAIN",{class:!0});var J=S(s);C&&C.l(J),J.forEach(v),u=N(h),c&&c.l(h),h.forEach(v),this.h()},h(){z(a,"class","absolute left-0 top-0 -z-10 h-full w-full bg-neutral-900 transition-all duration-200"),fe(a,"opacity",l[4]<l[0]?0:l[4]-l[0]>=l[1]?1:(l[4]-l[0])/l[1]),z(t,"class","sticky top-0 z-10 flex h-16 justify-between gap-2 px-6 py-4"),W(t,"flex-row-reverse",l[5]&&y(l[6].url.pathname)&&!l[25].header),z(s,"class","flex-auto"),W(s,"min-h-0",l[2]),z(e,"class","flex min-h-0 flex-auto flex-col overflow-x-hidden")},m(o,h){F(o,e,h),E(e,t),E(t,a),E(t,r),f&&f.m(t,null),E(t,$),k&&k.m(t,null),E(t,p),n&&n.m(t,null),E(e,O),E(e,s),C&&C.m(s,null),E(e,u),c&&c.m(e,null),l[27](e),_=!0,i||(d=Z(e,"scroll",l[11]),i=!0)},p(o,[h]){h&19&&fe(a,"opacity",o[4]<o[0]?0:o[4]-o[0]>=o[1]?1:(o[4]-o[0])/o[1]),h&96&&(b=!o[5]||!y(o[6].url.pathname)),b?f?(f.p(o,h),h&96&&T(f,1)):(f=de(o),f.c(),T(f,1),f.m(t,$)):f&&(X(),I(f,1,1,()=>{f=null}),Y()),k&&k.p&&(!_||h&268435456)&&ue(k,j,o,o[28],_?he(j,o[28],h,Ae):ce(o[28]),pe),h&96&&(w=!o[5]||y(o[6].url.pathname)),w?n?(n.p(o,h),h&96&&T(n,1)):(n=_e(o),n.c(),T(n,1),n.m(t,null)):n&&(X(),I(n,1,1,()=>{n=null}),Y()),(!_||h&33554528)&&W(t,"flex-row-reverse",o[5]&&y(o[6].url.pathname)&&!o[25].header),C&&C.p&&(!_||h&268435456)&&ue(C,g,o,o[28],_?he(g,o[28],h,null):ce(o[28]),null),(!_||h&4)&&W(s,"min-h-0",o[2]),o[2]?c&&(X(),I(c,1,1,()=>{c=null}),Y()):c?h&4&&T(c,1):(c=$e(),c.c(),T(c,1),c.m(e,null))},i(o){_||(T(f),T(k,o),T(n),T(C,o),T(c),_=!0)},o(o){I(f),I(k,o),I(n),I(C,o),I(c),_=!1},d(o){o&&v(e),f&&f.d(),k&&k.d(o),n&&n.d(),C&&C.d(o),c&&c.d(),l[27](null),i=!1,d()}}}function Xe(){history.back()}function Ye(){history.forward()}function Ze(l,e,t){let a,r,b,$,p,w,O,s;U(l,Se,m=>t(29,a=m)),U(l,ge,m=>t(30,r=m)),U(l,ze,m=>t(5,b=m)),U(l,Be,m=>t(6,$=m));let{$$slots:u={},$$scope:_}=e;const i=Ge(u);let{scrollOffset:d=0}=e,{scrollDistance:f=64}=e,{minimize:j=!1}=e,k,n=0;function g(){t(4,n=k.scrollTop)}function C(){He(ge,r=a?me.Closed:me.SolveFeedOpen,r)}const{elements:{trigger:c,content:o},states:{open:h}}=Q({openDelay:300,disableHoverableContent:!0});U(l,c,m=>t(7,p=m));const{elements:{trigger:D,content:J},states:{open:Ce}}=Q({openDelay:300,disableHoverableContent:!0});U(l,D,m=>t(8,w=m));const{elements:{trigger:oe,content:Ie},states:{open:Oe}}=Q({openDelay:300,disableHoverableContent:!0});U(l,oe,m=>t(9,O=m));const{elements:{trigger:re,content:Ee},states:{open:Fe}}=Q({openDelay:300,disableHoverableContent:!0});U(l,re,m=>t(10,s=m));function je(m){Me[m?"unshift":"push"](()=>{k=m,t(3,k)})}return l.$$set=m=>{"scrollOffset"in m&&t(0,d=m.scrollOffset),"scrollDistance"in m&&t(1,f=m.scrollDistance),"minimize"in m&&t(2,j=m.minimize),"$$scope"in m&&t(28,_=m.$$scope)},[d,f,j,k,n,b,$,p,w,O,s,g,C,c,o,h,D,J,Ce,oe,Ie,Oe,re,Ee,Fe,i,u,je,_]}class st extends ke{constructor(e){super(),Te(this,e,Ze,Qe,ve,{scrollOffset:0,scrollDistance:1,minimize:2})}}export{st as M};

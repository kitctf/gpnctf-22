import{s as ae,e as b,t as ne,a as D,c as $,b as z,d as se,f as x,g as O,h,z as Se,i as U,j as u,k as ue,n as de,H as G,l as ce,m as Ke,u as Ye,o as Ze,p as Je,F as Qe,w as je,G as Xe,x as Y}from"../chunks/scheduler.DC8yHMXg.js";import{S as re,i as ie,c as L,b as A,m as R,t as y,a as I,d as F,f as et,g as te,e as le}from"../chunks/index.D1IU_8Bf.js";import{e as Z,u as ge,o as he}from"../chunks/each.ByX00CxH.js";import{r as tt,w as lt,b as Ve}from"../chunks/entry.CUj4ca9N.js";import{h as nt,I as st}from"../chunks/Navigation.z42Nwe41.js";import{f as q,I as at}from"../chunks/Image.BYkkbeKT.js";import{M as rt}from"../chunks/MainContent.C6_SCcCe.js";import{p as Ge,l as it}from"../chunks/events.CDS-KaTA.js";import{t as We,a as ot}from"../chunks/state.B89sBy5n.js";import{P as qe}from"../chunks/PlayButton.DkT4l3yu.js";import{C as ct}from"../chunks/Card.CteUxsSF.js";import{W as ft}from"../chunks/Warning.CtmOHZ7r.js";const ut=async({parent:r})=>await r(),Xt=Object.freeze(Object.defineProperty({__proto__:null,load:ut},Symbol.toStringTag,{value:"Module"}));function dt(r){let e,t,l="~".repeat(r[6])+"",s,n,a,c,d=r[0].toUpperCase()+"",g,_,i,o="~".repeat(Math.max(r[6]-r[0].length,0))+"",f,C,j;return{c(){e=b("div"),t=b("div"),s=ne(l),a=D(),c=b("div"),g=ne(d),_=D(),i=b("span"),f=ne(o),this.h()},l(E){e=$(E,"DIV",{class:!0});var m=z(e);t=$(m,"DIV",{class:!0});var V=z(t);s=se(V,l),V.forEach(x),a=O(m),c=$(m,"DIV",{class:!0});var P=z(c);g=se(P,d),_=O(P),i=$(P,"SPAN",{class:!0});var k=z(i);f=se(k,o),k.forEach(x),P.forEach(x),m.forEach(x),this.h()},h(){h(t,"class",n="absolute select-none "+r[3]),Se(t,"hidden",r[4]),h(i,"class","select-none opacity-0"),h(c,"class",C="relative whitespace-nowrap "+r[1]+" "+r[2]+" text-shadow"),h(e,"class",j="relative "+r[5])},m(E,m){U(E,e,m),u(e,t),u(t,s),u(e,a),u(e,c),u(c,g),u(c,_),u(c,i),u(i,f)},p(E,[m]){m&64&&l!==(l="~".repeat(E[6])+"")&&ue(s,l),m&8&&n!==(n="absolute select-none "+E[3])&&h(t,"class",n),m&24&&Se(t,"hidden",E[4]),m&1&&d!==(d=E[0].toUpperCase()+"")&&ue(g,d),m&65&&o!==(o="~".repeat(Math.max(E[6]-E[0].length,0))+"")&&ue(f,o),m&6&&C!==(C="relative whitespace-nowrap "+E[1]+" "+E[2]+" text-shadow")&&h(c,"class",C),m&32&&j!==(j="relative "+E[5])&&h(e,"class",j)},i:de,o:de,d(E){E&&x(e)}}}function gt(r,e,t){let l,{text:s}=e,{textColor:n="text-lightgreen-100"}=e,{textShadow:a="shadow-lightgreen-100"}=e,{textBackground:c="text-lightgreen-800"}=e,{fill:d=0}=e,{hide:g=!1}=e,{class:_=""}=e;return r.$$set=i=>{"text"in i&&t(0,s=i.text),"textColor"in i&&t(1,n=i.textColor),"textShadow"in i&&t(2,a=i.textShadow),"textBackground"in i&&t(3,c=i.textBackground),"fill"in i&&t(7,d=i.fill),"hide"in i&&t(4,g=i.hide),"class"in i&&t(5,_=i.class)},r.$$.update=()=>{r.$$.dirty&129&&t(6,l=Math.max(s.length,d))},[s,n,a,c,g,_,l,d]}class K extends re{constructor(e){super(),ie(this,e,gt,dt,ae,{text:0,textColor:1,textShadow:2,textBackground:3,fill:7,hide:4,class:5})}}function ht(r){var pe,be,$e,ke;let e,t,l,s,n,a=":",c,d,g,_,i=":",o,f,C,j,E=":",m,V,P,k,B,w,T="~",N,p,v,H,oe="~",J,Q,me,X,ve="~",xe,ee,fe;return l=new K({props:{text:q(((pe=r[0])==null?void 0:pe.days)??0),textColor:"text-black",textShadow:"shadow-firebrick-100",textBackground:"text-firebrick-500",class:"text-3xl @xl:text-4xl @3xl:text-5xl"}}),d=new K({props:{text:q(((be=r[0])==null?void 0:be.hours)??0),textColor:"text-black",textShadow:"shadow-firebrick-100",textBackground:"text-firebrick-500",class:"text-3xl @xl:text-4xl @3xl:text-5xl"}}),f=new K({props:{text:q((($e=r[0])==null?void 0:$e.minutes)??0),textColor:"text-black",textShadow:"shadow-firebrick-100",textBackground:"text-firebrick-500",class:"text-3xl @xl:text-4xl @3xl:text-5xl"}}),V=new K({props:{text:q(((ke=r[0])==null?void 0:ke.seconds)??0),textColor:"text-black",textShadow:"shadow-firebrick-100",textBackground:"text-firebrick-500",class:"text-3xl @xl:text-4xl @3xl:text-5xl"}}),k=new K({props:{text:"Days",fill:5,class:"text-xs @xl:text-base @3xl:text-lg",textColor:"text-black",textShadow:"shadow-firebrick-100",textBackground:"text-firebrick-500"}}),p=new K({props:{text:"Hours",fill:5,class:"text-xs @xl:text-base @3xl:text-lg",textColor:"text-black",textShadow:"shadow-firebrick-100",textBackground:"text-firebrick-500"}}),Q=new K({props:{text:"Mins",fill:5,class:"text-xs @xl:text-base @3xl:text-lg",textColor:"text-black",textShadow:"shadow-firebrick-100",textBackground:"text-firebrick-500"}}),ee=new K({props:{text:"Secs",fill:5,class:"text-xs @xl:text-base @3xl:text-lg",textColor:"text-black",textShadow:"shadow-firebrick-100",textBackground:"text-firebrick-500"}}),{c(){e=b("div"),t=b("div"),L(l.$$.fragment),s=D(),n=b("div"),n.textContent=a,c=D(),L(d.$$.fragment),g=D(),_=b("div"),_.textContent=i,o=D(),L(f.$$.fragment),C=D(),j=b("div"),j.textContent=E,m=D(),L(V.$$.fragment),P=D(),L(k.$$.fragment),B=D(),w=b("div"),w.textContent=T,N=D(),L(p.$$.fragment),v=D(),H=b("div"),H.textContent=oe,J=D(),L(Q.$$.fragment),me=D(),X=b("div"),X.textContent=ve,xe=D(),L(ee.$$.fragment),this.h()},l(M){e=$(M,"DIV",{class:!0});var W=z(e);t=$(W,"DIV",{class:!0});var S=z(t);A(l.$$.fragment,S),s=O(S),n=$(S,"DIV",{class:!0,"data-svelte-h":!0}),G(n)!=="svelte-1ntr7uk"&&(n.textContent=a),c=O(S),A(d.$$.fragment,S),g=O(S),_=$(S,"DIV",{class:!0,"data-svelte-h":!0}),G(_)!=="svelte-1ntr7uk"&&(_.textContent=i),o=O(S),A(f.$$.fragment,S),C=O(S),j=$(S,"DIV",{class:!0,"data-svelte-h":!0}),G(j)!=="svelte-1ntr7uk"&&(j.textContent=E),m=O(S),A(V.$$.fragment,S),P=O(S),A(k.$$.fragment,S),B=O(S),w=$(S,"DIV",{class:!0,"data-svelte-h":!0}),G(w)!=="svelte-1rr4rea"&&(w.textContent=T),N=O(S),A(p.$$.fragment,S),v=O(S),H=$(S,"DIV",{class:!0,"data-svelte-h":!0}),G(H)!=="svelte-1rr4rea"&&(H.textContent=oe),J=O(S),A(Q.$$.fragment,S),me=O(S),X=$(S,"DIV",{class:!0,"data-svelte-h":!0}),G(X)!=="svelte-1rr4rea"&&(X.textContent=ve),xe=O(S),A(ee.$$.fragment,S),S.forEach(x),W.forEach(x),this.h()},h(){h(n,"class","text-3xl shadow-firebrick-100 text-shadow @xl:text-4xl @3xl:text-5xl"),h(_,"class","text-3xl shadow-firebrick-100 text-shadow @xl:text-4xl @3xl:text-5xl"),h(j,"class","text-3xl shadow-firebrick-100 text-shadow @xl:text-4xl @3xl:text-5xl"),h(w,"class","select-none text-xs text-transparent @xl:text-base @3xl:text-lg"),h(H,"class","select-none text-xs text-transparent @xl:text-base @3xl:text-lg"),h(X,"class","select-none text-xs text-transparent @xl:text-base @3xl:text-lg"),h(t,"class","relative grid grid-cols-countdown justify-items-center gap-y-2 text-black"),h(e,"class","relative w-min flex-shrink-0 p-2 font-digital @3xl:p-4")},m(M,W){U(M,e,W),u(e,t),R(l,t,null),u(t,s),u(t,n),u(t,c),R(d,t,null),u(t,g),u(t,_),u(t,o),R(f,t,null),u(t,C),u(t,j),u(t,m),R(V,t,null),u(t,P),R(k,t,null),u(t,B),u(t,w),u(t,N),R(p,t,null),u(t,v),u(t,H),u(t,J),R(Q,t,null),u(t,me),u(t,X),u(t,xe),R(ee,t,null),fe=!0},p(M,[W]){var Ee,Ie,De,Oe;const S={};W&1&&(S.text=q(((Ee=M[0])==null?void 0:Ee.days)??0)),l.$set(S);const we={};W&1&&(we.text=q(((Ie=M[0])==null?void 0:Ie.hours)??0)),d.$set(we);const Ce={};W&1&&(Ce.text=q(((De=M[0])==null?void 0:De.minutes)??0)),f.$set(Ce);const ye={};W&1&&(ye.text=q(((Oe=M[0])==null?void 0:Oe.seconds)??0)),V.$set(ye)},i(M){fe||(y(l.$$.fragment,M),y(d.$$.fragment,M),y(f.$$.fragment,M),y(V.$$.fragment,M),y(k.$$.fragment,M),y(p.$$.fragment,M),y(Q.$$.fragment,M),y(ee.$$.fragment,M),fe=!0)},o(M){I(l.$$.fragment,M),I(d.$$.fragment,M),I(f.$$.fragment,M),I(V.$$.fragment,M),I(k.$$.fragment,M),I(p.$$.fragment,M),I(Q.$$.fragment,M),I(ee.$$.fragment,M),fe=!1},d(M){M&&x(e),F(l),F(d),F(f),F(V),F(k),F(p),F(Q),F(ee)}}}const Te=new Date("2024-06-01T22:00:00.000Z");function mt(r,e,t=!1){const l=Math.floor(e.valueOf()-r.valueOf());let s=0;return t?s=Math.ceil(l/1e3):s=Math.floor(l/1e3),xt(s)}function xt(r){let e=r;const t=e%60;e=Math.floor(e/60);const l=e%60;e=Math.floor(e/60);const s=e%24;return e=Math.floor(e/24),{seconds:t,minutes:l,hours:s,days:e}}function _t(){const r=lt({seconds:0,minutes:0,hours:0,days:0,initialized:!1,done:!0}),e=setInterval(()=>{const t=new Date;if(Te.valueOf()>t.valueOf()){const l=mt(t,Te,!0);r.set({seconds:l.seconds,minutes:l.minutes,hours:l.hours,days:l.days,initialized:!0,done:!1})}else r.set({seconds:0,minutes:0,hours:0,days:0,initialized:!0,done:!0}),clearInterval(e)},1e3);return tt(r)}const vt=_t();function pt(r,e,t){let l,s=de;ce(r,vt,c=>t(0,l=c)),r.$$.on_destroy.push(()=>s());let{minutes:n}=e;function a(c){t(1,n=c)}return r.$$set=c=>{"minutes"in c&&t(1,n=c.minutes)},r.$$.update=()=>{r.$$.dirty&1&&a(l.minutes??0)},[l,n]}class bt extends re{constructor(e){super(),ie(this,e,pt,ht,ae,{minutes:1})}}function $t(r){let e,t,l;const s=r[7].default,n=Ke(s,r,r[6],null);return{c(){e=b("a"),n&&n.c(),this.h()},l(a){e=$(a,"A",{href:!0,class:!0,target:!0});var c=z(e);n&&n.l(c),c.forEach(x),this.h()},h(){h(e,"href",r[0]),h(e,"class",t=r[1]+" relative flex items-center justify-center rounded-full lg:min-h-12 lg:min-w-12 "+r[3]+" "+r[2]+" gap-2 text-base font-bold outline-none hover:scale-105 focus:scale-100 focus:ring-3 focus:ring-offset-3 "+r[4]+" disabled:pointer-events-auto disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-30"),h(e,"target",r[5])},m(a,c){U(a,e,c),n&&n.m(e,null),l=!0},p(a,[c]){n&&n.p&&(!l||c&64)&&Ye(n,s,a,a[6],l?Je(s,a[6],c,null):Ze(a[6]),null),(!l||c&1)&&h(e,"href",a[0]),(!l||c&30&&t!==(t=a[1]+" relative flex items-center justify-center rounded-full lg:min-h-12 lg:min-w-12 "+a[3]+" "+a[2]+" gap-2 text-base font-bold outline-none hover:scale-105 focus:scale-100 focus:ring-3 focus:ring-offset-3 "+a[4]+" disabled:pointer-events-auto disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-30"))&&h(e,"class",t),(!l||c&32)&&h(e,"target",a[5])},i(a){l||(y(n,a),l=!0)},o(a){I(n,a),l=!1},d(a){a&&x(e),n&&n.d(a)}}}function kt(r,e,t){let{$$slots:l={},$$scope:s}=e,{url:n}=e,{margin:a="my-8"}=e,{padding:c="px-4 py-1 lg:px-8 lg:py-2"}=e,{color:d="bg-firebrick-700 hover:bg-firebrick-600 disabled:bg-firebrick-700"}=e,{focusRingColor:g="focus:ring-white focus:ring-offset-black"}=e,{target:_="_self"}=e;return r.$$set=i=>{"url"in i&&t(0,n=i.url),"margin"in i&&t(1,a=i.margin),"padding"in i&&t(2,c=i.padding),"color"in i&&t(3,d=i.color),"focusRingColor"in i&&t(4,g=i.focusRingColor),"target"in i&&t(5,_=i.target),"$$scope"in i&&t(6,s=i.$$scope)},[n,a,c,d,g,_,s,l]}class wt extends re{constructor(e){super(),ie(this,e,kt,$t,ae,{url:0,margin:1,padding:2,color:3,focusRingColor:4,target:5})}}function Ct(r){let e,t="We're getting close",l,s,n="Hack harder. Keep those solves coming. You can do it!";return{c(){e=b("h2"),e.textContent=t,l=D(),s=b("p"),s.textContent=n,this.h()},l(a){e=$(a,"H2",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1670slc"&&(e.textContent=t),l=O(a),s=$(a,"P",{class:!0,"data-svelte-h":!0}),G(s)!=="svelte-11r0zzw"&&(s.textContent=n),this.h()},h(){h(e,"class","mb-4 flex-auto flex-grow-0 text-center text-3xl font-bold @3xl:text-5xl"),h(s,"class","text-center font-medium @3xl:text-lg")},m(a,c){U(a,e,c),U(a,l,c),U(a,s,c)},d(a){a&&(x(e),x(l),x(s))}}}function yt(r){let e,t="GPN CTF 2024 is over",l,s,n="Thank you all for participating. See you next year!";return{c(){e=b("h2"),e.textContent=t,l=D(),s=b("p"),s.textContent=n,this.h()},l(a){e=$(a,"H2",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-uz1nke"&&(e.textContent=t),l=O(a),s=$(a,"P",{class:!0,"data-svelte-h":!0}),G(s)!=="svelte-hetpdv"&&(s.textContent=n),this.h()},h(){h(e,"class","mb-4 flex-auto flex-grow-0 text-center text-3xl font-bold @3xl:text-5xl"),h(s,"class","text-center font-medium @3xl:text-lg")},m(a,c){U(a,e,c),U(a,l,c),U(a,s,c)},d(a){a&&(x(e),x(l),x(s))}}}function Et(r){let e;return{c(){e=ne("open_in_new")},l(t){e=se(t,"open_in_new")},m(t,l){U(t,e,l)},d(t){t&&x(e)}}}function It(r){let e,t,l;return t=new st({props:{class:"text-base",$$slots:{default:[Et]},$$scope:{ctx:r}}}),{c(){e=ne("Feedback "),L(t.$$.fragment)},l(s){e=se(s,"Feedback "),A(t.$$.fragment,s)},m(s,n){U(s,e,n),R(t,s,n),l=!0},p(s,n){const a={};n&4&&(a.$$scope={dirty:n,ctx:s}),t.$set(a)},i(s){l||(y(t.$$.fragment,s),l=!0)},o(s){I(t.$$.fragment,s),l=!1},d(s){s&&x(e),F(t,s)}}}function Dt(r){let e,t,l,s,n,a,c,d,g,_,i,o,f,C;function j(k,B){return k[0]==0?yt:Ct}let E=j(r),m=E(r);function V(k){r[1](k)}let P={};return r[0]!==void 0&&(P.minutes=r[0]),_=new bt({props:P}),Qe.push(()=>et(_,"minutes",V)),f=new wt({props:{url:nt,color:"bg-black text-white",margin:"",padding:"px-8 py-2",focusRingColor:"focus:ring-black focus:ring-offset-firebrick-400",target:"_blank",$$slots:{default:[It]},$$scope:{ctx:r}}}),{c(){e=b("section"),t=b("img"),s=D(),n=b("img"),c=D(),d=b("div"),m.c(),g=D(),L(_.$$.fragment),o=D(),L(f.$$.fragment),this.h()},l(k){e=$(k,"SECTION",{class:!0});var B=z(e);t=$(B,"IMG",{class:!0,src:!0,alt:!0}),s=O(B),n=$(B,"IMG",{class:!0,src:!0,alt:!0}),c=O(B),d=$(B,"DIV",{class:!0});var w=z(d);m.l(w),w.forEach(x),g=O(B),A(_.$$.fragment,B),o=O(B),A(f.$$.fragment,B),B.forEach(x),this.h()},h(){h(t,"class","absolute -left-36 -top-[10%] h-[120%] @3xl:-left-24"),je(t.src,l=Ve+"/tree.svg")||h(t,"src",l),h(t,"alt","Background flag"),h(n,"class","absolute -right-56 -top-[10%] h-[120%] @6xl:-right-24"),je(n.src,a=Ve+"/flag.svg")||h(n,"src",a),h(n,"alt","Background flag"),h(d,"class","relative"),h(e,"class","relative mb-4 flex min-h-72 flex-auto flex-col items-center justify-between gap-6 overflow-hidden rounded-xl bg-firebrick-400 px-6 py-12 text-black")},m(k,B){U(k,e,B),u(e,t),u(e,s),u(e,n),u(e,c),u(e,d),m.m(d,null),u(e,g),R(_,e,null),u(e,o),R(f,e,null),C=!0},p(k,[B]){E!==(E=j(k))&&(m.d(1),m=E(k),m&&(m.c(),m.m(d,null)));const w={};!i&&B&1&&(i=!0,w.minutes=k[0],Xe(()=>i=!1)),_.$set(w);const T={};B&4&&(T.$$scope={dirty:B,ctx:k}),f.$set(T)},i(k){C||(y(_.$$.fragment,k),y(f.$$.fragment,k),C=!0)},o(k){I(_.$$.fragment,k),I(f.$$.fragment,k),C=!1},d(k){k&&x(e),m.d(),F(_),F(f)}}}function Ot(r,e,t){let l=0;function s(n){l=n,t(0,l)}return[l,s]}class St extends re{constructor(e){super(),ie(this,e,Ot,Dt,ae,{})}}function jt(r){let e,t,l,s,n,a,c,d,g=r[0].longName+"",_,i,o,f,C,j,E;return n=new at({props:{url:r[0].coverUrl,alt:`${r[0].longName} ${r[0].label.toLowerCase()} cover`}}),j=new qe({props:{size:"h-8 w-8 @6xl:h-10 @6xl:w-10",iconSize:"text-3xl"}}),j.$on("click",r[1]),{c(){e=b("div"),t=b("a"),l=b("div"),s=b("div"),L(n.$$.fragment),a=D(),c=b("div"),d=b("h3"),_=ne(g),o=D(),f=b("div"),C=b("div"),L(j.$$.fragment),this.h()},l(m){e=$(m,"DIV",{class:!0});var V=z(e);t=$(V,"A",{href:!0});var P=z(t);l=$(P,"DIV",{class:!0});var k=z(l);s=$(k,"DIV",{class:!0});var B=z(s);A(n.$$.fragment,B),B.forEach(x),a=O(k),c=$(k,"DIV",{class:!0});var w=z(c);d=$(w,"H3",{class:!0});var T=z(d);_=se(T,g),T.forEach(x),w.forEach(x),k.forEach(x),P.forEach(x),o=O(V),f=$(V,"DIV",{class:!0});var N=z(f);C=$(N,"DIV",{class:!0});var p=z(C);A(j.$$.fragment,p),p.forEach(x),N.forEach(x),V.forEach(x),this.h()},h(){h(s,"class","flex aspect-square h-12 flex-shrink-0 overflow-hidden rounded-l-md @6xl:h-14"),h(d,"class","overflow-hidden text-ellipsis text-sm font-medium @6xl:text-base"),h(c,"class","flex h-full flex-auto items-center overflow-hidden p-1 px-2 @6xl:p-2 @6xl:pl-4 lg:pr-12 lg:@6xl:pr-14"),h(l,"class","flex h-full rounded-md bg-white-alpha-5 group-focus-within:bg-white-alpha-15 group-hover:bg-white-alpha-15"),h(t,"href",i=r[0].path),h(C,"class","rounded-full shadow-lg transition-all"),h(f,"class","text-shadow absolute bottom-0 right-2 top-0 z-10 hidden translate-y-2 items-center rounded-full opacity-0 transition-all focus:translate-y-0 focus:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"),h(e,"class","group relative h-full transition-all duration-200")},m(m,V){U(m,e,V),u(e,t),u(t,l),u(l,s),R(n,s,null),u(l,a),u(l,c),u(c,d),u(d,_),u(e,o),u(e,f),u(f,C),R(j,C,null),E=!0},p(m,[V]){const P={};V&1&&(P.url=m[0].coverUrl),V&1&&(P.alt=`${m[0].longName} ${m[0].label.toLowerCase()} cover`),n.$set(P),(!E||V&1)&&g!==(g=m[0].longName+"")&&ue(_,g),(!E||V&1&&i!==(i=m[0].path))&&h(t,"href",i)},i(m){E||(y(n.$$.fragment,m),y(j.$$.fragment,m),E=!0)},o(m){I(n.$$.fragment,m),I(j.$$.fragment,m),E=!1},d(m){m&&x(e),F(n),F(j)}}}function Vt(r,e,t){let l;ce(r,We,a=>t(2,l=a));let{tag:s}=e;function n(){Ge.play(s,(l==null?void 0:l[s.id].map(a=>a.id))??[])}return r.$$set=a=>{"tag"in a&&t(0,s=a.tag)},[s,n]}class Tt extends re{constructor(e){super(),ie(this,e,Vt,jt,ae,{tag:0})}}function Mt(r){let e,t,l;return t=new qe({props:{size:"h-12 w-12",iconSize:"text-4xl"}}),t.$on("click",r[2]),{c(){e=b("div"),L(t.$$.fragment),this.h()},l(s){e=$(s,"DIV",{slot:!0,class:!0});var n=z(e);A(t.$$.fragment,n),n.forEach(x),this.h()},h(){h(e,"slot","top"),h(e,"class","text-shadow absolute bottom-2 right-2 z-10 hidden translate-y-2 rounded-full opacity-0 shadow-lg transition-all focus:translate-y-0 focus:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 lg:block")},m(s,n){U(s,e,n),R(t,e,null),l=!0},p:de,i(s){l||(y(t.$$.fragment,s),l=!0)},o(s){I(t.$$.fragment,s),l=!1},d(s){s&&x(e),F(t)}}}function Bt(r){let e,t;return e=new ct({props:{url:r[0].path,name:r[0].longName,description:r[0].description,imageUrl:r[0].coverUrl,imageAlt:`${r[0].longName} ${r[1]} cover`,$$slots:{top:[Mt]},$$scope:{ctx:r}}}),{c(){L(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,s){R(e,l,s),t=!0},p(l,[s]){const n={};s&1&&(n.url=l[0].path),s&1&&(n.name=l[0].longName),s&1&&(n.description=l[0].description),s&1&&(n.imageUrl=l[0].coverUrl),s&1&&(n.imageAlt=`${l[0].longName} ${l[1]} cover`),s&16&&(n.$$scope={dirty:s,ctx:l}),e.$set(n)},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){I(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function Nt(r,e,t){let l;ce(r,We,c=>t(3,l=c));let{tag:s}=e,n=s.label.toLowerCase();function a(){Ge.play(s,(l==null?void 0:l[s.id].map(c=>c.id))??[])}return r.$$set=c=>{"tag"in c&&t(0,s=c.tag)},[s,n,a]}class _e extends re{constructor(e){super(),ie(this,e,Nt,Bt,ae,{tag:0})}}function Me(r,e,t){const l=r.slice();return l[8]=e[t],l}function Be(r,e,t){const l=r.slice();return l[8]=e[t],l}function Ne(r,e,t){const l=r.slice();return l[8]=e[t],l}function ze(r,e,t){const l=r.slice();return l[8]=e[t],l}function zt(r){let e;return{c(){e=ne(`This page is archived. Solves are only stored locally and challenge instance are no longer
			provided.`)},l(t){e=se(t,`This page is archived. Solves are only stored locally and challenge instance are no longer
			provided.`)},m(t,l){U(t,e,l)},d(t){t&&x(e)}}}function Pe(r,e){let t,l,s;return l=new Tt({props:{tag:e[8]}}),{key:r,first:null,c(){t=Y(),L(l.$$.fragment),this.h()},l(n){t=Y(),A(l.$$.fragment,n),this.h()},h(){this.first=t},m(n,a){U(n,t,a),R(l,n,a),s=!0},p(n,a){e=n;const c={};a&1&&(c.tag=e[8]),l.$set(c)},i(n){s||(y(l.$$.fragment,n),s=!0)},o(n){I(l.$$.fragment,n),s=!1},d(n){n&&x(t),F(l,n)}}}function He(r){let e,t,l="Categories",s,n,a=[],c=new Map,d,g=Z(Object.values(r[1]));const _=i=>i[8].id;for(let i=0;i<g.length;i+=1){let o=Ne(r,g,i),f=_(o);c.set(f,a[i]=Ue(f,o))}return{c(){e=b("section"),t=b("h2"),t.textContent=l,s=D(),n=b("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=$(i,"SECTION",{class:!0});var o=z(e);t=$(o,"H2",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-14sh60h"&&(t.textContent=l),s=O(o),n=$(o,"DIV",{class:!0});var f=z(n);for(let C=0;C<a.length;C+=1)a[C].l(f);f.forEach(x),o.forEach(x),this.h()},h(){h(t,"class","mb-2 flex-auto text-2xl font-bold"),h(n,"class","-mx-3 grid grid-cols-2 @md:grid-cols-3 @xl:grid-cols-4 @3xl:grid-cols-5 @5xl:grid-cols-6 @6xl:grid-cols-7 @7xl:grid-cols-8"),h(e,"class","mb-4 flex min-h-72 flex-auto flex-col")},m(i,o){U(i,e,o),u(e,t),u(e,s),u(e,n);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(n,null);d=!0},p(i,o){o&2&&(g=Z(Object.values(i[1])),te(),a=ge(a,o,_,1,i,g,c,n,he,Ue,null,Ne),le())},i(i){if(!d){for(let o=0;o<g.length;o+=1)y(a[o]);d=!0}},o(i){for(let o=0;o<a.length;o+=1)I(a[o]);d=!1},d(i){i&&x(e);for(let o=0;o<a.length;o+=1)a[o].d()}}}function Ue(r,e){let t,l,s;return l=new _e({props:{tag:e[8]}}),{key:r,first:null,c(){t=Y(),L(l.$$.fragment),this.h()},l(n){t=Y(),A(l.$$.fragment,n),this.h()},h(){this.first=t},m(n,a){U(n,t,a),R(l,n,a),s=!0},p(n,a){e=n;const c={};a&2&&(c.tag=e[8]),l.$set(c)},i(n){s||(y(l.$$.fragment,n),s=!0)},o(n){I(l.$$.fragment,n),s=!1},d(n){n&&x(t),F(l,n)}}}function Le(r){let e,t,l="Compilations",s,n,a=[],c=new Map,d,g=Z(Object.values(r[3]));const _=i=>i[8].id;for(let i=0;i<g.length;i+=1){let o=Be(r,g,i),f=_(o);c.set(f,a[i]=Ae(f,o))}return{c(){e=b("section"),t=b("h2"),t.textContent=l,s=D(),n=b("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=$(i,"SECTION",{class:!0});var o=z(e);t=$(o,"H2",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-exjhkd"&&(t.textContent=l),s=O(o),n=$(o,"DIV",{class:!0});var f=z(n);for(let C=0;C<a.length;C+=1)a[C].l(f);f.forEach(x),o.forEach(x),this.h()},h(){h(t,"class","mb-2 flex-auto text-2xl font-bold"),h(n,"class","-mx-3 grid grid-cols-2 @md:grid-cols-3 @xl:grid-cols-4 @3xl:grid-cols-5 @5xl:grid-cols-6 @6xl:grid-cols-7 @7xl:grid-cols-8"),h(e,"class","mb-4 flex min-h-72 flex-auto flex-col")},m(i,o){U(i,e,o),u(e,t),u(e,s),u(e,n);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(n,null);d=!0},p(i,o){o&8&&(g=Z(Object.values(i[3])),te(),a=ge(a,o,_,1,i,g,c,n,he,Ae,null,Be),le())},i(i){if(!d){for(let o=0;o<g.length;o+=1)y(a[o]);d=!0}},o(i){for(let o=0;o<a.length;o+=1)I(a[o]);d=!1},d(i){i&&x(e);for(let o=0;o<a.length;o+=1)a[o].d()}}}function Ae(r,e){let t,l,s;return l=new _e({props:{tag:e[8]}}),{key:r,first:null,c(){t=Y(),L(l.$$.fragment),this.h()},l(n){t=Y(),A(l.$$.fragment,n),this.h()},h(){this.first=t},m(n,a){U(n,t,a),R(l,n,a),s=!0},p(n,a){e=n;const c={};a&8&&(c.tag=e[8]),l.$set(c)},i(n){s||(y(l.$$.fragment,n),s=!0)},o(n){I(l.$$.fragment,n),s=!1},d(n){n&&x(t),F(l,n)}}}function Re(r){let e,t,l="Tags",s,n,a=[],c=new Map,d,g=Z(Object.values(r[2]));const _=i=>i[8].id;for(let i=0;i<g.length;i+=1){let o=Me(r,g,i),f=_(o);c.set(f,a[i]=Fe(f,o))}return{c(){e=b("section"),t=b("h2"),t.textContent=l,s=D(),n=b("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=$(i,"SECTION",{class:!0});var o=z(e);t=$(o,"H2",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-4k7mw8"&&(t.textContent=l),s=O(o),n=$(o,"DIV",{class:!0});var f=z(n);for(let C=0;C<a.length;C+=1)a[C].l(f);f.forEach(x),o.forEach(x),this.h()},h(){h(t,"class","mb-2 flex-auto text-2xl font-bold"),h(n,"class","-mx-3 grid grid-cols-2 @md:grid-cols-3 @xl:grid-cols-4 @3xl:grid-cols-5 @5xl:grid-cols-6 @6xl:grid-cols-7 @7xl:grid-cols-8"),h(e,"class","mb-4 flex min-h-72 flex-auto flex-col")},m(i,o){U(i,e,o),u(e,t),u(e,s),u(e,n);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(n,null);d=!0},p(i,o){o&4&&(g=Z(Object.values(i[2])),te(),a=ge(a,o,_,1,i,g,c,n,he,Fe,null,Me),le())},i(i){if(!d){for(let o=0;o<g.length;o+=1)y(a[o]);d=!0}},o(i){for(let o=0;o<a.length;o+=1)I(a[o]);d=!1},d(i){i&&x(e);for(let o=0;o<a.length;o+=1)a[o].d()}}}function Fe(r,e){let t,l,s;return l=new _e({props:{tag:e[8]}}),{key:r,first:null,c(){t=Y(),L(l.$$.fragment),this.h()},l(n){t=Y(),A(l.$$.fragment,n),this.h()},h(){this.first=t},m(n,a){U(n,t,a),R(l,n,a),s=!0},p(n,a){e=n;const c={};a&4&&(c.tag=e[8]),l.$set(c)},i(n){s||(y(l.$$.fragment,n),s=!0)},o(n){I(l.$$.fragment,n),s=!1},d(n){n&&x(t),F(l,n)}}}function Pt(r){let e,t,l,s,n,a="Welcome",c,d,g=[],_=new Map,i,o,f,C=Object.keys(r[1]).length>0,j,E=Object.keys(r[3]).length>0,m,V=Object.keys(r[2]).length>0,P;t=new ft({props:{$$slots:{default:[zt]},$$scope:{ctx:r}}});let k=Z(r[0]);const B=p=>p[8].id;for(let p=0;p<k.length;p+=1){let v=ze(r,k,p),H=B(v);_.set(H,g[p]=Pe(H,v))}o=new St({});let w=C&&He(r),T=E&&Le(r),N=V&&Re(r);return{c(){e=b("div"),L(t.$$.fragment),l=D(),s=b("section"),n=b("h1"),n.textContent=a,c=D(),d=b("div");for(let p=0;p<g.length;p+=1)g[p].c();i=D(),L(o.$$.fragment),f=D(),w&&w.c(),j=D(),T&&T.c(),m=D(),N&&N.c(),this.h()},l(p){e=$(p,"DIV",{class:!0});var v=z(e);A(t.$$.fragment,v),l=O(v),s=$(v,"SECTION",{class:!0,"aria-label":!0});var H=z(s);n=$(H,"H1",{class:!0,"data-svelte-h":!0}),G(n)!=="svelte-1otaxtp"&&(n.textContent=a),c=O(H),d=$(H,"DIV",{class:!0});var oe=z(d);for(let J=0;J<g.length;J+=1)g[J].l(oe);oe.forEach(x),H.forEach(x),i=O(v),A(o.$$.fragment,v),f=O(v),w&&w.l(v),j=O(v),T&&T.l(v),m=O(v),N&&N.l(v),v.forEach(x),this.h()},h(){h(n,"class","mb-2 text-3xl font-bold"),h(d,"class","grid grid-cols-2 gap-2 @3xl:grid-cols-4"),h(s,"class","mb-4"),h(s,"aria-label","Last played"),h(e,"class","flex min-h-0 flex-col gap-6 px-6")},m(p,v){U(p,e,v),R(t,e,null),u(e,l),u(e,s),u(s,n),u(s,c),u(s,d);for(let H=0;H<g.length;H+=1)g[H]&&g[H].m(d,null);u(e,i),R(o,e,null),u(e,f),w&&w.m(e,null),u(e,j),T&&T.m(e,null),u(e,m),N&&N.m(e,null),P=!0},p(p,v){const H={};v&131072&&(H.$$scope={dirty:v,ctx:p}),t.$set(H),v&1&&(k=Z(p[0]),te(),g=ge(g,v,B,1,p,k,_,d,he,Pe,null,ze),le()),v&2&&(C=Object.keys(p[1]).length>0),C?w?(w.p(p,v),v&2&&y(w,1)):(w=He(p),w.c(),y(w,1),w.m(e,j)):w&&(te(),I(w,1,1,()=>{w=null}),le()),v&8&&(E=Object.keys(p[3]).length>0),E?T?(T.p(p,v),v&8&&y(T,1)):(T=Le(p),T.c(),y(T,1),T.m(e,m)):T&&(te(),I(T,1,1,()=>{T=null}),le()),v&4&&(V=Object.keys(p[2]).length>0),V?N?(N.p(p,v),v&4&&y(N,1)):(N=Re(p),N.c(),y(N,1),N.m(e,null)):N&&(te(),I(N,1,1,()=>{N=null}),le())},i(p){if(!P){y(t.$$.fragment,p);for(let v=0;v<k.length;v+=1)y(g[v]);y(o.$$.fragment,p),y(w),y(T),y(N),P=!0}},o(p){I(t.$$.fragment,p);for(let v=0;v<g.length;v+=1)I(g[v]);I(o.$$.fragment,p),I(w),I(T),I(N),P=!1},d(p){p&&x(e),F(t);for(let v=0;v<g.length;v+=1)g[v].d();F(o),w&&w.d(),T&&T.d(),N&&N.d()}}}function Ht(r){let e,t;return e=new rt({props:{$$slots:{default:[Pt]},$$scope:{ctx:r}}}),{c(){L(e.$$.fragment)},l(l){A(e.$$.fragment,l)},m(l,s){R(e,l,s),t=!0},p(l,[s]){const n={};s&131087&&(n.$$scope={dirty:s,ctx:l}),e.$set(n)},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){I(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function Ut(r,e,t){let l,s;ce(r,ot,i=>t(4,l=i)),ce(r,it,i=>t(5,s=i));let n=[];function a(i){n.length==0&&t(0,n=l?i.slice(0,8).map(o=>l[o]):[])}let c=["all","unsolved"],d,g,_;return r.$$.update=()=>{r.$$.dirty&32&&a(s),r.$$.dirty&16&&t(1,d=l?Object.fromEntries(Object.entries(l).filter(([i,o])=>o.isCategory)):{}),r.$$.dirty&16&&t(2,g=l?Object.fromEntries(Object.entries(l).filter(([i,o])=>!o.isCategory&&!c.includes(o.id))):{}),r.$$.dirty&16&&t(3,_=l?Object.fromEntries(Object.entries(l).filter(([i,o])=>!o.isCategory&&c.includes(o.id))):{})},[n,d,g,_,l,s]}class el extends re{constructor(e){super(),ie(this,e,Ut,Ht,ae,{})}}export{el as component,Xt as universal};

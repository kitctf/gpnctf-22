import{s as X,l as Z,e as b,a as C,c as $,b as S,f as h,g as I,h as v,i as E,j as _,q as ee,r as te,v as le,t as P,d as A,k as O,w as ae,x as L}from"./scheduler.DC8yHMXg.js";import{S as se,i as ne,c as j,b as D,m as M,t as N,a as T,d as U,g as re,e as ie}from"./index.D1IU_8Bf.js";import{e as Y,u as oe,o as fe}from"./each.ByX00CxH.js";import{b as ce}from"./entry.CFy_tK77.js";import{a as F}from"./Navigation.Dbxaru7Q.js";import{O as pe,o as me}from"./OverviewContent.tkxQeLYF.js";import{S as G,C as ue}from"./ChallengeRow.CA24Bz4q.js";import{T as de}from"./TableRow.D3W5m3gh.js";import{P as W}from"./PlayButton.BteKBuk-.js";import{p as R}from"./events.Bs3-nudj.js";import{t as he}from"./state.Df6o7xx4.js";function J(i,e,a){const t=i.slice();return t[10]=e[a],t[12]=a,t}function K(i,e){let a,t,l;function s(){return e[9](e[10])}return t=new ue({props:{index:e[12],challenge:e[10],listCategory:e[1]}}),t.$on("play",s),{key:i,first:null,c(){a=L(),j(t.$$.fragment),this.h()},l(n){a=L(),D(t.$$.fragment,n),this.h()},h(){this.first=a},m(n,p){E(n,a,p),M(t,n,p),l=!0},p(n,p){e=n;const o={};p&16&&(o.index=e[12]),p&16&&(o.challenge=e[10]),p&2&&(o.listCategory=e[1]),t.$set(o)},i(n){l||(N(t.$$.fragment,n),l=!0)},o(n){T(t.$$.fragment,n),l=!1},d(n){n&&h(a),U(t,n)}}}function ge(i){let e,a,t,l,s,n,p,o=[],u=new Map,m,y,z;a=new W({props:{size:"h-14 w-14",iconSize:"text-4xl"}}),a.$on("click",i[5]),n=new de({props:{cells:[{type:"simple",priority:0,size:4,value:"Title"},...i[2],{type:"simple",priority:2,size:1,visible:`hidden ${i[2].length>0?"@3xl:flex":"@2xl:flex"}`,alignment:"justify-end",value:"Points"},{type:"simple",priority:3,size:1,visible:`hidden ${i[2].length>0?"@4xl:flex":"@3xl:flex"}`,alignment:"justify-end",value:"Plays"},{type:"comp",alignment:"justify-end",priority:0,size:1,component:G,props:{solved:i[4].every(Q),label:"Your Solves"}}]}});let f=Y(i[4]);const x=r=>r[10].id;for(let r=0;r<f.length;r+=1){let c=J(i,f,r),d=x(c);u.set(d,o[r]=K(d,c))}return{c(){e=b("div"),j(a.$$.fragment),t=C(),l=b("div"),s=b("table"),j(n.$$.fragment),p=C();for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){e=$(r,"DIV",{class:!0});var c=S(e);D(a.$$.fragment,c),c.forEach(h),t=I(r),l=$(r,"DIV",{class:!0});var d=S(l);s=$(d,"TABLE",{class:!0});var k=S(s);D(n.$$.fragment,k),p=I(k);for(let g=0;g<o.length;g+=1)o[g].l(k);k.forEach(h),d.forEach(h),this.h()},h(){v(e,"class","relative p-6"),v(s,"class","flex flex-col"),v(l,"class","relative @3xl:px-6")},m(r,c){E(r,e,c),M(a,e,null),E(r,t,c),E(r,l,c),_(l,s),M(n,s,null),_(s,p);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(s,null);m=!0,y||(z=[ee(me.call(null,e,{offset:64,threshold:.6})),te(e,"screenIntersect",i[7])],y=!0)},p(r,c){const d={};c&20&&(d.cells=[{type:"simple",priority:0,size:4,value:"Title"},...r[2],{type:"simple",priority:2,size:1,visible:`hidden ${r[2].length>0?"@3xl:flex":"@2xl:flex"}`,alignment:"justify-end",value:"Points"},{type:"simple",priority:3,size:1,visible:`hidden ${r[2].length>0?"@4xl:flex":"@3xl:flex"}`,alignment:"justify-end",value:"Plays"},{type:"comp",alignment:"justify-end",priority:0,size:1,component:G,props:{solved:r[4].every(Q),label:"Your Solves"}}]),n.$set(d),c&82&&(f=Y(r[4]),re(),o=oe(o,c,x,1,r,f,u,s,fe,K,null,J),ie())},i(r){if(!m){N(a.$$.fragment,r),N(n.$$.fragment,r);for(let c=0;c<f.length;c+=1)N(o[c]);m=!0}},o(r){T(a.$$.fragment,r),T(n.$$.fragment,r);for(let c=0;c<o.length;c+=1)T(o[c]);m=!1},d(r){r&&(h(e),h(t),h(l)),U(a),U(n);for(let c=0;c<o.length;c+=1)o[c].d();y=!1,le(z)}}}function _e(i){let e,a,t,l,s=i[0].longName+"",n,p,o;return a=new W({props:{size:"h-12 w-12",iconSize:"text-4xl"}}),a.$on("click",i[5]),{c(){e=b("div"),j(a.$$.fragment),t=C(),l=b("span"),n=P(s),this.h()},l(u){e=$(u,"DIV",{slot:!0,class:!0});var m=S(e);D(a.$$.fragment,m),t=I(m),l=$(m,"SPAN",{class:!0});var y=S(l);n=A(y,s),y.forEach(h),m.forEach(h),this.h()},h(){v(l,"class","text-2xl font-bold"),v(e,"slot","header"),v(e,"class",p="flex flex-1 items-center gap-2 transition-all duration-300 "+(i[3]?"pointer-events-none opacity-0":"pointer-events-auto opacity-100"))},m(u,m){E(u,e,m),M(a,e,null),_(e,t),_(e,l),_(l,n),o=!0},p(u,m){(!o||m&1)&&s!==(s=u[0].longName+"")&&O(n,s),(!o||m&8&&p!==(p="flex flex-1 items-center gap-2 transition-all duration-300 "+(u[3]?"pointer-events-none opacity-0":"pointer-events-auto opacity-100")))&&v(e,"class",p)},i(u){o||(N(a.$$.fragment,u),o=!0)},o(u){T(a.$$.fragment,u),o=!1},d(u){u&&h(e),U(a)}}}function ve(i){let e,a=i[0].description+"",t,l,s,n,p,o,u,m,y,z,f,x=i[4].length+"",r,c,d=i[4].length!=1?"s":"",k;return{c(){e=b("span"),t=P(a),l=C(),s=b("div"),n=b("div"),p=b("img"),u=C(),m=b("span"),y=P(F),z=C(),f=b("span"),r=P(x),c=P(" challenge"),k=P(d),this.h()},l(g){e=$(g,"SPAN",{class:!0});var w=S(e);t=A(w,a),w.forEach(h),l=I(g),s=$(g,"DIV",{class:!0});var V=S(s);n=$(V,"DIV",{class:!0});var B=S(n);p=$(B,"IMG",{src:!0,alt:!0,class:!0}),u=I(B),m=$(B,"SPAN",{class:!0});var H=S(m);y=A(H,F),H.forEach(h),B.forEach(h),z=I(V),f=$(V,"SPAN",{class:!0});var q=S(f);r=A(q,x),c=A(q," challenge"),k=A(q,d),q.forEach(h),V.forEach(h),this.h()},h(){v(e,"class","line-clamp-2 overflow-hidden text-ellipsis text-xs text-white-alpha-70 @md:text-sm @3xl:text-base"),ae(p.src,o=ce+"/team.svg")||v(p,"src",o),v(p,"alt",F+" team logo"),v(p,"class","h-4 w-4 rounded-full @3xl:h-6 @3xl:w-6"),v(m,"class","text-xs font-bold @3xl:text-sm"),v(n,"class","flex items-center gap-1"),v(f,"class","text-xs before:mx-1 before:content-['•'] @3xl:text-sm"),v(s,"class","flex items-center")},m(g,w){E(g,e,w),_(e,t),E(g,l,w),E(g,s,w),_(s,n),_(n,p),_(n,u),_(n,m),_(m,y),_(s,z),_(s,f),_(f,r),_(f,c),_(f,k)},p(g,w){w&1&&a!==(a=g[0].description+"")&&O(t,a),w&16&&x!==(x=g[4].length+"")&&O(r,x),w&16&&d!==(d=g[4].length!=1?"s":"")&&O(k,d)},d(g){g&&(h(e),h(l),h(s))}}}function ye(i){let e,a;return e=new pe({props:{label:i[0].label,name:i[0].longName,imageUrl:i[0].coverUrl,imageAlt:`${i[0].label} cover`,$$slots:{details:[ve],header:[_e],default:[ge]},$$scope:{ctx:i}}}),{c(){j(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,l){M(e,t,l),a=!0},p(t,[l]){const s={};l&1&&(s.label=t[0].label),l&1&&(s.name=t[0].longName),l&1&&(s.imageUrl=t[0].coverUrl),l&1&&(s.imageAlt=`${t[0].label} cover`),l&8223&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){a||(N(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){U(e,t)}}}const Q=i=>i.solvedByMe;function be(i,e,a){let t,l;Z(i,he,f=>a(8,l=f));let{tag:s}=e,{listCategory:n=!1}=e,p;function o(){R.play(s,(l==null?void 0:l[s.id].map(f=>f.id))??[])}function u(f){R.playFrom(s,f.id,(l==null?void 0:l[s.id].map(x=>x.id))??[])}let m=!0;function y(f){a(3,m=f.detail.onScreen)}const z=f=>u(f);return i.$$set=f=>{"tag"in f&&a(0,s=f.tag),"listCategory"in f&&a(1,n=f.listCategory)},i.$$.update=()=>{i.$$.dirty&257&&a(4,t=(l==null?void 0:l[s.id])??[]),i.$$.dirty&2&&a(2,p=n?[{type:"simple",priority:1,size:3,visible:"hidden @2xl:flex",value:"Category"}]:[])},[s,n,p,m,t,o,u,y,l,z]}class Ne extends se{constructor(e){super(),ne(this,e,be,ye,X,{tag:0,listCategory:1})}}export{Ne as T};
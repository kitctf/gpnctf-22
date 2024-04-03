import{s as se,u as xe,v as we,w as Ee,x as ke,y as Ce,z as De,A as Pe,n as X,c as ce,a as Te}from"../chunks/scheduler.BYGWo1_H.js";import{S as ae,i as re,e as b,c as x,a as F,d as f,l as _,m as ge,g as $,q as j,r as H,A as _e,h as v,s as L,n as U,k as oe,f as N,o as K,p as q,y as Se,w as Ve,u as B,t as T,b as S,j as Y,B as Oe}from"../chunks/index.88rotWkd.js";import{c as Ie,f as O}from"../chunks/util.BzkHJEmb.js";import{d as Le,w as fe,a as ie,b as z}from"../chunks/paths.B7PHTjwL.js";import{p as Ne}from"../chunks/stores.ZKMBeUWR.js";function Re(n,e){const t={},l={},r={$$scope:1};let s=n.length;for(;s--;){const o=n[s],a=e[s];if(a){for(const i in o)i in a||(l[i]=1);for(const i in a)r[i]||(t[i]=a[i],r[i]=1);n[s]=a}else for(const i in o)r[i]=1}for(const o in l)o in t||(t[o]=void 0);return t}const je=!0,Et=Object.freeze(Object.defineProperty({__proto__:null,prerender:je},Symbol.toStringTag,{value:"Module"}));function He(n){let e,t,l;const r=n[3].default,s=xe(r,n,n[2],null);return{c(){e=b("span"),s&&s.c(),this.h()},l(o){e=x(o,"SPAN",{class:!0,"aria-hidden":!0});var a=F(e);s&&s.l(a),a.forEach(f),this.h()},h(){_(e,"class",t="material-symbols-rounded select-none leading-none "+n[1]),_(e,"aria-hidden","true"),ge(e,"icon-filled",n[0])},m(o,a){$(o,e,a),s&&s.m(e,null),l=!0},p(o,[a]){s&&s.p&&(!l||a&4)&&we(s,r,o,o[2],l?ke(r,o[2],a,null):Ee(o[2]),null),(!l||a&2&&t!==(t="material-symbols-rounded select-none leading-none "+o[1]))&&_(e,"class",t),(!l||a&3)&&ge(e,"icon-filled",o[0])},i(o){l||(j(s,o),l=!0)},o(o){H(s,o),l=!1},d(o){o&&f(e),s&&s.d(o)}}}function Me(n,e,t){let{$$slots:l={},$$scope:r}=e,{fill:s=!1}=e,{class:o=""}=e;return n.$$set=a=>{"fill"in a&&t(0,s=a.fill),"class"in a&&t(1,o=a.class),"$$scope"in a&&t(2,r=a.$$scope)},[s,o,r,l]}class ne extends ae{constructor(e){super(),re(this,e,Me,He,se,{fill:0,class:1})}}function Ge(n){return Object.keys(n).reduce((e,t)=>n[t]===void 0?e:e+`${t}:${n[t]};`,"")}Ge({position:"absolute",opacity:0,"pointer-events":"none",margin:0,transform:"translateX(-100%)"});function he(n){function e(t){return t(n),()=>{}}return{subscribe:e}}const ue=n=>new Proxy(n,{get(e,t,l){return Reflect.get(e,t,l)},ownKeys(e){return Reflect.ownKeys(e).filter(t=>t!=="action")}}),ve=n=>typeof n=="function";Ae("empty");function Ae(n,e){const{stores:t,action:l,returned:r}=e??{},s=(()=>{if(t&&r)return Le(t,a=>{const i=r(a);if(ve(i)){const d=(...p)=>ue({...i(...p),[`data-melt-${n}`]:"",action:l??le});return d.action=l??le,d}return ue({...i,[`data-melt-${n}`]:"",action:l??le})});{const a=r,i=a==null?void 0:a();if(ve(i)){const d=(...p)=>ue({...i(...p),[`data-melt-${n}`]:"",action:l??le});return d.action=l??le,he(d)}return he(ue({...i,[`data-melt-${n}`]:"",action:l??le}))}})(),o=l??(()=>{});return o.subscribe=s.subscribe,o}function ze(n){const e=s=>s?`${n}-${s}`:n,t=s=>`data-melt-${n}${s?`-${s}`:""}`,l=s=>`[data-melt-${n}${s?`-${s}`:""}]`;return{name:e,attribute:t,selector:l,getEl:s=>document.querySelector(l(s))}}function le(){}function ye(n,e,t,l){const r=Array.isArray(e)?e:[e];return r.forEach(s=>n.addEventListener(s,t,l)),()=>{r.forEach(s=>n.removeEventListener(s,t,l))}}function Fe(n,...e){const t={};for(const l of Object.keys(n))e.includes(l)||(t[l]=n[l]);return t}function de(n){return{...n,get:()=>Ce(n)}}de.writable=function(n){const e=fe(n);let t=n;return{subscribe:e.subscribe,set(l){e.set(l),t=l},update(l){const r=l(t);e.set(r),t=r},get(){return t}}};de.derived=function(n,e){const t=new Map,l=()=>{const s=Array.isArray(n)?n.map(o=>o.get()):n.get();return e(s)};return{get:l,subscribe:s=>{const o=[];return(Array.isArray(n)?n:[n]).forEach(i=>{o.push(i.subscribe(()=>{s(l())}))}),s(l()),t.set(s,o),()=>{const i=t.get(s);if(i)for(const d of i)d();t.delete(s)}}}};const We=(n,e)=>{const t=de(n),l=(s,o)=>{t.update(a=>{const i=s(a);let d=i;return e&&(d=e({curr:a,next:i})),o==null||o(d),d})};return{...t,update:l,set:s=>{l(()=>s)}}},Ue={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",A:"a",P:"p"};function Ke(n){const e={};return Object.keys(n).forEach(t=>{const l=t,r=n[l];e[l]=de(fe(r))}),e}ie(void 0,n=>{function e(l){n(l),n(void 0)}return ye(document,"pointerup",e,{passive:!1,capture:!0})});ie(void 0,n=>{function e(l){l&&l.key===Ue.ESCAPE&&n(l),n(void 0)}return ye(document,"keydown",e,{passive:!1})});ie(!1),ie(!1),ie(void 0);const qe={isDateDisabled:void 0,isDateUnavailable:void 0,value:void 0,preventDeselect:!1,numberOfMonths:1,pagedNavigation:!1,weekStartsOn:0,fixedWeeks:!1,calendarLabel:"Event Date",locale:"en",minValue:void 0,maxValue:void 0,disabled:!1,readonly:!1,weekdayFormat:"narrow"};({...Fe(qe,"isDateDisabled","isDateUnavailable","value","locale","disabled","readonly","minValue","maxValue","weekdayFormat")});const Be={defaultValue:0,max:100},{name:Xe}=ze("progress"),Je=n=>{const e={...Be,...n},t=Ke(Fe(e,"value")),{max:l}=t,r=e.value??fe(e.defaultValue),s=We(r,e==null?void 0:e.onValueChange);return{elements:{root:Ae(Xe(),{stores:[s,l],returned:([a,i])=>({value:a,max:i,role:"meter","aria-valuemin":0,"aria-valuemax":i,"aria-valuenow":a,"data-value":a,"data-state":a===null?"indeterminate":a===i?"complete":"loading","data-max":i})})},states:{value:s},options:t}};function Qe(n){let e,t,l,r,s,o=[n[1],{class:"group relative flex h-1 flex-grow overflow-hidden rounded-full bg-neutral-700 p-0"}],a={};for(let i=0;i<o.length;i+=1)a=De(a,o[i]);return{c(){e=b("div"),t=b("div"),this.h()},l(i){e=x(i,"DIV",{class:!0});var d=F(e);t=x(d,"DIV",{class:!0,style:!0}),F(t).forEach(f),d.forEach(f),this.h()},h(){_(t,"class","h-1 w-full rounded-full bg-firebrick-600 ease-[cubic-bezier(0.65,0,0.35,1)]"),_(t,"style",l=`transform: translateX(-${100-100*(n[2]??0)/(n[3]??1)}%)`),_e(e,a)},m(i,d){$(i,e,d),v(e,t),r||(s=Pe(n[1].action(e)),r=!0)},p(i,[d]){d&12&&l!==(l=`transform: translateX(-${100-100*(i[2]??0)/(i[3]??1)}%)`)&&_(t,"style",l),_e(e,a=Re(o,[d&2&&i[1],{class:"group relative flex h-1 flex-grow overflow-hidden rounded-full bg-neutral-700 p-0"}]))},i:X,o:X,d(i){i&&f(e),r=!1,s()}}}function Ye(n,e,t){let l,r,s=X,o=()=>(s(),s=Te(i,c=>t(2,r=c)),i),a;n.$$.on_destroy.push(()=>s());let{value:i}=e;o();let{maximum:d}=e;const{elements:{root:p},options:{max:h}}=Je({value:i,max:d});return ce(n,p,c=>t(1,l=c)),ce(n,h,c=>t(3,a=c)),n.$$set=c=>{"value"in c&&o(t(0,i=c.value)),"maximum"in c&&t(6,d=c.maximum)},[i,l,r,a,p,h,d]}class Ze extends ae{constructor(e){super(),re(this,e,Ye,Qe,se,{value:0,maximum:6})}}function et(n){let e;return{c(){e=T("skip_previous")},l(t){e=S(t,"skip_previous")},m(t,l){$(t,e,l)},d(t){t&&f(e)}}}function tt(n){let e;return{c(){e=T("play_arrow")},l(t){e=S(t,"play_arrow")},m(t,l){$(t,e,l)},d(t){t&&f(e)}}}function lt(n){let e;return{c(){e=T("skip_next")},l(t){e=S(t,"skip_next")},m(t,l){$(t,e,l)},d(t){t&&f(e)}}}function $e(n){let e,t=O(n[0].days)+"",l,r,s=O(n[0].hours)+"",o,a,i=O(n[0].minutes)+"",d,p,h=O(n[0].seconds)+"",c;return{c(){e=T("T-"),l=T(t),r=T(":"),o=T(s),a=T(":"),d=T(i),p=T(":"),c=T(h)},l(u){e=S(u,"T-"),l=S(u,t),r=S(u,":"),o=S(u,s),a=S(u,":"),d=S(u,i),p=S(u,":"),c=S(u,h)},m(u,m){$(u,e,m),$(u,l,m),$(u,r,m),$(u,o,m),$(u,a,m),$(u,d,m),$(u,p,m),$(u,c,m)},p(u,m){m&1&&t!==(t=O(u[0].days)+"")&&Y(l,t),m&1&&s!==(s=O(u[0].hours)+"")&&Y(o,s),m&1&&i!==(i=O(u[0].minutes)+"")&&Y(d,i),m&1&&h!==(h=O(u[0].seconds)+"")&&Y(c,h)},d(u){u&&(f(e),f(l),f(r),f(o),f(a),f(d),f(p),f(c))}}}function nt(n){let e;return{c(){e=b("div"),this.h()},l(t){e=x(t,"DIV",{class:!0}),F(e).forEach(f),this.h()},h(){_(e,"class","h-1 w-full rounded-full bg-neutral-700")},m(t,l){$(t,e,l)},p:X,i:X,o:X,d(t){t&&f(e)}}}function st(n){let e,t;return e=new Ze({props:{value:n[1],maximum:n[0].total}}),{c(){U(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,r){q(e,l,r),t=!0},p(l,r){const s={};r&1&&(s.maximum=l[0].total),e.$set(s)},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){B(e,l)}}}function be(n){let e=O(n[0].totalDays)+"",t,l,r=O(n[0].totalHours)+"",s,o,a=O(n[0].totalMinutes)+"",i,d,p=O(n[0].totalSeconds)+"",h;return{c(){t=T(e),l=T(":"),s=T(r),o=T(":"),i=T(a),d=T(":"),h=T(p)},l(c){t=S(c,e),l=S(c,":"),s=S(c,r),o=S(c,":"),i=S(c,a),d=S(c,":"),h=S(c,p)},m(c,u){$(c,t,u),$(c,l,u),$(c,s,u),$(c,o,u),$(c,i,u),$(c,d,u),$(c,h,u)},p(c,u){u&1&&e!==(e=O(c[0].totalDays)+"")&&Y(t,e),u&1&&r!==(r=O(c[0].totalHours)+"")&&Y(s,r),u&1&&a!==(a=O(c[0].totalMinutes)+"")&&Y(i,a),u&1&&p!==(p=O(c[0].totalSeconds)+"")&&Y(h,p)},d(c){c&&(f(t),f(l),f(s),f(o),f(i),f(d),f(h))}}}function at(n){let e,t,l='<img src="GPNCTF.svg" alt="GPN CTF logo" class="h-8 w-8 rounded lg:h-14 lg:w-14"/> <div class="flex flex-col"><a href="https://ctftime.org/event/2257" target="_blank" class="pl-1 pr-3 text-sm font-medium hover:underline">GPN CTF 2024</a> <a href="https://kitctf.de" target="_blank" class="pl-1 pr-3 text-xs text-neutral-400 hover:text-white hover:underline">KITCTF</a></div>',r,s,o,a,i,d,p,h,c,u,m,C,V,M,w,D,J,I,Z;a=new ne({props:{class:"text-3xl",fill:!0,$$slots:{default:[et]},$$scope:{ctx:n}}}),p=new ne({props:{class:"text-3xl lg:text-2xl",fill:!0,$$slots:{default:[tt]},$$scope:{ctx:n}}}),u=new ne({props:{class:"text-3xl",fill:!0,$$slots:{default:[lt]},$$scope:{ctx:n}}});let P=n[0].initialized&&$e(n);const E=[st,nt],k=[];function G(g,y){return g[0].initialized?0:1}w=G(n),D=k[w]=E[w](n);let A=n[0].initialized&&be(n);return{c(){e=b("footer"),t=b("div"),t.innerHTML=l,r=L(),s=b("div"),o=b("div"),U(a.$$.fragment),i=L(),d=b("a"),U(p.$$.fragment),h=L(),c=b("div"),U(u.$$.fragment),m=L(),C=b("div"),V=b("div"),P&&P.c(),M=L(),D.c(),J=L(),I=b("div"),A&&A.c(),this.h()},l(g){e=x(g,"FOOTER",{class:!0});var y=F(e);t=x(y,"DIV",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-1a7dzby"&&(t.innerHTML=l),r=N(y),s=x(y,"DIV",{class:!0});var R=F(s);o=x(R,"DIV",{class:!0,"aria-label":!0});var Q=F(o);K(a.$$.fragment,Q),Q.forEach(f),i=N(R),d=x(R,"A",{class:!0,href:!0,"aria-label":!0});var W=F(d);K(p.$$.fragment,W),W.forEach(f),h=N(R),c=x(R,"DIV",{class:!0,"aria-label":!0});var ee=F(c);K(u.$$.fragment,ee),ee.forEach(f),R.forEach(f),m=N(y),C=x(y,"DIV",{class:!0});var te=F(C);V=x(te,"DIV",{class:!0});var me=F(V);P&&P.l(me),me.forEach(f),M=N(te),D.l(te),J=N(te),I=x(te,"DIV",{class:!0});var pe=F(I);A&&A.l(pe),pe.forEach(f),te.forEach(f),y.forEach(f),this.h()},h(){_(t,"class","flex items-center gap-4 [grid-area:info] px-2"),_(o,"class","hidden h-8 w-8 items-center justify-center text-neutral-700 lg:flex"),_(o,"aria-label","Previous"),_(d,"class","flex h-8 w-8 items-center justify-center rounded-full lg:bg-white lg:text-black"),_(d,"href","https://ctftime.org/event/2257"),_(d,"aria-label","Play CTF"),_(c,"class","hidden h-8 w-8 items-center justify-center text-neutral-700 lg:flex"),_(c,"aria-label","Next"),_(s,"class","flex items-center justify-center gap-4 [grid-area:controls] px-2 lg:px-0"),_(V,"class","hidden min-w-16 text-right text-xs text-neutral-400 lg:block"),_(I,"class","hidden min-w-16 text-left text-xs text-neutral-400 lg:block"),_(C,"class","flex w-full items-center gap-2 self-end [grid-area:progress] lg:h-3 lg:self-auto"),_(e,"class","grid-templates-miniplayer-compact lg:grid-templates-miniplayer relative grid h-14 w-full grid-cols-[1fr_min-content] items-center justify-between bg-neutral-800 pt-2 [grid-area:footer] lg:h-[88px] lg:grid-cols-[3fr_4fr_3fr] lg:p-2")},m(g,y){$(g,e,y),v(e,t),v(e,r),v(e,s),v(s,o),q(a,o,null),v(s,i),v(s,d),q(p,d,null),v(s,h),v(s,c),q(u,c,null),v(e,m),v(e,C),v(C,V),P&&P.m(V,null),v(C,M),k[w].m(C,null),v(C,J),v(C,I),A&&A.m(I,null),Z=!0},p(g,[y]){const R={};y&8&&(R.$$scope={dirty:y,ctx:g}),a.$set(R);const Q={};y&8&&(Q.$$scope={dirty:y,ctx:g}),p.$set(Q);const W={};y&8&&(W.$$scope={dirty:y,ctx:g}),u.$set(W),g[0].initialized?P?P.p(g,y):(P=$e(g),P.c(),P.m(V,null)):P&&(P.d(1),P=null);let ee=w;w=G(g),w===ee?k[w].p(g,y):(Se(),H(k[ee],1,1,()=>{k[ee]=null}),Ve(),D=k[w],D?D.p(g,y):(D=k[w]=E[w](g),D.c()),j(D,1),D.m(C,J)),g[0].initialized?A?A.p(g,y):(A=be(g),A.c(),A.m(I,null)):A&&(A.d(1),A=null)},i(g){Z||(j(a.$$.fragment,g),j(p.$$.fragment,g),j(u.$$.fragment,g),j(D),Z=!0)},o(g){H(a.$$.fragment,g),H(p.$$.fragment,g),H(u.$$.fragment,g),H(D),Z=!1},d(g){g&&f(e),B(a),B(p),B(u),P&&P.d(),k[w].d(),A&&A.d()}}}function rt(n,e,t){let l;ce(n,Ie,o=>t(0,l=o));let r=fe(0);function s(o){r.set(o)}return n.$$.update=()=>{n.$$.dirty&1&&s(l.progress)},[l,r]}class ot extends ae{constructor(e){super(),re(this,e,rt,at,se,{})}}function it(n){let e,t=`<a class="flex items-center gap-2" href="${z}/"><img class="lg:h-8 lg:w-8 w-6 h-6" src="${z}/logo.svg" alt="GPN CTF 2024 logo"/> <span class="lg:text-2xl text-xl lg:font-medium font-semibold">GPN CTF 2024</span></a>`;return{c(){e=b("header"),e.innerHTML=t,this.h()},l(l){e=x(l,"HEADER",{class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-1vzwf64"&&(e.innerHTML=t),this.h()},h(){_(e,"class","lg:w-80 lg:bg-neutral-850 lg:p-4 px-6 md:px-8 pt-4 pb-2 [grid-area:header]")},m(l,r){$(l,e,r)},p:X,i:X,o:X,d(l){l&&f(e)}}}class ut extends ae{constructor(e){super(),re(this,e,null,it,se,{})}}function ct(n){let e;return{c(){e=T("home")},l(t){e=S(t,"home")},m(t,l){$(t,e,l)},d(t){t&&f(e)}}}function ft(n){let e;return{c(){e=T("description")},l(t){e=S(t,"description")},m(t,l){$(t,e,l)},d(t){t&&f(e)}}}function dt(n){let e;return{c(){e=T("event")},l(t){e=S(t,"event")},m(t,l){$(t,e,l)},d(t){t&&f(e)}}}function mt(n){let e,t,l,r,s,o,a,i="Home",d,p,h,c,u,m,C="Rules",V,M,w,D,J,I,Z="GPN22",P;return s=new ne({props:{class:"h-6 w-6 text-2xl",fill:n[0].url.pathname===`${z}/`,$$slots:{default:[ct]},$$scope:{ctx:n}}}),c=new ne({props:{class:"h-6 w-6 text-2xl",fill:n[0].url.pathname===`${z}/rules`,$$slots:{default:[ft]},$$scope:{ctx:n}}}),D=new ne({props:{class:"h-6 w-6 text-2xl",fill:n[0].url.pathname===`${z}/gpn`,$$slots:{default:[dt]},$$scope:{ctx:n}}}),{c(){e=b("nav"),t=b("ul"),l=b("li"),r=b("a"),U(s.$$.fragment),o=L(),a=b("span"),a.textContent=i,d=L(),p=b("li"),h=b("a"),U(c.$$.fragment),u=L(),m=b("span"),m.textContent=C,V=L(),M=b("li"),w=b("a"),U(D.$$.fragment),J=L(),I=b("span"),I.textContent=Z,this.h()},l(E){e=x(E,"NAV",{class:!0});var k=F(e);t=x(k,"UL",{class:!0});var G=F(t);l=x(G,"LI",{class:!0});var A=F(l);r=x(A,"A",{class:!0,href:!0});var g=F(r);K(s.$$.fragment,g),o=N(g),a=x(g,"SPAN",{class:!0,"data-svelte-h":!0}),oe(a)!=="svelte-jidl1e"&&(a.textContent=i),g.forEach(f),A.forEach(f),d=N(G),p=x(G,"LI",{class:!0});var y=F(p);h=x(y,"A",{class:!0,href:!0});var R=F(h);K(c.$$.fragment,R),u=N(R),m=x(R,"SPAN",{class:!0,"data-svelte-h":!0}),oe(m)!=="svelte-8uj2ks"&&(m.textContent=C),R.forEach(f),y.forEach(f),V=N(G),M=x(G,"LI",{class:!0});var Q=F(M);w=x(Q,"A",{class:!0,href:!0});var W=F(w);K(D.$$.fragment,W),J=N(W),I=x(W,"SPAN",{class:!0,"data-svelte-h":!0}),oe(I)!=="svelte-94j024"&&(I.textContent=Z),W.forEach(f),Q.forEach(f),G.forEach(f),k.forEach(f),this.h()},h(){_(a,"class","lg:text-base text-xs lg:font-semibold font-medium"),_(r,"class","flex flex-col items-center rounded-md px-2 hover:bg-neutral-800 lg:h-10 lg:flex-row lg:gap-5"),_(r,"href",z+"/"),_(l,"class","lg:p-1"),_(m,"class","lg:text-base text-xs lg:font-semibold font-medium"),_(h,"class","flex flex-col items-center rounded-md px-2 hover:bg-neutral-800 lg:h-10 lg:flex-row lg:gap-5"),_(h,"href",z+"/rules"),_(p,"class","lg:p-1"),_(I,"class","lg:text-base text-xs lg:font-semibold font-medium"),_(w,"class","flex flex-col items-center rounded-md px-2 hover:bg-neutral-800 lg:h-10 lg:flex-row lg:gap-5"),_(w,"href",z+"/gpn"),_(M,"class","lg:p-1"),_(t,"class","flex justify-around lg:flex-col"),_(e,"class","bg-neutral-850 p-2 [grid-area:nav] lg:w-80 lg:p-4 lg:pt-0")},m(E,k){$(E,e,k),v(e,t),v(t,l),v(l,r),q(s,r,null),v(r,o),v(r,a),v(t,d),v(t,p),v(p,h),q(c,h,null),v(h,u),v(h,m),v(t,V),v(t,M),v(M,w),q(D,w,null),v(w,J),v(w,I),P=!0},p(E,[k]){const G={};k&1&&(G.fill=E[0].url.pathname===`${z}/`),k&2&&(G.$$scope={dirty:k,ctx:E}),s.$set(G);const A={};k&1&&(A.fill=E[0].url.pathname===`${z}/rules`),k&2&&(A.$$scope={dirty:k,ctx:E}),c.$set(A);const g={};k&1&&(g.fill=E[0].url.pathname===`${z}/gpn`),k&2&&(g.$$scope={dirty:k,ctx:E}),D.$set(g)},i(E){P||(j(s.$$.fragment,E),j(c.$$.fragment,E),j(D.$$.fragment,E),P=!0)},o(E){H(s.$$.fragment,E),H(c.$$.fragment,E),H(D.$$.fragment,E),P=!1},d(E){E&&f(e),B(s),B(c),B(D)}}}function pt(n,e,t){let l;return ce(n,Ne,r=>t(0,l=r)),[l]}class gt extends ae{constructor(e){super(),re(this,e,pt,mt,se,{})}}function _t(n){let e,t,l,r,s,o,a,i,d,p,h;l=new ut({}),s=new gt({});const c=n[1].default,u=xe(c,n,n[0],null);return p=new ot({}),{c(){e=L(),t=b("div"),U(l.$$.fragment),r=L(),U(s.$$.fragment),o=L(),a=b("div"),i=b("div"),u&&u.c(),d=L(),U(p.$$.fragment),this.h()},l(m){Oe("svelte-1v09ra8",document.head).forEach(f),e=N(m),t=x(m,"DIV",{class:!0});var V=F(t);K(l.$$.fragment,V),r=N(V),K(s.$$.fragment,V),o=N(V),a=x(V,"DIV",{class:!0});var M=F(a);i=x(M,"DIV",{class:!0});var w=F(i);u&&u.l(w),w.forEach(f),M.forEach(f),d=N(V),K(p.$$.fragment,V),V.forEach(f),this.h()},h(){document.title="GPN CTF 2024",_(i,"class","prose prose-sm prose-neutral prose-invert m-6 md:prose-base prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300 active:prose-a:text-emerald-300 prose-code:font-mono prose-code:font-normal prose-code:not-italic prose-code:text-firebrick-400 prose-code:before:contents prose-code:after:contents prose-img:mx-auto prose-img:rounded-lg md:m-8 lg:max-w-screen-md"),_(a,"class","relative flex min-h-0 flex-auto flex-col overflow-scroll [grid-area:main]"),_(t,"class","lg:grid-templates-sidebar grid-templates-vertical grid h-full flex-auto grid-cols-1 grid-rows-[min-content_1fr_min-content_min-content] lg:grid-cols-[min-content_1fr] lg:grid-rows-[min-content_1fr_min-content]")},m(m,C){$(m,e,C),$(m,t,C),q(l,t,null),v(t,r),q(s,t,null),v(t,o),v(t,a),v(a,i),u&&u.m(i,null),v(t,d),q(p,t,null),h=!0},p(m,[C]){u&&u.p&&(!h||C&1)&&we(u,c,m,m[0],h?ke(c,m[0],C,null):Ee(m[0]),null)},i(m){h||(j(l.$$.fragment,m),j(s.$$.fragment,m),j(u,m),j(p.$$.fragment,m),h=!0)},o(m){H(l.$$.fragment,m),H(s.$$.fragment,m),H(u,m),H(p.$$.fragment,m),h=!1},d(m){m&&(f(e),f(t)),B(l),B(s),u&&u.d(m),B(p)}}}function ht(n,e,t){let{$$slots:l={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,l]}class kt extends ae{constructor(e){super(),re(this,e,ht,_t,se,{})}}export{kt as component,Et as universal};

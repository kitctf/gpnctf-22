import{s as Y,e as x,t as z,c as S,b as L,d as B,f as b,h as _,i as A,j as y,k as Ae,n as pe,l as Le,a as U,g as G,z as me,S as _e,r as be,v as We,F as ke,m as Ke,u as He,o as Ve,p as ze,G as Be,C as Ue,D as Me,q as Ge,T as Ye}from"./scheduler.DC8yHMXg.js";import{S as Q,i as X,c as C,b as F,m as j,t as R,a as N,d as P,f as Qe}from"./index.D1IU_8Bf.js";import{b as Ee}from"./entry.CFy_tK77.js";import{M as Xe}from"./MainContent.BIg57r-m.js";import{p as Je}from"./stores.CtGzrF0k.js";import{I as ie,T as Ze,g as qe,c as et}from"./Navigation.Dbxaru7Q.js";function tt(s){let e,t,n;return{c(){e=x("a"),t=z(s[1]),this.h()},l(r){e=S(r,"A",{href:!0,class:!0});var i=L(e);t=B(i,s[1]),i.forEach(b),this.h()},h(){_(e,"href",s[0]),_(e,"class",n="rounded-full p-[.375rem] px-3 text-sm "+(!s[2]&&s[3].url.pathname===s[0]||s[2]&&s[3].url.pathname.startsWith(s[0])?"bg-white text-neutral-750 active:bg-neutral-400":"bg-neutral-800 hover:bg-neutral-750 focus:bg-neutral-750 active:bg-neutral-850"))},m(r,i){A(r,e,i),y(e,t)},p(r,[i]){i&2&&Ae(t,r[1]),i&1&&_(e,"href",r[0]),i&13&&n!==(n="rounded-full p-[.375rem] px-3 text-sm "+(!r[2]&&r[3].url.pathname===r[0]||r[2]&&r[3].url.pathname.startsWith(r[0])?"bg-white text-neutral-750 active:bg-neutral-400":"bg-neutral-800 hover:bg-neutral-750 focus:bg-neutral-750 active:bg-neutral-850"))&&_(e,"class",n)},i:pe,o:pe,d(r){r&&b(e)}}}function st(s,e,t){let n;Le(s,Je,c=>t(3,n=c));let{url:r}=e,{text:i}=e,{prefixMode:o=!1}=e;return s.$$set=c=>{"url"in c&&t(0,r=c.url),"text"in c&&t(1,i=c.text),"prefixMode"in c&&t(2,o=c.prefixMode)},[r,i,o,n]}class Ie extends Q{constructor(e){super(),X(this,e,st,tt,Y,{url:0,text:1,prefixMode:2})}}function nt(s){let e;return{c(){e=z("search")},l(t){e=B(t,"search")},m(t,n){A(t,e,n)},d(t){t&&b(e)}}}function rt(s){let e;return{c(){e=z("close")},l(t){e=B(t,"close")},m(t,n){A(t,e,n)},d(t){t&&b(e)}}}function it(s){let e,t,n,r,i,o,c,l,h,a,u,d;return o=new ie({props:{class:"text-neutral-400",$$slots:{default:[nt]},$$scope:{ctx:s}}}),h=new ie({props:{$$slots:{default:[rt]},$$scope:{ctx:s}}}),{c(){e=x("div"),t=x("input"),n=U(),r=x("div"),i=x("span"),C(o.$$.fragment),c=U(),l=x("button"),C(h.$$.fragment),this.h()},l(f){e=S(f,"DIV",{class:!0});var p=L(e);t=S(p,"INPUT",{name:!0,id:!0,class:!0,autocomplete:!0,autocorrect:!0,placeholder:!0,type:!0,"aria-describedby":!0}),n=G(p),r=S(p,"DIV",{class:!0});var m=L(r);i=S(m,"SPAN",{class:!0});var M=L(i);F(o.$$.fragment,M),M.forEach(b),c=G(m),l=S(m,"BUTTON",{class:!0});var I=L(l);F(h.$$.fragment,I),I.forEach(b),m.forEach(b),p.forEach(b),this.h()},h(){_(t,"name",s[2]),_(t,"id",s[3]),_(t,"class","h-12 w-full rounded-full bg-neutral-800 px-9 py-2 text-sm font-normal placeholder:text-sm placeholder:text-neutral-400 hover:bg-neutral-750 hover:shadow-[0_0_1px_white] focus:bg-neutral-750 focus:outline focus:outline-2 focus:outline-white disabled:cursor-not-allowed disabled:opacity-30 disabled:placeholder:text-neutral-400"),t.required=s[5],t.disabled=s[6],_(t,"autocomplete","off"),_(t,"autocorrect","off"),_(t,"placeholder",s[4]),_(t,"type","text"),_(t,"aria-describedby",s[7]),_(i,"class","flex h-8 w-8 items-center justify-center"),_(l,"class","pointer-events-auto flex h-8 w-8 items-center justify-center"),me(l,"hidden",s[8]),_(r,"class","pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-between px-1"),_(e,"class","relative flex-[0_1_22rem]")},m(f,p){A(f,e,p),y(e,t),_e(t,s[0]),s[11](t),y(e,n),y(e,r),y(r,i),j(o,i,null),y(r,c),y(r,l),j(h,l,null),a=!0,u||(d=[be(t,"input",s[10]),be(l,"click",s[9])],u=!0)},p(f,[p]){(!a||p&4)&&_(t,"name",f[2]),(!a||p&8)&&_(t,"id",f[3]),(!a||p&32)&&(t.required=f[5]),(!a||p&64)&&(t.disabled=f[6]),(!a||p&16)&&_(t,"placeholder",f[4]),(!a||p&128)&&_(t,"aria-describedby",f[7]),p&1&&t.value!==f[0]&&_e(t,f[0]);const m={};p&4096&&(m.$$scope={dirty:p,ctx:f}),o.$set(m);const M={};p&4096&&(M.$$scope={dirty:p,ctx:f}),h.$set(M),(!a||p&256)&&me(l,"hidden",f[8])},i(f){a||(R(o.$$.fragment,f),R(h.$$.fragment,f),a=!0)},o(f){N(o.$$.fragment,f),N(h.$$.fragment,f),a=!1},d(f){f&&b(e),s[11](null),P(o),P(h),u=!1,We(d)}}}function ct(s,e,t){let n,{name:r=null}=e,{id:i=null}=e,{placeholder:o=null}=e,{value:c=""}=e,{required:l=!0}=e,{disabled:h=null}=e,{ariaDescribedby:a=null}=e,{element:u=null}=e;function d(){t(0,c=""),u==null||u.focus()}function f(){c=this.value,t(0,c)}function p(m){ke[m?"unshift":"push"](()=>{u=m,t(1,u)})}return s.$$set=m=>{"name"in m&&t(2,r=m.name),"id"in m&&t(3,i=m.id),"placeholder"in m&&t(4,o=m.placeholder),"value"in m&&t(0,c=m.value),"required"in m&&t(5,l=m.required),"disabled"in m&&t(6,h=m.disabled),"ariaDescribedby"in m&&t(7,a=m.ariaDescribedby),"element"in m&&t(1,u=m.element)},s.$$.update=()=>{s.$$.dirty&1&&t(8,n=c.length==0)},[c,u,r,i,o,l,h,a,n,d,f,p]}class at extends Q{constructor(e){super(),X(this,e,ct,it,Y,{name:2,id:3,placeholder:4,value:0,required:5,disabled:6,ariaDescribedby:7,element:1})}}function ot(s){let e,t,n,r,i,o,c;n=new Ie({props:{url:Ee+"/search/teams",text:"Teams"}}),i=new Ie({props:{url:Ee+"/search/users",text:"Users"}});const l=s[1].default,h=Ke(l,s,s[3],null);return{c(){e=x("div"),t=x("div"),C(n.$$.fragment),r=U(),C(i.$$.fragment),o=U(),h&&h.c(),this.h()},l(a){e=S(a,"DIV",{class:!0});var u=L(e);t=S(u,"DIV",{class:!0});var d=L(t);F(n.$$.fragment,d),r=G(d),F(i.$$.fragment,d),d.forEach(b),o=G(u),h&&h.l(u),u.forEach(b),this.h()},h(){_(t,"class","sticky top-16 z-10 mb-1 flex gap-1 bg-neutral-900 py-2"),_(e,"class","px-6 pb-6")},m(a,u){A(a,e,u),y(e,t),j(n,t,null),y(t,r),j(i,t,null),y(e,o),h&&h.m(e,null),c=!0},p(a,u){h&&h.p&&(!c||u&8)&&He(h,l,a,a[3],c?ze(l,a[3],u,null):Ve(a[3]),null)},i(a){c||(R(n.$$.fragment,a),R(i.$$.fragment,a),R(h,a),c=!0)},o(a){N(n.$$.fragment,a),N(i.$$.fragment,a),N(h,a),c=!1},d(a){a&&b(e),P(n),P(i),h&&h.d(a)}}}function lt(s){let e,t,n,r;function i(c){s[2](c)}let o={placeholder:"What are you looking for?"};return s[0]!==void 0&&(o.value=s[0]),t=new at({props:o}),ke.push(()=>Qe(t,"value",i)),{c(){e=x("div"),C(t.$$.fragment),this.h()},l(c){e=S(c,"DIV",{slot:!0,class:!0});var l=L(e);F(t.$$.fragment,l),l.forEach(b),this.h()},h(){_(e,"slot","header"),_(e,"class","flex flex-1 items-center")},m(c,l){A(c,e,l),j(t,e,null),r=!0},p(c,l){const h={};!n&&l&1&&(n=!0,h.value=c[0],Be(()=>n=!1)),t.$set(h)},i(c){r||(R(t.$$.fragment,c),r=!0)},o(c){N(t.$$.fragment,c),r=!1},d(c){c&&b(e),P(t)}}}function ht(s){let e,t;return e=new Xe({props:{scrollDistance:0,$$slots:{header:[lt],default:[ot]},$$scope:{ctx:s}}}),{c(){C(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){j(e,n,r),t=!0},p(n,[r]){const i={};r&9&&(i.$$scope={dirty:r,ctx:n}),e.$set(i)},i(n){t||(R(e.$$.fragment,n),t=!0)},o(n){N(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function ut(s,e,t){let{$$slots:n={},$$scope:r}=e,{searchFilter:i}=e;function o(c){i=c,t(0,i)}return s.$$set=c=>{"searchFilter"in c&&t(0,i=c.searchFilter),"$$scope"in c&&t(3,r=c.$$scope)},[i,n,o,r]}class us extends Q{constructor(e){super(),X(this,e,ut,ht,Y,{searchFilter:0})}}function ft(s){let e;return{c(){e=z("open_in_new")},l(t){e=B(t,"open_in_new")},m(t,n){A(t,e,n)},d(t){t&&b(e)}}}function dt(s){let e,t,n;return t=new ie({props:{$$slots:{default:[ft]},$$scope:{ctx:s}}}),{c(){e=x("a"),C(t.$$.fragment),this.h()},l(r){e=S(r,"A",{href:!0,"data-sveltekit-reload":!0,target:!0,class:!0});var i=L(e);F(t.$$.fragment,i),i.forEach(b),this.h()},h(){_(e,"href",s[0]),_(e,"data-sveltekit-reload",""),_(e,"target","_blank"),_(e,"class","flex items-center justify-center hover:text-white focus:text-white")},m(r,i){A(r,e,i),j(t,e,null),n=!0},p(r,[i]){const o={};i&2&&(o.$$scope={dirty:i,ctx:r}),t.$set(o),(!n||i&1)&&_(e,"href",r[0])},i(r){n||(R(t.$$.fragment,r),n=!0)},o(r){N(t.$$.fragment,r),n=!1},d(r){r&&b(e),P(t)}}}function gt(s,e,t){let{href:n}=e;return s.$$set=r=>{"href"in r&&t(0,n=r.href)},[n]}class fs extends Q{constructor(e){super(),X(this,e,gt,dt,Y,{href:0})}}function pt(s){let e;return{c(){e=z(s[1])},l(t){e=B(t,s[1])},m(t,n){A(t,e,n)},p(t,n){n&2&&Ae(e,t[1])},d(t){t&&b(e)}}}function mt(s){let e,t,n,r,i,o,c,l=[{class:s[2]},s[3]],h={};for(let a=0;a<l.length;a+=1)h=Ue(h,l[a]);return r=new Ze({props:{content:s[5],open:s[6],$$slots:{default:[pt]},$$scope:{ctx:s}}}),{c(){e=x("span"),t=z(s[0]),n=U(),C(r.$$.fragment),this.h()},l(a){e=S(a,"SPAN",{class:!0});var u=L(e);t=B(u,s[0]),u.forEach(b),n=G(a),F(r.$$.fragment,a),this.h()},h(){Me(e,h)},m(a,u){A(a,e,u),y(e,t),A(a,n,u),j(r,a,u),i=!0,o||(c=Ge(s[3].action(e)),o=!0)},p(a,[u]){(!i||u&1)&&Ye(t,a[0],h.contenteditable),Me(e,h=qe(l,[(!i||u&4)&&{class:a[2]},u&8&&a[3]]));const d={};u&130&&(d.$$scope={dirty:u,ctx:a}),r.$set(d)},i(a){i||(R(r.$$.fragment,a),i=!0)},o(a){N(r.$$.fragment,a),i=!1},d(a){a&&(b(e),b(n)),P(r,a),o=!1,c()}}}function _t(s,e,t){let n,{value:r}=e,{tooltip:i}=e,{class:o}=e;const{elements:{trigger:c,content:l},states:{open:h}}=et({positioning:{placement:"top"},openDelay:300,disableHoverableContent:!0});return Le(s,c,a=>t(3,n=a)),s.$$set=a=>{"value"in a&&t(0,r=a.value),"tooltip"in a&&t(1,i=a.tooltip),"class"in a&&t(2,o=a.class)},[r,i,o,n,c,l,h]}class ds extends Q{constructor(e){super(),X(this,e,_t,mt,Y,{value:0,tooltip:1,class:2})}}function $(s){return Array.isArray?Array.isArray(s):$e(s)==="[object Array]"}const bt=1/0;function Mt(s){if(typeof s=="string")return s;let e=s+"";return e=="0"&&1/s==-bt?"-0":e}function Et(s){return s==null?"":Mt(s)}function k(s){return typeof s=="string"}function Re(s){return typeof s=="number"}function It(s){return s===!0||s===!1||vt(s)&&$e(s)=="[object Boolean]"}function Ne(s){return typeof s=="object"}function vt(s){return Ne(s)&&s!==null}function E(s){return s!=null}function re(s){return!s.trim().length}function $e(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const wt="Incorrect 'index' type",yt=s=>`Invalid value for key ${s}`,xt=s=>`Pattern length exceeds max of ${s}.`,St=s=>`Missing ${s} property in key`,At=s=>`Property 'weight' in key '${s}' must be a positive integer`,ve=Object.prototype.hasOwnProperty;class Lt{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(n=>{let r=Oe(n);this._keys.push(r),this._keyMap[r.id]=r,t+=r.weight}),this._keys.forEach(n=>{n.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Oe(s){let e=null,t=null,n=null,r=1,i=null;if(k(s)||$(s))n=s,e=we(s),t=ce(s);else{if(!ve.call(s,"name"))throw new Error(St("name"));const o=s.name;if(n=o,ve.call(s,"weight")&&(r=s.weight,r<=0))throw new Error(At(o));e=we(o),t=ce(o),i=s.getFn}return{path:e,id:t,weight:r,src:n,getFn:i}}function we(s){return $(s)?s:s.split(".")}function ce(s){return $(s)?s.join("."):s}function kt(s,e){let t=[],n=!1;const r=(i,o,c)=>{if(E(i))if(!o[c])t.push(i);else{let l=o[c];const h=i[l];if(!E(h))return;if(c===o.length-1&&(k(h)||Re(h)||It(h)))t.push(Et(h));else if($(h)){n=!0;for(let a=0,u=h.length;a<u;a+=1)r(h[a],o,c+1)}else o.length&&r(h,o,c+1)}};return r(s,k(e)?e.split("."):e,0),n?t:t[0]}const Rt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Nt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,e)=>s.score===e.score?s.idx<e.idx?-1:1:s.score<e.score?-1:1},$t={location:0,threshold:.6,distance:100},Ot={useExtendedSearch:!1,getFn:kt,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var g={...Nt,...Rt,...$t,...Ot};const Tt=/[^ ]+/g;function Ct(s=1,e=3){const t=new Map,n=Math.pow(10,e);return{get(r){const i=r.match(Tt).length;if(t.has(i))return t.get(i);const o=1/Math.pow(i,.5*s),c=parseFloat(Math.round(o*n)/n);return t.set(i,c),c},clear(){t.clear()}}}class fe{constructor({getFn:e=g.getFn,fieldNormWeight:t=g.fieldNormWeight}={}){this.norm=Ct(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,n)=>{this._keysMap[t.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,k(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}add(e){const t=this.size();k(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!E(e)||re(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach((r,i)=>{let o=r.getFn?r.getFn(e):this.getFn(e,r.path);if(E(o)){if($(o)){let c=[];const l=[{nestedArrIndex:-1,value:o}];for(;l.length;){const{nestedArrIndex:h,value:a}=l.pop();if(E(a))if(k(a)&&!re(a)){let u={v:a,i:h,n:this.norm.get(a)};c.push(u)}else $(a)&&a.forEach((u,d)=>{l.push({nestedArrIndex:d,value:u})})}n.$[i]=c}else if(k(o)&&!re(o)){let c={v:o,n:this.norm.get(o)};n.$[i]=c}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function Te(s,e,{getFn:t=g.getFn,fieldNormWeight:n=g.fieldNormWeight}={}){const r=new fe({getFn:t,fieldNormWeight:n});return r.setKeys(s.map(Oe)),r.setSources(e),r.create(),r}function Ft(s,{getFn:e=g.getFn,fieldNormWeight:t=g.fieldNormWeight}={}){const{keys:n,records:r}=s,i=new fe({getFn:e,fieldNormWeight:t});return i.setKeys(n),i.setIndexRecords(r),i}function ee(s,{errors:e=0,currentLocation:t=0,expectedLocation:n=0,distance:r=g.distance,ignoreLocation:i=g.ignoreLocation}={}){const o=e/s.length;if(i)return o;const c=Math.abs(n-t);return r?o+c/r:c?1:o}function jt(s=[],e=g.minMatchCharLength){let t=[],n=-1,r=-1,i=0;for(let o=s.length;i<o;i+=1){let c=s[i];c&&n===-1?n=i:!c&&n!==-1&&(r=i-1,r-n+1>=e&&t.push([n,r]),n=-1)}return s[i-1]&&i-n>=e&&t.push([n,i-1]),t}const K=32;function Pt(s,e,t,{location:n=g.location,distance:r=g.distance,threshold:i=g.threshold,findAllMatches:o=g.findAllMatches,minMatchCharLength:c=g.minMatchCharLength,includeMatches:l=g.includeMatches,ignoreLocation:h=g.ignoreLocation}={}){if(e.length>K)throw new Error(xt(K));const a=e.length,u=s.length,d=Math.max(0,Math.min(n,u));let f=i,p=d;const m=c>1||l,M=m?Array(u):[];let I;for(;(I=s.indexOf(e,p))>-1;){let v=ee(e,{currentLocation:I,expectedLocation:d,distance:r,ignoreLocation:h});if(f=Math.min(v,f),p=I+a,m){let O=0;for(;O<a;)M[I+O]=1,O+=1}}p=-1;let H=[],W=1,Z=a+u;const De=1<<a-1;for(let v=0;v<a;v+=1){let O=0,T=Z;for(;O<T;)ee(e,{errors:v,currentLocation:d+T,expectedLocation:d,distance:r,ignoreLocation:h})<=f?O=T:Z=T,T=Math.floor((Z-O)/2+O);Z=T;let de=Math.max(1,d-T+1),ne=o?u:Math.min(d+T,u)+a,V=Array(ne+2);V[ne+1]=(1<<v)-1;for(let w=ne;w>=de;w-=1){let q=w-1,ge=t[s.charAt(q)];if(m&&(M[q]=+!!ge),V[w]=(V[w+1]<<1|1)&ge,v&&(V[w]|=(H[w+1]|H[w])<<1|1|H[w+1]),V[w]&De&&(W=ee(e,{errors:v,currentLocation:q,expectedLocation:d,distance:r,ignoreLocation:h}),W<=f)){if(f=W,p=q,p<=d)break;de=Math.max(1,2*d-p)}}if(ee(e,{errors:v+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:h})>f)break;H=V}const se={isMatch:p>=0,score:Math.max(.001,W)};if(m){const v=jt(M,c);v.length?l&&(se.indices=v):se.isMatch=!1}return se}function Dt(s){let e={};for(let t=0,n=s.length;t<n;t+=1){const r=s.charAt(t);e[r]=(e[r]||0)|1<<n-t-1}return e}class Ce{constructor(e,{location:t=g.location,threshold:n=g.threshold,distance:r=g.distance,includeMatches:i=g.includeMatches,findAllMatches:o=g.findAllMatches,minMatchCharLength:c=g.minMatchCharLength,isCaseSensitive:l=g.isCaseSensitive,ignoreLocation:h=g.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:l,ignoreLocation:h},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const a=(d,f)=>{this.chunks.push({pattern:d,alphabet:Dt(d),startIndex:f})},u=this.pattern.length;if(u>K){let d=0;const f=u%K,p=u-f;for(;d<p;)a(this.pattern.substr(d,K),d),d+=K;if(f){const m=u-K;a(this.pattern.substr(m),m)}}else a(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let p={isMatch:!0,score:0};return n&&(p.indices=[[0,e.length-1]]),p}const{location:r,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:l,ignoreLocation:h}=this.options;let a=[],u=0,d=!1;this.chunks.forEach(({pattern:p,alphabet:m,startIndex:M})=>{const{isMatch:I,score:H,indices:W}=Pt(e,p,m,{location:r+M,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:l,includeMatches:n,ignoreLocation:h});I&&(d=!0),u+=H,I&&W&&(a=[...a,...W])});let f={isMatch:d,score:d?u/this.chunks.length:1};return d&&n&&(f.indices=a),f}}class D{constructor(e){this.pattern=e}static isMultiMatch(e){return ye(e,this.multiRegex)}static isSingleMatch(e){return ye(e,this.singleRegex)}search(){}}function ye(s,e){const t=s.match(e);return t?t[1]:null}class Wt extends D{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class Kt extends D{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Ht extends D{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class Vt extends D{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class zt extends D{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Bt extends D{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class Fe extends D{constructor(e,{location:t=g.location,threshold:n=g.threshold,distance:r=g.distance,includeMatches:i=g.includeMatches,findAllMatches:o=g.findAllMatches,minMatchCharLength:c=g.minMatchCharLength,isCaseSensitive:l=g.isCaseSensitive,ignoreLocation:h=g.ignoreLocation}={}){super(e),this._bitapSearch=new Ce(e,{location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:l,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class je extends D{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t=0,n;const r=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,t))>-1;)t=n+i,r.push([n,t-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const ae=[Wt,je,Ht,Vt,Bt,zt,Kt,Fe],xe=ae.length,Ut=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Gt="|";function Yt(s,e={}){return s.split(Gt).map(t=>{let n=t.trim().split(Ut).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=n.length;i<o;i+=1){const c=n[i];let l=!1,h=-1;for(;!l&&++h<xe;){const a=ae[h];let u=a.isMultiMatch(c);u&&(r.push(new a(u,e)),l=!0)}if(!l)for(h=-1;++h<xe;){const a=ae[h];let u=a.isSingleMatch(c);if(u){r.push(new a(u,e));break}}}return r})}const Qt=new Set([Fe.type,je.type]);class Xt{constructor(e,{isCaseSensitive:t=g.isCaseSensitive,includeMatches:n=g.includeMatches,minMatchCharLength:r=g.minMatchCharLength,ignoreLocation:i=g.ignoreLocation,findAllMatches:o=g.findAllMatches,location:c=g.location,threshold:l=g.threshold,distance:h=g.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:c,threshold:l,distance:h},this.pattern=t?e:e.toLowerCase(),this.query=Yt(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,o=[],c=0;for(let l=0,h=t.length;l<h;l+=1){const a=t[l];o.length=0,i=0;for(let u=0,d=a.length;u<d;u+=1){const f=a[u],{isMatch:p,indices:m,score:M}=f.search(e);if(p){if(i+=1,c+=M,n){const I=f.constructor.type;Qt.has(I)?o=[...o,...m]:o.push(m)}}else{c=0,i=0,o.length=0;break}}if(i){let u={isMatch:!0,score:c/i};return n&&(u.indices=o),u}}return{isMatch:!1,score:1}}}const oe=[];function Jt(...s){oe.push(...s)}function le(s,e){for(let t=0,n=oe.length;t<n;t+=1){let r=oe[t];if(r.condition(s,e))return new r(s,e)}return new Ce(s,e)}const te={AND:"$and",OR:"$or"},he={PATH:"$path",PATTERN:"$val"},ue=s=>!!(s[te.AND]||s[te.OR]),Zt=s=>!!s[he.PATH],qt=s=>!$(s)&&Ne(s)&&!ue(s),Se=s=>({[te.AND]:Object.keys(s).map(e=>({[e]:s[e]}))});function Pe(s,e,{auto:t=!0}={}){const n=r=>{let i=Object.keys(r);const o=Zt(r);if(!o&&i.length>1&&!ue(r))return n(Se(r));if(qt(r)){const l=o?r[he.PATH]:i[0],h=o?r[he.PATTERN]:r[l];if(!k(h))throw new Error(yt(l));const a={keyId:ce(l),pattern:h};return t&&(a.searcher=le(h,e)),a}let c={children:[],operator:i[0]};return i.forEach(l=>{const h=r[l];$(h)&&h.forEach(a=>{c.children.push(n(a))})}),c};return ue(s)||(s=Se(s)),n(s)}function es(s,{ignoreFieldNorm:e=g.ignoreFieldNorm}){s.forEach(t=>{let n=1;t.matches.forEach(({key:r,norm:i,score:o})=>{const c=r?r.weight:null;n*=Math.pow(o===0&&c?Number.EPSILON:o,(c||1)*(e?1:i))}),t.score=n})}function ts(s,e){const t=s.matches;e.matches=[],E(t)&&t.forEach(n=>{if(!E(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let o={indices:r,value:i};n.key&&(o.key=n.key.src),n.idx>-1&&(o.refIndex=n.idx),e.matches.push(o)})}function ss(s,e){e.score=s.score}function ns(s,e,{includeMatches:t=g.includeMatches,includeScore:n=g.includeScore}={}){const r=[];return t&&r.push(ts),n&&r.push(ss),s.map(i=>{const{idx:o}=i,c={item:e[o],refIndex:o};return r.length&&r.forEach(l=>{l(i,c)}),c})}class J{constructor(e,t={},n){this.options={...g,...t},this.options.useExtendedSearch,this._keyStore=new Lt(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof fe))throw new Error(wt);this._myIndex=t||Te(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){E(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const t=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,t.push(i))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:c}=this.options;let l=k(e)?k(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return es(l,{ignoreFieldNorm:c}),i&&l.sort(o),Re(t)&&t>-1&&(l=l.slice(0,t)),ns(l,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const t=le(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:o,n:c})=>{if(!E(i))return;const{isMatch:l,score:h,indices:a}=t.searchIn(i);l&&r.push({item:i,idx:o,matches:[{score:h,value:i,norm:c,indices:a}]})}),r}_searchLogical(e){const t=Pe(e,this.options),n=(c,l,h)=>{if(!c.children){const{keyId:u,searcher:d}=c,f=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(l,u),searcher:d});return f&&f.length?[{idx:h,item:l,matches:f}]:[]}const a=[];for(let u=0,d=c.children.length;u<d;u+=1){const f=c.children[u],p=n(f,l,h);if(p.length)a.push(...p);else if(c.operator===te.AND)return[]}return a},r=this._myIndex.records,i={},o=[];return r.forEach(({$:c,i:l})=>{if(E(c)){let h=n(t,c,l);h.length&&(i[l]||(i[l]={idx:l,item:c,matches:[]},o.push(i[l])),h.forEach(({matches:a})=>{i[l].matches.push(...a)}))}}),o}_searchObjectList(e){const t=le(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:c})=>{if(!E(o))return;let l=[];n.forEach((h,a)=>{l.push(...this._findMatches({key:h,value:o[a],searcher:t}))}),l.length&&i.push({idx:c,item:o,matches:l})}),i}_findMatches({key:e,value:t,searcher:n}){if(!E(t))return[];let r=[];if($(t))t.forEach(({v:i,i:o,n:c})=>{if(!E(i))return;const{isMatch:l,score:h,indices:a}=n.searchIn(i);l&&r.push({score:h,key:e,value:i,idx:o,norm:c,indices:a})});else{const{v:i,n:o}=t,{isMatch:c,score:l,indices:h}=n.searchIn(i);c&&r.push({score:l,key:e,value:i,norm:o,indices:h})}return r}}J.version="7.0.0";J.createIndex=Te;J.parseIndex=Ft;J.config=g;J.parseQuery=Pe;Jt(Xt);export{fs as E,J as F,ds as H,us as S};
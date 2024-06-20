import{_ as o}from"./13.Ol-NAg6g.js";import{H as m,R as _}from"./entry.CUj4ca9N.js";var s=(e=>(e.AlreadyExists="AlreadyExists",e.AlreadyInTeam="AlreadyInTeam",e.PasswordEmpty="PasswordEmpty",e.Forbidden="Forbidden",e.InvalidCredentials="InvalidCredentials",e.InvalidFlag="InvalidFlag",e.InvalidJson="InvalidJson",e.MustBeInTeam="MustBeInTeam",e.NotFound="NotFound",e.NotStarted="NotStarted",e.ServerError="ServerError",e.Blocked="Blocked",e.TooManyRequests="TooManyRequests",e))(s||{});const h=e=>{const r=Object.values(s).find(n=>s[n]==e);return r||"ServerError"};function c(e){switch(e){case"AlreadyExists":return"Already exists.";case"AlreadyInTeam":return"Already in team.";case"PasswordEmpty":return"Password is empty.";case"Forbidden":return"Forbidden.";case"InvalidCredentials":return"Invalid credentials.";case"InvalidFlag":return"Invalid flag.";case"InvalidJson":return"Invalid input. Please respect the expected format.";case"MustBeInTeam":return"Must be in team to submit flag.";case"NotFound":return"Not found.";case"NotStarted":return"The CTF has not started yet.";case"Blocked":return"You are blocked";case"ServerError":default:return"Oops! Something went wrong, please try again or contact CTF administrator."}}const v=(e,r,n)=>{const t=e[r];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((d,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+r+(r.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})};var l=(e=>(e[e.NoContent=204]="NoContent",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.TooManyRequests=429]="TooManyRequests",e))(l||{});function u(e,r){throw new m(e,r)}function f(e,r){throw new _(e,r.toString())}new TextEncoder;const E=async(e,r,n,t)=>{const d=n.slice(1).replace("/","_"),i=`./archive/${d}.json`;return Object.assign({"./archive/challenges.json":()=>o(()=>import("./challenges.BBuBCoWI.js"),[],import.meta.url).then(a=>a.default),"./archive/challenges_submit.json":()=>o(()=>import("./challenges_submit.CfxHBiFJ.js"),[],import.meta.url).then(a=>a.default),"./archive/challenges_tags.json":()=>o(()=>import("./challenges_tags.Hu5hdTKR.js"),[],import.meta.url).then(a=>a.default),"./archive/scoreboard_graph.json":()=>o(()=>import("./scoreboard_graph.B7XoMOGJ.js"),[],import.meta.url).then(a=>a.default),"./archive/socket_solves.json":()=>o(()=>import("./socket_solves.CcVHezs0.js"),[],import.meta.url).then(a=>a.default),"./archive/teams.json":()=>o(()=>import("./teams.CCj5lgJJ.js"),[],import.meta.url).then(a=>a.default),"./archive/users.json":()=>o(()=>import("./users.BI3qRoAS.js"),[],import.meta.url).then(a=>a.default)}).hasOwnProperty(i)?(await v(Object.assign({"./archive/challenges.json":()=>o(()=>import("./challenges.gW9BAX_W.js"),[],import.meta.url),"./archive/challenges_submit.json":()=>o(()=>import("./challenges_submit.CJneedV_.js"),[],import.meta.url),"./archive/challenges_tags.json":()=>o(()=>import("./challenges_tags.D8qH2Aoq.js"),[],import.meta.url),"./archive/scoreboard_graph.json":()=>o(()=>import("./scoreboard_graph.DiMA5ROC.js"),[],import.meta.url),"./archive/socket_solves.json":()=>o(()=>import("./socket_solves.CHw1Iobx.js"),[],import.meta.url),"./archive/teams.json":()=>o(()=>import("./teams.BaEbOzYR.js"),[],import.meta.url),"./archive/users.json":()=>o(()=>import("./users.B8uNgrpc.js"),[],import.meta.url)}),`./archive/${d}.json`,3)).default:{code:"ServerError",message:"Requested data has not been archived."}},I=(e,r)=>{if("code"in e){let n,t=h(e.code);if(t==s.Blocked)throw u(l.Forbidden,c(t));if(t==s.TooManyRequests&&e.waitTime)throw u(l.TooManyRequests,`Slow down! Try again in ${e.waitTime}s`);return r.includes(t)?n=c(e.code):(console.error("Unexpected backend error:",e.code),t=s.ServerError,n=c(t)),{error:t,message:n}}return{data:e}},g=async e=>{const r=new TextEncoder().encode(e),n=await window.crypto.subtle.digest("SHA-256",r);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")};export{s as E,l as H,c as a,f as b,g as d,u as e,I as h,E as r};

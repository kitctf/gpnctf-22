import"./entry.CUj4ca9N.js";import{r as o,h as n,E as s,a as i,d as c}from"./util.DecpPyr9.js";const h=async a=>{let r=await o(a,"GET","/challenges");return Array.isArray(r)&&(r=r.map(e=>(e.extraData={videoId:"dQw4w9WgXcQ",...e.extraData},e))),n(r,[s.NotStarted])},m=async a=>{let r=await o(a,"GET","/challenges/tags");return n(r,[s.NotStarted])},v=async(a,r,e)=>{if(e===void 0||e.length===0)return Promise.resolve({error:s.ServerError,message:"Flag cannot be empty."});const l=await o(a,"POST","/challenges/submit"),t=n(l,[]);if(t.error)return t;if(!(r in t.data))return{error:s.ServerError,message:i("ServerError")};const g=await c(e);return t.data[r]!==g?{error:s.InvalidFlag,message:i("InvalidFlag")}:{data:r}};export{h as a,m as g,v as s};

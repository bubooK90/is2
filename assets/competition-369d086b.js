import{g as u,r as t,a as f,o as g,c as m,b as l,d as o,_,F as d,f as h,e as k,u as v,V as w}from"./index-a521c2ea.js";import{_ as $,i as x}from"./index-7bb27bc1.js";import{f as y}from"./Footer-a9c5b99d.js";import"./HeartIcon-4c2889f6.js";const S={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll"},V=l("div",{class:"h-[120px]"},null,-1),b={__name:"competition",setup(B){const{proxy:s}=u(),a=t(!!s.$cookies.get("intelli-token")),r=t(),n=t(),i=t(s.$cookies.get("intelli-competition")),p=e=>{console.log(e),a.value=e};return f.post(s.$util.settings.api+"/intelli/competition",JSON.stringify({sn:i.value}),{headers:{accept:"application/json","Content-Type":"application/json"}}).then(function(e){n.value.updateWaterfall(e.data.artworks)}).catch(function(e){console.log(e)}),(e,C)=>(g(),m(d,null,[l("div",S,[V,o($,{ref_key:"waterfall",ref:n},null,512),o(y)]),o(_,{page:i.value,signup:a.value,onUpdateStatus:p,onShowMessage:e.showMessage},null,8,["page","signup","onShowMessage"]),o(h,{ref_key:"message",ref:r},null,512)],64))}},c=k(b);c.config.globalProperties.$util=v;c.use(w).use(x,{preLoad:1,attempt:2}).mount("#app");

import{g as n,r as o,o as c,c as p,a as s,b as e,_ as f,F as _,k as m,d as u,u as g}from"./PageHeader-12b1de5e.js";import{_ as d,i as v}from"./index-f6f0b770.js";import{_ as S}from"./PageFooter-5793eb86.js";import"./EyeIcon-1fd0c9b5.js";const h={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll"},k=s("div",{class:"h-[120px]"},null,-1),x={__name:"favorite",setup($){n();const t=o(!!localStorage.token);localStorage.profile&&JSON.parse(localStorage.profile);const i=o(),l=a=>{t.value=a};return t&&localStorage.setItem("competition",""),(a,b)=>(c(),p(_,null,[s("div",h,[k,e(d,{title:"我赞过的",subtitle:"点击作品可以查看详情",filter:"favorite"}),e(S)]),e(f,{page:"favorite",signin:t.value,onUpdateStatus:l},null,8,["signin"]),e(m,{ref_key:"message",ref:i},null,512)],64))}},r=u(x);r.config.globalProperties.$util=g;r.use(v,{preLoad:1,attempt:2}).mount("#app");

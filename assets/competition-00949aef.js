import{g as p,r as o,o as m,c as f,a as s,b as e,_,F as u,k as g,d,u as S}from"./PageHeader-8744a40b.js";import{_ as v}from"./Waterfall-4db06963.js";import{_ as h}from"./PageFooter-64bc35c3.js";import{i as k}from"./index-9b6d8e18.js";import"./EyeIcon-d72f0d9d.js";const x={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll"},$=s("div",{class:"h-[120px]"},null,-1),b={__name:"competition",setup(B){p();const t=o(!!localStorage.token),l=localStorage.profile?JSON.parse(localStorage.profile):{},n=o(localStorage.competition?localStorage.competition:""),i=o(),c=a=>{t.value=a};return t&&localStorage.setItem("artist",l.username),(a,I)=>(m(),f(u,null,[s("div",x,[$,e(v,{filter:n.value},null,8,["filter"]),e(h)]),e(_,{signin:t.value,onUpdateStatus:c},null,8,["signin"]),e(g,{ref_key:"message",ref:i},null,512)],64))}},r=d(b);r.config.globalProperties.$util=S;r.use(k,{preLoad:1,attempt:2}).mount("#app");
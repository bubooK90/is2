import{g as p,r as a,o as m,c as _,a as s,b as e,_ as f,F as u,k as g,d,u as S}from"./PageHeader-d12ea756.js";import{_ as v,i as h}from"./index-095552fa.js";import{_ as k}from"./PageFooter-11327492.js";import"./EyeIcon-6231c18e.js";const x={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll"},$=s("div",{class:"h-[120px]"},null,-1),b={__name:"competition",setup(B){p();const t=a(!!localStorage.token),r=localStorage.profile?JSON.parse(localStorage.profile):{},n=a(localStorage.competition?localStorage.competition:""),i=a(),c=o=>{t.value=o};return t&&localStorage.setItem("artist",r.username),(o,I)=>(m(),_(u,null,[s("div",x,[$,e(v,{filter:n.value},null,8,["filter"]),e(k)]),e(f,{signin:t.value,onUpdateStatus:c},null,8,["signin"]),e(g,{ref_key:"message",ref:i},null,512)],64))}},l=d(b);l.config.globalProperties.$util=S;l.use(h,{preLoad:1,attempt:2}).mount("#app");
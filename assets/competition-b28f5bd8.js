import{g as p,r as a,o as m,c as _,a as s,b as e,_ as f,F as u,l as g,d,u as S}from"./PageHeader-5f2f91de.js";import{_ as v,i as h}from"./index-19a739cd.js";import{_ as x}from"./PageFooter-d4c53ed8.js";import"./EyeIcon-50880172.js";const $={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll"},k=s("div",{class:"h-[120px]"},null,-1),b={__name:"competition",setup(B){p();const t=a(!!localStorage.token),r=localStorage.profile?JSON.parse(localStorage.profile):{},n=a(localStorage.competition?localStorage.competition:""),i=a(),c=o=>{t.value=o};return t&&localStorage.setItem("artist",r.username),(o,I)=>(m(),_(u,null,[s("div",$,[k,e(v,{filter:n.value},null,8,["filter"]),e(x)]),e(f,{signin:t.value,onUpdateStatus:c},null,8,["signin"]),e(g,{ref_key:"message",ref:i},null,512)],64))}},l=d(b);l.config.globalProperties.$util=S;l.use(h,{preLoad:1,attempt:2}).mount("#app");

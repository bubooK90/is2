import{g as _,r as o,o as t,c as l,a as n,i as r,y as m,b as a,_ as u,F as f,k as g,d,u as x}from"./PageHeader-d12ea756.js";import{_ as v,i as y}from"./index-095552fa.js";import{_ as h}from"./PageFooter-11327492.js";import"./EyeIcon-6231c18e.js";const k={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll"},S=n("div",{class:"h-[120px]"},null,-1),b={key:0,class:"h-[80px] flex justify-center items-center px-5 text-2xl font-bold text-stone-900/80"},$={__name:"gallery",setup(B){_();const e=o(!!localStorage.token);localStorage.profile&&JSON.parse(localStorage.profile);const c=o(),p=s=>{e.value=s};return e&&localStorage.setItem("competition",""),(s,N)=>(t(),l(f,null,[n("div",k,[S,e.value?r("",!0):(t(),l("div",b,"尚 未 登 录")),e.value?(t(),m(v,{key:1,title:"我的作品",subtitle:"点击作品可以编辑详情",filter:"gallery"})):r("",!0),a(h)]),a(u,{page:"gallery",signin:e.value,onUpdateStatus:p},null,8,["signin"]),a(g,{ref_key:"message",ref:c},null,512)],64))}},i=d($);i.config.globalProperties.$util=x;i.use(y,{preLoad:1,attempt:2}).mount("#app");

import{g as i,r as s,o as c,c as p,a as o,b as e,_ as m,F as _,k as f,d as u,u as g}from"./PageHeader-8744a40b.js";import{_ as d}from"./Waterfall-4db06963.js";import{_ as h}from"./PageFooter-64bc35c3.js";import{i as S}from"./index-9b6d8e18.js";import"./EyeIcon-d72f0d9d.js";const v={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll"},k=o("div",{class:"h-[120px]"},null,-1),x={__name:"result",setup($){i();const t=s(!!localStorage.token);localStorage.profile&&JSON.parse(localStorage.profile);const l=s(),n=a=>{t.value=a};return t&&localStorage.setItem("competition",""),(a,b)=>(c(),p(_,null,[o("div",v,[k,e(d,{title:"搜索结果",subtitle:"点击作品可以查看详情",filter:"search"}),e(h)]),e(m,{page:"search",signin:t.value,onUpdateStatus:n},null,8,["signin"]),e(f,{ref_key:"message",ref:l},null,512)],64))}},r=u(x);r.config.globalProperties.$util=g;r.use(S,{preLoad:1,attempt:2}).mount("#app");
import{g as x,r as a,e as v,o as l,c as n,a as e,t as r,i as k,F as p,l as S,b as c,_ as b,f as w,k as y,d as $,u as B}from"./PageHeader-d12ea756.js";import{_ as C}from"./PageFooter-11327492.js";const N={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll text-stone-900/80"},A=e("div",{class:"h-[120px]"},null,-1),I=e("div",{class:"p-5 text-2xl font-bold"},"我的关注",-1),V={key:0,class:"p-5 text-center"},F={class:"p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[1280px]"},P=["onClick"],j=["src"],z={class:"text-lg font-bold"},D={class:"text-xs"},E={__name:"follow",setup(J){const{proxy:i}=x(),d=a(!!localStorage.token);localStorage.profile&&JSON.parse(localStorage.profile);const _=a(),o=a([]),u=a(""),f=t=>{d.value=t},m=t=>{localStorage.setItem("artist",t),i.$util.gotoPage("artist")};return v.get(i.$util.settings.api+"/my/follow",{headers:{Authorization:"Bearer "+localStorage.token,accept:"application/json"}}).then(function(t){o.value=t.data,o.value.length==0&&(u.value="你还没有关注任何艺术家")}).catch(function(t){console.log(t)}),(t,L)=>(l(),n(p,null,[e("div",N,[A,I,o.value.length==0?(l(),n("div",V,r(u.value),1)):k("",!0),e("div",F,[(l(!0),n(p,null,S(o.value,(s,h)=>(l(),n("button",{class:"bg-stone-300 p-5 text-left flex items-center",key:h,onClick:O=>m(s.username)},[e("img",{src:w(i).$util.settings.api+"/"+s.avatar,class:"w-16 h-16 rounded-full border-2 border-white/80 mr-5"},null,8,j),e("div",null,[e("div",z,r(s.fullname),1),e("div",D,r(s.description?s.description:"-"),1)])],8,P))),128))]),c(C)]),c(b,{page:"follow",signin:d.value,onUpdateStatus:f},null,8,["signin"]),c(y,{ref_key:"message",ref:_},null,512)],64))}},g=$(E);g.config.globalProperties.$util=B;g.mount("#app");

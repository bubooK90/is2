import{g as d,r as a,a as m,o as n,c,b as s,m as r,q as _,d as l,_ as g,F as x,f as h,e as v,u as k,V as y}from"./index-347874c5.js";import{_ as w,i as $}from"./index-da4bf2f5.js";import{f as b}from"./Footer-a217c443.js";import"./HeartIcon-e8ad2621.js";const B={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll"},S=s("div",{class:"h-[120px]"},null,-1),V={key:0,class:"h-[80px] flex justify-center items-center px-5 text-2xl font-bold text-stone-900/80"},C=s("div",{class:"h-[50px]"},null,-1),j=s("div",{class:"fixed top-[120px] left-0 right-0 h-[50px] px-10 flex flex-row-reverse items-center text-lg"},[s("div",{class:"bg-stone-700 text-stone-100/80 font-bold flex items-center px-5 h-full"},"我的收藏")],-1),M={__name:"collection",setup(N){const{proxy:o}=d(),t=a(!!o.$cookies.get("intelli-token")),f=a(),i=a(),u=e=>{console.log(e),t.value=e};return t&&m.get(o.$util.settings.api+"/intelli/my/collection",{headers:{Authorization:"Bearer "+o.$cookies.get("intelli-token"),accept:"application/json","Content-Type":"application/json"}}).then(function(e){i.value.updateWaterfall(e.data)}).catch(function(e){console.log(e)}),(e,A)=>(n(),c(x,null,[s("div",B,[S,t.value?r("",!0):(n(),c("div",V,"尚 未 登 录")),C,t.value?(n(),_(w,{key:1,ref_key:"waterfall",ref:i},null,512)):r("",!0),j,l(b)]),l(g,{page:e.cp,signup:t.value,onUpdateStatus:u,onShowMessage:e.showMessage},null,8,["page","signup","onShowMessage"]),l(h,{ref_key:"message",ref:f},null,512)],64))}},p=v(M);p.config.globalProperties.$util=k;p.use(y).use($,{preLoad:1,attempt:2}).mount("#app");
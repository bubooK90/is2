import{g as d,r as o,o as n,c as p,b as s,m as c,q as _,d as l,_ as h,F as y,a as k,f as v,e as x,u as w,V as $}from"./index-6fb45af9.js";import{_ as C,i as b}from"./index-8a185389.js";import{f as B}from"./Footer-8538ef66.js";import"./HeartIcon-8251a467.js";const M={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll"},S=s("div",{class:"h-[120px]"},null,-1),V={key:0,class:"h-[80px] flex justify-center items-center px-5 text-2xl font-bold text-stone-900/80"},j=s("div",{class:"h-[50px]"},null,-1),N={__name:"gallery",setup(A){const{proxy:a}=d(),t=o(!!a.$cookies.get("intelli-token")),f=o(),i=o(),g=e=>{t.value=e};return t&&(()=>{a.$cookies.set("intelli-competition","gallery"),k.get(a.$util.settings.api+"/intelli/my/gallery",{headers:{Authorization:"Bearer "+a.$cookies.get("intelli-token"),accept:"application/json","Content-Type":"application/json"}}).then(function(e){i.value.updateWaterfall(e.data)}).catch(function(e){console.log(e)})})(),(e,r)=>(n(),p(y,null,[s("input",{ref:"uploadInput",type:"file",accept:"image/png, image/jpeg, image/webp",class:"hidden",name:"file",onChange:r[0]||(r[0]=(...m)=>e.fileChange&&e.fileChange(...m))},null,544),s("div",M,[S,t.value?c("",!0):(n(),p("div",V,"尚 未 登 录")),j,t.value?(n(),_(C,{key:1,ref_key:"waterfall",ref:i},null,512)):c("",!0),l(B)]),l(h,{page:e.cp,signup:t.value,onUpdateStatus:g,onShowMessage:e.showMessage},null,8,["page","signup","onShowMessage"]),l(v,{ref_key:"message",ref:f},null,512)],64))}},u=x(N);u.config.globalProperties.$util=w;u.use($).use(b,{preLoad:1,attempt:2}).mount("#app");

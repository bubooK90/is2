import{g as i,r as c,o as n,c as r,a as t,b as e,_ as m,F as p,d as x,u as d}from"./PageHeader-d12ea756.js";import{_ as f}from"./PageFooter-11327492.js";import{_ as g,i as _}from"./index-da50c50b.js";import"./EyeIcon-6231c18e.js";const u={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll"},v=t("div",{class:"h-[120px]"},null,-1),h=t("div",{class:"relative h-2/3 bg-[#020916] w-full flex items-center overflow-hidden"},[t("object",{type:"image/svg+xml",data:"https://cdn.svgator.com/images/2023/03/animated-svg-morph-jellyfish.svg",img:"",class:"w-full m-auto"}),t("div",{class:"absolute left-0 top-0 right-0 bottom-0 flex flex-col-reverse items-center py-10"},[t("div",{class:"text-white/60 flex"},[t("div",{class:"mx-5 px-5 py-2 bg-stone-200/10"},"赞助"),t("div",{class:"mx-5 px-5 py-2 bg-stone-200/10"},"赞助"),t("div",{class:"mx-5 px-5 py-2 bg-stone-200/10"},"赞助")]),t("div",{class:"text-white/80 mb-10"},"点 击 查 看 比 赛 规 则 和 丰 厚 奖 品"),t("div",{class:"text-4xl sm:text-6xl lg:text-8xl font-black text-white/60 mb-2"},"intelli.show 2023"),t("div",{class:"text-2xl sm:text-3xl lg:text-4xl ffont-black text-white/80 mb-2"},"精 彩 即 将 呈 现")])],-1),b={__name:"App",setup(w){i();const s=c(!!localStorage.token);localStorage.setItem("competition",""),localStorage.setItem("artist","");const o=a=>{s.value=a};return(a,y)=>(n(),r(p,null,[t("div",u,[v,h,e(g,{sortable:"false"}),e(f)]),e(m,{page:"home",signin:s.value,onUpdateStatus:o},null,8,["signin"])],64))}},l=x(b);l.config.globalProperties.$util=d;l.use(_,{preLoad:1,attempt:2}).mount("#app");

import{g as f,r as a,a as u,o as d,c as x,b as e,d as l,_ as g,t as v,n as h,F as _,e as b,u as w,V as k}from"./index-695bf402.js";import{_ as y,i as $}from"./index-c0f84c77.js";import{f as j}from"./Footer-22846510.js";import"./HeartIcon-d925011b.js";const S={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll"},C=e("div",{class:"h-[120px]"},null,-1),V=e("div",{class:"relative h-2/3 bg-[#020916] w-full flex items-center overflow-hidden"},[e("object",{type:"image/svg+xml",data:"https://cdn.svgator.com/images/2023/03/animated-svg-morph-jellyfish.svg",img:"",class:"w-full m-auto"}),e("div",{class:"absolute left-0 top-0 right-0 bottom-0 flex flex-col-reverse items-center py-10"},[e("div",{class:"text-white/60 flex"},[e("div",{class:"mx-5 px-5 py-2 bg-stone-200/10"},"赞助"),e("div",{class:"mx-5 px-5 py-2 bg-stone-200/10"},"赞助"),e("div",{class:"mx-5 px-5 py-2 bg-stone-200/10"},"赞助")]),e("div",{class:"text-white/80 mb-10"},"点 击 查 看 比 赛 规 则 和 丰 厚 奖 品"),e("div",{class:"text-4xl sm:text-6xl lg:text-8xl font-black text-white/60 mb-2"},"intelli.show 2023"),e("div",{class:"text-2xl sm:text-3xl lg:text-4xl ffont-black text-white/80 mb-2"},"精 彩 即 将 呈 现")])],-1),B={__name:"App",setup(z){const{proxy:s}=f(),i=a(!!s.$cookies.get("intelli-token")),o=a(""),n=a(),p=t=>{console.log(t),i.value=t},m=(t,c=3e3)=>{console.log(t),o.value=t,setTimeout(()=>{o.value=""},c)};return s.$cookies.remove("intelli-competitions"),s.$cookies.remove("intelli-competition"),s.$cookies.remove("intelli-artwork"),u.get(s.$util.settings.api+"/intelli/homepage",{headers:{accept:"application/json","Content-Type":"application/json"}}).then(function(t){n.value.updateWaterfall(t.data.featured)}).catch(function(t){console.log(t)}),(t,c)=>(d(),x(_,null,[e("div",S,[C,V,l(y,{ref_key:"waterfall",ref:n},null,512),l(j)]),l(g,{page:"",signup:i.value,onUpdateStatus:p,onShowMessage:m},null,8,["signup"]),e("div",{class:h([o.value?"block":"hidden","z-50 fixed left-0 right-0 top-0 h-[40px] bg-red-500/50 flex justify-center items-center text-white/80"])},v(o.value),3)],64))}},r=b(B);r.config.globalProperties.$util=w;r.use(k).use($,{preLoad:1,attempt:2}).mount("#app");

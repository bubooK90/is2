import{o,c as s,a as e,g as H,r as l,e as L,h as M,t as u,F as a,l as b,b as _,_ as F,n as h,f as S,i as A,k as I,d as J,u as O}from"./PageHeader-2c069531.js";import{_ as P}from"./PageFooter-92ef2208.js";function T(m,g){return o(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})])}function z(m,g){return o(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"})])}const D={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll text-stone-900/80"},E=e("div",{class:"h-[120px]"},null,-1),U={class:"px-5 pt-5 text-2xl font-bold"},q=e("a",{href:"/studyroom/index.html"},"自习室",-1),G=e("span",{class:"mx-5"},":.",-1),K={class:"px-5"},Q={class:"p-5"},R=["onClick"],W=["onClick"],X=["onClick"],Y={key:0,class:"w-100 my-2 py-5 flex items-center bg-stone-300/50"},Z={class:"text-lg sm:text-2xl md:text-4xl lg:text-6xl font-black flex-1 px-2"},ee=["onClick"],te=["onClick"],oe={__name:"textbook",setup(m){const{proxy:g}=H(),f=l(!!localStorage.token);localStorage.profile&&JSON.parse(localStorage.profile);const i=l(JSON.parse(localStorage.textbook)),w=l();l([]);const d=l("所有的"),p=l(""),v=l(""),V=t=>{f.value=t},N=t=>{window.open(i.value.config.base+t,"_blank")},B=async t=>{try{await navigator.clipboard.writeText(t),w.value.show("已将 "+t+" 拷贝到剪贴板")}catch(y){console.log(y)}};return L.get(g.$util.settings.api+"/textbook/"+i.value.id,{headers:{accept:"application/json"}}).then(function(t){t.data.res=="ok"?i.value=t.data.textbook:t.data.res=="error"&&g.$util.gotoPage()}).catch(function(t){console.log(t)}),(t,y)=>(o(),s(a,null,[e("div",D,[E,e("div",U,[q,G,M(u(i.value.config.title),1)]),e("div",K,u(i.value.config.subtitle),1),e("div",Q,[(o(!0),s(a,null,b(i.value.list,(j,c)=>(o(),s(a,{key:c},[e("button",{class:h([d.value==c?"bg-stone-400":"bg-stone-300","inline-block m-1 px-5 py-2 hover:bg-stone-400"]),onClick:C=>d.value==c?d.value="":d.value=c},u(c),11,R),e("div",{class:h([d.value==c?"block":"hidden","w-100 my-2 py-5 bg-stone-300/30"])},[(o(!0),s(a,null,b(j,(C,r)=>(o(),s(a,{key:r},[e("button",{class:h([p.value==r?"bg-stone-400":"bg-stone-300","inline-block m-1 px-3 py-2 text-sm hover:bg-stone-400"]),onClick:x=>p.value==r?p.value="":p.value=r},u(r),11,W),e("div",{class:h([p.value==r?"block":"hidden","w-100 my-2 py-5 bg-stone-300/20"])},[(o(!0),s(a,null,b(C,(x,n)=>(o(),s(a,{key:n},[e("button",{class:h([v.value==n?"bg-stone-400":"bg-stone-300","inline-block m-1 px-2 py-1 bg-stone-300 text-xs hover:bg-stone-400"]),onClick:$=>v.value==n?v.value="":v.value=n},u(n),11,X),v.value==n?(o(),s("div",Y,[e("div",Z,u(n),1),e("button",{class:"p-3",onClick:$=>B(n+" style")},[_(S(z),{class:"w-7 h-7"})],8,ee),x.link?(o(),s("button",{key:0,class:"p-3",onClick:$=>N(x.link)},[_(S(T),{class:"w-6 h-6"})],8,te)):A("",!0)])):A("",!0)],64))),128))],2)],64))),128))],2)],64))),128))]),_(P)]),_(F,{signin:f.value,onUpdateStatus:V},null,8,["signin"]),_(I,{ref_key:"message",ref:w},null,512)],64))}},k=J(oe);k.config.globalProperties.$util=O;k.mount("#app");

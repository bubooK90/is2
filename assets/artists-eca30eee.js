import{g as k,r as a,e as b,o,c as n,a as e,t as r,i as p,F as c,l as S,b as d,_ as $,f as y,k as w,d as C,u as N}from"./PageHeader-12b1de5e.js";import{_ as B}from"./PageFooter-5793eb86.js";const I={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll text-stone-900/80"},P=e("div",{class:"h-[120px]"},null,-1),V=e("div",{class:"p-5 text-2xl font-bold"},"艺术家",-1),A={key:0,class:"p-5 text-center"},F={class:"p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[1280px]"},j=["onClick"],D=["src"],E={class:"text-lg font-bold"},J={class:"text-xs"},L={__name:"artists",setup(O){const{proxy:l}=k(),u=a(!!localStorage.token),_=a(localStorage.profile?JSON.parse(localStorage.profile):{}),f=a(),i=a([]),m=a(""),h=t=>{u.value=t},x=t=>{localStorage.setItem("artist",t),l.$util.gotoPage("artist")};return b.get(l.$util.settings.api+"/artists",{headers:{accept:"application/json"}}).then(function(t){console.log(t.data),t.data.res=="ok"?i.value=t.data.artists:t.data.res=="error"&&l.$util.gotoPage()}).catch(function(t){console.log(t)}),(t,U)=>(o(),n(c,null,[e("div",I,[P,V,i.value.length==0?(o(),n("div",A,r(m.value),1)):p("",!0),e("div",F,[(o(!0),n(c,null,S(i.value,(s,v)=>(o(),n(c,{key:v},[s.username!=_.value.username?(o(),n("button",{key:0,class:"bg-stone-300 p-5 text-left flex items-center",onClick:q=>x(s.username)},[e("img",{src:y(l).$util.settings.api+"/"+s.avatar,class:"w-16 h-16 rounded-full border-2 border-white/80 mr-5"},null,8,D),e("div",null,[e("div",E,r(s.fullname),1),e("div",J,r(s.description?s.description:"-"),1)])],8,j)):p("",!0)],64))),128))]),d(B)]),d($,{page:"artist",signin:u.value,onUpdateStatus:h},null,8,["signin"]),d(w,{ref_key:"message",ref:f},null,512)],64))}},g=C(L);g.config.globalProperties.$util=N;g.mount("#app");
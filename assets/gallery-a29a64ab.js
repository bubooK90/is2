import{o as r,c,b as e,g as B,r as i,m as f,q as M,d as u,i as _,s as U,w as v,v as g,_ as S,F as A,a as b,p as N,f as F,e as z,u as E,V as I}from"./index-e46bce11.js";import{_ as L,i as T}from"./index-31d814e8.js";import{f as D}from"./Footer-149bb9d9.js";import"./HeartIcon-941a6a75.js";function O(k,n){return r(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})])}const R={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll"},q=e("div",{class:"h-[120px]"},null,-1),G={key:0,class:"h-[80px] flex justify-center items-center px-5 text-2xl font-bold text-stone-900/80"},J=e("div",{class:"h-[50px]"},null,-1),P={key:2,class:"fixed top-[120px] left-0 right-0 h-[50px] px-10 flex flex-row-reverse items-center text-lg"},W=e("div",{class:"bg-stone-700 text-stone-100/80 font-bold flex items-center px-5 h-full"},"我的画廊",-1),H={key:0,class:"z-50 fixed left-0 top-0 right-0 bottom-0 bg-black/80 text-stone-100/80"},K={class:"fixed w-full md:w-[600px] top-[80px] right-0 bottom-0 px-5 bg-stone-600 text-sm"},Q={class:"mb-5 h-[300px] flex justify-center"},X=["src"],Y={class:"mb-5 grid grid-cols-3 gap-2"},Z={class:"col-span-2"},ee=e("div",{class:"my-1"},"作品名称",-1),te={class:"bg-stone-700/80"},se=e("div",{class:"my-1"},"署名",-1),le={class:"bg-stone-700/80"},oe={class:"mb-5"},ne=e("div",{class:"my-1"},"提示词",-1),ae={class:"bg-stone-700/80"},ie={class:"text-right"},re={class:"fixed w-full md:w-[600px] top-0 right-0 h-[80px] flex items-center px-5 bg-stone-600"},ue=e("div",{class:"flex-1 text-lg font-bold"},"编辑作品信息",-1),ce={__name:"gallery",setup(k){const{proxy:n}=B(),a=i(!!n.$cookies.get("intelli-token")),p=i(),m=i(),h=i(),d=i(!1),t=i({file:null,url:null,uploading:!1,title:"",artist:"",prompt:""}),y=l=>{a.value=l},x=()=>{n.$cookies.set("intelli-competition","gallery"),b.get(n.$util.settings.api+"/intelli/my/gallery",{headers:{Authorization:"Bearer "+n.$cookies.get("intelli-token"),accept:"application/json","Content-Type":"application/json"}}).then(function(l){m.value.updateWaterfall(l.data)}).catch(function(l){console.log(l)})};async function $(l){t.value.file=l.target.files[0],t.value.url=URL.createObjectURL(t.value.file),d.value=!0,l.target.value=""}const C=()=>{h.value.dispatchEvent(new MouseEvent("click"))},V=()=>{if(t.value.uploading)return!1;t.value.file=null,t.value.url=null,t.value.title="",t.value.artist="",t.value.prompt="",d.value=!1},j=()=>{if(!t.value.title||!t.value.artist||!t.value.prompt)p.value.show("请完善作品信息");else{d.value=!1,p.value.show("作品上传中，请稍后...");const l=new FormData;l.append("file",t.value.file),l.append("param",JSON.stringify(t.value,["title","artist","prompt"])),b.post(n.$util.settings.api+"/intelli/upload",l,{headers:{Authorization:"Bearer "+n.$cookies.get("intelli-token"),accept:"application/json"}}).then(function(s){x()}).catch(function(s){console.log(s),p.value.show(s.message)})}};return a&&x(),(l,s)=>(r(),c(A,null,[e("input",{ref_key:"uploadInput",ref:h,type:"file",accept:"image/png, image/jpeg, image/webp",class:"hidden",name:"file",onChange:$},null,544),e("div",R,[q,a.value?f("",!0):(r(),c("div",G,"尚 未 登 录")),J,a.value?(r(),M(L,{key:1,ref_key:"waterfall",ref:m},null,512)):f("",!0),a.value?(r(),c("div",P,[e("button",{class:"bg-stone-600 hover:bg-stone-500 text-stone-100/80 font-bold flex items-center px-5 h-full",onClick:s[0]||(s[0]=o=>C())},[u(_(O),{class:"w-6 h-6 mr-2"}),U("添加")]),W])):f("",!0),u(D)]),d.value?(r(),c("div",H,[e("div",K,[e("div",Q,[e("img",{src:t.value.url,class:"h-full"},null,8,X)]),e("div",Y,[e("div",Z,[ee,e("div",te,[v(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>t.value.title=o),type:"text",class:"w-full text-sm bg-transparent border-none focus:ring-0"},null,512),[[g,t.value.title]])])]),e("div",null,[se,e("div",le,[v(e("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>t.value.artist=o),type:"text",class:"w-full text-sm bg-transparent border-none focus:ring-0"},null,512),[[g,t.value.artist]])])])]),e("div",oe,[ne,e("div",ae,[v(e("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>t.value.prompt=o),type:"text",class:"w-full text-sm bg-transparent border-none focus:ring-0"},null,512),[[g,t.value.prompt]])])]),e("div",ie,[e("button",{class:"py-2 px-5 text-lf font-bold bg-stone-800 hover:bg-stone-900",onClick:s[4]||(s[4]=o=>j())},"提交作品")])]),e("div",re,[ue,e("button",{onClick:s[5]||(s[5]=o=>V())},[u(_(N),{class:"w-7 h-7"})])])])):f("",!0),u(S,{page:l.cp,signup:a.value,onUpdateStatus:y,onShowMessage:l.showMessage},null,8,["page","signup","onShowMessage"]),u(F,{ref_key:"message",ref:p},null,512)],64))}},w=z(ce);w.config.globalProperties.$util=E;w.use(I).use(T,{preLoad:1,attempt:2}).mount("#app");

import{g as V,r as d,o as g,c as v,a as e,i as x,f as j,w as a,v as i,n as f,b as m,_ as U,F as N,e as b,k as B,d as I,u as z}from"./PageHeader-d12ea756.js";import{_ as A}from"./PageFooter-11327492.js";const J={class:"fixed left-0 top-0 right-0 bottom-0 overflow-x-hidden overflow-y-scroll text-stone-900/80"},O=e("div",{class:"h-[120px]"},null,-1),F={key:0,class:"h-[80px] flex justify-center items-center px-5 text-2xl font-bold text-stone-900/80"},P={key:1},E=e("div",{class:"p-5 text-2xl font-bold"},"我的信息",-1),T={class:"flex flex-col md:flex-row justify-center items-center md:items-start"},D={class:"w-[300px] flex flex-col items-center"},M=["src"],q=e("div",{class:"text-xs mb-5"},"点击头像更新",-1),G={class:"w-[300px] text-sm"},H={class:"grid grid-cols-3"},K=e("div",{class:"font-bold py-3"},"姓名",-1),L={class:"col-span-2 p-2 my-1 bg-stone-300"},Q={class:"grid grid-cols-3"},R=e("div",{class:"font-bold py-3"},"性别",-1),W={class:"col-span-2 py-3 text-xs"},X={class:"grid grid-cols-3"},Y=e("div",{class:"font-bold py-3"},"简介",-1),Z={class:"col-span-2 p-2 my-1 bg-stone-300"},ee={class:"grid grid-cols-3"},se=e("div",{class:"font-bold py-3"},"小红书",-1),te={class:"col-span-2 p-2 my-1 bg-stone-300"},oe={class:"grid grid-cols-3"},le=e("div",{class:"font-bold py-3"},"哔哩哔哩",-1),ne={class:"col-span-2 p-2 my-1 bg-stone-300"},ae={class:"grid grid-cols-3"},ie=e("div",{class:"font-bold py-3"},"微博",-1),de={class:"col-span-2 p-2 my-1 bg-stone-300"},re={class:"grid grid-cols-3"},ce=e("div",{class:"font-bold py-3"},"电子邮件",-1),pe={class:"col-span-2 p-2 my-1 bg-stone-300"},ue={class:"my-5 py-5 border-t border-stone-300 text-right"},ge={class:"flex flex-col md:flex-row justify-center items-center md:items-start"},ve=e("div",{class:"w-[300px]"},null,-1),fe={class:"w-[300px] text-sm"},me={class:"grid grid-cols-3"},be=e("div",{class:"font-bold py-3"},"输入旧密码",-1),_e={class:"col-span-2 p-2 my-1 bg-stone-300"},he={class:"grid grid-cols-3"},xe=e("div",{class:"font-bold py-3"},"输入新密码",-1),ye={class:"col-span-2 p-2 my-1 bg-stone-300"},we={class:"my-5 py-5 border-t border-stone-300 text-right"},ke={__name:"profile",setup(Se){const{proxy:r}=V(),c=d(!!localStorage.token),t=d(localStorage.profile?JSON.parse(localStorage.profile):{}),n=d(),_=d(),p=d(""),u=d(""),h=d(),w=()=>{h.value.dispatchEvent(new MouseEvent("click"))},k=l=>{c.value=l},S=()=>{b.put(r.$util.settings.api+"/my/password/change",JSON.stringify({op:p.value,np:u.value}),{headers:{Authorization:"Bearer "+localStorage.token,accept:"application/json","Content-Type":"application/json"}}).then(function(l){l.data.res=="ok"?(localStorage.clear(),r.$util.gotoPage()):n.value.show(l.data.message)}).catch(function(l){console.log(l),n.value.show(l.message)})},$=()=>{b.put(r.$util.settings.api+"/my/profile/update",JSON.stringify({fullname:t.value.fullname,gender:t.value.gender,description:t.value.description,xiaohongshu:t.value.xiaohongshu,bilibili:t.value.bilibili,weibo:t.value.weibo,email:t.value.email}),{headers:{Authorization:"Bearer "+localStorage.token,accept:"application/json","Content-Type":"application/json"}}).then(function(l){l.data.res=="ok"?(localStorage.setItem("profile",JSON.stringify(t.value)),n.value.show("个人信息更改成功")):n.value.show(l.data.message)}).catch(function(l){console.log(l),n.value.show(l.message)})};async function C(l){const s=new FormData;s.append("file",l.target.files[0]),n.value.show("头像上传中，请稍后..."),b.post(r.$util.settings.api+"/my/avatar",s,{headers:{Authorization:"Bearer "+localStorage.token,accept:"application/json"}}).then(function(o){o.data.res=="ok"?(t.value.avatar=o.data.file,localStorage.setItem("profile",JSON.stringify(t.value)),_.value.updateAvatar(),n.value.show("头像更改成功")):n.value.show(o.data.message)}).catch(function(o){console.log(o),n.value.show(o.message)})}return(l,s)=>(g(),v(N,null,[e("input",{ref_key:"uploadInput",ref:h,type:"file",accept:"image/png, image/jpeg",class:"hidden",name:"file",onChange:C},null,544),e("div",J,[O,c.value?x("",!0):(g(),v("div",F,"尚 未 登 录")),c.value?(g(),v("div",P,[E,e("div",T,[e("div",D,[e("img",{src:j(r).$util.settings.img+"/"+t.value.avatar,class:"w-32 h-32 mb-5 rounded-full border-4 border-white/80 cursor-pointer",onClick:s[0]||(s[0]=o=>w())},null,8,M),q]),e("div",G,[e("div",H,[K,e("div",L,[a(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>t.value.fullname=o),placeholder:"输入 姓名",type:"text",class:"w-full m-0 p-0 text-sm bg-transparent border-none focus:ring-0"},null,512),[[i,t.value.fullname]])])]),e("div",Q,[R,e("div",W,[e("button",{class:f([t.value.gender==0?"bg-stone-400":"bg-stone-300","py-1 px-2 hover:bg-stone-500"]),onClick:s[2]||(s[2]=o=>t.value.gender=0)},"女",2),e("button",{class:f([t.value.gender==1?"bg-stone-400":"bg-stone-300","py-1 px-2 hover:bg-stone-500"]),onClick:s[3]||(s[3]=o=>t.value.gender=1)},"男",2),e("button",{class:f([t.value.gender==2?"bg-stone-400":"bg-stone-300","py-1 px-2 hover:bg-stone-500"]),onClick:s[4]||(s[4]=o=>t.value.gender=2)},"非二元",2)])]),e("div",X,[Y,e("div",Z,[a(e("textarea",{"onUpdate:modelValue":s[5]||(s[5]=o=>t.value.description=o),placeholder:"输入 简介",rows:"5",class:"w-full m-0 p-0 text-sm bg-transparent border-none focus:ring-0",style:{resize:"none"}},null,512),[[i,t.value.description]])])]),e("div",ee,[se,e("div",te,[a(e("input",{"onUpdate:modelValue":s[6]||(s[6]=o=>t.value.xiaohongshu=o),placeholder:"输入 小红书 昵称 / 小红书号",type:"text",class:"w-full m-0 p-0 text-sm bg-transparent border-none focus:ring-0"},null,512),[[i,t.value.xiaohongshu]])])]),e("div",oe,[le,e("div",ne,[a(e("input",{"onUpdate:modelValue":s[7]||(s[7]=o=>t.value.bilibili=o),placeholder:"输入 哔哩哔哩 昵称",type:"text",class:"w-full m-0 p-0 text-sm bg-transparent border-none focus:ring-0"},null,512),[[i,t.value.bilibili]])])]),e("div",ae,[ie,e("div",de,[a(e("input",{"onUpdate:modelValue":s[8]||(s[8]=o=>t.value.weibo=o),placeholder:"输入 微博 昵称",type:"text",class:"w-full m-0 p-0 text-sm bg-transparent border-none focus:ring-0"},null,512),[[i,t.value.weibo]])])]),e("div",re,[ce,e("div",pe,[a(e("input",{"onUpdate:modelValue":s[9]||(s[9]=o=>t.value.email=o),placeholder:"输入 电子邮件",type:"text",class:"w-full m-0 p-0 text-sm bg-transparent border-none focus:ring-0"},null,512),[[i,t.value.email]])])]),e("div",ue,[e("button",{class:"px-5 py-2 bg-stone-600 hover:bg-stone-700 text-stone-100 font-bold",onClick:s[10]||(s[10]=o=>$())},"确认修改")])])]),e("div",ge,[ve,e("div",fe,[e("div",me,[be,e("div",_e,[a(e("input",{"onUpdate:modelValue":s[11]||(s[11]=o=>p.value=o),placeholder:"输入 旧密码",type:"password",class:"w-full m-0 p-0 text-sm bg-transparent border-none focus:ring-0"},null,512),[[i,p.value]])])]),e("div",he,[xe,e("div",ye,[a(e("input",{"onUpdate:modelValue":s[12]||(s[12]=o=>u.value=o),placeholder:"输入 新密码",type:"password",class:"w-full m-0 p-0 text-sm bg-transparent border-none focus:ring-0"},null,512),[[i,u.value]])])]),e("div",we,[e("button",{class:"px-5 py-2 bg-stone-600 hover:bg-stone-700 text-stone-100 font-bold",onClick:s[13]||(s[13]=o=>S())},"确认修改")])])])])):x("",!0),m(A)]),m(U,{ref_key:"header",ref:_,page:"profile",signin:c.value,onUpdateStatus:k},null,8,["signin"]),m(B,{ref_key:"message",ref:n},null,512)],64))}},y=I(ke);y.config.globalProperties.$util=z;y.mount("#app");

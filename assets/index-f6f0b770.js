import{g as W,r as y,m as V,p as q,z as H,o as w,c as A,a as d,t as O,n as R,i as j,A as I,F as z,l as C,w as K,f as S,b as L,q as Q,s as J,e as k}from"./PageHeader-12b1de5e.js";import{r as X}from"./EyeIcon-1fd0c9b5.js";const Y={class:"flex-1"},Z={class:"text-3xl font-black"},tt={class:"mt-2"},et={key:0,class:"text-xs text-right text-stone-100"},ot={key:0,class:"p-5 text-center"},it=["onClick"],nt={class:"w-full"},st={class:"mr-2"},rt={class:"mr-2"},at={class:"mr-2"},yt={__name:"Waterfall",props:{title:{type:String,default:""},subtitle:{type:String,default:""},colmax:{type:String,default:"5"},colwidth:{type:String,default:"320"},gap:{type:String,default:"10"},filter:{type:String,default:"all"},sortable:{type:String,default:"true"}},setup(i,{expose:e}){const t=i,{proxy:o}=W(),r=!!localStorage.token,s=y(0),l=y([]),u=y([]),a=y([]),p=y("createtime"),m=y("");e({updateWaterfall:n=>{a.value=n,E()}}),V(()=>{window.addEventListener("resize",$(b,50))}),q(()=>{window.removeEventListener("resize",$(b,50))});const F=n=>{var c=Math.min.apply(null,n);return n.indexOf(c)},$=(n,c)=>{let h;return function(){h&&clearTimeout(h),h=setTimeout(()=>{n()},c)}},b=()=>{const n=window.innerWidth,c=s.value;s.value=Math.min(Math.floor(n/t.colwidth),t.colmax),s.value=s.value?s.value:1,c!=s.value&&E()},E=()=>{l.value=[],u.value=[];for(var n=0;n<s.value;n++)l.value.push(0),u.value.push([]);const c=a.value.length;for(var n=0;n<c;n++){const g=Math.round(a.value[n].height*t.colwidth/a.value[n].width),f=F(l.value);u.value[f].push(n),l.value[f]+=g+Number(t.gap)}},P=()=>{r&&t.filter=="artist"?(console.log(o.$util.settings.api+"/artist/"+localStorage.artist+"/artworks"),k.get(o.$util.settings.api+"/artist/"+localStorage.artist+"/artworks",{headers:{Authorization:"Bearer "+localStorage.token,accept:"application/json"}}).then(function(n){a.value=n.data,a.value.length==0&&(m.value="还没有发布任何作品"),b()}).catch(function(n){console.log(n)})):r&&t.filter=="collection"?k.get(o.$util.settings.api+"/my/collection",{headers:{Authorization:"Bearer "+localStorage.token,accept:"application/json"}}).then(function(n){a.value=n.data,a.value.length==0&&(m.value="你还没有收藏任何作品"),b()}).catch(function(n){console.log(n)}):r&&t.filter=="favorite"?k.get(o.$util.settings.api+"/my/favorite",{headers:{Authorization:"Bearer "+localStorage.token,accept:"application/json"}}).then(function(n){a.value=n.data,a.value.length==0&&(m.value="你还没有赞过任何作品"),b()}).catch(function(n){console.log(n)}):r&&t.filter=="gallery"?k.get(o.$util.settings.api+"/my/gallery",{headers:{Authorization:"Bearer "+localStorage.token,accept:"application/json"}}).then(function(n){a.value=n.data,a.value.length==0&&(m.value="你还没有上传任何作品"),b()}).catch(function(n){console.log(n)}):(m.value="",k.get(o.$util.settings.api+"/artworks/"+t.filter,{headers:{accept:"application/json"}}).then(function(n){a.value=n.data,a.value.length==0&&(m.value="此分类下暂无参赛作品"),b()}).catch(function(n){console.log(n)}))},D=n=>{p.value=n,a.value.sort(c(n)),E();function c(h){return function(g,f){var B=g[h],U=f[h];return U-B}}},G=n=>{var c=[];for(var h in a.value)c.push(a.value[h].sn);localStorage.setItem("artwork",n),localStorage.setItem("waterfall",c),o.$util.gotoPage("artwork")};return P(),(n,c)=>{const h=H("lazy");return w(),A(z,null,[d("div",{class:"mx-auto mt-10 mb-5 text-stone-900/80 flex items-end",style:I("min-width: "+i.colwidth+"px; width:"+s.value*i.colwidth+"px; padding: 0 "+i.gap+"px")},[d("div",Y,[d("div",Z,O(i.title),1),d("div",tt,O(i.subtitle),1)]),i.sortable=="true"&&a.value.length>1?(w(),A("div",et,[d("button",{class:R([p.value=="liked"?"bg-stone-600":"bg-stone-500","px-2 py-1 hover:bg-stone-600"]),onClick:c[0]||(c[0]=g=>D("liked"))},"最赞",2),d("button",{class:R([p.value=="viewed"?"bg-stone-600":"bg-stone-500","px-2 py-1 hover:bg-stone-600"]),onClick:c[1]||(c[1]=g=>D("viewed"))},"最热",2),d("button",{class:R([p.value=="createtime"?"bg-stone-600":"bg-stone-500","px-2 py-1 hover:bg-stone-600"]),onClick:c[2]||(c[2]=g=>D("createtime"))},"最新",2)])):j("",!0)],4),a.value.length==0?(w(),A("div",ot,O(m.value),1)):j("",!0),d("div",{class:"mx-auto flex text-white/80 text-xs",style:I("width:"+s.value*i.colwidth+"px")},[(w(!0),A(z,null,C(s.value,g=>(w(),A("div",{style:I("width:"+i.colwidth+"px"),key:g},[(w(!0),A(z,null,C(u.value[g-1],f=>(w(),A("div",{class:"w-full",key:f},[d("div",{class:"relative w-full",style:I("padding:"+i.gap+"px"),onClick:B=>G(a.value[f].sn)},[K(d("img",nt,null,512),[[h,S(o).$util.settings.api+"/"+a.value[f].file]]),d("div",{class:"absolute left-0 right-0 bottom-0 py-1 bg-gradient-to-t from-black/50 to-black/0 text-white flex flex-row-reverse items-center",style:I("margin:"+i.gap+"px")},[d("div",st,O(a.value[f].collected),1),L(S(Q),{class:"w-4 h-4 mr-2"}),d("div",rt,O(a.value[f].liked),1),L(S(J),{class:"w-4 h-4 mr-2"}),d("div",at,O(a.value[f].viewed),1),L(S(X),{class:"w-4 h-4 mr-2"})],4)],12,it)]))),128))],4))),128))],4)],64)}}};var v=(i=>(i.LOADING="loading",i.LOADED="loaded",i.ERROR="error",i))(v||{});const lt=typeof window<"u"&&window!==null,ct=ht(),ut=Object.prototype.propertyIsEnumerable,T=Object.getOwnPropertySymbols;function x(i){return typeof i=="function"||toString.call(i)==="[object Object]"}function dt(i){return typeof i=="object"?i===null:typeof i!="function"}function ft(i){return i!=="__proto__"&&i!=="constructor"&&i!=="prototype"}function ht(){return lt&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0):!1}function vt(i,...e){if(!x(i))throw new TypeError("expected the first argument to be an object");if(e.length===0||typeof Symbol!="function"||typeof T!="function")return i;for(const t of e){const o=T(t);for(const r of o)ut.call(t,r)&&(i[r]=t[r])}return i}function M(i,...e){let t=0;for(dt(i)&&(i=e[t++]),i||(i={});t<e.length;t++)if(x(e[t])){for(const o of Object.keys(e[t]))ft(o)&&(x(i[o])&&x(e[t][o])?M(i[o],e[t][o]):i[o]=e[t][o]);vt(i,e[t])}return i}const N="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",gt="",pt={rootMargin:"0px",threshold:0},_="data-lazy-timeout-id";class mt{constructor(e){this.options={loading:N,error:gt,observerOptions:pt,log:!0,lifecycle:{}},this._images=new WeakMap,this.config(e)}config(e={}){M(this.options,e)}mount(e,t){if(!e)return;const{src:o,loading:r,error:s,lifecycle:l,delay:u}=this._valueFormatter(typeof t=="string"?t:t.value);this._lifecycle(v.LOADING,l,e),e.setAttribute("src",r||N),ct||(this.loadImages(e,o,s,l),this._log(()=>{throw new Error("Not support IntersectionObserver!")})),this._initIntersectionObserver(e,o,s,l,u)}update(e,t){var u;if(!e)return;(u=this._realObserver(e))==null||u.unobserve(e);const{src:o,error:r,lifecycle:s,delay:l}=this._valueFormatter(typeof t=="string"?t:t.value);this._initIntersectionObserver(e,o,r,s,l)}unmount(e){var t;e&&((t=this._realObserver(e))==null||t.unobserve(e),this._images.delete(e))}loadImages(e,t,o,r){this._setImageSrc(e,t,o,r)}_setImageSrc(e,t,o,r){e.tagName.toLowerCase()==="img"?(t&&e.getAttribute("src")!==t&&e.setAttribute("src",t),this._listenImageStatus(e,()=>{this._lifecycle(v.LOADED,r,e)},()=>{var s;e.onload=null,this._lifecycle(v.ERROR,r,e),(s=this._realObserver(e))==null||s.disconnect(),o&&e.getAttribute("src")!==o&&e.setAttribute("src",o),this._log(()=>{throw new Error(`Image failed to load!And failed src was: ${t} `)})})):e.style.backgroundImage=`url('${t}')`}_initIntersectionObserver(e,t,o,r,s){var u;const l=this.options.observerOptions;this._images.set(e,new IntersectionObserver(a=>{Array.prototype.forEach.call(a,p=>{s&&s>0?this._delayedIntersectionCallback(e,p,s,t,o,r):this._intersectionCallback(e,p,t,o,r)})},l)),(u=this._realObserver(e))==null||u.observe(e)}_intersectionCallback(e,t,o,r,s){var l;t.isIntersecting&&((l=this._realObserver(e))==null||l.unobserve(t.target),this._setImageSrc(e,o,r,s))}_delayedIntersectionCallback(e,t,o,r,s,l){if(t.isIntersecting){if(t.target.hasAttribute(_))return;const u=setTimeout(()=>{this._intersectionCallback(e,t,r,s,l),t.target.removeAttribute(_)},o);t.target.setAttribute(_,String(u))}else t.target.hasAttribute(_)&&(clearTimeout(Number(t.target.getAttribute(_))),t.target.removeAttribute(_))}_listenImageStatus(e,t,o){e.onload=t,e.onerror=o}_valueFormatter(e){let t=e,o=this.options.loading,r=this.options.error,s=this.options.lifecycle,l=this.options.delay;return x(e)&&(t=e.src,o=e.loading||this.options.loading,r=e.error||this.options.error,s=e.lifecycle||this.options.lifecycle,l=e.delay||this.options.delay),{src:t,loading:o,error:r,lifecycle:s,delay:l}}_log(e){this.options.log&&e()}_lifecycle(e,t,o){switch(e){case v.LOADING:o==null||o.setAttribute("lazy",v.LOADING),t!=null&&t.loading&&t.loading(o);break;case v.LOADED:o==null||o.setAttribute("lazy",v.LOADED),t!=null&&t.loaded&&t.loaded(o);break;case v.ERROR:o==null||o.setAttribute("lazy",v.ERROR),t!=null&&t.error&&t.error(o);break}}_realObserver(e){return this._images.get(e)}}const Ot={install(i,e){const t=new mt(e);i.config.globalProperties.$Lazyload=t,i.provide("Lazyload",t),i.directive("lazy",{mounted:t.mount.bind(t),updated:t.update.bind(t),unmounted:t.unmount.bind(t)})}};export{yt as _,Ot as i};
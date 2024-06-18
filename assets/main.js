(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();var C=document.createElement("style");C.setAttribute("id","multiselect_dropdown_styles");C.innerHTML=`
.multiselect-dropdown{
  display: inline-block;
  padding: 2px 5px 0px 5px;
  border-radius: 4px;
  border: solid 1px #ced4da;
  background-color: white;
  position: relative;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right .75rem center;
  background-size: 16px 12px;
}
.multiselect-dropdown span.optext, .multiselect-dropdown span.placeholder{
  margin-right:0.5em; 
  margin-bottom:2px;
  padding:1px 0; 
  border-radius: 4px; 
  display:inline-block;
}
.multiselect-dropdown span.optext{
  background-color:lightgray;
  padding:1px 0.75em; 
}
.multiselect-dropdown span.optext .optdel {
  float: right;
  margin: 0 -6px 1px 5px;
  font-size: 0.7em;
  margin-top: 2px;
  cursor: pointer;
  color: #666;
}
.multiselect-dropdown span.optext .optdel:hover { color: #c66;}
.multiselect-dropdown span.placeholder{
  color:#ced4da;
}
.multiselect-dropdown-list-wrapper{
  box-shadow: gray 0 3px 8px;
  z-index: 100;
  padding:2px;
  border-radius: 4px;
  border: solid 1px #ced4da;
  display: none;
  margin: -1px;
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  background: white;
}
.multiselect-dropdown-list-wrapper .multiselect-dropdown-search{
  margin-bottom:5px;
}
.multiselect-dropdown-list{
  padding:2px;
  height: 15rem;
  overflow-y:auto;
  overflow-x: hidden;
}
.multiselect-dropdown-list::-webkit-scrollbar {
  width: 6px;
}
.multiselect-dropdown-list::-webkit-scrollbar-thumb {
  background-color: #bec4ca;
  border-radius:3px;
}

.multiselect-dropdown-list div{
  padding: 5px;
}
.multiselect-dropdown-list input{
  height: 1.15em;
  width: 1.15em;
  margin-right: 0.35em;  
}
.multiselect-dropdown-list div:hover{
  background-color: #ced4da;
}
.multiselect-dropdown span.maxselected {width:100%;}
.multiselect-dropdown-all-selector {border-bottom:solid 1px #999;}
`;document.head.appendChild(C);function j(L){var d={search:!0,height:"15rem",placeholder:"select",txtSelected:"selected",txtAll:"All",txtRemove:"Remove",txtSearch:"search",...L};function i(s,r){var t=document.createElement(s);return r!==void 0&&Object.keys(r).forEach(o=>{o==="class"?Array.isArray(r[o])?r[o].forEach(l=>l!==""?t.classList.add(l):0):r[o]!==""&&t.classList.add(r[o]):o==="style"?Object.keys(r[o]).forEach(l=>{t.style[l]=r[o][l]}):o==="text"?r[o]===""?t.innerHTML="&nbsp;":t.innerText=r[o]:t[o]=r[o]}),t}document.querySelectorAll("select[multiple]").forEach((s,r)=>{var y,w,b,S;var t=i("div",{class:"multiselect-dropdown",style:{width:((y=d.style)==null?void 0:y.width)??s.clientWidth+"px",padding:((w=d.style)==null?void 0:w.padding)??""}});s.style.display="none",s.parentNode.insertBefore(t,s.nextSibling);var o=i("div",{class:"multiselect-dropdown-list-wrapper"}),l=i("div",{class:"multiselect-dropdown-list",style:{height:d.height}}),a=i("input",{class:["multiselect-dropdown-search"].concat([((b=d.searchInput)==null?void 0:b.class)??"form-control"]),style:{width:"100%",display:((S=s.attributes["multiselect-search"])==null?void 0:S.value)==="true"?"block":"none"},placeholder:d.txtSearch});o.appendChild(a),t.appendChild(o),o.appendChild(l),s.loadOptions=()=>{var q;if(l.innerHTML="",((q=s.attributes["multiselect-select-all"])==null?void 0:q.value)=="true"){var u=i("div",{class:"multiselect-dropdown-all-selector"}),h=i("input",{type:"checkbox"});u.appendChild(h),u.appendChild(i("label",{text:d.txtAll})),u.addEventListener("click",()=>{u.classList.toggle("checked"),u.querySelector("input").checked=!u.querySelector("input").checked;var p=u.querySelector("input").checked;l.querySelectorAll(":scope > div:not(.multiselect-dropdown-all-selector)").forEach(n=>{n.style.display!=="none"&&(n.querySelector("input").checked=p,n.optEl.selected=p)}),s.dispatchEvent(new Event("change"))}),h.addEventListener("click",p=>{h.checked=!h.checked}),s.addEventListener("change",p=>{let g=Array.from(l.querySelectorAll(":scope > div:not(.multiselect-dropdown-all-selector)")).filter(v=>v.style.display!=="none").find(v=>!v.querySelector("input").checked);h.checked&&g?h.checked=!1:h.checked==!1&&g===void 0&&(h.checked=!0)}),l.appendChild(u)}Array.from(s.options).map(p=>{var n=i("div",{class:p.selected?"checked":"",optEl:p}),g=i("input",{type:"checkbox",checked:p.selected});n.appendChild(g),n.appendChild(i("label",{text:p.text})),n.addEventListener("click",()=>{n.classList.toggle("checked"),n.querySelector("input").checked=!n.querySelector("input").checked,n.optEl.selected=!n.optEl.selected,s.dispatchEvent(new Event("change"))}),g.addEventListener("click",v=>{g.checked=!g.checked}),p.listitemEl=n,l.appendChild(n)}),t.listEl=o,t.refresh=()=>{var n,g;t.querySelectorAll("span.optext, span.placeholder").forEach(v=>t.removeChild(v));var p=Array.from(s.selectedOptions);p.length>(((n=s.attributes["multiselect-max-items"])==null?void 0:n.value)??5)?t.appendChild(i("span",{class:["optext","maxselected"],text:p.length+" "+d.txtSelected})):p.map(v=>{var k;var E=i("span",{class:"optext",text:v.text,srcOption:v});((k=s.attributes["multiselect-hide-x"])==null?void 0:k.value)!=="true"&&E.appendChild(i("span",{class:"optdel",text:"🗙",title:d.txtRemove,onclick:x=>{E.srcOption.listitemEl.dispatchEvent(new Event("click")),t.refresh(),x.stopPropagation()}})),t.appendChild(E)}),s.selectedOptions.length==0&&t.appendChild(i("span",{class:"placeholder",text:((g=s.attributes.placeholder)==null?void 0:g.value)??d.placeholder}))},t.refresh()},s.loadOptions(),a.addEventListener("input",()=>{l.querySelectorAll(":scope div:not(.multiselect-dropdown-all-selector)").forEach(u=>{var h=u.querySelector("label").innerText.toUpperCase();u.style.display=h.includes(a.value.toUpperCase())?"block":"none"})}),t.addEventListener("click",()=>{t.listEl.style.display="block",a.focus(),a.select()}),document.addEventListener("click",function(u){t.contains(u.target)||(o.style.display="none",t.refresh())})})}window.addEventListener("load",()=>{j(window.MultiselectDropdownOptions)});document.addEventListener("DOMContentLoaded",()=>{const L=document.querySelector(".header"),d=L.querySelector(".header__banner"),i=L.querySelector(".search__advanced");document.querySelector("main");const s=document.querySelector(".page").classList.contains("index");let r,t,o,l,a={xl:{filterHeight:110,menuHeight:50},l:{filterHeight:110,menuHeight:50},m:{filterHeight:110,menuHeight:50},s:{filterHeight:110,menuHeight:50},tab:{filterHeight:176,menuHeight:60},mob:{filterHeight:352,menuHeight:60}};s&&(r=!1,t=document.querySelectorAll(".popup"));let y=0,w=0,b=0,S=0;if(s){g(),n(),document.addEventListener("wheel",function(e){!r&&event.deltaY&&(r=!0,e.preventDefault(),h())},{passive:!1}),document.addEventListener("keydown",e=>{r===!1&&(e.key==="PageDown"||e.key==="ArrowDown")&&(e.preventDefault(),h())});var u=0;window.addEventListener("scroll",function(e){if(o>1023){u=window.scrollY;let c,m=window.pageYOffset||document.documentElement.scrollTop;m>S?c="down":m<S&&(c="up"),S=m<=0?0:m,M(u,c)}})}document.querySelectorAll(".js--show-all").forEach(e=>{e.addEventListener("click",c=>{c.target.closest(".accordeon__header").classList.contains("top-fixed")&&(document.documentElement.scrollTop=c.target.closest(".accordeon__el").offsetTop+5),c.target.closest(".accordeon__header").classList.contains("bottom-fixed")&&(document.documentElement.scrollTop=c.target.closest(".accordeon__el").offsetTop-30)})}),document.querySelectorAll(".js--show-popup").forEach(e=>{e.addEventListener("click",()=>{L.classList.add("micro"),document.querySelector(".accordeon").classList.add("hidden"),window.scroll(0,0),t.forEach(c=>c.id===e.dataset.popup?c.classList.add("visible"):"")})}),document.querySelectorAll(".js--hide-popup").forEach(e=>{e.addEventListener("click",()=>{L.classList.remove("micro"),t.forEach(c=>c.classList.contains("visible")?c.classList.remove("visible"):""),document.querySelector(".accordeon").classList.remove("hidden")})}),document.querySelector(".js--open-header-banner").addEventListener("click",()=>p()),document.querySelector(".js--close-header-banner").addEventListener("click",()=>q()),document.querySelector(".js--toggle-search-advanced").addEventListener("click",()=>{i.classList.contains("show")?(s&&(y-=a[l].filterHeight,o>1023&&!document.querySelector(".search-result").classList.contains("hidden")&&x()),i.classList.remove("show")):(s&&(y+=a[l].filterHeight,o>1023&&!document.querySelector(".search-result").classList.contains("hidden")&&x()),i.classList.add("show"))}),document.querySelector(".js--search-tab").addEventListener("click",e=>{let c=e.target;c.classList.contains("active")||(c.closest(".header__search").querySelector(".placeholder span").textContent=c.dataset.text,document.querySelector(".search__tabs li.active").classList.remove("active"),c.classList.add("active"))}),document.querySelector(".js--check-fill").addEventListener("focus",e=>r===!1&&h()),document.querySelector(".js--check-fill").addEventListener("blur",e=>e.target.value.length>0?e.target.classList.add("fill"):e.target.classList.remove("fill")),document.querySelector(".js--check-fill").addEventListener("keydown",e=>e.target.value.length>0?e.target.classList.add("fill"):e.target.classList.remove("fill")),document.querySelector(".js--search-submit").addEventListener("click",e=>{e.preventDefault(),e.target.classList.add("pressed"),document.querySelector(".search-result").classList.remove("hidden"),o>1023&&document.querySelector(".accordeon")&&k()}),document.querySelector(".js--search-clear").addEventListener("click",e=>{let c=e.target;c.closest("label").querySelector("input").value="",c.closest("label").querySelector("input").classList.remove("fill")}),document.querySelector(".js--toggle-menu").addEventListener("click",e=>{L.classList.contains("min")?(document.querySelector(".header__menu").classList.toggle("open"),document.querySelector("body").classList.toggle("fixed-height")):(h(),setTimeout(()=>{document.querySelector(".header__menu").classList.toggle("open"),document.querySelector("body").classList.toggle("fixed-height")},650))});function h(e){r=!0,document.querySelector("body").classList.add("fixed-height"),setTimeout(()=>{y=a[l].bannerMinHeight+a[l].menuHeight+(L.querySelector(".header__search").offsetHeight-40),document.querySelector(".header").classList.add("min"),q()},100),setTimeout(()=>document.querySelector("body").classList.remove("fixed-height"),600)}function q(){a[l].bannerMaxHeight||(a[l].bannerMaxHeight=document.querySelector(".header__banner").offsetHeight),s&&o>1023&&!document.querySelector(".search-result").classList.contains("hidden")&&(document.querySelector(".accordeon").classList.add("slow-position-animation"),E(),setTimeout(()=>document.querySelector(".accordeon").classList.remove("slow-position-animation"),650)),document.querySelector(".header__banner").classList.add("min")}function p(){s&&o>1023&&!document.querySelector(".search-result").classList.contains("hidden")&&(document.querySelector(".accordeon").classList.add("slow-position-animation"),v(),setTimeout(()=>document.querySelector(".accordeon").classList.remove("slow-position-animation"),650)),document.querySelector(".header__banner").classList.remove("min")}function n(){d.style.minHeight=d.querySelector(".banner-min").offsetHeight+"px",a[l].bannerMinHeight=d.querySelector(".banner-min").offsetHeight}function g(){o=window.innerWidth,o>=1660?l="xl":o>=1440?l="l":o>=1280?l="m":o>=1024?l="s":o>=780?l="tab":l="mob"}function v(){y+=a[l].bannerMaxHeight-a[l].bannerMinHeight,x()}function E(){y-=a[l].bannerMaxHeight-a[l].bannerMinHeight,x()}function k(){let e=document.querySelectorAll(".accordeon__el");e.forEach((c,m)=>{m==0?(c.querySelector(".accordeon__header").classList.add("top-fixed","active"),x()):(c.querySelector(".accordeon__header").classList.add("bottom-fixed"),c.querySelector(".accordeon__header .header-content").style.bottom=(e.length-(m+1))*48+"px",w+=48)})}function x(){let e=document.querySelectorAll(".accordeon__header.top-fixed"),c=0;for(let m=0;m<e.length;m++)e[m].querySelector(".header-content").style.top=y+c+"px",c+=e[m].classList.contains("active")?78:48;b=y+c}function M(e,c){let m=e+window.innerHeight-w,H=document.querySelector("main").offsetTop,A=document.querySelectorAll(".accordeon__el");A.forEach((_,T)=>{let f=_.querySelector(".accordeon__header");T!==0&&(c==="down"&&(m>_.offsetTop+H&&(f.classList.remove("bottom-fixed"),f.classList.contains("active")||(document.querySelector(".accordeon__el .accordeon__header.active").classList.remove("active"),x(),f.classList.add("active"),setTimeout(()=>O(),650)),w=document.querySelectorAll(".accordeon__header.bottom-fixed").length*48),e+b>_.offsetTop+H?f.classList.contains("top-fixed")||(f.classList.add("top-fixed"),f.querySelector(".header-content").style.top=b+"px",x()):(f.classList.remove("top-fixed"),x())),c==="up"&&(m<=_.offsetTop+H+108&&(f.classList.contains("active")&&(f.classList.remove("active"),A[T-1].querySelector(".accordeon__header").classList.add("active"),setTimeout(()=>O(),650)),f.classList.add("bottom-fixed"),f.querySelector(".header-content").style.bottom=(A.length-(T+1))*48+"px",w=document.querySelectorAll(".accordeon__header.bottom-fixed").length*48),f.classList.contains("top-fixed")&&e+b<_.offsetTop+H+78&&(f.classList.remove("top-fixed"),x())))})}function O(){b=y,document.querySelectorAll(".accordeon__header.top-fixed").forEach(e=>{b+=e.querySelector(".header-content").offsetHeight})}});

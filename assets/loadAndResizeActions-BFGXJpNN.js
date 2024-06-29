(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function a(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(l){if(l.ep)return;l.ep=!0;const o=a(l);fetch(l.href,o)}})();var C=document.createElement("style");C.setAttribute("id","multiselect_dropdown_styles");C.innerHTML=`
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
  display:inline-flex;
  align-items: center;
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
.multiselect-dropdown-list div:not[.hidden] {    
  display: inline-flex !important;
    align-items: center;
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
`;document.head.appendChild(C);function B(b){var u={search:!0,height:"15rem",placeholder:"select",txtSelected:"selected",txtAll:"All",txtRemove:"Remove",txtSearch:"search",...b};function a(c,l){var o=document.createElement(c);return l!==void 0&&Object.keys(l).forEach(s=>{s==="class"?Array.isArray(l[s])?l[s].forEach(i=>i!==""?o.classList.add(i):0):l[s]!==""&&o.classList.add(l[s]):s==="style"?Object.keys(l[s]).forEach(i=>{o.style[i]=l[s][i]}):s==="text"?l[s]===""?o.innerHTML="&nbsp;":o.innerText=l[s]:o[s]=l[s]}),o}document.querySelectorAll("select[multiple]").forEach((c,l)=>{var f,L,E,x;var o=a("div",{class:"multiselect-dropdown",style:{width:((f=u.style)==null?void 0:f.width)??c.clientWidth+"px",padding:((L=u.style)==null?void 0:L.padding)??""}});c.style.display="none",c.parentNode.insertBefore(o,c.nextSibling);var s=a("div",{class:"multiselect-dropdown-list-wrapper"}),i=a("div",{class:"multiselect-dropdown-list",style:{height:u.height}}),n=a("input",{class:["multiselect-dropdown-search"].concat([((E=u.searchInput)==null?void 0:E.class)??"form-control"].concat(((x=c.attributes["multiselect-search"])==null?void 0:x.value)==="true"?"block":"none")),style:{width:"100%"},placeholder:u.txtSearch});s.appendChild(n),o.appendChild(s),s.appendChild(i),c.loadOptions=()=>{var w;if(i.innerHTML="",((w=c.attributes["multiselect-select-all"])==null?void 0:w.value)=="true"){var h=a("div",{class:"multiselect-dropdown-all-selector"}),y=a("input",{type:"checkbox"});h.appendChild(y),h.appendChild(a("label",{text:u.txtAll})),h.addEventListener("click",()=>{h.classList.toggle("checked"),h.querySelector("input").checked=!h.querySelector("input").checked;var p=h.querySelector("input").checked;i.querySelectorAll(":scope > div:not(.multiselect-dropdown-all-selector)").forEach(d=>{d.style.display!=="none"&&(d.querySelector("input").checked=p,d.optEl.selected=p)}),c.dispatchEvent(new Event("change"))}),y.addEventListener("click",p=>{y.checked=!y.checked}),c.addEventListener("change",p=>{let v=Array.from(i.querySelectorAll(":scope > div:not(.multiselect-dropdown-all-selector)")).filter(S=>S.style.display!=="none").find(S=>!S.querySelector("input").checked);y.checked&&v?y.checked=!1:y.checked==!1&&v===void 0&&(y.checked=!0)}),i.appendChild(h)}Array.from(c.options).map(p=>{var d=a("div",{class:p.selected?"checked":"",optEl:p}),v=a("input",{type:"checkbox",checked:p.selected});d.appendChild(v),d.appendChild(a("label",{text:p.text})),d.addEventListener("click",()=>{d.classList.toggle("checked"),d.querySelector("input").checked=!d.querySelector("input").checked,d.optEl.selected=!d.optEl.selected,c.dispatchEvent(new Event("change"))}),v.addEventListener("click",S=>{v.checked=!v.checked}),p.listitemEl=d,i.appendChild(d)}),o.listEl=s,o.refresh=()=>{var d,v;o.querySelectorAll("span.optext, span.placeholder").forEach(S=>o.removeChild(S));var p=Array.from(c.selectedOptions);p.length>(((d=c.attributes["multiselect-max-items"])==null?void 0:d.value)??5)?o.appendChild(a("span",{class:["optext","maxselected"],text:p.length+" "+u.txtSelected})):p.map(S=>{var j;var k=a("span",{class:"optext",text:S.text,srcOption:S});((j=c.attributes["multiselect-hide-x"])==null?void 0:j.value)!=="true"&&k.appendChild(a("span",{class:"optdel",text:"🗙",title:u.txtRemove,onclick:T=>{k.srcOption.listitemEl.dispatchEvent(new Event("click")),o.refresh(),T.stopPropagation()}})),o.appendChild(k)}),c.selectedOptions.length==0&&o.appendChild(a("span",{class:"placeholder",text:((v=c.attributes.placeholder)==null?void 0:v.value)??u.placeholder}))},o.refresh()},c.loadOptions(),n.addEventListener("input",()=>{i.querySelectorAll(":scope div:not(.multiselect-dropdown-all-selector)").forEach(h=>{var y=h.querySelector("label").innerText.toUpperCase();h.style.display=y.includes(n.value.toUpperCase())?"block":"none"})}),o.addEventListener("click",()=>{o.listEl.style.display="block",n.focus(),n.select()}),document.addEventListener("click",function(h){o.contains(h.target)||(s.style.display="none",o.refresh())})})}window.addEventListener("load",()=>{B(window.MultiselectDropdownOptions)});document.addEventListener("DOMContentLoaded",()=>{const b=document.querySelector(".header"),u=b.querySelector(".header__banner");let a;document.querySelector("main");const c=document.querySelector(".page").classList.contains("index");let l,o=document.querySelectorAll(".popup"),s=document.querySelectorAll(".modal"),i,n,f={xl:{filterHeight:110,menuHeight:50},l:{filterHeight:110,menuHeight:50},m:{filterHeight:110,menuHeight:50},s:{filterHeight:110,menuHeight:50},tab:{filterHeight:176,menuHeight:60},mob:{filterHeight:352,menuHeight:60}};c&&(l=!1,a=b.querySelector(".search__advanced"));let L=0,E=0,x=0,h=0;if(c){S(),v(),document.addEventListener("wheel",function(e){!l&&event.deltaY&&(l=!0,e.preventDefault(),w())},{passive:!1}),document.addEventListener("keydown",e=>{l===!1&&(e.key==="PageDown"||e.key==="ArrowDown")&&(e.preventDefault(),w())});var y=0;window.addEventListener("scroll",function(e){if(i>1023){y=window.scrollY;let t,r=window.pageYOffset||document.documentElement.scrollTop;r>h?t="down":r<h&&(t="up"),h=r<=0?0:r,M(y,t)}}),document.querySelectorAll(".js--show-all").forEach(e=>{e.addEventListener("click",t=>{t.target.closest(".accordeon__header").classList.contains("top-fixed")&&(document.documentElement.scrollTop=t.target.closest(".accordeon__el").offsetTop+5),t.target.closest(".accordeon__header").classList.contains("bottom-fixed")&&(document.documentElement.scrollTop=t.target.closest(".accordeon__el").offsetTop-30)})}),document.querySelector(".js--toggle-search-advanced").addEventListener("click",()=>{a.classList.contains("show")?(c&&(L-=f[n].filterHeight,i>1023&&!document.querySelector(".search-result").classList.contains("hidden")&&q()),a.classList.remove("show")):(c&&(L+=f[n].filterHeight,i>1023&&!document.querySelector(".search-result").classList.contains("hidden")&&q()),a.classList.add("show"))}),document.querySelector(".js--search-tab").addEventListener("click",e=>{let t=e.target;t.classList.contains("active")||(l===!1&&w(),t.closest(".header__search").querySelector(".js--check-fill").value=t.dataset.text,t.closest(".header__search").querySelector(".js--check-fill").classList.add("fill"),document.querySelector(".search__tabs li.active").classList.remove("active"),t.classList.add("active"))}),document.querySelector(".js--check-fill").addEventListener("focus",e=>l===!1&&w()),document.querySelector(".js--check-fill").addEventListener("blur",e=>e.target.value.length>0?e.target.classList.add("fill"):e.target.classList.remove("fill")),document.querySelector(".js--check-fill").addEventListener("keydown",e=>e.target.value.length>0?e.target.classList.add("fill"):e.target.classList.remove("fill")),document.querySelector(".js--search-submit").addEventListener("click",e=>{e.preventDefault(),e.target.classList.add("pressed"),document.querySelector(".search-result").classList.remove("hidden"),i>1023&&document.querySelector(".accordeon")&&T()}),document.querySelector(".js--search-clear").addEventListener("click",e=>{let t=e.target;t.closest("label").querySelector("input").value="",t.closest("label").querySelector("input").classList.remove("fill")})}else v();document.querySelectorAll(".js--show-popup").forEach(e=>{e.addEventListener("click",()=>{c?(b.classList.add("micro"),document.querySelector(".accordeon").classList.add("hidden")):document.querySelector(".inner-content").classList.add("hidden"),window.scroll(0,0),o.forEach(t=>t.id===e.dataset.popup?t.classList.add("visible"):"")})}),document.querySelectorAll(".js--hide-popup").forEach(e=>{e.addEventListener("click",()=>{o.forEach(t=>t.classList.contains("visible")?t.classList.remove("visible"):""),c?(b.classList.remove("micro"),document.querySelector(".accordeon").classList.remove("hidden")):document.querySelector(".inner-content").classList.remove("hidden")})}),document.querySelectorAll(".js--show-modal").forEach(e=>{e.addEventListener("click",()=>{let t=["visible"];document.querySelectorAll(".modal.visible").length>0&&t.push("level-2"),s.forEach(r=>{r.id===e.dataset.modal&&t.forEach(m=>r.classList.add(m))})})}),document.querySelectorAll(".js--close-modal").forEach(e=>{e.addEventListener("click",()=>{e.closest(".modal").classList.contains("level-2")?e.closest(".modal").classList.remove("visible"):s.forEach(t=>t.classList.contains("visible")?t.classList.remove("visible"):"")})}),document.addEventListener("click",e=>{(e.target.classList.contains("js--open-header-banner")||e.target.closest(".js--open-header-banner"))&&d()}),document.querySelector(".js--close-header-banner").addEventListener("click",()=>p()),document.querySelector(".js--toggle-menu").addEventListener("click",e=>{b.classList.contains("min")?(document.querySelector(".header__menu").classList.toggle("open"),document.querySelector("body").classList.toggle("fixed-height")):(w(),setTimeout(()=>{document.querySelector(".header__menu").classList.toggle("open"),document.querySelector("body").classList.toggle("fixed-height")},650))}),document.querySelector(".tabs")&&document.querySelectorAll(".tabs__caption li").forEach(e=>{e.addEventListener("click",t=>{let r=t.target;if(!r.classList.contains("active")){let m=r.closest(".tabs"),H=r.closest(".tabs__caption"),A=Array.from(H.children).indexOf(r);m.querySelector("li.active")&&m.querySelector("li.active").classList.remove("active"),m.querySelector(".tabs__content.active")&&m.querySelector(".tabs__content.active").classList.remove("active"),m.getElementsByClassName("tabs__content")[A].classList.add("active"),r.classList.add("active")}})}),document.querySelectorAll(".js--show-notification").length&&document.querySelectorAll(".js--show-notification").forEach(e=>{e.addEventListener("click",()=>{document.querySelector(".header__notification").classList.add("show-notification"),setTimeout(()=>{document.querySelector(".header__notification").classList.remove("show-notification")},4e3)})}),document.querySelectorAll(".js--show-info").length&&document.querySelectorAll(".js--show-info").forEach(e=>{e.addEventListener("click",t=>{let m=e.closest(".modal").querySelector(".modal__info");m.classList.add("visible"),m.querySelector("p").innerText=e.dataset.text})}),document.querySelectorAll(".js--close-info").length&&document.querySelectorAll(".js--close-info").forEach(e=>{e.addEventListener("click",t=>{e.closest(".modal__info").classList.remove("visible")})}),document.querySelectorAll(".input-label .input").length&&document.querySelectorAll(".input-label .input").forEach(e=>{e.addEventListener("blur",t=>{e.value.length>0?e.classList.add("filled"):e.classList.remove("filled")})});function w(e){l=!0,document.querySelector("body").classList.add("fixed-height"),setTimeout(()=>{L=f[n].bannerMinHeight+f[n].menuHeight+(b.querySelector(".header__search").offsetHeight-40),document.querySelector(".header").classList.add("min"),p()},100),setTimeout(()=>document.querySelector("body").classList.remove("fixed-height"),600)}function p(){c&&!f[n].bannerMaxHeight&&(f[n].bannerMaxHeight=document.querySelector(".header__banner").offsetHeight),c&&i>1023&&!document.querySelector(".search-result").classList.contains("hidden")&&(document.querySelector(".accordeon").classList.add("slow-position-animation"),j(),setTimeout(()=>document.querySelector(".accordeon").classList.remove("slow-position-animation"),650)),document.querySelector(".header__banner").classList.add("min")}function d(){c&&i>1023&&!document.querySelector(".search-result").classList.contains("hidden")&&(document.querySelector(".accordeon").classList.add("slow-position-animation"),k(),setTimeout(()=>document.querySelector(".accordeon").classList.remove("slow-position-animation"),650)),document.querySelector(".header__banner").classList.remove("min")}function v(){u.style.minHeight=u.querySelector(".banner-min").offsetHeight+"px",c&&(f[n].bannerMinHeight=u.querySelector(".banner-min").offsetHeight)}function S(){i=window.innerWidth,i>=1660?n="xl":i>=1440?n="l":i>=1280?n="m":i>=1024?n="s":i>=780?n="tab":n="mob"}function k(){L+=f[n].bannerMaxHeight-f[n].bannerMinHeight,q()}function j(){L-=f[n].bannerMaxHeight-f[n].bannerMinHeight,q()}function T(){let e=document.querySelectorAll(".accordeon__el");e.forEach((t,r)=>{r==0?(t.querySelector(".accordeon__header").classList.add("top-fixed","active"),q()):(t.querySelector(".accordeon__header").classList.add("bottom-fixed"),t.querySelector(".accordeon__header .header-content").style.bottom=(e.length-(r+1))*48+"px",E+=48)})}function q(){let e=document.querySelectorAll(".accordeon__header.top-fixed"),t=0;for(let r=0;r<e.length;r++)e[r].querySelector(".header-content").style.top=L+t+"px",t+=e[r].classList.contains("active")?78:48;x=L+t}function M(e,t){let r=e+window.innerHeight-E,m=document.querySelector("main").offsetTop,H=document.querySelectorAll(".accordeon__el");H.forEach((_,A)=>{let g=_.querySelector(".accordeon__header");A!==0&&(t==="down"&&(r>_.offsetTop+m&&(g.classList.remove("bottom-fixed"),g.classList.contains("active")||(document.querySelector(".accordeon__el .accordeon__header.active").classList.remove("active"),q(),g.classList.add("active"),setTimeout(()=>O(),650)),E=document.querySelectorAll(".accordeon__header.bottom-fixed").length*48),e+x>_.offsetTop+m?g.classList.contains("top-fixed")||(g.classList.add("top-fixed"),g.querySelector(".header-content").style.top=x+"px",q()):(g.classList.remove("top-fixed"),q())),t==="up"&&(r<=_.offsetTop+m+108&&(g.classList.contains("active")&&(g.classList.remove("active"),H[A-1].querySelector(".accordeon__header").classList.add("active"),setTimeout(()=>O(),650)),g.classList.add("bottom-fixed"),g.querySelector(".header-content").style.bottom=(H.length-(A+1))*48+"px",E=document.querySelectorAll(".accordeon__header.bottom-fixed").length*48),g.classList.contains("top-fixed")&&e+x<_.offsetTop+m+78&&(g.classList.remove("top-fixed"),q())))})}function O(){x=L,document.querySelectorAll(".accordeon__header.top-fixed").forEach(e=>{x+=e.querySelector(".header-content").offsetHeight})}});

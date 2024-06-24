(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(c){if(c.ep)return;c.ep=!0;const o=n(c);fetch(c.href,o)}})();var O=document.createElement("style");O.setAttribute("id","multiselect_dropdown_styles");O.innerHTML=`
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
`;document.head.appendChild(O);function B(S){var u={search:!0,height:"15rem",placeholder:"select",txtSelected:"selected",txtAll:"All",txtRemove:"Remove",txtSearch:"search",...S};function n(l,c){var o=document.createElement(l);return c!==void 0&&Object.keys(c).forEach(s=>{s==="class"?Array.isArray(c[s])?c[s].forEach(r=>r!==""?o.classList.add(r):0):c[s]!==""&&o.classList.add(c[s]):s==="style"?Object.keys(c[s]).forEach(r=>{o.style[r]=c[s][r]}):s==="text"?c[s]===""?o.innerHTML="&nbsp;":o.innerText=c[s]:o[s]=c[s]}),o}document.querySelectorAll("select[multiple]").forEach((l,c)=>{var m,g,E,x;var o=n("div",{class:"multiselect-dropdown",style:{width:((m=u.style)==null?void 0:m.width)??l.clientWidth+"px",padding:((g=u.style)==null?void 0:g.padding)??""}});l.style.display="none",l.parentNode.insertBefore(o,l.nextSibling);var s=n("div",{class:"multiselect-dropdown-list-wrapper"}),r=n("div",{class:"multiselect-dropdown-list",style:{height:u.height}}),i=n("input",{class:["multiselect-dropdown-search"].concat([((E=u.searchInput)==null?void 0:E.class)??"form-control"].concat(((x=l.attributes["multiselect-search"])==null?void 0:x.value)==="true"?"block":"none")),style:{width:"100%"},placeholder:u.txtSearch});s.appendChild(i),o.appendChild(s),s.appendChild(r),l.loadOptions=()=>{var w;if(r.innerHTML="",((w=l.attributes["multiselect-select-all"])==null?void 0:w.value)=="true"){var p=n("div",{class:"multiselect-dropdown-all-selector"}),f=n("input",{type:"checkbox"});p.appendChild(f),p.appendChild(n("label",{text:u.txtAll})),p.addEventListener("click",()=>{p.classList.toggle("checked"),p.querySelector("input").checked=!p.querySelector("input").checked;var h=p.querySelector("input").checked;r.querySelectorAll(":scope > div:not(.multiselect-dropdown-all-selector)").forEach(d=>{d.style.display!=="none"&&(d.querySelector("input").checked=h,d.optEl.selected=h)}),l.dispatchEvent(new Event("change"))}),f.addEventListener("click",h=>{f.checked=!f.checked}),l.addEventListener("change",h=>{let y=Array.from(r.querySelectorAll(":scope > div:not(.multiselect-dropdown-all-selector)")).filter(L=>L.style.display!=="none").find(L=>!L.querySelector("input").checked);f.checked&&y?f.checked=!1:f.checked==!1&&y===void 0&&(f.checked=!0)}),r.appendChild(p)}Array.from(l.options).map(h=>{var d=n("div",{class:h.selected?"checked":"",optEl:h}),y=n("input",{type:"checkbox",checked:h.selected});d.appendChild(y),d.appendChild(n("label",{text:h.text})),d.addEventListener("click",()=>{d.classList.toggle("checked"),d.querySelector("input").checked=!d.querySelector("input").checked,d.optEl.selected=!d.optEl.selected,l.dispatchEvent(new Event("change"))}),y.addEventListener("click",L=>{y.checked=!y.checked}),h.listitemEl=d,r.appendChild(d)}),o.listEl=s,o.refresh=()=>{var d,y;o.querySelectorAll("span.optext, span.placeholder").forEach(L=>o.removeChild(L));var h=Array.from(l.selectedOptions);h.length>(((d=l.attributes["multiselect-max-items"])==null?void 0:d.value)??5)?o.appendChild(n("span",{class:["optext","maxselected"],text:h.length+" "+u.txtSelected})):h.map(L=>{var T;var k=n("span",{class:"optext",text:L.text,srcOption:L});((T=l.attributes["multiselect-hide-x"])==null?void 0:T.value)!=="true"&&k.appendChild(n("span",{class:"optdel",text:"🗙",title:u.txtRemove,onclick:j=>{k.srcOption.listitemEl.dispatchEvent(new Event("click")),o.refresh(),j.stopPropagation()}})),o.appendChild(k)}),l.selectedOptions.length==0&&o.appendChild(n("span",{class:"placeholder",text:((y=l.attributes.placeholder)==null?void 0:y.value)??u.placeholder}))},o.refresh()},l.loadOptions(),i.addEventListener("input",()=>{r.querySelectorAll(":scope div:not(.multiselect-dropdown-all-selector)").forEach(p=>{var f=p.querySelector("label").innerText.toUpperCase();p.style.display=f.includes(i.value.toUpperCase())?"block":"none"})}),o.addEventListener("click",()=>{o.listEl.style.display="block",i.focus(),i.select()}),document.addEventListener("click",function(p){o.contains(p.target)||(s.style.display="none",o.refresh())})})}window.addEventListener("load",()=>{B(window.MultiselectDropdownOptions)});document.addEventListener("DOMContentLoaded",()=>{const S=document.querySelector(".header"),u=S.querySelector(".header__banner");let n;document.querySelector("main");const l=document.querySelector(".page").classList.contains("index");let c,o=document.querySelectorAll(".popup"),s=document.querySelectorAll(".modal"),r,i,m={xl:{filterHeight:110,menuHeight:50},l:{filterHeight:110,menuHeight:50},m:{filterHeight:110,menuHeight:50},s:{filterHeight:110,menuHeight:50},tab:{filterHeight:176,menuHeight:60},mob:{filterHeight:352,menuHeight:60}};l&&(c=!1,n=S.querySelector(".search__advanced"));let g=0,E=0,x=0,p=0;if(l){L(),y(),document.addEventListener("wheel",function(e){!c&&event.deltaY&&(c=!0,e.preventDefault(),w())},{passive:!1}),document.addEventListener("keydown",e=>{c===!1&&(e.key==="PageDown"||e.key==="ArrowDown")&&(e.preventDefault(),w())});var f=0;window.addEventListener("scroll",function(e){if(r>1023){f=window.scrollY;let t,a=window.pageYOffset||document.documentElement.scrollTop;a>p?t="down":a<p&&(t="up"),p=a<=0?0:a,M(f,t)}}),document.querySelectorAll(".js--show-all").forEach(e=>{e.addEventListener("click",t=>{t.target.closest(".accordeon__header").classList.contains("top-fixed")&&(document.documentElement.scrollTop=t.target.closest(".accordeon__el").offsetTop+5),t.target.closest(".accordeon__header").classList.contains("bottom-fixed")&&(document.documentElement.scrollTop=t.target.closest(".accordeon__el").offsetTop-30)})}),document.querySelector(".js--toggle-search-advanced").addEventListener("click",()=>{n.classList.contains("show")?(l&&(g-=m[i].filterHeight,r>1023&&!document.querySelector(".search-result").classList.contains("hidden")&&q()),n.classList.remove("show")):(l&&(g+=m[i].filterHeight,r>1023&&!document.querySelector(".search-result").classList.contains("hidden")&&q()),n.classList.add("show"))}),document.querySelector(".js--search-tab").addEventListener("click",e=>{let t=e.target;t.classList.contains("active")||(c===!1&&w(),t.closest(".header__search").querySelector(".js--check-fill").value=t.dataset.text,t.closest(".header__search").querySelector(".js--check-fill").classList.add("fill"),document.querySelector(".search__tabs li.active").classList.remove("active"),t.classList.add("active"))}),document.querySelector(".js--check-fill").addEventListener("focus",e=>c===!1&&w()),document.querySelector(".js--check-fill").addEventListener("blur",e=>e.target.value.length>0?e.target.classList.add("fill"):e.target.classList.remove("fill")),document.querySelector(".js--check-fill").addEventListener("keydown",e=>e.target.value.length>0?e.target.classList.add("fill"):e.target.classList.remove("fill")),document.querySelector(".js--search-submit").addEventListener("click",e=>{e.preventDefault(),e.target.classList.add("pressed"),document.querySelector(".search-result").classList.remove("hidden"),r>1023&&document.querySelector(".accordeon")&&j()}),document.querySelector(".js--search-clear").addEventListener("click",e=>{let t=e.target;t.closest("label").querySelector("input").value="",t.closest("label").querySelector("input").classList.remove("fill")})}else y();document.querySelectorAll(".js--show-popup").forEach(e=>{e.addEventListener("click",()=>{l?(S.classList.add("micro"),document.querySelector(".accordeon").classList.add("hidden")):document.querySelector(".inner-content").classList.add("hidden"),window.scroll(0,0),o.forEach(t=>t.id===e.dataset.popup?t.classList.add("visible"):"")})}),document.querySelectorAll(".js--hide-popup").forEach(e=>{e.addEventListener("click",()=>{o.forEach(t=>t.classList.contains("visible")?t.classList.remove("visible"):""),l?(S.classList.remove("micro"),document.querySelector(".accordeon").classList.remove("hidden")):document.querySelector(".inner-content").classList.remove("hidden")})}),document.querySelectorAll(".js--show-modal").forEach(e=>{e.addEventListener("click",()=>{s.forEach(t=>t.classList.contains("visible")?t.classList.remove("visible"):""),s.forEach(t=>t.id===e.dataset.modal?t.classList.add("visible"):"")})}),document.querySelectorAll(".js--close-modal").forEach(e=>{e.addEventListener("click",()=>{s.forEach(t=>t.classList.contains("visible")?t.classList.remove("visible"):"")})}),document.querySelector(".js--open-header-banner").addEventListener("click",()=>d()),document.querySelector(".js--close-header-banner").addEventListener("click",()=>h()),document.querySelector(".js--toggle-menu").addEventListener("click",e=>{S.classList.contains("min")?(document.querySelector(".header__menu").classList.toggle("open"),document.querySelector("body").classList.toggle("fixed-height")):(w(),setTimeout(()=>{document.querySelector(".header__menu").classList.toggle("open"),document.querySelector("body").classList.toggle("fixed-height")},650))}),document.querySelector(".tabs")&&document.querySelectorAll(".tabs__caption li").forEach(e=>{e.addEventListener("click",t=>{let a=t.target;if(!a.classList.contains("active")){let b=a.closest(".tabs"),H=a.closest(".tabs__caption"),A=Array.from(H.children).indexOf(a);b.querySelector("li.active")&&b.querySelector("li.active").classList.remove("active"),b.querySelector(".tabs__content.active")&&b.querySelector(".tabs__content.active").classList.remove("active"),b.getElementsByClassName("tabs__content")[A].classList.add("active"),a.classList.add("active")}})}),document.querySelectorAll(".js--show-notification").length&&document.querySelectorAll(".js--show-notification").forEach(e=>{e.addEventListener("click",()=>{document.querySelector(".header__notification").classList.add("show-notification"),setTimeout(()=>{document.querySelector(".header__notification").classList.remove("show-notification")},4e3)})});function w(e){c=!0,document.querySelector("body").classList.add("fixed-height"),setTimeout(()=>{g=m[i].bannerMinHeight+m[i].menuHeight+(S.querySelector(".header__search").offsetHeight-40),document.querySelector(".header").classList.add("min"),h()},100),setTimeout(()=>document.querySelector("body").classList.remove("fixed-height"),600)}function h(){l&&!m[i].bannerMaxHeight&&(m[i].bannerMaxHeight=document.querySelector(".header__banner").offsetHeight),l&&r>1023&&!document.querySelector(".search-result").classList.contains("hidden")&&(document.querySelector(".accordeon").classList.add("slow-position-animation"),T(),setTimeout(()=>document.querySelector(".accordeon").classList.remove("slow-position-animation"),650)),document.querySelector(".header__banner").classList.add("min")}function d(){l&&r>1023&&!document.querySelector(".search-result").classList.contains("hidden")&&(document.querySelector(".accordeon").classList.add("slow-position-animation"),k(),setTimeout(()=>document.querySelector(".accordeon").classList.remove("slow-position-animation"),650)),document.querySelector(".header__banner").classList.remove("min")}function y(){u.style.minHeight=u.querySelector(".banner-min").offsetHeight+"px",l&&(m[i].bannerMinHeight=u.querySelector(".banner-min").offsetHeight)}function L(){r=window.innerWidth,r>=1660?i="xl":r>=1440?i="l":r>=1280?i="m":r>=1024?i="s":r>=780?i="tab":i="mob"}function k(){g+=m[i].bannerMaxHeight-m[i].bannerMinHeight,q()}function T(){g-=m[i].bannerMaxHeight-m[i].bannerMinHeight,q()}function j(){let e=document.querySelectorAll(".accordeon__el");e.forEach((t,a)=>{a==0?(t.querySelector(".accordeon__header").classList.add("top-fixed","active"),q()):(t.querySelector(".accordeon__header").classList.add("bottom-fixed"),t.querySelector(".accordeon__header .header-content").style.bottom=(e.length-(a+1))*48+"px",E+=48)})}function q(){let e=document.querySelectorAll(".accordeon__header.top-fixed"),t=0;for(let a=0;a<e.length;a++)e[a].querySelector(".header-content").style.top=g+t+"px",t+=e[a].classList.contains("active")?78:48;x=g+t}function M(e,t){let a=e+window.innerHeight-E,b=document.querySelector("main").offsetTop,H=document.querySelectorAll(".accordeon__el");H.forEach((_,A)=>{let v=_.querySelector(".accordeon__header");A!==0&&(t==="down"&&(a>_.offsetTop+b&&(v.classList.remove("bottom-fixed"),v.classList.contains("active")||(document.querySelector(".accordeon__el .accordeon__header.active").classList.remove("active"),q(),v.classList.add("active"),setTimeout(()=>C(),650)),E=document.querySelectorAll(".accordeon__header.bottom-fixed").length*48),e+x>_.offsetTop+b?v.classList.contains("top-fixed")||(v.classList.add("top-fixed"),v.querySelector(".header-content").style.top=x+"px",q()):(v.classList.remove("top-fixed"),q())),t==="up"&&(a<=_.offsetTop+b+108&&(v.classList.contains("active")&&(v.classList.remove("active"),H[A-1].querySelector(".accordeon__header").classList.add("active"),setTimeout(()=>C(),650)),v.classList.add("bottom-fixed"),v.querySelector(".header-content").style.bottom=(H.length-(A+1))*48+"px",E=document.querySelectorAll(".accordeon__header.bottom-fixed").length*48),v.classList.contains("top-fixed")&&e+x<_.offsetTop+b+78&&(v.classList.remove("top-fixed"),q())))})}function C(){x=g,document.querySelectorAll(".accordeon__header.top-fixed").forEach(e=>{x+=e.querySelector(".header-content").offsetHeight})}});

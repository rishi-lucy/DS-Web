/* ============================================================
   Premium motion + interaction layer
   Progressive enhancement only — every feature works without it.
   ============================================================ */
(function(){
 const RM=window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):{matches:false};
 const reduce=()=>!!RM.matches;
 const fine=()=>window.matchMedia?window.matchMedia("(pointer:fine)").matches:true;
 const seenReveal=new WeakSet(),seenCount=new WeakSet();

 /* ---------- reveal on scroll ---------- */
 let io=null;
 if("IntersectionObserver" in window&&!reduce()){
  io=new IntersectionObserver(entries=>{
   entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target)}});
  },{threshold:.07,rootMargin:"0px 0px -36px 0px"});
 }
 function reveal(el){
  if(!el||seenReveal.has(el))return;
  seenReveal.add(el);
  if(reduce()||!io){el.classList.add("in");return}
  io.observe(el);
 }

 /* ---------- animated counters ---------- */
 function count(el){
  if(seenCount.has(el))return;
  seenCount.add(el);
  const target=Number(String(el.dataset.count||el.textContent).replace(/[^\d.-]/g,""))||0;
  if(reduce()){el.textContent=target.toLocaleString();return}
  let started=false;
  const begin=()=>{
   if(started)return;started=true;
   const t0=performance.now(),dur=900;
   const step=t=>{
    const p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);
    el.textContent=Math.round(target*e).toLocaleString();
    if(p<1)requestAnimationFrame(step);else el.textContent=target.toLocaleString();
   };
   requestAnimationFrame(step);
  };
  if("IntersectionObserver" in window){
   const ob=new IntersectionObserver(es=>{es.forEach(x=>{if(x.isIntersecting){ob.disconnect();begin()}})},{threshold:.35});
   ob.observe(el);
  }else begin();
 }

 /* ---------- progress bars: animate from zero ---------- */
 function bars(root){
  root.querySelectorAll(".bar-fill").forEach(el=>{
   if(el.dataset.animated)return;
   el.dataset.animated="1";
   if(reduce())return;
   el.style.width="0%";
   requestAnimationFrame(()=>requestAnimationFrame(()=>{el.style.width=""}));
  });
 }

 /* ---------- ambient aurora ---------- */
 function ambient(){
  if(reduce()||document.querySelector(".pr-ambient"))return;
  const box=document.createElement("div");
  box.className="pr-ambient";box.setAttribute("aria-hidden","true");
  box.innerHTML="<i></i><i></i><i></i>";
  document.body.prepend(box);
 }

 /* ---------- hero: spotlight, depth parallax, rising sparks ---------- */
 function bindHero(){
  const h=document.querySelector(".hero");
  if(!h||h.dataset.prHero)return;
  h.dataset.prHero="1";
  if(!reduce()){
   const sparks=document.createElement("div");
   sparks.className="pr-sparks";sparks.setAttribute("aria-hidden","true");
   for(let i=0;i<12;i++){
    const s=document.createElement("i");
    s.style.left=(4+Math.random()*88).toFixed(2)+"%";
    s.style.top=(12+Math.random()*72).toFixed(2)+"%";
    s.style.setProperty("--dur",(7+Math.random()*7).toFixed(2)+"s");
    s.style.setProperty("--delay",(-Math.random()*14).toFixed(2)+"s");
    sparks.appendChild(s);
   }
   h.appendChild(sparks);
  }
  if(!fine()||reduce())return;
  let raf=0,lx=.5,ly=.5;
  const move=e=>{
   const r=h.getBoundingClientRect();
   if(!r.width||!r.height)return;
   lx=(e.clientX-r.left)/r.width;ly=(e.clientY-r.top)/r.height;
   if(raf)return;
   raf=requestAnimationFrame(()=>{
    raf=0;
    h.style.setProperty("--mx",(lx*100).toFixed(1)+"%");
    h.style.setProperty("--my",(ly*100).toFixed(1)+"%");
    h.style.setProperty("--vx",((lx-.5)*-22).toFixed(1)+"px");
    h.style.setProperty("--vy",((ly-.5)*-14).toFixed(1)+"px");
    h.style.setProperty("--sx",((lx-.5)*34).toFixed(1)+"px");
    h.style.setProperty("--sy",((ly-.5)*20).toFixed(1)+"px");
   });
  };
  const leave=()=>{
   ["--vx","--vy","--sx","--sy"].forEach(v=>h.style.setProperty(v,"0px"));
  };
  h.addEventListener("pointermove",move,{passive:true});
  h.addEventListener("pointerleave",leave,{passive:true});
 }

 /* ---------- pointer light + card glow ---------- */
 function initCursor(){
  if(!fine()||reduce()||window.innerWidth<=760||document.querySelector(".pr-cursor"))return;
  const c=document.createElement("div");
  c.className="pr-cursor";c.setAttribute("aria-hidden","true");
  document.body.appendChild(c);
  let tx=window.innerWidth/2,ty=window.innerHeight/2,x=tx,y=ty,raf=0;
  const tick=()=>{
   x+=(tx-x)*.13;y+=(ty-y)*.13;
   c.style.transform="translate3d("+x.toFixed(1)+"px,"+y.toFixed(1)+"px,0)";
   if(Math.abs(tx-x)+Math.abs(ty-y)>.5)raf=requestAnimationFrame(tick);else raf=0;
  };
  document.addEventListener("pointermove",e=>{
   tx=e.clientX;ty=e.clientY;c.classList.add("on");
   if(!raf)raf=requestAnimationFrame(tick);
  },{passive:true});
  document.addEventListener("pointerleave",()=>c.classList.remove("on"));
  window.addEventListener("blur",()=>c.classList.remove("on"));
 }

 function glowCards(){
  if(!fine()||reduce()||window.innerWidth<=760)return;
  document.querySelectorAll(".card").forEach(card=>{
   if(card.dataset.prGlow||card.closest(".modal"))return;
   if(card.querySelector("input,select,textarea,iframe,canvas"))return;
   card.dataset.prGlow="1";
   card.classList.add("pr-glow-host");
   const g=document.createElement("span");
   g.className="pr-glow";g.setAttribute("aria-hidden","true");
   card.appendChild(g);
   card.addEventListener("pointermove",e=>{
    if(e.pointerType==="touch")return;
    const r=card.getBoundingClientRect();
    if(!r.width||!r.height)return;
    card.style.setProperty("--gx",(((e.clientX-r.left)/r.width)*100).toFixed(1)+"%");
    card.style.setProperty("--gy",(((e.clientY-r.top)/r.height)*100).toFixed(1)+"%");
   },{passive:true});
  });
 }

 /* ---------- magnetic call-to-action buttons ---------- */
 function magnetic(){
  if(!fine()||reduce())return;
  document.querySelectorAll(".hero-cta .btn,.page-head .head-actions .btn,.res-head .cta-red,.detail-head .btn").forEach(b=>{
   if(b.dataset.prMag)return;
   b.dataset.prMag="1";
   b.addEventListener("pointermove",e=>{
    const r=b.getBoundingClientRect();
    if(!r.width||!r.height)return;
    b.style.setProperty("--mag-x",(((e.clientX-r.left)/r.width-.5)*8).toFixed(2)+"px");
    b.style.setProperty("--mag-y",(((e.clientY-r.top)/r.height-.5)*6).toFixed(2)+"px");
   },{passive:true});
   const reset=()=>{b.style.setProperty("--mag-x","0px");b.style.setProperty("--mag-y","0px")};
   b.addEventListener("pointerleave",reset,{passive:true});
   b.addEventListener("blur",reset);
  });
 }

 /* ---------- sliding active-nav pill ---------- */
 let pillRaf=0;
 function alignPill(){
  if(pillRaf)return;
  pillRaf=requestAnimationFrame(()=>{
   pillRaf=0;
   const nav=document.querySelector(".top");
   if(!nav)return;
   const active=nav.querySelector("a.on");
   let pill=nav.querySelector(".pr-nav-pill");
   const show=!!active&&window.innerWidth>1200&&!reduce();
   if(!show){
    nav.classList.remove("has-pill");
    if(pill)pill.style.opacity="0";
    return;
   }
   if(!pill){
    pill=document.createElement("span");
    pill.className="pr-nav-pill";pill.setAttribute("aria-hidden","true");
    nav.prepend(pill);
   }
   const nr=nav.getBoundingClientRect(),ar=active.getBoundingClientRect();
   if(!ar.width){setTimeout(alignPill,250);return}
   pill.style.width=ar.width+"px";
   pill.style.height=ar.height+"px";
   pill.style.transform="translate3d("+Math.round(ar.left-nr.left)+"px,"+Math.round(ar.top-nr.top)+"px,0)";
   nav.classList.add("has-pill");
   pill.style.opacity="1";
  });
 }

 /* ---------- button ripples ---------- */
 document.addEventListener("pointerdown",e=>{
  if(reduce())return;
  const b=e.target.closest?e.target.closest(".btn,.pill,.icon-btn,.chip,.burger"):null;
  if(!b||b.disabled)return;
  if(getComputedStyle(b).position==="static")b.style.position="relative";
  const r=b.getBoundingClientRect(),d=Math.max(r.width,r.height)*1.7;
  const s=document.createElement("span");
  s.className="pr-ripple";
  s.style.width=s.style.height=d+"px";
  s.style.left=(e.clientX-r.left-d/2)+"px";
  s.style.top=(e.clientY-r.top-d/2)+"px";
  b.appendChild(s);
  setTimeout(()=>s.remove(),700);
 },{passive:true});

 /* ---------- theme switch burst ---------- */
 document.addEventListener("click",e=>{
  const t=e.target.closest?e.target.closest(".theme-toggle"):null;
  if(!t||reduce())return;
  const r=t.getBoundingClientRect();
  const b=document.createElement("span");
  b.className="pr-theme-burst";b.setAttribute("aria-hidden","true");
  b.style.left=(r.left+r.width/2)+"px";
  b.style.top=(r.top+r.height/2)+"px";
  document.body.appendChild(b);
  setTimeout(()=>b.remove(),900);
 });

 /* ---------- scan newly rendered content ---------- */
 function scan(root){
  root=root||document;
  if(!root.querySelectorAll)return;
  root.querySelectorAll(".stagger").forEach(g=>{
   [...g.children].forEach((c,i)=>{
    if(!c.classList.contains("reveal"))c.classList.add("reveal");
    if(!c.style.getPropertyValue("--i"))c.style.setProperty("--i",i);
   });
  });
  root.querySelectorAll(".sec,.page-head,.detail-head,.stu-hero,.res-head,.hero-copy").forEach(el=>{
   if(!el.classList.contains("reveal"))el.classList.add("reveal");
  });
  root.querySelectorAll(".reveal").forEach(reveal);
  bars(root);
  root.querySelectorAll("[data-count]").forEach(count);
  bindHero();
  glowCards();
  magnetic();
  alignPill();
 }

 /* ---------- sticky nav state + reading progress ---------- */
 const sb=document.createElement("div");
 sb.id="scrollbar";sb.setAttribute("aria-hidden","true");
 document.body.appendChild(sb);
 let ticking=false;
 function onScroll(){
  if(ticking)return;
  ticking=true;
  requestAnimationFrame(()=>{
   const y=window.scrollY||window.pageYOffset||0;
   document.querySelectorAll(".bar").forEach(b=>b.classList.toggle("scrolled",y>8));
   const h=document.documentElement.scrollHeight-window.innerHeight;
   sb.style.width=(h>0?Math.max(0,Math.min(100,(y/h)*100)):0)+"%";
   document.querySelectorAll(".reveal:not(.in)").forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-24)el.classList.add("in");
   });
   const hero=document.querySelector(".hero");
   if(hero&&!reduce())hero.style.setProperty("--scroll-y",Math.min(30,y*.055).toFixed(1)+"px");
   ticking=false;
  });
 }
 window.addEventListener("scroll",onScroll,{passive:true});
 window.addEventListener("resize",onScroll,{passive:true});
 window.addEventListener("resize",alignPill,{passive:true});
 window.addEventListener("load",alignPill);
 onScroll();

 /* ---------- theme toggle sync ---------- */
 function syncTheme(){
  const dark=document.documentElement.dataset.theme==="dark";
  document.querySelectorAll(".theme-toggle").forEach(b=>{
   b.setAttribute("aria-pressed",dark?"true":"false");
   b.setAttribute("aria-label",dark?"Switch to light mode":"Switch to dark mode");
  });
 }
 syncTheme();

 /* ---------- gentle page transition ---------- */
 document.addEventListener("click",e=>{
  const a=e.target.closest?a.target.closest("a[href]"):null;
  if(!a)return;
  if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  if(a.target&&a.target!=="_self"&&a.target!=="")return;
  if(a.hasAttribute("download")||a.hasAttribute("onclick"))return;
  const href=a.getAttribute("href")||"";
  if(!href||href.charAt(0)==="#"||/^(https?:|mailto:|tel:|javascript:)/i.test(href))return;
  if(reduce())return;
  e.preventDefault();
  document.body.classList.add("leaving");
  setTimeout(()=>{window.location.href=href},165);
 });

 /* ---------- modal focus trap ---------- */
 document.addEventListener("keydown",e=>{
  if(e.key!=="Tab")return;
  const m=document.querySelector(".modal.open");
  if(!m)return;
  const f=[...m.querySelectorAll('a[href],button:not([disabled]),input:not([type="hidden"]):not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(x=>x.offsetParent!==null);
  if(!f.length)return;
  const first=f[0],last=f[f.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
 });

 /* ---------- "/" focuses the page search ---------- */
 document.addEventListener("keydown",e=>{
  if(e.key!=="/"||e.ctrlKey||e.metaKey||e.altKey)return;
  const tag=(document.activeElement&&document.activeElement.tagName)||"";
  if(/^(INPUT|TEXTAREA|SELECT)$/.test(tag))return;
  const t=["#gs","#sr","#resourceSearch","#moduleSearch","#toolSearch","#projectSearch"].map(s=>document.querySelector(s)).find(Boolean);
  if(t){e.preventDefault();t.focus();if(t.select)t.select()}
 });

 /* ---------- keep new DOM animated ---------- */
 if("MutationObserver" in window){
  let queued=false;
  const mo=new MutationObserver(()=>{
   if(queued)return;queued=true;
   requestAnimationFrame(()=>{queued=false;scan(document)});
  });
  mo.observe(document.getElementById("app")||document.body,{childList:true,subtree:true});
 }

 /* ---------- public refresh hook ---------- */
 window.PR={refresh:()=>scan(document),reduce,count};

 /* ---------- boot ---------- */
 const start=()=>{ambient();initCursor();scan(document);onScroll();syncTheme();alignPill()};
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>requestAnimationFrame(start));
 else requestAnimationFrame(start);
})();

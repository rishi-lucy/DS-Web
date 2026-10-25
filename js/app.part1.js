/* ============================================================
   Data Science Digital Library — application layer
   Pure vanilla JS. Renders every page into #app.
   All legacy globals, storage keys and inline handlers are kept.
   ============================================================ */
const $=s=>document.querySelector(s),q=new URLSearchParams(location.search),page=document.body.dataset.page;
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const J=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch{return d}};
(()=>{try{const o=J("mbu_student",{});if(o.name==="Manchala Bhargavi"){o.name=student.name;localStorage.setItem("mbu_student",JSON.stringify(o))}}catch(e){}})(); /* replaces a previously saved old name */
const _saved=J("mbu_student",{});
if(["Manchala Bhargavi","Pujala Geetha Nandini"].includes(_saved.name)||["24102A030088","24102A030099"].includes(_saved.rollNo)){localStorage.removeItem("mbu_student");for(const k in _saved)delete _saved[k]}  /* drop cached profiles from earlier defaults */
const S=Object.assign({},student,_saved);S.social=Object.assign({},student.social,S.social);
if(!S.img)S.img=S.profileImage||"assets/images/profile.jpg";
const ALL=experiments.concat(J("mbu_exps",[]));
document.documentElement.dataset.theme=localStorage.getItem("mbu_theme")||"light";
const link=u=>/^https?:/.test(u)?`href="${esc(u)}" target="_blank" rel="noopener"`:`href="#" onclick="toast('Social link is not configured');return false"`;

/* ---------------- icon set ---------------- */
const svg=d=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const IC={
 home:svg('<path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5.5h4V20"/>'),
 modules:svg('<rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/>'),
 experiments:svg('<path d="M9 3h6"/><path d="M10 3v6.2L5.4 18a2 2 0 0 0 1.7 3h9.8a2 2 0 0 0 1.7-3L14 9.2V3"/><path d="M7.5 15h9"/>'),
 tools:svg('<path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6l-2.6 2.6-3-3 2.6-2.6Z"/>'),
 resources:svg('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21V5.5Z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/>'),
 projects:svg('<path d="M3 7.5A2 2 0 0 1 5 5.5h4l2 2.5h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>'),
 student:svg('<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>'),
 search:svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
 arrow:svg('<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'),
 plus:svg('<path d="M12 5v14M5 12h14"/>'),
 star:svg('<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9Z"/>'),
 external:svg('<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),
 trash:svg('<path d="M4 7h16"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M6 7l1 13h10l1-13"/>'),
 grid:svg('<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>'),
 list:svg('<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>'),
 menu:svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
 check:svg('<path d="m4 12.5 5 5L20 6.5"/>'),
 play:svg('<path d="M8 5v14l11-7Z"/>'),
 book:svg('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21V5.5Z"/>'),
 clock:svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
 spark:svg('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>'),
 eye:svg('<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>'),
 edit:svg('<path d="M4 20h4L20 8l-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/>')
};

/* ---------------- ui helpers ---------------- */
function toast(t){document.querySelectorAll(".toast").forEach(x=>x.remove());const d=document.createElement("div");d.className="toast";d.setAttribute("role","status");d.textContent=t;document.body.append(d);setTimeout(()=>d.remove(),2400)}
function modal(id,html){
 let m=$("#"+id);
 if(!m){m=document.createElement("div");m.id=id;m.className="modal";m.setAttribute("role","dialog");m.setAttribute("aria-modal","true");m.onclick=e=>{if(e.target===m)m.classList.remove("open")};document.body.append(m)}
 m.innerHTML="<div>"+html+"</div>";m.classList.add("open");
 setTimeout(()=>{const f=m.querySelector("input:not([type=hidden]),textarea,select");if(f)f.focus()},90);
 return m;
}
document.addEventListener("keydown",e=>{if(e.key=="Escape")document.querySelectorAll(".modal.open").forEach(m=>m.classList.remove("open"))});
function theme(){
 const root=document.documentElement,t=root.dataset.theme==="dark"?"light":"dark";
 root.classList.add("theming");root.dataset.theme=t;localStorage.setItem("mbu_theme",t);
 document.querySelectorAll(".theme-toggle").forEach(b=>{b.setAttribute("aria-pressed",t==="dark"?"true":"false");b.setAttribute("aria-label",t==="dark"?"Switch to light mode":"Switch to dark mode")});
 const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute("content",t==="dark"?"#0B1220":"#F5F7FB");
 setTimeout(()=>root.classList.remove("theming"),430);
}

/* ---------------- progress, bookmarks, activity ---------------- */
const PKEY="mbu_progress",SKEY="mbu_saved",AKEY="mbu_activity";
function prog(){const p=J(PKEY,{});p.topics=p.topics||{};p.subs=p.subs||[];return p}
function saveProg(p){localStorage.setItem(PKEY,JSON.stringify(p))}
function topicDone(mid,i){return (prog().topics[mid]||[]).includes(i)}
function modulePct(m){const done=(prog().topics[m.id]||[]).length;return Math.round(done/(m.topics.length||1)*100)}
function subDone(id){return prog().subs.includes(id)}
function expPct(e){const done=e.subExperiments.filter(s=>subDone(s.id)).length;return Math.round(done/(e.subExperiments.length||1)*100)}
function logAct(txt){const a=J(AKEY,[]);a.unshift({t:txt,at:Date.now()});localStorage.setItem(AKEY,JSON.stringify(a.slice(0,10)))}
function act(){return J(AKEY,[])}
function toggleTopic(mid,i,btn){
 const p=prog(),arr=p.topics[mid]||[],at=arr.indexOf(i);
 if(at>=0)arr.splice(at,1);else arr.push(i);
 p.topics[mid]=arr;saveProg(p);
 const m=modules.find(x=>x.id==mid)||modules[0],pct=modulePct(m),done=(p.topics[m.id]||[]).length;
 if(btn){btn.classList.toggle("done",at<0);btn.setAttribute("aria-pressed",at<0?"true":"false")}
 document.querySelectorAll('[data-modbar="'+m.id+'"]').forEach(el=>el.style.setProperty("--w",pct+"%"));
 document.querySelectorAll('[data-modpct="'+m.id+'"]').forEach(el=>el.textContent=pct+"%");
 document.querySelectorAll('[data-modcount="'+m.id+'"]').forEach(el=>el.textContent=done+"/"+m.topics.length);
 document.querySelectorAll('[data-modring="'+m.id+'"]').forEach(el=>el.style.setProperty("--p",pct));
 logAct((at<0?"Completed topic “":"Reopened topic “")+m.topics[i]+"” · Module 0"+m.id);
 toast(at<0?"Topic marked complete":"Topic reopened");
}
function toggleSub(id,expId,btn){
 const p=prog(),at=p.subs.indexOf(id);
 if(at>=0)p.subs.splice(at,1);else p.subs.push(id);
 saveProg(p);
 const done=at<0,e=ALL.find(x=>x.id==expId);
 document.querySelectorAll('[data-subdone="'+id+'"]').forEach(el=>el.classList.toggle("done",done));
 document.querySelectorAll('[data-subbtn="'+id+'"]').forEach(b=>{b.innerHTML=done?"✓ Completed — reopen":"✓ Mark complete";b.classList.toggle("cta-red",done);b.classList.toggle("primary",!done);b.setAttribute("aria-pressed",done?"true":"false")});
 document.querySelectorAll('[data-substatus="'+id+'"]').forEach(el=>{el.className="status "+(done?"done":"live");el.innerHTML="<i></i>"+(done?"Completed":"In progress")});
 if(e){
  const pct=expPct(e);
  document.querySelectorAll('[data-exppct="'+e.id+'"]').forEach(el=>el.textContent=pct+"%");
  document.querySelectorAll('[data-expbar="'+e.id+'"]').forEach(el=>el.style.setProperty("--w",pct+"%"));
 }
 logAct((done?"Completed ":"Reopened ")+id+(e?" · "+e.name:""));
 toast(done?"Marked "+id+" complete":"Reopened "+id);
}

/* ---------------- profile ---------------- */
const initials=S.name.split(" ").map(w=>w[0]).join("").slice(0,3);
const avatar=()=>`<button class="avatar" aria-label="View profile picture" onclick="preview()">${imgOr()}</button>`;
function imgOr(){return `<img src="${esc(S.img||"assets/images/profile.jpg")}" alt="Profile photo of ${esc(S.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:12px" onerror="this.replaceWith('${initials}')">`}
function preview(){modal("pv",`<div class="modal-head"><div><div class="eyebrow">Student</div><h2>${esc(S.name)}</h2></div><button class="icon-btn" aria-label="Close" onclick="this.closest('.modal').classList.remove('open')">✕</button></div><div style="text-align:center"><div class="avatar" style="width:min(280px,70vw);height:min(280px,70vw);margin:auto;font-size:60px;cursor:default;overflow:hidden">${imgOr()}</div><p class="muted" style="margin-top:12px">${esc(S.degree)} · ${esc(S.department)} · ${esc(S.year)}</p></div>`)}
function profile(){const f=S.social,ic=[
 ["linkedin","LinkedIn",`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.3h3.8v11.4H3.3zM9.2 9.3h3.6v1.6h.1a4 4 0 0 1 3.6-2c3.9 0 4.6 2.5 4.6 5.7v6.1h-3.8v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.5H9.2z"/></svg>`],
 ["github","GitHub",`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.14-1.44 3.08-1.14 3.08-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.25-5.1 5.53.4.35.75 1.03.75 2.08v3.05c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .9Z"/></svg>`],
 ["instagram","Instagram",`<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.7" r="1.2" fill="currentColor"/></svg>`]
];
return `<aside class="card">
 <div class="row sp"><div><div class="lbl">Profile / 2026</div><h2>Student details</h2></div>${avatar()}</div>
 <dl><dt>Name</dt><dd>${esc(S.name)}</dd><dt>Roll No</dt><dd>${esc(S.rollNo)}</dd><dt>Department</dt><dd>${esc(S.department)}</dd><dt>Section</dt><dd>${esc(S.section)}</dd><dt>Subject</dt><dd>${esc(S.subject)}</dd><dt>Faculty</dt><dd>${esc(S.faculty)}<div class="lbl" style="font-size:9px">${esc(S.designation)}</div></dd></dl>
 <div class="soc social-brand">${ic.map(i=>`<a ${link(f[i[0]])} aria-label="${i[1]}" title="${i[1]}" class="brand-icon">${i[2]}</a>`).join("")}<a href="pages/about.html" class="more">View More</a></div>
 <div class="row" style="margin-top:12px"><a class="btn" href="pages/student.html">ID Card</a><button class="btn" onclick="editP()">Edit profile</button></div>
</aside>`}

let _newPhoto=null,_photoRemoved=false;
function shrink(file,cb){const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const M=640;let w=im.naturalWidth||im.width,h=im.naturalHeight||im.height;if(w>M||h>M){const s=Math.min(M/w,M/h);w=Math.round(w*s);h=Math.round(h*s)}const c=document.createElement("canvas");c.width=w;c.height=h;const g=c.getContext("2d");g.fillStyle="#fff";g.fillRect(0,0,w,h);g.drawImage(im,0,0,w,h);cb(c.toDataURL("image/jpeg",.85))};im.onerror=()=>cb(r.result);im.src=r.result};r.onerror=()=>toast("Could not read that image");r.readAsDataURL(file)}
function pickPhoto(inp){const f=inp.files&&inp.files[0];if(!f)return;if(!/^image\//.test(f.type)){toast("Please choose an image file");inp.value="";return}if(f.size>8e6){toast("Image too large (max 8 MB)");inp.value="";return}
shrink(f,url=>{_newPhoto=url;_photoRemoved=false;const p=$("#e_prev");if(p)p.innerHTML=`<img src="${esc(url)}" alt="New profile photo preview" style="width:100%;height:100%;object-fit:cover;border-radius:12px">`;const h=$("#e_hint");if(h)h.textContent="New photo ready — press Save Changes"})}
function dropPhoto(){_newPhoto=null;_photoRemoved=true;const p=$("#e_prev");if(p)p.innerHTML=`<img src="${esc(student.profileImage||"assets/images/profile.jpg")}" alt="Default profile photo" style="width:100%;height:100%;object-fit:cover;border-radius:12px">`;const h=$("#e_hint");if(h)h.textContent="Default photo will be restored on save";const inp=$("#e_img");if(inp)inp.value=""}
function editP(){_newPhoto=null;_photoRemoved=false;const F=[["name","Name"],["rollNo","Roll Number"],["department","Department"],["section","Section"],["subject","Subject"],["faculty","Faculty Name"],["designation","Faculty designation"],["degree","Degree"],["year","Year"]];
modal("ed",`<div class="modal-head"><div><div class="eyebrow">Profile / 2026</div><h2>Edit details &amp; photo</h2><p class="muted">Changes are saved in this browser.</p></div><button class="icon-btn" aria-label="Close" onclick="this.closest('.modal').classList.remove('open')">✕</button></div>
<div class="row" style="gap:14px;align-items:center;margin-bottom:14px"><div class="avatar" id="e_prev" style="width:84px;height:84px;cursor:default;overflow:hidden;padding:0">${imgOr()}</div><div><label class="btn" for="e_img" style="display:inline-block;cursor:pointer">Choose photo</label><input id="e_img" type="file" accept="image/*" hidden onchange="pickPhoto(this)"><button class="btn" type="button" onclick="dropPhoto()">Remove photo</button><div class="lbl" id="e_hint" style="margin-top:6px">JPG or PNG · resized automatically</div></div></div>
<div class="form">${F.map(f=>`<div class="field"><label for="e_${f[0]}">${f[1]}</label><input id="e_${f[0]}" value="${esc(S[f[0]])}"></div>`).join("")}</div>
<div class="row end" style="margin-top:8px"><button class="btn" onclick="this.closest('.modal').classList.remove('open')">Cancel</button><button class="btn primary" onclick="saveP()">Save changes</button></div>`)}
function saveP(){const v=k=>{const e=$("#e_"+k);return e?e.value.trim():""};const o=J("mbu_student",{});
["name","rollNo","department","section","subject","faculty","designation","degree","year"].forEach(k=>o[k]=v(k));
if(!o.name)return toast("Name is required");if(!o.rollNo)return toast("Roll number is required");
if(_photoRemoved)delete o.img;else if(_newPhoto)o.img=_newPhoto;
try{localStorage.setItem("mbu_student",JSON.stringify(o))}catch(e){return toast("Could not save — photo is too large")}
_newPhoto=null;_photoRemoved=false;location.reload()}
function changePic(){const f=document.createElement("input");f.type="file";f.accept="image/*";f.onchange=()=>{const x=f.files[0];if(!x)return;if(!/^image\//.test(x.type))return toast("Please choose an image file");if(x.size>8e6)return toast("Image too large (max 8 MB)");shrink(x,url=>{const o=J("mbu_student",{});o.img=url;try{localStorage.setItem("mbu_student",JSON.stringify(o))}catch(e){return toast("Could not save image")}location.reload()})};f.click()}

/* ---------------- navigation ---------------- */
function head(){
 const items=[["index.html","Home","home",IC.home],["modules.html","Modules","modules",IC.modules],["experiments.html","Experiments","experiments",IC.experiments],["tools.html","Tools","tools",IC.tools],["resources.html","Resources","resources",IC.resources],["projects.html","Projects","projects",IC.projects],["student.html","Student","student",IC.student]];
 const on=x=>x[2]===page||(page==="module"&&x[2]==="modules")||(/experiment|sub/.test(page)&&x[2]==="experiments")||(page==="about"&&x[2]==="student");
 const dark=document.documentElement.dataset.theme==="dark";
 return `<a class="skip-link" href="#main">Skip to content</a>
 <div class="bar">
  <a class="logo" href="index.html" aria-label="Mohan Babu University — home"><img src="assets/images/mbu-logo.png" alt="Mohan Babu University logo" onerror="this.replaceWith('MBU')"><span class="logo-txt"><b>Digital Library</b><small>Data Science · MBU</small></span></a>
  <header><nav class="top nav" id="tn" aria-label="Main">
   <button class="burger" aria-expanded="false" aria-label="Open menu" onclick="const t=$('#tn');t.classList.toggle('open');this.setAttribute('aria-expanded',t.classList.contains('open'))">${IC.menu}<span>Menu</span></button>
   ${items.map(x=>`<a href="${x[0]}" ${on(x)?'class="on" aria-current="page"':""}>${x[3]}<span>${x[1]}</span></a>`).join("")}
   <button class="theme-toggle" onclick="theme()" aria-label="${dark?"Switch to light mode":"Switch to dark mode"}" aria-pressed="${dark?"true":"false"}" title="Light / dark mode"><span class="tt-track"><span class="tt-sun">☀</span><span class="tt-moon">☾</span><span class="tt-knob"></span></span></button>
  </nav></header>
 </div>`;
}

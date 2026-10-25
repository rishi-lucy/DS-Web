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
 document.querySelectorAll('[data-substatus="'+id+'"]').forEach(el=>{el.className="status "+(done?"done":"todo");el.innerHTML="<i></i>"+(done?"Completed":"Not started")});
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
 <div class="row" style="margin-top:8px"><a href="about.html" class="more">View More</a></div>
 <div class="row" style="margin-top:12px"><a class="btn" href="student.html">ID Card</a><button class="btn" onclick="editP()">Edit profile</button></div>
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
  <a class="logo" href="index.html" aria-label="Data Science Portal — home"><span class="logo-txt"><b>Digital Library</b><small>Data Science · MBU</small></span></a>
  <header><nav class="top nav" id="tn" aria-label="Main">
   <button class="burger" aria-expanded="false" aria-label="Open menu" onclick="const t=$('#tn');t.classList.toggle('open');this.setAttribute('aria-expanded',t.classList.contains('open'))">${IC.menu}<span>Menu</span></button>
   ${items.map(x=>`<a href="${x[0]}" ${on(x)?'class="on" aria-current="page"':""}>${x[3]}<span>${x[1]}</span></a>`).join("")}
   <button class="theme-toggle" onclick="theme()" aria-label="${dark?"Switch to light mode":"Switch to dark mode"}" aria-pressed="${dark?"true":"false"}" title="Light / dark mode"><span class="tt-track"><span class="tt-sun">☀</span><span class="tt-moon">☾</span><span class="tt-knob"></span></span></button>
  </nav></header>
 </div>`;
}

/* ---------------- shared page bits ---------------- */
const MOD_CAT={1:"Foundations",2:"Data Preparation",3:"Analysis",4:"Machine Learning",5:"Machine Learning"};
const EXP_SUBJECT={1:"Python",2:"Pandas",3:"Data Prep",4:"Statistics",5:"Visualization",6:"Machine Learning"};
const EXP_LEVEL={1:"Beginner",2:"Beginner",3:"Intermediate",4:"Intermediate",5:"Advanced",6:"Advanced"};
const expSubject=e=>EXP_SUBJECT[Number(e.id)]||"Custom";
const expLevel=e=>EXP_LEVEL[Number(e.id)]||"Custom";
const SUBJECTS=["Python","Data Science","Java","C / C++","SQL","Career","Other"];
const LEVELS=["Beginner","Intermediate","Advanced"];

function statusPill(pct){const cls=pct>=100?"done":pct>0?"live":"todo";return `<span class="status ${cls}"><i></i>${pct>=100?"Completed":pct>0?"In progress":"Not started"}</span>`}
function statCard(v,label,href){return `<div class="stat reveal"><b data-count="${v}">${v}</b><span>${label}</span><a href="${href}" aria-label="${label}"></a></div>`}
function modProg(m){const pct=modulePct(m),done=(prog().topics[m.id]||[]).length;return `<div class="prog"><div class="prog-head"><span>Learning progress</span><span><b data-modpct="${m.id}">${pct}%</b> · <span data-modcount="${m.id}">${done}/${m.topics.length}</span> topics</span></div><div class="bar-track"><i class="bar-fill" data-modbar="${m.id}" style="--w:${pct}%"></i></div></div>`}

/* ---------------- home ---------------- */
function home(){
 const subs=ALL.reduce((a,e)=>a+e.subExperiments.length,0);
 const rs=resources(),ps=getProjects();
 return `<section class="hero">
 <div class="hero-copy">
  <div class="eyebrow"><span class="dot"></span>B.Tech Data Science · Academic year 2026</div>
  <h1>Learn Smarter.<br>Build Bigger.<br><span class="grad-text">Explore More.</span></h1>
  <p class="hero-sub">Your all-in-one destination for data science modules, experiments, developer tools, learning resources, and student projects.</p>
  <div class="hero-cta"><a class="btn primary lg ph" href="resources.html">Explore Resources <span class="arr">→</span></a><a class="btn ghost lg" href="projects.html">View Projects <span class="arr">→</span></a></div>
  <div class="search-wrap hero-search">${IC.search}<input id="gs" placeholder="Search modules, experiments, topics…" aria-label="Search the portal" autocomplete="off" oninput="gsearch()" onkeydown="if(event.key==='Enter'){const a=$('#gr a');if(a)location.href=a.getAttribute('href')}"><kbd>/</kbd></div>
  <div id="gr" class="search-pop" aria-live="polite"></div>
  <div class="tagrow" style="margin-top:16px"><span class="chip">${modules.length} modules</span><span class="chip yellow">${ALL.length} experiments</span><span class="chip plain">${subs} sub-experiments</span><span class="chip plain">${tools.length} tools</span></div>
 </div>
 <div class="hero-visual" aria-hidden="true">
  <div class="hv-ring"></div>
  <div class="hv-code"><div class="hv-bar"><i></i><i></i><i></i></div><pre><span class="cm"># learn by building</span>
<span class="kw">import</span> pandas <span class="kw">as</span> pd
df = pd.<span class="fn">read_csv</span>(<span class="st">"data.csv"</span>)
<span class="fn">print</span>(df.<span class="fn">describe</span>())</pre></div>
  <div class="hv-chart"><div class="lbl">Model accuracy</div><div class="hv-bars"><i style="--h:44%"></i><i style="--h:62%"></i><i style="--h:38%"></i><i style="--h:78%"></i><i style="--h:56%"></i><i style="--h:92%"></i><i style="--h:70%"></i></div><div class="lbl" style="margin-top:6px;color:var(--acc)">+18.4% this term</div></div>
  <div class="hv-book"><i></i><i></i><i></i></div>
  <div class="hv-badge b1">Py</div><div class="hv-badge b2">∑</div><div class="hv-badge b3">ML</div>
 </div>
</section>

<section class="stats stagger">
 ${statCard(rs.length,"Resources","resources.html")}
 ${statCard(modules.length,"Modules","modules.html")}
 ${statCard(ALL.length,"Experiments","experiments.html")}
 ${statCard(ps.length,"Projects","projects.html")}
</section>

<section class="sec">
 <div class="section-head"><div><div class="eyebrow">Everything in one place</div><h2>Explore the portal</h2><p>Six connected spaces for the whole Data Science journey — from first principles to a finished project.</p></div><a class="link-arrow" href="modules.html">Browse the curriculum <span>→</span></a></div>
 <div class="feat-grid stagger">
  <a class="card feature-card reveal" href="modules.html" style="--i:0"><div class="icon-orb">${IC.modules}</div><h3>Learning Modules</h3><p>Five structured modules covering foundations, preparation, analysis, machine learning and deployment.</p><span class="go">Open modules <span>→</span></span></a>
  <a class="card feature-card reveal" href="experiments.html" style="--i:1"><div class="icon-orb">${IC.experiments}</div><h3>Experiments</h3><p>Six practical labs with ${subs} guided sub-experiments, runnable code and expected outputs.</p><span class="go">Enter the lab <span>→</span></span></a>
  <a class="card feature-card reveal" href="tools.html" style="--i:2"><div class="icon-orb">${IC.tools}</div><h3>Developer Tools</h3><p>The Python, notebook, visualisation and BI toolkit used throughout the course.</p><span class="go">See the toolkit <span>→</span></span></a>
  <a class="card feature-card reveal" href="resources.html" style="--i:3"><div class="icon-orb">${IC.resources}</div><h3>Digital Resources</h3><p>Documentation, tutorials and study notes in one searchable knowledge hub.</p><span class="go">Browse resources <span>→</span></span></a>
  <a class="card feature-card reveal" href="projects.html" style="--i:4"><div class="icon-orb">${IC.projects}</div><h3>Student Projects</h3><p>Academic project ideas, technology stacks and live links from the project studio.</p><span class="go">Open the studio <span>→</span></span></a>
  <a class="card feature-card reveal" href="student.html" style="--i:5"><div class="icon-orb">${IC.student}</div><h3>Student Profile</h3><p>Your dashboard: modules completed, saved resources, recent projects and learning activity.</p><span class="go">View dashboard <span>→</span></span></a>
 </div>
</section>

<section class="sec home-split">
 <div class="home-main">
  <div class="card"><div class="section-head"><div><div class="eyebrow">Course content</div><h2>Modules</h2></div><a class="link-arrow" href="modules.html">All modules <span>→</span></a></div><div class="mg">${modules.map(m=>`<a class="box" href="module.html?id=${m.id}"><span class="num">0${m.id}</span><span class="lbl">Module 0${m.id} · ${MOD_CAT[m.id]||"Core"}</span><b>${esc(m.title)}</b><span class="lbl" style="font-size:9px">${m.topics.length} topics · ${modulePct(m)}% complete</span></a>`).join("")}</div></div>
  <div class="card"><div class="section-head"><div><div class="eyebrow">Practical learning</div><h2>Lab experiments</h2></div><a class="link-arrow" href="experiments.html">All experiments <span>→</span></a></div><div class="mg">${ALL.map(e=>`<a class="box" href="experiment.html?id=${e.id}"><span class="num">${esc(e.id)}</span><span class="lbl">${expSubject(e)} · ${expLevel(e)}</span><b>${esc(e.name)}</b><span class="lbl" style="font-size:9px">${e.subExperiments.length} parts · ${expPct(e)}% complete</span></a>`).join("")}</div></div>
 </div>
 <aside class="home-side">${profile()}
  <div class="card"><div class="section-head"><div><h2 style="font-size:15px">Recently added</h2><p style="font-size:12px">From your knowledge hub</p></div><a class="link-arrow" href="resources.html">All <span>→</span></a></div><div class="p-list">${rs.slice(0,3).map(r=>`<a class="p-row" href="${esc(r.url||"#")}" ${r.url?'target="_blank" rel="noopener"':`onclick="toast('Add a resource URL first');return false"`}><span class="pn">${esc((r.type||"R").slice(0,2).toUpperCase())}</span><span class="pt">${esc(r.title)}</span><span class="ps">${esc(r.category||"")}</span></a>`).join("")}</div><a class="btn ghost block" style="margin-top:12px" href="resources.html">${IC.plus} Add a resource</a></div>
 </aside>
</section>

<section class="sec">
 <div class="section-head"><div><div class="eyebrow">Project studio</div><h2>Recent projects</h2><p>Academic builds and ideas from your catalogue.</p></div><a class="link-arrow" href="projects.html">Open projects <span>→</span></a></div>
 <div class="pgrid stagger">${ps.slice(0,3).map((p,i)=>`<article class="card prj-card reveal" style="--i:${i}"><div class="prj-art"><span class="glyph">0${i+1}</span><span class="pcat">${esc(p.category||"Project")}</span></div><div class="prj-body"><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="tech tagrow">${esc(p.tech||"").split(",").filter(Boolean).slice(0,3).map(t=>`<span class="chip plain">${esc(t.trim())}</span>`).join("")}</div><div class="card-actions"><a class="btn sm primary" href="projects.html">Details <span class="arr">→</span></a></div></div></article>`).join("")}</div>
</section>`;
}

/* ---------------- modules ---------------- */
const MOD_F={cat:""};
function moduleCards(list){
 return list.map((m,i)=>{
  const pct=modulePct(m);
  return `<article class="card mod-card reveal" style="--i:${i}">
   <div class="mod-top"><span class="mod-num">0${m.id}</span><span class="chip ${pct>=100?"green":""}">${MOD_CAT[m.id]||"Core"}</span></div>
   <h3>${esc(m.title)}</h3><p>${esc(m.description)}</p>
   <div class="mod-meta"><span>${IC.modules} ${m.topics.length} topics</span><span>${IC.book} Study guide</span><span>${IC.clock} ~45 min</span></div>
   ${modProg(m)}
   <div class="card-actions"><a class="btn primary sm" href="module.html?id=${m.id}">${pct>0?"Continue":"Open"} module <span class="arr">→</span></a><a class="btn sm ghost" href="module.html?id=${m.id}#pdf">${IC.book} PDF</a></div>
   ${pct>0?`<div class="res-note">${pct>=100?"You completed this module.":"Last studied in this browser."}</div>`:""}
  </article>`}).join("");
}
function renderModules(){
 const grid=$("#moduleGrid");if(!grid)return;
 const k=($("#moduleSearch")?.value||"").toLowerCase();
 const list=modules.filter(m=>(!MOD_F.cat||MOD_CAT[m.id]===MOD_F.cat)&&(!k||JSON.stringify([m.title,m.description,m.topics]).toLowerCase().includes(k)));
 grid.innerHTML=moduleCards(list);
 const empty=$("#moduleEmpty");if(empty)empty.hidden=list.length>0;
}
function setModFilter(cat,btn){MOD_F.cat=cat;document.querySelectorAll("#modChips .fchip").forEach(b=>b.classList.toggle("on",b===btn));renderModules()}
function modulesPage(){
 const cats=[...new Set(modules.map(m=>MOD_CAT[m.id]||"Core"))];
 return `<div class="page-head"><div class="eyebrow">Curriculum · 5 modules</div><h1 class="page-title">Modules</h1><p class="lede">A complete Data Science pathway — from the lifecycle and Python ecosystem to model evaluation and deployment. Track your reading topic by topic.</p></div>
 <div class="toolbar"><div class="search-wrap">${IC.search}<input id="moduleSearch" placeholder="Search modules, topics…" aria-label="Search modules" oninput="renderModules()"><kbd>/</kbd></div><div class="chips" id="modChips"><button class="fchip on" onclick="setModFilter('',this)">All modules</button>${cats.map(c=>`<button class="fchip" onclick="setModFilter('${esc(c)}',this)">${esc(c)}</button>`).join("")}</div></div>
 <div class="mod-grid stagger" id="moduleGrid">${moduleCards(modules)}</div>
 <div class="empty-state" id="moduleEmpty" hidden><div class="illus">🔎</div><h3>No modules match that search</h3><p>Try a different keyword or switch back to all modules.</p><button class="btn" onclick="setModFilter('',document.querySelector('#modChips .fchip'))">Reset filters</button></div>`;
}

/* ---------------- module detail ---------------- */
function modulePage(){
 const m=modules.find(x=>x.id==q.get("id"))||modules[0],pdf=`assets/modules/module-${m.id}.pdf`,pct=modulePct(m);
 return `<a class="btn sm ghost" href="modules.html">← All modules</a>
 <div class="detail-head" style="margin-top:14px">
  <div class="chips"><span class="chip">Module 0${m.id}</span><span class="chip yellow">${MOD_CAT[m.id]||"Core"}</span><span class="chip plain">${m.topics.length} topics</span></div>
  <h1>${esc(m.title)}</h1><p class="lede muted">${esc(m.description)}</p>
  <div class="row" style="gap:10px;flex-wrap:wrap"><a class="btn primary" href="#pdf">${IC.book} Open study guide</a><a class="btn" href="#to">Continue learning</a></div>
 </div>
 <div class="split">
  <div class="side"><div class="lbl">On this page</div><a href="#ov">Overview</a><a href="#pr">Your progress</a><a href="#ob">Objectives</a><a href="#to">Topics</a><a href="#ap">Applications</a><a href="#pdf">Study guide</a><a href="#res">Resources</a><a href="#tk">Takeaways</a></div>
  <div class="grid" style="gap:16px">
   <section class="card" id="ov"><h2>Overview</h2><p>${esc(m.overview)}</p></section>
   <section class="card" id="pr"><div class="row sp"><div><h2>Your progress</h2><p class="muted">Tap topics below to mark them complete. Progress is stored in this browser.</p></div><div class="ring" data-modring="${m.id}" style="--p:${pct}"><b data-modpct="${m.id}">${pct}%</b></div></div><div class="bar-track" style="margin-top:10px"><i class="bar-fill" data-modbar="${m.id}" style="--w:${pct}%"></i></div><div class="prog-head" style="margin-top:8px"><span>${pct>=100?"Module completed":"Keep going"}</span><span data-modcount="${m.id}">${(prog().topics[m.id]||[]).length}/${m.topics.length} topics</span></div></section>
   <section class="card" id="ob"><h2>Learning objectives</h2><ul>${m.objectives.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section>
   <section class="card" id="to"><h2>Topics</h2><p class="muted">Mark each topic as you finish it — your module progress updates instantly.</p><div class="topics">${m.topics.map((t,i)=>{const d=topicDone(m.id,i);return `<button class="topic ${d?"done":""}" onclick="toggleTopic(${m.id},${i},this)" aria-pressed="${d?"true":"false"}"><span class="tick">✓</span><span>${esc(t)}</span></button>`}).join("")}</div></section>
   <section class="card" id="ap"><h2>Practical applications</h2><ul>${m.applications.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section>
   <section class="card" id="pdf"><div class="row sp"><div><h2>Module study guide</h2><p class="muted">15-page PDF · read online, flip through it, or download for offline study.</p></div><a class="btn primary" href="${pdf}" download>${IC.book} Download PDF</a></div>
    <div class="row" style="margin:12px 0;flex-wrap:wrap"><button class="btn" onclick="pdfView('vertical')">Vertical view</button><button class="btn" onclick="pdfView('flip')">Flip-book view</button><a class="btn" href="${pdf}" target="_blank" rel="noopener">Open PDF ${IC.external}</a></div>
    <div id="pdfVertical"><iframe title="Module PDF vertical reader" src="${pdf}#view=FitH" style="width:100%;height:680px;border:1px solid var(--bd);border-radius:14px"></iframe></div>
    <div id="pdfFlip" hidden><div class="flipbook"><canvas id="pdfCanvas" style="width:100%;max-height:650px;object-fit:contain;background:white"></canvas><div class="row sp" style="margin-top:10px;flex-wrap:wrap"><button class="btn" onclick="flipPdf(-999)">⇤ First</button><button class="btn" onclick="flipPdf(-1)">← Previous</button><span id="pdfPageNum">Page 1</span><button class="btn" onclick="flipPdf(1)">Next →</button><button class="btn" onclick="flipPdf(999)">Last ⇥</button><button class="btn" onclick="zoomPdf(-.15)">−</button><button class="btn" onclick="zoomPdf(.15)">＋</button></div></div></div>
   </section>
   <section class="card" id="res"><h2>Notes &amp; resources</h2><ul>${m.resources.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section>
   <section class="card" id="tk"><h2>Key takeaways</h2><ul>${m.takeaways.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section>
  </div>
 </div>`;
}

/* ---------------- experiments list ---------------- */
const EXP_F={subject:""};
function expCard(e,i){
 const pct=expPct(e);
 return `<article class="card expc reveal" style="--i:${i}">
  <div class="expc-top"><span class="expc-id">${esc(e.id)}</span><div class="row" style="gap:6px">${statusPill(pct)}<span class="chip plain">${expLevel(e)}</span></div></div>
  <h3>${esc(e.name)}</h3><p>${esc(e.description)}</p>
  <div class="tagrow">${[...new Set(e.subExperiments.flatMap(s=>s.tools))].slice(0,4).map(t=>`<span class="chip plain">${esc(t)}</span>`).join("")}</div>
  <div class="prog"><div class="prog-head"><span>${expSubject(e)} · ${e.subExperiments.length} parts</span><span><b data-exppct="${e.id}">${pct}%</b></span></div><div class="bar-track"><i class="bar-fill" data-expbar="${e.id}" style="--w:${pct}%"></i></div></div>
  <div class="sub-mini">${e.subExperiments.map(s=>`<a class="mini ${subDone(s.id)?"ok":""}" href="subexperiment.html?experiment=${e.id}&sub=${s.id}" title="${esc(s.name)}" aria-label="${esc(s.id+" "+s.name)}">${esc(s.id.replace(e.id,""))}</a>`).join("")}</div>
  <div class="card-actions"><a class="btn primary sm" href="experiment.html?id=${e.id}">View experiment <span class="arr">→</span></a><a class="btn sm ghost" href="subexperiment.html?experiment=${e.id}&sub=${e.subExperiments[0].id}">Start lab</a></div>
 </article>`;
}
function cards(list){
 const el=$("#el");if(!el)return;
 el.innerHTML=list.map(expCard).join("");
 const none=$("#none");if(none)none.hidden=list.length>0;
}
function filt(){
 const k=($("#sr")?.value||"").toLowerCase(),lvl=$("#expLevel")?.value||"";
 cards(ALL.filter(e=>{
  const hay=JSON.stringify([e.id,e.name,e.description,e.subExperiments.map(s=>s.name+" "+s.topic)]).toLowerCase();
  return (!k||hay.includes(k))&&(!EXP_F.subject||(expSubject(e))===EXP_F.subject)&&(!lvl||(expLevel(e))===lvl);
 }));
}
function setExpFilter(sub,btn){EXP_F.subject=sub;document.querySelectorAll("#expChips .fchip").forEach(b=>b.classList.toggle("on",b===btn));filt()}
function experimentsPage(){
 const subs=ALL.reduce((a,e)=>a+e.subExperiments.length,0),subjects=[...new Set(ALL.map(e=>expSubject(e)))],levels=[...new Set(ALL.map(e=>expLevel(e)))];
 return `<div class="page-head"><div class="eyebrow">Practical learning · Lab</div><h1 class="page-title">Experiments</h1><p class="lede">Six hands-on Data Science labs with ${subs} sub-experiments, guided procedure, runnable code and expected output. Java, Python, C and C++ run in the playground below.</p></div>
 <section class="card compiler">
  <div class="row sp"><div><div class="eyebrow">Live playground</div><h2>Online compiler</h2><p class="muted">Write, run and inspect a program in four languages.</p></div><span class="chip green">4 languages</span></div>
  <div class="compiler-toolbar"><label for="compilerLanguage">Language</label><select id="compilerLanguage" onchange="changeCompilerLanguage()"><option>Python</option><option>Java</option><option>C</option><option>C++</option></select><button class="btn" onclick="resetCompiler()">Reset example</button><button class="btn primary" onclick="runCompiler()">▶ Run code</button></div>
  <textarea id="compilerCode" rows="14" spellcheck="false" aria-label="Source code">${esc(starterCode.Python)}</textarea>
  <label for="compilerInput">Standard input (optional)</label><textarea id="compilerInput" rows="2" placeholder="Enter input for your program…"></textarea>
  <div class="eyebrow" style="margin-top:12px">Output / compiler messages</div><pre id="compilerOutput">Choose a language and press Run code. Execution uses the Piston online API and requires internet access.</pre>
  <p class="muted">Run code sends the source and input to an external execution service. Do not submit passwords, personal data or sensitive code.</p>
 </section>
 <section class="sec" style="margin-top:24px">
  <div class="section-head"><div><div class="eyebrow">Lab catalogue</div><h2>All experiments</h2><p>Filter by subject or level, then open a lab or jump straight into any sub-experiment.</p></div><button class="btn primary" onclick="addE()">${IC.plus} Add experiment</button></div>
  <div class="toolbar"><div class="search-wrap">${IC.search}<input id="sr" placeholder="Search experiment name, topic or number…" aria-label="Search experiments" oninput="filt()"><kbd>/</kbd></div><select id="expLevel" onchange="filt()" aria-label="Filter by level"><option value="">All levels</option>${levels.map(l=>`<option>${esc(l)}</option>`).join("")}</select></div>
  <div class="chips" id="expChips" style="margin-bottom:16px"><button class="fchip on" onclick="setExpFilter('',this)">All subjects</button>${subjects.map(s=>`<button class="fchip" onclick="setExpFilter('${esc(s)}',this)">${esc(s)}</button>`).join("")}</div>
  <div class="exp-grid stagger" id="el"></div>
  <div id="none" class="empty-state" hidden><div class="illus">🔬</div><h3>No experiments found</h3><p>Try another keyword, subject or level.</p><button class="btn" onclick="document.getElementById('sr').value='';setExpFilter('',document.querySelector('#expChips .fchip'))">Reset search</button></div>
 </section>`;
}

/* ---------------- experiment detail ---------------- */
function experimentPage(){
 const e=ALL.find(x=>x.id==q.get("id"))||ALL[0],pct=expPct(e);
 const sec=[["ov","Experiment overview",`<p>${esc(e.overview)}</p>`],["aim","Aim",`<p>${esc(e.aim)}</p>`],["ps","Problem statement",`<p>${esc(e.problemStatement)}</p>`],["ds","Dataset",`<p>${esc(e.dataset)}</p>`],["me","Methodology",`<ol>${e.methodology.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>`],["an","Analysis",`<p>${esc(e.analysis)}</p>`],["re","Results",`<p>${esc(e.results)}</p>`],["ar","Architecture",`<div class="flow">${e.architecture.map((a,i)=>(i?"<i>↓</i>":"")+`<div class="card">${esc(a)}</div>`).join("")}</div>`]];
 return `<a class="btn sm ghost" href="experiments.html">← All experiments</a>
 <div class="detail-head" style="margin-top:14px">
  <div class="chips"><span class="chip">Experiment ${esc(e.id)}</span><span class="chip yellow">${expSubject(e)}</span><span class="chip plain">${expLevel(e)}</span>${statusPill(pct)}</div>
  <h1>${esc(e.name)}</h1><p class="lede muted">${esc(e.description)}</p>
  <div class="row" style="gap:10px;flex-wrap:wrap"><a class="btn primary" ${link(e.youtube)}>▶ Watch tutorial</a><a class="btn" ${link(e.github)}>${IC.projects} GitHub repository</a></div>
  <div class="prog" style="max-width:520px"><div class="prog-head"><span>${e.subExperiments.filter(s=>subDone(s.id)).length}/${e.subExperiments.length} sub-experiments complete</span><span><b data-exppct="${e.id}">${pct}%</b></span></div><div class="bar-track"><i class="bar-fill" data-expbar="${e.id}" style="--w:${pct}%"></i></div></div>
 </div>
 <div class="split">
  <div class="side"><div class="lbl">On this page</div>${sec.map(s=>`<a href="#${s[0]}">${s[1]}</a>`).join("")}<a href="#su">Sub experiments</a></div>
  <div class="grid" style="gap:16px">
   <div>${compilerPanel(e.subExperiments?.[0]?.code||"print(\"Hello from the experiment!\")","exp_"+e.id)}</div>
   ${sec.map(s=>`<section id="${s[0]}" class="card"><h2>${s[1]}</h2>${s[2]}</section>`).join("")}
   <section id="su" class="card"><h2>Sub experiments</h2><p class="muted">Seven guided parts · mark each one complete as you finish it.</p><div class="mg">${e.subExperiments.map((s,i)=>`<a class="box" href="subexperiment.html?experiment=${e.id}&sub=${s.id}"><span class="num">${esc(s.id)}</span><span class="lbl">Part ${String.fromCharCode(65+i)}</span><b>${esc(s.name)}</b><span class="chip ${subDone(s.id)?"green":""}" style="align-self:flex-start;margin-top:4px">${subDone(s.id)?"Completed":"Open lab"}</span></a>`).join("")}</div></section>
  </div>
 </div>`;
}

/* ---------------- sub experiment ---------------- */
function subPage(){
 const e=ALL.find(x=>x.id==q.get("experiment"))||ALL[0],S2=e.subExperiments,i=Math.max(0,S2.findIndex(s=>s.id==q.get("sub"))),s=S2[i]||S2[0],u=j=>`subexperiment.html?experiment=${e.id}&sub=${S2[j].id}`,C=(t,b,id)=>`<section class="card"${id?' id="'+id+'"':""}><h2>${t}</h2>${b}</section>`,done=subDone(s.id);
 return `<a class="btn sm ghost" href="experiment.html?id=${e.id}">← Experiment ${esc(e.id)}</a>
 <div class="detail-head" style="margin-top:14px">
  <div class="chips"><span class="chip">Sub ${esc(s.id)}</span><span class="chip yellow">${esc(s.letter||String.fromCharCode(65+i))}</span><span class="chip plain">Part ${i+1} of ${S2.length}</span><span class="status ${done?"done":"todo"}" data-substatus="${s.id}"><i></i>${done?"Completed":"Not started"}</span></div>
  <h1>${esc(s.name)}</h1><p class="lede muted">${esc(e.name)} · ${expSubject(e)} lab</p>
  <div class="row" style="gap:10px;flex-wrap:wrap"><button class="btn ${done?"cta-red":"primary"}" data-subbtn="${s.id}" aria-pressed="${done?"true":"false"}" onclick="toggleSub('${s.id}','${e.id}',this)">${done?"✓ Completed — reopen":"✓ Mark complete"}</button><a class="btn" ${link(s.youtube)}>▶ Tutorial</a><a class="btn" ${link(s.github)}>GitHub</a>${i?`<a class="btn sm ghost" href="${u(i-1)}">← Previous</a>`:""}${i<S2.length-1?`<a class="btn sm ghost" href="${u(i+1)}">Next →</a>`:""}</div>
  <div class="tagrow" style="margin-top:10px">${S2.map((x,j)=>`<a class="mini ${j===i?"on":""} ${subDone(x.id)?"ok":""}" href="${u(j)}" aria-label="Sub experiment ${esc(x.id)}" style="${j===i?"border-color:var(--acc);color:var(--tx)":""}">${esc(x.letter||String.fromCharCode(65+j))}</a>`).join("")}</div>
 </div>
 <div class="split">
  <div class="side"><div class="lbl">Sub experiment</div><a href="#aim">Aim</a><a href="#ps">Problem</a><a href="#tools">Tools</a><a href="#how">Explanation</a><a href="#proc">Procedure</a><a href="#code">Code lab</a><a href="#in">Input</a><a href="#res">Result</a><a href="#an">Analysis</a><a href="#con">Conclusion</a></div>
  <div class="grid" style="gap:16px">
   ${C("Aim",`<p>${esc(s.aim)}</p>`,"aim")}
   ${C("Problem statement",`<p>${esc(s.problemStatement)}</p>`,"ps")}
   ${C("Required tools",`<div class="tagrow">${s.tools.map(t=>`<span class="chip">${esc(t)}</span>`).join("")}</div>`,"tools")}
   ${C("Concept explanation",`<p>${esc(s.explanation)}</p>`,"how")}
   ${C("Step-by-step procedure",`<ol>${s.procedure.map(x=>`<li>${esc(x)}</li>`).join("")}</ol>`,"proc")}
   <div id="code">${compilerPanel(s.code,"sub_"+s.id)}</div>
   ${C("Expected input",`<p>${esc(s.input)}</p>`,"in")}
   ${C("Result",`<pre>${esc(s.result)}</pre>`,"res")}
   ${C("Analysis",`<p>${esc(s.analysis)}</p>`,"an")}
   ${C("Conclusion",`<p>${esc(s.conclusion)}</p>`,"con")}
  </div>
 </div>`;
}

/* ---------------- tools ---------------- */
const TOOLMETA={
 "Python":{c:"Programming",i:"🐍"},"Jupyter Notebook":{c:"Programming",i:"📓"},"NumPy":{c:"Data Science",i:"🔢"},"Pandas":{c:"Data Science",i:"🐼"},
 "Matplotlib":{c:"Visualisation",i:"📈"},"Seaborn":{c:"Visualisation",i:"🎨"},"Scikit-learn":{c:"Machine Learning",i:"🤖"},"Power BI":{c:"BI & Dashboards",i:"📊"},
 "SQL":{c:"BI & Dashboards",i:"🗄️"},"GitHub":{c:"Platform",i:"🐙"},"Google Colab":{c:"Platform",i:"☁️"}
};
const TOOL_F={cat:""};
function toolCard(t,i){
 const m=TOOLMETA[t[0]]||{c:"Tool",i:"🛠"};
 return `<article class="card tool-card reveal" style="--i:${i}"><div class="icon-orb">${m.i}</div><h3>${esc(t[0])}</h3><span class="chip plain" style="align-self:flex-start;margin-bottom:8px">${esc(m.c)}</span><p>${esc(TD[t[0]]||"Official tool and documentation.")}</p><div class="row"><a class="btn primary sm" href="${esc(t[1])}" target="_blank" rel="noopener">${IC.external} Launch</a></div></article>`;
}
function renderTools(){
 const grid=$("#toolGrid");if(!grid)return;
 const k=($("#toolSearch")?.value||"").toLowerCase();
 const list=tools.filter(t=>{const m=TOOLMETA[t[0]]||{c:"Tool"};return (!TOOL_F.cat||m.c===TOOL_F.cat)&&(!k||(t[0]+" "+(TD[t[0]]||"")).toLowerCase().includes(k))});
 grid.innerHTML=list.map(toolCard).join("");
 const e=$("#toolEmpty");if(e)e.hidden=list.length>0;
}
function setToolFilter(c,btn){TOOL_F.cat=c;document.querySelectorAll("#toolChips .fchip").forEach(b=>b.classList.toggle("on",b===btn));renderTools()}
function toolsPage(){
 const cats=[...new Set(tools.map(t=>(TOOLMETA[t[0]]||{c:"Tool"}).c))];
 return `<div class="page-head"><div class="eyebrow">Resource · Toolkit</div><h1 class="page-title">Tools</h1><p class="lede">The working toolkit behind every module and lab — languages, notebooks, visualisation libraries and BI platforms, each linked to its official site.</p></div>
 <div class="toolbar"><div class="search-wrap">${IC.search}<input id="toolSearch" placeholder="Search tools…" aria-label="Search tools" oninput="renderTools()"><kbd>/</kbd></div><div class="chips" id="toolChips"><button class="fchip on" onclick="setToolFilter('',this)">All tools</button>${cats.map(c=>`<button class="fchip" onclick="setToolFilter('${esc(c)}',this)">${esc(c)}</button>`).join("")}</div></div>
 <div class="tool-grid stagger" id="toolGrid">${tools.map(toolCard).join("")}</div>
 <div class="empty-state" id="toolEmpty" hidden><div class="illus">🧰</div><h3>No tools match</h3><p>Try another keyword or category.</p></div>`;
}

/* ---------------- resources ---------------- */
const resourceDefaults=[
 {title:"Python Documentation",category:"Programming",type:"Website",description:"Official Python language tutorial and reference.",url:"https://docs.python.org/3/tutorial/"},
 {title:"NumPy Quickstart",category:"Data Science",type:"Website",description:"Arrays, vectorized operations, and numerical computing.",url:"https://numpy.org/doc/stable/user/quickstart.html"},
 {title:"Pandas Getting Started",category:"Data Science",type:"Website",description:"Learn tabular data analysis with Pandas.",url:"https://pandas.pydata.org/docs/getting_started/"},
 {title:"Java Documentation",category:"Programming",type:"Website",description:"Official Java tutorials and API documentation.",url:"https://dev.java/learn/"},
 {title:"C++ Reference",category:"Programming",type:"Website",description:"C++ language and standard library reference.",url:"https://en.cppreference.com/w/"},
 {title:"C Language Tutorial",category:"Programming",type:"Website",description:"C language learning reference.",url:"https://www.learn-c.org/"},
 {title:"Data Science Tutorials",category:"Video",type:"YouTube",description:"Search for introductory Data Science video tutorials.",url:"https://www.youtube.com/results?search_query=data+science+tutorial+for+beginners"}
];
function resources(){return J("mbu_resources",resourceDefaults)}
function rkey(r){return (r.title||"")+"::"+(r.url||"")}
function savedList(){return J(SKEY,[])}
function isSaved(r){return savedList().includes(rkey(r))}
function subjectOf(r){
 if(r.subject)return r.subject;
 const s=((r.title||"")+" "+(r.description||"")+" "+(r.category||"")).toLowerCase();
 if(/python|numpy|pandas|matplotlib|seaborn|scikit|jupyter/.test(s))return "Python";
 if(/java(?!script)/.test(s))return "Java";
 if(/c\+\+|learn-c|c language/.test(s))return "C / C++";
 if(/sql|database/.test(s))return "SQL";
 if(/data science|machine learning|statistics/.test(s))return "Data Science";
 if(/resume|interview|career|intern/.test(s))return "Career";
 return "Other";
}
function typeMeta(t){
 const v=(t||"Website").toLowerCase();
 if(v.includes("pdf"))return{k:"PDF",label:"PDF",icon:IC.book};
 if(v.includes("you"))return{k:"YouTube",label:"YouTube",icon:IC.play};
 if(v.includes("video"))return{k:"Video",label:"Video",icon:IC.play};
 if(v.includes("note"))return{k:"Notes",label:"Notes",icon:IC.book};
 if(v.includes("doc"))return{k:"Document",label:"Document",icon:IC.book};
 return{k:"Website",label:t||"Website",icon:IC.external};
}
function fmtDate(ts){if(!ts)return "";try{return new Date(ts).toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"})}catch{return ""}}
const RS={view:"grid",saved:false};
function setRView(v,btn){
 RS.view=v;document.querySelectorAll(".seg [data-view]").forEach(b=>{b.classList.toggle("on",b===btn);b.setAttribute("aria-pressed",b===btn?"true":"false")});
 const g=$("#resourceGrid");if(g)g.classList.toggle("list",v==="list");
}
function setSavedOnly(btn){RS.saved=!RS.saved;btn.classList.toggle("on",RS.saved);btn.setAttribute("aria-pressed",RS.saved?"true":"false");renderResources()}
function resCard(r,i){
 const m=typeMeta(r.type),date=fmtDate(r.addedAt),sv=isSaved(r),key=rkey(r);
 const open=r.url?`<a class="btn primary sm" href="${esc(r.url)}" target="_blank" rel="noopener">${IC.external} Open</a>`:`<button class="btn primary sm" onclick="toast('Add a resource URL first')">${IC.external} Open</button>`;
 return `<article class="card res-card reveal" data-type="${m.k}" style="--i:${i}">
  <div class="res-cover"><span class="res-ico">${m.icon}</span><span class="chip plain res-cat">${esc(r.category||"Resource")}</span></div>
  <div class="res-body">
   <div class="res-meta-line"><span class="chip ${m.k==="PDF"?"red":m.k==="YouTube"?"yellow":""}">${esc(m.label)}</span><span class="sep"></span><span>${esc(subjectOf(r))}</span>${date?`<span class="sep"></span><span>${esc(date)}</span>`:""}</div>
   <h3>${esc(r.title)}</h3>
   <p class="desc">${esc(r.description||"No description added yet.")}</p>
   <div class="res-meta-line">${r.author?`<span>By ${esc(r.author)}</span><span class="sep"></span>`:""}<span>${date?"Added "+esc(date):"In the library"}</span></div>
   <div class="card-actions">${open}
    <button class="btn sm bm ${sv?"on":""}" data-key="${esc(key)}" onclick="toggleSave(this.dataset.key)" aria-pressed="${sv?"true":"false"}" aria-label="${sv?"Remove bookmark":"Bookmark this resource"}">${IC.star} ${sv?"Saved":"Save"}</button>
    <button class="btn sm" data-key="${esc(key)}" onclick="removeResource(this.dataset.key)" aria-label="Remove ${esc(r.title)}">${IC.trash} Remove</button>
   </div>
  </div>
 </article>`;
}
function skeletons(n){return Array.from({length:n},()=>`<div class="sk"><div class="sk-cover"></div><div class="sk-body"><i></i><i></i><i></i><i></i></div></div>`).join("")}
function renderResources(mode){
 const grid=$("#resourceGrid");if(!grid)return;
 if(mode==="boot"&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){grid.innerHTML=skeletons(6);setTimeout(()=>renderResources(),380);return}
 const rs=resources(),k=($("#resourceSearch")?.value||"").toLowerCase(),cat=$("#resourceCat")?.value||"",typ=$("#resourceType")?.value||"",sub=$("#resourceSubject")?.value||"",sort=$("#resourceSort")?.value||"new",sv=savedList();
 let list=rs.filter(r=>{
  const m=typeMeta(r.type);
  return (!cat||r.category===cat)&&(!typ||m.k===typ)&&(!sub||subjectOf(r)===sub)&&(!RS.saved||sv.includes(rkey(r)))&&(!k||JSON.stringify([r.title,r.description,r.category,r.type,subjectOf(r),r.author||""]).toLowerCase().includes(k));
 });
 list=list.slice().sort((a,b)=>sort==="title"?String(a.title).localeCompare(String(b.title)):sort==="old"?((a.addedAt||0)-(b.addedAt||0)):((b.addedAt||0)-(a.addedAt||0)));
 grid.innerHTML=list.length?list.map(resCard).join(""):`<div class="empty-state"><div class="illus">📚</div><h3>${RS.saved?"No saved resources yet":"No resources match"}</h3><p>${RS.saved?"Bookmark a resource and it will appear here.":"Try a different keyword or clear the filters — or add the first resource for this topic."}</p><button class="btn primary" onclick="${RS.saved?"setSavedOnly(document.getElementById('savedChip'))":"addResource()"}">${RS.saved?"Show all resources":"+ Add a resource"}</button></div>`;
 grid.classList.toggle("list",RS.view==="list");
 const count=$("#rCount");if(count)count.textContent=`${list.length} of ${rs.length} resources · ${sv.length} saved`;
 const sc=$("#savedCount");if(sc)sc.textContent=sv.length;
 const chip=$("#savedChip");if(chip){chip.classList.toggle("on",RS.saved);chip.setAttribute("aria-pressed",RS.saved?"true":"false")}
 const empty=$("#resEmpty");if(empty)empty.hidden=!!list.length;
}
function resourcesPage(){
 const rs=resources(),cats=[...new Set(rs.map(r=>r.category).filter(Boolean))],types=[...new Set(["PDF","YouTube","Video","Notes","Document","Website",...rs.map(r=>typeMeta(r.type).k)])];
 return `<div class="res-head"><div><div class="eyebrow">Digital library · ${rs.length} resources</div><h1>Your Digital Knowledge Hub</h1><p>Discover, organize, and explore resources for your next big idea.</p></div><button class="btn cta-red lg ph" onclick="addResource()">${IC.plus} Add Resource</button></div>
 <div class="res-bar card">
  <div class="search-wrap">${IC.search}<input id="resourceSearch" placeholder="Search title, description, author…" aria-label="Search resources" oninput="renderResources()"><kbd>/</kbd></div>
  <select id="resourceCat" onchange="renderResources()" aria-label="Filter by category"><option value="">All categories</option>${cats.map(c=>`<option>${esc(c)}</option>`).join("")}</select>
  <select id="resourceType" onchange="renderResources()" aria-label="Filter by type"><option value="">All types</option>${types.map(t=>`<option>${esc(t)}</option>`).join("")}</select>
  <select id="resourceSubject" onchange="renderResources()" aria-label="Filter by subject"><option value="">All subjects</option>${SUBJECTS.map(s=>`<option>${esc(s)}</option>`).join("")}</select>
  <select id="resourceSort" onchange="renderResources()" aria-label="Sort resources"><option value="new">Newest first</option><option value="old">Oldest first</option><option value="title">Title A–Z</option></select>
  <div class="seg" role="group" aria-label="View mode"><button data-view="grid" class="on" aria-pressed="true" onclick="setRView('grid',this)" aria-label="Grid view">${IC.grid}</button><button data-view="list" aria-pressed="false" onclick="setRView('list',this)" aria-label="List view">${IC.list}</button></div>
 </div>
 <div class="res-meta"><span id="rCount">Loading resources…</span><button class="fchip" id="savedChip" aria-pressed="false" onclick="setSavedOnly(this)">${IC.star} Saved <span id="savedCount">0</span></button></div>
 <div class="rgrid" id="resourceGrid" aria-live="polite">${skeletons(6)}</div>
 <div id="resEmpty" hidden></div>`;
}
function addResource(){
 modal("addResource",`<div class="modal-head"><div><div class="eyebrow">Digital library</div><h2>Add a resource</h2><p class="muted">Saved in this browser — no account required.</p></div><button class="icon-btn" aria-label="Close" onclick="this.closest('.modal').classList.remove('open')">✕</button></div>
 <form class="form" onsubmit="saveResource(event)">
  <div class="field"><label for="r_title">Resource title *</label><input id="r_title" placeholder="e.g. Statistics handbook" autocomplete="off"></div>
  <div class="grid2">
   <div class="field"><label for="r_category">Category</label><select id="r_category"><option>Programming</option><option>Data Science</option><option>Video</option><option>Notes</option><option>Reference</option></select></div>
   <div class="field"><label for="r_type">Resource type</label><select id="r_type"><option>Website</option><option>PDF</option><option>YouTube</option><option>Video</option><option>Notes</option><option>Document</option></select></div>
  </div>
  <div class="grid2">
   <div class="field"><label for="r_subject">Subject</label><select id="r_subject"><option value="">Choose a subject</option>${SUBJECTS.map(s=>`<option>${esc(s)}</option>`).join("")}</select></div>
   <div class="field"><label for="r_author">Author / uploader <span class="muted">(optional)</span></label><input id="r_author" placeholder="e.g. Course faculty" autocomplete="off"></div>
  </div>
  <div class="field"><label for="r_desc">Description</label><textarea id="r_desc" rows="3" placeholder="What will you find here?"></textarea></div>
  <div class="field"><label for="r_url">URL or relative PDF path *</label><input id="r_url" placeholder="https://… or assets/notes.pdf" autocomplete="off"></div>
  <p class="form-err" id="r_err"></p>
  <div class="row end" style="margin-top:14px"><button class="btn" type="button" onclick="this.closest('.modal').classList.remove('open')">Cancel</button><button class="btn primary" id="r_save" type="submit">${IC.plus} Save resource</button></div>
 </form>`);
}
function saveResource(ev){
 if(ev&&ev.preventDefault)ev.preventDefault();
 const t=$("#r_title"),u=$("#r_url"),err=$("#r_err"),btn=$("#r_save");
 if(!t||!u)return;
 const title=t.value.trim(),url=u.value.trim();
 [t,u].forEach(el=>el.classList.remove("bad"));
 if(!title||!url){
  if(!title)t.classList.add("bad");if(!url)u.classList.add("bad");
  if(err){err.textContent="Please add a title and a URL (or a relative PDF path).";err.classList.add("show")}
  (title?u:t).focus();toast("Title and URL are required");return;
 }
 const rec={title,url,category:$("#r_category").value,type:$("#r_type").value,subject:$("#r_subject")?.value||"",author:$("#r_author")?.value.trim()||"",description:$("#r_desc")?.value.trim()||"",addedAt:Date.now()};
 if(btn){btn.disabled=true;btn.textContent="Saving…"}
 setTimeout(()=>{
  const rs=resources();rs.unshift(rec);localStorage.setItem("mbu_resources",JSON.stringify(rs));
  const m=$("#addResource");if(m)m.classList.remove("open");
  logAct("Added resource “"+rec.title+"”");toast("Resource saved to your library");
  renderResources();
  const grid=$("#resourceGrid");if(grid){const first=grid.querySelector(".res-card");if(first){first.classList.add("flash");try{first.scrollIntoView({behavior:"smooth",block:"center"})}catch{}}}
 },180);
}
function removeResource(keyOrIndex){
 const rs=resources(),ix=typeof keyOrIndex==="number"?keyOrIndex:rs.findIndex(r=>rkey(r)===keyOrIndex);
 if(ix<0)return;
 const gone=rs.splice(ix,1)[0];
 localStorage.setItem("mbu_resources",JSON.stringify(rs));
 logAct("Removed resource “"+(gone?.title||"resource")+"”");
 toast("Resource removed");renderResources();
}
function toggleSave(key){
 const s=savedList(),at=s.indexOf(key);
 if(at>=0)s.splice(at,1);else s.push(key);
 localStorage.setItem(SKEY,JSON.stringify(s));
 const r=resources().find(x=>rkey(x)===key);
 logAct((at<0?"Saved “":"Removed “")+(r?r.title:"resource")+"”");
 toast(at<0?"Saved to your library":"Removed from saved");
 if(page==="student"){rerender();return}
 renderResources();
}

/* ---------------- projects ---------------- */
function getProjects(){return J("mbu_projects",[
 {id:"seed-1",title:"Student Performance Analysis",description:"Explore student marks, attendance, and performance trends using Python.",category:"Data Science",tech:"Python, Pandas, Matplotlib",url:"https://github.com/topics/student-performance-analysis"},
 {id:"seed-2",title:"Gas Leakage Detection System",description:"An academic project concept for detecting gas leakage and triggering alerts.",category:"IoT",tech:"Sensors, Embedded Systems",url:""}
])}
const PRJ={cat:""};
function projCard(p,i){
 const st=p.status||"Project",tech=esc(p.tech||"").split(",").map(x=>x.trim()).filter(Boolean);
 return `<article class="card prj-card reveal" style="--i:${i}">
  <div class="prj-art"><span class="glyph">${esc(String(p.title||"P").slice(0,1).toUpperCase())}</span><span class="pcat">${esc(p.category||"Project")}</span></div>
  <div class="prj-body">
   <div class="row" style="justify-content:space-between;margin-bottom:8px"><span class="chip ${st==="Completed"?"green":st==="Idea"?"yellow":""}">${esc(st)}</span><span class="muted">${tech.length} technologies</span></div>
   <h3>${esc(p.title)}</h3><p>${esc(p.description||"No description yet.")}</p>
   <div class="tech tagrow">${tech.slice(0,4).map(t=>`<span class="chip plain">${esc(t)}</span>`).join("")||`<span class="chip plain">Stack not specified</span>`}</div>
   <div class="card-actions">
    <button class="btn primary sm" onclick="openProject('${esc(p.id)}')">${IC.eye} Details</button>
    ${p.url?`<a class="btn sm" href="${esc(p.url)}" target="_blank" rel="noopener">${IC.external} Visit</a>`:""}
    <button class="btn sm" onclick="editProject('${esc(p.id)}')">${IC.edit} Edit</button>
    <button class="btn sm" onclick="deleteProject('${esc(p.id)}')" aria-label="Delete ${esc(p.title)}">${IC.trash}</button>
   </div>
  </div>
 </article>`;
}
function renderProjects(){
 const grid=$("#projectGrid");if(!grid)return;
 const k=($("#projectSearch")?.value||"").toLowerCase();
 const list=getProjects().filter(p=>(!PRJ.cat||(p.category||"Uncategorised")===PRJ.cat)&&(!k||JSON.stringify([p.title,p.description,p.category,p.tech,p.status||""]).toLowerCase().includes(k)));
 grid.innerHTML=list.map(projCard).join("");
 const empty=$("#projectEmpty");if(empty)empty.hidden=list.length>0;
}
function setProjCat(cat,btn){PRJ.cat=cat;document.querySelectorAll("#projChips .fchip").forEach(b=>b.classList.toggle("on",b===btn));renderProjects()}
function projectsPage(){
 const cats=[...new Set(getProjects().map(p=>p.category||"Uncategorised"))];
 return `<div class="page-head"><div class="eyebrow">Project studio · ${getProjects().length} projects</div><h1 class="page-title">Projects</h1><p class="lede">Academic builds, experiments and ideas from the project catalogue. Add your own, edit the details, or open a live demo.</p><div class="head-actions"><button class="btn cta-red lg ph" onclick="addProject()">${IC.plus} Add New Project</button></div></div>
 <div class="toolbar"><div class="search-wrap">${IC.search}<input id="projectSearch" placeholder="Search projects, technologies…" aria-label="Search projects" oninput="renderProjects()"><kbd>/</kbd></div><div class="chips" id="projChips"><button class="fchip on" onclick="setProjCat('',this)">All projects</button>${cats.map(c=>`<button class="fchip" onclick="setProjCat('${esc(c)}',this)">${esc(c)}</button>`).join("")}</div></div>
 <div class="pgrid stagger" id="projectGrid"></div>
 <div class="empty-state" id="projectEmpty" hidden><div class="illus">🚀</div><h3>No projects match</h3><p>Try another search or add a new project to the studio.</p><button class="btn primary" onclick="addProject()">${IC.plus} Add a project</button></div>`;
}
function addProject(p={}){
 modal("projectModal",`<div class="modal-head"><div><div class="eyebrow">Project studio</div><h2>${p.id?"Edit project":"Add New Project"}</h2><p class="muted">Stored in this browser — shared storage needs a backend.</p></div><button class="icon-btn" aria-label="Close" onclick="this.closest('.modal').classList.remove('open')">✕</button></div>
 <form class="form" onsubmit="saveProject('${esc(p.id||"")}',event)">
  <div class="field"><label for="p_title">Project title *</label><input id="p_title" value="${esc(p.title||"")}" placeholder="Project name" autocomplete="off"></div>
  <div class="field"><label for="p_desc">Description</label><textarea id="p_desc" rows="3" placeholder="What does this project do?">${esc(p.description||"")}</textarea></div>
  <div class="grid2">
   <div class="field"><label for="p_cat">Category</label><input id="p_cat" value="${esc(p.category||"Data Science")}" placeholder="Data Science, IoT, Web…" autocomplete="off"></div>
   <div class="field"><label for="p_status">Status</label><select id="p_status">${["Idea","In progress","Completed"].map(s=>`<option ${p.status===s?"selected":""}>${s}</option>`).join("")}</select></div>
  </div>
  <div class="field"><label for="p_tech">Technology stack</label><input id="p_tech" value="${esc(p.tech||"")}" placeholder="Python, Pandas, …" autocomplete="off"></div>
  <div class="field"><label for="p_url">Documentation / demo / repository URL</label><input id="p_url" value="${esc(p.url||"")}" placeholder="https://…" autocomplete="off"></div>
  <div class="row end" style="margin-top:14px"><button class="btn" type="button" onclick="this.closest('.modal').classList.remove('open')">Cancel</button><button class="btn primary" type="submit">${IC.plus} Save project</button></div>
 </form>`);
}
function saveProject(id,ev){
 if(ev&&ev.preventDefault)ev.preventDefault();
 const title=$("#p_title")?.value.trim();
 if(!title){$("#p_title")?.classList.add("bad");toast("Project title is required");return}
 const ps=getProjects(),p={id:id||("p-"+Date.now()),title,description:$("#p_desc").value.trim(),category:$("#p_cat").value.trim()||"Uncategorised",tech:$("#p_tech").value.trim(),url:$("#p_url").value.trim(),status:$("#p_status")?.value||"In progress"};
 const ix=ps.findIndex(x=>x.id===id);if(ix>=0)ps[ix]=p;else ps.unshift(p);
 localStorage.setItem("mbu_projects",JSON.stringify(ps));
 $("#projectModal")?.classList.remove("open");
 logAct((id?"Updated":"Added")+" project “"+title+"”");
 renderProjects();toast(id?"Project updated":"Project saved in this browser");
}
function editProject(id){const p=getProjects().find(x=>x.id===id);if(p)addProject(p)}
function deleteProject(id){
 if(!confirm("Delete this project from this browser's catalogue?"))return;
 const p=getProjects().find(x=>x.id===id);
 localStorage.setItem("mbu_projects",JSON.stringify(getProjects().filter(x=>x.id!==id)));
 logAct("Deleted project “"+(p?p.title:"project")+"”");
 renderProjects();toast("Project deleted");
}
function openProject(id){
 const p=getProjects().find(x=>x.id===id);if(!p)return;
 const tech=esc(p.tech||"").split(",").map(x=>x.trim()).filter(Boolean);
 modal("projectView",`<div class="modal-head"><div><div class="eyebrow">${esc(p.category||"Project")}</div><h2>${esc(p.title)}</h2></div><button class="icon-btn" aria-label="Close" onclick="this.closest('.modal').classList.remove('open')">✕</button></div>
 <div class="tagrow" style="margin-bottom:14px"><span class="chip ${p.status==="Completed"?"green":p.status==="Idea"?"yellow":""}">${esc(p.status||"Project")}</span>${tech.map(t=>`<span class="chip plain">${esc(t)}</span>`).join("")}</div>
 <p>${esc(p.description||"No description yet.")}</p>
 <dl style="margin-top:16px"><dt>Category</dt><dd>${esc(p.category||"—")}</dd><dt>Stack</dt><dd>${esc(p.tech||"Not specified")}</dd><dt>Status</dt><dd>${esc(p.status||"Project")}</dd></dl>
 <div class="row end" style="margin-top:6px"><button class="btn" onclick="this.closest('.modal').classList.remove('open')">Close</button><button class="btn" onclick="this.closest('.modal').classList.remove('open');editProject('${esc(p.id)}')">${IC.edit} Edit</button>${p.url?`<a class="btn primary" href="${esc(p.url)}" target="_blank" rel="noopener">${IC.external} Visit project</a>`:`<button class="btn primary" onclick="toast('No project link has been added')">Add a link first</button>`}</div>`);
}

/* ---------------- student ---------------- */
function studentPage(){
 const p=prog(),sv=savedList(),ps=getProjects();
 const doneMods=modules.filter(m=>modulePct(m)>=100).length;
 const topicsDone=modules.reduce((a,m)=>a+(p.topics[m.id]||[]).length,0);
 const totalTopics=modules.reduce((a,m)=>a+m.topics.length,0);
 const totalSubs=ALL.reduce((a,e)=>a+e.subExperiments.length,0);
 const savedRes=resources().filter(r=>sv.includes(rkey(r)));
 const acts=act();
 return `<div class="stu-hero">
  ${avatar()}
  <div><div class="eyebrow">Student profile · 2026</div><h1>${esc(S.name)}</h1><div class="meta">${esc(S.rollNo)} · ${esc(S.degree)} ${esc(S.department)} · ${esc(S.year)} · Section ${esc(S.section)}</div><div class="tagrow" style="margin-top:10px"><span class="chip">${esc(S.subject)}</span><span class="chip plain">Faculty: ${esc(S.faculty)}</span><span class="chip yellow">${doneMods}/${modules.length} modules complete</span></div></div>
  <div class="row"><button class="btn" onclick="editP()">${IC.edit} Edit profile</button><button class="btn ghost" onclick="changePic()">Quick photo</button><a class="btn primary" href="about.html">About me <span class="arr">→</span></a></div>
 </div>
 <div class="kpis stagger">
  <div class="kpi reveal"><b>${doneMods}/${modules.length}</b><span>Modules completed</span></div>
  <div class="kpi reveal"><b>${topicsDone}/${totalTopics}</b><span>Topics studied</span></div>
  <div class="kpi reveal"><b>${p.subs.length}/${totalSubs}</b><span>Sub-experiments done</span></div>
  <div class="kpi reveal"><b>${savedRes.length}</b><span>Saved resources</span></div>
 </div>
 <div class="stu-grid">
  <div class="grid" style="gap:16px">
   <section class="card"><div class="section-head"><div><h2>Module progress</h2><p class="muted">Tick topics inside a module to build this picture.</p></div><a class="link-arrow" href="modules.html">All modules <span>→</span></a></div><div class="p-list">${modules.map(m=>{const pct=modulePct(m);return `<div class="p-row"><span class="pn">0${m.id}</span><div><div class="pt">${esc(m.title)}</div><div class="bar-track" style="margin-top:6px"><i class="bar-fill" style="--w:${pct}%"></i></div></div><span class="ps">${pct}%</span></div>`}).join("")}</div></section>
   <section class="card"><div class="section-head"><div><h2>Experiment progress</h2><p class="muted">Mark sub-experiments complete as you finish them.</p></div><a class="link-arrow" href="experiments.html">Lab <span>→</span></a></div><div class="p-list">${ALL.map(e=>{const pct=expPct(e);return `<div class="p-row"><span class="pn">${esc(e.id)}</span><div><div class="pt">${esc(e.name)}</div><div class="bar-track" style="margin-top:6px"><i class="bar-fill ${pct>=100?"gold":""}" style="--w:${pct}%"></i></div></div><span class="ps">${pct}%</span></div>`}).join("")}</div></section>
   <section class="card"><div class="section-head"><div><h2>Learning activity</h2><p class="muted">Your latest actions in this browser.</p></div></div>${acts.length?`<div class="tl">${acts.map(a=>`<div class="ev"><b>${esc(a.t)}</b><small>${new Date(a.at).toLocaleString(undefined,{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</small></div>`).join("")}</div>`:`<div class="empty-state" style="padding:26px"><div class="illus" style="width:64px;height:64px;font-size:24px">✨</div><h3>No activity yet</h3><p>Complete a topic, finish a lab part or save a resource and it will appear here.</p></div>`}</section>
  </div>
  <div class="grid" style="gap:16px">
   <div class="card idc">
    <div class="row sp"><span class="lbl">Student ID · 2026</span></div>
    <hr style="margin:14px 0">
    <div class="row" style="gap:14px"><div class="avatar" style="width:78px;height:78px;overflow:hidden" onclick="preview()" role="button" tabindex="0">${imgOr()}</div><div><b style="font-family:var(--ff-disp);font-size:15px">${esc(S.name)}</b><div class="lbl" style="font-size:9px">${esc(S.rollNo)}</div></div></div>
    <dl><dt>Department</dt><dd>${esc(S.department)}</dd><dt>Section</dt><dd>${esc(S.section)}</dd><dt>Subject</dt><dd>${esc(S.subject)}</dd><dt>Degree</dt><dd>${esc(S.degree)} · ${esc(S.year)}</dd><dt>Faculty</dt><dd>${esc(S.faculty)}<div class="lbl" style="font-size:9px">${esc(S.designation)}</div></dd></dl>
    <div class="row"><button class="btn sm" onclick="editP()">Edit details</button><button class="btn sm" onclick="changePic()">Quick photo</button></div>
   </div>
   <section class="card"><div class="section-head"><div><h2>Saved resources</h2><p class="muted">${savedRes.length} bookmarked</p></div><a class="link-arrow" href="resources.html">Library <span>→</span></a></div>${savedRes.length?`<div class="p-list">${savedRes.map(r=>`<div class="p-row"><span class="pn">${esc(typeMeta(r.type).k.slice(0,2).toUpperCase())}</span><div><a class="pt" href="${esc(r.url||"#")}" ${r.url?'target="_blank" rel="noopener"':`onclick="toast('No URL');return false"`}>${esc(r.title)}</a><div class="ps">${esc(r.category||"Resource")}</div></div><button class="btn sm" data-key="${esc(rkey(r))}" onclick="toggleSave(this.dataset.key)" aria-label="Remove bookmark">${IC.trash}</button></div>`).join("")}</div>`:`<p class="muted">No saved resources yet. <a href="resources.html" style="color:var(--acc);font-weight:700">Browse the library →</a></p>`}</section>
   <section class="card"><div class="section-head"><div><h2>Recent projects</h2><p class="muted">From your project studio</p></div><a class="link-arrow" href="projects.html">All <span>→</span></a></div>${ps.length?`<div class="p-list">${ps.slice(0,3).map(p=>`<div class="p-row"><span class="pn">${esc(String(p.title||"P").slice(0,1).toUpperCase())}</span><div><div class="pt">${esc(p.title)}</div><div class="ps">${esc(p.category||"Project")} · ${esc(p.status||"Project")}</div></div><button class="btn sm" onclick="openProject('${esc(p.id)}')">View</button></div>`).join("")}</div>`:`<p class="muted">No projects yet. <a href="projects.html" style="color:var(--acc);font-weight:700">Open the studio →</a></p>`}</section>
  </div>
 </div>`;
}

/* ---------------- about ---------------- */
function aboutPage(){
 const C=(t,b)=>`<section class="card"><h2>${t}</h2><p>${b}</p></section>`;
 return `<a class="btn sm ghost" href="student.html">← Student dashboard</a>
 <div class="page-head" style="margin-top:14px"><div class="eyebrow">Student profile · 2026</div><h1 class="page-title">About me</h1><p class="lede">Data Science student at Mohan Babu University — learning in public, one experiment at a time.</p></div>
 <div class="about-grid">
  <div class="grid" style="gap:14px">
   ${C("Introduction","I am a third-year B.Tech student specializing in Data Science at Mohan Babu University. I am interested in turning data into meaningful insights and building practical technology solutions. I have been building my knowledge in Python, Data Science, SQL and Power BI while exploring new tools. I enjoy learning through projects, improving my technical skills and taking on challenges that help me grow academically and professionally.")}
   <div class="grid" style="grid-template-columns:1fr 1fr;gap:14px">${C("Education","B.Tech in Data Science, Mohan Babu University (currently in 3rd year).")}${C("Interests","Data analysis, dashboards, machine learning and learning new technologies.")}</div>
   ${C("Learning journey","Started with Python fundamentals, moved to SQL and Power BI, and now works on data science practicals and projects.")}
   ${C("Career goal","To grow into a data professional who solves real problems with data.")}
   <section class="card"><h2>Technical skills</h2><div class="tagrow" style="margin-top:10px">${["Python","Data Science","SQL","Power BI","Data Analysis","Machine Learning","Pandas","NumPy"].map(s=>`<span class="chip">${s}</span>`).join("")}</div></section>
  </div>
  <div class="grid" style="gap:14px">
   <section class="card"><div class="row" style="gap:14px">${avatar()}<div><b style="font-family:var(--ff-disp);font-size:16px">${esc(S.name)}</b><div class="lbl">${esc(S.rollNo)}</div><div class="muted" style="margin-top:4px">${esc(S.department)} · Section ${esc(S.section)}</div></div></div><div class="row" style="margin-top:14px"><a class="btn sm" href="student.html">Dashboard</a><button class="btn sm" onclick="editP()">Edit profile</button></div></section>
   <section class="card"><h2>Resume</h2><p class="muted">The downloadable resume is part of the static site assets.</p><a class="btn primary block" href="assets/resume/resume.pdf" target="_blank" rel="noopener" onclick="toast('Opening resume (add assets/resume/resume.pdf if missing)')">${IC.book} Download resume</a></section>
   <section class="card"><h2>Quick links</h2><div class="p-list"><a class="p-row" href="modules.html"><span class="pn">01</span><span class="pt">Learning modules</span><span class="ps">→</span></a><a class="p-row" href="experiments.html"><span class="pn">02</span><span class="pt">Lab experiments</span><span class="ps">→</span></a><a class="p-row" href="resources.html"><span class="pn">03</span><span class="pt">Knowledge hub</span><span class="ps">→</span></a><a class="p-row" href="projects.html"><span class="pn">04</span><span class="pt">Project studio</span><span class="ps">→</span></a></div></section>
  </div>
 </div>`;
}

function footer(){
 return `<footer class="site-foot">
  <div><div class="brandline">Data Science Digital Library</div><p>A student-built learning portal for modules, experiments, tools, resources and projects at Mohan Babu University.</p></div>
  <nav aria-label="Footer"><a href="index.html">Home</a><a href="modules.html">Modules</a><a href="experiments.html">Experiments</a><a href="tools.html">Tools</a><a href="resources.html">Resources</a><a href="projects.html">Projects</a><a href="student.html">Student</a><a href="about.html">About</a></nav>
  <div class="fine"><span>© 2026 Mohan Babu University · Data Science</span><span>Academic year 2026 · Saved locally in this browser</span></div>
 </footer>`;
}

/* ---------------- tool descriptions ---------------- */
const TD={"Python":"General-purpose language for data work.","Jupyter Notebook":"Interactive notebooks for code and notes.","NumPy":"Fast numerical arrays.","Pandas":"Tables and data manipulation.","Matplotlib":"Core plotting library.","Seaborn":"Statistical charts on Matplotlib.","Scikit-learn":"Classic machine learning toolkit.","Power BI":"Business dashboards and reports.","SQL":"Querying relational databases.","GitHub":"Host and share your code.","Google Colab":"Free cloud notebooks."};

/* ---------------- legacy multi-language panel (replaced by lab3d at runtime) ---------------- */
const compilerSamples={
 python:'print("Hello, Data Science!")\nvalues = [10, 20, 30]\nprint("Average:", sum(values) / len(values))',
 java:'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Data Science!");\n  }\n}',
 c:'#include <stdio.h>\nint main(void) {\n  printf("Hello, Data Science!\\n");\n  return 0;\n}',
 'c++':'#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello, Data Science!" << endl;\n  return 0;\n}'
};
function compilerPanel(initialCode,key){
 const safeKey=String(key).replace(/[^a-zA-Z0-9_-]/g,"");
 return `<div class="compiler-shell" data-compiler="${safeKey}">
 <div class="compiler-head"><div><div class="eyebrow">LIVE CODE LAB</div><h3>Multi-language compiler</h3><p class="muted">Write, run, and inspect your program in four languages.</p></div><span class="compiler-status"><i></i> Sandbox execution</span></div>
 <div class="compiler-toolbar"><label>Language <select class="compiler-language" onchange="compilerLanguage(this)"><option value="python">Python</option><option value="java">Java</option><option value="c">C</option><option value="c++">C++</option></select></label><button class="btn" onclick="compilerReset(this)">Reset example</button><button class="btn" onclick="compilerCopy(this)">Copy code</button></div>
 <textarea class="compiler-code" rows="12" spellcheck="false" aria-label="Source code editor">${esc(initialCode||compilerSamples.python)}</textarea>
 <label class="compiler-input-label">Standard input <span class="muted">Optional · one value per line</span><textarea class="compiler-stdin" rows="2" placeholder="Enter program input here..."></textarea></label>
 <div class="compiler-actions"><button class="btn primary run-btn" onclick="runCompiler(this)">▶ Run code</button><span class="muted">Runs using an external sandbox service; internet required.</span></div>
 <div class="compiler-output-wrap"><div class="compiler-output-title">OUTPUT / ERRORS</div><pre class="compiler-output" aria-live="polite">Ready. Select a language and run your code.</pre></div>
 </div>`;
}
function compilerLanguage(sel){const shell=sel.closest(".compiler-shell"),lang=sel.value;const editor=shell.querySelector(".compiler-code");editor.value=compilerSamples[lang];shell.querySelector(".compiler-output").textContent="Example loaded for "+lang+". Ready to run."}
function compilerReset(btn){const shell=btn.closest(".compiler-shell"),lang=shell.querySelector(".compiler-language").value;shell.querySelector(".compiler-code").value=compilerSamples[lang];shell.querySelector(".compiler-stdin").value="";shell.querySelector(".compiler-output").textContent="Example reset. Ready to run."}
async function compilerCopy(btn){const shell=btn.closest(".compiler-shell");try{await navigator.clipboard.writeText(shell.querySelector(".compiler-code").value);toast("Code copied")}catch{toast("Clipboard access is unavailable in this browser")}}
async function runCompiler(btn){
 const shell=btn.closest(".compiler-shell"),lang=shell.querySelector(".compiler-language").value,code=shell.querySelector(".compiler-code").value,stdin=shell.querySelector(".compiler-stdin").value,out=shell.querySelector(".compiler-output");
 if(!code.trim()){out.textContent="Please enter some source code first.";return}
 btn.disabled=true;btn.textContent="Running…";out.textContent="Submitting code to the isolated execution service…";
 const versions={python:"3.10.0",java:"15.0.2",c:"10.2.0","c++":"10.2.0"};
 try{
  const response=await fetch("https://emkc.org/api/v2/piston/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:lang,version:versions[lang],files:[{name:lang==="java"?"Main.java":lang==="c"?"main.c":lang==="c++"?"main.cpp":"main.py",content:code}],stdin,compile_timeout:10000,run_timeout:3000,run_memory_limit:128000000})});
  if(!response.ok)throw new Error("Compiler service returned HTTP "+response.status+". Try again later.");
  const result=await response.json();const compile=result.compile,run=result.run;
  let parts=[];if(compile?.output)parts.push("COMPILE\n"+compile.output.trim());if(run?.stdout)parts.push(run.stdout.trimEnd());if(run?.stderr)parts.push("STDERR\n"+run.stderr.trimEnd());if(run?.signal)parts.push("Process signal: "+run.signal);if(run?.code!==undefined&&run.code!==0)parts.push("Exit code: "+run.code);
  out.textContent=parts.join("\n\n")||(run?.code===0?"Program finished successfully (no output).":"No output returned. Check the source code and try again.");
 }catch(err){out.textContent="Could not run the program.\n"+(err?.message||String(err))+"\n\nCheck your internet connection. If this service is unavailable, configure a trusted compiler backend."}
 finally{btn.disabled=false;btn.textContent="▶ Run code"}
}

/* ---------------- PDF flip-book (lab3d overrides this) ---------------- */
let pdfDoc=null,pdfPage=1,pdfScale=1.15;
function pdfView(v){const a=document.getElementById('pdfVertical'),b=document.getElementById('pdfFlip');if(!a||!b)return;a.hidden=v!=='vertical';b.hidden=v!=='flip';if(v==='flip')loadFlipPdf()}
function loadFlipPdf(){if(window.pdfjsLib){drawPdfPage();return}const sc=document.createElement('script');sc.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';sc.onload=()=>{pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';pdfjsLib.getDocument(`assets/modules/module-${q.get("id")||1}.pdf`).promise.then(d=>{pdfDoc=d;pdfPage=1;drawPdfPage()})};document.head.appendChild(sc)}
function drawPdfPage(){if(!pdfDoc)return;pdfDoc.getPage(pdfPage).then(p=>{const c=document.getElementById('pdfCanvas'),ctx=c.getContext('2d'),vp=p.getViewport({scale:pdfScale});c.width=vp.width;c.height=vp.height;p.render({canvasContext:ctx,viewport:vp});document.getElementById('pdfPageNum').textContent=`Page ${pdfPage} / ${pdfDoc.numPages}`})}
function flipPdf(d){if(!pdfDoc)return;const c=document.getElementById("pdfCanvas");if(c){c.classList.add("turning");setTimeout(()=>c.classList.remove("turning"),180)}pdfPage=d===-999?1:d===999?pdfDoc.numPages:Math.max(1,Math.min(pdfDoc.numPages,pdfPage+d));drawPdfPage()}
function zoomPdf(d){pdfScale=Math.max(.65,Math.min(2.1,pdfScale+d));drawPdfPage()}

/* ---------------- global search ---------------- */
function gsearch(){
 const k=$("#gs")?.value.trim().toLowerCase(),o=$("#gr");if(!o)return;
 if(!k){o.innerHTML="";return}
 const r=[];
 modules.forEach(m=>{if(JSON.stringify([m.title,m.topics,m.description]).toLowerCase().includes(k))r.push([m.title,"Module 0"+m.id,"module.html?id="+m.id,"Module"])});
 ALL.forEach(e=>{if(JSON.stringify([e.id,e.name,e.description]).toLowerCase().includes(k))r.push([e.name,"Experiment "+e.id,"experiment.html?id="+e.id,"Experiment"]);e.subExperiments.forEach(s=>{if((s.name+" "+s.id+" "+s.topic).toLowerCase().includes(k))r.push([s.name,s.id,"subexperiment.html?experiment="+e.id+"&sub="+s.id,"Sub-lab"])})});
 o.innerHTML=r.length?r.slice(0,8).map(x=>`<a href="${x[2]}"><span>${esc(x[0])}</span><span class="chip plain">${esc(x[3])}</span></a>`).join(""):`<p class="empty-hint">No results for “${esc(k)}”. Try a topic, module or experiment number.</p>`;
}

/* ---------------- add experiment (preserved) ---------------- */
function addE(){
 modal("ad",`<div class="modal-head"><div><div class="eyebrow">Lab catalogue</div><h2>Add experiment</h2><p class="muted">Creates a local experiment with seven sub-experiments.</p></div><button class="icon-btn" aria-label="Close" onclick="this.closest('.modal').classList.remove('open')">✕</button></div>
 <div class="form"><div class="grid2"><div class="field"><label for="a_n">Experiment number *</label><input id="a_n" placeholder="07" autocomplete="off"></div><div class="field"><label for="a_nm">Experiment name *</label><input id="a_nm" placeholder="Experiment name" autocomplete="off"></div></div>
 ${[["a_d","Description"],["a_y","YouTube URL"],["a_g","GitHub URL"]].map(f=>`<div class="field"><label for="${f[0]}">${f[1]}</label><input id="${f[0]}" autocomplete="off"></div>`).join("")}
 <div class="lbl" style="margin:4px 0 8px">Sub-experiment names (optional)</div><div class="grid2">${[..."ABCDEFG"].map(l=>`<div class="field"><label for="a_s${l}">Part ${l}</label><input id="a_s${l}" placeholder="Part ${l}" autocomplete="off"></div>`).join("")}</div></div>
 <div class="row end" style="margin-top:10px"><button class="btn" onclick="this.closest('.modal').classList.remove('open')">Cancel</button><button class="btn primary" onclick="saveE()">Save experiment</button></div>`);
}
function mkSub(eid,i,name,code,result,expName){const letter=[..."ABCDEFG"][i],id=String(eid)+letter,topic=(expName||name).toLowerCase();
 return {id,letter,name,topic,
  youtube:"https://www.youtube.com/results?search_query="+encodeURIComponent(name+" data science tutorial"),
  github: ""+encodeURIComponent(name+" data science"),
  aim:"To complete "+name+" as part of "+expName+".",
  problemStatement:"Apply "+name+" to a small dataset and record what the output shows.",
  tools:["Python","Pandas","NumPy","Matplotlib","Jupyter Notebook"],
  explanation:name+" is practised here as part of "+expName+". Run the starter program, read its output and explain what it demonstrates.",
  procedure:["Open a notebook for "+name,"Run the starter program","Inspect the printed output","Record the result","Explain the finding in one paragraph"],
  code:code||"print('"+name.replace(/['\\]/g,"")+" starter ran')",
  input:"The starter script is self-contained; no external file is required.",
  result:result||"The script prints a short confirmation message.",
  analysis:"The output confirms the program ran and produced the expected values.",
  conclusion:"The student can now complete "+name+" and describe what the output shows."};
}
function saveE(){
 const n=$("#a_n").value.trim().padStart(2,"0"),nm=$("#a_nm").value.trim();
 if(!nm||!$("#a_n").value)return toast("Number and name required");
 const subs=[..."ABCDEFG"].map((l,i)=>mkSub(n,i,$("#a_s"+l).value.trim()||"Part "+l,"# add code","",nm));
 const e={id:n,name:nm,description:$("#a_d").value||"Custom experiment",youtube:$("#a_y").value,github:$("#a_g").value,overview:"",aim:"",problemStatement:"",dataset:"",methodology:[],analysis:"",results:"",architecture:["Dataset","Analysis","Results"],subExperiments:subs};
 localStorage.setItem("mbu_exps",JSON.stringify(J("mbu_exps",[]).concat(e)));
 logAct("Added experiment "+n+" · "+nm);
 location.reload();
}

/* ---------------- playground compiler (experiments page, replaced by lab3d) ---------------- */
const starterCode={
 Python:"print('Hello, Data Science!')\nfor i in range(1, 6):\n    print(i, i * i)",
 Java:"public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Java!\");\n    }\n}",
 C:"#include <stdio.h>\nint main(void) {\n    printf(\"Hello, C!\\\\n\");\n    return 0;\n}",
 "C++":"#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"Hello, C++!\" << endl;\n    return 0;\n}"
};
function changeCompilerLanguage(){const l=$("#compilerLanguage").value;$("#compilerCode").value=starterCode[l];$("#compilerOutput").textContent="Ready to run "+l+" code."}
function resetCompiler(){changeCompilerLanguage();$("#compilerInput").value=""}
async function runCompiler(){const lang=$("#compilerLanguage").value,source=$("#compilerCode").value,input=$("#compilerInput").value,out=$("#compilerOutput");out.textContent="Submitting code to execution service…";const map={Python:["python","3.10.0"],Java:["java","15.0.2"],C:["c","10.2.0"],"C++":["c++","10.2.0"]};try{const response=await fetch("https://emkc.org/api/v2/piston/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:map[lang][0],version:map[lang][1],files:[{name:lang==="Java"?"Main.java":lang==="C"?"main.c":lang==="C++"?"main.cpp":"main.py",content:source}],stdin:input})});if(!response.ok)throw new Error("Execution service returned HTTP "+response.status);const result=await response.json();const run=result.run||{},compile=result.compile||{};out.textContent=[compile.stderr?("Compile errors:\n"+compile.stderr):"",run.stdout?("Output:\n"+run.stdout):"",run.stderr?("Runtime errors:\n"+run.stderr):"",!compile.stderr&&!run.stdout&&!run.stderr?"Program finished with no output.":"",run.code!==undefined?"Exit code: "+run.code:""].filter(Boolean).join("\n\n")}catch(e){out.textContent="Could not run code: "+e.message+"\n\nCheck your internet connection or service availability. This static project requires the external execution service; for production, route requests through a secured backend/sandbox."}}

/* ---------------- page table + render ---------------- */
const R={home,modules:modulesPage,module:modulePage,experiments:experimentsPage,experiment:experimentPage,sub:subPage,tools:toolsPage,resources:resourcesPage,projects:projectsPage,student:studentPage,about:aboutPage};

function boot(){
 const view=(R[page]||home)();
 $("#app").innerHTML=head()+`<main id="main" class="page">`+view+`</main>`+footer();
 if(page==="experiments"){cards(ALL);filt()}
 if(page==="resources")renderResources("boot");
 if(page==="projects")renderProjects();
 if(page==="modules")renderModules();
 if(page==="tools")renderTools();
}
function rerender(){
 boot();
 if(window.PR&&typeof PR.refresh==="function")PR.refresh();
 try{window.scrollTo({top:0,behavior:"instant"})}catch{window.scrollTo(0,0)}
}
boot();

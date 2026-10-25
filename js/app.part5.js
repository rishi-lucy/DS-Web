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
  <div class="row"><button class="btn" onclick="editP()">${IC.edit} Edit profile</button><button class="btn ghost" onclick="changePic()">Quick photo</button><a class="btn primary" href="pages/about.html">About me <span class="arr">→</span></a></div>
 </div>
 <div class="kpis stagger">
  <div class="kpi reveal"><b>${doneMods}/${modules.length}</b><span>Modules completed</span></div>
  <div class="kpi reveal"><b>${topicsDone}/${totalTopics}</b><span>Topics studied</span></div>
  <div class="kpi reveal"><b>${p.subs.length}/${totalSubs}</b><span>Sub-experiments done</span></div>
  <div class="kpi reveal"><b>${savedRes.length}</b><span>Saved resources</span></div>
 </div>
 <div class="stu-grid">
  <div class="grid" style="gap:16px">
   <section class="card"><div class="section-head"><div><h2>Module progress</h2><p class="muted">Tick topics inside a module to build this picture.</p></div><a class="link-arrow" href="pages/modules.html">All modules <span>→</span></a></div><div class="p-list">${modules.map(m=>{const pct=modulePct(m);return `<div class="p-row"><span class="pn">0${m.id}</span><div><div class="pt">${esc(m.title)}</div><div class="bar-track" style="margin-top:6px"><i class="bar-fill" style="--w:${pct}%"></i></div></div><span class="ps">${pct}%</span></div>`}).join("")}</div></section>
   <section class="card"><div class="section-head"><div><h2>Experiment progress</h2><p class="muted">Mark sub-experiments complete as you finish them.</p></div><a class="link-arrow" href="pages/experiments.html">Lab <span>→</span></a></div><div class="p-list">${ALL.map(e=>{const pct=expPct(e);return `<div class="p-row"><span class="pn">${esc(e.id)}</span><div><div class="pt">${esc(e.name)}</div><div class="bar-track" style="margin-top:6px"><i class="bar-fill ${pct>=100?"gold":""}" style="--w:${pct}%"></i></div></div><span class="ps">${pct}%</span></div>`}).join("")}</div></section>
   <section class="card"><div class="section-head"><div><h2>Learning activity</h2><p class="muted">Your latest actions in this browser.</p></div></div>${acts.length?`<div class="tl">${acts.map(a=>`<div class="ev"><b>${esc(a.t)}</b><small>${new Date(a.at).toLocaleString(undefined,{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</small></div>`).join("")}</div>`:`<div class="empty-state" style="padding:26px"><div class="illus" style="width:64px;height:64px;font-size:24px">✨</div><h3>No activity yet</h3><p>Complete a topic, finish a lab part or save a resource and it will appear here.</p></div>`}</section>
  </div>
  <div class="grid" style="gap:16px">
   <div class="card idc">
    <div class="row sp"><div class="logo" style="margin:0"><img src="assets/images/mbu-logo.png" alt="MBU logo" onerror="this.replaceWith('MBU')"></div><span class="lbl">Student ID · 2026</span></div>
    <hr style="margin:14px 0">
    <div class="row" style="gap:14px"><div class="avatar" style="width:78px;height:78px;overflow:hidden" onclick="preview()" role="button" tabindex="0">${imgOr()}</div><div><b style="font-family:var(--ff-disp);font-size:15px">${esc(S.name)}</b><div class="lbl" style="font-size:9px">${esc(S.rollNo)}</div></div></div>
    <dl><dt>Department</dt><dd>${esc(S.department)}</dd><dt>Section</dt><dd>${esc(S.section)}</dd><dt>Subject</dt><dd>${esc(S.subject)}</dd><dt>Degree</dt><dd>${esc(S.degree)} · ${esc(S.year)}</dd><dt>Faculty</dt><dd>${esc(S.faculty)}<div class="lbl" style="font-size:9px">${esc(S.designation)}</div></dd></dl>
    <div class="row"><button class="btn sm" onclick="editP()">Edit details</button><button class="btn sm" onclick="changePic()">Quick photo</button></div>
   </div>
   <section class="card"><div class="section-head"><div><h2>Saved resources</h2><p class="muted">${savedRes.length} bookmarked</p></div><a class="link-arrow" href="pages/resources.html">Library <span>→</span></a></div>${savedRes.length?`<div class="p-list">${savedRes.map(r=>`<div class="p-row"><span class="pn">${esc(typeMeta(r.type).k.slice(0,2).toUpperCase())}</span><div><a class="pt" href="${esc(r.url||"#")}" ${r.url?'target="_blank" rel="noopener"':`onclick="toast('No URL');return false"`}>${esc(r.title)}</a><div class="ps">${esc(r.category||"Resource")}</div></div><button class="btn sm" data-key="${esc(rkey(r))}" onclick="toggleSave(this.dataset.key)" aria-label="Remove bookmark">${IC.trash}</button></div>`).join("")}</div>`:`<p class="muted">No saved resources yet. <a href="pages/resources.html" style="color:var(--acc);font-weight:700">Browse the library →</a></p>`}</section>
   <section class="card"><div class="section-head"><div><h2>Recent projects</h2><p class="muted">From your project studio</p></div><a class="link-arrow" href="pages/projects.html">All <span>→</span></a></div>${ps.length?`<div class="p-list">${ps.slice(0,3).map(p=>`<div class="p-row"><span class="pn">${esc(String(p.title||"P").slice(0,1).toUpperCase())}</span><div><div class="pt">${esc(p.title)}</div><div class="ps">${esc(p.category||"Project")} · ${esc(p.status||"Project")}</div></div><button class="btn sm" onclick="openProject('${esc(p.id)}')">View</button></div>`).join("")}</div>`:`<p class="muted">No projects yet. <a href="pages/projects.html" style="color:var(--acc);font-weight:700">Open the studio →</a></p>`}</section>
  </div>
 </div>`;
}

/* ---------------- about ---------------- */
function aboutPage(){
 const C=(t,b)=>`<section class="card"><h2>${t}</h2><p>${b}</p></section>`;
 return `<a class="btn sm ghost" href="pages/student.html">← Student dashboard</a>
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
   <section class="card"><div class="row" style="gap:14px">${avatar()}<div><b style="font-family:var(--ff-disp);font-size:16px">${esc(S.name)}</b><div class="lbl">${esc(S.rollNo)}</div><div class="muted" style="margin-top:4px">${esc(S.department)} · Section ${esc(S.section)}</div></div></div><div class="row" style="margin-top:14px"><a class="btn sm" href="pages/student.html">Dashboard</a><button class="btn sm" onclick="editP()">Edit profile</button></div></section>
   <section class="card"><h2>Resume</h2><p class="muted">The downloadable resume is part of the static site assets.</p><a class="btn primary block" href="assets/resume/resume.pdf" target="_blank" rel="noopener" onclick="toast('Opening resume (add assets/resume/resume.pdf if missing)')">${IC.book} Download resume</a></section>
   <section class="card"><h2>Quick links</h2><div class="p-list"><a class="p-row" href="pages/modules.html"><span class="pn">01</span><span class="pt">Learning modules</span><span class="ps">→</span></a><a class="p-row" href="pages/experiments.html"><span class="pn">02</span><span class="pt">Lab experiments</span><span class="ps">→</span></a><a class="p-row" href="pages/resources.html"><span class="pn">03</span><span class="pt">Knowledge hub</span><span class="ps">→</span></a><a class="p-row" href="pages/projects.html"><span class="pn">04</span><span class="pt">Project studio</span><span class="ps">→</span></a></div></section>
  </div>
 </div>`;
}

function footer(){
 return `<footer class="site-foot">
  <div><div class="brandline">Data Science Digital Library</div><p>A student-built learning portal for modules, experiments, tools, resources and projects at Mohan Babu University.</p></div>
  <nav aria-label="Footer"><a href="index.html">Home</a><a href="pages/modules.html">Modules</a><a href="pages/experiments.html">Experiments</a><a href="pages/tools.html">Tools</a><a href="pages/resources.html">Resources</a><a href="pages/projects.html">Projects</a><a href="pages/student.html">Student</a><a href="pages/about.html">About</a></nav>
  <div class="fine"><span>© 2026 Mohan Babu University · Data Science</span><span>Academic year 2026 · Saved locally in this browser</span></div>
 </footer>`;
}

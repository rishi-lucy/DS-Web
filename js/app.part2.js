/* ---------------- shared page bits ---------------- */
const MOD_CAT={1:"Foundations",2:"Data Preparation",3:"Analysis",4:"Machine Learning",5:"Machine Learning"};
const EXP_SUBJECT={1:"Python",2:"Pandas",3:"Data Prep",4:"Statistics",5:"Visualization",6:"Machine Learning"};
const EXP_LEVEL={1:"Beginner",2:"Beginner",3:"Intermediate",4:"Intermediate",5:"Advanced",6:"Advanced"};
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
  <div class="hero-cta"><a class="btn primary lg ph" href="pages/resources.html">Explore Resources <span class="arr">→</span></a><a class="btn ghost lg" href="pages/projects.html">View Projects <span class="arr">→</span></a></div>
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
 <div class="section-head"><div><div class="eyebrow">Everything in one place</div><h2>Explore the portal</h2><p>Six connected spaces for the whole Data Science journey — from first principles to a finished project.</p></div><a class="link-arrow" href="pages/modules.html">Browse the curriculum <span>→</span></a></div>
 <div class="feat-grid stagger">
  <a class="card feature-card reveal" href="pages/modules.html" style="--i:0"><div class="icon-orb">${IC.modules}</div><h3>Learning Modules</h3><p>Five structured modules covering foundations, preparation, analysis, machine learning and deployment.</p><span class="go">Open modules <span>→</span></span></a>
  <a class="card feature-card reveal" href="pages/experiments.html" style="--i:1"><div class="icon-orb">${IC.experiments}</div><h3>Experiments</h3><p>Six practical labs with ${subs} guided sub-experiments, runnable code and expected outputs.</p><span class="go">Enter the lab <span>→</span></span></a>
  <a class="card feature-card reveal" href="pages/tools.html" style="--i:2"><div class="icon-orb">${IC.tools}</div><h3>Developer Tools</h3><p>The Python, notebook, visualisation and BI toolkit used throughout the course.</p><span class="go">See the toolkit <span>→</span></span></a>
  <a class="card feature-card reveal" href="pages/resources.html" style="--i:3"><div class="icon-orb">${IC.resources}</div><h3>Digital Resources</h3><p>Documentation, tutorials and study notes in one searchable knowledge hub.</p><span class="go">Browse resources <span>→</span></span></a>
  <a class="card feature-card reveal" href="pages/projects.html" style="--i:4"><div class="icon-orb">${IC.projects}</div><h3>Student Projects</h3><p>Academic project ideas, technology stacks and live links from the project studio.</p><span class="go">Open the studio <span>→</span></span></a>
  <a class="card feature-card reveal" href="pages/student.html" style="--i:5"><div class="icon-orb">${IC.student}</div><h3>Student Profile</h3><p>Your dashboard: modules completed, saved resources, recent projects and learning activity.</p><span class="go">View dashboard <span>→</span></span></a>
 </div>
</section>

<section class="sec home-split">
 <div class="home-main">
  <div class="card"><div class="section-head"><div><div class="eyebrow">Course content</div><h2>Modules</h2></div><a class="link-arrow" href="pages/modules.html">All modules <span>→</span></a></div><div class="mg">${modules.map(m=>`<a class="box" href="pages/module.html?id=${m.id}"><span class="num">0${m.id}</span><span class="lbl">Module 0${m.id} · ${MOD_CAT[m.id]||"Core"}</span><b>${esc(m.title)}</b><span class="lbl" style="font-size:9px">${m.topics.length} topics · ${modulePct(m)}% complete</span></a>`).join("")}</div></div>
  <div class="card"><div class="section-head"><div><div class="eyebrow">Practical learning</div><h2>Lab experiments</h2></div><a class="link-arrow" href="pages/experiments.html">All experiments <span>→</span></a></div><div class="mg">${ALL.map(e=>`<a class="box" href="pages/experiment.html?id=${e.id}"><span class="num">${esc(e.id)}</span><span class="lbl">${EXP_SUBJECT[e.id]||"Lab"} · ${EXP_LEVEL[e.id]||"Custom"}</span><b>${esc(e.name)}</b><span class="lbl" style="font-size:9px">${e.subExperiments.length} parts · ${expPct(e)}% complete</span></a>`).join("")}</div></div>
 </div>
 <aside class="home-side">${profile()}
  <div class="card"><div class="section-head"><div><h2 style="font-size:15px">Recently added</h2><p style="font-size:12px">From your knowledge hub</p></div><a class="link-arrow" href="pages/resources.html">All <span>→</span></a></div><div class="p-list">${rs.slice(0,3).map(r=>`<a class="p-row" href="${esc(r.url||"#")}" ${r.url?'target="_blank" rel="noopener"':`onclick="toast('Add a resource URL first');return false"`}><span class="pn">${esc((r.type||"R").slice(0,2).toUpperCase())}</span><span class="pt">${esc(r.title)}</span><span class="ps">${esc(r.category||"")}</span></a>`).join("")}</div><a class="btn ghost block" style="margin-top:12px" href="pages/resources.html">${IC.plus} Add a resource</a></div>
 </aside>
</section>

<section class="sec">
 <div class="section-head"><div><div class="eyebrow">Project studio</div><h2>Recent projects</h2><p>Academic builds and ideas from your catalogue.</p></div><a class="link-arrow" href="pages/projects.html">Open projects <span>→</span></a></div>
 <div class="pgrid stagger">${ps.slice(0,3).map((p,i)=>`<article class="card prj-card reveal" style="--i:${i}"><div class="prj-art"><span class="glyph">0${i+1}</span><span class="pcat">${esc(p.category||"Project")}</span></div><div class="prj-body"><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="tech tagrow">${esc(p.tech||"").split(",").filter(Boolean).slice(0,3).map(t=>`<span class="chip plain">${esc(t.trim())}</span>`).join("")}</div><div class="card-actions"><a class="btn sm primary" href="pages/projects.html">Details <span class="arr">→</span></a></div></div></article>`).join("")}</div>
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
   <div class="card-actions"><a class="btn primary sm" href="pages/module.html?id=${m.id}">${pct>0?"Continue":"Open"} module <span class="arr">→</span></a><a class="btn sm ghost" href="pages/module.html?id=${m.id}#pdf">${IC.book} PDF</a></div>
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
 const m=modules.find(x=>x.id==q.get("id"))||modules[0],pdf=`../assets/modules/module-${m.id}.pdf`,pct=modulePct(m);
 return `<a class="btn sm ghost" href="pages/modules.html">← All modules</a>
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

/* ---------------- experiments list ---------------- */
const EXP_F={subject:""};
function expCard(e,i){
 const pct=expPct(e);
 return `<article class="card expc reveal" style="--i:${i}">
  <div class="expc-top"><span class="expc-id">${esc(e.id)}</span><div class="row" style="gap:6px">${statusPill(pct)}<span class="chip plain">${EXP_LEVEL[e.id]||"Custom"}</span></div></div>
  <h3>${esc(e.name)}</h3><p>${esc(e.description)}</p>
  <div class="tagrow">${[...new Set(e.subExperiments.flatMap(s=>s.tools))].slice(0,4).map(t=>`<span class="chip plain">${esc(t)}</span>`).join("")}</div>
  <div class="prog"><div class="prog-head"><span>${EXP_SUBJECT[e.id]||"Lab"} · ${e.subExperiments.length} parts</span><span><b data-exppct="${e.id}">${pct}%</b></span></div><div class="bar-track"><i class="bar-fill" data-expbar="${e.id}" style="--w:${pct}%"></i></div></div>
  <div class="sub-mini">${e.subExperiments.map(s=>`<a class="mini ${subDone(s.id)?"ok":""}" href="pages/subexperiment.html?experiment=${e.id}&sub=${s.id}" title="${esc(s.name)}" aria-label="${esc(s.id+" "+s.name)}">${esc(s.id.replace(e.id,""))}</a>`).join("")}</div>
  <div class="card-actions"><a class="btn primary sm" href="pages/experiment.html?id=${e.id}">View experiment <span class="arr">→</span></a><a class="btn sm ghost" href="pages/subexperiment.html?experiment=${e.id}&sub=${e.subExperiments[0].id}">Start lab</a></div>
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
  return (!k||hay.includes(k))&&(!EXP_F.subject||(EXP_SUBJECT[e.id]||"Custom")===EXP_F.subject)&&(!lvl||(EXP_LEVEL[e.id]||"Custom")===lvl);
 }));
}
function setExpFilter(sub,btn){EXP_F.subject=sub;document.querySelectorAll("#expChips .fchip").forEach(b=>b.classList.toggle("on",b===btn));filt()}
function experimentsPage(){
 const subs=ALL.reduce((a,e)=>a+e.subExperiments.length,0),subjects=[...new Set(ALL.map(e=>EXP_SUBJECT[e.id]||"Custom"))],levels=[...new Set(ALL.map(e=>EXP_LEVEL[e.id]||"Custom"))];
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
 return `<a class="btn sm ghost" href="pages/experiments.html">← All experiments</a>
 <div class="detail-head" style="margin-top:14px">
  <div class="chips"><span class="chip">Experiment ${esc(e.id)}</span><span class="chip yellow">${EXP_SUBJECT[e.id]||"Lab"}</span><span class="chip plain">${EXP_LEVEL[e.id]||"Custom"}</span>${statusPill(pct)}</div>
  <h1>${esc(e.name)}</h1><p class="lede muted">${esc(e.description)}</p>
  <div class="row" style="gap:10px;flex-wrap:wrap"><a class="btn primary" ${link(e.youtube)}>▶ Watch tutorial</a><a class="btn" ${link(e.github)}>${IC.projects} GitHub repository</a></div>
  <div class="prog" style="max-width:520px"><div class="prog-head"><span>${e.subExperiments.filter(s=>subDone(s.id)).length}/${e.subExperiments.length} sub-experiments complete</span><span><b data-exppct="${e.id}">${pct}%</b></span></div><div class="bar-track"><i class="bar-fill" data-expbar="${e.id}" style="--w:${pct}%"></i></div></div>
 </div>
 <div class="split">
  <div class="side"><div class="lbl">On this page</div>${sec.map(s=>`<a href="#${s[0]}">${s[1]}</a>`).join("")}<a href="#su">Sub experiments</a></div>
  <div class="grid" style="gap:16px">
   <div>${compilerPanel(e.subExperiments?.[0]?.code||"print(\"Hello from the experiment!\")","exp_"+e.id)}</div>
   ${sec.map(s=>`<section id="${s[0]}" class="card"><h2>${s[1]}</h2>${s[2]}</section>`).join("")}
   <section id="su" class="card"><h2>Sub experiments</h2><p class="muted">Seven guided parts · mark each one complete as you finish it.</p><div class="mg">${e.subExperiments.map((s,i)=>`<a class="box" href="pages/subexperiment.html?experiment=${e.id}&sub=${s.id}"><span class="num">${esc(s.id)}</span><span class="lbl">Part ${String.fromCharCode(65+i)}</span><b>${esc(s.name)}</b><span class="chip ${subDone(s.id)?"green":""}" style="align-self:flex-start;margin-top:4px">${subDone(s.id)?"Completed":"Open lab"}</span></a>`).join("")}</div></section>
  </div>
 </div>`;
}

/* ---------------- sub experiment ---------------- */
function subPage(){
 const e=ALL.find(x=>x.id==q.get("experiment"))||ALL[0],S2=e.subExperiments,i=Math.max(0,S2.findIndex(s=>s.id==q.get("sub"))),s=S2[i]||S2[0],u=j=>`subexperiment.html?experiment=${e.id}&sub=${S2[j].id}`,C=(t,b,id)=>`<section class="card"${id?' id="'+id+'"':""}><h2>${t}</h2>${b}</section>`,done=subDone(s.id);
 return `<a class="btn sm ghost" href="pages/experiment.html?id=${e.id}">← Experiment ${esc(e.id)}</a>
 <div class="detail-head" style="margin-top:14px">
  <div class="chips"><span class="chip">Sub ${esc(s.id)}</span><span class="chip yellow">${esc(s.letter||String.fromCharCode(65+i))}</span><span class="chip plain">Part ${i+1} of ${S2.length}</span><span class="status ${done?"done":"todo"}" data-substatus="${s.id}"><i></i>${done?"Completed":"Not started"}</span></div>
  <h1>${esc(s.name)}</h1><p class="lede muted">${esc(e.name)} · ${EXP_SUBJECT[e.id]||"Lab"} lab</p>
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

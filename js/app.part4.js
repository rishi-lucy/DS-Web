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
 const rs=resources(),cats=[...new Set(rs.map(r=>r.category).filter(Boolean))],types=[...new Set(rs.map(r=>typeMeta(r.type).k))];
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

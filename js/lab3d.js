/* Lab3D layer: 4-language compiler panels, 3D PDF flipbook, 3D hero + tilt. Loaded after app.js. */
(function(){
const LANGS=["Python","Java","C","C++"];
const CFG=Object.assign({pistonUrl:"https://emkc.org/api/v2/piston/execute",judge0Url:"https://ce.judge0.com",wandboxUrl:"https://wandbox.org/api/compile.json",customUrl:""},window.LAB_CONFIG||{});
const PIS={Python:["python","*","main.py"],Java:["java","*","Main.java"],C:["c","*","main.c"],"C++":["c++","*","main.cpp"]};
const J0={Python:71,Java:62,C:50,"C++":54};
/* Wandbox has a permissive CORS policy and needs no key; the other services are fallbacks. */
const WB={C:"gcc-head-c","C++":"gcc-head",Java:"openjdk-jdk-22+36"};
const E=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const $=s=>document.querySelector(s);

/* ---------- Java / C / C++ : remote compilers ---------- */
async function post(url,body,ms){
  const c=new AbortController(),t=setTimeout(()=>c.abort(),ms||25000);
  try{const r=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body),signal:c.signal});
    if(!r.ok)throw new Error("HTTP "+r.status);return await r.json()}finally{clearTimeout(t)}
}
async function viaPiston(url,lang,code,stdin){
  const p=PIS[lang],d=await post(url,{language:p[0],version:p[1],files:[{name:p[2],content:code}],stdin,compile_timeout:15000,run_timeout:5000});
  if(d.message&&!d.run)throw new Error(d.message);
  return{compile:d.compile&&d.compile.code?(d.compile.output||d.compile.stderr||""):"",stdout:d.run&&d.run.stdout||"",stderr:d.run&&d.run.stderr||"",code:d.run&&d.run.code};
}
async function viaJudge0(base,lang,code,stdin){
  const d=await post(base.replace(/\/$/,"")+"/submissions?base64_encoded=false&wait=true",{source_code:code,language_id:J0[lang],stdin});
  return{compile:d.compile_output||"",stdout:d.stdout||"",stderr:d.stderr||d.message||"",code:d.exit_code};
}
async function viaWandbox(url,lang,code,stdin){
  /* Wandbox stores the source as prog.java, so a public class must not be called Main. */
  const src=lang==="Java"?code.replace(/\bclass\s+Main\b/g,"class prog"):code;
  const d=await post(url,{compiler:WB[lang],code:src,stdin},60000);
  if(d.error)throw new Error(d.error);
  return{compile:d.compiler_error||"",stdout:d.program_output||"",stderr:d.program_error||"",code:Number(d.status)};
}
async function runRemote(lang,code,stdin,say){
  const T=[];
  if(CFG.customUrl)T.push(["your server",()=>viaPiston(CFG.customUrl,lang,code,stdin)]);
  T.push(["Wandbox",()=>viaWandbox(CFG.wandboxUrl,lang,code,stdin)],["Piston",()=>viaPiston(CFG.pistonUrl,lang,code,stdin)],["Judge0",()=>viaJudge0(CFG.judge0Url,lang,code,stdin)]);
  const errs=[];
  for(const[n,f]of T){try{say("Compiling & running on "+n+"…");return await f()}catch(e){errs.push(n+": "+(e.name==="AbortError"?"timed out":e.message))}}
  throw new Error(errs.join("\n"));
}
function fmt(r){
  const o=[];
  if(r.compile)o.push("── compiler ──\n"+r.compile.trim());
  if(r.stdout)o.push(r.stdout.replace(/\s+$/,""));
  if(r.stderr)o.push("── stderr ──\n"+r.stderr.trim());
  if(r.code!=null&&r.code!==0)o.push("[exit code "+r.code+"]");
  return o.join("\n\n")||"(program finished with no output)";
}

/* ---------- Python : runs in the browser with Pyodide (NumPy, Pandas, Matplotlib, scikit-learn…) ---------- */
let pyP=null;
function getPy(){
  return pyP||(pyP=new Promise((res,rej)=>{
    const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
    s.onload=()=>loadPyodide().then(res,rej);
    s.onerror=()=>{pyP=null;rej(new Error("Could not load the Python runtime (internet needed)."))};
    document.head.append(s);
  }));
}
const CAP="import io,base64\nimport matplotlib.pyplot as _plt\n_o=[]\nfor _n in _plt.get_fignums():\n    _b=io.BytesIO(); _plt.figure(_n).savefig(_b,format='png',bbox_inches='tight',dpi=90); _o.append(base64.b64encode(_b.getvalue()).decode())\n_plt.close('all')\n_o";
async function runPython(code,say){
  say("Starting Python runtime (first run downloads ~10 MB)…");
  const py=await getPy(),out=[];
  py.setStdout({batched:s=>out.push(s)});py.setStderr({batched:s=>out.push(s)});
  say("Loading packages…");
  try{
    await py.loadPackagesFromImports(code,{messageCallback:say,errorCallback:say});
  }catch(e){say("Some packages are not in the built-in distribution — trying PyPI next…")}
  /* seaborn is pure Python and not part of the Pyodide distribution, so pull it from PyPI */
  if(/\bseaborn\b|\bsns\./.test(code)){
    say("Installing seaborn from PyPI…");
    try{
      await py.loadPackage("micropip");
      await py.runPythonAsync("import micropip\nawait micropip.install('seaborn')\n");
    }catch(e){out.push("── setup ──\nseaborn could not be installed: "+(e.message||e))}
  }
  say("Running…");
  const g=py.globals.get("dict")(),imgs=[];
  let err="";
  try{
    await py.runPythonAsync(code,{globals:g});
    if(/matplotlib|plt\.|sns\./.test(code)){const r=await py.runPythonAsync(CAP,{globals:g});(r.toJs?r.toJs():r).forEach(x=>imgs.push(x));r.destroy&&r.destroy()}
  }catch(e){err=String(e.message||e).trim().split("\n").slice(-6).join("\n")}
  g.destroy&&g.destroy();
  let txt=out.join("\n");
  if(err)txt+=(txt?"\n\n":"")+"── error ──\n"+err;
  if(!txt)txt=imgs.length?"Chart created ↓":"(program finished with no output)";
  return{text:txt,imgs};
}

/* ---------- the 4-language panel ---------- */
function panel(o){
  const subs=o.subs,st={i:o.start||0,lang:"Python",buf:{}},root=document.createElement("div");
  root.className="lab card";
  root.innerHTML=`<div class="lab-head"><div><div class="eyebrow">LIVE CODE LAB · COMPILE &amp; RUN</div><h3>${E(o.title)}</h3><p class="muted">Pick a language, edit the code, press Run (Ctrl+Enter).</p></div><span class="lab-badge">Python · Java · C · C++</span></div>
  <div class="lab-subs"></div><div class="lab-tabs">${LANGS.map(l=>`<button class="lab-tab" data-l="${E(l)}">${E(l)}</button>`).join("")}</div>
  <textarea class="lab-code" rows="12" spellcheck="false" aria-label="Source code"></textarea>
  <label class="lab-in">Standard input (optional, Java/C/C++)<textarea class="lab-stdin" rows="2" spellcheck="false"></textarea></label>
  <div class="row lab-act"><button class="btn primary run">▶ Run</button><button class="btn rst">Reset code</button><button class="btn cp">Copy</button><span class="lab-st muted"></span></div>
  <pre class="lab-out">Ready.</pre><div class="lab-img"></div>`;
  const q=s=>root.querySelector(s),code=q(".lab-code"),out=q(".lab-out"),img=q(".lab-img"),stat=q(".lab-st"),runB=q(".run");
  const cur=()=>subs[st.i],key=()=>cur().id+"|"+st.lang,orig=()=>cur().codes[st.lang]||"";
  function draw(){
    const sb=q(".lab-subs");
    sb.style.display=subs.length>1?"flex":"none";
    sb.innerHTML=subs.map((s,i)=>`<button class="lab-sub ${i===st.i?"on":""}" data-i="${i}" title="${E(s.name)}">${E(s.id)} · ${E(s.name)}</button>`).join("");
    root.querySelectorAll(".lab-tab").forEach(b=>b.classList.toggle("on",b.dataset.l===st.lang));
    code.value=st.buf[key()]??orig();out.textContent="Ready.";img.innerHTML="";stat.textContent="";
  }
  q(".lab-subs").onclick=e=>{const b=e.target.closest(".lab-sub");if(b){st.i=+b.dataset.i;draw()}};
  root.querySelector(".lab-tabs").onclick=e=>{const b=e.target.closest(".lab-tab");if(b){st.lang=b.dataset.l;draw()}};
  code.oninput=()=>{st.buf[key()]=code.value};
  code.onkeydown=e=>{
    if(e.key==="Tab"){e.preventDefault();const s=code.selectionStart;code.setRangeText("  ",s,code.selectionEnd,"end");code.oninput()}
    if(e.key==="Enter"&&(e.ctrlKey||e.metaKey)){e.preventDefault();runB.click()}
  };
  q(".rst").onclick=()=>{delete st.buf[key()];draw()};
  q(".cp").onclick=async()=>{try{await navigator.clipboard.writeText(code.value);window.toast&&toast("Code copied")}catch{window.toast&&toast("Clipboard unavailable")}};
  runB.onclick=async()=>{
    const lang=st.lang,src=code.value;
    if(!src.trim()){out.textContent="Please enter some code first.";return}
    runB.disabled=true;runB.textContent="Running…";img.innerHTML="";out.textContent="";
    const say=m=>{stat.textContent=m};
    try{
      if(lang==="Python"){const r=await runPython(src,say);out.textContent=r.text;img.innerHTML=r.imgs.map(b=>`<img alt="Chart output" src="data:image/png;base64,${b}">`).join("")}
      else{const r=await runRemote(lang,src,q(".lab-stdin").value,say);out.textContent=fmt(r)}
    }catch(e){
      out.textContent="Could not run the program.\n"+(e.message||e)+"\n\nCheck your internet connection, or set your own compiler server in js/config.js.";
    }
    stat.textContent="";runB.disabled=false;runB.textContent="▶ Run";
  };
  draw();return root;
}
const mk=(s,eid)=>({id:s.id,name:s.name,codes:LAB.codesFor(s,eid)});
function mountLabs(){
  if(!window.LAB||typeof ALL==="undefined")return;
  const qp=new URLSearchParams(location.search);
  if(page==="experiment"){
    const ex=ALL.find(x=>x.id==qp.get("id"))||ALL[0],old=document.querySelector('.compiler-shell[data-compiler^="exp_"]');
    if(old)old.replaceWith(panel({title:"Experiment "+ex.id+" · "+ex.name+" — all sub-experiments",subs:ex.subExperiments.map(s=>mk(s,ex.id))}));
  }else if(page==="sub"){
    const ex=ALL.find(x=>x.id==qp.get("experiment"))||ALL[0],s=ex.subExperiments.find(x=>x.id==qp.get("sub"))||ex.subExperiments[0],old=document.querySelector('.compiler-shell[data-compiler^="sub_"]');
    if(old)old.replaceWith(panel({title:s.id+" · "+s.name,subs:[mk(s,ex.id)]}));
  }else if(page==="experiments"){
    const old=document.querySelector("section.compiler");
    if(old)old.replaceWith(panel({title:"Online Compiler Playground",subs:[{id:"Hello",name:"Starter",codes:LAB.HELLO}]}));
  }
}

/* ---------- 3D PDF flipbook ---------- */
function loadPdfJs(){
  if(window.pdfjsLib)return Promise.resolve();
  return new Promise((res,rej)=>{
    const s=document.createElement("script");s.src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    s.onload=()=>{pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";res()};
    s.onerror=()=>rej(new Error("PDF.js could not be loaded (internet needed)."));document.head.append(s);
  });
}
let bookReady=false,bookApi=null;
async function mountBook(){
  const host=document.getElementById("pdfFlip");if(!host||bookReady)return;bookReady=true;
  const id=new URLSearchParams(location.search).get("id")||"1",url="assets/modules/module-"+id+".pdf";
  host.innerHTML=`<div class="pbk-stage"><div class="pbook" data-pos="start"><div class="pbk-load">Loading 3D flipbook…</div></div></div>
  <div class="row pbk-ctrl"><button class="btn" data-a="first">⇤ First</button><button class="btn" data-a="prev">← Prev</button><span class="lbl" id="bkN">Cover</span><button class="btn" data-a="next">Next →</button><button class="btn" data-a="last">Last ⇥</button></div>
  <p class="muted" style="text-align:center">Click a page or use the Next/Prev buttons or ← → keys to turn pages in 3D.</p>`;
  const book=host.querySelector(".pbook");
  try{
    await loadPdfJs();
    const pdf=await pdfjsLib.getDocument(url).promise,N=pdf.numPages,p1=await pdf.getPage(1),v1=p1.getViewport({scale:1});
    book.style.aspectRatio=(2*v1.width)+" / "+v1.height;book.innerHTML="";
    const S=Math.ceil(N/2),sheets=[],cv=[];
    for(let i=0;i<S;i++){
      const s=document.createElement("div");s.className="psheet";s.style.zIndex=S-i;
      s.innerHTML=`<div class="pface"><canvas></canvas></div><div class="pface back"><canvas></canvas></div>`;
      book.append(s);sheets.push(s);const c=s.querySelectorAll("canvas");cv.push(c[0],c[1]);
    }
    let cur=0;
    const label=()=>{host.querySelector("#bkN").textContent=cur===0?"Cover":cur===S?"Back cover":"Pages "+(2*cur)+"–"+Math.min(N,2*cur+1)+" of "+N};
    const flip=d=>{
      const n=cur+d;if(n<0||n>S)return;
      const idx=d>0?cur:n;cur=n;sheets[idx].style.zIndex=99;
      sheets.forEach((s,i)=>s.classList.toggle("flip",i<cur));
      setTimeout(()=>sheets.forEach((s,i)=>s.style.zIndex=i<cur?i:S-i),650);
      book.dataset.pos=cur===0?"start":cur===S?"end":"mid";label();
    };
    const go=n=>{const d=n-cur;if(!d)return;let k=0;const step=()=>{flip(d>0?1:-1);if(++k<Math.abs(d))setTimeout(step,140)};step()};
    sheets.forEach((s,i)=>s.onclick=()=>{if(i===cur)flip(1);else if(i===cur-1)flip(-1)});
    host.querySelector(".pbk-ctrl").onclick=e=>{const a=e.target.closest("button")?.dataset.a;if(a==="next")flip(1);if(a==="prev")flip(-1);if(a==="first")go(0);if(a==="last")go(S)};
    bookApi={flip};label();
    const draw=async p=>{
      const pg=await pdf.getPage(p),vp=pg.getViewport({scale:Math.min(2.2,760/v1.width)}),c=cv[p-1];
      c.width=vp.width;c.height=vp.height;await pg.render({canvasContext:c.getContext("2d"),viewport:vp}).promise;
    };
    await Promise.all([draw(1),N>1?draw(2):0,N>2?draw(3):0]);
    for(let p=4;p<=N;p++)await draw(p);
  }catch(e){
    book.innerHTML=`<div class="pbk-load" style="padding:20px;text-align:center">Could not load the flipbook: ${E(e.message)}<br>Use “Vertical view” or “Open PDF” instead.</div>`;bookReady=false;
  }
}
addEventListener("keydown",e=>{
  if(!bookApi||/INPUT|TEXTAREA|SELECT/.test((e.target.tagName||"")))return;
  if(e.key==="ArrowRight")bookApi.flip(1);if(e.key==="ArrowLeft")bookApi.flip(-1);
});
window.pdfView=function(v){
  const a=document.getElementById("pdfVertical"),b=document.getElementById("pdfFlip");if(!a||!b)return;
  a.hidden=v!=="vertical";b.hidden=v!=="flip";if(v==="flip")mountBook();
};

/* ---------- 3D hero + tilt ---------- */
function hero(){
  const h=document.querySelector(".hero");if(!h||page!=="home")return;
  h.insertAdjacentHTML("afterbegin",`<div class="stage3d" aria-hidden="true"><div class="floor"></div><div class="cube3d"><i>Py</i><i>Java</i><i>C</i><i>C++</i><i>DS</i><i>∑</i></div></div>`);
}
let last=null;
const SEL="a.card,article.card,.box,.tile,.feature-card";
const calm=matchMedia("(prefers-reduced-motion: reduce)").matches;
addEventListener("pointermove",e=>{
  if(calm||e.pointerType==="touch")return;
  const t=e.target.closest&&e.target.closest(SEL);
  if(last&&last!==t){last.style.transform="";last=null}
  if(!t)return;
  const r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  t.style.transform="perspective(900px) rotateY("+x*10+"deg) rotateX("+(-y*10)+"deg) translateZ(6px)";last=t;
});
document.addEventListener("pointerleave",()=>{if(last){last.style.transform="";last=null}});

/* ---------- start ---------- */
hero();mountLabs();
if(page==="module"&&document.getElementById("pdfFlip")){window.pdfView("flip")}
})();

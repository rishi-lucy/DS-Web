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
  github:"https://github.com/search?q="+encodeURIComponent(name+" data science"),
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

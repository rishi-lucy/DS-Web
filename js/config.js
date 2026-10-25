/* Compiler back-ends for Java, C and C++ (Python runs inside the browser via Pyodide).
   The page tries them in this order: customUrl -> wandboxUrl -> pistonUrl -> judge0Url.
   Public services can change or rate-limit, so for a real deployment run your own
   Piston server (see README) and put its /api/v2/execute URL in customUrl. */
window.LAB_CONFIG={
  customUrl:"",                                                     // e.g. "https://compiler.yourcollege.edu/api/v2/execute"
  wandboxUrl:"https://wandbox.org/api/compile.json",                // public Wandbox (no key needed)
  pistonUrl:"https://emkc.org/api/v2/piston/execute",               // public Piston
  judge0Url:"https://ce.judge0.com"                                 // public Judge0 CE (fallback)
};

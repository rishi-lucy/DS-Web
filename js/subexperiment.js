// Sub-Experiment Page JavaScript
// Mohan Babu University - Data Science Laboratory

let currentExp = null;
let currentSub = null;
let allSubExperiments = [];

document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeMobileMenu();
    initializeCopyButton();
    loadSubExperimentData();
});

// Theme Management
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const themeText = themeToggle.querySelector('.theme-text');
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'dark') {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light Mode';
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        if (newTheme === 'dark') {
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Light Mode';
        } else {
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Dark Mode';
        }
    });
}

// Mobile Menu
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    
    if (!mobileMenuBtn) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
}

// Copy Code Button
function initializeCopyButton() {
    const copyBtn = document.getElementById('copyCodeBtn');
    if (!copyBtn) return;
    
    copyBtn.addEventListener('click', function() {
        const codeElement = document.getElementById('subCode');
        const code = codeElement.textContent;
        
        navigator.clipboard.writeText(code).then(function() {
            const copyText = copyBtn.querySelector('.copy-text');
            const copyIcon = copyBtn.querySelector('.copy-icon');
            const copyMessage = document.getElementById('copyMessage');
            
            copyText.textContent = 'Copied!';
            copyIcon.textContent = '✓';
            copyMessage.style.display = 'block';
            
            setTimeout(function() {
                copyText.textContent = 'Copy Code';
                copyIcon.textContent = '📋';
                copyMessage.style.display = 'none';
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
            alert('Failed to copy code');
        });
    });
}

// Load sub-experiment data
function loadSubExperimentData() {
    const urlParams = new URLSearchParams(window.location.search);
    const expId = urlParams.get('experiment');
    const subId = urlParams.get('sub');
    
    if (!expId || !subId) {
        alert('Invalid sub-experiment. Redirecting to dashboard.');
        window.location.href = 'index.html';
        return;
    }
    
    const experiments = loadExperiments();
    currentExp = experiments.find(e => e.id === expId);
    
    if (!currentExp) {
        alert('Experiment not found. Redirecting to dashboard.');
        window.location.href = 'index.html';
        return;
    }
    
    currentSub = currentExp.subExperiments.find(sub => sub.id === subId);
    
    if (!currentSub) {
        alert('Sub-experiment not found. Redirecting to experiment overview.');
        window.location.href = `experiment.html?id=${expId}`;
        return;
    }
    
    allSubExperiments = currentExp.subExperiments;
    
    // Update page title
    document.title = `${currentSub.id} - ${currentSub.name} - Mohan Babu University`;
    
    // Breadcrumb
    const breadcrumbExp = document.getElementById('breadcrumbExp');
    breadcrumbExp.textContent = `Experiment ${currentExp.id}`;
    breadcrumbExp.href = `experiment.html?id=${currentExp.id}`;
    
    // Header
    document.getElementById('subExpNumberBadge').textContent = `EXPERIMENT ${currentSub.id}`;
    document.getElementById('subExpTitle').textContent = currentSub.name;
    
    // Resources
    document.getElementById('subExpYoutubeLink').href = currentSub.youtube;
    document.getElementById('subExpGithubLink').href = currentSub.github;
    
    // Navigation
    document.getElementById('currentSub').textContent = `Experiment ${currentSub.id}`;
    setupNavigation();
    
    // Content
    document.getElementById('subAim').textContent = currentSub.aim;
    document.getElementById('subProblem').textContent = currentSub.problemStatement;
    
    // Tools
    const toolsDiv = document.getElementById('subTools');
    toolsDiv.innerHTML = '';
    if (currentSub.tools) {
        currentSub.tools.forEach(tool => {
            const toolBadge = document.createElement('span');
            toolBadge.className = 'tool-badge';
            toolBadge.textContent = tool;
            toolsDiv.appendChild(toolBadge);
        });
    }
    
    document.getElementById('subExplanation').textContent = currentSub.explanation;
    
    // Procedure
    const procedureDiv = document.getElementById('subProcedure');
    procedureDiv.innerHTML = '';
    if (currentSub.procedure) {
        currentSub.procedure.forEach((step, index) => {
            const procItem = document.createElement('div');
            procItem.className = 'procedure-item';
            procItem.innerHTML = `
                <span class="procedure-number">${String(index + 1).padStart(2, '0')} →</span>
                <span class="procedure-text">${escapeHtml(step)}</span>
            `;
            procedureDiv.appendChild(procItem);
        });
    }
    
    // Code
    document.getElementById('subCode').textContent = currentSub.code;
    
    // Input, Result, Analysis, Conclusion
    document.getElementById('subInput').textContent = currentSub.input;
    document.getElementById('subResult').textContent = currentSub.result;
    document.getElementById('subAnalysis').textContent = currentSub.analysis;
    document.getElementById('subConclusion').textContent = currentSub.conclusion;
}

// Setup navigation
function setupNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const subSelectorButtons = document.getElementById('subSelectorButtons');
    
    const currentIndex = allSubExperiments.findIndex(sub => sub.id === currentSub.id);
    
    // Previous button
    if (currentIndex > 0) {
        prevBtn.disabled = false;
        prevBtn.onclick = function() {
            const prevSub = allSubExperiments[currentIndex - 1];
            window.location.href = `subexperiment.html?experiment=${currentExp.id}&sub=${prevSub.id}`;
        };
    } else {
        prevBtn.disabled = true;
    }
    
    // Next button
    if (currentIndex < allSubExperiments.length - 1) {
        nextBtn.disabled = false;
        nextBtn.onclick = function() {
            const nextSub = allSubExperiments[currentIndex + 1];
            window.location.href = `subexperiment.html?experiment=${currentExp.id}&sub=${nextSub.id}`;
        };
    } else {
        nextBtn.disabled = true;
    }
    
    // Sub selector buttons
    subSelectorButtons.innerHTML = '';
    allSubExperiments.forEach(sub => {
        const btn = document.createElement('button');
        btn.className = 'sub-selector-btn';
        if (sub.id === currentSub.id) {
            btn.classList.add('active');
        }
        btn.textContent = sub.id.replace(currentExp.id, '');
        btn.onclick = function() {
            window.location.href = `subexperiment.html?experiment=${currentExp.id}&sub=${sub.id}`;
        };
        btn.setAttribute('aria-label', `Go to sub-experiment ${sub.id}`);
        subSelectorButtons.appendChild(btn);
    });
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Experiment Overview Page JavaScript
// Mohan Babu University - Data Science Laboratory

document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeMobileMenu();
    loadExperimentData();
});

// Theme Management
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const themeText = themeToggle.querySelector('.theme-text');
    
    // Load saved theme
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

// Load experiment data
function loadExperimentData() {
    // Get experiment ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const expId = urlParams.get('id');
    
    if (!expId) {
        alert('No experiment selected. Redirecting to dashboard.');
        window.location.href = 'index.html';
        return;
    }
    
    // Load experiments
    const experiments = loadExperiments();
    const exp = experiments.find(e => e.id === expId);
    
    if (!exp) {
        alert('Experiment not found. Redirecting to dashboard.');
        window.location.href = 'index.html';
        return;
    }
    
    // Update page title
    document.title = `Experiment ${exp.id} - ${exp.name} - Mohan Babu University`;
    
    // Populate header
    document.getElementById('expNumberBadge').textContent = `EXPERIMENT ${exp.id}`;
    document.getElementById('expTitle').textContent = exp.name;
    
    // Resources
    const youtubeLink = document.getElementById('expYoutubeLink');
    const githubLink = document.getElementById('expGithubLink');
    youtubeLink.href = exp.youtube;
    githubLink.href = exp.github;
    
    // Overview sections
    document.getElementById('expOverview').textContent = exp.overview;
    document.getElementById('expAim').textContent = exp.aim;
    document.getElementById('expProblem').textContent = exp.problemStatement;
    
    // Dataset
    const datasetDiv = document.getElementById('expDataset');
    datasetDiv.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; margin-top: 0.5rem;">
            <div style="padding: 0.75rem; background: var(--bg-tertiary); border-radius: var(--radius-lg);">
                <strong style="color: var(--text-primary);">Dataset Name:</strong><br>
                <span style="color: var(--text-secondary);">${escapeHtml(exp.dataset.name)}</span>
            </div>
            <div style="padding: 0.75rem; background: var(--bg-tertiary); border-radius: var(--radius-lg);">
                <strong style="color: var(--text-primary);">Source:</strong><br>
                <span style="color: var(--text-secondary);">${escapeHtml(exp.dataset.source)}</span>
            </div>
            <div style="padding: 0.75rem; background: var(--bg-tertiary); border-radius: var(--radius-lg);">
                <strong style="color: var(--text-primary);">Number of Records:</strong><br>
                <span style="color: var(--text-secondary);">${escapeHtml(exp.dataset.records)}</span>
            </div>
            <div style="padding: 0.75rem; background: var(--bg-tertiary); border-radius: var(--radius-lg);">
                <strong style="color: var(--text-primary);">Features:</strong><br>
                <span style="color: var(--text-secondary);">${escapeHtml(exp.dataset.features)}</span>
            </div>
            <div style="padding: 0.75rem; background: var(--bg-tertiary); border-radius: var(--radius-lg); grid-column: 1 / -1;">
                <strong style="color: var(--text-primary);">Data Types:</strong><br>
                <span style="color: var(--text-secondary);">${escapeHtml(exp.dataset.dataTypes)}</span>
            </div>
        </div>
    `;
    
    document.getElementById('expMethodology').textContent = exp.methodology;
    document.getElementById('expAnalysis').textContent = exp.analysis;
    document.getElementById('expResults').textContent = exp.results;
    
    // Sub-experiments
    const subGrid = document.getElementById('subExperimentsGrid');
    subGrid.innerHTML = '';
    exp.subExperiments.forEach(sub => {
        const subCard = document.createElement('a');
        subCard.href = `subexperiment.html?experiment=${exp.id}&sub=${sub.id}`;
        subCard.className = 'sub-exp-card';
        subCard.textContent = sub.id.replace(exp.id, '');
        subCard.setAttribute('aria-label', `View sub-experiment ${sub.id}: ${sub.name}`);
        subGrid.appendChild(subCard);
    });
    
    // Architecture
    const archDiv = document.getElementById('architectureDiagram');
    archDiv.innerHTML = '';
    exp.architecture.forEach((item, index) => {
        if (index > 0) {
            const arrow = document.createElement('div');
            arrow.className = 'arch-arrow';
            arrow.textContent = '↓';
            archDiv.appendChild(arrow);
        }
        const archItem = document.createElement('div');
        archItem.className = 'arch-item';
        archItem.textContent = item;
        archDiv.appendChild(archItem);
    });
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

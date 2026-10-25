// Index Page JavaScript
// Mohan Babu University - Data Science Laboratory Dashboard

let allExperiments = [];
let currentSearchTerm = '';

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeMobileMenu();
    initializeModal();
    loadAndDisplayExperiments();
    initializeSearch();
});

// Theme Management
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
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
    
    mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
}

// Modal Management
function initializeModal() {
    const addBtn = document.getElementById('addExperimentBtn');
    const modal = document.getElementById('addExperimentModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalClose = document.getElementById('modalClose');
    const modalCancel = document.getElementById('modalCancel');
    const form = document.getElementById('addExperimentForm');
    
    addBtn.addEventListener('click', function() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        form.reset();
    }
    
    modalBackdrop.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
    modalCancel.addEventListener('click', closeModal);
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const expNumber = document.getElementById('expNumber').value.trim();
        const expName = document.getElementById('expName').value.trim();
        const expDescription = document.getElementById('expDescription').value.trim();
        const expYoutube = document.getElementById('expYoutube').value.trim();
        const expGithub = document.getElementById('expGithub').value.trim();
        const expSubExperiments = document.getElementById('expSubExperiments').value.trim();
        
        // Validate
        if (!expNumber || !expName || !expDescription || !expYoutube || !expGithub || !expSubExperiments) {
            alert('Please fill in all fields');
            return;
        }
        
        // Create sub-experiments array
        const subExpNames = expSubExperiments.split(',').map(s => s.trim()).filter(s => s);
        const subExperiments = subExpNames.map((name, index) => {
            const letter = String.fromCharCode(65 + index); // A, B, C...
            return {
                id: expNumber + letter,
                name: name,
                youtube: expYoutube,
                github: expGithub,
                aim: `To implement ${name.toLowerCase()}`,
                problemStatement: `The task is to perform ${name.toLowerCase()} using appropriate techniques.`,
                tools: ["Python", "Pandas", "NumPy"],
                explanation: `${name} is an important aspect of data preprocessing and analysis. This sub-experiment covers the implementation and understanding of ${name.toLowerCase()}.`,
                procedure: [
                    `Understand the concept of ${name.toLowerCase()}`,
                    "Load and prepare the dataset",
                    "Apply appropriate techniques",
                    "Analyze the results",
                    "Document findings"
                ],
                code: `# ${name}\n# Implementation code will be added here\n\nimport pandas as pd\nimport numpy as np\n\n# Load dataset\ndf = pd.read_csv('dataset.csv')\n\n# Perform ${name.toLowerCase()}\n# Add your implementation here\n\nprint("${name} completed successfully")`,
                input: "Dataset for analysis",
                result: `Successfully implemented ${name.toLowerCase()} with appropriate output.`,
                analysis: `The implementation of ${name.toLowerCase()} provides valuable insights into the data.`,
                conclusion: `${name} is successfully completed and helps in understanding data preprocessing concepts.`
            };
        });
        
        // Create new experiment
        const newExperiment = {
            id: expNumber,
            name: expName,
            description: expDescription,
            youtube: expYoutube,
            github: expGithub,
            overview: expDescription.substring(0, 200) + "...",
            aim: `To understand and implement ${expName.toLowerCase()}`,
            problemStatement: `The experiment aims to address challenges related to ${expName.toLowerCase()} in data science applications.`,
            dataset: {
                name: "Custom Dataset",
                source: "Laboratory Dataset",
                records: "Variable",
                features: "Multiple",
                dataTypes: "Mixed"
            },
            methodology: "Systematic approach involving data loading, preprocessing, analysis, and interpretation of results.",
            analysis: `This experiment analyzes various aspects related to ${expName.toLowerCase()}.`,
            results: "Expected to gain practical knowledge and hands-on experience with the concepts covered.",
            architecture: ["Dataset", "Processing", "Analysis", "Results"],
            subExperiments: subExperiments
        };
        
        // Add to experiments array
        allExperiments.push(newExperiment);
        saveExperiments(allExperiments);
        
        // Close modal and reload
        closeModal();
        loadAndDisplayExperiments();
        
        alert('Experiment added successfully!');
    });
}

// Load and display experiments
function loadAndDisplayExperiments() {
    // Load from data.js and localStorage
    allExperiments = loadExperiments();
    
    const grid = document.getElementById('experimentsGrid');
    const noResults = document.getElementById('noResults');
    
    grid.innerHTML = '';
    
    // Filter based on search
    let experimentsToShow = allExperiments;
    if (currentSearchTerm) {
        const term = currentSearchTerm.toLowerCase();
        experimentsToShow = allExperiments.filter(exp => 
            exp.id.toLowerCase().includes(term) ||
            exp.name.toLowerCase().includes(term) ||
            exp.description.toLowerCase().includes(term) ||
            exp.subExperiments.some(sub => sub.name.toLowerCase().includes(term))
        );
    }
    
    if (experimentsToShow.length === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
        
        experimentsToShow.forEach((exp, index) => {
            const card = createExperimentCard(exp, index);
            grid.appendChild(card);
        });
    }
}

// Create experiment card
function createExperimentCard(exp, index) {
    const card = document.createElement('div');
    card.className = 'experiment-card';
    card.style.animationDelay = (index * 0.05) + 's';
    
    // Create sub-experiments badges
    let subBadges = '';
    exp.subExperiments.slice(0, 7).forEach(sub => {
        subBadges += `<span class="sub-exp-badge">${sub.id.replace(exp.id, '')}</span>`;
    });
    if (exp.subExperiments.length > 7) {
        subBadges += `<span class="sub-exp-badge">+${exp.subExperiments.length - 7}</span>`;
    }
    
    card.innerHTML = `
        <div class="experiment-number">EXPERIMENT ${exp.id}</div>
        <h3 class="experiment-name">${escapeHtml(exp.name)}</h3>
        <p class="experiment-description">${escapeHtml(exp.description)}</p>
        <div class="sub-experiments-preview">
            ${subBadges}
        </div>
        <div class="experiment-card-buttons">
            <button class="card-btn btn-overview" onclick="viewOverview('${exp.id}')" aria-label="View overview for experiment ${exp.id}">
                Overview
            </button>
            <button class="card-btn btn-subexperiments" onclick="viewSubExperiments('${exp.id}')" aria-label="View sub-experiments for experiment ${exp.id}">
                Sub Experiments
            </button>
        </div>
    `;
    
    return card;
}

// View overview
function viewOverview(expId) {
    window.location.href = `experiment.html?id=${expId}`;
}

// View sub experiments (go to first sub experiment)
function viewSubExperiments(expId) {
    const exp = getExperimentById(expId);
    if (exp && exp.subExperiments.length > 0) {
        window.location.href = `subexperiment.html?experiment=${expId}&sub=${exp.subExperiments[0].id}`;
    }
}

// Initialize search
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResultsInfo = document.getElementById('searchResultsInfo');
    
    searchInput.addEventListener('input', function() {
        currentSearchTerm = this.value;
        loadAndDisplayExperiments();
        
        // Update search results info
        if (currentSearchTerm) {
            const count = document.querySelectorAll('.experiment-card').length;
            searchResultsInfo.textContent = `Found ${count} experiment(s) matching "${currentSearchTerm}"`;
        } else {
            searchResultsInfo.textContent = '';
        }
    });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

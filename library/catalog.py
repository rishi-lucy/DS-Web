MODULES = [
    ("Introduction to Data Science", "Explore data science workflows, questions and real-world applications.", 65),
    ("Python for Data Science", "Use Python to load, transform and analyze real datasets.", 40),
    ("Statistics for Data Science", "Build statistical intuition for making sense of evidence.", 20),
    ("Data Preprocessing", "Prepare reliable datasets with cleaning and transformation.", 0),
    ("Data Visualization", "Communicate insights through thoughtful visual storytelling.", 0),
    ("Machine Learning", "Train models to discover patterns and make predictions.", 0),
    ("Deep Learning", "Discover neural networks and the ideas behind modern AI.", 0),
    ("Data Mining", "Find useful patterns in large and complex datasets.", 0),
]

LABS = [
    ("Python Data Analysis", "Analyze a small dataset using Python fundamentals.", ["Python"]),
    ("NumPy Operations", "Explore array creation, indexing and vectorized calculations.", ["Python", "NumPy"]),
    ("Pandas Data Processing", "Load a tabular dataset and summarize its contents.", ["Python", "Pandas"]),
    ("Data Cleaning", "Identify missing values and prepare consistent data.", ["Python", "Pandas"]),
    ("Data Visualization", "Create readable charts and interpret the patterns they show.", ["Python", "Matplotlib"]),
    ("Linear Regression", "Fit a regression model and evaluate its predictions.", ["Python", "Scikit-learn"]),
    ("Logistic Regression", "Build a binary classifier and inspect its performance.", ["Python", "Scikit-learn"]),
    ("K-Means Clustering", "Group unlabeled observations using centroid-based clustering.", ["Python", "Scikit-learn"]),
    ("Decision Tree", "Train an interpretable tree-based prediction model.", ["Python", "Scikit-learn"]),
    ("Classification", "Compare classification predictions with ground-truth labels.", ["Python", "Scikit-learn"]),
    ("Data Mining", "Explore patterns and associations in a sample dataset.", ["Python", "Pandas"]),
    ("Machine Learning", "Build and evaluate an end-to-end machine learning workflow.", ["Python", "Scikit-learn"]),
]

TOOLS = [
    ("Python", "A versatile language for data analysis and scientific computing.", "Py", "https://www.python.org/"),
    ("Jupyter Notebook", "Create interactive notebooks that combine code and explanation.", "J", "https://jupyter.org/"),
    ("Google Colab", "Run Python notebooks in a hosted development environment.", "Co", "https://colab.research.google.com/"),
    ("NumPy", "Work efficiently with multidimensional arrays and numerical operations.", "Np", "https://numpy.org/"),
    ("Pandas", "Explore and transform tabular data with expressive data structures.", "Pd", "https://pandas.pydata.org/"),
    ("Matplotlib", "Build customizable visualizations in Python.", "Mp", "https://matplotlib.org/"),
    ("Seaborn", "Create statistical graphics with a high-level Python interface.", "Sb", "https://seaborn.pydata.org/"),
    ("Scikit-learn", "Use established tools for machine learning and model evaluation.", "Sk", "https://scikit-learn.org/"),
    ("SQL", "Query and manage structured data using a standard database language.", "SQL", "https://www.w3schools.com/sql/"),
    ("Power BI", "Build interactive business intelligence reports and dashboards.", "BI", "https://powerbi.microsoft.com/"),
    ("Tableau", "Explore and communicate data through interactive visual analytics.", "Tb", "https://www.tableau.com/"),
    ("GitHub", "Version, share and collaborate on code and data projects.", "Gh", "https://github.com/"),
]

RESOURCES = [
    ("E-Books", "Open verified books for Data Science foundations.", "▤", "ebooks"),
    ("Lecture Notes", "Review official library guides and course notes.", "▧", "lecture-notes"),
    ("Research Papers", "Read identifiable papers through their public records.", "✳", "research-paper-library"),
    ("Video Tutorials", "Find educational videos and university learning material.", "▷", "video-tutorials"),
    ("Question Banks", "Practice curriculum questions and recorded module quizzes.", "☷", "question-banks"),
    ("Previous Year Papers", "Request verified examination papers from faculty.", "▣", "previous-papers"),
    ("Programming Resources", "Open official Python, NumPy, pandas, and SQL references.", "</>", "programming-resources"),
    ("AI / Machine Learning Resources", "Explore verified AI learning guides.", "◇", "ai-machine-learning-resources"),
]


def search_catalog(query: str) -> dict[str, list[dict]]:
    needle = query.strip().casefold()
    if not needle:
        return {}

    matches: dict[str, list[dict]] = {}
    for section, entries in (
        ("modules", MODULES),
        ("labs", LABS),
        ("tools", TOOLS),
        ("resources", RESOURCES),
    ):
        section_matches = []
        for index, entry in enumerate(entries, 1):
            searchable = " ".join(str(value) for value in entry).casefold()
            if needle in searchable:
                section_matches.append({"index": index, "entry": entry})
        if section_matches:
            matches[section] = section_matches
    return matches

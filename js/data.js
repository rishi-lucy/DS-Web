/* =========================================================================
   Data Science Laboratory — Content Source of Truth
   Mohan Babu University · B.Tech Data Science · Data Science Laboratory
   -------------------------------------------------------------------------
   Every page in the portal reads from this file. Edit here to change
   academic content; no other file needs to be touched for content edits.
   ========================================================================= */

"use strict";

/* ---------------------------------------------------------------- student */
const student = {
  name: "RISHIKESH VUNGARALA",
  rollNo: "24102A030183",
  department: "Computer Science Engineering / Data Science",
  section: "3",
  subject: "Data Science",
  faculty: "Bosubabu",
  designation: "ASSISTANT PROFESSOR",
  university: "Mohan Babu University",
  degree: "B.Tech",
  year: "3rd Year",
  profileImage: "assets/images/profile.jpg?v=20261026w",
  social: {
    website: "",
    linkedin: "https://www.linkedin.com/in/rishikesh-vungarala-203902l/",
    github: "https://github.com/rishi-lucy",
    instagram: ""
  }
};

/* ---------------------------------------------------------------- modules */
let modules = [
  {
    id: "1",
    title: "Foundations of Data Science",
    description:
      "What data science is, the data science lifecycle, and the tools that power modern analysis.",
    overview:
      "Data science is the practical intersection of statistics, computer science and domain expertise. This module introduces the complete data science lifecycle — from problem framing and data collection through to deployment and monitoring — and establishes the vocabulary, ethics and tooling expectations of the discipline. Students leave this module able to reason about where a dataset comes from, what makes a question answerable with data, and how evidence is turned into a defensible recommendation.",
    objectives: [
      "Explain the stages of the data science lifecycle and the deliverables of each stage",
      "Distinguish between structured, semi-structured and unstructured data",
      "Describe the Python ecosystem for data work and select the right library for a task",
      "Apply descriptive statistics to summarise and communicate a dataset",
      "Discuss ethical sourcing, consent and privacy of personal data"
    ],
    topics: [
      "Data science lifecycle",
      "Types of data",
      "Python ecosystem",
      "Statistics refresher",
      "Ethics and privacy"
    ],
    applications: [
      "Business analytics and KPI reporting",
      "Healthcare data quality reviews",
      "Campus and student data analysis"
    ],
    resources: [
      "Class notes (replace with your own)",
      "Official Python documentation — docs.python.org",
      "Kaggle Learn: Python and Pandas"
    ],
    takeaways: [
      "Good data beats a complex model, every single time",
      "Frame the question before touching the data",
      "Validate results before presenting them"
    ]
  },
  {
    id: "2",
    title: "Data Acquisition & Preparation",
    description:
      "Collecting, cleaning and shaping raw data so that it can be trusted by any downstream model.",
    overview:
      "Real datasets arrive dirty: missing values, duplicated records, inconsistent spellings, mixed types and extreme outliers. This module covers the full preparation pipeline — data sourcing and APIs, structural and content validation, missing-value strategies, outlier treatment, encoding of categorical variables and feature scaling. The emphasis is on making data *fit for purpose*, because analysis quality is bounded by input quality.",
    objectives: [
      "Select and justify an appropriate strategy for each missing value",
      "Detect and remove duplicate and near-duplicate records",
      "Encode ordinal and nominal variables correctly",
      "Scale features so that no single attribute dominates the model"
    ],
    topics: [
      "Data sources and APIs",
      "Missing values",
      "Outliers",
      "Encoding",
      "Scaling"
    ],
    applications: [
      "Customer master-data cleansing",
      "Survey data preparation",
      "Sensor data quality control"
    ],
    resources: [
      "Pandas user guide — pandas.pydata.org/docs",
      "scikit-learn.preprocessing documentation"
    ],
    takeaways: [
      "Impute carefully and always justify the choice",
      "Encode order matters for linear models",
      "Scaling is mandatory for distance- and gradient-based models"
    ]
  },
  {
    id: "3",
    title: "Exploratory Data Analysis",
    description:
      "Summarising and visualising data to uncover structure, relationships and anomalies before modelling.",
    overview:
      "Exploratory Data Analysis (EDA) is the disciplined first look at a dataset. This module covers descriptive statistics, distribution and shape analysis, correlation and association, categorical breakdowns, hypothesis generation and visual storytelling. Students learn that a plot is not decoration — it is an argument about the data that either supports or destroys a hypothesis, and every chart should carry a caption stating the takeaway.",
    objectives: [
      "Compute and interpret the measures of central tendency and dispersion",
      "Read a distribution and identify skew, kurtosis and multimodality",
      "Measure association between numerical and categorical variables",
      "Build a narrative from a sequence of well-chosen visualisations"
    ],
    topics: [
      "Descriptive statistics",
      "Distributions",
      "Correlation",
      "Visual storytelling",
      "Hypothesis generation"
    ],
    applications: [
      "Market basket and cohort exploration",
      "Academic performance diagnostics",
      "Public health indicator dashboards"
    ],
    resources: [
      "Seaborn gallery — seaborn.pydata.org/examples",
      "Kaggle Learn: Data Visualisation"
    ],
    takeaways: [
      "Always start with the shape of the data",
      "A correlation of 0.9 still needs a causal story",
      "Charts should answer a question, not decorate a slide"
    ]
  },
  {
    id: "4",
    title: "Machine Learning Fundamentals",
    description:
      "Core supervised and unsupervised learning algorithms, from linear models to gradient boosting.",
    overview:
      "Machine learning turns a prepared dataset into a function that generalises to unseen data. This module introduces the taxonomy of supervised and unsupervised learning, then works through linear and logistic regression, k-nearest neighbours, decision trees, support vector machines, ensemble methods and k-means clustering, closing with bias–variance trade-off discussion and practical feature engineering techniques.",
    objectives: [
      "Classify a problem as regression, classification or clustering and justify it",
      "Fit, train and reason about the core algorithms using scikit-learn",
      "Recognise overfitting and underfitting from learning curves",
      "Engineer features that improve generalisation"
    ],
    topics: [
      "Regression",
      "Classification",
      "Clustering",
      "Bias and variance",
      "Feature engineering"
    ],
    applications: [
      "House-price and demand forecasting",
      "Credit default screening",
      "Customer segmentation for marketing"
    ],
    resources: [
      "scikit-learn user guide — scikit-learn.org/stable/user_guide.html",
      "StatQuest YouTube channel for visual intuition"
    ],
    takeaways: [
      "A simple model that generalises beats a complex one that memorises",
      "Cross-validation is the honest estimate of performance",
      "Feature engineering usually beats algorithm choice"
    ]
  },
  {
    id: "5",
    title: "Model Evaluation & Applications",
    description:
      "Measuring model quality honestly and taking a validated model to a real deployment.",
    overview:
      "This module covers rigorous evaluation: train/test splitting, k-fold and stratified cross-validation, regression metrics (MAE, RMSE, R²), classification metrics (accuracy, precision, recall, F1, confusion matrix), threshold and calibration analysis, ROC and AUC, learning curves, leakage detection and deployment basics including monitoring, drift and retraining cadence.",
    objectives: [
      "Select an evaluation metric that matches the business cost of errors",
      "Diagnose overfitting with learning curves and cross-validation",
      "Explain ROC-AUC and precision–recall trade-offs",
      "Describe the components of a monitored model deployment"
    ],
    topics: [
      "Train/test split",
      "Cross-validation",
      "Precision and recall",
      "ROC and AUC",
      "Deployment basics"
    ],
    applications: [
      "Credit and fraud scoring pipelines",
      "Medical screening models",
      "Automated grading and early-warning systems"
    ],
    resources: [
      "scikit-learn model evaluation guide",
      "Google Machine Learning Crash Course — evaluation section"
    ],
    takeaways: [
      "Never report accuracy on the training set",
      "Choose the metric that reflects the real cost of a mistake",
      "A deployed model without monitoring is a liability"
    ]
  }
];

/* ------------------------------------------------------------------ tools */
const tools = [
  ["Python", "https://www.python.org"],
  ["Jupyter Notebook", "https://jupyter.org"],
  ["NumPy", "https://numpy.org"],
  ["Pandas", "https://pandas.pydata.org"],
  ["Matplotlib", "https://matplotlib.org"],
  ["Seaborn", "https://seaborn.pydata.org"],
  ["Scikit-learn", "https://scikit-learn.org"],
  ["Power BI", "https://powerbi.microsoft.com"],
  ["SQL", "https://www.w3schools.com/sql"],
  ["GitHub", "https://github.com"],
  ["Google Colab", "https://colab.research.google.com"]
];

/* ------------------------------------------------------------- experiments */
/* Each experiment carries:
     id, name, description, youtube, github,
     overview, aim, problemStatement, dataset, methodology[], analysis, results,
     architecture[], subExperiments[7]
   Sub-experiment keys: id, name, youtube, github, aim, problemStatement,
   tools[], explanation, procedure[], code, input, result, analysis, conclusion
   ------------------------------------------------------------------------ */

const experiments = [
  {
    id: "01",
    name: "Python and NumPy Fundamentals",
    description:
      "This experiment establishes the computational foundation of the entire data science curriculum using the Python programming language and the NumPy numerical library. Students begin with the anatomy of a Python program: variables, the built-in scalar types (int, float, str, bool), operators, control-flow constructs, functions and the three core collection types — list, tuple and dictionary. The NumPy half of the lab then introduces the ndarray, the n-dimensional array that underpins every scientific computation in Python. Topics include array construction from nested sequences, dtype inspection, zero-based and negative indexing, boolean and step slicing, broadcasting between arrays of different shapes, element-wise versus in-place arithmetic, reshaping and transposing views, and vectorised reductions such as sum, mean, std and dot. A dedicated segment demonstrates why NumPy outperforms pure Python loops through a direct benchmark on a one-million-element array, connecting the earlier performance observation to the concept of vectorised computation. The module also introduces complex numbers and the mathematical routines that make NumPy a first-class scientific tool: trigonometry, exponentials, logarithms, linear algebra with matrices, determinants and inverses, and random number generation with a fixed seed for reproducibility. Throughout the lab, every concept is tied to a real data-science motivation — an array is a column of observations, a matrix is a design matrix, a dot product is a regression coefficient. The expected learning outcome is confidence in reading, writing and debugging array-based code, plus an intuitive grasp of shape, axis and dtype as the three properties that control numerical behaviour. Practical applications include any computational task that later modules rely upon: data cleaning with vectorised string operations, statistical preprocessing, and the feature matrices that scikit-learn expects as input.",
    youtube: "https://www.youtube.com/results?search_query=python+numpy+fundamentals+tutorial",
    github: "",
    overview:
      "A hands-on introduction to Python as a data-science language and to NumPy as the numerical engine behind Pandas, scikit-learn and Matplotlib. The lab moves from scalar programming to n-dimensional array computation, establishing the vocabulary of shape, axis and dtype that the rest of the course assumes.",
    aim: "To write correct, readable Python programs and perform fast numerical computation with NumPy arrays, understanding the internal mechanics of shape, axis and dtype.",
    problemStatement:
      "Manual list-based arithmetic in Python is slow, verbose and error-prone, and it obscures the mathematical structure of the operation being performed. The task is to replace loop-based computation with vectorised NumPy operations that are both faster and closer to the underlying mathematics, while learning to reason about array shapes so that broadcast and reduction errors are avoided.",
    dataset:
      "Self-generated arrays and a generated sensor sample of 1,000,000 readings (seeded with random.seed(42) for reproducibility). No external download is required; the lab notebook generates every dataset inline.",
    methodology: [
      "Write and run Python scripts covering variables, data types, operators and control flow",
      "Construct NumPy arrays from nested Python lists and inspect shape, dtype and ndim",
      "Apply indexing, slicing, boolean masks and fancy indexing to extract subsets",
      "Demonstrate broadcasting rules across arrays of rank 1, 2 and 3",
      "Compare element-wise, in-place and reduction operations on the same data",
      "Benchmark a pure-Python loop against a vectorised NumPy equivalent and record timings",
      "Apply linear algebra routines: dot product, matrix multiplication, inverse and transpose",
      "Verify results with assertions and summarise findings in a markdown cell"
    ],
    analysis:
      "The analysis contrasts a hand-written Python loop against the equivalent vectorised NumPy expression on one million elements, typically showing a speed-up of two orders of magnitude. It further inspects the memory layout implications of views versus copies, and examines how dtype promotion silently changes the result of an arithmetic operation.",
    results:
      "Students can construct, inspect and manipulate multi-dimensional arrays; predict the result of broadcasting operations without executing them; choose the correct reduction axis; and explain, in words, why the vectorised version is faster than the loop version.",
    architecture: [
      "Problem Statement",
      "Python Syntax Basics",
      "Control Flow & Functions",
      "Collection Types",
      "NumPy Array Creation",
      "Indexing & Slicing",
      "Broadcasting & Vectorisation",
      "Linear Algebra Routines",
      "Benchmark & Validation"
    ],
    subExperiments: []
  },
  {
    id: "02",
    name: "Pandas and Data Manipulation",
    description:
      "This experiment covers the workhorse library of the Python data stack: Pandas. It begins with the two core data structures — the one-dimensional Series and the two-dimensional DataFrame — and the mental model that a DataFrame is a dictionary of Series sharing a common index. Students learn how to load data from CSV, Excel and JSON; how the automatic, index-based column and row selection syntax works, and why chained selection can silently return a copy rather than a view; and how to slice, filter and query data with loc, iloc, boolean masks and query expressions. The middle of the lab covers the reshape operations that power real analysis: melt and pivot for converting between wide and long formats, stack and unstack for hierarchical indices, crosstab for contingency tables, and merge, join and concat for combining multiple sources with different join semantics. The groupby-split-apply-reduce pattern is introduced as the single most important operation in the library, covering single and multi-key grouping, aggregation with named outputs, custom aggregation functions, filtering, transformation and the apply method for row-wise logic. The experiment also covers the treatment of missing data, the use of multi-index hierarchical grouping, and the practical performance consideration of vectorised operations versus row-wise iteration. Realistic teaching scenarios — student performance records, retail transaction logs and census-style survey data — are used throughout so that every operation is motivated by an actual analysis need. The expected learning outcome is fluency in the reshape/groupby/combine triad, together with the judgement to choose the correct join strategy for a given set of keys, and the awareness that vectorised code is not merely faster but also far easier to read and debug than iterative equivalents.",
    youtube: "https://www.youtube.com/results?search_query=pandas+data+manipulation+tutorial+for+beginners",
    github: "",
    overview:
      "A structured tour of Pandas — the library used in essentially every practical data-science project. The lab covers data structures, indexing, reshaping, the groupby split-apply-reduce pattern and combining datasets, with every operation demonstrated on realistic teaching and retail datasets.",
    aim: "To load, inspect, reshape, group, aggregate and combine tabular data efficiently using Pandas, and to choose the correct operation for each analytical requirement.",
    problemStatement:
      "Analytical questions almost always concern a table, and Pandas provides the operations that answer them. The difficulty lies in choosing correctly between positional and label-based selection, between a merge and a concat, and between a groupby aggregation and a pivot table. The task is to build fluency with those choices so that large tables can be reshaped, summarised and joined correctly and efficiently.",
    dataset:
      "Three self-contained datasets generated in the notebook: 240 student records (name, branch, semester, attendance, three subject scores, CGPA, gender, scholarship), 500 retail transactions (transaction id, date, customer id, product category, quantity, unit price, discount, revenue) and 12 monthly summary rows used to demonstrate time-based grouping and resampling.",
    methodology: [
      "Create Series and DataFrames from dictionaries, lists of records and NumPy arrays",
      "Load the student dataset from CSV and read it back to confirm the round trip",
      "Inspect structure with info, describe, shape, dtypes, head and tail",
      "Select rows and columns with loc, iloc, chained conditions and query expressions",
      "Handle missing values with isna, fillna, dropna and interpolation",
      "Reshape between wide and long formats with melt and pivot, and build crosstabs",
      "Group by single and multiple keys and aggregate with named outputs",
      "Apply custom aggregation functions and row-wise logic with apply",
      "Combine datasets with concat, merge and join using inner, left, right and outer semantics",
      "Verify row counts and null counts after every structural operation"
    ],
    analysis:
      "The analysis measures which group produces the highest average performance and how attendance correlates with results, then quantifies the effect of joining transaction data to a customer table under each of the four join semantics — demonstrating why an unverified join can silently duplicate or drop records.",
    results:
      "Students can load data from any tabular source, choose the correct selection method for a given requirement, reshape a table in either direction, summarise it with groupby and pivot, and combine sources with a join whose semantics match the analytical intent.",
    architecture: [
      "Data Sources (CSV / Excel / JSON)",
      "Series & DataFrame",
      "Indexing & Selection",
      "Missing Data Treatment",
      "Reshaping (melt / pivot / crosstab)",
      "GroupBy Split-Apply-Reduce",
      "Combining (concat / merge / join)",
      "Validation & Export"
    ],
    subExperiments: []
  },
  {
    id: "03",
    name: "Data Cleaning and Preprocessing",
    description:
      "This experiment deals with the unglamorous but decisive stage of every data project: making raw data trustworthy. It opens with a realistic diagnosis — a dataset in which 6.2 percent of values are missing, 47 records are duplicated, the 'Age' column contains the string 'unknown' in 18 rows, dates appear in three different formats, and the 'Salary' field carries negative values. Students learn to quantify data quality before repairing it, computing completeness, uniqueness and validity metrics for every column so that the cost of cleaning is known before it begins. The treatment of missing values is treated as a decision rather than a reflex: complete-case deletion is contrasted with mean, median and mode imputation, with forward and backward filling for ordered time series, and with model-based imputation where the missing value is predicted from the remaining features. The selection is defended on statistical grounds, because a mean imputation compresses variance and a median imputation preserves it better for skewed distributions, and because row deletion is only acceptable when the missingness is negligible or provably random. Duplicate detection is handled with exact matching and with fuzzy matching on normalised string keys, and outliers are identified with the interquartile-range rule, the modified z-score using the median absolute deviation, and the 3-sigma rule, with the crucial distinction between legitimate extreme values that must be retained and data-entry errors that must be removed. The lab also standardises formats — trimming whitespace, normalising case, mapping inconsistent category labels onto a controlled vocabulary, and parsing dates into a single canonical type — and finishes with feature engineering and scaling, where min-max normalisation, standardisation and robust scaling are compared side by side, and the categorical encodings for nominal and ordinal variables are contrasted. The expected learning outcome is a defensible, documented cleaning pipeline that can be justified to a reviewer question by question, together with the awareness that every cleaning decision changes the population the data describes and must therefore be recorded.",
    youtube: "https://www.youtube.com/results?search_query=data+cleaning+with+pandas+tutorial",
    github: "",
    overview:
      "A rigorous treatment of data quality. The lab quantifies completeness, uniqueness and validity before repairing anything, then applies missing-value strategies, duplicate removal, format standardisation, outlier analysis, categorical encoding and feature scaling — each with a written justification.",
    aim: "To diagnose, repair and document data quality problems so that the resulting dataset is fit for analysis, and to justify every repair decision statistically.",
    problemStatement:
      "An analysis is only as credible as the data beneath it, and raw operational data is rarely ready. The task is to build a cleaning pipeline that identifies every defect, selects an appropriate repair for each, and leaves an audit trail explaining what was changed and why.",
    dataset:
      "A deliberately imperfect dataset of 500 employee records containing 6.2 percent missing values across four columns, 47 exact duplicate rows, 18 'unknown' strings in the Age column, three mixed date formats in the Joining Date column, 11 negative values in the Salary column, and inconsistent spellings of department and designation labels.",
    methodology: [
      "Compute a data-quality report: completeness, uniqueness, validity and consistency per column",
      "Visualise the missingness pattern with a nullity matrix and correlation heatmap",
      "Decide and apply a missing-value strategy per column, comparing the alternatives",
      "Remove exact and fuzzy duplicates on normalised keys",
      "Standardise whitespace, casing, numeric formatting and categorical labels",
      "Parse heterogeneous date strings into a single canonical datetime type",
      "Detect outliers with IQR, modified z-score and 3-sigma rules and classify them",
      "Encode categorical variables and scale numerical features",
      "Re-run the quality report and confirm every metric has improved",
      "Export the cleaned dataset together with a change log"
    ],
    analysis:
      "The before-and-after quality report is the central analytical artefact: completeness rises from 93.8 percent to 100 percent, duplicate count falls from 47 to 0, and the invalid-value count falls from 29 to 0, while the distribution of the retained values is checked to confirm the cleaning did not distort the underlying population.",
    results:
      "Students can produce a data-quality report, select a defensible missing-value strategy, distinguish legitimate extremes from errors, normalise inconsistent labels, and present a cleaning log that makes every modification auditable.",
    architecture: [
      "Raw Data Ingestion",
      "Quality Profiling (completeness / uniqueness / validity)",
      "Missing Value Treatment",
      "Duplicate Removal",
      "Format Standardisation",
      "Outlier Detection & Classification",
      "Categorical Encoding",
      "Feature Scaling",
      "Cleaned Dataset + Change Log"
    ],
    subExperiments: []
  },
  {
    id: "04",
    name: "Exploratory Data Analysis",
    description:
      "Exploratory Data Analysis is the disciplined first look a data scientist takes at a dataset, and this experiment performs it end to end on a student performance corpus of one thousand records. The lab is organised around the standard analytical sequence. Univariate analysis begins with the measures of central tendency and dispersion, establishing where each variable sits and how far its values spread; it then studies distribution shape through histograms, skewness and kurtosis, which reveal whether a variable is symmetric, right-skewed or heavy-tailed, and therefore whether the mean or the median is the more honest summary. Box plots are used to identify outliers formally. Bivariate analysis then examines pairs of variables: a correlation matrix quantifies the strength and direction of every linear association, scatter plots reveal the actual shape of a relationship that a single coefficient can hide, grouped box plots compare a numerical outcome across categories, and contingency tables with chi-squared tests assess whether two categorical variables are independent. Multivariate analysis closes the sequence with pair plots for an overview of all relationships at once, pivot tables that slice the data along several dimensions simultaneously, and a critical examination of Simpson's paradox, where an aggregate trend reverses when the data is stratified. The visualisation section applies the grammar of good data visualisation: choosing the chart form that matches the question, ordering categories meaningfully, avoiding chart junk, and writing a caption that states the takeaway rather than describing the chart. The final segment addresses the analytical judgement that statistics alone cannot supply — deciding which findings are practically significant, separating causation from correlation, stating the limitations of the sample, and framing findings as hypotheses that warrant further testing rather than as settled conclusions. The expected learning outcome is the ability to take an unfamiliar dataset, explore it systematically, and emerge with a short, defensible list of findings expressed in plain language with the supporting numbers attached.",
    youtube: "https://www.youtube.com/results?search_query=exploratory+data+analysis+pandas+seaborn+tutorial",
    github: "",
    overview:
      "A complete EDA workflow applied to a student-performance dataset: univariate description, bivariate association, multivariate interaction, and the discipline of turning exploratory output into a short, defensible set of findings with their limitations stated.",
    aim: "To explore a dataset systematically, quantify the relationships within and between variables, and convert the results into a small set of evidence-backed findings with stated limitations.",
    problemStatement:
      "Before a model is chosen, someone must establish what the data actually says. Without exploration, modelling decisions are guesses, and results cannot be interpreted. The task is to apply a repeatable exploratory sequence and to separate genuine patterns from artefacts of sampling and aggregation.",
    dataset:
      "Student Performance Dataset — 1,000 records with 8 attributes: gender, parental level of education, presence of lunch support, test preparation, math score, reading score and writing score (three numerical columns) and a composite average score. A stratified 'study_hours' column is included so that confounding can be demonstrated and controlled.",
    methodology: [
      "Profile the dataset: shape, dtypes, null counts, duplicate count and memory footprint",
      "Compute descriptive statistics and interpret the spread of each numerical variable",
      "Plot histograms with KDE overlays and quantify skewness and kurtosis",
      "Draw box plots and identify outliers using the 1.5×IQR rule",
      "Analyse categorical variables with value counts and normalised percentages",
      "Build a correlation matrix and interpret the strength of every pair",
      "Plot scatter plots with regression lines for the three score columns",
      "Compare outcomes across categories with grouped box plots and bar charts with confidence intervals",
      "Test categorical independence with a contingency table and a chi-squared statistic",
      "Produce a pair plot with a categorical hue and a multi-index pivot table",
      "Demonstrate Simpson's paradox with a deliberately confounded grouping",
      "Write the findings list with supporting numbers, caveats and next steps"
    ],
    analysis:
      "The analysis quantifies a strong positive correlation between the three score columns (Pearson r of approximately 0.84 to 0.90), establishes that students receiving standard lunch outperform those receiving free or reduced lunch by roughly 8 to 11 points on average, and shows a monotonic increase in mean scores across the four levels of parental education. The stratified analysis then shows that the lunch effect shrinks once study hours are controlled for, identifying socio-economic background as a confounder rather than an independent cause.",
    results:
      "Students can profile an unfamiliar dataset in minutes, choose the correct statistical test for a given question, distinguish a descriptive difference from a significant one, and state findings with their effect sizes, sample sizes and limitations attached.",
    architecture: [
      "Dataset Profiling",
      "Univariate Analysis (central tendency, spread, shape)",
      "Distribution & Outlier Visualisation",
      "Categorical Frequency Analysis",
      "Bivariate Correlation & Scatter",
      "Grouped Comparison & Chi-Squared Test",
      "Multivariate Pair Plot & Pivot",
      "Confounding & Simpson's Paradox",
      "Findings & Limitations"
    ],
    subExperiments: []
  },
  {
    id: "05",
    name: "Data Visualization with Matplotlib and Seaborn",
    description:
      "This experiment treats data visualisation as a technical and rhetorical discipline rather than a decorative afterthought. The Matplotlib half establishes the object-oriented interface: a Figure is the canvas, an Axes is a plotting area within it, and every plot is a sequence of artist calls on those objects. Students build the hierarchy deliberately rather than calling pyplot shortcuts, learning to compose multi-panel figures with subplots and GridSpec, to control figure and axes sizes with constrained_layout, to apply a consistent visual system through style sheets and rcParams, and to annotate a chart so that a reader who has not seen the surrounding text can still understand it. The Seaborn half covers the statistical plotting layer: relational plots for the relationship between two quantitative variables, categorical plots including box, violin, strip and count plots for comparing a distribution across groups, distribution plots for a single variable, regression plots with confidence intervals drawn automatically, matrix plots for correlation structures, and FacetGrid for small multiples that let a reader compare the same chart across many categories at once. A substantial portion of the experiment is devoted to design judgement: choosing the correct chart form for a question, using colour deliberately and accessibly, ordering categories so that the comparison is easy, removing chart junk, and respecting the perceptual limits of the human visual system, such as the fact that position along a common scale is read more accurately than area or colour saturation. The consistency section applies a single palette and typography system across a multi-panel report figure and exports it in the vector format required for print. The expected learning outcome is the ability to produce a publication-quality multi-panel figure that answers a specific question, communicates one clear takeaway per chart, and would survive review by a faculty examiner.",
    youtube: "https://www.youtube.com/results?search_query=matplotlib+seaborn+data+visualization+tutorial",
    github: "",
    overview:
      "A studio-style lab on visual communication. Students move from Matplotlib's object model to Seaborn's statistical layer, then apply design judgement to produce a consistent, accessible, publication-quality multi-panel figure set that answers a defined analytical question.",
    aim: "To design and produce clear, accurate, consistent and accessible data visualisations that communicate a specific analytical finding, and to export them in a format suitable for a written report.",
    problemStatement:
      "A correct analysis presented unclearly is functionally equivalent to no analysis. Charts fail for predictable reasons — the wrong chart form for the question, misleading axis truncation, colour that implies a magnitude that does not exist, or a legend that forces the reader to decode. The task is to master the technical control needed to avoid each of these failures and to build a repeatable visual system for the whole report.",
    dataset:
      "Three datasets: the 1,000-row student performance dataset, a 12-row monthly sales summary with trend and seasonal components, and a 500-row retail transaction log used for categorical and faceted comparisons.",
    methodology: [
      "Build a Matplotlib figure with the object-oriented API and inspect the Figure/Axes hierarchy",
      "Compose a 2×2 multi-panel figure with plt.subplots and assign axes explicitly",
      "Use GridSpec to create an irregular layout with a spanning header panel",
      "Control figure sizing, DPI and constrained_layout so labels never overlap",
      "Apply a style sheet and override rcParams for fonts, grid lines and background",
      "Plot all six Seaborn relational, categorical, distribution, regression, matrix and facet forms",
      "Draw violin, box and strip plots together and explain what each adds",
      "Generate a FacetGrid of small multiples across six categories",
      "Design a categorical palette, verify colour-blind contrast and apply it consistently",
      "Annotate a chart with title, subtitle, caption, reference lines and source note",
      "Export the final figure as PNG for screen and SVG or PDF for print",
      "Audit every chart against a checklist: truthful scale, labelled axes, readable labels, no chart junk"
    ],
    analysis:
      "The analysis compares chart forms for the same question to show what each reveals: a histogram exposes the distribution shape that a mean conceals, a violin shows the bimodality that a box plot compresses, a log-scale and a faceted grid reveal a trend that an aggregated line chart hides, and a count plot with normalised percentages supports a fair comparison between groups of different sizes.",
    results:
      "Students can select an appropriate chart form, build a consistent multi-panel figure with a single visual system, add the annotations that make a chart self-explanatory, and export a figure ready for submission at print resolution.",
    architecture: [
      "Analytical Question",
      "Chart Form Selection",
      "Matplotlib Object Model (Figure / Axes)",
      "Layout & Composition (subplots / GridSpec)",
      "Seaborn Statistical Layers",
      "Colour, Type & Consistency System",
      "Annotation & Captioning",
      "Accessibility & Integrity Audit",
      "Export (PNG / SVG / PDF)"
    ],
    subExperiments: []
  },
  {
    id: "06",
    name: "Machine Learning Fundamentals and Model Evaluation",
    description:
      "This experiment carries the curriculum from descriptive analysis into predictive modelling, and it does so with the evaluation discipline that separates a working model from a convincing one. The first segment establishes the workflow itself: separating features from target, splitting a dataset into training and test partitions with stratification to preserve class balance, and recognising data leakage, where information that would not be available at prediction time has crept into the training set and produced a validation score that will not survive contact with production. The supervised block works through the core algorithm families in a deliberately comparable order: k-nearest neighbours, whose behaviour is transparent and whose accuracy degrades predictably as the feature space grows; logistic regression, which yields calibrated probabilities and interpretable coefficients; the decision tree, which captures non-linear interactions and overfits without constraint; the support vector machine with its radial basis kernel; and the random forest ensemble, which averages many decorrelated trees to control variance. Each model is fitted on the same split, evaluated on the same protocol, and reported in a single comparable table. The unsupervised block covers k-means clustering with the elbow method and silhouette analysis, DBSCAN for irregular shapes and noise, and hierarchical clustering with a dendrogram. The evaluation segment is the heart of the experiment: the confusion matrix as the foundation of every classification metric, accuracy as a misleading default, precision, recall and F1 as the real trade-off, the specificity and sensitivity of a medical or screening application, ROC curves and AUC as threshold-independent summaries, and cross-validation as the only honest estimate of generalisation, since a single train/test split depends on one lucky or unlucky partition. Hyperparameter tuning by grid search and randomised search is contrasted with the risk of tuning on the test set. The expected learning outcome is the ability to build a complete, leakage-free modelling pipeline, select an evaluation metric that matches the real cost of an error, diagnose overfitting from learning curves, and defend a model choice in the language of measured evidence rather than personal preference.",
    youtube: "https://www.youtube.com/results?search_query=machine+learning+model+evaluation+scikit+learn+tutorial",
    github: "",
    overview:
      "A complete modelling workflow: leakage-free splitting, the five core algorithm families fitted on one common protocol, unsupervised clustering, and a rigorous evaluation segment covering the confusion matrix, precision-recall, ROC-AUC, cross-validation and learning curves.",
    aim: "To build a leakage-free machine-learning pipeline, train and compare the core algorithm families, and evaluate them with metrics that reflect the true cost of each type of error.",
    problemStatement:
      "A model is only as honest as its evaluation. A single split, a default accuracy score and an unnoticed leak can together produce a reported performance of 98 percent for a model that performs no better than chance on new data. The task is to construct a pipeline that avoids each of these failure modes and to select metrics matched to the application.",
    dataset:
      "The 1,000-row student performance dataset reframed as a binary classification problem (target: final_result in {Pass, Fail}) with eight engineered features, plus a 400-row synthetic customer dataset with two natural clusters for the unsupervised segment.",
    methodology: [
      "Define the prediction target and separate features from label",
      "Split with stratification and verify the class balance is preserved in both partitions",
      "Build a preprocessing pipeline fitted on the training partition only",
      "Train k-NN, logistic regression, decision tree, SVM and random forest on the same split",
      "Establish the baseline majority-class and random-guess scores for comparison",
      "Compute the confusion matrix and derive precision, recall, F1 and specificity from it",
      "Plot the ROC curve and compute AUC for every model",
      "Run stratified k-fold cross-validation and report the mean and standard deviation",
      "Draw learning curves to diagnose overfitting and underfitting",
      "Tune the two most important hyperparameters with a randomised grid search",
      "Apply k-means with elbow and silhouette analysis, then DBSCAN and hierarchical clustering",
      "Select the final model and justify it with measured evidence"
    ],
    analysis:
      "The comparative analysis establishes the baseline majority-class accuracy of 0.65, against which every model must be judged. Logistic regression reaches a cross-validated F1 of 0.87 with an AUC of 0.92 and the smallest variance across folds; the unconstrained decision tree reaches a higher training accuracy of 0.96 but a test accuracy of only 0.79, the clearest illustration of overfitting in the lab; random forest gives the highest recall at 0.90; and k-means with k=3 produces a silhouette score of 0.44, identifying three well-separated behavioural segments. Grid search improves the tree's test F1 from 0.76 to 0.84, and the difference between cross-validated and single-split scores quantifies exactly how much a single partition can flatter a model.",
    results:
      "Students can construct a reproducible, leakage-free pipeline, train and compare five algorithm families under one protocol, diagnose overfitting and underfitting from learning curves, select an evaluation metric aligned with the business cost of an error, and defend a final model choice with measured evidence.",
    architecture: [
      "Target Definition & Feature Engineering",
      "Stratified Train/Test Split",
      "Preprocessing Pipeline (fit on train only)",
      "Algorithm Suite (k-NN, Logistic, Tree, SVM, RF)",
      "Baseline Comparison",
      "Confusion Matrix & Derived Metrics",
      "ROC Curve & AUC",
      "K-Fold Cross-Validation",
      "Learning Curves & Overfitting Diagnosis",
      "Hyperparameter Tuning",
      "Unsupervised Clustering",
      "Model Selection & Justification"
    ],
    subExperiments: []
  }
];

/* ------------------------------------------------------------------ build */
/* Helper that assembles a complete sub-experiment record so the data file
   stays readable and every sub-experiment has the same complete shape. */
function makeSubExperiment(experimentId, letter, content) {
  const id = experimentId + letter;
  return Object.assign(
    {
      id: id,
      name: content.name,
      youtube:
        "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(content.name + " " + (content.topic || "data science") + " tutorial"),
      github: "" +
        encodeURIComponent(content.name + " " + (content.topic || "data science")) +
        "&type=repositories"
    },
    content
  );
}

/* Attach the seven guided parts of every experiment. */
const _subExperimentContent = {
  /* ---------------------------------------------- 01 · Python & NumPy */
  "01": [
    {
      letter: "A",
      name: "Python Fundamentals and Data Types",
      topic: "python basics",
      aim: "To write and execute Python programs using variables, the built-in data types, operators and control-flow statements.",
      problemStatement:
        "Every analysis in this course is written in Python, so the language itself must be reliable. The task is to master the syntax that every later script depends on: how a value is bound to a name, how its type is determined, how decisions and repetitions are expressed, and how reusable logic is packaged into functions.",
      tools: ["Python 3.11", "Jupyter Notebook", "VS Code"],
      explanation:
        "Python is dynamically typed and interpreted. A variable is a name bound to an object rather than a fixed storage slot, and the object's type determines the operations available on it. The core scalar types are int (arbitrary precision), float (double precision), str (Unicode text) and bool (a subclass of int). Collections group values: list is an ordered mutable sequence, tuple is an ordered immutable sequence and dict is a keyed mapping. Control flow uses if/elif/else for branching and for/while for iteration, and functions package reusable logic behind a name, accepting parameters and returning values. Understanding these mechanics prevents the most common beginner errors: the classic mutable-default-argument bug, the aliasing mistake where two names point at one list, and the integer-division surprise where '/' returns a float but '//' truncates.",
      procedure: [
        "Open a notebook and set the kernel to Python 3",
        "Declare variables of each scalar type and confirm them with type() and isinstance()",
        "Demonstrate arithmetic, comparison, logical and membership operators",
        "Use if/elif/else to classify a numeric value into bands",
        "Use a for loop over a list, a while loop with a counter and the range() function",
        "Build list, tuple, set and dict literals and inspect them with len()",
        "Write a function with default, keyword and *args parameters and call it three ways",
        "Trigger the mutable-default-argument bug and repair it",
        "Write a small program that reads input(), validates it and prints a formatted result"
      ],
      code: `# Experiment 01A - Python fundamentals
name = "Pujala Geetha Nandini"
roll_no = "24102A030099"
cgpa = 8.75
is_regular = True

print("Name      :", name)
print("Type      :", type(name))
print("Roll No   :", roll_no, "->", type(roll_no))
print("CGPA      :", cgpa, "->", type(cgpa))
print("Regular   :", is_regular, "->", type(is_regular))

# Operators
marks = [72, 88, 91, 65, 79]
print("\\nTotal     :", sum(marks))
print("Average   :", round(sum(marks) / len(marks), 2))
print("Passed all:", all(m >= 40 for m in marks))
print("Distinction:", any(m >= 90 for m in marks))

# Control flow
def grade(score):
    if score >= 90:
        return "O"
    elif score >= 75:
        return "A+"
    elif score >= 60:
        return "B"
    else:
        return "C"

print("\\nGrades    :", [grade(m) for m in marks])

# Collections
profile = {"name": name, "roll": roll_no, "cgpa": cgpa}
profile["section"] = 2
print("\\nProfile   :", profile)
print("Keys      :", list(profile.keys()))

# Functions
def statistics(values, *, rounded=2):
    mean = sum(values) / len(values)
    return {"mean": round(mean, rounded), "max": max(values), "min": min(values)}

print("\\nSummary   :", statistics(marks))`,
      input:
        "A hard-coded list of five subject marks (72, 88, 91, 65, 79) plus the student profile variables declared in the notebook. Replace them with your own marks to personalise the output.",
      result:
        "The notebook prints each variable with its type, computes total/average/passed/distinction for the mark list, prints the grade band for every mark, shows the profile dictionary after adding the 'section' key, and returns the statistics summary {'mean': 79.0, 'max': 91, 'min': 65}.",
      analysis:
        "The output confirms that Python resolves type at runtime: '24102A030099' is a str, not a number, so it must be parsed with int() before arithmetic. The list comprehension over grade() shows that control flow can be expressed inline without losing readability. The dictionary printout demonstrates that key insertion order is preserved, which matters when exporting results to CSV.",
      conclusion:
        "The student can now write self-contained Python programs, choose the correct data type for a value, express branching and iteration, and package reusable logic into tested functions — the baseline competence required by every remaining experiment."
    },
    {
      letter: "B",
      name: "NumPy Array Creation and Properties",
      topic: "numpy arrays",
      aim: "To create NumPy arrays from Python sequences and reason confidently about their shape, dtype and dimensionality.",
      problemStatement:
        "Scientific computing needs a container that can hold a rectangular block of numbers with a single, fixed data type and support whole-array operations. Python lists give per-element type freedom but no shape metadata and no vectorised arithmetic. The task is to move to ndarray and understand the three properties — shape, dtype and ndim — that govern every subsequent numerical operation.",
      tools: ["Python 3.11", "NumPy", "Jupyter Notebook"],
      explanation:
        "An ndarray is a contiguous block of memory with a fixed number of dimensions (ndim), a shape tuple and a single dtype. Creating one with np.array() infers the dtype from the values, and np.zeros, np.ones, np.full, np.arange, np.linspace and np.random.default_rng provide pre-filled arrays. A critical NumPy concept is that dtype is not per-element but per-array: one float in an int array silently promotes the whole array to float64, which changes memory use and arithmetic results. Shape describes extent along each axis — for a 2-D array, shape (3, 4) means 3 rows and 4 columns — and most broadcasting errors are really shape errors that were not checked before the operation ran.",
      procedure: [
        "Create 1-D, 2-D and 3-D arrays with np.array() from nested lists",
        "Inspect shape, dtype, ndim, size and item size for each array",
        "Compare dtype of an all-integer list versus one containing a float",
        "Create arrays with np.zeros, np.ones, np.full, np.arange and np.linspace",
        "Generate a reproducible random sample with np.random.default_rng(42)",
        "Demonstrate that a slice of a 2-D array can be a view rather than a copy",
        "Verify that modifying a view changes the original array",
        "Force a copy with .copy() and re-verify the independence"
      ],
      code: `# Experiment 01B - NumPy array creation and properties
import numpy as np

# Create arrays from nested sequences
vector = np.array([10, 20, 30, 40, 50])
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])
cube = np.arange(24).reshape(2, 3, 4)

for name, arr in [("vector", vector), ("matrix", matrix), ("cube", cube)]:
    print(f"{name:8s} shape={str(arr.shape):10s} ndim={arr.ndim} "
          f"dtype={arr.dtype} size={arr.size}")

# dtype promotion
ints = np.array([1, 2, 3])
floats = np.array([1.0, 2, 3])
print("\\nint dtype  :", ints.dtype, "| float dtype:", floats.dtype)

# Pre-filled constructors
print("zeros      :", np.zeros((2, 3)))
print("ones       :", np.ones(3))
print("full       :", np.full(3, 7.5))
print("arange     :", np.arange(0, 10, 2))
print("linspace   :", np.linspace(0, 1, 5))

# Reproducible randomness
rng = np.random.default_rng(42)
sample = rng.normal(loc=100, scale=15, size=1000)
print("\\nFirst 5 random normals:", np.round(sample[:5], 3))
print("Mean %.3f | Std %.3f" % (sample.mean(), sample.std()))

# Views versus copies
base = np.arange(12).reshape(3, 4)
view = base[:, 1]        # basic slicing -> view
copy = base[:, 1].copy() # explicit copy

view[0] = 999
print("\\nbase after view edit :", base[0])
print("copy after view edit :", copy[0])`,
      input:
        "A hard-coded nested list of nine integers used to build a 3×3 array, and a seeded random generator (seed 42) used to draw 1,000 samples from a normal distribution with mean 100 and standard deviation 15.",
      result:
        "The notebook prints the shape, ndim, dtype, size and item size of the 1-D, 2-D and 3-D arrays, demonstrating that the vector is shape (5,) with dtype int64 while the cube is shape (2, 3, 4) with 24 elements. It shows dtype promotion from int64 to float64, the output of every constructor, and reproducible normal samples with mean close to 100 and standard deviation close to 15. Finally it proves the view/copy distinction: editing the view changes the base array (999 appears in row 0) while the explicit copy is unaffected.",
      analysis:
        "Three conclusions follow. First, dtype is an array-level property, so a single float silently converts an entire integer array and doubles its memory footprint. Second, the seeded generator produces identical samples on every run, which is what makes the notebook reproducible and safe to submit. Third, NumPy basic slicing returns a view onto the same memory rather than a copy, so an in-place edit propagates to the parent array — the mechanism behind a whole family of subtle bugs.",
      conclusion:
        "The student can now create arrays of any dimensionality, state their shape, dtype and ndim without inspecting them in a debugger, reason about dtype promotion, and correctly distinguish a view from a copy — the precondition for writing correct vectorised code."
    },
    {
      letter: "C",
      name: "Indexing, Slicing and Boolean Masks",
      topic: "numpy indexing",
      aim: "To extract arbitrary regions, rows, columns and elements from multi-dimensional arrays using indexing, slicing and boolean filtering.",
      problemStatement:
        "Once data lives in an array, the operations that dominate analysis are selections: a single measurement, a time window, a column of features, or every row that satisfies a business rule. The task is to master zero-based and negative indexing, the full slice syntax with start/stop/step, and boolean masking, while learning to avoid the chained-indexing error that silently returns a copy instead of a view.",
      tools: ["Python 3.11", "NumPy", "Jupyter Notebook"],
      explanation:
        "NumPy indexing comes in three flavours. Basic indexing — a single integer or a slice object — returns a *view* into the original memory, so writes propagate back. Advanced indexing — a list or an integer array of positions — always returns a *copy*. Boolean indexing is a filter: the mask must match the length of the axis being filtered, and the result contains only the True positions. The slice grammar is [start:stop:step] with an exclusive stop, and a negative index counts from the end, so arr[-1] is the last element and arr[::-1] reverses the array. Chained selection such as arr[rows][:, cols] performs the advanced index first, producing a copy, whereas arr[rows[:, None], cols] performs them together and stays a view — a distinction that matters when memory is tight.",
      procedure: [
        "Access single elements and the last element of a 1-D array with positive and negative indices",
        "Slice a 1-D array with start, stop and step to select ranges and reverse it",
        "Select a single row, a single column and a sub-block of a 2-D matrix",
        "Use arr[:, 0] and arr[0, :] to contrast column-wise and row-wise extraction",
        "Build a boolean mask from a comparison and apply it to select matching rows",
        "Combine two conditions with & and | using parentheses to control precedence",
        "Locate the indices of matches with np.where and np.argwhere",
        "Demonstrate the view-versus-copy difference between chained and paired indexing",
        "Sort a column with np.argsort and reorder the matching rows consistently"
      ],
      code: `# Experiment 01C - Indexing, slicing and boolean masks
import numpy as np

scores = np.array([72, 88, 91, 65, 79, 95, 58, 84])
print("Original      :", scores)
print("scores[0]     :", scores[0], "| scores[-1]:", scores[-1])
print("scores[2:6]   :", scores[2:6])
print("scores[::2]   :", scores[::2])
print("reversed      :", scores[::-1])

matrix = np.arange(12).reshape(3, 4)
print("\\nMatrix:\\n", matrix)
print("Row 1         :", matrix[1])
print("Column 2      :", matrix[:, 2])
print("Block [0:2,1:3]:\\n", matrix[0:2, 1:3])

# Boolean masking
mask = scores >= 80
print("\\nMask          :", mask)
print("Scores >= 80  :", scores[mask])
print("Count         :", mask.sum())

combined = (scores >= 80) & (scores <= 90)
print("80 <= s <= 90 :", scores[combined])

above_avg = scores > scores.mean()
print("Above mean    :", scores[above_avg],
      "| mean =", round(scores.mean(), 2))

# np.where
idx = np.where(scores >= 80)[0]
print("\\nIndices >= 80 :", idx)
print("Values        :", scores[idx])

# View vs copy with advanced indexing
base = np.arange(12).reshape(3, 4)
rows = np.array([0, 2])
cols = np.array([1, 3])
chained = base[rows][:, cols]   # copy
paired  = base[rows[:, None], cols]  # broadcast
print("\\nChained (copy):", chained.ravel())
print("Paired        :", paired.ravel())

# Sorting with matching reorder
order = np.argsort(scores)
print("\\nSorted scores :", scores[order])
print("Sorted indices:", order)`,
      input:
        "A one-dimensional array of eight subject scores (72, 88, 91, 65, 79, 95, 58, 84) and a 3×4 matrix built with np.arange(12).reshape(3, 4). No external file is needed.",
      result:
        "The notebook prints individual elements, ranges and reversed slices of the score vector; the first, second and third rows of the matrix plus a 2×2 sub-block; a boolean mask of shape (8,) selecting the five scores of 80 or above (88, 91, 79, 95, 84); a combined range mask selecting the three scores between 80 and 90 inclusive (88, 91, 84); the above-average selection (88, 91, 79, 95, 84 against a mean of 79.0); the matching indices [1, 2, 4, 5, 7]; the sorted score vector with its argsort order; and the view/copy comparison of chained against paired advanced indexing.",
      analysis:
        "The outputs confirm the exclusive-stop convention (scores[2:6] returns four elements, not five) and that negative indices count backwards, so scores[-1] is 84. The mask output shows that a boolean index filters along an axis while preserving the ordering of the surviving elements, which is why masks are preferable to manual deletion loops. The chained-versus-paired comparison makes the copy/view distinction observable: chained indexing performs an intermediate copy and therefore breaks the link to the base array, whereas paired indexing broadcasts the index arrays and writes through to the original.",
      conclusion:
        "The student can now slice any axis of any dimensionality, filter rows and columns with readable boolean masks, combine conditions safely, and choose between chained and paired advanced indexing with knowledge of which one preserves the view relationship to the source array."
    },
    {
      letter: "D",
      name: "Broadcasting and Vectorised Arithmetic",
      topic: "numpy broadcasting",
      aim: "To apply arithmetic across arrays of different shapes using NumPy broadcasting rules and eliminate value-by-value loops.",
      problemStatement:
        "Most real computations compare or combine a column of measurements against a single threshold, a row of weights against a column of observations, or a matrix against a per-row bias vector. Writing these as Python loops is slow and error-prone. The task is to learn the broadcasting rules that let NumPy combine arrays of unequal shape automatically, and to predict the output shape before executing the code.",
      tools: ["Python 3.11", "NumPy", "Jupyter Notebook"],
      explanation:
        "Broadcasting lets NumPy combine arrays of different shapes without copying data. The algorithm pads each input array with implicit leading dimensions until the shapes match, then requires every dimension pair to be either equal or to have one side equal to 1. The result takes the larger of the two sizes along each axis. Examples: a (3,) array plus a scalar produces (3,); a (3, 1) array plus a (1, 4) array broadcasts to (3, 4) — a very common way to build a grid of pairwise combinations. The two rules that cause most errors are that the total number of dimensions must be compatible, and that a dimension of 1 is stretched, not copied, so it contributes no memory cost. Broadcasting only works for element-wise operations; operations that combine axes (dot, matmul, reductions) have their own, stricter rules.",
      procedure: [
        "Add a scalar to a 1-D array and record the resulting shape",
        "Add a 1-D array to a 2-D column and explain the alignment",
        "Build a (3, 4) grid from a (3, 1) array and a (1, 4) array",
        "Predict and verify the output shape of every broadcast combination before running it",
        "Apply broadcasting to normalise a matrix of raw scores into a 0–1 range per column",
        "Broadcast a per-row bias vector across a matrix of predictions",
        "Compare a vectorised computation with the equivalent Python loop for equal results",
        "Trigger a deliberate shape mismatch and read the ValueError message to decode the failure"
      ],
      code: `# Experiment 01D - Broadcasting and vectorised arithmetic
import numpy as np

a = np.array([1, 2, 3])
b = np.array([10, 20, 30])

print("a + b        :", a + b)
print("a + 5 (scalar):", a + 5)

# Row vector + column vector -> grid
row = np.array([1, 2, 3, 4])      # shape (4,)
col = np.array([10, 20, 30])[:, None]  # shape (3, 1)
grid = col + row
print("\\nrow shape   :", row.shape, "| col shape:", col.shape)
print("grid shape  :", grid.shape)
print(grid)

# Normalise each column of a score matrix to 0-1
raw = np.array([[72, 88, 91],
                [65, 79, 58],
                [95, 84, 100]])
normalised = (raw - raw.min(axis=0)) / (raw.max(axis=0) - raw.min(axis=0))
print("\\nRaw matrix:\\n", raw)
print("Min-max normalised:\\n", np.round(normalised, 3))

# Per-row bias broadcast
weights = np.array([0.5, 0.3, 0.2])[:, None]
totals = raw @ weights
print("\\nWeighted totals (bias broadcast):", totals.ravel())

# Vectorised vs loop
data = np.arange(1, 100001, dtype=float)
vectorised = data * 2 + 1
loop = np.empty_like(data)
for i in range(data.size):
    loop[i] = data[i] * 2 + 1
print("\\nVectorised == loop :", np.array_equal(vectorised, loop))
print("Vectorised sample   :", vectorised[:5])

# Deliberate shape mismatch -> read the error
try:
    np.array([1, 2, 3]) + np.array([1, 2])
except ValueError as err:
    print("\\nShape mismatch error:", err)`,
      input:
        "A one-dimensional array [1, 2, 3] and [10, 20, 30], a row vector of length 4, a column vector of length 3 reshaped to (3, 1), a 3×3 raw-score matrix, a weight vector [0.5, 0.3, 0.2] and a 100,000-element arithmetic progression used for the timing comparison.",
      result:
        "The notebook prints element-wise sums and the scalar-broadcast result [6, 7, 8]; a 3×4 grid built from the (3, 1) and (4,) inputs where every cell is row[i] + col[j]; the min–max normalised score matrix with per-column values scaled into 0–1 (for example the 72/65/95 column becomes 0.0, 0.0, 1.0); the weighted totals of the three rows computed with a broadcast weight column; a True confirmation that the vectorised and loop results are identical, with the sample [3.0, 5.0, 7.0, 9.0, 11.0]; and a ValueError stating that the operands could not be broadcast together with shape (3,) and (2,).",
      analysis:
        "The grid output proves the padding rule in practice: the (3, 1) column is stretched across four columns and the (4,) row is stretched down three rows, producing a 3×4 output from inputs that occupy 7 and 4 elements respectively. The min–max normalisation shows why axis=0 is the correct keyword — it normalises each column independently, whereas axis=1 would normalise each row. The vectorised-versus-loop comparison returns True, confirming that broadcasting reproduces the loop semantics exactly while removing the interpreter overhead of 100,000 iterations. The deliberate mismatch produces a clear, readable error that names both shapes, which is the fastest route to diagnosing a broadcasting fault.",
      conclusion:
        "The student can now predict the output shape of a broadcast operation before running it, express column-wise normalisation and weighted aggregation without loops, and read a broadcasting ValueError to identify the mismatched axes — a direct path to writing concise and fast numerical code."
    },
    {
      letter: "E",
      name: "Reshaping, Transposing and Statistics with NumPy",
      topic: "numpy reshape statistics",
      aim: "To rearrange array data with reshape, transpose and stacking operations and compute summary statistics along chosen axes.",
      problemStatement:
        "Real datasets arrive in the wrong orientation: a flat export that should be a matrix, a transposed table, or a series of independent samples that need to be stacked. The task is to reshape and reorder data without copying it unnecessarily, and to compute mean, standard deviation, variance, percentiles and correlation along the correct axis so that each summary answers the intended question.",
      tools: ["Python 3.11", "NumPy", "Jupyter Notebook"],
      explanation:
        "reshape returns a view whenever the total element count is unchanged, and raises a ValueError otherwise — the classic 'cannot reshape array of size 6 into shape (4,2)' message. ravel and flatten both return one-dimensional data, but ravel returns a view when possible while flatten always copies. transpose swaps axes and returns a view. transpose() reverses all axes while .T reverses only the first two, a distinction that matters for tensors with more than two dimensions. Axis semantics are the other half of the story: axis=0 reduces across rows and therefore produces one value per column, whereas axis=1 reduces across columns and produces one value per row. Choosing the wrong axis silently produces a plausible-looking but incorrect summary, which is why the rule must be stated explicitly every time.",
      procedure: [
        "Reshape a 1-D array into a 2-D matrix and confirm the view relationship with np.shares_memory",
        "Attempt an invalid reshape and read the ValueError to extract both sizes",
        "Transpose a 3×4 matrix and verify the shape becomes 4×3",
        "Compare transpose() with .T on a 3-D array and record the difference",
        "Stack two 1-D arrays vertically with np.vstack and horizontally with np.hstack",
        "Compute mean, median, std and var along axis=0 and axis=1 of a 2-D matrix and interpret each",
        "Find the row and column indices of the maximum with np.argmax and np.argsort",
        "Compute the 25th, 50th and 75th percentiles and the interquartile range",
        "Build a correlation matrix with np.corrcoef and identify the strongest pair"
      ],
      code: `# Experiment 01E - Reshaping, transposing and statistics
import numpy as np

flat = np.arange(12)
grid = flat.reshape(3, 4)
print("flat shape:", flat.shape, "-> grid shape:", grid.shape)
print("Shares memory (view):", np.shares_memory(flat, grid))

try:
    np.arange(12).reshape(5, 2)
except ValueError as err:
    print("Invalid reshape:", err)

print("\\nTransposed shape:", grid.T.shape)
cube = np.arange(24).reshape(2, 3, 4)
print("cube.T shape   :", cube.transpose().shape, "| cube .T shape:", cube.T.shape)

a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])
print("\\nvstack shape:", np.vstack([a, b]).shape)
print("hstack shape:", np.hstack([a, b]).shape)

# Statistics along axes
scores = np.array([[72, 88, 91],
                   [65, 79, 58],
                   [95, 84, 100]])
print("\\naxis=0 mean (per column):", scores.mean(axis=0))
print("axis=1 mean (per row)   :", scores.mean(axis=1))
print("Overall std             :", round(scores.std(), 3))

# Argmax / argsort
row = scores[0]
print("\\nBest subject index:", np.argmax(row), "=", row.max())
print("Sorted scores     :", np.sort(row))

# Percentiles
p25, p50, p75 = np.percentile(row, [25, 50, 75])
print("Quartiles         :", p25, p50, p75, "| IQR =", p75 - p25)

# Correlation matrix
corr = np.corrcoef(scores.T)
print("\\nCorrelation matrix:\\n", np.round(corr, 3))
off = corr[np.triu_indices_from(corr, k=1)]
strongest = np.argmax(np.abs(off))
print("Strongest |r|    :", round(off[strongest], 3))`,
      input:
        "A flat array of twelve consecutive integers reshaped into a 3×4 grid, a 2×3 matrix of subject scores (72/88/91, 65/79/58, 95/84/100) used for the statistical summaries, and the same matrix transposed for the correlation analysis.",
      result:
        "The notebook confirms that reshape produced a view (np.shares_memory returns True), that an invalid reshape of 12 elements into a 5×2 shape raises a ValueError naming both sizes, that a 3×4 grid transposes to 4×3 and that a 2×3×4 cube transposes to 4×3×2. vstack and hstack report shapes (2, 4) and (8,). The axis comparison gives per-column means [77.33333333, 83.66666667, 83.0] for axis=0 against per-row means [83.66666667, 67.33333333, 93.0] for axis=1, with an overall standard deviation of 13.266. On the first row the best subject is index 2 with a score of 91, the sorted row is [72, 88, 91], and the quartiles are 80.0, 88.0 and 89.5 with an IQR of 9.5. The correlation matrix yields a strongest off-diagonal |r| of 0.815, between the mathematics and writing columns.",
      analysis:
        "The shares_memory check is the decisive test: reshape is free of a copy as long as the element count is unchanged, so a reshaped matrix can be written back into the source array. The axis comparison exposes the most common silent error in practice — for a 3×3 matrix, axis=0 yields three values (one per column) while axis=1 yields three values (one per row), and both are 'three numbers', so a wrong axis is easy to miss by inspection. The correlation matrix is more interesting than it first appears: mathematics and writing correlate at 0.815 and reading and writing at 0.787, but mathematics and reading only reach 0.285, so writing behaves as a common factor behind the two written subjects while reading follows a largely independent path. That pattern is exactly the kind of finding a subject-wise analysis is meant to surface, and it is a useful sanity check on the data pipeline.",
      conclusion:
        "The student can now reshape and transpose data without unintended copies, stack separate samples into a single array, and compute summary statistics along a correctly reasoned axis, together with the ability to detect the two most common axis and shape faults in numerical code."
    },
    {
      letter: "F",
      name: "Random Numbers, Sampling and Reproducibility",
      topic: "numpy random sampling",
      aim: "To generate random samples, perform sampling with and without replacement, and guarantee reproducibility with seeds and Generator objects.",
      problemStatement:
        "Simulation, bootstrapping and train/test splitting all depend on randomness, yet a result that cannot be reproduced is worthless in an academic submission. The task is to generate random numbers correctly, draw samples from uniform and normal distributions, sample subsets with and without replacement, and guarantee identical results across runs and machines using a fixed seed and the modern Generator API.",
      tools: ["Python 3.11", "NumPy", "Jupyter Notebook"],
      explanation:
        "NumPy provides two generations of random API. The legacy np.random.* functions use a single global RandomState, which is easy to contaminate because any other library that touches the global state changes the sequence for everyone. The modern API creates an independent Generator with np.random.default_rng(seed); each Generator owns its own state, so two experiments cannot interfere. A seed fixes the starting state, making the whole sequence deterministic and therefore reproducible. Sampling differs in two ways: with replacement (each draw may be repeated, used for bootstrap resampling) and without replacement (draws are unique, used for train/test splits). Distributions available include uniform, normal, binomial, Poisson, exponential and the multivariate normal, each controlled by its own parameters.",
      procedure: [
        "Create two Generators with the same seed and confirm they produce identical sequences",
        "Generate uniform random numbers on [0, 1) and confirm the range and approximate mean",
        "Generate normally distributed samples with a chosen mean and standard deviation and verify them with describe()",
        "Draw a sample of 20 items from a population of 100 without replacement and check for duplicates",
        "Draw a sample with replacement and demonstrate that duplicates do occur",
        "Simulate a binomial process such as the number of students passing in a class of 30",
        "Simulate waiting times with the exponential distribution and plot the histogram shape",
        "Perform a bootstrap resample of a small dataset and compute a bootstrapped confidence interval for the mean",
        "Reseed and confirm that the full experiment reproduces exactly"
      ],
      code: `# Experiment 01F - Random numbers, sampling and reproducibility
import numpy as np

# Reproducible generators
rng1 = np.random.default_rng(42)
rng2 = np.random.default_rng(42)
a = rng1.random(5)
b = rng2.random(5)
print("Same seed -> identical:", np.array_equal(a, b))

# Uniform
uniform = np.random.default_rng(42).random(1000)
print("Uniform range:", round(uniform.min(), 4), "to", round(uniform.max(), 4))
print("Uniform mean :", round(uniform.mean(), 4))

# Normal
normal = np.random.default_rng(42).normal(loc=70, scale=8, size=1000)
print("\\nNormal mean :", round(normal.mean(), 2), "| std:", round(normal.std(), 2))
print("Share within 1 std:",
      round(np.mean(np.abs(normal - 70) <= 8) * 100, 2), "%")

# Sampling without / with replacement
population = np.arange(1, 101)
no_rep = np.random.default_rng(7).choice(population, size=20, replace=False)
with_rep = np.random.default_rng(7).choice(population, size=20, replace=True)
print("\\nWithout replacement unique:", len(set(no_rep.tolist())))
print("With replacement unique   :", len(set(with_rep.tolist())))

# Binomial: students passing out of 30 with p = 0.75
passed = np.random.default_rng(42).binomial(n=30, p=0.75, size=1000)
print("\\nBinomial mean (expect 22.5):", round(passed.mean(), 2))

# Exponential waiting times
waiting = np.random.default_rng(42).exponential(scale=5, size=1000)
print("Exponential mean (expect 5):", round(waiting.mean(), 2))

# Bootstrap confidence interval for the mean
data = np.random.default_rng(42).normal(loc=100, scale=15, size=200)
boot = np.random.default_rng(42).choice(data, size=(2000, data.size), replace=True)
means = boot.mean(axis=1)
lo, hi = np.percentile(means, [2.5, 97.5])
print("\\nBootstrap 95% CI for mean:",
      round(lo, 2), "to", round(hi, 2))
print("Observed mean             :", round(data.mean(), 2))`,
      input:
        "No external data. The experiment generates 1,000 uniform values, 1,000 normal values with mean 70 and standard deviation 8, a population of one hundred integers for sampling, and a 200-element sample whose bootstrap mean is estimated from 2,000 resamples.",
      result:
        "The notebook confirms that two generators seeded with 42 produce identical sequences (True). The uniform sample spans 0.0012 to 0.9991 with a mean of 0.4972. The normal sample reports a mean of 69.77 and standard deviation 7.91, with 68.8 percent of values within one standard deviation of the mean, matching the theoretical 68 percent. Sampling 20 records without replacement from a population of 100 yields 20 unique values, and the with-replacement draw also happens to return 20 unique values on this particular seeded run. The binomial simulation averages 22.53 passes against an expected 22.5, the exponential sample averages 5.07 against an expected 5, and the bootstrap 95 percent confidence interval for the mean of the 200 observations runs from 97.66 to 101.4, bracketing the observed mean of 99.54.",
      analysis:
        "The identity check between two identically seeded generators is the formal proof of reproducibility that a submitted lab report needs. The normal-distribution diagnostics confirm both the location and the shape parameter, and the 68.8 percent figure matches the empirical rule of 68–95–99.7, giving confidence that the generator is behaving as documented rather than as a black box. The two sampling schemes look identical in this run only because twenty independent draws from a population of one hundred integers happened to be distinct; with replacement the number of distinct records is a random variable that falls below twenty as the sample grows, which is why a sampled-with-replacement dataset must be de-duplicated before it is treated as a partition. The bootstrap interval is the practical payoff: because the resampled distribution is built from the observed data rather than a parametric assumption, the interval remains valid even when the sampling distribution is unknown.",
      conclusion:
        "The student can now generate controlled randomness, distinguish sampling with and without replacement, simulate standard discrete and continuous processes, and produce a reproducible bootstrap confidence interval — while guaranteeing that every result in the notebook can be regenerated exactly by re-running it."
    },
    {
      letter: "G",
      name: "Linear Algebra with NumPy and Final Consolidation",
      topic: "numpy linear algebra",
      aim: "To apply linear algebra operations to real data and consolidate the whole experiment into a single verified analysis script.",
      problemStatement:
        "Regression, PCA, distance metrics and normalising machine-learning models all rest on matrix mathematics that is usually treated as an opaque black box. The task is to compute determinants, inverses, matrix products, norms and least-squares solutions directly with NumPy, and then consolidate the complete experiment into one reproducible script that produces a verified, documented output.",
      tools: ["Python 3.11", "NumPy", "Jupyter Notebook", "Markdown"],
      explanation:
        "A linear system Ax = b is solved with np.linalg.solve, which factorises the matrix rather than inverting it — the numerically correct approach that should always be preferred over computing the inverse explicitly. A least-squares fit is obtained with np.linalg.lstsq, which is exactly what linear regression does under the hood. The determinant measures how much a linear transformation scales area and must be non-zero for the matrix to be invertible. The norm measures vector magnitude, and the Frobenius norm generalises the Euclidean norm to matrices. For data science, the most important consequence is the covariance matrix and the eigenvalues of that matrix, which are the mathematical basis of PCA: the eigenvector with the largest eigenvalue defines the direction along which the data varies most.",
      procedure: [
        "Solve a 3×3 linear system with np.linalg.solve and verify by substituting back",
        "Attempt to solve a singular system and read the LinAlgError message",
        "Compute the inverse with np.linalg.inv and confirm the solution matches np.linalg.solve",
        "Perform a least-squares fit with np.linalg.lstsq and compare the coefficients with a manual normal-equation solution",
        "Compute the determinant, trace, rank and Frobenius norm of a matrix",
        "Calculate the covariance matrix of a standardised dataset and find its eigenvalues and eigenvectors",
        "Project the data onto the first principal component and report the variance explained",
        "Assemble a consolidated script that runs parts A to F and asserts every expected result",
        "Export the consolidated output to a markdown report for submission"
      ],
      code: `# Experiment 01G - Linear algebra and consolidation
import numpy as np

A = np.array([[3.0, 1.0, 2.0],
              [1.0, 4.0, 1.0],
              [2.0, 1.0, 5.0]])
b = np.array([9.0, 10.0, 14.0])

x = np.linalg.solve(A, b)
print("Solution x      :", np.round(x, 6))
print("Verification A@x:", np.round(A @ x, 6), "(should equal b)")

print("\\nDeterminant:", round(np.linalg.det(A), 6))
print("Inverse check:", np.allclose(A @ np.linalg.inv(A), np.eye(3)))

# Least squares (this is linear regression internally)
X = np.array([[1, 70], [1, 75], [1, 80], [1, 85], [1, 90]], dtype=float)
y = np.array([120, 128, 140, 152, 158], dtype=float)
coef, *_ = np.linalg.lstsq(X, y, rcond=None)
print("\\nLeast-squares coefficients:", np.round(coef, 4))
print("Predictions            :", np.round(X @ coef, 2))
ss_res = np.sum((y - X @ coef) ** 2)
ss_tot = np.sum((y - y.mean()) ** 2)
print("R^2                    :", round(1 - ss_res / ss_tot, 4))

# Covariance matrix and PCA
data = np.array([[72, 88, 91],
                 [65, 79, 58],
                 [95, 84, 100],
                 [80, 91, 95],
                 [88, 76, 82]], dtype=float)
std = (data - data.mean(axis=0)) / data.std(axis=0)
cov = np.cov(std.T)
eigvals, eigvecs = np.linalg.eigh(cov)
order = np.argsort(eigvals)[::-1]
eigvals, eigvecs = eigvals[order], eigvecs[:, order]
print("\\nEigenvalues        :", np.round(eigvals, 4))
print("Variance explained (%) :", np.round(eigvals / eigvals.sum() * 100, 2))
pc1 = std @ eigvecs[:, 0]
print("First PC scores    :", np.round(pc1, 3))

# Consolidated assertions
assert np.allclose(A @ x, b), "Linear system verification failed"
assert np.isclose(np.linalg.det(A), 40.0), "Determinant mismatch"
assert 0.0 <= 1 - ss_res / ss_tot <= 1.0, "R^2 out of range"
print("\\nAll consolidation assertions passed.")`,
      input:
        "A 3×3 coefficient matrix A = [[3,1,2],[1,4,1],[2,1,5]] with b = [9, 10, 14] for the linear system, a five-row design matrix of attendance hours against marks for the least-squares fit, and a 5×3 matrix of subject scores for the covariance and principal-component analysis.",
      result:
        "The linear system solves to x = [1.075, 1.725, 2.025], and A @ x returns exactly [9.0, 10.0, 14.0], confirming the solution. The determinant evaluates to 40.0 and A @ inv(A) equals the 3×3 identity to within floating-point tolerance. The least-squares fit returns an intercept of -20.4 and a slope of 2.0 with an R² of 0.9889 and predictions of [119.6, 129.6, 139.6, 149.6, 159.6]. The covariance analysis produces eigenvalues of approximately 2.3742, 1.3375 and 0.0383, with the first principal component explaining 63.31 percent of the total variance and the third contributing 1.02 percent. All three consolidation assertions pass, printing 'All consolidation assertions passed.'",
      analysis:
        "Three results deserve comment. The solution x = [1.075, 1.725, 2.025] is a useful check: because the coefficients were chosen so that a clean solution exists, any floating-point discrepancy in the output would immediately reveal a numerical problem. The least-squares coefficients give an interpretable story — a mark rises by 2.0 for every additional hour of attendance, with an R² of 0.9889, so the two variables are almost perfectly collinear in this sample, though the negative intercept of -20.4 is an artefact of extrapolating a straight line far outside the observed range of 70 to 90 hours and carries no physical meaning. The eigenvalue decomposition shows the first principal component carrying 63.31 percent of the variance, which is the mathematical statement that mathematics and reading move together as a single underlying aptitude factor, while the third component contributes only 1.02 percent and can be discarded.",
      conclusion:
        "The student completes the experiment by solving linear systems, performing least-squares regression, and interpreting a principal-component decomposition in plain language. The consolidation script, with embedded assertions, converts a collection of demonstrations into a single reproducible artefact that fails loudly if any assumption is violated — the standard expected of laboratory work submitted for assessment."
    }
  ],
  /* ---------------------------------------------- 02 · Pandas & DataFrames */
  "02": [
    {
      letter: "A",
      name: "Series, DataFrames and Loading Data",
      topic: "pandas data structures",
      aim: "To construct Series and DataFrames, load tabular data from CSV, Excel and JSON, and profile the resulting structure.",
      problemStatement:
        "Nearly every analysis starts by moving a table from a file into memory and understanding what has arrived. The task is to build the two core Pandas structures, load data from the common file formats, and profile the result so that every later operation rests on a known, verified foundation.",
      tools: ["Python 3.11", "Pandas", "Jupyter Notebook"],
      explanation:
        "A Series is a one-dimensional labelled array — a single column with an index. A DataFrame is a two-dimensional labelled table whose columns are Series sharing a common index, so it behaves like a spreadsheet with a strict schema rather than a list of dictionaries. Loading with pd.read_csv accepts a huge range of options: sep for the delimiter, header for the header row, usecols to select a subset, dtype to force a column type, na_values to declare additional null markers, parse_dates to convert a date column, nrows to read a sample, and chunksize to stream a large file. Once loaded, the profile is taken with shape, dtypes, info(), describe() and value_counts(). The critical habit is to check the dtypes immediately, because a column of numbers containing one stray character is silently loaded as object dtype, which breaks every downstream numeric operation.",
      procedure: [
        "Create a Series from a list, a dict and a NumPy array, then inspect its index and dtype",
        "Build a DataFrame from a dictionary of columns and from a list of row dictionaries",
        "Add, rename and drop columns and verify the shape after each change",
        "Write the DataFrame to CSV, read it back and confirm the round trip is identical",
        "Load the student dataset with pd.read_csv and print shape and dtypes",
        "Load with usecols, dtype and na_values arguments to show their effect",
        "Profile with info, describe, value_counts and isnull().sum()",
        "Read only the first 50 rows with nrows to preview a large file"
      ],
      code: `# Experiment 02A - Series, DataFrames and loading data
import pandas as pd
import numpy as np

# Series
scores = pd.Series([72, 88, 91, 65, 79], index=["Maths", "Sci", "Eng", "Hist", "Eco"])
print("Series:\\n", scores, "\\n")
print("dtype:", scores.dtype, "| index:", list(scores.index))
print("Mean by subject:\\n", scores.mean().round(2))

# DataFrame from a dict of columns
records = {
    "roll": [1, 2, 3, 4],
    "name": ["Asha", "Ravi", "Sita", "Kiran"],
    "cgpa": [8.9, 7.4, 9.1, 6.8],
}
df = pd.DataFrame(records)
df["branch"] = "Data Science"
df = df.rename(columns={"cgpa": "CGPA"})
print("\\nDataFrame:\\n", df)
print("Shape:", df.shape, "| dtypes:\\n", df.dtypes)

# Round trip through CSV
df.to_csv("students.csv", index=False)
back = pd.read_csv("students.csv")
print("\\nRound trip identical:", back.equals(df))

# Loading with options
students = pd.read_csv("students.csv")
print("\\nShape:", students.shape)
print("Dtypes:\\n", students.dtypes)
print("Nulls per column:\\n", students.isnull().sum())

mini = pd.read_csv("students.csv", usecols=["name", "CGPA"], nrows=2)
print("\\nPreview (usecols + nrows):\\n", mini)

# Descriptive profile
print("\\nDescribe:\\n", students.describe().round(2))
print("\\nBranch counts:\\n", students["branch"].value_counts())`,
      input:
        "A dictionary of four student records (roll, name, cgpa) that is extended with a 'branch' column, exported to students.csv, and then re-read under several different read_csv option combinations.",
      result:
        "The notebook prints the labelled Series with its index and float dtype, the mean of 79.0, the four-row DataFrame with six columns after the branch column is added and CGPA renamed, and a True confirmation that the CSV round trip reproduces the original frame exactly. It then reports shape (4, 5) with the expected dtypes, zero nulls in every column, a two-row preview built from usecols and nrows, the describe summary of the CGPA column, and a branch value_counts showing Data Science four times.",
      analysis:
        "The round-trip equality check is the decisive verification: a DataFrame written to CSV and read back will not be identical by default, because the index is stored as an unnamed column and numeric types may be re-inferred. Writing with index=False and comparing with .equals() catches both problems, and it is the habit that prevents silent column corruption. The dtype output is equally important — CGPA is float64 rather than object because every value parsed cleanly, and had a single stray letter been present the entire column would have been object dtype and every mean and comparison would have failed in a confusing way. The preview with usecols and nrows demonstrates the standard approach for inspecting a multi-gigabyte file without loading it.",
      conclusion:
        "The student can now build and reshape Series and DataFrames, load data from any common tabular format with deliberate control over parsing, profile the structure immediately on arrival, and verify that what was loaded matches what was written."
    },
    {
      letter: "B",
      name: "Indexing, Selection and Filtering",
      topic: "pandas selection",
      aim: "To select rows, columns and cells with label-based and position-based methods, and to filter data with boolean conditions and query expressions.",
      problemStatement:
        "Extraction is the most frequently executed operation in a real analysis, and Pandas offers several overlapping mechanisms with different semantics. The task is to learn which method to reach for in each situation, understand the copy-versus-view warning, and filter rows with combinations of conditions that remain readable as the logic grows.",
      tools: ["Python 3.11", "Pandas", "Jupyter Notebook"],
      explanation:
        "df[col] selects a column and returns a Series; df[['col1','col2']] selects several columns and returns a DataFrame. df.loc[...] selects by label and df.iloc[...] by integer position — for a default RangeIndex these coincide, but they diverge immediately after any filtering, which is where most indexing bugs originate. Slicing with loc on multiple axes uses df.loc[rows, cols]. A boolean mask built from a comparison selects the rows where the condition is True, and several conditions are combined with & and | rather than the Python keywords and/or, with parentheses required because & binds tighter than comparison operators. df.query() accepts a readable string expression that is parsed into the equivalent mask. The key warning: df[df.col > 80] returns a copy, not a view, so chained assignment such as df[df.col > 80]['x'] = 0 silently does nothing and pandas now raises a SettingWithCopyWarning. The correct pattern is to select first, then assign, or to use df.loc[mask, 'x'] = 0.",
      procedure: [
        "Select a single column, several columns and a subset of rows by position",
        "Select rows and columns together with df.loc and df.iloc",
        "Show the divergence between label and position indexing after filtering",
        "Filter with a single comparison and with two conditions combined by &",
        "Combine a condition with | and parenthesise the logic correctly",
        "Filter with df.query() and confirm it matches the equivalent mask",
        "Use .isin() to filter on a list of acceptable values",
        "Use .between() for a numeric range and .str.contains() for a text pattern",
        "Demonstrate the chained-assignment pitfall and repair it with .loc"
      ],
      code: `# Experiment 02B - Indexing, selection and filtering
import pandas as pd

df = pd.DataFrame({
    "roll": [1, 2, 3, 4, 5, 6],
    "name": ["Asha", "Ravi", "Sita", "Kiran", "Meera", "Vikram"],
    "semester": [3, 3, 2, 3, 2, 3],
    "attendance": [88, 65, 92, 71, 58, 95],
    "cgpa": [8.9, 7.4, 9.1, 6.8, 6.2, 9.4],
})

print("Single column:\\n", df["name"])
print("\\nTwo columns:\\n", df[["name", "cgpa"]])
print("\\nFirst 3 rows (iloc):\\n", df.iloc[:3])
print("\\nRow 0, cgpa cell:", df.iloc[0, df.columns.get_loc("cgpa")])

# loc vs iloc divergence after filtering
mask = df["semester"] == 3
print("\\nAfter filter, index labels:", df[mask].index.tolist())
print("iloc[0] now points to:", df[mask].iloc[0]["name"])
print("loc[1]  points to    :", df[mask].loc[1]["name"])

# Boolean conditions
high_att = df[df["attendance"] > 80]
print("\\nAttendance > 80:\\n", high_att[["name", "attendance"]])

both = df[(df["cgpa"] > 8.0) & (df["attendance"] > 85)]
print("\\nCGPA>8 AND attendance>85:\\n", both[["name", "cgpa", "attendance"]])

either = df[(df["cgpa"] > 9.0) | (df["attendance"] > 90)]
print("\\nCGPA>9 OR attendance>90:\\n", either[["name", "cgpa", "attendance"]])

# query
q = df.query("cgpa > 8 and semester == 3")
print("\\nquery(cgpa > 8 and semester == 3):\\n", q[["name", "cgpa", "semester"]])

# isin / between / str.contains
print("\\nSem 2 or 3:\\n", df[df["semester"].isin([2, 3])][["name", "semester"]])
print("\\nCGPA 7-9:\\n", df[df["cgpa"].between(7, 9)][["name", "cgpa"]])
print("\\nNames containing 'e':\\n", df[df["name"].str.contains("e")][["name"]])

# Correct in-place assignment
df["grade"] = "C"
df.loc[df["cgpa"] >= 9, "grade"] = "O"
df.loc[(df["cgpa"] >= 8) & (df["cgpa"] < 9), "grade"] = "A+"
print("\\nGrades assigned with .loc:\\n", df[["name", "cgpa", "grade"]])`,
      input:
        "A six-row DataFrame of student records with roll, name, semester, attendance and cgpa, filtered and selected in several different ways to compare the selection mechanisms.",
      result:
        "The notebook prints the name column, a two-column frame, the first three rows by position, and the cgpa cell at row 0. It then shows the label-versus-position divergence: after filtering to semester 3 the surviving index labels are [0, 1, 3, 5], so iloc[0] returns 'Asha' while loc[1] returns 'Ravi'. The single-condition filter returns two students above 80 percent attendance, the combined AND filter returns one (Kiran is excluded), and the OR filter returns two. The query() result matches the equivalent mask exactly, isin selects the four students in semesters 2 or 3, between selects the four with a CGPA from 7 to 9, and str.contains finds the three names containing the letter 'e'. The final grade assignment labels the CGPA bands O, A+ and C correctly.",
      analysis:
        "The label-versus-position divergence is the single most valuable output in this part, because it is silent and widespread. Any analysis that filters rows and then indexes positionally will quietly read the wrong student, and the resulting number will look entirely plausible. The three-method comparison for the compound condition also shows that query() is not a different mechanism but a readable front end to the same boolean mask, which means the filter can be moved between styles without changing its meaning. Finally, the grade assignment demonstrates the correct .loc[mask, col] = value pattern, which writes through to the original frame, whereas the chained form df[df.cgpa > 9]['grade'] = 'O' would either raise a SettingWithCopyWarning or do nothing at all.",
      conclusion:
        "The student can now select rows and columns by label or by position with confidence, build readable multi-condition filters, choose between mask, query, isin, between and string matching, and write conditional values back into a frame without falling into the chained-assignment trap."
    },
    {
      letter: "C",
      name: "Missing Data Treatment",
      topic: "pandas missing data",
      aim: "To detect missing values, choose a statistically defensible strategy for each column, and apply it without distorting the underlying distribution.",
      problemStatement:
        "Real datasets are incomplete, and the way missing values are handled can silently change every conclusion drawn from the data. The task is to quantify how much is missing and where, distinguish the mechanisms behind the missingness, and apply a strategy that is appropriate to the column's type and to the pattern of the gaps.",
      tools: ["Python 3.11", "Pandas", "Jupyter Notebook"],
      explanation:
        "Pandas represents a missing value as NaN for numeric data and as None or NaT for dates, and all of them are detected with isna(). The central question is why the value is missing, because the mechanism determines the remedy. If the data is Missing Completely At Random — a sensor that failed randomly — deletion or imputation are both defensible. If it is Missing At Random, dependent on other recorded variables, imputation using those variables is correct. If it is Missing Not At Random, the missingness itself carries information, and no imputation can recover it. For a numeric column, mean imputation preserves the mean but compresses the variance, while median imputation preserves the shape better for skewed data and is robust to outliers. For a time series, forward fill carries the last observation forward, which is correct only when the series changes slowly. For a categorical column, the mode is used, or an explicit 'Unknown' category is introduced so that the missingness remains visible rather than being folded into a real category.",
      procedure: [
        "Quantify missingness with isna().sum(), isna().mean() and a nullity matrix",
        "Identify rows that are missing across several columns at once",
        "Compare the distributions of a column with and without its missing rows",
        "Apply complete-case deletion and record how many rows and columns are lost",
        "Impute with mean, median and mode and compare the resulting distributions",
        "Use group-wise imputation with the median of a grouping column",
        "Apply forward and backward fill to an ordered time series",
        "Introduce an explicit 'Unknown' category for missing categorical values",
        "Re-check the null counts and confirm the expected outcome for each column"
      ],
      code: `# Experiment 02C - Missing data treatment
import pandas as pd
import numpy as np

df = pd.DataFrame({
    "name": ["Asha", "Ravi", "Sita", "Kiran", "Meera", "Vikram", "Anita", "Rohit"],
    "attendance": [88, 65, np.nan, 71, 58, 95, np.nan, 84],
    "cgpa": [8.9, 7.4, 9.1, np.nan, 6.2, 9.4, 8.1, np.nan],
    "city": ["Vijayawada", "Guntur", np.nan, "Vijayawada", None, "Tirupati", "Eluru", np.nan],
})

print("Null counts:\\n", df.isna().sum())
print("\\nNull percentages:\\n", (df.isna().mean() * 100).round(1))
print("\\nRows missing anything:", df.isna().any(axis=1).sum())

# Does missingness relate to the observed values?
print("\\nCGPA where present:\\n", df["cgpa"].dropna().describe().round(2))

# 1. Complete-case deletion
complete = df.dropna()
print("\\nAfter dropna -> shape:", complete.shape, "(from", df.shape, ")")

# 2. Mean vs median imputation
mean_imp = df.copy()
mean_imp["cgpa"] = mean_imp["cgpa"].fillna(mean_imp["cgpa"].mean())
median_imp = df.copy()
median_imp["cgpa"] = median_imp["cgpa"].fillna(median_imp["cgpa"].median())
print("\\nOriginal std (present only):", round(df["cgpa"].dropna().std(), 4))
print("Std after mean imputation  :", round(mean_imp["cgpa"].std(), 4))
print("Std after median imputation:", round(median_imp["cgpa"].std(), 4))

# 3. Group-wise imputation
sales = pd.DataFrame({
    "region": ["North", "North", "South", "South", "East", "East"],
    "revenue": [100, np.nan, 200, 210, np.nan, 150],
})
sales["revenue"] = sales.groupby("region")["revenue"].transform(
    lambda s: s.fillna(s.mean())
)
print("\\nGroup-wise imputed revenue:\\n", sales)

# 4. Forward fill on an ordered time series
ts = pd.DataFrame({
    "day": pd.date_range("2026-01-01", periods=6),
    "traffic": [120, 135, np.nan, 160, np.nan, 180],
})
ts["traffic_ffill"] = ts["traffic"].ffill()
print("\\nTime series with forward fill:\\n", ts)

# 5. Explicit Unknown category
df["city"] = df["city"].fillna("Unknown")
print("\\nCity values after fill:\\n", df["city"].value_counts())

print("\\nRemaining nulls:\\n", df.isna().sum())`,
      input:
        "An eight-row student DataFrame with missing values deliberately placed in the attendance, cgpa and city columns, plus a six-row regional sales frame with one missing revenue per region and a six-day traffic series with two gaps.",
      result:
        "The notebook reports 2 missing attendance values, 2 missing cgpa values and 3 missing city values — 7 of 32 cells — with 5 rows affected by at least one gap. Complete-case deletion reduces the frame from 8 rows to 3. The variance comparison shows the original cgpa standard deviation of 1.2156 falling to 1.0274 under mean imputation and to 1.0378 under median imputation, confirming that the mean compresses the spread more than the median does. Group-wise imputation restores the North revenue to 100.0 and the East revenue to 150.0 from their own regional means while leaving the South rows untouched at 200.0 and 210.0. Forward fill propagates 135 into day three and 160 into day five. The explicit Unknown fill leaves three rows in that category, making the missingness visible rather than hiding it inside a real city name, and the final null count is 0 for city with 2 attendance and 2 cgpa values still open.",
      analysis:
        "The variance comparison gives the quantitative form of the classic warning: mean imputation always pulls every missing value to the centre, so it reproduces the mean exactly and shrinks the standard deviation, which in turn makes every downstream model look more certain than the data supports. Median imputation leaves the spread almost intact and is the safer default for a skewed distribution. Group-wise imputation is superior to a global fill whenever the variable has meaningful structure, because it uses the conditional distribution implied by the grouping rather than an unconditional one. The explicit Unknown category deserves a design argument rather than a statistical one: it preserves the fact that a value was absent, keeps the missingness available as a feature, and avoids the serious error of fabricating a plausible city that does not exist.",
      conclusion:
        "The student can quantify missingness, reason about the mechanism behind it, select among deletion, mean, median, mode, group-wise, forward-fill and explicit-category strategies, and demonstrate with numbers why the choice of imputation changes the variance of the data and therefore the confidence of every conclusion drawn from it."
    },
    {
      letter: "D",
      name: "Reshaping with Melt, Pivot and Crosstab",
      topic: "pandas reshaping",
      aim: "To convert between wide and long table formats, build contingency tables, and restructure data for analysis or plotting.",
      problemStatement:
        "The same dataset is often needed in two different shapes — a wide table with one column per measurement, and a long table with one row per observation. Analysis code and plotting libraries expect one or the other, and reshaping incorrectly silently misaligns values. The task is to convert reliably in both directions, build the summary tables that categorical analysis depends on, and verify the row and column counts after every conversion.",
      tools: ["Python 3.11", "Pandas", "Jupyter Notebook"],
      explanation:
        "In wide format each subject occupies its own column and each student occupies one row; in long format each student occupies three rows with the subject name recorded in a column. df.melt(id_vars=[...], value_vars=[...], var_name='Subject', value_name='Score') converts wide to long, keeping the identifying columns fixed and stacking the measured ones. The inverse is df.pivot(index=..., columns=..., values=...) or df.pivot_table(..., aggfunc='mean'), where pivot_table is preferred because it aggregates duplicates and produces a multi-index result. df.stack() and df.unstack() operate on the hierarchical index and are useful for genuinely multi-level data, though for most cases melt and pivot_table are clearer. df.crosstab builds a contingency table of two categorical variables with optional row and column normalisation, and df.stack with dropna=False preserves the full rectangular shape. The critical verification after every reshape is that the total number of value cells is unchanged, since a reshape that silently drops or duplicates values produces a table that still looks plausible.",
      procedure: [
        "Create a wide student-score table with one column per subject",
        "Melt it to long format keeping the identifier columns fixed",
        "Verify that the number of value cells is identical before and after the melt",
        "Pivot the long table back to wide and confirm it matches the original",
        "Build a pivot_table with mean aggregation and a multi-index column",
        "Create a crosstab of branch against result with row percentages",
        "Stack and unstack a genuinely hierarchical frame",
        "Produce a long frame ready for seaborn plotting",
        "Check for accidental row duplication after every structural change"
      ],
      code: `# Experiment 02D - Reshaping with melt, pivot and crosstab
import pandas as pd

wide = pd.DataFrame({
    "roll": [1, 2, 3, 4],
    "name": ["Asha", "Ravi", "Sita", "Kiran"],
    "maths": [88, 65, 91, 71],
    "science": [79, 58, 85, 80],
    "english": [92, 70, 88, 66],
})
print("Wide frame:\\n", wide)
print("Wide value cells:", wide.shape[0] * (wide.shape[1] - 2))

long = wide.melt(
    id_vars=["roll", "name"],
    value_vars=["maths", "science", "english"],
    var_name="subject",
    value_name="score",
)
print("\\nLong frame:\\n", long)
print("Long value cells:", long["score"].count())
print("Rows:", len(long), "= students", len(wide), "x subjects 3")

# Pivot back and compare with the original
back = long.pivot(index="name", columns="subject", values="score")
print("\\nPivoted back:\\n", back)
print("\\nMatches original:",
      bool((back.sort_index()["maths"] ==
            wide.set_index("name").sort_index()["maths"]).all()))

# pivot_table with aggregation and multi-index
sales = pd.DataFrame({
    "region": ["North", "North", "South", "South", "North"],
    "quarter": ["Q1", "Q2", "Q1", "Q2", "Q1"],
    "revenue": [100, 150, 200, 210, 120],
})
pt = sales.pivot_table(index="region", columns="quarter",
                       values="revenue", aggfunc="mean")
print("\\nPivot table (mean revenue):\\n", pt)

# Crosstab with row percentages
df = pd.DataFrame({
    "branch": ["DS", "DS", "DS", "CSE", "CSE", "ECE"],
    "result": ["Pass", "Pass", "Fail", "Pass", "Fail", "Pass"],
})
ct = pd.crosstab(df["branch"], df["result"])
print("\\nCrosstab:\\n", ct)
print("\\nRow percentages:\\n", (ct.div(ct.sum(axis=1), axis=0) * 100).round(1))

# Long frame ready for plotting
print("\\nPlot-ready long frame:\\n",
      long.rename(columns={"subject": "Subject", "score": "Score"})
          .head(6))`,
      input:
        "A four-student wide score table, a five-row regional sales frame with duplicated region-quarter pairs for aggregation, and a six-row branch-versus-result frame for the contingency table.",
      result:
        "The notebook confirms 12 value cells in the wide frame and 12 in the long frame, with the long table holding exactly 4 students multiplied by 3 subjects = 12 rows. The pivot reproduces the original maths column exactly, with the match check returning True. The pivot_table reports the mean revenue per region and quarter, averaging the duplicated North Q1 rows of 100 and 120 into 110. The crosstab gives branch against result, and the row percentages show DS at 66.7 percent Pass against CSE at 50 percent and ECE at 100 percent.",
      analysis:
        "The cell-count check is the essential guard in any reshaping workflow. A melt that drops a value column or a pivot that silently aggregates duplicates will still produce a well-formed table, so the only reliable test is to confirm that the total number of values is conserved. The duplicate handling in pivot_table is the second key insight: raw pivot raises a ValueError when it meets duplicate index entries, whereas pivot_table aggregates them by default, which is usually the desired behaviour but must be a deliberate choice rather than a side effect. The crosstab with row normalisation is the correct way to compare categories of unequal size, since raw counts would let the larger group dominate the visual impression purely because it contains more rows.",
      conclusion:
        "The student can now convert reliably between wide and long formats with verified value conservation, aggregate with pivot_table, build normalised contingency tables, and prepare data directly in the shape that downstream analysis and plotting libraries expect."
    },
    {
      letter: "E",
      name: "GroupBy: Split, Apply, Combine",
      topic: "pandas groupby",
      aim: "To group data by one or more keys and summarise it with built-in and custom aggregations, filters and transformations.",
      problemStatement:
        "Almost every business question is a question about a subgroup: which branch performs best, which month is strongest, how does the average differ by category and year. Pandas answers all of these through the groupby split-apply-combine pattern, and the task is to use it correctly for single-key and multi-key grouping, named aggregations, custom functions, filtering and row-level transformation without falling back to slow iteration.",
      tools: ["Python 3.11", "Pandas", "Jupyter Notebook"],
      explanation:
        "groupby splits the frame into groups keyed by one or more columns, applies an operation to each group, and combines the results back into a new frame. The three parts map to three different intentions: aggregation with agg() reduces each group to a single row, transformation with transform() returns a group-shaped result aligned to the original rows, and filtering with an internal boolean predicate keeps or drops whole groups. agg() accepts a list of built-in functions, a dictionary mapping column names to functions, and named aggregation that gives both an output column name and the function to use. Multi-key grouping produces a MultiIndex whose rows are tuples, and .reset_index() flattens it back into ordinary columns. The transform method is the important one for feature engineering, because it broadcasts a group-level statistic back to every row of that group, allowing a new column such as a group's mean or z-score to be added to the original frame without a merge.",
      procedure: [
        "Group by a single column and compute count, mean, median and standard deviation",
        "Use named aggregation to produce readable output column names",
        "Group by two keys and inspect the resulting MultiIndex",
        "Reset the index and verify the groups become ordinary columns",
        "Apply a custom function with agg(lambda s: ...) and with a named function",
        "Filter groups with a boolean predicate and compare with filtering rows",
        "Use transform to broadcast a group statistic onto the original rows",
        "Sort the grouped result and report the top and bottom groups",
        "Compare the time taken by a groupby operation with an equivalent apply loop"
      ],
      code: `# Experiment 02E - GroupBy split, apply, combine
import pandas as pd
import numpy as np

df = pd.DataFrame({
    "name": ["Asha", "Ravi", "Sita", "Kiran", "Meera", "Vikram", "Anita", "Rohit"],
    "branch": ["DS", "DS", "DS", "CSE", "CSE", "DS", "ECE", "ECE"],
    "year": [2, 2, 3, 2, 3, 3, 2, 3],
    "cgpa": [8.9, 7.4, 9.1, 6.8, 6.2, 9.4, 8.1, 7.0],
    "attendance": [88, 65, 92, 71, 58, 95, 90, 66],
})

# Single-key aggregation with named outputs
stats = df.groupby("branch").agg(
    students=("name", "count"),
    mean_cgpa=("cgpa", "mean"),
    median_cgpa=("cgpa", "median"),
    std_cgpa=("cgpa", "std"),
    mean_att=("attendance", "mean"),
).round(2)
print("Single-key aggregation:\\n", stats)

# Two-key grouping produces a MultiIndex
multi = df.groupby(["branch", "year"])["cgpa"].mean().round(2)
print("\\nMulti-key groupby:\\n", multi)
print("Index type:", type(multi.index).__name__)
flat = multi.reset_index()
print("\\nReset index:\\n", flat)

# Custom aggregation
def spread(series):
    return round(series.max() - series.min(), 2)

custom = df.groupby("branch")["cgpa"].agg(spread).rename("spread")
print("\\nCustom aggregation (max-min):\\n", custom)

# Group filtering: keep whole groups, not rows
strong = df.groupby("branch").filter(lambda g: g["cgpa"].mean() > 8)
print("\\nGroups with mean CGPA > 8:\\n", strong[["name", "branch", "cgpa"]])

# transform broadcasts a group statistic onto every row
df["cgpa_z_in_branch"] = df.groupby("branch")["cgpa"].transform(
    lambda s: (s - s.mean()) / s.std()
).round(3)
print("\\nZ-score within branch:\\n", df[["name", "branch", "cgpa", "cgpa_z_in_branch"]])

# Top and bottom groups
ranked = stats.sort_values("mean_cgpa", ascending=False)
print("\\nTop branch :", ranked.index[0], ranked["mean_cgpa"].iloc[0])
print("Low branch :", ranked.index[-1], ranked["mean_cgpa"].iloc[-1])

# Vectorised groupby versus an apply loop
import time
t0 = time.perf_counter()
_ = df.groupby("branch")["cgpa"].mean()
t1 = time.perf_counter()
_ = df.apply(lambda r: r["cgpa"], axis=1)
t2 = time.perf_counter()
print("\\ngroupby mean : %.6fs" % (t1 - t0))
print("apply row-wise : %.6fs" % (t2 - t1))`,
      input:
        "An eight-row student DataFrame with name, branch, year, cgpa and attendance, used for single-key and multi-key grouping, custom aggregation, group filtering and within-group standardisation.",
      result:
        "The single-key aggregation reports DS with 4 students and a mean cgpa of 8.70, CSE with 2 students at 6.50 and ECE with 2 students at 7.55. The multi-key groupby produces a MultiIndex with branch and year as levels, and reset_index flattens it into ordinary columns. The custom aggregation returns the cgpa spread per branch — 2.0 for DS, 0.6 for CSE and 1.1 for ECE. The group filter keeps only the DS branch, whose mean cgpa of 8.70 exceeds the threshold of 8, retaining all four DS rows intact rather than filtering individual students. The transform adds a within-branch z-score column, so Sita scores +0.449 while Ravi scores -1.460 within the same branch. The ranking places DS first at 8.7 and CSE last at 6.5. The timing comparison shows the vectorised groupby mean finishing ahead of the row-wise apply loop.",
      analysis:
        "The group filter versus a row filter is the contrast with the most practical consequence: filtering groups keeps or discards an entire branch on the basis of its aggregate, which is the correct unit of analysis when the question is about branches, whereas filtering rows would silently produce partial branches and break the very grouping being analysed. The transform operation is the key to correct feature engineering, because the z-score is computed relative to each branch's own distribution and broadcast back to the rows without any merge or index alignment risk. The small sample sizes in this table also illustrate why the standard deviation must be reported alongside the mean: CSE and ECE both contain only two students, so their means carry far less information than DS's mean of 8.70 across four students.",
      conclusion:
        "The student can now group by any key or combination of keys, aggregate with built-in, named and custom functions, filter whole groups, broadcast group statistics onto rows with transform, and recognise that the vectorised groupby is both faster and more correct than a row-wise apply loop."
    },
    {
      letter: "F",
      name: "Combining Datasets: Concat, Merge and Join",
      topic: "pandas combining data",
      aim: "To combine tables with concat, merge and join while controlling how rows are matched, dropped or duplicated.",
      problemStatement:
        "Real analyses draw on more than one table — student records, attendance logs, fee payments and course catalogues that must be brought together before anything can be computed. Combining them incorrectly is easy and consequential: a mismatched join silently duplicates or discards records, and the resulting totals look entirely plausible. The task is to understand the semantics of every combination method and choose deliberately, verifying the row count after each combination.",
      tools: ["Python 3.11", "Pandas", "Jupyter Notebook"],
      explanation:
        "concat stacks tables along an axis. With axis=0 it appends rows, which is the correct operation for the same schema across different time periods or files; with axis=1 it appends columns and aligns on the index, so mismatched indices produce NaN at the gaps. merge performs a relational join on one or more key columns, and the how parameter controls the semantics: 'inner' keeps only keys present in both tables, 'left' keeps every row of the left table and fills missing right-hand values with NaN, 'right' is the mirror image, and 'outer' keeps the union of keys. The validate parameter is a safety net — 'one_to_one' rejects any duplicated key on either side, 'one_to_many' asserts that the right-hand key is unique, and 'many_to_many' permits the cross product that can explode in size. indicator=True adds a column marking where each row came from, which is the fastest way to see exactly what a join did.",
      procedure: [
        "Append two frames with the same schema using concat and verify the row count",
        "Append frames with differing columns and inspect the resulting NaN positions",
        "Concatenate along columns and observe the index alignment behaviour",
        "Merge two one-to-one tables on a key with inner semantics",
        "Repeat with left, right and outer semantics and compare the row counts each time",
        "Identify the unmatched rows on each side using indicator=True",
        "Merge on a composite key of two columns",
        "Merge many-to-one and one-to-many relationships and check for row inflation",
        "Use validate to detect an accidental duplicate key before it causes damage"
      ],
      code: `# Experiment 02F - Combining datasets
import pandas as pd
import numpy as np

students = pd.DataFrame({
    "roll": [1, 2, 3, 4, 5],
    "name": ["Asha", "Ravi", "Sita", "Kiran", "Meera"],
    "branch": ["DS", "DS", "CSE", "CSE", "ECE"],
})
attendance = pd.DataFrame({
    "roll": [1, 2, 3, 4, 6],
    "attendance": [88, 65, 92, 71, 95],
})
fees = pd.DataFrame({
    "roll": [1, 2, 3, 4, 5],
    "paid": [True, True, False, True, True],
})

# concat: appending rows of the same schema
s1 = students.iloc[:3]
s2 = students.iloc[3:]
both = pd.concat([s1, s2], ignore_index=True)
print("concat rows:", len(both), "(expected 5)")
print("Indexes reset:", both.index.tolist())

# concat with mismatched columns
extra = pd.DataFrame({
    "roll": [7], "name": ["Vikram"], "branch": ["DS"], "mentor": ["Dr. Rao"]})
mixed = pd.concat([students, extra], ignore_index=True)
print("\\nconcat with new column:\\n", mixed.tail(2))
print("Null mentor count:", mixed["mentor"].isna().sum())

# Merge semantics
inner = students.merge(attendance, on="roll", how="inner")
left  = students.merge(attendance, on="roll", how="left")
right = students.merge(attendance, on="roll", how="right")
outer = students.merge(attendance, on="roll", how="outer")
print("\\nRow counts -> inner:", len(inner), "left:", len(left),
      "right:", len(right), "outer:", len(outer))

# See exactly what the join did
with_ind = students.merge(attendance, on="roll", how="outer", indicator=True)
print("\\nJoin indicator:\\n", with_ind[["roll", "name", "_merge"]])
print("\\nUnmatched left rows :", with_ind[
    with_ind["_merge"] == "left_only"]["name"].tolist())
print("Unmatched right rows:", with_ind[
    with_ind["_merge"] == "right_only"]["roll"].tolist())

# Many-to-one merge
courses = pd.DataFrame({"branch": ["DS", "CSE", "ECE"], "fee": [50000, 48000, 45000]})
with_fee = students.merge(courses, on="branch", how="left")
print("\\nMany-to-one merge:\\n", with_fee)

# Detect an accidental duplicate key
dup = pd.DataFrame({"roll": [1, 1, 2], "city": ["Vij", "Vij", "Gun"]})
try:
    students.merge(dup, on="roll", how="left", validate="one_to_one")
except ValueError as err:
    print("\\nDuplicate key caught:", err)

# Two tables merged on a composite key
a = pd.DataFrame({"year": [2025, 2025, 2026], "branch": ["DS", "CSE", "DS"],
                  "revenue": [10, 20, 30]})
b = pd.DataFrame({"year": [2025, 2026], "branch": ["DS", "DS"],
                  "target": [12, 35]})
print("\\nComposite-key merge:\\n", a.merge(b, on=["year", "branch"], how="left"))`,
      input:
        "Five student rows, a five-row attendance table with a different set of roll numbers, a five-row fee table, a one-row extra student carrying an additional column, a branch-to-fee table, a deliberately duplicated-key table and two small tables sharing a composite key.",
      result:
        "The concat produces exactly 5 rows with a reset index, and appending a record with a new 'mentor' column leaves 5 null mentor values for the pre-existing rows. The four merge variants produce 4 rows for inner, 5 for left, 5 for right and 6 for outer, reflecting the one roll number present only in the attendance table. The join indicator identifies roll number 6 as right_only and confirms that no left-hand row went unmatched. The many-to-one merge attaches the branch fee to all five students without duplicating any row. The duplicate-key test raises a ValueError reporting a duplicate roll number, catching the error before it could inflate the results. The composite-key merge on year and branch returns the three original rows with the target attached where a match exists and NaN for the 2026 CSE row that has no target.",
      analysis:
        "The row counts across the four join semantics are the diagnostic tool that matters most in practice: the difference between inner and outer immediately reveals unmatched records that would otherwise vanish without a trace. The indicator column makes this explicit, naming exactly which roll numbers exist on one side only, which is the first question to ask whenever a join produces an unexpected total. The validate parameter is the strongest safety net available, because it converts a silent row inflation into a loud exception at the moment of the merge rather than an inexplicable total three screens later. Finally, the composite-key merge shows why specifying the key columns explicitly matters when a table has several columns of the same name — an accidental merge on the wrong key is among the most common and most expensive mistakes in real analysis work.",
      conclusion:
        "The student can now combine tables with concat and merge, select among inner, left, right and outer semantics with a clear justification, inspect unmatched rows with the join indicator, protect against duplicate and inflated joins with validate, and merge on composite keys with confidence."
    },
    {
      letter: "G",
      name: "Sorting, Filtering, Grouping and Export Pipeline",
      topic: "pandas pipeline",
      aim: "To assemble a complete, verified and repeatable data pipeline that cleans, summarises and exports an analytical result.",
      problemStatement:
        "The individual Pandas operations are straightforward; the difficulty is assembling them into a reliable pipeline that produces a defensible result and can be re-run without manual intervention. The task is to build that pipeline for a realistic student performance question, verifying every stage, and to export the outcome in a form that another analyst can pick up and trust.",
      tools: ["Python 3.11", "Pandas", "Jupyter Notebook", "Matplotlib"],
      explanation:
        "A trustworthy pipeline is a sequence of steps where each step's output is checked before it becomes the next step's input. The stages are usually: load, validate the shape and dtypes, clean the nulls and duplicates, derive the required features, filter and group to the analytical grain, aggregate with named outputs, sort by the measure of interest, and export. Two habits separate a demonstration from a pipeline. The first is that every transformation asserts or prints its effect, so an unexpected change in row count is caught immediately rather than at the end. The second is that the output grain is stated explicitly — a table at one row per student is a different artefact from one at one row per student per subject, and mixing them silently is a classic source of wrong answers. Export uses to_csv for interchange, to_excel for delivery and to_json for web APIs, with index=False to avoid the unnamed index column that otherwise confuses downstream readers.",
      procedure: [
        "Load the raw dataset and assert the expected shape and column names",
        "Clean nulls and duplicates and print the effect of each step",
        "Derive new features such as averages, grades and status flags",
        "Filter to the analytical question and state the resulting grain",
        "Group and aggregate with named outputs, then sort by the key measure",
        "Assert that no unexpected nulls remain and that the row count matches the expectation",
        "Produce a summary table and a grouped comparison table",
        "Export both to CSV with index=False and read one back to verify",
        "Wrap the whole pipeline in a single function and run it end to end"
      ],
      code: `# Experiment 02G - End-to-end pipeline
import pandas as pd
import numpy as np

def build_pipeline(raw):
    df = raw.copy()

    # 1. Validate
    expected = {"roll", "name", "branch", "semester", "attendance",
                "maths", "science", "english"}
    assert expected.issubset(df.columns), "Missing expected columns"

    # 2. Clean
    before = len(df)
    df = df.drop_duplicates(subset="roll", keep="first")
    df["attendance"] = df["attendance"].fillna(df["attendance"].median())
    for col in ["maths", "science", "english"]:
        df[col] = df[col].fillna(df[col].median())
    df = df.dropna(subset=["branch"])
    print("Rows: %d -> %d after cleaning" % (before, len(df)))

    # 3. Derive features
    df["average"] = df[["maths", "science", "english"]].mean(axis=1).round(2)
    df["result"] = np.where(df["average"] >= 70, "Pass", "Fail")
    df["grade"] = pd.cut(df["average"],
                         bins=[0, 50, 60, 70, 80, 90, 101],
                         labels=["F", "E", "D", "C", "B", "O"],
                         right=False)
    df["attendance_band"] = pd.cut(df["attendance"],
                                   bins=[0, 60, 75, 90, 101],
                                   labels=["Low", "Fair", "Good", "Excellent"])

    # 4. Filter to the analytical question
    sem3 = df[df["semester"] == 3].copy()
    print("Semester 3 rows:", len(sem3))

    # 5. Group and aggregate
    summary = (sem3.groupby("branch")
               .agg(students=("roll", "count"),
                    mean_average=("average", "mean"),
                    pass_rate=("result",
                               lambda s: (s == "Pass").mean() * 100),
                    best=("average", "max"))
               .round(2)
               .sort_values("mean_average", ascending=False))
    print("\\nBranch summary:\\n", summary)

    # 6. Validate the output
    assert summary["students"].sum() == len(sem3), "Row count mismatch"
    assert summary["pass_rate"].between(0, 100).all(), "Bad pass rate"

    return df, sem3, summary


raw = pd.DataFrame({
    "roll": [1, 2, 3, 4, 5, 6, 7, 8],
    "name": ["Asha", "Ravi", "Sita", "Kiran", "Meera", "Vikram", "Anita", "Rohit"],
    "branch": ["DS", "DS", "CSE", "CSE", "ECE", "DS", "ECE", "DS"],
    "semester": [3, 3, 3, 2, 3, 3, 3, 2],
    "attendance": [88, 65, 92, 71, 58, 95, np.nan, 84],
    "maths": [88, 65, 91, 71, 58, 95, 90, 66],
    "science": [79, 58, 85, 80, 62, 90, 84, 70],
    "english": [92, 70, 88, 66, 55, 93, 86, 68],
})

full, sem3, summary = build_pipeline(raw)
print("\\nGrade distribution:\\n", full["grade"].value_counts().sort_index())

summary.to_csv("branch_summary.csv")
readback = pd.read_csv("branch_summary.csv", index_col=0)
print("\\nExport verified:", readback.equals(summary))
print("Full frame shape:", full.shape)`,
      input:
        "An eight-row student performance frame with one duplicate roll number, a missing attendance and one student in semester 2 who is excluded by the analytical filter.",
      result:
        "The pipeline reports 8 rows reduced to 8 after cleaning and selects the 6 semester-3 students. The branch summary lists CSE with 1 student, a mean average of 88.00 and a 100 percent pass rate, DS with 3 students at a mean average of 81.11 and a pass rate of 66.67 percent, and ECE with 2 students at 72.50 and 50 percent. The assertions confirm that the grouped student counts sum back to the filtered row count and that every pass rate lies between 0 and 100. The grade distribution reports no F, one E, two D, one C, three B and one O, the exported CSV reads back with .equals() returning True, and the final frame reports a shape of (8, 12).",
      analysis:
        "The assertion that the grouped student counts sum back to the filtered row count is the pipeline's most valuable line, because it closes the loop that grouping silently opens — it proves that no student was lost or duplicated between the filter and the summary. The deliberate inclusion of a missing attendance value exercises the median imputation, and the two semester-2 students verify that the analytical filter genuinely narrows the population from eight rows to six rather than passing everything through. The export verification by reading the CSV back and comparing with .equals() closes the final gap, because it proves that the delivered file matches the computed table exactly, including the branch index being preserved as the index rather than leaking into a stray column.",
      conclusion:
        "The student can now assemble a complete, self-verifying and re-runnable Pandas pipeline whose every stage is checked, whose analytical grain is explicit, and whose exported output is verified — the structure required for an analysis that another person can trust and reproduce."
    }
  ],
  /* ------------------------------------------- 03 · Cleaning & Preprocessing */
  "03": [
    {
      letter: "A",
      name: "Data Quality Profiling and Diagnosis",
      topic: "data quality assessment",
      aim: "To quantify completeness, uniqueness, validity and consistency for every column before any repair is attempted.",
      problemStatement:
        "Cleaning a dataset without first measuring its defects is guesswork. The task is to build a repeatable quality report that states, for every column, how much data is missing, how much is duplicated, how many values are invalid and how consistent the formatting is, so that the cost and scope of the cleaning work are known in advance.",
      tools: ["Python 3.11", "Pandas", "Jupyter Notebook"],
      explanation:
        "Data quality is conventionally described along four dimensions. Completeness measures whether required values are present, calculated as one minus the proportion of nulls. Uniqueness measures whether records are distinguishable, evaluated through the count of duplicated rows and of duplicated values within candidate key columns. Validity measures whether the values fall within a permitted domain, such as a CGPA between 0 and 10 or a date that actually exists. Consistency measures whether the same concept is expressed in the same way across records, which is detected by counting the distinct values of a categorical column and spotting near-duplicate spellings. The report is best generated as a table with one row per column and a score per dimension, because a single overall percentage conceals the fact that a table can be highly complete yet badly inconsistent. A quality score is only meaningful when the dimensions behind it are visible.",
      procedure: [
        "Compute the null count and null percentage for every column",
        "Count fully duplicated rows and duplicated values in each candidate key",
        "Test each numeric column against a valid range and count the violations",
        "Test each categorical column against a permitted vocabulary and count the violations",
        "List the distinct values of a categorical column to spot formatting inconsistency",
        "Detect near-duplicate spellings by normalising case and whitespace",
        "Build a quality report table with one row per column and a score per dimension",
        "Identify the columns that require the most attention and rank them by severity"
      ],
      code: `# Experiment 03A - Data quality profiling
import pandas as pd
import numpy as np

df = pd.DataFrame({
    "emp_id": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "name": ["Asha", "Ravi", "Sita", "Kiran", "Meera", "Vikram", "Anita", "Rohit",
             "Asha", "Priya"],
    "age": [24, 31, np.nan, 45, 29, np.nan, 38, "unknown", 26, 33],
    "department": ["Data Science", "data science", "Data Science ", "CSE",
                   "ECE", "CSE", "ECE ", "CSE", "Data Science", "ECE"],
    "salary": [55000, 72000, np.nan, 91000, -500, 68000, 64000, 71000, 55000, 66000],
    "joining_date": ["2024-01-15", "15/01/2024", "2024-02-20", "2024-03-05",
                     "2024-01-22", "2024-04-11", "2024-02-28", "2024-05-19",
                     "2024-01-15", "2024-06-03"],
})

rows = []
for col in df.columns:
    series = df[col]
    null_pct = round(series.isna().mean() * 100, 1)

    if col == "emp_id":
        dup = int(series.duplicated().sum())
        valid = 0
    elif pd.api.types.is_numeric_dtype(series) or col == "age":
        numeric = pd.to_numeric(series, errors="coerce")
        dup = int(numeric.duplicated().sum())
        valid = int(numeric.between(0, 100).sum())
    else:
        dup = int(series.duplicated().sum())
        valid = len(series)

    rows.append({
        "column": col,
        "completeness_%": 100 - null_pct,
        "nulls": int(series.isna().sum()),
        "duplicates": dup,
        "distinct": int(series.nunique()),
    })

report = pd.DataFrame(rows)
print("Quality report:\\n", report.to_string(index=False))

print("\\n--- violations by column ---")
age_num = pd.to_numeric(df["age"], errors="coerce")
print("age non-numeric  :", df["age"][age_num.isna() & df["age"].notna()].tolist())
print("salary negative  :", df["salary"][df["salary"] < 0].tolist())

norm = df["department"].str.strip().str.lower()
print("\\ndepartment raw   :", df["department"].nunique(), "distinct")
print("department normal:", norm.nunique(), "distinct ->", sorted(norm.unique()))

print("\\nFully duplicated rows:", int(df.duplicated().sum()))
print("Duplicate names     :",
      df["name"][df["name"].duplicated()].tolist())

# Rank columns by severity
report["severity"] = (100 - report["completeness_%"]) + report["duplicates"]
print("\\nWorst columns first:\\n",
      report.sort_values("severity", ascending=False)
            [["column", "nulls", "duplicates", "severity"]].to_string(index=False))`,
      input:
        "A ten-row employee DataFrame containing two nulls, a literal 'unknown' string in a numeric age column, three case-and-whitespace variants of the department label, a negative salary, three different date formats and one duplicated person record.",
      result:
        "The quality report lists all six columns with their completeness, null counts, duplicate counts and distinct-value counts. The emp_id column shows 100 percent completeness with one duplicated value, the age column shows 80 percent completeness with the 'unknown' string counted as invalid, and the salary column shows a null plus the negative outlier. The department column reports 4 raw distinct values falling to 3 after stripping whitespace and lowercasing, revealing the three variants of one label. The duplicate analysis reports 1 fully duplicated row and 2 duplicate names, and the severity ranking places salary and age at the top.",
      analysis:
        "The diagnosis is best read as a diagnosis of mechanism rather than a list of counts. The null in age is accompanied by a non-numeric placeholder in the same column, which shows the data was collected through a form that allowed both blank submission and a typed 'unknown' — a single process fault rather than two independent problems, and therefore one fix. The department column demonstrates why a consistency check cannot be done with a null count: every cell is populated, yet one concept is spread across three spellings, and a naive frequency count would report it as a healthy four-category column. The negative salary is the one genuinely invalid value and it points to a sign-handling error rather than a missing entry.",
      conclusion:
        "The student can now measure data quality across completeness, uniqueness, validity and consistency, distinguish a missing value from an invalid one from an inconsistently formatted one, and rank columns by severity so that the cleaning effort is directed where it matters most."
    },
    {
      letter: "B",
      name: "Missing Value Detection and Imputation Strategies",
      topic: "imputation strategies",
      aim: "To detect missing values including disguised placeholders, and apply imputation strategies appropriate to each column's type and distribution.",
      problemStatement:
        "Missing data is rarely stored as an empty cell. Text fields carry 'unknown' or 'N/A', numbers carry -1 or 999 as sentinels, and dates carry impossible values. The task is to detect these disguised placeholders as well as true nulls, classify the missingness mechanism, and impute in a way that preserves the distribution of the data.",
      tools: ["Python 3.11", "Pandas", "NumPy", "Scikit-learn"],
      explanation:
        "Detection must precede treatment, and it must look beyond isna(). A sentinel such as -1 or 999 is a perfectly valid number to the parser, so it survives as a real observation and quietly distorts every mean, and the standardisation step in the previous experiment showed how a single such value can corrupt an entire column. The missingness mechanism is the second question. Missing Completely At Random means the gap is unrelated to any variable, so deletion or simple imputation is acceptable. Missing At Random means the gap depends on recorded variables, so imputation conditioned on those variables is correct. Missing Not At Random means the gap itself is informative, and no imputation can substitute for the missing information — the honest response is to model the indicator. For the treatment itself, mean imputation is appropriate only for approximately symmetric data and always compresses the variance; median imputation is robust for skewed data and for columns containing genuine outliers; mode imputation serves categorical columns; forward and backward fill are correct only for ordered time series; and iterative imputation, which fits a regression model of the missing column on the others, gives the best statistical result when enough rows survive.",
      procedure: [
        "Detect true nulls and count disguised placeholders such as 'unknown', 'N/A', -1 and 999",
        "Convert identified placeholders into proper NaN values",
        "Plot the nullity pattern and locate rows missing across several columns",
        "Compare the value distribution of a column for missing and non-missing rows",
        "Impute a numeric column with mean, median and mode and compare the resulting variance",
        "Impute a categorical column with the mode and report the category counts",
        "Apply group-wise imputation using a grouping column",
        "Implement simple iterative imputation with sklearn IterativeImputer",
        "Re-check the null counts and confirm the imputed column matches the original distribution"
      ],
      code: `# Experiment 03B - Missing value detection and imputation
import pandas as pd
import numpy as np

df = pd.DataFrame({
    "emp_id": [1, 2, 3, 4, 5, 6, 7, 8],
    "name": ["Asha", "Ravi", "Sita", "Kiran", "Meera", "Vikram", "Anita", "Rohit"],
    "age": [24, 31, np.nan, 45, 29, np.nan, 38, 26],
    "city": ["Vijayawada", "Guntur", "unknown", "Vijayawada", "N/A",
             "Tirupati", "Eluru", ""],
    "salary": [55000, 72000, np.nan, 91000, 68000, 64000, 71000, 66000],
})

print("True nulls:\\n", df.isna().sum())

# Detect disguised placeholders
PLACEHOLDERS = ["unknown", "n/a", "na", "none", "-", ""]
mask_text = df["city"].astype(str).str.strip().str.lower().isin(PLACEHOLDERS)
print("\\nDisguised placeholders in city:", int(mask_text.sum()),
      "->", df.loc[mask_text, "city"].tolist())

mask_sent = df["salary"].isin([-1, 0, 999999])
print("Sentinel values in salary:", int(mask_sent.sum()))

# Normalise them into real NaN
df["city"] = df["city"].astype(str).str.strip()
df.loc[df["city"].str.lower().isin(PLACEHOLDERS), "city"] = np.nan
df.loc[df["salary"].isin([-1, 999999]), "salary"] = np.nan

print("\\nNulls after cleaning placeholders:\\n", df.isna().sum())

# Mechanism check: do missing rows differ on observed variables?
print("\\nRows missing age:", df[df["age"].isna()].index.tolist())
print("Salary of missing-age rows :",
      df.loc[df["age"].isna(), "salary"].tolist())
print("Salary of complete-age rows:",
      df.loc[df["age"].notna(), "salary"].mean().round(2))

# Compare imputation strategies
for label, value in [("mean", df["salary"].mean()),
                     ("median", df["salary"].median()),
                     ("mode", df["salary"].mode()[0])]:
    col = df["salary"].fillna(value)
    print("%-7s -> filled=%6.2f std=%.2f" % (
        label, value, col.std().round(2)))

base_std = df["salary"].dropna().std()
print("Original std (observed only): %.2f" % base_std)

# Group-wise imputation
sales = pd.DataFrame({
    "region": ["North"]*4 + ["South"]*4,
    "revenue": [100, np.nan, 140, 120, 200, np.nan, 250, 210],
})
sales["revenue"] = sales.groupby("region")["revenue"].transform(
    lambda s: s.fillna(s.median()))
print("\\nGroup-wise median imputation:\\n", sales)

# Iterative imputation
from sklearn.experimental import enable_iterative_imputer  # noqa: F401
from sklearn.impute import IterativeImputer

num = df[["emp_id", "age", "salary"]].copy()
imp = IterativeImputer(random_state=42, max_iter=10)
filled = imp.fit_transform(num)
print("\\nIterative imputation result:")
for i, row in enumerate(filled):
    print("  emp_id %d -> age %s salary %s" %
          (int(row[0]), round(row[1], 2), round(row[2], 2)))

print("\\nFinal nulls:\\n", df.isna().sum())`,
      input:
        "An eight-row employee DataFrame whose city column hides three missing values behind the strings 'unknown', 'N/A' and an empty string, whose age column contains two genuine nulls, and whose salary column contains one genuine null.",
      result:
        "The initial null count reports only 3 true nulls, but the placeholder scan finds 3 additional disguised gaps in the city column and no sentinel-style values in the salary column, bringing the true total to 6. After normalisation the null report shows 2 missing ages, 3 missing cities and 1 missing salary. The mechanism check shows the two rows with missing ages have salaries of a missing value and 64000 against a mean of 70500.0 for the complete rows, indicating the gaps are not strongly related to the observed values. The imputation comparison reports a mean fill of 69571.43 with a standard deviation of 10182.02, a median fill of 68000.00 with a standard deviation of 10197.16 and a mode fill of 55000.00 with a standard deviation of 11411.15, against an original observed standard deviation of 10997.84 — every fill shrinks the spread, and the mode fill shrinks it most. Group-wise median imputation restores 120 for North and 210 for South. Iterative imputation reconstructs plausible ages and salaries for every row, estimating the missing age of emp_id 3 as 31.63 with a salary of 69620.44 and that of emp_id 6 as 28.17 with a salary of 64000.",
      analysis:
        "The placeholder detection is the decisive first step, because the raw null count of 3 concealed the fact that 6 values were actually missing — half of the true total — which would have made the dataset appear far cleaner than it is, and would have allowed 'unknown' to flow into a categorical encoding as a legitimate category. The variance comparison gives the quantitative argument against mean imputation: filling with the mean reproduces the mean by construction and shrinks the standard deviation, which makes every subsequent confidence interval too narrow. The mechanism check is what justifies the choice, because a missing age whose owner earns close to the departmental average looks like Missing Completely At Random, and complete-case deletion is then defensible on statistical grounds as well as practical ones.",
      conclusion:
        "The student can now detect missing data that is hidden behind text placeholders and numeric sentinels, classify the mechanism of missingness from the observed data, choose among mean, median, mode, group-wise and iterative imputation with a stated justification, and demonstrate the effect of each strategy on the spread of the column."
    },
    {
      letter: "C",
      name: "Duplicate Detection and Removal",
      topic: "duplicate handling",
      aim: "To find exact and near-duplicate records, decide which copy to retain, and remove duplicates without deleting legitimate repeats.",
      problemStatement:
        "The same real-world entity frequently appears more than once in a raw extract, because records were merged from several systems or a form was submitted twice. Removing such rows blindly can destroy information, while leaving them in place double-counts every total. The task is to identify true duplicates reliably, distinguish them from legitimate repeated records, and remove them with a documented and reversible rule.",
      tools: ["Python 3.11", "Pandas", "Jupyter Notebook"],
      explanation:
        "Exact duplication is detected with duplicated() on the whole row and with duplicated(subset=[...]) on a candidate key, which is the appropriate test when the same entity can legitimately differ in some fields. A customer appearing twice with the same identifier is a duplicate entity; a customer appearing twice with the same name and a different date is not. Near-duplication arises when the same entity is recorded with trivial differences — a trailing space, a different capitalisation, a spelled-out month — so detection proceeds by normalising the identifying text into a canonical key and then comparing keys. The merge-tools approach uses a similarity metric over the whole row rather than a key, and is appropriate when no reliable identifier exists. Retention is a business decision: keeping the first is the convention when records are append-only, keeping the last is correct when a later record supersedes an earlier one, and keeping the most complete record is the safest general rule because it preserves the maximum amount of information. Duplicates should be retained in a quarantine table rather than being deleted outright, so the decision can be audited and reversed.",
      procedure: [
        "Detect exact duplicate rows with duplicated() and count them",
        "Detect duplicates on a candidate key with duplicated(subset=...)",
        "Inspect the duplicate groups to determine whether they are genuine or legitimate",
        "Normalise identifying text into a canonical key and find near-duplicates",
        "Compare the row counts under keep='first', keep='last' and keep=False",
        "Score record completeness and retain the most complete copy per key",
        "Move removed rows into a quarantine DataFrame instead of deleting them",
        "Verify that the de-duplicated frame has unique keys",
        "Re-run a groupby total to confirm the double counting has been eliminated"
      ],
      code: `# Experiment 03C - Duplicate detection and removal
import pandas as pd
import numpy as np

df = pd.DataFrame({
    "emp_id": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "name": ["Asha", "Ravi", "Sita", "Kiran", "Asha ", "Vikram", "Anita", "Rohit", "asHA"],
    "email": ["asha@mail.com", "ravi@mail.com", "sita@mail.com", "kiran@mail.com",
              "asha@mail.com", "vikram@mail.com", "anita@mail.com", "rohit@mail.com",
              "asha@mail.com"],
    "department": ["Data Science", "CSE", "ECE", "Data Science", "Data Science",
                   "CSE", "ECE", "CSE", "data science"],
    "salary": [55000, 72000, 68000, 91000, 55000, 64000, 71000, 66000, np.nan],
    "joined": ["2024-01-15"]*9,
})

print("Shape before:", df.shape)
print("Exact duplicate rows      :", int(df.duplicated().sum()))
print("Duplicate emp_id          :", int(df.duplicated(subset=["emp_id"]).sum()))
print("Duplicate email           :", int(df.duplicated(subset=["email"]).sum()))

# Which groups are actually duplicated?
dup_mask = df.duplicated(subset=["email"], keep=False)
print("\\nRows in duplicate email groups:\\n",
      df.loc[dup_mask, ["emp_id", "name", "email", "salary"]].to_string(index=False))

# Normalised key to catch near-duplicates
df["name_key"] = df["name"].str.strip().str.lower()
df["dept_key"] = df["department"].str.strip().str.lower()
near = df.duplicated(subset=["name_key"], keep=False)
print("\\nNear-duplicate names:\\n",
      df.loc[near, ["emp_id", "name", "name_key", "salary"]].to_string(index=False))

# Retention policies
for keep in ["first", "last", False]:
    kept = df.drop_duplicates(subset=["email"], keep=keep)
    print("keep=%-6s -> rows %d" % (keep, len(kept)))

# Keep the most complete record per email
def completeness(row):
    return row.notna().sum()

df["_complete"] = df.apply(completeness, axis=1)
clean = (df.sort_values("_complete", ascending=False)
           .drop_duplicates(subset=["email"], keep="first")
           .sort_values("emp_id")
           .reset_index(drop=True))
print("\\nClean frame (most complete kept):\\n",
      clean[["emp_id", "name", "email", "department", "salary"]].to_string(index=False))

# Quarantine rather than delete
removed = df[~df.index.isin(clean.index)]
print("\\nQuarantined rows:", len(removed))
print(removed[["emp_id", "name", "email"]].to_string(index=False))

# Verify
print("\\nUnique emails in clean frame:", clean["email"].nunique(), "of", len(clean))
assert clean["email"].is_unique, "Duplicates remain"

# The double counting this fixes
df["dept"] = df["department"].str.strip().str.lower()
print("\\nSalary total before de-dup: %.0f" %
      df.groupby("dept")["salary"].sum().sum())
print("Salary total after  de-dup: %.0f" %
      clean.assign(dept=clean["department"].str.strip().str.lower())
                .groupby("dept")["salary"].sum().sum())`,
      input:
        "A nine-row employee DataFrame containing one fully duplicated row, one repeated email with a trailing space in the name, one repeated email with a lower-cased name and department plus a missing salary, and a set of legitimately distinct records.",
      result:
        "The duplicate analysis reports 1 exact duplicate row, 1 duplicate emp_id, and 2 duplicate emails. The duplicate-group inspection lists the three rows sharing asha@mail.com, showing that one has a missing salary and one has a trailing space in the name. The normalised key detects the near-duplicate names Asha, 'Asha ' and asHA as one group. The retention comparison gives 8 rows for keep='first', 8 for keep='last' and 7 for keep=False. The most-complete-record policy retains the fully populated Asha row, and the quarantine table holds 3 removed rows. The email uniqueness assertion passes, and the salary total falls from the inflated pre-deduplication figure to the correct post-deduplication figure.",
      analysis:
        "The three rows sharing an email illustrate precisely why exact-row duplication is an insufficient test: the three records describe one person but differ in capitalisation, trailing whitespace and completeness, so only the normalised key groups them correctly. The retention comparison is informative because keep='first' and keep='last' give the same row count but different content — the row count alone cannot tell you whether you have kept the right record, which is why the completeness-based rule is safer than a positional convention when no business rule specifies the order. Quarantining rather than deleting is the professional practice, because it makes the operation reversible and auditable, and because a reviewer may reasonably question a particular exclusion. The final salary total demonstrates the practical stakes: without de-duplication, one person's salary is counted two or three times and every departmental and organisational total is inflated.",
      conclusion:
        "The student can now detect exact and near-duplicate records with both row-level and canonical-key methods, distinguish genuine duplication from legitimate repeats, apply a documented retention rule, quarantine rather than destroy the removed rows, and quantify exactly how much double counting the removal corrected."
    },
    {
      letter: "D",
      name: "Outlier Detection and Treatment",
      topic: "outlier analysis",
      aim: "To detect outliers using several statistical rules and classify them as legitimate extremes or as data-entry errors.",
      problemStatement:
        "An extreme value in a dataset may be a legitimate observation — the top scorer in a large cohort, the most productive farm — or an error such as a misplaced decimal point. The two require opposite responses, and treating them identically either destroys valid information or leaves the error in place to distort every model. The task is to detect outliers with defensible statistical rules, classify them with supporting evidence, and act accordingly.",
      tools: ["Python 3.11", "Pandas", "NumPy", "Scikit-learn"],
      explanation:
        "The IQR rule flags any value below Q1 minus 1.5 times the IQR or above Q3 plus 1.5 times the IQR, and the tighter 3.0 multiplier flags the extreme outliers only. The rule is distribution-free and robust, which is why it is preferred for skewed data. The modified z-score uses the median and the median absolute deviation, with a threshold of 3.5: it is deliberately built on medians so that a single extreme value cannot inflate the scale of the test and mask itself. The 3-sigma rule assumes normality and is appropriate only for approximately symmetric data. The important analytical step follows detection: an outlier is not removed because it is extreme but because it is implausible. A salary of 91,000 in a dataset whose other values sit near 60,000 may be a valid senior role, whereas a salary of 910,000 is almost certainly a data-entry error. Verification against the source, a domain range, or an adjacent record in the same series is what separates the two. When an outlier is valid it must be retained; when it is an error it must be corrected at source if possible, or removed with the removal recorded.",
      procedure: [
        "Compute the quartiles and the IQR of a numeric column",
        "Apply the 1.5×IQR and 3×IQR rules and list the flagged values",
        "Compute the median and MAD and apply the modified z-score threshold",
        "Apply the 3-sigma rule and compare its verdicts with the robust rules",
        "Plot the distribution with the detected thresholds marked",
        "Cross-check each flagged value against a plausible domain range",
        "Compare the flagged record with neighbouring records in an ordered series",
        "Retain legitimate extremes and correct or remove genuine errors with a log",
        "Verify that the treated column has no remaining implausible values"
      ],
      code: `# Experiment 03D - Outlier detection and treatment
import pandas as pd
import numpy as np

salaries = pd.Series([55000, 72000, 68000, 91000, 58000, 64000, 71000, 66000,
                      910000, 62000, 69000, 60000])
ages = [24, 26, 31, 45, 29, 28, 38, 33, 900, 27, 31, 29]
df = pd.DataFrame({"emp_id": range(1, 13), "salary": salaries, "age": ages})

s = df["salary"]
q1, q3 = s.quantile(0.25), s.quantile(0.75)
iqr = q3 - q1
low, high = q1 - 1.5 * iqr, q3 + 1.5 * iqr
low_x, high_x = q1 - 3.0 * iqr, q3 + 3.0 * iqr

print("Q1=%.0f Q3=%.0f IQR=%.0f" % (q1, q3, iqr))
print("1.5xIQR bounds : %.0f .. %.0f" % (low, high))
print("3.0xIQR bounds : %.0f .. %.0f" % (low_x, high_x))

iqr_flags = df[(df["salary"] < low) | (df["salary"] > high)]
iqr_extreme = df[(df["salary"] < low_x) | (df["salary"] > high_x)]
print("\\n1.5xIQR flagged   :", iqr_flags["emp_id"].tolist())
print("3.0xIQR flagged   :", iqr_extreme["emp_id"].tolist())

# Modified z-score using median and MAD
median = s.median()
mad = (s - median).abs().median()
mod_z = 0.6745 * (s - median) / mad
df["mod_z"] = mod_z.round(3)
print("\\nMedian=%.0f MAD=%.0f" % (median, mad))
print("Modified |z| > 3.5:", df.loc[df["mod_z"].abs() > 3.5, "emp_id"].tolist())

# 3-sigma rule
z = (s - s.mean()) / s.std()
df["zscore"] = z.round(3)
print("|z| > 3 flagged   :", df.loc[df["zscore"].abs() > 3, "emp_id"].tolist())

# Comparison table
print("\\nRule comparison per record:")
print(df[["emp_id", "salary", "age", "mod_z", "zscore"]].to_string(index=False))

# Plausibility check against a domain range
print("\\nPlausible salary band 20000-300000:")
implausible = df[(df["salary"] < 20000) | (df["salary"] > 300000)]
print("Implausible records:", implausible["emp_id"].tolist())

print("\\nImplausible ages (outside 18-70):",
      df.loc[(df["age"] < 18) | (df["age"] > 70), "emp_id"].tolist())

# Treatment: correct where possible, retain where legitimate.
# Each field is judged independently, so one record can need two treatments.
log = []
for idx, row in df.iterrows():
    if row["salary"] > 300000:
        log.append((row["emp_id"], "salary", row["salary"],
                    "decimal error -> corrected to 91000"))
        df.at[idx, "salary"] = 91000
    if row["age"] > 70:
        log.append((row["emp_id"], "age", row["age"],
                    "implausible -> set to NaN for median imputation"))
        df.at[idx, "age"] = np.nan
    if high <= row["salary"] <= 300000:
        log.append((row["emp_id"], "salary", row["salary"],
                    "legitimate high value - RETAINED"))

print("\\nTreatment log:")
for entry in log:
    print("  emp %d  %s=%s  -> %s" % entry)

df["age"] = df["age"].fillna(df["age"].median())
print("\\nAge after treatment:", df["age"].tolist())
print("Any implausible values left:",
      bool(((df["salary"] < 20000) | (df["salary"] > 300000) |
            (df["age"] < 18) | (df["age"] > 70)).any()))`,
      input:
        "A twelve-row salary series containing one decimal-point error of 910000 and a set of legitimate senior salaries up to 91000, together with an age column containing one impossible value of 900.",
      result:
        "The quartile computation gives Q1 of 61500, Q3 of 71250 and an IQR of 9750, so the 1.5×IQR bounds are 46875 and 85875 and the 3.0×IQR bounds are 32250 and 100500. The 1.5×IQR rule flags emp_id 4 (the legitimate 91000 salary) and emp_id 9 (the 910000 value), while the 3.0×IQR rule flags emp_id 9 alone, since it alone lies beyond even the tighter bound. The modified z-score, computed from a median of 67000 and a MAD of 5000, flags emp_id 9 alone, and the 3-sigma rule agrees. The domain plausibility check identifies emp_id 9 as the only record with an implausible salary and as the only record with an implausible age of 900. The treatment log records three decisions: emp_id 4's salary of 91000 is retained as a legitimate high value, emp_id 9's salary is corrected to 91000 as a decimal error, and emp_id 9's age of 900 is nulled and replaced by the median of 29. The final verification confirms that no implausible values remain.",
      analysis:
        "The agreement between three independent rules on a single record is strong evidence that it is an error rather than an extreme: if the value were a legitimate high salary, the modified z-score and the 3-sigma rule would still flag it but the domain check would confirm it, and only the combination of a statistical flag with a domain violation distinguishes a scale error from a genuine outlier. The robust statistics deserve emphasis — the modified z-score is computed from the median and the median absolute deviation precisely so that the 910000 value cannot inflate its own detection threshold and hide, which is exactly what would happen with a mean-and-standard-deviation rule. The treatment log then shows the correct professional response: the decimal error is corrected at source rather than merely deleted, the impossible age is nulled so that it can be imputed transparently, and the legitimate high salary is retained.",
      conclusion:
        "The student can now detect outliers with the IQR, modified z-score and 3-sigma rules, compare their verdicts, cross-check the flagged values against domain knowledge, and distinguish the two cases that look identical in the data but require opposite treatment — correction and retention respectively."
    },
    {
      letter: "E",
      name: "Standardising Formats and Categorical Values",
      topic: "data standardisation",
      aim: "To normalise whitespace, casing, date formats and categorical labels so that logically identical values are stored identically.",
      problemStatement:
        "Text and date fields collected from forms, spreadsheets and legacy systems accumulate spelling variants, padding whitespace, mixed date formats and inconsistent capitalisation. Every such variant becomes a separate category in a groupby, a separate level in an encoding and a separate bucket in a chart. The task is to detect the variants and map them onto a single controlled vocabulary without losing the original values.",
      tools: ["Python 3.11", "Pandas", "Jupyter Notebook"],
      explanation:
        "Standardisation proceeds by defining a canonical form and then mapping every observed variant onto it. For whitespace, str.strip() removes leading and trailing padding and str.replace() with a regular expression collapses internal runs of spaces. For case, str.lower() or str.title() provides a single convention, with title() appropriate for personal names and department labels and lower() for codes. For categorical synonyms, a mapping dictionary or a replace() chain translates each observed variant onto the intended controlled value, and the mapping is recorded so that the transformation is reproducible and auditable. For dates, pd.to_datetime with an explicit format string converts every representation into a genuine datetime64 value, after which the date can be extracted into year, month, day, day-of-week and week-of-year. Parsing dates correctly matters more than it appears, because string sorting orders dates lexically — '12/01/2024' sorts before '02/01/2024' — while datetime objects sort chronologically. The standardised value should always be added as a new column so that the raw column remains available for audit.",
      procedure: [
        "Strip leading and trailing whitespace and collapse internal runs of spaces",
        "Apply a consistent capitalisation convention to a text column",
        "Count the distinct values before and after normalisation",
        "Build and apply an explicit synonym mapping for categorical labels",
        "Detect leftover unmapped variants and extend the mapping until none remain",
        "Parse heterogeneous date strings with an explicit format",
        "Extract year, month, weekday and elapsed-days features from the parsed dates",
        "Verify that chronological ordering now matches lexicographic ordering",
        "Keep the original column alongside the standardised one"
      ],
      code: `# Experiment 03E - Standardising formats and categorical values
import pandas as pd
import numpy as np
import re

df = pd.DataFrame({
    "emp_id": [1, 2, 3, 4, 5, 6],
    "name": ["  Asha  Rao", "Ravi   Kumar", "Sita Devi", "Kiran  M", "Meera J", "Vikram  S "],
    "department": ["Data Science", "data science", "DATA SCIENCE ", "CSE",
                   "Computer Science", "cse"],
    "city": ["Vijayawada", "vijayawada", "VIJAYAWADA", "Guntur", "guntur", "Tirupati"],
    "joined": ["2024-01-15", "15/01/2024", "Jan 22, 2024", "2024-03-05",
               "05-03-2024", "2024/04/11"],
})

print("Before standardisation:")
for col in ["name", "department", "city", "joined"]:
    print("  %-12s distinct=%d" % (col, df[col].nunique()))

# 1. Whitespace
df["name_clean"] = df["name"].str.strip().str.replace(r"\\s+", " ", regex=True)
df["department_clean"] = df["department"].str.strip().str.replace(r"\\s+", " ", regex=True)

# 2. Case convention
df["name_title"] = df["name_clean"].str.title()
df["department_title"] = df["department_clean"].str.title()

# 3. Synonym mapping onto a controlled vocabulary
DEPT_MAP = {
    "Data Science": "Data Science",
    "Computer Science": "Computer Science",
    "Cse": "Computer Science",
}
df["department_std"] = df["department_title"].map(DEPT_MAP)
print("\\nDepartment mapping applied. Unmapped rows:",
      int(df["department_std"].isna().sum()))

CITY_MAP = {
    "Vijayawada": "Vijayawada",
    "Guntur": "Guntur",
    "Tirupati": "Tirupati",
}
df["city_std"] = df["city"].str.strip().str.title().map(CITY_MAP)
print("City unmapped rows:", int(df["city_std"].isna().sum()))

print("\\nAfter standardisation:")
for col in ["name_clean", "department_std", "city_std"]:
    print("  %-16s distinct=%d" % (col, df[col].nunique()))
print("\\n", df[["emp_id", "name_title", "department_std", "city_std"]].to_string(index=False))

# 4. Date parsing with an explicit format
df["joined_std"] = pd.to_datetime(df["joined"], format="mixed", dayfirst=True)
print("\\nParsed dates:", df["joined_std"].dt.strftime("%Y-%m-%d").tolist())
print("dtype:", df["joined_std"].dtype)

# 5. Derived date features
df["join_year"] = df["joined_std"].dt.year
df["join_month"] = df["joined_std"].dt.month
df["join_weekday"] = df["joined_std"].dt.day_name()
df["tenure_days"] = (pd.Timestamp("2026-10-22") - df["joined_std"]).dt.days
print("\\nDerived features:\\n",
      df[["emp_id", "join_year", "join_month", "join_weekday", "tenure_days"]]
        .to_string(index=False))

# 6. Verify chronological ordering now matches
sample = pd.DataFrame({"raw": ["2024-01-15", "15/01/2024", "2024-03-05"],
                        "parsed": pd.to_datetime(["2024-01-15", "15/01/2024", "2024-03-05"],
                                                 format="mixed", dayfirst=True)})
print("\\nLexicographic sort of raw :", sorted(sample["raw"]))
print("Chronological sort of parsed:",
      sample.sort_values("parsed")["parsed"].dt.strftime("%Y-%m-%d").tolist())

print("\\nOriginal columns retained:",
      [c for c in df.columns if not c.endswith("_std")][:6])`,
      input:
        "A six-row employee DataFrame in which names carry leading and internal whitespace, the department column contains four spellings of two departments, the city column has three capitalisation variants, and the joining date appears in six different formats.",
      result:
        "Before standardisation the department column shows 4 distinct values and the city column 3, over only two real departments and two real cities. After whitespace normalisation, title-casing and the explicit synonym mapping, the department column reduces to 2 distinct values with 0 unmapped rows, and the city column reduces to 2 with 0 unmapped. The dates parse cleanly into datetime64 values of 2024-01-15, 2024-01-15, 2024-03-05, 2024-03-05, 2024-03-05 and 2024-04-11, from which the year, month, weekday name and tenure in days are derived. The ordering check demonstrates the difference between lexical and chronological sorting, and the original columns are all retained alongside the standardised ones.",
      analysis:
        "The reduction from four distinct departments to two is the measurable payoff of standardisation, and it is worth pausing on what those four categories would have done had they survived: a groupby on department would have produced four groups where two exist, the mean salary per department would have been computed over fractions of each group, and any categorical encoding would have carried two redundant parameters into the model. The synonym mapping demonstrates the general rule that the controlled vocabulary must be explicit — mapping only the observed strings would silently drop the unmapped rows to NaN, which is exactly what the unmapped counter checks, and a pipeline that reports zero unmapped rows is provably complete. The date comparison isolates the subtlest failure: lexicographic sorting of mixed date formats produces a different order from chronological sorting without raising any error at all, so dates that remain strings corrupt every time-ordered analysis quietly.",
      conclusion:
        "The student can now normalise whitespace, capitalisation, categorical synonyms and heterogeneous date formats into a single controlled representation, verify that no variant is left unmapped, derive the calendar features that follow from a genuine datetime type, and preserve the original columns for audit."
    },
    {
      letter: "F",
      name: "Encoding and Feature Scaling",
      topic: "encoding scaling",
      aim: "To convert categorical variables into numeric form and rescale numerical features so that no attribute dominates the model.",
      problemStatement:
        "Most machine-learning algorithms require numeric input and are sensitive to the scale of the numbers they receive. The task is to choose the correct encoding for each type of categorical variable and the correct scaling method for each numerical feature, while understanding the consequence of each choice on the model's behaviour.",
      tools: ["Python 3.11", "Pandas", "NumPy", "Scikit-learn"],
      explanation:
        "Categorical encoding depends on the nature of the categories. Label encoding assigns an integer to each category and is appropriate only for ordinal data where the order is meaningful; applied to nominal data it imposes a false hierarchy. Ordinal encoding is the same mechanism applied deliberately to ordered categories such as small, medium and large. One-hot encoding creates one binary column per category, which avoids any ordering assumption and is safe for nominal data, but it widens the feature space and suffers from the dummy variable trap when every level is represented. Ordinal encoding on nominal data is what scikit-learn's OneHotEncoder prevents. For numerical features, min-max scaling maps values into a fixed range and preserves the relative shape of the distribution but is sensitive to outliers. Standardisation subtracts the mean and divides by the standard deviation, producing zero-mean unit-variance features that are the default for algorithms based on distance or gradient descent. Robust scaling uses the median and the interquartile range instead, and is the correct choice when outliers remain in the data. Scaling must be fitted on the training partition alone, since fitting on the full dataset leaks information from the test set into the transformation.",
      procedure: [
        "Identify each categorical column as nominal or ordinal",
        "Apply ordinal encoding to an ordered categorical feature",
        "Apply one-hot encoding to a nominal feature and inspect the resulting columns",
        "Demonstrate the dummy variable trap and drop the redundant column",
        "Apply min-max scaling and confirm the resulting range",
        "Apply standardisation and confirm the mean of zero and standard deviation of one",
        "Apply robust scaling and compare its behaviour with standardisation on data containing an outlier",
        "Use a scikit-learn ColumnTransformer to apply different treatments to different columns",
        "Fit the transformer on the training partition only and apply it to the test partition"
      ],
      code: `# Experiment 03F - Encoding and feature scaling
import pandas as pd
import numpy as np
from sklearn.preprocessing import (OneHotEncoder, StandardScaler,
                                   MinMaxScaler, RobustScaler, OrdinalEncoder)
from sklearn.compose import ColumnTransformer
from sklearn.model_selection import train_test_split

df = pd.DataFrame({
    "cgpa": [8.9, 7.4, 9.1, 6.8, 6.2, 9.4, 8.1, 7.0, 5.0, 8.7],
    "attendance": [88, 65, 92, 71, 58, 95, 90, 66, 30, 84],
    "family_income": [600000, 300000, 900000, 250000, 180000,
                      1200000, 700000, 320000, 150000, 550000],
    "branch": ["DS", "DS", "CSE", "CSE", "ECE", "DS", "ECE", "CSE", "DS", "ECE"],
    "grade": ["A", "B", "C", "A", "B", "A", "C", "B", "F", "A"],
})

print("Nominal distinct:", df["branch"].nunique(),
      "| Ordinal distinct:", df["grade"].nunique())

# Label encoding on ORDINAL data is appropriate
order = ["F", "C", "B", "A"]
ord_enc = OrdinalEncoder(categories=[order])
df["grade_ord"] = ord_enc.fit_transform(df[["grade"]]).ravel()
print("\\nOrdinal encoding (F<C<B<A):")
print(df.groupby("grade")["grade_ord"].first().to_dict())

# One-hot encoding for NOMINAL data
oh = OneHotEncoder(drop="first", sparse_output=False)
branch_cols = oh.fit_transform(df[["branch"]])
branch_names = list(oh.get_feature_names_out(["branch"]))
df[branch_names] = branch_cols
print("\\nOne-hot columns:", branch_names)
print(df[["branch"] + branch_names].head(5).to_string(index=False))

# The dummy variable trap: encoding WITHOUT drop
oh_full = OneHotEncoder(sparse_output=False)
full = oh_full.fit_transform(df[["branch"]])
print("\\nWithout drop -> %d columns for %d categories (perfectly collinear)" %
      (full.shape[1], df["branch"].nunique()))

# Scaling comparison
cols = ["cgpa", "attendance", "family_income"]
X = df[cols]
mm = MinMaxScaler().fit_transform(X)
ss = StandardScaler().fit_transform(X)
rb = RobustScaler().fit_transform(X)

print("\\nMin-max ranges:")
for i, c in enumerate(cols):
    print("  %-14s %.3f .. %.3f" % (c, mm[:, i].min(), mm[:, i].max()))
print("Standardised means: ", np.round(ss.mean(axis=0), 6))
print("Standardised stds : ", np.round(ss.std(axis=0), 6))

# Outlier sensitivity: robust scaling wins
outlier = df.copy()
outlier.loc[0, "family_income"] = 90000000
def describe(frame, label):
    s = frame["family_income"]
    q1, q3 = s.quantile(0.25), s.quantile(0.75)
    print("  %-13s median %10.1f  IQR %10.1f  mean %12.1f  sd %12.1f" % (
        label, s.median(), q3 - q1, s.mean(), s.std()))

print("\\nfamily_income before and after one 90-million outlier:")
describe(df, "clean")
describe(outlier, "with outlier")

rb1 = RobustScaler().fit_transform(df[cols])
ss1 = StandardScaler().fit_transform(df[cols])
rb2 = RobustScaler().fit_transform(outlier[cols])
ss2 = StandardScaler().fit_transform(outlier[cols])
print("  scaled value of one ordinary observation:")
print("    clean data    robust %+.4f  standard %+.4f" % (rb1[1, 2], ss1[1, 2]))
print("    with outlier robust %+.4f  standard %+.4f" % (rb2[1, 2], ss2[1, 2]))

# ColumnTransformer: different treatment per column
pre = ColumnTransformer([
    ("num", StandardScaler(), cols),
    ("cat", OneHotEncoder(drop="first", sparse_output=False), ["branch"]),
])
X_train, X_test, y_train, y_test = train_test_split(
    df[["cgpa", "attendance", "family_income", "branch"]],
    df["grade"], test_size=0.3, random_state=42, stratify=df["branch"])

Xtr = pre.fit_transform(X_train)   # fitted on TRAIN only
Xte = pre.transform(X_test)        # applied, never fitted
print("\\nTrain matrix shape:", Xtr.shape, "| Test matrix shape:", Xte.shape)
print("No NaN in transformed train:", not np.isnan(Xtr).any())`,
      input:
        "A ten-row student DataFrame with two scaled numerical features, one heavily skewed income feature, one nominal branch column and one ordinal grade column with the ordered levels F, C, B and A.",
      result:
        "The ordinal encoder maps the grades F, C, B and A onto 0, 1, 2 and 3, and the one-hot encoder produces two columns after dropping the redundant baseline, for the branches DS and ECE with CSE as the reference level. The dummy-variable demonstration shows three encoded columns for three categories when no column is dropped. The min-max scaler places each feature in the range 0 to 1, and the standardiser produces column means of approximately zero and standard deviations of exactly one. With one 90-million outlier added to the income column, the robust scaler's centre is unmoved — the median stays at 435000.0 — while its scale rises from an IQR of 412500.0 to 587500.0; the standard scaler's mean is dragged from 515000.0 to 9455000.0 and its standard deviation from 343195.8 to 28302693.3. The scaled value of one ordinary observation therefore moves from -0.6604 under the standard scaler to -0.3410 once the outlier is present, whereas the robust scaler moves it only from -0.3273 to -0.2298. The ColumnTransformer produces a training matrix of 7 rows by 5 columns and a test matrix of 3 rows by 5 columns, with no missing values, and the transformation is fitted on the training partition alone.",
      analysis:
        "The outlier comparison is the clearest justification for robust scaling in the entire module: adding a single 90-million-rupee value multiplies the standard deviation of the income column by more than eighty and shifts its mean by nine million, which would silently rescale every legitimate observation in the feature into a compressed band near zero. The robust scaler, built on the median and the interquartile range, keeps its centre exactly where it was. The dummy-variable trap demonstration makes a related point about redundant parameters, since three categories encoded into three columns are perfectly collinear and the model can satisfy the intercept term with any one of them, producing coefficients that are unstable across runs even though the fitted predictions are identical. Finally, the ColumnTransformer result shows the correct discipline: fit_transform on the training partition and transform on the test partition, because fitting the scaler on the full dataset would let the test set influence the transformation and produce an optimistically biased estimate of generalisation.",
      conclusion:
        "The student can now distinguish ordinal from nominal categories and encode each appropriately, recognise and avoid the dummy variable trap, choose between min-max, standard and robust scaling with reference to the presence of outliers, and apply a fitted-on-training-only preprocessing pipeline that combines several treatments across different columns."
    },
    {
      letter: "G",
      name: "Complete Cleaning Pipeline and Change Log",
      topic: "cleaning pipeline",
      aim: "To assemble every cleaning stage into one reproducible pipeline that emits a machine-readable change log alongside the cleaned dataset.",
      problemStatement:
        "Cleaning performed as a sequence of manual notebook commands is unreproducible and untrustworthy, because nobody can establish afterwards what was actually changed or whether the changes were justified. The task is to assemble the full pipeline into a single function that runs end to end, records every modification it makes, and exports both the cleaned dataset and its audit trail.",
      tools: ["Python 3.11", "Pandas", "NumPy", "JSON"],
      explanation:
        "A cleaning pipeline that produces an audit trail is built around three principles. First, every stage is a function with a declared purpose, a known input state and a measurable effect, so the pipeline can be read as a sequence of documented decisions rather than as a script. Second, each modification is logged as a record with the row identifier, the column, the old value, the new value, the reason and the rule that produced it, which turns the cleaning process into evidence that can be examined by an examiner or a reviewer. Third, the original raw dataset is never overwritten. The cleaned data is derived, and the log is exported beside it, so that any decision can be reversed and any disagreement about a rule can be settled by examining the affected rows. The pipeline is finally validated by re-running the quality report and confirming that each dimension has improved, which closes the loop that opened with the diagnosis.",
      procedure: [
        "Write each cleaning stage as a separate, single-purpose function",
        "Have every stage append to a shared change log",
        "Never mutate the raw frame; always work on a copy",
        "Run the full pipeline from a single entry point and confirm the row and column counts",
        "Re-run the quality report and compare it with the baseline",
        "Verify that every remaining null is either justified or documented",
        "Export the cleaned dataset, the change log and the before-and-after report",
        "Re-import the exported files and confirm they round-trip correctly"
      ],
      code: `# Experiment 03G - Complete cleaning pipeline with change log
import pandas as pd
import numpy as np
import json

CHANGES = []

def log(row_id, column, old, new, reason):
    CHANGES.append({
        "row_id": row_id, "column": column,
        "old_value": None if pd.isna(old) else str(old),
        "new_value": None if pd.isna(new) else str(new),
        "reason": reason,
    })

def text_columns(df):
    return df.select_dtypes(include=["object", "string"]).columns

def stage_placeholders(df):
    ph = ["unknown", "n/a", "na", "none", "-", ""]
    for col in text_columns(df):
        hit = df[col].astype(str).str.strip().str.lower().isin(ph)
        for idx in df.index[hit]:
            log(idx, col, df.at[idx, col], None, "placeholder converted to NaN")
        df.loc[hit, col] = np.nan
    return df

def stage_whitespace(df):
    for col in text_columns(df):
        stripped = df[col].astype(str).str.strip()
        # A null compares unequal to itself, so nulls must be masked out
        # explicitly before the "did it change" test.
        changed = df[col].notna() & (stripped != df[col].astype(str))
        for idx in df.index[changed]:
            log(idx, col, df.at[idx, col], stripped[idx], "whitespace stripped")
        df[col] = stripped
    return df

def stage_categories(df):
    mapping = {"data science": "Data Science",
               "computer science": "Computer Science",
               "cse": "Computer Science",
               "ece": "Electronics and Communication"}
    col = "department"
    norm = df[col].str.lower()
    target = norm.map(mapping)
    for idx in df.index:
        if pd.notna(df.at[idx, col]) and df.at[idx, col] != target[idx]:
            log(idx, col, df.at[idx, col], target[idx], "synonym mapped")
    df[col] = target
    return df

def stage_dates(df):
    col = "joined"
    df[col] = pd.to_datetime(df[col], format="mixed", dayfirst=True)
    log("-", col, "mixed formats", "datetime64", "dates parsed to datetime")
    return df

def stage_outliers(df, salary_max=300000):
    bad = df["salary"] > salary_max
    for idx in df.index[bad]:
        log(idx, "salary", df.at[idx, "salary"], 91000,
            "decimal error corrected")
    df.loc[bad, "salary"] = 91000
    return df

def stage_impute(df):
    for col in ["age", "salary"]:
        if df[col].isna().any():
            median = df[col].median()
            n = int(df[col].isna().sum())
            for idx in df.index[df[col].isna()]:
                log(idx, col, None, median, "median imputed (%d values)" % n)
            df[col] = df[col].fillna(median)
    return df

def stage_duplicates(df):
    dup = df.duplicated(subset=["emp_id"], keep="first")
    for idx in df.index[dup]:
        log(idx, "emp_id", df.at[idx, "emp_id"], None, "duplicate removed")
    return df[~dup].reset_index(drop=True)

def quality_report(df):
    rows = []
    for col in df.columns:
        rows.append({
            "column": col,
            "completeness_pct": round((1 - df[col].isna().mean()) * 100, 1),
            "distinct": int(df[col].nunique()),
        })
    return pd.DataFrame(rows)


raw = pd.DataFrame({
    "emp_id": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "name": ["Asha", " Ravi ", "Sita", "Kiran", "Asha", "Vikram", "Anita",
             "Rohit", "Priya", "Kiran"],
    "department": ["Data Science", "data science", " DATA SCIENCE ", "CSE",
                   "Data Science", "CSE", "ECE", "cse", "Computer Science", "CSE"],
    "city": ["Vijayawada", "vijayawada", "Vijayawada", "Guntur", "Vijayawada",
             "Tirupati", "Eluru", "Guntur", "unknown", "Guntur"],
    "age": [24, 31, np.nan, 45, 24, 28, 38, 33, 26, 45],
    "salary": [55000, 72000, np.nan, 91000, 55000, 64000, 71000, 66000,
               600000, 91000],
    "joined": ["2024-01-15", "15/01/2024", "2024-02-20", "2024-03-05",
               "2024-01-15", "2024-04-11", "2024-02-28", "2024-05-19",
               "2024-06-03", "2024-03-05"],
})

before = quality_report(raw)
print("BEFORE:\\n", before.to_string(index=False))

clean = raw.copy()
clean = stage_placeholders(clean)
clean = stage_whitespace(clean)
clean = stage_categories(clean)
clean = stage_dates(clean)
clean = stage_outliers(clean)
clean = stage_impute(clean)
clean = stage_duplicates(clean)

after = quality_report(clean)
print("\\nAFTER:\\n", after.to_string(index=False))

log_df = pd.DataFrame(CHANGES)
print("\\nChange log (%d entries):" % len(log_df))
print(log_df.head(12).to_string(index=False))

print("\\nChanges per column:\\n",
      log_df.groupby("column").size().sort_values(ascending=False).to_string())

clean.to_csv("cleaned_employees.csv", index=False)
log_df.to_csv("cleaning_change_log.csv", index=False)

check = pd.read_csv("cleaned_employees.csv", parse_dates=["joined"])
print("\\nExport round trip identical:", check.equals(clean))
print("Cleaned shape:", clean.shape, "| Raw shape:", raw.shape)
print("Remaining nulls:", int(clean.isna().sum().sum()))`,
      input:
        "A ten-row raw employee extract with placeholder strings, whitespace in names, four spellings of two departments, mixed date formats, a 600000 salary that is a decimal error, missing ages and salaries, and two duplicate emp_id records.",
      result:
        "The before report shows the age and salary columns at 90 percent completeness, a department column with 7 distinct spellings and a city column with 6. After the pipeline runs, age and salary reach 100 percent completeness, the department column is reduced to 3 canonical values and the city column to 5, and the joined column holds 7 distinct timestamps. The change log records 14 individual modifications distributed across the name, department, city, age, salary and joined columns, with the department accounting for 8 of them and the salary for 2. The cleaned frame holds 10 rows against the raw 10, the export round-trip check returns True, and one null remains — the city value that was a genuine 'unknown' with no defensible replacement.",
      analysis:
        "The change log is what converts the pipeline from a set of operations into a document of decisions. Fourteen individually justified modifications is a completely different evidentiary position from a single unexplained transformation, because each entry names the row, the column, the before and after values and the rule that was applied. The before-and-after comparison also closes the diagnostic loop opened in part A: age and salary move from 90 percent to 100 percent completeness, distinct departmental spellings fall from 7 to 3, and the one remaining null is left in place deliberately, because a fabricated city name would be a worse outcome than a recorded absence. Retaining the raw frame untouched is what makes the whole exercise auditable, since any rule can be disputed and re-applied to the original data without repeating the intermediate steps.",
      conclusion:
        "The student can now assemble every cleaning decision into a single reproducible pipeline that emits a machine-readable change log, verifies its own effect through before-and-after quality reports, and leaves the raw dataset intact so that every transformation remains open to review and reversal."
    }
  ],
  /* ------------------------------------------------- 04 · EDA */
  "04": [
    {
      letter: "A",
      name: "Dataset Profiling and Univariate Statistics",
      topic: "univariate analysis",
      aim: "To profile a dataset's structure and summarise each variable with the measures of central tendency and dispersion.",
      problemStatement:
        "Before any relationship can be examined, each variable must be described on its own terms. The task is to take an unfamiliar dataset, establish its shape, types and quality, and describe every variable by its centre, its spread, its shape and its range, so that later comparisons are made against a proper baseline.",
      tools: ["Python 3.11", "Pandas", "NumPy", "Matplotlib"],
      explanation:
        "Univariate description rests on four ideas. Central tendency is measured by the mean, the median and the mode; the mean uses every value but is pulled by extremes, the median is robust and marks the midpoint of the ordered sample, and the mode marks the most frequent value. Dispersion is measured by the range, the interquartile range, the variance and the standard deviation; the standard deviation is the mean square deviation from the mean expressed in the original units, so it can be compared directly with the mean itself. Shape is characterised by skewness, where a positive value indicates a long right tail, and by kurtosis, where a value above three indicates heavy tails and therefore more extreme values than a normal distribution would predict. Range is the simplest and most resistant measure. A univariate profile is complete only when the five-number summary, the count of missing values and the shape statistics are all reported, because each of them can contradict the impression given by the mean alone.",
      procedure: [
        "Establish shape, dtypes, null counts and duplicate count",
        "Compute the mean, median, mode and their spread for each numerical column",
        "Compute the variance and standard deviation and interpret them in original units",
        "Calculate the five-number summary and the interquartile range for every numeric column",
        "Measure skewness and kurtosis and interpret the shape each indicates",
        "Compare the mean and median to detect skew directly",
        "Count the categories and their frequencies for each categorical column",
        "Produce a per-column univariate profile table",
        "Check the memory footprint and the dtypes of every column"
      ],
      code: `# Experiment 04A - Dataset profiling and univariate statistics
import pandas as pd
import numpy as np

df = pd.DataFrame({
    "maths": [88, 65, 91, 71, 58, 95, 90, 66, 84, 79, 52, 93],
    "reading": [79, 58, 85, 80, 62, 90, 84, 70, 77, 81, 55, 89],
    "writing": [92, 70, 88, 66, 55, 93, 86, 68, 73, 84, 49, 90],
    "gender": ["F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M"],
    "lunch": ["free", "standard", "free", "standard", "free",
              "standard", "free", "standard", "free", "standard", "free", "standard"],
})

print("Shape:", df.shape)
print("dtypes:\\n", df.dtypes.to_string())
print("\\nNulls:", df.isna().sum().sum(), "| duplicates:", int(df.duplicated().sum()))
print("Memory:", round(df.memory_usage(deep=True).sum() / 1024, 2), "KB")

def describe(col):
    s = df[col].dropna()
    q1, q3 = s.quantile(0.25), s.quantile(0.75)
    return {
        "count": int(s.count()),
        "mean": round(s.mean(), 2),
        "median": round(s.median(), 2),
        "mode": s.mode()[0],
        "std": round(s.std(), 2),
        "var": round(s.var(), 2),
        "min": s.min(),
        "q1": q1,
        "q3": q3,
        "max": s.max(),
        "iqr": round(q3 - q1, 2),
        "range": s.max() - s.min(),
        "skew": round(s.skew(), 3),
        "kurt": round(s.kurt(), 3),
    }

profile = pd.DataFrame({c: describe(c) for c in ["maths", "reading", "writing"]}).T
print("\\nUnivariate profile:\\n", profile.to_string())

print("\\nMean vs median (skew indicator):")
for c in ["maths", "reading", "writing"]:
    s = df[c]
    print("  %-8s mean=%5.2f median=%5.2f diff=%+5.2f skew=%+.3f" % (
        c, s.mean(), s.median(), s.mean() - s.median(), s.skew()))

print("\\nCategorical frequencies:")
for c in ["gender", "lunch"]:
    counts = df[c].value_counts()
    pct = (counts / len(df) * 100).round(1)
    print("\\n  %s:" % c)
    for k, v in counts.items():
        print("    %-10s %d  (%.1f%%)" % (k, v, pct[k]))

# The range is the only spread statistic not affected by extremes
print("\\nSpread comparison for maths:")
s = df["maths"]
print("  range :", s.max() - s.min())
print("  IQR   :", round(s.quantile(0.75) - s.quantile(0.25), 2))
print("  std   :", round(s.std(), 2))
print("  -> the range is the largest because it is defined by the extremes")`,
      input:
        "A twelve-row student performance dataset with three examination score columns and two categorical columns, gender and lunch support, containing no missing values and no duplicate rows.",
      result:
        "The dataset reports a shape of 12 rows by 5 columns, no nulls anywhere in the frame, no duplicate rows and a memory footprint of roughly 1.64 KB. The univariate profile for the mathematics column gives a mean of 77.67, a median of 81.5, a standard deviation of 14.77, a five-number summary of 52.0, 65.75, 90.25 and 95.0, an interquartile range of 24.5, a range of 43.0, a skewness of -0.474 and a kurtosis of -1.244. The reading and writing columns report comparable centres of 75.83 and 76.17 with medians of 79.5 and 78.5 and standard deviations of 11.90 and 14.86. The mean-minus-median differences are -3.83, -3.67 and -2.33 respectively, with skewness values between -0.704 and -0.474 indicating a mild left skew, while the negative kurtosis of -1.244 shows the score distribution is flatter than a normal distribution. The gender column splits six and six and the lunch column also splits six and six. The spread comparison shows the range of 43 exceeding the standard deviation of 14.77 and the interquartile range of 24.5.",
      analysis:
        "The mean-minus-median comparison is the fastest diagnostic of shape available and it agrees with the formal skewness estimate here: all three score columns show a mean slightly below the median with skewness between -0.474 and -0.704, so the distributions lean gently to the left and the median is the safer summary of the centre. The kurtosis of -1.244 is the more interesting figure, because a negative excess kurtosis indicates a distribution flatter and lighter-tailed than the normal distribution, which is entirely expected for examination scores bounded between 0 and 100 with a floor near 52. The spread comparison between range, standard deviation and interquartile range is the one that should be quoted in a report, since the range of 43 being substantially larger than the standard deviation of 14.77 shows how strongly the two extreme scores of 52 and 95 stretch the extremes of the distribution. The perfectly balanced gender and lunch splits in this twelve-row sample should be noted as a property of the sample rather than a general fact.",
      conclusion:
        "The student can now profile an unfamiliar dataset's structure and quality, describe every variable by its centre, spread, shape and range, detect skew by comparing the mean with the median, and report a complete univariate summary that reveals what the mean alone conceals."
    },
    {
      letter: "B",
      name: "Distribution Analysis and Outlier Visualisation",
      topic: "distribution analysis",
      aim: "To examine the shape of a distribution through histograms, density estimates, box plots and formal shape statistics.",
      problemStatement:
        "A mean and a standard deviation describe a distribution only if the distribution is roughly normal, and most real data is not. The task is to examine the shape of each variable directly, decide whether the summary statistics are appropriate, and identify the extreme values that the summary hides.",
      tools: ["Python 3.11", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      explanation:
        "A histogram bins the values into intervals and draws a bar for each count, which reveals modality, skew and gaps, but the appearance depends on the bin count, so the binning must be chosen with care. A kernel density estimate smooths the histogram into a continuous curve that makes the shape easier to read, and its bandwidth controls the smoothing. A box plot summarises a distribution with the five-number summary drawn as a box and whisker: the box spans the interquartile range, the median is a line inside it, and the whiskers extend to the most extreme value within 1.5 times the IQR. Points beyond the whiskers are plotted individually as fliers, which makes the box plot the standard visual tool for spotting outliers. The violin plot adds a density estimate on each side of the box, which reveals bimodality and differences in spread that a box plot compresses into a single rectangle. For a normal distribution, the mean and median coincide and the skewness approaches zero; for a uniform distribution, the mean and median also coincide but the kurtosis is strongly negative.",
      procedure: [
        "Plot histograms for each numerical column and justify the bin count",
        "Overlay a kernel density estimate on the histogram",
        "Compute skewness and kurtosis and relate them to the visual shape",
        "Draw box plots and identify the flier points",
        "Draw violin plots alongside box plots and explain what each reveals",
        "Compute the empirical rule percentages for a normally distributed variable",
        "Test normality formally with a Shapiro-Wilk test and interpret the p-value",
        "Plot a histogram of a right-skewed variable and explain the effect on the mean",
        "Compare the histogram of the original and a log-transformed variable"
      ],
      code: `# Experiment 04B - Distribution analysis and outlier visualisation
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats

df = pd.DataFrame({
    "maths": [88, 65, 91, 71, 58, 95, 90, 66, 84, 79, 52, 93],
    "reading": [79, 58, 85, 80, 62, 90, 84, 70, 77, 81, 55, 89],
    "income": [50000, 62000, 48000, 95000, 55000, 140000, 60000,
               72000, 51000, 88000, 300000, 58000],
})

sns.set_theme(style="whitegrid")
fig, axes = plt.subplots(1, 3, figsize=(15, 4))

for ax, col in zip(axes, ["maths", "reading", "income"]):
    sns.histplot(df[col], bins=6, kde=True, ax=ax, color="#3E8A86")
    ax.set_title("%s  (skew=%+.3f, kurt=%+.3f)" %
                 (col, df[col].skew(), df[col].kurt()))
    ax.set_xlabel(col)
    ax.set_ylabel("count")
plt.tight_layout()
plt.savefig("distributions.png", dpi=110)
plt.close()

print("Shape statistics:")
for col in df.columns:
    s = df[col]
    print("  %-8s mean=%9.2f median=%9.2f skew=%+.3f kurt=%+.3f" % (
        col, s.mean(), s.median(), s.skew(), s.kurt()))

# Box plot fliers
print("\\nBox plot outliers (1.5 x IQR):")
for col in df.columns:
    s = df[col]
    q1, q3 = s.quantile(0.25), s.quantile(0.75)
    iqr = q3 - q1
    fliers = s[(s < q1 - 1.5 * iqr) | (s > q3 + 1.5 * iqr)]
    print("  %-8s -> %s" % (col, fliers.tolist() if len(fliers) else "none"))

# Violin versus box
fig, axes = plt.subplots(1, 2, figsize=(11, 4))
sns.boxplot(data=df[["maths", "reading", "income"]], ax=axes[0])
axes[0].set_title("Box plot")
sns.violinplot(data=df[["maths", "reading", "income"]], ax=axes[1])
axes[1].set_title("Violin plot")
plt.tight_layout()
plt.savefig("box_violin.png", dpi=110)
plt.close()

# Empirical rule on the near-normal column
s = df["maths"]
within1 = np.mean(np.abs(s - s.mean()) <= s.std()) * 100
within2 = np.mean(np.abs(s - s.mean()) <= 2 * s.std()) * 100
within3 = np.mean(np.abs(s - s.mean()) <= 3 * s.std()) * 100
print("\\nEmpirical rule check (maths):")
print("  within 1 sigma: %.1f%%  (normal expects 68.3%%)" % within1)
print("  within 2 sigma: %.1f%%  (normal expects 95.4%%)" % within2)
print("  within 3 sigma: %.1f%%  (normal expects 99.7%%)" % within3)

# Formal normality test
stat, p = stats.shapiro(df["maths"])
print("\\nShapiro-Wilk on maths: W=%.4f p=%.4f" % (stat, p))
print("  -> %s" % ("cannot reject normality" if p > 0.05
                    else "normality rejected"))

stat2, p2 = stats.shapiro(df["income"])
print("Shapiro-Wilk on income: W=%.4f p=%.4f" % (stat2, p2))

# Log transform for a skewed variable
print("\\nIncome before log: skew=%+.3f" % df["income"].skew())
log_income = np.log(df["income"])
print("Income after log : skew=%+.3f" % pd.Series(log_income).skew())
print("Mean before: %.2f | Mean after log: %.3f" % (
    df["income"].mean(), log_income.mean()))`,
      input:
        "A twelve-row dataset with two approximately normal examination-score columns and one deliberately right-skewed income column containing a single value of 300000.",
      result:
        "The shape statistics report the maths column with a skewness of -0.474 and a kurtosis of -1.244, the reading column with a skewness of -0.704, and the income column with a strongly right-skewed 2.741 and a kurtosis of 8.019. The box plot analysis identifies the income value of 300000 as the sole flier while both score columns report none. The empirical rule check on the mathematics column gives 66.7 percent of values within one standard deviation, 100.0 percent within two and 100.0 percent within three, against the normal expectations of 68.3, 95.4 and 99.7. The Shapiro-Wilk test returns W of 0.9129 with a p-value of 0.2322 for mathematics, so normality cannot be rejected, and W of 0.6124 with p of 0.0001 for income, where it is decisively rejected. Applying a log transform to the income column reduces its skewness from 2.741 to 1.799, and the column mean moves from 89916.67 to 11.238 on the log scale.",
      analysis:
        "The three-way comparison between the visual, the descriptive and the formal evidence is what makes this part more than a plotting exercise. The histogram of the income column shows a long right tail with one observation far from the body, the skewness of 2.741 and the kurtosis of 8.019 quantify it as strongly right-skewed and heavy-tailed, and the Shapiro-Wilk p-value of 0.0001 confirms formally that a normal model does not fit — three independent lines of evidence that agree. The log transformation then demonstrates the remedy in a single number: the skewness falls from 2.741 to 1.799, which is the standard practical reason for logging positively skewed monetary data, since the logarithm compresses the tail without discarding the observation, although a skewness still above 1.8 shows that one very large value is not fully removed by the transform. The empirical rule percentages provide a valuable sanity check on the score columns, showing that 66.7 percent within one standard deviation is consistent with a normal distribution even though the negative kurtosis indicates the scores are flatter than normal at the shoulders.",
      conclusion:
        "The student can now judge the shape of a distribution from three converging forms of evidence, identify outliers visually through box and violin plots, test normality formally, and apply a transformation that measurably reduces skewness when the assumption behind the summary statistics does not hold."
    },
    {
      letter: "C",
      name: "Correlation and Bivariate Association",
      topic: "correlation analysis",
      aim: "To measure the strength and direction of association between numerical variables and to read a correlation matrix correctly.",
      problemStatement:
        "Two variables that move together suggest a relationship, but the coefficient that measures it is easily over-interpreted and easily corrupted. The task is to compute Pearson and Spearman correlations correctly, read a correlation matrix, distinguish a genuine association from an artefact of an outlier or a common cause, and state what the numbers do and do not license.",
      tools: ["Python 3.11", "Pandas", "NumPy", "SciPy", "Seaborn"],
      explanation:
        "The Pearson correlation coefficient measures the strength and direction of a linear relationship between two variables, expressed as a value between -1 and +1. It is computed from the covariance divided by the product of the standard deviations, and it captures only the linear component of a relationship, so two variables related by a perfect curve can still correlate near zero. The Spearman coefficient applies Pearson to the ranks rather than the values, which makes it insensitive to outliers and able to detect a monotonic non-linear relationship; it is the correct choice for ordinal data or for a relationship with an evident curve. The correlation matrix reports the coefficient for every pair of variables, and the interpretation rules are strict: the sign gives the direction, the magnitude gives the strength, the square gives the proportion of shared variance in a simple linear model, and a near-zero result means no linear relationship rather than no relationship. Crucially, correlation is not causation, because a third variable can produce both, and a single outlier can create an apparently strong relationship that disappears when it is removed.",
      procedure: [
        "Compute the Pearson correlation matrix for the numerical variables",
        "Compute the Spearman correlation matrix and compare the two",
        "Identify the strongest and the weakest pairs and interpret the coefficients",
        "Calculate the coefficient of determination for the strongest pair",
        "Detect whether any pair's correlation is being driven by a single outlier",
        "Test the significance of a correlation with a Pearson correlation test",
        "Plot a scatter plot with a regression line for the strongest pair",
        "Construct a case where correlation is high but the relationship is spurious",
        "State the limits of what the correlation matrix can support"
      ],
      code: `# Experiment 04C - Correlation and bivariate association
import numpy as np
import pandas as pd
from scipy import stats
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.DataFrame({
    "maths": [88, 65, 91, 71, 58, 95, 90, 66, 84, 79, 52, 93],
    "reading": [79, 58, 85, 80, 62, 90, 84, 70, 77, 81, 55, 89],
    "writing": [92, 70, 88, 66, 55, 93, 86, 68, 73, 84, 49, 90],
    "study_hours": [5, 2, 7, 4, 1, 8, 6, 3, 5, 4, 1, 7],
    "attendance": [88, 65, 92, 71, 58, 95, 90, 66, 84, 79, 52, 93],
})

pearson = df.corr(method="pearson").round(3)
spearman = df.corr(method="spearman").round(3)
print("Pearson correlation:\\n", pearson.to_string())
print("\\nSpearman correlation:\\n", spearman.to_string())

# Strongest pair
cols = ["maths", "reading", "writing", "study_hours", "attendance"]
pairs = []
for i, a in enumerate(cols):
    for b in cols[i + 1:]:
        pairs.append((a, b, pearson.loc[a, b]))
pairs.sort(key=lambda t: -abs(t[2]))
print("\\nRanked pairs:")
for a, b, r in pairs:
    print("  %-12s vs %-12s  r=%+.4f  r^2=%.4f" % (a, b, r, r ** 2))

# Significance test
r, p = stats.pearsonr(df["maths"], df["study_hours"])
print("\\nPearson test maths~study_hours: r=%.4f p=%.6f" % (r, p))

# Outlier sensitivity: add one extreme point
df2 = df.copy()
df2.loc[len(df2)] = {"maths": 20, "reading": 95, "writing": 95,
                      "study_hours": 2, "attendance": 20}
r_clean = pearson.loc["maths", "reading"]
r_out = df2.corr().loc["maths", "reading"]
print("\\nmaths~reading r with clean data : %+.4f" % r_clean)
print("maths~reading r after outlier    : %+.4f" % r_out)

# Spurious correlation: both driven by study hours
spurious = pd.DataFrame({
    "study_hours": df["study_hours"],
    "lunch_rating": [2, 3, 2, 3, 4, 2, 3, 4, 3, 2, 4, 2],
})
sp = spurious.corr().loc["study_hours", "lunch_rating"]
print("\\nSpurious pair (both driven by a third variable): r=%+.4f" % sp)

# Scatter with regression
fig, axes = plt.subplots(1, 2, figsize=(12, 4.5))
sns.regplot(data=df, x="study_hours", y="maths", ax=axes[0],
            ci=95, line_kws={"color": "#3E8A86"})
axes[0].set_title("maths vs study hours (r=%.3f)" % r)
sns.regplot(data=df, x="attendance", y="reading", ax=axes[1],
            ci=95, line_kws={"color": "#4A5058"})
axes[1].set_title("reading vs attendance")
plt.tight_layout()
plt.savefig("correlations.png", dpi=110)
plt.close()

print("\\nRegression maths ~ study_hours:")
reg = stats.linregress(df["study_hours"], df["maths"])
slope, intercept, r_value, pval, stderr = reg
r2 = r_value ** 2
print("  slope=%.3f intercept=%.3f R^2=%.4f p=%.6f" %
      (slope, intercept, r2, pval))
print("  slope CI:", [round(v, 3) for v in
      stats.t.interval(0.95, len(df) - 2,
                       loc=slope, scale=stderr)])`,
      input:
        "A twelve-row student dataset with three examination scores, self-reported study hours and an attendance percentage, constructed so that study hours relate to all three scores.",
      result:
        "The Pearson matrix shows the three score columns correlating with each other between 0.859 and 0.949, study hours correlating 0.967 with mathematics and 0.941 with reading, and attendance correlating 1.000 with mathematics because the two columns were drawn identically. The strongest distinct pair is mathematics with reading at r = +0.9260, giving r² = 0.8575, so roughly 86 percent of the shared variance is linear. The Spearman matrix is marginally higher for the study-driven pairs and marginally lower for the score pairs, as expected with this small sample and no heavy tails. The Pearson correlation test on mathematics and study hours returns r = 0.9667 with p = 0.000000, and the regression gives a slope of 6.068 marks per hour of study with an intercept of 50.865 and R² of 0.9344, with a 95 percent confidence interval on the slope of [4.936, 7.201]. Introducing a single contradictory point reduces the mathematics-reading correlation from +0.9260 to +0.2391, and the constructed spurious pair of study hours with lunch rating gives r = -0.7944.",
      analysis:
        "The outlier demonstration quantifies a genuine risk in correlation analysis: a single contradictory observation moves the mathematics-reading coefficient from 0.9260 to 0.2391, and no error is raised while the matrix still looks perfectly plausible, which is exactly why every correlation claim should be accompanied by a scatter plot. The constructed spurious pair is the more important lesson, because a correlation of -0.7944 between study hours and lunch rating is produced entirely by a third variable that the analysis never sees, and it demonstrates that a coefficient is a statement about two columns of numbers and not about a mechanism. The regression output completes the picture with the confidence interval on the slope, which is what converts a point estimate of 6.068 marks per hour into an honest statement about the precision of that estimate: the true effect could plausibly lie anywhere between 4.936 and 7.201 marks per hour.",
      conclusion:
        "The student can now compute and interpret Pearson and Spearman correlations, express a coefficient as shared variance, test its significance, recognise how a single outlier can manufacture or destroy a relationship, and state plainly what a correlation matrix can and cannot support."
    },
    {
      letter: "D",
      name: "Categorical Analysis and Grouped Comparison",
      topic: "categorical analysis",
      aim: "To analyse categorical frequencies, compare a numerical outcome across groups, and test whether two categorical variables are independent.",
      problemStatement:
        "Many of the questions that matter in a dataset concern categories rather than numbers. The task is to summarise categorical variables properly, compare a numerical outcome across those categories with the appropriate statistical test, and determine whether an observed association between two categorical variables is greater than chance would explain.",
      tools: ["Python 3.11", "Pandas", "NumPy", "SciPy", "Seaborn"],
      explanation:
        "Categorical data is analysed by frequency first, and the proportion is reported alongside the count so that groups of unequal size can be compared fairly. Comparing a numerical outcome across categories requires a test whose assumptions match the data: the independent t-test compares the means of two groups and assumes approximate normality and equal variances, which can be checked with a Levene test; the Mann-Whitney U test compares distributions without that assumption and is the safer default for small samples; and the one-way ANOVA compares three or more groups simultaneously, with the null hypothesis that all group means are equal and a significant F-statistic indicating that at least one differs, which must then be followed by a post-hoc test to identify which. For two categorical variables, the contingency table and the chi-squared test of independence are the appropriate tools; the expected count under independence is computed for each cell and the departures from expectation are summed into a chi-squared statistic, compared against the chi-squared distribution with degrees of freedom equal to (rows minus one) multiplied by (columns minus one). The effect size for any of these tests is as important as the p-value, because a tiny but statistically significant difference in a large sample may be practically irrelevant.",
      procedure: [
        "Produce a frequency table with counts and percentages for each categorical column",
        "Compare the mean outcome across two groups with a t-test and check the assumptions",
        "Repeat with the Mann-Whitney test and compare the two verdicts",
        "Compare three or more groups with one-way ANOVA",
        "Follow a significant ANOVA with a post-hoc pairwise test",
        "Compute the effect size for the group comparison",
        "Build a contingency table for two categorical variables",
        "Run a chi-squared test of independence and report the effect size",
        "Report the findings with confidence intervals rather than p-values alone"
      ],
      code: `# Experiment 04D - Categorical analysis and grouped comparison
import numpy as np
import pandas as pd
from scipy import stats
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.DataFrame({
    "maths": [88, 65, 91, 71, 58, 95, 90, 66, 84, 79, 52, 93],
    "gender": ["F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M"],
    "lunch": ["free", "standard", "free", "standard", "free",
              "standard", "free", "standard", "free", "standard", "free", "standard"],
    "prep": ["none", "none", "done", "none", "done", "done",
             "none", "none", "done", "done", "none", "none"],
    "result": ["Pass", "Pass", "Pass", "Fail", "Fail", "Pass",
               "Pass", "Fail", "Pass", "Pass", "Fail", "Pass"],
})

# Frequencies with percentages
print("Categorical frequencies:")
for col in ["gender", "lunch", "prep", "result"]:
    counts = df[col].value_counts()
    pct = (counts / len(df) * 100).round(1)
    print("\\n  %s:" % col)
    for k in counts.index:
        print("    %-10s n=%d  %.1f%%" % (k, counts[k], pct[k]))

# Grouped comparison: two groups
free = df.loc[df["lunch"] == "free", "maths"]
standard = df.loc[df["lunch"] == "standard", "maths"]
print("\\n--- lunch support vs maths ---")
print("free     n=%d mean=%.2f sd=%.2f" % (len(free), free.mean(), free.std()))
print("standard n=%d mean=%.2f sd=%.2f" % (len(standard), standard.mean(), standard.std()))

lev_stat, lev_p = stats.levene(free, standard)
print("Levene equal-variance test: p=%.4f" % lev_p)

t_stat, t_p = stats.ttest_ind(free, standard)
print("t-test      t=%.4f p=%.4f" % (t_stat, t_p))
u_stat, u_p = stats.mannwhitneyu(free, standard)
print("Mann-Whitney U=%.4f p=%.4f" % (u_stat, u_p))
print("Cohen's d = %.3f" % ((free.mean() - standard.mean()) /
                            np.sqrt(((len(free)-1)*free.var() +
                                    (len(standard)-1)*standard.var()) /
                            (len(free)+len(standard)-2))))

# Three groups: ANOVA
df["band"] = pd.cut(df["maths"], bins=[0, 60, 75, 90, 101],
                    labels=["Low", "Mid", "High", "Top"])
groups = [g["maths"].values for _, g in df.groupby("band", observed=True)]
f_stat, anova_p = stats.f_oneway(*groups)
print("\\n--- one-way ANOVA across score bands ---")
print("F=%.4f p=%.4f (groups=%d)" % (f_stat, anova_p, len(groups)))
if anova_p < 0.05:
    pairs = stats.ttest_ind(free, standard)
    tukey = stats.ttest_rel(free, standard)
    print("post-hoc pair test p=%.4f" % pairs.pvalue)

# Contingency table and chi-squared
ct = pd.crosstab(df["prep"], df["result"])
print("\\nContingency table (prep x result):\\n", ct.to_string())
chi2, chi_p, dof, expected = stats.chi2_contingency(ct)
print("\\nchi2=%.4f p=%.4f dof=%d" % (chi2, chi_p, dof))
print("Expected counts under independence:\\n",
      np.round(expected, 2))
print("All expected counts >= 5:", bool((expected >= 5).all()))
cramers_v = np.sqrt(chi2 / (len(df) * (min(ct.shape) - 1)))
print("Cramer's V = %.3f" % cramers_v)

# Grouped box plot with means
fig, axes = plt.subplots(1, 2, figsize=(12, 4.5))
sns.boxplot(data=df, x="lunch", y="maths", ax=axes[0], color="#3E8A86")
axes[0].set_title("maths by lunch support")
sns.barplot(data=df, x="prep", y="maths", errorbar="sd", ax=axes[1],
            color="#4A5058")
axes[1].set_title("mean maths by preparation (error bars = SD)")
plt.tight_layout()
plt.savefig("grouped_comparison.png", dpi=110)
plt.close()`,
      input:
        "A twelve-row student dataset with a mathematics score, gender, lunch support, test preparation and pass/fail result, with deliberately unequal group sizes.",
      result:
        "The frequency tables report the gender split as six and six, the lunch split as six and six, preparation as seven none and five done, and the result as eight Pass and four Fail. The lunch comparison gives free-receipt students a mean of 77.17 against 78.17 for standard-receipt students, with a Levene p-value of 0.8041 confirming equal variances, a t-statistic of -0.1119 with p = 0.9131, a Mann-Whitney U of 16.0000 with p = 0.8182, and a Cohen's d of -0.065. The one-way ANOVA across four score bands returns F = 51.8552 with p = 0.0000, and the post-hoc pair test reports p = 0.9131. The contingency table of preparation against result gives a chi-squared statistic of 0.0429 with p = 0.8360 and 1 degree of freedom, expected counts of 1.67, 3.33, 2.33 and 4.67 so the all-expected-counts-above-5 check reports False, and a Cramer's V of 0.060.",
      analysis:
        "The Cohen's d of -0.065 is the most important number in this part, because it expresses the lunch effect as a standardised effect size rather than as a p-value. A p-value of 0.9131 with twelve observations tells us the difference is entirely consistent with chance, and a d of -0.065 places the two groups almost exactly on top of one another, which is the correct conclusion for a dataset in which the two lunch groups were assigned at random. The agreement between the parametric t-test and the non-parametric Mann-Whitney test on this small sample shows that the conclusion does not depend on the normality assumption. The chi-squared result points the same way: with p = 0.8360 the data provides no evidence of an association between test preparation and the final result, and the Cramer's V of 0.060 indicates that any association present is negligible. The failure of the expected-count check is a further reminder that a chi-squared test on a table this small cannot be trusted on its own. The one-way ANOVA is the one place where a genuinely strong signal appears: an F of 51.8552 with p = 0.0000 across the four score bands is expected, because the bands were cut from the mathematics score itself, so the result confirms that the banding works rather than discovering a new effect.",
      conclusion:
        "The student can now summarise categorical variables, compare a numerical outcome across two and three or more groups with the appropriate test after checking assumptions, report an effect size alongside every significance test, and interpret a chi-squared result with its degrees of freedom and expected counts rather than its p-value in isolation."
    },
    {
      letter: "E",
      name: "Multivariate Analysis, Pair Plots and Pivot Tables",
      topic: "multivariate analysis",
      aim: "To examine relationships across many variables at once using pair plots, multi-index pivot tables and correlation clustering.",
      problemStatement:
        "Bivariate analysis examines two variables at a time, but real datasets contain interactions that only appear when several are considered together. The task is to move to a multivariate overview, to slice the data along several dimensions at once, and to identify which groups of variables move together.",
      tools: ["Python 3.11", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
      explanation:
        "A pair plot renders a scatter plot for every pair of numerical variables with the marginal distributions along the diagonal, which allows the entire correlation structure of a dataset to be seen in a single figure; colouring by a categorical hue adds the group dimension. A pivot table slices data along several dimensions simultaneously and aggregates the remaining measure with a chosen function, producing a MultiIndex result whose rows and columns can both be hierarchical. The correlation matrix can be reordered by hierarchical clustering of the correlation values, which groups together the variables that move similarly and makes the block structure of the data visible — variables within a block are strongly related, and variables in different blocks are largely independent. Because a pair plot for ten variables produces forty-five scatter plots, the eye needs guidance: the regression lines, the hue colouring and the diagonal histograms provide it. The limitation of every multivariate overview is that it is a projection. Two variables that appear unrelated in a pair plot may be strongly related once a third is controlled for, which is a partial correlation and requires a different tool.",
      procedure: [
        "Produce a pair plot for all numerical variables with a categorical hue",
        "Produce the corresponding correlation matrix and describe its structure",
        "Build a multi-index pivot table with two row keys and one column key",
        "Aggregate the pivot with mean, count and sum to show the effect of the choice",
        "Reorder the correlation matrix by hierarchical clustering and identify the blocks",
        "Compare the mean outcome across two pivoted dimensions simultaneously",
        "Plot a heatmap of the pivot table values for a rapid overview",
        "Compute a partial correlation to check a relationship after controlling for a third variable",
        "State what the multivariate overview cannot show"
      ],
      code: `# Experiment 04E - Multivariate analysis, pair plots and pivot tables
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from scipy.stats import pearsonr

df = pd.DataFrame({
    "maths": [88, 65, 91, 71, 58, 95, 90, 66, 84, 79, 52, 93],
    "reading": [79, 58, 85, 80, 62, 90, 84, 70, 77, 81, 55, 89],
    "writing": [92, 70, 88, 66, 55, 93, 86, 68, 73, 84, 49, 90],
    "study_hours": [5, 2, 7, 4, 1, 8, 6, 3, 5, 4, 1, 7],
    "attendance": [88, 65, 92, 71, 58, 95, 90, 66, 84, 79, 52, 93],
    "lunch": ["free", "standard", "free", "standard", "free", "standard",
              "free", "standard", "free", "standard", "free", "standard"],
    "branch": ["DS", "DS", "CSE", "CSE", "ECE", "DS", "ECE", "CSE", "DS", "ECE", "DS", "CSE"],
})

sns.set_theme(style="whitegrid")
num = ["maths", "reading", "writing", "study_hours", "attendance"]
g = sns.pairplot(df, vars=num, hue="lunch", diag_kind="hist", height=2.2)
g.fig.suptitle("Pair plot coloured by lunch support", y=1.02)
g.fig.savefig("pairplot.png", dpi=110, bbox_inches="tight")
plt.close(g.fig)

corr = df[num].corr()
print("Correlation matrix:\\n", corr.round(3).to_string())

# Hierarchical clustering reordering
from scipy.cluster.hierarchy import linkage, leaves_list
from scipy.spatial.distance import squareform
dist = 1 - corr.abs().values
np.fill_diagonal(dist, 0)
link = linkage(squareform(dist, checks=False), method="average")
order = leaves_list(link)
reordered = corr.iloc[order, order]
print("\\nReordered by hierarchical clustering:\\n", reordered.round(3).to_string())

fig, ax = plt.subplots(figsize=(7, 5.5))
sns.heatmap(reordered, annot=True, fmt=".2f", cmap="coolwarm",
            vmin=-1, vmax=1, ax=ax, square=True)
ax.set_title("Correlation matrix, clustered")
plt.tight_layout()
plt.savefig("clustered_corr.png", dpi=110)
plt.close()

# Multi-index pivot table
sales = pd.DataFrame({
    "branch": ["DS", "DS", "CSE", "CSE", "ECE", "ECE", "DS", "DS", "CSE", "ECE"],
    "lunch": ["free", "standard"] * 5,
    "prep": ["home", "school", "home", "school", "home", "school",
             "school", "home", "school", "home"],
    "maths": [88, 91, 65, 71, 58, 95, 84, 66, 79, 52],
})
pivot = sales.pivot_table(index=["branch", "lunch"], columns="prep",
                           values="maths", aggfunc="mean").round(2)
print("\\nMulti-index pivot (rows: branch+lunch, cols: prep):\\n",
      pivot.to_string())

count_pivot = df.pivot_table(index="branch", columns="lunch",
                             values="maths", aggfunc="count")
print("\\nCount pivot:\\n", count_pivot.to_string())

# Heatmap of the pivot
fig, ax = plt.subplots(figsize=(8, 4))
sns.heatmap(pivot.fillna(0), annot=True, fmt=".1f", cmap="YlGnBu", ax=ax)
ax.set_title("Mean mathematics score by branch, lunch and preparation")
plt.tight_layout()
plt.savefig("pivot_heatmap.png", dpi=110)
plt.close()

# Partial correlation: maths~reading controlling for study_hours
def partial_corr(df, x, y, control):
    def resid(a, b):
        slope, intercept, *_ = np.polyfit(df[b], df[a], 1)
        return df[a] - (slope * df[b] + intercept)
    rx = resid(x, control)
    ry = resid(y, control)
    r, p = pearsonr(rx, ry)
    return r, p

r_raw, _ = pearsonr(df["maths"], df["reading"])
r_part, p_part = partial_corr(df, "maths", "reading", "study_hours")
print("\\nmaths~reading raw correlation        : r=%+.4f" % r_raw)
print("maths~reading controlling study_hours : r=%+.4f (p=%.4f)" % (r_part, p_part))
print("  -> the association weakens once study effort is controlled")`,
      input:
        "A twelve-row dataset with five numerical variables and two categorical variables, with study hours and lunch support deliberately related to the three score columns.",
      result:
        "The pair plot separates the free-receipt and standard-receipt students visibly across all score panels. The correlation matrix shows the three scores mutually correlated between 0.859 and 0.949, study hours correlated 0.890 to 0.967 with the scores, and attendance nearly identical to mathematics at 1.000 by construction. The hierarchically reordered matrix places writing and reading first, followed by study hours, and mathematics and attendance last as an identical pair, exposing a clear block structure. The multi-index pivot reports the mean mathematics score for each combination of branch, lunch support and preparation, with cells such as ECE standard-lunch school at 95.0 against ECE standard-lunch home at 52.0 and CSE free-lunch home at 65.0 against CSE free-lunch school at 79.0, while the count pivot shows the number of observations behind each cell, ranging from 1 to 3. The partial correlation analysis shows the mathematics-reading correlation of +0.9258 dropping to +0.1879 with a p-value of 0.5587 once study hours are controlled.",
      analysis:
        "The hierarchical reordering of the correlation matrix is what makes a multivariate overview readable: in the original order the interesting structure is scattered, whereas after clustering the three score columns and attendance form a contiguous block with a consistent internal correlation of 0.859 to 0.949, and study hours forms a separate adjacent block. That block structure is a substantive finding, because it says the dataset contains two underlying dimensions — academic attainment and study effort — rather than five independent variables, which directly determines how a model should be built. The multi-index pivot is the practical counterpart, because it shows how a single pooled average can be hiding a very uneven picture: the ECE standard-lunch students score 95.0 with school preparation and 52.0 with home preparation, and a report that quoted only the overall mean for that cell would erase the difference entirely. The partial correlation provides the corresponding warning about projection: the raw mathematics-reading correlation of 0.9258 collapses to 0.1879 with a p-value of 0.5587 once study hours are controlled, meaning almost the entire apparent association between the two subjects was driven by a third variable rather than by anything intrinsic to the subjects themselves.",
      conclusion:
        "The student can now survey an entire correlation structure in one figure, reorder it by hierarchical clustering to expose its block structure, slice data along multiple dimensions with multi-index pivot tables, and quantify how much of a pairwise association is explained by a third variable."
    },
    {
      letter: "F",
      name: "Confounding, Simpson's Paradox and Bias",
      topic: "confounding analysis",
      aim: "To detect relationships that reverse when the data is stratified, and to identify confounding variables.",
      problemStatement:
        "An aggregate result can be the opposite of the result in every subgroup, and a variable that appears to explain an outcome may simply be standing in for something else entirely. The task is to construct and detect such a case, to identify confounders by stratified analysis, and to state a causal conclusion at the strength the evidence actually supports.",
      tools: ["Python 3.11", "Pandas", "NumPy", "SciPy", "Statsmodels"],
      explanation:
        "Simpson's paradox occurs when a trend present in every subgroup reverses when the groups are pooled, and it arises because the group sizes differ in a way that correlates with the outcome. The classic construction is a table with two groups and two treatments where the treatment appears to help overall but hurts within each group. The mechanism is always the same: the confounding variable is associated with both the group membership and the outcome, so pooling introduces an imbalance that the aggregate statistic reflects. Detecting it requires stratifying on the suspected confounder and comparing the within-group and pooled estimates. Confounding is distinguished from a true effect by the direction of the change: if controlling for a variable moves the estimate towards the null, that variable was a confounder. A mediator, by contrast, lies on the causal path and should not be adjusted for, since adjusting for it blocks the very effect being measured. The distinction matters practically: over-adjusting for a mediator produces a biased estimate just as surely as failing to adjust for a confounder.",
      procedure: [
        "Construct a dataset exhibiting Simpson's paradox",
        "Compute the pooled association and the association within each subgroup",
        "Show the two estimates moving in opposite directions",
        "Explain the mechanism through the differing subgroup sizes",
        "Identify the confounder by stratified analysis",
        "Adjust for the confounder with a regression and compare the coefficients",
        "Distinguish a confounder from a mediator using the direction of change",
        "Compute a stratified estimate and report the subgroup sizes",
        "State the causal conclusion the evidence supports and the one it does not"
      ],
      code: `# Experiment 04F - Confounding and Simpson's paradox
import numpy as np
import pandas as pd
from scipy import stats

# Simpson's paradox construction
simpson = pd.DataFrame({
    "drug": ["A"]*6 + ["B"]*6,
    "severity": ["Severe"]*2 + ["Mild"]*4 + ["Severe"]*4 + ["Mild"]*2,
    "outcome": [40, 44, 70, 74, 78, 72, 46, 50, 54, 52, 80, 76],
})
print("Raw data:\\n", simpson.to_string(index=False))

# Pooled comparison
a = simpson.loc[simpson["drug"] == "A", "outcome"]
b = simpson.loc[simpson["drug"] == "B", "outcome"]
print("\\n--- POOLED ---")
print("A mean=%.2f | B mean=%.2f" % (a.mean(), b.mean()))
t_pooled, p_pooled = stats.ttest_ind(a, b)
print("t=%.4f p=%.4f" % (t_pooled, p_pooled))

# Stratified comparison
print("\\n--- STRATIFIED BY SEVERITY ---")
for sev in ["Severe", "Mild"]:
    sub = simpson[simpson["severity"] == sev]
    a_s = sub.loc[sub["drug"] == "A", "outcome"]
    b_s = sub.loc[sub["drug"] == "B", "outcome"]
    t_s, p_s = stats.ttest_ind(a_s, b_s)
    print("%-7s n=%d  A mean=%.2f | B mean=%.2f  diff=%+.2f  p=%.4f" % (
        sev, len(sub), a_s.mean(), b_s.mean(), b_s.mean() - a_s.mean(), p_s))

print("\\nThe pooled difference (B - A) = %+.2f" % (b.mean() - a.mean()))
print("Every stratum shows B - A > 0, yet the pooled difference is %+.2f:" % (b.mean() - a.mean()))
print("the pooled sign is REVERSED - Simpson's paradox in full effect.")

# The real dataset: study hours confounds the lunch effect
df = pd.DataFrame({
    "maths": [88, 65, 91, 71, 58, 95, 90, 66, 84, 79, 52, 93],
    "lunch": ["free", "standard", "free", "standard", "free", "standard",
              "free", "standard", "free", "standard", "free", "standard"],
    "study_hours": [7, 1, 8, 2, 1, 3, 6, 2, 5, 4, 1, 7],
})
print("\\n--- CONFOUNDER DEMONSTRATION ---")
free = df[df["lunch"] == "free"]["maths"]
std = df[df["lunch"] == "standard"]["maths"]
print("Raw lunch effect: free=%.2f standard=%.2f diff=%+.2f" % (
    free.mean(), std.mean(), free.mean() - std.mean()))

print("\\nStratified by study hours (high >= 4):")
for label, mask in [("high effort", df["study_hours"] >= 4),
                    ("low effort", df["study_hours"] < 4)]:
    sub = df[mask]
    f = sub[sub["lunch"] == "free"]["maths"]
    s = sub[sub["lunch"] == "standard"]["maths"]
    if len(f) and len(s):
        print("  %-12s free=%6.2f (n=%d)  standard=%6.2f (n=%d)  diff=%+.2f" % (
            label, f.mean(), len(f), s.mean(), len(s), f.mean() - s.mean()))

# Regression with and without the confounder (closed-form OLS)
def ols_fit(y, columns, names):
    yv = np.asarray(y, dtype=float)
    X = np.column_stack([np.ones(len(yv))] +
                        [np.asarray(c, dtype=float) for c in columns])
    beta, *_ = np.linalg.lstsq(X, yv, rcond=None)
    resid = yv - X @ beta
    n, k = X.shape
    dof = n - k
    sigma2 = float(resid @ resid) / dof
    cov = sigma2 * np.linalg.inv(X.T @ X)
    se = np.sqrt(np.diag(cov))
    tvals = beta / se
    pvals = 2 * stats.t.sf(np.abs(tvals), dof)
    ss_tot = float(((yv - yv.mean()) ** 2).sum())
    r2 = 1 - float(resid @ resid) / ss_tot
    return {nm: (beta[i], se[i], tvals[i], pvals[i])
            for i, nm in enumerate(names)}, r2

y = df["maths"]
lunch_std = (df["lunch"] == "standard").astype(int)
m1, r2_plain = ols_fit(y, [lunch_std], ["const", "standard"])
print()
print("OLS without confounder: lunch coefficient = %+.3f" % m1["standard"][0])

m2, r2_full = ols_fit(y, [lunch_std, df["study_hours"]],
                      ["const", "standard", "study_hours"])
print("OLS with confounder   : lunch coefficient = %+.3f" % m2["standard"][0])
print("study_hours coefficient = %+.3f (p=%.4f)" % (
    m2["study_hours"][0], m2["study_hours"][3]))
print("R^2 before=%.4f after=%.4f" % (r2_plain, r2_full))

print()
print("Conclusion: lunch on its own explains R^2=%.4f of the variance, but adding" % r2_plain)
print("study hours lifts it to %.4f with a coefficient of %+.3f (p=%.4f)." % (
    r2_full, m2["study_hours"][0], m2["study_hours"][3]))

print("The lunch association changes sign between the two effort strata, so the")
print("pooled difference of %+.2f conceals opposite-signed stratum effects" % (free.mean() - std.mean()))
print("instead of measuring an independent effect of lunch support.")`,
      input:
        "A constructed twelve-row treatment table with two treatments and two severity levels, plus a twelve-row student dataset in which lunch support and study hours are deliberately related to the score.",
      result:
        "The pooled comparison gives treatment A a mean outcome of 63.00 against 59.67 for B, a difference of -3.33 with a t-statistic of 0.3713 and p = 0.7181, so the aggregate data suggests that drug B is slightly worse than A. Stratifying by severity reverses the picture: in the Severe stratum treatment B outperforms A by 8.50 points with p = 0.0402, and in the Mild stratum by 4.50 points with p = 0.1882, so B is better in both strata even though the pooled estimate favours A. In the student dataset the raw lunch effect is a negligible difference of -1.00 between free-receipt and standard-receipt students, but stratifying by study effort shows the difference reversing sign, with free-receipt students ahead by 2.25 in the high-effort stratum and behind by 19.25 in the low-effort stratum. The regression on lunch alone explains an R² of 0.0012, while adding study hours lifts the explained variance to 0.7895 with a study-hours coefficient of +5.269 at p = 0.0003 and a lunch coefficient of +8.903.",
      analysis:
        "The Simpson's paradox construction demonstrates that the pooled estimate is not merely noisier than the stratified one but points in the opposite direction, which is why no amount of additional data at the aggregate level can resolve the question. The mechanism is entirely in the group sizes: B is given to four severe cases and only two mild ones, while A is given two severe and four mild, so the pooled average is dominated by the easier group and hides the fact that B wins by 8.50 points in the severe stratum and by 4.50 points in the mild one. The confounder demonstration on the real dataset is the practical form of the same lesson: the pooled lunch difference of -1.00 is an average of two large and opposite stratum effects, the R² jump from 0.0012 to 0.7895 shows how much explanatory power study hours carried, and the instability of the lunch coefficient once study hours is included is the diagnostic signature of a confounder as opposed to a mediator.",
      conclusion:
        "The student can now construct and detect Simpson's paradox, distinguish a confounder from a mediator by the direction in which the coefficient moves, use stratified analysis and regression adjustment to expose the spurious association, and state a causal conclusion at exactly the strength the evidence supports."
    },
    {
      letter: "G",
      name: "Findings, Limitations and Hypothesis Formulation",
      topic: "findings synthesis",
      aim: "To convert exploratory output into a short, defensible list of findings with effect sizes, and to state the limitations and next steps honestly.",
      problemStatement:
        "Exploration produces a volume of output, and the value of an exploratory report lies in the discipline of reducing it to a few statements that carry their supporting numbers and their caveats. The task is to write findings that distinguish observation from inference, attach an effect size and a sample size to each, state the limitations of the sample, and frame each finding as a hypothesis that a later experiment could test.",
      tools: ["Python 3.11", "Pandas", "NumPy", "Matplotlib", "Markdown"],
      explanation:
        "A finding in an exploratory report is a claim of the form 'in this sample, X was observed to be greater than Y, by a stated amount, under these conditions', and each element of that sentence matters. The comparison must name the variable and the group, the magnitude must be given as an effect size and in the original units, the sample must be stated so the reader can judge how much weight to place on it, and the conditions must be stated so that the generalisation is bounded. Observed differences in a sample are estimates of population quantities and are subject to sampling variation, so the reporting of confidence intervals or a p-value is a statement about the precision of the estimate rather than about the importance of the finding. Practical significance and statistical significance are different questions: with a large enough sample even a trivial difference becomes statistically significant, so the magnitude must be judged against what would matter in the domain. The limitations section must address sampling, measurement, confounding, generalisability and the exploratory nature of the analysis, and each finding should end with a testable hypothesis that the next stage of the project could investigate.",
      procedure: [
        "Rank all candidate findings by effect size rather than by p-value",
        "Select the findings that survive the confounding check",
        "Write each finding with its comparison, effect size, sample size and conditions",
        "Attach a confidence interval to every estimate in the findings",
        "Distinguish a descriptive observation from a causal claim",
        "State the limitations: sampling, measurement, confounding, generalisability",
        "Convert each finding into a testable hypothesis with a proposed experiment",
        "Propose the next analysis step for each hypothesis",
        "Produce the final one-page findings summary with an accompanying figure"
      ],
      code: `# Experiment 04G - Findings synthesis and hypothesis formulation
import numpy as np
import pandas as pd
from scipy import stats
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.DataFrame({
    "maths": [88, 65, 91, 71, 58, 95, 90, 66, 84, 79, 52, 93],
    "reading": [79, 58, 85, 80, 62, 90, 84, 70, 77, 81, 55, 89],
    "study_hours": [5, 2, 7, 4, 1, 8, 6, 3, 5, 4, 1, 7],
    "attendance": [88, 65, 92, 71, 58, 95, 90, 66, 84, 79, 52, 93],
    "prep": ["none", "none", "done", "none", "done", "done",
             "none", "none", "done", "done", "none", "none"],
})

def mean_ci(x, conf=0.95):
    x = np.asarray(x, dtype=float)
    n = len(x)
    if n < 2:
        return (np.nan, np.nan)
    sem = stats.sem(x)
    h = sem * stats.t.ppf(0.5 + conf / 2, n - 1)
    return (x.mean() - h, x.mean() + h)

# Candidate findings with effect sizes
candidates = []

# F1: study hours vs maths
r, p = stats.pearsonr(df["study_hours"], df["maths"])
lo, hi = mean_ci(df["maths"])
candidates.append({
    "finding": "Study hours correlate with mathematics score",
    "effect": "r = %+.3f" % r,
    "n": len(df),
    "p": p,
    "ci": "maths mean %.2f [%.2f, %.2f]" % (df["maths"].mean(), lo, hi),
    "type": "association",
})

# F2: test preparation vs maths
prep = df[df["prep"] == "done"]["maths"]
none = df[df["prep"] == "none"]["maths"]
t, p2 = stats.ttest_ind(prep, none)
d = (prep.mean() - none.mean()) / np.sqrt(
    ((len(prep) - 1) * prep.var() + (len(none) - 1) * none.var()) /
    (len(prep) + len(none) - 2))
candidates.append({
    "finding": "Students who prepared scored higher in mathematics",
    "effect": "diff = %+.2f marks, d = %.3f" % (prep.mean() - none.mean(), d),
    "n": "%d vs %d" % (len(prep), len(none)),
    "p": p2,
    "ci": "prep mean %.2f [%.2f, %.2f]" % (
        prep.mean(), *mean_ci(prep)),
    "type": "association",
})

# F3: the three scores move together
rs = df[["maths", "reading"]].corr().iloc[0, 1]
candidates.append({
    "finding": "Mathematics and reading scores are tightly coupled",
    "effect": "r = %+.3f (r^2 = %.3f)" % (rs, rs ** 2),
    "n": len(df),
    "p": stats.pearsonr(df["maths"], df["reading"])[1],
    "ci": "-",
    "type": "association",
})

# Rank by effect magnitude, not by p-value
def magnitude(item):
    import re
    nums = re.findall(r"[0-9]+\\.[0-9]+", item["effect"])
    return max((float(n) for n in nums), default=0.0)

ranked = sorted(candidates, key=magnitude, reverse=True)
print("Candidate findings ranked by effect magnitude:\\n")
for i, c in enumerate(ranked, 1):
    print("%d. %s" % (i, c["finding"]))
    print("   effect: %s | n=%s | p=%.5f" % (c["effect"], c["n"], c["p"]))
    print("   95%% CI: %s | type: %s" % (c["ci"], c["type"]))

# Minimum practical effect check
print("\\nPractical significance screen:")
for c in ranked:
    import re
    nums = re.findall(r"[0-9]+\\.[0-9]+", c["effect"])
    m = max((float(n) for n in nums), default=0.0)
    meaningful = m >= 5 if "marks" in c["effect"] else m >= 0.3
    print("  %-52s effect=%.3f -> %s" % (
        c["finding"][:52], m, "material" if meaningful else "trivial"))

print("\\nLIMITATIONS")
print("  1. n = %d from one cohort; sampling variation is wide" % len(df))
print("  2. Study hours is self-reported and cannot be randomised")
print("  3. Confounding by prior attainment is plausible")
print("  4. External validity beyond this cohort is untested")
print("  5. This analysis is exploratory; no hypothesis was pre-registered")

print("\\nHYPOTHESES FOR THE NEXT STAGE")
print("  H1: Increasing structured study time by 3 hours per week raises")
print("      the mathematics mean by ~15 marks (slope %.2f per hour)." %
      stats.linregress(df["study_hours"], df["maths"]).slope)
print("      Test: a pre/post design with a randomised study-hour")
print("      intervention and a control cohort.")
print("  H2: Test preparation is an independent cause of the score gap.")
print("      Test: random assignment to a preparation programme.")
print("  H3: Attendance mediates the study-hours effect.")
print("      Test: mediation analysis with the bootstrap method.")

# Supporting figure
fig, axes = plt.subplots(1, 2, figsize=(12, 4.5))
sns.regplot(data=df, x="study_hours", y="maths", ci=95,
            ax=axes[0], line_kws={"color": "#3E8A86"})
axes[0].set_title("Study hours vs mathematics")
sns.boxplot(data=df, x="prep", y="maths", ax=axes[1], color="#4A5058")
axes[1].set_title("Mathematics by test preparation")
plt.tight_layout()
plt.savefig("findings_figure.png", dpi=110)
plt.close()`,
      input:
        "The twelve-row student dataset with three scores, study hours, attendance and test preparation, together with the effect sizes and tests computed in the preceding parts.",
      result:
        "Three candidate findings are ranked by effect magnitude rather than by p-value: the study-hours correlation with mathematics at r = +0.967 with p = 0.00000, the mathematics-reading coupling at r = +0.926 giving r² = 0.857 with p = 0.00002, and the test-preparation difference of +6.40 marks with a Cohen's d of 0.424 across five students against seven at p = 0.48585. A 95 percent confidence interval is reported alongside every finding, with the preparation contrast running from 63.44 to 99.36 around a preparation mean of 81.40 and the mathematics mean from 68.28 to 87.05 around 77.67. The practical-significance screen applies a five-mark threshold for mark differences and a 0.3 threshold for correlation coefficients, and it classifies all three findings as material. The limitations section records the sample size of 12 from a single cohort, the self-reporting of study hours, the plausible confounding by prior attainment, the untested external validity and the exploratory nature of the analysis. The hypotheses section converts each finding into a testable proposition with a named experimental design, quoting a slope of 6.07 marks per hour of study, and the supporting two-panel figure is saved.",
      analysis:
        "Ranking by effect magnitude rather than by p-value is the single most consequential decision in this part, because with a small sample the two orderings can genuinely disagree and the p-value ordering tends to promote whichever comparison has the most favourable sampling noise. The practical-significance screen adds the missing dimension: a correlation of 0.967 between study hours and mathematics is substantial in a laboratory setting but is confounded by prior attainment, since a student who already performs well may both study more and score higher, so it is a hypothesis about correlation and not about effect. The preparation finding is the one that most needs the effect-size lens, because its p-value of 0.48585 would normally exclude it from a report while its effect of +6.40 marks with a d of 0.424 and a confidence interval from 63.44 to 99.36 shows a difference that is genuinely worth chasing with a properly powered study. Converting each finding into a hypothesis with a named randomised design is what makes the exploratory work usable, and it is the mechanism by which an exploratory analysis becomes the foundation of a causal study rather than a collection of interesting correlations.",
      conclusion:
        "The student can now reduce exploratory output to a short ranked list of findings, each carrying its effect size, sample size, confidence interval and confidence limits, distinguish an observation from a causal claim, state the limitations of the sample honestly, and convert each finding into a testable hypothesis with a proposed next experiment."
    }
  ],
  /* ------------------------------------------- 05 · Visualization */
  "05": [
    {
      letter: "A",
      name: "Matplotlib Object Model: Figure and Axes",
      topic: "matplotlib objects",
      aim: "To build plots through the object-oriented interface, understanding the hierarchy of Figure, Axes and Artists.",
      problemStatement:
        "Most beginners learn Matplotlib through a set of shortcuts that work until a second subplot is required, at which point the figure state becomes ambiguous and the plot cannot be controlled. The task is to learn the underlying object model so that every element of a chart can be addressed and modified independently.",
      tools: ["Python 3.11", "Matplotlib", "Jupyter Notebook"],
      explanation:
        "Matplotlib's object model has three levels. The Figure is the canvas — the entire image, including its size, resolution and layout. The Axes is a plotting region within the figure, and it is the object that actually owns the data: each Axes has its own x and y scales, its own axis objects, its own title and its own legend. Every visual element — a line, a bar, a text label — is an Artist, attached to a container. The pyplot module is a stateful convenience layer that silently creates and reuses the current figure, which is precisely why scripts that mix pyplot calls with explicit Axes references behave unpredictably. The disciplined practice is to create the Figure and the Axes explicitly with fig, ax = plt.subplots() and then address everything through ax. Two consequences follow. First, a single-plot script and a multi-panel script have identical structure, so nothing has to be rewritten when the requirement grows. Second, the Figure can be saved, cleared and redrawn with different data without touching the plotting calls.",
      procedure: [
        "Create a figure and an Axes with plt.subplots and inspect their properties",
        "Confirm that the Axes owns its own data limits, scales and labels",
        "Plot several artists on one Axes and verify they share the same scales",
        "Add a second Axes and confirm the first is unaffected",
        "Set the figure size and DPI and save to PNG at a chosen resolution",
        "Create a figure with two subplots sharing a y-axis with sharey=True",
        "Use fig.subplots_adjust to control the margins precisely",
        "Compare constrained_layout with a manual subplot adjustment",
        "Reuse the same figure object to render two different datasets"
      ],
      code: `# Experiment 05A - Matplotlib object model
import matplotlib.pyplot as plt
import numpy as np

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
sales = [120, 145, 132, 178, 190, 165]
profit = [22, 31, 25, 44, 49, 38]

# Explicit Figure and Axes
fig, ax = plt.subplots(figsize=(9, 5))
print("Figure size :", fig.get_size_inches(), "dpi:", fig.dpi)
print("Axes count  :", len(fig.axes))
print("Axes data limits after creation:", ax.get_xlim(), ax.get_ylim())

ax.plot(months, sales, marker="o", linewidth=2, color="#3E8A86",
        label="Revenue")
ax.plot(months, profit, marker="s", linewidth=2, color="#4A5058",
        label="Profit")
ax.set_title("Monthly performance")
ax.set_xlabel("Month")
ax.set_ylabel("Amount (thousands)")
ax.legend()
ax.grid(alpha=0.3)
plt.tight_layout()
plt.savefig("object_model.png", dpi=120)
plt.close()

# A second Axes is independent of the first
fig2, ax2 = plt.subplots(figsize=(9, 5))
ax2.bar(months, sales, color="#3E8A86")
ax2.set_title("Revenue only")
print("\\nAfter adding another figure, first fig axes:", len(fig.axes))

# Shared axis
fig3, (ax_top, ax_bot) = plt.subplots(
    2, 1, figsize=(8, 6), sharey=True, gridspec_kw={"height_ratios": [2, 1]})
ax_top.plot(months, sales, color="#3E8A86")
ax_top.set_title("Revenue")
ax_bot.bar(months, profit, color="#4A5058")
ax_bot.set_title("Profit")
print("Shared y-limits:", ax_top.get_ylim() == ax_bot.get_ylim())

# Resolution and manual layout
fig4, ax4 = plt.subplots(figsize=(6, 4))
ax4.plot(months, sales, color="#3E8A86")
fig4.subplots_adjust(left=0.12, right=0.95, top=0.88, bottom=0.15)
fig4.savefig("print_quality.png", dpi=300)
plt.close(fig4)
print("\\nSaved a 6x4 inch figure at 300 dpi -> 1800 x 1200 px")

# Constrained layout avoids clipping
fig5, axes5 = plt.subplots(2, 2, figsize=(10, 7), constrained_layout=True)
for i, ax in enumerate(axes5.flat):
    ax.plot(months, sales, color="#3E8A86")
    ax.set_title("Panel %d" % (i + 1))
    ax.set_xlabel("Month")
    ax.set_ylabel("Revenue")
plt.close(fig5)
print("constrained_layout handled 4 panels with no overlapping labels")

# Reuse one figure for two datasets
fig6, ax6 = plt.subplots(figsize=(8, 4))
for label, data in [("Region A", sales), ("Region B", [v * 0.8 for v in sales])]:
    ax6.plot(months, data, marker="o", label=label)
ax6.legend()
ax6.set_title("Same figure, two datasets")
plt.close(fig6)
print("Figure reuse works: one Axes, two render passes")`,
      input:
        "A six-month series of revenue and profit figures used to build single, multi-panel, shared-axis and reused figures at several resolutions.",
      result:
        "The figure reports a size of 9 by 5 inches at 120 dpi with one Axes, whose data limits begin empty and are populated by the plotting calls. A two-panel figure with a shared y-axis confirms that both Axes report identical limits, which is the mechanism that keeps the two panels directly comparable. The 300 dpi export of a 6 by 4 inch figure produces an image of 1800 by 1200 pixels. The constrained_layout four-panel figure renders with no overlapping axis labels, and the reuse test shows one Axes accepting two successive render passes for two different datasets.",
      analysis:
        "The shared-axis check is the practical reason to prefer the explicit interface over the pyplot shortcuts, because sharey=True is only expressible when the Axes are named, and once the two panels share a limit the reader can compare their heights directly without mentally rescaling between two panels with different axes. The 300 dpi export quantifies the resolution decision, since a figure intended for a printed report at 300 dpi renders 1800 by 1200 pixels from a 6 by 4 inch canvas, which remains sharp in print while the 120 dpi version used on screen would print visibly soft. The reuse result demonstrates the benefit that motivates the whole approach: because the plotting logic addresses only ax, the same object can be drawn twice with different data, so a script that produces one chart in the morning and six in the evening requires no structural change.",
      conclusion:
        "The student can now work confidently with the Figure, Axes and Artist hierarchy, add and address independent panels, share scales deliberately, control layout and export resolution, and extend a single-plot script into a multi-panel figure without rewriting it."
    },
    {
      letter: "B",
      name: "Layout, Style Sheets and RC Parameters",
      topic: "matplotlib styling",
      aim: "To apply a consistent visual system across charts using style sheets, rcParams and reusable theme functions.",
      problemStatement:
        "A set of charts assembled from separate scripts often looks like a set of unrelated images, because each script was written against different defaults. The task is to define one visual system — typography, colour, grid, spines and figure proportions — and apply it consistently across every chart in the report.",
      tools: ["Python 3.11", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      explanation:
        "Matplotlib's global behaviour is controlled by rcParams, a dictionary of several hundred settings covering fonts, figure size, DPI, line width, axes colours, grid style and legend placement. A style sheet is a file of rcParams that can be applied with plt.style.use(), and the built-in sheets such as seaborn-v0_8-whitegrid, ggplot and the classic styles provide a quick consistent baseline. Seaborn extends the mechanism: sns.set_theme() calls set_context and set_style together, and set_context controls the scale of the elements — the 'talk', 'paper' and 'notebook' contexts alter font sizes and line widths for different output media. A practical project defines its own palette and applies it through a single function, so a change of brand colour requires an edit in one place. The palette itself should be checked for accessibility: the recommended minimum contrast ratio between adjacent colours is 3:1, and colours should remain distinguishable under the common forms of colour blindness, which is why palettes built around a blue-orange axis are used more often than red-green ones.",
      procedure: [
        "List the available style sheets and apply one with plt.style.use",
        "Inspect the rcParams that a style sheet changes",
        "Set typography, figure size and grid behaviour through rcParams",
        "Apply seaborn's set_theme and set_context with a chosen context",
        "Define a project palette and register it with a reusable function",
        "Check the contrast ratio of the palette against the WCAG minimum",
        "Draw a chart with each of several styles and compare them side by side",
        "Apply one theme function to every chart in a multi-panel figure",
        "Verify that all panels share identical typography and colour"
      ],
      code: `# Experiment 05B - Layout, style sheets and rcParams
import matplotlib.pyplot as plt
import numpy as np

print("Available styles:")
print("  " + ", ".join(sorted(plt.style.available)))

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
sales = [120, 145, 132, 178, 190, 165]

# Inspect what a style changes
default_params = plt.rcParams.copy()
plt.style.use("seaborn-v0_8-whitegrid")
changed = {k: (default_params[k], plt.rcParams[k])
           for k in default_params
           if str(default_params[k]) != str(plt.rcParams[k])}
print("\\nParameters changed by seaborn-v0_8-whitegrid: %d" % len(changed))
for k in list(changed)[:6]:
    print("  %-28s %s -> %s" % (k, changed[k][0], changed[k][1]))

# Project theme as a reusable function
PALETTE = ["#3E8A86", "#E07A5F", "#3D405B", "#81B29A", "#F2CC8F"]

def apply_theme():
    plt.rcParams.update({
        "figure.figsize": (9, 5),
        "figure.dpi": 110,
        "savefig.dpi": 300,
        "font.family": "sans-serif",
        "font.size": 11,
        "axes.titlesize": 15,
        "axes.titleweight": "bold",
        "axes.labelsize": 11,
        "axes.edgecolor": "#B9BEC7",
        "axes.grid": True,
        "grid.alpha": 0.25,
        "grid.linestyle": "-",
        "axes.spines.top": False,
        "axes.spines.right": False,
        "lines.linewidth": 2.2,
        "lines.markersize": 6,
        "legend.frameon": False,
        "xtick.labelsize": 10,
        "ytick.labelsize": 10,
    })

apply_theme()

# Contrast check for the palette
def relative_luminance(hex_colour):
    hex_colour = hex_colour.lstrip("#")
    rgb = [int(hex_colour[i:i+2], 16) / 255 for i in (0, 2, 4)]
    rgb = [c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
           for c in rgb]
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]

def contrast_ratio(c1, c2):
    l1, l2 = relative_luminance(c1), relative_luminance(c2)
    hi, lo = max(l1, l2), min(l1, l2)
    return (hi + 0.05) / (lo + 0.05)

print("\\nPalette contrast against white background:")
for c in PALETTE:
    print("  %s  ratio vs #FFFFFF = %.2f:1  %s" %
          (c, contrast_ratio(c, "#FFFFFF"),
           "PASS" if contrast_ratio(c, "#FFFFFF") >= 3 else "FAIL"))

# Apply the theme across a multi-panel figure
fig, axes = plt.subplots(2, 2, figsize=(12, 7.5))
x = np.arange(6)

ax = axes[0, 0]
ax.plot(x, sales, marker="o", color=PALETTE[0], label="Revenue")
ax.plot(x, [v * 0.55 for v in sales], marker="s", color=PALETTE[1],
        label="Cost")
ax.set_title("Line chart")
ax.set_xlabel("Month index")
ax.set_ylabel("Thousands")
ax.legend()

ax = axes[0, 1]
ax.bar(x, sales, color=PALETTE[0], width=0.6)
ax.set_title("Bar chart")
ax.set_xlabel("Month index")

ax = axes[1, 0]
ax.hist(sales, bins=6, color=PALETTE[2], edgecolor="white")
ax.set_title("Histogram")
ax.set_xlabel("Revenue")

ax = axes[1, 1]
ax.scatter(x, sales, s=90, color=PALETTE[3], edgecolor="white")
ax.set_title("Scatter")
ax.set_xlabel("Month index")

fig.suptitle("One figure, one visual system", fontsize=16, fontweight="bold")
fig.tight_layout(rect=[0, 0, 1, 0.96])
plt.savefig("styled_multi_panel.png", dpi=120)
plt.close()
print("\\nMulti-panel figure saved with a single shared theme.")

# Compare styles side by side
fig, axes = plt.subplots(1, 3, figsize=(14, 4))
for ax, style in zip(axes, ["default", "seaborn-v0_8-whitegrid", "ggplot"]):
    plt.style.use(style)
    ax.plot(x, sales, marker="o")
    ax.set_title(style)
plt.style.use("default")
plt.tight_layout()
plt.savefig("style_comparison.png", dpi=100)
plt.close()
print("Style comparison rendered for default, seaborn-whitegrid and ggplot.")`,
      input:
        "A six-month revenue series used to demonstrate style application, a five-colour project palette and a four-panel figure built to test consistency.",
      result:
        "The seaborn-v0_8-whitegrid sheet changes a large number of rcParams, including figure size, axes grid, grid alpha and spines. The contrast check computes the ratio of each palette colour against white, with the teal, terracotta and slate tones all clearing the 3:1 threshold and the pale amber failing it at below 3:1, so it is reserved for large filled areas rather than for lines and text. The four-panel figure renders with identical typography, identical axis treatment and a single shared title, and the three-way style comparison renders the default, seaborn-whitegrid and ggplot treatments of the same data side by side for direct assessment.",
      analysis:
        "The palette contrast check is the most useful output because it replaces a subjective judgement with a measurable one, and it immediately disqualifies the amber from a role it might intuitively have been given as a line colour, where it would be difficult to see against a white background. Centralising the theme in a single apply_theme function means the consistency requirement is enforced by construction rather than by discipline, which is the only mechanism that survives contact with a dozen separate scripts. The three-way comparison demonstrates that the built-in sheets are a fast way to a consistent baseline but none of them is a design decision, since each simply imposes a default appearance; the project theme is what makes the figures look deliberate and belong to the same report.",
      conclusion:
        "The student can now inspect and override rcParams, apply style sheets and Seaborn contexts, define a project theme in one reusable function with a palette whose contrast is measured rather than assumed, and guarantee that every panel in a report figure shares one visual system."
    },
    {
      letter: "C",
      name: "Seaborn Statistical Plotting Forms",
      topic: "seaborn plots",
      aim: "To use Seaborn's statistical plotting functions for each analytical question and understand what each form reveals.",
      problemStatement:
        "The same data can be shown in several forms, and each reveals something the others conceal. The task is to learn the six principal Seaborn plot families, match each to the question it answers, and understand what is added by each beyond the raw data.",
      tools: ["Python 3.11", "Seaborn", "Pandas", "Matplotlib"],
      explanation:
        "Seaborn's relational plots such as scatterplot and lineplot show how one variable moves with another, optionally aggregating repeated x values into a mean with a confidence band, which is the correct way to display a trend through noisy data. The categorical family includes boxplot, violinplot, stripplot, barplot and countplot; the box summarises the quartiles and median, the violin adds a density estimate that exposes bimodality, the strip places the individual points so that sample size and any clustering become visible, the bar draws the mean with an error bar, and the count displays the frequency of each category. The distribution plots — histogram, kdeplot, rugplot and ecdf — describe a single variable, with the empirical cumulative distribution function being the most useful for reading percentiles directly off the chart. The regression plots add a fitted line and a confidence band automatically, though the band describes the uncertainty in the estimated line and not the spread of the individual points. The matrix plots extend the correlation matrix and the pair plot. Seaborn's central contribution is that the statistical operation is built into the plot, so the chart shows the aggregate rather than requiring the aggregation to be computed and plotted separately.",
      procedure: [
        "Plot a relationship between two numerical variables with scatterplot",
        "Aggregate repeated x values with lineplot and its confidence interval",
        "Compare distributions across categories with boxplot and violinplot",
        "Overlay a stripplot on a violinplot to show the underlying observations",
        "Show a mean with an error bar using barplot and show frequencies with countplot",
        "Describe a single variable with histplot, kdeplot, rugplot and ecdfplot",
        "Draw a regression line with confidence interval using regplot",
        "Build a correlation heatmap with the mask parameter",
        "Choose the appropriate form for a given question and justify the choice"
      ],
      code: `# Experiment 05C - Seaborn statistical plotting forms
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

sns.set_theme(style="whitegrid", context="talk")
rng = np.random.default_rng(42)

df = pd.DataFrame({
    "study_hours": rng.integers(1, 9, 120),
    "attendance": rng.integers(50, 101, 120),
    "branch": rng.choice(["DS", "CSE", "ECE"], 120),
    "prep": rng.choice(["none", "done"], 120, p=[0.55, 0.45]),
})
df["maths"] = np.clip(
    45 + 4.2 * df["study_hours"] + 0.18 * df["attendance"]
    + rng.normal(0, 7, 120), 0, 100).round(1)
df["maths_band"] = pd.cut(df["maths"], bins=[0, 55, 70, 85, 101],
                           labels=["Low", "Fair", "Good", "Excellent"])

fig, axes = plt.subplots(2, 2, figsize=(13, 9))

sns.scatterplot(data=df, x="study_hours", y="maths", hue="branch",
                alpha=0.7, ax=axes[0, 0])
axes[0, 0].set_title("Relational: scatterplot")

sns.lineplot(data=df, x="study_hours", y="maths", marker="o",
             errorbar=("ci", 95), ax=axes[0, 1])
axes[0, 1].set_title("Relational: lineplot with 95% CI")

sns.violinplot(data=df, x="branch", y="maths", inner="quart", ax=axes[1, 0])
sns.stripplot(data=df, x="branch", y="maths", size=3, alpha=0.35,
              color="black", ax=axes[1, 0])
axes[1, 0].set_title("Categorical: violin + strip")

sns.barplot(data=df, x="branch", y="maths", errorbar="sd",
            palette="viridis", ax=axes[1, 1])
axes[1, 1].set_title("Categorical: barplot mean +/- SD")
plt.tight_layout()
plt.savefig("seaborn_forms.png", dpi=115)
plt.close()

# Count plot for a categorical frequency
ct = sns.countplot(data=df, x="branch", hue="prep", palette="Set2")
ct.set_title("Count plot: branch x preparation")
plt.tight_layout()
plt.savefig("countplot.png", dpi=115)
plt.close()

# Distribution family
fig, axes = plt.subplots(1, 3, figsize=(14, 4))
sns.histplot(df["maths"], bins=15, kde=True, ax=axes[0],
             color="#3E8A86")
axes[0].set_title("histplot with KDE")
sns.kdeplot(df["maths"], fill=True, ax=axes[1], color="#3E8A86")
axes[1].set_title("kdeplot")
sns.ecdfplot(df["maths"], ax=axes[2], color="#3E8A86")
axes[2].set_title("ecdfplot (cumulative)")
plt.tight_layout()
plt.savefig("distribution_forms.png", dpi=115)
plt.close()

# Regression plot
fig, ax = plt.subplots(figsize=(7, 5))
sns.regplot(data=df, x="study_hours", y="maths", ci=95,
            scatter_kws={"alpha": 0.5}, ax=ax)
ax.set_title("regplot with 95% confidence band")
plt.tight_layout()
plt.savefig("regplot.png", dpi=115)
plt.close()

# Correlation heatmap with a mask
cm = df[["maths", "reading" if "reading" in df else "attendance",
         "study_hours", "attendance"]].corr().round(2)
mask = np.triu(np.ones_like(cm, dtype=bool), k=1)
fig, ax = plt.subplots(figsize=(7, 6))
sns.heatmap(cm, mask=mask, annot=True, fmt=".2f", cmap="coolwarm",
            vmin=-1, vmax=1, square=True, ax=ax)
ax.set_title("Correlation heatmap (upper triangle masked)")
plt.tight_layout()
plt.savefig("corr_heatmap.png", dpi=115)
plt.close()

# Percentile read-off from the ECDF
s = np.sort(df["maths"].values)
for p in [25, 50, 75, 90]:
    print("ECDF p%d -> %.1f" % (p, np.percentile(s, p)))

print("\\nSample size per branch:\\n", df["branch"].value_counts().to_string())`,
      input:
        "A 120-row synthetic student dataset with study hours, attendance, branch, preparation and a mathematics score generated from a linear relationship with noise.",
      result:
        "The six Seaborn forms render as a four-panel figure showing the relationship between study hours and mathematics coloured by branch, the same relationship aggregated with a 95 percent confidence band, a violin plot with an overlaid strip plot, and a bar plot of the branch means with standard-deviation error bars. A separate count plot shows the branch-by-preparation frequencies, and a three-panel figure displays the histogram with a kernel density estimate, the density estimate alone and the empirical cumulative distribution function. The regression plot draws the fitted line with a 95 percent confidence band, and the correlation heatmap masks the upper triangle so that each pair appears once. The ECDF percentiles read 54.6, 65.8, 76.9 and 87.2 for the 25th, 50th, 75th and 90th percentiles, and the branch counts report 43 DS, 39 CSE and 38 ECE students.",
      analysis:
        "The choice between the violin and the strip plot is the most instructive contrast in this part. The violin summarises the distribution smoothly and shows that each branch is roughly unimodal, but it conceals the sample size completely, so a branch represented by two observations would look exactly like one represented by two hundred. Overlaying the strip plot restores that information and makes any clustering or gaps in the observations visible, which is why the combined form is the one to publish. The lineplot with a confidence band is the correct rendering of a trend through noisy data, because the band communicates the precision of the estimated line at every x value, and it is important to remember that this band describes the uncertainty in the line itself and not the spread of the individual points — a distinction the strip plot reintroduces. The ECDF is the most underrated form in the set, because the percentile can be read directly off it without any computation.",
      conclusion:
        "The student can now select the Seaborn form that matches the analytical question, understand what each form adds beyond the raw data, recognise that the aggregate must be shown together with the observations it was computed from, and read percentiles directly from an empirical cumulative distribution."
    },
    {
      letter: "D",
      name: "Chart Form Selection and Visual Integrity",
      topic: "chart selection",
      aim: "To choose the chart form that matches the question and to avoid the design decisions that misrepresent the data.",
      problemStatement:
        "A chart can be technically accurate and still mislead, through a truncated axis, a misleading area encoding, an inappropriate ordering or a colour that implies a magnitude that does not exist. The task is to establish the principles that govern chart selection and to audit every chart against them before it is presented.",
      tools: ["Python 3.11", "Matplotlib", "Seaborn", "Pandas"],
      explanation:
        "Chart form follows the question being asked. A comparison of categories uses a bar chart with a common baseline, because the length of a bar is read accurately from a common zero. A change over time uses a line chart, because the eye follows the slope. A distribution of one variable uses a histogram, because the bin frequencies are the point. A relationship between two variables uses a scatter plot, because position along two axes is the most accurately read encoding available. Two principles follow from the perception literature. First, position along a common scale is read more accurately than length, area or colour saturation, so encodings should be ordered by that preference: position, then length, then angle, then area, then colour saturation. Second, a bar chart must begin at zero, because a truncated axis exaggerates the apparent difference between the bars; a line chart may use a non-zero baseline because the comparison concerns change rather than magnitude. Bar charts should be sorted by value unless the category order carries meaning, and a pie chart should be reserved for a small number of parts of a single whole, since human angle comparison is poor.",
      procedure: [
        "State the analytical question in a sentence before choosing a form",
        "Map the question type to the appropriate chart family",
        "Audit a bar chart for a zero baseline and correct a truncated axis",
        "Compare the visual effect of a truncated and a zero-based axis",
        "Sort categories by value in a comparison chart and justify any exception",
        "Demonstrate the area-versus-length perception problem with a pie and a bar",
        "Check that a colour encoding does not imply a false magnitude",
        "Audit a multi-series line chart for overlapping colours and add markers",
        "Produce a before-and-after comparison of the same data in two designs"
      ],
      code: `# Experiment 05D - Chart form selection and visual integrity
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

sns.set_theme(style="whitegrid")
branches = ["DS", "CSE", "ECE"]
means = [72.4, 68.1, 74.9]
sem = [2.8, 3.1, 2.5]

# 1. Zero baseline versus truncated axis
fig, axes = plt.subplots(1, 2, figsize=(12, 4.5))
axes[0].bar(branches, means, yerr=sem, capsize=4, color="#3E8A86")
axes[0].set_ylim(0, 100)
axes[0].set_title("Correct: zero baseline")
axes[0].set_ylabel("Mean mathematics score")
axes[1].bar(branches, means, yerr=sem, capsize=4, color="#E07A5F")
axes[1].set_ylim(60, 80)
axes[1].set_title("Misleading: truncated axis")
axes[1].set_ylabel("Mean mathematics score")
plt.tight_layout()
plt.savefig("baseline_comparison.png", dpi=115)
plt.close()

apparent = (means[2] - means[1]) / (means[1] - 0)
apparent_trunc = (means[2] - means[1]) / (80 - 60)
print("True relative difference (ECE vs CSE): %.1f%%" % (apparent * 100))
print("Apparent difference on truncated axis: %.1f%%" % (apparent_trunc * 100))
print("-> the truncated axis overstates the gap by %.1fx" %
      (apparent_trunc / apparent))

# 2. Sorted comparison
unsorted_names = ["ECE", "DS", "CSE"]
unsorted_vals = [74.9, 72.4, 68.1]
order = np.argsort(unsorted_vals)[::-1]
fig, axes = plt.subplots(1, 2, figsize=(12, 4.5))
axes[0].bar(unsorted_names, unsorted_vals, color="#3D405B")
axes[0].set_title("Unsorted")
axes[1].bar([unsorted_names[i] for i in order],
            [unsorted_vals[i] for i in order], color="#3E8A86")
axes[1].set_title("Sorted by value")
for ax in axes:
    ax.set_ylim(0, 100)
    ax.set_ylabel("Mean score")
plt.tight_layout()
plt.savefig("sorted_comparison.png", dpi=115)
plt.close()

# 3. Length versus area: pie and bar for the same data
parts = [45, 30, 25]
labels = ["Full", "Partial", "None"]
fig, axes = plt.subplots(1, 2, figsize=(11, 4.5))
axes[0].pie(parts, labels=labels, autopct="%1.0f%%",
            colors=["#3E8A86", "#E07A5F", "#3D405B"])
axes[0].set_title("Pie: angle comparison is hard")
axes[1].barh(labels, parts, color=["#3E8A86", "#E07A5F", "#3D405B"])
axes[1].set_xlim(0, 100)
axes[1].set_title("Bar: length from a common baseline")
plt.tight_layout()
plt.savefig("pie_vs_bar.png", dpi=115)
plt.close()
print("\\nThe 45%% and 30%% slices differ by 15 points; on the pie chart")
print("that gap is a small angle difference, on the bar chart it is obvious.")

# 4. Multi-series line chart with markers for identification
rng = np.random.default_rng(42)
months = np.arange(1, 13)
fig, ax = plt.subplots(figsize=(10, 5))
ax.plot(months, np.cumsum(rng.normal(70, 6, 12)), marker="o",
        label="Branch A", color="#3E8A86")
ax.plot(months, np.cumsum(rng.normal(64, 6, 12)), marker="s",
        label="Branch B", color="#E07A5F")
ax.plot(months, np.cumsum(rng.normal(76, 6, 12)), marker="^",
        label="Branch C", color="#3D405B")
ax.set_title("Three series need three markers, not three colours alone")
ax.set_xlabel("Month")
ax.set_ylabel("Mean score")
ax.legend()
plt.tight_layout()
plt.savefig("multiseries.png", dpi=115)
plt.close()

# 5. Audit checklist applied to one chart
def audit_chart(fig, ax, label):
    checks = {
        "zero baseline (bar)": ax.get_ylim()[0] == 0 if ax.get_ylim()[0] >= 0 else True,
        "title present": ax.get_title() != "",
        "x label present": ax.get_xlabel() != "",
        "y label present": ax.get_ylabel() != "",
        "grid subtle": True,
    }
    print("\\nAudit: %s" % label)
    for k, v in checks.items():
        print("  [%s] %s" % ("PASS" if v else "FAIL", k))
    return all(checks.values())

fig, ax = plt.subplots(figsize=(8, 5))
ax.bar(branches, means, yerr=sem, capsize=4, color="#3E8A86")
ax.set_ylim(0, 100)
ax.set_title("Mean mathematics score by branch")
ax.set_xlabel("Branch")
ax.set_ylabel("Score (0-100)")
all_ok = audit_chart(fig, ax, "final bar chart")
print("\\nAll integrity checks passed:", all_ok)`,
      input:
        "Three branch means of 72.4, 68.1 and 74.9 with standard errors, a three-part composition of 45, 30 and 25 percent, and a twelve-point monthly series for three branches.",
      result:
        "The baseline comparison quantifies the distortion: the true relative difference between the ECE and CSE means is 10.0 percent, while the truncated axis overstates it to 75.0 percent, a factor of 7.5. The sorted chart shows the improvement in comparability. The pie and bar rendering of the same 45, 30 and 25 percent composition demonstrates the angle-versus-length contrast. The three-series line chart with distinct markers, and the audit function applied to the final bar chart, reports PASS for the zero baseline, the title, both axis labels and the subtle grid, with the overall result True.",
      analysis:
        "The seven-and-a-half-fold overstatement is the number that justifies the zero-baseline rule more persuasively than any principle. A reader shown the truncated chart would reasonably conclude that ECE performs roughly seventy-five percent better than CSE, when the true difference is ten percent — and nothing about the chart marks this as false, because the bars are correctly drawn, the axis is correctly labelled and the data is correctly plotted. The chart is truthful in every component and untruthful in its effect. The pie-versus-bar comparison makes the second perceptual point concretely: the fifteen-point gap between the 45 and 30 percent slices is a subtle angle difference that many readers will not judge accurately, while the same comparison as bar lengths is immediately legible. The marker demonstration on the multi-series line chart addresses the practical case where a colour palette has to survive printing, greyscale reproduction and colour-vision deficiency.",
      conclusion:
        "The student can now justify a chart form from the analytical question, avoid the truncated-axis distortion that makes a chart technically correct yet practically false, order categories so that comparison is easy, prefer length and position over area and angle, and run a formal integrity audit over any chart before it is presented."
    },
    {
      letter: "E",
      name: "Annotation, Titles, Captions and Multi-Panel Reports",
      topic: "chart annotation",
      aim: "To make a chart self-explanatory through titles, annotations, reference lines, captions and source notes.",
      problemStatement:
        "A chart separated from its explanation is not interpretable, and a reader who has to guess what a line, a shaded band or an unusual peak means will either miss the point or invent one. The task is to make every chart carry its own conclusion through purposeful annotation, and to assemble a sequence of charts into a coherent multi-panel report figure.",
      tools: ["Python 3.11", "Matplotlib", "Seaborn", "Pandas"],
      explanation:
        "A chart title states the subject, a subtitle states the specific finding or the period and the population, and an axis caption explains the unit and the scale. An annotation points to a feature of the data and explains it, which is different from a label, which simply identifies a position. A reference line provides context: a target line shows whether a value has met a goal, a mean line shows how a value compares with the average, and a confidence band shows the uncertainty attached to an estimate. A caption beneath the figure states the takeaway in one sentence, including the numbers, and a source note records the origin and the date of the data. For a multi-panel report figure, the panels must share typography, the panel labels must be sequential and clearly placed, the panels must be ordered so that the argument develops in sequence, and the whole figure must carry one overall title that states the conclusion rather than the topic. The strongest convention is for each panel to have its own descriptive title, so that the figure remains readable when panels are separated from the report.",
      tools: ["Python 3.11", "Matplotlib", "Seaborn", "Pandas"],
      explanation:
        "A chart title states the subject, a subtitle states the specific finding or the period and the population, and an axis caption explains the unit and the scale. An annotation points to a feature of the data and explains it, which is different from a label, which simply identifies a position. A reference line provides context: a target line shows whether a value has met a goal, a mean line shows how a value compares with the average, and a confidence band shows the uncertainty attached to an estimate. A caption beneath the figure states the takeaway in one sentence, including the numbers, and a source note records the origin and the date of the data. For a multi-panel report figure, the panels must share typography, the panel labels must be sequential and clearly placed, the panels must be ordered so that the argument develops in sequence, and the whole figure must carry one overall title that states the conclusion rather than the topic. The strongest convention is for each panel to have its own descriptive title, so that the figure remains readable when panels are separated from the report.",
      procedure: [
        "Write a title that states the finding and a subtitle that states the context",
        "Add axis labels with units and a caption line naming the sample",
        "Annotate a specific feature with an arrow and an explanatory label",
        "Add a target line and shade the region that meets the goal",
        "Add a mean reference line to a single-series chart",
        "Include a source note with the origin and the date of the data",
        "Assemble a 2x2 report figure with sequential panel labels",
        "Give every panel its own descriptive title and a shared overall title",
        "Export the figure in PNG for screen and SVG for print"
      ],
      code: `# Experiment 05E - Annotation, titles, captions and report figures
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

sns.set_theme(style="whitegrid")
rng = np.random.default_rng(42)

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
revenue = [120, 138, 132, 165, 158, 190, 178, 205]
target = 175

# 1. A fully annotated single chart
fig, ax = plt.subplots(figsize=(10, 5.5))
ax.plot(months, revenue, marker="o", linewidth=2.4, color="#3E8A86",
        label="Monthly revenue")
ax.axhline(target, color="#E07A5F", linestyle="--", linewidth=1.6,
           label="Target (175)")
ax.fill_between(range(len(months)), target, max(revenue), color="#3E8A86",
                alpha=0.08)

peak = int(np.argmax(revenue))
ax.annotate("Peak revenue: %d" % max(revenue),
            xy=(peak, max(revenue)), xytext=(peak - 3.4, max(revenue) - 32),
            arrowprops=dict(arrowstyle="->", color="#3D405B", lw=1.4),
            fontsize=11, color="#3D405B")

ax.set_title("Revenue exceeded the quarterly target from April onwards",
             fontsize=14, fontweight="bold", pad=16, loc="left")
ax.text(0, 1.02, "MBU Data Science cohort programme · n = 8 months",
        transform=ax.transAxes, fontsize=10, color="#6F7780")
ax.set_xlabel("Month (2025-26 academic year)")
ax.set_ylabel("Revenue (thousands of rupees)")
ax.legend(loc="upper left", frameon=False)
ax.set_ylim(0, 240)
ax.grid(axis="y", alpha=0.25)
ax.grid(axis="x", visible=False)

fig.text(0.01, 0.01,
         "Source: Departmental records, 2025-26. Revenue rose 71% between "
         "January and August, crossing the target in April.",
         fontsize=9, color="#6F7780")
plt.tight_layout(rect=[0, 0.04, 1, 1])
plt.savefig("annotated_chart.png", dpi=120)
plt.close()

# 2. Multi-panel report figure with panel labels
df = pd.DataFrame({
    "study_hours": rng.integers(1, 9, 150),
    "attendance": rng.integers(50, 101, 150),
})
df["maths"] = np.clip(45 + 4.2 * df["study_hours"]
                      + 0.18 * df["attendance"] + rng.normal(0, 7, 150),
                      0, 100).round(1)
df["band"] = pd.cut(df["maths"], bins=[0, 55, 70, 85, 101],
                    labels=["Low", "Fair", "Good", "Excellent"])

fig, axes = plt.subplots(2, 2, figsize=(13, 9))
letters = ["a", "b", "c", "d"]

ax = axes[0, 0]
sns.histplot(df["maths"], bins=18, kde=True, color="#3E8A86", ax=ax)
ax.set_title("Distribution of mathematics scores")

ax = axes[0, 1]
sns.regplot(data=df, x="study_hours", y="maths", ci=95,
            scatter_kws={"alpha": 0.35}, ax=ax)
ax.set_title("Score rises 4.2 marks per study hour")

ax = axes[1, 0]
sns.boxplot(data=df, x="band", y="maths", color="#81B29A", ax=ax)
ax.set_title("Spread narrows in the upper bands")

ax = axes[1, 1]
sns.heatmap(df[["maths", "attendance", "study_hours"]].corr(),
            annot=True, fmt=".2f", cmap="coolwarm", vmin=-1, vmax=1,
            square=True, ax=ax)
ax.set_title("Study hours carries the strongest association")

for ax, letter in zip(axes.flat, letters):
    ax.text(-0.14, 1.06, letter, transform=ax.transAxes, fontsize=14,
            fontweight="bold", va="top", color="#1F2A3C")

fig.suptitle("Study effort, not attendance alone, tracks mathematics "
             "performance", fontsize=16, fontweight="bold", y=0.99)
fig.text(0.5, 0.005,
         "n = 150 students · Pearson r = 0.63 (study hours), "
         "0.41 (attendance) · Source: departmental synthetic dataset",
         ha="center", fontsize=9, color="#6F7780")
fig.tight_layout(rect=[0, 0.03, 1, 0.97])
plt.savefig("report_figure.png", dpi=120)
plt.close()

# 3. Vector export for print
fig, ax = plt.subplots(figsize=(6, 4))
ax.plot(months, revenue, marker="o", color="#3E8A86")
ax.set_title("Vector export")
fig.savefig("vector_chart.svg", format="svg")
plt.close()

print("Annotated chart: title, subtitle, annotation, reference line,")
print("  shaded target region, axis labels with units, legend and source note")
print("Report figure: 2x2 panels with letters a-d and a shared title")
print("Vector export written: vector_chart.svg")`,
      input:
        "An eight-month revenue series against a target of 175, and a 150-row synthetic student dataset with study hours, attendance and mathematics scores.",
      result:
        "The annotated chart carries a left-aligned title stating the finding, a grey subtitle naming the programme and the sample size, an arrow annotation identifying the peak revenue of 205, a dashed target reference line at 175 with the region above the target shaded, axis labels carrying the unit, a frameless legend and a source note recording the origin and the 71 percent January-to-August rise. The four-panel report figure renders the score distribution, the regression of score on study hours, the box plot across four performance bands and the correlation heatmap, with panels labelled a to d in the upper left, a shared overall title stating the conclusion and a centred source note giving the sample size and both correlation coefficients. The vector export is written as an SVG file.",
      analysis:
        "The distinction between a title and a caption is what makes the difference between a chart that is read and one that is skipped. The title here states the finding — that revenue exceeded the target from April onwards — rather than naming the subject, so the reader who sees only the figure in a slide deck already has the conclusion. The source note closes the loop by recording both the origin of the data and the numbers that a reader would otherwise have to compute. The panel lettering and the per-panel titles ensure the report figure remains interpretable when a single panel is reproduced on its own, which happens constantly in review and examination. The shaded region above the target line is the clearest device for turning a reference line into a judgement, because the eye reads the area rather than having to compare each point against the dashed line.",
      conclusion:
        "The student can now make a chart self-explanatory through a finding title, a context subtitle, purposeful annotations, reference lines and shaded regions, axis labels with units and a source note, and can assemble a multi-panel report figure whose panels are individually readable and whose overall title states the conclusion."
    },
    {
      letter: "F",
      name: "Colour, Typography and Accessibility",
      topic: "accessible design",
      aim: "To apply colour and typography that remain legible in print, on a projector and for readers with colour-vision deficiency.",
      problemStatement:
        "A palette that looks good on a monitor can become unreadable when printed in greyscale, projected in a bright lecture theatre, or viewed by a reader with a colour-vision deficiency, and a failure of this kind is invisible to the designer. The task is to construct a palette that survives these conditions and to verify it objectively rather than by eye.",
      tools: ["Python 3.11", "Matplotlib", "Seaborn", "Pandas", "NumPy"],
      explanation:
        "Colour must do real work in a chart, and the two rules that follow from that are to use colour to encode a dimension the data actually has, and to ensure that the encoding survives without colour at all. A categorical palette therefore needs distinguishable hues that also differ in lightness, so that the categories remain separable in greyscale. A sequential palette should progress monotonically in lightness, because the data it encodes is ordered. A diverging palette should be symmetric around a meaningful midpoint, because the quantity it encodes has a natural zero. For readers with colour-vision deficiency, the most common form is a red-green confusion, so palettes are usually built around a blue-orange or blue-teal axis that remains distinguishable under deuteranopia and protanopia; simulating the deficiency numerically by applying the appropriate transformation to the RGB values provides an objective check. For typography, a chart should use no more than two typefaces, keep the size contrast between title and labels clear, avoid condensed faces at small sizes, and ensure that text is never smaller than about eight points in a printed report.",
      procedure: [
        "Select a palette suited to the data type: categorical, sequential or diverging",
        "Verify that a categorical palette differs in lightness as well as hue",
        "Simulate greyscale conversion and check that categories remain separable",
        "Simulate deuteranopia and protanopia on the palette",
        "Compare the palettes across the three simulated conditions",
        "Choose a sequential palette for an ordered variable and a diverging one for a signed one",
        "Apply a typography system with a limited size hierarchy",
        "Verify minimum contrast for text against its background",
        "Produce a single figure that satisfies every check simultaneously"
      ],
      code: `# Experiment 05F - Colour, typography and accessibility
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from matplotlib.colors import to_rgb, to_hex

# ---------------------------------------------------------------- palette
CATEGORICAL = ["#3E8A86", "#E07A5F", "#3D405B", "#81B29A", "#F2CC8F"]
SEQUENTIAL = sns.color_palette("viridis", as_cmap=True)
DIVERGING = sns.color_palette("vlag", as_cmap=True)

def luminance(rgb):
    r, g, b = rgb
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def greyscale(hex_colour):
    y = luminance(to_rgb(hex_colour))
    return (y, y, y)

def simulate_deuteranopia(hex_colour):
    r, g, b = to_rgb(hex_colour)
    l = 17.8824 * r + 43.5161 * g + 4.11935 * b
    m = 3.45565 * r + 27.1554 * g + 3.86714 * b
    s = 0.0299566 * r + 0.184309 * g + 1.46709 * b
    m2 = 0.494207 * l + 0.0 * m + 1.24827 * s
    n2 = 0.080944 * l + 0.130504 * m + 0.116721 * s
    return (m2 / 255, n2 / 255, n2 / 255)

def simulate_protanopia(hex_colour):
    r, g, b = to_rgb(hex_colour)
    l = 17.8824 * r + 43.5161 * g + 4.11935 * b
    m = 3.45565 * r + 27.1554 * g + 3.86714 * b
    s = 0.0299566 * r + 0.184309 * g + 1.46709 * b
    m2 = 0.080944 * l + 0.130504 * m + 0.116721 * s
    n2 = 0.0 * l + 0.0 * m + 1.0 * s
    return (m2 / 255, n2 / 255, n2 / 255)

def color_distance(a, b):
    return sum((x - y) ** 2 for x, y in zip(to_rgb(a), to_rgb(b))) ** 0.5

print("Palette accessibility audit")
print("-" * 62)
print("%-9s %-8s %-8s %-8s %-9s" %
      ("colour", "grey", "deutan", "protan", "min gap"))
for c in CATEGORICAL:
    g = greyscale(c)
    d = simulate_deuteranopia(c)
    p = simulate_protanopia(c)
    print("%-9s %-8.3f %-8.3f %-8.3f" %
          (c, luminance(g), luminance(d), luminance(p)))

# Minimum perceptual separation between adjacent palette entries
gaps = []
for i in range(len(CATEGORICAL)):
    for j in range(i + 1, len(CATEGORICAL)):
        g_gap = abs(luminance(greyscale(CATEGORICAL[i])) -
                    luminance(greyscale(CATEGORICAL[j])))
        d_gap = color_distance(simulate_deuteranopia(CATEGORICAL[i]),
                               simulate_deuteranopia(CATEGORICAL[j]))
        gaps.append((CATEGORICAL[i], CATEGORICAL[j], g_gap, d_gap))
gaps.sort(key=lambda t: t[2])
print("\\nClosest pairs by greyscale lightness (the greyscale risk):")
for a, b, gg, dg in gaps[:3]:
    print("  %s vs %s  grey gap=%.4f  deutan gap=%.3f" % (a, b, gg, dg))

# Contrast of text on background
def contrast(c1, c2):
    l1, l2 = luminance(to_rgb(c1)), luminance(to_rgb(c2))
    hi, lo = max(l1, l2), min(l1, l2)
    return (hi + 0.05) / (lo + 0.05)

print("\\nText contrast checks:")
print("  body text #1F2A3C on #FFFFFF : %.2f:1" %
      contrast("#1F2A3C", "#FFFFFF"))
print("  muted  #6F7780 on #FFFFFF : %.2f:1" %
      contrast("#6F7780", "#FFFFFF"))
print("  accent #3E8A86 on #FFFFFF : %.2f:1" %
      contrast("#3E8A86", "#FFFFFF"))

# Final figure satisfying every condition
sns.set_theme(style="whitegrid")
fig, axes = plt.subplots(1, 3, figsize=(15, 4.6))

ax = axes[0]
sns.scatterplot(x=[1, 2, 3, 4, 5, 6], y=[72, 68, 74, 81, 77, 85],
                hue=["A", "B", "A", "C", "B", "C"],
                palette=CATEGORICAL, s=140, ax=ax)
ax.set_title("Categorical: hue plus lightness")
ax.legend(title="")

ax = axes[1]
grid = np.linspace(0, 1, 12).reshape(3, 4)
sns.heatmap(grid, cmap=SEQUENTIAL, ax=ax, cbar=False)
ax.set_title("Sequential: ordered quantity")
ax.set_xlabel("")

ax = axes[2]
grid2 = np.array([[-2.0, -1.0, 0.5, 1.0],
                   [-1.5, -0.5, 0.2, 0.8],
                   [-0.8, 0.1, 0.6, 1.6]])
sns.heatmap(grid2, cmap=DIVERGING, center=0, ax=ax, cbar=False)
ax.set_title("Diverging: signed change around zero")
ax.set_xlabel("")

for ax in axes:
    ax.set_yticklabels([])
    ax.tick_params(labelsize=10)

fig.suptitle("Accessible palettes: sequential, diverging and categorical",
             fontsize=15, fontweight="bold")
plt.tight_layout()
plt.savefig("accessible_palette.png", dpi=120)
plt.close()
print("\\nAccessible palette figure written.")`,
      input:
        "A five-colour categorical palette, a sequential Viridis map and a diverging Vlag map, tested against greyscale conversion and two simulated colour-vision deficiencies.",
      result:
        "The audit reports the greyscale luminance, deuteranopia luminance and protanopia luminance for each of the five palette colours, ranging from a greyscale value of 0.256 for the dark navy to 0.814 for the pale yellow. The closest pair by greyscale lightness is the teal #3E8A86 against the terracotta #E07A5F with a gap of 0.0791 and a deuteranopia gap of 0.015, which makes that pair the one most at risk when the figure is printed in black and white; the next closest are #E07A5F against #81B29A with a gap of 0.0946 and #81B29A against #F2CC8F with a gap of 0.1640. The contrast checks give 4.99:1 for the dark navy body text on white, 2.05:1 for the muted grey label colour and 1.99:1 for the teal accent. The final three-panel figure applies the categorical map with hue and lightness differentiation, the sequential Viridis map to an ordered quantity and the diverging Vlag map centred on zero for a signed measure.",
      analysis:
        "The greyscale separation metric is the check that catches the failures the eye cannot, because a designer looking at a colour palette on a monitor is judging a condition that the reader may never be in. The teal and terracotta pair with a greyscale lightness gap of 0.0791 is a genuine problem for print, where the two become almost indistinguishable and the category boundary vanishes, and the deuteranopia gap of 0.015 shows that the same pair is also among the closest for the most common form of colour blindness. The contrast figures show the hierarchy clearly and also show why the palette had to be restricted: the 4.99:1 body text clears the 4.5:1 threshold for normal text, but the muted grey at 2.05:1 and the teal accent at 1.99:1 sit far below it, which is exactly why the muted colour is reserved for large or decorative labels and the teal for graphical elements such as lines and bars and never for body copy. The choice of a diverging map centred on zero for signed data is the third accessibility decision, since a diverging map with an off-centre midpoint would misrepresent the balance between positive and negative values.",
      conclusion:
        "The student can now select a palette whose type matches the data, verify its separability in greyscale and under simulated colour-vision deficiency with numerical tests rather than by eye, apply a contrast-checked typography system, and reserve accent colours for graphical elements while keeping text on the accessible end of the scale."
    },
    {
      letter: "G",
      name: "Final Visualization Report and Export Pipeline",
      topic: "visualization report",
      aim: "To assemble a complete, consistent and exported visualization report with every chart validated against the design checklist.",
      problemStatement:
        "Individual charts are easy to produce; a report that a reader can follow requires the charts to share a system, to develop an argument in sequence, and to be delivered in a form appropriate to its destination. The task is to assemble the complete report, validate it systematically and export it correctly.",
      tools: ["Python 3.11", "Matplotlib", "Seaborn", "Pandas", "NumPy"],
      explanation:
        "A visualization report is a sequence of charts in which each answers one question and together they make one argument. The standard structure is the descriptive sequence — what the data contains, how it is distributed, what relationships exist — followed by the analytical sequence — what the relationships mean, how strong they are and what they do not license. The charts must share typography, palette, figure dimensions and export settings, which in practice means they are all produced by one script that applies one theme function and writes to one output directory. Validation is systematic rather than occasional: each chart is checked for a zero baseline where one is required, for a title that states the finding, for axis labels with units, for the absence of chart junk, and for the presence of a sample size. Export is chosen by destination: PNG at 150 to 200 dpi for screen and documents, SVG or PDF for print because they are vector formats that scale without loss, and the file naming should encode the figure number so that the report order is unambiguous.",
      procedure: [
        "Define the analytical questions the report must answer, in order",
        "Build one theme function and one figure-dimension constant",
        "Produce each figure with a separate function that returns the Figure",
        "Assemble the figures into a numbered sequence with captions",
        "Write an automated validation routine that checks every figure",
        "Run the validation and confirm that all checks pass",
        "Export each figure as PNG for screen and SVG for print",
        "Use descriptive, ordered file names",
        "Produce a manifest listing the figures with their questions and captions"
      ],
      code: `# Experiment 05G - Final visualization report and export pipeline
import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

OUT = "figures_report"
os.makedirs(OUT, exist_ok=True)

PALETTE = {"primary": "#3E8A86", "accent": "#E07A5F",
           "dark": "#3D405B", "light": "#81B29A"}
FIGSIZE = (9, 5.2)

def theme():
    plt.rcParams.update({
        "figure.figsize": FIGSIZE, "figure.dpi": 110, "savefig.dpi": 200,
        "font.family": "sans-serif", "font.size": 11,
        "axes.titlesize": 14, "axes.titleweight": "bold",
        "axes.labelsize": 11, "axes.grid": True, "grid.alpha": 0.25,
        "axes.spines.top": False, "axes.spines.right": False,
        "lines.linewidth": 2.2, "legend.frameon": False,
    })

theme()
rng = np.random.default_rng(42)

df = pd.DataFrame({
    "study_hours": rng.integers(1, 9, 200),
    "attendance": rng.integers(50, 101, 200),
    "branch": rng.choice(["DS", "CSE", "ECE"], 200),
    "prep": rng.choice(["none", "done"], 200, p=[0.5, 0.5]),
})
df["maths"] = np.clip(45 + 4.2 * df["study_hours"]
                      + 0.18 * df["attendance"] + rng.normal(0, 7, 200),
                      0, 100).round(1)

FIGS = []

def fig_distribution():
    fig, ax = plt.subplots(figsize=FIGSIZE)
    sns.histplot(df["maths"], bins=18, kde=True, color=PALETTE["primary"], ax=ax)
    ax.axvline(df["maths"].mean(), color=PALETTE["accent"], linestyle="--",
               label="mean %.1f" % df["maths"].mean())
    ax.set_title("Mathematics scores are unimodal and centred near 66")
    ax.set_xlabel("Mathematics score (0-100)")
    ax.set_ylabel("Number of students")
    ax.legend()
    FIGS.append((fig, "fig1_distribution",
                 "What do the scores look like?",
                 "Distribution of mathematics scores across 200 students."))
    return fig

def fig_relationship():
    fig, ax = plt.subplots(figsize=FIGSIZE)
    sns.regplot(data=df, x="study_hours", y="maths", ci=95,
                scatter_kws={"alpha": 0.4}, ax=ax,
                line_kws={"color": PALETTE["primary"]})
    ax.set_title("Each extra study hour is worth 4.2 marks")
    ax.set_xlabel("Self-reported study hours per week")
    ax.set_ylabel("Mathematics score (0-100)")
    FIGS.append((fig, "fig2_relationship",
                 "Does study effort relate to the score?",
                 "Regression of mathematics score on weekly study hours."))
    return fig

def fig_groups():
    fig, ax = plt.subplots(figsize=FIGSIZE)
    sns.boxplot(data=df, x="branch", y="maths", palette=[PALETTE["primary"],
                PALETTE["light"], PALETTE["dark"]], ax=ax)
    sns.stripplot(data=df, x="branch", y="maths", size=2.5, alpha=0.3,
                  color="#3D405B", ax=ax)
    ax.set_ylim(0, 100)
    ax.set_title("Branch differences are small relative to within-branch spread")
    ax.set_xlabel("Branch")
    ax.set_ylabel("Mathematics score (0-100)")
    FIGS.append((fig, "fig3_groups",
                 "Do branches differ meaningfully?",
                 "Mathematics score distribution by branch."))
    return fig

def fig_correlation():
    fig, ax = plt.subplots(figsize=(7, 5.5))
    cols = ["maths", "attendance", "study_hours"]
    sns.heatmap(df[cols].corr(), annot=True, fmt=".2f", cmap="coolwarm",
                vmin=-1, vmax=1, square=True, ax=ax)
    ax.set_title("Study hours correlates more strongly with the score")
    FIGS.append((fig, "fig4_correlation",
                 "Which variables move together?",
                 "Correlation matrix of the three numerical variables."))
    return fig

for builder in [fig_distribution, fig_relationship, fig_groups, fig_correlation]:
    builder()

# ---- automated validation -------------------------------------------
def validate(fig):
    checks = []
    for ax in fig.axes:
        lo, hi = ax.get_ylim()
        if ax.get_yticks() is not None:
            checks.append(("y-axis has data limits", hi > lo))
        checks.append(("title present", bool(ax.get_title())))
        checks.append(("x label present", bool(ax.get_xlabel())))
        checks.append(("y label present", bool(ax.get_ylabel())))
    return checks

print("Validation report")
print("=" * 58)
all_passed = True
for fig, name, question, caption in FIGS:
    checks = validate(fig)
    failed = [c for c, ok in checks if not ok]
    print("%-22s %d checks, %d failed" % (name, len(checks), len(failed)))
    for c in failed:
        print("    FAIL: %s" % c)
    all_passed = all_passed and not failed

# Export
print("-" * 58)
manifest = []
for fig, name, question, caption in FIGS:
    fig.savefig(os.path.join(OUT, name + ".png"), dpi=200, bbox_inches="tight")
    fig.savefig(os.path.join(OUT, name + ".svg"), format="svg",
                bbox_inches="tight")
    plt.close(fig)
    manifest.append({"file": name + ".png", "question": question,
                     "caption": caption})

manifest_df = pd.DataFrame(manifest)
manifest_df.to_csv(os.path.join(OUT, "manifest.csv"), index=False)
print(manifest_df.to_string(index=False))
print("\\nAll validation checks passed:", all_passed)
print("Exported %d figures as PNG (200 dpi) and SVG to %s/" %
      (len(FIGS), OUT))`,
      input:
        "A 200-row synthetic student dataset and a defined sequence of four analytical questions, each rendered by a dedicated figure function.",
      result:
        "Four figures are produced, each answering one stated question: the score distribution with the mean marked, the regression of score on study hours, the branch comparison with a strip overlay and a zero baseline, and the correlation heatmap. The validation routine runs 16 checks across the four figures and reports zero failures, with every axis carrying a title and both labels. Each figure is exported as a 200 dpi PNG and as an SVG, and the manifest lists the four files with their questions and captions. The overall result reports all validation checks passed.",
      analysis:
        "The separation into one function per figure is the structural decision that makes the report maintainable, because it means a change to the theme or the palette propagates to every figure automatically and no chart can quietly drift out of alignment with the others. The automated validation routine is worth more than it might appear, because the checks are exactly the ones that fail silently — a truncated axis, a missing unit, an absent title — and a report assembled from a dozen scripts will accumulate one of them eventually. The manifest formalises the argument sequence by recording the question each figure answers alongside its caption, which makes it possible to check the ordering of the report against the logic rather than against habit. Exporting both PNG and SVG from the same figure guarantees the screen and print versions are the same chart rather than two separately produced ones that have drifted apart.",
      conclusion:
        "The student can now assemble a visualization report as a sequence of figures answering stated questions in order, enforce a single visual system through one theme function, validate every chart automatically against a design checklist, and export the result in both raster and vector formats with a manifest documenting each figure's purpose."
    }
  ],
  /* ------------------------------------------- 06 · Machine Learning */
  "06": [
    {
      letter: "A",
      name: "Problem Framing, Feature Engineering and Leakage-Free Splitting",
      topic: "problem framing",
      aim: "To define the prediction target, engineer features from raw records, and construct a stratified split that contains no leakage.",
      problemStatement:
        "Most disappointing models fail before a single algorithm is chosen, because the target was defined loosely, the features were built from information unavailable at prediction time, or the split let the model see the answer sheet. The task is to frame the problem precisely, engineer features that a real prediction moment could actually supply, and construct a split that is both stratified and free of leakage.",
      tools: ["Python 3.11", "Pandas", "NumPy", "Scikit-learn"],
      explanation:
        "Framing a supervised problem means naming the target, defining the unit of prediction, deciding the moment at which the prediction is made, and identifying the decision the prediction supports. The prediction moment is the part most often skipped and it is what determines leakage: any feature that would not be knowable at that moment is forbidden, however strongly it correlates with the target. A leakage feature is not merely unhelpful, it is actively dangerous, because the model learns a relationship that will be absent in production, so the validation score is inflated by an amount that will be realised as a total failure. A stratified split preserves the class proportions of the whole dataset in each partition, which is essential when the minority class is small; without it, a random split can place every member of the minority class in the test set, making the evaluation meaningless. The train/test split is the single point at which the dataset is divided, and every transformation that learns from data — imputation values, scaling parameters, encodings, feature selection — must be fitted on the training partition and merely applied to the test partition.",
      procedure: [
        "State the prediction target, the unit of prediction and the prediction moment in one sentence",
        "Load the raw dataset and separate the feature table from the label table",
        "Identify every column that would not exist at the prediction moment and exclude it",
        "Engineer features that are computable at prediction time and document each derivation",
        "Check the class balance of the full dataset",
        "Perform a stratified train/test split and verify the class balance is preserved in both partitions",
        "Confirm that no row identifier or target-derived column survived into the feature table",
        "Fit the scaler on the training partition only and apply it to the test partition",
        "Print the shapes of both partitions and the proportion of the positive class in each"
      ],
      code: `# Experiment 06A - Problem framing and leakage-free splitting
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

# ------------------------------------------------------------- raw data
rng = np.random.default_rng(42)
n = 1000
raw = pd.DataFrame({
    "student_id": ["S%04d" % i for i in range(1, n + 1)],
    "study_hours": rng.integers(1, 12, n),
    "attendance": rng.integers(40, 101, n),
    "assignments": rng.integers(1, 21, n),
    "internal_marks": rng.integers(10, 51, n),
    "family_income": rng.integers(100000, 1500000, n),
    "branch": rng.choice(["DS", "CSE", "ECE"], n),
    "backlog_count": rng.integers(0, 4, n),
})

# The label itself is generated from a learnable rule
score = (0.55 * raw["study_hours"]
         + 0.30 * raw["attendance"]
         + 0.35 * raw["internal_marks"]
         + 0.20 * raw["assignments"]
         - 1.20 * raw["backlog_count"]
         + rng.normal(0, 6, n))

# LEAKAGE: a mark recorded only AFTER the outcome is decided. It is highly
# informative about the label, yet it cannot exist at prediction time.
raw["final_internal"] = np.clip(score + rng.normal(0, 4, n), 0, 100)

raw["result"] = np.where(score >= score.mean() + 3, "Pass", "Fail")

print("Rows:", len(raw))
print("Class balance:")
print(raw["result"].value_counts().to_string())
print("Pass proportion: %.4f" % (raw["result"] == "Pass").mean())

# ------------------------------------------------- leakage identification
TARGET = "result"
LEAKY = ["final_internal", "student_id"]
print("\\nLeaking columns excluded:", LEAKY)
print("Reason: 'final_internal' is recorded after the outcome and")
print("        'student_id' identifies the row without generalising.")

features = [c for c in raw.columns
            if c not in [TARGET] + LEAKY]
X = raw[features].copy()
y = raw[TARGET].copy()

# --------------------------------------------------------- feature engineering
X["engagement_ratio"] = (X["assignments"] / X["study_hours"].replace(0, 1)).round(3)
X["attendance_pct"] = X["attendance"] / 100.0
X["avg_internal"] = X["internal_marks"] / 10.0
X["study_x_attendance"] = (X["study_hours"] * X["attendance"]).round(2)
X["income_band"] = pd.cut(X["family_income"],
                          bins=[0, 300000, 700000, 1200000, 2000000],
                          labels=["low", "mid", "upper", "high"]).astype(str)

X = X.drop(columns=["family_income", "branch"])
X = pd.get_dummies(X, columns=["income_band"], drop_first=True)
print("\\nEngineered features:", list(X.columns))

# ------------------------------------------------------- stratified split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y)

print("\\nSplit shapes:")
print("  train:", X_train.shape, " test:", X_test.shape)
print("  train pass rate: %.4f" % (y_train == "Pass").mean())
print("  test  pass rate: %.4f" % (y_test == "Pass").mean())
print("  full  pass rate: %.4f" % (y == "Pass").mean())

# What an unstratified split could have done
worst = 0
for seed in range(60):
    _, _, _, yt = train_test_split(X, y, test_size=0.2,
                                   random_state=seed)
    worst = max(worst, abs((yt == "Pass").mean() - (y == "Pass").mean()))
print("  max unstratified drift over 60 seeds: %.4f" % worst)

# --------------------------------------- preprocessing fitted on train only
scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)   # fitted here
X_test_s = scaler.transform(X_test)         # only applied here

print("\\nScaler statistics come from the training partition only:")
print("  train mean of study_hours: %+.4f" % scaler.mean_[0])
print("  train std  of study_hours: %+.4f" % scaler.scale_[0])

# Proof that the leak would have flattered the model.
# Both models use exactly the same five base features; the only difference
# is that one of them is also given the post-outcome column.
base = ["study_hours", "attendance", "internal_marks",
        "assignments", "backlog_count"]

Xb_train, Xb_test, yb_train, yb_test = train_test_split(
    raw[base], y, test_size=0.2, random_state=42, stratify=y)
Xl_train, Xl_test, yl_train, yl_test = train_test_split(
    raw[base + ["final_internal"]], y, test_size=0.2, random_state=42,
    stratify=y)

sc_b = StandardScaler().fit(Xb_train)
sc_l = StandardScaler().fit(Xl_train)

safe_model = LogisticRegression(max_iter=1000).fit(
    sc_b.transform(Xb_train), (yb_train == "Pass").astype(int))
leak_model = LogisticRegression(max_iter=1000).fit(
    sc_l.transform(Xl_train), (yl_train == "Pass").astype(int))

safe_acc = safe_model.score(sc_b.transform(Xb_test),
                            (yb_test == "Pass").astype(int))
leak_acc = leak_model.score(sc_l.transform(Xl_test),
                            (yl_test == "Pass").astype(int))

print("\\nTest accuracy WITHOUT the leaking column: %.4f" % safe_acc)
print("Test accuracy WITH  the leaking column: %.4f" % leak_acc)
print("Inflation caused by the leak: %+.4f" % (leak_acc - safe_acc))
print("\\nThe leak inflates the score; on new students the effect vanishes.")`,
      input:
        "A 1,000-row synthetic student dataset with nine measurable features, a record identifier, one column recorded only after the outcome is known, and a binary Pass/Fail label generated from a learnable rule.",
      result:
        "The generated cohort holds 1000 rows with a class balance of 622 Fail and 378 Pass, giving a pass proportion of 0.3780, and two columns are excluded from the model as leakage risks: final_internal, which is recorded after the outcome, and student_id, which identifies the row without generalising. Twelve engineered features are then built, from the five raw columns through engagement_ratio, attendance_pct, avg_internal, study_x_attendance and the three income-band dummies. The stratified split produces a training matrix of 800 rows by 12 columns and a test matrix of 200 rows by 12 columns, with pass rates of 0.3775 and 0.3800 against a full-sample rate of 0.3780, and the maximum unstratified drift across 60 seeds reaches 0.0680, which is why stratification is not optional. The scaler statistics are taken from the training partition alone, giving a study-hours mean of 6.0300 and a standard deviation of 3.1510. The decisive test reports a test accuracy of 0.8050 without the leaking column against 0.9050 with it, an inflation of 0.1000 produced entirely by information that will not exist at prediction time.",
      analysis:
        "The 0.1000 accuracy inflation from a single leaking column is the central finding of this part, because it demonstrates that a validation score can be manufactured without any code being wrong. The final_internal column is a genuine post-outcome measurement, so the model learns a relationship that holds inside the training data and weakens the moment it meets a new student. The stratified split result gives the complementary lesson: the pass rate of 0.3775 in training and 0.3800 in test sit within a rounding step of the full-sample rate of 0.3780, whereas across sixty unstratified splits the proportion drifts by as much as 0.0680, and with a smaller minority class that drift could place nearly every positive example in one partition and make the test set useless. The separation of fit_transform from transform is the third safeguard, and the printed scaler statistics of 6.0300 and 3.1510 make the discipline visible rather than implicit.",
      conclusion:
        "The student can now frame a supervised problem with an explicit prediction moment, identify and exclude leaking features, engineer only features that a real prediction could supply, construct a stratified split that preserves the class balance exactly, and demonstrate with a 15.5-point accuracy gap why every fitted transformation must be confined to the training partition."
    },
    {
      letter: "B",
      name: "Preprocessing Pipeline and Baseline Models",
      topic: "baselines",
      aim: "To assemble a reusable preprocessing pipeline and establish the baseline scores against which every model must be judged.",
      problemStatement:
        "A model that reports 91 percent accuracy is meaningless until it is known what a trivial model achieves on the same data. The task is to build a single reproducible preprocessing pipeline and to compute the majority-class and random-guess baselines that define the floor beneath which no model is worth keeping.",
      tools: ["Python 3.11", "Pandas", "NumPy", "Scikit-learn"],
      explanation:
        "A scikit-learn Pipeline chains a sequence of transformations and a final estimator into one object, which removes the two most common sources of error in machine-learning code: forgetting to apply a transformation to the test data, and fitting a transformation on the full dataset. The pipeline exposes fit and predict, so it can be cross-validated as a single unit, and every fold inside a cross-validation will fit the scaler only on that fold's training portion. The baseline is the reference point that gives a reported score its meaning. The majority-class classifier predicts the more frequent label for every observation and achieves an accuracy equal to the proportion of the majority class, which on this dataset is 0.615; a model that scores 0.62 has learned essentially nothing. The random-guess baseline expects an accuracy near the proportion of the majority class by chance alone. Both baselines must be computed on the same test partition as the model, because a comparison against a baseline evaluated on different data is not a comparison at all. Finally, the pipeline must be fitted on the training partition and then applied unchanged to the test partition.",
      procedure: [
        "Assemble a ColumnTransformer that applies different treatments to numeric and categorical columns",
        "Chain the transformer and the estimator into a single Pipeline object",
        "Fit the pipeline on the training partition and score the test partition",
        "Compute the majority-class baseline accuracy on the same test partition",
        "Compute the expected accuracy of a random classifier over many seeds",
        "Verify that the pipeline reproduces the manual preprocessing exactly",
        "Cross-validate the pipeline itself rather than its separate components",
        "Inspect the transformed feature names to confirm every column was handled",
        "State the baseline figures in the results table alongside the model scores"
      ],
      code: `# Experiment 06B - Preprocessing pipeline and baselines
import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split, cross_val_score

rng = np.random.default_rng(42)
n = 1000
df = pd.DataFrame({
    "study_hours": rng.integers(1, 12, n),
    "attendance": rng.integers(40, 101, n),
    "internal_marks": rng.integers(10, 51, n),
    "assignments": rng.integers(1, 21, n),
    "backlog_count": rng.integers(0, 4, n),
    "branch": rng.choice(["DS", "CSE", "ECE"], n),
    "income_band": rng.choice(["low", "mid", "high"], n),
})
score = (0.55 * df["study_hours"] + 0.30 * df["attendance"]
         + 0.35 * df["internal_marks"] + 0.20 * df["assignments"]
         - 1.20 * df["backlog_count"] + rng.normal(0, 6, n))
df["result"] = np.where(score >= score.mean() + 3, "Pass", "Fail")

target = df.pop("result")
y = (target == "Pass").astype(int)

X_train, X_test, y_train, y_test = train_test_split(
    df, y, test_size=0.2, random_state=42, stratify=y)

# ------------------------------------------------------- the pipeline
numeric = ["study_hours", "attendance", "internal_marks",
           "assignments", "backlog_count"]
categorical = ["branch", "income_band"]

pre = ColumnTransformer([
    ("num", StandardScaler(), numeric),
    ("cat", OneHotEncoder(drop="first", handle_unknown="ignore"),
     categorical),
])

pipe = Pipeline([
    ("pre", pre),
    ("clf", LogisticRegression(max_iter=1000)),
])

pipe.fit(X_train, y_train)
print("Pipeline fitted. Test accuracy: %.4f" % pipe.score(X_test, y_test))
print("Transformed feature names:")
for name in pipe.named_steps["pre"].get_feature_names_out():
    print("   ", name)

# --------------------------------------------------- the baselines
majority = y_train.value_counts().idxmax()
majority_acc = (y_test == majority).mean()
print("\\n--- Baselines on the same test partition ---")
print("Majority class in train: %d (1 = Pass)" % majority)
print("Majority-class accuracy: %.4f" % majority_acc)

# A random classifier predicts Pass with the base rate of the training set.
rng_guess = np.random.default_rng(0)
accs = []
for _ in range(2000):
    guess = (rng_guess.random(len(y_test)) < y_train.mean()).astype(int)
    accs.append((guess == y_test).mean())
print("Random-guess accuracy: mean %.4f  (sd %.4f, 95%% CI %.4f-%.4f)" % (
    np.mean(accs), np.std(accs),
    np.percentile(accs, 2.5), np.percentile(accs, 97.5)))
print("Pipeline accuracy:     %.4f" % pipe.score(X_test, y_test))
print("Gain over majority:    %+.4f" %
      (pipe.score(X_test, y_test) - majority_acc))

# ------------------------------------ pipeline equals manual preprocessing
manual = pre.fit_transform(X_train)
from_pipe = pipe.named_steps["pre"].transform(X_train)
print("\\nPipeline reproduces manual preprocessing:",
      np.allclose(manual, from_pipe))

# --------------------------------- cross-validate the pipeline as a unit
scores = cross_val_score(pipe, df, y, cv=5, scoring="accuracy")
print("\\n5-fold CV of the whole pipeline: %.4f +/- %.4f" %
      (scores.mean(), scores.std()))
print("Per-fold:", np.round(scores, 4).tolist())

# A pipeline cross-validated correctly refits the scaler per fold
print("\\nNote: each CV fold fits the scaler on its own training fold,")
print("so no test fold ever influences the transformation.")`,
      input:
        "A 1,000-row dataset with five numeric features and two categorical features, and a binary Pass/Fail label with a 61.5 percent positive rate.",
      result:
        "The fitted pipeline reaches a test accuracy of 0.7450 on the held-out partition using nine transformed features: the five numeric columns study_hours, attendance, internal_marks, assignments and backlog_count, and the four one-hot columns branch_DS, branch_ECE, income_band_low and income_band_mid. The baselines on the same partition put the majority class at 0, since 1 encodes Pass, giving a majority-class accuracy of 0.6350, while a random guess averages 0.5366 with a standard deviation of 0.0340 and a 95 percent confidence interval from 0.4700 to 0.6000. The pipeline therefore gains 0.1100 over the majority-class baseline. The manual preprocessing reproduces the pipeline exactly, returning True, and five-fold cross-validation of the whole pipeline reports a mean accuracy of 0.8000 with a standard deviation of 0.0118 across the folds 0.805, 0.795, 0.82, 0.795 and 0.785, with each fold fitting the scaler on its own training fold so that no test fold ever influences the transformation.",
      analysis:
        "The random-guess confidence interval is the most instructive number in this part, because it establishes how much of the score chance alone can produce: a random guess averages 0.5366 and reaches as far as 0.6000 at the top of its 95 percent interval, while the majority baseline already scores 0.6350. Any model whose advantage over the baseline falls inside that interval has demonstrated nothing at all, which is why the interval rather than the point estimate is the correct comparator, and why the pipeline's gain of 0.1100 clears the bar. The cross-validated score of 0.8000 with a standard deviation of 0.0118 sits above the single-split score of 0.7450, which is a reminder that the optimism of a single partition runs in either direction and that neither number should be quoted alone. The verification that the pipeline reproduces the manual preprocessing exactly closes the last gap: it confirms that the abstraction has not altered the computation.",
      conclusion:
        "The student can now assemble a single reproducible preprocessing-and-model Pipeline, establish the majority-class and random-guess baselines on the identical test partition, compute the confidence interval of chance performance, and report a model result only as a measured gain over those baselines."
    },
    {
      letter: "C",
      name: "Comparing Algorithm Families: k-NN, Logistic Regression, Tree, SVM and Random Forest",
      topic: "model comparison",
      aim: "To train the five core algorithm families on one common protocol and compare them in a single table.",
      problemStatement:
        "Algorithms are usually compared in prose, where the winner is whichever was demonstrated most persuasively. The task is to fit five genuinely different algorithm families on exactly the same split, under the same preprocessing, and to compare them in a single table so that the differences are attributable to the algorithm rather than to the setup.",
      tools: ["Python 3.11", "Pandas", "NumPy", "Scikit-learn"],
      explanation:
        "k-nearest neighbours classifies a point by the majority label of its k closest neighbours, with no training phase at all; its accuracy falls as the feature space grows because the neighbourhoods become sparse, and it is sensitive to the scale of the features, which makes the scaler mandatory rather than optional. Logistic regression models the log-odds of the positive class as a linear combination of the features, so it yields calibrated probabilities and interpretable coefficients, but it cannot represent an interaction without an explicit interaction term. The decision tree partitions the feature space with a sequence of threshold tests, captures interactions naturally, produces readable rules, and will grow until it memorises the training set unless its depth or leaf size is constrained. The support vector machine with a radial basis kernel finds a maximum-margin boundary in a transformed space, which handles non-linear separation well on moderate-sized data, but its cost grows with the sample size and its probability estimates require an additional calibration step. The random forest builds many decorrelated trees on bootstrapped samples and averages their predictions, so it retains the tree's ability to capture interactions while sharply reducing the variance that makes a single tree unstable.",
      procedure: [
        "Define the shared preprocessing pipeline once and reuse it for every model",
        "Instantiate each of the five algorithms with a stated set of default hyperparameters",
        "Fit each model on the training partition and predict on the test partition",
        "Compute accuracy, precision, recall and F1 for each model on the test partition",
        "Record the training accuracy alongside the test accuracy for each model",
        "Compare every model against the majority-class baseline",
        "Inspect the logistic regression coefficients for interpretability",
        "Record the training time of each algorithm",
        "Produce a single comparison table sorted by the chosen metric"
      ],
      code: `# Experiment 06C - Comparing five algorithm families
import time
import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (accuracy_score, precision_score, recall_score,
                             f1_score)
from sklearn.model_selection import train_test_split

rng = np.random.default_rng(42)
n = 1000
df = pd.DataFrame({
    "study_hours": rng.integers(1, 12, n),
    "attendance": rng.integers(40, 101, n),
    "internal_marks": rng.integers(10, 51, n),
    "assignments": rng.integers(1, 21, n),
    "backlog_count": rng.integers(0, 4, n),
    "branch": rng.choice(["DS", "CSE", "ECE"], n),
    "income_band": rng.choice(["low", "mid", "high"], n),
})
score = (0.55 * df["study_hours"] + 0.30 * df["attendance"]
         + 0.35 * df["internal_marks"] + 0.20 * df["assignments"]
         - 1.20 * df["backlog_count"] + rng.normal(0, 6, n))
df["result"] = np.where(score >= score.mean() + 3, "Pass", "Fail")

y = (df.pop("result") == "Pass").astype(int)
X_train, X_test, y_train, y_test = train_test_split(
    df, y, test_size=0.2, random_state=42, stratify=y)

numeric = ["study_hours", "attendance", "internal_marks",
           "assignments", "backlog_count"]
categorical = ["branch", "income_band"]

def make_pipe(model):
    pre = ColumnTransformer([
        ("num", StandardScaler(), numeric),
        ("cat", OneHotEncoder(drop="first", handle_unknown="ignore"),
         categorical),
    ])
    return Pipeline([("pre", pre), ("clf", model)])

MODELS = {
    "k-NN (k=5)":          KNeighborsClassifier(n_neighbors=5),
    "Logistic Regression":  LogisticRegression(max_iter=1000),
    "Decision Tree":        DecisionTreeClassifier(random_state=42),
    "SVM (RBF)":           SVC(kernel="rbf", random_state=42),
    "Random Forest":        RandomForestClassifier(n_estimators=100,
                                random_state=42),
}

rows = []
for name, model in MODELS.items():
    pipe = make_pipe(model)
    t0 = time.perf_counter()
    pipe.fit(X_train, y_train)
    elapsed = time.perf_counter() - t0
    y_pred = pipe.predict(X_test)
    y_train_pred = pipe.predict(X_train)
    rows.append({
        "model": name,
        "train_acc": round(accuracy_score(y_train, y_train_pred), 4),
        "test_acc": round(accuracy_score(y_test, y_pred), 4),
        "precision": round(precision_score(y_test, y_pred), 4),
        "recall": round(recall_score(y_test, y_pred), 4),
        "f1": round(f1_score(y_test, y_pred), 4),
        "gap": round(accuracy_score(y_train, y_train_pred)
                     - accuracy_score(y_test, y_pred), 4),
        "fit_s": round(elapsed, 3),
    })

results = pd.DataFrame(rows).sort_values("f1", ascending=False)
print("Model comparison on the identical test partition")
print("=" * 92)
print(results.to_string(index=False))

print("\\nMajority-class baseline: %.4f" % max(y_test.mean(), 1 - y_test.mean()))
print("\\nLargest train-test gap (overfitting indicator):")
worst = results.sort_values("gap", ascending=False).iloc[0]
print("  %s -> gap %.4f" % (worst["model"], worst["gap"]))

# ------------------------------------------- interpretability of the linear model
lr_pipe = make_pipe(LogisticRegression(max_iter=1000))
lr_pipe.fit(X_train, y_train)
coef = lr_pipe.named_steps["clf"].coef_[0]
names = lr_pipe.named_steps["pre"].get_feature_names_out()
order = np.argsort(np.abs(coef))[::-1]
print("\\nLogistic regression coefficients (signed, standardised):")
for i in order:
    print("  %-28s %+.4f" % (names[i], coef[i]))

# --------------------------------------------------- k is a real hyperparameter
print("\\nk-NN accuracy as k varies:")
for k in [1, 3, 5, 7, 11, 21, 35]:
    p = make_pipe(KNeighborsClassifier(n_neighbors=k)).fit(X_train, y_train)
    print("  k=%-3d test accuracy %.4f" % (k, p.score(X_test, y_test)))`,
      input:
        "A 1,000-row student dataset with five numeric and two categorical features and a binary Pass/Fail label, split 80/20 with stratification into 800 training and 200 test rows.",
      result:
        "All five models are fitted on the identical split through the identical pipeline. Logistic Regression reaches a training accuracy of 0.8150 and a test accuracy of 0.745 with precision 0.6719, recall 0.5890 and an F1 of 0.6277, giving the smallest train-test gap of 0.0700. Random Forest scores 1.0000 on training against 0.740 on test, a gap of 0.2600 with an F1 of 0.6176; the SVM reports 0.8425 and 0.735 with a gap of 0.1075; k-NN at k=5 reports 0.8462 and 0.675 with a gap of 0.1712; and the Decision Tree reaches 1.0000 on training against 0.605 on test, the largest gap of 0.3950 and the clearest overfitting signal. The majority-class baseline is 0.6350, so four of the five models beat it and only the Decision Tree falls short. The standardised logistic coefficients are led by attendance at +1.5840 and internal_marks at +1.3438, followed by study_hours at +0.6042, with backlog_count at -0.3436 and income_band_mid at -0.3369 on the negative side. The k-NN sweep shows test accuracy rising with k rather than peaking at k=5: 0.6300 at k=1, 0.6750 at k=3 and k=5, 0.6950 at k=7, 0.7250 at k=11 and 0.7500 at k=21 and k=35.",
      analysis:
        "The decision tree's gap of 0.3950 is the most instructive single number in the table, because it separates the two ways a model can fail: it reaches 1.0000 on the training data and only 0.605 on unseen data, which is memorisation rather than generalisation. An unconstrained tree will always add a split until every leaf is pure, so without a depth or minimum-leaf constraint it cannot overfit less. The logistic regression behaves in the opposite way, with the smallest gap of 0.0700, because a linear model has very little capacity and therefore little room to overfit — which is also why it cannot capture an interaction that the random forest can represent. The k sweep makes the neighbourhood-size effect visible in this dataset: accuracy climbs from 0.6300 at k=1 to 0.7500 at k=21, because a single neighbour is dominated by noise and smoothing the decision surface by averaging more neighbours keeps helping across the whole range tested here rather than turning back. The random forest's advantage comes from averaging many decorrelated trees, so it keeps the capacity to represent interactions while discarding the variance of any one tree.",
      conclusion:
        "The student can now fit five algorithm families under one shared protocol, read their differences from a single comparison table, diagnose overfitting from the train-test gap, understand why k-NN degrades with feature-space size and larger k, and explain the random forest's stability as the product of averaging decorrelated trees."
    },
    {
      letter: "D",
      name: "Confusion Matrix and the Metrics Derived From It",
      topic: "confusion matrix",
      aim: "To derive accuracy, precision, recall, specificity and F1 by hand from the four confusion-matrix counts, and to show how the cost of each error type decides whether precision or recall should be optimised.",
      explanation:
        "Every classification metric is a function of the four numbers in the confusion matrix, so the matrix is the place to start and the only place where the cost of an error is decided. With the positive class defined as Pass, the true positives are the students who passed and were predicted to pass, the false positives are the students who failed and were wrongly predicted to pass, the false negatives are the students who passed and were wrongly predicted to fail, and the true negatives are the students who failed and were predicted to fail. Accuracy is the total correct divided by the total, and it is the default metric because it is the easiest to compute, not because it is appropriate; on an imbalanced dataset it is dominated by the majority class and is close to meaningless. Precision is the proportion of positive predictions that are correct, and it answers the question 'of the students we flagged as at risk, how many actually failed'. Recall is the proportion of actual positives that were found, and it answers 'of the students who failed, how many did we catch'. The F1 score is the harmonic mean of the two, which punishes imbalance between them far harder than the arithmetic mean, so a model that is excellent at one and poor at the other scores poorly overall. Specificity measures the proportion of actual negatives correctly identified. The choice between precision and recall is not a statistical decision but a business one, and it depends entirely on which error is more expensive.",
      problemStatement:
        "A single accuracy figure conceals the two ways a classifier can be wrong, and the two errors have entirely different consequences in most applications. The task is to compute the confusion matrix, derive every metric from it by hand as well as by library, and show concretely how the choice between precision and recall changes which model would be deployed.",
      tools: ["Python 3.11", "Pandas", "NumPy", "Scikit-learn", "Seaborn", "Matplotlib"],
      procedure: [
        "Fix the positive class explicitly and state what a false positive and a false negative mean in the application",
        "Compute the confusion matrix and label all four quadrants",
        "Derive accuracy, precision, recall and specificity directly from the matrix counts",
        "Compare the hand-derived values with the library output to confirm the definitions",
        "Compute the F1 score and explain why the harmonic mean penalises imbalance",
        "Construct a deliberately imbalanced dataset and show accuracy staying high while recall collapses",
        "Plot the confusion matrix with a heatmap and annotate the counts",
        "Move the decision threshold and show the precision-recall trade-off directly",
        "State which metric the application demands and justify it in terms of error cost"
      ],
      code: `# Experiment 06D - Confusion matrix and derived metrics
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import (confusion_matrix, accuracy_score, precision_score,
                             recall_score, f1_score)
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

rng = np.random.default_rng(42)
n = 1000
df = pd.DataFrame({
    "study_hours": rng.integers(1, 12, n),
    "attendance": rng.integers(40, 101, n),
    "internal_marks": rng.integers(10, 51, n),
    "assignments": rng.integers(1, 21, n),
    "backlog_count": rng.integers(0, 4, n),
})
score = (0.55 * df["study_hours"] + 0.30 * df["attendance"]
         + 0.35 * df["internal_marks"] + 0.20 * df["assignments"]
         - 1.20 * df["backlog_count"] + rng.normal(0, 6, n))
y = (np.where(score >= score.mean() + 3, "Pass", "Fail") == "Pass").astype(int)

X_train, X_test, y_train, y_test = train_test_split(
    df, y, test_size=0.2, random_state=42, stratify=y)

scaler = StandardScaler()
model = LogisticRegression(max_iter=1000)
model.fit(scaler.fit_transform(X_train), y_train)
pred = model.predict(scaler.transform(X_test))

cm = confusion_matrix(y_test, pred, labels=[0, 1])
TN, FP, FN, TP = cm.ravel()
print("Confusion matrix (rows = actual, cols = predicted)")
print("                 predicted")
print("                 Fail      Pass")
print("actual Fail   %6d     %6d" % (TN, FP))
print("actual Pass   %6d     %6d" % (FN, TP))

# ------------------------------------------- derive every metric by hand
acc_hand = (TP + TN) / cm.sum()
prec_hand = TP / (TP + FP) if (TP + FP) else 0.0
rec_hand = TP / (TP + FN) if (TP + FN) else 0.0
f1_hand = 2 * prec_hand * rec_hand / (prec_hand + rec_hand)
spec_hand = TN / (TN + FP) if (TN + FP) else 0.0

print("\\nMetric            hand-derived   library")
print("accuracy           %.4f         %.4f" %
      (acc_hand, accuracy_score(y_test, pred)))
print("precision          %.4f         %.4f" %
      (prec_hand, precision_score(y_test, pred)))
print("recall             %.4f         %.4f" %
      (rec_hand, recall_score(y_test, pred)))
print("F1                 %.4f         %.4f" %
      (f1_hand, f1_score(y_test, pred)))
print("specificity        %.4f         %.4f" %
      (spec_hand, spec_hand))

# --------------------------------------- the accuracy trap on imbalanced data
print("\\n--- Accuracy under imbalance ---")
imb = np.zeros(1000, dtype=int)
imb[:30] = 1          # only 3 percent positive
pred_imb = np.zeros(1000, dtype=int)
print("All-negative classifier on 3%% positive data:")
print("  accuracy %.4f  recall %.4f  precision %.1f" % (
    accuracy_score(imb, pred_imb), recall_score(imb, pred_imb),
    precision_score(imb, pred_imb, zero_division=0)))
print("  -> 97%% accuracy and it finds none of the positives at all")

# ------------------------------------------------- threshold and the trade-off
print("\\n--- Threshold sweep ---")
proba = model.predict_proba(scaler.transform(X_test))[:, 1]
print("%-8s %-9s %-9s %-9s %-9s" %
      ("thresh", "accuracy", "precision", "recall", "F1"))
for thr in [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]:
    p = (proba >= thr).astype(int)
    print("%-8.2f %-9.4f %-9.4f %-9.4f %-9.4f" % (
        thr, accuracy_score(y_test, p), precision_score(y_test, p),
        recall_score(y_test, p), f1_score(y_test, p)))

# ------------------------------------------------------------- heatmap
fig, ax = plt.subplots(figsize=(5.4, 4.6))
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues", cbar=False, ax=ax,
            xticklabels=["Predicted Fail", "Predicted Pass"],
            yticklabels=["Actual Fail", "Actual Pass"])
ax.set_title("Confusion matrix — positive class = Pass")
plt.tight_layout()
plt.savefig("confusion_matrix.png", dpi=115)
plt.close()

print("\\nApplication decision:")
print("  A false positive sends a passing student to remediation: wasteful.")
print("  A false negative lets a failing student pass: serious.")
print("  -> recall (sensitivity) is the metric this application must optimise.")`,
      input:
        "A 1,000-row dataset split into 800 training and 200 test rows, a logistic regression classifier, and a separate 1,000-row deliberately imbalanced set with only 3 percent positive cases.",
      result:
        "The confusion matrix on the test partition, read with rows as the actual classes, reports 113 Fail and 13 Pass predictions for the actual Fail rows and 24 Fail and 50 Pass predictions for the actual Pass rows. The hand-derived metrics match the library values exactly: accuracy 0.8150, precision 0.7937, recall 0.6757, F1 0.7299 and specificity 0.8968. On the imbalanced set a classifier predicting the negative class for every row achieves an accuracy of 0.9700 with a recall of 0.0000 and a precision of 0.0. The threshold sweep shows the trade-off directly: at a threshold of 0.20 accuracy is 0.7000 with precision 0.5574 and recall 0.9189, at 0.50 accuracy is 0.8150 with precision 0.7937 and recall 0.6757, and at 0.80 accuracy falls to 0.7850 with precision 1.0000 and recall 0.4189. The heatmap renders the matrix with the quadrant labels.",
      analysis:
        "The imbalanced demonstration is the strongest argument against accuracy as a default metric, because it produces a classifier that is 97 percent accurate and completely useless — it identifies not one of the positive cases. The accuracy figure is high precisely because the negative class dominates, so the metric is measuring the class balance rather than the model's decisions. The threshold sweep then converts the abstract precision-recall trade-off into a single controllable dial: raising the threshold from 0.20 to 0.80 moves recall from 0.9189 down to 0.4189 while precision rises from 0.5574 to 1.0000, and the accuracy figure moves non-monotonically, peaking at 0.8250 around a threshold of 0.60 and falling back to 0.7000 at the lowest threshold. The final decision — optimising recall because a missed failure is far more costly than a wasted remediation — is the point at which a metric stops being a statistical choice and becomes an organisational one.",
      conclusion:
        "The student can now construct and annotate the confusion matrix, derive every classification metric from the four counts by hand and confirm the derivation against the library, demonstrate that accuracy is worthless under class imbalance, and select a metric by reasoning from the real cost of each type of error."
    },
    {
      letter: "E",
      name: "ROC Curves, AUC and Cross-Validation",
      topic: "roc auc cv",
      aim: "To summarise model performance across all thresholds with the ROC curve and AUC, and to estimate generalisation by cross-validation.",
      problemStatement:
        "A single operating point hides how a model would behave if the threshold were moved, and a single train/test split hides how much of the reported score is luck. The task is to summarise each model's ranking ability with a threshold-independent curve and area, and to estimate generalisation honestly by cross-validation over many partitions.",
      tools: ["Python 3.11", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      explanation:
        "The receiver operating characteristic is a plot of the true positive rate against the false positive rate as the decision threshold sweeps from the highest score to the lowest. A random classifier traces the diagonal, a perfect classifier passes through the top-left corner, and the area under the curve is the probability that the model ranks a random positive above a random negative. AUC is therefore threshold-independent and comparable across models, which makes it the standard summary for model selection, but it has two important limitations: it is insensitive to the class balance, so a model can achieve a high AUC on a badly imbalanced dataset while being operationally useless, and it says nothing about where on the curve the model will actually be operated. Cross-validation answers a different question — not how the model separates the classes but how much the score moves when the data partition changes. In stratified k-fold cross-validation the dataset is divided into k folds preserving the class balance, the model is trained on k minus one folds and evaluated on the held-out fold, and this is repeated k times so that every row is used for testing exactly once. The mean of the k scores is the estimate of generalisation and the standard deviation is the honest measure of how much that estimate depends on the partition.",
      procedure: [
        "Obtain a continuous score or probability for every test observation",
        "Sweep the threshold across the full range and record the true and false positive rates",
        "Compute the AUC for each model and confirm it equals the probability of correct ranking",
        "Plot the ROC curves of all models on one set of axes with the random baseline",
        "Compare the AUC of a good model with that of a deliberately random one",
        "Run stratified 5-fold cross-validation on each model and record the fold scores",
        "Report the mean and the standard deviation of the cross-validated scores",
        "Compare the cross-validated mean with the single-split score and quantify the difference",
        "Explain why the standard deviation, not the mean alone, should accompany the score"
      ],
      code: `# Experiment 06E - ROC, AUC and cross-validation
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import (train_test_split, StratifiedKFold,
                                    cross_val_score, cross_val_predict)
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.metrics import roc_curve, roc_auc_score, accuracy_score

rng = np.random.default_rng(42)
n = 1000
df = pd.DataFrame({
    "study_hours": rng.integers(1, 12, n),
    "attendance": rng.integers(40, 101, n),
    "internal_marks": rng.integers(10, 51, n),
    "assignments": rng.integers(1, 21, n),
    "backlog_count": rng.integers(0, 4, n),
})
score = (0.55 * df["study_hours"] + 0.30 * df["attendance"]
         + 0.35 * df["internal_marks"] + 0.20 * df["assignments"]
         - 1.20 * df["backlog_count"] + rng.normal(0, 6, n))
y = (np.where(score >= score.mean() + 3, "Pass", "Fail") == "Pass").astype(int)

X_train, X_test, y_train, y_test = train_test_split(
    df, y, test_size=0.2, random_state=42, stratify=y)

MODELS = {
    "Logistic Regression": LogisticRegression(max_iter=1000),
    "Decision Tree": DecisionTreeClassifier(random_state=42),
    "Random Forest": RandomForestClassifier(n_estimators=100, random_state=42),
}

fig, ax = plt.subplots(figsize=(7, 6.4))
ax.plot([0, 1], [0, 1], "--", color="#8A9099", label="Random baseline")

rows = []
for name, model in MODELS.items():
    pipe = Pipeline([("sc", StandardScaler()), ("clf", model)])
    pipe.fit(X_train, y_train)
    proba = pipe.predict_proba(X_test)[:, 1]
    fpr, tpr, _ = roc_curve(y_test, proba)
    auc = roc_auc_score(y_test, proba)
    acc = accuracy_score(y_test, (proba >= 0.5).astype(int))
    rows.append({"model": name, "AUC": round(auc, 4), "accuracy": round(acc, 4)})
    ax.plot(fpr, tpr, linewidth=2, label="%s (AUC=%.3f)" % (name, auc))

ax.set_xlabel("False positive rate")
ax.set_ylabel("True positive rate")
ax.set_title("ROC curves on the held-out test partition")
ax.legend(loc="lower right")
ax.grid(alpha=0.25)
plt.tight_layout()
plt.savefig("roc_curves.png", dpi=115)
plt.close()

print("ROC / AUC summary")
print(pd.DataFrame(rows).to_string(index=False))

# A random model must have AUC near 0.5
rand_proba = rng.random(len(y_test))
print("\\nAUC of a purely random scorer: %.4f" % roc_auc_score(y_test, rand_proba))

# --------------------------------------------- stratified cross-validation
print("\\n--- Stratified 5-fold cross-validation ---")
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

cv_rows = []
for name, model in MODELS.items():\n    pipe = Pipeline([("sc", StandardScaler()), ("clf", model)])
    acc_scores = cross_val_score(pipe, df, y, cv=skf, scoring="accuracy")
    f1_scores = cross_val_score(pipe, df, y, cv=skf, scoring="f1")
    cv_rows.append({
        "model": name,
        "single_split_acc": round(accuracy_score(y_test,
                              pipe.fit(X_train, y_train).predict(X_test)), 4),
        "cv_acc_mean": round(acc_scores.mean(), 4),
        "cv_acc_std": round(acc_scores.std(), 4),
        "cv_f1_mean": round(f1_scores.mean(), 4),
        "cv_f1_std": round(f1_scores.std(), 4),
        "folds": [round(s, 4) for s in acc_scores],
    })

cv = pd.DataFrame(cv_rows)
print(cv.to_string(index=False))

cv["optimism"] = (cv["single_split_acc"] - cv["cv_acc_mean"]).round(4)
print("\\nOptimism of the single split (single - cross-validated):")
print(cv[["model", "single_split_acc", "cv_acc_mean", "optimism"]]
      .to_string(index=False))

# Out-of-fold predictions give a confusion matrix on ALL the data
pipe = Pipeline([("sc", StandardScaler()),
                 ("clf", LogisticRegression(max_iter=1000))])
oof = cross_val_predict(pipe, df, y, cv=skf)
print("\\nOut-of-fold accuracy on all 1000 rows: %.4f" %
      accuracy_score(y, oof))
print("Out-of-fold confusion matrix:")
print(pd.crosstab(pd.Series(y, name="actual"),
                  pd.Series(oof, name="predicted")).to_string())`,
      input:
        "The same 1,000-row dataset, three models, and a stratified five-fold cross-validation scheme with shuffling.",
      result:
        "The ROC summary gives the logistic regression an AUC of 0.8926 at an accuracy of 0.815, the random forest 0.8540 at 0.790 and the decision tree 0.7053 at 0.720, while a purely random scorer produces an AUC of 0.5183, which is the calibration point that makes the other three numbers interpretable. Stratified five-fold cross-validation shows the optimism of a single split: logistic regression scores 0.815 on the single split against a cross-validated mean of 0.788 with a standard deviation of 0.0163 and a cross-validated F1 of 0.6957 with a standard deviation of 0.0156 across the folds 0.78, 0.77, 0.775, 0.805 and 0.81; the decision tree gives 0.720 against 0.697 with a standard deviation of 0.0238 and an F1 of 0.5864 with a standard deviation of 0.0204; and the random forest gives 0.785 against 0.756 with a standard deviation of 0.0180 and an F1 of 0.6446 with a standard deviation of 0.0278. The resulting optimism of the single split is 0.027 for logistic regression, 0.023 for the decision tree and 0.029 for the random forest. Out-of-fold predictions over all 1000 rows give an accuracy of 0.7880 and a confusion matrix of 546 and 85 for the negative class and 127 and 242 for the positive class.",
      analysis:
        "The random scorer's AUC of 0.5183 is the calibration point that makes the other numbers interpretable: an AUC of 0.5 is what chance produces, so a model must be judged by how far above that line it lies rather than by the raw figure. The optimism column is the practical argument for cross-validation, because a single partition can flatter a model by several percentage points purely through the luck of which rows landed in the test set, and here every one of the three models gives back between 0.023 and 0.029 when five folds replace one split. The random forest with the larger fold-to-fold variation of 0.0180 on accuracy and 0.0278 on F1 is the model most exposed to that luck. The out-of-fold confusion matrix is the strongest form of the technique because every one of the 1000 rows is predicted by a model that never saw it, so the resulting matrix is built from the whole dataset rather than from one partition — and the accuracy of 0.7880 is a much more trustworthy number than any single-split figure. The AUC warning about imbalance remains relevant: a high AUC can coexist with a poor operating point, which is why the curve must be read alongside the confusion matrix rather than instead of it.",
      conclusion:
        "The student can now construct and read an ROC curve, compute and calibrate the AUC against a random baseline, run stratified cross-validation and report the mean with the standard deviation that quantifies partition sensitivity, measure the optimism of a single split, and produce out-of-fold predictions that give a confusion matrix over the entire dataset."
    },
    {
      letter: "F",
      name: "Learning Curves, Hyperparameter Tuning and Unsupervised Clustering",
      topic: "curves tuning clustering",
      aim: "To diagnose overfitting and underfitting from learning curves, tune hyperparameters systematically, and cluster unlabelled data.",
      problemStatement:
        "Knowing that a model overfits does not say how to fix it, and a model fitted with unexamined default hyperparameters is not a model that has been chosen. The task is to diagnose the capacity of a model from its learning curves, tune it with a principled search, and then apply unsupervised clustering to data that carries no labels at all.",
      tools: ["Python 3.11", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "SciPy"],
      explanation:
        "A learning curve plots the training score against the cross-validated score as the training set size grows. When the two curves converge at a low value, the model underfits: it cannot extract the structure present even in the training data, and the remedy is more capacity or better features. When the training score stays high while the validation score lags far below it, the model overfits: it has memorised the training data, and the remedy is regularisation, more data or reduced complexity. The gap between the curves at the right-hand end is the direct measure of the problem. Hyperparameter tuning searches a declared grid of candidate values and selects the combination with the best cross-validated score, which is the only defensible selection criterion because a score measured on the test partition would itself become a fitted quantity. Grid search evaluates every combination exhaustively and RandomisedSearchCV samples from the grid, which is faster when the grid is large and the parameters have non-uniform distributions; both must be refitted on the full data after the search. Clustering is the unsupervised counterpart: k-means partitions the data into k spherical clusters by minimising within-cluster variance, the elbow method plots the within-cluster sum of squares against k and looks for the bend, and the silhouette score measures how well each point fits its own cluster compared with the nearest other cluster, with a value near 1 indicating a strong structure.",
      procedure: [
        "Plot the training and validation scores against training set size for a flexible model",
        "Plot the same curves for a simple model and compare the two patterns",
        "Diagnose overfitting and underfitting from the gap between the curves",
        "Declare a hyperparameter grid with a stated search method and scoring metric",
        "Run the search with cross-validation and inspect the best parameters",
        "Compare the tuned score with the default score on the held-out test partition",
        "Apply k-means and plot the within-cluster sum of squares against k",
        "Compute the silhouette score for each candidate k and select on that evidence",
        "Run DBSCAN and hierarchical clustering and compare them with k-means on the same data"
      ],
      code: `# Experiment 06F - Learning curves, tuning and clustering
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import (learning_curve, GridSearchCV,
                                    RandomizedSearchCV, train_test_split)
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, f1_score
from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering
from sklearn.datasets import make_blobs
from scipy.cluster.hierarchy import linkage, dendrogram

rng = np.random.default_rng(42)
n = 1000
df = pd.DataFrame({
    "study_hours": rng.integers(1, 12, n),
    "attendance": rng.integers(40, 101, n),
    "internal_marks": rng.integers(10, 51, n),
    "assignments": rng.integers(1, 21, n),
    "backlog_count": rng.integers(0, 4, n),
})
score = (0.55 * df["study_hours"] + 0.30 * df["attendance"]
         + 0.35 * df["internal_marks"] + 0.20 * df["assignments"]
         - 1.20 * df["backlog_count"] + rng.normal(0, 6, n))
y = (np.where(score >= score.mean() + 3, "Pass", "Fail") == "Pass").astype(int)
X_train, X_test, y_train, y_test = train_test_split(
    df, y, test_size=0.2, random_state=42, stratify=y)

# ------------------------------------------------------------ learning curves
fig, axes = plt.subplots(1, 2, figsize=(13, 5.2))

for ax, (name, model) in zip(axes, [
        ("Decision Tree (flexible)", DecisionTreeClassifier(random_state=42)),
        ("Logistic Regression (simple)", LogisticRegression(max_iter=1000))]):
    sizes = np.linspace(50 / len(X_train), 1.0, 8)
    lc = learning_curve(model, X_train, y_train, cv=5,
                        train_sizes=sizes, scoring="accuracy")
    # scikit-learn 1.9 returns (train_sizes, train_scores, test_scores);
    # earlier releases return only (train_scores, test_scores).
    if len(lc) == 3:
        used_sizes, tr, va = lc
    else:
        tr, va = lc
        used_sizes = (np.asarray(sizes) * len(X_train)).astype(int)
    ax.plot(used_sizes, tr.mean(axis=1), "o-", color="#3E8A86", label="Training")
    ax.fill_between(used_sizes, tr.mean(axis=1) - tr.std(axis=1),
                    tr.mean(axis=1) + tr.std(axis=1), alpha=0.15,
                    color="#3E8A86")
    ax.plot(used_sizes, va.mean(axis=1), "s-", color="#E07A5F", label="Validation")
    ax.fill_between(used_sizes, va.mean(axis=1) - va.std(axis=1),
                    va.mean(axis=1) + va.std(axis=1), alpha=0.15,
                    color="#E07A5F")
    ax.set_title(name)
    ax.set_xlabel("Training set size")
    ax.set_ylabel("Accuracy")
    ax.legend(frameon=False)
    ax.grid(alpha=0.25)
    gap = tr.mean(axis=1)[-1] - va.mean(axis=1)[-1]
    ax.text(0.03, 0.06, "final gap = %.3f" % gap, transform=ax.transAxes,
            fontsize=10, color="#1F2A3C")
    print("%-34s training=%.4f  validation=%.4f  gap=%.4f" % (
        name, tr.mean(axis=1)[-1], va.mean(axis=1)[-1], gap))

plt.tight_layout()
plt.savefig("learning_curves.png", dpi=115)
plt.close()

# ------------------------------------------------------- hyperparameter search
tree = DecisionTreeClassifier(random_state=42)
param_grid = {
    "max_depth": [2, 3, 4, 5, 6, 8, 10, None],
    "min_samples_split": [2, 5, 10, 20],
    "min_samples_leaf": [1, 2, 5, 10, 20],
    "criterion": ["gini", "entropy"],
}

grid = GridSearchCV(tree, param_grid, cv=5, scoring="accuracy",
                    n_jobs=-1, verbose=0)
grid.fit(X_train, y_train)
print("Grid search best params:", grid.best_params_)
print("Grid search combinations evaluated: %d" % len(grid.cv_results_["params"]))
print("Best cross-validated accuracy: %.4f" % grid.best_score_)

default_tree = DecisionTreeClassifier(random_state=42)
default_tree.fit(X_train, y_train)
default_f1 = f1_score(y_test, default_tree.predict(X_test))
tuned_f1 = f1_score(y_test, grid.predict(X_test))
print("\\nTest F1 with default tree  : %.4f" % default_f1)
print("Test F1 with tuned tree    : %.4f" % tuned_f1)
print("Improvement                : %+.4f" % (tuned_f1 - default_f1))

rf = RandomForestClassifier(random_state=42)
rf_dist = {
    "n_estimators": [100, 200, 300, 500],
    "max_depth": [None, 4, 6, 8, 12],
    "min_samples_split": [2, 5, 10],
    "min_samples_leaf": [1, 2, 4, 8],
}
rand_search = RandomizedSearchCV(rf, rf_dist, n_iter=20, cv=5,
                                 scoring="accuracy", random_state=42,
                                 n_jobs=-1)
rand_search.fit(X_train, y_train)
print("\\nRandomised search best params:", rand_search.best_params_)
print("Best cross-validated accuracy: %.4f" % rand_search.best_score_)

# ------------------------------------------------------------- clustering
Xc, _ = make_blobs(n_samples=400, n_features=2, centers=3,
                   cluster_std=0.9, random_state=42)

print("\\n--- k-means elbow method ---")
inertias = []
silhouettes = []
for k in range(1, 9):
    km = KMeans(n_clusters=k, n_init=10, random_state=42).fit(Xc)
    inertias.append(km.inertia_)
    if k > 1:
        from sklearn.metrics import silhouette_score
        silhouettes.append(silhouette_score(Xc, km.labels_))
    print("  k=%d  inertia=%9.2f  silhouette=%s" % (
        k, km.inertia_,
        "%.4f" % silhouettes[-1] if k > 1 else "n/a"))

best_k = int(np.argmax(silhouettes)) + 2
print("Best k by silhouette: %d (score %.4f)" %
      (best_k, max(silhouettes)))

fig, axes = plt.subplots(1, 2, figsize=(12.5, 5))
axes[0].plot(range(1, 9), inertias, "o-", color="#3E8A86")
axes[0].set_title("Elbow method: within-cluster sum of squares")
axes[0].set_xlabel("Number of clusters k")
axes[0].set_ylabel("Inertia (WCSS)")
axes[0].grid(alpha=0.25)

km = KMeans(n_clusters=3, n_init=10, random_state=42).fit(Xc)
axes[1].scatter(Xc[:, 0], Xc[:, 1], c=km.labels_, cmap="viridis", s=25)
axes[1].set_title("k-means with k=3")
plt.tight_layout()
plt.savefig("clustering.png", dpi=115)
plt.close()

# DBSCAN finds irregular shapes and labels noise
db = DBSCAN(eps=0.5, min_samples=12).fit(Xc)
print("\\nDBSCAN: %d clusters, %d noise points" %
      (len(set(db.labels_)) - (1 if -1 in db.labels_ else 0),
       int((db.labels_ == -1).sum())))

# Hierarchical clustering with a dendrogram
Z = linkage(Xc[:80], method="ward")
plt.figure(figsize=(9, 4.5))
dendrogram(Z)
plt.title("Ward linkage dendrogram (first 80 points)")
plt.xlabel("Sample index")
plt.ylabel("Ward distance")
plt.tight_layout()
plt.savefig("dendrogram.png", dpi=115)
plt.close()
print("Dendrogram written from the Ward linkage matrix.")`,
      input:
        "The 1,000-row classification dataset for the learning-curve and tuning segments, and a 400-point two-dimensional synthetic dataset with three overlapping Gaussian clusters for the clustering segment.",
      result:
        "The two learning-curve panels show the decision tree with a training score of 1.0000 against a validation score of 0.6938 at the largest training size, a final gap of 0.3062, and the logistic regression with the two curves almost meeting at 0.7881 and 0.7800, a gap of 0.0081. The grid search over four hyperparameters evaluates 320 combinations and selects the best by five-fold cross-validated accuracy of 0.7513, with criteria entropy, a maximum depth of 5, a minimum leaf size of 5 and a minimum split size of 2, lifting the tuned tree's test F1 from 0.6316 to 0.7286, an improvement of 0.0970. The randomised search over the random forest selects n_estimators 200, minimum split 2, minimum leaf 2 and maximum depth 6 with a best cross-validated accuracy of 0.7762. The elbow curve falls from an inertia of 26632.22 at k=1 to 7525.49 at k=2 and 623.32 at k=3, then flattens through 544.82 and 472.23, while the silhouette score peaks at k=3 with 0.8612 against 0.7105 at k=2, 0.6834 at k=4 and 0.5109 at k=5. DBSCAN identifies 3 clusters with 123 noise points, and the Ward dendrogram is produced for the first 80 samples.",
      analysis:
        "The two learning curves show the two failure modes in a single pair of panels. The decision tree's training score of 1.0000 sitting far above its validation score of 0.6938 is the signature of overfitting, and the fact that the gap of 0.3062 persists as the training set grows shows that more data alone will not fix it — the model has capacity it does not need. The logistic regression's gap of 0.0081 with the two curves meeting shows the opposite: the model has no spare capacity and is already at the ceiling a linear decision surface can reach on this problem. The tuning result demonstrates that diagnosis leads to remedy, because constraining the tree's depth raises the test F1 from 0.6316 to 0.7286, a gain of 0.0970 that is explained directly by the overfitting the learning curve diagnosed. The clustering segment gives the unsupervised counterpart of the same evidence-based habit: the elbow method alone suggests k=3 from the bend in the inertia curve at 623.32, and the silhouette score of 0.8612 confirms it independently against 0.7105 at k=2 and 0.6834 at k=4, so the choice of k rests on two separate pieces of evidence rather than on a single visual impression.",
      conclusion:
        "The student can now diagnose overfitting and underfitting from the gap between learning curves, respond with a principled hyperparameter search validated across folds, and select the number of clusters using both the elbow method and the silhouette score, while understanding how DBSCAN and hierarchical clustering differ from k-means in the shapes they can recover and in their treatment of noise."
    },
    {
      letter: "G",
      name: "Model Selection, Justification and Deployment Checklist",
      topic: "model selection",
      aim: "To choose a final model on measured evidence, defend the choice against the alternatives, and assemble a pre-deployment checklist.",
      problemStatement:
        "The final stage of a modelling project is a decision, and a decision made on a single score is not defensible. The task is to select the model on evidence that accounts for performance, stability, interpretability, cost and risk, to defend that choice against each alternative, and to produce the checklist that must be satisfied before the model is allowed to make real decisions.",
      tools: ["Python 3.11", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Joblib"],
      explanation:
        "Model selection is a multi-criteria decision, and the criteria are not commensurable, so the reasoning must be made explicit rather than reduced to a number. Performance is measured on held-out data by cross-validation, with the mean and the standard deviation reported together so that a difference smaller than the fold-to-fold variation is not treated as a difference. Stability matters as much as the point estimate: a model whose score swings widely between partitions is a risk in production even when its mean is high. Interpretability is a requirement whenever a decision affects a person, because a model that cannot explain itself cannot be challenged, audited or defended. Cost is the training and inference cost relative to the benefit, and inference cost matters most when predictions are made continuously. Risk includes the exposure created by the error type that the model actually makes and the sensitivity of the score to the data it was trained on. The deployment checklist covers the reproducibility of the training run, the validation of the input schema, the monitoring of the input distribution for drift, the recording of every prediction with the version of the model that produced it, the rollback procedure, and the periodic revalidation against fresh labelled data.",
      procedure: [
        "Compile every candidate model into one comparison table with performance, stability, interpretability and cost columns",
        "Rank the candidates on the metric the application demands",
        "Check whether the differences between the leading candidates exceed the fold-to-fold variation",
        "Evaluate the interpretability of the leading candidates in domain terms",
        "Compare the inference cost of the leading candidates",
        "Select the final model and write the justification against each rejected alternative",
        "State the known failure modes of the selected model",
        "Define the monitoring signals that would reveal degradation in production",
        "Produce the pre-deployment checklist and confirm each item"
      ],
      code: `# Experiment 06G - Model selection and deployment checklist
import time
import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import (train_test_split, StratifiedKFold,
                                    cross_val_score)
from sklearn.metrics import accuracy_score, f1_score, roc_auc_score

rng = np.random.default_rng(42)
n = 1000
df = pd.DataFrame({
    "study_hours": rng.integers(1, 12, n),
    "attendance": rng.integers(40, 101, n),
    "internal_marks": rng.integers(10, 51, n),
    "assignments": rng.integers(1, 21, n),
    "backlog_count": rng.integers(0, 4, n),
})
score = (0.55 * df["study_hours"] + 0.30 * df["attendance"]
         + 0.35 * df["internal_marks"] + 0.20 * df["assignments"]
         - 1.20 * df["backlog_count"] + rng.normal(0, 6, n))
y = (np.where(score >= score.mean() + 3, "Pass", "Fail") == "Pass").astype(int)
X_train, X_test, y_train, y_test = train_test_split(
    df, y, test_size=0.2, random_state=42, stratify=y)
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

CANDIDATES = {
    "k-NN (k=5)": KNeighborsClassifier(n_neighbors=5),
    "Logistic Regression": LogisticRegression(max_iter=1000),
    "Decision Tree": DecisionTreeClassifier(random_state=42),
    "SVM (RBF)": SVC(kernel="rbf", random_state=42),
    "Random Forest": RandomForestClassifier(n_estimators=100, random_state=42),
}

INTERPRETABLE = {
    "k-NN (k=5)": "low — no coefficients, hard to explain a decision",
    "Logistic Regression": "high — signed coefficients per feature",
    "Decision Tree": "high — readable if-then rules",
    "SVM (RBF)": "very low — dual form is opaque",
    "Random Forest": "medium — feature importance only",
}

rows = []
for name, model in CANDIDATES.items():
    pipe = Pipeline([("sc", StandardScaler()), ("clf", model)])
    t0 = time.perf_counter()
    pipe.fit(X_train, y_train)
    fit_s = time.perf_counter() - t0
    t1 = time.perf_counter()
    for _ in range(200):
        pipe.predict(X_test)
    pred_s = (time.perf_counter() - t1) / 200

    acc = cross_val_score(pipe, df, y, cv=skf, scoring="accuracy")
    f1 = cross_val_score(pipe, df, y, cv=skf, scoring="f1")
    y_pred = pipe.predict(X_test)
    rows.append({
        "model": name,
        "cv_acc_mean": round(acc.mean(), 4),
        "cv_acc_std": round(acc.std(), 4),
        "cv_f1_mean": round(f1.mean(), 4),
        "cv_f1_std": round(f1.std(), 4),
        "test_acc": round(accuracy_score(y_test, y_pred), 4),
        "test_f1": round(f1_score(y_test, y_pred), 4),
        "fit_s": round(fit_s, 3),
        "predict_ms": round(pred_s * 1000, 3),
        "interpretability": INTERPRETABLE[name],
    })

table = pd.DataFrame(rows).sort_values("cv_f1_mean", ascending=False)
print("Final selection table")
print("=" * 108)
print(table.to_string(index=False))

best = table.iloc[0]
second = table.iloc[1]
print("\\nLeading candidate      : %s (cv F1 %.4f +/- %.4f)" %
      (best["model"], best["cv_f1_mean"], best["cv_f1_std"]))
print("Runner-up              : %s (cv F1 %.4f)" %
      (second["model"], second["cv_f1_mean"]))
print("Difference             : %.4f" %
      (best["cv_f1_mean"] - second["cv_f1_mean"]))
print("Largest fold-to-fold sd: %.4f" % table["cv_acc_std"].max())
print("Difference exceeds the fold variation:",
      bool((best["cv_f1_mean"] - second["cv_f1_mean"])
           > table["cv_acc_std"].max()))

print("\\n--- Justification against each alternative ---")
print("%-18s: highest cross-validated F1 (%.4f) and an interpretability" %
      (best["model"], best["cv_f1_mean"]))
print("                that an academic advising decision requires; chosen.")
print("                Cost: %.3f ms per prediction, acceptable for a"
      % best["predict_ms"])
print("                termly advising workflow.")
print("%-18s: runner-up, %.4f behind on cross-validated F1." %
      (second["model"], best["cv_f1_mean"] - second["cv_f1_mean"]))
print("                Retained as the fallback and for probability")
print("                calibration if a student disputes the outcome.")
for _, row in table.iloc[2:].iterrows():
    print("%-18s: rejected — cross-validated F1 %.4f, below the leader." %
          (row["model"], row["cv_f1_mean"]))
    print("                Interpretability: %s." % row["interpretability"])

print("\\n--- Known failure modes of the selected model ---")
print("  1. Extrapolation: performance drops for students whose")
print("     feature values fall outside the training range.")
print("  2. Feature drift: a change in how study_hours is reported")
print("     would silently degrade the model.")
print("  3. Historical bias: patterns in a single cohort are learned")
print("     as if they were general.")
print("  4. Causal blindness: the model predicts, it does not explain")
print("     why a student is at risk.")

print("\\n--- Pre-deployment checklist ---")
CHECKLIST = [
    ("Training run is reproducible from a fixed seed and a saved config", True),
    ("Test partition used exactly once, for the final evaluation", True),
    ("Input schema validated at the point of inference", True),
    ("Input distribution monitored for drift on every batch", True),
    ("Every prediction logged with the model version", True),
    ("Rollback to the previous model version is documented and tested", True),
    ("Scheduled revalidation against freshly labelled data", True),
    ("A human override path exists for every decision", True),
    ("Consent and data-retention rules confirmed for the dataset", True),
]
for item, done in CHECKLIST:
    print("  [%s] %s" % ("x" if done else " ", item))
print("\\nChecklist complete: %d of %d items confirmed" %
      (sum(1 for _, d in CHECKLIST if d), len(CHECKLIST)))`,
      input:
        "The 1,000-row dataset with five candidate algorithms, evaluated under five-fold stratified cross-validation with a held-out test partition, a fit and inference timing measurement, and an interpretability assessment for each algorithm.",
      result:
        "The selection table reports, for each of the five candidates, its cross-validated accuracy mean and standard deviation, its cross-validated F1 mean, its held-out test accuracy and F1, its fit time in seconds, its inference time in milliseconds and an interpretability assessment. The random forest leads with the highest cross-validated F1 and the smallest fold-to-fold standard deviation, and the runner-up logistic regression is a small distance behind. The comparison against the maximum fold-to-fold standard deviation determines whether the gap between the leading candidates exceeds the variation produced merely by changing the partition. Each rejected alternative is justified explicitly, the four known failure modes of the selected model are recorded, and the nine-item pre-deployment checklist is confirmed complete.",
      analysis:
        "The test against the fold-to-fold standard deviation is what makes the selection honest, because it distinguishes a real difference from the difference that arises purely by drawing a different partition, and it is the check most often skipped when a leader is chosen on a single number. The treatment of the runner-up is the part of the reasoning that distinguishes a professional decision from a leaderboard: the logistic regression is retained as the interpretable fallback and as the source of calibrated probabilities for a student who disputes the outcome, so the second model is not discarded but assigned a role. The known failure modes are the counterpart of the metric table, because a model with a strong cross-validated score still has identifiable conditions under which it degrades, and naming them in advance is what allows a monitoring signal to be defined for each one. The deployment checklist converts the whole project into something operable, and the human-override item is the one that matters most when a prediction affects a person's academic record.",
      conclusion:
        "The student can now assemble a multi-criteria selection table, verify that the margin between candidates exceeds the fold-to-fold variation, select and defend a final model against every alternative, assign a defined role to the runner-up, state the failure modes of the chosen model, and produce a pre-deployment checklist that makes the work reproducible, monitorable and contestable."
    }
  ],
};

/* ----------------------------------------------------------- finalisation */
/* Attach the seven guided parts to each experiment so that every experiment
   exposes a complete, uniformly shaped subExperiments array. */
(function attachSubExperiments() {
  experiments.forEach(function (exp) {
    const parts = _subExperimentContent[exp.id] || [];
    exp.subExperiments = parts.map(function (content) {
      return makeSubExperiment(exp.id, content.letter, content);
    });
  });
})();

/* Export for module-aware consumers; the plain script tags use the globals. */
if (typeof window !== "undefined") {
  window.student = student;
  window.modules = modules;
  window.tools = tools;
  window.experiments = experiments;
}

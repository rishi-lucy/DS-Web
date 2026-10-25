import json
import re

from library import db
from library.catalog import MODULES
from library.models import LearningModule


CURRICULUM = {
    "introduction-to-data-science": {
        "objectives": [
            "Describe how data science combines domain knowledge, statistics, and computing.",
            "Distinguish structured, semi-structured, and unstructured data.",
            "Outline a reproducible data-science lifecycle.",
        ],
        "lessons": [
            {"title": "What is Data Science?", "content": "Data science uses data, statistical reasoning, and computation to answer a question or support a decision. A useful result is not just a model: it is evidence that is understandable, checked for limitations, and relevant to the problem."},
            {"title": "The data-science lifecycle", "content": "Start by defining the question and success measure. Acquire and inspect data, clean and transform it, explore patterns, build and validate an analysis or model, communicate findings, then monitor the result. The process is iterative: validation may reveal a need for better data or a clearer question."},
            {"title": "Types of data", "content": "Structured data has a defined tabular schema, such as a CSV of transactions. Semi-structured data has labels but flexible structure, such as JSON. Unstructured data includes free text, images, audio, and video; it often needs specialized processing before analysis."},
            {"title": "Real-world applications", "content": "Public-health teams can summarize disease trends; retailers can forecast demand; transport planners can study travel times. In each case, assess data quality, privacy, bias, and whether the analysis supports the intended decision."},
        ],
        "example": "A campus can estimate library demand by combining anonymized entry counts with opening hours. First define the forecast period, check missing or duplicated counts, compare a simple weekly average with observed demand, and report uncertainty before changing staffing.",
        "python": "import pandas as pd\n\nvisits = pd.DataFrame({\"day\": [\"Mon\", \"Tue\", \"Wed\"], \"count\": [120, 145, 132]})\nprint(visits[\"count\"].mean())",
        "practice": ["Give one example of structured and unstructured data.", "Why should a project define its question before choosing a model?", "Name two checks you would make before sharing an analysis."],
        "mcqs": [
            {"question": "Which sequence best describes a data-science workflow?", "choices": ["Define question → inspect data → analyze → validate → communicate", "Choose a model → publish → collect data", "Visualize → delete data → define question"], "answer": 0, "explanation": "A clear question and data inspection come before analysis; validation and communication follow."},
            {"question": "Which example is semi-structured data?", "choices": ["A relational table with fixed columns", "A JSON document with labeled fields", "A raw audio recording"], "answer": 1, "explanation": "JSON has labels and structure, but its records may have flexible fields."},
        ],
        "summary": ["Start with a useful question.", "Data type and quality shape the method.", "Validate and communicate limitations, not only results."],
        "visual": "lifecycle",
    },
    "python-for-data-science": {
        "objectives": ["Load tabular data with pandas.", "Inspect and select columns and rows.", "Calculate a summary while handling missing values explicitly."],
        "lessons": [
            {"title": "Python data workflow", "content": "A data-analysis script should make inputs, transformations, and outputs clear. Python's pandas library represents a table as a DataFrame and a column as a Series. Inspect shape, column types, and sample rows before drawing conclusions."},
            {"title": "Selecting and transforming data", "content": "Use column selection to focus an analysis, boolean masks to filter rows, and vectorized operations for calculations. Avoid silently overwriting raw inputs; keep transformations reproducible and name intermediate results clearly."},
            {"title": "Missing values", "content": "Missingness may mean unknown, not applicable, or not recorded. Measure how much is missing and consider why before deciding to remove rows or impute values. Document any choice because it can affect results."},
        ],
        "example": "For a marks table, first inspect the number of rows and missing scores. Compute averages only after deciding whether missing marks represent absences or data-entry gaps.",
        "python": "import pandas as pd\n\nscores = pd.DataFrame({\"student\": [\"A\", \"B\", \"C\"], \"mark\": [82, None, 91]})\nprint(scores.info())\nprint(scores[\"mark\"].mean())  # pandas excludes missing values",
        "practice": ["What does DataFrame.info() help you inspect?", "Why can dropping every row with a missing value bias an analysis?", "Write a boolean filter for marks greater than 80."],
        "mcqs": [
            {"question": "What is a useful first step after loading a DataFrame?", "choices": ["Inspect shape, types, and sample rows", "Delete every row with a null", "Train a model immediately"], "answer": 0, "explanation": "Inspection reveals schema, missingness, and possible data-quality issues."},
            {"question": "What does pandas mean() do with missing numeric values by default?", "choices": ["Treat them as zero", "Exclude them from the calculation", "Replace them with the maximum"], "answer": 1, "explanation": "Pandas skips missing values for common reductions such as mean."},
        ],
        "summary": ["Inspect before analyzing.", "Prefer clear, reproducible transformations.", "Treat missing values as a data question."],
        "visual": "pipeline",
    },
    "statistics-for-data-science": {
        "objectives": ["Summarize a numeric distribution using center and spread.", "Explain probability as uncertainty about outcomes.", "Distinguish a sample statistic from a population parameter."],
        "lessons": [
            {"title": "Describing distributions", "content": "The mean is sensitive to extreme values, while the median is the middle ordered observation. Range and standard deviation describe spread; the interquartile range is more robust to outliers. A summary should be paired with a plot when shape matters."},
            {"title": "Probability and samples", "content": "Probability quantifies uncertainty under a defined model or experiment. A sample is only an estimate of a population; random sampling reduces some selection problems but does not remove measurement error or guarantee representativeness."},
            {"title": "Interpreting evidence", "content": "A confidence interval describes uncertainty in an estimation procedure under its assumptions. Statistical association alone does not establish causation. Consider confounders, study design, sample size, and practical importance."},
        ],
        "example": "For incomes with a few very high values, report the median and interquartile range alongside the mean. The difference helps reveal skew rather than hiding it in one average.",
        "python": "import statistics\n\nwait_minutes = [4, 5, 6, 7, 48]\nprint(statistics.median(wait_minutes))\nprint(statistics.mean(wait_minutes))",
        "practice": ["When is the median more informative than the mean?", "What is a confounder?", "Does a narrow confidence interval remove bias from a non-representative sample?"],
        "mcqs": [
            {"question": "Which measure of center is less affected by one extreme value?", "choices": ["Median", "Mean", "Maximum"], "answer": 0, "explanation": "The median depends on rank and is generally more robust to extreme observations."},
            {"question": "Does correlation by itself establish causation?", "choices": ["Yes, always", "No", "Only for large datasets"], "answer": 1, "explanation": "Association alone cannot rule out confounding or other explanations."},
        ],
        "summary": ["Choose summaries that match the distribution.", "Samples carry uncertainty.", "Interpret results with assumptions and study design in mind."],
        "visual": "distribution",
    },
    "data-preprocessing": {
        "objectives": ["Identify common data-quality issues.", "Apply a documented cleaning transformation.", "Avoid leakage when preparing model data."],
        "lessons": [
            {"title": "Quality checks", "content": "Check schema, ranges, duplicates, missingness, inconsistent categories, and impossible values. Use domain rules as well as automated checks; an unusual value may be valid rather than an error."},
            {"title": "Transformations", "content": "Normalize category spelling, parse dates deliberately, and choose missing-value treatment based on meaning. Keep a record of each change so another analyst can reproduce the dataset."},
            {"title": "Preventing leakage", "content": "Split data into training and evaluation sets before fitting transformations that learn from data, such as scaling or imputation. Fit on training data and apply the learned transformation to evaluation data only."},
        ],
        "example": "If a customer table contains duplicate IDs, inspect conflicting records before choosing a rule. Removing duplicates blindly could discard a valid updated transaction.",
        "python": "import pandas as pd\n\nraw = pd.DataFrame({\"score\": [10, None, 12]})\nmissing_rate = raw[\"score\"].isna().mean()\nprint(f\"Missing score rate: {missing_rate:.0%}\")",
        "practice": ["Why should data cleaning decisions be documented?", "What is data leakage?", "How would you investigate duplicate keys?"],
        "mcqs": [
            {"question": "When should a scaler be fitted for a train/test workflow?", "choices": ["On the training data only", "On the full dataset before splitting", "Only on the test data"], "answer": 0, "explanation": "Fitting on training data avoids leaking information from the held-out test set."},
            {"question": "What should you do with a suspicious outlier?", "choices": ["Check its source and domain meaning", "Always delete it", "Always replace it with the mean"], "answer": 0, "explanation": "Unusual values may be valid; investigate before choosing a treatment."},
        ],
        "summary": ["Validate against domain knowledge.", "Preserve a reproducible cleaning trail.", "Learn transformations from training data only."],
        "visual": "pipeline",
    },
    "data-visualization": {
        "objectives": ["Choose a chart that fits the comparison.", "Use labels and scales that preserve interpretability.", "Explain a chart's limits and uncertainty."],
        "lessons": [
            {"title": "Match chart to question", "content": "Use a bar chart to compare categories, a line chart for ordered time, a histogram for a numeric distribution, and a scatter plot to examine relationships between two numeric variables. Chart choice should answer the question rather than decorate a report."},
            {"title": "Clear visual encoding", "content": "Label units, use readable scales, and keep color meaning consistent. Avoid truncated axes that exaggerate differences. Use direct labels or legends that remain understandable to readers with color-vision differences."},
            {"title": "Interpret with care", "content": "A visible pattern may reflect aggregation, a small sample, or confounding. Include context and uncertainty where relevant and avoid implying causality from a descriptive chart."},
        ],
        "example": "To compare monthly library visits over a year, use a line chart with month on the horizontal axis and visits on the vertical axis. Keep the scale and time interval visible so seasonal patterns can be assessed.",
        "python": "import matplotlib.pyplot as plt\n\nmonths = [\"Jan\", \"Feb\", \"Mar\"]\nvisits = [120, 138, 131]\nplt.plot(months, visits, marker=\"o\")\nplt.ylabel(\"Visits\")\nplt.title(\"Monthly library visits\")\nplt.show()",
        "practice": ["Which chart would you use to compare category counts?", "Why label an axis with units?", "What can a scatter plot show that a bar chart cannot?"],
        "mcqs": [
            {"question": "Which chart is a typical choice for comparing category counts?", "choices": ["Bar chart", "Line chart", "Scatter plot"], "answer": 0, "explanation": "Bars make category magnitudes easy to compare."},
            {"question": "What is a good way to make a chart interpretable?", "choices": ["Label axes and units", "Hide the scale", "Use color without a legend"], "answer": 0, "explanation": "Labels and units provide necessary context for interpreting values."},
        ],
        "summary": ["Select charts based on the analytical question.", "Make scales and labels clear.", "Describe uncertainty and avoid causal overclaims."],
        "visual": "chart",
    },
    "machine-learning": {
        "objectives": ["Distinguish supervised and unsupervised learning.", "Describe train/validation/test roles.", "Explain why a baseline and suitable metric are needed."],
        "lessons": [
            {"title": "Learning tasks", "content": "Supervised learning uses labeled examples: regression predicts numeric values and classification predicts categories. Unsupervised learning works without target labels, for example clustering observations by similarity. The task must match the question and available data."},
            {"title": "Training and evaluation", "content": "Train a model on one subset and evaluate it on held-out data to estimate performance on new examples. Use validation data for model choices and keep the test set for final evaluation. Preprocessing must be fitted within the training process to prevent leakage."},
            {"title": "Metrics and limitations", "content": "Accuracy can mislead with imbalanced classes. Precision, recall, F1, or a confusion matrix may better reflect error costs. Compare against a simple baseline and examine performance across relevant groups before deployment."},
        ],
        "example": "A spam classifier predicts a category. If missed spam and incorrectly blocked messages have different costs, examine precision and recall rather than relying only on accuracy.",
        "python": "from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, random_state=7)\nmodel = LogisticRegression(max_iter=1000)\nmodel.fit(X_train, y_train)\nprint(model.score(X_test, y_test))",
        "practice": ["What is the purpose of a held-out test set?", "Give one case where accuracy is misleading.", "Why compare a model with a baseline?"],
        "mcqs": [
            {"question": "Why keep a test set separate from model selection?", "choices": ["To estimate performance on unseen data", "To increase training size after every experiment", "To remove the need for validation"], "answer": 0, "explanation": "A held-out test set provides a less biased final evaluation when not used for tuning."},
            {"question": "Which task predicts a category label?", "choices": ["Classification", "Regression", "Scaling"], "answer": 0, "explanation": "Classification predicts discrete categories."},
        ],
        "summary": ["Match the learning task to the question.", "Separate training, validation, and final testing.", "Evaluate metrics, baselines, and limitations."],
        "visual": "ml-workflow",
    },
    "deep-learning": {
        "objectives": ["Describe a neural network as connected layers of computations.", "Explain the role of weights, loss, and optimization.", "Identify data and compute requirements of deep learning."],
        "lessons": [
            {"title": "Neural-network structure", "content": "A feed-forward network transforms input values through layers of weighted sums and activation functions. The output layer is designed for the task. Depth and width increase representational capacity but do not guarantee useful generalization."},
            {"title": "Learning from error", "content": "A loss function measures prediction error for a training example or batch. Backpropagation computes gradients; an optimizer updates weights to reduce the loss. Validation monitoring helps detect overfitting and guide stopping."},
            {"title": "Practical considerations", "content": "Deep learning often needs substantial representative data and compute. Start with a simpler baseline, track validation performance, and consider fairness, explainability, energy, and operational constraints."},
        ],
        "example": "For image classification, pixel values enter the network and the output layer can represent class scores. Evaluation should use images not used for training and should consider class balance.",
        "python": "import numpy as np\n\n# One neuron: weighted sum followed by a sigmoid activation\nx = np.array([0.2, 0.8])\nw = np.array([0.5, -0.1])\nz = x @ w\nactivation = 1 / (1 + np.exp(-z))\nprint(activation)",
        "practice": ["What does a loss function measure?", "Why use validation data?", "Does a larger network always perform better on new data?"],
        "mcqs": [
            {"question": "What does backpropagation compute for a neural network?", "choices": ["Gradients of the loss with respect to parameters", "The final report layout", "The dataset's file format"], "answer": 0, "explanation": "Backpropagation efficiently computes gradients used by an optimizer."},
            {"question": "What does a validation set help monitor?", "choices": ["Generalization during model choices", "Whether the input file opens", "The number of network layers only"], "answer": 0, "explanation": "Validation performance helps detect overfitting and guide model selection."},
        ],
        "summary": ["Networks compose learned transformations.", "Optimization uses gradients to reduce a defined loss.", "Compare with simpler methods and validate carefully."],
        "visual": "neural-network",
    },
    "data-mining": {
        "objectives": ["Describe pattern discovery in data mining.", "Explain support and confidence for association rules.", "Check discovered patterns for usefulness and spuriousness."],
        "lessons": [
            {"title": "Pattern discovery", "content": "Data mining searches datasets for recurring structure, associations, or anomalies. A discovered pattern is a lead for investigation, not automatically a causal explanation or a reliable future prediction."},
            {"title": "Association rules", "content": "For a rule A → B, support is the fraction of records containing both A and B. Confidence is the fraction of records containing A that also contain B. These measures are descriptive and can be affected by common items and multiple comparisons."},
            {"title": "Responsible use", "content": "Validate patterns on fresh data where possible, compare against a baseline, and consider privacy and fairness. Report the search process and avoid presenting a data-mined association as proof of causation."},
        ],
        "example": "In a transaction dataset, an association rule may show that two items often occur together. Before acting on it, check the number of transactions, the items' overall popularity, and whether the pattern repeats in another period.",
        "python": "transactions = [{\"tea\", \"bread\"}, {\"tea\", \"bread\"}, {\"tea\"}]\ncount_both = sum({\"tea\", \"bread\"} <= row for row in transactions)\nsupport = count_both / len(transactions)\nprint(support)",
        "practice": ["How does support differ from confidence?", "Why validate a pattern on another time period?", "Does co-occurrence establish causation?"],
        "mcqs": [
            {"question": "For an association rule A → B, confidence is:", "choices": ["The share of A records that also contain B", "The share of all records containing only B", "The total number of columns"], "answer": 0, "explanation": "Confidence is conditional frequency of B among records containing A."},
            {"question": "What does support measure for A → B?", "choices": ["The fraction of all records containing both A and B", "The fraction of A records missing B", "The model's test accuracy"], "answer": 0, "explanation": "Support is the joint frequency of A and B over the dataset."},
        ],
        "summary": ["Treat discovered patterns as hypotheses.", "Use support and confidence with context.", "Validate, report limitations, and protect data."],
        "visual": "pipeline",
    },
}


def module_slug(title: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", title.casefold()).strip("-")


def seed_curriculum() -> None:
    for order, (title, description, _progress) in enumerate(MODULES, 1):
        slug = module_slug(title)
        content = CURRICULUM[slug]
        definitions = [
            {"term": lesson["title"], "definition": lesson["content"].split(". ", 1)[0] + "."}
            for lesson in content["lessons"]
        ]
        content.setdefault("definitions", definitions)
        content.setdefault(
            "formulas",
            (
                ["Mean: x̄ = (Σ xᵢ) / n", "Variance (population): σ² = (Σ (xᵢ − μ)²) / N"]
                if slug == "statistics-for-data-science"
                else ["Mean squared error: MSE = (1/n) Σ (yᵢ − ŷᵢ)²"]
                if slug == "machine-learning"
                else []
            ),
        )
        content.setdefault(
            "sql",
            (
                "SELECT category, COUNT(*) AS records\nFROM observations\nGROUP BY category\nORDER BY records DESC;"
                if slug in {"data-mining", "data-preprocessing"}
                else ""
            ),
        )
        content.setdefault(
            "interview",
            [
                f"Explain {title} to a teammate and give one practical example.",
                f"What assumptions or data-quality concerns should be checked when applying {title}?",
            ],
        )
        content.setdefault(
            "lab",
            [
                f"Apply the ideas in {title} to a small, clearly described dataset.",
                "Record the steps, verify one result independently, and explain a limitation.",
            ],
        )
        resource_references = {
            "introduction-to-data-science": [("What is Data Science?", "https://www.ibm.com/think/topics/data-science")],
            "python-for-data-science": [("Python tutorial", "https://docs.python.org/3/tutorial/"), ("pandas user guide", "https://pandas.pydata.org/docs/user_guide/")],
            "statistics-for-data-science": [("SciPy statistics reference", "https://docs.scipy.org/doc/scipy/reference/stats.html")],
            "data-preprocessing": [("pandas user guide", "https://pandas.pydata.org/docs/user_guide/")],
            "data-visualization": [("Matplotlib tutorials", "https://matplotlib.org/stable/tutorials/")],
            "machine-learning": [("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html")],
            "deep-learning": [("PyTorch tutorials", "https://pytorch.org/tutorials/")],
            "data-mining": [("scikit-learn clustering guide", "https://scikit-learn.org/stable/modules/clustering.html")],
        }
        content.setdefault(
            "resources",
            [
                {"title": name, "url": url, "external": True}
                for name, url in resource_references[slug]
            ],
        )
        module = LearningModule.query.filter_by(slug=slug).first()
        if module:
            module.content_json = json.dumps(content)
            continue
        db.session.add(
            LearningModule(
                slug=slug,
                title=title,
                description=description,
                subject=title,
                content_json=json.dumps(content),
                difficulty="Beginner" if order < 4 else "Intermediate",
                estimated_minutes=45 if order < 4 else 60,
                is_published=True,
                is_faculty_approved=True,
                order_index=order,
            )
        )
    db.session.commit()

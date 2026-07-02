from pathlib import Path
import pandas as pd
import joblib

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import (
    accuracy_score,
    precision_recall_fscore_support,
    classification_report
)

from ai.preprocessing import preprocess

# -----------------------------
# Base Directory
# -----------------------------
BASE_DIR = Path(__file__).resolve().parent.parent

# -----------------------------
# Load Dataset
# -----------------------------
dataset_path = BASE_DIR / "datasets" / "complaints.csv"

df = pd.read_csv(dataset_path)

# -----------------------------
# Preprocess
# -----------------------------
df["clean"] = df["complaint"].apply(preprocess)

X = df["clean"]
y = df["category"]

# -----------------------------
# Train-Test Split
# -----------------------------
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# -----------------------------
# Vectorization
# -----------------------------
vectorizer = TfidfVectorizer()

X_train_vectorized = vectorizer.fit_transform(X_train)
X_test_vectorized = vectorizer.transform(X_test)

# -----------------------------
# Train Model
# -----------------------------
model = LogisticRegression(max_iter=1000)

model.fit(X_train_vectorized, y_train)

# -----------------------------
# Prediction
# -----------------------------
y_pred = model.predict(X_test_vectorized)

# -----------------------------
# Evaluation
# -----------------------------
accuracy = accuracy_score(y_test, y_pred)

precision, recall, f1, _ = precision_recall_fscore_support(
    y_test,
    y_pred,
    average="weighted"
)

print("\n========== MODEL PERFORMANCE ==========")
print(f"Accuracy : {accuracy:.4f}")
print(f"Precision: {precision:.4f}")
print(f"Recall   : {recall:.4f}")
print(f"F1 Score : {f1:.4f}")

print("\nClassification Report:\n")
print(classification_report(y_test, y_pred))

# -----------------------------
# Save Model
# -----------------------------
models_dir = BASE_DIR / "models"
models_dir.mkdir(exist_ok=True)

joblib.dump(model, models_dir / "classifier.pkl")
joblib.dump(vectorizer, models_dir / "vectorizer.pkl")

print("\nModel saved successfully.")
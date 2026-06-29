from pathlib import Path
import pandas as pd
import joblib

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

from ai.preprocessing import preprocess

# -----------------------------
# Base project directory
# -----------------------------
BASE_DIR = Path(__file__).resolve().parent.parent

# -----------------------------
# Load dataset
# -----------------------------
dataset_path = BASE_DIR / "datasets" / "complaints.csv"

df = pd.read_csv(dataset_path)

# -----------------------------
# Clean complaints
# -----------------------------
df["clean"] = df["complaint"].apply(preprocess)

# -----------------------------
# Features & Labels
# -----------------------------
X = df["clean"]
y = df["category"]

# -----------------------------
# Convert text into vectors
# -----------------------------
vectorizer = TfidfVectorizer()

X_vectorized = vectorizer.fit_transform(X)

# -----------------------------
# Train Logistic Regression Model
# -----------------------------
model = LogisticRegression(max_iter=1000)

model.fit(X_vectorized, y)

# -----------------------------
# Save Model
# -----------------------------
models_dir = BASE_DIR / "models"
models_dir.mkdir(exist_ok=True)

joblib.dump(model, models_dir / "classifier.pkl")
joblib.dump(vectorizer, models_dir / "vectorizer.pkl")

print("\n✅ Model trained successfully!")
print(f"Dataset Used : {dataset_path}")
print(f"Model Saved  : {models_dir / 'classifier.pkl'}")
print(f"Vectorizer   : {models_dir / 'vectorizer.pkl'}")
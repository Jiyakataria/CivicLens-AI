from pathlib import Path
import joblib

from ai.preprocessing import preprocess

# -----------------------------
# Load trained model
# -----------------------------
BASE_DIR = Path(__file__).resolve().parent.parent

model = joblib.load(BASE_DIR / "models" / "classifier.pkl")
vectorizer = joblib.load(BASE_DIR / "models" / "vectorizer.pkl")


def classify(text: str) -> str:
    """
    Predict complaint category.
    """

    cleaned = preprocess(text)

    vector = vectorizer.transform([cleaned])

    prediction = model.predict(vector)

    return prediction[0]
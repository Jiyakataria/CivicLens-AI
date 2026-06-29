from ai.classifier import classify
from ai.priority import detect_priority
from ai.sentiment import detect_sentiment
from ai.summary import generate_summary


def analyze_complaint(complaint: str):

    category = classify(complaint)
    priority = detect_priority(complaint)
    sentiment = detect_sentiment(complaint)
    summary = generate_summary(complaint)

    return {
        "category": category,
        "priority": priority,
        "sentiment": sentiment,
        "summary": summary,
        "cluster": "Cluster 1"
    }
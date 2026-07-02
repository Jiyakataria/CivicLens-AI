from ai.pipeline import analyze_complaint as pipeline_analyze
from ai.priority import detect_priority
from ai.sentiment import detect_sentiment
from ai.summary import generate_summary


def analyze_complaint(complaint: str):

    result = pipeline_analyze(complaint)

    # Add temporary backend fields until the AI pipeline provides them
    if "priority" not in result:
        result["priority"] = detect_priority(complaint)

    if "sentiment" not in result:
        result["sentiment"] = detect_sentiment(complaint)

    if "summary" not in result:
        result["summary"] = generate_summary(complaint)

    if "cluster" not in result:
        result["cluster"] = "Cluster 1"

    return result
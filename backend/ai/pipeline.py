from ai.classifier import classify
from ai.location_extractor import extract_location
from ai.urgency_detector import detect_urgency
from ai.embedding_generator import generate_embedding
from ai.priority_engine import calculate_priority
from ai.cluster_engine import assign_cluster
from ai.summarizer import summarize
from ai.sentiment import analyze_sentiment


def analyze_complaint(text: str):

    category = classify(text)

    location = extract_location(text)

    urgency = detect_urgency(text)

    sentiment = analyze_sentiment(text)

    embedding = generate_embedding(text)

    cluster_id = assign_cluster(embedding)

    duplicate_count = 1

    priority = calculate_priority(
        urgency,
        duplicate_count
    )

    summary = summarize(
        category,
        location
    )

    return {

        "complaint": text,

        "category": category,

        "location": location,

        "urgency": urgency,

        "sentiment": sentiment,

        "embedding": embedding,

        "cluster_id": cluster_id,

        "priority": priority,

        "summary": summary
    }
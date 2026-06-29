from ai.classifier import classify
from ai.location_extractor import extract_location
from ai.urgency_detector import detect_urgency
from ai.embedding_generator import generate_embedding


def analyze_complaint(text: str):

    category = classify(text)

    location = extract_location(text)

    urgency = detect_urgency(text)

    embedding = generate_embedding(text)

    return {

        "complaint": text,

        "category": category,

        "location": location,

        "urgency": urgency,

        "embedding": embedding

    }
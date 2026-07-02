# CivicLens AI Pipeline

## Input

Complaint Text

Example:

Garbage overflowing near Kothrud Market

## Output

{
    "complaint": "...",
    "category": "...",
    "location": "...",
    "urgency": "...",
    "sentiment": "...",
    "priority": "...",
    "cluster_id": "...",
    "summary": "...",
    "embedding": [...]
}

## Modules

- preprocessing.py
- classifier.py
- location_extractor.py
- urgency_detector.py
- sentiment.py
- embedding_generator.py
- cluster_engine.py
- priority_engine.py
- summarizer.py
- pipeline.py
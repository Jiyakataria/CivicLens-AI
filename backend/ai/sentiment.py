POSITIVE_WORDS = [
    "resolved",
    "fixed",
    "clean",
    "working",
    "completed"
]

NEGATIVE_WORDS = [
    "garbage",
    "overflow",
    "pothole",
    "broken",
    "flood",
    "danger",
    "leak",
    "blocked",
    "not working",
    "damaged",
    "accident",
    "waste"
]


def analyze_sentiment(text: str):

    text = text.lower()

    score = 0

    for word in POSITIVE_WORDS:
        if word in text:
            score += 1

    for word in NEGATIVE_WORDS:
        if word in text:
            score -= 1

    if score > 0:
        sentiment = "Positive"

    elif score == 0:
        sentiment = "Neutral"

    else:
        sentiment = "Negative"

    return {
        "sentiment": sentiment,
        "score": score
    }

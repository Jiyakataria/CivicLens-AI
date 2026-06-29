"""
Urgency Detection Module
"""

HIGH_KEYWORDS = [
    "fire",
    "electric shock",
    "electrocution",
    "flood",
    "accident",
    "collapsed",
    "explosion",
    "gas leak",
    "short circuit",
    "danger"
]

MEDIUM_KEYWORDS = [
    "overflow",
    "leakage",
    "blocked",
    "broken",
    "garbage",
    "pothole",
    "waterlogging",
    "streetlight"
]


def detect_urgency(text: str):
    """
    Returns urgency level and score.
    """

    text = text.lower()

    score = 0

    for word in HIGH_KEYWORDS:
        if word in text:
            score += 60

    for word in MEDIUM_KEYWORDS:
        if word in text:
            score += 25

    if score >= 60:
        level = "High"
    elif score >= 25:
        level = "Medium"
    else:
        level = "Low"

    return {
        "urgency": level,
        "score": score
    }
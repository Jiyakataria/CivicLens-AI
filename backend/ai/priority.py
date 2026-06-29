def detect_priority(complaint: str) -> str:
    complaint = complaint.lower()

    high_keywords = [
        "accident",
        "danger",
        "urgent",
        "fire",
        "overflowing",
        "collapsed",
        "electrocution",
        "explosion",
        "major leak",
        "severe"
    ]

    medium_keywords = [
        "pothole",
        "garbage",
        "water leakage",
        "streetlight",
        "drainage",
        "traffic",
        "broken",
        "damaged",
        "blocked",
        "overflow"
    ]

    low_keywords = [
        "cleaning",
        "maintenance",
        "painting",
        "grass",
        "park",
        "tree trimming"
    ]

    for word in high_keywords:
        if word in complaint:
            return "High"

    for word in medium_keywords:
        if word in complaint:
            return "Medium"

    for word in low_keywords:
        if word in complaint:
            return "Low"

    return "Medium"
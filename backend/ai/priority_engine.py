def calculate_priority(
    urgency_score: int,
    duplicate_count: int,
    days_pending: int
):
    """
    Calculates complaint priority.
    """

    score = (
        urgency_score +
        duplicate_count * 5 +
        days_pending * 2
    )

    if score >= 90:
        level = "Critical"

    elif score >= 60:
        level = "High"

    elif score >= 30:
        level = "Medium"

    else:
        level = "Low"

    return {
        "priority_score": score,
        "priority": level
    }
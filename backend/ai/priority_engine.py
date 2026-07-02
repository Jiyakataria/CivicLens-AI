def calculate_priority(
    urgency,
    duplicate_count=1,
    days_pending=0
):
    """
    Calculate complaint priority.
    """

    # If urgency is returned as a dictionary
    if isinstance(urgency, dict):
        urgency_score = urgency.get("score", 20)

    # If urgency is already an integer
    elif isinstance(urgency, int):
        urgency_score = urgency

    else:
        urgency_score = 20

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
        "level": level,
        "score": score
    }
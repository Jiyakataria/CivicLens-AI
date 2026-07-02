def calculate_priority(
    urgency,
    duplicate_count=1,
    days_pending=0
):
    """
    Calculate complaint priority based on:
    - Urgency
    - Duplicate complaints
    - Days pending
    """

    # Get urgency score
    if isinstance(urgency, dict):
        urgency_score = urgency.get("score", 20)

    elif isinstance(urgency, int):
        urgency_score = urgency

    else:
        urgency_score = 20

    # Calculate total score
    score = (
        urgency_score +
        duplicate_count * 5 +
        days_pending * 2
    )

    # Decide priority level
    if score >= 90:
        level = "Critical"

    elif score >= 60:
        level = "High"

    elif score >= 30:
        level = "Medium"

    else:
        level = "Low"

    # Return standardized JSON
    return {
        "priority": level,
        "priority_score": score
    }
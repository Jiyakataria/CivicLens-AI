from ai.priority_engine import calculate_priority

print(
    calculate_priority(
        urgency_score=60,
        duplicate_count=8,
        days_pending=3
    )
)
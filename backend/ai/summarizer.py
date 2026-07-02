def summarize(category, location, urgency, priority):

    return (
        f"A {category.lower()} complaint has been reported "
        f"near {location}. "
        f"The urgency level is {urgency['urgency']} "
        f"and the complaint priority is {priority['priority']}. "
        f"Immediate attention is recommended."
    )
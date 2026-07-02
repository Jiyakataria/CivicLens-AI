from ai.pipeline import analyze_complaint as pipeline_analyze


def analyze_complaint(complaint: str):
    """
    Analyze a complaint using the AI pipeline.
    """
    return pipeline_analyze(complaint)
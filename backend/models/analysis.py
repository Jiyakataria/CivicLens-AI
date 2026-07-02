from typing import Any

from pydantic import BaseModel


class AnalysisRequest(BaseModel):
    complaint: str


class AnalysisResponse(BaseModel):
    complaint: str
    category: str
    location: str
    urgency: Any
    sentiment: Any
    priority: Any
    summary: str
    cluster_id: int | None
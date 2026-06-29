from pydantic import BaseModel


class AnalysisRequest(BaseModel):
    complaint: str


class AnalysisResponse(BaseModel):
    category: str
    priority: str
    sentiment: str
    summary: str
    cluster: str
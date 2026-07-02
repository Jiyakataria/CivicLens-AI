from fastapi import APIRouter

from models.analysis import AnalysisRequest, AnalysisResponse
from services.ai_service import analyze_complaint

router = APIRouter()


@router.post("/analyze", response_model=AnalysisResponse)
async def analyze(data: AnalysisRequest):

    result = analyze_complaint(data.complaint)

    return result
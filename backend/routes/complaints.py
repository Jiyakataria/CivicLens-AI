from fastapi import APIRouter
from models.complaint import Complaint
from database.connection import complaints_collection
from services.ai_service import analyze_complaint
from datetime import datetime , timezone

router = APIRouter()


@router.post("/complaints")
async def create_complaint(data: Complaint):

    complaint = data.model_dump()

    analysis = analyze_complaint(complaint["complaint"])

    complaint.update(analysis)

    complaint["status"] = "OPEN"

    complaint["created_at"] = datetime.now(timezone.utc)

    result = await complaints_collection.insert_one(complaint)

    return {
        "message": "Complaint saved",
        "id": str(result.inserted_id)
    }


@router.get("/complaints")
async def get_complaints():

    complaints = []

    async for complaint in complaints_collection.find():

        complaint["_id"] = str(complaint["_id"])

        complaints.append(complaint)

    return complaints
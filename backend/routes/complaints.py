from fastapi import APIRouter, HTTPException
from models.complaint import Complaint
from database.connection import complaints_collection
from services.ai_service import analyze_complaint
from services.clustering_service import update_clusters
from datetime import datetime, timezone
import logging

logger = logging.getLogger(__name__)

router = APIRouter()


@router.post("/complaints")
async def create_complaint(data: Complaint):

    try:
        complaint = data.model_dump()

        analysis = analyze_complaint(complaint["complaint"])

        complaint.update(analysis)

        complaint["status"] = "OPEN"
        complaint["created_at"] = datetime.now(timezone.utc)

        result = await complaints_collection.insert_one(complaint)

        # Recompute clusters after adding the new complaint
        await update_clusters()

        return {
            "message": "Complaint saved",
            "id": str(result.inserted_id)
        }

    except Exception as e:
        logger.exception("Error while creating complaint")

        raise HTTPException(
            status_code=500,
            detail=f"Failed to save complaint: {str(e)}"
        )


@router.get("/complaints")
async def get_complaints():

    complaints = []

    async for complaint in complaints_collection.find():

        complaint["_id"] = str(complaint["_id"])

        complaints.append(complaint)

    return complaints
from fastapi import APIRouter
from database.connection import complaints_collection

router = APIRouter()


@router.get("/dashboard/stats")
async def dashboard_stats():

    total = await complaints_collection.count_documents({})

    resolved = await complaints_collection.count_documents(
        {"status": "RESOLVED"}
    )

    return {
        "total_complaints": total,
        "resolved_issues": resolved,
        "ai_clusters": 0
    }


@router.get("/complaints/recent")
async def recent_complaints():

    complaints = []

    cursor = (
        complaints_collection
        .find()
        .sort("_id", -1)
        .limit(5)
    )

    async for complaint in cursor:

        complaint["_id"] = str(complaint["_id"])

        complaints.append(complaint)

    return complaints
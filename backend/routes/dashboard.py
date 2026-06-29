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


@router.get("/dashboard/categories")
async def complaints_by_category():

    pipeline = [
        {
            "$match": {
                "category": {
                    "$ne": None
                }
            }
        },
        {
            "$group": {
                "_id": "$category",
                "count": {
                    "$sum": 1
                }
            }
        }
    ]

    result = []

    async for item in complaints_collection.aggregate(pipeline):

        result.append({
            "category": item["_id"],
            "count": item["count"]
        })

    return result


@router.get("/dashboard/priorities")
async def complaints_by_priority():

    pipeline = [
        {
            "$match": {
                "priority": {
                    "$ne": None
                }
            }
        },
        {
            "$group": {
                "_id": "$priority",
                "count": {
                    "$sum": 1
                }
            }
        }
    ]

    result = []

    async for item in complaints_collection.aggregate(pipeline):

        result.append({
            "priority": item["_id"],
            "count": item["count"]
        })

    return result


@router.get("/dashboard/trends")
async def complaint_trends():

    total = await complaints_collection.count_documents({})

    return [
        {
            "month": "Jun",
            "complaints": total
        }
    ]
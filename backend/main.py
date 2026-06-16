from fastapi import FastAPI

from models.complaint import Complaint

from database.connection import complaints_collection

app = FastAPI()


@app.get("/")
def home():

    return {
        "message": "CivicLens Backend Running"
    }


@app.post("/complaints")
async def create_complaint(data: Complaint):

    complaint = data.model_dump()

    result = await complaints_collection.insert_one(complaint)

    return {
        "message": "Complaint saved",

        "id": str(result.inserted_id)
    }

@app.get("/complaints")
async def get_complaints():

    complaints = []

    async for complaint in complaints_collection.find():

        complaint["_id"] = str(complaint["_id"])

        complaints.append(complaint)

    return complaints
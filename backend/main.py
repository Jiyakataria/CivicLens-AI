from fastapi import FastAPI

from models.complaint import Complaint

app = FastAPI()


@app.get("/")
def home():

    return {
        "message": "CivicLens Backend Running"
    }

complaints = []
@app.post("/complaints")
def create_complaint(data: Complaint):

    complaints.append(data.model_dump())

    return {
        "message": "Complaint received",

        "data": data
    }
@app.get("/complaints")
def get_complaints():

    return complaints
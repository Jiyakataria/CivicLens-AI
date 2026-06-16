from pydantic import BaseModel


class Complaint(BaseModel):

    complaint: str

    location: str

    status: str = "OPEN"

from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def scan():
    return {"message": "Scan endpoint working"}

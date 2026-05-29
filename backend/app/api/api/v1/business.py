from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_businesses():
    return {"message": "Business endpoint working"}


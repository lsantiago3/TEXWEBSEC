from fastapi import APIRouter
from .user import router as user_router
from .business import router as business_router
from .scan import router as scan_router
from .report import router as report_router

api_router = APIRouter()

api_router.include_router(user_router, prefix="/user", tags=["User"])
api_router.include_router(business_router, prefix="/business", tags=["Business"])
api_router.include_router(scan_router, prefix="/scan", tags=["Scan"])
api_router.include_router(report_router, prefix="/report", tags=["Report"])

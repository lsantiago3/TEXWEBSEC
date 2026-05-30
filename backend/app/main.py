from fastapi import FastAPI
from app.api.api.v1.base import api_router

app = FastAPI(title="TEXWEBSEC Backend", version="0.1.0")

@app.get("/")
def read_root():
    return {"message": "TEXWEBSEC backend is running"}

# Include all routers from base.py
app.include_router(api_router)


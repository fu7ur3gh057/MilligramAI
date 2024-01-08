from fastapi.routing import APIRouter

from src.web.api import monitoring, translation

api_router = APIRouter()
api_router.include_router(router=monitoring.router, tags=["Monitoring"])
api_router.include_router(prefix="/translation", router=translation.router, tags=["Translation"])

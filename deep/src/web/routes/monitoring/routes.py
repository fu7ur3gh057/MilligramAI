from flask import Blueprint

api_routes: Blueprint = Blueprint('api_routes', __name__)


@api_routes.get("/api/v3/health")
def health_check_route() -> str:
    return "Success"

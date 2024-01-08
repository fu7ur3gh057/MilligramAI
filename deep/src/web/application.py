from flask import Flask

from src.workers.deps import get_worker
from src.settings import settings
from src.web.routes.monitoring.routes import api_routes


def start_app(workers_count: int) -> None:
    app: Flask = Flask(__name__)
    app.register_blueprint(api_routes)
    workers = []
    for i in range(workers_count):
        worker = get_worker()
        workers.append(worker)
        worker.start()
    app.run(debug=settings.debug, port=settings.port)

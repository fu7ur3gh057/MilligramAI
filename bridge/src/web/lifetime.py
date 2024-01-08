from typing import Awaitable, Callable

from fastapi import FastAPI

from src.services.rabbit.lifetime import init_rabbit, shutdown_rabbit
from src.services.redis.lifetime import init_redis, shutdown_redis
from src.settings import settings
from src.scheduler.tkq import broker
from src.web.socket.lifetime import init_socketio, shutdown_socketio


def register_startup_event(
        app: FastAPI,
) -> Callable[[], Awaitable[None]]:  # pragma: no cover
    @app.on_event("startup")
    async def _startup() -> None:  # noqa: WPS430
        app.middleware_stack = None
        if not broker.is_worker_process:
            await broker.startup()
        # engine = _setup_db(app)
        init_redis(app)
        init_rabbit(app)
        await init_socketio(app)
        app.middleware_stack = app.build_middleware_stack()
        pass  # noqa: WPS420

    return _startup


def register_shutdown_event(
        app: FastAPI,
) -> Callable[[], Awaitable[None]]:  # pragma: no cover
    @app.on_event("shutdown")
    async def _shutdown() -> None:  # noqa: WPS430
        if not broker.is_worker_process:
            await broker.shutdown()
        # await app.state.db_engine.dispose()

        await shutdown_redis(app)
        await shutdown_rabbit(app)
        await shutdown_socketio(app)
        pass  # noqa: WPS420

    return _shutdown

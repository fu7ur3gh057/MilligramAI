import socketio
from fastapi import FastAPI

from src.settings import settings
from src.web.socket.translation.namespace import TranslationNamespace


async def init_socketio(app: FastAPI) -> None:
    sio_server = socketio.AsyncServer(
        async_mode="asgi",
        cors_allowed_origins=[],
    )

    sio_app = socketio.ASGIApp(
        socketio_server=sio_server,
        socketio_path=settings.socketio_path,
    )

    async def _connect(sid, environ):
        print(f"global connect {sid}")

    async def _disconnect(sid):
        print(f"global disconnect {sid}")

    # Global Events
    sio_server.on(event="connect", handler=_connect)
    sio_server.on(event="disconnect", handler=_disconnect)
    sio_server.register_namespace(TranslationNamespace("/translate"))
    # Save state and mount to FastAPI app
    app.state.sio_server = sio_server
    app.state.sio_app = sio_app
    app.mount("/ws", app=sio_app)


async def shutdown_socketio(app: FastAPI) -> None:
    return None

import json

import socketio
import asyncio
import functools

from main import app
from src.other.constants import MILLIGRAM_QUEUE
from src.other.enums import SocketEvent
from src.schemas.translation_schema import TranslationSchema
from src.services.rabbit.actions import publish, consume


class TranslationNamespace(socketio.AsyncNamespace):
    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)

    async def on_enter(self, sid: str) -> None:
        print(f"Created new room {sid}")
        await self.enter_room(sid=sid, room=sid)

    async def on_process(self, sid: str, data: dict) -> None:
        print(f"Translate Event {sid}, data:: {data}")
        schema = TranslationSchema(**data)
        schema.queue_key = sid
        schema.is_partial = True
        await self.emit(event=SocketEvent.START, room=sid)
        print("start event")
        await publish(
            queue_name=MILLIGRAM_QUEUE, message=json.dumps(schema.model_dump()), app=app
        )
        async for message in consume(queue_name=sid, app=app):
            json_response = json.loads(message)
            # emit to client by sid
            await self.emit(event=SocketEvent.PROCESS, room=sid, data=json_response)
        await self.emit(event=SocketEvent.FINISH, room=sid)
        print("finish")

    async def on_exit(self, sid: str) -> None:
        await self.leave_room(sid=sid, room=sid)

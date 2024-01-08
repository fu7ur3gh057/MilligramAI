import json
import time

from fastapi import APIRouter, Request

from src.other.constants import MILLIGRAM_QUEUE
from src.other.enums import QueueType
from src.schemas.translation_schema import TranslationSchema, TranslationOutputSchema
from src.services.rabbit.actions import publish, consume_once, consume

router = APIRouter()


@router.post("/")
async def translate(
        data: TranslationSchema, request: Request
) -> TranslationOutputSchema:
    app = request.app
    queue_name = f"{QueueType.TRANSLATION}_{round(time.time() * 1000)}"
    data.queue_key = queue_name
    await publish(
        queue_name=MILLIGRAM_QUEUE, message=json.dumps(data.model_dump()), app=app
    )
    message = await consume_once(queue_name=data.queue_key, app=app)
    json_response = json.loads(message)
    response = TranslationOutputSchema(**json_response)
    print(response)
    return response

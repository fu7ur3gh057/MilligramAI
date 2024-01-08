import json
from typing import Any

import aio_pika
from fastapi import FastAPI

from src.schemas.translation_schema import TranslationOutputSchema


async def consume(queue_name: str, app: FastAPI) -> str:
    async with app.state.rmq_channel_pool.acquire() as channel:
        queue = await channel.declare_queue(
            queue_name, durable=False, auto_delete=False
        )
        async with queue.iterator() as queue_iter:
            async for message in queue_iter:
                await message.ack()
                result = message.body.decode()
                json_response = json.loads(result)
                response = TranslationOutputSchema(**json_response)
                print(response)
                if response.result_text == "$break#":
                    break
                yield result
        print("end of socket queue")


async def consume_once(queue_name: str, app: FastAPI) -> str:
    result = ""
    async with app.state.rmq_channel_pool.acquire() as channel:
        queue = await channel.declare_queue(
            queue_name, durable=False, auto_delete=False
        )
        print(f'consume to {queue_name} channel')
        async with queue.iterator() as queue_iter:
            async for message in queue_iter:
                result = message.body.decode()
                print(f'receive message: {result}')
                await message.ack()
                break
    return result


async def publish(queue_name: str, message: Any, app: FastAPI) -> str:
    async with app.state.rmq_channel_pool.acquire() as channel:
        await channel.default_exchange.publish(
            aio_pika.Message(f"{message}".encode()), queue_name
        )
    return queue_name

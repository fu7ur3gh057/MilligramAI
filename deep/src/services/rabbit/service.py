import json
import time

import pika

from src.other.constants import MILLIGRAM_QUEUE
from src.schemas.translation_schema import TranslationOutputSchema, TranslationSchema
from src.settings import settings


class RabbitMQService:
    def __init__(self, host: str, input_queue: str = MILLIGRAM_QUEUE) -> None:
        self.channel = None
        self.connection = None
        self.host = host
        self.input_queue = input_queue

    def connect(self) -> None:
        # Establish a connection to the RabbitMQ server
        self.connection = pika.BlockingConnection(pika.ConnectionParameters(self.host))
        self.channel = self.connection.channel()
        self.channel.queue_declare(queue=self.input_queue)

    def send_message(self, message: TranslationOutputSchema) -> None:
        # Publish a message to the specified queue
        message_data = json.dumps(message.model_dump())
        self.channel.basic_publish(
            exchange="", routing_key=message.queue_key, body=message_data
        )
        print(f"Send message to queue {message.queue_key}")

    def close(self) -> None:
        self.connection.close()

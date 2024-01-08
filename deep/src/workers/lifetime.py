import json
import threading
import time
from threading import Thread

from src.other.constants import MILLIGRAM_QUEUE
from src.schemas.translation_schema import TranslationSchema, TranslationOutputSchema
from src.services.rabbit.deps import get_rabbit_connection
from src.services.rabbit.service import RabbitMQService


class Worker(Thread):
    def __init__(self) -> None:
        super().__init__()
        self.name = threading.current_thread().name
        self.rabbit: RabbitMQService | None = None

    def shutdown(self) -> None:
        self.rabbit.close()

    def _translate_partial(self, data: TranslationSchema) -> None:
        message = 'Hello John, how are you? what are you doing?'
        split_text = message.split(' ')
        out_data = TranslationOutputSchema(
            queue_key=data.queue_key,
            input_lang=data.input_lang,
            output_lang=data.output_lang,
            text=message,
            is_partial=True
        )
        for text in split_text:
            out_data.result_text = text
            self.rabbit.send_message(message=out_data)
        # end of text, breaking message
        print('break time')
        out_data.result_text = "$break#"
        self.rabbit.send_message(message=out_data)

    def _translate(self, data: TranslationSchema) -> None:
        out_data = TranslationOutputSchema(
            queue_key=data.queue_key,
            input_lang=data.input_lang,
            output_lang=data.output_lang,
            text=data.text,
            result_text=data.text.upper(),
        )
        self.rabbit.send_message(message=out_data)

    def run(self) -> None:
        self.rabbit = get_rabbit_connection()
        self.rabbit.connect()

        def callback(ch, method, properties, body) -> None:
            # This function is called when a message is received
            message = json.loads(body)
            body_str = body.decode("utf-8")
            print(f"{self.name} Received: {body_str}")
            data = TranslationSchema.model_validate_json(json_data=body_str)
            print(data.text)
            time.sleep(0.5)
            if data.is_partial:
                print("Data for Websocket")
                self._translate_partial(data=data)
            else:
                print("Data for RestAPI")
                self._translate(data=data)

        # Set up a consumer and bind it to the queue
        self.rabbit.channel.basic_consume(
            queue=MILLIGRAM_QUEUE, on_message_callback=callback, auto_ack=True
        )
        print("Waiting for messages. To exit, press CTRL+C")
        self.rabbit.channel.start_consuming()

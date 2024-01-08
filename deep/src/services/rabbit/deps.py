from src.other.constants import MILLIGRAM_QUEUE
from src.services.rabbit.service import RabbitMQService
from src.settings import settings


def get_rabbit_connection(
        host: str = settings.rabbit_host,
        input_queue: str = MILLIGRAM_QUEUE
) -> RabbitMQService | None:
    return RabbitMQService(host, input_queue)

from src.settings import settings
from src.web.application import start_app


def main() -> None:
    start_app(workers_count=settings.workers_count)


if __name__ == "__main__":
    main()

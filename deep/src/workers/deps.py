from src.workers.lifetime import Worker


def get_worker() -> Worker | None:
    return Worker()

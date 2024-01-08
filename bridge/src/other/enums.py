from enum import Enum


class SocketEvent(str, Enum):
    START = "start"
    PROCESS = "process"
    FINISH = "finish"


class QueueType(str, Enum):
    TRANSLATION = "translation"
    TRANSCRIPTION = "transcription"
    SYNTHESIS = "synthesis"


class InputLanguage(str, Enum):
    EN = "en"
    RU = "ru"


class OutputLanguage(str, Enum):
    AZ = "az"
    TR = "tr"
    RU = "ru"

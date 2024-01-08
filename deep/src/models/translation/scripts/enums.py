from enum import Enum


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

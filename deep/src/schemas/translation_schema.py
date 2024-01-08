from pydantic import BaseModel

from src.other.enums import InputLanguage, OutputLanguage


class TranslationSchema(BaseModel):
    queue_key: str | None = None
    input_lang: InputLanguage
    output_lang: OutputLanguage
    text: str | None = None
    is_partial: bool = False


class TranslationOutputSchema(TranslationSchema):
    result_text: str | None = None

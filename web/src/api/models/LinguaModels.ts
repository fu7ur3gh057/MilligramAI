export interface ILanguage {
    pk_id?: number,
    title: string,
    code: string,
    translation_in?: boolean,
    translation_out?: boolean,
    synthesis?: boolean,
    transcription?: boolean,
}

export interface ITranslationLanguages {
    input_languages: ILanguage[],
    output_languages: ILanguage[],
}

export interface IVoice {
    lang: ILanguage,
    speaker: string,
    code: string,
    is_active: boolean
}
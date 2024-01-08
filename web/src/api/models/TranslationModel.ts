export interface ITranslation {
    account_id?: number,
    input_lang: string,
    output_lang: string,
    input_text: string,
    output_text?: string,
    is_favorite?: boolean,
    created_at?: string,
    updated_at?: string
}

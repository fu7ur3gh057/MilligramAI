export interface IAccessToken {
    token_type: string,
    exp: number,
    jti: string,
    user_id: string,
}


export interface ITokens {
    refresh: string,
    access: string
}

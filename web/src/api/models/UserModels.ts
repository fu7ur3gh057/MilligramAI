export interface IUser {
    id: number,
    email?: string,
    username: string,
    phone_number?: string,
    password?: string,
    is_verified?: boolean,
    is_active?: boolean,
    created_at?: string
}


export interface IAccount {
    first_name?: string,
    last_name?: string,
    country?: string,
    city?: string
}

export interface IVerification {

}


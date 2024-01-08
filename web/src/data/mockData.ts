import {IUser} from "../api/models/UserModels";

export const mockDataUsers = [
    {id: 1, email: "fuad@mail.ru", username: "fu7ur3gh057", password: "", is_verified: true, is_active: true} as IUser,
    {
        id: 2,
        email: "milligram@gmail.com",
        username: "m1ll1gram",
        password: "",
        is_verified: true,
        is_active: true
    } as IUser,
    {id: 3, email: "qwerty@hotmail.net", username: "qw3rty", password: "", is_verified: true, is_active: true} as IUser,
    {id: 4, email: "lol@mail.ru", username: "", password: "l0lkov1c", is_verified: true, is_active: true} as IUser,
    {id: 5, email: "salamqaqa@gmailcom", username: "", password: "qaqa", is_verified: true, is_active: true} as IUser,
] as IUser[]
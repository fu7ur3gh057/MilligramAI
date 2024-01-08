import {getCookie} from "react-use-cookie";
import { ITokens } from "../api/models/TokenModels";

export const getParsedCookie = (name: string) => {
    try {
        return JSON.parse(getCookie(name));
    } catch (e) {
        return null;
    }
}

export const parseCookieData = (cookie: string) => {
    if (cookie !== '') return JSON.parse(cookie) as ITokens;
    else return null;
};

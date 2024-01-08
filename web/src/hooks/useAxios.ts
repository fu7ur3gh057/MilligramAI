import axios from "axios";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import {IAccessToken, ITokens} from "../api/models/TokenModels";
import {getParsedCookie} from "../utils/cookieUtil";
import {setCookie} from "react-use-cookie";


const useAxios = (isAuth: boolean = false) => {
    if (!isAuth) {
        return axios.create({
            baseURL: process.env.REACT_APP_SERVER_API_URL, // Replace with your API base URL
            timeout: 5000, // Set a timeout for requests
        });
    }
    // getting user tokens
    const jwtTokens = getParsedCookie('tokens');
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_SERVER_API_URL,
        headers: {Authorization: `Bearer ${jwtTokens?.access}`}
    });
    // Setup Interceptor Request
    axiosInstance.interceptors.request.use(async request => {
        // checks if we have any headers in request
        if (!request.headers) {
            throw new Error(`Expected request and request.headers not exists`)
        }
        const user = jwt_decode(jwtTokens?.access!) as IAccessToken
        // Compare days and get isExpired value
        const isExpired = dayjs.unix(user?.exp).diff(dayjs()) < 1
        console.log('isExpired: ', isExpired)
        // if not expired - good!
        if (!isExpired) return request
        // if expired - refresh token
        const response = await axios.post('', {
            refresh: jwtTokens?.refresh
        })
        const data = response.data as ITokens
        // const tokenInfo = jwt_decode(data.access)
        setCookie('tokens', JSON.stringify(data));
        request.headers.Authorization = `Bearer ${response.data.access}`
        return request
    })
    return axiosInstance
}

export default useAxios;



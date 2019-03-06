import { fetchAPI } from "./API";
import { BASE_URL,
    APP_API, 
    PROVISIONING, 
    DETAIL_PROFILE_USER, 
    HOME, 
    ADVERTISEMENT, 
    FRAME_TIME_DAY, 
    FRIENDS, 
    REQUEST
} from "../Util/Constanst";

const POST = 'POST'
const GET = 'get'
const PUT = 'put'
const DELETE = 'delete'

export function LoadInfoAPI(token){
    return fetchAPI(BASE_URL.url + '/'+ APP_API+ '/' + PROVISIONING + '/' + DETAIL_PROFILE_USER,
    GET, null, token)
                .then(res => res)
}

export function LoadAdvertisement(token){
    return fetchAPI(BASE_URL.url + '/' + APP_API + '/' + HOME + '/' + ADVERTISEMENT,
                GET, null, token)
                    .then(res => res)
}

export function LoadNextGame(token){
    console.log("load...")
    return fetchAPI(BASE_URL.url + '/' + APP_API + '/' + HOME + '/' + FRAME_TIME_DAY,
            GET, null, token)
                .then(res => res)
}

export function LoadListFriend(token, start, limit){
    const url = BASE_URL.url +'/' + APP_API+ '/' + FRIENDS + '?start=' + start + '&limit=' + limit + '&key='
    console.log(url)
    return fetchAPI(url, GET, null, token).then(res => res)
}

export function LoadWaitFriend(token, start, limit){
    const url = BASE_URL.url  +'/' + APP_API+ '/' + FRIENDS + '/' + REQUEST + '?start=' + start + '&limit=' + limit + '&key='
    return fetchAPI(url, GET, null, token).then(res => res)
}
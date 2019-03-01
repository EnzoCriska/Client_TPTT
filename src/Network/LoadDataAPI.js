import { fetchAPI } from "./API";
import { BASE_URL, APP_API, PROVISIONING, DETAIL_PROFILE_USER } from "../Util/Constanst";

const POST = 'POST'
const GET = 'get'
const PUT = 'put'
const DELETE = 'delete'

export function LoadInfoAPI(token){
    return fetchAPI(BASE_URL.url + '/'+ APP_API+ '/' + PROVISIONING + '/' + DETAIL_PROFILE_USER,
    GET, null, token)
                .then(res => res)
}

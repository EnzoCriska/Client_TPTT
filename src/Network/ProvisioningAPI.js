import { 
    BASE_URL, 
    AUTH_API, 
    SIGN_UP, 
    LOGIN, 
    NORMAL, 
    AUTHORIZATION, 
    PASSWORD, 
    CHANGE_PASS 
} from "../Util/Constanst";

import {getAccessToken} from '../Util/UtilFunction/asyncStorage';
import { fetch } from "./API";

const POST = 'post',
const GET = 'get',
const PUT = 'PUT',
const DELETE = 'delete'

const HEADER = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

// const token = getAccessToken()
//   console.log(token)
// const TOKEN_HEADER = {
//     ...HEADER,
//     Authorization: token
// }

export function SigUp(userName, password, device_id, os_id){
    return fetch(BASE_URL.url + '/' + AUTH_API + '/' + SIGN_UP, {
        method: 'POST',
        headers: HEADER,
        body: JSON.stringify({
            username: userName,
            password: password,
            device_id: device_id,
            os_id: os_id
          }),
        })
        .then(res =>
           res
        )
        .catch(err => {
            console.error(err)
        });
}

export function SigIn(username, password, device_id, os_id){
    return fetch(BASE_URL.url + '/' + AUTH_API + '/' + LOGIN + '/' + NORMAL, {
        method: 'POST',
        headers: HEADER,
        body: JSON.stringify({
            username: username,
            password: password,
            device_id: device_id,
            os_id:os_id
          }),
        })
        .then(res =>
            res
        )
        .catch(err => {
            console.error(err)
        });
}

export function RefreshToken(device_id, username, token){
    return fetch(BASE_URL.url + '/' + AUTH_API + '/' + AUTHORIZATION,{
        method: 'POST',
        headers: HEADER,
        body: JSON.stringify({
            device_id: device_id,
            username: username,
            token: token
        }),
    })
    .then(res => res)
    .catch(err => {
        console.log(err)
    });
}

// export function ChangePasswordAPI(old_password, new_password, token){
//     return fetch(BASE_URL.url + '/' + AUTH_API + '/' + PASSWORD + '/' + CHANGE_PASS,{
//         method:'POST',
//         headers: {
//             ...HEADER,
//             token: token
//         },
//         body: JSON.stringify({
//             old_password:old_password,
//             new_password:new_password
//         }),
//     })
//     .then(res => res)
//     .catch(err => {
//         console.log(err)
//     })
// }

export function ChangePasswordAPI(old_password,new_password, token){
    const body = JSON.stringify({
        old_password:old_password,
        new_password:new_password
    })
    return fetch(BASE_URL.url + '/' + AUTH_API + '/' + PASSWORD + '/' + CHANGE_PASS,
        POST, body, token).then(res => res)
}
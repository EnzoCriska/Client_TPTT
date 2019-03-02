import { 
    BASE_URL, 
    AUTH_API, 
    SIGN_UP, 
    LOGIN, 
    NORMAL, 
    AUTHORIZATION, 
    PASSWORD, 
    CHANGE_PASS, 
    LOGOUT,
    PROVISIONING,
    UPDATE_PROFILE,
    APP_API,
    UPDATE_AVATAR,
    PHONE
} from "../Util/Constanst";

import {getAccessToken} from '../Util/UtilFunction/asyncStorage';
import { fetchAPI } from "./API";

const POST = 'post'
const GET = 'get'
const PUT = 'put'
const DELETE = 'delete'

const HEADER = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

export function SigUp(username, password, device_id, os_id){
    const body = JSON.stringify({
        username: username,
        password: password,
        device_id: device_id,
        os_id:os_id
    })

    return fetchAPI(BASE_URL.url + '/' + AUTH_API + '/' + SIGN_UP, POST, body, null)
                .then(res=> res)
}

export function SigIn(username, password, device_id, os_id){
    const body = JSON.stringify({
        username: username,
        password: password,
        device_id: device_id,
        os_id:os_id
    })
    return fetchAPI(BASE_URL.url + '/' + AUTH_API + '/' + LOGIN + '/' + NORMAL,
                    POST, body, null)
                    .then(res => res)
}

export function RefreshToken(device_id, username, token){
    const body = JSON.stringify({
        device_id: device_id,
        username: username,
        token: token
    })

    return fetchAPI(BASE_URL.url + '/' + AUTH_API + '/' + AUTHORIZATION,POST,body, null)
                    .then(res => res)
}

export function ChangePasswordAPI(old_password,new_password, token){
    const body = JSON.stringify({
        old_password:old_password,
        new_password:new_password
    })
    return fetchAPI(BASE_URL.url + '/' + AUTH_API + '/' + PASSWORD + '/' + CHANGE_PASS,
        POST, body, token).then(res => res)
}

export function LogOut(token){
    const body = JSON.stringify({})
    return fetchAPI(BASE_URL.url + '/'+ AUTH_API + '/' + LOGOUT, POST, body, token )
                    .then(res => res)
}

export function UpdateProfile(displayName, address, gender, token){
    const body = JSON.stringify({
        display_name: displayName,
        address: address,
        gender: gender
    })

     console.log(body)

    return fetchAPI(BASE_URL.url + '/' +APP_API + '/'+ PROVISIONING + '/' + UPDATE_PROFILE, PUT, body, token)
                    .then(res => res)
}

export function UploadImageAPI(avatarUrl, type, token){
    const body = JSON.stringify({
        image_url: avatarUrl,
        type: type
    })

    return fetchAPI(BASE_URL.url+'/' + APP_API + '/' + PROVISIONING + '/' + UPDATE_AVATAR,
                    PUT, body, token).then(res => res)

}

export function UpdatePhoneNumberAPI(phone, token){
    const body = JSON.stringify({
        phone: phone
    })

    return fetchAPI(BASE_URL.url + '/' + APP_API + '/' + PROVISIONING + '/' + PHONE,
                    PUT, body, token).then(res => res)
}

export function ConfirmOTPAPI(phone, otp, token){
    const body = JSON.stringify({
        phone: phone,
        otp: otp
    })
    
    return fetchAPI(BASE_URL.url + '/' + APP_API + '/' + PROVISIONING + '/' + 'otp',
                    PUT, body, token).then(res => res)
}




export function testURL(){
    return fetch('https://vnexpress.net/', {
        method: 'GET'
    }).then(res => {
        console.log(res.status)
    })
}
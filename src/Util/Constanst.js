import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window')
const pointX  = width/375
const pointY = width/375


export const AUTH_API = 'authentication';
export const SIGN_UP = 'sign-up'
export const LOGIN = 'login'
export const NORMAL = 'normal'
export const AUTHORIZATION = 'authorization'
export const PASSWORD = 'password'
export const CHANGE_PASS = 'change-pass'

export {pointX, pointY, width, height}

export const BASE_URL = {
    url : "http://54.255.151.248:55891"
}
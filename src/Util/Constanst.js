import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window')
const pointX  = width/375
const pointY = width/375


export const AUTH_API = 'authentication';
export const SIGN_UP = 'sign-up'
export const LOGIN = 'login'
export const LOGOUT = 'logout'
export const NORMAL = 'normal'
export const AUTHORIZATION = 'authorization'
export const PASSWORD = 'password'
export const CHANGE_PASS = 'change-pass'
export const DETAIL_PROFILE_USER = 'detail-profile-user'
export const UPDATE_AVATAR = 'update-avatar'

export const APP_API = 'app-api'
export const PROVISIONING = 'provisioning'
export const UPDATE_PROFILE = 'update-profile'
export const PHONE = 'phone'
export const HOME = 'home'
export const ADVERTISEMENT = 'advertisement'
export const FRAME_TIME_DAY = 'frame-time-day'
export const FRIENDS = 'friends'
export const REQUEST = 'request'

export {pointX, pointY, width, height}

export const BASE_URL = {
    url : "http://54.255.151.248:55891"
}

export const APP_STATE = {
    isLoading: false,
    token: '',
    user_info: '',
    error: '',
    list_friend: '',
    wait_friend:''

}
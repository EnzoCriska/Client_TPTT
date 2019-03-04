import {LOGING, LOGIN_FAIL, LOGIN_OK, UPDATE_PHONE_NUMBER_SUCCESS_HOME, INFO_LOAD_SUCCESS, INFO_LOAD_FAIL, INFO_LOADING, UPDATING_INFO, UPDATE_INFO_SUCCESS, UPDATE_INFO_FAIL} from '../actions/types';
import { APP_STATE } from '../Util/Constanst';

export default (state = APP_STATE, action) => {
    switch (action.type){

        case LOGING:
            return {
                ...state,
                isLoading: true,
            };
        case LOGIN_OK:
            return {
                ...state,
                user_info: action.user_info,
                token: action.token,
                isLoading:false
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        
        case INFO_LOADING:
            return {
                ... state,
                isLoading: true
            }
        case INFO_LOAD_SUCCESS:
            return {
                ...state,
                user_info: action.payload,
                isLoading: false
            }
        case INFO_LOAD_FAIL:
            return {
                ...state,
                isLoading: false
            }

        case UPDATING_INFO:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_INFO_SUCCESS:
            return {
                ...state,
                user_info: action.payload,
                isLoading: false
            }
        case UPDATE_INFO_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }

        case UPDATE_PHONE_NUMBER_SUCCESS_HOME:
            const data = action.oldState.data
            const userInfo = data.user_info
            const newUserInfo = {
                ...userInfo,
                phone: action.payload
            }
            const newData = {
                ...data,
                user_info: newUserInfo
            }
            return {
                ...state,
                data: newData
            }

        default: 
            return state;
    }
}
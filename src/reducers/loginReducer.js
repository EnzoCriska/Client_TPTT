import {
    LOGING, LOGIN_FAIL, 
    LOGIN_OK, 
    UPDATE_PHONE_NUMBER_SUCCESS_HOME, 
    INFO_LOAD_SUCCESS, 
    INFO_LOAD_FAIL, 
    INFO_LOADING, 
    UPDATING_INFO, 
    UPDATE_INFO_SUCCESS, 
    UPDATE_INFO_FAIL, 
    UPLOAD_AVATAR_SUCCESS, 
    GET_ACCESS_TOKEN_SUCCESS, 
    LOADING_LIST_FRIEND, 
    LOAD_LIST_FRIEND_SUCCESS,
    REFRESH_LIST_FRIEND, 
    LOAD_LIST_FRIEND_FAIL, 
    LOADING_WAIT_FRIEND, 
    LOAD_WAIT_FRIEND_SUCCESS, 
    REFRESH_WAIT_FRIEND, 
    LOAD_WAIT_FRIEND_FAIL
} from '../actions/types';
import { APP_STATE } from '../Util/Constanst';

export default (state = APP_STATE, action) => {
    switch (action.type){
        case GET_ACCESS_TOKEN_SUCCESS:
            return {
                ...state,
                token: action.token,
                user_info: action.user_info
            }
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

        case UPLOAD_AVATAR_SUCCESS:
            return {
                ...state,
                user_info: action.payload
            }

        case LOADING_LIST_FRIEND:
            return {
                ...state,
                isLoading: true
            }
        
        case LOAD_LIST_FRIEND_SUCCESS:
            var list = state.list_friend
            const newList = list.concat(action.payload)
            return {
                ...state,
                list_friend: newList,
                isLoading: false
            }
        case REFRESH_LIST_FRIEND:
            return {
                ...state,
                list_friend : action.payload,
                isLoading: false
            }
    
        case LOAD_LIST_FRIEND_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }

        case LOADING_WAIT_FRIEND:
            return {
                ...state,
                isLoading: true
            }
        
        case LOAD_WAIT_FRIEND_SUCCESS:
            var wait = state.wait_friend
            const newWait = wait.concat(action.payload)
            return {
                ...state,
                wait_friend: newWait,
                isLoading: false
            }
        case REFRESH_WAIT_FRIEND:
        const statea = {
            ...state,
            wait_friend : action.payload,
            isLoading: false
        }
        console.log("state" + statea)
            return statea
    
        case LOAD_WAIT_FRIEND_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }

        default: 
            return state;
    }
}
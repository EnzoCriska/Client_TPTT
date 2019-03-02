import {LOGING, LOGIN_FAIL, LOGIN_OK, UPDATE_PHONE_NUMBER_SUCCESS_HOME} from '../actions/types';

const DEFAULT_STATE = {
    data : [],
    isLogin : false,
    dataLoged : false,
    error : ''
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type){

        case LOGING:
            return {
                ...state,
                isLogin: true,
                data : [],
            };
        case LOGIN_OK:
            return {
                ...state,
                data: action.payload,
                isLogin:false
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLogin: false,
                error: action.error
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
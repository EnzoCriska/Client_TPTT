import {LOGING, LOGIN_FAIL, LOGIN_OK} from '../actions/types';

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


        default: 
            return state;
    }
}
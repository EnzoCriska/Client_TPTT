import {
    START_GET_ACCESS_TOKEN, 
    GET_ACCESS_TOKEN_SUCCESS, 
    FAIL_GET_ACCESS_TOKEN
} from '../actions/types';

const DEFAULT_STATE = {
    accessToken: null,
    refreshToken: null,
    loading: false,
    error: false
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case START_GET_ACCESS_TOKEN:
            return {
                ...state,
                loading:true
            };
        
        case GET_ACCESS_TOKEN_SUCCESS:
            return {
                ...state,
                accessToken: action.token,
                refreshToken: action.refreshToken,
                loading: false
            }

        case FAIL_GET_ACCESS_TOKEN:
            return {
                ...state,
                loading: false,
                error: true
            }
    }
}
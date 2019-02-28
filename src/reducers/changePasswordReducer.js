import {
    PASSWORD_CHANGE_FAIL,
    PASSWORD_CHANGE_SUCCESS,
    PASSWORD_CHANGING
} from '../actions/types';

const DEFAULT_STATE = {
    data: [],
    isChanging: false,
    error: ''
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){

        case PASSWORD_CHANGING:
            console.log("Changing...")
            return {
                ...state,
                isChanging: true,
                data: []
            };
        case PASSWORD_CHANGE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isChanging: false,
            };
        case PASSWORD_CHANGE_FAIL:
            return {
                ...state,
                isChanging:false,
                error:action.error
            };
        default:
            return state;
    }
}
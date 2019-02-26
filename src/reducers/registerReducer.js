import {START_REGISTER, REGISTER_FAIL, REGISTER_OK} from '../actions/types';

const DEFAULT_STATE = {
    data: [],
    isRegisting:false,
    error: ''
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case START_REGISTER:
            return {
                ...state,
                isRegisting: true,
                data:[]
            };
        case REGISTER_OK:
            return {
                ...state,
                data: action.payload,
                isRegisting:false
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isRegisting: false,
                error: action.error
            };
        default:
            return state
    }
}
import {INFO_LOADING, INFO_LOAD_FAIL, INFO_LOAD_SUCCESS, UPDATING_INFO, UPDATE_INFO_SUCCESS, UPDATE_INFO_FAIL, UPLOADING_AVATAR, UPLOAD_AVATAR_SUCCESS, UPLOAD_AVATAR_FAIL, UPDATE_PHONE_NUMBER_SUCCESS_INFO} from '../actions/types';

const DEFAULT_STATE = {
    info : [],
    isLoading : false,
    dataLoged : false,
    error : ''
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type){

        case INFO_LOADING:
            return {
                ...state,
                isLoading: true,
                info : action.preState,
            };
        case INFO_LOAD_SUCCESS:
            return {
                ...state,
                info: action.payload,
                isLoading:false
            };
        case INFO_LOAD_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case UPDATING_INFO:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                info: action.payload
            }
        case UPDATE_INFO_FAIL:
            return{
                ...state,
                isLoading: false,
                error: action.error
            }
        case UPLOADING_AVATAR:
            return {
                ...state
            }
        case UPLOAD_AVATAR_SUCCESS:
            return{
                ...state,
                info: action.payload
            }
        case UPLOAD_AVATAR_FAIL:
            return{
                ...state,
                error: action.error
            }
        case UPDATE_PHONE_NUMBER_SUCCESS_INFO:
            const oldState = action.oldState
            const info = oldState.info
            const newInfo = {
                ...info,
                phone: action.payload
            }
            return {
                ...oldState,
                info: newInfo
            }


        default: 
            return state;
    }
}
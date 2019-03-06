import {
    LOAD_LIST_FRIEND_FAIL,
    LOADING_LIST_FRIEND,
    LOAD_LIST_FRIEND_SUCCESS,
    REFRESH_LIST_FRIEND
} from './types';
import { LoadListFriend } from '../Network/LoadDataAPI';
import alertMsgErrorCallApi from '../Util/Component Util/alertMsgErrorCallApi';

export function loadingListFriend(){
    return {
        type: LOADING_LIST_FRIEND,
    }
}

export function loadSuccessListFriend(data){
    return {
        type: LOAD_LIST_FRIEND_SUCCESS,
        payload: data,
    }
}

export function refreshSuccessListFriend(data){
    return {
        type:  REFRESH_LIST_FRIEND,
        payload: data,
    }
}

export function loadFailListFriend(err){
    return {
        type: LOAD_LIST_FRIEND_FAIL,
        error: err
    }
}

export function listFriendActions(self, type, token, start, limit){
    return (dispatch) => {
        dispatch(loadingListFriend())
        LoadListFriend(token, start, limit).then(res => {
            const body = JSON.parse(res._bodyText)
            // console.log(body)
            if(body.code === 200){
                if (type === 'refresh'){
                    console.log("befored dispatch")
                    dispatch(refreshSuccessListFriend(body.rows))
                    console.log("affter dispatch")

                }else{
                    dispatch(loadSuccessListFriend(body.rows))
                }
            }else{
                dispatch(loadFailListFriend(body.message))
                alertMsgErrorCallApi(body.code, body.message)
            }
        })

    }
}
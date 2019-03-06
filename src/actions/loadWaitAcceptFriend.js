import { LOADING_WAIT_FRIEND, LOAD_WAIT_FRIEND_SUCCESS, REFRESH_WAIT_FRIEND, LOAD_WAIT_FRIEND_FAIL } from "./types";
import { LoadWaitFriend } from "../Network/LoadDataAPI";
import alertMsgErrorCallApi from "../Util/Component Util/alertMsgErrorCallApi";

export function loadingWaitFiends(currentState){
    return{
        type: LOADING_WAIT_FRIEND,
    }
}

export function loadSuccessWaitFriend(data){
    return {
        type: LOAD_WAIT_FRIEND_SUCCESS,
        payload: data,
    }
}

export function refreshSucessWaitFriend(data){
    return {
        type: REFRESH_WAIT_FRIEND,
        payload: data,
    }
}

export function loadFailWaitFriend(err){
    return {
        type: LOAD_WAIT_FRIEND_FAIL,
        error: err
    }
}

export function loadWaitFriend(self, type, token, start, limit){
    return (dispatch) => {
        dispatch(loadingWaitFiends())

        LoadWaitFriend(token, start, limit).then(res => {
            // console.log(res)
            const body = JSON.parse(res._bodyText)
            console.log(body)
            if(body.code === 200){
                if (type === 'refresh'){
                    console.log("befored dispatch")
                    dispatch(refreshSucessWaitFriend(body.rows))
                    console.log("affter dispatch")
                }
                else{
                    dispatch(loadSuccessWaitFriend(body.rows))
                }
            }else{
                dispatch(loadFailWaitFriend(body.message))
                alertMsgErrorCallApi(body.code, body.message)
            }
        })
    }
}

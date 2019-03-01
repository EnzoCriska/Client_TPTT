import {
    UPDATE_INFO_FAIL, UPDATE_INFO_SUCCESS, UPDATING_INFO, UPLOADING_AVATAR, UPLOAD_AVATAR_SUCCESS, UPLOAD_AVATAR_FAIL
} from './types';
import { CheckNetwork } from '../Util/UtilFunction/CheckNetworkConnection';
import { UploadImageAPI } from '../Network/ProvisioningAPI';
import alertMsgErrorCallApi from '../Util/Component Util/alertMsgErrorCallApi';


export function uploadingAvatar(state){
    return {
        type: UPLOADING_AVATAR,
        state : state
    }
}

export function uploadSuccess(data){
    return {
        type:  UPLOAD_AVATAR_SUCCESS,
        payload: data
    }
}

export function uploadFail(err){
    return {
        type: UPLOAD_AVATAR_FAIL,
        error: err
    }
}

export function uploadAvatar(self, state, avatarUrl, type, token){
    return (dispatch) => {
        CheckNetwork().then(connection => {
            if (connection.type === 'none'){
                alert(Strings.FAIL, 
                      Strings.INTERNET_NOT_CONNECTED  , 
                        () => console.log("please connect"))
            }else{
                dispatch(uploadingAvatar(state))

                UploadImageAPI(avatarUrl, type, token).then(res => {
                    const body = JSON.parse(res._bodyText)
                    
                    if(body.code === 200){
                        const info = {
                            ...state,
                            avatar: avatarUrl
                        }

                        dispatch(uploadSuccess(info))
                    }else{
                        alertMsgErrorCallApi(body.code, body.message)
                    }
                })
            }
        })
    }
}
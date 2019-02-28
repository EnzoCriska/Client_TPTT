import {
    PASSWORD_CHANGE_FAIL,
    PASSWORD_CHANGE_SUCCESS,
    PASSWORD_CHANGING
} from './types';
import { ChangePasswordAPI } from '../Network/ProvisioningAPI';
import alertMsgErrorCallApi from '../Util/Component Util/alertMsgErrorCallApi';
import { CheckNetwork } from '../Util/UtilFunction/CheckNetworkConnection';
import { saveAccessToken } from '../Util/UtilFunction/asyncStorage';

export function changingPassword(){
    return {
        type: PASSWORD_CHANGING
    }
}

export function changePasswordSuccess(data){
    return {
        type: PASSWORD_CHANGE_SUCCESS,
        payload: data
    }
}

export function changePasswordFail(error){
    return {
        type: PASSWORD_CHANGE_FAIL,
        error:error
    }
}


export function changePassword(self, oldPassword, newPassword, token){
    
    return (dispatch) => {
        CheckNetwork().then(connection => {
            if (connection.type === 'none'){
                alert(Strings.FAIL, 
                      Strings.INTERNET_NOT_CONNECTED  , 
                        () => console.log("please connect"))
            }else{
                dispatch(changingPassword())

                ChangePasswordAPI(oldPassword, newPassword, token).then((data) =>{
                    const body = JSON.parse(data._bodyText)
                    if(body.code === 200){
                        
                        saveAccessToken(body.token)
                        dispatch(changePasswordSuccess(body))
                        self.props.navigation.navigate("Info")
                    }else{
                        alertMsgErrorCallApi(body.code, body.message)
                        dispatch(changePasswordFail(body.message))
                    }
                })
                .catch((error) => dispatch(changePasswordFail(error)))
            }
        })
    }
}
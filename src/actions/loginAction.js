import {
    LOGING, LOGIN_FAIL, LOGIN_OK
} from './types';
import { SigIn, testURL } from '../Network/ProvisioningAPI';
import { CheckNetwork } from '../Util/UtilFunction/CheckNetworkConnection';
import alertMsgErrorCallApi from '../Util/Component Util/alertMsgErrorCallApi';
import { saveAccessToken, getAccessToken, saveStatusLogin } from '../Util/UtilFunction/asyncStorage';




export function login(){
    
    return{
        type:LOGING
    }
}

export function loginSuccess(data){
    
    return {
        type:LOGIN_OK,
        payload:data
    }
}

export function loginFail(error){

    return {
        type: LOGIN_FAIL,
        error: error
    }
}

export function loginDefault(self, username, hashPass, device_id, os_id) {

    return (dispatch) => {
        CheckNetwork().then(connection => {
            if (connection.type === 'none'){
                alert(Strings.FAIL, 
                      Strings.INTERNET_NOT_CONNECTED  , 
                        () => console.log("please connect"))
            }else{
                dispatch(login());
                // Call API 
                testURL()
                SigIn(username, hashPass, device_id, os_id).then((data) => {
                    var body = JSON.parse(data._bodyText)
                    console.log(body)
                    if(body.code === 200){

                        saveAccessToken(body.token)
                        saveStatusLogin(body.user_info)
                        dispatch(loginSuccess(body))
                        if(body.login_first_time){
                            self.props.navigation.navigate('updateProfile')
                        }else{
                            self.props.navigation.navigate('bottomTabStack')
                        }
                        
                    }else{
                        alertMsgErrorCallApi(body.code, body.message)
                        dispatch(loginFail(body.message))
                    }
                    
                })
                    .catch((error) => dispatch(loginFail(error)))
            }
        })
        
    }
}
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

export function loginSuccess(user_info, token){
    
    return {
        type:LOGIN_OK,
        user_info:user_info,
        token:token
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
                dispatch(login());
                // Call API 
                testURL()
                SigIn(username, hashPass, device_id, os_id).then((data) => {
                    var body = JSON.parse(data._bodyText)
                    console.log(body)

                    if(body.code === 200){

                        saveAccessToken(body.token)
                        saveStatusLogin(body.user_info)
                        dispatch(loginSuccess(body.user_info, body.token))
                        
                        if(body.login_first_time){
                            self.props.navigation.navigate('updateProfile', {router: 'toHome'})
                        }else{
                            console.log("To Home")
                            self.props.navigation.navigate('bottomTabStack')
                        }
                        
                    }else{
                        alertMsgErrorCallApi(body.code, body.message)
                        dispatch(loginFail(body.message))
                    }
                    
                })
                    .catch((error) => dispatch(loginFail(error)))
            }
    //     })
        
    // }
}
import {REGISTER_FAIL, START_REGISTER, REGISTER_OK} from './types';
import {SigUp} from '../Network/ProvisioningAPI';
import alertMsgErrorCallApi from '../Util/Component Util/alertMsgErrorCallApi';
import { CheckNetwork } from '../Util/CheckNetworkConnection';
import {alert} from '../Util/Component Util/alert';
import Strings from '../Util/Strings';

export function startRegister(){
    return {
        type: START_REGISTER
    }
}

export function registerSuccess(data){
    return{
        type: REGISTER_OK,
        payload: data
    }
}

export function registerFail(error){
    return{
        type: REGISTER_FAIL,
        error: error
    }
}

export function registerDefault(self, userName, hashPass, device_id, os_id){
    return (dispatch) =>{
        CheckNetwork().then(connection => {
            console.log(connection)
            if (connection.type === 'none'){
                alert(Strings.FAIL, 
                      Strings.INTERNET_NOT_CONNECTED  , 
                        () => console.log("please connect"))
            }else{
                dispatch(startRegister());
                // CALL API
                SigUp(userName, hashPass, device_id, os_id).then((data) => {
                    var body = JSON.parse(data._bodyText)
                    
                    if(body.code === 200){
                        dispatch(registerSuccess(data._bodyText))
                        self.props.navigation.navigate('Login')
                    }else {
                        alertMsgErrorCallApi(body.code, body.message)
                        dispatch(registerFail(body.message))
                    }
                    
                })
            }
        })
        
    }
}
import {
    UPDATE_INFO_FAIL,
    UPDATE_INFO_SUCCESS,
    UPDATING_INFO
} from './types';
import { CheckNetwork } from '../Util/UtilFunction/CheckNetworkConnection';
import { UpdateProfile } from '../Network/ProvisioningAPI';


export function updatingInfo(state){
    return {
        type: UPDATING_INFO,
        state: state
    }
}

export function updateInfoSuccess(newInfo){
    return {
        type: UPDATE_INFO_SUCCESS,
        payload: newInfo
    }
}

export function updateInfoFail(err){
    return {
        type: UPDATE_INFO_FAIL,
        error: err
    }
}

export function InfoUpdateAction(self, state, display_name, address, gender, token){
    return (dispatch) => {
        CheckNetwork().then(connection => {
            if (connection.type === 'none'){
                alert(Strings.FAIL, 
                      Strings.INTERNET_NOT_CONNECTED  , 
                        () => console.log("please connect"))
            }else{
                dispatch(updatingInfo(state))

                UpdateProfile(display_name, address,gender, token).then(res => {
                    console.log(res._bodyText)
                    const body = JSON.parse(res._bodyText)
                    if (body.code === 200){

                        const newInfo = {
                            ...state,
                            address: address,
                            display_name: display_name,
                            gender: gender,
                        }

                      dispatch(updateInfoSuccess(newInfo))
                        if(self.props.navigation.getParam('router') === 'toHome'){
                            self.props.navigation.navigate('bottomTabStack')
                        }else{
                            self.props.navigation.navigate('Info')
                        }
                      
                    }else{
                      alertMsgErrorCallApi(body.code, body.message)
                      dispatch(updateInfoFail(body.message))
                    }
                  })
            
            }
        })
    }
}

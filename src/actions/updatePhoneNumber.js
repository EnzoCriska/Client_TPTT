import {
    UPDATING_PHONE_NUMBER,
    UPDATE_PHONE_NUMBER_FAIL, 
    UPDATE_PHONE_NUMBER_SUCCESS_HOME,
    UPDATE_PHONE_NUMBER_SUCCESS_INFO
} from './types';
import { UpdatePhoneNumberAPI, ConfirmOTPAPI } from '../Network/ProvisioningAPI';
import alertMsgErrorCallApi from '../Util/Component Util/alertMsgErrorCallApi';



export function updatingPhoneNumber(currentState){
    return {
        type: UPDATING_PHONE_NUMBER,
        state:currentState
    }
}

export function updatePhoneNumberSuccessHome(homeState, data){
    return {
        type: UPDATE_PHONE_NUMBER_SUCCESS_HOME,
        oldState: homeState,
        payload: data
    }
}

export function updatePhoneNumberSuccessInfo(state,data){
    return {
        type: UPDATE_PHONE_NUMBER_SUCCESS_INFO,
        oldState: state,
        payload: data
    }
}

export function updatePhoneNumberFail(err){
    return {
        type: UPDATE_PHONE_NUMBER_FAIL,
        error:err
    }
}

export function updatePhoneNumberActions(self,type, state, phone, otp, token){
    return (dispatch) => {
        dispatch(updatingPhoneNumber(state))
        // Call API
        console.log(typeof otp)
        ConfirmOTPAPI(phone,otp, token).then(res =>{
            const body = JSON.parse(res._bodyText)
            if(body.code === 200){
                // Update state
                if(type === 'fromInfo'){
                    const stateLoadInfo = state.loadInfo
                    dispatch(updatePhoneNumberSuccessInfo(stateLoadInfo, phone))
                    self.props.navigation.navigate('Info')
                }else{
                    const homeState = state.data
                    dispatch(updatePhoneNumberSuccessHome(homeState, phone))
                    self.props.navigation.navigate('HomeScreen')
                }
            }else {
                alertMsgErrorCallApi(body.code, body.message)
                dispatch(updatePhoneNumberFail(body.message))
            }
        })
        .catch(err=>{
            dispatch(updatePhoneNumberFail(err))
        })
    }
}
import {
    LOGING, LOGIN_FAIL, LOGIN_OK
} from './types';
import { SigIn } from '../Network/ProvisioningAPI';


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

export function loginDefault(self) {

    return (dispatch) => {
        dispatch(login());
        // Call API 
        SigIn('0909078', 'ewersd').then((data) => {
            dispatch(loginSuccess(data))
            self.props.navigation.navigate('bottomTabStack')
        })
            .catch((error) => dispatch(loginFail(error)))
    }
}
import {
    GET_ACCESS_TOKEN_SUCCESS, 
    START_GET_ACCESS_TOKEN,
    FAIL_GET_ACCESS_TOKEN
} from './types';

import {
    getRefreshToken, getAccessToken, saveAccessToken, saveRefreshToken
} from '../Util/UtilFunction/asyncStorage';

export function startGetAccessToken(){
    return {
        type:START_GET_ACCESS_TOKEN
    }
}

export function getAccessTokenSuccess(token, user_info){
    return {
        type: GET_ACCESS_TOKEN_SUCCESS,
        token: token,
        user_info: user_info
    }
}

export function getAccessTokenFail(){
    return {
        type: FAIL_GET_ACCESS_TOKEN
    }
}


export function exchangeAccessToken(self, token, user_info){

    return (dispatch) => {
        console.log(user_info)
        if(user_info){
            dispatch(getAccessTokenSuccess(token, user_info))
            self.props.navigation.navigate('bottomTabStack')
        }else{
            self.props.navigation.navigate('Login')
        }
    }
}
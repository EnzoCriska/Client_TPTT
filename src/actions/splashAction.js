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

export function getAccessTokenSuccess(token, refreshToken){
    return {
        type: GET_ACCESS_TOKEN_SUCCESS,
        token: token,
        refreshToken: refreshToken
    }
}

export function getAccessTokenFail(){
    return {
        type: FAIL_GET_ACCESS_TOKEN
    }
}


export function exchangeAccessToken(self){

    return (dispatch) => {

        getRefreshToken()
            .then(refreshToken => {
                console.log(">>>>>>>"+refreshToken)
                if (refreshToken === ''){
                    self.props.navigation.navigate('Login')
                }
                //Else feth token by refreshToken
                else{
                    dispatch(startGetAccessToken())
                    // API get access Token
                    dispatch(getAccessTokenSuccess("abc", "bca"))
                    // seft.props.navigation.navigate('Login')
                }
            })

    }
}
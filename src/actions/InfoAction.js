import {
    INFO_LOADING, INFO_LOAD_FAIL, INFO_LOAD_SUCCESS
} from './types';

import { CheckNetwork } from '../Util/UtilFunction/CheckNetworkConnection';
import alertMsgErrorCallApi from '../Util/Component Util/alertMsgErrorCallApi';

import { LoadInfoAPI } from '../Network/LoadDataAPI';




export function loadingInfo(infoState){
    
    return{
        type:INFO_LOADING,
        preData: infoState
    }
}

export function loadSuccessInfo(data){
    
    return {
        type:INFO_LOAD_SUCCESS,
        payload:data
    }
}

export function loadFailInfo(error){

    return {
        type: INFO_LOAD_FAIL,
        error: error
    }
}

export function loadInfoAction(self, preInfo, token) {

    return (dispatch) => {
        CheckNetwork().then(connection => {
            if (connection.type === 'none'){
                alert(Strings.FAIL, 
                      Strings.INTERNET_NOT_CONNECTED  , 
                        () => console.log("please connect"))
            }else{
                dispatch(loadingInfo(preInfo));
                // Call API 

                LoadInfoAPI(token).then((data) => {
                    var body = JSON.parse(data._bodyText)
                    console.log(body)
                    if(body.code === 200){

                        dispatch(loadSuccessInfo(body.item))
                        
                    }else{
                        alertMsgErrorCallApi(body.code, body.message)
                        dispatch(loadFailInfo(body.message))
                    }
                    
                })
                    .catch((error) => dispatch(loginFail(error)))
            }
        })
        
    }
}
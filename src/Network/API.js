import { CheckNetwork } from "../Util/UtilFunction/CheckNetworkConnection";

export function fetchAPI(URL, method, body, token){
    var HEADER;
    if (token){
        HEADER = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            token: token,
        }
    }else{
        HEADER = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }

    // CheckNetwork().then(connection => {
    //     if (connection.type === 'none'){
    //         alert(Strings.FAIL, 
    //               Strings.INTERNET_NOT_CONNECTED  , 
    //                 () => console.log("please connect"))
    //     }else{
        
        
    //     }

    // })

    return fetch(URL, {
        method: method,
        headers: HEADER,
        body: body
    })
    .then( res=> res)
    .catch(err => {
        console.log(err)
    })
}
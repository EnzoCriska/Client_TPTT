
export function fetch(URL, method, body, token){
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
import { BASE_URL, AUTH_API, SIGN_UP, LOGIN, NORMAL } from "../Util/Constanst";

const HEADER = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

export function SigUp(userName, password, device_id, os_id){
    return fetch(BASE_URL.url + '/' + AUTH_API + '/' + SIGN_UP, {
        method: 'POST',
        headers: HEADER,
        body: JSON.stringify({
            username: userName,
            password: password,
            device_id: device_id,
            os_id: os_id
          }),
        })
        .then(res =>
           res
        )
        .catch(err => {
            console.error(err)
        });
}

export function SigIn(username, password, device_id, os_id){
    return fetch(BASE_URL.url + '/' + AUTH_API + '/' + LOGIN + '/' + NORMAL, {
        method: 'POST',
        headers: HEADER,
        body: JSON.stringify({
            username: username,
            password: password,
            device_id: device_id,
            os_id:os_id
          }),
        })
        .then(res =>
            res
        )
        .catch(err => {
            console.error(err)
        });
}


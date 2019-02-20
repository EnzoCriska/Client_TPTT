const URL = "https://facebook.github.io/react-native/movies.json"
export function SigIn(phone, password){
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phoneNumber: phone,
            password: password,
          }),
        })
        .then(res =>
            {
                res = {
                    userID: "1243451",
                    userName: "Phạm Huyền Trang",
                    userAvatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                    score: 10,
                    index:115,
                    nextRoom: {
                        roomID:12345,
                        roomName: 'defauld Room',
                        startTime: '25/1/2019 21:17:0'
                    }
                }
                return res
            }
        )
        .catch(err => {
            console.error(err)
        });
}


export function JoinNowGame(player,callback){
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: player,
          }),
        })
        .then(res =>
            res
        )
        .catch(err => {
            console.error(err)
        });
}
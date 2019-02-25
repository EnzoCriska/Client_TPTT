const URL = "https://facebook.github.io/react-native/movies.json"



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
import { firebaseApp } from "../Util/firebase";

export function SendMessageFirebase(message){
    return firebaseApp.database().ref('Room/').push({message}).then((result) => {
        // console.log(result)
    }).catch((err) => {
        
    });
}

export function ReadMessageData(callback) {
    firebaseApp.database().ref('Room/').on('value', function (snapshot) {
        // console.log(snapshot.val())
        var result = snapshot.val()
        var list = []
        for (key in result){
            list.push(result[key].message)
        }
        callback(list)
    });
}
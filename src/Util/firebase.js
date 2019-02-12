
  import firebase from '@firebase/app'
  import '@firebase/database'
  var config = {
    apiKey: "AIzaSyBRczhUaJE2Rx1fjAb9DOerauQSgddZEOo",
    authDomain: "client-tptt.firebaseapp.com",
    databaseURL: "https://client-tptt.firebaseio.com",
    projectId: "client-tptt",
    storageBucket: "",
    messagingSenderId: "2760121982"
  };
export const firebaseApp =   firebase.initializeApp(config);

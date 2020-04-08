import * as firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyBVL9sShddDo02vK118hcdvz_xwa3LeQV0",
    authDomain: "qsiprojects.firebaseapp.com",
    databaseURL: "https://qsiprojects.firebaseio.com",
    projectId: "qsiprojects",
    storageBucket: "qsiprojects.appspot.com",
    messagingSenderId: "375157283481",
    appId: "1:375157283481:web:19a0b4c2534e5fd55f3608",
    measurementId: "G-KQTXT47X5R"
}
// Initialize Firebase
export const firebaseImpl = firebase.initializeApp(firebaseConfig)
export const firebaseDatabase = firebase.database()
